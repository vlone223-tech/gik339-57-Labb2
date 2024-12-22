// Fetch Users from Backend
async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:300/users");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const users = await response.json();
    console.log(users); // Verify output is correct
    renderUsers(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

// Render
function renderUsers(users) {
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = ""; //empty  the user-container

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.setAttribute("data-color", user.color);

    userCard.innerHTML = `
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>Username: ${user.username}</p>
      <p>ID: ${user.id}</p>
    `;

    userContainer.appendChild(userCard);
  });
}

// Load Users
fetchUsers();
