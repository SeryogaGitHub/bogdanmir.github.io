  function initjQuery(callback) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {
  script.onreadystatechange = function() {
    if ( script.readyState === "loaded" || script.readyState === "complete" ) {
      script.onreadystatechange = null;
      callback();
    }
  };
  } else {
  script.onload = function() {
    callback();
  };
  }
  script.src = '//code.jquery.com/jquery-3.3.1.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
  initjQuery(function() {
    readyjQueryinit();
  });
}else{
  readyjQueryinit();
}
var hrf = location.protocol+'//'+location.host+location.pathname;
function readyjQueryinit(){
  if(location.href=="https://my.setapp.com/successful-registration"){
  jQuery(function($) {

var htmlcode = `<div class="popup-info-get-free">
<div class="col-5">
<div class="contentin">
<div>
<div class="contentin-title">iStat Menus is downloading via Setapp</div>
<div class="contentin-logo">
<a href="#" class="logo-img"><img src="https://htmldiz.github.io/setapp/newversion/logo.png" alt=""></a>
<span class="arrow"></span>
<a href="#" class="istat-img">
<img src="" alt=""> 
</a>
</div>
<div class="contentin-description">
Install Setapp to launch <span class="app-name">iStat Menus</span>
for <span class="free-txt">FREE</span><span class="trial-txt"> in 7 days trial</span>
</div>
</div>
<div class="hint">
If your download didn't start automatically,<br>
<a href="https://setapp.com/terms-of-use" target="_blank" rel="noopener">click&nbsp;here&nbsp;to&nbsp;download</a>
</div>
</div>
</div>
<div class="col-7">
<h2 class="apps-title">«Setapp is like a Netflix for apps» MacObserver</h2>
<div class="apps-subtitle">
<div class="application-item">
<img src="" alt="">
<div class="description-applicationslist">
<div class="all-apps-item__name"></div>
<div class="all-apps-item__description">
</div>
</div>
</div>
<span class="plus-ico"></span>
<span class="apps-subtitle-description">112 more apps for $9.99 per month!</span>
</div>

<h4 class="main-apps-title"><span class="free-txt">Download more apps for FREE</span> in your 7 days trial</h4>

<div class="applicationslist clearfix">
<div class="applicationslist-sidebar" id="collections-menu">
<!-- <a data-scrollto-element="" href="#all" class="">Full repertoire</a> -->
<a data-scrollto-element="" href="#maintenance" class="">Maintenance</a>
<a data-scrollto-element="" href="#lifestyle" class="">Lifestyle</a>
<a data-scrollto-element="" href="#productivity" class="">Productivity</a>
<a data-scrollto-element="" href="#task-management" class="">Task Management</a>
<a data-scrollto-element="" href="#developer-tools" class="">Developer Tools</a>

<a data-scrollto-element="" href="#writing-&-blogging" class="">Writing & Blogging</a>
<a data-scrollto-element="" href="#education" class="">Education</a>
<a data-scrollto-element="" href="#mac-hacks" class="">Mac Hacks</a>
<a data-scrollto-element="" href="#creativity" class="">Creativity</a>
<a data-scrollto-element="" href="#personal-finance" class="">Personal Finance</a>
</div>

<div class="all-apps applicationslist-content">
<div class="all-apps__list js-all-apps-list all-apps__list_all-visible applicationslist-list">
<div class="row row-apps">

<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="78" data-collections="maintenance">
<img src="https://imgix.setapp.com/app/78/2189/icon-1565940570-5d565b5ac5f57.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="CleanMyMac X" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
CleanMyMac X
</div>
<span class="all-apps-item__description">
Free up disk space, protect and speed up Mac
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="79" data-collections="maintenance">
<img src="https://imgix.setapp.com/app/79/2132/icon-1563374813-5d2f34de0002e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Gemini" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Gemini
</div>
<span class="all-apps-item__description">
Remove duplicate files from your Mac
</span>

</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="269" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/269/1122/icon-1527085008-5b0577d088503.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Wallpaper Wizard" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Wallpaper Wizard
</div>
<span class="all-apps-item__description">
Beautify your Mac with HD desktop pictures
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="70" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/70/2154/icon-1564365795-5d3e53e33ab25.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Pagico" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Pagico
</div>
<span class="all-apps-item__description">
Manage tasks and projects
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="80" data-collections="developer-tools writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/80/1925/icon-1556041191-5cbf4de7356ad.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Marked" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Marked
</div>
<span class="all-apps-item__description">
Write in Markdown with live preview
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="177" data-collections="productivity education">
<img src="https://imgix.setapp.com/app/177/1449/icon-1538971469-5bbad74d9efd0.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="XMind" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
XMind
</div>
<span class="all-apps-item__description">
Create impressive mind maps
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="194" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/194/1436/icon-1538575545-5bb4ccb9cf058.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Archiver" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Archiver
</div>
<span class="all-apps-item__description">
Easily archive files in any format
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="136" data-collections="creativity mac-hacks">
<img src="https://imgix.setapp.com/app/136/1948/icon-1557221062-5cd14ec65cbdf.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Renamer" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Renamer
</div>
<span class="all-apps-item__description">
Quickly rename files by the batch
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="146" data-collections="education">
<img src="https://imgix.setapp.com/app/146/1375/icon-1537472094-5ba3f65e51457.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Findings" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Findings
</div>
<span class="all-apps-item__description">
Keep all your academic notes in order
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="232" data-collections="creativity">
<img src="https://imgix.setapp.com/app/232/2177/icon-1565367050-5d4d9b0ad52f5.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Sip" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Sip
</div>
<span class="all-apps-item__description">
Design like a pro with a perfect color picker
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application"  data-id="188" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/188/1931/icon-1556276491-5cc2e50b972bf.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="PDF Squeezer" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
PDF Squeezer
</div>
<span class="all-apps-item__description">
Make large PDFs lighter
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="276" data-collections="productivity writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/276/2165/icon-1564764223-5d44683f0cc66.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Rocket Typist" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Rocket Typist
</div>
<span class="all-apps-item__description">
Enhance your typing by doing less of it
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="189" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/189/1116/icon-1526914200-5b02dc986579b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Yummy FTP Pro" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Yummy FTP Pro
</div>
<span class="all-apps-item__description">
Transfer files fast via FTP
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application"  data-id="271" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/271/1115/icon-1526914130-5b02dc524bfac.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Yummy FTP Watcher" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Yummy FTP Watcher
</div>
<span class="all-apps-item__description">
Sync FTP folders with your Mac automatically
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="74" data-collections="maintenance">
<img src="https://imgix.setapp.com/app/74/2179/icon-1565408591-5d4e3d4fb6a68.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="WiFi Explorer" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
WiFi Explorer
</div>
<span class="all-apps-item__description">
Monitor your network environment
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="178" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/178/2092/icon-1562067812-5d1b436475a65.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Elmedia Player" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Elmedia Player
</div>
<span class="all-apps-item__description">
Play media files of any format
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="202" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/202/2187/icon-1565876247-5d5560176956b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Folx" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Folx
</div>
<span class="all-apps-item__description">
Download files and torrents really fast
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="286" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/286/911/icon-1518092618-5a7c414a87893.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="PhotoBulk" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
PhotoBulk
</div>
<span class="all-apps-item__description">
Save time by editing bulks of photos at once
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="289" data-collections="productivity">
<img src="https://imgix.setapp.com/app/289/1340/icon-1536923715-5b9b9843e1faa.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="CloudMounter" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
CloudMounter
</div>
<span class="all-apps-item__description">
Mount your online drives directly into Finder
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="135" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/135/359/icon-1490522115-58d79003ef470.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Base" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Base
</div>
<span class="all-apps-item__description">
Browse and edit your SQLite 3 files
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="187" data-collections="productivity education">
<img src="https://imgix.setapp.com/app/187/2071/icon-1561049861-5d0bbb05a6249.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="iThoughtsX" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
iThoughtsX
</div>
<span class="all-apps-item__description">
Make a mind map in 5 minutes
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="83" data-collections="lifestyle personal-finance">
<img src="https://imgix.setapp.com/app/83/1990/icon-1558639675-5ce6f43b8de9d.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Chronicle" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Chronicle
</div>
<span class="all-apps-item__description">
Easily master your finances
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="195" data-collections="creativity">
<img src="https://imgix.setapp.com/app/195/1917/icon-1555674466-5cb9b56271349.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Image2icon" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Image2icon
</div>
<span class="all-apps-item__description">
Convert any image into icon
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="175" data-collections="creativity">
<img src="https://imgix.setapp.com/app/175/2111/icon-1562649210-5d24227a685bf.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Capto" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Capto
</div>
<span class="all-apps-item__description">
Make a video of your screen
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="291" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/291/1978/icon-1558423435-5ce3a78be126f.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Boom 3D" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Boom 3D
</div>
<span class="all-apps-item__description">
Boost and enhance your Mac's audio output
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="145" data-collections="writing-&amp;-blogging education">
<img src="https://imgix.setapp.com/app/145/1936/icon-1556812374-5ccb12563050a.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Manuscripts" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Manuscripts
</div>
<span class="all-apps-item__description">
Write a book and do it easily
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="184" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/184/2185/icon-1565773528-5d53ced8517d8.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Timing" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Timing
</div>
<span class="all-apps-item__description">
Track the time you spend on anything
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="201" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/201/1455/icon-1539023614-5bbba2fe24072.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Simon" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Simon
</div>
<span class="all-apps-item__description">
Monitor your servers at all times
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="64" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/64/2015/icon-1559316554-5cf1484ab6440.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="RapidWeaver" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
RapidWeaver
</div>
<span class="all-apps-item__description">
Create websites without coding
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="209" data-collections="creativity">
<img src="https://imgix.setapp.com/app/209/594/icon-1504606262-59ae783692730.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Squash" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Squash
</div>
<span class="all-apps-item__description">
Compress files to make them lighter
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="193" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/193/1970/icon-1558078558-5cde645e2405f.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Remote Mouse" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Remote Mouse
</div>
<span class="all-apps-item__description">
Control your Mac via iPhone or iPad
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="192" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/192/2129/icon-1563292402-5d2df2f291950.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Hype" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Hype
</div>
<span class="all-apps-item__description">
Create animated web content
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/213/2053/icon-1560458240-5d02b400baf44.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="TaskPaper" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
TaskPaper
</div>
<span class="all-apps-item__description">
Remember everything you need to do
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="173" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/173/1528/icon-1541439875-5be08183c7cdc.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Be Focused" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Be Focused
</div>
<span class="all-apps-item__description">
Get any job done with a timer
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="174" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/174/1454/icon-1539012671-5bbb783f30a1f.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Cloud Outliner" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Cloud Outliner
</div>
<span class="all-apps-item__description">
Outline your ideas to align your life
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="212" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/212/1840/icon-1552740854-5c8cf1f62c2b5.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="HazeOver" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
HazeOver
</div>
<span class="all-apps-item__description">
Focus on the task at hand, dim the rest
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="197" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/197/1216/icon-1530540846-5b3a332ea1b96.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Gifox" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Gifox
</div>
<span class="all-apps-item__description">
Quickly make GIFs from your screen
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="186" data-collections="productivity education">
<img src="https://imgix.setapp.com/app/186/1958/icon-1557749056-5cd95d40b74b4.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Numi" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Numi
</div>
<span class="all-apps-item__description">
Calculate anything, anywhere
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="134" data-collections="writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/134/1625/icon-1544823461-5c1422a5d84bb.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Focused" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Focused
</div>
<span class="all-apps-item__description">
Write articles and don't get distracted
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="122" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/122/1415/icon-1538052443-5bacd15bdaba7.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="CodeRunner" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
CodeRunner
</div>
<span class="all-apps-item__description">
Edit and run code in any language
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="196" data-collections="writing-&amp;-blogging education task-management">
<img src="https://imgix.setapp.com/app/196/1717/icon-1548746580-5c4fff54dc54b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Aeon Timeline" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Aeon Timeline
</div>
<span class="all-apps-item__description">
Create timelines for your projects
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="206" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/206/2150/icon-1563996840-5d38b2a840206.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="GoodTask" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
GoodTask
</div>
<span class="all-apps-item__description">
Keep all your tasks in one place
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="144" data-collections="maintenance">
<img src="https://imgix.setapp.com/app/144/1615/icon-1544611500-5c10e6acc2f70.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="iStat Menus" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
iStat Menus
</div>
<span class="all-apps-item__description">
Monitor your Mac's health and system
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="75" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/75/2016/icon-1559348754-5cf1c6122cc23.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Jump Desktop" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Jump Desktop
</div>
<span class="all-apps-item__description">
Access any computer from your Mac
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="215" data-collections="lifestyle personal-finance">
<img src="https://imgix.setapp.com/app/215/2109/icon-1562700793-5d24ebf96310e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MoneyWiz" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MoneyWiz
</div>
<span class="all-apps-item__description">
Keep your budget in perfect order
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="210" data-collections="maintenance">
<img src="https://imgix.setapp.com/app/210/2039/icon-1559910613-5cfa58d599cc3.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Get Backup Pro" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Get Backup Pro
</div>
<span class="all-apps-item__description">
Keep your Mac backed up and protected
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/95/1721/icon-1548834453-5c515695d65b2.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Swift Publisher" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Swift Publisher
</div>
<span class="all-apps-item__description">
Create effective printable materials of any kind
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="82" data-collections="maintenance">
<img src="https://imgix.setapp.com/app/82/1766/icon-1556129577-5cc0a729aff9c.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Disk Drill" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Disk Drill
</div>
<span class="all-apps-item__description">
Recover data and protect your files
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="218" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/218/2031/icon-1559736206-5cf7af8ef36da.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Screens" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Screens
</div>
<span class="all-apps-item__description">
Access any other computer from your Mac
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="98" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/98/2175/icon-1565516273-5d4fe1f1f0869.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Paste" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Paste
</div>
<span class="all-apps-item__description">
Use a smart clipboard for your work
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="219" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/219/2144/icon-1563889879-5d3710d731420.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Permute" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Permute
</div>
<span class="all-apps-item__description">
Convert any media into any format
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="222" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/222/2197/icon-1566301092-5d5bdba4afe34.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Downie" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Downie
</div>
<span class="all-apps-item__description">
Download media from the web
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="217" data-collections="mac-hacks maintenance">
<img src="https://imgix.setapp.com/app/217/2195/icon-1566241322-5d5af22a34edb.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="ChronoSync Express" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
ChronoSync Express
</div>
<span class="all-apps-item__description">
Keep files backed up and synchronized
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="224" data-collections="lifestyle personal-finance">
<img src="https://imgix.setapp.com/app/224/2060/icon-1560802488-5d07f4b82b33d.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Home Inventory" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Home Inventory
</div>
<span class="all-apps-item__description">
Know what you have in your house
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="229" data-collections="creativity mac-hacks">
<img src="https://imgix.setapp.com/app/229/1736/icon-1549363702-5c5969f69916c.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="iFlicks" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
iFlicks
</div>
<span class="all-apps-item__description">
Add your videos to iTunes
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="230" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/230/2136/icon-1563542295-5d31c31713b14.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="SQLPro Studio" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
SQLPro Studio
</div>
<span class="all-apps-item__description">
Manage Postgres and MySQL databases
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="333" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/333/2134/icon-1563471524-5d30aea4b0077.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="SQLPro for SQLite" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
SQLPro for SQLite
</div>
<span class="all-apps-item__description">
Take full control of your SQLite databases
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="231" data-collections="education">
<img src="https://imgix.setapp.com/app/231/2034/icon-1559819070-5cf8f33e14720.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Studies" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Studies
</div>
<span class="all-apps-item__description">
Finish your academic paper in no time
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="227" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/227/927/icon-1524227696-5ad9de70e7a0e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Shimo" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Shimo
</div>
<span class="all-apps-item__description">
Use the most reliable VPN software
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="235" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/235/1653/icon-1546652826-5c300c9a04b3b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Lacona" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Lacona
</div>
<span class="all-apps-item__description">
Give your Mac quick commands
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="234" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/234/1727/icon-1548945885-5c5309dd3b5d8.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Forecast Bar" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Forecast Bar
</div>
<span class="all-apps-item__description">
Know exact weather anywhere
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="285" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/285/1993/icon-1558911514-5ceb1a1acafe6.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="InstaCal" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
InstaCal
</div>
<span class="all-apps-item__description">
Have your calendars always at hand
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="237" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/237/2032/icon-1559752151-5cf7edd741fb4.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Flume" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Flume
</div>
<span class="all-apps-item__description">
Upload files directly to Instagram
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="240" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/240/1401/icon-1537949331-5bab3e93aa91a.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="ChatMate for WhatsApp" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
ChatMate for WhatsApp
</div>
<span class="all-apps-item__description">
Use WhatsApp on Mac
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="223" data-collections="developer-tools maintenance">
<img src="https://imgix.setapp.com/app/223/1478/icon-1539790549-5bc756d52290f.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="NetSpot" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
NetSpot
</div>
<span class="all-apps-item__description">
Run wireless site surveys on Mac
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="243" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/243/1509/icon-1540812274-5bd6edf24279b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Expressions" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Expressions
</div>
<span class="all-apps-item__description">
Have fun with regular expressions
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="268" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/268/1507/icon-1540811133-5bd6e97d52d9c.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Workspaces" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Workspaces
</div>
<span class="all-apps-item__description">
Organize your working environment properly
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="308" data-collections="developer-tools productivity">
<img src="https://imgix.setapp.com/app/308/1506/icon-1540808366-5bd6deaec7436.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="TeaCode" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
TeaCode
</div>
<span class="all-apps-item__description">
Start writing your code the quicker way
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="245" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/245/2087/icon-1561968211-5d19be53239c9.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="BetterZip" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
BetterZip
</div>
<span class="all-apps-item__description">
Quickly archive files and folders
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="244" data-collections="lifestyle mac-hacks">
<img src="https://imgix.setapp.com/app/244/1533/icon-1541497818-5be163da138e1.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="TripMode" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
TripMode
</div>
<span class="all-apps-item__description">
Save your mobile data when on the go
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="246" data-collections="lifestyle productivity">
<img src="https://imgix.setapp.com/app/246/1365/icon-1537227362-5ba03a62bb9fd.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="World Clock Pro" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
World Clock Pro
</div>
<span class="all-apps-item__description">
Know what time it is in any city
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="247" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/247/2161/icon-1564658841-5d42cc994c085.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Mosaic" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Mosaic
</div>
<span class="all-apps-item__description">
Organize windows on your desktop
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="294" data-collections="maintenance">
<img src="https://imgix.setapp.com/app/294/1354/icon-1536851987-5b9a8013d6e75.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Spotless" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Spotless
</div>
<span class="all-apps-item__description">
Organize your files the smartest way possible
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="241" data-collections="task-management">
<img src="https://imgix.setapp.com/app/241/2114/icon-1562765581-5d25e90dcd550.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Merlin Project Express" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Merlin Project Express
</div>
<span class="all-apps-item__description">
Manage all your projects like a pro
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="248" data-collections="productivity writing-&amp;-blogging education">
<img src="https://imgix.setapp.com/app/248/1915/icon-1555605091-5cb8a663f1897.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Mate Translate" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Mate Translate
</div>
<span class="all-apps-item__description">
Translate anything on the go
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="238" data-collections="creativity">
<img src="https://imgix.setapp.com/app/238/1956/icon-1557831481-5cda9f39ed7a3.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="n-Track Studio" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
n-Track Studio
</div>
<span class="all-apps-item__description">
Become a musician and mix tracks
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="242" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/242/1921/icon-1555774933-5cbb3dd58b408.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Unclutter" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Unclutter
</div>
<span class="all-apps-item__description">
Keep any files on desktop with no clutter
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="249" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/249/2041/icon-1560278540-5cfff60cbd78e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="News Explorer" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
News Explorer
</div>
<span class="all-apps-item__description">
Have your newsfeed delivered to you
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="335" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/335/1716/icon-1548955814-5c5330a6880fa.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Movie Explorer Pro" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Movie Explorer Pro
</div>
<span class="all-apps-item__description">
Organize your movie collection beautifully
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="250" data-collections="productivity">
<img src="https://imgix.setapp.com/app/250/2192/icon-1566070392-5d5856789933c.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Dropshare" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Dropshare
</div>
<span class="all-apps-item__description">
Quickly share any file or folder
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="130" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/130/2065/icon-1560941143-5d0a12579f665.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Noizio" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Noizio
</div>
<span class="all-apps-item__description">
Turn on the sounds to help you concentrate
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="169" data-collections="lifestyle productivity">
<img src="https://imgix.setapp.com/app/169/1479/icon-1539884247-5bc8c4d7b9f0c.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Unibox" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Unibox
</div>
<span class="all-apps-item__description">
Have all your mail grouped by sender
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="252" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/252/1703/icon-1548766005-5c504b35d2c57.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="WaitingList" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
WaitingList
</div>
<span class="all-apps-item__description">
Create beautiful countdowns to events
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="94" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/94/1538/icon-1542743384-5bf46558650bb.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Paw" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Paw
</div>
<span class="all-apps-item__description">
Send HTTP requests, describe RESTful APIs
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="255" data-collections="creativity">
<img src="https://imgix.setapp.com/app/255/1513/icon-1540894506-5bd82f2a38cd0.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Tayasui Sketches" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Tayasui Sketches
</div>
<span class="all-apps-item__description">
Draw with amazing realistic brushes
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="262" data-collections="mac-hacks maintenance">
<img src="https://imgix.setapp.com/app/262/1456/icon-1539081432-5bbc84d8137b4.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Declutter" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Declutter
</div>
<span class="all-apps-item__description">
Keep your desktop clean and organized
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="253" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/253/2050/icon-1560430920-5d02494830c9c.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="ForkLift" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
ForkLift
</div>
<span class="all-apps-item__description">
Manage your files with dual pane convenience
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="264" data-collections="creativity developer-tools">
<img src="https://imgix.setapp.com/app/264/1947/icon-1557260266-5cd1e7ea2beef.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="IconJar" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
IconJar
</div>
<span class="all-apps-item__description">
Store all your icons in one place, just a click away
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="254" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/254/1604/icon-1544027536-5c07fd90f0216.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Photolemur" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Photolemur
</div>
<span class="all-apps-item__description">
Enhance your photos with the power of AI
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="68" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/68/2115/icon-1562792827-5d26537bcb3a2.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="2Do" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
2Do
</div>
<span class="all-apps-item__description">
Plan all your activities in a smarter way
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="272" data-collections="productivity writing-&amp;-blogging education">
<img src="https://imgix.setapp.com/app/272/2140/icon-1563736481-5d34b9a112137.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="PDF Search" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
PDF Search
</div>
<span class="all-apps-item__description">
Search within PDFs with maximum relevance
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="267" data-collections="education">
<img src="https://imgix.setapp.com/app/267/1884/icon-1554658651-5caa355b2f18d.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Wokabulary" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Wokabulary
</div>
<span class="all-apps-item__description">
Learn and organize foreign words efficiently
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="270" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/270/1811/icon-1551794465-5c7e81217a763.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Lungo" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Lungo
</div>
<span class="all-apps-item__description">
Prevent your Mac from going to sleep
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="257" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/257/1881/icon-1554454378-5ca7176a721b6.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Flawless" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Flawless
</div>
<span class="all-apps-item__description">
Implement pixel perfect iOS interfaces
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="266" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/266/1926/icon-1556073993-5cbfce090af22.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Focus" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Focus
</div>
<span class="all-apps-item__description">
Block distracting websites
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="275" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/275/1295/icon-1534282015-5b73491fa5652.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Switchem" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Switchem
</div>
<span class="all-apps-item__description">
Create and switch your workspaces with ease
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="280" data-collections="lifestyle productivity">
<img src="https://imgix.setapp.com/app/280/2178/icon-1565402783-5d4e269f76553.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="NotePlan" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
NotePlan
</div>
<span class="all-apps-item__description">
Organize your life with the benefits of markdown
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="282" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/282/676/icon-1509646262-59fb5fb64ad64.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MacGourmet Deluxe" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MacGourmet Deluxe
</div>
<span class="all-apps-item__description">
Discover and collect your favorite food recipes
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="284" data-collections="productivity writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/284/1685/icon-1547742888-5c40aea871655.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="TextSoap" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
TextSoap
</div>
<span class="all-apps-item__description">
Edit your texts with the ease of automation
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="67" data-collections="writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/67/2193/icon-1566205023-5d5a645f77008.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Ulysses" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Ulysses
</div>
<span class="all-apps-item__description">
Write your first novel
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="274" data-collections="lifestyle education">
<img src="https://imgix.setapp.com/app/274/2035/icon-1560341591-5d00ec57400f6.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="KeyKey Typing Tutor" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
KeyKey Typing Tutor
</div>
<span class="all-apps-item__description">
Learn and improve your blind typing skills
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="287" data-collections="creativity productivity">
<img src="https://imgix.setapp.com/app/287/1734/icon-1549356775-5c594ee75b0ee.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Inboard" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Inboard
</div>
<span class="all-apps-item__description">
Organize your visuals into a convenient catalogue
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="288" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/288/2155/icon-1564437862-5d3f6d66ce7b5.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Secrets" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Secrets
</div>
<span class="all-apps-item__description">
Store your passwords and sensitive data securely
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="153" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/153/1919/icon-1555691536-5cb9f810a331f.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Bartender" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Bartender
</div>
<span class="all-apps-item__description">
Take full control of your menu bar icons
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="296" data-collections="lifestyle productivity">
<img src="https://imgix.setapp.com/app/296/1683/icon-1547679187-5c3fb5d39cd8e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="IM+" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
IM+
</div>
<span class="all-apps-item__description">
Combine messaging apps into one, at last
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="297" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/297/2159/icon-1564524862-5d40c13ec3317.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="TablePlus" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
TablePlus
</div>
<span class="all-apps-item__description">
Manage multiple databases the easy way
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="298" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/298/1467/icon-1540461708-5bd1948cf1a17.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="TouchRetouch" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
TouchRetouch
</div>
<span class="all-apps-item__description">
Refine your photos with the right tools for the job
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="295" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/295/2198/icon-1566382590-5d5d19fea9cc2.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="BetterTouchTool" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
BetterTouchTool
</div>
<span class="all-apps-item__description">
Take full control of your Mac's input devices
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="300" data-collections="creativity">
<img src="https://imgix.setapp.com/app/300/1846/icon-1552923693-5c8fbc2d391a3.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Aquarelo" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Aquarelo
</div>
<span class="all-apps-item__description">
Prepare, mix and export perfect color palettes
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="299" data-collections="creativity">
<img src="https://imgix.setapp.com/app/299/1834/icon-1552554392-5c8a19987fb64.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="CameraBag Pro" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
CameraBag Pro
</div>
<span class="all-apps-item__description">
Edit your videos and apply cinematic filters to them
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="160" data-collections="productivity writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/160/2141/icon-1563806719-5d35cbffafe8f.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Prizmo" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Prizmo
</div>
<span class="all-apps-item__description">
Apply optical character recognition to any images
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="304" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/304/2174/icon-1565310570-5d4cbe6ae4777.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="BusyCal" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
BusyCal
</div>
<span class="all-apps-item__description">
Take full control of all your schedule
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="307" data-collections="lifestyle productivity">
<img src="https://imgix.setapp.com/app/307/1814/icon-1551950104-5c80e11869d7a.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Canary Mail" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Canary Mail
</div>
<span class="all-apps-item__description">
Beautify your emailing experience
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="306" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/306/1903/icon-1555389866-5cb55daa0d2da.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="uBar" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
uBar
</div>
<span class="all-apps-item__description">
Replace your Dock with a more versatile tool
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="301" data-collections="mac-hacks maintenance">
<img src="https://imgix.setapp.com/app/301/1842/icon-1552806706-5c8df3329aa2e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Endurance" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Endurance
</div>
<span class="all-apps-item__description">
Extend your Mac's battery life without effort
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/311/1790/icon-1551186332-5c75399c03060.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="DCommander" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
DCommander
</div>
<span class="all-apps-item__description">
Go dual-pane with your file management
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="273" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/273/1204/icon-1531287477-5b4597b570e35.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Emulsion" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Emulsion
</div>
<span class="all-apps-item__description">
Manage and adjust your photos via handy catalogs
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="318" data-collections="personal-finance">
<img src="https://imgix.setapp.com/app/318/1627/icon-1544910407-5c157647a1905.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="GigEconomy" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
GigEconomy
</div>
<span class="all-apps-item__description">
Track work time, bill and invoice your clients easily
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="277" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/277/1288/icon-1533919226-5b6dbffa29a75.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Cappuccino" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Cappuccino
</div>
<span class="all-apps-item__description">
Read your favorite news in one cozy place
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="353" data-collections="productivity writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/353/2097/icon-1562101545-5d1bc7290703b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Strike" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Strike
</div>
<span class="all-apps-item__description">
Collaborate on your team writing with proper tools
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="312" data-collections="creativity developer-tools">
<img src="https://imgix.setapp.com/app/312/1249/icon-1533035546-5b60441a61235.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Folio" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Folio
</div>
<span class="all-apps-item__description">
Take your designs under version control
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="314" data-collections="personal-finance">
<img src="https://imgix.setapp.com/app/314/1989/icon-1558720625-5ce83071e0fe2.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Moonitor" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Moonitor
</div>
<span class="all-apps-item__description">
Track your cryptocurrency investments real-time
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="315" data-collections="creativity">
<img src="https://imgix.setapp.com/app/315/2079/icon-1561460256-5d11fe2051a4e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Typeface" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Typeface
</div>
<span class="all-apps-item__description">
Organize and manage your font collections
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="316" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/316/1388/icon-1537787618-5ba8c6e2dd4df.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Espresso" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Espresso
</div>
<span class="all-apps-item__description">
Design, write, and code your own website
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="155" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/155/1385/icon-1537788771-5ba8cb6310788.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Dropzone" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Dropzone
</div>
<span class="all-apps-item__description">
Improve your drag and drop experience
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="324" data-collections="lifestyle creativity">
<img src="https://imgix.setapp.com/app/324/2069/icon-1561031652-5d0b73e4cb57d.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="GlueMotion" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
GlueMotion
</div>
<span class="all-apps-item__description">
Create time lapse videos from separate photos
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="356" data-collections="creativity">
<img src="https://imgix.setapp.com/app/356/2099/icon-1562165351-5d1cc067386a0.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MetaImage" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MetaImage
</div>
<span class="all-apps-item__description">
Edit and adjust image metadata with ease
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="323" data-collections="education">
<img src="https://imgix.setapp.com/app/323/2078/icon-1561383241-5d10d14961c6a.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MarginNote" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MarginNote
</div>
<span class="all-apps-item__description">
Study better with powerful annotation
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="322" data-collections="productivity writing-&amp;-blogging education">
<img src="https://imgix.setapp.com/app/322/2110/icon-1562634340-5d23e864a02d4.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="PDFpen" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
PDFpen
</div>
<span class="all-apps-item__description">
Edit and create PDFs using powerful tools
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="326" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/326/2026/icon-1559650512-5cf660d0a93ee.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Taskheat" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Taskheat
</div>
<span class="all-apps-item__description">
Plan a detailed path to any of your goals
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="327" data-collections="education">
<img src="https://imgix.setapp.com/app/327/1553/icon-1542042300-5be9b2bca6b33.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MathKey" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MathKey
</div>
<span class="all-apps-item__description">
Convert written formulas into proper formats
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="305" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/305/1850/icon-1553296785-5c956d91c51f2.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MacPilot" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MacPilot
</div>
<span class="all-apps-item__description">
Take full control of your Mac's features
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="281" data-collections="writing-&amp;-blogging education">
<img src="https://imgix.setapp.com/app/281/1729/icon-1549026069-5c544315171d1.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="ProWritingAid" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
ProWritingAid
</div>
<span class="all-apps-item__description">
Write with perfect style, grammar and readability
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="320" data-collections="productivity education">
<img src="https://imgix.setapp.com/app/320/2169/icon-1565091938-5d49686289400.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MindNode" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MindNode
</div>
<span class="all-apps-item__description">
Visualize your ideas with mind maps
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="319" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/319/1913/icon-1555547906-5cb7c7026407b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="ToothFairy" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
ToothFairy
</div>
<span class="all-apps-item__description">
Connect your Bluetooth headphones in a click
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="321" data-collections="creativity productivity mac-hacks">
<img src="https://imgix.setapp.com/app/321/2160/icon-1564658174-5d42c9fe459c2.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="CleanShot" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
CleanShot
</div>
<span class="all-apps-item__description">
Take screenshots better than you did before
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="328" data-collections="mac-hacks maintenance">
<img src="https://imgix.setapp.com/app/328/2102/icon-1562209005-5d1d6aedce72c.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="AnyTrans for iOS" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
AnyTrans for iOS
</div>
<span class="all-apps-item__description">
Manage and back up your iOS devices from Mac
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="336" data-collections="mac-hacks maintenance">
<img src="https://imgix.setapp.com/app/336/2186/icon-1565858526-5d551ade942f6.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="AnyTrans for Android" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
AnyTrans for Android
</div>
<span class="all-apps-item__description">
Manage and back up your Android from Mac
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="337" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/337/1801/icon-1551346641-5c77abd19fb1a.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="iMeetingX" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
iMeetingX
</div>
<span class="all-apps-item__description">
Plan and conduct your meetings effectively
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="339" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/339/2164/icon-1564760170-5d44586a6fe90.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Core Shell" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Core Shell
</div>
<span class="all-apps-item__description">
Make use of a full-featured SSH terminal
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="341" data-collections="productivity task-management">
<img src="https://imgix.setapp.com/app/341/2152/icon-1564196666-5d3bbf3ae15d5.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="SheetPlanner" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
SheetPlanner
</div>
<span class="all-apps-item__description">
Stay in the know of your daily activities
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="338" data-collections="creativity">
<img src="https://imgix.setapp.com/app/338/1951/icon-1557324774-5cd2e3e6e3947.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="FotoMagico Pro" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
FotoMagico Pro
</div>
<span class="all-apps-item__description">
Turn images and video into gorgeous slideshows
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="330" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/330/2084/icon-1561982964-5d19f7f4a7724.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Yoink" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Yoink
</div>
<span class="all-apps-item__description">
Simplify and improve your drag and drop experience
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="340" data-collections="developer-tools mac-hacks">
<img src="https://imgix.setapp.com/app/340/2153/icon-1564346049-5d3e06c1e890d.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Unite" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Unite
</div>
<span class="all-apps-item__description">
Create separate apps out of favorite websites
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="342" data-collections="creativity">
<img src="https://imgix.setapp.com/app/342/2098/icon-1562577146-5d2308fa07e6e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Luminar Flex" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Luminar Flex
</div>
<span class="all-apps-item__description">
Enhance your photos with advanced filters and tools
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="343" data-collections="writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/343/1981/icon-1558441331-5ce3ed730ac58.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="MarsEdit" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
MarsEdit
</div>
<span class="all-apps-item__description">
Create and publish your blog efficiently
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="345" data-collections="creativity developer-tools">
<img src="https://imgix.setapp.com/app/345/2182/icon-1565528429-5d50116d6cbaa.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Goldie App" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Goldie App
</div>
<span class="all-apps-item__description">
Maintain golden ratio in your visuals
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="346" data-collections="developer-tools">
<img src="https://imgix.setapp.com/app/346/2126/icon-1564828039-5d4561870b593.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Proxyman" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Proxyman
</div>
<span class="all-apps-item__description">
View network requests from apps and domains
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="347" data-collections="lifestyle writing-&amp;-blogging">
<img src="https://imgix.setapp.com/app/347/2181/icon-1565525206-5d5004d69ea0b.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Diarly" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Diarly
</div>
<span class="all-apps-item__description">
Keep your personal diary neatly organized
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="344" data-collections="lifestyle">
<img src="https://imgix.setapp.com/app/344/2191/icon-1566016194-5d5782c2be362.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Movist Pro" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Movist Pro
</div>
<span class="all-apps-item__description">
Watch and adjust any media files to your liking
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="351" data-collections="personal-finance">
<img src="https://imgix.setapp.com/app/351/2003/icon-1559303696-5cf116104417e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Receipts" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Receipts
</div>
<span class="all-apps-item__description">
Automize your financial document management
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="350" data-collections="productivity mac-hacks">
<img src="https://imgix.setapp.com/app/350/2038/icon-1561147221-5d0d375595321.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Silenz" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Silenz
</div>
<span class="all-apps-item__description">
Take control of your sound surroundings
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="349" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/349/2188/icon-1565936634-5d564bfad47b6.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="One Switch" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
One Switch
</div>
<span class="all-apps-item__description">
Control various macOS features with a click
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="355" data-collections="education">
<img src="https://imgix.setapp.com/app/355/2081/icon-1561640268-5d14bd4caf87e.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="PocketCAS" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
PocketCAS
</div>
<span class="all-apps-item__description">
Solve math equations with numerous utilities
</span>
</div>
</div>
<div class="all-apps-item js-all-apps-item applicationslist-grid-application" data-id="354" data-collections="mac-hacks">
<img src="https://imgix.setapp.com/app/354/2101/icon-1564094309-5d3a2f6562120.png?auto=format&amp;ixlib=php-2.3.0&amp;q=75&amp;w=160" alt="Beepify" class="all-apps-item__icon">
<div class="all-apps-item__body">
<div class="all-apps-item__name">
Beepify
</div>
<span class="all-apps-item__description">
Trigger alarm and protect your Mac from theft
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div>
<svg style="display:none">
<symbol viewBox="0 0 95.333 95.333" xmlns="http://www.w3.org/2000/svg" id="facebook">
<path d="M93.333,0H2C0.896,0,0,0.896,0,2v91.332c0,1.104,0.896,2,2,2h48.525V63.477H40.284c-0.885,0-1.602-0.717-1.602-1.602
V48.961c0-0.885,0.717-1.603,1.602-1.603h10.242v-8.913c0-11.744,7.395-19.332,18.839-19.332l10.188,0.016
c0.883,0.001,1.6,0.718,1.6,1.602v11.991c0,0.885-0.717,1.602-1.602,1.602l-6.863,0.003c-4.729,0-5.595,1.844-5.595,5.475v7.556
h11.979c0.425,0,0.832,0.169,1.133,0.47c0.3,0.301,0.469,0.708,0.469,1.133L80.67,61.876c0,0.885-0.717,1.603-1.602,1.603H67.092
v31.854h26.24c1.104,0,2-0.896,2-2V2C95.333,0.895,94.438,0,93.333,0z"/>
</symbol>
<symbol viewBox="0 0 510 510" id="goo">
<path d="M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25    s86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5    c-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z" fill="#FFFFFF"/>
</symbol>
</svg>
</div>`;
htmlcode += '';
  $('body').append(htmlcode);
  $('body').append('<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Cond:400,700" rel="stylesheet">');
  $('body').append('<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">');
  $('body').append('<style>html,body{margin:0;padding:0}*,*::before,*::after{box-sizing:border-box}.popup-info-get-free{font-family:\'Roboto\',sans-serif}#signup-form-big{color:#ffffff;max-width:400px;margin:auto}.popup-info-get-free .col-5{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;position:relative;-webkit-box-flex:0;-webkit-flex:0 0 35%;-ms-flex:0 0 35%;flex:0 0 35%;max-width:35%;background-color:#443c54}.popup-info-get-free .col-7{position:relative;-webkit-box-flex:0;-webkit-flex:0 0 65%;-ms-flex:0 0 65%;flex:0 0 65%;max-width:65%;padding:35px 63px 0}.popup-info-get-free .apps-title{color:#0a104e;font-family:Roboto;font-size:24px;font-weight:700;text-align:center;margin-bottom:15px}.popup-info-get-free .apps-subtitle{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d2d2d2;padding-bottom:5px}.main-apps-title{margin:28px auto 27px;color:#0a104e;font-weight:700;font-size:28px;text-align:center}.main-apps-title .free-txt{color:#62c85f}.application-item{flex-wrap:nowrap;display:flex;align-items:center}.contentin{width:100%;margin-left:auto;margin-right:auto;padding:177px 0 0;max-height:100vh;height:calc(100vh - 250px)}.contentin-logo{max-width:375px;display:flex;justify-content:space-between;margin:auto;padding-bottom:25px}.arrow{position:relative;width:35px}.arrow:before,.arrow:after{position:absolute;content:\'\';display:block;background-color:#ffffff;opacity:0.37;width:2px;height:50%;left:50%}.arrow:before{top:6px;transform:rotate(-45deg)}.arrow:after{bottom:6px;transform:rotate(45deg)}.contentin-logo .logo-img img{max-width:210px}.contentin-logo .istat-img img{max-width:75px}.contentin .containe-break,.contentin .contentin-title,.contentin .contentin-logo{width:100%;text-align:center}.download-btn,.download-btn:hover{color:#fff;background-color:#000;border-radius:6px;padding:5px 10px;text-decoration:none;font-size:10px}.contentin .contentin-title{font-size:27px;font-family:"Roboto";color:rgb(255,255,255);line-height:1.2;margin-bottom:35px}.contentin-description{font-size:20px;font-family:Roboto;font-weight:300;color:rgb(255,255,255);max-width:320px;text-align:center;margin:auto}.contentin-description .free-txt{font-weight:400;color:#74d371}.contentin-description .trial-txt{font-weight:700}.popup-info-get-free{position:fixed;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;left:0;right:0;top:0;bottom:0}.hint{font-size:16px;font-family:"Roboto";color:rgb(255,255,255);margin:0 0 0 47px;font-weight:300;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:40px}.hint a{color:#8ba4fe}.break-first{margin-top:30px}.break-last{margin-bottom:30px}.popup-info-get-free .applicationslist{padding-bottom:50px;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;padding-bottom:200px}.popup-info-get-free .applicationslist-sidebar a.-active{box-shadow:0px 2px 6.23px 0.77px rgba(67,69,81,0.21)}.popup-info-get-free .applicationslist-sidebar a.sign-inlink{text-transform:uppercase;color:#3c6ad9}.popup-info-get-free .applicationslist-sidebar a{-webkit-box-flex:0;-webkit-flex:0 0 19%;-ms-flex:0 0 19%;flex:0 0 19%;max-width:19%;margin-left:.5%;margin-right:.5%;padding:15px 0 15px 15px;font-size:15px;font-family:"Roboto";color:rgb(67,69,81);text-decoration:none;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:12px}.popup-info-get-free .applicationslist-sidebar a:nth-child(n+6){border-bottom:solid 1px #d2d2d2}.popup-info-get-free .applicationslist-sidebar{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.application-item img,.applicationslist-content .all-apps-item img{float:left;max-width:80px;height:auto;margin-right:22px}.all-apps-item__description{display:flex;font-size:13px;color:#404350;min-height:55px;margin-top:5px;max-width:80%}.apps-subtitle .all-apps-item__name{margin-top:10px;color:#2d4ffa;font-size:25px}.plus-ico{position:relative;width:36px;height:36px}.plus-ico:before,.plus-ico:after{position:absolute;content:\'\';display:block;background-color:#0a104d}.plus-ico:before{width:5px;height:100%;top:0;left:calc(50% - 2px)}.plus-ico:after{width:100%;height:5px;top:calc(50% - 2px);left:0}.apps-subtitle .apps-subtitle-description{color:#0a104d;font-size:20px;font-weight:700}.applicationslist-content .all-apps-item__name{margin-top:10px;font-size:18px;color:#00024f}.applicationslist-content .all-apps-item{-webkit-box-flex:0;-webkit-flex:0 0 33%;-ms-flex:0 0 33%;flex:0 0 33%;max-width:33%;margin-bottom:48px;display:flex;align-items:center}.applicationslist-content{overflow:auto;max-height:calc(100vh - 465px);margin-top:10px;margin-bottom:100px}.applicationslist-content .applicationslist-grid,.applicationslist-content .row{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.all-apps-item{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;display:flex;align-items:center;text-decoration:none}.title.applicationslist-category{font-size:25px;line-height:1.5;color:#00024f;margin-bottom:20px}.-social{display:flex;justify-content:space-between;margin:15px auto}.social_ico{max-width:18px;max-height:18px;fill:#fff;margin:0 25px 0 0}.-social .cta-button{flex:0 0 48%;max-width:48%;font-family:\'Roboto Condensed\',sans-serif;font-size:18px;font-weight:700;text-transform:uppercase}.facebook_btn,.google_btn{display:flex;justify-content:center;padding:11px;color:#fff;text-decoration:none}.facebook_btn{background-color:#495a92}.google_btn{background-color:#c35c52}@media (max-width:1450px){.applicationslist-content .all-apps-item{flex:0 0 50%;max-width:50%}}@media (max-width:1400px){.popup-info-get-free .applicationslist-sidebar a{flex:0 0 19%;max-width:19%}}#root{display: none;}.row-apps{margin-left:0;margin-right:0;height: 100%;}.applicationslist-list{height: 100%;}</style>');
});
$('body').on('click', '[data-scrollto-element]', function(event) {
    var id = $(this).attr('href');
    id = id.replace('#','');
    if(id == 'all'){
      $('[data-collections]').css('display','flex');
    }else{
      $('[data-collections]').css('display','none');
      $('[data-collections *="'+id+'"]').css('display','flex');
    }
    event.preventDefault();
});
var tmr1 = setInterval(function(){
      var src  = $('body').find('.successful-registration .successful-registration-from-app-landing__app-description .successful-registration-from-app-landing__app-icon').attr('src');
      var h4   = $('.successful-registration-from-app-landing__app-description .h4').text();
      var lead = $('.successful-registration-from-app-landing__app-description .lead').text();
      $('body').find('.apps-subtitle .application-item img').attr('src',src);
      $('body').find('.contentin-logo .istat-img img').attr('src',src);
      $('body').find('.apps-subtitle .all-apps-item__name').html(h4);
      $('body').find('.apps-subtitle .application-item img').attr('alt',h4);
      $('body').find('.apps-subtitle .all-apps-item__description').html(lead);
},100);
var tmr = setInterval(function(){
  if($('html').find('.all-apps-item').length > 0){
    clearInterval(tmr);
    $('body').find('.all-apps-item').each(function(index, el) {
      $(el).find('.all-apps-item__description').after('<a href="#" class="download-btn">Free Download</a>');
    });
    $('.applicationslist-content').scroll(function(event) {
      var content_element = $(this).offset().top;
      var activeElement = null;
      $('.applicationslist-collection',this).each(function(index, el) {
        if($(el).offset().top <= content_element){
          activeElement = el;
        }
      });
      if(activeElement != null){
        var activescroll = $('.applicationslist-content').data('activescroll');
        if(activescroll){
          var idtohref = $(activeElement).attr('id');
          $('.applicationslist-sidebar a').removeClass('-active');
          $('[href="#'+idtohref+'"]').addClass('-active');
        }
      }
    });
  }
},100)
}
} 