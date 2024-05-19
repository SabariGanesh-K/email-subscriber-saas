"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ICONS } from "@/shared/utils/icons";
import Emaileditor from "@/shared/components/editor/email.editor";
const page = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const subjectTitle = subject?.replace(/-/g, " ");

  return (
    <div className="w-full flex bg-[#F7F7F7]">
      <div className="w-full p-5 bg-white rounded-r-xl">
        <Link
          href="/dashboard/write"
          className="opacity-[.7] w-min flex text-xl items-center"
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>\
        <div  className="my-5">
            <Emaileditor subjectTitle={subjectTitle}/>
        </div>
      </div>
    </div>
  );
};

export default page;
