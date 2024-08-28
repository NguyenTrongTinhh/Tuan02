(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    // Event listener to change color on body click
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
