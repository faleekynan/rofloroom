 var myTxt = new Array(
   '<img src="ava/1.jfif"</img> ',
   '<img src="ava/2.jfif"</img> ',
   '<img src="ava/3.jfif"</img> ',
   '<img src="ava/4.jfif"</img> ',
   '<img src="ava/5.jfif"</img> ',
   '<img src="ava/6.jfif"</img> ',
   '<img src="ava/7.jfif"</img> ',
   '<img src="ava/8.jfif"</img> '
                        );
                      randnm=Math.round(Math.random()*(myTxt.length-1));

document.getElementById("photo").innerHTML = myTxt[randnm];
						
 
