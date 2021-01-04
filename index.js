
let map;


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.2611809, lng:55.9339575 },
    zoom: 3,
  });

  //Busan
  const Busan = { lat:35.23694746417701, lng:129.01179299948885 }
  const markerBusan = new google.maps.Marker({
    position: Busan,
    map: map,
  })

  const BusanContent = `
    <h1>Busan</h1>
    <p>my hometown</p>
  `
  
  const infoWindowBusan = new google.maps.InfoWindow({
    content: BusanContent
  })

  markerBusan.addListener('click',function(){
    infoWindowBusan.open(map,markerBusan);
  })
  //BusanEnd


  //Seoul
  const Seoul = { lat:37.58821968313283, lng:126.9936559964475 }
  const markerSeoul = new google.maps.Marker({
    position: Seoul,
    map: map,
  })

  const SeoulContent = `
    <h1>Seoul</h1>
    <p>my study</p>
  `
  
  const infoWindowSeoul = new google.maps.InfoWindow({
    content: SeoulContent
  })

  markerSeoul.addListener('click',function(){
    infoWindowSeoul.open(map,markerSeoul);
  })
  //SeoulEnd

  //HwaCheon
  const HwaCheon = { lat:38.199529173356346, lng:127.58830488256483}
  const markerHwaCheon = new google.maps.Marker({
    position: HwaCheon,
    map: map,
  })

  const HwaCheonContent = `
    <h1>HwaCheon</h1>
    <p>Military time</p>
  `
  
  const infoWindowHwaCheon = new google.maps.InfoWindow({
    content: HwaCheonContent
  })

  markerHwaCheon.addListener('click',function(){
    infoWindowHwaCheon.open(map,markerHwaCheon);
  })
  //HwaCheonEnd

  //Stuttgart
  const Stuttgart = { lat:48.71200950175008, lng:9.211419533204662}
  const markerStuttgart = new google.maps.Marker({
    position: Stuttgart,
    map: map,
  })

  const StuttgarttContent = `
    <h1>Stuttgart</h1>
    <p>Master in Landscape Ecology</p>
  `
  
  const infoWindowStuttgart = new google.maps.InfoWindow({
    content: StuttgarttContent
  })

  markerStuttgart.addListener('click',function(){
    infoWindowStuttgart.open(map,markerStuttgart);
  })
  //SutttgartEnd

  //Fulda
  const Fulda = { lat:50.56557277840046, lng: 9.688217132843503}
  const markerFulda = new google.maps.Marker({
    position: Fulda,
    map: map,
  })
  
  const FuldatContent = `
    <h1>Fulda</h1>
    <p>Exchange Students in Hochschule Fulda</p>
  `
  
  const infoWindowFulda = new google.maps.InfoWindow({
    content: FuldatContent
  })
  
  markerFulda.addListener('click',function(){
    infoWindowFulda.open(map,markerFulda);
  })
  //FuldaEnd
  
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('legend'));
}

