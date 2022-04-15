const chart= document.querySelector("#chart").getContext('2d');

//create a new chart instace

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49632, 59096, 59828, 36684,
                33572, 39974, 48847, 48116, 61004, 58467],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698,
                5000, 3000, 18656, 24832, 36844, 74984],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    }
})
/*show are hide sidebar*/

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display='block';
})

closeBtn.addEventListener('click', () =>{
    sidebar.style.display='none';
})



//change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    ;
    themeBtn.querySelector('span:last-child').classList.toggle('active');
    ;
})