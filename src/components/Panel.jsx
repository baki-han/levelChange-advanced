import React  from 'react';
import { v4 as uuidv4 } from 'uuid';
import Info from './Info';



function Panel(props){

   const levels = props.levels;

    return (<div className="panel">
           <div className="container">
             
           <div className="row text-center row-panel">
              {levels.map((el, i) => 
              
            <div className="card-box" key={uuidv4()}>
            <div className="card box-shadow">
            <div className="card-header">
            <h4 className="my-0 font-weight-normal">{el}</h4>
            </div>
            <div className="card-body">
           
            {props.list.map(elem =>{
                if(elem.level === el){
                  return   <ul className="list-unstyled mt-3 mb-4" key={elem.id}><Info 
                      index={i}
                      first={elem.first}
                      last={elem.last}
                      id={elem.id}
                      level={elem.level}
                      delPlayer={props.delFromCard}
                      levelUpDown={props.levelUpDown}
                      length={levels.length}
                  /></ul>
                }
                else{return ""}
            })}
       
            </div>
            </div>
            </div>
              
              )}
        
        
          </div>

           </div>

    </div>);
}

export default Panel;


// {initCards.map(el => <Card title={el} 
           
//     players={players}
//     delFromCard={props.delFromCard}
//     />)}