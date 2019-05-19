/*
var Null_Obj = require("./mod/null_obj.js");
*/
var Grass = require("./grass");
var GrassEater = require("./grasseater.js");
var GrassEaterEater = require("./grasseatereater.js");
var QuasiGrassEater = require("./quasigrasseater.js");
var QuasiGrass = require("./quasigrass.js");
var Human = require("./human.js");
var Kvadrat = require("./kvadrat.js");
var Null_Obj = require("./null_obj.js");
var Zabor = require("./zabor.js");
var Plague = require("./plague.js");

var matrix = require("../server.js");

module.exports = class Grass
{
  constructor(x,y) 
  {
      this.x = x;
      this.y = y;
      this._index = 1;
      this.multiply = 0;
      
     
  }
  chooseCell()
  {
    var found = [ [], [] ];        
    for(var x1=-1; x1<2; x1++)
    {
      for(var y1=-1; y1<2; y1++)
      {
        if(this.x + x1 >= 0 && this.x + x1 < 100 && this.y + y1 >= 0 && this.y + y1 < 100)
        {
          if(x1 == 0 && y1 == 0){}
          else
          {
              if(matrix[this.y + y1][this.x + x1]._index == 0)
              {
                found[0].push(this.x + x1);
                found[1].push(this.y + y1);
              }
          }
        }  
      }
    }
      return found;
  }
  newObj()
  {
    if(this.multiply >= 6)
    {
      var _arr = this.chooseCell();
      var ran = Math.floor(Math.random() * _arr[0].length);
      if( _arr[0].length >0)
      {
          matrix[_arr[1][ran]][_arr[0][ran]] = new Grass(_arr[0][ran], _arr[1][ran]);
          this.multiply = 0;
      }
    }
  }
  grow_up(speed)
  {
    this.multiply+=speed;
  }
};