import React from "react";

const ListItem = ({ children }) => {
  function directLocation() {
    window.location.pathname = `/${children}`;
  }

  return <li onClick={directLocation}>{children}</li>;
};

export default ListItem;
