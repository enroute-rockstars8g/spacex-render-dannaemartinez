import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getDragon } from "../../../service/service"

export const Dragon: FC = () => {
  const [actualDragon, setActualDragon] = useState<any>(undefined);

  useEffect(() => {
    const firstDragon = async () => {
      const newDragon = await getDragon();
      setActualDragon(newDragon);
    };

    firstDragon();
  }, []);


  const fetchDragon = async () => {
    const newDragon = await getDragon();
    setActualDragon(newDragon);
  };


  return (
    <div>
      <table>
        <tr>
          <th>Nombre🐉</th>
          <th>Descripción</th>
          <th>Primer Vuelo 🚀</th>
          <th>Capacidad de Tripulación 🧑🏻</th>
          <th>Wikipedia</th>
          <th>Activo ✅</th>
        </tr>
      {actualDragon !== undefined ? 
          actualDragon.map(dragon => {
            console.log(dragon)
            return <tr>
              <td>{dragon.name}</td>
              <td>{dragon.description}</td>
              <td>{dragon.first_flight}</td>
              <td>{dragon.crew_capacity}</td>
              <td><a href={dragon.wikipedia}>Details</a></td>
              <td>{dragon.active ? "✅" : "❎"}</td>
            </tr>
          })
          : null}
      </table>
      <button onClick={fetchDragon}>Recargar</button>
    </div>
  );
};
