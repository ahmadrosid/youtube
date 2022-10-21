pub fn run() {
  // Variable
  let x;
  x = 5;
  println!("{}", x);
  // shadowing
  let x = 42;
  println!("{}", x);

  // to ignore compiler warning, useful when you are in work in progress
  let _y = 10;

  let tuple = ("jhon", 24);
  println!("{}", tuple.0);
  println!("{}", tuple.1);

  let tuple: (&str, u8) = ("jhon", 24);
  println!("{}", tuple.0);
  println!("{}", tuple.1);

  let (name, age) = ("jhon", 17);
  println!("{}", name);
  println!("{}", age);

  let (_, age) = tuple;
  println!("{}", age);

  // Evaluate variable from block
  let sum = {
    let x = 10;
    let y = 200;
    x + y
  };
  println!("sum {}", sum);

  println!("{}", get_name());
  println!("are yo old? {}", is_old(27));

}


// function 
fn get_name() -> String {
  let name = String::from("jhon stone");
  // block, like anonymous function that called immediately
  {
    let username = name.replace(" ", "_");
    println!("get_name {}", username);
  }
  name
}

fn is_old(age: u8) -> bool {
  if age > 40 {
    true
  } else {
    false
  }
}