(function(){
  var theScriptHTML = document.getElementById('demo').innerHTML;
  var theTemplate = Handlebars.compile(theScriptHTML);

  const getData = () => {
    $.ajax({ url: 'https://tio-cooper.github.io/demo/demo.json'})
    .then(data => console.log('Initial', data))
  }
  
  const setData = async () => {
    const data = await $.ajax({url: 'https://tio-cooper.github.io/demo/demo.json'})
    console.log("Json", data)
  }
  
  getData()
  setData()
  
  // var theData = jQuery.getJSON('https://tio-cooper.github.io/demo/demo.json');
  // var contextObj = {SiteCore: {Google: "true"}};
  var compiledData = theTemplate(data);
  document.getElementById('techtag').innerHTML = compiledData;
}());