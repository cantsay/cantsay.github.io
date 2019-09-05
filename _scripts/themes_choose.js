var changetheme = function () {
	switch ($("#theme").val()) {
	case "aegislash":
		$("#select2css")[0].href = "_css/select2.css";
		$("#nbcalccss")[0].href = "_css/nb_calc.css";
		$("#apcalccss")[0].href = "_css/ap_calc.css";
		$("#midimg")[0].src = "_images/aegi trozei.png";
		localStorage.setItem("selectedTheme", $("#theme").val());
		break;
	case "dark":
		$("#select2css")[0].href = "_css/select2.css";
		$("#nbcalccss")[0].href = "_css/dark_nb_calc.css";
		$("#apcalccss")[0].href = "_css/dark_ap_calc.css";
		$("#midimg")[0].src = "_images/shiny aegi trozei.png";
		localStorage.setItem("selectedTheme", $("#theme").val());
		break;
	case "legacy":
		$("#select2css")[0].href = "_css/select2.css";
		$("#nbcalccss")[0].href = "_css/legacy_nb_calc.css";
		$("#apcalccss")[0].href = "_css/legacy_ap_calc.css";
		$("#midimg")[0].src = "_images/cantsay.png";
		localStorage.setItem("selectedTheme", $("#theme").val());
		break;
	case "lgpe":
		$("#select2css")[0].href = "_css/select2.css";
		$("#nbcalccss")[0].href = "_css/lgpe_nb_calc.css";
		$("#apcalccss")[0].href = "_css/lgpe_ap_calc.css";
		$("#midimg")[0].src = "_images/pika.jpg";
		localStorage.setItem("selectedTheme", $("#theme").val());
		break;
	case "volcarona":
		$("#select2css")[0].href = "_css/select2.css";
		$("#nbcalccss")[0].href = "_css/volc_nb_calc.css";
		$("#apcalccss")[0].href = "_css/volc_ap_calc.css";
		$("#midimg")[0].src = "_images/volc.png";
		localStorage.setItem("selectedTheme", $("#theme").val());
		break;
	case "aegislash":
	default:
		$("#select2css")[0].href = "_css/select2.css";
		$("#nbcalccss")[0].href = "_css/nb_calc.css";
		$("#apcalccss")[0].href = "_css/ap_calc.css";
		$("#midimg")[0].src = "_images/aegi trozei.png";
		localStorage.setItem("selectedTheme", $("#theme").val());
	}
};