function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos pelo seu ID.
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
  
    // Imprime no console para verificar se o elemento foi encontrado (para fins de depuração).
    console.log(section);

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) na lista de dados.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
          </h2>
      </div>
    `;
      }
           // então,faça....
      console.log(dado.titulo.includes(campoPesquisa))
      // Constrói o HTML para cada resultado da pesquisa, formatando os dados do objeto.
    }
  
if (!resultados) {
  resultados = "<p>Nada foi encontrado</p>"
}

    // Atribui o HTML gerado para o elemento da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }