function calcAverageHumanAge(ages) {
    // 1. Tính tuổi chó theo năm người
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(`Human ages: ${humanAges}`);

    // 2. Loại bỏ tất cả các con chó có tuổi người < 18
    const adultDogs = humanAges.filter(age => age >= 18);
    console.log(`Adult dogs (>= 18 human years): ${adultDogs}`);

    // 3. Tính tuổi trung bình của tất cả các con chó trưởng thành
    const averageAge = adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length;
    return averageAge;
}

// Test data 1
const data1 = [5, 2, 4, 1, 15, 8, 3];
const avg1 = calcAverageHumanAge(data1);
console.log(`Average human age for dataset 1: ${avg1}`);

// Test data 2
const data2 = [16, 6, 10, 5, 6, 1, 4];
const avg2 = calcAverageHumanAge(data2);
console.log(`Average human age for dataset 2: ${avg2}`);
