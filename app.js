/*
 ES6 JAVASCRIPT
 ABDURRAHİM BULUT 
 10 HAZİRAN 2019 
*/


function ToDo(title,content,important){
    this.Id=Math.floor(Math.random()*10000);
    this.title=title;
    this.content=content;
    this.important=important;
   // this.complate=complate;
    
}

class UI{
    addToDo(toDo){
        const list=document.getElementById('list');
        if(toDo.important==true){
          
            var htmlBadges = "  <span class=\"badge badge-warning\"> Önemli</span>"; 
            toDo.title+=htmlBadges;
            //console.log(toDo.title);
            toDo.important=false;//eğer true devam ederse LStorege den gelen değer tekrar badge ekler.
        }
        var html= '<tr><td>'+ toDo.title + '</td><td>'+toDo.content+'</td><td class="islemler"><button href="#" data-id="'+ toDo.Id +'" class="btn btn-danger btn-sm delete"> <i class="far fa-times-circle deletei" data-id="'+ toDo.Id +'"  ></i></button><button href="#" class="btn btn-success btn-sm completed "><i class="far fa-check-circle completedi"></i></button></td></tr>';
        list.innerHTML+=html;
        
    }

    clearControls(){
        const title = document.getElementById('title').value="";
        const content = document.getElementById('content').value="";
        const important=document.getElementById('important').checked=false;
        
    }

    click(element){
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


}


//Local
class Storage{
    static getItems(){
        let items;
        if (localStorage.getItem('items')===null) {
            items=[];
        }else{
            items= JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }
    static displayItems(){
        const items = Storage.getItems();
        items.forEach(item => {
            const ui = new UI();
            ui.addToDo(item);
        });
    
    }
    static addItem(item){
        const items = Storage.getItems();
        items.push(item);
        localStorage.setItem('items',JSON.stringify(items));
    }
    static deleteItem(item){
        if(item.classList.contains('delete')){
            console.log(item);
           const id = item.getAttribute('data-id');

            console.log(id);
           const items = Storage.getItems();
            items.forEach((item,index)=>{
                if (item.Id==id) {
                    items.splice(index,1);
                    
                }

            });

           localStorage.setItem('items',JSON.stringify(items));
        }
    }
}

document.addEventListener('DOMContentLoaded',Storage.displayItems);


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

    //save
    Storage.addItem(toDo);


    ui.clearControls();

    e.preventDefault(); //eğer bu fonksiyon olmazsa submit devam eder ve sayfa yenilenir.
   
});


document.getElementById('list').addEventListener('click',function (e) {
    
    const ui = new UI();

    ui.click(e.target);
    
    Storage.deleteItem(e.target);
})


/* ES6 ABDURRAHİM BULUT 10 HAZİRAN 2019 */

