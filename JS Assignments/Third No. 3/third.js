// Define the six classes of food
const foodClasses = [
    { className: "Carbohydrates"
    , examples:
    "Rice, Bread, Pasta" },
    { className: "Proteins"
    , examples: "Meat, Fish, Eggs" },
    { className: "Fats"
    , examples: "Butter, Oil, Nuts" },
    { className: "Vitamins"
    , examples:
    "Fruits, Vegetables" },
    { className: "Minerals"
    , examples: "Salt, Iron, Calcium" },
    { className: "Water"
    , examples: "Pure Water, Soups" }
    ];
    // Create a table element
    const table =
    document.createElement("table");
    table.border =
    "1"; // Add a border to the
    table
    // Create the table header
    const headerRow =
    document.createElement("tr");
    const headerClassName =
    document.createElement("th");
    headerClassName.textContent =
    "Class of Food";
    const headerExamples =
    document.createElement("th");
    headerExamples.textContent =
    "Examples";
    headerRow.appendChild(headerClassName
    );
    headerRow.appendChild(headerExamples);
    table.appendChild(headerRow);
    // Populate the table with data
    foodClasses.forEach(foodClass => {
    const row =
    document.createElement("tr");
    const cellClassName =
    document.createElement("td");
    cellClassName.textContent =
    foodClass.className;
    const cellExamples =
    document.createElement("td");
    cellExamples.textContent =
    foodClass.examples;
    row.appendChild(cellClassName);
    row.appendChild(cellExamples);
    table.appendChild(row);
    });
    // Append the table to the body
    document.body.appendChild(table);