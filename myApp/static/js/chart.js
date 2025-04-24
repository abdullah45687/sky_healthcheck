window.addEventListener('DOMContentLoaded', () => {
    const labels = [
      "Delivering Value", "Easy to release", "Health of code basis",
      "Learning", "Fun", "Mission", "Pawn of Players",
      "Suitable Process", "Speed", "Teamwork", "Work Life Balance"
    ];
  
    const allData = {
      labels: labels, 
      datasets: [
        { label: 'Struggling', data: [3,2,3,1,2,3,3,3,2,2,3], backgroundColor: 'red' },
        { label: 'Moderate', data: [2,3,2,3,3,2,4,2,3,3,2], backgroundColor: 'yellow' },
        { label: 'Good', data: [2,3,3,6,3,3,2,3,5,5,4], backgroundColor: 'green' }
      ]
    };
  
    const individualData = {
      labels: labels,
      datasets: [
        { label: 'Struggling', data: [1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1], backgroundColor: 'red' },
        { label: 'Moderate', data: [3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 3], backgroundColor: 'yellow' },
        { label: 'Good', data: [6, 7, 5, 7, 6, 7, 6, 7, 6, 6, 6], backgroundColor: 'green' }
      ]
    };
  
    const teamData = {
      labels: labels,
      datasets: [
        { label: 'Struggling', data: [2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 2], backgroundColor: 'red' },
        { label: 'Moderate', data: [4, 3, 4, 3, 4, 3, 4, 4, 4, 3, 3], backgroundColor: 'yellow' },
        { label: 'Good', data: [4, 5, 6, 6, 5, 5, 4, 5, 4, 5, 5], backgroundColor: 'green' }
      ]
    };
  
    const commonOptions = {
      type: 'bar',
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true,
            beginAtZero: true
          },
          y: {
            stacked: true
          }
        }
      }
    };
  
    if (document.getElementById('resultsChart')) {
      new Chart(document.getElementById('resultsChart'), {
        ...commonOptions,
        data: allData
      });
    }
  
    if (document.getElementById('individualChart')) {
      new Chart(document.getElementById('individualChart'), {
        ...commonOptions,
        data: individualData
      });
    }
  
    if (document.getElementById('teamChart')) {
      new Chart(document.getElementById('teamChart'), {
        ...commonOptions,
        data: teamData
      });
    }
  });
  
  const shapeMap = {
    1: 'green-circle',
    2: 'yellow-triangle',
    3: 'red-square'
  };
  
  const dataSets = {
    all: [
      [1, 2, 2, 3, 1, 3, 2, 3, 2],
      [3, 2, 1, 3, 2, 3, 1, 3, 1],
      [1, 3, 2, 2, 3, 2, 3, 1, 3],
      [3, 2, 3, 1, 1, 1, 2, 3, 3],
      [3, 3, 1, 3, 2, 3, 3, 3, 2],
      [2, 1, 3, 2, 1, 3, 3, 1, 2],
      [3, 3, 3, 3, 3, 3, 3, 3, 3]
    ],
    team: [
      [1, 2, 2, 3, 1, 3, 2, 3, 2],
      [3, 2, 1, 3, 2, 3, 1, 3, 1],
      [1, 3, 2, 2, 3, 2, 3, 1, 3],
      [3, 2, 3, 1, 1, 1, 2, 3, 3],
      [3, 3, 1, 3, 2, 3, 3, 3, 2],
      [2, 1, 3, 2, 1, 3, 3, 1, 2],
      [3, 3, 3, 3, 3, 3, 3, 3, 3]
    ],
    individual: [
      [1, 2, 2, 3, 1, 3, 2, 3, 2],
      [3, 2, 1, 3, 2, 3, 1, 3, 1],
      [1, 3, 2, 2, 3, 2, 3, 1, 3],
      [3, 2, 3, 1, 1, 1, 2, 3, 3],
      [3, 3, 1, 3, 2, 3, 3, 3, 2],
      [2, 1, 3, 2, 1, 3, 3, 1, 2],
      [3, 3, 3, 3, 3, 3, 3, 3, 3]
    ]
  };
  
  function getCurrentPageType() {
    const title = document.title.toLowerCase();
    if (title.includes("team")) return "team";
    if (title.includes("individual")) return "individual";
    return "all";
  }
  
  function populateTable() {
    const pageType = getCurrentPageType();
    const voteData = dataSets[pageType];
    const tbody = document.getElementById('voteTableBody');
    tbody.innerHTML = '';
  
    voteData.forEach((row, index) => {
      const tr = document.createElement('tr');
      const questionCell = document.createElement('td');
      questionCell.textContent = `Question ${index + 1}`;
      tr.appendChild(questionCell);
  
      row.forEach(value => {
        const td = document.createElement('td');
        td.className = 'vote-cell';
        const div = document.createElement('div');
        div.className = shapeMap[value];
        td.appendChild(div);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }
  
  window.onload = populateTable;