import 'tsconfig-paths/register'
import { logTool } from 'action/index'
import config from 'config/index'

const str: string = "严格模式配置"


const nullVal: string = '1'
const undefiedVal: undefined = undefined

// noImplictAny为true时,下面的声明会有什么问题 ？
// const a;
// let a;

// // noImplictThis为true时，下面的会有什么问题？
// let a;
// this.testA = a;

function logMe(x: any) {
    // this.a = x
    console.log(x)
}

class A {
    a: string = 'a'
    b: undefined
}

class B extends A {
}

logTool()
console.log(str)
console.log(config)