var timer = {
    study: 25,
    short_break: 5,
    long_break: 15,
    lb_interval: 3,
}

function customizer() {
    var ctm_study = document.getElementById('study')
    var ctm_short_break = document.getElementById('short-break')
    var ctm_long_break = document.getElementById('long-break')

    ctm_study = ctm_study.value
    ctm_short_break = ctm_short_break.value
    ctm_long_break = ctm_long_break.value

    ctm_study = Number(ctm_study)
    ctm_short_break = Number(ctm_short_break)
    ctm_long_break = Number(ctm_long_break)

    ctm_study = Math.min(60, Math.max(1, ctm_study))
    ctm_short_break = Math.min(60, Math.max(1, ctm_short_break))
    ctm_long_break = Math.min(60, Math.max(1, ctm_long_break))

    timer['study'] = ctm_study
    timer['short_break'] = ctm_short_break
    timer['long_break'] = ctm_long_break

    switcher('study');
    document.getElementById('ctm-form').reset();
};

let interval;

const main_button = document.getElementById('js-btn');
main_button.addEventListener('click', () => {
    const { action } = main_button.dataset;
    if (action === 'start') {
        start_timer();
    } else {
        stop_timer();
    }
});

const buttons = document.querySelector('#js-mode-buttons');
buttons.addEventListener('click', handler);

function get_remaining_time(endtime) {
    const current_time = Date.parse(new Date());
    const time_diff = endtime - current_time

    const total = Number.parseInt(time_diff / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);

    return {
        total,
        minutes,
        seconds,
    };
}

function start_timer() {
    let { total } = timer.remaining_time;
    const end_time = Date.parse(new Date()) + total * 1000;

    main_button.dataset.action = 'stop';
    main_button.textContent = 'stop';
    main_button.classList.add('active');

    interval = setInterval(function () {
        timer.remaining_time = get_remaining_time(end_time);
        updater()

        total = timer.remaining_time.total;
        if (total <= 0) {
            clearInterval(interval)
        }
    }, 1000)
}

function stop_timer() {
    clearInterval(interval);

    main_button.dataset.action = 'start';
    main_button.textContent = 'start';
    main_button.classList.remove('active');
}

function updater() {
    const { remaining_time } = timer;
    const minutes = `${remaining_time.minutes}`.padStart(2, '0');
    const seconds = `${remaining_time.seconds}`.padStart(2, '0');

    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');

    min.textContent = minutes;
    sec.textContent = seconds;
}

function switcher(mode) {
    timer.mode = mode;
    timer.remaining_time = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    document
        .querySelectorAll('button[data-mode]')
        .forEach(e => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.body.style.backgroundColor = `var(--${mode})`;

    updater()
}

function handler(evt) {
    const { mode } = evt.target.dataset;

    if (!mode) return;

    switcher(mode)
    stop_timer();
}

document.addEventListener('DOMContentLoaded', () => {
    switcher('study');
})