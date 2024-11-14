// Toggle Search Bar Visibility and Fetch Weather Data

const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button);

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search');
    });
};
toggleSearch('search-bar', 'search-button');

let input = document.querySelector(".search__input");
let btn = document.querySelector("#search-button");
let cityname = document.querySelector("#head");
let citytime = document.querySelector("#papa");
let citytec = document.querySelector("#head5");

async function getdata(citynaam) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=28ac4e187a80483a90072338241111&q=${citynaam}&aqi=yes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
      
    }
}

btn.addEventListener("click", async () => {
    let user = input.value;
    let result = await getdata(user);
    if (result) {
        cityname.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
        citytime.innerText = `${result.location.localtime}`;
        citytec.innerText = `${result.current.temp_c}°C`;
    }
});
