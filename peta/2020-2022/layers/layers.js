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
var format_BatasProvinsi2022_0 = new ol.format.GeoJSON();
var features_BatasProvinsi2022_0 = format_BatasProvinsi2022_0.readFeatures(json_BatasProvinsi2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi2022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasProvinsi2022_0.addFeatures(features_BatasProvinsi2022_0);var lyr_BatasProvinsi2022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi2022_0, 
                style: style_BatasProvinsi2022_0,
    title: 'Batas Provinsi 2022<br />\
    <img src="styles/legend/BatasProvinsi2022_0_0.png" /> sangat sedikit<br />\
    <img src="styles/legend/BatasProvinsi2022_0_1.png" /> sedikit<br />\
    <img src="styles/legend/BatasProvinsi2022_0_2.png" /> banyak<br />\
    <img src="styles/legend/BatasProvinsi2022_0_3.png" /> sangat banyak<br />'
        });var format_BatasProvinsi2021_1 = new ol.format.GeoJSON();
var features_BatasProvinsi2021_1 = format_BatasProvinsi2021_1.readFeatures(json_BatasProvinsi2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi2021_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasProvinsi2021_1.addFeatures(features_BatasProvinsi2021_1);var lyr_BatasProvinsi2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi2021_1, 
                style: style_BatasProvinsi2021_1,
    title: 'Batas Provinsi 2021<br />\
    <img src="styles/legend/BatasProvinsi2021_1_0.png" /> sangat sedikit<br />\
    <img src="styles/legend/BatasProvinsi2021_1_1.png" /> sedikit<br />\
    <img src="styles/legend/BatasProvinsi2021_1_2.png" /> banyak<br />\
    <img src="styles/legend/BatasProvinsi2021_1_3.png" /> sangat banyak<br />'
        });var format_BatasProvinsi2020_2 = new ol.format.GeoJSON();
var features_BatasProvinsi2020_2 = format_BatasProvinsi2020_2.readFeatures(json_BatasProvinsi2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi2020_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasProvinsi2020_2.addFeatures(features_BatasProvinsi2020_2);var lyr_BatasProvinsi2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasProvinsi2020_2, 
                style: style_BatasProvinsi2020_2,
    title: 'Batas Provinsi 2020<br />\
    <img src="styles/legend/BatasProvinsi2020_2_0.png" /> sangat sedikit<br />\
    <img src="styles/legend/BatasProvinsi2020_2_1.png" /> sedikit<br />\
    <img src="styles/legend/BatasProvinsi2020_2_2.png" /> banyak<br />\
    <img src="styles/legend/BatasProvinsi2020_2_3.png" /> sangat banyak<br />'
        });

lyr_BatasProvinsi2022_0.setVisible(true);lyr_BatasProvinsi2021_1.setVisible(true);lyr_BatasProvinsi2020_2.setVisible(true);
var layersList = [baseLayer,lyr_BatasProvinsi2022_0,lyr_BatasProvinsi2021_1,lyr_BatasProvinsi2020_2];
lyr_BatasProvinsi2022_0.set('fieldAliases', {'Provinsi': 'Provinsi', '2020': '2020', '2021': '2021', '2022': '2022', });
lyr_BatasProvinsi2021_1.set('fieldAliases', {'Provinsi': 'Provinsi', '2020': '2020', '2021': '2021', '2022': '2022', });
lyr_BatasProvinsi2020_2.set('fieldAliases', {'Provinsi': 'Provinsi', '2020': '2020', '2021': '2021', '2022': '2022', });
lyr_BatasProvinsi2022_0.set('fieldImages', {'Provinsi': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr_BatasProvinsi2021_1.set('fieldImages', {'Provinsi': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr_BatasProvinsi2020_2.set('fieldImages', {'Provinsi': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr_BatasProvinsi2022_0.set('fieldLabels', {'Provinsi': 'inline label', '2020': 'inline label', '2021': 'inline label', '2022': 'inline label', });
lyr_BatasProvinsi2021_1.set('fieldLabels', {'Provinsi': 'inline label', '2020': 'inline label', '2021': 'inline label', '2022': 'inline label', });
lyr_BatasProvinsi2020_2.set('fieldLabels', {'Provinsi': 'inline label', '2020': 'inline label', '2021': 'inline label', '2022': 'inline label', });
lyr_BatasProvinsi2020_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});