//-----MAP API-----
let map, infoWindow;

function initMap(){

    const brittaniaInn = {lat: 51.195041987699916, lng: -3.4657543675752445};

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 20,
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