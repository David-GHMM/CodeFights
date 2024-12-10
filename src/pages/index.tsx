//1:11:27

import ExploreBoard from "@/components/MainBoards/Explore/ExploreBoard";
import ProblemsBoard from "@/components/MainBoards/Problems/ProblemsBoard";
import RatingsBoard from "@/components/MainBoards/Ratings/RatingsBoard";
import SideBar from "@/components/SideBar/SideBar";
import { useState } from "react";

export default function Home() {
  const [selectedBoard, setSelectedBoard] = useState(0);

  return (
    <main className="flex h-screen bg-white">
      <SideBar
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
      />
      <div className="flex-1 p-8">
        {selectedBoard === 0 ? (
          <ProblemsBoard />
        ) : selectedBoard === 1 ? (
          <ExploreBoard />
        ) : (
          <RatingsBoard />
        )}
      </div>
    </main>
  );
}
