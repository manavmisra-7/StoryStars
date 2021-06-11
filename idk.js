function redirect () {
var names = document.getElementById("username").value;
localStorage.setItem("name",names);
window.location="home_page.html";
}
function logout() {
    localStorage.removeItem("name");
    window.location = "index.html";
}
