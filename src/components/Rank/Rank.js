import React from "react";
import { useHistory } from 'react-router-dom'
import './Rank.css';

function Rank() {
  const history = useHistory();

  return (
    <div className="rank">
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

export default Rank;
