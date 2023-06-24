import Book from "../models/Book.js";
import Slot from "../models/Slot.js";

export const createBook = async (req, res, next) => {
  const newBook = new Book(req.body);

  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    next(err);
  }
};
export const updateBook = async (req, res, next) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    next(err);
  }
};
export const deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("Book has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};
// export const getBooks = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
//   try {
//     const books = await Book.find({
//       ...others,
//       // title: { $regex: letter, $options: 'i'},
//       year: { $gt: min | 1, $lt: max || 3000 },
//     }).limit(req.query.limit);
//     res.status(200).json(books);
//   } catch (err) {
//     next(err);
//   }
// };

export const getBooks = async (req, res, next) => {
  const { title, isbn, author, publisher, field, min, max, ...others } = req.query;
  try {
    const query = {
      ...others,
      $or: []
    };

    if (title) {
      query.$or.push({ title: { $regex: title, $options: 'i' } });
    }

    if (isbn) {
      query.$or.push({ isbn: { $regex: isbn, $options: 'i' } });
    }
    
    if (author) {
      query.$or.push({ author: { $regex: author, $options: 'i' } });
    }

    if (publisher) {
      query.$or.push({ publisher: { $regex: publisher, $options: 'i' } });
    }

    if (field) {
      query.$or.push({ field: { $regex: field, $options: 'i' } });
    }

    query.year = { $gt: min | 1, $lt: max || 3000 };

    const books = await Book.find(query).limit(req.query.limit);
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export const countByField = async (req, res, next) => {
  const fields = req.query.fields.split(",")
  try {
    const list = await Promise.all(
      fields.map(field => {
        return Book.countDocuments({ field: field });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const bookCount = await Book.countDocuments({ type: "book" });
    const roomCount = await Book.countDocuments({ type: "room" });
    const novelCount = await Book.countDocuments({ type: "novel" });
    const magazineCount = await Book.countDocuments({ type: "magazine" });
    const paperCount = await Book.countDocuments({ type: "paper" });

    res.status(200).json([
      { type: "book", count: bookCount },
      { type: "room", count: roomCount },
      { type: "novel", count: novelCount },
      { type: "magazine", count: magazineCount },
      { type: "paper", count: paperCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getBookSlots = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    const list = await Promise.all(
      book.slots.map((slot) => {
        return Slot.findById(slot);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};