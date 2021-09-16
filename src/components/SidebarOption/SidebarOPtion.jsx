import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.scss";
const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    
    
  };


  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebarOption__hash"># </span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
