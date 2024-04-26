import { useState } from "react";

const SimpleForm = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log("Email:", email);
    console.log("Question:", question);
    // Reset form fields after submission
    setEmail("");
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-400 p-2 rounded-md"
      />

      <label htmlFor="question">Question:</label>
      <textarea
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
        className="border border-gray-400 p-2 rounded-md"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
