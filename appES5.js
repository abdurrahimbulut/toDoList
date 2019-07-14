/*
 ES5 JAVASCRIPT
 ABDURRAHİM BULUT 
 10 HAZİRAN 2019 
*/


function ToDo(title,content,important){
    this.title=title;
    this.content=content;
    this.important=important;
    
}



function UI(){

}

UI.prototype.addToDo= function(toDo){
    const list=document.getElementById('list');
    if(toDo.important==true){
      
        var htmlBadges = "  <span class=\"badge badge-warning\"> Önemli</span>"; 
        toDo.title+=htmlBadges;
        //console.log(toDo.title);
    }
    var html= '<tr><td>'+ toDo.title + '</td><td>'+toDo.content+'</td><td class="islemler"><button href="#" class="btn btn-danger btn-sm delete"> <i class="far fa-times-circle deletei"></i></button><button href="#" class="btn btn-success btn-sm completed "><i class="far fa-check-circle completedi"></i></button></td></tr>';
    list.innerHTML+=html;

}
UI.prototype.clearControls= function(){
    const title = document.getElementById('title').value="";
    const content = document.getElementById('content').value="";
    const important=document.getElementById('important').checked=false;
    
}

UI.prototype.click=function(element){
    /* Delete icon and button | Sil buton ve ikon */
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
    }
    if (element.classList.contains('deletei')) {
        element.parentElement.parentElement.parentElement.remove();
    }

    /* Completed icon and button | Yapıldı buton ve ikon */
    if (element.classList.contains('completed')) {
        element.parentElement.parentElement.classList.toggle("table-success");
    }
    if (element.classList.contains('completedi')) {
        element.parentElement.parentElement.parentElement.classList.toggle("table-success");
    }

}



document.getElementById('toDoList').addEventListener('submit',
function(e){
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const important=document.getElementById('important').checked;
    //console.log(title, content, important);

    const toDo= new ToDo(title,content,important);
    //console.log(toDoList);

    const ui = new UI();
    ui.addToDo(toDo);
    ui.clearControls();

    e.preventDefault(); //eğer bu fonksiyon olmazsa submit devam eder ve sayfa yenilenir.
   
});


document.getElementById('list').addEventListener('click',function (e) {
    
    const ui =new UI();
    ui.click(e.target);
    
})


/* ES5 ABDURRAHİM BULUT 10 HAZİRAN 2019 */

