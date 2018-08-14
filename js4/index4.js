var intervalID = window.setInterval(updateScreen, 1500);
var c = document.getElementById("console");

var txt = [

  "$cd..",
  "cd recon",
  "$sudo python Rec0n.py -d infosec.icu --loopscan",
  "...",
  "...",
  "Scanning target.....",
  "...",
  "Gathering results...",
  "robots.txt EXISTS! [SEVERITY = HIGH]",
  "SSL EXISTS! [INFO: BREAKS THEMES AND IMG LINKS]",
  "'right-click' NOT DISABLED! [SEVERITY = HIGH]",
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
  "Searching for hidden files on infosec.icu ...",
  "...",
  "...",
  "FILE FOUND! /private/MyFBIprofile.zip",
  "FILE FOUND! /private/AtomicKittenLive1999.zip",
  "#",
  "================================================",
  "Scraping for social media accounts....",
  "...",
  "FOUND! [phathacks]",
  "Searching online profiles....",
  "FOUND! twitter.com/phathacks/",
  "TOTAL: 1",
  "...",
  "Enumerating Twitter followers",
  "Using twitter API key (Pi9JkApjAVmLj73tckWZwP3uT)",
  "Using Twitter_secret API key (aqVvBQlv1R7rOCeGW5iXLPuR4eSR6aeXh0ZO9fV)",
  "Counting followers...",
  "FOLLOWERS = 5668 (5667 fake)",
  "#",
  "================================================",
  "Preparing DDoS stress test...",
  "...",
  "'LAYER4 = MAXIMUM_OUTPUT'(4KBS)",
  "'LAYER7 = MAXIMUM_OUTPUT'(2RPS)",
  "...",
  "BLASTING infosec.icu:25 [LAYER4]",
  "BLASTING infosec.icu/xmlrpc.php [LAYER7]",
  "waiting...",
  "waiting...",
  "waiting...",
  "Sending packets to determine results..",
  "infosec.icu:25 >> 0% packet loss",
  "infosec.icu/xmlrpc.php >> 0% packet",
  "Gathering online status results...",
  "All Target are: [unknown error]",
  "#",
  "================================================",
  "output saved to /home/JamesStevens/bday_1983_Dec18/Address_14ArchyLane_Cambridge_UK/scan.txt",
  "#",
  "================================================",








]

var docfrag = document.createDocumentFragment();

function updateScreen() {

  txt.push(txt.shift());

  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });

  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}
