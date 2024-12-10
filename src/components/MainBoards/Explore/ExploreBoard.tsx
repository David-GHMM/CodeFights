import React from "react";
import Image from "next/image";

interface CourseCard {
  title: string;
  subtitle: string;
  chapters: number;
  bgColor: string;
  image?: string;
}

const ExploreBoard = () => {
  const pythonCourses: CourseCard[] = [
    {
      title: "Recursion",
      subtitle: "Introduction to Algorithms",
      chapters: 3,
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      title: "Data Types",
      subtitle: "Detailed Explanation of",
      chapters: 15,
      bgColor: "bg-gradient-to-r from-green-400 to-emerald-500",
    },
    {
      title: "Loops",
      subtitle: "Detailed Explanation of",
      chapters: 7,
      bgColor: "bg-gradient-to-r from-teal-400 to-cyan-500",
    },
    {
      title: "Lists",
      subtitle: "Detailed Explanation of",
      chapters: 5,
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
  ];

  const javascriptCourses: CourseCard[] = [
    {
      title: "Data Types",
      subtitle: "Detailed Explanation of",
      chapters: 3,
      bgColor: "bg-gradient-to-r from-blue-400 to-indigo-500",
    },
    {
      title: "Functions",
      subtitle: "Detailed Explanation of",
      chapters: 15,
      bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "Recursion",
      subtitle: "Introduction to Algorithms",
      chapters: 5,
      bgColor: "bg-gradient-to-r from-emerald-400 to-cyan-500",
    },
    {
      title: "Loops",
      subtitle: "Detailed Explanation of",
      chapters: 9,
      bgColor: "bg-gradient-to-r from-green-400 to-emerald-500",
    },
  ];

  const cppCourses: CourseCard[] = [
    {
      title: "Data Types",
      subtitle: "Detailed Explanation of",
      chapters: 12,
      bgColor: "bg-gradient-to-r from-green-600 to-emerald-700",
    },
    {
      title: "Recursion",
      subtitle: "Introduction to Algorithms",
      chapters: 8,
      bgColor: "bg-gradient-to-r from-emerald-500 to-green-600",
    },
    {
      title: "Lists",
      subtitle: "Detailed Explanation of",
      chapters: 10,
      bgColor: "bg-gradient-to-r from-orange-400 to-amber-500",
    },
    {
      title: "Loops",
      subtitle: "Detailed Explanation of",
      chapters: 6,
      bgColor: "bg-gradient-to-r from-blue-600 to-indigo-700",
    },
  ];

  const CourseSection = ({
    title,
    courses,
  }: {
    title: string;
    courses: CourseCard[];
  }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="relative">
            <div
              className={`${course.bgColor} rounded-lg p-6 h-[160px] text-white`}
            >
              <div className="mb-2 text-sm opacity-90">{course.subtitle}</div>
              <div className="text-2xl font-bold mb-4">{course.title}</div>
              <div className="text-sm">{course.chapters} Chapters</div>
            </div>
            <button className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              Start Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Explore</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <CourseSection title="Python" courses={pythonCourses} />
      <CourseSection title="JavaScript" courses={javascriptCourses} />
      <CourseSection title="C++" courses={cppCourses} />
    </div>
  );
};

export default ExploreBoard;
