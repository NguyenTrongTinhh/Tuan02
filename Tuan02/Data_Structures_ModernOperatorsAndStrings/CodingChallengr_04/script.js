document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const variables = inputText.split('\n');
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Xóa kết quả cũ

    variables.forEach((variable, index) => {
        const camelCaseVariable = variable.toLowerCase().split('_').map((word, i) => {
            if (i !== 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        }).join('');

        const resultText = `${camelCaseVariable.padEnd(20)}${'✅'.repeat(index + 1)}`;
        resultElement.innerHTML += resultText + '\n'; // Hiển thị kết quả trong `div#result`
    });
});
