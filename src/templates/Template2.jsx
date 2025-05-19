// Template3.jsx
const Template2 = ({ data }) => (
  
  <div style={{ fontFamily: 'Courier New, monospace', backgroundColor: '#1e1e1e', color: '#f5f5f5', padding: '2rem' }}>
    <header style={{ borderBottom: '2px solid #61dafb', marginBottom: '1.5rem' }}>
      <h1 style={{ color: '#61dafb' }}>{data.name}</h1>
      <p>{data.email} | {data.phone} | {data.location}</p>
    </header>
    <main>
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #61dafb' }}>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} style={{ marginTop: '1rem' }}>
            <strong>{exp.role}</strong> at <em>{exp.company}</em>
            <div><small>{exp.duration}</small></div>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #61dafb' }}>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} style={{ marginTop: '1rem' }}>
            <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
          </div>
        ))}
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ borderBottom: '1px solid #61dafb' }}>Skills</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {data.skills.map((skill, i) => (
            <li key={i} style={{ backgroundColor: '#2c2c2c', padding: '0.5rem', marginBottom: '0.3rem' }}>{skill}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 style={{ borderBottom: '1px solid #61dafb' }}>Hobbies</h2>
        <p>{data.hobbies.join(', ')}</p>
      </section>
    </main>
  </div>
);

export default Template2;
