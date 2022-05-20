document.addEventListener('DOMContentLoaded', function(){
    $('.slider').slick({
        arrows:false, //если не нужны по дизайну
        dots:false,
        adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }
        ]

    });



    let sliderItemsImg = document.querySelectorAll('.img-slider')
    let sliderItem = document.querySelectorAll('.slider-item')

    // for (let elem of sliderItemsImg){
    //     elem.addEventListener('mouseover', addElement)

    //     elem.addEventListener('mouseout', function(){
    //         elem.removeEventListener('mouseover', addElement)
    //         document.querySelector('.slider-hover').remove()
    //         document.querySelector('.slider-angles').remove()
    //         elem.addEventListener('mouseover', addElement)
    //     })



    // }


    $(window).on('swipe', function(){
        func()
    })

    function func(){
        for (let elem of sliderItemsImg){
            if (elem.parentNode.classList.contains('slick-current')){
                console.log('123')
                addElement()

                elem.addEventListener('mouseover', mouseOverSlide)

                elem.addEventListener('mouseout', function(){
                    elem.removeEventListener('mouseover', mouseOverSlide)
                    mouseOutSlide()
                    elem.addEventListener('mouseover', mouseOverSlide)
                })
                function mouseOverSlide(){
                    let divAnglesInnerLeftTop = document.querySelector('.divAnglesInnerLeftTop')
                    let divAnglesInnerRightBottom = document.querySelector('.divAnglesInnerRightBottom')

                    divAnglesInnerLeftTop.classList.add('animationToAnglesLeftTop')
                    divAnglesInnerRightBottom.classList.add('animationToAnglesRightBottom')
                }

                function mouseOutSlide(){
                    let divAnglesInnerLeftTop = document.querySelector('.divAnglesInnerLeftTop')
                    let divAnglesInnerRightBottom = document.querySelector('.divAnglesInnerRightBottom')

                    divAnglesInnerLeftTop.classList.remove('animationToAnglesLeftTop')
                    divAnglesInnerRightBottom.classList.remove('animationToAnglesRightBottom')
                }
            } else{
                // elem.querySelector('.container-desc').remove()
                // document.querySelector('.container-desc').remove()
                document.querySelectorAll('.container-desc').forEach((n) => {
                    n.parentNode.parentNode.classList.contains('slick-current') ? false: n.remove()
                });
            }
            function addElement(){
                div = document.createElement('div')
                div.classList.add('slider-hover')

                divText = document.createElement('div')
                divText.classList.add('slider-hover__text')
                divText.innerHTML = elem.querySelector('.slider-text').innerHTML

                divInnerBtn = document.createElement('a')
                divInnerBtn.classList.add('btn')
                divInnerBtn.innerHTML = 'VIEW ALBUM'
                divInnerBtn.href = elem.querySelector('.slider-text').getAttribute('data-href')

                divAngles = document.createElement('div')
                divAngles.classList.add('slider-angles')

                divAnglesInnerLeftTop = document.createElement('div')
                divAnglesInnerLeftTop.classList.add('divAnglesInnerLeftTop')

                divAnglesInnerRightBottom = document.createElement('div')
                divAnglesInnerRightBottom.classList.add('divAnglesInnerRightBottom')


                divContainer = document.createElement('div')
                divContainer.classList.add('container-desc')


                div.appendChild(divText)
                div.appendChild(divInnerBtn)

                divAngles.appendChild(divAnglesInnerLeftTop)
                divAngles.appendChild(divAnglesInnerRightBottom)

                divContainer.appendChild(div)
                divContainer.appendChild(divAngles)

                elem.appendChild(divContainer)
            }
        }
    }

    func()




    // document.querySelectorAll('.slider-item').forEach((n, i, a) => {
    //     n.addEventListener('click', () => a.forEach(m => m.classList.toggle('blue-act', m === n)));
    // });

    let headerNavMob = document.querySelector('.header-nav-mob')
    let aside = document.querySelector('aside')
    let burger = document.querySelector('.burger')
    let page = document.querySelector('.page')
    burger.addEventListener('click', function(){
        aside.classList.toggle('aside-start-position')
        aside.classList.contains('aside-start-position') ? page.style.marginRight = document.querySelector('aside').clientWidth + 'px' : page.style.marginRight = 0
    })

    window.addEventListener('resize', function(){
        if (this.window.innerWidth >= 600){
            page.style.marginRight = 0
            aside.classList.remove('aside-start-position')
        }
    })


})