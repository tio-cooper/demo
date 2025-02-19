import Handlebars from "handlebars";

fetch('https://tio-cooper.github.io/demo/demo.json')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then(contextThing = response.json());

(function(){
  var theScriptHTML = document.getElementById('demo')
  var theTemplate = Handlebars.compile(theScriptHTML)
  // var contextObj = {SiteCore: false};
  var compiledData = theTemplate(contextThing)
  document.getElementById('demo') = compiledData
})