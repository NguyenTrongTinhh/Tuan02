function printForecast(arr) {
    let forecast = '';
    for (let i = 0; i < arr.length; i++) {
        forecast += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(forecast);
}

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);