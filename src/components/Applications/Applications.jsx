import React, { useState } from 'react'
import './Applications.css';

import worldIllustration from '../../icons/home/world.svg';
import PersonImg from '../../icons/home/person.png';



function Applications(props) {

  const [isNewTaskVisible, setIsNewTaskVisible] = useState(false);


  const [taskTitle, setTaskTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [expectedHours, setExpectedHours] = useState('');
  const [status, setStatus] = useState('completed');
  const [requester, setRequester] = useState('');



  const [allTasks, setAllTasks] = useState(JSON.parse(localStorage.getItem('tasks')));


  const addNewTask = () => {
    if(taskTitle === '' || startDate === '' || completionDate === '' || expectedHours === '' || status === '' || requester === '') {
      alert('unvalid form')
    }else {
      const oldTasks = JSON.parse(localStorage.getItem('tasks'));
      let newTaskData = [];
      const objTask = {
        taskTitle: taskTitle,
        startDate: startDate,
        completionDate: completionDate,
        expectedHours: expectedHours,
        status: status,
        requester: requester
      }
      newTaskData = [objTask];

      var data = oldTasks ? newTaskData.concat(oldTasks) : newTaskData;
      localStorage.setItem('tasks', JSON.stringify(data));
      
      setAllTasks(JSON.parse(localStorage.getItem('tasks')))

      setTaskTitle('');
      setStartDate('');
      setCompletionDate('');
      setExpectedHours('');
      setStatus('');
      setRequester('');
    }
  }





  return (
    <div className='applications-container'>
      <img src={worldIllustration} className='bg-img-world' alt='world bg' />
      <div className="header">
        <h1>Tasks Management</h1>
      </div>
      
        
      <div className='task-managment-container'>
      
        <div className="tasks" style={{ flexBasis: isNewTaskVisible ? '70%' : '100%' }}>
          <div className="header">
            <div className="userInfo">
              <img src={PersonImg} alt="person" />
              <div>
                <h3>Mohammad Al-Ahmad</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
            <div className="buttons">
              <button className="sortby-btn">Sort By</button>
              <button 
                className="newtask-btn" 
                style={{ backgroundColor: isNewTaskVisible ? '#FD96A6' : '#43A2CC' }} 
                onClick={() => setIsNewTaskVisible(!isNewTaskVisible)}>
                  {isNewTaskVisible ? 'Close' : 'New task'}
              </button>
            </div>
          </div>
          <div className="tasks-container">
            {allTasks?.map((task, i) => {
              return <div className='task-row' key={i}>
                <span></span>
                <h3>{task.taskTitle}</h3>
                <div>
                  <p className={task.status === 'in-progress' ? 'orange' : 'green'}>{task.status}</p>
                  <p>Created: {task.startDate}</p>
                  <p>Completion: {task.completionDate}</p>
                </div>
              </div>
            })}
          </div>
        </div>


        {
          isNewTaskVisible
          ? <div className="new-task" style={{ flexBasis: isNewTaskVisible ? '30%' : '0%' }}>
              <div>
                <label htmlFor="task-title">Task Title</label>
                <input type="text" name="task-title" id="task-title" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} placeholder='Title' />
              </div>

              <div>
                <label htmlFor="start-date">Start Date</label>
                <input type="date" name="start-date" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)} />
              
                <label htmlFor="completion-date">Completion Date</label>
                <input type="date" name="completion-date" id="completion-date" value={completionDate} placeholder='TitleSet completion due' onChange={e => setCompletionDate(e.target.value)} />
                
                <label htmlFor="expected-hours">Expected Hours</label>
                <input type="text" name="startexpected-hours" id="expected-hours" value={expectedHours} placeholder='0' onChange={e => setExpectedHours(e.target.value)} />
              </div>

              <div>
                <label htmlFor="status">Status</label>
                <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="completed" selected>Completed</option>
                  <option value="in-progress">In Progress</option>
                </select>
                
                <label htmlFor="requester">Requester</label>
                <input type="date" name="requester" id="requester" value={requester} onChange={e => setRequester(e.target.value)} />
              </div>

              <div>
                <button className="btn-new-task" onClick={addNewTask}>New Task</button>
              </div>


            </div>
          : null
        }
      </div>
    </div>
  )
}


export default Applications
