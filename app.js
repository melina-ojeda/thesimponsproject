let page = 1;
let temporadaActual = '';
let querySearch = '';
let todosLosEpisodiosCargados = [];

function inicializarSelectTemporadas() {
    const select = document.getElementById('season-select');
    if (select && select.options.length === 1) {
        for (let i = 1; i <= 35; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Season ${i}`;
            select.appendChild(option);
        }
    }
}

async function fetchEpisodios() {
    const container = document.getElementById('grilla-episodios');
    container.innerHTML = '<p>Loading episodes...</p>'; 

    let url = `https://thesimpsonsapi.com/api/episodes?page=${page}`;
    if (temporadaActual) {
        url += `&season=${temporadaActual}`;
    }
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        todosLosEpisodiosCargados = data.results || [];
        aplicarFiltrosYRenderizar(data);

    } catch (error) {
        console.error("Error fetching data:", error);
        container.innerHTML = '<p>Error loading episodes.</p>';
    }
}

function aplicarFiltrosYRenderizar(data) {
    const container = document.getElementById('grilla-episodios');
    container.innerHTML = ''; 

    const episodiosFiltrados = todosLosEpisodiosCargados.filter(ep => {
      const matchesSearch = ep.name.toLowerCase().includes(querySearch.toLowerCase());
      const matchesSeason = temporadaActual ? ep.season === parseInt(temporadaActual) : true;
      return matchesSearch && matchesSeason;
    }
);

    if (episodiosFiltrados.length > 0) {
        renderEpisodios(episodiosFiltrados);
        renderPaginacion(data);
    } else {
        container.innerHTML = '<p>No episodes found matching your search.</p>';
        document.getElementById('navegacion').innerHTML = '';
    }
}

function renderEpisodios(episodios) {
    const container = document.getElementById('grilla-episodios');
    episodios.forEach(ep => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="https://cdn.thesimpsonsapi.com/200${ep.image_path}" alt="${ep.name}">
            <h3>${ep.name}</h3>
            <p>${ep.synopsis || 'No synopsis available.'}</p>
            <p><strong>Season:</strong> ${ep.season}</p>
            <p><strong>Episode:</strong> ${ep.episode_number}</p>
        `;
        container.appendChild(card);
    });
}

function renderPaginacion(info) {
    const container = document.getElementById('navegacion');
    if (!info || !info.pages || info.pages <= 1) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `
        <button onclick="cambiarPagina(-1)" ${page === 1 ? 'disabled' : ''}>Previous</button>
        <span>Page ${page} of ${info.pages}</span>
        <button onclick="cambiarPagina(1)" ${page === info.pages ? 'disabled' : ''}>Next</button>
    `;
}

function cambiarPagina(direccion) {
    page += direccion;
    fetchEpisodios();
}

function filterEpisodes(valor) {
    querySearch = valor;
    aplicarFiltrosYRenderizar({ pages: Math.ceil(todosLosEpisodiosCargados.length / 10) }); 
}

function filterSeason(valor) {
    temporadaActual = valor;
    page = 1; 
    fetchEpisodios();
}

inicializarSelectTemporadas();
fetchEpisodios();