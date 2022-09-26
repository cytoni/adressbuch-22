fetch('https://randomuser.me/api/?results=1&nat=de')
  .then((response) => response.json())
  .then((data) => parseData(data));

const parseData = (data) => {
  const result = data.results[0];

  const user = {
    src: result.picture.large,
    name: `${result.name.first} ${result.name.last}`,
    location: result.location.city + ', ' + result.location.country,
    alta: result.dob.age,
    passwort: result.login.password,
    phone: result.phone,
    email: result.email,
  };

  document.querySelector('img').setAttribute('src', user.src);
  document.querySelector('#daten').textContent = user.name;
  document.querySelector('#titel').textContent = 'Hallo, ich bin';

  document.querySelectorAll('.user').forEach((item) => {
    item.addEventListener(
      'mouseover',
      () => (document.querySelector('#daten').textContent = user[item.id])
    );
  });
};

//Reload
document.querySelector('a').onclick = function () {
  location.reload();
};
