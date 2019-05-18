var socket = io();

io.sockets.emit("info", matrix);

var matrix;

let _size = 100;
var kvar;
var side = 1000 / _size;
var c1 = 0;
var c2 = 255;
var c3 = 0;
var a_c = true;

function setup()
{
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
  
}
function draw()
{
    matrix = info.matrix;
    // guyn@ poxelwu hamar
    if(a_c == true)
    {
        c1+=4;
        if(c1>255){
            c1 = 255;
            c2 +=4;
        }
        if(c2>255){
            c1 = 255;
            c2 +=4;
        }
        if(c3>=255){
            a_c = false;
        }
    }
    else
    {
        c3-=4;
        if(c1<=0){
            c1=0;
            c2-=4;
        }
        if(c2<=0){
            c2=0;
            c3-=4;
        }
        if(c3<=0){
            a_c = true;
        }
    }

    //menak nkarelu hamar for 
    for (var y = 0; y < matrix.length; y+=1)
    {
        for (var x = 0; x < matrix[y].length; x+=1) 
        {
            if ( matrix[y][x]._index == 0)
            { 
                fill("#514001" )
                rect(x * side, y * side, side, side);
            }
            else if ( matrix[y][x]._index == 1)
            {
                   fill(color(c1, c2, c3));
               
                    rect(x * side, y * side, side, side);
            }
             else if ( matrix[y][x]._index == 7.2)
            {
                     fill(color(c1, c2, c3));
                    rect(x * side, y * side, side, side);
            }
             else if ( matrix[y][x]._index == 7.1)
            {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
            }
            else if ( matrix[y][x]._index == 2)
            {
                if(matrix[y][x].life == true)
                {
                    fill("#02f7c2");
                    rect(x * side, y * side, side, side);
                }
            }
            else if ( matrix[y][x]._index == 3 )
            {
                if(matrix[y][x].life == true)
                {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
            }
            else if ( matrix[y][x]._index == 4 )
            {
                if(matrix[y][x].life == true)
                {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }     
            else if ( matrix[y][x]._index == 6 )
            {
                kvar.check();
                    fill("#645f72");
                    rect(x * side, y * side, side, side);
            
            }   
             else if ( matrix[y][x]._index == 7 )
            {
                   
                    fill("#ffe0bd");
                    rect(x * side, y * side, side, side);
            
            }      
        }            
    }
   



}