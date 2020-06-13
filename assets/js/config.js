$(document).ready(() => {
    //$('#navbar').css('width', parseInt($('#navbar-fixed').css('width'))+'px');
    //$('#navbar').css('height', parseInt($('#navbar-fixed').css('height'))+'px');

    /*$(this).resize(() => {
        $('#navbar').css('width', parseInt($('#navbar-fixed').css('width'))+'px');
        $('#navbar').css('height', parseInt($('#navbar-fixed').css('height'))+'px');
    });*/

    /*let currentDir = window.location.pathname;
    let route = currentDir.substring(0, currentDir.lastIndexOf('/'));

    if (route === '/pages') {
        $('nav').load('../components/navbar.html');
        $('footer').load('../components/footer.html');
    } else {
        $('nav').load('components/navbar.html');
        $('footer').load('components/footer.html');
    }*/

    AOS.init({
        once: true,
        offset: 150,
        duration: 1000
    });
    AOS.refreshHard();
    
    //Get the button:
    mybutton = document.getElementById("goToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener('click', (e) => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});

