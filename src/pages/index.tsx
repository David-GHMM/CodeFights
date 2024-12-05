//1:11:27

import ProblemsBoard from "@/components/MainBoards/Problems/ProblemsBoard";
import SideBar from "@/components/SideBar/SideBar";


export default function Home() {
  return (
    <>
      <main className="box-border p-0 m-0 font-sans flex h-screen min-h-screen">
        <div className="flex w-full">
          <SideBar />
          <ProblemsBoard />
        </div>
      </main>
    </>
  );
};
