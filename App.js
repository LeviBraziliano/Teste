function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    console.log(section)

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um personagem</p>"
        return
    }

    campoPesquisa= campoPesquisa.toLowerCase()

let resultados="";
let titulo="";
let descricao="";

for(let dado of Dados) {
    titulo= dado.titulo.toLowerCase()
    titulo= dado.descricao.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

resultados += `
<div class="item-resultado">
                <h2> <a href="#" target="_blank"> ${dado.titulo}</a></h2>
            <p class="descrição-meta">${dado.descricao}
            </p>
            <a href= ${dado.link} target="_blank">Mais informações</a>
            </div> `}

            if(!resultados){
                section.innerHTML = "<p>Nenhum personagem foi encontrado</p>"
            }
            
            section.innerHTML = resultados
 }
}

