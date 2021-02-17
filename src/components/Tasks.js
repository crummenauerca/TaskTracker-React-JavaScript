const tasks = [{
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
}]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>)
      )}
    </>
  )
}

export default Tasks