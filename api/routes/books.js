import express from "express";
import Book from "../models/Book.js";
import {
    countByField,
    countByType,
    createBook,
    deleteBook,
    getBook,
    getBookSlots,
    getBooks,
    updateBook,
  } from "../controllers/book.js"; 
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createBook);

//UPDATE
router.put("/:id", verifyAdmin, updateBook);
//DELETE
router.delete("/:id", verifyAdmin, deleteBook);
//GET
router.get("/find/:id", getBook);
//GET ALL
router.get("/", getBooks);
router.get("/countByField", countByField);
router.get("/countByType", countByType);
router.get("/slots/:id", getBookSlots);

export default router
