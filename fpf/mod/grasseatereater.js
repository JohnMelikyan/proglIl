/*
var GrassEater = require("./mod/grasseater.js");

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

module.exports = class GrassEaterEater
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this._index = 3;
    this.life = true;
    this.hungry = 0;
    this.energy = 0;         
  }
  chooseCell(i)
  {
    var found = [ [], [] ];
    for(var x1=-1; x1<2; x1++)
    {
      for(var y1=-1; y1<2; y1++)
      {
        if (this.x + x1 >= 0 && this.x + x1 < matrix[0].length && this.y + y1 >= 0 && this.y + y1 < matrix.length)
        {
          if(x1 == 0 && y1 == 0){}
          else
          {
              if(matrix[this.y + y1][this.x + x1]._index == i)
            {
                found[0].push(x1);
                found[1].push(y1);
            }
          }
        }  
      }
    }
    return found;
  }
  newObj()
  {
  var _arr0 = this.chooseCell(0);
  var _arr1 = this.chooseCell(1);
  var _arr2 = this.chooseCell(2);
  var ran;
    if( _arr2[0].length > 0) 
    {
      ran = Math.floor(Math.random() * _arr2[0].length);
      matrix[_arr2[1][ran]+this.y][this.x+_arr2[0][ran]] = new GrassEaterEater(_arr2[0][ran]+this.x, _arr2[1][ran]+this.y);
      matrix[_arr2[1][ran]+this.y][_arr2[0][ran]+this.x].life = false;
      this.energy = 0;
    }
    else if( _arr1[0].length > 0) 
    {
      ran = Math.floor(Math.random() * _arr1[0].length);
      matrix[_arr1[1][ran]+this.y][this.x+_arr1[0][ran]] = new GrassEaterEater(_arr1[0][ran]+this.x, _arr1[1][ran]+this.y);
      matrix[_arr1[1][ran]+this.y][_arr1[0][ran]+this.x].life = false;
      this.energy = 0;
    }
    else if( _arr0[0].length> 0)
    {
      ran = Math.floor(Math.random() * _arr0[0].length);
      matrix[_arr0[1][ran]+this.y][this.x+_arr0[0][ran]] = new GrassEater(_arr0[0][ran]+this.x, _arr0[1][ran]+this.y);
      matrix[_arr0[1][ran]+this.y][_arr0[0][ran]+this.x].life = false;
      this.energy = 0;

    }  
  }   
  energy_check()
  {
    if(this.energy == 3)
    {
      this.newObj();
    }
  }
  move()
  {
  var _arr0 = this.chooseCell(0);
  var _arr1 = this.chooseCell(1);
  var _arr2 = this.chooseCell(2); 
  var ran  = 0;
  var vx  = 0;
  var vy = 0;
  this.hungry--;
  if(this.hungry <= -100)
  {
    matrix[this.y][this.x] = new Null_Obj;
  }
  else
  {
    if( _arr2[0].length > 0) 
    {
      this.hungry = 0;
      this.energy++;
      ran = Math.floor(Math.random() * _arr1[1].length);
      vx = _arr2[0][ran];
      vy = _arr2[1][ran];
      vx *=-1;
      vy*=-1;
    }
    else if( _arr1[0].length == 0 && _arr0[0].length> 0 )
    {
      this.energy = 0;
      ran = Math.floor(Math.random() * _arr0[0].length);
      vx = _arr0[0][ran];
      vy = _arr0[1][ran];
      vx *=-1;
      vy*=-1;
    }
    else if( _arr1[0].length > 0) 
    {
      ran = Math.floor(Math.random() * _arr1[1].length);
      vx = _arr1[0][ran];
      vy = _arr1[1][ran];
      vx *=-1;
      vy*=-1;
    }
  }  
    if (this.x - vx >= 0 && this.x - vx < matrix[0].length && this.y - vy >= 0 && this.y - vy < matrix.length && this.life == true)
    {
      matrix[this.y][this.x].life = false;
      matrix[this.y- vy][this.x-vx] = matrix[this.y][this.x];
      matrix[this.y][this.x] = new Null_Obj;
      matrix[this.y- vy][this.x-vx].life = false;
      this.x=this.x-vx;
      this.y=this.y-vy;
    } 
  } 
};