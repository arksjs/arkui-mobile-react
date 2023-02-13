import { Exception } from '../helpers'

function getListAndItemName(name: string) {
  const listName = name === 'Step' ? 'Steps' : name.replace('Item', '')
  const itemName = listName === 'Steps' ? 'Step' : listName + 'Item'

  return {
    listName,
    itemName
  }
}

export function useException(source: string) {
  function printError(message: string) {
    console.error(new Exception(message, Exception.TYPE.DEFAULT, source))
  }

  function printWarn(message: string) {
    console.warn(new Exception(message, Exception.TYPE.DEFAULT, source).message)
  }

  /**
   * 打印组件prop错误
   * @param message 错误信息
   */
  function printPropError(message: string) {
    console.error(new Exception(message, Exception.TYPE.PROP_ERROR, source))
  }

  /**
   * 打印组件参数错误
   * @param message
   */
  function printParamError(message: string) {
    console.error(new Exception(message, Exception.TYPE.PARAM_ERROR, source))
  }

  function printListItemNotFoundError(key: string, isProp = false) {
    const msg = `The "${source}Item[${key}]" not found.`

    isProp ? printPropError(msg) : printParamError(msg)
  }

  function printNotInOptionsError(key: string, isProp = false) {
    const msg = `The "options[${key}]" not found.`

    isProp ? printPropError(msg) : printParamError(msg)
  }

  function printItemIsolationWarn() {
    const { listName, itemName } = getListAndItemName(source)

    printWarn(`${itemName} is not in ${listName}.`)
  }

  function createException(error: unknown) {
    return new Exception(error, Exception.TYPE.DEFAULT, source)
  }

  return {
    printWarn,
    printError,
    printPropError,
    printParamError,
    printListItemNotFoundError,
    printNotInOptionsError,

    printItemIsolationWarn,

    createException
  }
}
