// logo reload start

let logo = document.querySelector('.logo')

logo.addEventListener('click', function () {
    location.reload()
})

// logo reload end


// cursor run start

let cursorRun = document.querySelector('.cursor-run')

window.addEventListener('mousemove', function (e) {
    if (window.innerWidth > 1140) {
        const X = e.pageX
        const Y = e.pageY
        cursorRun.style.setProperty('--x', X + "px")
        cursorRun.style.setProperty('--y', Y + "px")
    }
})

// cursor run end

// header hamburger start

let headerList = document.querySelector('.header__list')
let headerNavHamburger = document.querySelector('.header__nav-hamburger')

headerNavHamburger.addEventListener('click', function () {
    headerNavHamburger.classList.toggle('active')
    if (headerNavHamburger.classList.contains('active')) {
        headerList.style.left = 0
    } else {
        headerList.style.left = '-120%' 
    }
})

// header hamburger end


// all img animation start

let allAnimImg = [...document.querySelectorAll('.all__img')]

window.addEventListener('mousemove', function moveImg(e) {
    if (window.innerWidth > 1440) {
        for (let i = 0; i < allAnimImg.length; i++) {
            let speed = allAnimImg[i].getAttribute('data-speed')
            
            const X = (window.innerWidth - e.pageX * speed) / 100;
            const Y = (window.innerWidth - e.pageY * speed) / 100;
            
            allAnimImg[i].style.transform = `translate(${X}px, ${Y}px)`
        }
    }
})


// all img animation end



// run string start

let h1 = document.querySelector('.header__title')

let txt = h1.innerHTML
h1.innerHTML = ''

function runStringAnim(x = 0) {
    h1.innerHTML += txt[x]
    x++

    if (x < txt.length) {
        setTimeout(() => {
            runStringAnim(x)
        }, 80);
    }
}

runStringAnim()

// run string end



// services card animation start

let servicesCardBox = document.querySelector('.services__card-box')

window.addEventListener('scroll', function serviceRunAnim() {
    if (window.scrollY >= (servicesCardBox.offsetTop - servicesCardBox.offsetHeight) / 3) {
        servicesCardBox.style.transform = `translateX(0)`
        servicesCardBox.style.opacity = 1
    } else {
        servicesCardBox.style.transform = `translateX(150%)`
        servicesCardBox.style.opacity = 0
    }
})

// services card animation end



// design section animation start

let designSectionRow = document.querySelector('.design__section .row'),
    designImgBox = document.querySelector('.design__img-box'),
    designDesc = document.querySelector('.design__desc')

window.addEventListener('scroll', function () {
    if (window.scrollY >= (designSectionRow.offsetTop - designSectionRow.offsetHeight) / 1.3) {
        designImgBox.style.transform = 'translateX(0)'
        designImgBox.style.opacity = 1
        designDesc.style.transform = 'translateX(0)'
        designDesc.style.opacity = 1
    } else {
        designImgBox.style.transform = 'translateX(-150%)'
        designImgBox.style.opacity = 0
        designDesc.style.transform = 'translateX(150%)'
        designDesc.style.transform = 0
    }
})

// design section animation end



// teamwork section animation start

let teamworkSection = document.querySelector('.teamwork__section'),
    teamworkImgBox = document.querySelector('.teamwork__img-box'),
    teamworkDesc = document.querySelector('.teamwork__desc')


window.addEventListener('scroll', function () {
    if (window.scrollY >= (teamworkSection.offsetTop - teamworkSection.offsetHeight) * 1.3) {
        teamworkImgBox.style.transform = 'translate(0, 0)'
        teamworkImgBox.style.opacity = 1
        teamworkDesc.style.transform = 'translate(0, 0)'
        teamworkDesc.style.opacity = 1
    } else {
        teamworkImgBox.style.transform = 'translate(150%, 90%)'
        teamworkImgBox.style.opacity = 0
        teamworkDesc.style.transform = 'translate(-150%, 90%)'
        teamworkDesc.style.opacity = 0
    }
})

// teamwork section animation end




// testimonials section animation start

let testiSection = document.querySelector('.testimonials__section'),
    testiImgBox = document.querySelector('.testimonials__img-box'),
    testiCarousel = document.querySelector('.testimonials__carousel'),
    testiCarouselBtns = document.querySelector('.testimonials__carousel-btns')

window.addEventListener('scroll', () => {
    if (window.scrollY >= (testiSection.offsetTop - testiSection.offsetHeight)) {
        testiImgBox.style.transform = "rotate(0) translateY(0)"
        testiImgBox.style.opacity = 1
        testiCarousel.style.transform = "rotate(0) translateY(0)"
        testiCarousel.style.opacity = 1
        testiCarouselBtns.style.opacity = 1
    } else {
        testiImgBox.style.transform = "rotate(-90deg) translateY(-180%)"
        testiImgBox.style.opacity = 0
        testiCarousel.style.transform = "rotate(90deg) translateY(-180%)"
        testiCarousel.style.opacity = 0
        testiCarouselBtns.style.opacity = 0
    }
})


// testimonials section animation end



// partners section animation start

let ferrarImg = document.querySelector('.ferrari-img'),
    microsoftImg = document.querySelector('.microsoft-img'),
    nationalImg = document.querySelector('.national-img'),
    deloitteImg = document.querySelector('.deloitte-img'),
    googleImg = document.querySelector('.google-img'),
    partnerSection = document.querySelector('.partners__section'),
    partnersImg = document.querySelector('.partners__img')
    

window.addEventListener('scroll', () => {
    if (window.innerWidth > 1024) {
        if (window.scrollY >= (partnerSection.offsetTop - partnerSection.offsetHeight) / 1.1) {
            ferrarImg.style.transform = "translate(0, 0)"
            microsoftImg.style.transform = "translate(0, 0)"
            nationalImg.style.transform = "translate(0, 0)"
            deloitteImg.style.transform = "translate(0, 0)"
            googleImg.style.transform = "translate(0, 0)"
            ferrarImg.style.opacity = 1
            microsoftImg.style.opacity = 1
            nationalImg.style.opacity = 1
            deloitteImg.style.opacity = 1
            googleImg.style.opacity = 1
            
        } else {
            ferrarImg.style.transform = "translate(-250%, 250%)"
            microsoftImg.style.transform = "translate(-300%, -500%)"
            nationalImg.style.transform = "translateY(450%)"
            deloitteImg.style.transform = "translate(350%, -520%)"
            googleImg.style.transform = "translate(280%, 280%)"
            ferrarImg.style.opacity = 0
            microsoftImg.style.opacity = 0
            nationalImg.style.opacity = 0
            deloitteImg.style.opacity = 0
            googleImg.style.opacity = 0
        }
    }
})

// partners section animation end



// subscribe section animation start

let emailSubmitBox = document.querySelector('.email-submit-box'),
    subscribeSection = document.querySelector('.subscribe__section')

window.addEventListener('scroll', () => {
    if (window.scrollY >= (subscribeSection.offsetTop - subscribeSection.offsetHeight) / 1.1) {
        emailSubmitBox.style.transform = 'translateX(0)'
        emailSubmitBox.style.opacity = 1
    } else {
        emailSubmitBox.style.transform = 'translateX(-200%)'
        emailSubmitBox.style.opacity = 0
    }
})

    // let subscribeTitle = document.querySelector('.subscribe__title')

    // let txt2 = subscribeTitle.innerHTML
    // subscribeTitle.innerHTML = ''

    // function runStringAnim2(x = 0) {
    //     subscribeTitle.innerHTML += txt2[x]
    //     x++

    //     if (x < txt2.length) {
    //         setTimeout(() => {
    //             runStringAnim2(x)
    //         }, 80);
    //     }
    // }

    // runStringAnim2()

// subscribe section animation end