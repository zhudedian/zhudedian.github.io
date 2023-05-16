
(function() {
    setHtmlFontSize();
    window.onresize = () => setHtmlFontSize();
 
    function setHtmlFontSize() {
      let deviceWidth = document.documentElement.clientWidth,
          deviceHeight = document.documentElement.clientHeight;
      if (Math.abs(window.orientation) === 90) deviceWidth = deviceHeight;  //横屏状态
 
      // 兼容浏览器端，宽度超过600px则固定宽度大小，600按照自己页面需求做调整即可
      document.getElementsByTagName("html")[0].style.maxWidth = "600px";
      document.getElementsByTagName("html")[0].style.margin = "0px auto";
      if (deviceWidth > 600) deviceWidth = 600;
 
      // 设置移动端字体大小
      document.getElementsByTagName("html")[0].style.fontSize = deviceWidth / 37.5 + "px";
    }
})();