import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateAIForm = async (req, res) => {
  const { prompt } = req.body;
  console.log("Received prompt:", prompt);

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an AI assistant that generates JSON structure for dynamic web forms." },
        { role: "user", content: `Generate a JSON form structure for: ${prompt}` },
      ],
      max_tokens: 500,
    });

    console.log("OpenAI response:", completion);

    let formStructure;
    try {
      formStructure = JSON.parse(completion.choices[0].message.content);
    } catch {
      formStructure = completion.choices[0].message.content;
    }

    res.json({ form: formStructure });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ error: "Failed to generate form" });
  }
};

export const createForm = async (req, res) => {
  // Example stub implementation - replace with actual save logic
  const { title, schema } = req.body;
  if (!title || !schema) {
    return res.status(400).json({ error: "Title and schema are required" });
  }
  try {
    // Use Prisma client here to save form data to DB
    // e.g., const form = await prisma.form.create({ data: { title, schema } });

    res.status(201).json({ message: "Form saved successfully", title, schema });
  } catch (error) {
    console.error("Failed to save form:", error);
    res.status(500).json({ error: "Failed to save form" });
  }
};

