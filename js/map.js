ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){   
    myMap = new ymaps.Map("map", {
        center: [59.911669,30.317764],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark([59.911669,30.317764], { 
        hintContent: 'Рыбалка Онлайн', 
        balloonContent: 'Фишемания' 
    }, {
        iconLayout: 'default#image'
        // iconImageHref: 'img/map_marker.png',
        // iconImageSize: [102, 85],
        // iconImageOffset: [-36, -76]
    });

    myMap.behaviors
    .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    // myMap.controls.remove('zoomControl');
    myMap.behaviors.disable(['scrollZoom']);

}