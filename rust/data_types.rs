
    //primitive datatypes are basic types used to declare variable
    // in rust we have 2 types of primitive data-types
    //1. scalar: have finite value following some scale 
    //can be compared to other value as either equal, greater or less
    //ex. integer (uint/int), float, boolean, character/char
    
    //2. compound: compound of primitive data types
    //ex. array, tuple

fn main() {
    // scalar primitive data-types 
    let weight = 78; //int
    let height = 5.4; //float
    let healthy = true; //bool
    let blood_grp = 'A'; //char

    println!("weight:{}",weight);
    println!("height:{}",height);
    println!("healthy:{}",healthy);
    println!("blood_grp:{}",blood_grp);

    //scalar compound data-types
    //tuples
    let mut report: (i32,f64,bool,char) = (weight,height,healthy,blood_grp);
    let ideal_report: (i32,f32,bool,char) = (65,5.8,true,'O');

    //accesing tuples
    println!("Ideal Report");
    println!("weight:{}",ideal_report.0);
    println!("height:{}",ideal_report.1);
    println!("healthy:{}",ideal_report.2);
    println!("blood_grp:{}",ideal_report.3);

    //mutating value of tuple
    println!("After working-out");
    report.0 = 70;
    report.1 = 5.4;
    println!("weight:{}",ideal_report.0);
    println!("height:{}",ideal_report.1);

    //arrays 
    //dtata-type of all array elements must be same 
    let arr = [1,2,4,6,8]; //implicitly defing array with same dat-type
    
    //explicitly initialize array
    let array: [i64;5] = [265,276,257,5523,36345];

    //accessing array elements
    println!("{}",arr[4]);

    use std::io;
    //creaating mutable sting
    let mut input = String::new();

    //radining input with readline and assiging it to 'input' variable
    io::stdin().read_line(&mut input).expect("failed to read line");
    
    println!("{}",input); //printing input value
    println!("ref {}",&input); //printing with ref
}
