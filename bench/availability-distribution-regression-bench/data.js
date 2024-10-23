window.BENCHMARK_DATA = {
  "lastUpdate": 1729686111689,
  "repoUrl": "https://github.com/paritytech-stg/polkadot-sdk",
  "entries": {
    "availability-distribution-regression-bench": [
      {
        "commit": {
          "author": {
            "email": "franciscoaguirreperez@gmail.com",
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4732add46910370443d092a3f479986060f6df5",
          "message": "Assets in pool with native can be used in `query_weight_to_asset_fee` (#6080)\n\nA follow-up to https://github.com/paritytech/polkadot-sdk/pull/5599.\nAssets in a pool with the native one are returned from\n`query_acceptable_payment_assets`. Now those assets can be used in\n`query_weight_to_asset_fee` to get the correct amount that needs to be\npaid.\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2024-10-22T21:38:38Z",
          "tree_id": "12b356121059f8349501f3a67754eacd41934345",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/b4732add46910370443d092a3f479986060f6df5"
        },
        "date": 1729686104210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "availability-store",
            "value": 0.18102007967999995,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008762318820000083,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.024970509033333338,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016545601940000005,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}