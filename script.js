fetch('https://tio-cooper.github.io/demo/demo.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

var theData = jQuery.getJSON('https://tio-cooper.github.io/demo/demo.json');
console.log(theData);

(function(){
  var theScriptHTML = document.getElementById('demo')
  var theTemplate = Handlebars.compile(theScriptHTML)
  var compiledData = theTemplate(theData)
  document.getElementById('demo') = compiledData
})