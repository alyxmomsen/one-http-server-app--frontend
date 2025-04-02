import { RequestBehavior, AddTransactionBehavior, Behavior_2, MyClass } from "./app";

const app = new MyClass() ;

(() => {

    const addTransactionBtn = document.getElementById('btn__add-transaction');

    const btn_2 = document.getElementById('btn_2');
    
    const statusBar = document.getElementById('status-bar');
    
    if(addTransactionBtn === null) {
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

    addTransactionBtn.addEventListener('click' , () => {
        app.doSomeThing(() => {
            statusBar.innerHTML = 'what is going here' ;
        } , new AddTransactionBehavior() ,() => {
            statusBar.innerHTML = 'transaction is sended'; 
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

