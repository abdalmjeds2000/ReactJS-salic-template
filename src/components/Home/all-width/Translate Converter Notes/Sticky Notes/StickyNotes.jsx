import React from 'react';
import './StickyNotes.css';


const StickyNotes = props => {

  
  return (
    <div className='sticky-notes-container'>
      <div className="header">
        <h2>Sticky Notes</h2>
      </div>
      <div className="note">
        <h4 className="note-title">Note title</h4>
        <p className="note-description">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  
        </p>
      </div>
      <div className='dots'>
        <span className='note1 active'></span>
        <span className='note2'></span>
        <span className='note3'></span>
      </div>
    </div>
  )
}


export default StickyNotes