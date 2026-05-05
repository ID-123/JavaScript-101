// Captura de elementos
const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

// Evento de escritura en tiempo real
input.addEventListener("input", () => {

    const search = input.value.toLowerCase().trim();

    cards.forEach(card => {

        const text = card.textContent.toLowerCase();
        const match = text.includes(search);

        if (match) {

            // Mostrar nuevamente
            card.classList.remove("removed");

            // Permite que la animación de entrada ocurra correctamente
            requestAnimationFrame(() => {
                card.classList.remove("hidden");
            });

        } else {

            // Activar animación de salida
            card.classList.add("hidden");

            // Cuando termina la animación...
            card.addEventListener("transitionend", function handler() {

                if (card.classList.contains("hidden")) {
                    card.classList.add("removed");
                }

                // Limpieza del evento (importante)
                card.removeEventListener("transitionend", handler);

            });

        }

    });

});