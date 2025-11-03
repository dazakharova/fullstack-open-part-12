import React from 'react'

const Todo = ({ data, onDelete, onComplete }) => {
  const doneInfo = (
      <>
        <span>This todo is done</span>
        <span>
              <button onClick={() => onDelete(data)}> Delete </button>
            </span>
      </>
  )

  const notDoneInfo = (
      <>
            <span>
              This todo is not done
            </span>
        <span>
              <button onClick={() => onDelete(data)}> Delete </button>
              <button onClick={() => onComplete(data)}> Set as done </button>
            </span>
      </>
  )

  return (
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <span>
              {data.text}
            </span>
        {data.done ? doneInfo : notDoneInfo}
      </div>
  )
}

export default Todo