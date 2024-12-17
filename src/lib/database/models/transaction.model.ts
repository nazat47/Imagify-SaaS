import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    stripeId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    plan: { type: String },
    credits: { type: Number },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", TransactionSchema);

export default Transaction;
