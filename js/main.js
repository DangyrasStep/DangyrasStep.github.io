(function () {
    let headerUnderline = {
        init: function () {
            this.casheDom();
            this.bindEvents();
        },
        casheDom: function () {
            this.menuToggle = document.getElementById("menuToggle");
            this.buttons = document.querySelectorAll("#nav-menu a");
            this.buttonsMobile = document.querySelectorAll("#nav-menu-mobile a");
            this.sections = document.querySelectorAll(".h2-outer");
            this.loadButton = document.getElementById("btn");
            this.descClose = document.getElementById("item-toggle");
            this.items = document.getElementById("gallery");
            this.itemDescImages = document.getElementById("item-images-js");
        },
        bindEvents: function () {
            window.addEventListener("scroll", this.scroll.bind(this));
            this.menuToggle.addEventListener("click", this.toggleMenu.bind(this));
            this.buttons.forEach(element => {
                element.addEventListener("click", this.linkButtons.bind(this));
            });
            this.buttonsMobile.forEach(element => {
                element.addEventListener("click", this.linkButtons.bind(this));
            });
            this.loadButton.addEventListener("click", this.loadText.bind(this));
            this.descClose.addEventListener("click", this.closeDescWindow.bind(this));
            this.items.addEventListener("click", this.showDescWindow.bind(this));
            this.itemDescImages.addEventListener("click", this.toggleImages.bind(this));
        },
        scroll: function () {
            /* Header underline */
            let docHeight = document.body.scrollHeight - window.innerHeight;
            let topHeight = window.pageYOffset;
            let underlineWidth = topHeight / docHeight * 100;
            document.getElementById("header-underline").style.width = underlineWidth + "%";

            /* Highlight section's link */
            for (let i = 0; i < this.sections.length; i++) {
                let start = $(this.sections[i]).offset().top - 70;
                let end = "";
                var max = this.sections.length;
                if (i != this.sections.length - 1) {
                    end = $(this.sections[i + 1]).offset().top - 70;
                } else {
                    end = document.body.scrollHeight;
                }
                if (start <= window.pageYOffset && end > window.pageYOffset) {
                    this.buttons[i].classList.add("checked");
                } else if (window.pageYOffset + window.innerHeight - 70 == document.body.scrollHeight) {
                    this.buttons[max - 2].classList.remove("checked");
                    this.buttons[max - 1].classList.add("checked");
                } else {
                    this.buttons[i].classList.remove("checked");
                }
            }
        },
        toggleMenu: function () {
            let header = document.getElementsByTagName("header")[0];
            header.classList.toggle("active");
        },
        linkButtons: function (event) {
            event.preventDefault();
            if (window.innerWidth > 600) {
                var buttonsArray = Array.from(this.buttons);
            } else {
                var buttonsArray = Array.from(this.buttonsMobile);
            }

            let indexOfButton = buttonsArray.indexOf(event.target);
            $('html, body').animate({
                scrollTop: parseInt($(this.sections[indexOfButton]).offset().top - 70)
            }, 400);
        },
        loadText: function () {
            let newid = 0;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "js/list.json", true);
            xhr.onload = function () {
                if (this.status == 200) {
                    var x = document.getElementById("gallery").childElementCount;
                    var user = JSON.parse(this.responseText);

                    var i = 0,
                        howManyTimes = 4;

                    function f() {
                        var divGrid = document.createElement("div");
                        divGrid.classList.add("item-grid");
                        var divWrapper = document.createElement("div");
                        divWrapper.classList.add("item-wrap");
                        let link = document.createElement("a");
                        let image = document.createElement("div");
                        image.classList.add("image");
                        let imageWrapper = document.createElement("div");
                        imageWrapper.classList.add("image-wrap");
                        let img = document.createElement("img");
                        if (!user[x + i]) {
                            return;
                        } else {
                            img.src = user[x + i].image;
                        }
                        divGrid.appendChild(divWrapper);
                        divWrapper.appendChild(link);
                        link.appendChild(image);
                        image.appendChild(imageWrapper);
                        imageWrapper.appendChild(img);
                        document.getElementById("gallery").appendChild(divGrid);
                        i++;
                        if (i < howManyTimes) {
                            setTimeout(f, 100);
                        }
                    }
                    f();
                    if (x + 4 >= user.length) {
                        document.getElementById("btn").classList.add("hidden");
                    }
                }
            }
            xhr.send();
        },
        closeDescWindow: function () {
            let body = document.querySelectorAll("body")[0];
            let desc = document.getElementById("item-desc");

            let image = desc.querySelector(".item-image img");
            image.src = "";

            body.classList.toggle("active-desc");
        },
        showDescWindow: function (event) {
            event.preventDefault();

            if (event.target.matches('.item-wrap,.item-wrap *')) {

                let arrayb = document.querySelectorAll(".item-grid");
                let itemsArray = Array.from(arrayb);
                let indexOfButton = itemsArray.indexOf(event.target.closest(".item-grid"));

                this.itemDesc(indexOfButton);

                let body = document.querySelectorAll("body")[0];
                let desc = document.getElementById("item-desc");
                body.classList.toggle("active-desc");
                desc.classList.remove("logo");
            }
        },
        itemDesc: function (item) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "js/list.json", true);
            xhr.onload = function () {
                if (this.status == 200) {
                    let desc = document.getElementById("item-desc");
                    var user = JSON.parse(this.responseText);

                    let image = desc.querySelector(".item-image img");
                    let heading = desc.querySelector(".item-heading h3");
                    let content = desc.querySelector(".item-content p");
                    let link = desc.querySelector(".item-link a");
                    let images = desc.querySelectorAll(".item-images img");
                    image.src = user[item].image;

                    content.removeChild(content.firstChild);
                    content.appendChild(document.createTextNode(user[item].content));

                    heading.removeChild(heading.firstChild);
                    heading.appendChild(document.createTextNode(user[item].heading));

                    for (let i = 0; i < images.length; i++) {
                        images[i].src = user[item].images[i];
                    }
                    if (user[item].link != "") {
                        link.href = user[item].link;
                    } else {
                        desc.classList.add("logo");
                    }
                }
            }
            xhr.send();
        },
        toggleImages: function (event) {
            if (event.target.matches('img')) {
                let desc = document.getElementById("item-desc");
                let image = desc.querySelector(".item-image img");
                image.src = event.target.src;
            }
        }
    };
    headerUnderline.init();
})();