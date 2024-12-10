import React, { useState } from "react";

type ProblemsBoardProps = {};

const ProblemsBoard: React.FC<ProblemsBoardProps> = () => {
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

  const [selectedLang, setLang] = useState(-1);

  return (
    <div className="flex-1 p-5">
      <h1 className="mb-5 text-[38px] font-bold text-sidebar-text-color">
        Problems
      </h1>
      <div className="flex-col">
        <div className="mb-[20px] w-full h-fit">
          <h2 className="text-[24px] text-center font-bold mb-4 text-sidebar-text-color">
            Choose language:
          </h2>
          <div className="flex overflow-hidden overflow-x-scroll whitespace-nowrap max-h-[250px] w-[100vh]">
            {languages.map((item, index) => (
              <div
                key={item}
                className="text-center min-w-[227px] h-[169px] leading-[169px] mr-[2px]"
                onClick={() => {
                  setLang(index);
                }}
              >
                <div
                  className={
                    selectedLang === index
                      ? "flex text-center size-full rounded-[20px] border-2 border-black pointer-events-none select-none"
                      : "flex text-center size-full rounded-[20px] border-2 border-[#DDE1E6] pointer-events-none select-none"
                  }
                >
                  <img
                    src={
                      item === "C#"
                        ? "/language/CSharp.png"
                        : "/language/" + item + ".png"
                    }
                    key={item}
                    className="flex w-[220px] h-[200px] pointer-events-none select-none"
                  />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-[20px] w-full h-fit items-center">
          <h2 className="text-sidebar-text-color text-[24px] text-center font-bold mb-4">
            Choose difficulty:
          </h2>
          <select className="p-[10px] text-[16px] text-sidebar-text-color">
            <option key="easy" value="easy">
              Easy
            </option>
            <option key="medium" value="medium">
              Medium
            </option>
            <option key="hard" value="hard">
              Hard
            </option>
          </select>
        </div>

        <button
          className=" bg-compete-color text-white border-none rounded-[50%] font-bold text-[24px]
                    size-[150px] mt-[20px] cursor-pointer transition-colors duration-[0.3s]"
        >
          COMPETE
        </button>
      </div>
    </div>
  );
};

export default ProblemsBoard;
