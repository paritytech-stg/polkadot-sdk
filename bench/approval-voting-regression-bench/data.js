window.BENCHMARK_DATA = {
  "lastUpdate": 1737651919244,
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
          "id": "3c6c1f6a163ab1757dd81960de5bdb8b0147b6fe",
          "message": "get back to ci-unified container",
          "timestamp": "2024-12-08T18:29:19Z",
          "tree_id": "4deea076888cb74cc0c52bb9e962540f05f1740e",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/3c6c1f6a163ab1757dd81960de5bdb8b0147b6fe"
        },
        "date": 1733684617158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63633.97000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52937.5,
            "unit": "KiB"
          },
          {
            "name": "approval-voting",
            "value": 0.000018676399999999996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.47491976821998544,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001867615,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005936199710000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000018676399999999996,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3842300810822756,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.412676302170001,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001867615,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.31371415813998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.426678167669999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4132147283500007,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1234124464099944,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4568765456099992,
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
          "id": "c504578439ddebf9c81a37c78b31be88b7ad2264",
          "message": "pallet-revive: Remove unused dependencies (#6796)\n\nThe dependency on `pallet_balances` doesn't seem to be necessary. At\nleast everything compiles for me without it. Removed this dependency and\na few others that seem to be left overs.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>",
          "timestamp": "2024-12-09T17:15:27Z",
          "tree_id": "5c2f4aa18d66112ca56d5616efabc0c307688ab0",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/c504578439ddebf9c81a37c78b31be88b7ad2264"
        },
        "date": 1733766644076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.09999999999,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63637.83,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.74761324022,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 13.859682123479994,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00002035405,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00002035405,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.0000194171,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.7060625668799996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.7457202736999986,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.0000194171,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006071229210000006,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.42669403239999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5153280594700022,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.7186802496422544,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.7121927216000046,
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
          "id": "6549e5f480c77c1ae5f0d01b4e52316cd4012183",
          "message": "pallet-revive: Remove unused dependencies (#6796)\n\nThe dependency on `pallet_balances` doesn't seem to be necessary. At\nleast everything compiles for me without it. Removed this dependency and\na few others that seem to be left overs.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>",
          "timestamp": "2024-12-09T18:18:57Z",
          "tree_id": "bd6af6927182ebcc986512287fd5a3dc7cd33f9e",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/6549e5f480c77c1ae5f0d01b4e52316cd4012183"
        },
        "date": 1733770366744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63636.280000000006,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 4.637117463723293,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000019481040000000005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000019577630000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006712318120000007,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 3.3106689617999967,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 3.2412563801899985,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000019577630000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000019481040000000005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 16.62257293712015,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 3.2546282129500264,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 3.2354520267700004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.9902998672298873,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.5835551700602428,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37865735+clangenb@users.noreply.github.com",
            "name": "clangenb",
            "username": "clangenb"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "72bd8ee1a6cc7312a53836ed043bd72f0244ee39",
          "message": "Migrate pallet-xcm benchmarks to benchmark v2 syntax (#6501)\n\nMigrates pallet-xcm benchmarks to benchmark v2 syntax\n\n* Part of #6202",
          "timestamp": "2024-12-18T09:56:47Z",
          "tree_id": "c1d85ff45ccef72190c7e788a5dceba0a4688265",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/72bd8ee1a6cc7312a53836ed043bd72f0244ee39"
        },
        "date": 1734519919768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63617.6,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52941.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 0.00002010434,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4242882223999977,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4515785707899997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.410254903369999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4035821775120567,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000017971830000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005682037159999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4693241956899972,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000017971830000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.275094526289994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1063821824900018,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00002010434,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.4075844143899987,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37865735+clangenb@users.noreply.github.com",
            "name": "clangenb",
            "username": "clangenb"
          },
          "committer": {
            "email": "mordamax@gmail.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "distinct": true,
          "id": "f3f66ebc9649acbefc8201452689bc8948ef2a5a",
          "message": "Migrate pallet-xcm benchmarks to benchmark v2 syntax (#6501)\n\nMigrates pallet-xcm benchmarks to benchmark v2 syntax\n\n* Part of #6202",
          "timestamp": "2024-12-18T14:55:50Z",
          "tree_id": "a37330398d10a7e5f5da33949735dff051064ae1",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/f3f66ebc9649acbefc8201452689bc8948ef2a5a"
        },
        "date": 1734536871207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52939.3,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63638.490000000005,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4509782626000014,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.47806630402,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000017134169999999997,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001989312,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.485491010339972,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.4512997946799997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.160579432870001,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.430632924732305,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4824465567099705,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000017134169999999997,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001989312,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005807802980000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.456312856479998,
            "unit": "seconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1177472+mordamax@users.noreply.github.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dab8af45fbc3659304597c7502a98f37483e3c32",
          "message": "Update cmd.yml",
          "timestamp": "2024-12-19T22:23:11Z",
          "tree_id": "a53afdff99b416c34e3149600f53ad0933edafc1",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/dab8af45fbc3659304597c7502a98f37483e3c32"
        },
        "date": 1734649546879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63636.48,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52938.40000000001,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.3754453738321244,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.31096910271999,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000018883810000000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001799646,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001799646,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000018883810000000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005576702979999997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.42187995542,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.119149249190005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4700612188399873,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4135656292,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.429492119489999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4512442275999984,
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
          "id": "1a5983688bfb1a21a9b85b550d9f66f37c9ec9c5",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-17T15:56:24Z",
          "tree_id": "a19c5acd69bc2f2c6a1ecd8e11b21d00d124fa53",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/1a5983688bfb1a21a9b85b550d9f66f37c9ec9c5"
        },
        "date": 1737130936247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63629.170000000006,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.42950148555,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005672345469999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.280802106930008,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000017352330000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4504845697700013,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.398448702399999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001748589,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4712714655800044,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.394999386870002,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3291601712024628,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000017352330000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001748589,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1304241512900006,
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
          "id": "045c0910c683fefe9353b04a743a818d26a4fb71",
          "message": "small improvements to cmd commit",
          "timestamp": "2025-01-17T16:25:06Z",
          "tree_id": "6eb7baf4a0d8a1b7ee22e1aaed73078dc6ace63b",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/045c0910c683fefe9353b04a743a818d26a4fb71"
        },
        "date": 1737133033786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.7,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63626.68999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000018273889999999997,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3906619064521273,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4048709769499994,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001758297,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005746515410000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.4108008009499984,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.48367249868001333,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.26751761790001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000018273889999999997,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001758297,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4060840925999987,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.44142619572,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1149165375900014,
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
          "id": "950a595621ab9c61d1a2ab4fa894a10003e06369",
          "message": "Refactor command bot and drop membership check",
          "timestamp": "2025-01-18T00:32:38Z",
          "tree_id": "3dba5303bfde4ddeaf0e2ba235356714abcee46f",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/950a595621ab9c61d1a2ab4fa894a10003e06369"
        },
        "date": 1737162224493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63630.32000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52943.09999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006058268600000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4234787015999992,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.420612486479999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.328428746109978,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001940427,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.423042559559999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4899653718118464,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001915749,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001915749,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.453435554060001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.117369478819989,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4844316969899909,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001940427,
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
          "id": "bb8e546876f5d1f8b6f6bbccce6acaa2eb383866",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T00:47:22Z",
          "tree_id": "f198abacdb612c70b7f782fd8472b3469ac07fc7",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/bb8e546876f5d1f8b6f6bbccce6acaa2eb383866"
        },
        "date": 1737249194284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63630.23,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.7,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.3972794881800006,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4455685015699973,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.401967366470001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001743376,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000018589130000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001743376,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4140838809900003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.115632969610001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.47441526827002123,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4146613946021525,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000018589130000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005950943740000005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.25489841883002,
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
          "id": "331d7bd528af7f11c34f9ab688e2c27a03f2bc24",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T08:41:05Z",
          "tree_id": "c3a183e4a59013cb82331fdcdd52fc23ab75bd37",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/331d7bd528af7f11c34f9ab688e2c27a03f2bc24"
        },
        "date": 1737277675451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52943.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63633.159999999996,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001940216,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001940216,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000019044959999999995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005695853200000001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.39802269417,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.3944962286300004,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3925850218522795,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000019044959999999995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4822441044000224,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.222184704960018,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4265850655899994,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.3877314180000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1274093409699937,
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
          "id": "aef992f30947ac4f647ce51ae1db1203a44f9067",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T10:55:46Z",
          "tree_id": "97677fd5ee7284720f6b4ea9fe816b384b65fb77",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/aef992f30947ac4f647ce51ae1db1203a44f9067"
        },
        "date": 1737285765360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63624.880000000005,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52936.8,
            "unit": "KiB"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.0000170268,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.0058378126000000015,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001661901,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.395493599540001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4026705072000007,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.13490966195,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4230754348,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001661901,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.28977803916001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4531813771699986,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4746096459000112,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.0000170268,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3606800331923226,
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
          "id": "ec3f52a3230eda7969b8a6cdcfc7649b1bd95681",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-19T19:07:12Z",
          "tree_id": "84b2af9cc1caa836e915aa57a84c7fb1c45cb9bc",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/ec3f52a3230eda7969b8a6cdcfc7649b1bd95681"
        },
        "date": 1737315190908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63623.750000000015,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52940.7,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.4169173076725214,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4080184534499987,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000019252579999999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.303306004069999,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001938837,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.408864847439999,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001938837,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000019252579999999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4219670241699998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4588437480800023,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.00595084129,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4921777861999989,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1074833034399987,
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
          "id": "f3f344c41e5eb2b734d5c66b6771355c47cbbcf1",
          "message": "combine jobs",
          "timestamp": "2025-01-19T22:20:42Z",
          "tree_id": "9135b21f9f2438536b6365530fc216593eb95d95",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/f3f344c41e5eb2b734d5c66b6771355c47cbbcf1"
        },
        "date": 1737326849298,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63622.35,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52942.5,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1228473094199907,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005779986339999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.440808459610001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4158784856899995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4057843373599996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.46890544098000364,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.3980317790500005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000018181530000000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000018181530000000004,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.0000174002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.258035798449994,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3738552405422917,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.0000174002,
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
          "id": "1fcd6ba1b9702417d42b72ee9c28c64332af7878",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-20T23:21:51Z",
          "tree_id": "937ecdbffe91cc1e1c970c35d4ee58c7f46b0156",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/1fcd6ba1b9702417d42b72ee9c28c64332af7878"
        },
        "date": 1737416873956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52944,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63633.98999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005968126909999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4961497601500007,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000019811279999999996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4581048645300005,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001889832,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4705908899400004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1613225311700024,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000019811279999999996,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4913948194799878,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001889832,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.536117520842042,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.477634920450001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.561165912629992,
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
          "id": "081bc00c28b74e360e79283a1b59bb1dfd1abcc9",
          "message": "Update cmd.py",
          "timestamp": "2025-01-21T17:51:28Z",
          "tree_id": "32f5a5496d660ef557fa2f994e72a6fffdf6e1ee",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/081bc00c28b74e360e79283a1b59bb1dfd1abcc9"
        },
        "date": 1737483808169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63650.53999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.359206142899998,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001869522,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.42580178132,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000018432540000000003,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4626356490500004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.459949222319999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.425144879280001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000018432540000000003,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4413534888320667,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.441736224270003,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001869522,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005598569920000006,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.138339816739996,
            "unit": "seconds"
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
        "date": 1737486094340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63618.58999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52937.5,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4294007755200004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.47369881762001365,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1009182811199967,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.0000182363,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.0000182363,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.364665529700009,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.427346136469999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.43972072448,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000018762870000000004,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.3507253198419122,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000018762870000000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.00589247702,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.48768831747,
            "unit": "seconds"
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
        "date": 1737544827124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52941.40000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63633.25,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.3117078730223852,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001697095,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4359943971699978,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.45080133725,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.089340305729995,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001854092,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001854092,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4859615303000004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4833450455300268,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001697095,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.400230928160024,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.448692810050001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.0060955021299999995,
            "unit": "seconds"
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
        "date": 1737633341260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52942.90000000001,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63625.19999999999,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 3.413012237651857,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001898342,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4760421779899997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.376904899960005,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.00001959554,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.448332173969999,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.47597364793999863,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001898342,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006639443309999997,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.00001959554,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.4299981185999995,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4329209078900016,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.106998430260005,
            "unit": "seconds"
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
        "date": 1737637813389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 63634.79,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 52945,
            "unit": "KiB"
          },
          {
            "name": "approval-distribution",
            "value": 0.000018283500000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.414322899520001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.4587442168300004,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4154214514100025,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.094617409009992,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.4780782870800224,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.341313481212149,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.000017866959999999997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4294820460000013,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.005763030359999999,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000018283500000000002,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.000017866959999999997,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.296429340210022,
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
          "id": "374f3c0f8d5a73af04b227adfc69ef6f0dae5511",
          "message": "Update cmd.yml",
          "timestamp": "2025-01-23T16:37:58Z",
          "tree_id": "1507247082bb2fb3e200a14f2cc8dd0e3254763b",
          "url": "https://github.com/paritytech-stg/polkadot-sdk/commit/374f3c0f8d5a73af04b227adfc69ef6f0dae5511"
        },
        "date": 1737651911764,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 52940.2,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 63643.65999999999,
            "unit": "KiB"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-db",
            "value": 2.1028752147700063,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-0",
            "value": 2.4485390452300004,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution",
            "value": 0.000018500029999999998,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-subsystem",
            "value": 0.49138231752000616,
            "unit": "seconds"
          },
          {
            "name": "approval-distribution/test-environment",
            "value": 0.000018500029999999998,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 3.4007462708021903,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-2",
            "value": 2.477664761090001,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-1",
            "value": 2.4139570528099985,
            "unit": "seconds"
          },
          {
            "name": "approval-voting/test-environment",
            "value": 0.00001787361,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel",
            "value": 12.375875392550013,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-parallel-3",
            "value": 2.4354299015800014,
            "unit": "seconds"
          },
          {
            "name": "approval-voting",
            "value": 0.00001787361,
            "unit": "seconds"
          },
          {
            "name": "approval-voting-parallel/approval-voting-gather-signatures",
            "value": 0.006027099550000005,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}