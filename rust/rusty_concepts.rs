#[allow(dead_code)]

struct Employee {
    name: String,
    ID: i32,
    experience: bool,
    working: &'static str,
}

struct TupleStruct(i32,i32,f32);

fn hier_employee (name:String,exp:bool,id:i32)->Employee {
    Employee{
        name: name,
        experience: exp,
        ID:id,
        working: "associate"
    }
}
fn main (){
  //match and enum
  let x = 'a';
  match x{
    'a' => println!("its a"),
    _ => println!("its anything")
  }

  enum Color {
    Red,Blue,Green,
  }

  let color = "black";
  match color{
    Color::Red => println!("the color is red"),
    Color::Green => println!("the color is green"),
    Color::Blue => println!("the color is blue"),
    _ => println!("the color is unknown")
  }

  //ownership
  let mut s = String::from("hello there");

    s.push_str(", world");
    println!("{}",s);

    let s1 = String::from ("string1 ");
    let mut s2 = String::from("sting2 ");
    
    s2.push_str(&s1);
    println!("{}",s2);
    println!("{}",first_word(&s));

    //creating struct variable
    let rahul = Employee{
        name: String::from("rahul kumar"),
        experience: true,
        ID: 231,
        working:"tempararly"
    };
    let name = String::from("xyz");
    
    hier_employee(name,false,132);
    
    let rahul_update = Employee {
        name:String::from("rahul"),
        ID:123,
        ..rahul
    };
    println!("{} {}",rahul.name,rahul.working);
    println!("{} {}",rahul_update.name,rahul_update.working);

    let relative_origin = TupleStruct(5,0,2.8);
    println!("co-ordinates: {},{},{}",relative_origin.0,relative_origin.1,relative_origin.2);
}

fn first_word (s: &String) -> usize {
    let bytes = s.as_bytes();
    for (i,&item) in bytes.iter().enumerate (){
        //println!("{}",&item);
        if item == b' '{
            return i;
        }
    }
    s.len()
}