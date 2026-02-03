
        // ==========================================
        // CONFIGURACIÓN DE IMÁGENES LOCALES
        // ==========================================
        // Asegúrate de que tus archivos estén en una carpeta llamada 'img'
        // junto a este archivo HTML.
        // Ejemplo de estructura de archivos:
        // /tu-carpeta/
        //   index.html
        //   /img/
        //     sun-tzu.jpg
        //     confucio.jpg
        //     ...
        // ==========================================

        const timelineData = [
            // EDAD ANTIGUA
            { year:"500 ac", author: "Sun Tzu", img: "assets/img/suntzu.jpg", desc: "En El arte de la guerra establece principios como: ventaja competitiva, información,liderazgo y planeación, hoy base de la estrategia empresarial.", era: "Edad Antigua", type: "ancient" },
            { year: "490 ac", author: "Confucio", img: "assets/img/confucio.jpg", desc: "Introduce ética, disciplina y jerarquía organizacional aplicables a la gestión moderna.", era: "Edad Antigua", type: "ancient" },
            { year: "431 ac", author: "Tucídides", img: "assets/img/tuci.jpg", desc: "Analiza toma de decisiones estratégicas en conflictos, hoy usado en análisis de riesgos empresariales.", era: "Edad Antigua", type: "ancient" },
            { year: "404 ac", author: "Jenofonte", img: "assets/img/jenofonte.jpg", desc: "Liderazgo, logística y administración de recursos en organizaciones.", era: "Edad Antigua", type: "ancient" },
            { year: "350 ac", author: "Aristóteles", img: "assets/img/aristoteles.jpg", desc: "Conceptos de propósito, racionalidad y organización que hoy estructuran la planeación estratégica.", era: "Edad Antigua", type: "ancient" },
            { year: "300 ac", author: "Kautilya", img: "assets/img/kautilya.jpg", desc: "En Arthashastra desarrolla administración del Estado y economía, similar a la gestión corporativa.", era: "Edad Antigua", type: "ancient" },
            { year: "200 ac", author: "Imperio Romano", img: "assets/img/roma.jpg", desc: "Desarrollo de logística, jerarquía y control organizacional aplicados hoy a supply chain.", era: "Edad Antigua", type: "ancient" },
            { year: "100 ac", author: "Polibio", img: "assets/img/polibio.jpg", desc: "Análisis de sistemas organizacionales y control del poder, similar al gobierno corporativo.", era: "Edad Antigua", type: "ancient" },
            { year: "50 ac", author: "Julio César", img: "assets/img/juliocesar.jpg", desc: "Estrategias de liderazgo, rapidez operativa y posicionamiento.", era: "Edad Antigua", type: "ancient" },
            { year: "30 ac", author: "Cleopatra", img: "assets/img/cleopatra.jpg", desc: "Diplomacia estratégica, alianzas y negociación, hoy clave en negocios globales.", era: "Edad Antigua", type: "ancient" },
            
            { year: 0, author: "", img: "", desc: "", era: "", type: "break" }, // Separador

            // EDAD MODERNA
            { year: 1776, author: "Adam Smith", img: "assets/img/adam-smith.jpg", desc: "División del trabajo y eficiencia productiva en La riqueza de las naciones.", era: "Edad Moderna", type: "modern" },
            { year: 1832, author: "C. von Clausewitz", img: "assets/img/clausewitz.jpg", desc: "Estrategia, competencia y fricción aplicadas al mercado.", era: "Edad Moderna", type: "modern" },
            { year: 1911, author: "F. Taylor", img: "assets/img/taylor.jpg", desc: "Administración científica: eficiencia, procesos y productividad.", era: "Edad Moderna", type: "modern" },
            { year: 1916, author: "Henri Fayol", img: "assets/img/fayol.jpg", desc: "Planeación, organización, dirección y control empresarial.", era: "Edad Moderna", type: "modern" },
            { year: 1937, author: "Ronald Coase", img: "assets/img/coase.jpg", desc: "Teoría de la firma: por qué existen las empresas.", era: "Edad Moderna", type: "modern" },
            { year: 1954, author: "Peter Drucker", img: "assets/img/drucker.jpg", desc: "Administración por objetivos y pensamiento estratégico moderno.", era: "Edad Moderna", type: "modern" },
            { year: 1962, author: "Alfred Chandler", img: "assets/img/chandler.jpg", desc: "“La estructura sigue a la estrategia” en empresas industriales.", era: "Edad Moderna", type: "modern" },
            { year: 1980, author: "Michael Porter", img: "assets/img/porter.jpg", desc: "Ventaja competitiva, cinco fuerzas, estrategia industrial.", era: "Edad Moderna", type: "modern" },
            { year: 1985, author: "H. Mintzberg", img: "assets/img/mintzberg.jpg", desc: "Estrategia emergente y toma de decisiones reales.", era: "Edad Moderna", type: "modern" },
            { year: 1990, author: "Prahalad & Hamel", img: "assets/img/prahalad.jpg", desc: "Competencias centrales de la empresa.", era: "Edad Moderna", type: "modern" },
            { year: 1995, author: "Kaplan & Norton", img: "assets/img/kaplan.jpg", desc: "Balanced Scorecard: medición estratégica.", era: "Edad Moderna", type: "modern" },
            { year: 2001, author: "C. Christensen", img: "assets/img/christensen.jpg", desc: "Innovación disruptiva en industrias.", era: "Edad Moderna", type: "modern" },
            { year: 2010, author: "Eric Ries", img: "assets/img/ries.jpg", desc: "Lean Startup: adaptación rápida al mercado.", era: "Edad Moderna", type: "modern" },
            { year: 2015, author: "Industria 4.0", img: "assets/img/ind40.jpg", desc: "Digitalización, automatización y estrategia tecnológica.", era: "Edad Moderna", type: "modern" },
            { year: 2020, author: "Transformación Digital", img: "assets/img/digital.jpg", desc: "Estrategia basada en datos, IA y competitividad empresarial.", era: "Edad Moderna", type: "modern" }
        ];

        // --- REFERENCIAS DOM ---
        const timelineTrack = document.getElementById('timelineTrack');
        const timelineContainer = document.getElementById('timelineContainer');
        const detailPanel = document.getElementById('detailPanel');
        const closeBtn = document.getElementById('closeBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const counterBadge = document.getElementById('counterBadge');

        const detailEra = document.getElementById('detailEra');
        const detailYear = document.getElementById('detailYear');
        const detailAuthor = document.getElementById('detailAuthor');
        const detailDesc = document.getElementById('detailDesc');
        const detailImg = document.getElementById('detailImg');

        // --- ESTADO ---
        let scrollX = 0;
        let activeIndex = 0;
        let isDown = false;
        let startX;
        let scrollLeft;

        // --- INICIALIZACIÓN ---
        function initTimeline() {
            timelineData.forEach((item, index) => {
                if (item.type === 'break') {
                    const divider = document.createElement('div');
                    divider.style.width = "80px";
                    divider.style.flexShrink = "0";
                    divider.style.position = "relative";
                    divider.innerHTML = `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:2px; height:40px; background:#ddd;"></div>`;
                    timelineTrack.appendChild(divider);
                    return;
                }

                const node = document.createElement('div');
                node.className = 'timeline-node';
                node.dataset.index = index;
                
                node.innerHTML = `
                    <div class="node-circle"></div>
                    <div class="node-year">${item.year}</div>
                `;

                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectNode(index);
                });

                timelineTrack.appendChild(node);
            });
            
            selectNode(0);
        }

        // --- LÓGICA DE SELECCIÓN ---
        function selectNode(index) {
            if (index < 0 || index >= timelineData.length) return;
            if (timelineData[index].type === 'break') return;

            activeIndex = index;

            // Actualizar Nodos
            document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
            const activeNode = document.querySelector(`.timeline-node[data-index="${index}"]`);
            if (activeNode) activeNode.classList.add('active');

            // Actualizar Tarjeta
            updateCard(index);

            detailPanel.classList.remove('hidden');
            detailPanel.style.display = 'flex';

            centerTimeline(activeNode);
            updateNavButtons();
        }

        function updateCard(index) {
            const data = timelineData[index];
            
            // Efecto visual simple
            const infoContainer = document.querySelector('.card-info');
            infoContainer.style.opacity = '0.7';
            
            setTimeout(() => {
                detailEra.innerText = data.era;
                const eraColor = data.type === 'ancient' ? '#8e44ad' : '#2980b9';
                detailEra.style.backgroundColor = eraColor;
                
                detailYear.innerText = data.year < 0 ? `${Math.abs(data.year)} a.C.` : data.year;
                detailAuthor.innerText = data.author;
                detailDesc.innerText = data.desc;

                // --- CARGA DE IMAGEN LOCAL ---
                // Intenta cargar la ruta local. Si falla (no existe el archivo), usa avatares de respaldo.
                detailImg.onerror = function() {
                    console.warn("Imagen no encontrada localmente: " + data.img + ". Usando avatar por defecto.");
                    const seed = encodeURIComponent(data.author);
                    this.src = `https://ui-avatars.com/api/?name=${seed}&background=${eraColor.replace('#','')}&color=fff&size=400&font-size=0.33&bold=true&length=2`;
                };
                
                detailImg.src = data.img;

                const totalEvents = timelineData.filter(d => d.type !== 'break').length;
                const visualIndex = timelineData.slice(0, index).filter(d => d.type !== 'break').length + 1;
                counterBadge.innerText = `${visualIndex}/${totalEvents}`;
                
                infoContainer.style.opacity = '1';
            }, 100);
        }

        function updateNavButtons() {
            prevBtn.disabled = (activeIndex === 0);
            let nextIdx = activeIndex + 1;
            while(nextIdx < timelineData.length && timelineData[nextIdx].type === 'break') nextIdx++;
            nextBtn.disabled = (nextIdx >= timelineData.length);
        }

        function navigate(direction) {
            let newIndex = activeIndex + direction;
            if (newIndex >= 0 && newIndex < timelineData.length && timelineData[newIndex].type === 'break') {
                newIndex += direction;
            }
            if (newIndex >= 0 && newIndex < timelineData.length) {
                selectNode(newIndex);
            }
        }

        // --- SCROLL ---
        function centerTimeline(nodeElement) {
            if (!nodeElement) return;
            const containerWidth = timelineContainer.offsetWidth;
            const nodeLeft = nodeElement.offsetLeft;
            const nodeWidth = nodeElement.offsetWidth;
            const centerPosition = nodeLeft - (containerWidth / 2) + (nodeWidth / 2);
            
            const maxScroll = timelineTrack.scrollWidth - containerWidth;
            let targetScroll = centerPosition;
            if (targetScroll > 0) targetScroll = 0;
            if (targetScroll < -maxScroll) targetScroll = -maxScroll;
            
            scrollX = -targetScroll;
            updateScroll();
        }

        function updateScroll() {
            timelineTrack.style.transform = `translateX(${scrollX}px)`;
        }

        timelineContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY;
            scrollX -= delta; 
            const trackWidth = timelineTrack.scrollWidth;
            const containerWidth = timelineContainer.offsetWidth;
            const minScroll = -(trackWidth - containerWidth);
            if (scrollX > 50) scrollX = 50; 
            if (scrollX < minScroll - 50) scrollX = minScroll - 50;
            updateScroll();
        });

        timelineContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            timelineContainer.classList.add('active');
            startX = e.pageX - timelineContainer.offsetLeft;
            scrollLeft = scrollX;
        });

        document.addEventListener('mouseleave', () => { isDown = false; timelineContainer.classList.remove('active'); });
        document.addEventListener('mouseup', () => { isDown = false; timelineContainer.classList.remove('active'); });

        document.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            if(e.target.closest('.timeline-container') !== timelineContainer) return;
            e.preventDefault();
            const x = e.pageX - timelineContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            scrollX = scrollLeft + walk;
            const trackWidth = timelineTrack.scrollWidth;
            const containerWidth = timelineContainer.offsetWidth;
            const minScroll = -(trackWidth - containerWidth);
            if (scrollX > 50) scrollX = 50;
            if (scrollX < minScroll - 50) scrollX = minScroll - 50;
            updateScroll();
        });

        prevBtn.addEventListener('click', () => navigate(-1));
        nextBtn.addEventListener('click', () => navigate(1));
        closeBtn.addEventListener('click', () => {
            detailPanel.style.display = 'none';
            document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
            activeIndex = -1;
        });

        initTimeline();
