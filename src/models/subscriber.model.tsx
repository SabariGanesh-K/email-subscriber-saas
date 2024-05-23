import mongoose from "mongoose";
const { Schema } = mongoose;

const subscribeSchema = new Schema(
  {
    email: {
      type: String,
    },
    newsLetterOwnerId: {
      type: String,
    },
    source:{
      type:String,
      default:"by someone"
    },
    status:{
      type:String,
      default:"Subscribed"
    }
  },
  { timestamps: true }
);

const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber",subscribeSchema);
export default Subscriber;