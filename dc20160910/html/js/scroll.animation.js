/*
Scroll Animation
v1.0.0
Last Updated: 2016-09-03
Author: White Wolf
Twitter: @White_Wolf_NeT
*/

// ズームイン
$(function() {
	$('.list-mv01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv01');
		}
		else{
			$(this).stop().removeClass('mv01');
		}
	});
});

// フェードイン
$(function() {
	$('.list-mv02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv02');
		}
		else{
			$(this).stop().removeClass('mv02');
		}
	});
});

// 回転
$(function() {
	$('.list-mv03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv03');
		}
		else{
			$(this).stop().removeClass('mv03');
		}
	});
});

// 3D回転
$(function() {
	$('.list-mv04').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv04');
		}
		else{
			$(this).stop().removeClass('mv04');
		}
	});
});

// 上移動
$(function() {
	$('.list-mv05').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv05');
		}
		else{
			$(this).stop().removeClass('mv05');
		}
	});
});

// 3D回転+ズームイン
$(function() {
	$('.list-mv06').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv06');
		}
		else{
			$(this).stop().removeClass('mv06');
		}
	});
});

// 移動+フェードイン
$(function() {
	$('.list-mv07').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv07');
		}
		else{
			$(this).stop().removeClass('mv07');
		}
	});
});