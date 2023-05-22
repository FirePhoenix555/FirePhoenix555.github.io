function close_sidebar() {
    let sidebar = document.getElementById("sidebar");
    // if (sidebar.hidden) sidebar.hidden = false;
    // sidebar.setAttribute("hidden", true);
    sidebar.hidden = !sidebar.hidden;

    let c = document.getElementById("close-sidebar");
    c.innerText = ">> "
}