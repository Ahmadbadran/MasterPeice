import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id:{
    type:Number,
    required:true,
  },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    shopImg: {
      type: [Buffer],
      // required: true,
    },
    size: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
