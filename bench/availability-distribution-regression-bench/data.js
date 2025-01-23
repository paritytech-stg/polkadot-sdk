window.BENCHMARK_DATA = {
  "lastUpdate": 1737651907207,
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
        "date": 1729847943134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.009672362946666709,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.19197034812666675,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.01754925098666666,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.025610806106666672,
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
        "date": 1729856485877,
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
            "name": "test-environment",
            "value": 0.009042664813333424,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016892324893333335,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.025325626966666674,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.18231616559333344,
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
        "date": 1729870563706,
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
            "value": 0.2471294195933333,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.01492106706000001,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.02156626060000001,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.034588485893333326,
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
        "date": 1729882919172,
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
            "value": 0.18373075904666664,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.026146087113333338,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.009504587160000057,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.017334841380000007,
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
        "date": 1730154921322,
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
            "value": 0.18014067734666667,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023920274659999997,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.015964078726666664,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008695184000000088,
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
        "date": 1730200989843,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-distribution",
            "value": 0.020696464366666664,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.2266536777200001,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.029026064979999995,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.01279981777333335,
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
        "date": 1730215841751,
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
            "value": 0.18240158324666664,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.01631667425333333,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008662005353333408,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.02423791250666667,
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
        "date": 1730225549622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-store",
            "value": 0.24126000883999998,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.01591739232666668,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.021661847546666668,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.032015148666666673,
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
        "date": 1732273383132,
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
            "name": "test-environment",
            "value": 0.009314715466666726,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016489694673333336,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.18304880531333334,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.025299892166666664,
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
        "date": 1732278685228,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-store",
            "value": 0.2135948502866667,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.020223996153333333,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.029587759813333333,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.012163730000000006,
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
        "date": 1733395869398,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-store",
            "value": 0.18202206076,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016634263273333328,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.009300923653333406,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.025148780866666668,
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
        "date": 1733417641996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.008733280600000086,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.024431108253333327,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17729677643333333,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016186833420000005,
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
        "date": 1733613019075,
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
            "name": "availability-distribution",
            "value": 0.01621380768,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008639288400000066,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17712210556000005,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.02467791805333333,
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
        "date": 1733681806045,
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
            "name": "bitfield-distribution",
            "value": 0.02451139761333333,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008906211180000087,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016347929360000003,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17838320321999998,
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
        "date": 1733684604237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.01199460433333336,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.22033700790666683,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.029934461306666674,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.018723526953333337,
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
        "date": 1733766630870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-distribution",
            "value": 0.01645598260000001,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.18725019632000006,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.02513358232,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.009077855360000078,
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
        "date": 1733770353417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-store",
            "value": 0.18203172146000005,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008651112473333424,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.01639610075333333,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.024741483160000004,
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
        "date": 1734519908166,
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
            "value": 0.18073449703333336,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008884312740000065,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016023139693333337,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.02446670093333333,
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
        "date": 1734536858337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.024532569760000008,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008770836280000078,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016292854699999998,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.18138453369999993,
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
        "date": 1734649534803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-distribution",
            "value": 0.016112502339999998,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008650724866666758,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.18170155160666657,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.024386743599999997,
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
        "date": 1737130924034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-store",
            "value": 0.17992811197333322,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.015563142966666667,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008680732193333427,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023584164919999998,
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
        "date": 1737133022636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-distribution",
            "value": 0.016070819619999996,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.02349265336,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008788485233333422,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17878628844666664,
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
        "date": 1737162213110,
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
            "name": "bitfield-distribution",
            "value": 0.02347995593333333,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17944276428000003,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.0163641467,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008878030933333421,
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
        "date": 1737249182100,
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
            "name": "test-environment",
            "value": 0.00872548358666675,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.18038905321333332,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016392305080000006,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023761715899999997,
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
        "date": 1737277663581,
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
            "value": 0.17778155065333334,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.02342613672666666,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.015401263699999999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008664225853333409,
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
        "date": 1737285753319,
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
            "name": "bitfield-distribution",
            "value": 0.02341108866666667,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.015792145419999994,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008687330080000093,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17784874122666663,
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
        "date": 1737315178577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-store",
            "value": 0.1780897977799999,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.02347588245333333,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.015837423579999996,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008872481820000083,
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
        "date": 1737326836869,
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
            "name": "availability-distribution",
            "value": 0.015876943186666666,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023603323306666667,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17857178240666674,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008597261093333421,
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
        "date": 1737416862342,
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
            "name": "test-environment",
            "value": 0.00854154576666675,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023393302933333332,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17880082484666665,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.015591312953333334,
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
        "date": 1737483796257,
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
            "name": "bitfield-distribution",
            "value": 0.023488137873333325,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.016044549166666672,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008506777353333423,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17862483643999993,
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
        "date": 1737486082052,
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
            "name": "bitfield-distribution",
            "value": 0.02343771785333333,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17956622895999988,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008723414846666756,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.01568205946666667,
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
        "date": 1737544815013,
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
            "name": "availability-distribution",
            "value": 0.016134562306666673,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17891288877333322,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008502972180000085,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023290745746666675,
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
        "date": 1737633328431,
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
            "name": "bitfield-distribution",
            "value": 0.02336890070666667,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.015779743166666665,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008743128246666758,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17975926015999982,
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
        "date": 1737637800613,
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
            "value": 0.17857392088000001,
            "unit": "seconds"
          },
          {
            "name": "availability-distribution",
            "value": 0.01604403996,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023551520053333337,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.009306210620000066,
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
        "date": 1737651899734,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 18481.666666666653,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 433.3333333333332,
            "unit": "KiB"
          },
          {
            "name": "availability-distribution",
            "value": 0.01588794651333333,
            "unit": "seconds"
          },
          {
            "name": "bitfield-distribution",
            "value": 0.023506576219999995,
            "unit": "seconds"
          },
          {
            "name": "availability-store",
            "value": 0.17867198166666667,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.008991402193333404,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}