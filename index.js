document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.freetogame.com/api/games')
    .then(resp => resp.json())
    .then(data => console.log(data))
})