## Phase One Project: Game Uploader

User can be able to navigate the top game bar the name, developer, and short description of different games that are uploaded or create.

## FUNCTIONALITY OF THE APP 

Navigate the game bar: Scroll through the top game bar with previously uploaded games and new uploaded games. 

New game to bame bar: Create new Game by filling out the form with a name, image URL, a description of the Game, and the Developer. 

## API Reference

#### Get all items

```http
  GET http://localhost:3000/games
```

## Running the app 
To run the Game Uploader app, follow these steps:

Run the JSON Server: json-server --watch db.json in your local console. This will start the JSON server, and your Games data will be served from http://localhost:3000/games.

Open the App: Open index.html in your web browser to launch the Game Uploader app.

## Lesson Learned 

1. Learned how to get my local db.json and run my json server to get the information needed to run the app.

Having to create a fetch and collect the data then show it in browser. 

Creating functions to us them as callbacks, so that they can be refered to in other functions. 

Learned how to add event listeners to images to create an action on the app.

## Acknowledgments

Ramen Rater Practice - https://github.com/GuillermoCardoze/phase-1-mock-cc-ramen-rater

API - https://www.freetogame.com/api-doc

