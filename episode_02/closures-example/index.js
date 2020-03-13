// revealing module pattern
function createPerson(firstname, lastname) {
  return {
    setFirstname(newValue) {
      firstname = newValue;
    },
    getFirstName() {
      return firstname;
    },
    getLastName() {
      return lastname;
    },
    getFullName() {
      return `${firstname} ${lastname}`;
    }
  }
}

const deepsense = createPerson('deep', 'sense');
// console.log(deepsense.getFirstName());
// console.log(deepsense.setFirstname('makes'));
// console.log(deepsense.getFullName());
// deepsense.lastname = 'wat'
// console.dir(deepsense.lastname);
// console.log(deepsense.getLastName());
