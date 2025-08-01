const timeline_data = [
  {
    id: "20250322",
    title: "命中注定的相遇",
    content: "听说油菜花的花语是朴实而长久的爱......",
  },
  {
    id: "20250323",
    title: "2025年3月23日小标题",
    content: "2025年3月23日简短内容",
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const startDate = new Date('2025-03-22');
  const endDate = new Date();
  const timeline = document.querySelector('.timeline');
  let currentDate = new Date(startDate);
  let index = 0;
  while (currentDate <= endDate) {
    index++;
    const year = currentDate.getFullYear();
    const month_02 = String(currentDate.getMonth() + 1).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1);
    const day_02 = String(currentDate.getDate()).padStart(2, '0');
    const day = String(currentDate.getDate());
    const idString = `${year}${month_02}${day_02}`;
    const dateString = `${year}年${month}月${day}号`;
    const position = index % 2 === 0 ? 'right' : 'left';
    const timeline_container = document.createElement('div');
    timeline_container.className = `timeline-container ${position}`;
    timeline_container.onclick = function () { window.location.href = `../html/${idString}.html` };
    timeline_container.id = idString;
    const div = document.createElement('div');
    div.className = 'timeline-container-content';
    div.id = `timeline-container-content-${idString}`;
    const span = document.createElement('span');
    span.textContent = dateString;
    div.appendChild(span);
    timeline_container.appendChild(div);
    timeline.appendChild(timeline_container);
    // 增加一天
    currentDate.setDate(currentDate.getDate() + 1);
  }
  timeline_data.forEach(data => {
    timeline_container_div = document.getElementById(`timeline-container-content-${data.id}`);
    const h2 = document.createElement('h2');
    h2.textContent = `${data.title}`;
    timeline_container_div.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = `${data.content}`;
    timeline_container_div.appendChild(p);
    const timeline_container_photo = document.createElement('div');
    timeline_container_photo.className = 'timeline-container-photo';
    const img = document.createElement('img');
    img.src = `../image/${data.id}_0.png`;
    timeline_container_photo.appendChild(img);
    timeline_container_div.appendChild(timeline_container_photo);
  })
}
);