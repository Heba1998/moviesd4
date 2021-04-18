alert("Hello! You are in my project ^.^ ");

var movies = prompt("Please enter the type of movies you want to watch ", "kids");


if (movies== "kids" ) {


var moviesName;
var favKidmovies= function (){
 moviesName = prompt('please enter your fav char name from kids movie!', 'minnie');

while(moviesName !== 'minnie' && moviesName !== 'mickey')

{
  moviesName = prompt('Please enter the name minnie or mickey');
}
}
favKidmovies();





var userChoose;
var KidsMovImage= function(){
if(moviesName == 'minnie'){
userChoose='<img src="https://i.pinimg.com/originals/58/29/c3/5829c3e6e7437daac35272ab75cae2cc.png">';
}
else if (moviesName == 'mickey'){
  userChoose='<img src="https://i.pinimg.com/originals/76/49/f5/7649f556f4720425121f05553ab9d819.jpg">';
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
}
KidsMovImage();


 alert("I wish you an enjoyable watch ^.^ ");

} 





else if (movies== "family" ) {

  var moviesName;
  var favFammovies= function (){

  var moviesName = prompt('please enter your fav char name from family movie!', 'Harry Potter');

while(moviesName !== 'Harry Potter'&& moviesName !== 'Nemo'){
  moviesName = prompt('Please enter the name Harry Potter or Nemo');
}
  }

favFammovies();  





var userChoose;
var FamilymoviesImg= function (){
if(moviesName === 'Harry Potter'){
userChoose='<img src="https://webbiesworld.com/wp-content/uploads/2020/10/Harry-Potter.jpg">';
}else if (moviesName === 'Nemo'){
  userChoose='<img src="https://images-na.ssl-images-amazon.com/images/I/61oF7cvhZDL._AC_SL1488_.jpg">';
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
}
FamilymoviesImg();
  
   alert("I wish you an enjoyable watch ^.^ ");




}


 else {
   alert("I'm sorry, You will not find what you are looking for on my website ^_^ ");
}















  
