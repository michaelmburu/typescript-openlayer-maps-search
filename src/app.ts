const form = document.querySelector('form')!
const lngAddress = document.getElementById('lng')! as HTMLInputElement
const latAddress = document.getElementById('lat')! as HTMLInputElement
declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();
    const enteredLatAddress = latAddress.value
    const enteredLngAddress = lngAddress.value

    console.log(enteredLatAddress, enteredLngAddress)
    const coordinates = {lat: enteredLatAddress, lng: enteredLngAddress}; // Pass cordinates manually

    document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
    new ol.Map({
        target: 'map',
        layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
        ],
        view: new ol.View({
        center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
        zoom: 8
        })
    });
}

form.addEventListener('submit', searchAddressHandler)

