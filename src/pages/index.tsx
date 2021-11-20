import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Spotify Web Player NowPlaying</h1>
      <img
        className={styles.logo}
        src="/react-spotify-web-playback-sdk-logo.png"
        alt="logo"
      />
      <div className={styles.links}>
        <a className={styles.signinLink} href="/api/login">
          Sign-in with Spotify
        </a>
        <a
          className={styles.githubLink}
          target="_blank"
          rel="noopner noreferer"
          href="https://github.com/y-hiraoka/react-spotify-web-playback-sdk">
          Repository (SDK)
        </a>
        <a
          className={styles.githubLink}
          target="_blank"
          rel="noopner noreferer"
          href="https://github.com/iamtakagi/spotify-web-player-nowplaying">
          Repository (App)
        </a>
      </div>
    </div>
  );
}
