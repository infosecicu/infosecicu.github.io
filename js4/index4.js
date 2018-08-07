var intervalID = window.setInterval(updateScreen, 1500);
var c = document.getElementById("console");

var txt = [

  "$cd..",
  "cd recon",
  "$sudo python Rec0n.py -d infosec.icu",
  "Bruteforcing subdomains.... This may take a moment..",
  "7% done..",
  "23% done..",
  "46% done...",
  "62% done...",
  "87% done..",
  "99% done",
  "100% done",
  "SUBDOMAINS FOUND! downloads.infosec.icu",
  "SUBDOMAINS FOUND! leaks.infosec.icu",
  "SUBDOMAINS FOUND! secr3t.infosec.icu",
  "#",
  "================================================",
  "Scanning ports on INFOSEC.ICU...",
  "OPEN PORT FOUND! 3306 (MYSQL)",
  "OPEN PORT FOUND! 80 (http)",
  "OPEN PORT FOUND! 443 (https)",
  "OPEN PORT FOUND! 2089 (udp)",
  "OPEN PORT FOUND! 3389 (rdp)",
  "OPEN PORT FOUND! 21   (vsftpd 2.3.4)",
  "OPEN PORT FOUND! 25  (SMTP)",
  "#",
  "================================================",
  "...BRUTEFORCING DIRECTORIES...",
  "...",
  "FOUND! /index/",
  "FOUND! /about/",
  "FOUND! /blog/",
  "FOUND! /recommended/",
  "FOUND! /twitter/",
  "FOUND! /downloads/",
  "FOUND! /private/",
  "FOUND! /xmlrpc.php",
  "#",
  "================================================",
  "Searching for hidden unlisted files on $TARGET...",
  "...",
  "...",
  "FILE FOUND! /private/FBIfiles.zip",
  "FILE FOUND! /private/AtomicKittenLive1999.zip",
  "FILE FOUND! /private/0days.zip",
  "#",
  "================================================",
  "Scraping for social media accounts....",
  "...",
  "FOUND! [phathacks]",
  "Searching online profiles....",
  "FOUND! twitter.com/phathacks/",
  "TOTAL: 1",
  "...",
  "Determining most popular tweet...",
  "Using twitter API key (Pi9JkApjAVmLj73tckWZwP3uT)",
  "Using Twitter_secret API key (aqVvBQlv1R7rOCeGW5iXLPuR4eSR6aeXh0ZO9fV)",
  "FOUND! 'twitter.com/phathacks/status/1015608818875731969'",
  "Counting followers...",
  "FOLLOWERS = 5668 (5667 fake)",
  "#",
  "================================================",
  "Preparing DDoS stress test...",
  "...",
  "'URI TARGET = AUTO'",
  "'LAYER4 = MAXIMUM_OUTPUT'",
  "'LAYER7 = MAXIMUM_OUTPUT'",
  "...",
  "Sending 4KBS to infosec.icu:25 PER SECOND [LAYER4]",
  "Sending 2 REQUESTS to infosec.icu/xmlrpc.php PER SECOND [LAYER7]",
  "Sending 2 REQUESTS to twitter.com/phathacks PER SECOND [LAYER7]",
  "waiting...",
  "waiting...",
  "waiting...",
  "Sending packet requests to determine results..",
  "infosec.icu:25 >> 0% packet loss",
  "infosec.icu/xmlrpc.php >> 0% packet",
  "twitter.com/phathacks >> 0% packet loss",
  "Gathering online status results...",
  "All Target are: [ERROR]",
  "#",
  "================================================",






]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}
