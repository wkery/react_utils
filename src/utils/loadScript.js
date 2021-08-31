// 动态加载脚本资源
export function loadScript(url, cb) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
  
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          cb && cb();
        }
      };
    } else {
      script.onload = () => {
        cb && cb();
      };
    }
  
    script.src = url;
    document.querySelector('head').appendChild(script);
  }
  
  // loadScript的promise版本
  export function loadScriptP(url) {
    return new Promise((resolve) => {
      loadScript(url, resolve);
    });
  }
  