import React, { useState } from 'react'
import './Header.css'
import Icon from "../../Images/icon.png";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
// import Avatar from "@mui/material/Avatar";
// import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from 'react-router-dom';


function Header() {

  const [inputSearch, setInputSearch] = useState("");


  return (
    <div className="header">
      <div className="header_left">
        <MenuSharpIcon />
        <Link to="/">
          <img className="logo_icon" src={Icon} alt="" />
        </Link>
       
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link  to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header_inputButton" />
        </Link>
        
      </div>
      {/* <div className='header__mic'>
        <MicIcon />
      </div> */}

      <div className="header_icons">
        <VideoCallSharpIcon className="header__icon" />
        <NotificationsNoneIcon className="header__icon" />
      </div>
    </div>
  );
}

export default Header