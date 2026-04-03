import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
import Editor from "@monaco-editor/react";
import { toast } from "react-toastify";

interface CodingArenaProps {
  problem: {
    title: string;
    difficulty: string;
    description: string;
    examples: Array<{
      input: string;
      output: string;
      explanation?: string;
    }>;
  };
  language: string;
}

const CodingArena: React.FC<CodingArenaProps> = ({ problem, language }) => {
  const [code, setCode] = useState("");

  const handleClick = () => {
    toast.success("Successful submit! All tests are passed!", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const getInitialCode = (lang: string) => {
    switch (lang) {
      case "Python":
        return "def solution():\n    # Write your code here\n    pass";
      case "JavaScript":
        return "function solution() {\n    // Write your code here\n}";
      // Добавьте другие языки по необходимости
      default:
        return "// Write your code here";
    }
  };

  return (
    <div className="h-screen flex">
      {/* Левая панель с условием задачи */}
      <div className="w-1/2 p-6 overflow-y-auto border-r">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{problem.title}</h1>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {problem.difficulty}
          </span>
        </div>

        <div className="prose max-w-none">
          <div className="mb-6">{problem.description}</div>

          <h3 className="font-bold mb-3">Examples:</h3>
          {problem.examples.map((example, index) => (
            <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg">
              <div className="mb-2">
                <strong>Input:</strong> {example.input}
              </div>
              <div className="mb-2">
                <strong>Output:</strong> {example.output}
              </div>
              {example.explanation && (
                <div>
                  <strong>Explanation:</strong> {example.explanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Правая панель с редактором кода */}
      <div className="w-1/2 flex flex-col pt-[24px]">
        <div className="h-full">
          <Editor
            height="98%"
            defaultLanguage={language.toLowerCase()}
            defaultValue={getInitialCode(language)}
            theme="vs-dark"
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              automaticLayout: true,
            }}
          />
        </div>
        <div className="p-4 border-t bg-gray-50 h-fit">
          <button
            className="relative left-[5%] px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 top-[30%]"
            onClick={handleClick}
          >
            Submit Solution
          </button>
          <a
            href="/"
            className="flex relative size-fit font-bold text-lg left-[80%] bottom-4 items-center"
          >
            <IoMdExit href="#" className="size-[40px]" />
            Exit game
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingArena;
