import React from "react";
import { Menu } from "semantic-ui-react";
import UserInfo from "./UserInfo/UserInfo";
import Channels from "./Channels/Channels";
import PrivateChat from "./privateChat/PrivateChat";
import FavouriteChannel from "./Favourites/FavouriteChannel";
import "./sidebar.css";
import SidebarContent from "./SidebarContent";

export const Sidebar = () => {
  return (
    <div className="desktop_sidebar">
      <Menu vertical fixed="left" borderless size="large" className="side_bar">
        <SidebarContent />
      </Menu>
    </div>
  );
};


