import React from "react";
import { SelectedPage } from "./types";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  setSelectedPage: ( value: SelectedPage) => void;
};

function ActionButton({children, setSelectedPage}: Props) {
  return (
    <Link
      className="rounded-md bg-primary-500 px-10 py-2 text-white hover:bg-accent-400 hover:text-neutral-100"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </Link>
  );
}

export default ActionButton;
