// Template15.jsx (Clean & Professional)
const Template15 = ({ data }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', color: '#333', padding: '3rem', maxWidth: '1000px', margin: 'auto', borderRadius: '8px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}>
    <header style={{ backgroundColor: '#2c3e50', color: 'white', padding: '2rem', textAlign: 'center', borderRadius: '8px 8px 0 0' }}>
      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone} | {data.location}</p>
    </header>
    <main>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '3px solid #2c3e50' }}>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h3>{exp.role} at <em>{exp.company}</em></h3>
            <small style={{ color: '#7f8c8d' }}>{exp.duration}</small>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '3px solid #2c3e50' }}>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </div>
        ))}
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '3px solid #2c3e50' }}>Skills</h2>
        <ul style={{ paddingLeft: '1.5rem', listStyle: 'none' }}>
          {data.skills.map((skill, i) => (
            <li key={i} style={{ backgroundColor: '#f4f4f4', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px' }}>{skill}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '3px solid #2c3e50' }}>Hobbies</h2>
        <p>{data.hobbies.join(', ')}</p>
      </section>
    </main>
  </div>
);

export default Template15;