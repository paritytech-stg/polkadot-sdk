window.BENCHMARK_DATA = {
  "lastUpdate": 1737651289888,
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
        "date": 1737314581412,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3915098,
            "range": "± 45974",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279362,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3956921,
            "range": "± 35282",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 353945,
            "range": "± 3642",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4598093,
            "range": "± 98131",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 817343,
            "range": "± 11810",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9548417,
            "range": "± 119735",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4497850,
            "range": "± 67831",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42953833,
            "range": "± 575853",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34853522,
            "range": "± 565945",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 334873285,
            "range": "± 3236890",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 277957482,
            "range": "± 1572408",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2440023045,
            "range": "± 12851250",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2654914955,
            "range": "± 104065629",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2905284,
            "range": "± 22812",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1482799,
            "range": "± 9624",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2979790,
            "range": "± 27760",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1537181,
            "range": "± 4569",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3508761,
            "range": "± 32504",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1864301,
            "range": "± 11920",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7633211,
            "range": "± 217050",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4732268,
            "range": "± 73811",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42148464,
            "range": "± 1135568",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40662736,
            "range": "± 847298",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 370867307,
            "range": "± 3764713",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 421227195,
            "range": "± 3598296",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3381387490,
            "range": "± 41751446",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3701420693,
            "range": "± 73589904",
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
        "date": 1737326247191,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3904567,
            "range": "± 71263",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279629,
            "range": "± 5788",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4022630,
            "range": "± 30864",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 367205,
            "range": "± 12378",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4800260,
            "range": "± 85211",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 849019,
            "range": "± 14660",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9655915,
            "range": "± 110383",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4651596,
            "range": "± 114420",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44979075,
            "range": "± 495006",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37822872,
            "range": "± 778856",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 338687631,
            "range": "± 3141848",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282207256,
            "range": "± 2184963",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2405205704,
            "range": "± 8093886",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2575308305,
            "range": "± 104237359",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2841460,
            "range": "± 24701",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1454013,
            "range": "± 8279",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2938088,
            "range": "± 29706",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1512215,
            "range": "± 7030",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3532250,
            "range": "± 32745",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1852741,
            "range": "± 6710",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7879227,
            "range": "± 171650",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4804507,
            "range": "± 93525",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42727188,
            "range": "± 962703",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41150193,
            "range": "± 1214890",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 374593838,
            "range": "± 6343033",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 455350744,
            "range": "± 7084685",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3542506032,
            "range": "± 57198516",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3849976236,
            "range": "± 64650449",
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
        "date": 1737416252929,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3799287,
            "range": "± 35425",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 273428,
            "range": "± 3799",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3896073,
            "range": "± 30153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 349229,
            "range": "± 3779",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4573395,
            "range": "± 47663",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 818891,
            "range": "± 9788",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9570474,
            "range": "± 190799",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4330024,
            "range": "± 33097",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39719791,
            "range": "± 624713",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34266222,
            "range": "± 279166",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 311199264,
            "range": "± 1892621",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 263769566,
            "range": "± 1063102",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2349228649,
            "range": "± 5170019",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2674551703,
            "range": "± 52708450",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2740276,
            "range": "± 12150",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1417305,
            "range": "± 21918",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2852067,
            "range": "± 14786",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1483934,
            "range": "± 7003",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3307750,
            "range": "± 19271",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1768832,
            "range": "± 8877",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7134355,
            "range": "± 48913",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4594483,
            "range": "± 47558",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38201295,
            "range": "± 399676",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36553683,
            "range": "± 603394",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 346105393,
            "range": "± 3589846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 386450399,
            "range": "± 8619074",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3220531366,
            "range": "± 66854588",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3521516983,
            "range": "± 70883691",
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
        "date": 1737476089173,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3946679,
            "range": "± 32932",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 288546,
            "range": "± 5940",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4078039,
            "range": "± 49523",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 369976,
            "range": "± 3362",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4810013,
            "range": "± 39864",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 846404,
            "range": "± 6203",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9886719,
            "range": "± 58440",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4594810,
            "range": "± 129418",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43348974,
            "range": "± 548518",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36327886,
            "range": "± 357281",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 330874398,
            "range": "± 1797262",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278032254,
            "range": "± 2112124",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2393172319,
            "range": "± 18244567",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2683162742,
            "range": "± 77339563",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2836369,
            "range": "± 7997",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1446044,
            "range": "± 5434",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2914914,
            "range": "± 14796",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1516890,
            "range": "± 8915",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3432606,
            "range": "± 31493",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1833715,
            "range": "± 16295",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7443129,
            "range": "± 50045",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4644117,
            "range": "± 45364",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41928149,
            "range": "± 370533",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40783407,
            "range": "± 879143",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 377944419,
            "range": "± 4085870",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 450286189,
            "range": "± 10418888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3434627564,
            "range": "± 35314361",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3734641340,
            "range": "± 97768401",
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
        "date": 1737479367563,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3914780,
            "range": "± 19929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 283868,
            "range": "± 4285",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4019440,
            "range": "± 31242",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 360596,
            "range": "± 6776",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4754191,
            "range": "± 52001",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 835067,
            "range": "± 16042",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9779388,
            "range": "± 98695",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4549884,
            "range": "± 61943",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43065272,
            "range": "± 862929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36656696,
            "range": "± 342051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 341353994,
            "range": "± 2935391",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 279789029,
            "range": "± 2401667",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2419777630,
            "range": "± 10730512",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2603418200,
            "range": "± 62143746",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2873420,
            "range": "± 22958",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1452638,
            "range": "± 16315",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2959725,
            "range": "± 20510",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1524457,
            "range": "± 16469",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3463049,
            "range": "± 59663",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1826320,
            "range": "± 10619",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7654665,
            "range": "± 146175",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4685595,
            "range": "± 69599",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41605601,
            "range": "± 751537",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39962451,
            "range": "± 802177",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 382535690,
            "range": "± 5360725",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 443281807,
            "range": "± 4427305",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3401171433,
            "range": "± 24583742",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3813732006,
            "range": "± 70834957",
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
        "date": 1737481091421,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3900793,
            "range": "± 32528",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279200,
            "range": "± 2948",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3963376,
            "range": "± 40996",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 354712,
            "range": "± 3765",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4684836,
            "range": "± 33180",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 830568,
            "range": "± 19610",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9600584,
            "range": "± 30789",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4509014,
            "range": "± 58970",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42287105,
            "range": "± 745004",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36323547,
            "range": "± 612043",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 339731953,
            "range": "± 4549259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278697458,
            "range": "± 2103694",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2436074168,
            "range": "± 12975419",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2771369217,
            "range": "± 239741302",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2796842,
            "range": "± 66153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1442375,
            "range": "± 25082",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2880161,
            "range": "± 21580",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1501901,
            "range": "± 5783",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3452606,
            "range": "± 35000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1812168,
            "range": "± 14344",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7466042,
            "range": "± 167595",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4687789,
            "range": "± 35858",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39937620,
            "range": "± 647901",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39452762,
            "range": "± 488911",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 362508096,
            "range": "± 3618027",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 433778263,
            "range": "± 11395808",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3326889013,
            "range": "± 34802026",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3710871396,
            "range": "± 64769547",
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
        "date": 1737483218078,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3901195,
            "range": "± 39183",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 282530,
            "range": "± 2970",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4026704,
            "range": "± 62920",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 362091,
            "range": "± 5843",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4818107,
            "range": "± 61743",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 860187,
            "range": "± 9985",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9924068,
            "range": "± 90870",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4693005,
            "range": "± 105551",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45473016,
            "range": "± 1059152",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37271933,
            "range": "± 442640",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 339943806,
            "range": "± 3383739",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278500225,
            "range": "± 1780343",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2613936563,
            "range": "± 45145156",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2695943282,
            "range": "± 32236223",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2853770,
            "range": "± 19889",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1454989,
            "range": "± 5103",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2976763,
            "range": "± 21904",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1531549,
            "range": "± 10918",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3553744,
            "range": "± 36815",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1869711,
            "range": "± 24036",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8075182,
            "range": "± 103245",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4923751,
            "range": "± 98470",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43650367,
            "range": "± 465793",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41908057,
            "range": "± 669093",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 387742288,
            "range": "± 7597041",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 436793612,
            "range": "± 14558591",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3580288795,
            "range": "± 38780246",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3809978615,
            "range": "± 95890618",
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
        "date": 1737485556561,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3848766,
            "range": "± 32009",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 280035,
            "range": "± 2297",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4006815,
            "range": "± 45676",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 355992,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4658552,
            "range": "± 40871",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 824395,
            "range": "± 7654",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9431113,
            "range": "± 54427",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4482796,
            "range": "± 55993",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41407032,
            "range": "± 518727",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35309269,
            "range": "± 275394",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 338923265,
            "range": "± 4974397",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 280494108,
            "range": "± 1893419",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2413762237,
            "range": "± 13351212",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2738555217,
            "range": "± 54729334",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2891523,
            "range": "± 23762",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1466516,
            "range": "± 8518",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2948285,
            "range": "± 21473",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1526937,
            "range": "± 5259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3494088,
            "range": "± 29174",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1845227,
            "range": "± 13648",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7544692,
            "range": "± 58419",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4725802,
            "range": "± 44597",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40240253,
            "range": "± 437153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38519022,
            "range": "± 341110",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 369201173,
            "range": "± 3581571",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 407814188,
            "range": "± 6649161",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3356452511,
            "range": "± 22767199",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3629921677,
            "range": "± 64245431",
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
        "date": 1737544221474,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3832770,
            "range": "± 18452",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 277314,
            "range": "± 1612",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3959134,
            "range": "± 31349",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 354646,
            "range": "± 6662",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4608018,
            "range": "± 30789",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 823953,
            "range": "± 7312",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9497488,
            "range": "± 79291",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4458304,
            "range": "± 34138",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40982603,
            "range": "± 726026",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35513565,
            "range": "± 528175",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 332796033,
            "range": "± 4052291",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 273061637,
            "range": "± 2419544",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2387793964,
            "range": "± 10406012",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2640745910,
            "range": "± 87813645",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2783287,
            "range": "± 25308",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1451111,
            "range": "± 9965",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2888165,
            "range": "± 17996",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1517534,
            "range": "± 9393",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3439771,
            "range": "± 19447",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1835234,
            "range": "± 13418",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7294199,
            "range": "± 152653",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4629049,
            "range": "± 47441",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39530717,
            "range": "± 686751",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38341095,
            "range": "± 766457",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 359099834,
            "range": "± 3044386",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 410228769,
            "range": "± 6507991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3287712455,
            "range": "± 29119435",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3577294054,
            "range": "± 60568107",
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
        "date": 1737632720823,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3831048,
            "range": "± 35618",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 271803,
            "range": "± 3632",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3927347,
            "range": "± 15285",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 348238,
            "range": "± 6399",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4629901,
            "range": "± 54985",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 813626,
            "range": "± 16666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9417655,
            "range": "± 99717",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4438146,
            "range": "± 38458",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41037611,
            "range": "± 702383",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34965384,
            "range": "± 361832",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 320918665,
            "range": "± 2448718",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 273381788,
            "range": "± 1528880",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2368065823,
            "range": "± 10122685",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2525788879,
            "range": "± 45830574",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2777862,
            "range": "± 22305",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1444802,
            "range": "± 6662",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2892853,
            "range": "± 31269",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1509707,
            "range": "± 5971",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3378272,
            "range": "± 24389",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1828554,
            "range": "± 20594",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7305687,
            "range": "± 105989",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4666161,
            "range": "± 48615",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40757489,
            "range": "± 652375",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39122320,
            "range": "± 469643",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 374173534,
            "range": "± 5030122",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 391710237,
            "range": "± 11004345",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3291790220,
            "range": "± 37167324",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3566150793,
            "range": "± 71329349",
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
        "date": 1737637172134,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4072129,
            "range": "± 87356",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 308068,
            "range": "± 10600",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4276137,
            "range": "± 75515",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 398111,
            "range": "± 14610",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5144265,
            "range": "± 59268",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 920139,
            "range": "± 14837",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10348907,
            "range": "± 156237",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4869012,
            "range": "± 98401",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 51760456,
            "range": "± 1354816",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38860283,
            "range": "± 648842",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 371404419,
            "range": "± 2764818",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 305036628,
            "range": "± 2754435",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2613379784,
            "range": "± 24053785",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2793030055,
            "range": "± 260296653",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3153646,
            "range": "± 37529",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1553429,
            "range": "± 15417",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3177943,
            "range": "± 41414",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1606672,
            "range": "± 12257",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3799810,
            "range": "± 32727",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1958806,
            "range": "± 17747",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8462888,
            "range": "± 135416",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5299928,
            "range": "± 102766",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 47361910,
            "range": "± 747427",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 46970803,
            "range": "± 1467113",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 431081215,
            "range": "± 8366514",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 499309359,
            "range": "± 9561531",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3774862300,
            "range": "± 99372212",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4044487767,
            "range": "± 67189839",
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
        "date": 1737651282505,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3878656,
            "range": "± 45554",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 280980,
            "range": "± 4314",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4054021,
            "range": "± 56936",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 359243,
            "range": "± 10755",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4734474,
            "range": "± 37164",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 829105,
            "range": "± 5738",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10006739,
            "range": "± 134829",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4751244,
            "range": "± 86686",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45249175,
            "range": "± 725274",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35612699,
            "range": "± 410417",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 329177116,
            "range": "± 5178530",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 274011777,
            "range": "± 2416375",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2414090635,
            "range": "± 17252220",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2145225929,
            "range": "± 15619658",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2866451,
            "range": "± 18208",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1456290,
            "range": "± 4991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3015404,
            "range": "± 37571",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1533900,
            "range": "± 8737",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3538132,
            "range": "± 40721",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1854913,
            "range": "± 8108",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7677612,
            "range": "± 85121",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4754420,
            "range": "± 64179",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41471057,
            "range": "± 467084",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40453350,
            "range": "± 1097460",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 377229372,
            "range": "± 4086988",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 419398602,
            "range": "± 8935087",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3482156816,
            "range": "± 40759159",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3803045645,
            "range": "± 116105108",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}