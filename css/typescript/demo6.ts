class Demo9
{
    public name = "Thanesh"
    //private salary= 50000; it will be only for sinlge class 
}
class Demo10 extends Demo9
{

    constructor()
    {
        super();
        console.log("Name is : "+this.name)
        //console.log("Salary : "+ this.salary)
    }

}
var d1= new Demo10();