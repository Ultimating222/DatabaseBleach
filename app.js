function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  console.log(section);

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      let backgroundImage = '';
      if (titulo === campoPesquisa) {
        if (campoPesquisa.includes('ichigo')) {
          backgroundImage = 'bannerichigo.jpg';
        } else if (campoPesquisa.includes('chad')) {
          backgroundImage = 'chadbanner.jpg';
        } else if (campoPesquisa.includes('inoue')) {
          backgroundImage = 'inouebanner.jpg';
        } else if (campoPesquisa.includes('ishida')) {
          backgroundImage = 'bannerishida.jpg';
        }
      }

      resultados += `
      <div class="item-resultado" style="background-image: url('${backgroundImage}');">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>
        </h2>
      </div>
      `;
    }

    console.log(dado.titulo.includes(campoPesquisa));
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}