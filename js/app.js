// from data.js
var tableData = data;

// select the data table
var tbody = d3.select("tbody");
//console.log(data);

d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);

function table(data) {
    tbody.html("");

data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var UFO = row.append("td");
        UFO.text(val);
      }
    );
  });
}

//Prevent page refreshing 
button.on("click", function (){
     d3.event.preventDefault();
      var date = d3.select("#date_time").property("value");
      var datafiltered = tableData;
      if (date) {
        datafiltered = datafiltered.filter(row => row.date_time === date);
      }
      table(datafiltered);
    })
    