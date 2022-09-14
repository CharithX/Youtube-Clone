import React from 'react'
import './VideoCard.css'

import Avatar from "@mui/material/Avatar";
function VideoCard({image, tittle,channel,views,timestamp,channelImage}) {
  return (
    <div className="videocard">
      <img className='videocard__Tumbnail' src={image} alt="" />
         <div className="videocard__info">

        <Avatar
          className=" "
          alt={channel}
          src={channelImage}
        />

             <div className="videcard__text">
          <h4> {tittle}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
              </div>
         </div>
    </div>
  );
}

export default VideoCard