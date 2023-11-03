function toggleTheme(){

    let actualTheme = "";

    if (document.body.className === "dark"){
        actualTheme = "light";
    } else{
        actualTheme = "dark";
    }

    document.body.className = actualTheme;
}