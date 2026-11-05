// localStorage.setItem("token", "myValue");

let token = localStorage.getItem("token");
console.log(token);

if (token) {
  console.log("User Login Ace");
} else {
  console.log("User Login Nai");
}
