var Null_Obj = require("./null_obj.js");



module.exports = class Player
 {
  constructor(x,y,t_x,t_y)
  {
  this.x = x;
  this.y = y;
  this.t_x = t_x;
  this.t_y = t_y;
  this.life = true;
  this._index = 9;
  }
  move()
  {
    var d_x  = this.t_x - this.x;
    var d_y  = this.t_y - this.y;

    if(this.life){


        if(Math.abs(d_x)>Math.abs(d_y))
        {
          if(d_x>0){
            matrix[this.y][this.x].life = false;
            matrix[this.y][this.x+1] = matrix[this.y][this.x];
            matrix[this.y][this.x] = new Null_Obj;
            matrix[this.y][this.x+1].x++;
           
          }
          else{
            matrix[this.y][this.x].life = false;
            matrix[this.y][this.x-1] = matrix[this.y][this.x];
            matrix[this.y][this.x] = new Null_Obj;
            matrix[this.y][this.x-1].x--;
           
          }
        }
        else
        {
          if(d_y>0){
            matrix[this.y][this.x].life = false;
            matrix[this.y+1][this.x] = matrix[this.y][this.x];
            matrix[this.y][this.x] = new Null_Obj;
            matrix[this.y+1][this.x].y++;
            
          }else{
            matrix[this.y][this.x].life = false;
            matrix[this.y-1][this.x] = matrix[this.y][this.x];
            matrix[this.y][this.x] = new Null_Obj;
            matrix[this.y-1][this.x].y--;
           
          }

        }
      this.life = false;
    }
  }
  get_target(at_x,at_y)
  {
    this.t_x = at_x;
    this.t_y = at_y;
  }
   
};