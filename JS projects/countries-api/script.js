const countriesContainer = document.getElementById("countriesContainer");
const searchInput = document.getElementById("searchInput");
const searchBTN = document.getElementById("searchBTN");

let allCounties = [];

async function getAllCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region,languages",
  );

  const countriesData = await response.json();
  console.log(countriesData);
  displayCountries(countriesData);
}


function displayCountries(countries) {
    countries.forEach((country) => {
    const currencyData = Object.values(country.currencies);
    console.log(currency);
    
    countriesContainer.innerHTML += `
            <div class = "country-card">
                <img src = "${country.flags.png}" />

                <div class = country-info>
                    <p class = "Cname">
                        Name: ${country.name.common},
                        Official name: ${country.name.official}
                    </p>
                    <p class = "Ccapitalcity">Capital city: ${country.capital}</p>
                    <p class = "Clang">Currency: ${currency}</p>
                    <p class = "">Language: ${country.languages}</p>
                    <p class = ""></p>
                    </div>
                    

            </div>

            `;
  });
}

getAllCountries();

// const user= {
//     age:23,
//     name:'ori',
//     city:'nahariya'
// }

// console.log(user);

// console.log(Object.values(user));
