# spotify-web-player

## Setup

## Edit settings.ts

### Spotify
[Spotify API](https://developer.spotify.com/dashboard) から `SPOTIFY_CLIENT_ID` `SPOTIFY_CLIENT_SECRET` を取得し、ペーストしてください。

### Twitter
[Twitter API](https://developer.twitter.com) から API Key を取得し、ペーストしてください。

### Mastodon
https://hoge.mstdn.com/settings/applications からアプリケーションを作成したのち、アクセストークンをペーストしてください。

```ts
/* Spotify */
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

/* Twitter */
export const TWITTER_SCREEN_NAME = "";
export const TWITTER_CK = "";
export const TWITTER_CS = "";
export const TWITTER_AT = "";
export const TWITTER_ATS = "";
export const TWEET_ENDPOINT = "http://localhost:8080/api/tweet";

/* Mastodon */
export const MASTODON_TOKEN = "";
export const MASTODON_INSTANCE_DOMAIN = "mstdn.iamtakagi.net";
export const TOOT_ENDPOINT = "http://localhost:8080/api/toot";
```

## Start
```console
yarn build && yarn start
```

## Licence
iamtakagi/spotify-web-player is provided under the MIT license.
