var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      // var tax_data = [
      //      {"period": "21:00", "Mei": 60, "Tao": 10, "Ju":70},
      //      {"period": "20:00", "Mei": 100, "Tao": 40, "Ju":110},
      //      {"period": "19:00", "Mei": 300, "Tao": 30, "Ju":40},
      //      {"period": "19:00", "Mei": 100, "Tao": 100, "Ju":1000},
      //      {"period": "18:00", "Mei": 600, "Tao": 200, "Ju":800},
      //      {"period": "17:00", "Mei": 1200, "Tao": 600, "Ju":900},
      //      {"period": "16:00", "Mei": 700, "Tao": 600, "Ju":300},
      //      {"period": "15:00", "Mei": 100, "Tao": 50, "Ju":200},
      //      {"period": "14:00", "Mei": 100, "Tao": 100, "Ju":80},
      //      {"period": "13:00", "Mei": 200, "Tao": 300, "Ju":200},
      //      {"period": "12:00", "Mei": 1000, "Tao": 1000, "Ju":600},
      //      {"period": "11:00", "Mei": 600, "Tao": 800, "Ju":1300},
      //      {"period": "10:00", "Mei": 150, "Tao": 200, "Ju":300},
      //      {"period": "09:00", "Mei": 100, "Tao": 300, "Ju":200},
      //      {"period": "08:00", "Mei": 200, "Tao": 100, "Ju":100},
      //      {"period": "07:00", "Mei": 600, "Tao": 300, "Ju":500},
      //      {"period": "06:00", "Mei": 20, "Tao": 30, "Ju":70}
      // ];

      // Morris.Line({
      //   element: 'hero-graph',
      //   data: tax_data,
      //   xkey: 'period',
      //   ykeys: ['Mei', 'Tao', 'Ju'],
      //   labels: ['梅园', '桃园', '橘园'],
      //   lineColors:['#4ECDC4','#ed5565','#FFFF00']
      // });

      Morris.Donut({
        element: 'hero-donut',
        data: [
          {label: '梅园', value: 35 },
          {label: '桃园', value: 40 },
          {label: '橘园', value: 25 },
        ],
          colors: ['#3498db', '#2980b9', '#34495e'],
        formatter: function (y) { return y + "%" }
      });

      Morris.Area({
        element: 'hero-area',
        data:[
           {"period": "21:00", "Mei": 60, "Tao": 10, "Ju":70},
           {"period": "20:00", "Mei": 100, "Tao": 40, "Ju":110},
           {"period": "19:00", "Mei": 300, "Tao": 30, "Ju":40},
           {"period": "19:00", "Mei": 100, "Tao": 100, "Ju":1000},
           {"period": "18:00", "Mei": 600, "Tao": 200, "Ju":800},
           {"period": "17:00", "Mei": 1200, "Tao": 600, "Ju":900},
           {"period": "16:00", "Mei": 700, "Tao": 600, "Ju":300},
           {"period": "15:00", "Mei": 100, "Tao": 50, "Ju":200},
           {"period": "14:00", "Mei": 100, "Tao": 100, "Ju":80},
           {"period": "13:00", "Mei": 200, "Tao": 300, "Ju":200},
           {"period": "12:00", "Mei": 1000, "Tao": 1000, "Ju":600},
           {"period": "11:00", "Mei": 600, "Tao": 800, "Ju":1300},
           {"period": "10:00", "Mei": 150, "Tao": 200, "Ju":300},
           {"period": "09:00", "Mei": 100, "Tao": 300, "Ju":200},
           {"period": "08:00", "Mei": 200, "Tao": 100, "Ju":100},
           {"period": "07:00", "Mei": 600, "Tao": 300, "Ju":500},
           {"period": "06:00", "Mei": 20, "Tao": 30, "Ju":70}
      ],
          xkey: 'period',
          ykeys: ['Mei', 'Tao', 'Ju'],
          labels: ['梅园', '桃园', '橘园'],
          hideHover: 'auto',
          lineWidth: 1,
          pointSize: 5,
          lineColors: ['#4a8bc2', '#ff6c60', '#a9d86e'],
          fillOpacity: 0.5,
          smooth: true
      });

      // Morris.Bar({
      //   element: 'hero-bar',
      //   data: [
      //     {device: 'iPhone', geekbench: 136},
      //     {device: 'iPhone 3G', geekbench: 137},
      //     {device: 'iPhone 3GS', geekbench: 275},
      //     {device: 'iPhone 4', geekbench: 380},
      //     {device: 'iPhone 4S', geekbench: 655},
      //     {device: 'iPhone 5', geekbench: 1571}
      //   ],
      //   xkey: 'device',
      //   ykeys: ['geekbench'],
      //   labels: ['Geekbench'],
      //   barRatio: 0.4,
      //   xLabelAngle: 35,
      //   hideHover: 'auto',
      //   barColors: ['#ac92ec']
      // });

      // new Morris.Line({
      //   element: 'examplefirst',
      //   xkey: 'year',
      //   ykeys: ['value'],
      //   labels: ['Value'],
      //   data: [
      //     {year: '2008', value: 20},
      //     {year: '2009', value: 10},
      //     {year: '2010', value: 5},
      //     {year: '2011', value: 5},
      //     {year: '2012', value: 20}
      //   ]
      // });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




