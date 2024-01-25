var audio = document.getElementById("audio")
var radio_ch =document.getElementById("h_tit") 
var body = document.body
var volume  = document.getElementById("volume")
var speed = document.getElementById("speed")
var play_btn = document.getElementById("play")
var isplayed = false
var count 
var volume_pers = document.getElementById("volume_pers")
var speed_pers = document.getElementById("speed_pers")
var bak_btn = document.getElementById("bac_btn")
var nex_btn = document.getElementById("nex_btn")
var thm_btn1 = document.getElementById("flexRadioDefault1")
var thm_btn2 = document.getElementById("flexRadioDefault2")
var thm_btn3 = document.getElementById("flexRadioDefault3")
var thm_btn4 = document.getElementById("flexRadioDefault4")
var main  = document.getElementById("main")
var live_radio = document.getElementById("live_tit")
var img = document.getElementById("img_tit")
var btn_img1 = document.getElementById("btn_img1")
var btn_img2 = document.getElementById("btn_img2")
var server_src = [
"https://radioshamfm.grtvstream.com:8400/stream",
"https://l3.itworkscdn.net/itwaudio/9030/stream",
"https://funasia.streamguys1.com/live13",
"https://scdn.nrjaudio.fm/adwz1/lb/55175/mp3_128.mp3",
"https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3",
"https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
"https://webradio.tda.dz/Adrar_64K.mp3",
"http://edge.mixlr.com/channel/kijwr"
]
var server_name = [
    "Sham FM",
    "lebanon FM",
    "UAE FM",
    "Nostalgie Liban",
    "french mont carlo",
    "BBC World Service",
    "algeria FM",
    "yamen FM"
    ]
 


play_btn.addEventListener("click",()=>{
    if(isplayed ==false)
{audio.play()
play_btn.src = "pause-circle.svg"
isplayed = true
}
else{
audio.pause()
play_btn.src = "play-fill.svg"
isplayed = false
}
if(count==undefined)
localStorage.setItem("count",0)
})

volume.addEventListener("change",()=>{
    audio.volume = (volume.value)/100
   volume_pers.innerHTML = "volume :" + audio.volume*100
})

speed.addEventListener("change",()=>{
audio.playbackRate = (speed.value)/100
speed_pers.innerHTML = "speed : "+audio.playbackRate


})

bak_btn.addEventListener("click",()=>{
    if(count>0)
    {audio.src = server_src[--count]
        radio_ch.innerHTML = server_name[count]
        if(isplayed==true)
        audio.play()
        localStorage.setItem("count",count)
        }
else {count = 7
    audio.src = server_src[count]
        radio_ch.innerHTML = server_name[count]
        if(isplayed==true)
        audio.play()
        localStorage.setItem("count",count)
    }
})

nex_btn.addEventListener("click",()=>{
    if(count<7)
    {audio.src = server_src[++count]
        radio_ch.innerHTML = server_name[count]
        if(isplayed==true)
        audio.play()
        localStorage.setItem("count",count)
        }
else {count = 0
    audio.src = server_src[count]
        radio_ch.innerHTML = server_name[count]
        if(isplayed==true)
        audio.play()
        localStorage.setItem("count",count)
    }
})
function setcolor(){
    if(thm_btn1.checked)
    {body.style.background = "linear-gradient(135deg , #572bcc,#d83f43,#f3ba4e)"
    main.style.background = "black"
img.style.background = "linear-gradient(135deg , #572bcc,#d83f43,#f3ba4e)"
    live_radio.style.background="linear-gradient(135deg , #572bcc,#d83f43,#f3ba4e)"
    live_radio.style.backgroundClip = "text"
    radio_ch.style.color = "#ffeb3b"
    volume_pers.style.color = "#ffeb3b"
    speed_pers.style.color= "#ffeb3b"
    btn_img1.style.background = "white"
    btn_img2.style.background = "white"
    play_btn.style.background = "white"
    main.style.border = "none"
    localStorage.setItem("thm_color",1)

    }
    if(thm_btn2.checked)
    {body.style.background = "black"
    main.style.background = " linear-gradient(rgb(99, 253, 136) 0%, rgb(51, 197, 142) 50%, rgb(39, 97, 116) 100%)"
img.style.background = "none"
    live_radio.style.background="white"
    live_radio.style.backgroundClip = "text"
    radio_ch.style.color = "white"
    volume_pers.style.color = "white"
    speed_pers.style.color= "white"
    btn_img1.style.background = "linear-gradient(rgb(99, 253, 136) 0%, rgb(51, 197, 142) 50%, rgb(39, 97, 116) 100%)"
    btn_img2.style.background = "linear-gradient(rgb(99, 253, 136) 0%, rgb(51, 197, 142) 50%, rgb(39, 97, 116) 100%)"
    play_btn.style.background = "linear-gradient(rgb(99, 253, 136) 0%, rgb(51, 197, 142) 50%, rgb(39, 97, 116) 100%)"
    localStorage.setItem("thm_color",2)
main.style.border = "none"
    }
    if(thm_btn3.checked)
    {body.style.background = "black"
    main.style.background = "black"
img.style.background = "rgb(28, 255, 232)"
    live_radio.style.background="rgb(28, 255, 232)"
    live_radio.style.backgroundClip = "text"
    radio_ch.style.color = "rgb(28, 255, 232)"
    btn_img1.style.background = "rgb(28, 255, 232)"
    btn_img2.style.background = "rgb(28, 255, 232)"
    play_btn.style.background = "rgb(28, 255, 232)"
    volume_pers.style.color = "rgb(28, 255, 232)"
    speed_pers.style.color= "rgb(28, 255, 232)"
    main.style.border = "2px solid rgb(28, 255, 232)"
    localStorage.setItem("thm_color",3)
    }
    if(thm_btn4.checked)
    {body.style.background = "rgb(26, 26, 26)"
    main.style.background = " rgb(26, 26, 26)"
img.style.background = "rgb(22, 204, 134)"
    live_radio.style.background="rgb(22, 204, 134)"
    live_radio.style.backgroundClip = "text"
    radio_ch.style.color = "rgb(22, 204, 134)"
    volume_pers.style.color = "rgb(22, 204, 134)"
    speed_pers.style.color= "rgb(22, 204, 134)"
    btn_img1.style.background = "rgb(22, 204, 134)"
    btn_img2.style.background = "rgb(22, 204, 134)"
    play_btn.style.background = "rgb(22, 204, 134)"
    localStorage.setItem("thm_color",4)
main.style.border = "2px solid rgb(22, 204, 134)"
    }







}


if(localStorage.getItem("count")!==null)
{audio.src = server_src[parseInt(localStorage.getItem("count"))]
        radio_ch.innerHTML = server_name[parseInt(localStorage.getItem("count"))]
        alert("تم استرجاع القناة الافتراضية")
}
if(localStorage.getItem("thm_color")!==null)
{
if(localStorage.getItem("thm_color")==1)
{thm_btn1.click()
alert("تم استرجاع الثيم الافتراضي")}
if(localStorage.getItem("thm_color")==2)
{thm_btn2.click()
alert("تم استرجاع الثيم الافتراضي")}
if(localStorage.getItem("thm_color")==3)
{thm_btn3.click()
alert("تم استرجاع الثيم الافتراضي")}
if(localStorage.getItem("thm_color")==4)
{thm_btn4.click()
alert("تم استرجاع الثيم الافتراضي")}
}









//https://webradio.tda.dz/Adrar_64K.mp3 راديو الجزائر*****************7
//https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3 مونت كارلو الفرنسية **************5
//https://stream.live.vc.bbcmedia.co.uk/bbc_world_service  BBC World Service************6
//http://edge.mixlr.com/channel/kijwr راديو اليمن*******************8
// https://radioshamfm.grtvstream.com:8400/stream sham fm *******************1
// https://scdn.nrjaudio.fm/adwz1/lb/55175/mp3_128.mp3 Nostalgie Liban***************4
// https://l3.itworkscdn.net/itwaudio/9030/stream  راديو لبنان  *****************2
// https://funasia.streamguys1.com/live13 راديو الامارات**************************3




