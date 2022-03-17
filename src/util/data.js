export const formataParaBarras = (data) => {
    const [year, month, day] = data.split('-');
    const result = [day, month, year].join('/');
    return result;
}

export const formataParaTracos = (data) => {
    const [day, month, year] = data.split('/');
    const result = [year, month, day].join('-');
    return result;
}