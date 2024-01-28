fn reverse (pair:(i32,bool))->(bool,i32){
  //let will be use to bind tuple members to other tuple variable
  let (bool_param,int_param) = pair;
  (bool_param,int_param)
}

struct Matrix(f32,f32,f32,f32);

fn main(){
  let matrix = Matrix(1.2,2.4,5.6,0.8);
  println!("{:?}",matrix);
}