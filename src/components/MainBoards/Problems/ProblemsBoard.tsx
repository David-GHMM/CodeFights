import React, { useState } from "react";
import Image from "next/image";
import MatchmakingBoard from "./MatchmakingBoard";

const ProblemsBoard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const languages = [
    { id: "python", name: "Python", icon: "/python-icon.png" },
    { id: "cpp", name: "C++", icon: "/cpp-icon.png" },
    { id: "csharp", name: "C#", icon: "/csharp-icon.png" },
    { id: "java", name: "Java", icon: "/java-icon.png" },
    { id: "javascript", name: "JavaScript", icon: "/js-icon.png" },
    { id: "typescript", name: "TypeScript", icon: "/ts-icon.png" },
    { id: "php", name: "PHP", icon: "/php-icon.png" },
  ];

  const handleCompete = () => {
    if (!selectedLanguage || !difficulty) {
      alert("Please select both language and difficulty");
      return;
    }
    setIsSearching(true);
  };

  const handleCancelSearch = () => {
    setIsSearching(false);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Problems</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl mb-4">Choose language:</h2>
            <div className="grid grid-cols-7 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  className={`p-4 border rounded-lg hover:border-blue-500 ${
                    selectedLanguage === lang.id
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedLanguage(lang.id)}
                >
                  <Image
                    src={lang.icon}
                    alt={lang.name}
                    width={48}
                    height={48}
                  />
                  <p className="mt-2 text-sm">{lang.name}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-4">Choose difficulty:</h2>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-64 p-2 border border-gray-200 rounded-lg"
            >
              <option value="">Choose difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button
            onClick={handleCompete}
            className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            COMPETE
          </button>
        </div>
      </div>

      {isSearching && (
        <MatchmakingBoard
          selectedLanguage={selectedLanguage}
          difficulty={difficulty}
          onCancel={handleCancelSearch}
        />
      )}
    </>
  );
};

export default ProblemsBoard;
