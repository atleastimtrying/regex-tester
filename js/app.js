(function(){
  var source_input, regex_input, modifier_input, output;

  var format_output = function(result){
    var string = '' ;
    if(result){
      return result.map(function(capture, i){
        return '<span style="color:rgb(0,0,'+ i/result.length * 255 +');">' + capture + '</span>';
      }).join('');
    }else{
      return "no results!";
    }
  };

  var apply_regex = function(){
    var source = source_input.value;
    var regex = new RegExp(regex_input.value, modifier_input.value);
    var result = source.match(regex);
    output.innerHTML = string;
  };

  var set_inital_state = function(){
    source_input.value = "I find that because I am a regular internet user, when I look at lolcats I pull funny expressions whilst looking at the screen. I think that memes are easy to make but they're funny!";
    modifier_input.value = "g";
    regex_input.value = "(\\sr.*?r\\s)|(\\se.*?s\\s)|(are)|(\\se.*?y\\s)|!";
  };

  var assign_dom_elements = function(){
    source_input = document.getElementById("source");
    regex_input = document.getElementById("regex");
    modifier_input = document.getElementById("modifier");
    output = document.getElementById("output");
  };

  var init = function (){
    assign_dom_elements();
    set_inital_state();
    regex_input.addEventListener("keyup", apply_regex);
    apply_regex();
  };

  window.addEventListener("load", init);
})();
