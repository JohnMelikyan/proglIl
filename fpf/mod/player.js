
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
    var d_x  = t_x - x;
    var d_y  = t_y - y;

    if(d_x>d_y)
    {
      matrix[this.y+1][this.x] = new Player(x,y,t_x,t_y);
      
    }



  }

};