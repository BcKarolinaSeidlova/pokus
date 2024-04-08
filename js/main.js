var text = document.getElementById("text");

var iframe = document.getElementById("myiframe");
   iframe.width = iframe.contentWindow.document.body.scrollWidth;
   iframe.height = iframe.contentWindow.document.body.scrollHeight;
text.innerHTML = "width is " + iframe.width + " and height is " + iframe.height;
