import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
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
    lastname: {
      type: String,
      required: true,
    },
    events: {
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

export default mongoose.model("Contact", contactSchema);
