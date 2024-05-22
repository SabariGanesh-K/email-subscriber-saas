"use client";
import React from "react";
import { useClerk } from "@clerk/nextjs";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { subscribe } from "@/actions/add.subscribe";
const Page = () => {
  const [vale, setVale] = useState("");
  const { user } = useClerk();
  const searchParams = useSearchParams();
  const username: string | null = searchParams.get("username");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await subscribe({ email: vale, username })
      .then((res) => {
        setLoading(false);
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("You are successfully subscribed!");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setValue("");
  };
  return (
    <div className="w-full; flex flex-col items-center justify-center h-0">
      <div>
        <h1 className="text-7xl pb-8 capitalize">{username} NewsLetter</h1>
      </div>
      <form
        className="flex w-full max-w-md border rounded overflow-x-hidden"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          required
          value={vale}
          onChange={(e) => setVale(e.target.value)}
          placeholder="Enter your Email"
          className="px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none"
        />
            <button
          type="submit"
          disabled={loading}
          className="px-8 bg-blue-500 text-white font-bold py-4 rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Page;
