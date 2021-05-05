// hier komt alle scripting voor kaart

//https://api.mapbox.com/styles/v1/boerchan/ckoacsteu00dr17o22p012wh1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYm9lcmNoYW4iLCJhIjoiY2tvYWJkcDA1MzR3cTJxcGd3YWdsNjJzbyJ9.OMoKfN5k380KwljA2xwgGQ

// variable voor view van de kaart die in de div map
const myMap = L.map('mapid').setView([52.02, 4.34], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/boerchan/ckoacsteu00dr17o22p012wh1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYm9lcmNoYW4iLCJhIjoiY2tvYWJkcDA1MzR3cTJxcGd3YWdsNjJzbyJ9.OMoKfN5k380KwljA2xwgGQ',
{
    attribution: 'super mario mapbox',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(myMap);


//standaard marker
// const marker = L.marker([52.05, 4.34]).addTo(myMap);
//pop up toevoegen
// marker.bindPopup("<p>hallo</p>, ik ben gestoord");


// cirkel marker
// const circle = L.circle([52.05, 4.301], {
//     color: 'red',
//     radius: 100
// }).addTo(myMap);
// circle.bindPopup("Ik ben een cirkel.")

// custom icon marker
const kasteel = L.icon({
    iconUrl: "../icons/kasteel.svg",
    iconSize: [40, 53]
})

// marker icoon
// const marker2 = L.marker([52.044139, 4.330987], {
//     icon: kasteel}).addTo(myMap);
//     marker2.bindPopup("Ik ben een kasteel");

//array
const markers = [
    ["Tai Wu, authentic chinese food",
    51.91968373745025,
    4.472339783162154,
"./icons/diner.png",
 38, 42.5],
["St Anny Bakery, authentic chinese baker",
51.92032897014096,
4.469074909542766,
"./icons/food.svg",
40, 53],
["Koekela Drive In",
51.90581899117415,
4.374222013906507,
"./icons/food.svg",
30, 40],
["My Fong Toko, peking eend",
51.92022401140933,
4.468478911170398,
"./icons/diner.png",
30, 40],
["Amazing Oriental, toko",
51.920423255728146,
4.469734475624149,
"./icons/supermarkt.svg",
30, 40],

];
console.log(markers[2][0])

//for loop
for (let i = 0; i < markers.length; i++) {
    console.log("for loop doet het")
    const currentMarker = markers[i];
    console.log(currentMarker[0]);

// marker op de kaart zetten in for loop
const newMarker = new L.marker([currentMarker[1], currentMarker[2]],
    {
    icon: new L.icon({
        iconUrl: currentMarker[3],
        iconSize: [currentMarker[4],
        currentMarker[5]]})
})
.addTo(myMap)
.bindPopup(currentMarker[0]);
}

//geolocation
myMap.locate({setView: true,
    maxZoom: 14});

    //marker geoLocation
    function onLocationMarker(e) {
        L.marker(e.latlng, {
            icon: new L.icon({
                iconUrl: "./icons/taart.svg",
                iconSize: [30, 47.8]
            })
        }).addTo(myMap)
        .bindPopup("Je bent hier").openPopup();
    }

    myMap.on('locationfound', onLocationMarker);

    //clickable pop up
    const clickLocatie = L.popup();


    //function om popup te genereren uit clicken
    function onMapClick(e){
        clickLocatie
        .setLatLng(e.latlng)
        .setContent("Je klikte op de kaart op deze coordinaat : "
        + e.latlng.toString())
        .openOn(myMap)
    }

    //aanroepen functie bij het clicken
myMap.on('click', onMapClick);




