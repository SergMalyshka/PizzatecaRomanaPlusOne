import './PreviousNotes.css'; // Import CSS file


const PreviousNotes = ({ data }) => {
  if (!data.notes.length) {
    return( 
    <div className='no-notes-container'>
     <h4 className='align-center'>
      No Previous Notes
     </h4>
    </div>
    )
  } else {
    return (
      <div className='notes-container'>
        <h4 className='align-center'>
          Previous notes on this visit:
        </h4>
        {data.notes.map((note, index) => (
          <div key={index} className="pnotes">
            {note}
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default PreviousNotes;