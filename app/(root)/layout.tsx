import { ReactNode } from "react";

import LeftSideNavigation from "@/components/navigation/LeftSideNavigation";
import Navbar from "@/components/navigation/navbar";
import RightSideNavigation from "@/components/navigation/RightSideNavigation";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 realtive">
      <Navbar />
      <div className="flex">
        <LeftSideNavigation />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideNavigation />
      </div>
    </main>
  );
};

export default RootLayout;
