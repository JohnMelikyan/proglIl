var Grass = require("./mod/grass.js");
var GrassEater = require("./mod/grasseater.js");
var GrassEaterEater = require("./mod/grasseatereater.js");
var QuasiGrassEater = require("./mod/quasigrasseater.js");
var QuasiGrass = require("./mod/quasigrass.js");
var Human = require("./mod/human.js");
var Kvadrat = require("./mod/kvadrat.js");
var Null_Obj = require("./mod/null_obj.js");
var Zabor = require("./mod/zabor.js");




module.exports = class Human
{
  constructor(x,y,zabor_x,zabor_y)
  {
    this.x=x;
    this.y=y;
    this.zabor_x = zabor_x;
    this.zabor_y = zabor_y;
    this.cord_x = x-Math.floor(zabor_x/2);
    this.cord_y = y-Math.floor(zabor_y/2);
    this._index = 7;
    this.hp = 100;
    this.animal = false;
    this.grass = false;
    this.life = true;
    this.t_x = this.x;
    this.t_y = this.y;
  }
  scan(i)
  {
    var _min = 20000000;
        for (var y1 = 0; y1 < matrix.length; y1+=1) 
        {
            for (var x1 = 0; x1 < matrix[y1].length; x1+=1) 
            {
                 if ( matrix[y1][x1]._index == i && (this.x - x1)*(this.x - x1) + (this.y-y1)*(this.y-y1) <= _min )
                {
                  _min  = (this.x - x1)*(this.x - x1) + (this.y-y1)*(this.y-y1);
                  this.t_x = Math.floor(x1);
                  this.t_y = Math.floor(y1);
                }      
            }
        }
        
  }
  goto(a,b)
  {
    var _min = 2000000;
    var cord  = new Array;
      for(var j = -1;j<2;j++)
      {
         for(var i = -1;i<2;i++)
         {
            if( (a-this.x-i)*(a-this.x-i)+(b-this.y-j)*(b-this.y-j) <= _min )
            {
              _min  = (a-this.x-i)*(a-this.x-i)+(b-this.y-j)*(b-this.y-j);
              cord[0] = i;
              cord[1] = j; 
            }
         }
      }
    return cord;
  }
  move()
  {
    var vx;
    var vy;
    this.info_user();
    var  _arr0 = this.goto(this.t_x,this.t_y);
    this.go_home();
    vx = (-1)*_arr0[0];
    vy = (-1)*_arr0[1];
    if(vx==0 && vy==0){}
    else
    { if (this.x - vx >= 0 && this.x - vx < matrix[0].length && this.y - vy >= 0 && this.y - vy < matrix.length && this.life == true)
                {
                      matrix[this.y][this.x].life = false;
                      if(this.animal == true)
                      {
                          matrix[this.y+1][this.x] = new Null_Obj;
                          
                      }
                        if(this.grass == true)
                      {
                          matrix[this.y][this.x+1] = new Null_Obj;
                        
                      }
                      if(matrix[this.y- vy][this.x-vx]._index == 3)
                      {
                          this.hp-= 20;
                          console.log(this.hp);
                      }
                      
                      matrix[this.y- vy][this.x-vx] = matrix[this.y][this.x];
                    
                      matrix[this.y][this.x] = new Null_Obj;
                      matrix[this.y- vy][this.x-vx].life = false;
                      this.x=this.x-vx;
                      this.y=this.y-vy;
                      if( this.animal == true)
                      {
                          matrix[this.y+1][this.x] = new QuasiGrassEater();
                      }
                        if( this.grass == true)
                      {
                          matrix[this.y][this.x+1] = new QuasiGrass();
                      }
                    
                } 
    }
}
  check_farm()
  {
    var information = new Array;
    for(var i =0;i<7;i++){
      information[i]=0;
    }
    for(var j =0;j<this.zabor_y;j++)
    {
      for(var i = 0;i<this.zabor_x;i++)
      {
        if(matrix[this.cord_y+j][this.cord_x+i]._index == 1)
        {
          information[0]++;
        }
        else if(matrix[j+this.cord_y][i+this.cord_x]._index == 2)
        {
          information[1]++;
        }
        else if(matrix[j+this.cord_y][i+this.cord_x]._index == 7)
        {
          information[2]++;
          information[5] = i+this.cord_x;
          information[6] = j+this.cord_y;
        }
        else if(matrix[j+this.cord_y][i+this.cord_x]._index == 7.1)
        {
          information[3]++;
        }
        else if(matrix[j+this.cord_y][i+this.cord_x]._index == 7.2)
        {
          information[4]++;
        }
      }
    }
    return information;
  }
  info_user()
  {
    var k = this.check_farm();
    if(k[0]>0 && k[1]>0)
    {
      this.t_x = this.x;
      this.t_y = this.y;
    }
    else if(k[0]<=0 && this.grass == false)
    {
      this.scan(1);
    }
    else if(k[1]<=0 && this.animal == false && k[0]>1 )
    {
      this.scan(2);
    }
  }
  fight()
  {
    for(var j = -1; j < 2; j++)
    {
       for(var i = -1; i < 2; i++)
       {
          if(i==j){}
          else
          {
            if(matrix[this.y+j][this.x+i]._index == 3)
            {
              this.hp -= 1;
              matrix[this.y+j][this.x+i]
              
            }
          }
       } 
       return true;
    }



  }
  its_time_to_die()
  {
    if(this.hp>0)
    {
      console.log(this.hp);
    }
    else
    {
      matrix[this.y][this.x] = new Null_Obj;
    }
  }
  take(i)
  {
  if(this.animal == false && this.grass == false)
   {
    if((this.x-this.t_x)*(this.x-this.t_x)+(this.y-this.t_y)*(this.x-this.t_y)<=2)
    {
       if(matrix[this.t_y][this.t_x]._index == 1 && i ==1)
      {
        matrix[this.y][this.x].grass = true;

              matrix[this.t_y][this.t_x] = new Null_Obj;
              this.go_home();
      }
     if(matrix[this.t_y][this.t_x]._index == 2 && i ==2)
      {
        matrix[this.y][this.x].animal = true;
              matrix[this.t_y][this.t_x] = new Null_Obj;
              this.go_home();
      }
    }
}
  }
  go_home()
  {
    if(this.animal==true || this.grass==true)
    {
      this.t_x = this.cord_x+1;
      this.t_y = this.cord_y+1;
     
    }
  }
  new_()
  {
    if(this.y == this.cord_y+1 && this.x == this.cord_x+1)
    {
      if(this.animal == true)
      {
             matrix[this.y][this.x+1] = new Null_Obj;
            matrix[this.y][this.x+1] = new GrassEater(this.x+1,this.y);
             this.animal=false;   
      }
      else if(this.grass==true)
      {
        matrix[this.y][this.x+1] = new Null_Obj;
         matrix[this.y][this.x+2] = new Grass(this.x+2,this.y);
        this.grass = false;
        
      }
    }
  }
};