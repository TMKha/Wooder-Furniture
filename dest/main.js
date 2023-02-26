// scroll >200px change color header
function scrollHeader(){
    let header= document.querySelector('header');
    
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset >200)
        {
            header.classList.add('header');
        }
        else{
            header.classList.remove('header');

        }
    })
}
scrollHeader();
// back to top
function backToTop(){
    let back = document.querySelector('.back');
    let slider = document.querySelector('.slider').clientHeight;
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > slider)
        {
            back.classList.add('--display');
        }
        else{
            back.classList.remove('--display');

        }
    })
    back.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    })
  
}
backToTop();
// change language
function changeLang() {
    let langCurrent= document.querySelector('.right .lang .lang__current');
    let lang= document.querySelector('.right .lang');
    let langItems = document.querySelectorAll('.right .lang .lang__select .lang__select-item')
   
    langCurrent.addEventListener('click',(e)=>{
        lang.classList.toggle('--active');
        e.stopPropagation();
    })

    let langCurrentSpan=document.querySelector('.right .lang .lang__current .lang__current-text');
    langItems.forEach(item=>{
        item.addEventListener('click',()=>{
            let langSelectItem = item.textContent; //y
            let langTemp= langCurrentSpan.textContent // temp=x
            langCurrentSpan.textContent=  langSelectItem; // x= y
            item.textContent= langTemp; // y = temp 
        })
        
    })
    document.addEventListener('click',()=>{
        lang.classList.remove('--active');
    })
}
changeLang();  
// popup Video
function popUpVideo(){
    let videos = document.querySelectorAll('.quality .quality__video .quality__video-item .play .play__img')
    let popUp = document.querySelector('.popupvideo');
    let iframe = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe ')
    videos.forEach((video)=>{
       video.addEventListener('click',()=>{
             popUp.classList.add('active')
             let idVideo = video.getAttribute('data-video-src')
             iframe.setAttribute('src',`https://www.youtube.com/embed/${idVideo}?autoplay=1`)
       })
    })
    let btnClose = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-close');
  
   function hidePopup(){
    popUp.classList.remove('active')
    iframe.setAttribute('src',"")
   }
    btnClose.addEventListener('click',()=>{
        hidePopup()
    })
    popUp.addEventListener('click',()=>{
        hidePopup()

    })
}
popUpVideo()
// tabs 
function tabsNews(){
    let nameTabs= document.querySelectorAll('.news .news__tabs .news__tabs-item')
    let listNews= document.querySelectorAll('.news .news__swap .news__list ')
    
    nameTabs.forEach((tabs_item)=>{
       tabs_item.addEventListener('click',()=>{
            nameTabs.forEach(e=>{
                e.classList.remove('active')
            })
            tabs_item.classList.add('active')
           
            listNews.forEach((post_item)=>{
                post_item.classList.remove('active')
            })

            let numberTab= tabs_item.getAttribute('data-tab')
            let news= document.querySelector(`.news .news__swap .news__list-${numberTab}`)
            news.classList.add('active')
        })   
    })
    
}
tabsNews()
// scroll to section
function scrollToSection(){
    let menu = document.querySelectorAll('header .menu .menu-item a')
    let heighHeader = document.querySelector('header').offsetHeight;
    let sectionContainer = []
    function removeActiveMenu(){
        menu.forEach(e=>{
            e.classList.remove('active')
        })
    }
    menu.forEach(item=>{
        let href=item.getAttribute('href');
        let nameSC= href.replace('#',"")
        let section = document.querySelector(`.${nameSC}`)
        sectionContainer.push(section)
        item.addEventListener('click',()=>{
       
            let posSC = section.offsetTop;
            window.scrollTo({
                top:posSC -heighHeader +1,
                behavior:"smooth"
            })
            removeActiveMenu()
            item.classList.add('active')

        })
    })

    window.addEventListener('scroll',()=>{
        let posScroll = window.pageYOffset;
        sectionContainer.forEach((section,pos)=>{
            if(posScroll > section.offsetTop-heighHeader && posScroll<section.offsetTop+section.offsetHeight)
            {   
                removeActiveMenu()
                menu[pos].classList.add('active')
            }
            else{
                menu[pos].classList.remove('active')
            }
        })
        
    })
}
scrollToSection()
// slider 
// function slider(){
//     let listSlider = document.querySelectorAll('.slider .slider__list .slider__list-page')
//     let posCurrentSlider = 0;
//     let pageNumber = document.querySelector('.slider .slider__bottom .slider__bottom-page .number')
//     let allDoted = document.querySelectorAll('.slider .slider__bottom .slider__bottom-page .paging li')
//     // get pos
//     listSlider.forEach((page,pos)=>{
//         if(page.classList.contains('active')){
//             posCurrentSlider = pos
//         }
//     })
//     function numberPage(pos){
//         pageNumber.innerHTML=(pos).toString().padStart(2,'0')
//     }
//     function changePage(index){
//         listSlider[posCurrentSlider].classList.remove('active')
//         listSlider[index].classList.add('active')
//         allDoted[posCurrentSlider].classList.remove('active')
//         allDoted[index].classList.add('active')
//         posCurrentSlider = index;
//         numberPage( posCurrentSlider+1)
//     }
//     // get btn --next
//     let btnNext= document.querySelector('.btnctr.--next')
//     btnNext.addEventListener('click',()=>{
        
//         if(posCurrentSlider < listSlider.length- 1){
//             // listSlider[posCurrentSlider].classList.remove('active')
//             // listSlider[posCurrentSlider+1].classList.add('active')
//             // allDoted[posCurrentSlider].classList.remove('active')
//             // allDoted[posCurrentSlider+1].classList.add('active')
//             // posCurrentSlider++;
//             changePage(posCurrentSlider+1)
//             numberPage(posCurrentSlider+1)
//         }
//         else{
//             // listSlider[posCurrentSlider].classList.remove('active')
//             // listSlider[0].classList.add('active')
//             // allDoted[posCurrentSlider].classList.remove('active')
//             // allDoted[0].classList.add('active')
//             // posCurrentSlider = 0;
//             changePage(0)
//             numberPage(posCurrentSlider+1)
//         }
//     })
//      // get btn --pre
//      let btnPre= document.querySelector('.btnctr.--pre')
//      btnPre.addEventListener('click',()=>{
//         if(posCurrentSlider >0)
//         {
//             // listSlider[posCurrentSlider].classList.remove('active')
//             //  listSlider[posCurrentSlider-1].classList.add('active')
//             //  allDoted[posCurrentSlider].classList.remove('active')
//             //  allDoted[posCurrentSlider-1].classList.add('active')
//             //  posCurrentSlider--;
//             changePage(posCurrentSlider-1)
//             numberPage(posCurrentSlider+1)
//         }
//         else
//         {
//             // listSlider[posCurrentSlider].classList.remove('active')
//             // listSlider[listSlider.length -1].classList.add('active')
//             // allDoted[posCurrentSlider].classList.remove('active')
//             // allDoted[listSlider.length -1].classList.add('active')
//             // posCurrentSlider=listSlider.length-1;
//             changePage(listSlider.length-1)
//             numberPage(posCurrentSlider+1)
//         }
//      })
//     // click dotted
//     allDoted.forEach((dot,pos)=>{
//         dot.addEventListener('click',()=>{
//             changePage(pos)
//             // allDoted.forEach((e)=>{
//             //     e.classList.remove('active')

//             // })
//             // allDoted[pos].classList.add('active')
//             // listSlider.forEach((e)=>{
//             //     e.classList.remove('active')

//             // })
//             // listSlider[pos].classList.add('active')
//         })
//     })
    
// }
// slider()

// menu mobile
function menuMobile(){
    let btn = document.querySelector('.right .btnmenu');
    let nav = document.querySelector('.nav');
    console.log(nav)
    btn.addEventListener('click',()=>{
       btn.classList.toggle('active') 
       nav.classList.toggle('active') 
    })

    window.addEventListener('resize',()=>{
       let wWindow=window.innerWidth;
       if(wWindow>992)
              {
                btn.classList.remove('active') 
                nav.classList.remove('active') 
              }
    })


}
menuMobile()



window.addEventListener('load', (event) => {

    function carouselSlider() {
        var elem = document.querySelector('.slider__list');
        var flktySlider = new Flickity( elem, {
      // options
        contain: true,
        wrapAround: true,
        draggable: '>1',
        prevNextButtons: false,
        on: {
            ready: function() {
              console.log('Flickity is ready');
            },
            change: function( index ) {
              console.log( 'Slide changed to' + index );
              numberPaging(index)
            }
          }
        });
        let btnNext= document.querySelector('.btnctr.--next')
        let btnPre= document.querySelector('.btnctr.--pre')
        btnNext.addEventListener('click',(e)=>{
            e.preventDefault();
            flktySlider.next( true )
    
        })
        btnPre.addEventListener('click',(e)=>{
            e.preventDefault();
            flktySlider.previous( false )
            
        })
        // đem dấu chấm của DOM ảo do flkty tọa ra đem vào DOM thật của dấu chấm
        function dottedSlider(){
            let page = document.querySelector('.slider .slider__bottom .slider__bottom-page')
            let dot = document.querySelector('.flickity-page-dots')
            page.appendChild(dot)

        }
        function numberPaging(pos){
        let pageNumber =document.querySelector('.slider .slider__bottom .slider__bottom-page .number')
        pageNumber.innerHTML=(pos+1).toString().padStart(2,'0')

        }
      
              
     
        dottedSlider()
    }

    function carouselShowImg() {
        var elem = document.querySelector('.show .show-carousel ');
        var flktyImg = new Flickity( elem, {
      // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        freeScroll: true,
        pageDots: false,
        draggable: '>1',
        lazyLoad: 3,
        });

        var progressBar = document.querySelector('.progress-bar')
        flktyImg.on( 'scroll', function( progress ) {
        progress = Math.max( 0, Math.min( 1, progress ) );
        progressBar.style.width = progress * 100 + '%';
    });
    }
    function fancyboxGallery(){
        Fancybox.bind('[data-fancybox="gallery"]', {
            // Your options go here
            infinite:true,
            keyboard :{
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "next",
                ArrowDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev",
              }
          });
    }
    fancyboxGallery()
    carouselSlider()
    carouselShowImg()
});


