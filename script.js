// Get current date and time 
let now = new Date()
let time = now.toDateString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = time;
 // Hamburger menu functionality
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.navlinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change hamburger icon
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.navlinks a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Date and time display
        function updateDateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Africa/Nairobi'
            };
            document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
        }

        // Update time immediately and then every second
        updateDateTime();
        setInterval(updateDateTime, 1000);