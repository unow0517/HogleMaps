
let map;


function initMap() {
  const Busan = { lat:35.23694746417701, lng:129.01179299948885 }
  const map = new google.maps.Map(document.getElementById("map"), {
    center: Busan,
    // { lat: 42.2611809, lng:55.9339575 },
    zoom: 7,      
  });

  var icons = {
    baby: {
      url: "./image/baby.png",
      scaledSize: new google.maps.Size(50,50)
    },
    education:{
      url: "./image/education.png",
      scaledSize: new google.maps.Size(50,50)
    },
    internship:{
      url: "./image/internship.png",
      scaledSize: new google.maps.Size(50,50)
    },
    military:{
      url: "./image/military.png",
      scaledSize: new google.maps.Size(50,50)
    },
  }

  //Busan
  // const Busan = { lat:35.23694746417701, lng:129.01179299948885 }
  const markerBusan = new google.maps.Marker({
    position: Busan,
    icon: icons.baby,
    map: map,
  })

  const BusanContent = `
    <div class='citycontent'>
      <h1>Busan</h1>
      <img src="./image/100days.jpg" alt="babyYunHo" width = 200px;>
      <p>Baby YunHo comes to this world in 1992!</p>
    </div>
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
    icon: icons.education
  })

  const SeoulContent = `
  <div class='citycontent'>
    <h1>Seoulwalk</h1>
    <img src="./image/seoulWalkYunHo.jpg" alt="internshipYunHo" width = 200px;>
    <p>Baby YunHo comes to this world in 1992!</p>
  </div>
`
  
  const infoWindowSeoul = new google.maps.InfoWindow({
    content: SeoulContent
  })

  markerSeoul.addListener('click',function(){
    infoWindowSeoul.open(map,markerSeoul);
  })

    //internship
    const SeoulWalk = { lat:37.55426971237671, lng:126.96603377010139 }
    const markerSeoulWalk = new google.maps.Marker({
      position: SeoulWalk,
      map: map,
      icon: icons.internship
    })

    const SeoulWalkContent = `
    <div class='citycontent'>
      <h1>Seoulwalk</h1>
      <img src="./image/seoulWalkYunHo.jpg" alt="internshipYunHo" width = 200px;>
      <p>Internship in City Regeneration Social Corporation "SeoulWalk" from 01.2017~ 04.2017</p>
    </div>
  `
    
    const infoWindowSeoulWalk = new google.maps.InfoWindow({
      content: SeoulWalkContent
    })

    markerSeoulWalk.addListener('click',function(){
      infoWindowSeoulWalk.open(map,markerSeoulWalk);
    })
    //Internship End

    //internship
    const DrinkingWater = {lat:37.39174031481825, lng:126.97302689671172 }
    const markerDrinkingWater = new google.maps.Marker({
      position: DrinkingWater,
      map: map,
      icon: icons.internship
    })

    const DrinkingWaterContent = `
      <h1>DrinkingWater</h1>
      <p>my study</p>
    `
    
    const infoWindowDrinkingWater = new google.maps.InfoWindow({
      content: DrinkingWaterContent
    })

    markerDrinkingWater.addListener('click',function(){
      infoWindowDrinkingWater.open(map,markerDrinkingWater);
    })
    //Internship End

  //SeoulEnd

  //HwaCheon
  const HwaCheon = { lat:38.199529173356346, lng:127.58830488256483}
  const markerHwaCheon = new google.maps.Marker({
    position: HwaCheon,
    map: map,
    icon: icons.military
  })

  const HwaCheonContent = `
    <div class='citycontent'>
      <h1>Hwacheon</h1>
      <img src="./image/soldierYunHo.jpeg" alt="soldierYunHo" width =300px;>
      <p>Mandatory military service for 21months from March.2012 to December.2013<br>
      it was really close to the border against north Korea, <br>appreciated that I was born in southern part of this land...</p>
    </div>
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
    icon: icons.education
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
    icon: icons.education
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
  
  //Add Legend 
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('legend'));

  //Marker cluster

  markers = [
    markerBusan,
    markerSeoul,
    markerHwaCheon,
    markerDrinkingWater,
    markerSeoulWalk,
    markerFulda,
    markerStuttgart
  ]
  new MarkerClusterer(map, markers, 
    {
      imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    }
  );
}


