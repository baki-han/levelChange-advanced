import React, { useState } from 'react';


function Header(props){

  const [firstIntput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [titleInput, setTitleInput] = useState("");


 //TODO: Handle all inputs
  const firstHandler = (event) =>{
       const val = event.target.value;
        setFirstInput(val);
  }

  const secondHandler = (event) =>{
       const val = event.target.value;
       setSecondInput(val);  
  }

  const titleHandler = (event) =>{
       const val = event.target.value;
       setTitleInput(val);
        
  }


  //TODO: hadle button click;
  const addButtonHandler = () =>{

   if(firstIntput === ""){alert('first name cant be empty')}
   else if(secondInput === ""){alert('last name cant be empty')}
   else if(titleInput === ""){alert("level cant be emtpy")}
   else{
       props.addPlayer(firstIntput, secondInput, titleInput);
       setTitleInput("");
       setFirstInput("");
       setSecondInput("");
   }
 }


    return (<div className="header">
     <h2>{"<<< Title >>>"}</h2>
        <div className="input-header">
        <input className="input-class" type="text" 
                     onChange={firstHandler}  placeholder="first" value={firstIntput}/>
        <input className="input-class" type="text" 
               onChange={secondHandler} placeholder="last" value={secondInput}/>
        <input className="input-class" type="text" 
               onChange={titleHandler} placeholder="level" value={titleInput}/>
               
               </div>

                
               <button onClick={addButtonHandler} className="btn btn-secondary add-new">add player</button>
              
               <button className="btn-warning trash-bin trash-bin" type="button" 
                       data-toggle="collapse" data-target="#collapseExample" 
                       aria-expanded="false" aria-controls="collapseExample">
                       <i className="fa fa-trash"></i>recycle</button>
                

                     <div className="collapse col1" id="collapseExample">
                     <div className="card card-body collapse-div">

                      <h4>Deleted items:</h4> 
                      <hr/>
                      <ul>
                        {props.delList.map(el =><li key={el.id}>
                            <label className="player">{el.first}&nbsp;&nbsp;{el.last}</label> 
                        </li>)}
                        </ul>
                    </div>
             </div>  
             </div>
    );
}

export default Header;


