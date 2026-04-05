/* YouTube Simulator Script */

document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('videoGrid');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const chips = document.querySelectorAll('.chip');
    
    // Pages
    const homePage = document.getElementById('homePage');
    const watchPage = document.getElementById('watchPage');
    
    // Watch Page Elements
    const playerContainer = document.getElementById('playerContainer');
    const watchTitle = document.getElementById('watchTitle');
    const watchChannelName = document.getElementById('watchChannelName');
    const watchChannelIcon = document.getElementById('watchChannelIcon');
    const watchViews = document.getElementById('watchViews');
    const watchTime = document.getElementById('watchTime');
    const watchDesc = document.getElementById('watchDesc');
    const nextVideosGrid = document.getElementById('nextVideosGrid');

    // Dummy videos data with YouTube IDs
    const videos = [
        {
            id: "dQw4w9WgXcQ", // The classic... 
            title: "NEXUS SEAMLESS: EL FIN DE LOS LÍMITES. EL FUTURO SE ENROLLA.",
            channel: "Nexus Seamless",
            views: "1.2 M de visualizaciones",
            time: "hace 13 días",
            thumbnail: "Nexus S cilindro.png",
            avatar: "nexus.jpg",
            duration: "2:07",
            category: "Tecnología",
            desc: `¿Estás listo para dejar atrás las ataduras? La tecnología nos prometió libertad, pero terminamos encadenados a maletines pesados, cables enredados y la constante ansiedad de una batería agotándose. El mundo es tu oficina, pero solo si tu equipo te permite llegar a donde quieras.

Hoy, las reglas cambian para siempre. Presentamos el Nexus Seamless, el primer ordenador del mundo diseñado para ser verdaderamente libre.

Lo que hace al Nexus Seamless único:
Pantalla de grafeno monocapa: Más resistente que el acero y tan flexible que se enrolla sobre sí misma. Di adiós a las bisagras frágiles y las pantallas rotas.

Cero puertos físicos: Una experiencia totalmente inalámbrica y sin complicaciones.

Potencia sin compromisos: Todo el rendimiento de un ordenador de sobremesa en un formato cilíndrico revolucionario que cabe en la palma de tu mano.

NexusOS Core: Un sistema operativo fluido, intuitivo y diseñado para que tus ideas fluyan sin distracciones.

La verdadera movilidad no es llevar tu oficina a cuestas, es eliminar la fricción entre tú y tu trabajo.

📅 MARCA TU CALENDARIO: 13 DE MAYO DE 2026.
No te quedes fuera de la revolución.

#NexusSeamless #NexusOS #FuturoTecnologico #Innovacion #GrapheneScreen #TechLaunch2026`
        },
        {
            id: "9xwazD5SyVg", // Tropical video
            title: "Un paseo por el paraíso",
            channel: "Mundo viajes",
            views: "250 K de visualizaciones",
            time: "hace 15 días",
            thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600",
            avatar: "elena.jpg",
            duration: "14:12",
            category: "Viajes",
            desc: "Acompáñame en esta aventura inolvidable por las playas más hermosas de Bali. Suscríbete para más contenido de viajes!"
        },
        {
            id: "jfKfPfyJRdk", // lo fi
            title: "Deep focus & Deep work • Lofi beats for maximum productivity",
            channel: "LoFi 2.0",
            views: "15 K en directo",
            time: "Directo",
            thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600",
            avatar: "sofia.jpg",
            duration: "LIVE",
            category: "Música",
            desc: "La mejor música para concentrarte. Directo las 24 horas del día."
        },
        {
            id: "vS_vOnY2-8w", // cooking
            title: "Cómo cocinar el solomillo perfecto en 10 minutos",
            channel: "Pantry Chef",
            views: "582 K de visualizaciones",
            time: "hace 17 días",
            thumbnail: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80",
            avatar: "pantry-logo.jpg",
            duration: "10:05",
            category: "Gastronomía",
            desc: "Técnicas avanzadas pero sencillas para lograr ese punto perfecto en tu carne. ¡Buen provecho!"
        },
        {
            id: "LXb3EKWsInQ", // nexus 2
            title: "EL SECRETO DEL NEXUS SEAMLESS",
            channel: "Nexus Seamless",
            views: "890 K de visualizaciones",
            time: "hace 20 días",
            thumbnail: "Nexus Seamless dispositivo.png",
            avatar: "nexus.jpg",
            duration: "2:07",
            category: "Tecnología",
            desc: `¿Estás listo para dejar atrás las ataduras? La tecnología nos prometió libertad, pero terminamos encadenados a maletines pesados, cables enredados y la constante ansiedad de una batería agotándose. El mundo es tu oficina, pero solo si tu equipo te permite llegar a donde quieras.

Hoy, las reglas cambian para siempre. Presentamos el Nexus Seamless, el primer ordenador del mundo diseñado para ser verdaderamente libre.

Lo que hace al Nexus Seamless único:
Pantalla de grafeno monocapa: Más resistente que el acero y tan flexible que se enrolla sobre sí misma. Di adiós a las bisagras frágiles y las pantallas rotas.

Cero puertos físicos: Una experiencia totalmente inalámbrica y sin complicaciones.

Potencia sin compromisos: Todo el rendimiento de un ordenador de sobremesa en un formato cilíndrico revolucionario que cabe en la palma de tu mano.

NexusOS Core: Un sistema operativo fluido, intuitivo y diseñado para que tus ideas fluyan sin distracciones.

La verdadera movilidad no es llevar tu oficina a cuestas, es eliminar la fricción entre tú y tu trabajo.

📅 MARCA TU CALENDARIO: 13 DE MAYO DE 2026.
No te quedes fuera de la revolución.

#NexusSeamless #NexusOS #FuturoTecnologico #Innovacion #GrapheneScreen #TechLaunch2026`
        },
        {
            id: "W_9Nf_B1vA0", // gaming
            title: "Top 10 videojuegos que cambiarán el 2026",
            channel: "Gamer Zone",
            views: "320 K de visualizaciones",
            time: "hace 28 días",
            thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
            avatar: "https://i.pravatar.cc/150?u=gamer",
            duration: "18:22",
            category: "Videojuegos",
            desc: "Desde realidad virtual avanzada hasta motores gráficos fotorrealistas. Esto es lo que nos espera."
        }
    ];

    // Sidebar toggle functionality
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Logo click (Back to Home)
    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault();
        showHomePage();
    });

    function showHomePage() {
        watchPage.style.display = 'none';
        homePage.style.display = 'block';
        playerContainer.innerHTML = ''; // Stop video
        window.scrollTo(0, 0);
    }
    
    // Explore Sidebar Toggle logic
    const exploreShowMore = document.getElementById('exploreShowMore');
    const exploreExpanded = document.getElementById('exploreExpanded');
    const exploreShowLess = document.getElementById('exploreShowLess');

    if (exploreShowMore && exploreExpanded && exploreShowLess) {
        exploreShowMore.addEventListener('click', (e) => {
            e.preventDefault();
            exploreExpanded.style.display = 'block';
            exploreShowMore.style.display = 'none';
        });

        exploreShowLess.addEventListener('click', (e) => {
            e.preventDefault();
            exploreExpanded.style.display = 'none';
            exploreShowMore.style.display = 'flex';
        });
    }

    const showMoreBtn = document.querySelector('.show-more');
    showMoreBtn.addEventListener('click', () => {
        const isExpanded = watchDesc.classList.toggle('expanded');
        showMoreBtn.textContent = isExpanded ? 'Mostrar menos' : 'Mostrar más';
    });

    const subscribedChannels = new Set();
    const subscribeBtn = document.querySelector('.subscribe-btn');

    subscribeBtn.addEventListener('click', () => {
        const currentChannel = watchChannelName.textContent;
        const isSubscribed = subscribeBtn.classList.toggle('subscribed');
        
        if (isSubscribed) {
            subscribedChannels.add(currentChannel);
            subscribeBtn.innerHTML = '<i class="fa-regular fa-bell"></i> Suscrito <i class="fa-solid fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i>';
        } else {
            subscribedChannels.delete(currentChannel);
            subscribeBtn.innerHTML = 'Suscribirse';
        }
    });

    function openVideo(video) {
        homePage.style.display = 'none';
        watchPage.style.display = 'block';
        window.scrollTo(0, 0);

        // Update Watch Page Info
        watchTitle.textContent = video.title;
        watchChannelName.textContent = video.channel;
        watchChannelIcon.src = video.avatar;
        watchViews.textContent = video.views;
        watchTime.textContent = video.time;
        watchDesc.innerHTML = video.desc.replace(/\n/g, '<br>');
        watchDesc.classList.remove('expanded');
        showMoreBtn.textContent = 'Mostrar más';

        if (subscribedChannels.has(video.channel)) {
            subscribeBtn.classList.add('subscribed');
            subscribeBtn.innerHTML = '<i class="fa-regular fa-bell"></i> Suscrito <i class="fa-solid fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i>';
        } else {
            subscribeBtn.classList.remove('subscribed');
            subscribeBtn.innerHTML = 'Suscribirse';
        }

        // Inject Local Video Player
        playerContainer.innerHTML = `
            <video controls autoplay style="width: 100%; height: 100%; object-fit: contain; background: black; outline: none;">
<a href="https://drive.google.com/file/d/1wxwLm4tmTq55243WNHHAuCM0OAdjRaoh/view?usp=sharing" target="_blank">
Ver video en Google Drive
</a>
            </video>
        `;

        // Render Related Videos
        renderRelatedVideos(videos.filter(v => v.id !== video.id));
    }

    // Function to render videos in Home
    function renderVideos(videoList) {
        videoGrid.innerHTML = '';
        videoList.forEach((video, index) => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.style.animationDelay = `${index * 0.05}s`;
            
            videoCard.innerHTML = `
                <div class="thumbnail-container">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    <div class="duration">${video.duration}</div>
                </div>
                <div class="video-info">
                    <div class="channel-icon">
                        <img src="${video.avatar}" alt="${video.channel}">
                    </div>
                    <div class="video-details">
                        <h3 class="video-title" title="${video.title}">${video.title}</h3>
                        <a href="#" class="channel-name">${video.channel}</a>
                        <div class="video-meta">
                            <span>${video.views}</span> • <span>${video.time}</span>
                        </div>
                    </div>
                </div>
            `;
            
            videoCard.addEventListener('click', () => openVideo(video));
            videoGrid.appendChild(videoCard);
        });
    }

    // Function to render related videos in Watch Page
    function renderRelatedVideos(videoList) {
        nextVideosGrid.innerHTML = '';
        videoList.forEach(video => {
            const relCard = document.createElement('div');
            relCard.className = 'related-video-card';
            
            relCard.innerHTML = `
                <div class="thumbnail-container">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="duration">${video.duration}</div>
                </div>
                <div class="video-details">
                    <h4 class="video-title">${video.title}</h4>
                    <span class="channel-name">${video.channel}</span>
                    <div class="video-meta">
                        <span>${video.views}</span> • <span>${video.time}</span>
                    </div>
                </div>
            `;
            
            relCard.addEventListener('click', () => openVideo(video));
            nextVideosGrid.appendChild(relCard);
        });
    }

    // Initial render
    renderVideos(videos);

    // Chip filtering
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            const category = chip.textContent;
            if (category === 'Todos') {
                renderVideos(videos);
            } else {
                const filtered = videos.filter(v => v.category === category);
                renderVideos(filtered.length > 0 ? filtered : videos);
            }
        });
    });

    // Search simulation
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const query = searchInput.value.toLowerCase();
        if (query) {
            const results = videos.filter(v => 
                v.title.toLowerCase().includes(query) || 
                v.channel.toLowerCase().includes(query)
            );
            renderVideos(results);
            showHomePage(); // Switch back to home to see results
        } else {
            renderVideos(videos);
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
});
