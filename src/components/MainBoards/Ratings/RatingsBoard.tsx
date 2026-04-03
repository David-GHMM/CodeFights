import React, { useState } from "react";
import Image from "next/image";

interface User {
  username: string;
  favoriteLanguage: string;
  matches: number;
  winRate: number;
  country: string;
  fightCoins: number;
  avatar: string;
}

const RatingsBoard = () => {
  const [ratingType, setRatingType] = useState<"world" | "country">("world");

  const users: User[] = [
    {
      username: "g964",
      favoriteLanguage: "TypeScript",
      matches: 31,
      winRate: 96,
      country: "Nigeria",
      fightCoins: 5690,
      avatar: "/avatars/g964.png",
    },
    {
      username: "jhoffner",
      favoriteLanguage: "Python",
      matches: 33,
      winRate: 91,
      country: "South Korea",
      fightCoins: 6900,
      avatar: "/avatars/jhoffner.png",
    },
    {
      username: "myijinxin2015",
      favoriteLanguage: "JavaScript",
      matches: 26,
      winRate: 88,
      country: "Germany",
      fightCoins: 5420,
      avatar: "/avatars/myijinxin2015.png",
    },
    {
      username: "PG1",
      favoriteLanguage: "Python",
      matches: 11,
      winRate: 83,
      country: "India",
      fightCoins: 1231,
      avatar: "/avatars/pg1.png",
    },
    {
      username: "Voile",
      favoriteLanguage: "C++",
      matches: 12,
      winRate: 80,
      country: "Germany",
      fightCoins: 5437,
      avatar: "/avatars/voile.png",
    },
    {
      username: "Unnamed",
      favoriteLanguage: "Go",
      matches: 21,
      winRate: 79,
      country: "USA",
      fightCoins: 5690,
      avatar: "/avatars/unnamed.png",
    },
    {
      username: "wichu",
      favoriteLanguage: "Python",
      matches: 18,
      winRate: 79,
      country: "France",
      fightCoins: 5112,
      avatar: "/avatars/wichu.png",
    },
    {
      username: "danleavitt0",
      favoriteLanguage: "JavaScript",
      matches: 29,
      winRate: 77,
      country: "Singapore",
      fightCoins: 4390,
      avatar: "/avatars/danleavitt0.png",
    },
    {
      username: "BattleRattle",
      favoriteLanguage: "C#",
      matches: 26,
      winRate: 77,
      country: "Russia",
      fightCoins: 7612,
      avatar: "/avatars/battlerattle.png",
    },
    {
      username: "Shivo",
      favoriteLanguage: "Java",
      matches: 18,
      winRate: 77,
      country: "Russia",
      fightCoins: 190,
      avatar: "/avatars/shivo.png",
    },
    {
      username: "suuuzi",
      favoriteLanguage: "Python",
      matches: 13,
      winRate: 77,
      country: "Bulgaria",
      fightCoins: 1233,
      avatar: "/avatars/suuuzi.png",
    },
    {
      username: "ZED.CWT",
      favoriteLanguage: "PHP",
      matches: 22,
      winRate: 76,
      country: "Russia",
      fightCoins: 1337,
      avatar: "/avatars/zed.png",
    },
  ];

  return (
    <div className="p-5 w-screen h-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[38px] font-bold text-sidebar-text-color">
          Ratings
        </h1>
        <div className="relative">
          <select
            value={ratingType}
            onChange={(e) =>
              setRatingType(e.target.value as "world" | "country")
            }
            className="pl-8 pr-4 py-2 border border-gray-200 rounded-lg appearance-none bg-white"
          >
            <option value="world">World Rating</option>
            <option value="country">Country Rating</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-4 text-left">Username</th>
              <th className="px-6 py-4 text-left">Favorite language</th>
              <th className="px-6 py-4 text-left">Matches</th>
              <th className="px-6 py-4 text-left">Win rate, %</th>
              <th className="px-6 py-4 text-left">Country</th>
              <th className="px-6 py-4 text-left">FightCoins</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.username} className="border-b">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Image
                      src={user.avatar}
                      alt={user.username}
                      width={32}
                      height={32}
                      className="rounded-full mr-3"
                    />
                    {user.username}
                  </div>
                </td>
                <td className="px-6 py-4">{user.favoriteLanguage}</td>
                <td className="px-6 py-4">{user.matches}</td>
                <td className="px-6 py-4">{user.winRate}</td>
                <td className="px-6 py-4">{user.country}</td>
                <td className="px-6 py-4">{user.fightCoins}</td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-6 py-4 flex items-center justify-between border-t">
          <button className="text-gray-600 hover:text-gray-900">
            Previous
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded ${
                  page === 1
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-3 py-1">...</span>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-50">
              11
            </button>
          </div>
          <button className="text-gray-600 hover:text-gray-900">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RatingsBoard;
