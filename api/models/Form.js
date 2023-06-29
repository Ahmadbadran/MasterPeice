import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      //   required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Form", formSchema);
