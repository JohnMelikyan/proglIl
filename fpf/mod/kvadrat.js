/*
var Zabor = require("./mod/zabor.js");
*/
var Grass = require("grass.js");
var GrassEater = require("grasseater.js");
var GrassEaterEater = require("grasseatereater.js");
var QuasiGrassEater = require("quasigrasseater.js");
var QuasiGrass = require("quasigrass.js");
var Human = require("human.js");
var Kvadrat = require("kvadrat.js");
var Null_Obj = require("null_obj.js");
var Zabor = require("zabor.js");
var Plague = require("plague.js");



module.exports = class Kvadrat
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.a = Math.floor(Math.random()*10)+5;//y
    this.b = Math.floor(Math.random()*10)+5;//x
   
  }
  create()
  {
  
    for(var i = 0; i < this.a; i++)
    {
        
          matrix[this.y+i][this.x] = new Zabor;

        
    }
     for(var i = 0; i < this.b; i++)
    {
        
          matrix[this.y][this.x+i] = new Zabor;

        
    }
     for(var i = 0; i < this.b; i++)
    {
        
          matrix[this.y+this.a -1][this.x+i] = new Zabor;

        
    }
     for(var i = 0; i < this.a; i++)
    {
        
          matrix[this.y+i][this.x+this.b] = new Zabor;

        
    }
    matrix[this.y+Math.floor(this.a/2)][this.x+Math.floor(this.b/2)] = new Human(this.x+Math.floor(this.b/2),this.y+Math.floor(this.a/2),this.b,this.a);
  }
  check()
  { 
    //console.log("check_call");
     for(var i = 0; i < this.a; i++)
    {
        if(matrix[this.y+i][this.x]._index == 0 || matrix[this.y+i][this.x]._index == 1 || matrix[this.y+i][this.x]._index == 2)
        {

          matrix[this.y+i][this.x] = new Zabor;
        }

        
    }
     for(var i = 0; i < this.b; i++)
    {
        if(matrix[this.y][this.x+i]._index == 0 || matrix[this.y][this.x+i]== 1 || matrix[this.y][this.x+i]== 2 ){

         matrix[this.y][this.x+i] = new Zabor;
        }

        
    }
     for(var i = 0; i < this.b; i++)
    {
        if(matrix[this.y+this.a-1][this.x+i]._index==0 || matrix[this.y+this.a-1][this.x+i]._index==1 || matrix[this.y+this.a-1][this.x+i]._index==2){
         matrix[this.y+this.a-1][this.x+i] = new Zabor;
        }

        
    }
     for(var i = 0; i < this.a; i++)
    {
        if( matrix[this.y+i][this.x+this.b]._index==0 || matrix[this.y+i][this.x+this.b]._index==1 || matrix[this.y+i][this.x+this.b]._index==2){
          matrix[this.y+i][this.x+this.b] = new Zabor;
        }
    }
  }
};