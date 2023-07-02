const ham = document.querySelector('#js-hamburger');
const a_tag = document.querySelector('.nav__items');
const nav = document.querySelector('#js-nav');
const my_name = document.querySelector('#my-name');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');
	my_name.classList.toggle('active');

});

a_tag.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');
	my_name.classList.toggle('active');

});