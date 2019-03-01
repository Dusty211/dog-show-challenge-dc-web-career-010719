document.addEventListener('DOMContentLoaded', () => {
  fetchDogs()

})

function fetchDogs() {
  fetch('http://localhost:3000/dogs')
  .then(res => res.json())
  .then(dogs => renderAllDogs(dogs))
}

function patchDogs(dog) {
  fetch(`http://localhost:3000/dogs/${dog}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ users: book.users })
    })
      .then(res => res.json())
      .then(book => renderBookInfo(book));
}

function editDogPopulate(dog) {
  document.querySelector('#dog-form').children[0].value = dog.name
  document.querySelector('#dog-form').children[1].value = dog.breed
  document.querySelector('#dog-form').children[2].value = dog.sex
  addListenerPatchDog(dog)
}

function addListenerPatchDog(dog) {
  const submit = document.querySelector('#dog-form').children[3]
  submit.addEventListener('click', (e, dog) => {
    e.preventDefault()
    console.log(dog)
  })
}

function renderAllDogs(dogs) {
  document.querySelector('#dog-form').children[3].addEventListener('click', (e) => {
    e.preventDefault() //prevent reload if button clicked
  })
  dogs.forEach(dog => renderEachDog(dog))
}
//append tr to #table-body
//<tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>
function renderEachDog(dog) {
  const tableBody = document.querySelector('#table-body')
  const tr = document.createElement('tr')
  const tdName = document.createElement('td')
  const tdBreed = document.createElement('td')
  const tdSex = document.createElement('td')
  const button = document.createElement('button')
  tdName.innerText = dog.name
  tdBreed.innerText = dog.breed
  tdSex.innerText = dog.sex
  button.innerText = 'Edit Dog'
  tableBody.appendChild(tr)
  tr.appendChild(tdName)
  tr.appendChild(tdBreed)
  tr.appendChild(tdSex)
  tr.appendChild(button)

  button.addEventListener('click', () => {
    editDogPopulate(dog)
  })

}
