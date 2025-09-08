import FormBuilder from "../components/FormBuilder";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">AI Form Builder</h1>
      <FormBuilder />
    </main>
  );
}
