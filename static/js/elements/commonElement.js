import { User } from "../entity/User.js";

        // Khởi tạo đối tượng User
        let users = [
            new User('Nguyen Van A', 123123123, 'usernameA', 'passwordA'),
            new User('Tran Van B', 456456456, 'usernameB', 'passwordB'),
            new User('Le Thi C', 789789789, 'usernameC', 'passwordC')
        ];

const header = `
    <h1>This is header</h1>
`

let userListHTML = '<ul>';
        users.forEach(user => {
            userListHTML += `
                <li>
                    <strong>Full Name:</strong> ${user.fullName}<br>
                    <strong>Number:</strong> ${user.number}<br>
                    <strong>Username:</strong> ${user.username}<br><br>
                </li>
            `;
        });
        userListHTML += '</ul>';

document.getElementById('header').innerHTML = header
document.getElementById('userList').innerHTML = userListHTML;
console.log('awdsd')