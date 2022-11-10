var size = 0;
var placement = 'point';
function categories_POLARUANGDRAFT25102022_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Badan Jalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,30,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Campuran Intensitas Menengah/Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,115,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hortikultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,255,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jalur Hijau':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,245,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pemakaman':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(90,255,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perikanan Budi Daya':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,185,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perkantoran':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,155,155,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perlindungan Setempat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,215,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perumahan Kepadatan Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,250,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perumahan Kepadatan Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,240,5,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perumahan Kepadatan Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,220,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Peternakan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,235,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rimba Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(55,85,10,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,50,155,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,75,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,25,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPU Skala RW':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,100,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tanaman Pangan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,245,70,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Transportasi':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(128,78,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kelurahan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,165,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taman Kecamatan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,135,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pertahanan dan Keamanan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,0,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Instalasi Pengolahan Air Limbah (IPAL)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,230,135,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Instalasi Pengolahan Air Minum (IPAM)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(243,166,178,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cagar Budaya':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,55,205,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan dan Jasa Skala Kota':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,100,100,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perdagangan dan Jasa Skala WP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,130,130,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_POLARUANGDRAFT25102022_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("KODSZN") !== null) {
        labelText = String(feature.get("KODSZN"));
    }
    
var style = categories_POLARUANGDRAFT25102022_14(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
