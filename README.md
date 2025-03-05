# CDK BOILER REPOSITORY

## 使い方

1. この repository の中の `replacehere` と `Replacehere` を好みの project 名に一括置換する
2. AWS アカウント側で <https://dev.classmethod.jp/articles/allowing-assumerole-only-for-specific-repositories-and-branches-with-oidc-collaboration-between-github-actions-and-aws/を参考にOIDCを設定する>
3. repository の secrets に以下の値を設定

- AWS_REGION
- AWS_CI_ROLE_ARN
- AWS_DEPLOY_ROLE_ARN

## 初期設定されているもの

- CI workflow
  - test (snapshot test の初期テンプレート)
  - lint
    - typecheck 含む
  - cdk synth
    - 生成時 nag による推奨プラクティスチェックも含む
- CDK Diff の結果を PR にコメントする機能
- CD workflow

## Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
- `npm run snapshot:update` snapshot test 用の snapshot test を update する
- `npm run test-all` CI で用いているテスト項目を全て実施する
