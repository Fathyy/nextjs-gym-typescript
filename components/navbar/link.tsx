import { SelectedPage } from "@/shared/types";
import React from "react";
import Link from "next/link";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function NavLink({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <Link
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-dark-900" : ""
      } transition duration-500 hover:text-dark-900`}
    >
      {page}
    </Link>
  );
}

export default NavLink;
