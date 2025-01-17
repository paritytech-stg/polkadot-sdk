window.BENCHMARK_DATA = {
  "lastUpdate": 1737130955749,
  "repoUrl": "https://github.com/paritytech-stg/polkadot-sdk",
  "entries": {
    "statement-distribution-regression-bench": [
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
        "date": 1729686127371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.95799999999997,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03745166128199999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04719612842999992,
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
        "date": 1729847968731,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.93999999999991,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.045404129617999986,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.0361295611,
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
        "date": 1729856509718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.95399999999997,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.045035049187999936,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.035373663588,
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
        "date": 1729870587003,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.90199999999999,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.338,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.09233305076199992,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.08619934186199997,
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
        "date": 1729882942218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.94199999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.045634034193999924,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.036272240555999986,
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
        "date": 1730154946542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.94199999999994,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.045037539409999904,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.035203121617999995,
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
        "date": 1730201015614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.93199999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.40199999999997,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.04063832414200002,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.05050873222799997,
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
        "date": 1730215867031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.95199999999994,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.037071104912,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04720340958799996,
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
        "date": 1730225575575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.95200000000001,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.40799999999999,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.07677723431,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.08396611007799992,
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
        "date": 1732273411166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.95599999999995,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.048129378385999934,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.03779915604399999,
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
        "date": 1732278712913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.40999999999997,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.96199999999992,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.046255418205999994,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.055351816727999915,
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
        "date": 1733395895793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.94399999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03684939593799999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04683003054999994,
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
        "date": 1733417668209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.93999999999997,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.05061311263999995,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.040351316954,
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
        "date": 1733613045793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.95599999999995,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03523362720399999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04555406732599991,
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
        "date": 1733681833208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.94199999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.035161126329999993,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04521828029799996,
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
        "date": 1733684629681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.41599999999995,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 128.004,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.08479183496999991,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.08006752561400003,
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
        "date": 1733766657612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.94799999999995,
            "unit": "KiB"
          },
          {
            "name": "test-environment",
            "value": 0.04664667768599998,
            "unit": "seconds"
          },
          {
            "name": "statement-distribution",
            "value": 0.036251024364,
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
        "date": 1733770380067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.94999999999996,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.036176519198,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.046230443072,
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
        "date": 1734519931580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "Sent to peers",
            "value": 127.942,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03552340710600001,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04515028591799993,
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
        "date": 1734536883539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.95799999999997,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03546184215199999,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04907688667799995,
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
        "date": 1734649558771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.93599999999995,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.035453433188000004,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.04516990851599994,
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
        "date": 1737130948079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sent to peers",
            "value": 127.93399999999994,
            "unit": "KiB"
          },
          {
            "name": "Received from peers",
            "value": 106.39999999999996,
            "unit": "KiB"
          },
          {
            "name": "statement-distribution",
            "value": 0.03560228182800001,
            "unit": "seconds"
          },
          {
            "name": "test-environment",
            "value": 0.045339457941999985,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}