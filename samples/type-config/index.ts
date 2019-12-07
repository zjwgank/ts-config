import "tsconfig-paths/register"

import { typeConfig, TypeClassA, TypeClassB } from 'config/index'

const str: string = '类型配置'

const logTool = (str: string) => {
    console.log(str)
}

logTool(str)

console.log(typeConfig)