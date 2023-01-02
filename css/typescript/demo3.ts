class A
{
    a=100;
}
class B  extends A 
{
     b1=200;
    constructor(){
        super();
        console.log("B :"+this.b1)
        console.log("A :"+this.a)
    }
}
var b = new B();
// class X
// {
    // muiltlevel 
// }
// class Y  extends X 
// {

// }
// class Z extends Y 
// {

// }

//class X 
{


}
//class Y 
{

}
// class Z extends Y,X
// {
// multiple inheritance will not acceptatable 

// }