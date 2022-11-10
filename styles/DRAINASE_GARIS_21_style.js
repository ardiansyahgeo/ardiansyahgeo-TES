var size = 0;
var placement = 'point';
function categories_DRAINASE_GARIS_21(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Jaringan Drainase Primer':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,42,92,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jaringan Drainase Sekunder':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,132,235,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jaringan Drainase Tersier':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,218,237,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_DRAINASE_GARIS_21 = function(feature, resolution){
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
    
var style = categories_DRAINASE_GARIS_21(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
