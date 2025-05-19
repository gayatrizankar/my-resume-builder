// Template10.jsx (Elegant & Minimal)
const Template10 = ({ data }) => (
  <div style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#ffffff', color: '#333', padding: '2.5rem', maxWidth: '1000px', margin: 'auto', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}>
    <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#3498db' }}>{data.name}</h1>
      <p>{data.email} | {data.phone} | {data.location}</p>
    </header>
    <main>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#3498db', borderBottom: '3px solid #3498db' }}>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{exp.role} at <em>{exp.company}</em></h3>
            <small style={{ color: '#7f8c8d' }}>{exp.duration}</small>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#3498db', borderBottom: '3px solid #3498db' }}>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </div>
        ))}
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#3498db', borderBottom: '3px solid #3498db' }}>Skills</h2>
        <ul style={{ paddingLeft: '1.5rem', listStyle: 'none' }}>
          {data.skills.map((skill, i) => (
            <li key={i} style={{ backgroundColor: '#f9f9f9', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px' }}>{skill}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#3498db', borderBottom: '3px solid #3498db' }}>Hobbies</h2>
        <p>{data.hobbies.join(', ')}</p>
      </section>
    </main>
  </div>
);

export default Template10;