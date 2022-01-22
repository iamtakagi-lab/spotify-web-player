# web-spotify-nowplaying
ブラウザでSpotifyの曲を再生できるプレイヤーにNowPlaying機能を実装しました。選曲機能はありません。公式クライアントで選曲してください。ローカル環境での動作を想定しています。リモート環境での動作は想定していません。ローカルで立ち上げ、ブラウザで使用します。

ほとんどの機能が [こちら](https://github.com/y-hiraoka/react-spotify-web-playback-sdk/tree/main/example) のフォークです。

<img width="1920" alt="chrome_QTS3L9wgHG" src="https://user-images.githubusercontent.com/46530214/142721199-dbb42cd6-dbd4-4e86-bd87-ed877dff9631.png">
<img width="1920" alt="chrome_EpRbknKYHt" src="https://user-images.githubusercontent.com/46530214/142721222-689fabbb-fafe-4c1b-9bd9-297e5c73703c.png">
<img width="311" alt="Spotify_QdNPic8jB7" src="https://user-images.githubusercontent.com/46530214/142721239-829b1395-867e-49a0-8f36-39e80b8fe277.png">



## セットアップ

## 1. src/common/constant.example.ts を適宣編集
`constant.ts` として保存すること

[Spotify API](https://developer.spotify.com/dashboard) と [Twitter API](https://developer.twitter.com) から API Key を取得し、ペーストしてください。
[Spotify API](https://developer.spotify.com/dashboard) のリダイレクトURLの設定も忘れないでください。
```ts
/**
 * Spotify
 */
export const SPOTIFY_SCOPES = [
  // "ugc-image-upload",
  // "user-read-recently-played",
  // "user-top-read",
  // "user-read-playback-position",
  // "user-read-playback-state",
  "user-modify-playback-state",
  // "user-read-currently-playing",
  // "app-remote-control",
  "streaming",
  // "playlist-modify-public",
  // "playlist-modify-private",
  // "playlist-read-private",
  // "playlist-read-collaborative",
  // "user-follow-modify",
  // "user-follow-read",
  // "user-library-modify",
  // "user-library-read",
  "user-read-email",
  "user-read-private",
] as const;
export const SPOTIFY_CLIENT_ID = "";
export const SPOTIFY_CLIENT_SECRET = "";
export const SPOTIFY_REDIRECT_URI = "http://localhost:8080/player";
export const SPOTIFY_AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
export const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
export const SPOTIFY_PLAYER_URL = "https://api.spotify.com/v1/me/player";
/**
 * Twitter
 */
export const TWITTER_SCREEN_NAME = ""
export const TWITTER_CK = "";
export const TWITTER_CS = "";
export const TWITTER_AT = "";
export const TWITTER_ATS = "";
export const TWEET_ENDPOINT = "http://localhost:8080/api/tweet"
```

## 2. 立ち上げる 
ポート番号は各自おまかせで指定してください
```console
yarn build && yarn start
```

## Licence
iamtakagi/play-spotify-in-browser-for-nowplaying is provided under the MIT license.
