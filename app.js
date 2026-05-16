
const GAS_URL = "https://script.google.com/macros/s/AKfycbw7mtiLRNBdcY_boO-6D--U0xwFSP7JKUelZkrvKQj64JwWuRpxgOmnO58x0AvMphV4/exec";

// ================= LOGIN =================
async function login(){

  const res = await fetch(GAS_URL, {
    method:"POST",
    body: JSON.stringify({
      action:"login",
      username: u.value,
      password: p.value
    })
  });

  const data = await res.json();

  if(data.status){
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href="dashboard.html";
  }else{
    alert("Invalid login");
  }
}

// ================= REGISTER =================
async function register(){

  await fetch(GAS_URL,{
    method:"POST",
    body: JSON.stringify({
      action:"register",
      name:n.value,
      username:u.value,
      password:p.value
    })
  });

  alert("Registered!");
  window.location.href="index.html";
}
