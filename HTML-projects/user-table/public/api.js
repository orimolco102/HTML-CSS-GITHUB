const API_URL = "http://localhost:3000/api/users";
const usergrid = document.getElementById('usersGrid');
const totalusers = document.getElementById('totalUsers');
const avgAge = document.getElementById('avgAge');
const addUserForm = document.getElementById('addUserForm');


async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        console.log(users);
        renderUsers(users);
        
    } catch (error) {
        console.log('error');
        
    }
}

function renderUsers(users) {
    
    if (users.length === 0) {
        `<P>usergrid.innerHTML = No users in the DB</P>`
    }
    usergrid.innerHTML = users.map((user) =>`
        <div class = "card">
        <div>${user.name}</div>
        <div>${user.email}</div>
        <div>${user.age}</div>
        <button class = "deleteBtn" onclick = "deleteUser('${user._id}')">Delete User</button>
        </div>
    `).join("")

    // users.forEach(user => {
    //     // console.log(user.name);
    //     // console.log(user.email);
    //     // console.log(user.age);
    //     usergrid.innerHTML+= `
    //         <div class = grid>
    //         <p>name: ${user.name}</p>
    //         <p>Email: ${user.email}</p>
    //         <p>Age: ${user.age}</p>
    //         </div>
    //     `
    // });
}

async function deleteUser(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })
        loadUsers();
    } catch (error) {
        
    }
}

loadUsers();