function verificarLogin()
{
	var user1= "admin";
	var pass1= 1234;
	var user2= document.getElementById("user").value;
	var pass2= document.getElementById("pass").value;
	if(user1 == user2 && pass1==pass2)
	{
		location.href = "./html/catas.html";
	}else
	{
		alert("usuario y contraseña incorrectas");
	}
}

async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch(err) {
    
    alert(err);
  }
}

