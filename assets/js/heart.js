
$(document).ready(function()
{

	$('body').on("click",'.heart',function()
	{
		var A=$(this).attr("id");
		var B=A.split("like"); //splitting like1 to 1
		var messageID=B[1];
		$(this).css("background-position","")
		var D=$(this).attr("rel");
		if(D === 'like') 
		{
			$(this).addClass("heartAnimation").attr("rel","unlike"); //applying animation class
		}
		else
		{
			$(this).removeClass("heartAnimation").attr("rel","like");
			$(this).css("background-position","left");
		}
	}); //ajax end

});//heart click end
