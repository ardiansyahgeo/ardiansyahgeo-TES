var size = 0;
var placement = 'point';
function categories_RTRW_PARIAMAN_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Kawasan Hortikultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,255,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Hutan Rakyat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,180,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perkebunan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,175,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Permukiman Perdesaan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,155,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Permukiman Perkotaan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,155,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Sumber Daya Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(80,245,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Tanaman Pangan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,245,70,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sempadan Sungai':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,215,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RTRW_PARIAMAN_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Orde_III");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_RTRW_PARIAMAN_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
