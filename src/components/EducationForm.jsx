import { GraduationCap, Plus, Sparkles, Trash2 } from "lucide-react";
import React from "react";

const EducationForm = ({ data, onChange }) => {
  const AddEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };
  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Education
          </h3>
          <p className="text-sm text-gray-500">Add Your Education Details</p>
        </div>
        <button
          onClick={AddEducation}
          className="flex items-center gap-3 px-3 text-sm bg-green-100 py-1 text-green-700 rounded hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Education
        </button>
      </div>
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No Education added yet.</p>
          <p>Click "Add Education" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((newEducation, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3 "
            >
              <div className="flex justify-between items-start">
                <h4>Education #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={newEducation.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  type="text"
                  placeholder="Institute Name"
                  className="px-3 py-2 text-sm "
                />
                <input
                  value={newEducation.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  type="text"
                  placeholder="Degree (e.g Bachelor's, Master's) "
                  className="px-3 py-2 text-sm "
                />
                <input
                  value={newEducation.field || ""}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  placeholder="Field Of Study"
                  type="text"
                  className="px-3 py-2 text-sm "
                />
                <input
                  value={newEducation.graduation_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  type="month"
                  className="px-3 py-2 text-sm  disabled:bg-gray-100"
                />
              </div>

              <input
                value={newEducation.gpa || ""}
                onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                placeholder="GPA (optional)"
                type="text"
                className="px-3 py-2 text-sm "
              />

              {/* <div className="space-y-3 mt-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Job Description
                  </label>
                  <button className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50">
                    <Sparkles className="w-3 h-3" />
                    Enhance with AI
                  </button>
                </div>
                <textarea
                  value={newEducation.description || ""}
                  onChange={(e) =>
                    updateEducation(index, "description", e.target.value)
                  }
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-lg resize-none"
                  placeholder="Describe your key responsibilities and achievements..."
                />
              </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
