export function currenTime() {
  // 获取当前日期的年、月、日信息
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0') // 月份从0开始，需要加1，并确保两位数字
  const day = String(now.getDate()).padStart(2, '0')
  // 创建日期相关的文件夹名称，例如：YYYY-MM-DD
  return `${year}-${month}-${day}`
}
