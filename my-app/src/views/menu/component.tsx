import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Menu: FC = () => {

  return <div className="menu">
    <ul>
      <li><Link to="/dragons">Dragons</Link></li>
      <li><Link to="/rockets">Rockets</Link></li>
      <li><Link to="/ships">Ships</Link></li>
    </ul>
  </div>;
}