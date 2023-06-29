
let familyData = {
  name: "shivram bhai",
  age: 60,
  sons: [
    {
      id:1,
      name: "sanjay bhai",
      age: 45,
      dob: 10 / 6 / 1977,
      occupation: "superviser",
      vehicals: "shine",
      sons: [
        {
          name: "sachin",
          age: 23,
          dob: 29 / 12 / 1999,
        },
        {
          name: "ajay",
          age: 21,
          dob: 28 / 1 / 2001,
        },
      ],
    },
    {
      id:2,
      name: "yogesh bhai",
      age: 35,
      dob: 14 / 6 / 1985,
      occupation: "superviser",
      vehicals: "fz-s",
      sons: [
        {
          name: "ved",
          age: 5,
        },
        {
          name: "raj",
          age: 3,
        },
      ],
    },
    {
      id:3,
      name: "yogita ben",
      age: 40,
      dob: 14 / 6 / 1980,
      vehicals: "access125",
      sons: [
        {
          name: "mayur",
          age: 21,
        },
        {
          name: "raj",
          age: 19,
        },
      ],
    },
  ],
};

let  sonsNames = familyData.sons.map((son) => son.name);
console.log(sonsNames);

function sonsbyId(id){
    let sons = familyData.sons.find((sons)=> sons.id === id)
    console.log(sons)
}
sonsbyId(1);

function vehicalsId(x){
    let son = familyData.sons.find((son)=> son.id == x);
    console.log(son.vehicals)
}
vehicalsId(2);

function agebyId(x){
  let son = familyData.sons.find((son=> son.id == x))
  console.log(son.age)
}
agebyId(1)