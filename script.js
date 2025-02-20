let json_data = {};
(function(){
  const getData = () => {
    $.ajax({ url: 'https://tio-cooper.github.io/demo/demo.json'})
    .then(data => console.log('Initial', data))
    .then(data => {json_data = data;})    
  }
  getData()
  console.log("Access", data)
  var theScriptHTML = document.getElementById('demo').innerHTML;
  var theTemplate = Handlebars.compile(theScriptHTML);
  var compiledData = theTemplate(data);

  document.getElementById('techtag').innerHTML = compiledData;
}());