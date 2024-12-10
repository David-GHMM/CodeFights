import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MatchmakingProps {
  selectedLanguage: string;
  difficulty: string;
  onCancel: () => void;
}

const MatchmakingBoard: React.FC<MatchmakingProps> = ({
  selectedLanguage,
  difficulty,
  onCancel,
}) => {
  const [searchTime, setSearchTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSearchTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold mb-2">
              Searching for opponent
            </div>
            <div className="text-gray-600">
              {selectedLanguage} • {difficulty}
            </div>
          </div>

          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div
              className="absolute inset-0 border-4 border-blue-600 rounded-full animate-spin"
              style={{
                borderRightColor: "transparent",
                borderTopColor: "transparent",
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl font-semibold">
                {formatTime(searchTime)}
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-6">
            Looking for players with similar rating...
          </div>

          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchmakingBoard;
