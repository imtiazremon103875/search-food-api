const loadCountries = () => {
    fetch('https://restcountries.com/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountry(data))
}
loadCountries()


const displayCountry = countries => {


    countries.forEach(country => {
        console.log(country)
    });
    // const countries = data.results;
    // const countryDiv = document.getElementById("countries")
    // for (const country of countries) {

    //     const p = document.createElement("P");
    //     p.innerText = ``

    //     buddiesDiv.appendChild(p)
    // }
}