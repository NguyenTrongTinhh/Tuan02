function checkDogs(dogsJulia, dogsKate) {
    // 1. Tạo một bản sao nông của mảng của Julia và loại bỏ các phần tử không phải là chó (phần tử đầu tiên và hai phần tử cuối cùng)
    const correctedJulia = dogsJulia.slice(1, -2);

    // 2. Tạo một mảng mới kết hợp dữ liệu của Julia (đã chỉnh sửa) và dữ liệu của Kate
    const allDogs = correctedJulia.concat(dogsKate);

    // 3. Duyệt qua từng phần tử của mảng allDogs và kiểm tra xem đó là chó trưởng thành hay chó con
    allDogs.forEach((age, i) => {
        if (age >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
}

// Test data 1
const juliasData1 = [3, 5, 2, 12, 7];
const katesData1 = [4, 1, 15, 8, 3];
checkDogs(juliasData1, katesData1);

// Test data 2
const juliasData2 = [9, 16, 6, 8, 3];
const katesData2 = [10, 5, 6, 1, 4];
checkDogs(juliasData2, katesData2);
