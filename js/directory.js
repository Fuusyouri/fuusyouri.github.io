// 滚动到中心
function scrollToCenter(elementId) {
    const element = document.getElementById(elementId);
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

    window.scrollTo({
        top: middle,
        behavior: 'smooth'
    });
}

// 目录功能
document.addEventListener('DOMContentLoaded', function () {
    const tocBtn = document.getElementById('tocBtn');
    const directory = document.getElementById('directory');
    const overlay = document.getElementById('overlay');
    const directoryLinks = document.querySelectorAll('.directory-link');

    // 显示/隐藏目录
    if (tocBtn) {
        tocBtn.addEventListener('click', function () {
            directory.classList.toggle('show');
            overlay.style.display = directory.classList.contains('show') ? 'block' : 'none';
        });
    }

    // 点击遮罩层关闭目录
    if (overlay) {
        overlay.addEventListener('click', function () {
            directory.classList.remove('show');
            overlay.style.display = 'none';
        });
    }

    // 目录链接点击事件
    if (directoryLinks) {
        directoryLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                // 高亮当前项目
                directoryLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // 关闭目录
                directory.classList.remove('show');
                overlay.style.display = 'none';
            });
        });
    }
});