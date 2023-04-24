const express = require ('express');
const programms = require('../models/programms');

const router = express.Router();

//save programme

router.post('/programme/save', (req,res)=>{

    let newprogramme = new programms(req.body);

    newprogramme.save((errA)=>{
        if(errA){
            return res.status(400).json({
                error:errA
            });    
        }
        return res.status(200).json({
            success:"Programme Details Saved Successfully"
        });
    });
});

//get programmes
router.get('/programme' , (req,res)=>{
    programms.find().exec((err,programms)=>{
        if(err){
        return res.status(400).json({
            error:err
        });
      }
        
      return res.status(200).json({
          success:true,
          existingprogramme:programms
      });

    });
});

// get a specific programme
 router.get("/programme/:id", (req,res) =>{
     let programmeId = req.params.id;

     programms.findById(programmeId,(err,programms)=>{
         if(err){
             return res.status(400).json({success:false , err});
         }

         return res.status(200).json({
             success:true,
             programms
         });
     });
 } );


//update programme

router.put('/programme/update/:id' , (req,res)=>{
    programms.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,programms)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated SuccesFully"
            });
        }
    );
});


//delete programme
router.delete('/programme/delete/:id',(req,res)=>{
    programms.findByIdAndRemove(req.params.id).exec((err,deleteprogramme)=>{
        if(err)return res.status(400).json({
            message:"Delete unSuccessfull",err
        });

        return res.json({
            message:"Delete SuccesFulll" ,deleteprogramme
        });
    });
});

module.exports = router;
