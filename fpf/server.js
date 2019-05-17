var Grass = require("./mod/grass");
var GrassEater = require("./mod/grasseater.js");
var GrassEaterEater = require("./mod/grasseatereater.js");
var QuasiGrassEater = require("./mod/quasigrasseater.js");
var QuasiGrass = require("./mod/quasigrass.js");
var Human = require("./mod/human.js");
var Kvadrat = require("./mod/kvadrat.js");
var Null_Obj = require("./mod/null_obj.js");
var Zabor = require("./mod/zabor.js");
var Plague = require("./mod/plague.js");



var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


io.on('connection', function (socket) {
    
    socket.on("send message", function (data) {
        
        io.sockets.emit("display message", matrix);
    });
 });
 


let _size = 100;
var matrix = new Array;
for(let i = 0; i < _size; i++)
{
    matrix[i] = new Array;
    for(let j = 0;j < _size; j++)
    {
      matrix[i][j] = new Null_Obj;
    } 
}

module.exports = matrix;
var i = -1;
var _i = 0;
var kvar;
var side = 1000 / _size;
var c1 = 0;
var c2 = 255;
var c3 = 0;
var a_c = true;
var d_l = false;
function setup()
{
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');



    /*
    kvar = new Kvadrat(19,20); // Kanchum mardun u zabor@
    kvar.create();
   */
   // matrix[1][3] = new GrassEater(3,1);
   //matrix[36][52] = new Grass(52,36);
   //matrix[42][10] = new GrassEater(10,42);
   //matrix[20][20] = new Plague(20,20);
   //matrix[42][23] = new Grass(23,42);
  //  matrix[36][7] = new GrassEaterEater(7,36);
    
  
}
function draw()
{
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
                    matrix[y][x].grow_up(0.5);
                    matrix[y][x].newObj();
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
    //metodneri for
    for (var y1 = 0; y1 < matrix.length; y1+=1) 
            {
                for (var x1 = 0; x1 < matrix[y1].length; x1+=1) 
                { 
                   if ( matrix[y1][x1]._index == 2 )
                    {
                        if(matrix[y1][x1].life == true)
                        {
                           matrix[y1][x1].move();
                        }
                       
                    }
                    else if ( matrix[y1][x1]._index == 3 )//anjatum em gishatichi move @
                    {
                        if(matrix[y1][x1].life == true){}
                    }
                    else if ( matrix[y1][x1]._index == 4 )
                    {
                        if(matrix[y1][x1].life == true)
                        {
                                matrix[y1][x1].move();
                        }
                    }
                    else if ( matrix[y1][x1]._index == 7 )
                    {
                        matrix[y1][x1].info_user();
                        if(matrix[y1][x1].life == true )
                        {
                           // kvar.check();

                                //console.log("move call");
                               
                                   //console.log("I dont sleep");
                                   // matrix[y1][x1].its_time_to_die();
                                    matrix[y1][x1].take();
                                    matrix[y1][x1].new_();
                               
                                    matrix[y1][x1].go_home();
                                    matrix[y1][x1].move();
                               
                                
                              
                               // matrix[y1][x1].its_time_to_die();
                               
                             
                         

                        }
                       
                    }
                        
                    }
                   
                }

        // life @ kastil e vor nor stexcac obj.@ chkanchi
        for (var y2 = 0; y2 < matrix.length; y2+=1) 
            {
                for (var x2 = 0; x2 < matrix[y2].length; x2+=1) 
                {   
                     
                   
                   if ( matrix[y2][x2]._index == 2 )
                    {
                        matrix[y2][x2].energy_check();

                        if(matrix[y2][x2].life == false)
                        {
                           matrix[y2][x2].life = true;
                           
                        }
                       
                    }
                     if ( matrix[y2][x2]._index == 3)
                    {
                        matrix[y2][x2].energy_check();

                        if(matrix[y2][x2].life == false)
                        {
                           matrix[y2][x2].life = true;
                           
                        }
                       
                    }
                    if ( matrix[y2][x2]._index == 4)
                    {
                        

                        if(matrix[y2][x2].life == false)
                        {
                           matrix[y2][x2].life = true;
                           
                        }
                       
                    }
                     if ( matrix[y2][x2]._index == 7)
                    {
                        

                        if(matrix[y2][x2].life == false)
                        {
                           matrix[y2][x2].life = true;
                        }
                       
                    }
                        
                    }
                   
                }

}
