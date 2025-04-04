document.addEventListener("DOMContentLoaded",()=>{
    const add=document.getElementById("add-task-btn");
    const title=document.getElementById("todo-input");
    const lst=document.getElementById("todo-list");
    document.getElementById("");
    let mp= new Map();
    render();
    

lst.addEventListener('click',(event)=>{
    var g=event.target;
    if(g.tagName=='LI')
    {
        g.classList.toggle("completed");
        x=mp.get(Number(g.getAttribute('id'))).completed;
        mp.get(Number(g.getAttribute('id'))).completed=!x;
        localStorage.setItem("task",JSON.stringify([...mp]));
    }
    else if(g.tagName=='BUTTON')
    {
        var li = g.parentElement;
        var key = li.getAttribute('id');
        li.remove();
        mp.delete(Number(key));
        localStorage.setItem("task",JSON.stringify([...mp]));
        console.log(mp);
    }
    else
    return;
});
add.addEventListener('click',()=>{
    var text=title.value.trim();
    if(text=="")
        return;
    title.value="";
    let value={
        title:text,
        completed:false
    };
    mp.set(Date.now(),value);
    localStorage.setItem("task",JSON.stringify([...mp]));
    console.log(mp);
    render();
});

function render(){
    lst.innerHTML="";
    var g=document.createElement('ul');
    let stored=localStorage.getItem("task");
    mp=new Map(JSON.parse(stored));
    mp.forEach((value,key) => {
        var li=document.createElement('li');
        li.innerHTML=`<span> ${value.title}</span> <button> delete </button>`;
        li.setAttribute('id',key);
        if(value.completed==true)
            li.classList.add("completed");
        lst.appendChild(li);
    }); 
}
});