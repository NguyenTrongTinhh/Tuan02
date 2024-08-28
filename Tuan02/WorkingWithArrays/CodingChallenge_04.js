const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  
  // 1. Calculate recommended food and add it as a property to each dog object
  dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
  
  // 2. Find Sarah's dog and log if it's eating too much or too little
  const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(`Sarah's dog is eating ${sarahsDog.curFood > sarahsDog.recommendedFood * 1.1 ? 'too much' : sarahsDog.curFood < sarahsDog.recommendedFood * 0.9 ? 'too little' : 'an okay amount'}.`);
  
  // 3. Create arrays containing owners of dogs who eat too much or too little
  const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood * 1.1).flatMap(dog => dog.owners);
  const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood * 0.9).flatMap(dog => dog.owners);
  
  // 4. Log strings for each array
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // 5. Log whether any dog is eating exactly the recommended amount
  console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
  
  // 6. Log whether any dog is eating an okay amount
  console.log(dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));
  
  // 7. Create an array containing dogs eating an okay amount
  const dogsEatingOkay = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
  console.log(dogsEatingOkay);
  
  // 8. Create a shallow copy of the dogs array and sort it by recommended food portion in ascending order
  const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(dogsSorted);
  