div.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "SPAN") {
    // console.log(e.target.dataset.dogId);
    showDogInfo(e.target.dataset.dogId);
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(e.target.dataset.dogId);
  let goodOrBad = null;
  if (button.innerText === "Good Dog") {
    button.innerText = buttonText[button.innerText];
    goodOrBad = true;
  } else {
    goodOrBad = false;
    button.innerText = buttonText[button.innerText];
    // debugger;
  }
  const body = {
    isGoodDog: goodOrBad,
  };
  return updateDog(e.target.dataset.dogId, body);
});

filterDiv.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.innerText === "Filter good dogs: OFF") {
    filterDiv.innerText = filterButton[filterDiv.innerText];
    fetch("http://localhost:3000/pups")
      .then((res) => res.json())
      .then((dogs) => {
        console.log(dogs);

        let goodDogs = dogs.filter((e) => e.isGoodDog === true);
        div.innerHTML = "";
        goodDogs.forEach(addDogs);
      });
  } else {
    fetch("http://localhost:3000/pups")
      .then((res) => res.json())
      .then((dogs) => {
        console.log(dogs);
        div.innerHTML = "";
        filterDiv.innerText = filterButton[filterDiv.innerText];
        dogs.forEach(addDogs);
      });
  }
});
