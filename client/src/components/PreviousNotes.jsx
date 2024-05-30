const PreviousNotes = ({ data }) => {
  if (!data.notes.length) {
    return <h4>No Previous Notes</h4>;
  } else {
    return (
      <div>
        <h4 className='align-center'>
          Previous notes on this visit
        </h4>
        {data.notes.map((note, index) => (
          <div key={index} className="">
            {note}
          </div>
        ))}
      </div>
    );
  }
}

export default PreviousNotes;