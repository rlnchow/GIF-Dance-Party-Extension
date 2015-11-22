// name of the gdp song to play by default
var defaultSongName = 'singalong';
// initialize the javascript Audio object
var gdpAudio = new Audio();
gdpAudio.src = getAudioUrl(defaultSongName);

// get the url for the audio from the gdp website
function getAudioUrl(songName) {
    return 'http://gifdanceparty.giphy.com/music/' + songName + '.ogg';
}

// send a message to the currently opened tab
function messageCurrentTab(message) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}

// listen for clicks to the icon
chrome.browserAction.onClicked.addListener(function (){
    messageCurrentTab({type: "isPartyOn"});
});

// listen for events from the gdp content script
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // incoming message about party status
        if (request.type === "partyStatus") {
            if (request.isPartyOn) {
                messageCurrentTab({type: "stopParty"});
            }
            else {
                messageCurrentTab({type: "startParty"});
            }
        }
        // incoming message to play a particular song
        else if (request.type === "songName") {
            if (request.songName === "hotlinebling") {
                gdpAudio.src = "http://picosong.com/media/songs/45c6683c361746239d1abb4adccd0f23.mp3";
            }
            else if (request.isCustom) {
                gdpAudio.src = request.songName;
            } else {
                gdpAudio.src = getAudioUrl(request.songName);
            }
            gdpAudio.loop = true;
            gdpAudio.play();
            // incoming message to stop audio, aka STOP THE PARTY
        } else if (request.type === "stopAudio") {
            gdpAudio.pause();
            gdpAudio.currentTime = 0;
            gdpAudio.src = getAudioUrl(defaultSongName);
        }
    }
)
