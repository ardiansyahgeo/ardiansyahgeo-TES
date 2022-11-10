var size = 0;
var placement = 'point';
function categories_AIR_LIMBAH_GARIS_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Pipa Induk':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,102,77,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pipa Persil':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(60,23,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AIR_LIMBAH_GARIS_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_AIR_LIMBAH_GARIS_17(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
