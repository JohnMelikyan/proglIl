
function setup()
{
    let socket = io();



   target_x = 0;
   target_y = 0;



    
     
//io.sockets.emit("info", matrix);

    function bodyClick(evt){
       // console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
        target_x = Math.floor(evt.pageX/10-1);
        target_y = Math.floor(evt.pageY/10-1);
        socket.emit("send", sendInfo);
        console.log("Clicked at X: " + target_x + ", Y: " + target_y);
    }



    let _size = 100;
    var kvar;
    var side = 1000 / _size;
    var c1 = 0;
    var c2 = 255;
    var c3 = 0;
    var cout = 0;

    socket.on("info",drawCreatures);






    function drawCreatures(info)
    {
        
        
        sendInfo = {
           target_x:target_x,
           target_y:target_y
       }
       socket.emit("send", sendInfo);
    
        window.onclick = bodyClick;


        c1 = info.c1;
        c2 = info.c2;
        c3 = info.c3;
        cout = info.grassCounter;
        matrix = info.matrix;
        
            frameRate(10);
            createCanvas(matrix[0].length * side, matrix.length * side);
            background('#acacac');
    

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
                else if ( matrix[y][x]._index == 9)
                {
                    if(matrix[y][x].life == true)
                    {
                        fill("#FFE299");
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
       
        


        //console.log(cout);
       
        
    }
   
}