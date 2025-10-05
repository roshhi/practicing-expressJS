const express = require('express');
const router = express.Router();
const students = require('../../student-data.json');

// Route to get all members
router.get('/',(req,res) =>{
        res.json(students)
});

// Route to get a member via id
router.get('/:id', (req,res) =>{
    const found = students.some( member => member.id === parseInt(req.params.id));
    if(found){
        res.json(students.filter(member => member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }
});

// Creating a member
router.post('/', (req,res)=> {

    const newMember = {
      id: req.body.id,
      name: req.body.name,
      gender: req.body.gender,
      physics: req.body.physics,
      maths: req.body.maths,
      english: req.body.english
    }
    students.push(newMember);
    res.json({students})

});

// Updating a member
router.put('/:id', (req,res) =>{
    const found = students.some( member => member.id === parseInt(req.params.id));
    if(found){
        const updMem = req.body;
        students.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = req.body.name,
                member.gender = req.body.gender,
                member.physics = req.body.physics,
                member.maths = req.body.maths,
                member.english = req.body.english

                res.json({ students });
            }
        });
    }
    else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }
});

// Deleting a member
router.delete('/:id', (req,res) =>{
    const found = students.some( member => member.id === parseInt(req.params.id));

    if(found){
        res.json({msg:'Member Deleted',students: students.filter(member => member.id !== parseInt(req.params.id))});
        
    }
    else{
        res.status(400).json({msg:`No member with the id of ${req.params.id}`});
    }
});

module.exports = router;
