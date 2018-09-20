// Main
console.log('FullStack Vietnam!')

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	nav:true,
	dots: false,
    responsive:{
        0:{
			items:1,
			nav: false,
			loop: false,
			center: true,
        },
        600:{
			items:3,
			center: true,
        },
        1000:{
			items:5,
			center: true,
        }
    }
})
