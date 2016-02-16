function Menu(name){
  this.name = name;
  this.class = "menu";// дичь какая-то
  this.items = [];
  menus.push(this);
  this.add = function(item){
    this.items.push(item);
  }
  this.show = function(params){
    var menu_win = document.getElementById("menu_win");
    menu_win.innerHTML="";
    if (params.menu.indexOf(this.name)!=-1) 
      this.items.forEach(function(item,i,arr){menu_win.innerHTML+=item.show_b(params);});
    return "";
  }
  this.show_b =  function(params){
    if (params.menu.indexOf(this.name)!=-1)
      return "<input type='button' value='"+this.name + 
      "' onclick='menus["+menus.indexOf(this) +"].show(player[" +player.indexOf(params)+"]);'>\n";
  }
}
function init_menu(params){
  mm = new Menu("main");
  m1 = new Menu("Военный советник");
  m2 = new Menu("m2");
  mm.add(m1); mm.add(m2); mm.add(d_end);
  m1.add(d_time_with_army); m1.add(d2); m1.add(d_ask_army);
  m2.add(d3); m2.add(d4);
  mm.show(params);
  return 0;
}

$(document).keydown(function(e){
  var key = e.which;
  var menu_win = document.getElementById("menu_win");
  if (key=="27") return mm.show(player[0]);// Esc
  menu_win.innerHTML+="<p> "+key+"</p>";
})
