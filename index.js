// Your js code goes here
'use strict';

const MIN_AGE = 1;
const MAX_AGE = 99;
var iterator;

function initAge() {
	var studentAgeSelect = document.querySelector('select.student-age');

	for (iterator = MIN_AGE;iterator <= MAX_AGE; iterator++) {
		var studentAgeOption = document.createElement('Option');
		studentAgeOption.innerHTML = iterator;
		studentAgeOption.value = iterator;
		studentAgeSelect.appendChild(studentAgeOption);
	}
}

function validateData() {
	
}

function moveData() {
	var studentNameValue = document.querySelector('input.student-name').value;
	document.querySelector('span.student-name').innerHTML = studentNameValue;

	var studentAgeValue = document.querySelector('select.student-age').value;
	document.querySelector('span.student-age').innerHTML = studentAgeValue;

	// func checbox
	var studentAtUniversity = document.querySelector('input.student-at-university')
										 .checked ? 'yes': 'No';
	document.querySelector('span.student-at-university').innerHTML = studentAtUniversity;

	// func for courses
	var studentCoursesInputs = document.querySelectorAll('input.student-course');
	var studentCoursesValue = '';
	for (iterator = 0; iterator < studentCoursesInputs.length; iterator++) {
		studentCoursesValue += studentCoursesInputs[iterator].value + ', ';
	}

	document.querySelector('span.student-courses').innerHTML = 
				studentCoursesValue.substr(0, studentCoursesValue.length - 2);
	// document.querySelector('span.student-courses').innerHTML = studentCourses[0].value + 
	// 							', ' + studentCourses[1].value;

}

function formSubmitHandler() {
	var form  = document.getElementsByTagName('form')[0];

	form.addEventListener('submit', function(event) {
		var valid;

		event.preventDefault();
		moveData();

		
	});
}

window.addEventListener('load', function() {
	initAge();
	formSubmitHandler();
});
