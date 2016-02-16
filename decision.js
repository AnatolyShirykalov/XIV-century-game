function Decision(name,fn){
  this.name = name;
  this.fn = function(params){
    fn(params);
    points-=1;
    document.getElementById("points").innerHTML = points;
    if (points==0) d_end.fn(params);
}
  decisions.push(this);
  this.show_b = function(params){
    if (params.menu.indexOf(this.name)!=-1)
      return "<input type='button' value='"+this.name + 
      "' onclick='decisions["+decisions.indexOf(this) +
      "].fn(player["+player.indexOf(params)+"]);'>\n";
  }
}

var d_time_with_army = new Decision("Провести время с дружиной",function(params){
  var adv = document.getElementById("adviser");
  params.skill+=1;
  adv.innerHTML = "Вы провели время с дружиной";
});
var d2 = new Decision("pray",function(params){alert("pray");});
var d3 = new Decision("stand",function(params){alert("stand");});
var d4 = new Decision("run",function(params){alert("run");});
var d_end = new Decision("Завершить ход",function(params){
  step+=1; points=10+params.level;
  document.getElementById("year").innerHTML=Math.floor((step-1)/4)+1302;
  document.getElementById("season").innerHTML=["Осень","Зима","Весна","Лето"][(step-1)%4];
  events.forEach(function(item,index,arr){item.fn(params);});
});
var d_ask_army = new Decision("Спросить численность войска",function(params){
  var adv = document.getElementById("adviser");
  var ans = params.lands.map(function(elem){return elem.army();}).reduce(function(a,b){return a+ b;});
  adv.innerHTML = "Ваше войско насчитывает " + (params.army + ans) + " храбрых воинов";
});
