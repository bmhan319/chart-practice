console.log("let's build some charts!")


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawAllocationChart);
google.charts.setOnLoadCallback(drawSemestersChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Score Ranges');
  data.addColumn('number', 'Games');
  data.addRows([
    ['0-100', 2],
    ['100-200', 5],
    ['200-300', 3],
  ]);

  // Set chart options
  var options = {'title':'My Bowling Scores From Last 10 Games',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawAllocationChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Expense');
  data.addColumn('number', 'Cents');
  data.addRows([
    ['Admin', 4],
    ['Fundraising', 16],
    ['Youth Programs', 36],
    ['Adult Programs', 44]
  ]);

  // Set chart options
  var options = {'title':'Donation Allocations per Dollar',
                 'width':400,
                 'height':300,
                 'pieHole': 0.4,
                 'colors':['#8AD1C2','#9F8AD1','#D18A99','#BCD18A']
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('allocation'));
  chart.draw(data, options);
}

function drawSemestersChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  var data = google.visualization.arrayToDataTable([
        ["Semester", "Major Creits", { role: "style" } ],
        ["09/18", 0, "#5180FF"],
        ["01/19", 0, "#5180FF"],
        ["09/19", 1, "#5180FF"],
        ["01/20", 1, "#5180FF"],
        ["09/20", 3, "#8FAEFF"],
        ["01/21", 3, "#8FAEFF"],
        ["09/21", 3, "#8FAEFF"],
        ["01/22", 3, "#8FAEFF"]
      ]);

  // Set chart options
  var options = {'title':'Major Studies Timeline',
                 'width':400,
                 'height':300,
                 'pieHole': 0.4,
                 'colors':['#28407F'],
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('semesters'));
  chart.draw(data, options);
}