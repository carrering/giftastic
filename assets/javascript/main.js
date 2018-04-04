var arrayCars = ["mustang","m3","porsche", "gt3", "ferrari", "f40", "ford", "model t"]
console.log("arrayCars: ", arrayCars[2])

// create some buttons
function renderButton(){
    

    // first clear all the buttons
    $(".buttons-view").empty()
    
    for(i=0;i<arrayCars.length;i++){
        // make a button
        var newButton = $("<button>")
        // add a cars class
        newButton.addClass("cars")
        // make a data- attribute with the cars name
        newButton.attr("data-name",arrayCars[i])
        // create the button text
        newButton.text(arrayCars[i])
        // append this to the div holding all the buttons
        $(".buttons-view").append(newButton)


    }


}// end of function renderButton

// fuction to generate gifs of cars
function showMeTheCars(){

    // get the button clicked data- name
    var theCarIWant = $(this).attr("data-name")
    console.log(theCarIWant)
    // build the query url for giphy

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q="
    queryURL += theCarIWant





      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $(".showmethegifs").empty()
        response.data.forEach(function(giphyObject){
          var img = $('<img>')
          img.attr('src',giphyObject.images.fixed_height.url)
          img.attr('class','giphy')
          $(".showmethegifs").prepend(img)
        })
        console.log(response);
      });

}


// show me the buttons    
renderButton()


// Adding click event listeners to all elements with a class of "cars"
$(document).on("click", ".cars", showMeTheCars);

