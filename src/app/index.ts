export class MyClass {

    private behavior:IBehavior;

    doSomeThing(before:() => void ,after:()=>void){
        before();
        this.behavior.exec();
        after();
        
    }

    constructor () {
        this.behavior = new ConcreteBehavior();
    }
}

export interface IBehavior {
    exec():string;
}

export class ConcreteBehavior implements IBehavior {
    exec(): string {

        console.log('concrete behavior');

        fetch('http://localhost:3000/api/add-transaction' , {
            method:'post',
            body:JSON.stringify({data:0}),
            headers:{
                'content-type':'application/json'
            },
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch((e) => {
            alert('errror');
        }).finally(() => {
            console.log('finally');
        });


        return 'bick dick bick dick dick head' ;
    }
}