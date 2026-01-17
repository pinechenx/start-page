import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 时钟 Composable - 提供实时时间更新功能
 * 使用 requestAnimationFrame 优化性能，智能更新减少重渲染
 * 自动管理生命周期，防止内存泄漏
 */
export function useClock() {
  const time = ref('')
  let animationId = null

  const updateTime = () => {
    const now = new Date()
    const newTime = now.toLocaleTimeString()
    // 只在时间真正变化时更新，避免不必要的重渲染
    if (time.value !== newTime) {
      time.value = newTime
    }
    animationId = requestAnimationFrame(updateTime)
  }

  onMounted(() => {
    updateTime()
  })

  onUnmounted(() => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
  })

  return { time }
}
