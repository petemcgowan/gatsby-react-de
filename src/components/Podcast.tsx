import React from "react";
import "./Podcast.css";
import podcastHouseImage from "../images/UndergroundHousePodcastv1G.jpg";
import podcastTechnoImage from "../images/ECPodCrowdControlv2500x500.jpg";
import {PodcastProps, PodcastLinkType} from "../interfaces/PodcastInterfaces";


const Podcast = (props: PodcastProps) => {

  return (
    <div>
      {/* <div className="flexbox-container">
          <div className="flexbox-item flexbox-item-1"></div>
          <div className="flexbox-item flexbox-item-2"></div>
          <div className="flexbox-item flexbox-item-3"></div>
      </div> */}

      <div className="podContainer">
      <div className="podLeftItem">
      </div>
        <div className="podImageContainer">
          <a href={props.podcastInfo.imgHref}>
            <img
              src={props.podcastInfo.techno ? podcastTechnoImage : podcastHouseImage}
              alt={props.podcastInfo.imgAlt}
              height="250"
              width="250"
            />
          </a>
        </div>
        <div className="linksContainer">
        {props.podcastInfo.links.map((link:PodcastLinkType, i:number) => (
          <div className="linkItem"  key={i}>
            <a href={link.href} target="_blank" >
            <img
              src={link.imgSrc}
              alt={link.imgText}
              height="45"
              width="120"
            />
            </a>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Podcast;
