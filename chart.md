---
layout: page
title: Presearch Node Chart
subtitle: Node Operator Reward Stats
---

<!-- Chart.js v3.5.1 -->
<script src="chart.min.js"></script>

<div>
  <canvas id="nodeChart"></canvas>
</div>

<script>
    // Setup
    const labels = [
      '2021-01',
      '2021-02',
      '2021-03',
      '2021-04',
      '2021-05',
      '2021-06',
      '2021-07',
      '2021-08',
      '2021-09',
    ];

    const data = {
      labels: labels,
      datasets: [{
        type: 'bar',
        label: 'TOTAL_PRE_EARNED',
        backgroundColor: '#a8dadc',
        borderColor: '#457b9d',
        borderWidth: 3,
        data: [
            0,
            0,
            17.328747231619914,
            58.53665961424306,
            101.59621359154946,
            168.04505027629872,
            212.62082680586974,
            157.23791076059845,
            43.09407037490494
        ],
        yAxisID: 'total_pre_earned',
        order: 2 // dataset drawing order
      }, {
        type: 'line',
        label: 'TOTAL_REQUESTS',
        // backgroundColor: '#ffb703',
        fill: false,
        borderColor: '#ffb703',
        tension: 0.1,
        data: [
            134,
            340,
            183,
            226,
            274,
            232,
            266,
            168,
            332
        ],
        yAxisID: 'total_requests',
        order: 1 // dataset drawing order
      }]
    };

    // Config
    const config = {
      data: data,
      options: {
        responsive: true,
        scales: {
            total_pre_earned: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true
            },
            total_requests: {
                type: 'linear',
                display: true,
                position: 'right',
                // grid line setting
                // only show grid lines for TOTAL_PRE_EARNED
                grid: {
                  drawOnChartArea: false,
                },
            }
        }
      }
    };

  let myChart = new Chart(
    document.getElementById('nodeChart'),
    config
  );
</script>
