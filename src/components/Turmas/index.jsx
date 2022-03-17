import { MenuItem } from "@mui/material";
import React from "react";

const Turmas = ({ turmas }) => {
  return (
    <>
      {turmas.map((turma) => (
        <MenuItem label="Escolha a turma" key={turma.id} value={turma.id}>
          {turma.nome}
        </MenuItem>
      ))}
    </>
  );
};

export default Turmas;
