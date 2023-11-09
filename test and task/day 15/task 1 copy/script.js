const form = document.getElementById('form');
        const table = document.getElementById('table');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const foodArray = [];
            for (let i = 1; i <= 5; i++) {
                if (document.getElementById(`ch${i}`).checked) {
                    foodArray.push(document.getElementById(`ch${i}`).value);
                }
            }

            const row = table.insertRow();

            ['fname', 'lname', 'address', 'pincode', 'gender', 'state', 'country'].forEach((id) => {
                const cell = row.insertCell();
                cell.textContent = document.getElementById(id).value;
            });

            const foodCell = row.insertCell();
            foodCell.textContent = foodArray.join(', ');

            form.reset();
        });