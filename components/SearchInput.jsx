import { useState } from 'react';
import Turnstone from 'turnstone';
import cityList from '../data/cityList.json';

const styles = {
  input: 'searchInput',
  query: 'searchInputQuery',
  listbox: 'searchResults',
  item: 'searchResultsItem',
  highlightedItem: 'searchResultsItemHover',
};

const SearchInput = ({ onSearch }) => {
  const [queryCityId, setQueryCityId] = useState(null);

  const listbox = {
    data: cityList.map((city) => ({
      ...city,
      displayName: `${city.name}, ${city.country}`,
    })),
    searchType: 'startswith',
    displayField: 'displayName',
  };

  const onSelectCity = (city) => {
    setQueryCityId(city.id);
    onSearch(city.id);
  };

  return (
    <div className="lg:px-36 md:px-16 px-5">
      <div className="relative">
        <Turnstone
          debounceWait={250}
          id="search"
          listbox={listbox}
          listboxIsImmutable={true}
          matchText={true}
          maxItems={10}
          noItemsMessage="We found no places that match your search"
          placeholder="Enter city or region"
          typeahead={false}
          styles={styles}
          onSelect={(event) => event?.id && onSelectCity(event)}
          onEnter={() => onSearch(queryCityId)}
        />
        <button
          type="button"
          className="searchButton"
          onClick={() => onSearch(queryCityId)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
