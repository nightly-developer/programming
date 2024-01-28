use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("Guess the number");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("the secret number is: {secret_number}");
    
    loop {
    println!("enter your number");
        
        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("failed to read line");
        println!("you guessed: {guess}");

        let guess: u32 = match guess.trim().parse(){
            Ok(num) => num,
            Err(_) => continue,
        };

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too Small"),
            Ordering::Greater => println!("Too Big"),
            Ordering::Equal => {
                println!("You Won!");
                break;
            }
        }
    }
}
