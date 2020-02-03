try {
    hj('trigger', 'hj-cro-event-popup');
} 
catch(e) {}
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
  script.src = '//code.jquery.com/jquery.min.js';
  document.getElementsByTagName( "head" )[0].appendChild( script );
}
if (!window.jQuery) {
	initjQuery(function() {
		readyjQueryinit();
	});
}else{
	readyjQueryinit();
}
window.appslist = {"78":"\/1539420346-5bc1b0ba79a09\/install-cleanmymac","79":"\/1539421174-5bc1b3f62829f\/install-gemini","269":"\/1539420408-5bc1b0f8e20ef\/install-wallpaper-wizard","232":"\/1539420297-5bc1b089d7c72\/install-sip","201":"\/1539419412-5bc1ad146db37\/install-simon","70":"\/1539421371-5bc1b4bb51c69\/install-pagico","98":"\/1539420696-5bc1b2181c586\/install-paste","80":"\/1539420958-5bc1b31ee985c\/install-marked","315":"\/1539419636-5bc1adf4b0a52\/install-typeface","136":"\/1539420289-5bc1b081688fd\/install-renamer","194":"\/1539420798-5bc1b27e2a9aa\/install-archiver","254":"\/1539420732-5bc1b23c7edd5\/install-photolemur","176":"\/1539421194-5bc1b40ab6b15\/install-imazing","83":"\/1539419527-5bc1ad87bc8e5\/install-chronicle","64":"\/1539421481-5bc1b529ed759\/install-rapidweaver","209":"\/1539419528-5bc1ad88e1b4a\/install-squash","277":"\/1539421518-5bc1b54eb2b50\/install-cappuccino","222":"\/1539691928-5bc5d598af87e\/install-downie","219":"\/1539421232-5bc1b4304f890\/install-permute","212":"\/1539420467-5bc1b133ea9c4\/install-hazeover","275":"\/1539421410-5bc1b4e2ae6b0\/install-switchem","175":"\/1539419744-5bc1ae604243f\/install-capto","291":"\/1539419530-5bc1ad8a6d511\/install-boom-3d","242":"\/1539420085-5bc1afb56d999\/install-unclutter","206":"\/1539420840-5bc1b2a89e5f1\/install-goodtask","237":"\/1539419638-5bc1adf6f0d68\/install-flume","178":"\/1539419746-5bc1ae6293034\/install-elmedia-player","202":"\/1539419306-5bc1acaac4722\/install-folx","289":"\/1539421150-5bc1b3de5a720\/install-cloudmounter","286":"\/1539421946-5bc1b6faac057\/install-photobulk","177":"\/1539420635-5bc1b1db108e0\/install-xmind","72":"\/1539420520-5bc1b168c50a2\/install-blogo","288":"\/1539421636-5bc1b5c4cff1a\/install-secrets","134":"\/1539420024-5bc1af78d2b6a\/install-focused","316":"\/1539419416-5bc1ad18ec4a8\/install-espresso","192":"\/1539420457-5bc1b129734a2\/install-hype","67":"\/1539420905-5bc1b2e9022e5\/install-ulysses","240":"\/1539421673-5bc1b5e9cd7b2\/install-chatmate-for-whatsapp","230":"\/1539420623-5bc1b1cf1dd32\/install-sqlpro-studio","145":"\/1539420742-5bc1b24612bcc\/install-manuscripts","210":"\/1539419968-5bc1af4015a45\/install-get-backup-pro","95":"\/1539421864-5bc1b6a8cfd61\/install-swift-publisher","235":"\/1539502417-5bc2f1512c871\/install-lacona","189":"\/1539419857-5bc1aed1e27d7\/install-yummy-ftp-pro","271":"\/1539420521-5bc1b169e6a60\/install-yummy-ftp-watcher","223":"\/1539847202-5bc8342254652\/install-netspot","187":"\/1539421121-5bc1b3c13106d\/install-ithoughtsx","130":"\/1539419189-5bc1ac3597015\/install-noizio","324":"\/1539421457-5bc1b511e1936\/install-gluemotion","295":"\/1539421734-5bc1b626b3246\/install-bettertouchtool","75":"\/1539848266-5bc8384aaef99\/install-jump-desktop","231":"\/1539419749-5bc1ae65d886a\/install-studies","250":"\/1539420951-5bc1b317a3a9b\/install-dropshare","155":"\/1539419908-5bc1af0467132\/install-dropzone","74":"\/1539419786-5bc1ae8a24427\/install-wifi-explorer","276":"\/1539420359-5bc1b0c708322\/install-rocket-typist","188":"\/1539419192-5bc1ac38e2a87\/install-pdf-squeezer","218":"\/1539421919-5bc1b6df9c116\/install-screens","122":"\/1539420011-5bc1af6b4783a\/install-coderunner","246":"\/1539420403-5bc1b0f3aabcd\/install-world-clock-pro","224":"\/1539419799-5bc1ae9797b68\/install-home-inventory","146":"\/1539419307-5bc1acab0b3f5\/install-findings","213":"\/1539420740-5bc1b244d9ff8\/install-taskpaper","195":"\/1539419416-5bc1ad18b687e\/install-image2icon","68":"\/1539420249-5bc1b059e57ee\/install-2do","280":"\/1539421626-5bc1b5ba5845d\/install-noteplan","193":"\/1539420851-5bc1b2b31d3ff\/install-remote-mouse","297":"\/1539620283-5bc4bdbb746c9\/install-tableplus","284":"\/1539847993-5bc83739dab86\/install-textsoap-","184":"\/1539420303-5bc1b08f2f5dd\/install-timing","285":"\/1539421722-5bc1b61a45f8b\/install-instacal","234":"\/1539420233-5bc1b049a8ad2\/install-forecast-bar","135":"\/1539421898-5bc1b6cab385b\/install-base","215":"\/1539421077-5bc1b3956c362\/install-moneywiz","306":"\/1539627833-5bc4db3922db1\/install-ubar","300":"\/1539421502-5bc1b53e0cc48\/install-aquarelo-","144":"\/1539421344-5bc1b4a045808\/install-istat-menus","264":"\/1539420598-5bc1b1b62120a\/install-iconjar","186":"\/1539421042-5bc1b372b657e\/install-numi","304":"\/1539878160-5bc8ad10781cf\/install-busycal","160":"\/1539421747-5bc1b63319fbf\/install-prizmo","229":"\/1539419418-5bc1ad1ad519a\/install-iflicks","241":"\/1539774228-5bc7171443faf\/install-merlin-project-express","173":"\/1539419308-5bc1acac40cd5\/install-be-focused","174":"\/1539420821-5bc1b295f0259\/install-cloud-outliner","318":"\/1539582690-5bc42ae2b2b49\/install-gigeconomy","273":"\/1539421530-5bc1b55a37c47\/install-emulsion","197":"\/1539419191-5bc1ac37a5772\/install-gifox","323":"\/1539952616-5bc9cfe824d32\/install-marginnote","82":"\/1539419966-5bc1af3e85018\/install-disk-drill","169":"\/1539946930-5bc9b9b214510\/install-unibox","217":"\/1539419966-5bc1af3ed2644\/install-chronosync-express","196":"\/1539420121-5bc1afd97013c\/install-aeon-timeline","307":"\/1539691488-5bc5d3e059d96\/install-canary-mail","253":"\/1539421262-5bc1b44e2ce7f\/install-forklift","268":"\/1539420707-5bc1b22395512\/install-workspaces","243":"\/1539419196-5bc1ac3c793f0\/install-expressions","308":"\/1539421957-5bc1b7052b6f7\/install-teacode","249":"\/1539419454-5bc1ad3e2dc81\/install-news-explorer","248":"\/1539421075-5bc1b393166e9\/install-instant-translate","298":"\/1539421967-5bc1b70f6c08b\/install-touchretouch","314":"\/1539419895-5bc1aef72c9ea\/install-moonitor-","247":"\/1539420962-5bc1b32233e33\/install-mosaic","294":"\/1539421596-5bc1b59ca6654\/install-spotless","312":"\/1539419636-5bc1adf4a5317\/install-folio","283":"\/1539421864-5bc1b6a88befb\/install-periodic-table-chemistry","245":"\/1539878050-5bc8aca2c4259\/install-betterzip","267":"\/1539421281-5bc1b46104f31\/install-wokabulary","266":"\/1539420141-5bc1afed66b6a\/install-focus","279":"\/1539421863-5bc1b6a7e4ac2\/install-journey","153":"\/1539420076-5bc1afacc482e\/install-bartender","262":"\/1539421781-5bc1b65573f4a\/install-declutter","272":"\/1539420634-5bc1b1dabe510\/install-pdf-search","255":"\/1539420183-5bc1b017c08d3\/install-tayasui-sketches","227":"\/1539419300-5bc1aca4e536a\/install-shimo","257":"\/1539421419-5bc1b4ebe9087\/install-flawless-app","311":"\/1539421865-5bc1b6a97781e\/install-dcommander-","244":"\/1539420076-5bc1afacc73ae\/install-tripmode","270":"\/1539419195-5bc1ac3b45027\/install-lungo","282":"\/1539419524-5bc1ad8483027\/install-macgourmet-deluxe","252":"\/1539419300-5bc1aca490090\/install-waitinglist","238":"\/1539421392-5bc1b4d00210a\/install-n-track-studio","274":"\/1539420184-5bc1b018bccc3\/install-keykey-typing-tutor","94":"\/1539419674-5bc1ae1a3248c\/install-paw","287":"\/1539421308-5bc1b47c9afb9\/install-inboard","256":"\/1539420197-5bc1b0255df98\/install-boxy","296":"\/1539419854-5bc1aece8dc17\/install-im_","299":"\/1539419857-5bc1aed1d1229\/install-camerabag-pro","301":"\/1539421305-5bc1b47950764\/install-endurance"};
function readyjQueryinit(){
	function getbrowserName(){
	  var nVer = navigator.appVersion;
	  var nAgt = navigator.userAgent;
	  var browserName  = navigator.appName;
	  var fullVersion  = ''+parseFloat(navigator.appVersion); 
	  var majorVersion = parseInt(navigator.appVersion,10);
	  var nameOffset,verOffset,ix;
	  if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
	     browserName = "opera";
	     fullVersion = nAgt.substring(verOffset+6);
	     if ((verOffset=nAgt.indexOf("Version"))!=-1) 
	       fullVersion = nAgt.substring(verOffset+8);
	  }
	  else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
	     browserName = "Microsoft Internet Explorer";
	     fullVersion = nAgt.substring(verOffset+5);
	  }
	  else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
	     browserName = "chrome";
	     fullVersion = nAgt.substring(verOffset+7);
	  }
	  else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
	     browserName = "safari";
	     fullVersion = nAgt.substring(verOffset+7);
	     if ((verOffset=nAgt.indexOf("Version"))!=-1) 
	       fullVersion = nAgt.substring(verOffset+8);
	  }
	  else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
	      browserName = "firefox";
	      fullVersion = nAgt.substring(verOffset+8);
	  }
	  else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
	      browserName = nAgt.substring(nameOffset,verOffset);
	      fullVersion = nAgt.substring(verOffset+1);
	      if (browserName.toLowerCase()==browserName.toUpperCase()) {
	         browserName = navigator.appName;
	      }
	  }
	  if ((ix=fullVersion.indexOf(";"))!=-1)
	      fullVersion=fullVersion.substring(0,ix);
	  if ((ix=fullVersion.indexOf(" "))!=-1)
	      fullVersion=fullVersion.substring(0,ix);

	  majorVersion = parseInt(''+fullVersion,10);
	  if (isNaN(majorVersion)) {
	      fullVersion  = ''+parseFloat(navigator.appVersion); 
	      majorVersion = parseInt(navigator.appVersion,10);
	  }
	  return browserName;
	}
	jQuery(function($) {
		$('body').find('#overlay').css('display','none');
		var imgurl = "https://my.setapp.com/static/media/icon-default.73adbab6.svg";
		var brname = getbrowserName();
	        if(brname === "safari"){
	        	imgurl = "https://my.setapp.com/static/media/icon-download-safari.bf7afc85.svg";
	        }
        $('body').append('<div class="auto-download-section auto-download-section-chrome"><div class="balloon balloon-bottom balloon-bottom-left balloon-inverse balloon-no-border balloon-bottom-enter-done"><div class="balloon-close-icon"><button class="close popup__close-icon" type="button" aria-label="Close"><span>×</span></button></div><div class="auto-download-content"><img src="'+imgurl+'" class="auto-download-icon auto-download-icon-chrome" alt=""><p><span>Your download is right here.<br>Go ahead and launch it.</span></p></div></div></div>');
        var app_id = window._appId;
	        $('.auto-download-section').css('display','none');
	        var btn = $('#bar [data-modal-trigger]').clone();
	        btn.removeAttr('data-modal-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.insertAfter('#bar [data-modal-trigger]');
	        $('#bar [data-modal-trigger]').css('opacity', '0');
	        $('#bar [data-modal-trigger]').css('width', '0');
	        $('#bar [data-modal-trigger]').css('height', '0');
	        $('#bar [data-modal-trigger]').css('padding', '0');
	        $('#bar [data-modal-trigger]').css('transition', 'none');
	        $('#bar [data-modal-trigger]').css('overflow', 'hidden');
	        btn.addClass('clickdownloadtrigger');
	        btn.off('click');
        $('[data-bar-trigger]').each(function(index, el) {
	        var btn = $(el).clone();
	        btn.removeAttr('data-modal-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.removeAttr('data-bar-trigger');
	        btn.insertAfter(el);
	        $(el).css('opacity', '0');
	        $(el).css('width', '0');
	        $(el).css('height', '0');
	        $(el).css('padding', '0');
	        $(el).css('transition', 'none');
	        $(el).css('overflow', 'hidden');
	        btn.addClass('clickdownloadtrigger');
	        btn.off('click');
        });
        $('body').on('click','.close.popup__close-icon',function(){
        	$('.auto-download-section').css('display','none');
        });
        $('body').on('click','.clickdownloadtrigger , .bar .button.-small.-cta',function(){
        	var _gaexp = getCookie('_gaexp');
			if(_gaexp !== undefined){
				var clientID = ga.getAll()[0].get('clientId');
				var expID    = getExperimentId(_gaexp);
				var expvarID = getVariationId(_gaexp);
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'gtm-cro-event',
					'gtm-cro-event-category': 'Installer',
					'gtm-cro-event-action': 'Download Start'
				});
				var url = "https://store.setapp.com/app/"+window._appId;
				var app = window.appslist[window._appId];
				location.href = url+"/installers"+app+".zip?installSetapp=com.setapp.InstallSetapp&unregistered_user=1&xid="+expID+"&xvar="+expvarID+"&cid="+clientID+"&downloadSource=app-reg-experiment&eventCategory=Installer&eventAction=DownloadStart";
			}else{
        		// location.href = "https://store.setapp.com/app"+window.appslist[window._appId]+".zip?unregistered_user=1downloadSource={in-app-reg-experiment}?downloadSource={in-app-reg-experiment}";
        	}
        	$('.auto-download-section').attr('style','');
        	return false;
        });
        $('.separator,.cta.-social').css('display','none');
        $('.cta .hint.hint_bold').css('display','none');
        $('body').append('<style>.auto-download-section.auto-download-section-chrome{width:238px;position:fixed;z-index:9999999999999}.balloon.balloon-bottom.balloon-bottom-left.balloon-inverse.balloon-no-border.balloon-bottom-enter-done{background-color:#fff;color:#333;box-shadow:0 5px 20px 0 hsla(210,3%,85%,.8);padding:20px;position:relative;border:2px solid #fff;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857}button.close.popup__close-icon span{color:#939399;font-weight:300;font-size:19px;line-height:1;text-shadow:0 1px 0 #fff;opacity:.4}button.close.popup__close-icon{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.auto-download-content{margin:5px 0 -7px;text-align:center}img.auto-download-icon.auto-download-icon-chrome{height:67px}</style>');
	        var brname = getbrowserName();
	        if(brname === "safari"){
	        	$('body').append('<style>.balloon.balloon-bottom.balloon-bottom-left.balloon-inverse.balloon-no-border.balloon-bottom-enter-done:before{content:"";position:absolute;display:block;width:15px;height:15px;background-color:#002572;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff;border:2px solid #fff;top: -9px;right: 15px}.balloon .balloon-close-icon{position:absolute;left:15px;top:10px}.auto-download-section.auto-download-section-chrome{top: 10px;right: 30px;}</style>');
	        }else{
	        	$('body').append('<style>.balloon.balloon-bottom.balloon-bottom-left.balloon-inverse.balloon-no-border.balloon-bottom-enter-done:before{content:"";position:absolute;display:block;width:15px;height:15px;background-color:#002572;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff;border:2px solid #fff;bottom:-9px}.balloon .balloon-close-icon{position:absolute;right:15px;top:10px}.auto-download-section.auto-download-section-chrome{bottom:20px;left:20px;}</style>');
	        }
        function getExperimentId(_gaexp) {
			var cookie = _gaexp;
			if (cookie == undefined) {
				return false;
			} else {
				var fields = cookie.split('.');
				return fields[2];
			}
		}
		function getVariationId(_gaexp) {
			var cookie = _gaexp;
			if (cookie == undefined) {
				return false;
			} else {
				var fields = cookie.split('.');
				return fields[4];
			}
		}
		function getCookie(name) {
		  var matches = document.cookie.match(new RegExp(
		    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		  ));
		  return matches ? decodeURIComponent(matches[1]) : undefined;
		}
	});
}