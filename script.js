//your JS code here. If required.
// Function to add a new row to the table
document.getElementById("submit").addEventListener("click", function() {
    // Get values from the input fields
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var isbn = document.getElementById("isbn").value;

    // Check if inputs are not empty
    if (title && author && isbn) {
        // Get the table body element
        var bookList = document.getElementById("book-list");
        
        // Create a new row
        var newRow = bookList.insertRow(0);  // Insert at the top

        // Insert cells for the new row
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        // Add the book details into the cells
        cell1.textContent = title;
        cell2.textContent = author;
        cell3.textContent = isbn;

        // Create the "Clear" button
        var clearButton = document.createElement("button");
        clearButton.textContent = "Clear";
        clearButton.classList.add("btn", "btn-danger", "delete");
        clearButton.addEventListener("click", function() {
            // Remove the row when the clear button is clicked
            bookList.deleteRow(newRow.rowIndex - 1); // Adjust for 0-based index
        });
        
        // Append the clear button to the last cell
        cell4.appendChild(clearButton);

        // Clear the input fields after adding the book
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    } else {
        alert("Please fill in all fields!");
    }
});
