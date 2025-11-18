const mongoose = require("mongoose");

const DebtSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },

    amount: { 
      type: Number, 
      required: true, 
      min: 0 
    },

    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true, 
      index: true 
    },
  },
  { 
    timestamps: true
  }
);

module.exports = mongoose.model("Debt", DebtSchema);
 