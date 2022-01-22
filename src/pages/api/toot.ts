import { NextApiHandler } from "next";
import { MASTODON_TOKEN, TOOT_ENDPOINT } from "../../../settings";
import Mastodon from "mastodon-api";
import { MASTODON_INSTANCE_DOMAIN } from "../../../settings.example";
import fs from "fs";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const current_track = req.body as Spotify.Track;
    if (!current_track) return;
    const mstdn = new Mastodon({
      access_token: MASTODON_TOKEN,
      api_url: "https://" + MASTODON_INSTANCE_DOMAIN + "/api/v1/",
    });
    // Toot
    mstdn
      .post("statuses", {
        status: `#NowPlaying ${current_track.name} - ${current_track.artists
          .map((artist: Spotify.Artist) => artist.name)
          .join(", ")} (${
          current_track.album.name
        }) https://open.spotify.com/track/${current_track.id}`
      })
      .then((r: { data: { id: number } }) => {
        res.json({ id: r.data.id })
        res.end()
      });
  } else {
    res.status(405).send("Method Not Allowed");
  }
};

export default handler;
