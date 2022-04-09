import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getShips } from "../../../services/spacex/service.js"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./styles.css"

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
    <div className="ships-container">
      <h2>Ships</h2>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Primer Vuelo</th>
          <th>Capacidad de Tripulación</th>
          <th>Landings</th>
          <th>Activo ✅</th>
        </tr>
        </thead>
        <tbody>
                {actualShips !== undefined ? 
                actualShips.map(ships =>{
            return ( 
           <tr>
              <td>{ships.name}</td>
              <td>{ships.description}</td>
              <td>{ships.first_flight}</td>
              <td>{ships.crew_capacity}</td>
              <td>{ships.successful_landings}</td>
              <td>{ships.active ? "✅" : "❎"}</td>
            </tr>)
          })
          : null}
         </tbody> 
      </Table>
      <Button variant="dark" onClick={fetchShips}>Recargar</Button>
    </div>
  );
};
