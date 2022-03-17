import React from "react";
import { Paper, Typography } from "@mui/material";
import { formataParaBarras } from "../../util/data";

const Alunos = ({ alunos }) => {
  return (
    <>
      {alunos.map((aluno) => (
        <Paper
          key={aluno.id}
          sx={{ padding: 3, marginLeft: 3, marginBottom: 1 }}
          elevation={10}
        >
          <Typography variant="h5">
            Nome: <strong>{aluno.nome}</strong>
          </Typography>
          <Typography variant="body1">
            Data de nascimento: {formataParaBarras(aluno.dataDeNascimento)}
          </Typography>
          <Typography variant="body2">Turma: {aluno.turma}</Typography>
        </Paper>
      ))}
    </>
  );
};

export default Alunos;
