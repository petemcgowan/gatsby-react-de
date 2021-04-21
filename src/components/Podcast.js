import React from "react"
import "./Podcast.css"
import podcastImage from "../images/UndergroundHousePodcastv1G.jpg"

const Podcast = () => {
  return (
    <div className="Podcast">
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://podcasts.apple.com/lc/podcast/underground-house-funk-techno/id1445101714">
                <img
                  src={podcastImage}
                  alt="underground house podcast"
                  height="250"
                  width="250"
                />
              </a>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="https://podcasts.apple.com/lc/podcast/underground-house-funk-techno/id1445101714">
                        Apple Podcasts
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://play.pocketcasts.com/web/podcasts/share?id=c42542a0-d999-0136-3249-08b04944ede4">
                        Pocket Casts
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://www.stitcher.com/s?eid=57501102&autoplay=1/">
                        Stitcher{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="http://tun.in/pjf12">TuneIn</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Podcast
