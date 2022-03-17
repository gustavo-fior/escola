import './App.css';
import { Button, Container, Grid, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import { createAluno, getAlunos, getTurmas } from './api/api';
import { formataParaTracos } from './util/data';
import Alunos from './components/Alunos';
import Loading from './components/Loading';

function App() {

  const [alunos, setAlunos] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [turma, setTurma] = useState("");
  const [nome, setNome] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTurmas(setTurmas);
    getAlunos(setAlunos).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Grid container marginTop={15}>
        {loading ?
          <Loading />
          :
          <>
            <Grid item md={3}>
              <Paper sx={{ padding: 3 }} elevation={10}>
                <form onSubmit={event => {
                  createAluno(nome, dataDeNascimento, turma);
                }}>
                  <Typography variant='h5'>Cadastrar aluno</Typography>
                  <Typography sx={{ marginTop: 3 }} variant='body2'>Nome</Typography>
                  <TextField sx={{ marginTop: 1 }} fullWidth onChange={e => {
                    setNome(e.target.value)
                  }} placeholder='Nome do aluno'></TextField>
                  <Typography sx={{ marginTop: 3 }} variant='body2'>Turma</Typography>
                  <Select
                    value={turma}
                    sx={{ marginTop: 1 }}
                    fullWidth
                    label="Turma"
                    onChange={event => {
                      setTurma(event.target.value);
                    }}
                  >
                    {turmas.map((turma) => (
                      <MenuItem
                        label="Escolha a turma"
                        key={turma.id}
                        value={turma.id}
                      >
                        {turma.nome}
                      </MenuItem>
                    ))}
                  </Select>

                  <Typography sx={{ marginTop: 3 }} variant='body2'>Data de nascimento (dd/mm/aaaa)</Typography>
                  <TextField fullWidth onChange={e => {
                    setDataDeNascimento(formataParaTracos(e.target.value));
                  }} sx={{ marginTop: 1 }} placeholder='Data de nascimento'></TextField>
                  <Button fullWidth sx={{ marginTop: 2 }} type="submit" variant='contained'>Cadastrar</Button>
                  <Button fullWidth sx={{ marginTop: 2 }} href="https://escola-somosadd.herokuapp.com/swagger-ui.html#/" variant='outlined'>Docs da API</Button>
                </form>
              </Paper>
            </Grid>
            <Grid item md={9}>
              <Alunos alunos={alunos} />
            </Grid>
          </>}
      </Grid>
    </Container >
  );
}

export default App;
