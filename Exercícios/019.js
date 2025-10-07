let serie = {
    Titulo: 'Black Mirror',
    Criador: 'Charlie Brooker',
    Genero:['Antologia','Ficção especulativa','Ficção científica','Thriller psicológico'],
    Ano_de_lançamento: 2011,
    Nr_temporadas: 7,
    Episodios: [
        {
            Temporada: 7 , 
            Nr_espisodio: 2 , 
            Titulo: 'Bête Noire' , 
            Duracao: '50min'
        },
        {
            Temporada: 6 , 
            Nr_espisodio: 1 , 
            Titulo: 'A Joan é Péssima' , 
            Duracao: '41min'
        },
        {
            Temporada: 3 , 
            Nr_espisodio: 6 , 
            Titulo: 'Odiados pela Nação' , 
            Duracao: '80min'
        }
    ]
}
console.log(serie.Episodios[2].Titulo);
console.log(serie.Episodios[2].Duracao);
console.log(serie.Episodios[2].Temporada);
