const express = require('express');
const app = express();
const tasks = require('./config/tasks');

app.use(express.json())
//retrive data
app.get('/tasks',(req,res)=>{

    res.status(200).send({success:true, data:tasks})
})

//get by id

app.get('/tasks/:id',(req,res)=>{
    const {id} = req.params;
    const task = tasks.find((task)=> task.id===Number(id))
    res.status(200).json({success:true, data:task})
    if(!task) return res.status(404).json({ success: false, msg: 'Task not found' });
})
// add new task

app.post('/tasks', (req, res) => {
  const { title, description, completed } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed
  };
  tasks.push(newTask);
  res.status(201).json({ success: true, data: tasks });
});

//update a specific id
app.put('/tasks/:id',(req,res)=>{
  
})

//to delete a task
app.delete('/tasks/:id',(req,res)=>{
  
})
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
