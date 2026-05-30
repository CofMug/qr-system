const GAS_URL = "https://script.google.com/macros/s/AKfycbw7mtiLRNBdcY_boO-6D--U0xwFSP7JKUelZkrvKQj64JwWuRpxgOmnO58x0AvMphV4/exec";

// ================= LOGIN =================
async function loginUser(){

  const res = await fetch(GAS_URL,{
    method:"POST",
    body: JSON.stringify({
      action:"login",
      username: document.getElementById("u").value,
      password: document.getElementById("p").value
    })
  });

  const data = await res.json();

  if(data.status){

    localStorage.setItem("user", JSON.stringify(data));

    window.location.href = "dashboard.html";

  }else{
    alert("Invalid login");
  }
}

// ================= REGISTER =================
async function registerUser(){

  const res = await fetch(GAS_URL,{
    method:"POST",
    body: JSON.stringify({
      action:"register",
      name: document.getElementById("n").value,
      username: document.getElementById("u").value,
      password: document.getElementById("p").value
    })
  });

  const data = await res.json();

  if(data.status){
    alert("Account created!");
    window.location.href = "index.html";
  }else{
    alert(data.message || "Registration failed");
  }
}
