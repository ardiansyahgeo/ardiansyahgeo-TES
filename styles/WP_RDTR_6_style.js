var size = 0;
var placement = 'point';
function categories_WP_RDTR_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'KAYU TANAM':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(13,177,183,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LUBUK ALUNG':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TIRAM':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_WP_RDTR_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("KODEWP");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_WP_RDTR_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
