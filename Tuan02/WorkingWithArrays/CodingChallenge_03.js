const calcAverageHumanAge = ages => 
    ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)  // Tính tuổi chó theo năm người
        .filter(humanAge => humanAge >= 18)             // Loại bỏ những con chó có tuổi người < 18
        .reduce((sum, age, _, arr) => sum + age / arr.length, 0); // Tính tuổi trung bình

// Test data 1
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(`Average human age for dataset 1: ${avg1}`);

// Test data 2
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(`Average human age for dataset 2: ${avg2}`);
