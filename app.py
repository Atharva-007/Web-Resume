from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def resume():
    resume_data = {
        "name": "ATHARVA VINAYAK GAWALI",
        "contact": {
            "location": "Pune, Maharashtra",
            "phone": "+91 8624036836",
            "email": "atharvgawali70@gmail.com",
            "linkedin": "linkedin.com/in/atharva-gawali",
            "github": "https://github.com/Atharva-007"
        },
        "education": [
            {
                "degree": "B.Tech, Computer Science & Engineering",
                "institution": "MIT ADT University",
                "period": "2023 - 2026"
            },
            {
                "degree": "Diploma, Information Technology",
                "institution": "Government Polytechnic, Washim",
                "period": "2021 - 2023",
                "details": "81%"
            }
        ],
        "experience": [
            {
                "role": "Full Stack Development Intern",
                "company": "Microspectra, Shegaon",
                "period": "Jun 2022 - Aug 2022",
                "duration": "2 months"
            }
        ],
        "projects": [
            {
                "name": "Farmkart",
                "period": "Jun 2024 - May 2025",
                "description": "Agricultural Market Platform",
                "tech": ["Flutter", "Firebase", "AWS"],
                "points": [
                    "Developed cross-platform app with real-time APMC market prices",
                    "Implemented WebSocket integration (300ms response time)",
                    "Designed multi-role authentication using Firebase Auth"
                ]
            },
            {
                "name": "Melodify - Music Streaming App",
                "period": "May 2024 - Present",
                "description": "Music Streaming Platform",
                "tech": ["Python Flask", "AWS", "PostgreSQL"],
                "points": [
                    "Built Flask backend with JWT authentication",
                    "Implemented audio streaming with dynamic loading",
                    "Achieved 300ms API response time"
                ]
            }
        ],
        "skills": {
            "Cloud": ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Firebase"],
            "Backend": ["Node.js", "Python", "Java", "REST APIs", "MongoDB"],
            "Mobile": ["Flutter (Dart)", "React Native"],
            "DevOps": ["CI/CD", "Jenkins", "GitLab", "Git", "Jira"]
        }
    }
    return render_template('resume.html', data=resume_data)

if __name__ == '__main__':
    app.run(debug=True)