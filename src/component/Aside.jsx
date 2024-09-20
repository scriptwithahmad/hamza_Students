"use client";
import {
  StudentIcon,
  TeacherIcon,
  Logout05Icon,
  DashboardSquare03Icon,
  UserMultiple02Icon,
} from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Admin Dashboard",
    link: "/dashboard",
    icon: <DashboardSquare03Icon size={16} color="#666" />,
  },
  {
    title: "Uploaded Questions",
    link: "/dashboard/uploaded-questions",
    icon: <TeacherIcon size={17} color="#666" />,
  },
  {
    title: "Registered Users",
    link: "/dashboard/users",
    icon: <UserMultiple02Icon size={17} color="#666" />,
  },
  {
    title: "Students Queries",
    link: "/dashboard/students",
    icon: <StudentIcon size={17} color="#666" />,
  },
  // {
  //   title: "Students Tracking",
  //   link: "/dashboard/tracking",
  //   icon: <AnalyticsUpIcon size={16} color="#666" />,
  // },
];

const Aside = () => {
  const router = usePathname();

  return (
    <aside
      className={`pt-10 overflow-hidden pb-6 border-r flex items-center flex-col justify-between p-4`}
    >
      <div className="flex flex-col items-center px-5">
        <div className="w-[200px] rounded-full relative before:absolute before:-bottom-1 before:animate-pulse before:left-1/2 before:-translate-x-1/2 before:h-3 before:w-3 before:bg-green-600 before:rounded-full">
          <img
            alt="user profile"
            src={"/images/user.png"}
            className="w-full h-full rounded-full"
            onError={"/images/user.png"}
          />
        </div>
        <p className="text-gray-600 font-semibold text-lg py-2 text-center">
          Ahmad
        </p>
        <span className="text-xs text-gray-500 block">
          admin@gmail.ocm
        </span>
      </div>
      {/* nav links */}
      <div className="flex items-start justify-center flex-col gap-2 w-full px-4">
        {navLinks.map((v, i) => (
          <Link
            key={i}
            href={v.link}
            className={`w-full rounded-lg flex items-center justify-center hover:bg-white
            ${router === v.link && "bg-white"}
            `}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg cursor-pointer">
              {v.icon}
              <p
                className={`text-gray-500 text-sm font-normal
                ${router === v.link && "font-semibold text-gray-600"}
                `}
              >
                {v.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* Auth Buttons */}
      <div
        className="cursor-pointer bg-gradient-to-tr from-indigo-500 to-purple-500 hover:to-purple-600 px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <Logout05Icon size={16} color="white" />
        <button className="text-white font-normal">Log out</button>
      </div>
    </aside>
  );
};

export default Aside;