(function(){
  "use strict";

  //Fetch JSON data from the specified URL and process the Handlebars template.
  const fetchDataAndProcessTemplate = () => {
    
    // Registers Helper to set ";" to new line.
    Handlebars.registerHelper('lineBreak', function(line, delim) {
        return new Handlebars.SafeString(line.split(delim).join('<br/>'));
      });

      // Perform AJAX GET request to fetch JSON data.
      $.ajax({
          url: 'https://tio-cooper.github.io/demo/demo.json', // URL of the JSON resource
          dataType: 'json', // Expecting JSON data in response
          cache: false    // Disable caching to always fetch the latest data
      })
      .done((data) => {
          // Log the fetched data for debugging purposes.
          console.log('Data fetched:', data);

          // Obtain the HTML content of the element with id "demo" which contains the Handlebars template.
          const templateSource = document.getElementById('demo').innerHTML;

          // Compile the Handlebars template.
          const template = Handlebars.compile(templateSource);

          // Generate the HTML by applying the fetched JSON data to the template.
          const compiledHTML = template(data);

          // Inject the compiled HTML into the element with id "techtag".
          document.getElementById('techtag').innerHTML = compiledHTML;
      })
      .fail((jqXHR, textStatus, errorThrown) => {
          // Log any errors encountered during the AJAX call.
          console.error('Error fetching data:', textStatus, errorThrown);
      });
  };

  // Call the function to fetch data and update the template after the script loads.
  fetchDataAndProcessTemplate();
  
})();