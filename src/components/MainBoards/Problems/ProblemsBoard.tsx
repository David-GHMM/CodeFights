import React, { useState } from "react";
import MatchmakingBoard from "./MatchmakingBoard";
import Image from "next/image";
import CodingArena from "./CodingArena";
import OpponentFoundBoard from "./OpponentFoundBoard";

type ProblemsBoardProps = {};

const ProblemsBoard: React.FC<ProblemsBoardProps> = () => {
  const [selectedLang, setLang] = useState(-1);
  const [difficulty, setDifficulty] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [gameState, setGameState] = useState<
    "idle" | "searching" | "found" | "playing"
  >("idle");

  const languages = [
    "Python",
    "C++",
    "C#",
    "Java",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Go",
  ];

  const mockPlayer = {
    username: "You",
    rating: 1500,
    favoriteLanguage: languages[selectedLang],
    avatar: "/avatar.png",
    winRate: 65,
  };

  const mockOpponent = {
    username: "Challenger",
    rating: 1480,
    favoriteLanguage: "Python",
    avatar: "/users/12.png",
    winRate: 62,
  };

  const mockProblem = {
    title: "Two Sum",
    difficulty: difficulty,
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers in nums such that they add up to target...",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
  };

  const handleCompete = () => {
    if (!selectedLang || !difficulty) {
      alert("Please select both language and difficulty");
      return;
    }
    setGameState("searching");
  };

  const handleCancelSearch = () => {
    setGameState("idle");
  };

  const handleOpponentFound = () => {
    setGameState("found");
  };

  const handleReady = () => {
    setGameState("playing");
  };

  if (gameState === "playing") {
    return (
      <CodingArena problem={mockProblem} language={languages[selectedLang]} />
    );
  }

  return (
    <>
      <div className="flex-1 p-5 w-screen h-full">
        <h1 className="text-[38px] font-bold text-sidebar-text-color">
          Problems
        </h1>
        <div className="flex-1 w-full">
          <div className="mb-[20px] w-full place-items-center">
            <h2 className="text-[24px] text-center font-bold mb-4 text-sidebar-text-color">
              Choose language:
            </h2>
            <div className="grid gap-4 grid-cols-4 grid-rows-[169px] w-fit">
              {languages.map((item, index) => (
                <div key={item} className="w-[227px] h-[170px] rounded-[20px]">
                  <button
                    className={`size-full rounded-[20px] border-2 text-left
                      ${
                        selectedLang === index
                          ? "border-buttons-color"
                          : "border-[#DDE1E6] hover:border-buttons-color"
                      }`}
                    onClick={() => {
                      setLang(index);
                    }}
                  >
                    <Image
                      alt={item}
                      src={
                        item === "C#"
                          ? "/language/CSharp.png"
                          : "/language/" + item + ".png"
                      }
                      width={227}
                      height={170}
                      className="size-full rounded-[20px]"
                    />
                    <p className="relative pb-5 bottom-9 left-2 text-2xl font-bold">
                      {item}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-col mb-[16px] w-full h-fit place-items-center">
            <h2 className="text-sidebar-text-color text-[24px] text-center font-bold mb-4">
              Choose difficulty:
            </h2>
            <select
              className="p-[10px] text-[16px] text-sidebar-text-color w-64 border border-gray-200 rounded-lg cursor-pointer"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="" selected disabled>
                Choose difficulty
              </option>
              <option key="Easy" value="Easy">
                Easy
              </option>
              <option key="Medium" value="Medium">
                Medium
              </option>
              <option key="Hard" value="Hard">
                Hard
              </option>
            </select>
          </div>

          <div className="w-full h-fit place-items-center pr-5">
            <button
              onClick={handleCompete}
              className="absolute left-[50%] bottom-6 bg-compete-color text-white border-none rounded-[50%] font-bold text-[50px]
                    size-[260px] cursor-pointer transition-colors duration-[0.3s]"
            >
              COMPETE
            </button>
          </div>
        </div>
      </div>

      {gameState === "searching" && (
        <MatchmakingBoard
          selectedLang={selectedLang}
          difficulty={difficulty}
          onCancel={handleCancelSearch}
          onOpponentFound={handleOpponentFound}
        />
      )}

      {gameState === "found" && (
        <OpponentFoundBoard
          player={mockPlayer}
          opponent={mockOpponent}
          onReady={handleReady}
        />
      )}
    </>
  );
};

export default ProblemsBoard;
