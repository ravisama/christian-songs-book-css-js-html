$(document).ready(function() {
    var favorites = [];
    var counter = 0;
    $('.favorite').click(function() {
        ++counter;
        favorites.push("\"" + $(this).text() + " " + counter + "\"");
    });
    
    $('#reveal').click(function() {
       alert(favorites); 
    });
});
