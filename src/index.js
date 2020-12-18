function addDogs(dog) {
  let span = document.createElement("span");
  span.innerText = dog.name;
  span.dataset.dogId = dog.id;
  div.append(span);
}

function dogInfo(dog) {
  img.src = dog.image;
  h2.innerText = dog.name;
  button.dataset.dogId = dog.id;
  divInfo.append(img, h2, button);
  if (dog.isGoodDog === true) {
    button.innerText = "Bad Dog";
  } else {
    button.innerText = "Good Dog";
  }
}

function showDogInfo(id) {
  fetch(`http://localhost:3000/pups/${id}`)
    .then((res) => res.json())
    .then((dog) => {
      divInfo.innerHTML = "";
      dogInfo(dog);
    });
}
