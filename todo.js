let todoList=[];

displayItems();

function addTodo() {
    let inputElement=document.querySelector('#todo-input');
    let todoItem=inputElement.value;
    let dateElement=document.querySelector('#todo-date');
    let todoDate=dateElement.value;
        // document.write(inputElement);
        // let date=document.querySelector('#date');
        // let dateItem=date.value;
        // console.log(dateItem);
        // document.write(date.value);
        todoList.push({item : todoItem,dueDate : todoDate});
        inputElement.value='';
        dateElement.value='';
        displayItems();
    }
    
function displayItems() { 
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';

    // if(todoList.item==null || todoList.dueDate==null) {

    // }
    // else {
        for(let i=0;i<todoList.length;i++) {
            // let item=todoList[i].item;
            // let dueDate=todoList[i].dueDate;
            let {item,dueDate}=todoList[i];
            newHtml+=`
            <div id='last-div'>
                <span>${item}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>${dueDate}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class='btn-delete' onclick="todoList.splice(${i},1);displayItems();">Delete</button>
            </div>
            `;
        }
        containerElement.innerHTML=newHtml;
    // }
}