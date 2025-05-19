import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ResumeForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract template id from query params
  const params = new URLSearchParams(location.search);
  const selectedTemplateId = params.get("template");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: [],
    education: [],
    skills: [],
    hobbies: [],
    
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateListItem = (listName, index, e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedList = [...prev[listName]];
      if (typeof updatedList[index] === "object") {
        updatedList[index] = { ...updatedList[index], [name]: value };
      } else {
        updatedList[index] = value;
      }
      return {
        ...prev,
        [listName]: updatedList,
      };
    });
  };

  // Add new items to list fields
  const addListItem = (listName) => {
    setFormData((prev) => {
      let newItem;
      switch (listName) {
        case "experience":
          newItem = { role: "", company: "", duration: "", description: "" };
          break;
        case "education":
          newItem = { degree: "", institution: "", year: "" };
          break;
        case "skills":
          newItem = "";
          break;
        case "hobbies":
          newItem = "";
          break;
        default:
          newItem = "";
      }
      return {
        ...prev,
        [listName]: [...prev[listName], newItem],
      };
    });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate(`/templateDisplay?template=${selectedTemplateId}`, {
        state: { formData },
      });
    }
  };

  return (
    <div className=" w-full mx-auto bg-gray-950 text-white p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6">
        Create Your Resume
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg font-semibold">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label htmlFor="location" className="text-lg font-semibold">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            required
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
        </div>
      

        {/* Experience */}
        <div>
          <h3 className="text-xl font-semibold">Experience</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="space-y-4 mt-4">
              <div className="flex flex-col">
                <label
                  htmlFor={`role-${index}`}
                  className="text-lg font-semibold"
                >
                  Role
                </label>
                <input
                  type="text"
                  id={`role-${index}`}
                  name="role"
                  value={exp.role}
                  onChange={(e) => updateListItem("experience", index, e)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor={`company-${index}`}
                  className="text-lg font-semibold"
                >
                  Company
                </label>
                <input
                  type="text"
                  id={`company-${index}`}
                  name="company"
                  value={exp.company}
                  onChange={(e) => updateListItem("experience", index, e)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor={`duration-${index}`}
                  className="text-lg font-semibold"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id={`duration-${index}`}
                  name="duration"
                  value={exp.duration}
                  onChange={(e) => updateListItem("experience", index, e)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor={`description-${index}`}
                  className="text-lg font-semibold"
                >
                  Description
                </label>
                <textarea
                  id={`description-${index}`}
                  name="description"
                  value={exp.description}
                  onChange={(e) => updateListItem("experience", index, e)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addListItem("experience")}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
          >
            Add Experience
          </button>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="space-y-4 mt-4">
              <div className="flex flex-col">
                <label
                  htmlFor={`degree-${index}`}
                  className="text-lg font-semibold"
                >
                  Degree
                </label>
                <input
                  type="text"
                  id={`degree-${index}`}
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => updateListItem("education", index, e)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor={`institution-${index}`}
                  className="text-lg font-semibold"
                >
                  Institution
                </label>
                <input
                  type="text"
                  id={`institution-${index}`}
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => updateListItem("education", index, e)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor={`year-${index}`}
                  className="text-lg font-semibold"
                >
                  Year
                </label>
                <input
                  type="text"
                  id={`year-${index}`}
                  name="year"
                  value={edu.year}
                  onChange={(e) => updateListItem("education", index, e)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addListItem("education")}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
          >
            Add Education
          </button>
        </div>
        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold">Skills</h3>
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label htmlFor="Languages">
                <h3 className="text-lg font-semibold"></h3>
                 <input
                type="text"
                value={skill}
                onChange={(e) => updateListItem("skills", index, e)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="Skill"
                required
              />

              </label>
             
            </div>
          ))}
          <button
            type="button"
            onClick={() => addListItem("skills")}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
          >
            Add Skill
          </button>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-xl font-semibold">Hobbies</h3>
          {formData.hobbies.map((hobby, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <input
                type="text"
                value={hobby}
                onChange={(e) => updateListItem("hobbies", index, e)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="Hobby"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addListItem("hobbies")}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
          >
            Add Hobby
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-lg mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ResumeForm;
