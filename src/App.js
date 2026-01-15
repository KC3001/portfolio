import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Krishna Chaitanya</h1>
        <p>Software Engineer | Backend & Cloud | Java • AWS • Kafka</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </header>
      <main className="container">
        <section>
          <h2>About Me</h2>
          <p>
            I am a software engineer with experience in building scalable backend systems,
            event-driven architectures, and cloud-native applications. I enjoy working with
            Java, AWS, Kafka, and modern APIs.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skills">
            {['Java','Spring Boot','AWS','Kafka','GraphQL','REST APIs','Docker','Git'].map(skill => (
              <span key={skill} className="skill">{skill}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="projects">
            <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer" className="project-card">
              <h3>Event Driven System</h3>
              <p>Kafka-based data pipeline with producers and consumers.</p>
            </a>
            <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer" className="project-card">
              <h3>AWS Automation</h3>
              <p>Python automation to upload files to S3 and manage resources.</p>
            </a>
            <a href="https://github.com/your-username/project3" target="_blank" rel="noopener noreferrer" className="project-card">
              <h3>GraphQL API</h3>
              <p>GraphQL service exposing customer profile data.</p>
            </a>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Krishna Chaitanya • Built with React & CSS • Hosted on GitHub Pages
      </footer>
    </div>
  );
}

export default App;
