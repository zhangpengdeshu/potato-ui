// 在连接末尾添加时间戳
const addTimestamp = (url) => {
  const timestamp = `t=${new Date().getTime()}`;
  return url + (url.indexOf('?') === - 1 ? '?' : '&') + timestamp;
}
// 把图片url直接转化为base64
const urlToBase64 = (url) => new Promise((resolve) => {
  const xhr = new XMLHttpRequest();
  const reqUrl = /^(http|https)/.test(url) ? addTimestamp(url) : url;
  xhr.open('get', reqUrl);
  xhr.send();
  xhr.responseType = 'blob';
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const fileReader = new FileReader();
      fileReader.onload = function (e){
        resolve(e.target.result);
      }
      const blob = new Blob([xhr.response], {'type': 'image/jpeg'});
      fileReader.readAsDataURL(blob);
    }
  }
})