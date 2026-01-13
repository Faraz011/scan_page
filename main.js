document.addEventListener('DOMContentLoaded', () => {
    const statusBadge = document.querySelector('.status-badge');
    
    // Abstract status rotation
    const statuses = [
        "Preparing Experience",
        "Setting up Accounts",
        "Syncing Data",
        "Almost Ready"
    ];
    
    let statusIndex = 0;
    const statusInterval = setInterval(() => {
        statusIndex = (statusIndex + 1) % statuses.length;
        statusBadge.textContent = statuses[statusIndex];
    }, 1500);

    // Simulated "Modern" Loading Time
    setTimeout(() => {
        clearInterval(statusInterval);
        onLoadingComplete();
    }, 4500);

    function onLoadingComplete() {
        const container = document.querySelector('.loader-container');
        container.style.transform = "scale(0.98)";
        container.style.opacity = "0";
        container.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        
        setTimeout(() => {
            console.log("Loading complete. Proceeding to Hindustan Bills...");
            window.location.href = "https://hindustan-bills-x1ab.vercel.app/";
        }, 800);
    }
});
