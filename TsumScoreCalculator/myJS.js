
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
        var lvBonus = bonusscore/(total-bonusscore);
        $(".span_bonus").html(lvBonus);
      }
      
    });
    
    // handle click and add class
    btn_final.on("click", function(){
      //banner.addClass("alt")
      var result = $("#result");
      var finalscore = $("#score");
    
      var lvBonus = parseInt($(".span_bonus").text());
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


