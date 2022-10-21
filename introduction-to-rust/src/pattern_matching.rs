pub fn run() {
  let user = get_user_from_http();
  match user {
      Some(val) => println!("{}", val),
      None => println!("User not found.")
  };

  let age = get_age_user();
  match age {
    Err(msg) => println!("{}", msg),
    Ok(val) => println!("{}", val)
  }

  println!("{:?}", format_slug(None));
  println!("{:?}", get_age_user());
}

fn get_user_from_http() -> Option<String> {
  None
}

fn get_age_user() -> Result<usize, String> {
  Err("Failed to get user".to_string())
}

fn format_slug(username: Option<String>) -> Option<String> {
  Some(username?.replace(" ", "-"))
}