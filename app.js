
function pesquisar(){
    // obtem a seção a html onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado, você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }
    // se campo pesquisa for uma string sem nada 
    campoPesquisa = campoPesquisa.toLowerCase();
    // inicializa uma string vazia para armazenar os resultados 
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // itera sobre cada dado da lista de dados 
    for (let dado of dados){

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se o titulo include campoPesquisa 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // cria um novo elemento 
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="https://pt.wikipedia.org/wiki/Raysa_Leal" target="_blank">${dado.link}</a>
            </div>
            `;
        }

    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    //atribui os resultaods gerados a seção html
    section.innerHTML = resultados;
}