import axios from "axios";

export const api = axios.create({
    baseURL: "https://escola-somosadd.herokuapp.com"
});

export const getTurmas = async (setTurmas) => {
    await api.get("/turma").then(res => {
        setTurmas(res.data)
    }).catch(err => {
        console.error(err);
    })
}

export const createAluno = async (nome, dataDeNascimento, turma) => {

    const body = {
        nome: nome,
        dataDeNascimento: dataDeNascimento,
        idTurma: turma
    }

    await api.post("/aluno", body).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.error(err);
    })
}

export const getAlunos = async (setAlunos) => {
    await api.get("/aluno").then(res => {
        setAlunos(res.data)
    }).catch(err => {
        console.error(err);
    })
}