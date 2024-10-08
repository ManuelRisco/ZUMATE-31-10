        // Función para mostrar el modal de donación
        document.getElementById("donationBtn").onclick = function() {
            document.getElementById("donationModal").style.display = "block";
            event.preventDefault();
        }

        // Función para mostrar el modal de compartir
        document.getElementById("shareBtn").onclick = function() {
            document.getElementById("share").style.display = "block";
            event.preventDefault();
        }

        // Función para cerrar el modal de donación
        document.getElementById("closeBtn").onclick = function() {
            document.getElementById("donationModal").style.display = "none";
        }

        // Función para cerrar el modal de compartir
        document.getElementById("closeBtn-1").onclick = function() {
            document.getElementById("share").style.display = "none";
        }