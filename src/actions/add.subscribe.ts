"use server"

import Subscriber from "@/models/subscriber.model";
import { connectDb } from "@/shared/libs/db";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";
import { ClerkClient } from "@clerk/nextjs";
export const subscribe = async({
    email,username
}:{email:string,username:string})=>{
    try {
    await connectDb();
    const allUsers = await clerkClient.users.getUserList();

    // now we need to find our newsletter owner
    const newsletterOwner = allUsers.find((i) => i.username === username);
    const isSubscriberExist = await Subscriber.findOne({
        email,
        newsLetterOwnerId: newsletterOwner?.id,
      });
  
      if (isSubscriberExist) {
        return { error: "Email already exists!" };
      }
      const validationResponse = await validateEmail({ email });
      if (validationResponse.status === "invalid") {
        return { error: "Email not valid!" };
      }
      const subscriber = await Subscriber.create({
        email,
        newsLetterOwnerId: newsletterOwner?.id,
        source: "By Becodemy website",
        status: "Subscribed",
      });
      return subscriber;

    } catch (error) {
        console.error("error fetching valid api",error);
        return {error:"Oops. error occured"}
    }
}