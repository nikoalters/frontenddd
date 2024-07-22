function loguear()
{

    let user=document .getElementById("usuario").value;
    let pass=document.getElementById("contraseña").value;
    if(user=="admin" && pass=="admin")
    {
        window.location="admin.html";
    }
    else
    {
        alert("inicio de session correcto.");
        window.location="compras.html";
    }
}