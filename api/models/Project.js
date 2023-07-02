import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  pImg: {
    type: [Buffer],
    required: true,
  },
  ps1img: {
    type: [Buffer],
    required: true,
  },
  psub1img1: {
    type: [Buffer],
    required: true,
  },
  psub1img2: {
    type: [Buffer],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Project", ProjectSchema);
