// 定义 favicon 数组
const favicons = [
    "../image/xiaolihua_01.png",
    "../image/xiaolihua_02.png",
    "../image/xiaolihua_03.png",
    "../image/xiaolihua_04.png",
    "../image/xiaolihua_05.png",
    "../image/xiaolihua_06.png",
    "../image/xiaolihua_07.png",
    "../image/xiaolihua_08.png",
    "../image/xiaolihua_09.png",
    "../image/xiaolihua_10.png",
    "../image/xiaolihua_11.png",
    "../image/xiaolihua_12.png",
    "../image/xiaolihua_13.png",
    "../image/xiaolihua_14.png",
    "../image/xiaolihua_15.png",
    "../image/xiaolihua_16.png",
    "../image/xiaolihua_17.png",
    "../image/xiaolihua_18.png",
    "../image/xiaolihua_19.png",
    "../image/xiaolihua_20.png",
    "../image/xiaolihua_21.png",
    "../image/xiaolihua_22.png",
    "../image/xiaolihua_23.png",
    "../image/xiaolihua_24.png",
    "../image/xiaolihua_25.png",
    "../image/xiaolihua_26.png",
    "../image/xiaolihua_27.png",
    "../image/xiaolihua_28.png",
    "../image/xiaolihua_29.png",
    "../image/xiaolihua_30.png",
    "../image/xiaolihua_31.png",
];

// 随机选择一个 favicon
function setRandomFavicon() {
    const randomIndex = Math.floor(Math.random() * favicons.length);
    const faviconUrl = favicons[randomIndex];

    // 检查是否已存在 favicon，有则替换，无则创建
    let faviconLink = document.querySelector('link[rel="icon"]');

    if (!faviconLink) {
        faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        document.head.appendChild(faviconLink);
    }

    faviconLink.href = faviconUrl;
}

// 页面加载时执行
window.addEventListener('DOMContentLoaded', setRandomFavicon);