// ==UserScript==
// @name        Mystical Lotus
// @namespace   Violentmonkey Scripts
// @match       https://staff.turniton.co.uk/schools/*
// @grant       GM_addElement
// @grant       GM_addStyle
// @version     1.4
// @require     https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js
// @author      -
// @description A simple script to insert the TechTags element.
// ==/UserScript==

(function(){
    "use strict";
    function StartUp(){
      let stylesheet = document.createElement("link")
          stylesheet.rel = "stylesheet";
          stylesheet.type = "text/css"
          stylesheet.href = "https://tio-cooper.github.io/demo/style.css"
          document.head.appendChild(stylesheet);
  
      let jquery_script = document.createElement("script")
          jquery_script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          document.head.appendChild(jquery_script)
    }
    StartUp()
  
    function GenerateHTML(){
      let html_techtag = document.createElement("div");
      html_techtag.id = "techtag";
      html_techtag.className = "techtag";
      document.getElementsByClassName("list-unstyled")[0].appendChild(html_techtag)
  
      let html_template_script = document.createElement("script")
      html_template_script.id = "demo"
      html_template_script.type = "text/x-handlebars-template"

      let html_techtag_title = document.createElement("b");
      html_techtag_title.className = "techtag-title"
      html_techtag_title.innerText = "✨ TechTags ✨"
      html_template_script.appendChild(html_techtag_title)
  
      let html_techtag_content = document.createElement("div");
      html_techtag_content.id = "techtag-content"
      html_techtag_content.className = "techtag-content"
      html_template_script.appendChild(html_techtag_content)
  
      let html_techtag_core = document.createElement("div");
      html_techtag_core.innerText = "Core:"
      html_techtag_core.style = "font-weight:bold"
      let html_techtag_core_content = document.createElement("div");
      html_techtag_core_content.style = "font-weight:normal"
      html_techtag_core_content.innerText = "{{lineBreak SiteCore ';'}}"
      html_techtag_core.appendChild(html_techtag_core_content)
      html_techtag_content.appendChild(html_techtag_core)
  
      let html_techtag_devices = document.createElement("div");
      html_techtag_devices.innerText = "Devices:"
      html_techtag_devices.style = "font-weight:bold"
      let html_techtag_devices_content = document.createElement("div");
      html_techtag_devices_content.style = "font-weight:normal"
      html_techtag_devices_content.innerText = "{{lineBreak SiteDevices ';'}}"
      html_techtag_devices.appendChild(html_techtag_devices_content)
      html_techtag_content.appendChild(html_techtag_devices)
  
      let html_techtag_printing = document.createElement("div");
      html_techtag_printing.innerText = "Printing:"
      html_techtag_printing.style = "font-weight:bold"
      let html_techtag_printing_content = document.createElement("div");
      html_techtag_printing_content.style = "font-weight:normal"
      html_techtag_printing_content.innerText = "{{lineBreak SitePrinting ';'}}"
      html_techtag_printing.appendChild(html_techtag_printing_content)
      html_techtag_content.appendChild(html_techtag_printing)
  
      let html_techtag_services = document.createElement("div");
      html_techtag_services.innerText = "Services:"
      html_techtag_services.style = "font-weight:bold"
      let html_techtag_services_content = document.createElement("div");
      html_techtag_services_content.style = "font-weight:normal"
      html_techtag_services_content.innerText = "{{lineBreak SiteServices ';'}}"
      html_techtag_services.appendChild(html_techtag_services_content)
      html_techtag_content.appendChild(html_techtag_services)
  
      let html_techtag_mdm = document.createElement("div");
      html_techtag_mdm.innerText = "MDM:"
      html_techtag_mdm.style = "font-weight:bold"
      let html_techtag_mdm_content = document.createElement("div");
      html_techtag_mdm_content.style = "font-weight:normal"
      html_techtag_mdm_content.innerText = "{{lineBreak SiteMDM ';'}}"
      html_techtag_mdm.appendChild(html_techtag_mdm_content)
      html_techtag_content.appendChild(html_techtag_mdm)
  
      let html_techtag_storage = document.createElement("div");
      html_techtag_storage.innerText = "Storage:"
      html_techtag_storage.style = "font-weight:bold"
      let html_techtag_storage_content = document.createElement("div");
      html_techtag_storage_content.style = "font-weight:normal"
      html_techtag_storage_content.innerText = "{{lineBreak SiteStorage ';'}}"
      html_techtag_storage.appendChild(html_techtag_storage_content)
      html_techtag_content.appendChild(html_techtag_storage)
  
      let html_techtag_isp = document.createElement("div");
      html_techtag_isp.innerText = "ISP:"
      html_techtag_isp.style = "font-weight:bold"
      let html_techtag_isp_content = document.createElement("div");
      html_techtag_isp_content.style = "font-weight:normal"
      html_techtag_isp_content.innerText = "{{lineBreak SiteISP ';'}}"
      html_techtag_isp.appendChild(html_techtag_isp_content)
      html_techtag_content.appendChild(html_techtag_isp)

      document.body.appendChild(html_template_script)
    }
    GenerateHTML()

    //Fetch JSON data from the specified URL and process the Handlebars template.
    const fetchDataAndProcessTemplate = () => {
  
      // Registers Helper to set ";" to new line.
      Handlebars.registerHelper('lineBreak', function(line, delim) {
          return new Handlebars.SafeString(line.split(delim).join('<br/>'));
        });

        // Prepares URL for Relevant Site
        portal_page = document.URL
        url_split = portal_page.split("/")
        site_id = url_split.splice(-1)
        site_url = ('https://tio-cooper.github.io/demo/' + site_id + ".json")
  
        // Perform AJAX GET request to fetch JSON data.
        $.ajax({
            url: site_id, // URL of the JSON resource
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