document.addEventListener('DOMContentLoaded', function () {
    const startDate = new Date('2025-03-22');
    const endDate = new Date();
    const directory_list = document.querySelector('.directory-list'); // 假设有一个容器元素

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        // 格式化日期为YYYYMMDD
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const dateString = `${year}${month}${day}`;

        // 创建列表项
        const directory_item = document.createElement('li');
        directory_item.className = 'directory-item';
        directory_item.textContent = dateString;
        directory_item.onclick = function () {
            scrollToCenter(dateString);
        };
        // 添加到容器
        directory_list.appendChild(directory_item);
        // 增加一天
        currentDate.setDate(currentDate.getDate() + 1);
    }
}
);
