import React, {useState, useRef} from 'react';
import useDoubleClick from 'use-double-click';

function Square({id, clr, size, removeSquare, increSize, decreSize}) {
    const squareRef = useRef();
    const [closeDisplay, setCloseDisplay] = useState(false);
    // const [side, setSideSize] = useState(20 * size + "%"); // max size: 5

    useDoubleClick({
        /** A callback function for single click events */
        onSingleClick: e => {
            if (size===5){
                return; // can't be larger
            }
            // setSideSize(20*(size+1)+"%");
            increSize(id);
        },
        /** A callback function for double click events */
        onDoubleClick: e => {
            if (size===1){
                return; // can't be smaller
            }
            decreSize(id);
        },
        /** (Required) Dom node to watch for double clicks */
        ref: squareRef,
        /**
         * The amount of time (in milliseconds) to wait 
         * before differentiating a single from a double click
         */
        latency: 200
      });

    let side = 20 * size + "%"; // max size: 5
    let wrapperStyle = {
        position: "relative",
        width: side,
        height: "30%",
        marginBottom: "2px"
    }
    let squareStyle = {
        display: "block",
        backgroundColor: clr,
        width: "100%",
        height: "100%",
        cursor: "cell",
        border: "0.5px solid black"
    }
    let closeStyle = {
        display: closeDisplay?"initial":"none",
        cursor: "pointer",
        height: "40%",
        position: "absolute",
        top: "3px",
        right: "3px"
        }
    function deleteMe(){
        removeSquare(id);
    }
    function showClose(){
        setCloseDisplay(true)
    }
    function hideClose(){
        setCloseDisplay(false)
    }
    
    return(
        <div id='square-wrapper' style={wrapperStyle}>
        <div ref={squareRef} style={squareStyle} 
        onMouseEnter={showClose} onMouseLeave={hideClose}>
        </div>
        <svg id='close-icon' style={closeStyle} 
        onClick={deleteMe} onMouseEnter={showClose}
        vxmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.2 475.2">
            <g fill='black'>
                <path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6
                s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7
                s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7
                C468.6,170.8,468.6,304.4,386.5,386.5z"/>
                <path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1
                l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4
                c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/>
            </g> 
        </svg>  
    </div>
    )
  }
  
  export default Square