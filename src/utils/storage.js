/**
 * Created by 627230087@qq.com on 2019/9/11.
 */

export function getItem(key) {
    const result =  window.localStorage.getItem(key)
    return JSON.parse(result)
}
export function setItem(key,value) {
     window.localStorage.setItem(key,JSON.stringify(value))
}
export function removeItem(key,value) {
     window.localStorage.removeItem(key)
}