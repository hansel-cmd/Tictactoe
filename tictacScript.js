//get html collection of small boxes
var smallbox = document.getElementsByClassName('smallbox');

var j = 0;
//adds identification to each collection, for easy accessing
for(var i = 0; i < smallbox.length ; i++, j++){
    smallbox[i].classList.add(`me-${j}`);
}

//get append div
var insert = document.querySelector('.append');


//get the box of small boxes
var box = document.querySelector('.box');

box.addEventListener('mouseover', mOver);
box.addEventListener('mouseout', mOut);

function mOver(e){
    if(!(e.target.classList.contains('title') || e.target.classList.contains('append'))){
        if(!(e.target.style.backgroundColor == 'yellow')){
            e.target.style.cursor = 'pointer';
            e.target.style.backgroundColor = '#f3f3f3';
        }
    }
};

function mOut(e){
    if(!(e.target.classList.contains('title') || e.target.classList.contains('append'))){
        if(!(e.target.style.backgroundColor == 'yellow')){
            e.target.style.backgroundColor = 'white';
        }
    }
};

var me0 = 0;
var me1 = 0;
var me2 = 0;
var me3 = 0;
var me4 = 0;
var me5 = 0;
var me6 = 0;
var me7 = 0;
var me8 = 0;

var turn = 'x';
var letter;
box.addEventListener('click', isClicked);


function plsCheck(e) {

    if(e.firstChild.textContent == 'X'){
        console.log(1);
    }else{
        console.log(0);
    }



}

var draw = 0;

var horizontal0 = 1;
var vertical0 = 1;
var diagonal0 = 1;

var horizontal1 = 1;
var vertical1 = 1;
var diagonal1 = 1;

var horizontal2 = 1;
var vertical2 = 1;
var diagonal2 = 1;

var horizontal3 = 1;
var vertical3 = 1;
var diagonal3 = 1;

var horizontal4 = 1;
var vertical4 = 1;
var diagonal4 = 1;

var horizontal41 = 1;
var vertical41 = 1;
var diagonal41 = 1;

var horizontal5 = 1;
var vertical5 = 1;
var diagonal5 = 1;

var horizontal6 = 1;
var vertical6 = 1;
var diagonal6 = 1;

var horizontal7 = 1;
var vertical7 = 1;
var diagonal7 = 1;

var horizontal8 = 1;
var vertical8 = 1;
var diagonal8 = 1;

var isWin = 0;
function isClicked(e) {

if(draw != 9 && isWin != 1)
{





    if(e.target.classList.contains('me-0')){
        
               
        
        if(me0 == 0){

            me0 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 1 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal0++;
                            if(horizontal0 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            diagonal0++;
                            if(diagonal0 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 3 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical0++;
                            if(vertical0 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }

            }else {
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's

                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 1 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal0++;
                            if(horizontal0 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            diagonal0++;
                            if(diagonal0 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 3 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical0++;
                            if(vertical0 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-1')){

        if(me1 == 0){

            me1 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 0 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal1++;
                            if(horizontal1 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 7){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical1++;
                            if(vertical1 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }

            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 0 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal1++;
                            if(horizontal1 == 3){
                                insert.appendChild(document.createTextNode('Player 0 wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 7){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical1++;
                            if(vertical1 == 3){
                                insert.appendChild(document.createTextNode('Player 0 wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-2')){

        if(me2 == 0){

            me2 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 0 || i == 1){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal2++;
                            if(horizontal2 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            diagonal2++;
                            if(diagonal2 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 5 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical2++;
                            if(vertical2 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 0 || i == 1){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal2++;
                            if(horizontal2 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            diagonal2++;
                            if(diagonal2 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 5 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical2++;
                            if(vertical2 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-3')){

        if(me3 == 0){

            me3 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 4 || i == 5){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal3++;
                            if(horizontal3 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical3++;
                            if(vertical3 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 4 || i == 5){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal3++;
                            if(horizontal3 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical3++;
                            if(vertical3 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-4')){

        if(me4 == 0){

            me4 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 3 || i == 5){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal4++;
                            if(horizontal4 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            diagonal4++;
                            if(diagonal4 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i ==  2 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            diagonal41++;
                            if(diagonal41 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }

                    }
                    if(i == 1 || i == 7){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical4++;
                            if(vertical4 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 3 || i == 5){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal4++;
                            if(horizontal4 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            diagonal4++;
                            if(diagonal4 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 2 || i == 6){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            diagonal41++;
                            if(diagonal41 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 1 || i == 7){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical4++;
                            if(vertical4 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-5')){

        if(me5 == 0){

            me5 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 3 || i == 4){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal5++;
                            if(horizontal5 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 2 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical5++;
                            if(vertical5 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 3 || i == 4){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal5++;
                            if(horizontal5 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 2 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical5++;
                            if(vertical5 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-6')){

        if(me6 == 0){

            me6 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 7 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal6++;
                            if(horizontal6 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            diagonal6++;
                            if(diagonal6 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 3){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical6++;
                            if(vertical6 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 7 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal6++;
                            if(horizontal6 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 4 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            diagonal6++;
                            if(diagonal6 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 3){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical6++;
                            if(vertical6 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-3').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-7')){

        if(me7 == 0){

            me7 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 6 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal7++;
                            if(horizontal7 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 1 || i == 4){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical7++;
                            if(vertical7 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 6 || i == 8){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal7++;
                            if(horizontal7 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 1 || i == 4){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical7++;
                            if(vertical7 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-1').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }

        }

    }else if(e.target.classList.contains('me-8')){

        if(me8 == 0){

            me8 = 1;

            if(turn == 'x'){
                letter = document.createTextNode('X');
                e.target.appendChild(letter);
                turn = 'o';
                draw++;
                //check if it forms 3 X's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 6 || i == 7){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            horizontal8++;
                            if(horizontal8 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 4){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            diagonal8++;
                            if(diagonal8 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 5 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'X'){
                            vertical8++;
                            if(vertical8 == 3){
                                insert.appendChild(document.createTextNode('Player X wins!'));
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
            }else{
                letter = document.createTextNode('O');
                e.target.appendChild(letter);
                turn = 'x';
                draw++;
                //check if it forms 3 O's
                
                for(var i = 0; i < 9 ; i++)
                {
                    if(i == 6 || i == 7){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            horizontal8++;
                            if(horizontal8 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-6').style.backgroundColor = 'yellow';
                                box.querySelector('.me-7').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 0 || i == 4){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            diagonal8++;
                            if(diagonal8 == 3){
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-0').style.backgroundColor = 'yellow';
                                box.querySelector('.me-4').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                    if(i == 5 || i == 2){
                        if(box.querySelector(`.me-${i}`).textContent == 'O'){
                            vertical8++;
                            if(vertical8 == 3){                                                            
                                insert.appendChild(document.createTextNode('Player O wins!'));
                                box.querySelector('.me-5').style.backgroundColor = 'yellow';
                                box.querySelector('.me-2').style.backgroundColor = 'yellow';
                                box.querySelector('.me-8').style.backgroundColor = 'yellow';
                                isWin = 1;
                                return;
                            }
                        }
                    }
                }
                
            }

        }

    }
    if(draw == 9){
        insert.appendChild(document.createTextNode('DRAW!'));
    }
}
}