function Decision(name,fn){
  this.name = name;
  this.fn = function(params){return fn(params);}
  decisions.push(this);
  this.show_b = function(params){
    if (params.menu.indexOf(this.name)!=-1)
      return "<input type='button' value='"+this.name + 
      "' onclick='decisions["+decisions.indexOf(this) +
      "].fn(player["+player.indexOf(params)+"]);'>\n";
  }
}

var d1 = new Decision("time_with_army",function(params){alert("time_with_army");});
var d2 = new Decision("pray",function(params){alert("pray");});
var d3 = new Decision("stand",function(params){alert("stand");});
var d4 = new Decision("run",function(params){alert("run");});
