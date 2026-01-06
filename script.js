
const photos = [
    { title: "Montanha de Neve", url: "https://picsum.photos/id/10/400/300" },
    { title: "Pôr do Sol no Mar", url: "https://picsum.photos/id/11/400/300" },
    { title: "Floresta Tropical", url: "https://picsum.photos/id/12/400/300" },
    { title: "Arquitetura Urbana", url: "https://picsum.photos/id/13/400/300" },
    { title: "Lago de Cristal", url: "https://picsum.photos/id/14/400/300" },
    { title: "Cachoeira Escondida", url: "https://picsum.photos/id/15/400/300" },
    { title: "Cânion Profundo", url: "https://picsum.photos/id/16/400/300" },
    { title: "Deserto Árido", url: "https://picsum.photos/id/17/400/300" },
    { title: "Pradaria Verde", url: "https://picsum.photos/id/18/400/300" },
    { title: "Cidade Noturna", url: "https://picsum.photos/id/19/400/300" }
];

const photoGrid = document.getElementById('photoGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

// Função para renderizar as fotos
function displayPhotos(filteredPhotos) {
    photoGrid.innerHTML = "";
    
    if (filteredPhotos.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filteredPhotos.forEach(photo => {
            const card = document.createElement('div');
            card.className = 'photo-card';
            card.innerHTML = `
                <img src="${photo.url}" alt="${photo.title}">
                <p>${photo.title}</p>
            `;
            photoGrid.appendChild(card);
        });
    }
}

// Filtro em tempo real
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = photos.filter(p => p.title.toLowerCase().includes(term));
    displayPhotos(filtered);
});

// Inicialização
displayPhotos(photos);