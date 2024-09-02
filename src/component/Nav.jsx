import React from "react";
import Link from "next/link";

const Navjson = [
  {
    name: "Home",
    href: "/",
    children: [
      {
        name: "link 01",
        href: "/",
      },
      {
        name: "link 2",
        href: "/",
      },
      {
        name: "link 3",
        href: "/",
      },
      {
        name: "link 4",
        href: "/",
      },
    ],
  },

  // {
  //   name: "Contact Us",
  //   href: "/contactus",
  // },
];

const Nav = () => {
  return (
    <nav className="py-4 flex items-center justify-between max-w-[1200px] m-auto border border-white">
      <div className="flex gap-6 border border-red-500">
        {Navjson.map((v, i) => {
          return (
            <div className="border border-blue-500">
              <div className="flex relative peer">
                <h2>{v.name}</h2>
              </div>

              <div className="flex flex-col gap-2 border border-green-500 bg-green-50 opacity-0 peer-hover:opacity-100">
                {v.children &&
                  v.children.map((childItem, childIndex) => (
                    <div className="flex flex-col p-1">
                      <Link key={childIndex} href={childItem.href} className="">
                        {childItem.name}
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
