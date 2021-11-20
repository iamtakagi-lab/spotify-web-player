# spotify-web-player-nowplaying
ブラウザでSpotifyの曲を再生できる物にNowPlaying機能を実装した物です。ローカル環境での動作を想定しています。リモート環境での動作は想定していません。ローカルで立ち上げ、ブラウザで使用します。

ほとんど機能が [こちら](https://github.com/y-hiraoka/react-spotify-web-playback-sdk/tree/main/example) のフォークです。

<img width="1920" alt="chrome_2Fh5FFWLtx" src="https://user-images.githubusercontent.com/46530214/142719886-ff347ceb-0275-480c-b1f2-fc5ea87c7e6f.png">
<img width="1920" alt="chrome_hfcCQkv3Hs" src="https://user-images.githubusercontent.com/46530214/142719911-b52ff8bc-7c83-4bbc-81aa-29260a2f32a2.png">


## セットアップ

## 1. constant.ts を編集
```
nano src/common/constant.ts
```

## 2. 立ち上げる 
ポート番号は各自おまかせで指定してください
```console
yarn build && yarn start
```

## Licence
iamtakagi/spotify-web-player-nowplaying is provided under the MIT license.
