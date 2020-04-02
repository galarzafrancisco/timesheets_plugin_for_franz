setTimeout(() => {
    if (window.location.href.includes('not-supported.html')) {
        window.location.href = window.location.origin;
    }
}, 10);

module.exports = (Franz) => {
    const getMessages = function getMessages() {
        let notifications = 0;
        let currentHour = new Date().getHours();
        if (currentHour >= 16 && currentHour < 18) {
            notifications = 1;            
        }
        Franz.setBadge(0, notifications);
    };

    Franz.loop(getMessages);
};
