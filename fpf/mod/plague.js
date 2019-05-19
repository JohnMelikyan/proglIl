
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

module.exports = class Plague
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this._index = 4;
    this.life = false;
    this.attack_target = 0;
    this.speed = 0;
    this.range = 0;
    this.boom = false;
    this.normal_pop = new Array;
        this.normal_pop[0] = 70;
        this.normal_pop[1] = 20;
        this.normal_pop[2] = 10;//ete normalic tarbervum e harcakvum e dranc vra
  }
  x9_Boom(x,y)
  {
    if(this.boom)
    {
      for(var a = -1;a<2;a++)
      {
        for(var b = -1;b<2;b++)
        {
          if(a==0 && b==0){}
          else
          {
           matrix[this.y+a][this.x+b] = new Null_Obj;
          }
          
        }
      }
    }
    this.boom = false;
  }
  chooseCell(i)
  {
    var found = [ [], [] ];
    for(var x1 = (-this.range); x1 <= this.range; x1++)
    {
      for(var y1 = (-this.range); y1 <= this.range; y1++)
      {
        if (this.x + x1 >= 0 && this.x + x1 < matrix[0].length && this.y + y1 >= 0 && this.y + y1 < matrix.length)
        {
          if(x1 == 0 && y1 == 0){}
          else
          {
            if(matrix[this.y + y1][this.x + x1]._index == i+1)
            {
                  var ps = new Array;
                  ps[0] = x1;
                  ps[1] = y1;
                  found.push(ps);
            }
          }
        }  
      }
    }
    var k = found.length;
    var rn = 0;
    rn = Math.floor(Math.random()*k);
    var a  = found[rn];

    return a;
  }
      
  start_check() 
  {
    var info = new Array;
    for(var i = 0; i<3;i++)
    {
      info[i] = 0;
    }
    for (var y1 = 0; y1 < matrix.length; y1+=1) 
    {
      for (var x1 = 0; x1 < matrix[y1].length; x1+=1) 
      {   
        for(var i =0;i<3;i++)
        {
          if ( matrix[y1][x1]._index == i+1 )
          {
           info[i]++;
          }

        }

      }

    }
    var all = 0;
    for(var i = 0; i<3;i++)
    {
      all+=info[i];
    }
    for(var i = 0; i<3;i++)
    {
      info[i] = 100 * info[i]/all;
    }
    return info;
  }// talis e tokosnerov grass i  grassEateri u grassEaterEater i tokosayin haraberutyun@


  pre()
  {
  var info_ = this.start_check();
  var def = new Array;
  def[0] = info_[0] - this.normal_pop[0];
  def[1] = info_[1] - this.normal_pop[1];
  def[2] = info_[2] - this.normal_pop[2];
  var max__ = Math.max(def[0],def[1],def[2]);
  var ret = new Array;
  for (var i = 0; i < 3; i++) 
  {
    if(def[i] == max__)
    {
      ret[1] =  i;
    }
  } 
  ret[0] = max__;

  return ret;
  }//vercnum e amenamec tarberutyun@ normayic
     
  angry()
  {
   var info__ = this.pre();
   if(info__[0]<10)
   {
      this.range = 3;
   }
   else  if(info__[0]>10 && info__[0]<20)
   {
      this.range = 6;
   }
   else
   {
     this.range = 6;
     this.boom = true;
   }
    this.attack_target = info__[1];
  }//kaxvac tarberutyun@ normayic tarber cevi e ashxatum 

  move()
  {
    var vx;
    var vy;
    var _in  = this.pre();
    this.angry();
    var  _arr0 = this.chooseCell(this.attack_target);
    vx = (-1)*_arr0[0];
    vy = (-1)*_arr0[1];
    if(vx==0 && vy==0){}
    else
    {
      if (this.x - vx >= 0 && this.x - vx < matrix[0].length && this.y - vy >= 0 && this.y - vy < matrix.length && this.life == true)
      {
        matrix[this.y][this.x].life = false;
        matrix[this.y- vy][this.x-vx] = matrix[this.y][this.x];
        matrix[this.y][this.x] = new Null_Obj;
        matrix[this.y- vy][this.x-vx].life = false;
        this.x=this.x-vx;
        this.y=this.y-vy;
        this.x9_Boom(-vx,-vy);
      }
    }  
  }              
};