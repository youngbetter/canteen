var Script = function () {
    var lineChartData = {
        labels : ["黄焖鸡","瓦香鸡","香菇鸡","川卤大师","小碗菜","四川担担面","麻辣烫","小碗菜","水饺","川味人家"],
        datasets : [
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [1000,980,900,890,870,770,700,690,650,600]
            }
        ]

    };

    var barChartData = {
        labels : ["四川燃面","麻辣香锅","小炒肉","免费汤","红烧肉","酱香饼","花生豆浆","甜牛奶","红烧排骨","黄焖鸡"],
        datasets : [
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                data : [86,84,83,80,80,78,77,76,75,75]
            }
        ]

    };

    new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);
    new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);
}();