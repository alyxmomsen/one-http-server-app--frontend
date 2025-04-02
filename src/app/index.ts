export class MyClass {

    private defaultBehavior:IRequestBehavior;
    
    private request(requestBehavior:IRequestBehavior|null = null) {

        if(requestBehavior === null) return this.defaultBehavior.exec();
        requestBehavior.exec();

    }

    doSomeThing(beforeRequest:() => void , requestBehavior:IRequestBehavior|null ,afterResponse:()=>void){
        beforeRequest();
        this.request(requestBehavior);
        afterResponse();
    }

    constructor () {
        this.defaultBehavior = new AddTransactionBehavior();
    }
}

export interface IRequestBehavior {
    exec():string;
}

export enum EnumHookOpCode {
    add_transaction,
    other,
}

export type TRequestData = {
    userId: number;
    opcode: EnumHookOpCode;
};

export abstract class RequestBehavior implements IRequestBehavior {

    protected requestData:TRequestData ;

    exec(): string {

        const baseurl  = "https://ardently-refreshing-opah.cloudpub.ru/" ;
        // const baseurl = "http://localhost:3000/" ;

        /**
         * name of this endpoint is temporary 
         * becose i think this will be universal route like GraphQl of something
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

export class Behavior_default extends RequestBehavior {
    constructor () {
        super({opcode:EnumHookOpCode.add_transaction , userId:0}); // BEWARE !! #hardcode
    }
}

export class AddTransactionBehavior extends RequestBehavior {
    constructor () {
        super({opcode:EnumHookOpCode.add_transaction,  userId:0}); // BEWARE !! #hardcode
    }
}

export class Behavior_2 extends RequestBehavior {
    constructor () {
        super({opcode:EnumHookOpCode.other , userId:0}); // BEWARE !! #hardcode
    }
}