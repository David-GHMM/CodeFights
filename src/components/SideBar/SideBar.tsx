import Image from "next/image";
import Link from "next/link";

interface SideBarProps {
  selectedBoard: number;
  setSelectedBoard: (value: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  selectedBoard,
  setSelectedBoard,
}) => {
  return (
    <div className="w-64 border-r border-gray-200 h-full flex flex-col">
      <div className="p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/codefights-logo.png"
            alt="CodeFights"
            width={32}
            height={32}
          />
          <span className="ml-2 text-xl font-semibold">CodeFights</span>
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setSelectedBoard(0)}
              className={`w-full px-4 py-2 text-left ${
                selectedBoard === 0
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" /* ... */ />
                Problems
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedBoard(1)}
              className={`w-full px-4 py-2 text-left ${
                selectedBoard === 1
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" /* ... */ />
                Explore
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedBoard(2)}
              className={`w-full px-4 py-2 text-left ${
                selectedBoard === 2
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" /* ... */ />
                Ratings
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
