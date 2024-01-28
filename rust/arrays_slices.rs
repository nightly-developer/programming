use std::mem;

//funtion to borrow slice
fn analyze_slice (slice:&[i32]){
  println!("first element of slice is: {}",slice[0]);
  println!("last element of slice is: {}",slice[slice.len()-1]);
}

fn main (){
  println!("Hello world");

  //fixed size array 
  let arr1: [i32;4] = [1,2,3,6];

  //array with all same elements 
  let arr2: [i32;500] = [3;500];

  //printing array
  println!("arr1 first element is: {}",arr1[0]);
  println!("length of arr2 is: {}",arr2.len());

  //arrays are stacked allocated 
  println!("arr2 occupies {} bytes",mem::size_of_val(&arr2));

  //array can be automatically borrowed as slices
  println!("borrow whole array as slice");
  analyze_slice(&arr1);

  //slices can point to art of an array 
  //they are of the form [starting_idex..ending_index]
  println!("borrow sectiron of the array as slice");
  analyze_slice(&arr1[1..3]);

  //Example of empty slice `&[]`
  let empty_arr: [u32;0] = [];
  assert_eq!(&empty_arr,&[]); 
  assert_eq!(&empty_arr,&[][..]);//smae but more verbose

  //array can be safely access using `.get` which returns `option`
  for i in 0..arr1.len()+1 {//exceed one element
    match arr1.get(i){
      Some(arr_el) => println!("{}:{}",i,arr_el),
      None => println!("out of range")
    }
  } 
}

