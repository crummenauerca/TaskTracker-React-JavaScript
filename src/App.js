import Header from './components/Header'
import Tasks from './components/Tasks'

import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors appointment',
    day: 'Feb 5th at 02:00pm',
    reminder: true
  }, {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 01:30pm',
    reminder: true
  }, {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 7th at 02:30pm',
    reminder: false
  }])

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {
      ...task, reminder: !task.reminder
    } : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : <p>There is no tasks</p>}
    </div>
  )
}

export default App
