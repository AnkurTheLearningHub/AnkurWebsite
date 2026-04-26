<audio id="bgMusic" loop>
        <source src="music.mp3" type="audio/mpeg">
    </audio>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        // Initialize Animations
        AOS.init({ 
            duration: 1000, 
            once: true 
        });

        // Music Logic
        var music = document.getElementById('bgMusic');
        var isPlaying = false;

        function toggleMusic() {
            if (music.paused) {
                music.play().catch(function(error) {
                    alert("Please interact with the page first to enable sound!");
                });
                document.getElementById('musicStatus').innerText = "🔊 Music: ON";
            } else {
                music.pause();
                document.getElementById('musicStatus').innerText = "🔈 Music: OFF";
            }
        }

        // Auto-play attempt on scroll
        window.onscroll = function() {
            var standardsSection = document.getElementById('standards');
            if (standardsSection) {
                var rect = standardsSection.getBoundingClientRect();
                // Check if section is in view
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    if (music.paused && !isPlaying) {
                        music.play().then(function() {
                            isPlaying = true;
                        }).catch(function(e) {
                            // Browser blocked it - this is normal
                            console.log("Waiting for user click for audio");
                        });
                    }
                }
            }
        };
    </script>
</body>
</html>