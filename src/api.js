import promise from "es6-promise"
import "whatwg-fetch"

import Vue from 'vue'

let app = new Vue()


// 取excel
export const sendBlob = async function(url, params) {
    let response = await fetch(`/depression-eap/${url}`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
    }).catch((error) => {
        console.error(error)
    })

    return await response.blob().catch((error) => {
        console.error(error)
    })

}


// export const sendFetch = async function(url, params) {
//     let response = await fetch(`/depression-eap/${url}`, {
//         method: "POST",
//         credentials: "include",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: params
//     }).catch((error) => {
//         console.error(error)
//     })

//     return await response.json().catch((error) => {
//         console.error(error)
//     })

// }

export const sendFetch = async function(url, params) {
    let response = await fetch(`/depression-eap/${url}`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
    }).catch((error) => {
        console.error(error)
    })

    let res = await response.json().catch((error) => {
        console.error(error)
    })

    if (res.code == '3001' || res.code == '3002') { // 超时  信息丢失
        app.$alert(res.msg, '提示消息：', {
            confirmButtonText: '确定',
            callback() {
                location.href = "/"
            }
        })

        return
    }
    if (res.code == '3003') { // 无权限
        // app.$alert(res.msg, '提示消息：', {
        //     confirmButtonText: '确定',
        // });
        // return
        console.log('无权限')
    }
    // 其他
    return res
}





export const getResponsesFile = async(url, params) => {
    const response = await fetch(url, {
        method: "POST",
        body: params
    }).catch((error) => {
        console.log(error)
    })

    return await response.json().catch((error) => {
        console.log(error)
    })
}

//  '/depression-eap/Qiniu/obtainPictureUploadToken.json'  图片
//  '/depression-eap/Qiniu/obtainFileUploadToken.json'     文件（音乐，视频）

export const getToken = async(url) => {

    let response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: ""
    }).catch((error) => {
        console.log(error)
    })

    return await response.json().catch((error) => {
        console.log(error)
    })

}
