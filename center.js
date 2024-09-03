document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const content = document.getElementById('payment-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Load content for the selected month
            const month = tab.getAttribute('data-month');
            loadContent(month);
        });
    });

    function loadContent(month) {
        // Sample content, replace with actual data loading logic
        const sampleData = {
            january: 'January payments: $200 (Due: $50)',
            february: 'February payments: $180 (Due: $30)',
            march: 'March payments: $210 (Due: $40)',
            april: 'April payments: $200 (Due: $50)',
            may: 'May payments: $220 (Due: $20)',
            june: 'June payments: $190 (Due: $40)',
            july: 'July payments: $210 (Due: $30)',
            august: 'August payments: $205 (Due: $25)',
            september: 'September payments: $215 (Due: $15)',
            october: 'October payments: $230 (Due: $10)',
            november: 'November payments: $200 (Due: $50)',
            december: 'December payments: $220 (Due: $20)'
        };

        content.innerHTML = `<p>${sampleData[month]}</p>`;
    }
});
