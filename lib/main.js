(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	const tagIcon = document.getElementById("icon");
}

function isLight() {
	return localStorage.getItem("light-mode");
  }
  
  function toggleRootClass() {
	document.querySelector(":root").classList.toggle("light");
  }
  
  function toggleLocalStorageItem() {
	if (isLight()) {
	  localStorage.removeItem("light-mode");
	} else {
	  localStorage.setItem("light-mode", "set");
	}
  }
  
  document.querySelector(".theme-icon").addEventListener("click", () => {
	toggleLocalStorageItem();
	toggleRootClass();
  });