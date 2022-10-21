pub fn run() {
  let username = "jhondoe";
  println!("{}", username);

  let fullname = String::from("Jhon Doe");
  println!("{}", fullname);

  println!("get_username: {}", get_username(fullname));
}

fn get_username(fullname: String) -> String {
  fullname.replace(" ", "_").to_lowercase()
}