/**
 * Contains variables and functions used to retrieve images, GIFs, and music
 * for the GIF Dance Party
 */
gdpMedia =  {
    /* GIF Dance Party song titles and urls */
    gdpSongMap:{
        'no music': 'nomusic',
        'bazz': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/bazz.ogg',
        'breadfish': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/breadfish.mp3',
        'bubblebutt': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/bubblebutt.ogg',
        'fatboy': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/fatboy.ogg',
        'grounded': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/grounded.ogg',
        'halffull': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/halffull.ogg',
        'hotline': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/hotlineloop.wav',
        'nahnahnah': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/nahnahnah.ogg',
        'sandstorm': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/sandstorm.wav',
        'shake it off': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/Taylor_shake_it_off.wav',
        'singalong': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/singalong.ogg',
        'trololo': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/trololo.ogg',
        'twist': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/twist.ogg',
        'walkmen': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/walkmen.ogg',
        'wegotyou': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/wegotyou.ogg',
        'whats going on': 'http://jlyneu.github.io/GIF-Dance-Party-Extension/heman.wav'
    },
    /* Mapping from dancer names to Imgur thumbnail and Giphy dancer ids */
    mediaIds: {
        '8bitcarlton': {
            imgur: 'ifuoPqn',
            giphy: '3oEduOy5DYLEzDoxb2'
        },
        apple: {
            imgur: 'wbv3RCd',
            giphy: 'l41lQrLqxsH1EIuIw'
        },
        arnold: {
            imgur: 'Sh6WPJs',
            giphy: '3oEduW2sRvdCJjomZi'
        },
        babe: {
            imgur: 'hDWrKI7',
            giphy: 'l41lUxdQ1uRoQfC5G'
        },
        banana: {
            imgur: 'Li3pOWH',
            giphy: '3oEduNh73pM45xDSNi'
        },
        bear: {
            imgur: '7KW1zWk',
            giphy: '3oEduP15LEqQfXJCNy'
        },
        yoshi: {
            imgur: 'ENUYNWU',
            giphy: '9OIXjveDvpGRW'
        },
        blob: {
            imgur: 'P7meKeB',
            giphy: 'l41lOD9cTj6YbmcX6'
        },
        bb: {
            imgur: 'zhtTJNv',
            giphy: 'xTk9ZJwB1Mg0Jq1KhO'
        },
        bmo: {
            imgur: 'Q6Jyks5',
            giphy: '3oEduYm2dxZpkCCkOA'
        },
        bonebreak: {
            imgur: 'otdi7m9',
            giphy: '3oEduIiEL5hcetXqAE'
        },
        brian: {
            imgur: 'mcVtWQT',
            giphy: 'l41lFG8HaIVcPt9QY'
        },
        bunnyspank: {
            imgur: 'G9Bs0N9',
            giphy: 'l41lNvJ5gkGf0y4Xm'
        },
        cact: {
            imgur: 'fn0xLOv',
            giphy: 'l41lYdZg4lDWCYKjK'
        },
        pooh: {
            imgur: '1DXTA1I',
            giphy: 'wjIDrGKbvuGxW'
        },
        carlton: {
            imgur: 'uF179oM',
            giphy: '3oEduT6H7fftjTic2k'
        },
        charlie: {
            imgur: 'aXXDfwI',
            giphy: '3oEduQkZZDBupCoXU4'
        },
        cowboy: {
            imgur: 'sCxQ7om',
            giphy: '3oEduYRB2uyvHWEdJC'
        },
        discoball: {
            imgur: 'FqqZgIZ',
            giphy: 'l41lGAas7QuzXT9UQ'
        },
        doggy: {
            imgur: 'Q6r1gYp',
            giphy: 'l41lIG49uUKFm1sR2'
        },
        nyan: {
            imgur: 'nxCxp6u',
            giphy: 'WC0DCFkLq4faU'
        },
        drakeHotline: {
            imgur: 'wTATJ1T',
            giphy: '3oEduGBEzAuZHR9jwc'
        },
        drakePush: {
            imgur: '8zy3MQA',
            giphy: '3oEduLLkRxHa9LrwTS'
        },
        drakeWrist: {
            imgur: 'jZUSVbA',
            giphy: 'xTiTnLOTgCWEu3akr6'
        },
        fabio: {
            imgur: '320x7kR',
            giphy: '3oEdvcgt5kA260mpva'
        },
        fatspidey: {
            imgur: '5GZYEmt',
            giphy: '3oEduV5zJRtZA20V32'
        },
        kenny: {
            imgur: 'LKzQ7KE',
            giphy: '3o8doQrgKZa6Ce7jOM'
        },
        foreveralone: {
            imgur: 'jgOvt9T',
            giphy: 'l41lWaQCC5Y65ErUQ'
        },
        fred: {
            imgur: 'FSvV7is',
            giphy: 'l41lPqa3dpN6ete3m'
        },
        gene: {
            imgur: 'nfO1s5a',
            giphy: '3oEdv6b7ul6xu0qkx2'
        },
        ghosty: {
            imgur: 'VcNCtEa',
            giphy: 'l41lUNDlC1ka19oU8'
        },
        greenlady: {
            imgur: 't8qX9Q2',
            giphy: 'l41lFr6nvWK6foKXe'
        },
        greenlady2: {
            imgur: '0v0rcxb',
            giphy: '3oEduPQBm9ugmXOupq'
        },
        victorydance: {
            imgur: 'rbOosYj',
            giphy: 'xTka04CfeXMX74iE3m'
        },
        heman: {
            imgur: 'LxPW2rQ',
            giphy: '3o85xEQknNotn5dXfG'
        },
        hipdog: {
            imgur: 'eMs7spK',
            giphy: '3oEdvaWNO2CrIE4fh6'
        },
        hotdogs: {
            imgur: 'g9wUmtR',
            giphy: '3oEduOwP0y4eYwQBNK'
        },
        hula: {
            imgur: 'LoWDE67',
            giphy: '3oEdv8tYhAP5obLpUk'
        },
        humpery: {
            imgur: 'PXplXOH',
            giphy: 'l41lFnwluQ94HmMuY'
        },
        llama: {
            imgur: 'Nj46dlb',
            giphy: 'mGWj9gZG7eFCE'
        },
        jason: {
            imgur: 'YTLTpTk',
            giphy: 'l41lZ65JSCJPni7FS'
        },
        kirby: {
            imgur: 'fOit8Na',
            giphy: 'l41lVDy4QPJJApSPS'
        },
        kitty: {
            imgur: 'IOO2VgN',
            giphy: '3oEduKQuAlKRfgRAvS'
        },
        lilguy: {
            imgur: 'wETEb4l',
            giphy: 'l41lI6dIfDLLMsNjy'
        },
        lisa: {
            imgur: 'hf2s0Ej',
            giphy: 'NfeV16w5ZvaaQ'
        },
        maranda: {
            imgur: 'zZrLAyH',
            giphy: '26BkNCYFWc3YrUSFa'
        },
        mj: {
            imgur: 'U0TcBG6',
            giphy: '3oEdv8uVwchZIxkJDG'
        },
        nerd: {
            imgur: 'S5Wo2T1',
            giphy: 'l41lTnsFgDcDFtiPm'
        },
        obama: {
            imgur: 'lKpfbv1',
            giphy: 'l41lSXRKx8csZ1kic'
        },
        orangeguy: {
            imgur: 'rG0HL2S',
            giphy: '3oEduRSQNa8CTeA3iU'
        },
        pa: {
            imgur: 'wzTfl7Z',
            giphy: 'l41lXHizBwZJWoYLK'
        },
        patrick: {
            imgur: 'CgLMqm8',
            giphy: '3oEdv6ocnBsOlAUQfK'
        },
        pedopickle: {
            imgur: 'jRoMC6Y',
            giphy: 'l41m3WCro5TSN7Bp6'
        },
        pikachu: {
            imgur: '3nnb34A',
            giphy: 'zEBHffYMPaIwM'
        },
        pixelly: {
            imgur: 'Qw2O47x',
            giphy: '3oEduPmVVIex3w0Oys'
        },
        ponyshuffle: {
            imgur: '6frE5RS',
            giphy: '3oEduTi5ktbhXp3Rm0'
        },
        possum: {
            imgur: 'lFPmQrS',
            giphy: '3oEduKLDMtc7jleGgU'
        },
        pumpgirl: {
            imgur: 'GD8TggR',
            giphy: 'l41m4R1fgL5jZX1Qc'
        },
        ravecat: {
            imgur: 'KWBLGKg',
            giphy: '3oEduWBjP4utBdgGL6'
        },
        robothump: {
            imgur: 'VZNMx5i',
            giphy: '3oEdv53199cJ6nUhDq'
        },
        roger: {
            imgur: 'JSMQUnh',
            giphy: '3oEdv21WszrucZzBSw'
        },
        runningworm: {
            imgur: '4cDqUCe',
            giphy: '3oEdv2xy5QjqBiSxzO'
        },
        saxguy: {
            imgur: 'E3sRBkX',
            giphy: 'l41lWg4naO0TljUSQ'
        },
        scorpion: {
            imgur: 'dzScRdd',
            giphy: '3oEduNF2afOEDQ4kCY'
        },
        shawty: {
            imgur: 'stZZLVd',
            giphy: '3oEdv0F6sqE5XCWkCc'
        },
        smooch: {
            imgur: 'BeH7q4x',
            giphy: '3oEduTxikdl6659Tws'
        },
        snoop: {
            imgur: 'u82kPtm',
            giphy: 'O0Xo8Tpk5QxTW'
        },
        speakerhead: {
            imgur: '7Hy7lrN',
            giphy: 'l41lTFERkZe2H9FOo'
        },
        leftshark: {
            imgur: 'glPurdO',
            giphy: '3o85xBH1NjrRfa8kPm'
        },
        spongeybob: {
            imgur: '6AXEklV',
            giphy: '3oEduGmM5MJLjciFSU'
        },
        squidword: {
            imgur: 'v9pzZCM',
            giphy: '26BkMz3mtQqMl6Dw4'
        },
        shakeitoff: {
            imgur: '8xbnBRN',
            giphy: '26tP3JkdNpeU1k8Tu'
        },
        tej: {
            imgur: 'Q49aPYo',
            giphy: '3oEduF6VoHOTKkrplu'
        },
        thehop: {
            imgur: '5fmPHBc',
            giphy: '3oEduP8lE334O5KNJS'
        },
        thewizard: {
            imgur: 'FExyzq0',
            giphy: '3oEduP15u1e3duOSE8'
        },
        theworm: {
            imgur: 'Z62jSAr',
            giphy: 'l41m6R0OgDvej2Vag'
        },
        tim: {
            imgur: 'hGXXXDl',
            giphy: 'l41lT8zKKiIRjnM1G'
        },
        twerk: {
            imgur: 'EjL0GLT',
            giphy: 'l41lQZJYzSqGDWFz2'
        },
        whiteguy: {
            imgur: '6jYdEPO',
            giphy: '3oEduKmO22VEzbmpLq'
        },
        yeti: {
            imgur: '4LDzQq6',
            giphy: '3oEduYLrzljc1cGY5a'
        },
        bernie: {
            imgur: 'ByPp5KA',
            giphy: '3o7qE4Jq3b72Y9j3uU',
        },
        trump: {
            imgur: 'Oi2bfAI',
            giphy: '3oEjI5HGIL0YdSlhrq',
        },
        putin: {
            imgur: 'Nnfp7C3',
            giphy: '3oEjI7U6nzMnuzCs6s',
        },
        peter: {
            imgur: 'SOYiQcm',
            giphy: 'wyct0orcyRcS4',
        },
        prep: {
            imgur: 'foCgyNn',
            giphy: 'o7H9mn7R9SIIE'
        },
        shinchan: {
            imgur: 'Xk0ZolA',
            giphy: 'nXJpLaJsYJzCE',
        },
        stan: {
            imgur: 'CKrlCmW',
            giphy: 'l41Ymq0Y7zwgXyrqE',
        },
        stitch: {
            imgur: 'NIciOMQ',
            giphy: 'yJrdCUHGHXNAI',
        },
        unicorn: {
            imgur: 'UXatwgq',
            giphy: '3o8dpbSeoqQZNvjANq',
        },
        wendy: {
            imgur: 'T1ZfnWb',
            giphy: 'opYVtq9cLliE0',
        }
    },
    /* Retrieve the Imgur url for the given dancer's thumbnail image */
    getThumbnailUrl: function(dancerName) {
        return "https://imgur.com/" + gdpMedia.mediaIds[dancerName]["imgur"] + ".png";
    },
    /* Retrieve the Giphy url for the given dancer's GIF */
    getGifUrl: function(dancerName) {
        return "https://media.giphy.com/media/" + gdpMedia.mediaIds[dancerName]["giphy"] + "/giphy.gif";
    },
    /* Create proper giphy url */
    getGiphyUrl: function(id) {
        return "https://media.giphy.com/media/" + id + "/giphy.gif";
    },
    /* Retrieve the Giphy id from a url*/
    getGiphyId: function(url) {
        a = url.split("-");
        return a[a.length-1];
    },
    /* Send a message to the background script to play the song with the
       given name */
    selectSong: function(name, url, isCustom) {
        chrome.runtime.sendMessage({
            type: "songUrl",
            songUrl: (!isCustom ? gdpMedia.gdpSongMap[name] : url)
        });
    },
    /* Send a message to the background script to play the previously played
       song */
    playPreviousSong: function() {
        chrome.runtime.sendMessage({
            type: "playPreviousSong"
        });
    },
    /* Send a message to the background script to stop playing audio */
    stopAudio: function() {
        chrome.runtime.sendMessage({
            type: "stopAudio"
        });
    },
    /* When leaving the current page, send a message to the background script
       to stop playing audio */
    unloadAudio: function() {
        $(window).unload(function() {
            gdpMedia.stopAudio();
        });
    }
}
