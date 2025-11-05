// Script para el botón flotante de WhatsApp
// Asegura que el botón siempre esté visible y funcional

document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    if (!whatsappButton) {
        console.warn('Botón de WhatsApp no encontrado');
        return;
    }

    // Configuración inicial del botón
    function initializeButton() {
        whatsappButton.style.position = 'fixed';
        whatsappButton.style.zIndex = '9999';
        whatsappButton.style.visibility = 'visible';
        whatsappButton.style.opacity = '1';
        whatsappButton.style.margin = '0';
        updateButtonPosition();
    }

    // Actualizar posición según el tamaño de pantalla
    function updateButtonPosition() {
        const isMobile = window.innerWidth < 768;
        whatsappButton.style.bottom = isMobile ? '20px' : '30px';
        whatsappButton.style.right = isMobile ? '20px' : '30px';
    }

    // Efecto hover
    whatsappButton.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.6)';
        this.style.animation = 'none';
    });

    whatsappButton.addEventListener('mouseleave', function() {
        this.style.boxShadow = '2px 2px 8px rgba(0, 0, 0, 0.3)';
        this.style.animation = 'bounce 2s infinite';
    });

    // Efecto de click con animación de pulso
    whatsappButton.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    // Ajustar posición al redimensionar ventana
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateButtonPosition, 100);
    });

    // Prevenir que otros elementos bloqueen el botón
    whatsappButton.style.pointerEvents = 'auto';

    // Inicializar el botón
    initializeButton();

    // Verificar que el botón permanece visible cada segundo
    setInterval(() => {
        if (whatsappButton.style.position !== 'fixed') {
            initializeButton();
        }
    }, 1000);
});

// Función para ocultar/mostrar el botón temporalmente
function toggleWhatsAppButton(show) {
    const button = document.querySelector('.whatsapp-float');
    if (button) {
        button.style.display = show ? 'flex' : 'none';
        button.style.opacity = show ? '1' : '0';
    }
}

// Función para cambiar el número de WhatsApp dinámicamente
function updateWhatsAppNumber(newNumber) {
    const button = document.querySelector('.whatsapp-float');
    if (button) {
        // Limpiar el número de espacios y caracteres especiales
        const cleanNumber = newNumber.replace(/[^0-9+]/g, '');
        button.href = `https://wa.me/${cleanNumber}`;
        console.log(`Número de WhatsApp actualizado a: ${cleanNumber}`);
    }
}

// Función para mostrar el botón con animación
function showWhatsAppButton() {
    const button = document.querySelector('.whatsapp-float');
    if (button) {
        button.style.display = 'flex';
        button.style.opacity = '0';
        button.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.3s ease';
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        }, 10);
    }
}

// Función para ocultar el botón con animación
function hideWhatsAppButton() {
    const button = document.querySelector('.whatsapp-float');
    if (button) {
        button.style.transition = 'all 0.3s ease';
        button.style.opacity = '0';
        button.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            button.style.display = 'none';
        }, 300);
    }
}