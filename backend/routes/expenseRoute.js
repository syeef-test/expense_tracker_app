const express = require("express");

const expenseController = require("../controllers/expenseController");

const router = express.Router();

router.post("/add_expense",expenseController.addExpense);
router.delete("/delete_expense/:id",expenseController.deleteExpense);
router.get("/get_all_expense",expenseController.getAllexpense);



module.exports = router;
