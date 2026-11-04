const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
  // window.location="https://www.google.com/?zx=1782965621199"
  // window.location.replace("https://www.google.com/?zx=1782965621199")
  // window.location.assign("https://www.google.com/?zx=1782965621199")
  // window.location.reload()
  // window.history.back()
  // window.history.forward()
  // window.history.go(1)
  // console.log(window.history.length)
  // console.log(url.value)
  window.location=url.value
})