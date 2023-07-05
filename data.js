
// const fs = require("fs");

// let rawData = fs.readFileSync("./JSON_data/data.json");
// let data = JSON.parse(rawData);

// function printCityNames(state) {
//   let cityNames = data
//     .filter((entry) => entry.state_name === state)
//     .map((entry) => entry.city);
//   console.log(cityNames);
// }
// let state = "Mahārāshtra";
// printCityNames(state);


// let fs = require('fs')

// let rowdata = fs.readFileSync("./JSON_data/data.json")

// let data = JSON.parse(rowdata)

// function sort_population(state){
//     let population = data.filter((entry)=> entry.state_name === state).map((entry)=> entry.population)
//     console.log(population.sort())
//     // for(i=0; i<population.length; i++){
//     // console.log((population[i]))
//     // }
// }

// let state = "Mahārāshtra";
// sort_population(state);


// const fs = require("fs");

// const rowdata = fs.readFileSync("./JSON_data/data.json");
// const data = JSON.parse(rowdata);

// function getStateWithMostCities() {
//   const stateCounts = {};

//   data.forEach((entry) => {
//     const stateName = entry.state_name;
//     if (stateCounts[stateName]) {
//       stateCounts[stateName]++;
//     } else {
//       stateCounts[stateName] = 1;
//     }
//   });

//   const states = Object.keys(stateCounts);
//   const stateWithMostCities = states.reduce((a, b) =>
//     stateCounts[a] > stateCounts[b] ? a : b
//   );

//   console.log(stateWithMostCities);
// }

// getStateWithMostCities();


class data{

    name = "sachin"
    age = 24

     a =function(){
    console.log(this.name)
}

}

a();