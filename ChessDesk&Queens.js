function chessdesk(num){
var k="";
  var l ="";
for(var i=0; i<num; i++){
  k="";
  for(var j=0; j<num; j++){
    if(i===0 && j===0 || j===num-i/2 || j===(num-i/2)-num/2){
      k+=" G ";
    }
    else{
    k+=" . ";
    }
  }
  l += k+"\n ";
}
  return l;
}
console.log(chessdesk(5));
