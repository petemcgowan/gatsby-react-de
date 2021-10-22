import React from "react"
import "./Podcast.css"
import podcastImage from "../images/ECPodCrowdControlv2500x500.jpg"

// TODO: Obviously PageDetails should be passed a Podcast JSON object (with the other values)  There should be a "techno boolean" or such, which would at least allow for a second podcast.  If the page title is techno, then use the techno podcast JSON, otherwise the "house podcast JSON".  The image link should also be passed in?

// TODO Still need that description to go along with the embeds.

const PodcastTechno = () => {
  return (
    <div className="podContainer">
    <div> </div>
    <div> </div>
    <div>
    <a href="https://podcasts.apple.com/lc/podcast/underground-house-funk-techno/id1445101714">
            <img
              src={podcastImage}
              alt="pure techno underground podcast"
              height="250"
              width="250"
            />
          </a>
    </div>
    <div className="linksContainer">
      <div className="linkItem">
        <a href="https://podcasts.apple.com/ie/podcast/pure-techno-underground/id1527885709">
          Apple Podcasts
        </a>
      </div>
      <div className="linkItem">
        <a href="https://pca.st/podcast/9b009de0-c16d-0138-e716-0acc26574db2">
          Pocket Casts
        </a>
      </div>
      <div className="linkItem">
        <a href="https://www.stitcher.com/s?fid=564416">
          Stitcher{" "}
        </a>
      </div>
      <div className="linkItem">
        <a href="http://tun.in/pj0lb">TuneIn</a>
      </div>
    </div>
    <div> </div>
    <div> </div>
  </div>
  )
}

export default PodcastTechno
