var campMap; // declare a variable called 'campMap'

function init() {
  // the mapOptions object contains the information to initialise the map to how we want it
  var pinLocation = new google.maps.LatLng(34.8402630, -85.4828810); // LatLng object for the pin location

  var mapOptions= {
    zoom: 16, // sets the initial zoom level of the map
    center: pinLocation, // sets the center of the map
    mapTypeId: google.maps.MapTypeId.ROADMAP, // sets the type of map to ROADMAP
    panControl: false, // disables the pan control feature
    zoomControl: true, // enables the zoom control feature
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL, // sets the style of the zoom control
      position: google.maps.ControlPosition.TOP_RIGHT // sets the position of the zoom control
    },
    mapTypeControl: true, // enables the map type control feature
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, // sets the style of the map type control as a dropdown menu
      position: google.maps.ControlPosition.TOP_LEFT // sets the position of the map type control
    },
    scaleControl: true, // enables the scale control feature
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER // sets the position of the scale control
    },
    streetViewControl: false, // disables the Street View control feature
    overviewMapControl: false // disables the overview map control feature
  };
  var campMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  var startPosition = new google.maps.Marker({ // Create a new marker
    position: pinLocation, // Set its position
    map: campMap, // Specify the map
    icon: "img/icon2.png" // Path to image from HTML
 });

}

function loadScript() { 
   // this function is called when the page finishes loading, and it loads the map script from the Google API
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;