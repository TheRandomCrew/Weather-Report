import Turnstone from 'turnstone'
import cityList from '../data/cityList.json'

const SearchInput = ({ onSelect }) => {
	const listbox = {
		data: cityList.map((city) => ({
			...city,
			displayName: `${city.name}, ${city.country}`,
		})),
		searchType: 'startswith',
		displayField: 'displayName',
	}

	return (
		<div className="lg:px-36 md:px-16 px-5">
			<Turnstone
				debounceWait={250}
				id="search"
				listbox={listbox}
				listboxIsImmutable={true}
				matchText={true}
				maxItems={10}
				name="search"
				noItemsMessage="We found no places that match your search"
				placeholder="Enter city or region"
				typeahead={true}
				styles={{
					input:
						'w-full h-12 border-b-2 border-b-white py-2 px-5 text-xl outline-none bg-transparent text-white',
					inputFocus:
						'w-full h-12 border-b-2 border-b-white py-2 px-5 text-xl outline-none bg-transparent text-white',
					query: 'text-slate-800 placeholder-slate-400 text-xl font-medium',

					cancelButton: `absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-blue-400 inline-flex sm:hidden`,
					clearButton:
						'absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center text-slate-400 hover:text-rose-400',
					listbox:
						'w-full bg-white sm:border sm:border-blue-300 text-left sm:mt-2 p-2 sm:drop-shadow-xl',
					groupHeading:
						'cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-rose-300',
					item: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-slate-700',
					highlightedItem:
						'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-slate-700 rounded bg-blue-50',
				}}
				onSelect={(e) => e?.id && onSelect(e.id)}
			/>
		</div>
	)
}

export default SearchInput
