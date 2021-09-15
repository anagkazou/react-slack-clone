import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./header.scss";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt="David"
          src=""
          //   alt={user?.displayName}
          //   src={user?.photoURL}
        />
        <AccessTime />
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search Work and Gist" />
        <Search />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
