import {toggleSwitch, body, footer, cards, submit, input, buttons, downBtn} from './const.js';

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    footer.classList.add(currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

const currentTheme_ = localStorage.getItem('theme_');
if (currentTheme_) {
    cards.forEach(card => {
        card.classList.add(currentTheme_);
    });

    if (currentTheme_ === 'dark-theme') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(event) {
    if (event.target.checked) {
        body.classList.replace('light', 'dark');
        footer.classList.replace('light', 'dark');
        submit.style.backgroundColor = '#fff';
        submit.style.color = '#000';
        input.style.border = '1px solid #fff';
        buttons.forEach(button => {
            button.style.border = '1px solid #fff';
            button.style.color = '#fff';
            button.onmouseover = () => {
                button.style.backgroundColor = '#fff'
                button.style.color = '#000'
            }

            button.onmouseout = () => {
                button.style.backgroundColor = '#000'
                button.style.color = '#fff'
            }
        });

        localStorage.setItem('theme', 'dark');

    } else {

        body.classList.replace('dark', 'light');
        footer.classList.replace('dark', 'light');
        submit.style.backgroundColor = '#000';
        submit.style.color = '#fff';
        input.style.border = '1px solid #000';
        downBtn.style.backgroundColor = '#fff'
        buttons.forEach(button => {
            button.style.border = '1px solid #000';
            button.style.color = '#000';
            button.onmouseover = () => {
                button.style.backgroundColor = '#000'
                button.style.color = '#fff'
            }

            button.onmouseout = () => {
                button.style.backgroundColor = '#fff'
                button.style.color = '#000'
            }
        });

        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme_(event) {
    if (event.target.checked) {
        cards.forEach(card => {
            card.classList.replace('light', 'dark-theme');
        });

        localStorage.setItem('theme_', 'dark-theme');
    } else {
        cards.forEach(card => {
            card.classList.replace('dark-theme', 'light');
        });

        localStorage.setItem('theme_', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme_);