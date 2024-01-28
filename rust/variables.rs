#[allow(unused_variables)]

fn main() {
    const PI:f64 = 3.1451;
    println!("pi:{}",PI);

    let x:u32 = 5;
    let mut y = 8;
    let z:f32 = 3.5;
    println!("y:{}",y);

    let x =9;
    let x = -3;
    let mut x = 2;
    println!("mut x:{}",x);
    let x = -15;
    println!("x:{}",x);

    let y = "mut redefine";
    println!("y:{}",y);

    let mut y = 78;
    println!("y:{}",y);

    y = 0;
    println!("y:{}",y);

    {
        let z = z + 3.4;
        println!("z:{}",z);
    }
    let x = "redefine";
    
    println!("x:{} y:{} z:{}",x,y,z);
}
