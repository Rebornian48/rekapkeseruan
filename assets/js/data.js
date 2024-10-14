const ctx = document.getElementById("2024sem1");
Chart.register(ChartDataLabels);
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Pekan 1",
        data: [6, 16, 9, 13, 24, 15, 13],
      },
      {
        label: "Pekan 2",
        data: [10, 5, 11, 19, 22, 14, 18],
      },
      {
        label: "Pekan 3",
        data: [8, 7, 15, 21, 33, 20, 15],
      },
      {
        label: "Pekan 4",
        data: [8, 8, 15, 18, 23, 10],
      },
      {
        label: "Pekan 5",
        data: [0, 0, 16, 0, 22, 0],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      datalabels: {
        anchor: "end", // Position of the labels (start, end, center, etc.)
        align: "end", // Alignment of the labels (start, end, center, etc.)
        color: "white", // Color of the labels
        font: {
          weight: "bold",
        },
        formatter: function (value, ctx) {
          return value; // Display the actual data value
        },
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          color: 'white',
        }
      },
      y: {
        ticks: {
          color: 'white',
        },
        beginAtZero: true,
      },
    },
    bar: {
      borderWidth: 4,
    },
    responsive: true,
  },
});

const ctx1 = document.getElementById("2024sem2");
Chart.register(ChartDataLabels);
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Pekan 1",
        data: [13,27,19,20],
      },
      {
        label: "Pekan 2",
        data: [18,23,13,17],
      },
      {
        label: "Pekan 3",
        data: [15,15,23],
      },
      {
        label: "Pekan 4",
        data: [14,15,20],
      },
      {
        label: "Pekan 5",
        data: [0,19,0],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      datalabels: {
        anchor: "end", // Position of the labels (start, end, center, etc.)
        align: "end", // Alignment of the labels (start, end, center, etc.)
        color: "white", // Color of the labels
        font: {
          weight: "bold",
        },
        formatter: function (value, ctx1) {
          return value; // Display the actual data value
        },
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        ticks: {
          color: 'white',
        }
      },
      y: {
        ticks: {
          color: 'white',
        },
        beginAtZero: true,
      },
    },
    bar: {
      borderWidth: 4,
    },
    responsive: true,
  },
});

