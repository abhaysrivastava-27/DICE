function myFunction()
{
    var dice_num_1 = Math.floor(Math.random()*6 + 1);
    var dice_num_2 = Math.floor(Math.random()*6 + 1);
    var arr_1 =   document.getElementsByClassName('img1');
    var arr_2 =   document.getElementsByClassName('img2');
    var image_name_1 = "images/dice"+dice_num_1+".png";
    var image_name_2 = "images/dice"+dice_num_2+".png";
      arr_1[0].src = image_name_1;
      arr_2[0].src = image_name_2;
    var result = document.getElementById('result');
    if(dice_num_1>dice_num_2)
      {
        result.innerHTML =  "Player One Win";
      }
    else if (dice_num_1<dice_num_2)
     {
        result.innerHTML =  "Player Two Win";
    }
    else
    {
      result.innerHTML =  "Match Draw";
    }
}
