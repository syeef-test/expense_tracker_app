const express = require("express");

const expenseController = require("../controllers/expenseController");

const router = express.Router();

router.post("/add_expense",expenseController.addExpense);
router.delete("/delete_expense/:id",expenseController.deleteExpense);



module.exports = router;
