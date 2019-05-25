var Grass = require("./mod/grass.js");
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

let grassHashiv = 2;

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


/**/



let _size = 100;
matrix = new Array;
for(let i = 0; i < _size; i++)
{
    matrix[i] = new Array;
    for(let j = 0;j < _size; j++)
    {
        matrix[i][j] = new Null_Obj;
    } 
}



//test
matrix[1][1] = new Grass(1,1);

//test


var side = 1000 / _size;

var a_c = true;
var c1 = 0;
var c2 = 255;
var c3 = 0;
let target_x = 0;
let target_y = 0; 
    
   


//start 


    /*
    kvar = new Kvadrat(19,20); // Kanchum mardun u zabor@
    kvar.create();
   */
    //matrix[1][3] = new GrassEater(3,1);
   //matrix[36][52] = new Grass(52,36);
   //matrix[42][10] = new GrassEater(10,42);
   //matrix[20][20] = new Plague(20,20);
   //matrix[42][23] = new Grass(23,42);
  //  matrix[36][7] = new GrassEaterEater(7,36);
    
    io.on("send",function(){
        socket.on;
        target_x = send.target_x;
        target_y = send.target_y;
    });

function _logic()
{
    

    console.log(target_x,target_y);
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
    //metodneri for
    for (var y11 = 0; y11 < matrix.length; y11+=1) 
            {
                for (var x11 = 0; x11 < matrix[y11].length; x11+=1) 
                { 
                    if ( matrix[y11][x11]._index == 1)
                    {  
                        var grow_up_speed = 0.5;
                        if(c1>122){
                            grow_up_speed = 0.5;
                        }
                        else
                        {
                            grow_up_speed = 1;
                        }
                            matrix[y11][x11].grow_up(1);
                            if(matrix[y11][x11].newObj()){
                                
                                grassHashiv++;
                            }   
                    }
                    else if ( matrix[y11][x11]._index == 2 )
                    {
                            if(matrix[y11][x11].life == true)
                            {
                            matrix[y11][x11].move();
                            }
                       
                    }
                    else if ( matrix[y11][x11]._index == 3 )//anjatum em gishatichi move @
                    {
                            if(matrix[y11][x11].life == true){}
                    }
                    else if ( matrix[y11][x11]._index == 4 )
                    {
                            if(matrix[y11][x11].life == true)
                            {
                            matrix[y11][x11].move();
                            }
                    }
                    else if ( matrix[y11][x11]._index == 7 )
                    {
                            matrix[y11][x11].info_user();
                            if(matrix[y11][x11].life == true )
                            {
                            // kvar.check();

                                    //console.log("move call");
                                
                                    //console.log("I dont sleep");
                                    // matrix[y1][x1].its_time_to_die();
                                        matrix[y11][x11].take();
                                        matrix[y11][x11].new_();
                                
                                        matrix[y11][x11].go_home();
                                        matrix[y11][x11].move();
                                
                                    
                                
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
                let sendData = {
                    matrix: matrix,
                    grassCounter: grassHashiv,
                    c1:c1,c2:c2,c3:c3
                }
                io.sockets.emit("info", sendData);
                console.log(grassHashiv);

}


setInterval(_logic, 1000);