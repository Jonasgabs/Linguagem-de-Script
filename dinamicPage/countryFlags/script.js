import { Countries } from "./countries.js";

function countryCard(countries){
    let elements = ""
    const keys = Object.keys(countries)
    keys.forEach(key => {
        elements += `
            <div class="grid grid-rows-2 text-lg text-center place-items-center font-semibold text-gray-700">
                <img class="w-20 h-20" src="./png100px/${key.toLowerCase()}.png">
                <p>${countries[key]}</p>
            </div>\n`
    });
    return elements    
}


const countryGrid = document.querySelector('.country');

countryGrid.innerHTML = countryCard(Countries);