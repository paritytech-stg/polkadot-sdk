window.BENCHMARK_DATA = {
  "lastUpdate": 1737651302253,
  "repoUrl": "https://github.com/paritytech-stg/polkadot-sdk",
  "entries": {
    "request_response_protocol": [
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "1a5983688bfb1a21a9b85b550d9f66f37c9ec9c5",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-17T15:56:24Z",
          "tree_id": "a19c5acd69bc2f2c6a1ecd8e11b21d00d124fa53",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/1a5983688bfb1a21a9b85b550d9f66f37c9ec9c5"
        },
        "date": 1737130362559,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17662244,
            "range": "± 144234",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18061042,
            "range": "± 140143",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19648590,
            "range": "± 191887",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23115082,
            "range": "± 194686",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53213684,
            "range": "± 3504398",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 307668509,
            "range": "± 1430704",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2352950161,
            "range": "± 18936423",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14811125,
            "range": "± 192907",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15022439,
            "range": "± 172576",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15499014,
            "range": "± 152928",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19125259,
            "range": "± 137835",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50485467,
            "range": "± 603651",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 304339622,
            "range": "± 1971430",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2439562408,
            "range": "± 22979558",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "045c0910c683fefe9353b04a743a818d26a4fb71",
          "message": "small improvements to cmd commit",
          "timestamp": "2025-01-17T16:25:06Z",
          "tree_id": "6eb7baf4a0d8a1b7ee22e1aaed73078dc6ace63b",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/045c0910c683fefe9353b04a743a818d26a4fb71"
        },
        "date": 1737132450415,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17830714,
            "range": "± 70651",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18264344,
            "range": "± 377123",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19575585,
            "range": "± 183200",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23335074,
            "range": "± 238611",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52624573,
            "range": "± 589376",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 304950766,
            "range": "± 8912670",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2211643188,
            "range": "± 44987812",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14446494,
            "range": "± 81228",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14704701,
            "range": "± 120650",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15010311,
            "range": "± 82179",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19174843,
            "range": "± 133526",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49440776,
            "range": "± 322065",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 295539683,
            "range": "± 1931303",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2396776102,
            "range": "± 8034304",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "950a595621ab9c61d1a2ab4fa894a10003e06369",
          "message": "Refactor command bot and drop membership check",
          "timestamp": "2025-01-18T00:32:38Z",
          "tree_id": "3dba5303bfde4ddeaf0e2ba235356714abcee46f",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/950a595621ab9c61d1a2ab4fa894a10003e06369"
        },
        "date": 1737163825700,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17277957,
            "range": "± 176810",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17548280,
            "range": "± 161939",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19072553,
            "range": "± 137717",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22525899,
            "range": "± 519159",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51075240,
            "range": "± 612270",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 302225989,
            "range": "± 3064158",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2393612891,
            "range": "± 145425257",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14235504,
            "range": "± 135659",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14367052,
            "range": "± 46662",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14996201,
            "range": "± 92563",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19119478,
            "range": "± 148752",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49728766,
            "range": "± 272606",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 296658567,
            "range": "± 2487103",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2374582892,
            "range": "± 26274170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "bb8e546876f5d1f8b6f6bbccce6acaa2eb383866",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T00:47:22Z",
          "tree_id": "f198abacdb612c70b7f782fd8472b3469ac07fc7",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/bb8e546876f5d1f8b6f6bbccce6acaa2eb383866"
        },
        "date": 1737248597885,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18077623,
            "range": "± 218404",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18126096,
            "range": "± 668659",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19977377,
            "range": "± 253051",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23448115,
            "range": "± 731311",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53036469,
            "range": "± 1263292",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 318402280,
            "range": "± 4666560",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2348284031,
            "range": "± 85156837",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14594994,
            "range": "± 126271",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14714381,
            "range": "± 70891",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15170617,
            "range": "± 364371",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19681883,
            "range": "± 280008",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51842492,
            "range": "± 819351",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 310162754,
            "range": "± 3286321",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2441501673,
            "range": "± 39935828",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "331d7bd528af7f11c34f9ab688e2c27a03f2bc24",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T08:41:05Z",
          "tree_id": "c3a183e4a59013cb82331fdcdd52fc23ab75bd37",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/331d7bd528af7f11c34f9ab688e2c27a03f2bc24"
        },
        "date": 1737277095515,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17757483,
            "range": "± 156004",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17798242,
            "range": "± 86754",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19334252,
            "range": "± 129579",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23139686,
            "range": "± 648558",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52631949,
            "range": "± 914598",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 297042925,
            "range": "± 6406512",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2245959476,
            "range": "± 156715254",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14757384,
            "range": "± 148532",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14693909,
            "range": "± 202130",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15331456,
            "range": "± 92701",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19645671,
            "range": "± 149314",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51147151,
            "range": "± 339808",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 310113758,
            "range": "± 2492677",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2464481687,
            "range": "± 8376422",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "aef992f30947ac4f647ce51ae1db1203a44f9067",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T10:55:46Z",
          "tree_id": "97677fd5ee7284720f6b4ea9fe816b384b65fb77",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/aef992f30947ac4f647ce51ae1db1203a44f9067"
        },
        "date": 1737285149165,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18207396,
            "range": "± 177735",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18808227,
            "range": "± 172420",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20469700,
            "range": "± 251243",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24407005,
            "range": "± 464455",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57330866,
            "range": "± 759919",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 347369435,
            "range": "± 15400760",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2537192438,
            "range": "± 72552115",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15363316,
            "range": "± 603213",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15520451,
            "range": "± 221898",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16055214,
            "range": "± 213144",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20590980,
            "range": "± 527961",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53954523,
            "range": "± 835973",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 331183332,
            "range": "± 5868868",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2505545099,
            "range": "± 25598978",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "ec3f52a3230eda7969b8a6cdcfc7649b1bd95681",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T19:07:12Z",
          "tree_id": "84b2af9cc1caa836e915aa57a84c7fb1c45cb9bc",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/ec3f52a3230eda7969b8a6cdcfc7649b1bd95681"
        },
        "date": 1737314592869,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17566521,
            "range": "± 434711",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17562926,
            "range": "± 113300",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18912619,
            "range": "± 165238",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22434643,
            "range": "± 204809",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50955880,
            "range": "± 794426",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 294902240,
            "range": "± 5946622",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2406788245,
            "range": "± 47041430",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14147077,
            "range": "± 56543",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14247988,
            "range": "± 145188",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14724077,
            "range": "± 69076",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18606203,
            "range": "± 145016",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48000750,
            "range": "± 381372",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 281686003,
            "range": "± 3533864",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2312613082,
            "range": "± 26766653",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "f3f344c41e5eb2b734d5c66b6771355c47cbbcf1",
          "message": "combine jobs",
          "timestamp": "2025-01-19T22:20:42Z",
          "tree_id": "9135b21f9f2438536b6365530fc216593eb95d95",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/f3f344c41e5eb2b734d5c66b6771355c47cbbcf1"
        },
        "date": 1737326262951,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17689391,
            "range": "± 158572",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17907065,
            "range": "± 187710",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19810671,
            "range": "± 487262",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23187106,
            "range": "± 383770",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 54214805,
            "range": "± 1866601",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 310456950,
            "range": "± 7053203",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2418114386,
            "range": "± 146575084",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14638571,
            "range": "± 257318",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14718805,
            "range": "± 177523",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15063178,
            "range": "± 99621",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19249317,
            "range": "± 153999",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51072564,
            "range": "± 1071483",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 303348052,
            "range": "± 3980550",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2452818109,
            "range": "± 37256189",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "1fcd6ba1b9702417d42b72ee9c28c64332af7878",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-20T23:21:51Z",
          "tree_id": "937ecdbffe91cc1e1c970c35d4ee58c7f46b0156",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/1fcd6ba1b9702417d42b72ee9c28c64332af7878"
        },
        "date": 1737416264541,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17394537,
            "range": "± 236799",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17669856,
            "range": "± 147523",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19148013,
            "range": "± 70065",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22871805,
            "range": "± 154919",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51847106,
            "range": "± 585903",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 290078755,
            "range": "± 1318943",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2234802314,
            "range": "± 8267447",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14442453,
            "range": "± 91768",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14439010,
            "range": "± 110414",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15027491,
            "range": "± 90732",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19357609,
            "range": "± 163760",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50256587,
            "range": "± 806023",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 289392515,
            "range": "± 1131887",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2357270798,
            "range": "± 7586779",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "d38ca61138e7399ba1ac7b75dfc1b01a408beee3",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-21T15:58:45Z",
          "tree_id": "bc3afd67f0c6e03f7e1ef7a94028797e7faa170d",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/d38ca61138e7399ba1ac7b75dfc1b01a408beee3"
        },
        "date": 1737476101311,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18973708,
            "range": "± 106276",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18924617,
            "range": "± 350211",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20708435,
            "range": "± 219272",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24562726,
            "range": "± 412224",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56823187,
            "range": "± 1211964",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 367336967,
            "range": "± 6645271",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2814339772,
            "range": "± 48743837",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15369700,
            "range": "± 185133",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15579389,
            "range": "± 162692",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16267337,
            "range": "± 150673",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20088314,
            "range": "± 307882",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53681379,
            "range": "± 1139166",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 328314460,
            "range": "± 13357861",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2562075383,
            "range": "± 21293482",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "450a5d0bc896d0014b6d1ac7e061888318369024",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-21T16:53:34Z",
          "tree_id": "104b37d475a54bb5d7199b895b5ca6319a11cff2",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/450a5d0bc896d0014b6d1ac7e061888318369024"
        },
        "date": 1737479379341,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17525696,
            "range": "± 121135",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17768951,
            "range": "± 141080",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19282798,
            "range": "± 479463",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22806533,
            "range": "± 234567",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52978490,
            "range": "± 710381",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 312823811,
            "range": "± 3168038",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2275551465,
            "range": "± 124463003",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14446135,
            "range": "± 74225",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14615724,
            "range": "± 163125",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15026026,
            "range": "± 103054",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19186252,
            "range": "± 175218",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49835108,
            "range": "± 675220",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 295470439,
            "range": "± 2928596",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2398046491,
            "range": "± 18908928",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "c5f244193631b8ab43d51cf6586c4a1731c586b7",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-21T17:22:10Z",
          "tree_id": "32f5a5496d660ef557fa2f994e72a6fffdf6e1ee",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/c5f244193631b8ab43d51cf6586c4a1731c586b7"
        },
        "date": 1737481104398,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18421595,
            "range": "± 112920",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18586132,
            "range": "± 214133",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20207601,
            "range": "± 247810",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24155469,
            "range": "± 295946",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 58857099,
            "range": "± 1168335",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 359148720,
            "range": "± 7833291",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2376344269,
            "range": "± 221569006",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15449187,
            "range": "± 463250",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15517996,
            "range": "± 105988",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16127086,
            "range": "± 112568",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20379550,
            "range": "± 208669",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 55967188,
            "range": "± 1462083",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 332697594,
            "range": "± 7530175",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2537392502,
            "range": "± 19649908",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "081bc00c28b74e360e79283a1b59bb1dfd1abcc9",
          "message": "Update cmd.py",
          "timestamp": "2025-01-21T17:51:28Z",
          "tree_id": "32f5a5496d660ef557fa2f994e72a6fffdf6e1ee",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/081bc00c28b74e360e79283a1b59bb1dfd1abcc9"
        },
        "date": 1737483230514,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17317039,
            "range": "± 247346",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17634738,
            "range": "± 98777",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19021513,
            "range": "± 140348",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22534793,
            "range": "± 118838",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51125883,
            "range": "± 978693",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 311422279,
            "range": "± 4927581",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2191156698,
            "range": "± 196840163",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14095655,
            "range": "± 70404",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14203573,
            "range": "± 105284",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14770673,
            "range": "± 56792",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18850715,
            "range": "± 122549",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48563168,
            "range": "± 482670",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 286477539,
            "range": "± 3031958",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2345454385,
            "range": "± 24699999",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ludovic.domingues96@gmail.com",
            "name": "Ludovic_Domingues",
            "username": "Krayt78"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "7d7c9b69db4393025c9910d1ffbbc6f8f721415d",
          "message": "Migrate pallet-paged-list-fuzzer to umbrella crate (#6930)\n\nPart of  #6504\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Giuseppe Re <giuseppe.re@parity.io>",
          "timestamp": "2025-01-21T18:34:02Z",
          "tree_id": "239311ac638bd4216fa5861fb360ee7e020d9976",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/7d7c9b69db4393025c9910d1ffbbc6f8f721415d"
        },
        "date": 1737485569166,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17836195,
            "range": "± 303361",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18074635,
            "range": "± 219434",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19750828,
            "range": "± 255514",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23364637,
            "range": "± 236355",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53167627,
            "range": "± 665676",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 302544116,
            "range": "± 4305436",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2382681256,
            "range": "± 89092981",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14639885,
            "range": "± 94794",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15308798,
            "range": "± 75287",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15624363,
            "range": "± 162100",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19753090,
            "range": "± 166422",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51220620,
            "range": "± 335899",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 309201181,
            "range": "± 3710956",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2456968438,
            "range": "± 41634541",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ludovic.domingues96@gmail.com",
            "name": "Ludovic_Domingues",
            "username": "Krayt78"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "51e38fea060b19d37e32c24ca66083af088dd57c",
          "message": "Migrate pallet-paged-list-fuzzer to umbrella crate (#6930)\n\nPart of  #6504\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Giuseppe Re <giuseppe.re@parity.io>",
          "timestamp": "2025-01-22T10:53:35Z",
          "tree_id": "d882e5a9f90ae3189a77e032ef19b75c5faeb7d9",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/51e38fea060b19d37e32c24ca66083af088dd57c"
        },
        "date": 1737544234042,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18897720,
            "range": "± 140516",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19166580,
            "range": "± 135426",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20995038,
            "range": "± 341129",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24214234,
            "range": "± 219286",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53811558,
            "range": "± 490532",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 317444661,
            "range": "± 2315934",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2301063201,
            "range": "± 48604518",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14912839,
            "range": "± 360948",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15049027,
            "range": "± 155153",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15596204,
            "range": "± 139184",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19265058,
            "range": "± 156842",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50016197,
            "range": "± 1615570",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 300459958,
            "range": "± 2356797",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2391150670,
            "range": "± 10533501",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6c47f257b982fdf29ca527b9864ccf0f7389504",
          "message": "install frame-omni-bencher with production profile (#78)\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>",
          "timestamp": "2025-01-23T11:28:41Z",
          "tree_id": "d01298da0f6ae788a7065e50887c56228dd22957",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/a6c47f257b982fdf29ca527b9864ccf0f7389504"
        },
        "date": 1737632733479,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17231686,
            "range": "± 85539",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17428395,
            "range": "± 88754",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19058814,
            "range": "± 331791",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22574529,
            "range": "± 145296",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50694060,
            "range": "± 233625",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 297133195,
            "range": "± 4918526",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2309217795,
            "range": "± 11103851",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14412749,
            "range": "± 89855",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14569038,
            "range": "± 123499",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14978278,
            "range": "± 75614",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18823043,
            "range": "± 119366",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48883400,
            "range": "± 387135",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 286064829,
            "range": "± 2975206",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2263988390,
            "range": "± 10526301",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "ec74ca6c045b2556b0c1612b94c64c34ab46cd12",
          "message": "install frame-omni-bencher with production profile (#78)\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>",
          "timestamp": "2025-01-23T12:42:18Z",
          "tree_id": "1b73cf28af611cfc0838433af5b03b448f55a514",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/ec74ca6c045b2556b0c1612b94c64c34ab46cd12"
        },
        "date": 1737637183994,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17371463,
            "range": "± 62824",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17571301,
            "range": "± 105665",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19360772,
            "range": "± 485409",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22940147,
            "range": "± 236508",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51525302,
            "range": "± 273780",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 302687354,
            "range": "± 5559658",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2454942942,
            "range": "± 19622404",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14448826,
            "range": "± 76378",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14648845,
            "range": "± 101012",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15374821,
            "range": "± 223909",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19548999,
            "range": "± 136760",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51203468,
            "range": "± 806757",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 311429432,
            "range": "± 7778310",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2418393042,
            "range": "± 13470196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "374f3c0f8d5a73af04b227adfc69ef6f0dae5511",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-23T16:37:58Z",
          "tree_id": "1507247082bb2fb3e200a14f2cc8dd0e3254763b",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/374f3c0f8d5a73af04b227adfc69ef6f0dae5511"
        },
        "date": 1737651294873,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17678722,
            "range": "± 241112",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17947617,
            "range": "± 186560",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19519525,
            "range": "± 395565",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23736668,
            "range": "± 473567",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 54728577,
            "range": "± 1076917",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 314970592,
            "range": "± 4044615",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2561082678,
            "range": "± 120247003",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14945999,
            "range": "± 141482",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14970380,
            "range": "± 113190",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15770094,
            "range": "± 283119",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19516202,
            "range": "± 337546",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50764787,
            "range": "± 1143724",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 304014905,
            "range": "± 10955004",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2457624893,
            "range": "± 24334340",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}