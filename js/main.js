// logo reload start

let logo = document.querySelector('.logo')

logo.addEventListener('click', function () {
    location.reload()
})

// logo reload end


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

if (window.innerWidth > 1024) {
    let allAnimImg = [...document.querySelectorAll('.all__img')]

    window.addEventListener('mousemove', function moveImg(e) {
        for (let i = 0; i < allAnimImg.length; i++) {
            let speed = allAnimImg[i].getAttribute('data-speed')
                
            const X = (window.innerWidth - e.pageX * speed) / 100;
            const Y = (window.innerWidth - e.pageY * speed) / 100;
                
            allAnimImg[i].style.transform = `translate(${X}px, ${Y}px)`
        }
    })
}

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

if (window.innerWidth > 1024) {
    const servicesCardBox = document.querySelector('.services__card-box')
    const serviceSection = document.querySelector('.services__section')
    
    function serviceAnim(entries) {
        if (entries[0].isIntersecting) {
            servicesCardBox.classList.add('active')
        } else {
            servicesCardBox.classList.remove('active')
        }
    }
    
    let serviceObserved = new IntersectionObserver(serviceAnim, {threshold: 0.4})
    
    serviceObserved.observe(serviceSection)
}



// services card animation end



// design section animation start

if (window.innerWidth > 1024) {
    const designSection = document.querySelector('.design__section'),
    designImgBox = document.querySelector('.design__img-box'),
    designDesc = document.querySelector('.design__desc')

    function desingAnim(entries) {
        if (entries[0].isIntersecting) {
            designImgBox.classList.add('active')
            designDesc.classList.add('active')
        } else {
            designImgBox.classList.remove('active')
            designDesc.classList.remove('active')
        }
    }

    let designObserved = new IntersectionObserver(desingAnim, {threshold: 0.5})
    designObserved.observe(designSection)
}



// design section animation end



// teamwork section animation start

if (window.innerWidth > 1024) {
    const teamworkSection = document.querySelector('.teamwork__section'),
    teamworkImgBox = document.querySelector('.teamwork__img-box'),
    teamworkDesc = document.querySelector('.teamwork__desc')

    function teamworkAnim(entries) {
        if (entries[0].isIntersecting) {
            teamworkImgBox.classList.add('active')
            teamworkDesc.classList.add('active')
        } else {
            teamworkImgBox.classList.remove('active')
            teamworkDesc.classList.remove('active')
        }
    }

    let teamworkObserved = new IntersectionObserver(teamworkAnim, {threshold: 0.5})
    teamworkObserved.observe(teamworkSection)
}




// teamwork section animation end




// testimonials section animation start

if (window.innerWidth > 1024) {
    
    const testiSection = document.querySelector('.testimonials__section'),
    testiImgBox = document.querySelector('.testimonials__img-box'),
    testiCarousel = document.querySelector('.testimonials__carousel'),
    testiCarouselBtns = document.querySelector('.testimonials__carousel-btns')

    function testiAnim(entries) {
        if (entries[0].isIntersecting) {
            testiImgBox.classList.add('active')
            testiCarousel.classList.add('active')
            testiCarouselBtns.classList.add('active')
        } else {
            testiImgBox.classList.remove('active')
            testiCarousel.classList.remove('active')
            testiCarouselBtns.classList.remove('active')
        }
    }

    let testiObserved = new IntersectionObserver(testiAnim, {threshold: 0.5})
    testiObserved.observe(testiSection)

}




// testimonials section animation end



// partners section animation start

if (window.innerWidth > 1024) {
    
    const partnersSection = document.querySelector('.partners__section'),
          partnersImg = document.querySelectorAll('.partners__img')
    
    function partnerAnim(entries) {
        partnersImg.forEach(el => {
            if (entries[0].isIntersecting) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        });
        
    }
    
    let partnerObserved = new IntersectionObserver(partnerAnim, {threshold: 1.0})
    partnerObserved.observe(partnersSection)
    
}

// partners section animation end



// subscribe section animation start

if (window.innerWidth > 1024) {
    
    const emailSubmitBox = document.querySelector('.email-submit-box'),
    subscribeSection = document.querySelector('.subscribe__section');

    function subscribeAnim(entries) {
        if (entries[0].isIntersecting) {
            emailSubmitBox.classList.add('active')
        } else {
            emailSubmitBox.classList.remove('active')
        }
    }

    let subsObserved = new IntersectionObserver(subscribeAnim)
    subsObserved.observe(subscribeSection)

}



// subscribe section animation end