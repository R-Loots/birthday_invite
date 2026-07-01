const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTbrTw-YiwustNdS6W0xGd7grxtKMoLuqKa1xUSH7IzkRRLDGskGOUQjuA9CF8OYUdQPU-12weVrLF5/pub?output=csv&gid=0";

fetch(csvUrl)
  .then(response => response.text())
  .then(csv => {
    const rows = csv.split("\n").map(row => row.split(","));
    let table = "<table style='width:100%; border-collapse: collapse;'>";

    rows.forEach((row, i) => {
      table += "<tr>";
      row.forEach(cell => {
        if (i === 0) {
          table += `<th style="border: 1px solid #000000; padding: 10px; background-color: #3f0a0a; color: white;">${cell}</th>`;
        } else {
          table += `<td style="border: 1px solid #790000; padding: 10px; text-align: center;">${cell}</td>`;
        }
      });
      table += "</tr>";
    });

    table += "</table>";
    document.getElementById("wishlist-table").innerHTML = table;
  });
