import mongoose from "mongoose";
const SlotSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slotNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Slot", SlotSchema);