var theData = jQuery.getJSON('https://tio-cooper.github.io/demo/demo.json');

(function(){
  var theScriptHTML = document.getElementById('demo').innerHTML;
  var theTemplate = Handlebars.compile(theScriptHTML);
  var contextObj = {SiteCore: {Google: "true"}};
  var compiledData = theTemplate(contextObj);
  document.getElementById('techtag').innerHTML = compiledData;
}());