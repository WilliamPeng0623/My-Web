$(document).ready(function() {
				$('#pwl_page').fullpage({
					//绑定菜单
					anchors: ['pwl-page1', 'pwl-page2', 'pwl-page3', 'pwl-page4'],
					menu: '#menu',

					//导航
					'navigation': true,
				});
			});


$('#skill_icon1').click(function() {
	$('#skill_flag1').toggleClass('skill_flag_changed');
	$('#skill_flag2').removeClass('skill_flag_changed');
	$('#skill_flag3').removeClass('skill_flag_changed');
	
	$('#skill_show1').toggle('blind');
	$('#skill_show2').hide('blind');
	$('#skill_show3').hide('blind');

})
$('#skill_icon2').click(function(){
	$('#skill_flag1').removeClass('skill_flag_changed');
	$('#skill_flag2').toggleClass('skill_flag_changed');
	$('#skill_flag3').removeClass('skill_flag_changed');
	
	$('#skill_show1').hide('blind');
	$('#skill_show2').toggle('blind');
	$('#skill_show3').hide('blind');
});
$('#skill_icon3').click(function(){
	$('#skill_flag1').removeClass('skill_flag_changed');
	$('#skill_flag2').removeClass('skill_flag_changed');
	$('#skill_flag3').toggleClass('skill_flag_changed');
	
	$('#skill_show1').hide('blind');
	$('#skill_show2').hide('blind');
	$('#skill_show3').toggle('blind');
});

