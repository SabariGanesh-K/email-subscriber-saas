"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import {useUser} from "@clerk/nextjs";
import {Toaster} from 'react-hot-toast'
import DashboardSideBar from "../widgets/dashboard/sidebar/dashboard.sidebar";
interface ProviderProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname();
  const { isLoaded, user } = useUser();

   if(!isLoaded){
    return null;
   }
  return (
    <NextUIProvider>
      { pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/success" &&
      pathname !== "/sign-in" ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll">
            {/* //dashboard */}
            <DashboardSideBar/>
          </div>
          {children}
        </div>
      ) : (
<>{children}</>
)}
 <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  );
}
