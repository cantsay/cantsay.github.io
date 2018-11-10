function checkCookie() {
	if (readCookie("c") === null) {
		$(".privacyNotice").css("display", "block");
	}
	if (readCookie("c") != null) {
		$(".privacyNotice").css("display", "none");
	}
}

checkCookie();

$("#cookie-dismisser").click(function () {
	createCookie("c", 1, 3000);
	checkCookie();
});