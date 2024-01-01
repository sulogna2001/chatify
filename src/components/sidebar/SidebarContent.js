import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import FavouriteChannel from "./Favourites/FavouriteChannel";
import Channels from "./Channels/Channels";
import PrivateChat from "./privateChat/PrivateChat";

const SidebarContent = () => {
    return (
        <>
            <UserInfo/>
            <FavouriteChannel />
            <Channels />
            <PrivateChat />
        </>
    )
}

export default SidebarContent