import React, { useState } from "react";
import "./Notepad.css";

function Notepad() {
  const [writeNotes, setWriteNotes] = useState(
    "Enter your notes to send your mail!"
  );

  return (
    <div className="notepad">
      <textarea
        className="notepad_textarea"
        value={writeNotes}
        onChange={(e) => setWriteNotes(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Notepad;
