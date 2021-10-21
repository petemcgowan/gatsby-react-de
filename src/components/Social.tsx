import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Social.css";

const Social = () => {
  return (
    <div className="Social">
      <SocialIcon
        className="Social"
        network="instagram"
        bgColor="#E1306C"
        url="https://www.instagram.com/diplomaticenjoy"
      />
      <SocialIcon
        className="Social"
        url="https://open.spotify.com/artist/0hFzAYqKLJFEBp5jd8RhmK"
      />
      <SocialIcon
        className="Social"
        url="https://www.soundcloud.com/diplomaticenjoy"
      />
      <SocialIcon
        className="Social"
        url="https://www.youtube.com/channel/UCcMegCxCOkDyzWcgtzYUSGg"
      />
    </div>
  );
};
export default Social;
