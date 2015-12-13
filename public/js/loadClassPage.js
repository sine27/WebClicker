
// load class information user classid from href
// Repace href: $(current).attr('href', 'value');

function loadPageWithId(current) {
	var classid = $(current).attr('id');
	var newHref = "./classPage.html?id=" + classid;
	$(current).attr('href', newHref);
	
	alert(classid);
}