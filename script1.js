var img = document.getElementById('zoomImage');
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById('modalImg');
        var closeBtn = document.getElementById('closeModal');

        // When the image is clicked, open the modal and display the zoomed image
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }

        // When the close button is clicked, close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Close the modal when clicking anywhere outside of the image
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
