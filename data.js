var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.5647446396133216,
        "pitch": 0.03513755704453558,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.2152711032194095,
          "pitch": 0.3791201260581243,
          "rotation": 0,
          "target": "1-living-"
        },
        {
          "yaw": -1.9258797040810052,
          "pitch": 0.47100422912626705,
          "rotation": 1.5707963267948966,
          "target": "3-courtyard"
        },
        {
          "yaw": -2.3274271532002615,
          "pitch": 0.4047856169236468,
          "rotation": 4.71238898038469,
          "target": "2-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-",
      "name": "LIVING ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2764257803723886,
          "pitch": 0.23436664454461997,
          "rotation": 5.497787143782138,
          "target": "3-courtyard"
        },
        {
          "yaw": -0.8663170871491737,
          "pitch": 0.23970516881126258,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -0.5576535716414508,
          "pitch": 0.27342074858163734,
          "rotation": 6.283185307179586,
          "target": "2-dinning"
        },
        {
          "yaw": 0.931911134986418,
          "pitch": 0.2081530352113461,
          "rotation": 1.5707963267948966,
          "target": "5-first-floor-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinning",
      "name": "DINNING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0912354616636755,
          "pitch": 0.4323741946119206,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -2.1883012532899553,
          "pitch": 0.2974272531036295,
          "rotation": 0,
          "target": "1-living-"
        },
        {
          "yaw": -1.9409389061925282,
          "pitch": 0.369329148399844,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        },
        {
          "yaw": -2.3831835829202745,
          "pitch": 0.4377519809903312,
          "rotation": 4.71238898038469,
          "target": "5-first-floor-living"
        },
        {
          "yaw": -2.0747610484187824,
          "pitch": 0.41252856163744056,
          "rotation": 1.5707963267948966,
          "target": "2-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-courtyard",
      "name": "COURTYARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20683567269946934,
          "pitch": 0.5573353624359072,
          "rotation": 0,
          "target": "1-living-"
        },
        {
          "yaw": -0.47406101815876944,
          "pitch": 0.1971730492719992,
          "rotation": 4.71238898038469,
          "target": "2-dinning"
        },
        {
          "yaw": -0.15267840688986745,
          "pitch": 0.12140083859720363,
          "rotation": 0,
          "target": "5-first-floor-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.629680964049278,
          "pitch": 0.3106706592619748,
          "rotation": 0,
          "target": "2-dinning"
        },
        {
          "yaw": -2.829387408423031,
          "pitch": 0.3470466908198766,
          "rotation": 5.497787143782138,
          "target": "1-living-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-first-floor-living",
      "name": "FIRST FLOOR LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.60582691766482,
          "pitch": 0.30807623017427943,
          "rotation": 0,
          "target": "5-first-floor-living"
        },
        {
          "yaw": 2.5458907945625473,
          "pitch": 0.3618707131853789,
          "rotation": 2.356194490192345,
          "target": "2-dinning"
        },
        {
          "yaw": -1.0777017641647841,
          "pitch": 0.1905650874946403,
          "rotation": 2.356194490192345,
          "target": "1-living-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
