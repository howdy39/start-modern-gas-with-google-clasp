# Google clasp ではじめる モダン Google Apps Script

## case1-clasp
clasp をコード管理と割り切って使うバージョンです。

スクリプトエディタを開発の中心にして、ソースコード管理をclaspで行います。


## case2-clasp-with-lint-prettier
clasp をより活用するバージョンです。きれいなコードを残すのが主目的です。

npm を併用し、ESLint, Prettier, ビルドコマンドの定義などを行います。

- （サクッと実装したい場合）ローカル環境でコードを書いてclasp pushで反映。
- （コード補完も活用したい場合は）スクリプトエディタでコードを書いてclasp pullで取り込んだ後、ローカル環境でコードをきれいにしてclasp pushで反映。

## case3-clasp-typescript-with-lint-prettier
case2-clasp-with-lint-prettier を TypeScript 使用に変更したバージョンです。

clasp push 時にコードが変換されるため、基本的にローカルで開発を行う必要があります。


## case4-clasp-with-gas-clasp-starter
clasp を最大限に活用するバージョンです。

[howdy39/gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter) を使い、完全にローカルで開発を行います。
スクリプトエディタ上はコードが難読化されるため、スクリプトエディタとソースコードが剥離するリスクがなくなります。

- TypeScript を使ったコード補完
- Jestを使ったテストコード


## case5-clasp-with-gas-clasp-starter-use-my-project
case4-clasp-with-gas-clasp-starter に加えて、自分で作ったGCPプロジェクトを使用する形に切り替えたものです。

ローカル環境からスクリプトの実行が行えるようになるため、スクリプトエディタを開くことがほぼなくなります。


## case6-clasp-with-gas-clasp-starter-use-circle-ci
case4-clasp-with-gas-clasp-starter を CircleCI を使って PR マージ時にデプロイするようにしたバージョンです。

CircleCI を使うため別リポジトリに作成しています。

[howdy39/case6-clasp-with-gas-clasp-starter-use-circle-ci](https://github.com/howdy39/case6-clasp-with-gas-clasp-starter-use-circle-ci)


## case7-clasp-with-gas-clasp-starter-use-github-action
