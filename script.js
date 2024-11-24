const lightOff = document.getElementById('light-off');
const lightOn = document.getElementById('light-on');
const button = document.querySelector('button');

button.addEventListener ('click', () => {
  button.classList.toggle('btn-danger');
  lightOff.classList.toggle('d-none');
  lightOn.classList.toggle('d-none')
  lightOn.classList.toggle('d-block');
  button.innerHTML = button.classList.contains('btn-danger') ? 'Spegni' : 'accendi';
})

