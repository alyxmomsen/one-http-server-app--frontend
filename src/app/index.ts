export class MyClass {

    private defaultBehavior:IBehavior;

    private request(requestBehavior:IBehavior|null = null) {

        if(requestBehavior === null) return this.defaultBehavior.exec();
        
        requestBehavior.exec();

    }

    doSomeThing(beforeRequest:() => void , requestBehavior:IBehavior|null ,afterResponse:()=>void){
        beforeRequest();

        this.request(requestBehavior);
        
        afterResponse();
        
    }

    constructor () {
        this.defaultBehavior = new Behavior_1();
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

export abstract class Behavior implements IBehavior {

    protected requestData:TRequestData ;

    exec(): string {

        const baseurl  = "https://ardently-refreshing-opah.cloudpub.ru/" ;
        // const baseurl = "http://localhost:3000/" ;

        /**
         * name of this endpoint is temporary 
         */
        fetch(baseurl + 'api/add-transaction' , {
            method:'post',
            body:JSON.stringify(this.requestData),
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


        return 'message after all' ;
    }

    constructor (requestData:TRequestData) {
        this.requestData = requestData
    }
}



export class Behavior_default extends Behavior {
    constructor () {
        super({opcode:EnumHookOpCode.add_transaction});
    }
}
export class Behavior_1 extends Behavior {
    constructor () {
        super({opcode:EnumHookOpCode.add_transaction});
    }
}

export class Behavior_2 extends Behavior {
    constructor () {
        super({opcode:EnumHookOpCode.other});
    }
}