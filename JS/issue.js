const ctx = document.getElementById('civicChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          "Garbage Issues",
          "Potholes",
          "Waterlogging",
          "Streetlights",
          "Other Civic Issues"
        ],
        datasets: [
          {
            label: "Reported Issues",
            data: [120, 90, 75, 60, 45],
            backgroundColor: "rgba(76, 175, 80, 0.6)", // light green
            borderColor: "#2e7d32",
            borderWidth: 1
          },
          {
            label: "Resolved Issues",
            data: [100, 70, 55, 50, 35],
            backgroundColor: "rgba(34, 139, 34, 0.8)", // dark green
            borderColor: "#1b5e20",
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Crowdsourced Civic Issue Reporting & Resolution - Jharkhand",
            font: {
              size: 18,
              weight: "bold"
            }
          },
          legend: {
            position: "top"
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Issues"
            }
          },
          x: {
            title: {
              display: false
            }
          }
        }
      }
    });