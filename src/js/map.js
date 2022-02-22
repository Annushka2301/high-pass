ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.76919554053508,37.62577426708976],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  const myPlacemark = new ymaps.Placemark(
    [55.76963100426952,37.63985049999993],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "images/map.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -20],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
