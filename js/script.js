document.addEventListener("DOMContentLoaded", function () {
	// Simulate loading by delaying the display of the loader
	setTimeout(function () {
		document.getElementById("loader-container").style.display = "none";
		document.getElementById("main-content").style.visibility = "visible";
	}, 3000); // Adjust the delay time as needed
});
