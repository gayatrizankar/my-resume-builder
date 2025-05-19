// Template14.jsx (Modern & Sleek)
const Template14 = ({ data }) => (
  <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#ecf0f1', color: '#2c3e50', padding: '3rem', maxWidth: '1000px', margin: 'auto', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
    <header style={{ backgroundColor: '#2980b9', color: 'white', padding: '2rem', textAlign: 'center', borderRadius: '10px 10px 0 0' }}>
      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone} | {data.location}</p>
    </header>
    <main>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2980b9', borderBottom: '3px solid #2980b9' }}>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h3>{exp.role} at <em>{exp.company}</em></h3>
            <small style={{ color: '#7f8c8d' }}>{exp.duration}</small>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2980b9', borderBottom: '3px solid #2980b9' }}>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </div>
        ))}
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2980b9', borderBottom: '3px solid #2980b9' }}>Skills</h2>
        <ul style={{ paddingLeft: '1.5rem', listStyle: 'none' }}>
          {data.skills.map((skill, i) => (
            <li key={i} style={{ backgroundColor: '#f4f4f4', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px' }}>{skill}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#2980b9', borderBottom: '3px solid #2980b9' }}>Hobbies</h2>
        <p>{data.hobbies.join(', ')}</p>
      </section>
    </main>
  </div>
);

export default Template14;