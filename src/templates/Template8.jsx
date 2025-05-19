// Template4.jsx (Minimalist Light)
const Template8= ({ data }) => (
  <div style={{ fontFamily: 'Helvetica, sans-serif', backgroundColor: '#fefefe', color: '#222', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
    <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
      <h1 style={{ margin: 0 }}>{data.name}</h1>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>{data.email} | {data.phone} | {data.location}</p>
    </header>
    <main>
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{exp.role}</strong>, {exp.company}
            <div style={{ fontSize: '0.85rem', color: '#888' }}>{exp.duration}</div>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </div>
        ))}
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Skills</h2>
        <ul style={{ columns: 2, listStyle: 'disc', paddingLeft: '1.5rem' }}>
          {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>
      <section>
        <h2>Hobbies</h2>
        <p>{data.hobbies.join(', ')}</p>
      </section>
    </main>
  </div>
);

export default Template8;
