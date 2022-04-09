import React, { FC, useEffect, useState } from "react";
import { getDragons } from "../../../services/spacex/service.js";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./styles.css"

export const Dragons: FC = () => {
  const [actualDragons, setActualDragons] = useState<any>(undefined);

  useEffect(() => {
    const firstDragons = async () => {
      const newDragons = await getDragons();
      setActualDragons(newDragons);
    };

    firstDragons();
  }, []);


  const fetchDragons = async () => {
    const newDragons = await getDragons();
    setActualDragons(newDragons);
  };

  return (
    <div className="dragons-container">
      <h2>Dragons</h2>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Primer Vuelo</th>
          <th>Capacidad de Tripulación</th>
          <th>Wikipedia</th>
          <th>Activo ✅</th>
        </tr>
        </thead>
        <tbody>
                {actualDragons !== undefined ? 
                 actualDragons.map(dragon => {
            return( <tr>
              <td>{dragon.name}</td>
              <td>{dragon.description}</td>
              <td>{dragon.first_flight}</td>
              <td>{dragon.crew_capacity}</td>
              <td><a href={dragon.wikipedia}>Details</a></td>
              <td>{dragon.active ? "✅" : "❎"}</td>
            </tr>)
          })
          : null}
      </tbody> 
      </Table>

      <Button variant="dark" onClick={fetchDragons}>Refresh all dragons</Button>
    </div>
  );
};
