(function(){
  var theScriptHTML = document.getElementById('demo').innerHTML;
  var theTemplate = Handlebars.compile(theScriptHTML);
  var theData = jQuery.getJSON('https://tio-cooper.github.io/demo/demo.json');
  var contextObj = {SiteCore: {Google: "true"}};
  var compiledData = theTemplate(theData);
  document.getElementById('techtag').innerHTML = compiledData;
}());