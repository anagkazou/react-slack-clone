import React from "react";
import "./SideBar.scss";
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from "@material-ui/icons";
import { Create } from "@material-ui/icons";
import SidebarOption from "../SidebarOption/SidebarOPtion";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2> David</h2>
          <h3>
            <FiberManualRecord />
            DaviDOM
          </h3>
        </div>
        <Create />
      </div> 
       <SidebarOption Icon={InsertComment}  title="Threads"/>
       <SidebarOption Icon={Inbox}  title="Mentions & reactions"/>
       <SidebarOption Icon={Drafts}  title="Saved items"/>
       <SidebarOption Icon={BookmarkBorder}  title="Channel browser"/>
       <SidebarOption Icon={PeopleAlt}  title="People & user groups"/>
       <SidebarOption Icon={Apps}  title="Apps"/>
       <SidebarOption Icon={FileCopy}  title="FIle broswer"/>
       <SidebarOption Icon={ExpandLess}  title="Show less"/>
       <hr/>
       <SidebarOption Icon={ExpandMore}  title="Show more"/>
       <hr/>
       <SidebarOption Icon={Add}  title="Add Channel"/>
       <hr/>

    </div>
  );
};

export default SideBar;