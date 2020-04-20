function show()
{
	sleep(5000);
	var i = document;
	var doc = i.getElementById("iddq");
	doc.style.opacity = "80%";

}

function hide()
{
	sleep(500);
	var i = document;
	var doc = i.getElementById("iddq");
	doc.style.opacity = 0;
	doc.style.width = 0;
	doc.style.height = 0;

}


function sleep(millis) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}