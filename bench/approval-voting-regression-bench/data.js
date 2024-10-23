window.BENCHMARK_DATA = {
  "lastUpdate": 1729686123409,
  "repoUrl": "https://github.com/paritytech-stg/polkadot-sdk",
  "entries": {
    "approval-voting-regression-bench": [
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
        "date": 1729686115758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63641.21999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.7221876861799976,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.6773329522899987,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.419277027360008,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.6741473837799954,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000017693790000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001849091,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000017693790000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.660852052269999,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001849091,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5338711748299659,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.7085836256426674,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 13.693912553249964,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006244276540000004,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}