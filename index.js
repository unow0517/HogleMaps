
let map;


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.2980766, lng:9.6448864 },
    zoom: 5.5,      
  });

  var icons = {
    baby: {
      url: "./image/baby.png",
      scaledSize: new google.maps.Size(30,30)
    },
    education:{
      url: "./image/education.png",
      scaledSize: new google.maps.Size(30,30)
    },
    internship:{
      url: "./image/internship.png",
      scaledSize: new google.maps.Size(30,30)
    },
    military:{
      url: "./image/military.png",
      scaledSize: new google.maps.Size(30,30)
    },
    programming:{
      url: "./image/programming.png",
      scaledSize: new google.maps.Size(30,30)
    },
    work:{
      url: 'image/work.png',
      scaledSize: new google.maps.Size(30,30)
    }
  }

  var largeIcons = {
    baby: {
      url: "./image/baby.png",
      scaledSize: new google.maps.Size(70,70)
    },
    education:{
      url: "./image/education.png",
      scaledSize: new google.maps.Size(70,70)
    },
    internship:{
      url: "./image/internship.png",
      scaledSize: new google.maps.Size(70,70)
    },
    military:{
      url: "./image/military.png",
      scaledSize: new google.maps.Size(70,70)
    },
    programming:{
      url: "./image/programming.png",
      scaledSize: new google.maps.Size(70,70)
    },
    work:{
      url: 'image/work.png',
      scaledSize: new google.maps.Size(70,70)
    }
  }

  //Busan
  const Busan = { lat:35.23694746417701, lng:129.01179299948885 }
  const markerBusan = new google.maps.Marker({
    position: Busan,
    icon: icons.baby,
    map: map,
  })

  const BusanContent = `
    <div class='citycontent'>
      <h1>Busan</h1>
      <img src="./image/100days.jpg" alt="babyYunHo" width = 200px;>
      <p><b>Baby YunHo comes to this world in 1992!<br>
      I have lived in this city before I entered Univerisity</b></p>
    </div>
  `
  
  const infoWindowBusan = new google.maps.InfoWindow({
    content: BusanContent
  })

  markerBusan.addListener('click',function(){
    infoWindowBusan.open(map,markerBusan);
  })

  google.maps.event.addListener(map, 'click', function(){
    infoWindowBusan.close();
  });

  google.maps.event.addListener(markerBusan, 'mouseover', function(){
    markerBusan.setIcon(largeIcons.baby)
  });

  google.maps.event.addListener(markerBusan, 'mouseout', function(){
    markerBusan.setIcon(icons.baby)
  });
  //BusanEnd


  //Bachelor
  const Bachelor = { lat:37.58821968313283, lng:126.9936559964475 }
  const markerBachelor = new google.maps.Marker({
    position: Bachelor,
    map: map,
    icon: icons.education
  })

  const BachelorContent = `
  <div class='citycontent'>
    <h1>Bachelor in Landscape Architecture</h1>
    <img src="./image/uni4.jpg" alt="internshipYunHo" height = 250px;>
    <img src="./image/uni3.jpg" alt="internshipYunHo" height = 250px;>
    <p> 2011-2017 (two years leave for military service) </p>
    <p><b>Bachelor in Landscape Architecture<br>
    Focused on Landscape Design, Geographic Information System</b></p>
  </div>
`
  
  const infoWindowBachelor = new google.maps.InfoWindow({
    content: BachelorContent
  })

  markerBachelor.addListener('click',function(){
    infoWindowBachelor.open(map,markerBachelor);
  })

  google.maps.event.addListener(map, 'click', function(){
    infoWindowBachelor.close();
  });

  google.maps.event.addListener(markerBachelor, 'mouseover', function(){
    markerBachelor.setIcon(largeIcons.education)
  });

  google.maps.event.addListener(markerBachelor, 'mouseout', function(){
    markerBachelor.setIcon(icons.education)
  });
  //BachelorEnd

  //Seoulwalk End
  const SeoulWalk = { lat:37.55426971237671, lng:126.96603377010139 }
  const markerSeoulWalk = new google.maps.Marker({
    position: SeoulWalk,
    map: map,
    icon: icons.internship
  })
  const SeoulWalkContent = `
  <div class='citycontent'>
    <h1>Seoulwalk</h1>
    <img src="./image/seoulWalkYunHo.jpg" alt="internshipYunHo" height = 250px;>
    <p>01.2017~ 04.2017</p>
    <p><b>Internship in Social Corporation "SeoulWalk" 
    Focused on City Regeneration into Pedestrian-centered City </b></p>
  </div>
  `

  const infoWindowSeoulWalk = new google.maps.InfoWindow({
    content: SeoulWalkContent
  })
  markerSeoulWalk.addListener('click',function(){
    infoWindowSeoulWalk.open(map,markerSeoulWalk);
  })
  google.maps.event.addListener(map, 'click', function(){
    infoWindowSeoulWalk.close();
  });

  google.maps.event.addListener(markerSeoulWalk, 'mouseover', function(){
    markerSeoulWalk.setIcon(largeIcons.internship)
  });

  google.maps.event.addListener(markerSeoulWalk, 'mouseout', function(){
    markerSeoulWalk.setIcon(icons.internship)
  });
  //Seoulwalk End

  //DrinkingWater 
  const DrinkingWater = {lat:37.39174031481825, lng:126.97302689671172 }
  const markerDrinkingWater = new google.maps.Marker({
    position: DrinkingWater,
    map: map,
    icon: icons.internship
  })
  const DrinkingWaterContent = `
  <div class='citycontent'>
    <h1>Help Student in Korea Institute of Drinking Water Research</h1>
    <img src="./image/intern2.jpg" alt="internshipYunHo" height = 250px;>
    <img src="./image/intern1.jpg" alt="internshipYunHo" height = 250px;>
    <img src="./image/intern3.jpg" alt="internshipYunHo" height = 250px;>
    <p>03.2016~08.2016</p>
    <p><b>Help Student in Rooftop air-downcooling system with Sedum plants</b></p>
  </div>
  `
  
  const infoWindowDrinkingWater = new google.maps.InfoWindow({
    content: DrinkingWaterContent
  })
  markerDrinkingWater.addListener('click',function(){
    infoWindowDrinkingWater.open(map,markerDrinkingWater);
  })

  google.maps.event.addListener(map, 'click', function(){
    infoWindowDrinkingWater.close();
  });

  google.maps.event.addListener(markerDrinkingWater, 'mouseover', function(){
    markerDrinkingWater.setIcon(largeIcons.internship)
  });

  google.maps.event.addListener(markerDrinkingWater, 'mouseout', function(){
    markerDrinkingWater.setIcon(icons.internship)
  });
  //Drinkingwater End

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
      <p>03.2012 - 12.2013</p>
      <p><b>Mandatory military service for 21months<br>
      it was really close to the border against north Korea, <br>appreciated that I was born in southern part of this land...</b></p>
    </div>
  `
  
  const infoWindowHwaCheon = new google.maps.InfoWindow({
    content: HwaCheonContent
  })

  markerHwaCheon.addListener('click',function(){
    infoWindowHwaCheon.open(map,markerHwaCheon);
  })

  google.maps.event.addListener(map, 'click', function(){
    infoWindowHwaCheon.close();
  });

  google.maps.event.addListener(markerHwaCheon, 'mouseover', function(){
    markerHwaCheon.setIcon(largeIcons.military)
  });

  google.maps.event.addListener(markerHwaCheon, 'mouseout', function(){
    markerHwaCheon.setIcon(icons.military)
  });
  //HwaCheonEnd

  //Stuttgart
  const Stuttgart = { lat:48.71200950175008, lng:9.211419533204662}
  const markerStuttgart = new google.maps.Marker({
    position: Stuttgart,
    map: map,
    icon: icons.education
  })

  const StuttgarttContent = `
  <div class='citycontent'>
    <h1>Stuttgart</h1>
    <div>
      <img src="./image/thesis.jpg" alt="thesis" height =250px;>
      <img src="./image/master2.jpg" alt="library" height =250px;>
    </div>
    <img src="./image/master1.jpg" alt="excursion" width =584px;>
    <p>09.2017 - 09.2019</p>
    <p><b>Master in Landscape Ecology focused on Geographical Information
    System</b>
    </p>
  </div>
  `
  
  const infoWindowStuttgart = new google.maps.InfoWindow({
    content: StuttgarttContent
  })

  markerStuttgart.addListener('click',function(){
    infoWindowStuttgart.open(map,markerStuttgart);
  })
  google.maps.event.addListener(map, 'click', function(){
    infoWindowStuttgart.close();
  });

  google.maps.event.addListener(markerStuttgart, 'mouseover', function(){
    markerStuttgart.setIcon(largeIcons.education)
  });

  google.maps.event.addListener(markerStuttgart, 'mouseout', function(){
    markerStuttgart.setIcon(icons.education)
  });
  //SutttgartEnd

  //Fulda
  const Fulda = { lat:50.56557277840046, lng: 9.688217132843503}
  const markerFulda = new google.maps.Marker({
    position: Fulda,
    map: map,
    icon: icons.education
  })
  
  const FuldatContent = `
  <div class='citycontent'>
    <h1>Fulda</h1>
    <img src="./image/fulda1.jpg" alt="fuldaImage" height =300px; >
    <img src="./image/fulda2.jpg" alt="fuldaImgae1" height =300px;>
    <p>09.2014 - 02.2015</p>
    <p><b>Exchange Student to Hochschule Fulda during Bachelor</b>
    </p>
  </div>
  `
  
  const infoWindowFulda = new google.maps.InfoWindow({
    content: FuldatContent
  })
  
  markerFulda.addListener('click',function(){
    infoWindowFulda.open(map,markerFulda);
  })
  google.maps.event.addListener(map, 'click', function(){
    infoWindowFulda.close();
  });

  google.maps.event.addListener(markerFulda, 'mouseover', function(){
    markerFulda.setIcon(largeIcons.education)
  });

  google.maps.event.addListener(markerFulda, 'mouseout', function(){
    markerFulda.setIcon(icons.education)
  });
  //FuldaEnd

  //Geislingen
  const Geislingen = { lat:48.621691195065374, lng: 9.829502076353009}
  const markerGeislingen = new google.maps.Marker({
    position: Geislingen,
    map: map,
    icon: icons.programming
  })
  
  const GeislingentContent = `
  <div class='citycontent'>
    <h1>Geislingen</h1>
    <div>
      <img src="./image/geislingen1.jpg" alt="GeislingenImage" height =300px; >
      <img src="./image/geislingen2.jpg" alt="GeislingenImgae1" height =300px;>
    </div>
    <p>08.2019 - Present</p>
    <p><b>Learning Web Development by myself finding a secure job </b>
    </p>
  </>
  `
  
  const infoWindowGeislingen = new google.maps.InfoWindow({
    content: GeislingentContent
  })
  
  markerGeislingen.addListener('click',function(){
    infoWindowGeislingen.open(map,markerGeislingen);
  })
  google.maps.event.addListener(map, 'click', function(){
    infoWindowGeislingen.close();
  });

  google.maps.event.addListener(markerGeislingen, 'mouseover', function(){
    markerGeislingen.setIcon(largeIcons.programming)
  });

  google.maps.event.addListener(markerGeislingen, 'mouseout', function(){
    markerGeislingen.setIcon(icons.programming)
  });
  //GeislingenEnd
  
  //Ulm
  const Ulm = {lat:48.39783710091737, lng:9.986883574948303}
  const markerUlm = new google.maps.Marker({
    position: Ulm,
    map: map,
    icon: icons.work
  })

  const UlmContent = `
  <div class='citycontent'>
    <h1>Ulm</h1>
    <div>
      <img src="./image/ulm1.jpg" alt="GeislingenImage" height = 400px; >
      <img src="./image/ulm2.jpg" alt="GeislingenImage1" height = 400px;>
    </div>
    <p>04.2021 - Present</p>
    <p><b>The GIS Expert Woo works as a GIS projektmanager</b>
    </p>
  </>
  `

  const infoWindowUlm = new google.maps.InfoWindow({
    content: UlmContent
  })

  markerUlm.addListener('click',function(){
    infoWindowUlm.open(map,markerUlm);
  })

  google.maps.event.addListener(map, 'click', function(){
    infoWindowUlm.close();
  });

  google.maps.event.addListener(markerUlm, 'mouseover', function(){
    markerUlm.setIcon(largeIcons.work)
  });

  google.maps.event.addListener(markerUlm, 'mouseout', function(){
    markerUlm.setIcon(icons.work)
  });
  //Ulm End

  //Add Legend 
  const legend = map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('legend'));

  //Marker cluster

  markers = [
    markerBusan,
    markerBachelor,
    markerHwaCheon,
    markerDrinkingWater,
    markerSeoulWalk,
    markerFulda,
    markerStuttgart,
    markerGeislingen
  ]
  new MarkerClusterer(map, markers, 
    {
      imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    }
  );
  //marker cluster end

  //click and move
}


