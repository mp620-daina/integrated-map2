ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32737").setExtent([489729.748021, 9251419.839502, 494593.496863, 9253650.023671]);
var wms_layers = [];

var format_buildings_0 = new ol.format.GeoJSON();
var features_buildings_0 = format_buildings_0.readFeatures(json_buildings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_buildings_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_0.addFeatures(features_buildings_0);
var lyr_buildings_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_0, 
                style: style_buildings_0,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_0.png" /> buildings'
            });
var format_repro_hospital_1 = new ol.format.GeoJSON();
var features_repro_hospital_1 = format_repro_hospital_1.readFeatures(json_repro_hospital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_repro_hospital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_repro_hospital_1.addFeatures(features_repro_hospital_1);
var lyr_repro_hospital_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_repro_hospital_1, 
                style: style_repro_hospital_1,
                popuplayertitle: 'repro_hospital',
                interactive: true,
                title: '<img src="styles/legend/repro_hospital_1.png" /> repro_hospital'
            });
var format_schools_2 = new ol.format.GeoJSON();
var features_schools_2 = format_schools_2.readFeatures(json_schools_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_schools_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_2.addFeatures(features_schools_2);
var lyr_schools_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schools_2, 
                style: style_schools_2,
                popuplayertitle: 'schools',
                interactive: true,
                title: '<img src="styles/legend/schools_2.png" /> schools'
            });
var format_markets_3 = new ol.format.GeoJSON();
var features_markets_3 = format_markets_3.readFeatures(json_markets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_markets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_markets_3.addFeatures(features_markets_3);
var lyr_markets_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_markets_3, 
                style: style_markets_3,
                popuplayertitle: 'markets',
                interactive: true,
                title: '<img src="styles/legend/markets_3.png" /> markets'
            });
var group_accessibilityanalysis = new ol.layer.Group({
                                layers: [lyr_repro_hospital_1,lyr_schools_2,lyr_markets_3,],
                                fold: 'close',
                                title: 'accessibility analysis'});

lyr_buildings_0.setVisible(true);lyr_repro_hospital_1.setVisible(true);lyr_schools_2.setVisible(true);lyr_markets_3.setVisible(true);
var layersList = [lyr_buildings_0,group_accessibilityanalysis];
lyr_buildings_0.set('fieldAliases', {'confidence': 'confidence', 'area_in_me': 'area_in_me', });
lyr_repro_hospital_1.set('fieldAliases', {'id': 'id', 'name_1': 'name_1', });
lyr_schools_2.set('fieldAliases', {'id': 'id', 'Names': 'Names', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'amenity': 'amenity', 'capacity': 'capacity', 'isced_leve': 'isced_leve', 'layer': 'layer', 'path': 'path', });
lyr_markets_3.set('fieldAliases', {'id': 'id', 'Names': 'Names', });
lyr_buildings_0.set('fieldImages', {'confidence': '', 'area_in_me': '', });
lyr_repro_hospital_1.set('fieldImages', {'id': '', 'name_1': '', });
lyr_schools_2.set('fieldImages', {'id': '', 'Names': '', 'osm_id': '', 'osm_type': '', 'name': '', 'amenity': '', 'capacity': '', 'isced_leve': '', 'layer': '', 'path': '', });
lyr_markets_3.set('fieldImages', {'id': '', 'Names': '', });
lyr_buildings_0.set('fieldLabels', {'confidence': 'no label', 'area_in_me': 'no label', });
lyr_repro_hospital_1.set('fieldLabels', {'id': 'no label', 'name_1': 'no label', });
lyr_schools_2.set('fieldLabels', {'id': 'header label - visible with data', 'Names': 'no label', 'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'name': 'no label', 'amenity': 'no label', 'capacity': 'no label', 'isced_leve': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_markets_3.set('fieldLabels', {'id': 'no label', 'Names': 'no label', });
lyr_markets_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});