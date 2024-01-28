#[derive(Debug)]

struct SomeStruct {
  num: i32,
}
fn main() {
  println!("{0},bananas,{1},are my favouraite fruits but {1} is most","apple","oragne");
  
  //As can naed arguments
  println!("in web develpment we have {front},{back} & {full} developers",
          front="frontend",back="backend",full="full stack");

    //Different formatting can be invoked by specifying the format 
    let some_struct: SomeStruct = SomeStruct{num: 4};
    println!("{}",some_struct.num);
}