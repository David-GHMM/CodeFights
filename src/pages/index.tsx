//1:11:27

import ExploreBoard from "@/components/MainBoards/Explore/ExploreBoard";
import ProblemsBoard from "@/components/MainBoards/Problems/ProblemsBoard";
import RatingsBoard from "@/components/MainBoards/Ratings/RatingsBoard";
import SideBar from "@/components/SideBar/SideBar";
import { useState } from "react";

export default function Home() {
  const [selectedBoard, setselectedBoard] = useState(0);

  return (
    <>
      <main className="box-border p-0 m-0 flex h-screen min-h-screen">
        <div className="flex w-full">
          <SideBar
            selectedBoard={selectedBoard}
            setselectedBoard={setselectedBoard}
          />
          {selectedBoard === 0 ? (
            <ProblemsBoard />
          ) : selectedBoard === 1 ? (
            <ExploreBoard />
          ) : (
            <RatingsBoard />
          )}
        </div>
      </main>
    </>
  );
}
