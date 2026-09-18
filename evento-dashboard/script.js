document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Live Clock & Date ---
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: false });
        const dateString = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

        document.getElementById('live-clock').textContent = timeString;
        document.getElementById('live-date').textContent = dateString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // --- 2. Anime.js Entrance Animations ---
    anime({
        targets: '.anime-item',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: anime.stagger(150),
        begin: function() {
            document.querySelectorAll('.anime-item').forEach(el => {
                el.style.opacity = '1'; // Ensure they are visible once animation starts
            });
        }
    });

    // --- 3. Number Counters ---
    const stats = {
        registrations: 0,
        students: 0,
        guests: 0
    };

    anime({
        targets: stats,
        registrations: 3000,
        students: 2450,
        guests: 370,
        easing: 'easeOutExpo',
        round: 1,
        duration: 2000,
        update: function() {
            document.getElementById('stat-registrations').innerHTML = stats.registrations.toLocaleString();
            document.getElementById('stat-students').innerHTML = stats.students.toLocaleString();
            document.getElementById('stat-guests').innerHTML = stats.guests.toLocaleString();
        }
    });

    // --- 4. Pulsing Animations (Alerts & Critical Dot) ---
    anime({
        targets: ['#alert-pulse', '#critical-dot'],
        scale: [1, 1.5],
        opacity: [1, 0.2],
        easing: 'easeInOutSine',
        duration: 1000,
        direction: 'alternate',
        loop: true
    });

    // --- 5. Security Flow Hover Effects ---
    const flowCards = document.querySelectorAll('.flow-card');
    flowCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                borderColor: 'rgba(255, 255, 255, 0.5)',
                duration: 300,
                easing: 'easeOutSine'
            });
        });
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)',
                duration: 300,
                easing: 'easeOutSine'
            });
        });
    });

    // --- 6. Live Alerts Dummy Data ---
    const logsContainer = document.getElementById('logs-container');
    const dummyLogs = [
        { time: '19:42', msg: 'QR Scanned - Gate A', type: 'info' },
        { time: '19:45', msg: 'Drone 1 Active', type: 'info' },
        { time: '19:50', msg: 'Minor congestion forming at Main Entrance', type: 'warning' },
        { time: '19:55', msg: 'DB Verified - Sector 3', type: 'info' },
        { time: '20:01', msg: 'Gate B flow normalized', type: 'info' }
    ];

    let logIndex = 0;

    function addLog() {
        if (logIndex < dummyLogs.length) {
            const log = dummyLogs[logIndex];
            const logEl = document.createElement('div');
            logEl.className = `log-entry ${log.type}`;
            logEl.innerHTML = `<span class="log-time">[${log.time}]</span> ${log.msg}`;

            logsContainer.prepend(logEl);
            logIndex++;

            // Recursively add next log with random delay to simulate live feed
            setTimeout(addLog, Math.random() * 3000 + 1500);
        }
    }

    // Start adding logs after initial animation
    setTimeout(addLog, 2000);
});