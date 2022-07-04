function addUser()
{
    user_name=document.getElementById("user_name").value;
    localStorage.getItem("username", user_name);
    window.location="kwitter_room.html";
}