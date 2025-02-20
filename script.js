// fetch('https://tio-cooper.github.io/demo/demo.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

var theData = jQuery.getJSON('https://tio-cooper.github.io/demo/demo.json');
console.log(theData);

(function(){
  var theScriptHTML = document.getElementById('techtag-content')
  var theTemplate = Handlebars.compile(theScriptHTML)
  var contextObj = {"site-core": {"Google": true}};
  var compiledData = theTemplate(contextObj)
  document.getElementById('techtag') = compiledData
}());