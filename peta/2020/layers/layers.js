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
var format_BatasProvinsi2020_0 = new ol.format.GeoJSON();
var features_BatasProvinsi2020_0 = format_BatasProvinsi2020_0.readFeatures(json_BatasProvinsi2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi2020_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasProvinsi2020_0.addFeatures(features_BatasProvinsi2020_0);var lyr_BatasProvinsi2020_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi2020_0, 
                style: style_BatasProvinsi2020_0,
    title: 'Batas Provinsi 2020<br />\
    <img src="styles/legend/BatasProvinsi2020_0_0.png" /> sangat sedikit<br />\
    <img src="styles/legend/BatasProvinsi2020_0_1.png" /> sedikit<br />\
    <img src="styles/legend/BatasProvinsi2020_0_2.png" /> banyak<br />\
    <img src="styles/legend/BatasProvinsi2020_0_3.png" /> sangat banyak<br />'
        });

lyr_BatasProvinsi2020_0.setVisible(true);
var layersList = [baseLayer,lyr_BatasProvinsi2020_0];
lyr_BatasProvinsi2020_0.set('fieldAliases', {'Provinsi': 'Provinsi', '2020': '2020', });
lyr_BatasProvinsi2020_0.set('fieldImages', {'Provinsi': 'TextEdit', '2020': 'TextEdit', });
lyr_BatasProvinsi2020_0.set('fieldLabels', {'Provinsi': 'inline label', '2020': 'inline label', });
lyr_BatasProvinsi2020_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});