window.BENCHMARK_DATA = {
  "lastUpdate": 1737313636968,
  "repoUrl": "https://github.com/paritytech-stg/polkadot-sdk",
  "entries": {
    "notifications_protocol": [
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
        "date": 1737130349265,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3864116,
            "range": "± 27161",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 281248,
            "range": "± 2900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3978298,
            "range": "± 25928",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 360411,
            "range": "± 2228",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4687114,
            "range": "± 36606",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 826289,
            "range": "± 5422",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9625821,
            "range": "± 66761",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4448193,
            "range": "± 35880",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41294813,
            "range": "± 385786",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35515648,
            "range": "± 276238",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 326005290,
            "range": "± 2272149",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 271412659,
            "range": "± 765939",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2397219425,
            "range": "± 15643889",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2566558457,
            "range": "± 177264947",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2823383,
            "range": "± 19872",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1433742,
            "range": "± 6167",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2923735,
            "range": "± 13747",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1502198,
            "range": "± 8789",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3411908,
            "range": "± 26487",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1795265,
            "range": "± 13051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7279549,
            "range": "± 34572",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4588052,
            "range": "± 46716",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39102022,
            "range": "± 565175",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37142685,
            "range": "± 318578",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 359407251,
            "range": "± 4075972",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 428382588,
            "range": "± 8836424",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3351683800,
            "range": "± 28423028",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3600147658,
            "range": "± 49420021",
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
        "date": 1737132438252,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3895397,
            "range": "± 36985",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 281590,
            "range": "± 2315",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3992712,
            "range": "± 27845",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 356559,
            "range": "± 4525",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4700280,
            "range": "± 47202",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 821566,
            "range": "± 5944",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9571277,
            "range": "± 63970",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4464159,
            "range": "± 53742",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40585817,
            "range": "± 336885",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35178408,
            "range": "± 553411",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 326185547,
            "range": "± 3624213",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 276263885,
            "range": "± 1337574",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2446041184,
            "range": "± 9669122",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2546863258,
            "range": "± 89576960",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2795311,
            "range": "± 7044",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1441323,
            "range": "± 4615",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2879779,
            "range": "± 8990",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1512636,
            "range": "± 8423",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3408768,
            "range": "± 39184",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1822304,
            "range": "± 11324",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7340714,
            "range": "± 41252",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4700316,
            "range": "± 71702",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40019254,
            "range": "± 823247",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38025274,
            "range": "± 468997",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 361704655,
            "range": "± 1830237",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 381975216,
            "range": "± 6836359",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3361588379,
            "range": "± 28745456",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3563882482,
            "range": "± 55542888",
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
        "date": 1737163812863,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3769324,
            "range": "± 39071",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 277059,
            "range": "± 4365",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3899505,
            "range": "± 56059",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 351609,
            "range": "± 8922",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4555137,
            "range": "± 40666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 810223,
            "range": "± 12802",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9328253,
            "range": "± 84969",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4448178,
            "range": "± 43457",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40521204,
            "range": "± 452441",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33358173,
            "range": "± 524080",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 300153704,
            "range": "± 2641342",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 264760970,
            "range": "± 1554653",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2351235127,
            "range": "± 21188714",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2135650604,
            "range": "± 22467045",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2736445,
            "range": "± 9940",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1411834,
            "range": "± 5602",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2879169,
            "range": "± 25733",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1484673,
            "range": "± 4183",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3350335,
            "range": "± 20856",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1811969,
            "range": "± 23445",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7386610,
            "range": "± 95161",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4603835,
            "range": "± 49333",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39163613,
            "range": "± 534691",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38097823,
            "range": "± 686971",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 355234952,
            "range": "± 3741233",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 417913196,
            "range": "± 7583366",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3213028703,
            "range": "± 31086458",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3425201689,
            "range": "± 42491447",
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
        "date": 1737248585299,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4014407,
            "range": "± 41910",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 291319,
            "range": "± 4201",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4134549,
            "range": "± 29775",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 378127,
            "range": "± 37984",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4813646,
            "range": "± 55082",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 858252,
            "range": "± 14565",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9852425,
            "range": "± 81652",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4591174,
            "range": "± 61832",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43857424,
            "range": "± 767928",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37201712,
            "range": "± 427571",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 343282494,
            "range": "± 2346667",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 279803457,
            "range": "± 2007741",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2483448113,
            "range": "± 11195358",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2654806153,
            "range": "± 124764369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3003603,
            "range": "± 18877",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1489349,
            "range": "± 10028",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3094081,
            "range": "± 21539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1541933,
            "range": "± 12446",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3615710,
            "range": "± 19366",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1871279,
            "range": "± 32880",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7942888,
            "range": "± 119429",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4791383,
            "range": "± 56199",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41372823,
            "range": "± 507525",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39627082,
            "range": "± 1092054",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 379292750,
            "range": "± 5296618",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 438458733,
            "range": "± 7729638",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3446238634,
            "range": "± 27310881",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3582533017,
            "range": "± 81872770",
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
        "date": 1737277082508,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3959726,
            "range": "± 25068",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 286450,
            "range": "± 5433",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4032710,
            "range": "± 18235",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 365099,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4753158,
            "range": "± 31652",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 834231,
            "range": "± 5682",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9756790,
            "range": "± 79651",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4561635,
            "range": "± 33386",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43153147,
            "range": "± 784188",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36757590,
            "range": "± 1121513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 334504007,
            "range": "± 2543088",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282882501,
            "range": "± 2119852",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2477721665,
            "range": "± 20835000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2598508945,
            "range": "± 82374238",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2798366,
            "range": "± 7119",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1451304,
            "range": "± 3542",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2930097,
            "range": "± 16532",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1519141,
            "range": "± 11734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3449266,
            "range": "± 24035",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1824885,
            "range": "± 8593",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7383234,
            "range": "± 134235",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4803780,
            "range": "± 255987",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40342717,
            "range": "± 1046338",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39401437,
            "range": "± 745746",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 374517155,
            "range": "± 27505221",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 434044602,
            "range": "± 8024995",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3386745805,
            "range": "± 30259797",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3635253293,
            "range": "± 85071968",
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
        "date": 1737285137691,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3755239,
            "range": "± 39576",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 275327,
            "range": "± 3935",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3925747,
            "range": "± 53691",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361983,
            "range": "± 30153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4627008,
            "range": "± 27940",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 825669,
            "range": "± 8103",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9489263,
            "range": "± 99199",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4362923,
            "range": "± 23858",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40534860,
            "range": "± 393698",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35110682,
            "range": "± 500835",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 312119932,
            "range": "± 2466677",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 266192775,
            "range": "± 3257721",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2340894290,
            "range": "± 10796813",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2412101260,
            "range": "± 98131955",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2771238,
            "range": "± 20133",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1437857,
            "range": "± 10452",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2854892,
            "range": "± 19822",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1516432,
            "range": "± 10099",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3369574,
            "range": "± 34858",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1807221,
            "range": "± 13978",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7302680,
            "range": "± 42289",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4618172,
            "range": "± 96181",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37249113,
            "range": "± 468899",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35858402,
            "range": "± 648594",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 347884680,
            "range": "± 7370762",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 384189925,
            "range": "± 10654391",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3259296665,
            "range": "± 52451525",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3539297491,
            "range": "± 74045881",
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
          "id": "5a7a1f55789b6e19d503ca0e871cdf94bc6dbdcf",
          "message": "Refactor command bot and drop membership check",
          "timestamp": "2025-01-19T18:49:34Z",
          "tree_id": "5029e577a4ed670231a17be90ddf7d3e14d8af5f",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/5a7a1f55789b6e19d503ca0e871cdf94bc6dbdcf"
        },
        "date": 1737313629331,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3773333,
            "range": "± 26215",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 274416,
            "range": "± 3270",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3863562,
            "range": "± 35758",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 354157,
            "range": "± 19972",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4561139,
            "range": "± 40740",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 807826,
            "range": "± 7038",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9319561,
            "range": "± 86276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4404253,
            "range": "± 30539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40114793,
            "range": "± 255606",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34164392,
            "range": "± 282491",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 310484990,
            "range": "± 2224629",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 267580634,
            "range": "± 1972749",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2357397802,
            "range": "± 7064675",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2151752073,
            "range": "± 268131430",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2733373,
            "range": "± 7633",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1405215,
            "range": "± 5666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2830789,
            "range": "± 17604",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1463160,
            "range": "± 7791",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3320889,
            "range": "± 26750",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1757579,
            "range": "± 9622",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 6960003,
            "range": "± 32393",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4522595,
            "range": "± 25580",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38881750,
            "range": "± 662742",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37551857,
            "range": "± 653099",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 346381372,
            "range": "± 2627090",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 385161454,
            "range": "± 9519445",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3120443104,
            "range": "± 22028527",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3482019144,
            "range": "± 56360708",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}