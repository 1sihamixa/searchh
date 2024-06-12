const list = document.getElementById("lis");
const search = document.getElementById("searchBar"); 
let arr = [];
search.addEventListener("input",(e) => {
    const searchStr= e.target.value.toLowerCase();
    const filted = arr.filter(place => {
        return (place.city.toLowerCase().includes(searchStr) ||
         place.state.toLowerCase().includes(searchStr)); 
    });
    displayPlace(filted);
});    
const loaded = async () => {
    try {
        const res = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json");
        arr = await res.json();
        displayPlace(arr);
        console.log(arr);
    } catch (err) {
        console.error(err);
    }
};
const displayPlace = (places) => {
    const str = places.map((place) => {
        return `<li class="place">
        <p id="btn"></p><br>
        <button id="but" onclick=
        "document.getElementById('btn').innerHTML =
         'city : ${place.city}<br>growth_from_2000_to_2013 : ${place.growth_from_2000_to_2013}<br>latitude : ${place.latitude}<br>longitude : ${place.longitude}<br>population : ${place.population}<br>rank : ${place.rank}<br>state : ${place.state}';">${place.city}</button>
        </li>`;
    })
    .join('');
    list.innerHTML = str;
};
loaded();