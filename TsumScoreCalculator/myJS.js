
$(document).ready(function(){
  Initial();
  
});

function Initial() {
  btn_bonus = $("#btn_bonus");
  btn_final = $("#btn_final");

  btn_bonus.on("click", function(){
      var total=$("#total").val();
    var bonusscore=$("#bonusscore").val();
    if((total=='')||(bonusscore==''))
        alert("請輸入分數");
    else
    {
      const floatPoint = 1000000000;
      var lvBonus = parseFloat(bonusscore/(total-bonusscore));
      lvBonus = Math.round(lvBonus*floatPoint) / floatPoint;
      //$("._bonus").html(lvBonus);
      $("._bonus").val(lvBonus);
    }
    
  });
  
  // handle click and add class
  btn_final.on("click", function(){
    //banner.addClass("alt")
    var result = $("#result");
    var finalscore = $("#score");
  
    //var lvBonus = parseInt($("._bonus").text());
    var lvBonus = parseInt($("._bonus").val());
    if(isNaN(lvBonus))
        alert("請先計算等級紅利");
    else
    {
      var bonus = finalscore.val()*0.26499;
      var final = parseInt(finalscore.val())+bonus;
      
      result.html(final+"<br> ↑ <br>"+bonus+"(紅利分數)+"+finalscore.val()+"(當前分數)");
    }
  });
}


