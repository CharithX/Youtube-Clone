import React from 'react'
import './Sidebar.css';
import SideBarRow from "./SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function SideBar() {
  return (
    <div className="sidebar">

      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={ExploreIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <SideBarRow Icon={VideoLibraryIcon} title="Librey" />
      <hr />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your Video" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch later" />
      <SideBarRow Icon={ThumbUpOffAltIcon} title="Liked videos" />
      <hr />
    </div>
  );
}

export default SideBar