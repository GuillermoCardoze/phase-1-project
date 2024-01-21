document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(games => renderGames(games))
})

const gameList = document.getElementById('all-games')
const gameImg = document.getElementById('detail-image')
const gameName = document.getElementById('detail-name')
const gameDescript = document.getElementById('detail-description')
const gameDev = document.getElementById('developer-display')
const gameForm = document.getElementById('new-game')
// console.log(gameForm)

const renderGames = games => {
    games.forEach(renderGame)
}

const gameAddHandler = game => {
    gameImg.src = game.thumbnail
    gameName.textContent = game.title
    gameDescript.textContent = game.short_description
    gameDev.textContent = game.developer
    
}

const renderGame = game => {
    const img = document.createElement('img')
    img.src = game.thumbnail;
    img.addEventListener('click', () => gameAddHandler(game))
    

    gameList.append(img)
}


const newGameHandler = e => {
    e.preventDefault()
    
    const newGame = {
        title: e.target.title.value,
        short_description: e.target.description.value,
        thumbnail: e.target.image.value,
        developer: e.target['new-developer'].value,
        
    }
    
    renderGame(newGame)
    e.target.reset()
    
}
gameForm.addEventListener('submit', newGameHandler)