document.addEventListener("DOMContentLoaded",()=>{
    const add=document.getElementById("add-task-btn");
    const title=document.getElementById("todo-input");
    const lst=document.getElementById("todo-list");
    document.getElementById("");
    let mp= new Map();

lst.addEventListener('click',(event)=>{
    var g=event.target;
    if(g.tagName=='LI')
        g.classList.toggle("completed");
    else if(g.tagName=='BUTTON')
    {
        var li = g.parentElement;
        var key = li.getAttribute('id');
        li.remove();
        mp.delete(Number(key));
        console.log(mp);
    }
    else
    return;
});8
add.addEventListener('click',()=>{
    var text=title.value.trim();
    if(text=="")
        return;
    title.value="";
    mp.set(Date.now(),text);
    render(mp);
});

function render(mp){
    lst.innerHTML="";
    var g=document.createElement('ul');
    mp.forEach((value,key) => {
        var li=document.createElement('li');
        li.innerHTML=`<span> ${value}</span> <button> delete </button>`;
        li.setAttribute('id',key);
        lst.appendChild(li);
    }); 
}
});