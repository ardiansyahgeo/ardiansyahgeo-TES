var wms_layers = [];


        var lyr_SATELIT_0 = new ol.layer.Tile({
            'title': 'SATELIT',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_MAP_1 = new ol.layer.Tile({
            'title': 'MAP',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_SATELITDANMAP_2 = new ol.layer.Tile({
            'title': 'SATELIT DAN MAP',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_RTRW_PARIAMAN_3 = new ol.format.GeoJSON();
var features_RTRW_PARIAMAN_3 = format_RTRW_PARIAMAN_3.readFeatures(json_RTRW_PARIAMAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW_PARIAMAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW_PARIAMAN_3.addFeatures(features_RTRW_PARIAMAN_3);
var lyr_RTRW_PARIAMAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RTRW_PARIAMAN_3, 
                style: style_RTRW_PARIAMAN_3,
                interactive: true,
    title: 'RTRW_PARIAMAN<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_0.png" /> Kawasan Hortikultura<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_1.png" /> Kawasan Hutan Rakyat<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_2.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_3.png" /> Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_4.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_5.png" /> Kawasan Sumber Daya Air<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_6.png" /> Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/RTRW_PARIAMAN_3_7.png" /> Sempadan Sungai<br />'
        });
var format_LBS_4 = new ol.format.GeoJSON();
var features_LBS_4 = format_LBS_4.readFeatures(json_LBS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBS_4.addFeatures(features_LBS_4);
var lyr_LBS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LBS_4, 
                style: style_LBS_4,
                interactive: true,
                title: '<img src="styles/legend/LBS_4.png" /> LBS'
            });
var format_LP2B_5 = new ol.format.GeoJSON();
var features_LP2B_5 = format_LP2B_5.readFeatures(json_LP2B_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LP2B_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LP2B_5.addFeatures(features_LP2B_5);
var lyr_LP2B_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LP2B_5, 
                style: style_LP2B_5,
                interactive: true,
                title: '<img src="styles/legend/LP2B_5.png" /> LP2B'
            });
var format_WP_RDTR_6 = new ol.format.GeoJSON();
var features_WP_RDTR_6 = format_WP_RDTR_6.readFeatures(json_WP_RDTR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WP_RDTR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WP_RDTR_6.addFeatures(features_WP_RDTR_6);
var lyr_WP_RDTR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WP_RDTR_6, 
                style: style_WP_RDTR_6,
                interactive: true,
    title: 'WP_RDTR<br />\
    <img src="styles/legend/WP_RDTR_6_0.png" /> KAYU TANAM<br />\
    <img src="styles/legend/WP_RDTR_6_1.png" /> LUBUK ALUNG<br />\
    <img src="styles/legend/WP_RDTR_6_2.png" /> TIRAM<br />'
        });
var format_WaktuTempuhdariPuspem_7 = new ol.format.GeoJSON();
var features_WaktuTempuhdariPuspem_7 = format_WaktuTempuhdariPuspem_7.readFeatures(json_WaktuTempuhdariPuspem_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaktuTempuhdariPuspem_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaktuTempuhdariPuspem_7.addFeatures(features_WaktuTempuhdariPuspem_7);
var lyr_WaktuTempuhdariPuspem_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaktuTempuhdariPuspem_7, 
                style: style_WaktuTempuhdariPuspem_7,
                interactive: true,
    title: 'Waktu Tempuh dari Puspem<br />\
    <img src="styles/legend/WaktuTempuhdariPuspem_7_0.png" /> 0 - 5 menit<br />\
    <img src="styles/legend/WaktuTempuhdariPuspem_7_1.png" /> 5 - 10 menit<br />\
    <img src="styles/legend/WaktuTempuhdariPuspem_7_2.png" /> 10 - 15 menit<br />\
    <img src="styles/legend/WaktuTempuhdariPuspem_7_3.png" /> 15 - 30 menit<br />\
    <img src="styles/legend/WaktuTempuhdariPuspem_7_4.png" /> 30 - 45 menit<br />'
        });
var lyr_ANALISISKESESUAIANPEMBANGUNAN_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "ANALISIS KESESUAIAN PEMBANGUNAN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ANALISISKESESUAIANPEMBANGUNAN_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11160224.604923, -74296.091467, 11168151.609768, -61654.941072]
                            })
                        });
var lyr_arahaliran_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "arahaliran",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/arahaliran_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11160224.604923, -74235.748012, 11168151.768763, -61654.911348]
                            })
                        });
var lyr_hillshade_clip_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "hillshade_clip",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/hillshade_clip_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11160224.604923, -74296.091467, 11168148.562076, -61653.779123]
                            })
                        });
var lyr_slope_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/slope_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11160224.604923, -74296.091467, 11168148.562076, -61653.779123]
                            })
                        });
var format_batas_desa_indikatif_12 = new ol.format.GeoJSON();
var features_batas_desa_indikatif_12 = format_batas_desa_indikatif_12.readFeatures(json_batas_desa_indikatif_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_desa_indikatif_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_desa_indikatif_12.addFeatures(features_batas_desa_indikatif_12);
var lyr_batas_desa_indikatif_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_desa_indikatif_12, 
                style: style_batas_desa_indikatif_12,
                interactive: true,
                title: '<img src="styles/legend/batas_desa_indikatif_12.png" /> batas_desa_indikatif'
            });
var format_batas_kecamatan_kemendagri_13 = new ol.format.GeoJSON();
var features_batas_kecamatan_kemendagri_13 = format_batas_kecamatan_kemendagri_13.readFeatures(json_batas_kecamatan_kemendagri_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kecamatan_kemendagri_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_kecamatan_kemendagri_13.addFeatures(features_batas_kecamatan_kemendagri_13);
var lyr_batas_kecamatan_kemendagri_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kecamatan_kemendagri_13, 
                style: style_batas_kecamatan_kemendagri_13,
                interactive: true,
                title: '<img src="styles/legend/batas_kecamatan_kemendagri_13.png" /> batas_kecamatan_kemendagri'
            });
var format_POLARUANGDRAFT25102022_14 = new ol.format.GeoJSON();
var features_POLARUANGDRAFT25102022_14 = format_POLARUANGDRAFT25102022_14.readFeatures(json_POLARUANGDRAFT25102022_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGDRAFT25102022_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGDRAFT25102022_14.addFeatures(features_POLARUANGDRAFT25102022_14);
var lyr_POLARUANGDRAFT25102022_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANGDRAFT25102022_14, 
                style: style_POLARUANGDRAFT25102022_14,
                interactive: true,
    title: 'POLA RUANG (DRAFT 25102022)<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_2.png" /> Campuran Intensitas Menengah/Sedang<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_3.png" /> Hortikultura<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_4.png" /> Jalur Hijau<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_5.png" /> Pemakaman<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_6.png" /> Perikanan Budi Daya<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_7.png" /> Perkantoran<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_8.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_9.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_10.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_11.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_12.png" /> Peternakan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_13.png" /> Rimba Kota<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_14.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_15.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_16.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_17.png" /> SPU Skala RW<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_18.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_19.png" /> Transportasi<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_20.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_21.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_22.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_23.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_24.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_25.png" /> Cagar Budaya<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_26.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/POLARUANGDRAFT25102022_14_27.png" /> Perdagangan dan Jasa Skala WP<br />'
        });
var format_TRANSPORTASI_GARIS_15 = new ol.format.GeoJSON();
var features_TRANSPORTASI_GARIS_15 = format_TRANSPORTASI_GARIS_15.readFeatures(json_TRANSPORTASI_GARIS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSPORTASI_GARIS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRANSPORTASI_GARIS_15.addFeatures(features_TRANSPORTASI_GARIS_15);
var lyr_TRANSPORTASI_GARIS_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRANSPORTASI_GARIS_15, 
                style: style_TRANSPORTASI_GARIS_15,
                interactive: true,
    title: 'TRANSPORTASI_GARIS<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_1.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_2.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_3.png" /> Jalan Lingkungan Primer<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_4.png" /> Jalan Lingkungan Sekunder<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_5.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_6.png" /> Jalan Tol<br />\
    <img src="styles/legend/TRANSPORTASI_GARIS_15_7.png" /> Jaringan Jalur Kereta Api Antarkota<br />'
        });
var format_TRANSPORTASI_TITIK_16 = new ol.format.GeoJSON();
var features_TRANSPORTASI_TITIK_16 = format_TRANSPORTASI_TITIK_16.readFeatures(json_TRANSPORTASI_TITIK_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSPORTASI_TITIK_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRANSPORTASI_TITIK_16.addFeatures(features_TRANSPORTASI_TITIK_16);
var lyr_TRANSPORTASI_TITIK_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRANSPORTASI_TITIK_16, 
                style: style_TRANSPORTASI_TITIK_16,
                interactive: true,
    title: 'TRANSPORTASI_TITIK<br />\
    <img src="styles/legend/TRANSPORTASI_TITIK_16_0.png" /> Stasiun Penumpang Kecil<br />\
    <img src="styles/legend/TRANSPORTASI_TITIK_16_1.png" /> Terminal Penumpang Tipe C<br />'
        });
var format_AIR_LIMBAH_GARIS_17 = new ol.format.GeoJSON();
var features_AIR_LIMBAH_GARIS_17 = format_AIR_LIMBAH_GARIS_17.readFeatures(json_AIR_LIMBAH_GARIS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIR_LIMBAH_GARIS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIR_LIMBAH_GARIS_17.addFeatures(features_AIR_LIMBAH_GARIS_17);
var lyr_AIR_LIMBAH_GARIS_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIR_LIMBAH_GARIS_17, 
                style: style_AIR_LIMBAH_GARIS_17,
                interactive: true,
    title: 'AIR_LIMBAH_GARIS<br />\
    <img src="styles/legend/AIR_LIMBAH_GARIS_17_0.png" /> Pipa Induk<br />\
    <img src="styles/legend/AIR_LIMBAH_GARIS_17_1.png" /> Pipa Persil<br />'
        });
var format_AIR_LIMBAH_TITIK_18 = new ol.format.GeoJSON();
var features_AIR_LIMBAH_TITIK_18 = format_AIR_LIMBAH_TITIK_18.readFeatures(json_AIR_LIMBAH_TITIK_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIR_LIMBAH_TITIK_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIR_LIMBAH_TITIK_18.addFeatures(features_AIR_LIMBAH_TITIK_18);
var lyr_AIR_LIMBAH_TITIK_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIR_LIMBAH_TITIK_18, 
                style: style_AIR_LIMBAH_TITIK_18,
                interactive: true,
    title: 'AIR_LIMBAH_TITIK<br />\
    <img src="styles/legend/AIR_LIMBAH_TITIK_18_0.png" /> Infrastruktur Sistem Pengelolaan Air Limbah Non Domestik<br />\
    <img src="styles/legend/AIR_LIMBAH_TITIK_18_1.png" /> IPAL Skala Kawasan Tertentu/Permukiman<br />'
        });
var format_SDA_AIR_GARIS_19 = new ol.format.GeoJSON();
var features_SDA_AIR_GARIS_19 = format_SDA_AIR_GARIS_19.readFeatures(json_SDA_AIR_GARIS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDA_AIR_GARIS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDA_AIR_GARIS_19.addFeatures(features_SDA_AIR_GARIS_19);
var lyr_SDA_AIR_GARIS_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SDA_AIR_GARIS_19, 
                style: style_SDA_AIR_GARIS_19,
                interactive: true,
    title: 'SDA_AIR_GARIS<br />\
    <img src="styles/legend/SDA_AIR_GARIS_19_0.png" /> Saluran Irigasi Primer<br />\
    <img src="styles/legend/SDA_AIR_GARIS_19_1.png" /> Saluran Irigasi Sekunder<br />\
    <img src="styles/legend/SDA_AIR_GARIS_19_2.png" /> Saluran Irigasi Tersier<br />'
        });
var format_SDA_AIR_TITIK_20 = new ol.format.GeoJSON();
var features_SDA_AIR_TITIK_20 = format_SDA_AIR_TITIK_20.readFeatures(json_SDA_AIR_TITIK_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDA_AIR_TITIK_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDA_AIR_TITIK_20.addFeatures(features_SDA_AIR_TITIK_20);
var lyr_SDA_AIR_TITIK_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SDA_AIR_TITIK_20, 
                style: style_SDA_AIR_TITIK_20,
                interactive: true,
    title: 'SDA_AIR_TITIK<br />\
    <img src="styles/legend/SDA_AIR_TITIK_20_0.png" /> Bendungan<br />'
        });
var format_DRAINASE_GARIS_21 = new ol.format.GeoJSON();
var features_DRAINASE_GARIS_21 = format_DRAINASE_GARIS_21.readFeatures(json_DRAINASE_GARIS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINASE_GARIS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINASE_GARIS_21.addFeatures(features_DRAINASE_GARIS_21);
var lyr_DRAINASE_GARIS_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRAINASE_GARIS_21, 
                style: style_DRAINASE_GARIS_21,
                interactive: true,
    title: 'DRAINASE_GARIS<br />\
    <img src="styles/legend/DRAINASE_GARIS_21_0.png" /> Jaringan Drainase Primer<br />\
    <img src="styles/legend/DRAINASE_GARIS_21_1.png" /> Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/DRAINASE_GARIS_21_2.png" /> Jaringan Drainase Tersier<br />'
        });
var format_DRAINASE_TITIK_22 = new ol.format.GeoJSON();
var features_DRAINASE_TITIK_22 = format_DRAINASE_TITIK_22.readFeatures(json_DRAINASE_TITIK_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINASE_TITIK_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINASE_TITIK_22.addFeatures(features_DRAINASE_TITIK_22);
var lyr_DRAINASE_TITIK_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRAINASE_TITIK_22, 
                style: style_DRAINASE_TITIK_22,
                interactive: true,
    title: 'DRAINASE_TITIK<br />\
    <img src="styles/legend/DRAINASE_TITIK_22_0.png" /> Bangunan Tampungan (Polder)<br />'
        });
var format_TELEKOMUNIKASI_GARIS_23 = new ol.format.GeoJSON();
var features_TELEKOMUNIKASI_GARIS_23 = format_TELEKOMUNIKASI_GARIS_23.readFeatures(json_TELEKOMUNIKASI_GARIS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TELEKOMUNIKASI_GARIS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TELEKOMUNIKASI_GARIS_23.addFeatures(features_TELEKOMUNIKASI_GARIS_23);
var lyr_TELEKOMUNIKASI_GARIS_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TELEKOMUNIKASI_GARIS_23, 
                style: style_TELEKOMUNIKASI_GARIS_23,
                interactive: true,
    title: 'TELEKOMUNIKASI_GARIS<br />\
    <img src="styles/legend/TELEKOMUNIKASI_GARIS_23_0.png" /> Jaringan Serat Optik<br />'
        });
var format_TELEKOMUNIKASI_TITIK_24 = new ol.format.GeoJSON();
var features_TELEKOMUNIKASI_TITIK_24 = format_TELEKOMUNIKASI_TITIK_24.readFeatures(json_TELEKOMUNIKASI_TITIK_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TELEKOMUNIKASI_TITIK_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TELEKOMUNIKASI_TITIK_24.addFeatures(features_TELEKOMUNIKASI_TITIK_24);
var lyr_TELEKOMUNIKASI_TITIK_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TELEKOMUNIKASI_TITIK_24, 
                style: style_TELEKOMUNIKASI_TITIK_24,
                interactive: true,
    title: 'TELEKOMUNIKASI_TITIK<br />\
    <img src="styles/legend/TELEKOMUNIKASI_TITIK_24_0.png" /> Menara Base Transceiver Station (BTS)<br />'
        });
var format_ENERGI_GARIS_25 = new ol.format.GeoJSON();
var features_ENERGI_GARIS_25 = format_ENERGI_GARIS_25.readFeatures(json_ENERGI_GARIS_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENERGI_GARIS_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENERGI_GARIS_25.addFeatures(features_ENERGI_GARIS_25);
var lyr_ENERGI_GARIS_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ENERGI_GARIS_25, 
                style: style_ENERGI_GARIS_25,
                interactive: true,
    title: 'ENERGI_GARIS<br />\
    <img src="styles/legend/ENERGI_GARIS_25_0.png" /> Kabel Bawah Tanah<br />\
    <img src="styles/legend/ENERGI_GARIS_25_1.png" /> Saluran Udara Tegangan Tinggi (SUTT)<br />'
        });
var format_ENERGI_TITIK_26 = new ol.format.GeoJSON();
var features_ENERGI_TITIK_26 = format_ENERGI_TITIK_26.readFeatures(json_ENERGI_TITIK_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENERGI_TITIK_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENERGI_TITIK_26.addFeatures(features_ENERGI_TITIK_26);
var lyr_ENERGI_TITIK_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ENERGI_TITIK_26, 
                style: style_ENERGI_TITIK_26,
                interactive: true,
    title: 'ENERGI_TITIK<br />\
    <img src="styles/legend/ENERGI_TITIK_26_0.png" /> Gardu Induk<br />'
        });
var format_PERSAMPAHAN_TITIK_27 = new ol.format.GeoJSON();
var features_PERSAMPAHAN_TITIK_27 = format_PERSAMPAHAN_TITIK_27.readFeatures(json_PERSAMPAHAN_TITIK_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERSAMPAHAN_TITIK_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERSAMPAHAN_TITIK_27.addFeatures(features_PERSAMPAHAN_TITIK_27);
var lyr_PERSAMPAHAN_TITIK_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERSAMPAHAN_TITIK_27, 
                style: style_PERSAMPAHAN_TITIK_27,
                interactive: true,
    title: 'PERSAMPAHAN_TITIK<br />\
    <img src="styles/legend/PERSAMPAHAN_TITIK_27_0.png" /> Tempat Penampungan Sementara (TPS)<br />\
    <img src="styles/legend/PERSAMPAHAN_TITIK_27_1.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />'
        });
var format_PERSAMPAHAN_28 = new ol.format.GeoJSON();
var features_PERSAMPAHAN_28 = format_PERSAMPAHAN_28.readFeatures(json_PERSAMPAHAN_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERSAMPAHAN_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERSAMPAHAN_28.addFeatures(features_PERSAMPAHAN_28);
var lyr_PERSAMPAHAN_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERSAMPAHAN_28, 
                style: style_PERSAMPAHAN_28,
                interactive: true,
    title: 'PERSAMPAHAN<br />\
    <img src="styles/legend/PERSAMPAHAN_28_0.png" /> Tempat Pemrosesan Akhir (TPA)<br />\
    <img src="styles/legend/PERSAMPAHAN_28_1.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />'
        });
var format_PUSATPELAYANAN_29 = new ol.format.GeoJSON();
var features_PUSATPELAYANAN_29 = format_PUSATPELAYANAN_29.readFeatures(json_PUSATPELAYANAN_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSATPELAYANAN_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSATPELAYANAN_29.addFeatures(features_PUSATPELAYANAN_29);
var lyr_PUSATPELAYANAN_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSATPELAYANAN_29, 
                style: style_PUSATPELAYANAN_29,
                interactive: true,
    title: 'PUSAT PELAYANAN<br />\
    <img src="styles/legend/PUSATPELAYANAN_29_0.png" /> PL KEC<br />\
    <img src="styles/legend/PUSATPELAYANAN_29_1.png" /> PL KEL<br />\
    <img src="styles/legend/PUSATPELAYANAN_29_2.png" /> PPK<br />\
    <img src="styles/legend/PUSATPELAYANAN_29_3.png" /> SPPK<br />'
        });
var format_FASOSFASUM_30 = new ol.format.GeoJSON();
var features_FASOSFASUM_30 = format_FASOSFASUM_30.readFeatures(json_FASOSFASUM_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASOSFASUM_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASOSFASUM_30.addFeatures(features_FASOSFASUM_30);
var lyr_FASOSFASUM_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FASOSFASUM_30, 
                style: style_FASOSFASUM_30,
                interactive: true,
    title: 'FASOS FASUM<br />\
    <img src="styles/legend/FASOSFASUM_30_0.png" /> Fasilitas ibadah<br />\
    <img src="styles/legend/FASOSFASUM_30_1.png" /> Fasilitas kesehatan<br />\
    <img src="styles/legend/FASOSFASUM_30_2.png" /> Fasilitas pendidikan<br />\
    <img src="styles/legend/FASOSFASUM_30_3.png" /> Fasilitas Transportasi<br />\
    <img src="styles/legend/FASOSFASUM_30_4.png" /> Fasilitas Umum<br />\
    <img src="styles/legend/FASOSFASUM_30_5.png" /> Lain-lain<br />\
    <img src="styles/legend/FASOSFASUM_30_6.png" /> Perdagangan dan Jasa<br />\
    <img src="styles/legend/FASOSFASUM_30_7.png" /> Perkantoran pemerintahan<br />'
        });
var format_PEMBAGIAN_SWP_31 = new ol.format.GeoJSON();
var features_PEMBAGIAN_SWP_31 = format_PEMBAGIAN_SWP_31.readFeatures(json_PEMBAGIAN_SWP_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMBAGIAN_SWP_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMBAGIAN_SWP_31.addFeatures(features_PEMBAGIAN_SWP_31);
var lyr_PEMBAGIAN_SWP_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMBAGIAN_SWP_31, 
                style: style_PEMBAGIAN_SWP_31,
                interactive: true,
                title: '<img src="styles/legend/PEMBAGIAN_SWP_31.png" /> PEMBAGIAN_SWP'
            });

lyr_SATELIT_0.setVisible(false);lyr_MAP_1.setVisible(false);lyr_SATELITDANMAP_2.setVisible(true);lyr_RTRW_PARIAMAN_3.setVisible(false);lyr_LBS_4.setVisible(false);lyr_LP2B_5.setVisible(false);lyr_WP_RDTR_6.setVisible(false);lyr_WaktuTempuhdariPuspem_7.setVisible(false);lyr_ANALISISKESESUAIANPEMBANGUNAN_8.setVisible(false);lyr_arahaliran_9.setVisible(false);lyr_hillshade_clip_10.setVisible(false);lyr_slope_11.setVisible(false);lyr_batas_desa_indikatif_12.setVisible(false);lyr_batas_kecamatan_kemendagri_13.setVisible(false);lyr_POLARUANGDRAFT25102022_14.setVisible(false);lyr_TRANSPORTASI_GARIS_15.setVisible(false);lyr_TRANSPORTASI_TITIK_16.setVisible(false);lyr_AIR_LIMBAH_GARIS_17.setVisible(false);lyr_AIR_LIMBAH_TITIK_18.setVisible(false);lyr_SDA_AIR_GARIS_19.setVisible(false);lyr_SDA_AIR_TITIK_20.setVisible(false);lyr_DRAINASE_GARIS_21.setVisible(false);lyr_DRAINASE_TITIK_22.setVisible(false);lyr_TELEKOMUNIKASI_GARIS_23.setVisible(false);lyr_TELEKOMUNIKASI_TITIK_24.setVisible(false);lyr_ENERGI_GARIS_25.setVisible(false);lyr_ENERGI_TITIK_26.setVisible(false);lyr_PERSAMPAHAN_TITIK_27.setVisible(false);lyr_PERSAMPAHAN_28.setVisible(false);lyr_PUSATPELAYANAN_29.setVisible(false);lyr_FASOSFASUM_30.setVisible(false);lyr_PEMBAGIAN_SWP_31.setVisible(true);
var layersList = [lyr_SATELIT_0,lyr_MAP_1,lyr_SATELITDANMAP_2,lyr_RTRW_PARIAMAN_3,lyr_LBS_4,lyr_LP2B_5,lyr_WP_RDTR_6,lyr_WaktuTempuhdariPuspem_7,lyr_ANALISISKESESUAIANPEMBANGUNAN_8,lyr_arahaliran_9,lyr_hillshade_clip_10,lyr_slope_11,lyr_batas_desa_indikatif_12,lyr_batas_kecamatan_kemendagri_13,lyr_POLARUANGDRAFT25102022_14,lyr_TRANSPORTASI_GARIS_15,lyr_TRANSPORTASI_TITIK_16,lyr_AIR_LIMBAH_GARIS_17,lyr_AIR_LIMBAH_TITIK_18,lyr_SDA_AIR_GARIS_19,lyr_SDA_AIR_TITIK_20,lyr_DRAINASE_GARIS_21,lyr_DRAINASE_TITIK_22,lyr_TELEKOMUNIKASI_GARIS_23,lyr_TELEKOMUNIKASI_TITIK_24,lyr_ENERGI_GARIS_25,lyr_ENERGI_TITIK_26,lyr_PERSAMPAHAN_TITIK_27,lyr_PERSAMPAHAN_28,lyr_PUSATPELAYANAN_29,lyr_FASOSFASUM_30,lyr_PEMBAGIAN_SWP_31];
lyr_RTRW_PARIAMAN_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Orde_I': 'Orde_I', 'Orde_II': 'Orde_II', 'Orde_III': 'Orde_III', 'Orde_IV': 'Orde_IV', 'Luas': 'Luas', 'Sumber': 'Sumber', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LBS_4.set('fieldAliases', {'Ket_1511': 'Ket_1511', 'Ket_2511': 'Ket_2511', 'Keterangan': 'Keterangan', 'Luas_CEA': 'Luas_CEA', 'Qname_2019': 'Qname_2019', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LP2B_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_adm_20': 'FID_adm_20', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'Label': 'Label', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'FID_KP2B_P': 'FID_KP2B_P', 'OBJECTID_3': 'OBJECTID_3', 'KATEGORI': 'KATEGORI', 'Pekerjaan': 'Pekerjaan', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Area': 'Shape_Area', });
lyr_WP_RDTR_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODEWP': 'KODEWP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WaktuTempuhdariPuspem_7.set('fieldAliases', {'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_batas_desa_indikatif_12.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_batas_kecamatan_kemendagri_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_POLARUANGDRAFT25102022_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TRANSPORTASI_GARIS_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_TRANSPORTASI_TITIK_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_AIR_LIMBAH_GARIS_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_AIR_LIMBAH_TITIK_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_SDA_AIR_GARIS_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_SDA_AIR_TITIK_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_DRAINASE_GARIS_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_DRAINASE_TITIK_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_TELEKOMUNIKASI_GARIS_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_TELEKOMUNIKASI_TITIK_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_ENERGI_GARIS_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_ENERGI_TITIK_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PERSAMPAHAN_TITIK_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PERSAMPAHAN_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PUSATPELAYANAN_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_FASOSFASUM_30.set('fieldAliases', {'NAME': 'NAME', 'REMARK': 'REMARK', 'Label': 'Label', });
lyr_PEMBAGIAN_SWP_31.set('fieldAliases', {'Id': 'Id', 'luas_ha': 'luas_ha', 'swp': 'swp', 'blok': 'blok', 'luas': 'luas', });
lyr_RTRW_PARIAMAN_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Orde_I': 'TextEdit', 'Orde_II': 'TextEdit', 'Orde_III': 'TextEdit', 'Orde_IV': 'TextEdit', 'Luas': 'TextEdit', 'Sumber': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LBS_4.set('fieldImages', {'Ket_1511': '', 'Ket_2511': '', 'Keterangan': '', 'Luas_CEA': '', 'Qname_2019': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LP2B_5.set('fieldImages', {'OBJECTID_1': '', 'FID_adm_20': '', 'OBJECTID_2': '', 'OBJECTID': '', 'KECAMATAN': '', 'Label': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'FID_KP2B_P': '', 'OBJECTID_3': '', 'KATEGORI': '', 'Pekerjaan': '', 'Shape_Le_2': '', 'Shape_Ar_1': '', 'Shape_Le_3': '', 'Shape_Area': '', });
lyr_WP_RDTR_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'KODEWP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WaktuTempuhdariPuspem_7.set('fieldImages', {'FacilityID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_batas_desa_indikatif_12.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_batas_kecamatan_kemendagri_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_POLARUANGDRAFT25102022_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'Range', 'KODSZN': 'TextEdit', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRANSPORTASI_GARIS_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_TRANSPORTASI_TITIK_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_AIR_LIMBAH_GARIS_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_AIR_LIMBAH_TITIK_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_SDA_AIR_GARIS_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_SDA_AIR_TITIK_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_DRAINASE_GARIS_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_DRAINASE_TITIK_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_TELEKOMUNIKASI_GARIS_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_TELEKOMUNIKASI_TITIK_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_ENERGI_GARIS_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_ENERGI_TITIK_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PERSAMPAHAN_TITIK_27.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PERSAMPAHAN_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PUSATPELAYANAN_29.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_FASOSFASUM_30.set('fieldImages', {'NAME': 'TextEdit', 'REMARK': 'TextEdit', 'Label': 'TextEdit', });
lyr_PEMBAGIAN_SWP_31.set('fieldImages', {'Id': 'TextEdit', 'luas_ha': 'TextEdit', 'swp': 'TextEdit', 'blok': 'TextEdit', 'luas': 'TextEdit', });
lyr_RTRW_PARIAMAN_3.set('fieldLabels', {'OBJECTID_1': 'inline label', 'OBJECTID': 'inline label', 'Orde_I': 'inline label', 'Orde_II': 'inline label', 'Orde_III': 'inline label', 'Orde_IV': 'inline label', 'Luas': 'inline label', 'Sumber': 'inline label', 'NAMOBJ': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LBS_4.set('fieldLabels', {'Ket_1511': 'inline label', 'Ket_2511': 'inline label', 'Keterangan': 'inline label', 'Luas_CEA': 'inline label', 'Qname_2019': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_LP2B_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_adm_20': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'KECAMATAN': 'no label', 'Label': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'FID_KP2B_P': 'no label', 'OBJECTID_3': 'no label', 'KATEGORI': 'no label', 'Pekerjaan': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'Shape_Le_3': 'no label', 'Shape_Area': 'no label', });
lyr_WP_RDTR_6.set('fieldLabels', {'OBJECTID': 'inline label', 'KODEWP': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_WaktuTempuhdariPuspem_7.set('fieldLabels', {'FacilityID': 'inline label', 'Name': 'inline label', 'FromBreak': 'inline label', 'ToBreak': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_batas_desa_indikatif_12.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'UUPP': 'inline label', });
lyr_batas_kecamatan_kemendagri_13.set('fieldLabels', {'OBJECTID': 'inline label', 'WADMKC': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_POLARUANGDRAFT25102022_14.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'NAMZON': 'inline label', 'KODZON': 'inline label', 'NAMSZN': 'inline label', 'KODSZN': 'inline label', 'JNSRPR': 'inline label', 'KODEWP': 'inline label', 'KODSWP': 'inline label', 'KODBLK': 'inline label', 'KODSBL': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'KKOP_1': 'inline label', 'LP2B_2': 'inline label', 'KRB_03': 'inline label', 'TOD_04': 'inline label', 'TEB_05': 'inline label', 'PUSLIT': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'TPZ_00': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', });
lyr_TRANSPORTASI_GARIS_15.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_TRANSPORTASI_TITIK_16.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_AIR_LIMBAH_GARIS_17.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_AIR_LIMBAH_TITIK_18.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_SDA_AIR_GARIS_19.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'header label', });
lyr_SDA_AIR_TITIK_20.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_DRAINASE_GARIS_21.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_DRAINASE_TITIK_22.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_TELEKOMUNIKASI_GARIS_23.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_TELEKOMUNIKASI_TITIK_24.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_ENERGI_GARIS_25.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_ENERGI_TITIK_26.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_PERSAMPAHAN_TITIK_27.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_PERSAMPAHAN_28.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_PUSATPELAYANAN_29.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_FASOSFASUM_30.set('fieldLabels', {'NAME': 'inline label', 'REMARK': 'inline label', 'Label': 'inline label', });
lyr_PEMBAGIAN_SWP_31.set('fieldLabels', {'Id': 'inline label', 'luas_ha': 'inline label', 'swp': 'inline label', 'blok': 'inline label', 'luas': 'inline label', });
lyr_PEMBAGIAN_SWP_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});