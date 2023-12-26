var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_BatasProvinsi2021_0 = new ol.format.GeoJSON();
var features_BatasProvinsi2021_0 = format_BatasProvinsi2021_0.readFeatures(json_BatasProvinsi2021_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi2021_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasProvinsi2021_0.addFeatures(features_BatasProvinsi2021_0);var lyr_BatasProvinsi2021_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi2021_0, 
                style: style_BatasProvinsi2021_0,
    title: 'Batas Provinsi 2021<br />\
    <img src="styles/legend/BatasProvinsi2021_0_0.png" /> sangat sedikit<br />\
    <img src="styles/legend/BatasProvinsi2021_0_1.png" /> sedikit<br />\
    <img src="styles/legend/BatasProvinsi2021_0_2.png" /> banyak<br />\
    <img src="styles/legend/BatasProvinsi2021_0_3.png" /> sangat banyak<br />'
        });

lyr_BatasProvinsi2021_0.setVisible(true);
var layersList = [baseLayer,lyr_BatasProvinsi2021_0];
lyr_BatasProvinsi2021_0.set('fieldAliases', {'Provinsi': 'Provinsi', '2021': '2021', });
lyr_BatasProvinsi2021_0.set('fieldImages', {'Provinsi': 'TextEdit', '2021': 'TextEdit', });
lyr_BatasProvinsi2021_0.set('fieldLabels', {'Provinsi': 'inline label', '2021': 'inline label', });
lyr_BatasProvinsi2021_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});