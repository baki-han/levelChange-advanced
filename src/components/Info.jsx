import React from 'react';


function Info(props){

    const {first, last, id, index, delPlayer, levelUpDown, length} = props;

  
    return (
        <li>
        <div className="cell">
           
        <button onClick={()=> delPlayer(id)} className="btn btn-secondary  del-player" ><i className="fa fa-trash"></i></button>

           <label className="player">{first}&nbsp;&nbsp;{last}</label> 

           <div className="controllers">

                <button onClick={()=> levelUpDown(index, id, -1)} type="button" className="btn btn-sm btn-info bt" 
                        disabled={index === 0}>&laquo;</button>
                <button onClick={()=> levelUpDown(index, id, 1)} type="button" className="btn btn-sm  btn-info bt"
                        disabled={index === length-1}>&raquo;</button>
          </div>
        </div>
        
        <hr/>
        </li>
    )
}

export default Info;