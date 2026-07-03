const tbody = document.getElementById("tbody");

function update(data) {
  tbody.innerHTML = "";

  data.forEach(driver => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${driver.pos}</td>
      <td>${driver.name}</td>
      <td>${driver.gap}</td>
      <td>${driver.lap}</td>
    `;

    tbody.appendChild(row);
  });
}

// TEST DATEN
setInterval(() => {
  update([
    {pos: 1, name: "Verstappen", gap: "—", lap: 5},
    {pos: 2, name: "Hamilton", gap: "+1.2s", lap: 5},
    {pos: 3, name: "Leclerc", gap: "+2.4s", lap: 5}
  ]);
}, 2000);
