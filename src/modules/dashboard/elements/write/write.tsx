"use client";
import { ICONS } from "@/shared/utils/icons";
import { Button } from "@nextui-org/react";
import {toast} from 'react-hot-toast'
import React, { useState,useEffect } from "react";
import { routeModule } from "next/dist/build/templates/pages";
import { useRouter } from "next/navigation";
import { getEmails } from "@/actions/get-emails";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { deleteEmail } from "@/actions/delete.email";

const Write = () => {
  const [emailTitle, setEmailTitle] = useState("");
  const [emails, setEmails] = useState<any>([])
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const {user} = useClerk();
  const handleCreate = () =>{
    if(emailTitle.length==0){
toast.error("Enter the email subject to continue:")
    }
    else{
        const formattedTitle = emailTitle.replace(/\s+/g,"-").replace(/&/g,"-");
        route.push(`/dashboard/new-email?subject=${formattedTitle}`);
    }
  }
  const FindEmails = async () => {
    await getEmails({ newsLetterOwnerId: user?.id! })
      .then((res:any) => {
        setEmails(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteHanlder = async (id: string) => {
    await deleteEmail({ emailId: id }).then((res) => {
      FindEmails();
    });
  };
useEffect(() => {
  FindEmails()
}, [user]);

  return (
    <div className="w-full flex p-5 flex-wrap gap-6 relative">
      <div
        className="w-[200px] h-[200px] bg-slate-50 flex flex-col  items-center justify-center rounded border cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl block text-center mb-3">{ICONS.plus}</span>
        <h5 className="text-2xl">Create New</h5>
      </div>
            {emails &&
        emails.map((i: any) => {
          const formattedTitle = i?.title
            ?.replace(/\s+/g, "-")
            .replace(/&/g, "-");
          return (
            <div
              key={i?._id}
              className="w-[200px] h-[200px] z-[0] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer"
            >
              <span
                className="absolute block z-20 right-2 top-2 text-2xl cursor-pointer"
                onClick={() => deleteHanlder(i?._id)}
              >
                {ICONS.delete}
              </span>
              <Link
                href={`/dashboard/new-email?subject=${formattedTitle}`}
                className="text-xl"
              >
                {i.title}
              </Link>
            </div>
          );
        })}
      {open && (
        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-[100%]">
          <div className="W-[600PX] P-5 bg-white rounded shadow relative">
            <span
              className="text-lg cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {ICONS.cross}
            </span>
          </div>
          <h5 className="text-2xl">Enter your Email Subject</h5>
          <input type='text' name="" id = "" className="border w-full my-2 h-[35px] px-2 outline-none"
          value={emailTitle} onChange={(e)=>setEmailTitle(e.target.value)} />
          <Button color = "primary" className="rounded text-xl mt-3" onClick={handleCreate}>Continue</Button>
        </div>
      )}
    </div>
  );
};

export default Write;
