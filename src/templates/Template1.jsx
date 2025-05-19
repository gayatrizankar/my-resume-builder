const Template1 = ({ data }) => {
  if (!data) return <div>Loading...</div>; // or null, or a fallback UI

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', padding: '3rem', color: '#2c3e50', lineHeight: 1.6 }}>
      <header style={{ backgroundColor: '#3498db', color: 'white', padding: '1rem', borderRadius: '8px' }}>
        <h1 style={{ margin: 0 }}>{data.name}</h1>
        <p style={{ margin: 0 }}>{data.email} | {data.phone} | {data.location}</p>
      </header>
      <main style={{ marginTop: '2rem' }}>
        <section>
          <h2 style={{ borderBottom: '2px solid #3498db' }}>Professional Experience</h2>
          {data.experience?.map((exp, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <h3>{exp.role} - <em>{exp.company}</em></h3>
              <small>{exp.duration}</small>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 style={{ borderBottom: '2px solid #3498db' }}>Education</h2>
          {data.education?.map((edu, i) => (
            <div key={i}>
              <h3>{edu.degree} @ {edu.institution}</h3>
              <small>{edu.year}</small>
            </div>
          ))}
        </section>
        <section>
          <h2 style={{ borderBottom: '2px solid #3498db' }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {data.skills?.map((skill, i) => (
              <span key={i} style={{ background: '#ecf0f1', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>{skill}</span>
            ))}
          </div>
        </section>
        <section>
          <h2 style={{ borderBottom: '2px solid #3498db' }}>Hobbies</h2>
          <p>{data.hobbies?.join(', ')}</p>
        </section>
      </main>
    </div>
  );
};

export default Template1;