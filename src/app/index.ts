export class MyClass {

    private defaultBehavior:IBehavior;

    private request(clickBehavior:IBehavior|null = null) {

        if(clickBehavior === null) return this.defaultBehavior.exec();
        
        clickBehavior.exec();

    }

    doSomeThing(before:() => void , clickBehavior:IBehavior|null ,after:()=>void){
        before();

        this.request(clickBehavior);
        
        after();
        
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

    exec(/* opcode:EnumHookOpCode */): string {

        // const requestData:TRequestData = {
        //     opcode,
        // }

        const baseurl  = "https://ardently-refreshing-opah.cloudpub.ru/" ;
        // const baseurl = "http://localhost:3000/" ;


        /**
         * endpoint name is temp
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
        super({opcode:0});
    }
}
export class Behavior_1 extends Behavior {
    constructor () {
        super({opcode:0});
    }
}

export class Behavior_2 extends Behavior {
    constructor () {
        super({opcode:1});
    }
}