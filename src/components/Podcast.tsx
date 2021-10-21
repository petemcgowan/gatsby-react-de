import React from "react";
import "./Podcast.css";
import podcastHouseImage from "../images/UndergroundHousePodcastv1G.jpg";
import podcastTechnoImage from "../images/ECPodCrowdControlv2500x500.jpg";
import {PodcastProps, PodcastLinkType} from "../interfaces/PodcastInterfaces";


const Podcast = (props: PodcastProps) => {

  return (
      <div className="podContainer">
        <div> </div>
        <div> </div>
        <div>
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
            <a href={link.href}>
            {link.title}
            </a>
          </div>
          ))}
        </div>
        <div> </div>
        <div> </div>
      </div>
  );
};
export default Podcast;
