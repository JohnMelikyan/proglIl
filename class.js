class Grass
{
  constructor(x=666, y=666) 
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
        if(this.x + x1 >= 0 && this.x + x1 < matrix[0].length && this.y + y1 >= 0 && this.y + y1 < matrix.length)
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
class GrassEater
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this._index = 2;
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
    var ran;
    if( _arr1[0].length > 0) 
    {    
      ran = Math.floor(Math.random() * _arr1[0].length);
      matrix[_arr1[1][ran]+this.y][this.x+_arr1[0][ran]] = new GrassEater(_arr1[0][ran]+this.x, _arr1[1][ran]+this.y);
      matrix[_arr1[1][ran]+this.y][_arr1[0][ran]+this.x].life = false;
      this.energy = 0;
    }
    else if( _arr0[0].length> 0 )
    {
      ran = Math.floor(Math.random() * _arr0[0].length);
      matrix[_arr0[1][ran]+this.y][this.x+_arr0[0][ran]] = new GrassEater(_arr0[0][ran]+this.x, _arr0[1][ran]+this.y);
      matrix[_arr0[1][ran]+this.y][_arr0[0][ran]+this.x].life = false;
      this.energy = 0;
    }

  }  
  energy_check()
  {
    if(this.energy == 4)
    {
      this.newObj();
    }
  }
  move()
  {
  var _arr0 = this.chooseCell(0);
  var _arr1 = this.chooseCell(1);
  // var _arr2 = this.chooseCell(2); 
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
    if( _arr1[0].length > 0) 
    {
      this.hungry = 0;
      this.energy++;
      ran = Math.floor(Math.random() * _arr1[1].length);
      vx = _arr1[0][ran];
      vy = _arr1[1][ran];
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
class GrassEaterEater
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
class Plague
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
class Zabor
 {
  constructor()
  {
  this._index = 6;
  }
}
class Kvadrat
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
class Human
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
class Null_Obj
{
  constructor()
  {
    this._index = 0;
  }
};//parzapes nkarum e hox
class QuasiGrassEater
{
  constructor()
  {
    this._index = 7.1;
  }
};
class QuasiGrass
{
  constructor()
  {
    this._index = 7.2;
  }
};//QuasiGrass u QuasiGrassEater@ petq en mardu koxic xot kam xotaker nkarelu hamar

