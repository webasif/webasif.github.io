//popup
const popup = document.getElementById('popupOverlay');
        const closeBtn = document.getElementById('closeBtn');
        const audio = document.getElementById('audioPlayer');

        // Close button click handler
        closeBtn.addEventListener('click', function() {
            // Hide the popup
            popup.classList.add('hidden');
            
            // Play audio once
            audio.play();
        });

// Initialize Swiper
        const swiper = new Swiper('.projectSwiper', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'slide',
            speed: 800,
            loop: true,
        });

        // View project function
        function viewProject(projectId) {
            // Add your project viewing logic here
            console.log(`Viewing project: ${projectId}`);
            alert(`Opening ${projectId} project...`);
            
            // Example: You could redirect to project details
            // window.open(`/projects/${projectId}`, '_blank');
        }

        // Add smooth scrolling effect on screenshot hover
        document.querySelectorAll('.project-screenshot').forEach(screenshot => {
            const img = screenshot.querySelector('.screenshot-image');
            
            screenshot.addEventListener('mouseenter', () => {
                img.style.transform = 'translateY(-60%)';
            });
            
            screenshot.addEventListener('mouseleave', () => {
                img.style.transform = 'translateY(0)';
            });
        });

        // Pause autoplay on hover
        document.querySelector('.swiper').addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });

        document.querySelector('.swiper').addEventListener('mouseleave', () => {
            swiper.autoplay.start();

        });

