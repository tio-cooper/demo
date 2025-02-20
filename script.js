(function(){
  var data;
  const getData = () => {
    $.ajax({ url: 'https://tio-cooper.github.io/demo/demo.json'})
    .then(data => console.log('Initial', data))
  }
  const setData = async () => {
    data = await $.ajax({url: 'https://tio-cooper.github.io/demo/demo.json'})
    console.log("Json", data)
    return data;
  }
  getData()

  console.log("Access", data)
  var theScriptHTML = document.getElementById('demo').innerHTML;
  var theTemplate = Handlebars.compile(theScriptHTML);
  var compiledData = theTemplate(setData());

  document.getElementById('techtag').innerHTML = compiledData;
}());