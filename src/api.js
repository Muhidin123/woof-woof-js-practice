const buttonText = {
  "Good Dog": "Bad Dog",
  "Bad Dog": "Good Dog",
};

const filterButton = {
    "Filter good dogs: ON" : "Filter good dogs: OFF",
    "Filter good dogs: OFF": "Filter good dogs: ON"
}


const div = document.getElementById("dog-bar");
const divInfo = document.getElementById("dog-info");
let img = document.createElement("img");
let h2 = document.createElement("h2");
let button = document.createElement("button");
let filterDiv = document.getElementById('filter-div')
filterDiv = filterDiv.firstElementChild
// button.innerText = buttonText[button.innerText];

fetch("http://localhost:3000/pups")
  .then((res) => res.json())
  .then((dogs) => {
    console.log(dogs);
    dogs.forEach(addDogs);
  });

function showDogInfo(id) {
  fetch(`http://localhost:3000/pups/${id}`)
    .then((res) => res.json())
    .then((dog) => {
      divInfo.innerHTML = "";
      dogInfo(dog);
    });
}

function updateDog(id, body) {
  fetch(`http://localhost:3000/pups/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(console.log);
}
