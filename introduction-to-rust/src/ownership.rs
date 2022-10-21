pub fn run() {
  let age = String::from("24");
  println!("{}", get_age_str(age));
  // println!("{}", age); // can not borrow after move
}

fn get_age_str(age: String) -> String {
  format!("{} Years old", age)
  // ownership dropped here
}