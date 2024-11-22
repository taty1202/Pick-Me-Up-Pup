const NUM_OF_DOGS = 15;

const state = {
  dogImageContainer: null,
  addDogButton: null,
  dogCountLabel: null,
  dogCount: 1,
};

const pickRandomNumber = () => {
  return Math.floor(Math.random() * NUM_OF_DOGS) + 1;
};

const loadControls = () => {
  state.addDogButton = document.getElementById('add-dog-button');
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.dogCountLabel = document.getElementById('dog-count-label');
};

// const setRandomDog = () => {
//   const imgNumber = pickRandomNumber();
//   const newImgName = `../imgs/${imgNumber}.jpeg`;
//   state.dogImage.src = newImgName;
// };

const registerEventHandlers = () => {
  loadControls();
  state.addDogButton.addEventListener('click', () => {
    const imgNumber = pickRandomNumber();
    const newImgName = `../imgs/${imgNumber}.jpeg`;
    const newDog = document.createElement('img');
    newDog.src = newImgName;
    newDog.alt = 'A random doggy';
    state.dogImageContainer.prepend(newDog);
    ++state.dogCount;
    state.dogCountLabel.textContent = state.dogCount;
  });
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
