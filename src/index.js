module.exports = function () {
  function miniAdd(a, b) {
    let typeA = typeof a, typeB = typeof b
    if (typeA === 'string' || typeB === 'string') {
      return `${a}${b}`
    }
    if (typeA === 'number' || typeB === 'number') {
      return a + b
    }

    return null
  }

  console.log('引入组件成功! 测试: miniAdd(1, 2)')
} 