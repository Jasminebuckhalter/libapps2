import React from 'react'
import Summ from './Summ'
import { Link } from 'react-router-dom'

const List = ({notes}) => {
  return (
    <div className="project-list section">
      { notes && notes.map(note => {
        return (
          <Link to={'/note/' + note.id} key={note.id}>
            <Summ note={note} />
          </Link>
        )
      })}  
    </div>
  )
}

export default List