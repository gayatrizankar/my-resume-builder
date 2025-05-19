import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3'; 
import Template4 from '../templates/Template4';
import Template5 from '../templates/Template5';
import Template6 from '../templates/Template6';
import Template7 from '../templates/Template7';
import Template8 from '../templates/Template8';
import Template9 from '../templates/Template9';
import Template10 from '../templates/Template10';
import Template11 from '../templates/Template11';
import Template12 from '../templates/Template12';
import Template13 from '../templates/Template13';
import Template14 from '../templates/Template14';
import Template15 from '../templates/Template15';

const dummyData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "123-456-7890",
  location: "New York, NY",
  experience: [
    {
      role: "Software Engineer",
      company: "ABC Corp",
      duration: "Jan 2020 - Present",
      description: "Worked on amazing projects."
    }
  ],
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "XYZ University",
      year: "2018"
    }
  ],
  skills: ["JavaScript", "React", "CSS"],
  hobbies: ["Reading", "Gaming"]
};

const TemplatePage = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    navigate(`/resumeForm?template=${templateId}`); // Navigate with template ID as query param
  };

  const templateData = [
    { id: 1, template: <Template1 data={dummyData} /> },
    { id: 2, template: <Template2 data={dummyData} /> },
    { id: 3, template: <Template3 data={dummyData} /> },
    { id: 4, template: <Template4 data={dummyData} /> },
    { id: 5, template: <Template5 data={dummyData} /> },
    { id: 6, template: <Template6 data={dummyData} /> },
    { id: 7, template: <Template7 data={dummyData} /> },
    { id: 8, template: <Template8 data={dummyData} /> },
    { id: 9, template: <Template9 data={dummyData} /> },
    { id: 10, template: <Template10 data={dummyData} /> },
    { id: 11, template: <Template11 data={dummyData} /> },
    { id: 12, template: <Template12 data={dummyData} /> },
    { id: 13, template: <Template13 data={dummyData} /> },
    { id: 14, template: <Template14 data={dummyData} /> },
    { id: 15, template: <Template15 data={dummyData} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-10">All Templates</h1>
        <div className="flex gap-[50px] items-center justify-center flex-wrap">
          {templateData.map(({ id, template }) => (
            <div
              key={id}
              onClick={() => handleTemplateSelect(id)}
              className="h-[400px] w-[350px] border-2 border-white rounded-xl overflow-auto cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              {template}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
