const nav = ["მთავარი", "შეიძინეთ აქ",  "კონტაქტი", "მიწოდება"];

const links = ["index.html", "services.html", "contact.html", "about.html"];

let navtext = '<ul class="flex">';

for (i = 0; i < nav.length; i++) {
  navtext += '<li><a href="' + links[i] + '">' + nav[i] + "</a></li>";
}

// navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;