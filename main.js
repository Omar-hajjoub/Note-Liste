let list,idlist,textlist,Updat,Delet,textinput;send;
//-------------------------------
idlist = document.getElementById('idlist')
textlist = document.getElementById('textlist');
Updat=document.getElementById("updat");
Delet=document.getElementById("delete")
textinput=document.getElementById('textinput')
send=document.getElementById('send')
 //----------------------------------------------------------------
 let mod="sende"

 let tmp;

//-----------dateliste------------
let dateliste;
//-----------localStorage------------
if (localStorage.procatlist != null){
    dateliste = JSON.parse(localStorage.procatlist)
}else{
    dateliste=[]
}


//---------------button send------------------------
send.onclick = function(){

    if(mod === 'sende'){

        
         //----- Add a list now ---------

 if(textinput.value != '' ){
    let nowlist ={
        textinput:textinput.value
    }
    dateliste.push(nowlist);
    localStorage.setItem('procatlist' , JSON.stringify(dateliste))
    console.log(dateliste)
    deltvalue()
    nowliste();
 }else{
    alert('plais text input')
 }

 }else{

            //----- Updat ist note ---------

    dateliste[tmp]=nowlist={
        textinput:textinput.value
    }
mod="sende"
send.innerHTML='send'
document.getElementById('textinput').style.backgroundColor=""


 }
   
 nowliste();
 deltvalue()
}
//---------------input  deltvalue------------------------

function deltvalue(){
    textinput.value=''
}

//----------------- Note nowliste----------------------
function nowliste() {
    let nawlistdat=''

    //----- lope now liste note---------
    for(let i =0 ; i < dateliste.length; i++){
     
            nawlistdat +=`
            <div class="list" id="list">
            
            <span id="idlist" >${i}</span>
            <p id="textlist">${dateliste[i].textinput}</p>
            <div class="btn" >
               <button id="updat" onclick="uepdat(${i})">Updat</button>
               <button id="delet" onclick="delet(${i})">Delet</button>
    
            </div>
         
               
           </div> 
    
            `
            document.getElementById('listdat').innerHTML=nawlistdat
       
        
      
       
    }

        //----- Add a button daletall---------
    if (dateliste.length > 0) {
        document.getElementById('deletall').innerHTML=`
        <button class="delett" onclick="deletall()">Deletall <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#f91a01" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></button>

        `
    }else{
        document.getElementById('deletall').innerHTML=''
    }

}
nowliste()

//----------------- delet nowliste----------------------

function delet(i){
dateliste.splice(i,1)
localStorage.procatlist = JSON.stringify(dateliste)
document.getElementById('listdat').innerHTML=''
nowliste()
    }



//----------------- deletall nowliste----------------------

    function deletall(){
        localStorage.clear
        dateliste.splice(0)
        document.getElementById('listdat').innerHTML=''

        nowliste()

    }

//----------------- uepdat nowliste----------------------

    function uepdat(i){
        textinput.value=dateliste[i].textinput
        send.innerHTML='save'
        document.getElementById('textinput').style.backgroundColor="red"

        mod="updata"
         tmp = i ; 
      nowliste()
    }




        //----------------------------



       
        
        
        