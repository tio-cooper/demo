var theData = jQuery.getJSON('https://tio-cooper.github.io/demo/demo.json', function(data));
console.log(theData);

// let theDatav2;
// fetch('https://tio-cooper.github.io/demo/demo.json').then(
//   function(u){return u.json();}
// ).then(
//   function(json){
//     theDatav2 = json
//   }
// )
// console.log("V2");
// console.log(theDatav2)


(function rewrite(){
  var theScriptHTML = document.getElementById('demo')
  var theTemplate = Handlebars.compile(theScriptHTML)
  var compiledData = theTemplate(theData)
  document.getElementById('demo') = compiledData
})

rewrite();
