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
var format_BatasProvinsi_0 = new ol.format.GeoJSON();
var features_BatasProvinsi_0 = format_BatasProvinsi_0.readFeatures(json_BatasProvinsi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasProvinsi_0.addFeatures(features_BatasProvinsi_0);var lyr_BatasProvinsi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi_0, 
                style: style_BatasProvinsi_0,
    title: 'Batas Provinsi<br />\
    <img src="styles/legend/BatasProvinsi_0_0.png" /> sangat sedikit<br />\
    <img src="styles/legend/BatasProvinsi_0_1.png" /> sedikit<br />\
    <img src="styles/legend/BatasProvinsi_0_2.png" /> banyak<br />\
    <img src="styles/legend/BatasProvinsi_0_3.png" /> sangat banyak<br />'
        });

lyr_BatasProvinsi_0.setVisible(true);
var layersList = [baseLayer,lyr_BatasProvinsi_0];
lyr_BatasProvinsi_0.set('fieldAliases', {'Provinsi': 'Provinsi', '2022': '2022', });
lyr_BatasProvinsi_0.set('fieldImages', {'Provinsi': 'TextEdit', '2022': 'TextEdit', });
lyr_BatasProvinsi_0.set('fieldLabels', {'Provinsi': 'inline label', '2022': 'inline label', });
lyr_BatasProvinsi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});