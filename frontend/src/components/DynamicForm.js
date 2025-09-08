"use client";
import { useState } from "react";

export default function DynamicForm({ formSchema, onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!formSchema) return null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">{formSchema.title}</h2>

      {formSchema.fields.map((field) => {
        switch (field.type) {
          case "text":
          case "email":
            return (
              <div key={field.name}>
                <label className="block font-semibold mb-1" htmlFor={field.name}>
                  {field.label} {field.required && "*"}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            );
          case "textarea":
            return (
              <div key={field.name}>
                <label className="block font-semibold mb-1" htmlFor={field.name}>
                  {field.label}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            );
          case "select":
            return (
              <div key={field.name}>
                <label className="block font-semibold mb-1" htmlFor={field.name}>
                  {field.label}
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">Select...</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          default:
            return null;
        }
      })}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
