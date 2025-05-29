/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SHADOW HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58, // Adjust offset based on fixed header height
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navbar-links a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK - LIGHT THEME ===============*/
const themeButton = document.getElementById('switchforvisualmode');
{{ edit_1 }}
const body = document.body;
const settingsContainer = document.getElementById('setting-container');
const settingsButton = document.getElementById('labelforsetting'); // Assuming the label is the clickable part
const soundSwitch = document.getElementById('switchforsound');

// Check local storage for theme preference
const savedTheme = localStorage.getItem('selected-theme');

if (savedTheme) {
    body.classList[savedTheme === 'dark' ? 'remove' : 'add']('light-mode');
    // Update the theme switch state based on saved theme
    themeButton.checked = savedTheme === 'light';
}

// Theme toggle handler
themeButton.addEventListener('change', () => {
    // Toggle light-mode class on body
    body.classList.toggle('light-mode');

    // Save the theme preference to local storage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('selected-theme', 'light');
    } else {
        localStorage.setItem('selected-theme', 'dark');
    }
});

// Settings menu toggle handler
settingsButton.addEventListener('click', () => {
    // Toggle a class to show/hide the settings container
    settingsContainer.classList.toggle('show-settings-menu');
});

// Sound toggle handler (basic implementation - toggles a class on body)
soundSwitch.addEventListener('change', () => {
    body.classList.toggle('muted-sound');
    // You could also save this preference to local storage if needed
    // localStorage.setItem('sound-muted', soundSwitch.checked);
});

// Optional: Close settings menu when clicking outside
document.addEventListener('click', (event) => {
    if (!settingsContainer.contains(event.target) && !settingsButton.contains(event.target)) {
        settingsContainer.classList.remove('show-settings-menu');
    }
});
{{ end_edit_1 }}

/*=============== SCROLL REVEAL ANIMATION ===============*/
