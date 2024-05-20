document.addEventListener("DOMContentLoaded", function (){
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".dropdown-menu");

// Mount an EventListener to the DOM that waits for a click on the burger
    burger.addEventListener("click", () => {
        // Toggle the class on the burger element on a click Event
        burger.classList.toggle("active");

        // showMenu is a type boolean variable ( True or false ) which you can see when you hover over it
        // showMenu is True if the element has a class called "show" 
        const showMenu = menu.classList.contains("show");
        
        // Based on the value of showMenu it will toggle the classes on the menu for animations
        // The setTimeout() Function is used to well.. set a timeout :P, otherwise the visibility would be toggled before the animation has finished.
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