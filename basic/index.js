// localStorage.setItem("name", a);
// localStorage.setItem("address", b);
// localStorage.setItem("dev", c);
let tokensample = "afsefrewsgfrgrds23sda";
localStorage.setItem("token", tokensample);
let name = localStorage.getItem("name");
let address = localStorage.getItem("address");
let dev = localStorage.getItem("dev");
let token = localStorage.getItem("token");
console.log(token);
console.log(name);
console.log(address);
console.log(dev);
localStorage.removeItem("token");

// Localstorage
// Set
// get
// remove


// cookie set :
document.cookie = "namess = akash";
document.cookie = "address = dhaka";
// get
function getCookie(key) {
  const cookies = document.cookie.split(";");
  console.log(cookies);
  
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=").map((part) => part.trim());
    if (name === key) return value;
  }
  return null;
}

let name2 = getCookie("namess");
console.log(name2);
