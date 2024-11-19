import mongoose, { model, models, type Types } from "mongoose";
import { Schema } from "zod";

interface IAccount {
  name: string;

  password?: string;
  image?: string;
  userId: Types.ObjectId;
  providerAccountID: string;
  provider: string;
}

const AccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    password: {
      type: String,
    },
    image: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    providerAccountID: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Account = models?.account || model<IAccount>("Account", AccountSchema);
export default Account;
