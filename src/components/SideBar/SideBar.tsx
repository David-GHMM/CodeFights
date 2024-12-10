import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type SideBarProps = {
  selectedBoard: number;
  setselectedBoard: Dispatch<SetStateAction<number>>;
};

const SideBar: React.FC<SideBarProps> = ({
  selectedBoard,
  setselectedBoard,
}: SideBarProps) => {
  const boards = [
    { name: "Problems", icon: "/SidebarIcons/problems.png" },
    { name: "Explore", icon: "/SidebarIcons/explore.png" },
    { name: "Ratings", icon: "/SidebarIcons/ratings.png" },
    { name: "About", icon: "/SidebarIcons/about.png" },
  ];

  return (
    <nav className="list-none w-64 flex-col space-y-[20px] flex pl-[16px] pr-[16px] pb-[20px] pt-[25px] border-r-[1px] border-[#DDE1E6]">
      <aside className="text-center h-[40px]">
        <div className="box-border font-bold inline-block">
          <Link href="/" className="flex h-[40px]">
            <img
              src="/logo/black_on_white.png"
              alt="FightCode"
              className="h-[40px]"
            />
            <p className="flex text-xl items-end align-text-bottom font-sans">
              CodeFights
            </p>
          </Link>
        </div>
      </aside>

      <div className="flex items-center justify-between">
        <img
          src="/avatar.png"
          alt="User"
          className="size-[48px] rounded-full"
        />
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img
            src="/settings-icon.png"
            alt="Settings"
            className="size-[32px]"
          />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <div className="relative">
            <img
              src="/notifications-icon.png"
              alt="Notifications"
              className="size-[32px]"
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
        </button>
      </div>

      <ul className="list-none mb-4 w-full">
        {boards.map((item, index) => (
          <li
            key={item.name}
            className={
              selectedBoard === index
                ? "size-fit w-[224px] h-[70px] px-[8px] py-[20px] bg-active-sidebar-color border-active-sidebar-color border-b-2 cursor-pointer"
                : "size-fit w-[224px] h-[70px] px-[8px] py-[20px] hover:bg-active-sidebar-color border-[#F2F4F8] border-b-2 cursor-pointer"
            }
            onClick={() => {
              setselectedBoard(index);
            }}
          >
            <a
              href="#"
              className="flex text-lg items-center space-x-3 size-full"
            >
              <img
                src={"SidebarIcons/" + item.name + ".png"}
                alt={item.name}
                className="size-[24px] fill-sidebar-text-color"
              />
              <p className="text-sidebar-text-color h-16px font-[500]">
                {item.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
