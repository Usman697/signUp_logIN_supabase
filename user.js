let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let school = document.getElementById("school");
let address = document.getElementById("address");
let email = document.getElementById("email");

let addUserBtn = document.getElementById("add-user-btn");

let userTableBody = document.getElementById("user_table_body");

async function addUser() {
  try {
    const { error } = await supabase
      .from("student_info") // table name
      .insert({
        first_name: firstName.value,
        last_name: lastName.value,
        school: school.value,
        address: address.value,
        email: email.value,
      });

    if (error) throw error;
    firstName.value = "";
    lastName.value = "";
    school.value = "";
    address.value = "";
    email.value = "";

    alert('user added')

    // Swal.fire({
    //   title: "User Added",
    //   text: "User Sucesfully Added in the System",
    //   icon: "success",
    // });

    userTableBody.innerHTML = "";

    getUsers();
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  try {
    const { data, error } = await supabase.from("student_info").select();
    if (error) throw error;

    console.log(data);

    if (data) {
      data.map((val, index) => {
        return (userTableBody.innerHTML += `
     <tr>
                        <td scope="col">${val.first_name}</td>
                        <td scope="col">${val.last_name}</td>
                        <td scope="col">${val.school}</td>
                        <td scope="col">${val.email}</td>
                        <td scope="col">${val.address}</td>
                       
                      </tr>
    `);
      });
    }
  } catch (error) {
    console.log(error);
  }
}


// async function deleteUser() {
//   console.log('User')
// }

// let deleteBtn = document.getElementById("delete_user");


// if(deleteBtn) {
//   deleteBtn.addEventListener('click' , function() {
//     let deleteUserId = localStorage.getItem('deleteUserId')
//     console.log(deleteUserId)
//   })
  
// }




addUserBtn.addEventListener("click", addUser);

window.onload = getUsers();