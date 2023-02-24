const ulEl = $("#stu-list")
fetch('/api/students')
    .then(res => res.json())
    .then(stuData => renderData(stuData))



function renderData(data) {
    for (let i = 0; i < data.length; i++) {
        const liEl = $("<li>");
        const btnEl = $("<button>");
        btnEl.text("X");
        btnEl.attr("data-stu_id", data[i].stu_id)
        liEl.attr("class", "list-group-item");
        liEl.text(data[i].name);
        liEl.append(btnEl)
        ulEl.append(liEl)
    }
}