import React, { FC, useEffect, useState } from "react";
import { getRockets } from "../../../services/spacex/service.js";

export const Rockets: FC = () => {
  const [actualRockets, setActualRockets] = useState<any>(undefined);

  useEffect(() => {
    const firstRockets = async () => {
      const newRockets = await getRockets();
      setActualRockets(newRockets);
    };

    firstRockets();
  }, []);


  const fetchRockets = async () => {
    const newRockets = await getRockets();
    setActualRockets(newRockets);
  };

  return (
    <div>
      <table>
        <tr>
        <th>Nombre🚀</th>
          <th>Descripción</th>
          <th>Primer Vuelo 🚀</th>
          <th>Rate</th>
          <th>Wikipedia</th>
          <th>Activo ✅</th>
        </tr>

        {actualRockets !== undefined ?
          actualRockets.map(rocket => {
            console.log(rocket)
            return <tr>
              <td>{rocket.name}</td>
              <td>{rocket.description}</td>
              <td>{rocket.first_flight}</td>
              <td>{rocket.success_rate_pct}%</td>
              <td><a href={rocket.wikipedia}>Details</a></td>
              <td>{rocket.active ? "✅" : "❎"}</td>
            </tr>
          })
          : null}
      </table>

      <button onClick={fetchRockets}>Refresh all Rockets</button>
    </div>
  );
};
