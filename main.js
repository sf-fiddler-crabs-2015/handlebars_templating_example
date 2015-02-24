/*
OUR MISSION: We need to get some squirrels from somewheres, and we need to put those squirrels on the page!
*/

// Retrieve some squirrels from Reddit
$.ajax({
  url: "http://www.reddit.com/r/squirrels.json"
}).done(function(data) {
  console.log(data);
  $('#results').html(JSON.stringify(data));
});
