$('#Inspiring_slider').owlCarousel({
    loop: true,
    autoplay: true,
    items: 3,
    dots: true,
    margin: 15,
    nav: false,
    responsiveClass: true,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 1,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveRefreshRate: 100,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        767: {
            items: 2,
        },
        991: {
            items: 3,
        }
    }
});
$('#testimonial_slider').owlCarousel({
    loop: true,
    autoplay: true,
    items: 2,
    dots: false,
    center: true,
    margin: 50,
    nav: false,
    responsiveClass: true,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 1,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveRefreshRate: 100,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        767: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    }
});
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 120) {
        $('.header-area').addClass("background-header");
    } else {
        $('.header-area').removeClass("background-header");
    }
});

(function($) {
    "use strict";

    // Mobile menu dropdown
    $(".submenu").on("click", function() {
        var width = $(window).width();
        if (width < 992) {
            $(".submenu ul").toggleClass("active");
        }
    });

    // Scroll animation init
    window.sr = new scrollReveal();

    // Menu Dropdown Toggle
    if ($(".menu-trigger").length) {
        $(".menu-trigger").on("click", function() {
            $(this).toggleClass("active");
            $(".header-area .nav").slideToggle(200);
        });
    }

    // Menu elevator animation
    $("a[href*=\\#]:not([href=\\#])").on("click", function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                var width = $(window).width();
                if (width < 991) {
                    $(".menu-trigger").removeClass("active");
                    $(".header-area .nav").slideUp(200);
                }
                $("html,body").animate({
                        scrollTop: target.offset().top - 80
                    },
                    700
                );
                return false;
            }
        }
    });

    $(document).ready(function() {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on("click", function(e) {
            e.preventDefault();
            $(document).off("scroll");

            $("a").each(function() {
                $(this).removeClass("active");
            });
            $(this).addClass("active");

            var target = this.hash,
                menu = target;
            var target = $(this.hash);
            $("html, body")
                .stop()
                .animate({
                        scrollTop: target.offset().top - 79
                    },
                    500,
                    "swing",
                    function() {
                        window.location.hash = target;
                        $(document).on("scroll", onScroll);
                    }
                );
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $(".nav a").each(function() {
            var currLink = $(this);

            try {
                var refElement = $(currLink.attr("href"));
                if (
                    refElement.position().top <= scrollPos &&
                    refElement.position().top + refElement.height() > scrollPos
                ) {
                    $(".nav ul li a").removeClass("active");
                    currLink.addClass("active");
                } else {
                    currLink.removeClass("active");
                }
            } catch (e) {
                // Ignore href='javascript:;'
            }
        });
    }

    const Accordion = {
        settings: {
            // Expand the first item by default
            first_expanded: false,
            // Allow items to be toggled independently
            toggle: false
        },

        openAccordion: function(toggle, content) {
            if (content.children.length) {
                toggle.classList.add("is-open");
                let final_height = Math.floor(content.children[0].offsetHeight);
                content.style.height = final_height + "px";
            }
        },

        closeAccordion: function(toggle, content) {
            toggle.classList.remove("is-open");
            content.style.height = 0;
        },

        init: function(el) {
            const _this = this;

            // Override default settings with classes
            let is_first_expanded = _this.settings.first_expanded;
            if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
            let is_toggle = _this.settings.toggle;
            if (el.classList.contains("is-toggle")) is_toggle = true;

            // Loop through the accordion's sections and set up the click behavior
            const sections = el.getElementsByClassName("accordion");
            const all_toggles = el.getElementsByClassName("accordion-head");
            const all_contents = el.getElementsByClassName("accordion-body");
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const toggle = all_toggles[i];
                const content = all_contents[i];

                // Click behavior
                toggle.addEventListener("click", function(e) {
                    if (!is_toggle) {
                        // Hide all content areas first
                        for (let a = 0; a < all_contents.length; a++) {
                            _this.closeAccordion(all_toggles[a], all_contents[a]);
                        }

                        // Expand the clicked item
                        _this.openAccordion(toggle, content);
                    } else {
                        // Toggle the clicked item
                        if (toggle.classList.contains("is-open")) {
                            _this.closeAccordion(toggle, content);
                        } else {
                            _this.openAccordion(toggle, content);
                        }
                    }
                });

                // Expand the first item
                if (i === 0 && is_first_expanded) {
                    _this.openAccordion(toggle, content);
                }
            }
        }
    };

    (function() {
        // Initiate all instances on the page
        const accordions = document.getElementsByClassName("accordions");
        for (let i = 0; i < accordions.length; i++) {
            Accordion.init(accordions[i]);
        }
    })();

    // Home number counterup
    if ($(".count-item").length) {
        $(".count-item strong").counterUp({
            delay: 10,
            time: 1000
        });
    }


    $(".navbar-nav").before("<div class='menu-cross'><span class='close'></span></div>");

    var width = $(window).width();
    if (width < 992) {
        $(".menu-cross .close").click(function() {
            $(".navbar-toggler").trigger("click")
        });

    }


    $('.goback').click(function() {
        window.history.back();
    })


    $("#playvideobtn").click(function(){
        $("#banner_video").get(0).play()
    })

    /* function for update profile photo */
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });

    /* function for upload profile button */
    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");

    customBtn.addEventListener("click", function() {
    realFileBtn.click();
    });

    realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
    });

})(window.jQuery);