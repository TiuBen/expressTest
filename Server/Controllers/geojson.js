// const Radar = require('../models/radarModel');

// 显示完整的作者列表
// exports.radar_data = (req, res) => {
//     console.log("test mapbox load localhost");
    
//     res.send('未实现：作者列表');
// };

var allPro=[
    {
        "ProcedureName": "RWY22R 离场 UBGIV-19D",
        "Points": [
            "HH400",
            "HH556",
            "HH456",
            "UBGIV"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 ONIXO-08A",
        "Points": [
            "ONIXO",
            "HOK",
            "HH405",
            "DHP",
            "HH414"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 ONIXO-09A",
        "Points": [
            "ONIXO",
            "HOK",
            "HH405",
            "HH418",
            "HH404",
            "HH403"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 GUGAM-09A",
        "Points": [
            "GUGAM",
            "HH420",
            "HH421",
            "HH422",
            "HH403"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 LKO-09A",
        "Points": [
            "LOK",
            "HH417"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 XSH-06A (BY ATC)",
        "Points": [
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH418",
            "HH404",
            "HH424"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH424(BY ATC)",
        "Points": [
            "HH424",
            "HH425"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH423 (BY ATC)",
        "Points": [
            "HH423",
            "HH425"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH417(BY ATC)",
        "Points": [
            "HH417",
            "HH416",
            "HH415",
            "HH425"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近(接HH512)、复飞",
        "Points": [
            "HH512",
            "HH511",
            "HH580",
            "HH550",
            "HH404",
            "HH513"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 ONIXO-05A (BY ATC)",
        "Points": [
            "ONIXO",
            "HOK",
            "HH405",
            "DHP",
            "HH414",
            "HH423"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 ONIXO-06A (BY ATC)",
        "Points": [
            "ONIXO",
            "HOK",
            "HH405",
            "HH418",
            "HH404",
            "HH424"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 GUGAM-06A (BY ATC)",
        "Points": [
            "GUGAM",
            "HH420",
            "HH421",
            "HH422",
            "HH424"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 XSH-05A (BY ATC)",
        "Points": [
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH414",
            "HH423"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近过渡 HH513",
        "Points": [
            "HH513",
            "HH502"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近过渡 HH503",
        "Points": [
            "HH503",
            "HH502"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近过渡 HH521",
        "Points": [
            "HH517",
            "HH507",
            "HH502",
            "HH521",
            "HH507",
            "HH502"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近(接HH502)、复飞",
        "Points": [
            "HH502",
            "HH501",
            "HH530",
            "HH500",
            "HH414",
            "DHP"
        ]
    },
    {
        "ProcedureName": "RWY22RL 等待 出航时间 1MIN ",
        "Points": [
            "DHP"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近过渡 HH513",
        "Points": [
            "HH513",
            "HH512"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近过渡 HH503",
        "Points": [
            "HH503",
            "HH512"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近过渡 HH517",
        "Points": [
            "HH517",
            "HH522",
            "HH512"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近过渡 HH521",
        "Points": [
            "HH521",
            "HH508",
            "HH512"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近过渡 HH417",
        "Points": [
            "HH417",
            "HH410",
            "HH429",
            "HH428",
            "HH402"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近过渡 HH413",
        "Points": [
            "HH413",
            "HH402"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近(接HH402)、复飞",
        "Points": [
            "HH402",
            "HH401",
            "HH430",
            "HH400",
            "HH404",
            "HH403",
            "HH420"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH403",
        "Points": [
            "HH403",
            "HH412"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH417",
        "Points": [
            "HH417",
            "HH416",
            "HH415",
            "HH412"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH413",
        "Points": [
            "HH413",
            "HH412"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近(接HH412)、复飞",
        "Points": [
            "HH412",
            "HH411",
            "HH480",
            "HH450",
            "HH414",
            "DCD",
            "HH417"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 LKO-19A",
        "Points": [
            "LKO",
            "HH519",
            "DHB",
            "HH404",
            "HH513"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 XSH-17A(BY ATC)",
        "Points": [
            "XSH",
            "HH461",
            "HH459",
            "HH504",
            "HH414",
            "HH503"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 XSH-18A(BY ATC)",
        "Points": [
            "XSH",
            "HH516",
            "HH517"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 XSH-19A",
        "Points": [
            "XSH",
            "HH515",
            "HH514",
            "HH414",
            "HH503"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场等待 (出航时间:1MIN)",
        "Points": [
            "HH420",
            "HH417",
            "HH407",
            "HH405"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场等待 (出航时间:1MIN)",
        "Points": [
            "HH515",
            "HH516",
            "HH461",
            "HH518",
            "HH519",
            "HH521"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近过渡 HH403",
        "Points": [
            "HH403",
            "HH402"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 XSH-08A",
        "Points": [
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH418",
            "HH404",
            "HH403"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 XSH-09A",
        "Points": [
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH414",
            "HH413"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 ONIXO-19A",
        "Points": [
            "ONIXO",
            "HOK",
            "HH521"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 GUGAM-18A",
        "Points": [
            "GUGAM",
            "HH518",
            "HH505",
            "HH504",
            "HH414",
            "HH503"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 GUGAM-19A",
        "Points": [
            "GUGAM",
            "HH518",
            "DHB",
            "HH404",
            "HH513"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 WTM-09D",
        "Points": [
            "LKO",
            "HH519",
            "HH505",
            "HH504",
            "HH414",
            "HH503",
            "HH550",
            "HH454",
            "HH455",
            "HH463",
            "WTM"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 LKO-09D(BY ATC)",
        "Points": [
            "HH550",
            "HH454",
            "HH455",
            "HH463",
            "LKO",
            "HH460",
            "DHP",
            "HH457",
            "HH458",
            "DCD",
            "LKO"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 XSH-05D",
        "Points": [
            "HH550",
            "HH454",
            "HH455",
            "DHB",
            "HH459",
            "HH461",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 XSH-07D(BY ATC)",
        "Points": [
            "HH460",
            "DHP",
            "HH457",
            "HH461",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 XSH-09D",
        "Points": [
            "DF",
            "TF",
            "TF",
            "TF",
            "TF",
            "TF",
            "TF"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 BIVIP-09D",
        "Points": [
            "HH460",
            "DHP",
            "BIVIP",
            "HH460",
            "HH451",
            "BIVIP"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 UBGIV-07D",
        "Points": [
            "HH460",
            "HH453",
            "HH462",
            "UBGIV"
        ]
    },
    {
        "ProcedureName": "RWY04L 离场 UBGIV-09D",
        "Points": [
            "HH550",
            "HH454",
            "UBGIV"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 WTM-08D",
        "Points": [
            "HH464",
            "HH456",
            "HH455",
            "HH463",
            "WTM"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 LKO-06D",
        "Points": [
            "HH464",
            "HH456",
            "HH455",
            "HH463",
            "LKO"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 LKO-08D(BY ATC)",
        "Points": [
            "HH500",
            "HH457",
            "HH458",
            "DCD",
            "LKO"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 XSH-04D",
        "Points": [
            "HH464",
            "HH456",
            "HH455",
            "DHB",
            "HH459",
            "HH461",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 XSH-06D(BY ATC) ",
        "Points": [
            "HH500",
            "",
            "HH461",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 XSH-08D",
        "Points": [
            "HH500",
            "",
            "HH458",
            "HH459",
            "HH461",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 BIVIP-06D(BY ATC)",
        "Points": [
            "HH500",
            "DHP",
            "BIVIP"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 BIVIP-08D",
        "Points": [
            "HH464",
            "HH452",
            "BIVIP"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 UBGIV-06D",
        "Points": [
            "HH464",
            "HH452",
            "HH462",
            "UBGIV"
        ]
    },
    {
        "ProcedureName": "RWY04R 离场 UBGIV-08D",
        "Points": [
            "HH464",
            "HH456",
            "UBGIV"
        ]
    },
    {
        "ProcedureName": "RWY22L 离场 WTM-18D",
        "Points": [
            "HH560",
            "DHB",
            "WTM"
        ]
    },
    {
        "ProcedureName": "RWY22L 离场 LKO-16D",
        "Points": [
            "HH560",
            "HH558",
            "LKO"
        ]
    },
    {
        "ProcedureName": "RWY22L 离场 LKO-18D(BY ATC)",
        "Points": [
            "HH450",
            "DCD",
            "LKO"
        ]
    },
    {
        "ProcedureName": "RWY22L 离场 XSH-16D",
        "Points": [
            "HH560",
            "HH455",
            "HH456",
            "HH552",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY22L 离场 BIVIP-16D",
        "Points": [
            "HH450",
            "HH553",
            "XSH",
            "HH560",
            "HH455",
            "HH456",
            "HH552",
            "BIVIP"
        ]
    },
    {
        "ProcedureName": "RWY22L 离场 UBGIV-16D(BY ATC)",
        "Points": [
            "HH450",
            "HH551",
            "HH552",
            "BIVIP",
            "HH450",
            "HH551",
            "HH552",
            "HH561",
            "UBGIV"
        ]
    },
    {
        "ProcedureName": "RWY22R 离场 WTM-19D",
        "Points": [
            "HH560",
            "HH455",
            "HH456",
            "UBGIV",
            "",
            "DHB",
            "WTM"
        ]
    },
    {
        "ProcedureName": "RWY22R 离场 LKO-17D",
        "Points": [
            "HH554",
            "HH559",
            "LKO"
        ]
    },
    {
        "ProcedureName": "RWY22R 离场 LKO-19D(BY ATC)",
        "Points": [
            "HH554",
            "DCD",
            "LKO"
        ]
    },
    {
        "ProcedureName": "RWY22R 离场 XSH-17D",
        "Points": [
            "HH400",
            "HH556",
            "HH456",
            "HH552",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY22R 离场 XSH-19D(BY ATC)",
        "Points": [
            "HH554",
            "HH553",
            "XSH"
        ]
    },
    {
        "ProcedureName": "RWY22R 离场 BIVIP-17D",
        "Points": [
            "HH400",
            "HH556",
            "HH456",
            "HH552",
            "BIVIP"
        ]
    },
    {
        "ProcedureName": "RWY22R 离场 BIVIP-19D(BY ATC)",
        "Points": [
            "HH554",
            "HH553",
            "HH552",
            "BIVIP"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 ONIXO-08A",
        "Points": [
            "HH400",
            "HH556",
            "HH456",
            "UBGIV",
            "ONIXO",
            "HOK",
            "HH405",
            "DHP",
            "HH414",
            "HH413"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 ONIXO-09A",
        "Points": [
            "ONIXO",
            "",
            "HH405",
            "HH418",
            "HH404",
            "HH403"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 GUGAM-09A",
        "Points": [
            "GUGAM",
            "HH420",
            "HH421",
            "HH422",
            "HH403"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 LKO-09A",
        "Points": [
            "LKO",
            "HH417"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 XSH-08A",
        "Points": [
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH418",
            "HH404",
            "HH403"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场 XSH-09A",
        "Points": [
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH414",
            "HH413"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 ONIXO-19A",
        "Points": [
            "ONIXO",
            "HOK",
            "HH521"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 GUGAM-18A",
        "Points": [
            "GUGMA",
            "HH518",
            "HH505",
            "HH504",
            "HH414",
            "HH503"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 GUGAM-19A",
        "Points": [
            "GUGMA",
            "HH518",
            "DHB",
            "HH404",
            "HH513"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 LKO-18A",
        "Points": [
            "LKO",
            "HH519",
            "HH505",
            "HH504",
            "HH414",
            "HH503"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 LKO-19A",
        "Points": [
            "LKO",
            "HH519",
            "DHB",
            "HH404",
            "HH513"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 XSH-18A(BY ATC)",
        "Points": [
            "XSH",
            "HH461",
            "HH459",
            "HH504",
            "HH414",
            "HH503",
            "XSH",
            "HH516",
            "HH517"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场 XSH-19A",
        "Points": [
            "XSH",
            "HH515",
            "HH514",
            "HH414",
            "HH503"
        ]
    },
    {
        "ProcedureName": "RWY04L/R 进场等待 (出航时间:1MIN)",
        "Points": [
            "HH420",
            "HH417",
            "HH407",
            "HH405"
        ]
    },
    {
        "ProcedureName": "RWY22L/R 进场等待 (出航时间:1MIN)",
        "Points": [
            "HH515",
            "HH516",
            "HH461",
            "HH518",
            "HH519",
            "HH521"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近过渡 HH403",
        "Points": [
            "HH403",
            "HH402"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近过渡 HH417",
        "Points": [
            "HH417",
            "HH410",
            "HH429",
            "HH428",
            "HH402"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近过渡 HH413",
        "Points": [
            "HH413",
            "HH402"
        ]
    },
    {
        "ProcedureName": "RWY04L 进近(接HH402)、复飞",
        "Points": [
            "HH402",
            "HH401",
            "HH430",
            "HH400",
            "HH404",
            "HH403",
            "HH420"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH403",
        "Points": [
            "HH403",
            "HH412"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH417",
        "Points": [
            "HH417",
            "HH416",
            "HH415",
            "HH412"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH413",
        "Points": [
            "HH413",
            "HH412"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近(接HH412)、复飞",
        "Points": [
            "HH412",
            "HH411",
            "HH480",
            "HH450",
            "HH414",
            "DCD",
            "HH417"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近过渡 HH513",
        "Points": [
            "HH513",
            "HH502"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近过渡 HH503",
        "Points": [
            "HH503",
            "HH502"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近过渡 HH517",
        "Points": [
            "HH517",
            "HH507",
            "HH502"
        ]
    },
    {
        "ProcedureName": "RWY22L 进近过渡 HH521",
        "Points": [
            "HH521",
            "HH507",
            "HH502"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近(接HH502)、复飞",
        "Points": [
            "HH502",
            "HH501",
            "HH530",
            "HH500",
            "HH414",
            "DHP"
        ]
    },
    {
        "ProcedureName": "RWY22L 等待 (出航时间:1MIN)",
        "Points": [
            "DHP"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近过渡 HH513",
        "Points": [
            "HH513",
            "HH512"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近过渡 HH503",
        "Points": [
            "HH503",
            "HH512"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近过渡 HH517",
        "Points": [
            "HH517",
            "HH522",
            "HH512"
        ]
    },
    {
        "ProcedureName": "RWY22R 进近(接HH512)、复飞",
        "Points": [
            "HH521",
            "HH508",
            "HH512",
            "HH512",
            "HH511",
            "HH580",
            "HH550",
            "HH404",
            "HH513"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 ONIXO-05A (BY ATC)",
        "Points": [
            "ONXIO",
            "HOK",
            "HH405",
            "DHP",
            "HH414",
            "HH423"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 GUGAM-06A (BY ATC)",
        "Points": [
            "ONIXO",
            "HOK",
            "HH405",
            "HH418",
            "HH404",
            "HH424",
            "GUGAM",
            "HH420",
            "HH421",
            "HH422",
            "HH424"
        ]
    },
    {
        "ProcedureName": "RWY04R 进场 XSH-06A (BY ATC)",
        "Points": [
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH414",
            "HH423",
            "XSH",
            "HH407",
            "HH406",
            "DHP",
            "HH418",
            "HH404",
            "HH424"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH424(BY ATC)",
        "Points": [
            "HH424",
            "HH425"
        ]
    },
    {
        "ProcedureName": "RWY04R 进近过渡 HH423 (BY ATC)",
        "Points": [
            "HH423",
            "HH425"
        ]
    }
];
const AppPointsInDecimal = [
    {"Point":"HH400","coordinates":[114.19638888888889,30.772194444444445]},
    {"Point":"HH401","coordinates":[114.08369444444443,30.661777777777775]},
    {"Point":"HH402","coordinates":[113.9803888888889,30.56025]},
    {"Point":"HH403","coordinates":[113.89769444444445,30.62311111111111]},
    {"Point":"HH404","coordinates":[114.12341666666666,30.844805555555553]},
    {"Point":"HH405","coordinates":[114.44472222222223,31.158027777777775]},
    {"Point":"HH406","coordinates":[114.60111111111111,30.80113888888889]},
    {"Point":"HH407","coordinates":[115.04005555555555,30.561722222222222]},
    {"Point":"HH410","coordinates":[113.79916666666666,30.38147222222222]},
    {"Point":"HH411","coordinates":[114.05863888888888,30.608694444444446]},
    {"Point":"HH412","coordinates":[113.99666666666667,30.547833333333337]},
    {"Point":"HH413","coordinates":[114.07730555555555,30.486305555555557]},
    {"Point":"HH414","coordinates":[114.30333333333333,30.707583333333332]},
    {"Point":"HH415","coordinates":[113.92791666666668,30.480194444444443]},
    {"Point":"HH416","coordinates":[113.85924999999999,30.412527777777775]},
    {"Point":"HH417","coordinates":[113.79066666666667,30.344805555555553]},
    {"Point":"HH418","coordinates":[114.26463888888888,30.982805555555554]},
    {"Point":"HH420","coordinates":[113.63650000000001,30.47497222222222]},
    {"Point":"HH421","coordinates":[113.72347222222223,30.52438888888889]},
    {"Point":"HH422","coordinates":[113.81052777777778,30.573777777777778]},
    {"Point":"HH423","coordinates":[114.13055555555555,30.538333333333334]},
    {"Point":"HH424","coordinates":[113.95083333333334,30.67527777777778]},
    {"Point":"HH425","coordinates":[114.04972222222221,30.6]},
    {"Point":"HH428","coordinates":[113.91166666666668,30.492555555555555]},
    {"Point":"HH429","coordinates":[113.84305555555555,30.424861111111113]},
    {"Point":"HH430","coordinates":[114.14288888888889,30.719777777777775]},
    {"Point":"HH450","coordinates":[114.21075,30.757638888888888]},
    {"Point":"HH451","coordinates":[114.53988888888888,31.10677777777778]},
    {"Point":"HH452","coordinates":[114.57122222222222,31.108222222222224]},
    {"Point":"HH453","coordinates":[114.57538888888888,31.141166666666667]},
    {"Point":"HH454","coordinates":[114.12108333333333,30.978805555555553]},
    {"Point":"HH455","coordinates":[113.89430555555556,30.75636111111111]},
    {"Point":"HH456","coordinates":[114.19019444444444,31.046333333333337]},
    {"Point":"HH457","coordinates":[114.45919444444445,30.736472222222222]},
    {"Point":"HH458","coordinates":[114.30644444444444,30.587527777777776]},
    {"Point":"HH459","coordinates":[114.41158333333334,30.493972222222222]},
    {"Point":"HH460","coordinates":[114.35144444444444,30.92361111111111]},
    {"Point":"HH461","coordinates":[114.97238888888889,30.45686111111111]},
    {"Point":"HH462","coordinates":[114.60316666666667,31.360611111111112]},
    {"Point":"HH463","coordinates":[113.82388888888889,30.687]},
    {"Point":"HH464","coordinates":[114.36797222222222,30.91097222222222]},
    {"Point":"HH465","coordinates":[114.26330555555556,30.870527777777777]},
    {"Point":"HH466","coordinates":[114.32963888888888,30.835666666666665]},
    {"Point":"HH480","coordinates":[114.15727777777778,30.70536111111111]},
    {"Point":"HH500","coordinates":[114.23566666666667,30.781972222222223]},
    {"Point":"HH501","coordinates":[114.34863888888889,30.892138888888887]},
    {"Point":"HH502","coordinates":[114.45777777777778,30.998250000000002]},
    {"Point":"HH503","coordinates":[114.53855555555555,30.936444444444444]},
    {"Point":"HH504","coordinates":[114.22838888888889,30.63436111111111]},
    {"Point":"HH505","coordinates":[114.03022222222222,30.44002777777778]},
    {"Point":"HH507","coordinates":[114.5125,31.051333333333336]},
    {"Point":"HH508","coordinates":[114.51061111111112,31.07836111111111]},
    {"Point":"HH511","coordinates":[114.37180555555555,30.943444444444445]},
    {"Point":"HH512","coordinates":[114.44116666666667,31.010916666666667]},
    {"Point":"HH513","coordinates":[114.35833333333333,31.074083333333334]},
    {"Point":"HH514","coordinates":[114.43702777777779,30.60513888888889]},
    {"Point":"HH515","coordinates":[114.99319444444444,30.492805555555556]},
    {"Point":"HH516","coordinates":[115.13641666666668,30.62986111111111]},
    {"Point":"HH517","coordinates":[114.82333333333332,31.086666666666666]},
    {"Point":"HH518","coordinates":[113.54013888888889,30.434333333333335]},
    {"Point":"HH519","coordinates":[113.79813888888889,30.211166666666667]},
    {"Point":"HH521","coordinates":[114.49936111111111,31.238305555555556]},
    {"Point":"HH522","coordinates":[114.47877777777778,31.047444444444444]},
    {"Point":"HH530","coordinates":[114.31569444444445,30.860000000000003]},
    {"Point":"HH550","coordinates":[114.21988888888889,30.795194444444448]},
    {"Point":"HH552","coordinates":[114.66463888888889,30.935833333333335]},
    {"Point":"HH553","coordinates":[114.22297222222223,30.50588888888889]},
    {"Point":"HH554","coordinates":[114.05536111111111,30.633972222222223]},
    {"Point":"HH556","coordinates":[113.97491666666667,30.835583333333332]},
    {"Point":"hH558","coordinates":[113.65797222222223,30.213444444444445]},
    {"Point":"HH559","coordinates":[113.65527777777778,30.238916666666668]},
    {"Point":"HH560","coordinates":[114.07172222222222,30.62152777777778]},
    {"Point":"HH561","coordinates":[114.70119444444445,31.38127777777778]},
    {"Point":"HH563","coordinates":[114.11772222222221,30.727083333333333]},
    {"Point":"HH580","coordinates":[114.29919444444444,30.872694444444445]},
    {"Point":"DCD","coordinates":[114.15666666666667,30.441666666666666]},
    {"Point":"DHB","coordinates":[113.97333333333333,30.696666666666665]},
    {"Point":"DHP","coordinates":[114.47166666666666,30.871666666666666]},
    {"Point":"HOK","coordinates":[114.42833333333333,31.323333333333334]},
    {"Point":"LKO","coordinates":[113.69,29.908333333333335]},
    {"Point":"WTM","coordinates":[113.14166666666667,30.64]},
    {"Point":"XSH","coordinates":[115.26833333333333,30.436666666666667]},
    {"Point":"BIVIP","coordinates":[115.28,31.128333333333334]},
    {"Point":"GUGAM","coordinates":[113.185,30.216666666666665]},
    {"Point":"ONIXO","coordinates":[114.395,31.778333333333332]},
    {"Point":"UBGIV","coordinates":[114.50166666666667,31.696666666666665]}
];
    function outputAirwaysInGeojsonLineString(params) {
        var _tempAllRNPAirwaysInGeoJsonFormate = {
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": []
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": []
                    }
                }
            ]
        };
        
        
        var _output;
        for (let x = 0; x < AppRNPAirways.length; x++) {
            var _temp = {
                "type": "FeatureCollection",
                "features": []
            };
            var _inner=
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": []
                    }
                }    
            ;
        
            _inner.properties=AppRNPAirways[x];
            var _codi=new Array();
             
            for (let j = 0; j < AppRNPAirways[x].POINTS.length; j++) {
                const e = AppRNPAirways[x].POINTS[j];
                for (let u = 0; u < AppPointsInDecimal.length; u++) {
                   if (AppPointsInDecimal[u].Point===e) {
                    // console.log(j+"::"+"  "+JSON.stringify( AppPointsInD[u]));
                    _codi.push(AppPointsInDecimal[u].coordinates);
                   }
                    
                };
            };
            // console.log(_codi);
            _inner.geometry.coordinates=_codi;
            // console.log(JSON.stringify( _inner));
            _temp.features.push(_inner);
        
            // console.log(JSON.stringify(_temp)+','); 
        
            //
           
        
            const fs=require('fs');
            var path=require('path');
            var filename='ZHHH'+ AppRNPAirways[x].PROCEDURE.replace('-','').toUpperCase();
            var _p=path.join(__dirname,filename);
            fs.writeFile(_p+'.geojson', JSON.stringify(_temp), err => {
                if (err) {
                    console.error(err);
                    return;
                }
            })
        
            //
        };
        };
        
        
        



exports.getZhhhAppRnpAirwayLineGeojson=(req,res)=>{
    console.log('####' +req.params.id);

    if (req.params.id==="zhhhTEST") {
        console.log("test!!!!!!");
        


    } else {
        var path=require('path');
        var geojsonFilePath=path.resolve(__dirname,'..')+'/_temp/'+req.params.id.toUpperCase()+'.geojson';
        console.log(geojsonFilePath);
        res.sendFile(geojsonFilePath);
    }
    
}



