document.addEventListener('DOMContentLoaded', () => {
    // Existing payment tab switching code...

    // Handle form tab switching for login/registration
    const formTabs = document.querySelectorAll('.form-tab .tab-button');
    const forms = document.querySelectorAll('.form-content');

    formTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            formTabs.forEach(t => t.classList.remove('active'));

            // Hide all forms
            forms.forEach(form => form.style.display = 'none');

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show the corresponding form
            const formId = tab.getAttribute('data-form');
            document.getElementById(formId).style.display = 'block';
        });
    });
});
