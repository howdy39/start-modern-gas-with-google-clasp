# Google clasp ではじめる モダン Google Apps Script

## case1-clasp
clasp を最低限の利用にするバージョンです。

- スクリプトエディタでもclaspでもどちらでも開発可能 :+1:
- `@types/google-apps-script` の型定義を入れているので、ローカル環境でも簡易的な補完は効く :+1:


## case2-clasp-with-lint-prettier
case1 よりローカル開発寄りにしたバージョンです。

npm を併用し、ESLint, Prettier, ビルドコマンドの定義などが追加しています。

- スクリプトエディタでもclaspでもどちらでも開発可能 :+1:
- `@types/google-apps-script` の型定義を入れているので、ローカル環境でも簡易的な補完は効く :+1:
- ESLintを使ったコード検証 :+1:
- Prettierを使ったコードフォーマット :+1:


## case3-clasp-typescript-with-lint-prettier
case2-clasp-with-lint-prettier を TypeScript 使用に変更したバージョンです。

- スクリプトエディタでの開発は不可 :-1:
- ESLintを使ったコード検証 :+1:
- Prettierを使ったコードフォーマット
- 型定義を使った堅牢なアプリケーションが作成可能
- import, exportに癖がある :-1:


## case4-clasp-with-gas-clasp-starter
clasp を最大限に活用するバージョンです。

[howdy39/gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter) を使い、完全にローカルで開発を行います。
スクリプトエディタ上はコードが難読化されるため、スクリプトエディタとソースコードが剥離するリスクがなくなります。

- スクリプトエディタでの開発は不可 :-1:
- ESLintを使ったコード検証 :+1:
- Prettierを使ったコードフォーマット :+1:
- 型定義を使った堅牢なアプリケーションが作成可能 :+1:
- Jestを使ったテストコード :+1:


## case5-clasp-with-gas-clasp-starter-use-my-project
case4-clasp-with-gas-clasp-starter に加えて、自分で作ったGCPプロジェクトを使用する形に切り替えたものです。

ローカル環境からスクリプトの実行が行えるようになるため、スクリプトエディタを開くことがほぼなくなります。

- スクリプトエディタでの開発は不可 :-1:
- ESLintを使ったコード検証 :+1:
- Prettierを使ったコードフォーマット :+1:
- 型定義を使った堅牢なアプリケーションが作成可能 :+1:
- Jestを使ったテストコード :+1:
- Apps Scriptをローカルから実行可能 :+1:


## case6-clasp-with-gas-clasp-starter-use-circle-ci
case4-clasp-with-gas-clasp-starter を CircleCI を使って PR マージ時にデプロイするようにしたバージョンです。

CircleCI を使うため別リポジトリに作成しています。

[howdy39/case6-clasp-with-gas-clasp-starter-use-circle-ci](https://github.com/howdy39/case6-clasp-with-gas-clasp-starter-use-circle-ci)

