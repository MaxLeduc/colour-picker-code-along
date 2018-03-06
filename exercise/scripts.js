/* global $ */

const app = {}

// track our form submission and get the user input value
// pass that value to a function that will handle the initial api call

app.init = () => {

}

// make an api call to the `https://fun-fun-colors.herokuapp.com/colorcheck?q=` endpoint

app.getColourID = (userInput) => {
  // $.ajax({
  //   url: ,
  //   method: ,
  //   dataType: ,
  //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  // })
}

// make an api call to the `https://fun-fun-colors.herokuapp.com/color/`

app.getColourByID = (id) => {

}

// invoke the printColour function and print the colour component

app.printColour = (color) => {
  const colourCard = `<div class="colour-wrapper">
      <div class="colour-display" style="background-color: ${color};"></div>
      <h5 class="colour-name">${color}</h5>
  </div>`

  $('.wrapper').append(colourCard)
}

$(document).ready(() => {
  app.init()
})
