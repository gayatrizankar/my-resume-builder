import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
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
import html2pdf from 'html2pdf.js';


const TemplateDisplay = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Defensive fallback
  const templateId = Number(new URLSearchParams(location.search).get('template')); // Convert to number

  // Redirect if no formData (e.g., direct visit)
  if (!formData) {
    return <Navigate to="/resumeForm" replace />;
  }

  const handledownload = () => {
    const element = document.querySelector('.resume-container');
    if (!element) {
      alert("Resume content not found!");
      return;
    }

    const opt = {
      margin:       0.4, // inches
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const templateMap = {
    1: <Template1 data={formData} />,
    2: <Template2 data={formData} />,
    3: <Template3 data={formData} />,
    4: <Template4 data={formData} />,
    5: <Template5 data={formData} />,
    6: <Template6 data={formData} />,
    7: <Template7 data={formData} />,
    8: <Template8 data={formData} />,
    9: <Template9 data={formData} />,
    10: <Template10 data={formData} />,
    11: <Template11 data={formData} />,
    12: <Template12 data={formData} />,
    13: <Template13 data={formData} />,
    14: <Template14 data={formData} />,
    15: <Template15 data={formData} />,
  };

  const selectedTemplate = templateMap[templateId];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center py-10">
      {/* Updated class here with 'resume-container' */}
      <div className="resume-container bg-gray-900 p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Resume</h1>
        {selectedTemplate ? (
          selectedTemplate
        ) : (
          <div className="text-center text-red-500">Template not found</div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <button
          onClick={handledownload}
          className="h-[40px] w-[200px] text-2xl font-bold bg-blue-400 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default TemplateDisplay;
