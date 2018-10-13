const users = [{
    firstName: 'Jan',
    lastName: 'Kowalczyk',
  }, {
    firstName: 'Sebastian',
    lastName: 'Nowak'
  }, {
    firstName: 'Monika',
    lastName: 'Nowak'
  }, {
    firstName: 'Paweł',
    lastName: 'Kowalczyk'
  }, {
    firstName: 'Monika',
    lastName: 'Nowak'
  }, {
    firstName: 'Cezary',
    lastName: 'Kowal'
  }];


  users.sort((a, b) =>{
    return a.lastName.localeCompare(b.lastName) || //|| lub
     a.firstName.localeCompare(b.firstName);

  });
  console.log(users);