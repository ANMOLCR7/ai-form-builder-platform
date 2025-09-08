"use client";

import { useState } from "react";
import { generateForm } from "../utils/api";
import DynamicForm from "./DynamicForm";

export default function FormBuilder() {
  const [prompt, setPrompt] = useState("");
  const [formSchema, setFormSchema] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const form = await generateForm(prompt);
      setFormSchema(form);
    } catch (err) {
      setError(err.message);
      setFormSchema(null);
    }
    setLoading(false);
  };

  const handleSubmit = async (formData) => {
  try {
    const response = await fetch("/api/forms/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Failed to submit form");

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Error submitting form: " + error.message);
  }
};


  return (
    <div className="max-w-xl mx-auto p-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={3}
        placeholder="Describe the form you want to generate"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Form"}
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      {formSchema && <DynamicForm formSchema={formSchema} onSubmit={handleSubmit} />}
    </div>
  );
}
