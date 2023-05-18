//-----M or D/T-----
window.setInterval(function (){
    var currentWidth = window.innerWidth;
    if (currentWidth < 500){
        document.getElementById('Mobile').style.display = 'block';
        document.getElementById('DesktopandTablet').style.display = 'none';
    }
    else{
        document.getElementById('Mobile').style.display = 'none';
        document.getElementById('DesktopandTablet').style.display = 'block';
    }
}
, 100);



//-----NAVIGATION-----
//---DT---
function DThomeView() {
    document.getElementById('DTHome').style.display = 'block';
    document.getElementById('DTMenu').style.display = 'none';
    document.getElementById('DTLocations').style.display = 'none';
    document.getElementById('DTAboutUs').style.display = 'none';
    document.getElementById('DTContact').style.display = 'none';
}
function DTmenuView() {
    document.getElementById('DTHome').style.display = 'none';
    document.getElementById('DTMenu').style.display = 'block';
    document.getElementById('DTLocations').style.display = 'none';
    document.getElementById('DTAboutUs').style.display = 'none';
    document.getElementById('DTContact').style.display = 'none';
}
function DTlocView() {
    document.getElementById('DTHome').style.display = 'none';
    document.getElementById('DTMenu').style.display = 'none';
    document.getElementById('DTLocations').style.display = 'block';
    document.getElementById('DTAboutUs').style.display = 'none';
    document.getElementById('DTContact').style.display = 'none';
}
function DTaboutView() {
    document.getElementById('DTHome').style.display = 'none';
    document.getElementById('DTMenu').style.display = 'none';
    document.getElementById('DTLocations').style.display = 'none';
    document.getElementById('DTAboutUs').style.display = 'block';
    document.getElementById('DTContact').style.display = 'none';
}
function DTcontactView() {
    document.getElementById('DTHome').style.display = 'none';
    document.getElementById('DTMenu').style.display = 'none';
    document.getElementById('DTLocations').style.display = 'none';
    document.getElementById('DTAboutUs').style.display = 'none';
    document.getElementById('DTContact').style.display = 'block';
}

//---M---

function MhomeView() {
    document.getElementById('MHome').style.display = 'block';
    document.getElementById('MMenu').style.display = 'none';
    document.getElementById('MLocations').style.display = 'none';
    document.getElementById('MAboutUs').style.display = 'none';
    document.getElementById('MContact').style.display = 'none';
}
function MmenuView() {
    document.getElementById('MHome').style.display = 'none';
    document.getElementById('MMenu').style.display = 'block';
    document.getElementById('MLocations').style.display = 'none';
    document.getElementById('MAboutUs').style.display = 'none';
    document.getElementById('MContact').style.display = 'none';
}
function MlocView() {
    document.getElementById('MHome').style.display = 'none';
    document.getElementById('MMenu').style.display = 'none';
    document.getElementById('MLocations').style.display = 'block';
    document.getElementById('MAboutUs').style.display = 'none';
    document.getElementById('MContact').style.display = 'none';
}
function MaboutView() {
    document.getElementById('MHome').style.display = 'none';
    document.getElementById('MMenu').style.display = 'none';
    document.getElementById('MLocations').style.display = 'none';
    document.getElementById('MAboutUs').style.display = 'block';
    document.getElementById('MContact').style.display = 'none';
}
function McontactView() {
    document.getElementById('MHome').style.display = 'none';
    document.getElementById('MMenu').style.display = 'none';
    document.getElementById('MLocations').style.display = 'none';
    document.getElementById('MAboutUs').style.display = 'none';
    document.getElementById('MContact').style.display = 'block';
}

//-----DARK/LIGHT MODE-----
function toggleMode(){
    var theme = document.getElementById("theme");
    var themename = theme.getAttribute('href');


    if(themename == 'light.css'){
        theme.setAttribute('href', 'dark.css');
        localStorage.setItem('theme', 'dark');
    }
    else{
        theme.setAttribute('href', 'light.css');
        localStorage.setItem('theme', 'light');
    }
}


var savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark'){
    document.getElementById('theme').setAttribute('href', 'dark.css');
}



//-----DESKTOP/TABLET MAP API-----
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


//-----MOBILE MAP API-----
let Mmap, MinfoWindow;

function initMap(){

    const brittaniaInn = {lat: 51.195041987699916, lng: -3.4657543675752445};

    const Mmap = new google.maps.Map(document.getElementById('Mmap'),{
        zoom: 13,
        center: brittaniaInn,
        mapTypeId: 'satellite',
    });

    const marker = new google.maps.Marker({
        position: brittaniaInn,
        Mmap: Mmap,
    })

    MinfoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Your Location";
    locationButton.classList.add("custom-map-control-button");
    Mmap.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    MinfoWindow.setPosition(pos);
                    MinfoWindow.setContent("You Are Here");
                    MinfoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, MinfoWindow, Mmap.getCenter());
                }
            )
        } else{
            handleLocationError(false, MinfoWindow, Mmap.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, MinfoWindow, pos){
    MinfoWindow.setPosition(pos);
    MinfoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation Service Failed."
        : "Error: Your Browser doesn't support Geolocation."
    );
    MinfoWindow.open(Mmap);
}

window.initMap = initMap;