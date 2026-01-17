/**
 * 防抖函数 - 延迟执行，减少高频调用
 * @param {Function} fn - 要执行的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
export function debounce(fn, delay = 300) {
  let timeoutId = null
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
      timeoutId = null
    }, delay)
  }
}

/**
 * 使用 requestIdleCallback 在浏览器空闲时执行任务
 * 降低主线程阻塞，提升响应性
 * @param {Function} callback - 要执行的回调函数
 * @param {Object} options - 配置选项
 */
export function runWhenIdle(callback, options = { timeout: 100 }) {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(callback, options)
  } else {
    // 降级方案：使用 setTimeout
    setTimeout(callback, 0)
  }
}
