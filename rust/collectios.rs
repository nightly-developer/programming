fn main () {
  //bindary search using vector
  let xnum:i32 = 8;
  let mut numbs:Vec<i32> = vec![2,4,6,8,9,10];
  println!("{:?}",numbs);
  for numb in numbs{
    if numb == xnum{
      println!("{:?}",numb);
    }
  } 
  enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
  }
  let row:Vec<SpreadsheetCell> = vec![
    SpreadsheetCell::Int(45),
    SpreadsheetCell::Text(String::from("f")),
    SpreadsheetCell::Float(3.54),
  ];
}