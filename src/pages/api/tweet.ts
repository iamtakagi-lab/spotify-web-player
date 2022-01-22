import { NextApiHandler } from "next";
import Twitter from "twitter-lite";
import {
  TWITTER_CK,
  TWITTER_CS,
  TWITTER_AT,
  TWITTER_ATS,
} from "../../../settings";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const current_track = req.body as Spotify.Track;
    if (!current_track) return;
    const uploadClient = new Twitter({
      subdomain: "upload",
      consumer_key: TWITTER_CK,
      consumer_secret: TWITTER_CS,
      access_token_key: TWITTER_AT,
      access_token_secret: TWITTER_ATS,
    });
    const userClient = new Twitter({
      consumer_key: TWITTER_CK,
      consumer_secret: TWITTER_CS,
      access_token_key: TWITTER_AT,
      access_token_secret: TWITTER_ATS,
    });
    // Upload Artwork
    const base64Image = await new Promise<String>((resolve) => {
      fetch(current_track.album.images[0].url).then((res) => {
        res.arrayBuffer().then((arrayBuffer) => {
          resolve(Buffer.from(arrayBuffer).toString("base64"));
        });
      });
    });
    // Tweet NowPlaying
    uploadClient
      .post("media/upload", {
        media_data: base64Image,
      })
      .then(({ media_id_string }) => {
        userClient.post("statuses/update", {
          status: `#NowPlaying ${current_track.name} - ${current_track.artists
            .map((artist: Spotify.Artist) => artist.name)
            .join(", ")} (${
            current_track.album.name
          }) https://open.spotify.com/track/${current_track.id}`,
          media_ids: media_id_string,
        }).then(({id}) => {
          res.json({ id })
          res.end()
        })
      });
  } else {
    res.status(405).send("Method Not Allowed");
  }
};

export default handler;
