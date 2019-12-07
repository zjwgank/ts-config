import "tsconfig-paths/register";

import { logTool } from 'action/index'

import config from 'config/index'

const str: string = "输出路径配置"

logTool()
console.log(str)
console.log(config)