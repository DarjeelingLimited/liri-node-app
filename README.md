# LIRI Bot

### Overview

LIRI is like iPhone's SIRI but is a _Language_ Interpretation and Recognition Interface vs Speech. LIRI will be a command line node app that takes in parameters and gives you back data based on the command used.

## Repository

https://github.com/DarjeelingLimited/liri-node-app

## Technology Used

* OMDB, Spotify, and Bands In Town APIs
* NPM
* Axios
* Moment
* DotEnv
* Node.js

## NPM Packages

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   

## Getting started

1. Clone a copy of the repository to your local machine. 
2. Run 'npm install' in Terminal (Mac) or GitBash (Windows)
3. Run the 'start' command
```node liri start```
4. Enter "node" + "the file name (liri.js)" + "the command" + "the term"
For example, a command may look something like this: 

Command | Example in Terminal/GitBash
--------| -------------
concert-this | node liri concert-this tool
spotify-this-song | node liri spotify-this-song 3 libras
movie-this | node liri movie-this darjeeling limited
do-what-this-says | node liri do-what-this-says

** Example videos in the "Screenshots" folder of this repository. The links are also below.
** LIRI walkthrough: https://www.screencast.com/t/mBcLSk4H
** Writing to log.text file:  https://www.screencast.com/t/r7xoI3S7k74t

## Commands

1. `node liri start`
    * Tells the user all the available commands

2. `node liri.js concert-this <artist/band name here>`
    * Displays the following information in terminal/bash
     * Name of the venue
     * Venue location
     * Date of the Event (use moment to format this as "MM/DD/YYYY") 

3. `node liri.js spotify-this-song '<song name here>'`
   * Displays the following information in terminal/bash
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

   * If no song is provided, it will default to "The Sign" by Ace of Base.     

4. `node liri.js movie-this '<movie name here>'`
    * Displays the following information in terminal/bash

     ```
       * Title of the movie
       * Year the movie came out
       * IMDB Rating of the movie
       * Rotten Tomatoes Rating of the movie
       * Country where the movie was produced
       * Language of the movie
       * Plot of the movie
       * Actors in the movie
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

5. `node liri.js do-what-it-says`

   * LIRI will take the text inside of random.txt and then use it to run `spotify-this-song` for "I Want it That Way," by the Backstreet Boys.


## Log.txt 

* Upon running each command, the log.txt file appends each command into a running list. The list will compile each command and the commands will not be removed until they are manually deleted from inside the log.txt file. 

