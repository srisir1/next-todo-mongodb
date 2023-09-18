import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  query: String,
  enquired_for: String,
  description: String,
  status: [String],
  treatment: [String],

}, { timestamps: true });

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;
