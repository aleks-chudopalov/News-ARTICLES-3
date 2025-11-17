var nM = 0;

calendar();

function calendar( bef = 0  ) 
{


 nM = nM + bef;

var d = new Date();

var months = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December"];

document.getElementById("month-cal").innerHTML = months[d.getMonth() - nM];

var bm=document.getElementsByClassName("before-month")[0];
var am=document.getElementsByClassName("after-month")[0];
 bm.style.display=''; 
 am.style.display='';
 // cтиль по умолчанию из css

		if (d.getMonth() - nM==0) { 
		bm.style.display= 'none';
		am.style.display='';
		   }

		if (d.getMonth() - nM==11) { 
			// document.write( d.getMonth() - nM );
			am.style.display='none';
			bm.style.display = '';
		}


//document.getElementsByTagName("caption")[0].innerHTML = months[d.getMonth()];



var myCell = document.getElementsByTagName("td"); 

var daysInCurrentMonth = new Date(d.getFullYear(), 
	d.getMonth() - nM + 1, 0).getDate();  // кол-во дней в текуч. месяце

var Wday = new Date(d.getFullYear(), 
	d.getMonth() - nM, '00').getDay();  //с какого дня недели начинается месяц

let k = 1; // начальное значение счетчика

			for (let i = 0; i < daysInCurrentMonth; i++) {
					myCell[i + Wday].innerHTML  = k ;		
					k++;   } // увеличиваем счетчик	
			
	
var today = d.getDate();

if(nM==0){      /* nM - глоб. переменная, если месяц выбран текущий то она == 0*/
myCell[today + Wday - 1].style.backgroundColor =  'rgb( 102, 102, 102 )';
myCell[today + Wday - 1].style.color =  'white'; }



//document.write(  );
 

 //$(table).find('tbody').append("<tr><td>aaaa</td></tr>");
}


function beforeM(x=0){

	var cl = document.getElementsByTagName("td");

    
	for (let i = 0; i < cl.length; i++) {
					cl[i].innerHTML  = '' ;
					cl[i].style = ''; } 
					calendar(x);

}

// function enterSearch() {
//   document.querySelectorAll('input')[0].addEventListener('keydown', function(e) {
//     if (e.keyCode == "Enter") {


//       // можете делать все что угодно со значением текстового поля
//       console.log(document.querySelectorAll('input')[0].value);
//     }
//   });
// }


document.getElementsByClassName("aside__search__field")[0].
addEventListener('keydown', someFunc)




var oldText = [];  //не должен быть в функции!!!

function someFunc(event) {
var text = document.getElementsByClassName("aside__search__field")[0].value;


var article = document.getElementsByClassName("article");
var tit = document.getElementsByTagName("h2");
var cMatch = 0;



if (event.key == "Enter") {


for (let i = 0; i < article.length; i++) {

if(oldText[i]==null) { oldText[i] = tit[i].innerHTML;
}

	if (  tit[i].innerHTML.toLowerCase().includes(text.toLowerCase()) ){
    
	article[i].style.display = ""; 

	tit[i].innerHTML = oldText[i].replace( new RegExp(text, "i"), `<mark>$&</mark>`);

	cMatch++;
	}
    else{ 
     article[i].style.display = "none"; 
    }

}  


document.getElementById("cSearch").innerHTML =  "Found " + cMatch + " matches";

if (text==''){document.getElementById("cSearch").innerHTML = ""; }





       // document.write( text );
    }


    




}