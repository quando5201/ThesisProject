import Slot from "../models/Slot.js";
import Book from "../models/Book.js";

export const createSlot = async (req, res, next) => {
  const bookId = req.params.bookid;
  const newSlot = new Slot(req.body);

  try {
    const savedSlot = await newSlot.save();
    try {
      await Book.findByIdAndUpdate(bookId, {
        $push: { slots: savedSlot._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedSlot);
  } catch (err) {
    next(err);
  }
};

export const updateSlot = async (req, res, next) => {
    try {
      const updatedSlot = await Slot.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedSlot);
    } catch (err) {
      next(err);
    }
};

export const updateSlotAvailability = async (req, res, next) => {
  try {
    await Slot.updateOne(
      { "slotNumbers._id": req.params.id },
      {
        $push: {
          "slotNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Slot status has been updated");
  } catch (err) {
    next(err);
  }
};

export const deleteSlot = async (req, res, next) => {
    const bookId = req.params.bookid;
    try {
      await Slot.findByIdAndDelete(req.params.id);
      try {
        await Book.findByIdAndUpdate(bookId, {
          $pull: { slots: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Slot has been deleted.");
    } catch (err) {
      next(err);
    }
};
export const getSlot = async (req, res, next) => {
    try {
      const slot = await Slot.findById(req.params.id);
      res.status(200).json(slot);
    } catch (err) {
      next(err);
    }
};
export const getSlots = async (req, res, next) => {
    try {
      const slots = await Slot.find();
      res.status(200).json(slots);
    } catch (err) {
      next(err);
    }
};