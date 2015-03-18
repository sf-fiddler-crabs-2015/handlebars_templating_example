/*
OUR MISSION: We need to get some fiddler crabs from somewheres, and we need to put those squirrels on the page!
*/

// retrieve fiddler crabs in a function
// get HTML template as a string
// use Handlebars to convert string into templating function
// set up our context variable to apply to the template
// aaand go!

function getFiddlerCrabs() {
  $.ajax({
    url: "http://www.reddit.com/r/fiddlercrabs.json",
  }).success(function (response){
    console.log(response.data.children[0]);
    var context = {fiddler_crab_stories: response.data.children};
    var html = $('#fiddler_crabs_template').html();
    var templatingFunction = Handlebars.compile(html);
    $('#results').html(templatingFunction(context));
  });
}

$(document).ready(function() {
  getFiddlerCrabs();
});

