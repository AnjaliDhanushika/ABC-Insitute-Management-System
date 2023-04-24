const express = require ('express');
const students = require('../models/students');

const router = express.Router();



//save students

router.post('/student/save', (req,res)=>{

    let newstudent = new students(req.body);

    newstudent.save((errA)=>{
        if(errA){
            return res.status(400).json({
                error:errA
            });    
        }
        return res.status(200).json({
            success:"Student Details Saved Successfully"
        });
    });
});

//get Student
router.get('/student' , (req,res)=>{
    students.find().exec((err,students)=>{
        if(err){
        return res.status(400).json({
            error:err
        });
      }
        
      return res.status(200).json({
          success:true,
          existingstudents:students
      });

    });
});

// get a specific Student
 router.get("/student/:id", (req,res) =>{
     let studentId = req.params.id;

     students.findById(studentId,(err,students)=>{
         if(err){
             return res.status(400).json({success:false , err});
         }

         return res.status(200).json({
             success:true,
             students
         });
     });
 } );


//update Animals

router.put('/student/update/:id' , (req,res)=>{
    students.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,students)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated SuccesFully"
            });
        }
    );
});


//delete Student
router.delete('/student/delete/:id',(req,res)=>{
    students.findByIdAndRemove(req.params.id).exec((err,deletestudent)=>{
        if(err)return res.status(400).json({
            message:"Delete unSuccessfull",err
        });

        return res.json({
            message:"Delete SuccesFulll" ,deletestudent
        });
    });
});



module.exports = router;
