fetch('https://tio-cooper.github.io/demo/demo.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


const dbParam = JSON.stringify(fetch('https://tio-cooper.github.io/demo/demo.json'))
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<select>"
  for (let x in myObj) {
    text += "<option>" + myObj[x].name + "</option>";
  }
  text += "</select>"
  document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "json_demo_html_table.php");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
