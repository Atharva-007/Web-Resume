document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/resume')
        .then(response => response.json())
        .then(data => renderResume(data))
        .catch(error => {
            document.getElementById('resume-content').innerHTML = '<p>Error loading resume data.</p>';
            console.error(error);
        });
});

function renderResume(data) {
    const container = document.getElementById('resume-content');
    if (!data) {
        container.innerHTML = '<p>No resume data found.</p>';
        return;
    }

    let html = `
        <header>
            <h1>${data.name || 'Name Not Available'}</h1>
            <div class="contact-info">
                <p><strong>${data.title || 'Professional Title'}</strong></p>
                ${data.contact ? `
                    <p>📍 ${data.contact.location || ''}</p>
                    <p>📞 <a href="tel:${data.contact.phone}">${data.contact.phone || ''}</a></p>
                    <p>📧 <a href="mailto:${data.contact.email}">${data.contact.email || ''}</a></p>
                    <p>💼 <a href="https://${data.contact.linkedin}" target="_blank">${data.contact.linkedin || ''}</a></p>
                    <p>🔗 <a href="https://${data.contact.github}" target="_blank">${data.contact.github || ''}</a></p>
                ` : ''}
            </div>
        </header>

        <section>
            <h2>Professional Summary</h2>
            <p>${data.summary || 'No summary available'}</p>
        </section>

        <section>
            <h2>Skills</h2>
            ${data.skills ? Object.keys(data.skills).map(category => `
                <div class="skills-category">
                    <h3>${category}</h3>
                    <div class="skills-list">
                        ${data.skills[category].map(skill => `
                            <span class="skill-item">${skill}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('') : '<p>No skills data available</p>'}
        </section>

        <section>
            <h2>Experience</h2>
            ${(data.experience || []).map(exp => `
                <div class="experience-item">
                    <div class="experience-header">
                        <div>
                            <span class="experience-role">${exp.role || 'Position'}</span>
                            <span class="experience-company"> - ${exp.company || 'Company'}</span>
                        </div>
                        <span class="experience-period">${exp.period || 'Period'}</span>
                    </div>
                    ${exp.details ? `
                        <ul>
                            ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            `).join('')}
        </section>

        <section>
            <h2>Education</h2>
            ${(data.education || []).map(edu => `
                <div class="education-item">
                    <div class="education-header">
                        <div>
                            <span class="education-degree">${edu.degree || 'Degree'}</span>
                            <span class="education-institution"> - ${edu.institution || 'Institution'}</span>
                        </div>
                        <span class="education-period">${edu.period || 'Period'}</span>
                    </div>
                    ${edu.score ? `<p>Score: ${edu.score}</p>` : ''}
                </div>
            `).join('')}
        </section>

        ${data.certifications ? `
            <section>
                <h2>Certifications</h2>
                <ul>
                    ${data.certifications.map(cert => `<li>${cert}</li>`).join('')}
                </ul>
            </section>
        ` : ''}
    `;
    container.innerHTML = html;
}
