//test
const month_selector = document.querySelector("#month");
const month_label = month_selector.children;

const year_input = document.querySelector("#year");

const cal_days = document.querySelector("#cal-days");
const day_list = document.querySelector(".days").children;

const prev_month = document.querySelector("#prev-month");
const next_month = document.querySelector("#next-month");

// Default (today's date)
const date = new Date();
const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];

month_selector.value = month_label[month].value;
year_input.value = year;
updateCalendar();

// Event Listeners
year_input.addEventListener('input', updateCalendar);

for (const month_option of month_label) {
    month_option.addEventListener('click', updateCalendar);
}

prev_month.addEventListener('click', () => {
    updateMonth('prev');
});
next_month.addEventListener('click', () => {
    updateMonth('next');
});

// Functions
function updateCalendar() {
    cal_days.innerHTML = '';

    const month_index = new Date(Date.parse(month_selector.value + " 1, " + year_input.value)).getMonth();
    const total_days = new Date(year_input.value, month_index + 1, 0).getDate();
    let day_index = new Date(year_input.value, month_index, 1).getDay();

    let tr = document.createElement("tr");
    cal_days.appendChild(tr);

    for (let i = 0; i < day_index; i++) {
        const td = document.createElement("td");
        tr.appendChild(td);
    }

    for (let i = 1; i <= total_days; i++) {
        if (day_index > 6) {
            tr = document.createElement("tr");
            cal_days.appendChild(tr);
            day_index = 0;
        }

        const td = document.createElement("td");
        td.innerText = i;
        tr.appendChild(td);
        day_index++;
    }

    for (let i = day_index; i <= 6; i++) {
        const td = document.createElement("td");
        tr.appendChild(td);
    }
}

function updateMonth(specification) {
    if (month_selector.value == "dec" && specification == 'next') {
        month_selector.value = "jan";
        year_input.value++;
    } else if (month_selector.value == "jan" && specification == 'prev') {
        month_selector.value = "dec";
        year_input.value--;
    } else {
        for (let month of month_label) {
            if (month.value == month_selector.value) {
                (specification == 'prev') ? month_selector.value = month.previousElementSibling.value : month_selector.value = month.nextElementSibling.value;
                break;
            }
        }
    }
    updateCalendar();
}
