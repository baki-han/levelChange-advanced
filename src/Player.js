import { v4 as uuidv4 } from 'uuid';

class Player{
    constructor(first, last, level){
        this.first = first;
        this.last = last;
        this.level = level;
        this.id = uuidv4();
        this.selected = false;
    }  
}

const playerArray =[
    new Player('Jake', 'Shields', "Novice"),
    new Player('Ronda', 'Rousey', "Intermediate"),
    new Player('Mark', 'Zuckerberg', "Novice"),
    new Player('Indiana', 'Johnes', "Novice"),
    new Player('Steven', 'Sigal', "Beginner"),
    new Player('Jim', 'Helpert', "Novice"),
    new Player('Dwight', 'Shrute', "Expert"),
    new Player('Khabib', 'Nurmagomedov', "Expert"),
    new Player('Masutatsu', 'Oyama', "Beginner"),
    new Player('Fedor', 'Emelianenko', "Beginner"),
    new Player('Jose', 'Aldo', "Beginner"),
    new Player('Michael', 'Scott', "Master"),
    new Player('Tyron', 'Woudley', "Master"),
 ];

export  {playerArray};





