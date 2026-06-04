let page = 1;
let temporadaActual = '';
let querySearch = '';

async function fetchEpisodios() {
    const container = document.getElementById('grilla-episodios');
    container.innerHTML = '';

    let url = `https://thesimpsonsapi.com/api/episodes?page=${page}`;
    if (temporadaActual) url += `&season=${temporadaActual}`;
    
    const response = await fetch(url);
    const data = await response.json();

    // búsqueda 
    const filtrados = data.results.filter(ep =>
    ep.name.toLowerCase().includes(querySearch.toLowerCase())
    );

    renderEpisodios(filtrados);
    renderPaginacion(data);
}

function renderEpisodios(episodios) {
    const container = document.getElementById('grilla-episodios');
    episodios.forEach(ep => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="https://cdn.thesimpsonsapi.com/200${ep.image_path}" alt="${ep.name}">
            <h3>${ep.name}</h3>
            <p>Description: ${ep.synopsis}</p>
            <p>Season: ${ep.season}</p>
            <p>Episode: ${ep.episode_number}</p>
            <button onclick="guardarFav(${ep.id})">Save as Favorite</button>
        `;
        container.appendChild(card);
    });
}



fetchEpisodios();
