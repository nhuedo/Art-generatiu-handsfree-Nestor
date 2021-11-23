class Triangle {
  constructor(x1,y1,x2,y2,x3,y3,x1Speed,y1Speed,x2Speed,y2Speed,x3Speed,y3Speed) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x1Speed = x1Speed;
    this.y1Speed = y1Speed;
    this.x2Speed = x2Speed;
    this.y2Speed = y2Speed;
    this.x3Speed = x3Speed;
    this.y3Speed = y3Speed;
  }
  

   moveTriangle() {
      ///////////////////// PUNTO 1//////////////////////
      tri.x1 += tri.x1Speed;
      if (tri.x1 < 0 || tri.x1 > width) {
        tri.x1Speed *= -1;
      }

      tri.y1 += tri.y1Speed;
      if (tri.y1 < 0 || tri.y1 > height) {
        tri.y1Speed *= -1;
      }
      ///////////////////////////////////////////////////////

      ///////////////////// PUNTO 2//////////////////////
      tri.x2 += tri.x2Speed;
      if (tri.x2 < 0 || tri.x2 > width) {
        tri.x2Speed *= -1;
      }

      tri.y2 += tri.y2Speed;
      if (tri.y2 < 0 || tri.y2 > height) {
        tri.y2Speed *= -1;
      }
      ///////////////////////////////////////////////////////

      ///////////////////// PUNTO 3//////////////////////
      tri.x3 += tri.x3Speed;
      if (tri.x3 < 0 || tri.x3 > width) {
        tri.x3Speed *= -1;
      }

      tri.y3 += tri.y3Speed;
      if (tri.y3 < 0 || tri.y3 > height) {
        tri.y3Speed *= -1;

      }
      ///////////////////////////////////////////////////////
    }
}
