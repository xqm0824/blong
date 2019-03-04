import http from "@/libs/index.js"
export const login = (param) => {
  return http({
    method: "post",
    url: http.adornUrl("/user/login"),
    data: param
  })
}

export const reg = (param) => {
  return http({
    method: "post",
    url: http.adornUrl("/user/reg"),
    data: param
  })
}
