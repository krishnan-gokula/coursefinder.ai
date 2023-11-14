document.addEventListener("DOMContentLoaded", function (event) {
    filterBtn.disabled = true;

    const showNavbar = (toggleId, navId, bodyId, headerId, resptoggleId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId),
            resptoggle = document.getElementById(resptoggleId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd && resptoggleId) {
            toggle.addEventListener('click', () => {
                console.log("Clicked toggle")
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                // headerpd.classList.toggle('body-pd')
            })
            resptoggle.addEventListener('click', () => {
                console.log("Clicked resp-toggle")
                // show navbar
                nav.classList.toggle('show')
                // change icon
                resptoggle.classList.toggle('bx-chevron-right')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                // headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'header-toggle-rep')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});


// Full screen functionality
function expandToFullScreen() {
    var card = document.querySelector('#card');
    card.classList.add('card-fullscreen');
}

function exitFullScreen() {
    var card = document.querySelector('#card');
    card.classList.remove('card-fullscreen');
}

// Data tables initiatialization and functionalities
$(document).ready(function () {
    $('#myTable').DataTable({
        'responsive': true,
        'fixedHeader': true,
        'pagingType': "simple_numbers",
        "pageLength": 3,
        "searching": false,
        "info": false,
        "lengthChange": false,
        'scrollX': true,
        language: {
            paginate: {
                next: '<i class="bx bx-chevron-right">',
                previous: '<i class="bx bx-chevron-left">'
            }
        }
    });

    // Countries list data
    let countriesApi = "https://restcountries.com/v3.1/all";
    fetch(countriesApi).then(response => {
        return response.json();
      }).then(data => {
        // Work with JSON data here
        console.log(data);
        let commonNamesArray = data.map(country => country.name.common);
        
        console.log(commonNamesArray);
        let countriesData = commonNamesArray.sort();
        const countryDropdown = document.getElementById('country');

        // Populate the country dropdown with options
        countriesData.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
        });
        // data.map(function(s){
        //     s.name.map(function(c){
        //        c.common.map(function(z){
        //           console.log(z)
        //        })
        //      })
        //  })
      }).catch(err => {
        // Do something for an error here
      });
});


const form = document.getElementById('filterForm');
const year = document.getElementById('year');
const dateCreated = document.getElementById('dateCreated');
const intake = document.getElementById('intake');
const country = document.getElementById('country');
const yearError = document.getElementById('yearError');
const dateCreatedError = document.getElementById('dateCreatedError');
const intakeError = document.getElementById('intakeError');
const countryError = document.getElementById('countryError');
const filterBtn = document.getElementById('filterBtn');

form.addEventListener('change', function () {
    if (year.value && dateCreated.value && intake.value && country.value) {
        filterBtn.disabled = false;
    } else {
        filterBtn.disabled = true;
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let valid = false;

    if (!year.value) {
        yearError.textContent = 'Please select a year.';
        valid = false;
    } else {
        yearError.textContent = '';
    }

    if (!dateCreated.value) {
        dateCreatedError.textContent = 'Please select a date.';
        valid = false;
    } else {
        dateCreatedError.textContent = '';
    }

    if (!intake.value) {
        intakeError.textContent = 'Please select an intake.';
        valid = false;
    } else {
        intakeError.textContent = '';
    }

    if (!country.value) {
        countryError.textContent = 'Please select a country.';
        valid = false;
    } else {
        countryError.textContent = '';
    }

    if (valid) {
        // Filter logic to be implemented
    }
});


