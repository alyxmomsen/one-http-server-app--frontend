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

export enum EnumHookOpCode {
    add_transaction,
    other,
}

export type TRequestData = {
    opcode: EnumHookOpCode;
};

export class ConcreteBehavior implements IBehavior {
    exec(): string {

        const requestData:TRequestData = {
            opcode:1,
        }

        console.log('concrete behavior');

        const baseurl  = "https://ardently-refreshing-opah.cloudpub.ru/" ;
        // const baseurl = "http://localhost:3000/" ;

        fetch(baseurl + 'api/add-transaction' , {
            method:'post',
            body:JSON.stringify(requestData),
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