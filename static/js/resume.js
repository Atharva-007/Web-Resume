// static/js/resume.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/resume')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => renderResume(data))
        .catch(error => {
            console.error('Error fetching resume data:', error);
            document.getElementById('name').textContent = 'Error loading resume';
        });
});

function renderResume(data) {
    // Set document title
    document.title = `${data.name} - Resume`;

    // Render header
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('summary').textContent = data.summary;

    // Render contact info
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <span>${data.contact.location}</span> | 
        <span>${data.contact.phone}</span> | 
        <a href="mailto:${data.contact.email}">${data.contact.email}</a><br>
        <a href="https://${data.contact.linkedin}" target="_blank">${data.contact.linkedin}</a> | 
        <a href="https://${data.contact.github}" target="_blank">${data.contact.github}</a>
    `;

    // ... rest of the rendering code remains the same as before ...
    // (Keep the skills, experience, education, and certifications rendering logic)
}