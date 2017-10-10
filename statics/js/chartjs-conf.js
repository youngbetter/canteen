var Script = function () {
    var doughnutData = [
        {
            value: 10,
            color:"#1abc9c",
        },
        {
            value : 8,
            color : "#2ecc71",
        },
        {
            value : 9,
            color : "#3498db",
        },
        {
            value : 12,
            color : "#9b59b6",
        },
        {
            value : 20,
            color : "#33FF00",
        },
        {
            value : 12,
            color : "#FFFF66",
        },
        {
            value : 7,
            color : "#006600",
        },
        {
            value : 15,
            color : "#FF99CC",
        },
        {
            value : 7,
            color : "#666699",
        }
    ];
    var lineChartData = {
        labels : ["黄焖鸡","瓦香鸡","香菇鸡","川卤大师","小碗菜","四川担担面","麻辣烫"],
        datasets : [
            // {
            //     fillColor : "rgba(220,220,220,0.5)",
            //     strokeColor : "rgba(220,220,220,1)",
            //     pointColor : "rgba(220,220,220,1)",
            //     pointStrokeColor : "#fff",
            //     data : [65,59,90,81,56,55,40]
            // },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [560,480,400,190,960,270,1000]
            }
        ]

    };
    // var pieData = [
    //     {
    //         value: 30,
    //         color:"#1abc9c"
    //     },
    //     {
    //         value : 50,
    //         color : "#16a085"
    //     },
    //     {
    //         value : 100,
    //         color : "#27ae60"
    //     }

    // ];
    // var barChartData = {
    //     labels : ["January","February","March","April","May","June","July"],
    //     datasets : [
    //         {
    //             fillColor : "rgba(220,220,220,0.5)",
    //             strokeColor : "rgba(220,220,220,1)",
    //             data : [65,59,90,81,56,55,40]
    //         },
    //         {
    //             fillColor : "rgba(151,187,205,0.5)",
    //             strokeColor : "rgba(151,187,205,1)",
    //             data : [28,48,40,19,96,27,100]
    //         }
    //     ]

    // };
    // var chartData = [
    //     {
    //         value : Math.random(),
    //         color: "#D97041"
    //     },
    //     {
    //         value : Math.random(),
    //         color: "#C7604C"
    //     },
    //     {
    //         value : Math.random(),
    //         color: "#21323D"
    //     },
    //     {
    //         value : Math.random(),
    //         color: "#9D9B7F"
    //     },
    //     {
    //         value : Math.random(),
    //         color: "#7D4F6D"
    //     },
    //     {
    //         value : Math.random(),
    //         color: "#584A5E"
    //     }
    // ];
    var chartData = [
        {
            value: 4.5,
            color:"#1abc9c",
        },
        {
            value : 4.3,
            color : "#2ecc71",
        },
        {
            value : 3.8,
            color : "#3498db",
        },
        {
            value : 4.8,
            color : "#9b59b6",
        },
        {
            value : 3.6,
            color : "#33FF00",
        }
    ];

    var radarChartData = {
        labels : ["口味","分量","新鲜度","价格","营业时间","食材","态度"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [100,79,78,80,82,87,90]
            }
        ]

    };
    new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(doughnutData);
    new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);
    new Chart(document.getElementById("radar").getContext("2d")).Radar(radarChartData);
    new Chart(document.getElementById("polarArea").getContext("2d")).PolarArea(chartData);
    //new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);
    //new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData);
}();