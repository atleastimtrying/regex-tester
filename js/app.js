window.onload = function (){
  document.getElementById('source').value = "I find that because I am a regular internet user, when I look at lolcats I pull funny expressions whilst looking at the screen. I think that memes are easy to make but they're funny!";
  document.getElementById('modifier').value = 'g';
  document.getElementById('regex').value = '(\\sr.*?r\\s)|(\\se.*?s\\s)|(are)|(\\se.*?y\\s)|!';
  document.getElementById('go').onclick = function(){
    var source = document.getElementById('source').value;
    var regex = new RegExp(document.getElementById('regex').value, document.getElementById('modifier').value);
    var result = source.match(regex);
    var string = '' ;
    if(result){
      for(i=0; i < result.length; i++){
       string += '<span style="color:rgb(0,0,'+ i/result.length * 255 +');">' + result[i] + '</span>' ;
      }
    }else{
      string = 'no results!'
    }
    document.getElementById('output').innerHTML = string;
  }
}