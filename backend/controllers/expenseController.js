const Expense = require("../models/expenseModel");




exports.addExpense = async(req, res, next) => {
  try{
    console.log(req.body);
    const exp_amount = req.body.exp_amount;
    const desc = req.body.desc;
    const category = req.body.category;

    const insertData = await Expense.create({
        exp_amount:exp_amount,
        desc:desc,
        category:category
    });

    //console.log(insertData.toJSON());
    //res.setHeader("Content-Type", "application/json");
    //res.status(201).end(JSON.stringify({ data:"hello" }));
    // res.status(401).json({message: "Hello world!"});

    if(insertData){
        data = insertData.toJSON();
        //console.log(data);
        res.status(201).json({message:"Data Inserted",data:data});
    }else{
        res.status(200).json({message:"Data Not Inserted"});
    }
  }
  catch(error){
    console.log(error);
  }
    
   
};

exports.deleteExpense = async (req, res, next) => {
  try {
    const expenseId = req.params.id;
    deleteData = await Expense.destroy({
        where:{
            id:expenseId
        }
    });
    console.log(deleteData);
    if(deleteData === 1){
        res.status(200).json({message:"Data Deleted",data:expenseId});
    }else{
        res.status(401).json({message:"Data Not Deleted"});
    }
  } catch (err) {
    console.log(err);
  }
};

// exports.editExpense = async (req, res, next) => {
//   try {
//   } catch (err) {
//     console.log(err);
//   }
// };
