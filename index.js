document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(data => console.log(data))
})