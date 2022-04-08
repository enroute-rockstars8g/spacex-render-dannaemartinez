import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getShips } from "../../../service/service"

export const Ships: FC = () => {
  const [actualShips, setActualShips] = useState<any>(undefined);

  useEffect(() => {
    const firstShips = async () => {
      const newShips = await getShips();
      setActualShips(newShips);
    };

    firstShips();
  }, []);


  const fetchShips = async () => {
    const newShips = await getShips();
    setActualShips(newShips);
  };


  return (
    <div>
      <h2>Ships</h2>
      <table>
        <tr>
          <th>Nombre🚀</th>
          <th>Descripción</th>
          <th>Primer Vuelo 🚀</th>
          <th>Capacidad de Tripulación 🧑🏻</th>
          <th>Landings</th>
          <th>Activo ✅</th>
        </tr>
      {actualShips !== undefined ? 
          actualShips.map(ships => {
            console.log(ships)
            return <tr>
              <td>{ships.name}</td>
              <td>{ships.description}</td>
              <td>{ships.first_flight}</td>
              <td>{ships.crew_capacity}</td>
              <td>{ships.successful_landings}</td>
              <td>{ships.active ? "✅" : "❎"}</td>
            </tr>
          })
          : null}
      </table>
      <button onClick={fetchShips}>Recargar</button>
    </div>
  );
};
