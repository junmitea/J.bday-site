document.addEventListener('DOMContentLoaded', () => {

    // ===== ELEMENTOS PRINCIPALES =====
    const intro = document.getElementById('intro');
    const board = document.getElementById('board');
    const openBoardBtn = document.getElementById('openBoard');

    const popups = {
        gallery: document.getElementById('galleryPopup'),
        drawings: document.getElementById('drawingsPopup'),
        letter: document.getElementById('letterPopup')
    };

    const closeButtons = document.querySelectorAll('.popup .close');

    const galleryBtn = document.getElementById('galleryBtn');
    const drawingsBtn = document.getElementById('drawingsBtn');
    const letterBtn = document.getElementById('letterBtn');

    // ===== GALERÍA DE FOTOS =====
    const galleryImage = document.getElementById('galleryImage');
    const galleryArrows = document.querySelectorAll('#galleryPopup .arrow');

    const images = [
        '/img/screenshots/gallery1.png',
        '/img/screenshots/gallery2.png',
        '/img/screenshots/gallery4.png',
        '/img/screenshots/gallery5.png',
        '/img/screenshots/gallery6.png',
        '/img/screenshots/gallery7.png',
        '/img/screenshots/gallery8.png',
    ];

    let currentImageIndex = 0;

    // ===== GALERÍA DE DIBUJOS =====
    const drawingImage = document.getElementById('drawingImage');
    const drawingArrows = document.querySelectorAll('#drawingsPopup .arrow');

    const drawings = [
        '/img/drawings/main drawing.jpg',
        '/img/drawings/second draw.jpg',
        '/img/drawings/Third.jpg',
        '/img/drawings/MLP JAY LOL.jpg',
        '/img/drawings/last draw.jpg'
    ];

    let currentDrawingIndex = 0;

    // ===== OPEN BOARD =====
    openBoardBtn.addEventListener('click', () => {
        intro.classList.add('hidden');
        board.classList.remove('hidden');
    });

    // ===== CERRAR (con animación) =====
    function closePopup(popup) {
        popup.classList.add('closing');
        setTimeout(() => {
            popup.classList.add('hidden');
            popup.classList.remove('closing');
        }, 300);
    }

    function closeAllPopups() {
        Object.values(popups).forEach(popup => {
            if (!popup.classList.contains('hidden')) {
                closePopup(popup);
            }
        });
    }

    // ===== POPUPS (abrir) =====
    galleryBtn.addEventListener('click', () => {
        closeAllPopups();
        popups.gallery.classList.remove('hidden');
        galleryImage.src = images[currentImageIndex];
    });

    drawingsBtn.addEventListener('click', () => {
        closeAllPopups();
        popups.drawings.classList.remove('hidden');
        drawingImage.src = drawings[currentDrawingIndex];
    });

    letterBtn.addEventListener('click', () => {
        closeAllPopups();
        popups.letter.classList.remove('hidden');
    });

    // ===== CERRAR (botón X y clic fuera) =====
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closePopup(btn.closest('.popup'));
        });
    });

    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup(popup);
        });
    });

    // ===== GALERÍA (FOTOS) =====
    galleryArrows.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            if (index === 0) {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            } else {
                currentImageIndex = (currentImageIndex + 1) % images.length;
            }
            galleryImage.src = images[currentImageIndex];
        });
    });

    // ===== DIBUJOS =====
    drawingArrows.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            if (index === 0) {
                currentDrawingIndex = (currentDrawingIndex - 1 + drawings.length) % drawings.length;
            } else {
                currentDrawingIndex = (currentDrawingIndex + 1) % drawings.length;
            }
            drawingImage.src = drawings[currentDrawingIndex];
        });
    });

    // ===== ESC =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.popup:not(.hidden)').forEach(p => {
                closePopup(p);
            });
        }
    });

});
