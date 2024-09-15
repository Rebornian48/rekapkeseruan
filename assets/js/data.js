new Chart(document.getElementById("2024sem1"), {
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
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    bar: {
      borderWidth: 4,
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  },
});

new Chart(document.getElementById("2024sem2"), {
  type: "bar",
  data: {
    labels: ["July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Pekan 1",
        data: [13,27,19],
      },
      {
        label: "Pekan 2",
        data: [18,23],
      },
      {
        label: "Pekan 3",
        data: [15,15],
      },
      {
        label: "Pekan 4",
        data: [14,15],
      },
      {
        label: "Pekan 5",
        data: [0,19],
      },
    ],
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    bar: {
      borderWidth: 4,
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  },
});

