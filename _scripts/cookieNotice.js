function checkCookie() {
	if (localStorage.getItem('c') === null) {
		$(".privacyNotice").css("display", "block");
	}
	if (localStorage.getItem('c') != null) {
		$(".privacyNotice").css("display", "none");
	}
}

$(document).ready(function () {
	checkCookie();
});

$("#cookie-dismisser").click(function () {
	localStorage.setItem('c', 'notice dismissed!');
	checkCookie();
});