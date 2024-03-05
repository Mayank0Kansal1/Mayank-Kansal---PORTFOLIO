// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });


    // sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

//  Title changer 

window.onload = function () {

    var pageTitle = document.title;
    var attentionMessage = '*Come Back : !';
    var blinkEvent = null;

    document.addEventListener('visibilitychange', function (e) {
        var isPageActive = !document.hidden;

        if (!isPageActive) {
            blink();
        } else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });

    function blink() {
        blinkEvent = setInterval(function () {
            if (document.title === attentionMessage) {
                document.title = pageTitle;
            } else {
                document.title = attentionMessage;
            }
        }, 100);
    }
};

//    Change copyright to current year

const year = document.querySelector('.footer-text p');

const d = new Date();
let currentYear = d.getFullYear();

year.innerHTML = `Copyright &copy; ${currentYear}  | All Rights Reserved | Designed <i class="fa fa-heart pulse"></i> by <a title="Linkedin"  href="https://www.linkedin.com/in/mayank-kansal-a062752a7/"> Mayank Kansal </a>

<span class="animate scroll" style="--i:1"></span>`;