function openNav(){
    document.body.style.overflow = "hidden"; //Disable scrolling on main page.
    
    var sidebar = document.getElementById("rightnav");
    
    sidebar.style.height = "100%";
}

function closeNav(){
    document.body.style.overflow = "scroll"; //Enable scrolling on main page.
    
    var sidebar = document.getElementById("rightnav");
    
    sidebar.style.height = "0";
}
