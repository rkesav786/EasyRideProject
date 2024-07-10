import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./SBD.module.css";

export const SBD = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/SBD/${id}`)
      .then((response) => {
        console.log("Received data:", response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log("Error occurred", e);
      });
  }, [id]);

  return (
    <>
      {data.map((d) => {
        return <h1>{d.Tname}</h1>;
      })}
    </>
  );
};
