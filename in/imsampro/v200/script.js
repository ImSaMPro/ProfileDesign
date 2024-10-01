document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        alert('You clicked on: ' + this.innerText);
    });
});
