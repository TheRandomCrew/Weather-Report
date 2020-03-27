const HomeDescription = `Three levels of cascading vegetable gardens churning out 
    the sweetest produce and a team of outrageously talented cooks and from-of-house 
    staff combine to make Plaza Athénée the ultimate restaurant experience.`;

const menuDescription = `We want your time with us to count. So along with an inviting 
    atmosphere where everyone can be comfortable, we offer delectable handcrafted appetizers,
    a glass of wine and the caring and service that you deserve.`;

const contactDescription = `We wait you will excellent quality. Call to 
    <b>+1 313 5431 331</b> or email us for a reservation request 
    to <a href="mailto:service@plazaathenee.chef"><b>service@plazaathenee.chef</b></a>`;

const dishImages = [
  ['https://source.unsplash.com/awj7sRviVXo/640x960', 'Meal with salmon and zucchini'],
  ['https://source.unsplash.com/V9LP6-y8e5w/640x415', 'Avocado toast with beet hummus and salad greens'],
  ['https://source.unsplash.com/w6ftFbPCs9I/640x960', 'Autumn Soup'],
  ['https://source.unsplash.com/HF16IxB_tO4/640x505', 'Fall salad'],
  ['https://source.unsplash.com/fdlZBWIP0aM/640x907', 'Avocado and Egg Toast'],
  ['https://source.unsplash.com/Yr4n8O_3UPc/640x423', 'Pork Chop Dinner'],
];

const tabs = (currentTab = 'Home') => `
    <div class="global-header ${currentTab === 'Menu' ? 'dark-bg' : 'yellow-bg'}">
        <nav class="big-container">
            <ul>
                <li ${currentTab === 'Home' ? 'class="current"' : ''} id="home">Home</li>
                <li ${currentTab === 'Menu' ? 'class="current"' : ''} id="menu">Menu</li>
                <li ${currentTab === 'Contact' ? 'class="current"' : ''} id="contact">Contact</li>
            </ul>
        </nav>
    </div>
`;

const hero = (title = 'Plaza Athénée', description = HomeDescription, imageClass = 'home') => `
    <div class="hero">
        <div class="hero-text ${imageClass === 'menu' ? '' : 'dark-bg'}">
            <h2 class="title" style="${imageClass === 'menu' ? '' : 'color: #ead975;'}">${title}</h2>
            <p>${description}</p>
        </div>
        <div class="hero-image ${imageClass}"></div>
    </div>
`;

const dishes = (title, imageURL, id) => `
  <article id="${id}" class="location-listing">
    <p class="location-title">${title}</p>
    <div class="location-image">
      <img src="${imageURL}" alt="${title}">
    </div>
  </article>
`;

export const home = () => `
    ${tabs('Home')}
    <div class="page-body split yellow-dark-gradient" id="tab-container">
        <div class="big-container tab-content">
            ${hero()}
        </div>
    </div>
`;

export const menu = () => `
  ${tabs('Menu')}
  <div class="page-body split dark-yellow-gradient" id="tab-container">
    <div class="big-container tab-content">
      ${hero('Menu', menuDescription, 'menu')}
      <div class="grid-container">
        ${dishImages.map((image, id) => dishes(image[1], image[0], id)).join('')}
      </div>      
    </div>
  </div>
`;

export const contact = () => `
    ${tabs('Contact')}
    <div class="page-body split yellow-dark-gradient" id="tab-container">
        <div class="big-container tab-content">
            ${hero('We are here to serve you', contactDescription, 'contact')}
        </div>
    </div>
`;