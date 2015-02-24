/*
OUR MISSION: We need to get some squirrels from somewheres, and we need to put those squirrels on the page!
*/

// Retrieve some squirrels from Reddit
function getSquirrels() {
  // Retrieve Handlebars template from the HTML
  var source = $('#squirrels-template').html();
  var template = Handlebars.compile(source);
  var context = {squirrels: []};

  $.ajax({
    url: "http://www.reddit.com/r/squirrels.json"
  }).done(function(data) {
    context.squirrels = data.data.children;
    $('#results').html(template(context));
  });
}

$(document).ready(function() {
  getSquirrels();
});

