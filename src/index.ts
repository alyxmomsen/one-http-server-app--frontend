import { MyClass } from "./app";

const app = new MyClass() ;

(() => {

    const btn = document.getElementById('btn');
    const statusBar = document.getElementById('status-bar');
    
    if(btn === null) return ;
    if(statusBar === null) return ;

    btn.addEventListener('click' , () => {
        app.doSomeThing(() => {
            statusBar.innerHTML = 'what is going here' ;
        } ,() => {
            statusBar.innerHTML = 'что то произошло'; 
        });
    });


    

})()

