let data;
(function(){
  const getData = () => {
    $.ajax({ url: 'https://tio-cooper.github.io/demo/demo.json'})
    .then(data => console.log('Initial', data))
    return data;
  }
  // const setData = async () => {
  //   data = await $.ajax({url: 'https://tio-cooper.github.io/demo/demo.json'})
  //   console.log("Json", data)
  // }
  // setData()

  placeholder = {"SiteID":"demo","SiteCore":{"Google":true,"Microsoft":true,"Apple":false,"CustomCore0":false,"CustomCore1":false,"CustomCore2":false},"SiteDevices":{"Windows":true,"ChromeOS":false,"MacOS":false,"CustomDevice0":false,"CustomDevice1":false,"CustomDevice2":false},"SitePrinting":{"PaperCut MF":true,"PaperCut Hive":false,"Printex":false,"DedicatedPrint":false,"CustomPrint0":false,"CustomPrint1":false,"CustomPrint2":false},"SiteServices":{"PupleMash":true,"Sophos":false,"CustomService0":false,"CustomService1":false,"CustomService2":false},"SiteMDM":{"Meraki":true,"Intune":false,"Google":false,"CustomMDM0":false,"CustomMDM1":false,"CustomMDM2":false},"SiteStorage":{"DedicatedStorage":true,"SharePoint & OneDrive":false,"Google Drive":false,"CustomStorage0":false,"CustomStorage1":false,"CustomStorage2":false},"SiteBackups":{"Acronis":true,"Veeam":false,"CustomBackups0":false,"CustomBackups1":false,"CustomBackups2":false},"SiteISP":{"SICT":true,"EXA":false,"RM":false,"LGFL":false,"HFL":false,"Unmanaged":false,"CustomISP0":false,"CustomISP1":false,"CustomISP2":false}}
  console.log("Access", data)
  var theScriptHTML = document.getElementById('demo').innerHTML;
  var theTemplate = Handlebars.compile(theScriptHTML);
  var compiledData = theTemplate(placeholder);

  document.getElementById('techtag').innerHTML = compiledData;
}());