//bitwise operations in rust

fn reverse(pair:(i32,bool))->(bool,i32){
  //`let` can be use to bind memebers of tuple to variable
  let (int_param,bool_param) = pair;
  (bool_param,int_param)
}

fn main(){
  println!("0101 AND 0011 is {:04b}",0b0101i32 &  0b0011);

  //Tuples
  let long_tuple = (1u8,2u16,3u32,4u64,
                -1i8,-2i16,-3i32,-4i64,
                0.1f32,0.2f64,'a',true);

  //value can be edxtracted from tuple using tuple index
  println!("long tuple first value: {}",long_tuple.0);

  //tuple can be tuple memebers
  let inner_tuple1 = (1u8,2u16,3u32,4u64);
  let inner_tuple2 = (-1i8,-2i16,-3i32,-4i64);
  let outter_tuple = (inner_tuple1,inner_tuple2);

  println!("first value of outter_tuple is: {:?}",outter_tuple.0);
}