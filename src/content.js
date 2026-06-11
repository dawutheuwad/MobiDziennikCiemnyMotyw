document.querySelectorAll('#menu_gray ul.dropdown li').forEach(li => {
    li.addEventListener('mouseenter', () => {
        li.style.background = '#373737';
    });
    li.addEventListener('mouseleave', () => {
        li.style.background = '';
    });
});

const month = new Date().getMonth();
const day = new Date().getDate();
const h1 = document.querySelector('#top_green .logo h1');

const nodesToWrap = [];
for (const node of h1.childNodes) {
    if (node.nodeName === 'SMALL') break;
    nodesToWrap.push(node);
}

const wrapper = document.createElement('span');
wrapper.style.textShadow = 'none';
wrapper.style.webkitBackgroundClip = 'text';
wrapper.style.webkitTextFillColor = 'transparent';
wrapper.style.backgroundClip = 'text';

if (month === 5) {
    wrapper.style.backgroundImage = 'linear-gradient(to right, #E40303, #FF8C00, #FFED00, #008026, #004DFF, #750787)';
} else if (day == 11 && month == 10 || day == 3 && month == 4) {
    wrapper.style.backgroundImage = 'linear-gradient(to right, #FFF 40%, #E40303 40%)';
} else if (day == 1 && month == 3) {
    h1.textContent = 'LIBRUS Synergia';
} else if (day >= 24 && day <= 26 && month == 11) {
    wrapper.style.backgroundImage = 'linear-gradient(to right, #E40303 40%, #008026 40%)';
}

const topGreen = document.getElementById('top_green');
if (day == 1 && month == 3) {
    topGreen.style.background = '#9b7fa6';
} else {
    topGreen.style.background = '#00072d';
}
topGreen.style.backgroundImage = 'none';

if (wrapper.style.backgroundImage) {
    h1.insertBefore(wrapper, nodesToWrap[0]);
    nodesToWrap.forEach(node => wrapper.appendChild(node));
}