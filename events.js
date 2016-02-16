function Event(name,date,fn){
  this.name = name;
  this.date = date;
  events.push(this);
  this.fn = function(params){if (this.date==step) return fn(params);}
}
e1 = new Event("atack!!!",3,function(params){
    alert("Вас атаковали, ну и ладно");
});