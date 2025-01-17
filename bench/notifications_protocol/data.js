window.BENCHMARK_DATA = {
  "lastUpdate": 1737130357266,
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
      }
    ]
  }
}