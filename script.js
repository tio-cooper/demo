import Handlebars from "handlebars";

fetch('https://tio-cooper.github.io/demo/demo.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

(function(){
  var theScriptHTML = document.getElementById('techtag-content')
  var theTemplate = Handlebars.compile(theScriptHTML)
  var contextObj = {SiteCore: false};
  var compiledData = theTemplate(contextObj)
  document.getElementById('teachtag-content') = compiledData
})