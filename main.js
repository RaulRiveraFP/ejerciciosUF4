const url = 'https://jsonplaceholder.typicode.com/users/';

for (let i = 1; i < 6; i++) {
    fetch(`${url}${i}`)
      .then(response => response.json())
      .then(user => {
        let html = '';

        html += `
            <tr>
                <th scope="row">${i}</th>
                <td colspan="2">${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;

        document.querySelector('tbody').innerHTML += html;
      })
      .catch(error => console.error('Error fetching user:', error));
}

