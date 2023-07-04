function buat_login() {
  let elm = document.getElementById("X");
  elm.parentElement.removeChild(elm);

  let p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "SILAHKAN MENDAFTAR";

  let element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  let form = document.createElement("form");
  element.appendChild(form);

  let label = document.createElement("label");
  label.innerHTML = "name";
  form.appendChild(label);

  let input_name = document.createElement("input");
  input_name.type = "text";
  input_name.name = "name";
  input_name.className = "form_login";
  input_name.placeholder = "Nama User..";
  form.appendChild(input_name);

  let label2 = document.createElement("label");
  label2.innerHTML = "handphone";
  form.appendChild(label2);

  let input_handphone = document.createElement("input");
  input_handphone.type = "text";
  input_handphone.name = "handphone";
  input_handphone.className = "form_login";
  input_handphone.placeholder = "Nomor Handphone.";
  form.appendChild(input_handphone);

  let label3 = document.createElement("label");
  label3.innerHTML = "username";
  form.appendChild(label3);

  let input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau email";
  form.appendChild(input_username);

  let label4 = document.createElement("label");
  label4.innerHTML = "password";
  form.appendChild(label4);

  let input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password ..";
  form.appendChild(input_password);

  let tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "DAFTAR SEKARANG";
  form.appendChild(tombol);
}
