/* 方案一

    1.根字体 = (手机横向设备独立像素 * 100) / 设计稿宽度
    2.编写样式时：
        直接以rem位单位
        值为： 设计值 / 100
*/
export function adapter1() {
    // 1.获取手机横向的独立像素
    const dip = document.documentElement.clientWidth;
    // 2.计算根字体的大小
    const rootFontSize = (dip * 100) / 375;
    // 3.设置根字体
    document.documentElement.style.fontSize = rootFontSize + 'px';
}

/* 方案二

    1.根字体 = 手机横向设备独立像素 / 10
    2.编写样式时:
        直接以rem为单位
        值为： 设计值/（设计稿宽度/10）
*/
export function adapter2() {
    // 1.获取手机横向的独立像素
    const dip = document.documentElement.clientWidth;
    // 2.计算根字体的大小
    const rootFontSize = dip / 10;
    // 3.设置根字体
    document.documentElement.style.fontSize = rootFontSize + 'px';
}

/* adapter 的使用 */
// 1.在使用的页面引入 adapter方法
// 2.初始化时执行一次
// adapter1();
// 3.当窗口大小变化时执行 adapter
// window.onresize = adapter1;

// 在.less中的使用: (设计搞的值/100)rem
// .title { font-size: 0.2rem; }

