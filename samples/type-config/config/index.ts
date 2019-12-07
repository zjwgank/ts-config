export const typeConfig = {
    title: '类型配置',
    version: '1.0.0',
    description: 'type-config'
}


// console.log(global, $)
// let testType = 'hello';
console.log(Abs)

export class TypeClassA {
    title = '类型配置测试1'

    logMe() {
        console.log(this.title)
    }
}

export class TypeClassB extends TypeClassA {
    constructor() {
        super()
    }
}