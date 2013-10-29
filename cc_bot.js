/*
 * Cookie Clicker Bot
 * Eric Versteeg
 * 10/28/13
 */

var bigCookieClicker;
var goldenCookieClicker;

var ccBot = document.createElement('script');
ccBot.src = "//code.jquery.com/jquery-1.10.2.min.js";
document.getElementsByTagName('head')[0].appendChild(ccBot);

var GUIsetup = setInterval(initGUI, 1000);

function initGUI() {
	$("#game").append('<div id="CCBotContainer" style="background-color:#333; width:100px; height:100px; position:absolute; bottom:100px; left:0; z-index:200000000">' +

			  '</div>'
	);
	
	$("#CCBotContainer").append('<button id="CCBotStartStop" style="height:80%; width:50px; margin:10px;">Start</button>');
	
	$("#CCBotStartStop").bind('click', function() {
		if($(this).html() === "Start") {
			startCCBot();
			$(this).html("Stop");
		}
		else {
			stopCCBot();
			$(this).html("Start");
		}
	});
	
	clearInterval(GUIsetup);
	
	$("#CCBotContainer").append('<div id="CCBotTitleTab" sytle="position:absolute; right:0; top:0; bottom:0; width:30px">');
	$("#CCBotTitleTab").append('<p style="-webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); margin-top:-104px; margin-right:-63px; font-family:Helvetica; font-size:20pt;">CCBot</p>');
}

function startCCBot() {
	bigCookieClicker = setInterval(clickDaCookie, 1)
	goldenCookieClicker = setInterval(clickDaGoldenCookieIfExists, 1000)
}

function stopCCBot() {
	clearInterval(bigCookieClicker)
	clearInterval(goldenCookieClicker)
}

function clickDaCookie () {
	$("#bigCookie").click();
}

function clickDaGoldenCookieIfExists() {
	$("#goldenCookie").click();
}

//var ccBot = document.createElement('script');
//ccBot.src = "https://raw.github.com/erversteeg/CookieClickerBot/master/cc_bot.js";
//document.getElementsByTagName('head')[0].appendChild(ccBot);