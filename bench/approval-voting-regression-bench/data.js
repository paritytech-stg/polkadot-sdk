window.BENCHMARK_DATA = {
  "lastUpdate": 1733681828231,
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
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "d146c60d8c1df74cfd332a3acffe600e12ebb5bf",
          "message": "pallet-message-queue: Fix max message size calculation (#6205)\n\nThe max size of a message should not depend on the weight left in a\ngiven execution context. Instead the max message size depends on the\nservice weights configured for the pallet. A message that may does not\nfit into `on_idle` is not automatically overweight, because it may can\nbe executed successfully in `on_initialize` or in another block in\n`on_idle` when there is more weight left.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>",
          "timestamp": "2024-10-25T09:44:21+01:00",
          "tree_id": "4e9bb6050cd13926bd6e5c9558976ded97ed8568",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/d146c60d8c1df74cfd332a3acffe600e12ebb5bf"
        },
        "date": 1729847954837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.5,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63652.530000000006,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 0.00002122829,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 3.9719785784200043,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 3.8202667578799954,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.007536076250000007,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 3.780950206370074,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 3.7027252113997235,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 5.30688556432363,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00002122829,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001971445,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.7036959067099633,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 3.799874240339996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001971445,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 19.787026977369756,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "9702278348e9f02e87526cf7f4c4bc1acf2848f2",
          "message": "pallet-message-queue: Fix max message size calculation (#6205)\n\nThe max size of a message should not depend on the weight left in a\ngiven execution context. Instead the max message size depends on the\nservice weights configured for the pallet. A message that may does not\nfit into `on_idle` is not automatically overweight, because it may can\nbe executed successfully in `on_initialize` or in another block in\n`on_idle` when there is more weight left.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>",
          "timestamp": "2024-10-25T12:15:16+01:00",
          "tree_id": "c146cbc206643729793df846c0858cb412d20e80",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/9702278348e9f02e87526cf7f4c4bc1acf2848f2"
        },
        "date": 1729856497953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63625.33,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 0.000017792300000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5355141371400898,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.6821137655900005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.7154583285300005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.4308123340999797,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.7162553793025155,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.68517907699,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000017792300000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 13.72182829372007,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001987327,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006121580770000008,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001987327,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.6666290706,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "2ffe6f586b000b719023db241cf70381956d97c9",
          "message": "pallet-message-queue: Fix max message size calculation (#6205)\n\nThe max size of a message should not depend on the weight left in a\ngiven execution context. Instead the max message size depends on the\nservice weights configured for the pallet. A message that may does not\nfit into `on_idle` is not automatically overweight, because it may can\nbe executed successfully in `on_initialize` or in another block in\n`on_idle` when there is more weight left.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>",
          "timestamp": "2024-10-25T16:08:51+01:00",
          "tree_id": "bde787fd482ed287365253d875e82ae38dd494a9",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/2ffe6f586b000b719023db241cf70381956d97c9"
        },
        "date": 1729870575151,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63626.079999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.59999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000019226980000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000019226980000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.520511191930001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000018793850000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000018793850000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006051023429999997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.2386943426100006,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.547553378039999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4991836435499544,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.899316999009958,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4632740784025096,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.5162635023000015,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.5710599171499995,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "724a2f228b8775aaa99339e7d7a8d1ff4a71922a",
          "message": "pallet-message-queue: Fix max message size calculation (#6205)\n\nThe max size of a message should not depend on the weight left in a\ngiven execution context. Instead the max message size depends on the\nservice weights configured for the pallet. A message that may does not\nfit into `on_idle` is not automatically overweight, because it may can\nbe executed successfully in `on_initialize` or in another block in\n`on_idle` when there is more weight left.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>",
          "timestamp": "2024-10-25T19:33:40+01:00",
          "tree_id": "6534eaf66ac3a44ad34e1703d1064165567d59a2",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/724a2f228b8775aaa99339e7d7a8d1ff4a71922a"
        },
        "date": 1729882930708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63634.77,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.7,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.8134223109199987,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000018777960000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006135820499999996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001744616,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.858127841799999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.550855611530003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.7921486876200006,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.977878891632895,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.777159219939999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 14.327906109570117,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000018777960000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5300566172601169,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001744616,
            "unit": "seconds"
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
          "id": "0de9e8dc18772b934f61a3829118ba09fa290dc0",
          "message": "bubuntu",
          "timestamp": "2024-10-28T22:07:24Z",
          "tree_id": "a84a4e26581d2981db8763c571b00c02219af9ee",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/0de9e8dc18772b934f61a3829118ba09fa290dc0"
        },
        "date": 1730154933634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63646.33,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52937.3,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 3.9229482477599973,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 5.765039152965047,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 20.30459844135077,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 3.994383715170008,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00002148292,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 3.79190752579987,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00002148292,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00002079661,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.008032174070000009,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 3.976093021170056,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00002079661,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 3.920271873629995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.6909618837508406,
            "unit": "seconds"
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
          "id": "ace611afe98b1de6f971f52b3d4b8edf302462c8",
          "message": "Update cmd.yml",
          "timestamp": "2024-10-29T10:55:40Z",
          "tree_id": "66116171abfdedc24779578c349e1c1299c792bc",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/ace611afe98b1de6f971f52b3d4b8edf302462c8"
        },
        "date": 1730201002815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63647.469999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52944.3,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 0.000019878640000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006258229749999995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000020875179999999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.957099116420001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.6824479023499883,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.899538880639999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 14.945292968759938,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000020875179999999998,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.195892832462211,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.94951608194,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000019878640000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.8940855683899995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5563471892699512,
            "unit": "seconds"
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
          "id": "afedbbb6f7f9b4eadf6093a5874c892ed513feca",
          "message": "Update cmd.yml",
          "timestamp": "2024-10-29T15:03:27Z",
          "tree_id": "5b8c06136cee28c4bb7d84015607eb33a2851dfb",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/afedbbb6f7f9b4eadf6093a5874c892ed513feca"
        },
        "date": 1730215855325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63652.61,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52946.3,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.6866759761401349,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.691441488953552,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 3.2282661592700017,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 3.025140146229959,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000021996750000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 16.9153752697302,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000019596850000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000021996750000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000019596850000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 3.29388991264,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.007044081530000001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 3.406702703340102,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 3.2676562905800024,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex.theissen@me.com",
            "name": "Alexander Theißen",
            "username": "athei"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "17eee37c315d2e19848b622c041c71f07e6b8d31",
          "message": "pallet-revive: Use custom target to build test fixtures (#6266)\n\nThis removes the need to use a custom toolchain to build the contract\ntest fixtures. Instead, we supply a custom target and use the currently\nin use upstream toolchain.\n\n---------\n\nCo-authored-by: Jan Bujak <jan@parity.io>\nCo-authored-by: Cyrill Leutwiler <cyrill@parity.io>\nCo-authored-by: command-bot <>",
          "timestamp": "2024-10-29T17:23:13Z",
          "tree_id": "259ed508084e066bed6acfb12266a144d2123fd7",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/17eee37c315d2e19848b622c041c71f07e6b8d31"
        },
        "date": 1730225562593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63632.12999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000019752950000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 3.242059359539997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 16.652126214100157,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000019289110000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006235618769999999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 3.2245991427600003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 3.20746009968,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.6714936036730625,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000019752950000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 3.3237229402699997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 3.026731446219986,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.6213176068601702,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000019289110000000002,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alvicsam@gmail.com",
            "name": "alvicsam",
            "username": "alvicsam"
          },
          "committer": {
            "email": "alvicsam@gmail.com",
            "name": "alvicsam",
            "username": "alvicsam"
          },
          "distinct": true,
          "id": "72116f887c944d70748bf5d4bb803ec91410b4a9",
          "message": "fail if no artifacts",
          "timestamp": "2024-11-22T11:36:39+01:00",
          "tree_id": "116aed89b5a6da80ae3b7d0141ee258d8fb04316",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/72116f887c944d70748bf5d4bb803ec91410b4a9"
        },
        "date": 1732273396910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52938.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63625.57000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4635917975199995,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001817848,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001911793,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4145537310400003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001911793,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.341666018159994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1339789138600023,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4351382617399993,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4819425453599929,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005677564330000004,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001817848,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3558667686923735,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.40678320431,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alvicsam@gmail.com",
            "name": "alvicsam",
            "username": "alvicsam"
          },
          "committer": {
            "email": "alvicsam@gmail.com",
            "name": "alvicsam",
            "username": "alvicsam"
          },
          "distinct": true,
          "id": "c48a5f7d9d26aedd0ce0d13f81f11d8de49d4caf",
          "message": "rm test fail",
          "timestamp": "2024-11-22T13:05:25+01:00",
          "tree_id": "6162f3fe155279596b4f56fb3716ad88ba8bdba9",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/c48a5f7d9d26aedd0ce0d13f81f11d8de49d4caf"
        },
        "date": 1732278699077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63629.79,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.90000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 0.00002071061,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.0057340006499999995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.7819427632399987,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.7931873431000014,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001833093,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001833093,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.5305161969700003,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.039413200713295,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 14.167245390720296,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00002071061,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5298602964002955,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.770777678699999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.755227111660001,
            "unit": "seconds"
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
          "id": "0bf2f5bd06c2887d572300bb5c52635a773c0a7e",
          "message": "swap",
          "timestamp": "2024-12-05T11:19:19+01:00",
          "tree_id": "5d70b7ebb9f29f8f8282e106e5d2bbbc6b7ac251",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/0bf2f5bd06c2887d572300bb5c52635a773c0a7e"
        },
        "date": 1733395882492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63621.02,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 3.0911938645099997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00002051277,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000019102879999999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5876185255300787,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.498824939322857,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00002051277,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 3.055447811910003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.8781724509499913,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000019102879999999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 15.895495402850074,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006824034960000001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 3.1806817751299996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 3.095556939859999,
            "unit": "seconds"
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
          "id": "58beb58da806e0dd99e7be1bfa99e893b507d602",
          "message": "Update cmd.py",
          "timestamp": "2024-12-05T17:23:31+01:00",
          "tree_id": "f8b9582e926b645fd5e3316c540bed4f87c2b995",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/58beb58da806e0dd99e7be1bfa99e893b507d602"
        },
        "date": 1733417655218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944.8,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63627.47000000001,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel",
            "value": 14.52440698568999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.05336735626233,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.531419906640034,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001977749,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.83220289739,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.8746999949699994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006707650610000007,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000020584110000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000020584110000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001977749,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.8618830508199986,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.8365712064299546,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.5809222788300024,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "a6ce732345d9787737a88023f0e885ff7733c61c",
          "message": "Update from mordamax running command 'bench --runtime westend --pallet pallet_balances'",
          "timestamp": "2024-12-06T17:05:47Z",
          "tree_id": "fa65358695e497cd8e8a081d6f76248f75f63d8e",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/a6ce732345d9787737a88023f0e885ff7733c61c"
        },
        "date": 1733613032846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63640.52999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.4527075538099976,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.736618494390001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.518431306439983,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.7652137369428056,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.0059433316800000064,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.707244385530001,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000019195410000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000019710019999999997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.7042437841900013,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.688726533160001,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000019195410000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 13.813915389199986,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000019710019999999997,
            "unit": "seconds"
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
          "id": "9abb35647162a2710ef3e128bc08130520459820",
          "message": "Update env",
          "timestamp": "2024-12-08T17:43:24Z",
          "tree_id": "4c456a68a9642fbe9cc4d61548b8b9fc2122ba58",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/9abb35647162a2710ef3e128bc08130520459820"
        },
        "date": 1733681819596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63645.01000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5453327941299798,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000018978810000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001978244,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 3.0035781426599995,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 4.409157468133406,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000018978810000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001978244,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006462310900000001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 3.0250820213400025,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 3.0045539441600013,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 15.44178791002994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 3.092447923409975,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.764330773429987,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}