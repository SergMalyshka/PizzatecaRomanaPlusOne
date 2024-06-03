import './PreviousNotes.css'; // Import CSS file


const PreviousNotes = ({ data }) => {
  if (!data.notes.length) {
    return (
      <div>
        <h4 className='align-center no-notes'>
          No Previous Notes
        </h4>
        <div className='no-notes-container'>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h4 className='align-center notes-header'>
          Previous notes on this visit:
        </h4>
        <div className='notes-container'>
          {data.notes.map((note, index) => (
            <div key={index} className="pnotes">
              {note}
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PreviousNotes;