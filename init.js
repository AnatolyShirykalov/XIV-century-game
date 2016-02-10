$(document).ready(function(){
    var main_win = document.getElementById("main_win");
    player.push({
        name:"",
        menu:["main","m1","m2","time_with_army","pray","stand","run"],
        level: 1,
        spirit:20,
        army: 500,
        skill: 1,
        espionage: 15,
        coffer: 10,
        war_craft: 1,
        wife: 0,
        oratory: 15,
        rep:{Horde: 15,Lithuania:15,neighbor:40},
        lands:[]
    });
    player[0].name=prompt("А зовут вас","Имя");
    init_menu(player[0]);
  })

function Land(name,profit){
  this.name = name;
  this.profit = profit;
  this.occupation = 0.8;
  this.assess = profit;
}
Land.prototype.army = function(){
  return 100000*(1-this.occupation);
}