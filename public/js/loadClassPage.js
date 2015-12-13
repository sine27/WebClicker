
// load class information user classid from href
// Repace href: $(current).attr('href', 'value');

function loadPageWithId(current) {
	var classid = $(current).attr('id');
	document.cookie = "classid=" + classid;
	var newHref = "./classPage.html?id=" + classid;
	$(current).attr('href', newHref);	
	//alert(classid);
}
