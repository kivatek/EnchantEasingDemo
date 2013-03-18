EnchantEasingDemo
=================

enchant.jsのEasingの動きを説明するためのプログラムです。

用意されている多くのEasingの中から比較的動きがわかりやすいものを選んで動作を確認できるようにしてあります。

## 動作確認

dev/src/index.html をブラウザに表示してください。

### ビルド環境

9leapに投稿できるzipファイルを生成することができます。
生成には **grunt** というツールを使用します。

使用するgruntのバージョンは0.4系です。

処理対象のソースファイルなどプロジェクトに依存する情報は package.json へ記述します。

同梱の Gruntfile.js では以下のコマンドを用意しています。

* grunt release (標準動作)
* grunt clean

Windows環境ではコマンドラインで grunt.cmd と指定してください。

gruntとだけタイプして実行しようとしてもエラーとなります。


#### gruntの準備

なおgruntを使用するには node.js (v0.8.20以降)を先に導入する必要があります。

以下のサイトを参照してください。

* http://nodejs.org/
* http://gruntjs.com/

gruntを実行できる状態になりましたら、以下のコマンドを実行してローカルディレクトリにモジュールを追加します。

* npm install grunt-contrib-copy --save-dev
* npm install grunt-contrib-clean --save-dev
* npm install grunt-contrib-compress --save-dev
* npm install grunt-contrib-uglify --save-dev

