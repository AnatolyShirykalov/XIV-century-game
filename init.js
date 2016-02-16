$(document).ready(function(){
    var general_block = document.getElementById("general_block");
    var l = new Land("Ростовское княжество",40);
    var p = new Player([lands[0]]);
    init_menu(player[0]);
    general_block.innerHTML = "<div class='name'>" + player[0].name + "</div>";
    general_block.innerHTML += "<div id='season'>" + "Осень" + "</div>";
    general_block.innerHTML += "<div id='year'>" + Math.floor(step/4 + 1302) + "</div>";
    general_block.innerHTML += "<div id='points'>" + points + "</div>";
  })

function Player(lnds ){
  this.name = prompt("А зовут вас","Имя");
  this.menu = ["main","Военный советник","m2","Провести время с дружиной","pray","stand","run","Спросить численность войска","Завершить ход"];
  this.level= 1;
  this.spirit=20;
  this.army= 500;
  this.skill =  1;
  this.espionage =  15;
  this.coffer =  10;
  this.war_craft =  1;
  this.wife =  0;
  this.oratory =  15;
  this.rep = {Horde: 15,Lithuania:15,neighbor:40};
  this.lands = lnds;
  player.push(this);
  this.atack = function(land){alert("atack!!!");}
}

function Land(name,profit){
  this.name = name;
  this.profit = profit;
  this.occupation = 0.8;
  this.assess = profit;
  this.mons = [];
  lands.push(this);
  this.army = function(){return Math.floor(100000*(1-this.occupation));}
}