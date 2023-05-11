//-----M or D/T-----
window.addEventListener('resize', ScreenSizeConvert());

function ScreenSizeConvert(){
    var currentWidth = window.innerWidth;
    if (currentWidth < 450){
        document.getElementById('Mobile').style.display = 'block';
        document.getElementById('DesktopandTablet').style.display = 'none';
    }
    else{
        document.getElementById('Mobile').style.display = 'none';
        document.getElementById('DesktopandTablet').style.display = 'block';
    }
}


//-----NAVIGATION-----
function homeView() {
    document.getElementById('Home').style.display = 'block';
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('Locations').style.display = 'none';
    document.getElementById('AboutUs').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
}
function menuView() {
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Menu').style.display = 'block';
    document.getElementById('Locations').style.display = 'none';
    document.getElementById('AboutUs').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
}
function locView() {
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('Locations').style.display = 'block';
    document.getElementById('AboutUs').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
}
function aboutView() {
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('Locations').style.display = 'none';
    document.getElementById('AboutUs').style.display = 'block';
    document.getElementById('Contact').style.display = 'none';
}
function contactView() {
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Menu').style.display = 'none';
    document.getElementById('Locations').style.display = 'none';
    document.getElementById('AboutUs').style.display = 'none';
    document.getElementById('Contact').style.display = 'block';
}

//-----DARK/LIGHT MODE-----
function toggleMode(){
    var theme = document.getElementById("theme"); //gets the current theme from the link in the HTML
    var themename = theme.getAttribute('href');


    if(themename == 'light.css'){ //detects whether the href = dark mode
        theme.setAttribute('href', 'dark.css'); //if the dark mode is enabled, it will swap over to light mode
        localStorage.setItem('theme', 'dark');
    }
    else{
        theme.setAttribute('href', 'light.css'); //if the theme is not dark mode, it will change to dark mode.
        localStorage.setItem('theme', 'light');
    }
}


var savedTheme = localStorage.getItem('theme'); //This will carry the current theme over to the other pages

if (savedTheme === 'dark'){ //works out if stored theme is light and changes it if necessary
    document.getElementById('theme').setAttribute('href', 'dark.css');
}



//-----MAP API-----
let map, infoWindow;

function initMap(){

    const brittaniaInn = {lat: 51.195041987699916, lng: -3.4657543675752445};

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 13,
        center: brittaniaInn,
        mapTypeId: 'satellite',
    });

    const marker = new google.maps.Marker({
        position: brittaniaInn,
        map: map,
    })

    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Your Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("You Are Here");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            )
        } else{
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos){
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation Service Failed."
        : "Error: Your Browser doesn't support Geolocation."
    );
    infoWindow.open(map);
}

window.initMap = initMap;