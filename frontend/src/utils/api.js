const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

export async function generateForm(prompt) {
  const response = await fetch(`${BASE_URL}/api/forms/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) throw new Error("Failed to generate form");
  const data = await response.json();
  return data.form;
}
