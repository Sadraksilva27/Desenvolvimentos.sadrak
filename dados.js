let dados = [

    {
        titulo: "Rayssa leal",
        descricao: "Rayssa leal, a fadinha, é uma skatista brasileira...",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },

    {
        titulo: "Beatriz Souza, é uma judoca brasileira que se...",
        descricao: "Beatriz Souza, é uma grande judoca brasileira...",
        link: "https://pt.wikipedia.org/wiki/Beatriz Souza",
        tags: "judô judo judoca judoka"
    },

    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade, é uma grande ginasta brasileira...",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginástica ginastica ouro"
    }


];

dados.forEach(function(atleta){
    console.log("Título: " + atleta.titulo);
    console.log("Descrição: " + atleta.descricao);
    console.log("Link: " + atleta.link);
    console.log("-----------------------");
});