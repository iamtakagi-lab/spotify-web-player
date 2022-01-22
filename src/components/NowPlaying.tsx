import { usePlaybackState } from "react-spotify-web-playback-sdk";
import { useToasts } from "react-toast-notifications";
import { TOOT_ENDPOINT, TWEET_ENDPOINT, TWITTER_SCREEN_NAME } from "../../settings";
import styles from "./NowPlaying.module.css";
import { v4 as uuid } from "uuid";
import { MASTODON_INSTANCE_DOMAIN } from "../../settings.example";

export const NowPlaying: React.VFC<{}> = ({}) => {
  const { addToast, removeToast } = useToasts();
  const playbackState = usePlaybackState(true, 100);
  const tweet = async () => {
    if (!playbackState)
      return addToast(`再生中の曲を取得できませんでした`, {
        appearance: "error",
        autoDismiss: true,
      });
    const { current_track } = playbackState.track_window;
    // Tweet NowPlaying
    const waiting_toast_id = uuid();
    addToast(`ツイートしています...`, {
      appearance: "info",
      autoDismiss: false,
      id: waiting_toast_id,
    });
    fetch(TWEET_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(current_track),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      removeToast(waiting_toast_id);
      const { id } = await res.json();
      if (id) {
        addToast(`https://twitter.com/status/${TWITTER_SCREEN_NAME}/${id}`, {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast(`ツイート失敗`, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    });
  };
  const toot = async () => {
    if (!playbackState)
      return addToast(`再生中の曲を取得できませんでした`, {
        appearance: "error",
        autoDismiss: true,
      });
    const { current_track } = playbackState.track_window;
    // Toot NowPlaying
    const waiting_toast_id = uuid();
    addToast(`トゥートしています...`, {
      appearance: "info",
      autoDismiss: false,
      id: waiting_toast_id,
    });
    fetch(TOOT_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(current_track),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      removeToast(waiting_toast_id);
      const { id } = await res.json();
      if (id) {
        addToast(`https://${MASTODON_INSTANCE_DOMAIN}/web/statuses/${id}`, {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast(`トゥート失敗`, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    });
  };
  return (
    <div>
      <button className={styles.action} onClick={() => tweet()}>
        #NowPlaying with Twitter
      </button>
      <button className={styles.action} onClick={() => toot()}>
        #NowPlaying with Mastodon
      </button>
    </div>
  );
};
