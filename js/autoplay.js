var board = new Array(3);
var turn;

var Cross_Sellected_x;
var Cross_Sellected_y;

var Ball_Sellected_x;
var Ball_Sellected_y;

function ClearCell (x, y){
	board[x][y] = 0;
	cell = document.getElementById("c" + x + y);
	cell.innerHTML = "";
}


function ClearBoard(){
	for (i=0; i<3; i++)
		for (j=0; j<3; j++){
			ClearCell(i, j)
		}
}
setTimeout ("PaintCell", 5000);

function PaintCell (x, y){
    who = document.getElementById("turn");

    //if(turn==ball) who.innerHTML = "Le toca";
    //else who.innerHTML = "<img src='http://www.hipertexto.info/images/engranaj.gif'>";

    cell = document.getElementById("c"+ x + y);
	cell.innerHTML = "<img src=" + turn + ".gif></img>";

	if (turn == "ball"){
		board[x][y] = 1;
		Ball_Sellected_x = x;
		Ball_Sellected_y = y;
	}
	else{
		board[x][y] = 2;
		Cross_Sellected_x = x;
		Cross_Sellected_y = y;
	}

	CheckLine();

	if (turn == "ball") turn = "cross";
	else turn = "ball";
	

}
function CheckCell(x, y){
	crosses = CheckTurn_Count(2);
	if (crosses == 3){
		if (board[x][y] == 2){
			Cross_Sellected_x = x;
			Cross_Sellected_y = y;
			ClearCell(x, y);
		}
	}
	else{
		if (board[x][y] == 0 && DifMov(x, y)) SelectCell(x, y);
	}
}

function SelectCell(x, y){
	PaintCell(x, y);
	SearchMove();
}

function autoplay(){

	hide_message();

	for (i=0; i<3; i++) board[i] = new Array(3);

	turn = "ball";

	Cross_Sellected_x = 4;
	Cross_Sellected_y = 4;

	Ball_Sellected_x = 4;
	Ball_Sellected_y = 4;

	ClearBoard();
	SearchMove();
}
autoplay();
/*
function playerplay(x){
	hide_message();

	Cross_Sellected_x = 4;
	Cross_Sellected_y = 4;

	Ball_Sellected_x = 4;
	Ball_Sellected_y = 4;
	turn = "cross";
	ClearBoard();
    SearchMove(x);

}
var T = 0;

function iniciar(value)
{
    T= value;
	alert(T);
  

	if(T ==1 ){
		hide_message();
		for (i=0; i<3; i++) board[i] = new Array(3);
		playerplay(1);
	}
	if(T ==2){
		for (i=0; i<3; i++) board[i] = new Array(3);
		autoplay(2);
	}
	if(T==0)
	{
		hide_message();
	}
}
*/
hide_message();
//var T = 1;
/**/


/*
board
___________
vacia = 0
bolas = 1
cruz = 2



turn
___________
maquina = ball
humano = cross
*/

/************************************
*			*			*			*
*			*			*			*
*	 c02	*	 c12	*	 c22	*
*			*			*			*
*			*			*			*
*************************************
*			*			*			*
*			*			*			*
*	 c01	*	 c11	*	 c21	*
*			*			*			*
*			*			*			*
*************************************
*			*			*			*
*			*			*			*
*	 c00	*	 c10	*	 c20	*
*			*			*			*
*			*			*			*
************************************/