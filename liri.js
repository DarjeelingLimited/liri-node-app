//Dependencies
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var fs = require("fs");

//New Spotify class and initialize Spotify
var spotify = new Spotify(keys.spotify);

//Takes in all of the command line arguments to capture input (concert-this, spotify-this-song, movie-this, do-what-it-says)
var search = process.argv[2];

//Joining the remaining arguments (item 3 in the array and on) since an actor or tv show name may contain spaces
var input = process.argv.slice(3).join(" ");
var term = input.toUpperCase();

//Create the concert-this 
function bandsInTown(artist) {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
      //instead of returning all, only return 4 examples
      for (var i = 0; i < 5; i++) {
        // concertData ends up being the string containing the show data we will print to the console
        var concertData = "\n------------------------------------------------------------" +
          "\nName of venue: " + response.data[i].venue.name +
          "\nVenue location: " + response.data[i].venue.city + ", " + response.data[i].venue.region +
          "\nDate of event: " + (moment(response.data[i].datetime).format("MM/DD/YYYY")) +
          "\n------------------------------------------------------------";
        console.log(concertData);
        // // Append showConcertData and the divider to the log.txt, print showConcertData to the console
        // fs.appendFile("log.txt", showConcertData + divider, function (err) {
        //   if (err) throw err;
        //   console.log(showConcertData);
        // });
      }
    });
}
// end of concert-this

//Create spotify-this-song 
function spotifyResults(term) {
  if (!term) {
    term = "The Sign - Ace of Base"; //When I just put "The Sign", a Harry Styles "Sign of the Times" showed up. 
  }
  spotify.search({
    type: 'track',
    query: term
  }, function (err, response) {
    var songData = "\n----------------------------------------------------------------" +
      "\nArtist: " + response.tracks.items[0].artists[0].name +
      "\nSong name: " + response.tracks.items[0].name +
      "\nAlbum name: " + response.tracks.items[0].album.name +
      "\nPreview Link: " + response.tracks.items[0].external_urls.spotify +
      "\n--------------------------------------------------------------------";
    console.log(songData);
  });
}
//end of spotify-this

//Create movie-this
function movieResults(term) {
  if (!term) {
    term = "Mr. Nobody"
  }
  axios.get("http://www.omdbapi.com/?t=" + term + "&plot=short&apikey=trilogy")
    .then(function (response) {
      var movieData = "\n------------------------------------------------------------" +
        "\nMovie Title: " + response.data.Title +
        "\nYear: " + response.data.Year +
        "\nIMDB rating: " + response.data.imdbRating +
        "\nRotten Tomatoes rating: " + response.data.Ratings[1].Value +
        "\nCountry: " + response.data.Country +
        "\nLanguage(s): " + response.data.Language +
        "\nPlot: " + response.data.Plot +
        "\nCast: " + response.data.Actors +
        "\n------------------------------------------------------------";
      console.log(movieData);
      // console.log("hello");
    });
}

//Create do-what-it-says
function doWhat(){
  fs.readFile('random.txt', "utf8", function(error, data) {
    var random = data.split(',');
    spotifyResults(random[1]);
  });
}
//end of do-what-it-says

switch (search) {
  case (search === undefined):
    console.log("Please enter one of the valid arguments: concert-this, spotify-this-song, movie-this, or do-what-it-says.")
    break;
  case "concert-this":
    if (!term) {
      console.log("Sorry, no results were found.");
    }
    else {
      console.log("Your band: " + term);
      bandsInTown(term);
    }
    break;
  case "spotify-this-song":
    if (!term) {
      console.log("You must input a song name. For now, here are some sample results!")
      spotifyResults(term);
    }
    else {
      console.log("Your song: " + term);
      spotifyResults(term);
    }
    break;
  case "movie-this":
    if (!term) {
      console.log("You must input a movie name with no spaces. For now, here are some sample results!")
      movieResults(term);
    }
    else {
      console.log("Your movie: " + term);
      movieResults(term);
    }
    break;
  case "do-what-it-says":
    doWhat();
}
