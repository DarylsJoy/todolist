/**
 * html5  localstorage存储数据
 */

const STORAGE_KEY = "react_todos";
export default {
  fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save(items) {
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}