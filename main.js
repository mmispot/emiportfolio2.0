document.addEventListener("DOMContentLoaded", function (){
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".dropdown-menu");


    burger.addEventListener("click", () => {

        burger.classList.toggle("active");



        const showMenu = menu.classList.contains("show");
        

        if (showMenu){
            menu.classList.remove('slide-in')
            setTimeout(() => menu.classList.remove("show"), 300);

        } else {
            menu.classList.add("show")
            setTimeout(() => menu.classList.add('slide-in'), 10)
        };
    });
    
    function updateDateTime() {
        var now = new Date();
        var dateTimeString = now.toLocaleString();
        document.getElementById('datetime').innerHTML = dateTimeString;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();
});
