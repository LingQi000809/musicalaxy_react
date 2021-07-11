import React, { useState } from 'react';
import './Personalization.css';

import ClrCanvas from '../Components/ClrCanvas';
import PMappingUI from '../Components/PMappingUI';

function Personalization({ onPageSwitch }) {
  const [hoverClr, setHoverClr] = useState('#FFFFFF');
  const [selectedClr, setSelectedClr] = useState('#FFFFFF');
  const pieceQueue = buildPieceQueue();

  function buildPieceQueue(){
    let pieces = ["Clair_de_Lune", "Dragon_Boy", "HeartBroken_Kiki", "Life_Incredible_Again", "Secret_Duo"];
    return pieces;
}
  function finish(){
    onPageSwitch({nextPage: 'WORKSPACE'})
  }

  function updateHoverColor(clr){
    setHoverClr(clr);
  }
  function updateSelectedColor(clr){
    setSelectedClr(clr);
  }

  function resetColors(){
    updateHoverColor('white');
    updateSelectedColor('white');
  }


  const mappingUIProps = {
    pieceQueue: pieceQueue,
    finishPers: finish,
    hoverClr: hoverClr,
    selectedClr: selectedClr,
    resetColors: resetColors,
  }

  return (
    <div className='page' id='personalization-page'>
      <ClrCanvas updateHoverClr={updateHoverColor} 
      updateSelectedClr={updateSelectedColor}/>
      <PMappingUI {...mappingUIProps}/>
    </div>
  )
}

export default Personalization;
