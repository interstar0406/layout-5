

//khai báo object

var cuongApp ={
	ten: 'CƯờng',
	tuoi: 21,
	dienthoai: [
		'iphone',
		'huawei',
		'vivo'
	],
	xe: [
//các obj con phải có key giống nhau
		{
			time: 1,
			model: 'heo'
		},
		{
			time: 2,
			model: 'trâu'
		}
	]
}
$(document).ready(function(){
	for(let i=0; i<cuongApp.dienthoai.length;i++){
		console.log(cuongApp.dienthoai[i])
	}
	for(let i=0; i<cuongApp.xe.length;i++){
		console.log(cuongApp.xe[i].model)
	}
})




$(document).ready(function () {


	// //ẩn hiện các tag
	// $('.home_nay .item .body').hide()
	// $('.home_nay .item .title-do').on('click', function(){
	// 	console.log('clicked')
	// 	$('.home_nay .item .body').hide()
	// 	$(this).parents('.item').find('.body').show()
	
	// })

	//thay đổi item theo time
	// setTimeout(function () {
	// 	$('body').css({
	// 		"background":"blue"
	// 	})
	// },3000)
	
	// setInterval(function(){
	// 	$('.body').append('àmkạbdfkahsbkfhaiebfc kạnlfnaẹa hlại l ja')
	// }, 1000)
	
	
	
	
	//vòng lặp
	$('h2').each(function(){
		console.log($(this).text())
	})
	// css inline thẻ title
	$(".title").css({
		"background":"red"
	})
	$('.home_clients .owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left owl-left"></i>', '<i class="fa fa-chevron-right owl-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 2
			},
			// breakpoint from 768 up
			768: {
				items: 4
			},
			// breakpoint from 992 up
			992: {
				items: 5
			}
		}
	});
});
