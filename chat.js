var bt1= document.querySelector("#batman-text-1");
var bt2= document.querySelector("#batman-text-2");
var ut1= document.querySelector("#user-text-1");
var ut2= document.querySelector("#user-text-2");
var enterMsg=document.querySelector("#enter-message");
var sndmsg=document.querySelector(".fa-paper-plane");
var unav=document.querySelector("#unavailable");

sndmsg.addEventListener("click",function(){
  if(ut1.textContent=="")
  {
    var str=enterMsg.value;
    ut1.textContent=str;
    ut1.style.color="white";
    ut1.style.backgroundColor="#a80134";
    bt1.textContent="I'm Batman. I don't talk to people.";
    bt1.style.backgroundColor="white";
    enterMsg.value="";

  }
  else if(ut1.textContent!="")
  {
    var str=enterMsg.value;
    ut2.textContent=str;
    ut2.style.color="white";
    ut2.style.backgroundColor="#a80134";
    bt2.textContent="Gotta go. Gotham needs me.";
    bt2.style.backgroundColor="white";
    enterMsg.value="";
    unav.textContent="You can no longer reply to this conversation.";
    unav.style.color="white";
    unav.style.backgroundColor="black";
    enterMsg.setAttribute("disabled", "disabled");
  }

});

document.addEventListener("keypress",function(event){
  if(event.which==13)
  {
  if(ut1.textContent=="")
  {
    var str=enterMsg.value;
    ut1.textContent=str;
    ut1.style.color="white";
    ut1.style.backgroundColor="#a80134";
    bt1.textContent="I'm Batman. I don't talk to people.";
    bt1.style.backgroundColor="white";
    enterMsg.value="";

  }
  else if(ut1.textContent!="")
  {
    var str=enterMsg.value;
    ut2.textContent=str;
    ut2.style.color="white";
    ut2.style.backgroundColor="#a80134";
    bt2.textContent="Gotta go. Gotham needs me.";
    bt2.style.backgroundColor="white";
    enterMsg.value="";
    unav.textContent="You can no longer reply to this conversation.";
    unav.style.color="white";
    unav.style.backgroundColor="black";
    enterMsg.setAttribute("disabled", "disabled");
  }
}
});
