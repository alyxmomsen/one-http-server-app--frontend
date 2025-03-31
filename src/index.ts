import { Behavior, Behavior_1, Behavior_2, MyClass } from "./app";

const app = new MyClass() ;

(() => {

    const btn_1 = document.getElementById('btn_1');
    const btn_2 = document.getElementById('btn_2');
    const statusBar = document.getElementById('status-bar');
    
    if(btn_1 === null) {
        console.log('button #1 is not defined');
        return ;
    } 

    if(btn_2 === null) {
        console.log('button #2 is not defined');
        return ;
    } 
    
    if(statusBar === null) {
        console.log('statusBar is not defined');
        return ;
    } 

    btn_1.addEventListener('click' , () => {
        app.doSomeThing(() => {
            statusBar.innerHTML = 'what is going here' ;
        } , new Behavior_1() ,() => {
            statusBar.innerHTML = 'button 1 is clicked'; 
        });
    });

    btn_2.addEventListener('click' , () => {
        app.doSomeThing(() => {
            statusBar.innerHTML = 'what is going here' ;
        } ,
        new Behavior_2() ,
        () => {
            statusBar.innerHTML = 'button 2 is clicked'; 
        });
    });
    

})()

