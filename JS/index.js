var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                fill: 0,
                backgroundColor: "#7ED321",
                lineTension: 0, //弧度
                label: "REVENUE",
                borderColor: '#7ED321',
                data: [3600, 18000, 9000, 2500, 3000, 6500, 9000],
            },
            {   
                fill: false,
                backgroundColor: "#D0021B",
                lineTension: 0, //弧度
                label: "Cost",
                borderColor: '#D0021B',
                data: [4500, 6000, 9000, 4000, 1500, 2500, 3500],
            },
            {
                fill: false,
                backgroundColor: "#4A90E2",
                lineTension: 0, //弧度
                label: "INCOME",
                borderColor: '#4A90E2',
                data: [5000, 4000, 3000, 5000, 5000, 7000, 6000],
            }
        
        ]
    },

    // Configuration options go here
    options: {}
});

var revenue = new CountUp("revenue", 0, 66666);
revenue.start();
var cost = new CountUp("cost", 0, 36512);
cost.start();
var income = new CountUp("income", 0, 30154);
income.start();

$('.weekly').on('click',function(){
    $('.select_time').toggleClass('hide')
})

$('.select_time li').on('click',function(){
    var timeText = $(this).text()
    $('.weekly span').text(timeText)
    $('.select_time').addClass('hide')
})

