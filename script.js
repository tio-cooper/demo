// fetch('https://tio-cooper.github.io/demo/demo.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// var theData = jQuery.getJSON('https://tio-cooper.github.io/demo/demo.json', function(data)
// {
  
// } 

let theDataV2
$.getJSON('https://tio-cooper.github.io/demo/demo.json', function(data) {
  theDataV2 = data;
});

console.log(theDataV2)


function rewrite(){
  var theScriptHTML = document.getElementById('demo')
  var theTemplate = Handlebars.compile(theScriptHTML)
  var compiledData = theTemplate(theDataV2)
  document.getElementById('demo') = compiledData
}

rewrite();
