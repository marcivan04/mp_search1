document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#courseTable tbody");
    const searchBar = document.getElementById("searchBar");

    // Fetch JSON data
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            displayCourses(data);

            // Search functionality
            searchBar.addEventListener("keyup", function () {
                let filter = this.value.toLowerCase();
                const filteredCourses = data.filter(course =>
                    course.name.toLowerCase().includes(filter) ||
                    course.instructor.toLowerCase().includes(filter)
                );
                displayCourses(filteredCourses);
            });
        })
        .catch(error => console.error("Error loading courses:", error));

    // Function to display courses in table
    function displayCourses(courses) {
        tableBody.innerHTML = ""; // Clear previous content
        courses.forEach(course => {
            let row = `<tr>
                <td>${course.name}</td>
                <td>${course.instructor}</td>
                <td>${course.duration}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
});
