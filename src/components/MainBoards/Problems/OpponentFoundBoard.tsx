import React, { useEffect } from "react";
import Image from "next/image";

interface Player {
  username: string;
  rating: number;
  favoriteLanguage: string;
  avatar: string;
  winRate: number;
}

interface OpponentFoundProps {
  player: any;
  opponent: Player;
  onReady: () => void;
}

const OpponentFoundBoard: React.FC<OpponentFoundProps> = ({
  player,
  opponent,
  onReady,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReady();
    }, 5000); // Автоматически переходим к задаче через 5 секунд

    return () => clearTimeout(timer);
  }, [onReady]);

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

  const PlayerCard = ({
    user,
    isOpponent = false,
  }: {
    user: Player;
    isOpponent?: boolean;
  }) => (
    <div className={`text-center ${isOpponent ? "order-1" : "order-0"}`}>
      <Image
        src={user.avatar}
        alt={user.username}
        width={120}
        height={120}
        className="rounded-full mx-auto mb-4"
      />
      <div className="text-2xl font-bold mb-2">{user.username}</div>
      <div className="text-gray-600 mb-1">Rating: {user.rating}</div>
      <div className="text-gray-600 mb-1">{user.favoriteLanguage}</div>
      <div className="text-gray-600">Win Rate: {user.winRate}%</div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Opponent Found!</h2>
          <div className="text-gray-600">
            The battle will begin in a few seconds...
          </div>
        </div>

        <div className="flex justify-between items-center gap-12">
          <PlayerCard user={player} />

          <div className="text-4xl font-bold text-blue-600">VS</div>

          <PlayerCard user={opponent} isOpponent />
        </div>
      </div>
    </div>
  );
};

export default OpponentFoundBoard;
