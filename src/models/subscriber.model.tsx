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
  },
  { timestamps: true }
);

const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber",subscribeSchema);
export default Subscriber;