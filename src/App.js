import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Panel from './components/Panel';
import {playerArray as players} from './Player';
import levels from './Levels';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [title, setTitle] = useState(levels);
  const [list, setList] = useState(players);
  const [deletedList, setDeletedList] = useState([]);

  //TODO: delete from card
  const delFromCard = (id) =>{
   const filterList = list.filter(elem =>  elem.id !== id);
   const newDelList = [...deletedList];
   const itemToDelete = list.find(el => el.id === id);
   newDelList.unshift(itemToDelete);
   setDeletedList(newDelList);
   setList(filterList);
  }
  
  //TODO: level up ;
  const levelUpDown =(index, id, val)=>{
    const a = list.map(el =>{
      if(el.id === id){return {...el, level: title[index + val]}}
      else{return el}
    });
    setList(a);
  }


  //TODO: add new player code;
  const addPlayer = (first, last, level) =>{
     let newLevel = title.find(el => {
       if(el.toLowerCase() === level.toLowerCase()){ 
         return el;
        }
        return undefined;
     });

     if(newLevel === undefined){
       newLevel = level
       const a = [...title, newLevel];
       setTitle(a);
     }

     const newPlayer = {first: first, last: last, level: newLevel, id: uuidv4(), selected: false};
     const newList = [...list, newPlayer];
     setList(newList);
  }
  
  return (
    <div className="App">
      <Header delList={deletedList}
              addPlayer={addPlayer}
      />
      <hr />
      <Panel levels={title}
            list={list} 
            delFromCard={delFromCard}
            levelUpDown={levelUpDown}
            />
    </div>
  );
}

export default App;

