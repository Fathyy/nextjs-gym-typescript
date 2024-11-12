"use client";

import Benefits from "@/components/benefits/benefits";
import ContactUs from "@/components/contactUs/contactUs";
import Footer from "@/components/Footer/footer";
import HomePage from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
import OurClasses from "@/components/ourClasses/ourClasses";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";

type Props = {};

function AppClient({}: Props) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY > 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-neutral-100">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <HomePage setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default AppClient;
