"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Spinner from "@/components/me/spinner";
import {getData} from "@/server_action/test";
import {formatTime, formatBytes} from "@/utils/functions";
import { BsEye, BsClockHistory } from "react-icons/bs";
import { BiLike, BiRename, BiMusic, BiVideoRecording, BiDownload, BiVolumeMute, BiVolumeFull } from "react-icons/bi";
export default function DownloadYoutube({ children }) {
  let [showFormDownload, setShowFormDownload] = useState(3);
  let [information, setInformation] = useState({
        "title": "TẬP 01 - 60 : TÚ TÀI QUẬT KHỞI - HÀ NHÂN XUYÊN KHÔNG QUYẾT THI ĐỖ TÚ TÀI #hanhan",
        "videoUrl": "https://www.youtube.com/watch?v=aBO3vSr_Phk",
        "thumbnail": "https://i.ytimg.com/vi/aBO3vSr_Phk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5xOpHLA2HA58vw10sQ4lkfTJYNA",
        "description": "Trần Tú Tài cả đời dùi mài kinh sử nhưng không đỗ đạt, trước khi qua đời dặn dò con gái phải cho em trai đi học để thi đỗ công danh. Trần Chiêu Đệ, vì di nguyện của cha, đã đưa ra điều kiện kén chồng đầy bất ngờ. Một gã đàn ông thô kệch xuất hiện, chấp nhận gánh vác trách nhiệm, đưa hai tỷ đệ về nhà.\n\nHà Nhân, em trai Chiêu Đệ, bất ngờ gặp nạn, rơi xuống nước và hồi phục ký ức tiền kiếp. Hóa ra, chàng đã xuyên không đến một triều đại xa lạ, mang theo cả những ký ức về cuộc đời trước.\n\nLiệu Hà Nhân sẽ đối mặt với cuộc sống mới này như thế nào? Con đường khoa cử của chàng sẽ ra sao? Mối quan hệ giữa chàng và người tỷ tỷ tần tảo sẽ phát triển như thế nào?\n\n#tútàiquậtkhởi #hànhânxuyênkhông #phimcổtrang #xuyênkhông #côngdanh #tỷđệ #phimhay #reviewphim #tómtắtphim",
        "lengthSeconds": "25114",
        "authorName": "I Am Trash I",
        "authorUrl": "http://www.youtube.com/@IAmTrashI",
        "authorThumbnail": "https://yt3.ggpht.com/IQA6mTKaNqKuPKd7GgjVRbepwSC2uzTUUsG5iEG2R_VnFOo13CU35dQkzbMzXpvde5cmZIZ5=s176-c-k-c0x00ffffff-no-rj",
        "isFamilySafe": true,
        "viewCount": "23538",
        "likeCount": "444"
    });
    let [audio, setAudio] = useState({
            "itag": 599,
            "url": "https://rr4---sn-42u-i5olz.googlevideo.com/videoplayback?expire=1755375521&ei=QJOgaNDaOeCU1d8P1LnkqQo&ip=2405%3A4802%3A694%3A2cf0%3A9db9%3A5d4a%3Aff77%3A96f1&id=o-AHir1g6ZHxaIfEoa8EtozaDezft1PAGMlaG_sBUtSZLJ&itag=599&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1755353920%2C&mh=cG&mm=31%2C26&mn=sn-42u-i5olz%2Csn-un57sn7y&ms=au%2Conr&mv=m&mvi=4&pl=44&rms=au%2Cau&initcwndbps=2653750&bui=AY1jyLORhDKiJD_2yENu2ZOMwDfQj0L5McQHnmayffoDrp_nw9iOVVQhpT_WBy5T4hshWrSXs_Mm69qM&spc=l3OVKbuPhe-WZp-G4eyBSdxvCM6xFfFGmYI8hMnnyb8r_mpHibeX0s6nvO3Cs0sZufLZRKHJ&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fmp4&rqh=1&gir=yes&clen=96630611&dur=25113.308&lmt=1754249448617578&mt=1755353355&fvip=5&keepalive=yes&fexp=51548755%2C51565115%2C51565681&c=ANDROID&txp=4432534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgSXwe62lyA9Mm5CuHJGikWVBDDvk_inDkp6uh2m2m6vACICEmp-bhFLR6gdId5rCwzQdKXZM6oiFnpuFlxcVhQ8ox&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAJuaWaMhupMm9VvOwfzKxyQlXIO8743xMmIAe3zdtDBaAiBt97bGisMilsEdLMweJxetkFG4GUGEZZAftJ-CDsxhdA%3D%3D",
            "mimeType": "audio/mp4; codecs=\"mp4a.40.5\"",
            "bitrate": 56085,
            "initRange": {
                "start": "0",
                "end": "731"
            },
            "indexRange": {
                "start": "732",
                "end": "30955"
            },
            "lastModified": "1754249448617578",
            "contentLength": "96630611",
            "quality": "tiny",
            "xtags": "CggKA2RyYxIBMQ",
            "projectionType": "RECTANGULAR",
            "averageBitrate": 30782,
            "audioQuality": "AUDIO_QUALITY_ULTRALOW",
            "approxDurationMs": "25113308",
            "audioSampleRate": "22050",
            "audioChannels": 2,
            "loudnessDb": -3.1100006,
            "isDrc": true,
            "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN",
            "hasVideo": false,
            "hasAudio": false,
            "container": "mp4",
            "codecs": "mp4a.40.5",
            "videoCodec": null,
            "audioCodec": null,
            "isLive": false,
            "isHLS": false,
            "isDashMPD": false
    })
     let [video, setVideo] = useState({
        "360p": {
            "mimeType": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
            "qualityLabel": "360p",
            "bitrate": 522976,
            "audioBitrate": 96,
            "itag": 18,
            "url": "https://rr4---sn-42u-i5olz.googlevideo.com/videoplayback?expire=1755375521&ei=QZOgaJugEb-W1d8PxpIC&ip=2405%3A4802%3A694%3A2cf0%3A9db9%3A5d4a%3Aff77%3A96f1&id=o-AMtREHJeP7YbLF7upXs2oUp5lOE0XDBz-dd2-qFCrPqV&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1755353921%2C&mh=cG&mm=31%2C26&mn=sn-42u-i5olz%2Csn-un57sn7y&ms=au%2Conr&mv=m&mvi=4&pl=44&rms=au%2Cau&initcwndbps=2653750&bui=AY1jyLPTCflOfu6leFIhA194h2uIFzrGXncsi_pT7IiYmRZeqWk838vYprQqimYSOzKiF4Mjk9U_fuX_&spc=l3OVKTAcYW_O1oOkclKSH2XHt10OLUrNNLiV8Izzh9isb0ZkhW5ZOP_4nR_l8b1SR6tayg&vprv=1&svpuc=1&mime=video%2Fmp4&ns=QJrVM0AeFvKBT0JRQwljQ1cQ&rqh=1&gir=yes&clen=1641700448&ratebypass=yes&dur=25113.216&lmt=1754253090443151&mt=1755353355&fvip=5&fexp=51548755%2C51565116%2C51565682&c=WEB_EMBEDDED_PLAYER&sefc=1&txp=4438534&n=iwajjmMbOmeCpQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgMSZHBZfRpbbEuoeAWFviDoWuCmDsKukxY0RsRep1VX4CIQCihD8ZRuEj-aDB2WR0n_jTXQtSgI0KwDSgfT-J1Fwnlg%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRAIgX_D9g777QnQ1tPO9nWWiSSbu70TOJBPN5fd6_Uc01ssCIAVQypRknXhPlBYbuToPeoeoSofKi6PuTGgmrJih3AMA",
            "width": 640,
            "height": 360,
            "lastModified": "1754253090443151",
            "contentLength": "1641700448",
            "quality": "medium",
            "fps": 24,
            "projectionType": "RECTANGULAR",
            "averageBitrate": 522975,
            "audioQuality": "AUDIO_QUALITY_LOW",
            "approxDurationMs": "25113216",
            "audioSampleRate": "44100",
            "audioChannels": 2,
            "qualityOrdinal": "QUALITY_ORDINAL_360P",
            "hasVideo": true,
            "hasAudio": true,
            "container": "mp4",
            "codecs": "avc1.42001E, mp4a.40.2",
            "videoCodec": "avc1.42001E",
            "audioCodec": "mp4a.40.2",
            "isLive": false,
            "isHLS": false,
            "isDashMPD": false
        },
        "1080p": {
            "mimeType": "video/mp4; codecs=\"avc1.640028\"",
            "qualityLabel": "1080p",
            "bitrate": 3823294,
            "audioBitrate": null,
            "itag": 137,
            "url": "https://rr4---sn-42u-i5olz.googlevideo.com/videoplayback?expire=1755375521&ei=QZOgaJugEb-W1d8PxpIC&ip=2405%3A4802%3A694%3A2cf0%3A9db9%3A5d4a%3Aff77%3A96f1&id=o-AMtREHJeP7YbLF7upXs2oUp5lOE0XDBz-dd2-qFCrPqV&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1755353921%2C&mh=cG&mm=31%2C26&mn=sn-42u-i5olz%2Csn-un57sn7y&ms=au%2Conr&mv=m&mvi=4&pl=44&rms=au%2Cau&initcwndbps=2653750&bui=AY1jyLN44ldmrCCA8EfXw5IVKWIfNZBc7NTY0nbUYUHzMObq5kDbCyOPZOe1VP1ZlAhpz5WgeA2KD61n&spc=l3OVKTAfYW_O1oOkclKSH2XHt10OLUrNNLiV8Izzh9isb0ZkhW5ZOP_4nR_lwbi6RzM&vprv=1&svpuc=1&mime=video%2Fmp4&ns=EAvxMcOS8FsbuNXd4Mx991oQ&rqh=1&gir=yes&clen=4861665423&dur=25113.166&lmt=1754254138485776&mt=1755353355&fvip=5&keepalive=yes&fexp=51548755%2C51565116%2C51565682&c=WEB_EMBEDDED_PLAYER&sefc=1&txp=4432534&n=2qe4tSbSqY3flw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAPRGL1ZGCoZROQaA6WEBrcruotq-M0Ti3g3RrsMPLxtwAiAaeECrex4OthrYrWf4dvUj3Vf1OlBU9W3zNlYCnIvwow%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRAIgX_D9g777QnQ1tPO9nWWiSSbu70TOJBPN5fd6_Uc01ssCIAVQypRknXhPlBYbuToPeoeoSofKi6PuTGgmrJih3AMA",
            "width": 1920,
            "height": 1080,
            "initRange": {
                "start": "0",
                "end": "741"
            },
            "indexRange": {
                "start": "742",
                "end": "53453"
            },
            "lastModified": "1754254138485776",
            "contentLength": "4861665423",
            "quality": "hd1080",
            "fps": 24,
            "projectionType": "RECTANGULAR",
            "averageBitrate": 1548722,
            "approxDurationMs": "25113166",
            "qualityOrdinal": "QUALITY_ORDINAL_1080P",
            "hasVideo": true,
            "hasAudio": false,
            "container": "mp4",
            "codecs": "avc1.640028",
            "videoCodec": "avc1.640028",
            "audioCodec": null,
            "isLive": false,
            "isHLS": false,
            "isDashMPD": false
        },
        "720p": {
            "itag": 398,
            "url": "https://rr4---sn-42u-i5olz.googlevideo.com/videoplayback?expire=1755375521&ei=QZOgaJugEb-W1d8PxpIC&ip=2405%3A4802%3A694%3A2cf0%3A9db9%3A5d4a%3Aff77%3A96f1&id=o-AMtREHJeP7YbLF7upXs2oUp5lOE0XDBz-dd2-qFCrPqV&itag=398&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1755353921%2C&mh=cG&mm=31%2C26&mn=sn-42u-i5olz%2Csn-un57sn7y&ms=au%2Conr&mv=m&mvi=4&pl=44&rms=au%2Cau&initcwndbps=2653750&bui=AY1jyLN44ldmrCCA8EfXw5IVKWIfNZBc7NTY0nbUYUHzMObq5kDbCyOPZOe1VP1ZlAhpz5WgeA2KD61n&spc=l3OVKTAfYW_O1oOkclKSH2XHt10OLUrNNLiV8Izzh9isb0ZkhW5ZOP_4nR_lwbi6RzM&vprv=1&svpuc=1&mime=video%2Fmp4&ns=EAvxMcOS8FsbuNXd4Mx991oQ&rqh=1&gir=yes&clen=1752762939&dur=25113.166&lmt=1754255239327032&mt=1755353355&fvip=5&keepalive=yes&fexp=51548755%2C51565116%2C51565682&c=WEB_EMBEDDED_PLAYER&sefc=1&txp=443G534&n=2qe4tSbSqY3flw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAI8LAG-E3tJqkHKj1M44kwiuDT66WGhgU8YHgaARtMqhAiAPy7KFXHyo3TI1KhAK2u1HA_SvFuS-aRBr-c6wRrLcyg%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRAIgX_D9g777QnQ1tPO9nWWiSSbu70TOJBPN5fd6_Uc01ssCIAVQypRknXhPlBYbuToPeoeoSofKi6PuTGgmrJih3AMA",
            "mimeType": "video/mp4; codecs=\"av01.0.05M.08.0.110.05.01.06.0\"",
            "bitrate": 1792660,
            "width": 1280,
            "height": 720,
            "initRange": {
                "start": "0",
                "end": "699"
            },
            "indexRange": {
                "start": "700",
                "end": "53411"
            },
            "lastModified": "1754255239327032",
            "contentLength": "1752762939",
            "quality": "hd720",
            "fps": 24,
            "qualityLabel": "720p",
            "projectionType": "RECTANGULAR",
            "averageBitrate": 558356,
            "colorInfo": {
                "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709"
            },
            "approxDurationMs": "25113166",
            "qualityOrdinal": "QUALITY_ORDINAL_720P",
            "hasVideo": true,
            "hasAudio": false,
            "container": "mp4",
            "codecs": "av01.0.05M.08.0.110.05.01.06.0",
            "videoCodec": "av01.0.05M.08.0.110.05.01.06.0",
            "audioCodec": null,
            "isLive": false,
            "isHLS": false,
            "isDashMPD": false
        },
        "480p": {
            "itag": 397,
            "url": "https://rr4---sn-42u-i5olz.googlevideo.com/videoplayback?expire=1755375521&ei=QZOgaJugEb-W1d8PxpIC&ip=2405%3A4802%3A694%3A2cf0%3A9db9%3A5d4a%3Aff77%3A96f1&id=o-AMtREHJeP7YbLF7upXs2oUp5lOE0XDBz-dd2-qFCrPqV&itag=397&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1755353921%2C&mh=cG&mm=31%2C26&mn=sn-42u-i5olz%2Csn-un57sn7y&ms=au%2Conr&mv=m&mvi=4&pl=44&rms=au%2Cau&initcwndbps=2653750&bui=AY1jyLN44ldmrCCA8EfXw5IVKWIfNZBc7NTY0nbUYUHzMObq5kDbCyOPZOe1VP1ZlAhpz5WgeA2KD61n&spc=l3OVKTAfYW_O1oOkclKSH2XHt10OLUrNNLiV8Izzh9isb0ZkhW5ZOP_4nR_lwbi6RzM&vprv=1&svpuc=1&mime=video%2Fmp4&ns=EAvxMcOS8FsbuNXd4Mx991oQ&rqh=1&gir=yes&clen=940831279&dur=25113.166&lmt=1754255126015193&mt=1755353355&fvip=5&keepalive=yes&fexp=51548755%2C51565116%2C51565682&c=WEB_EMBEDDED_PLAYER&sefc=1&txp=443G534&n=2qe4tSbSqY3flw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgDdXBjhGNXnlw2_yQaCDGBOHNV4Snz0MS7ZUrU1OuKQ4CIQC0Bt-FTc7PSXxVb470GLnxpm8U0nJPeOHg83us_lgVVw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRAIgX_D9g777QnQ1tPO9nWWiSSbu70TOJBPN5fd6_Uc01ssCIAVQypRknXhPlBYbuToPeoeoSofKi6PuTGgmrJih3AMA",
            "mimeType": "video/mp4; codecs=\"av01.0.04M.08.0.110.05.01.06.0\"",
            "bitrate": 899154,
            "width": 854,
            "height": 480,
            "initRange": {
                "start": "0",
                "end": "699"
            },
            "indexRange": {
                "start": "700",
                "end": "53411"
            },
            "lastModified": "1754255126015193",
            "contentLength": "940831279",
            "quality": "large",
            "fps": 24,
            "qualityLabel": "480p",
            "projectionType": "RECTANGULAR",
            "averageBitrate": 299709,
            "colorInfo": {
                "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709"
            },
            "approxDurationMs": "25113166",
            "qualityOrdinal": "QUALITY_ORDINAL_480P",
            "hasVideo": true,
            "hasAudio": false,
            "container": "mp4",
            "codecs": "av01.0.04M.08.0.110.05.01.06.0",
            "videoCodec": "av01.0.04M.08.0.110.05.01.06.0",
            "audioCodec": null,
            "isLive": false,
            "isHLS": false,
            "isDashMPD": false
        },
        "240p": {
            "mimeType": "video/mp4; codecs=\"avc1.4d4015\"",
            "qualityLabel": "240p",
            "bitrate": 280834,
            "audioBitrate": null,
            "itag": 133,
            "url": "https://rr4---sn-42u-i5olz.googlevideo.com/videoplayback?expire=1755375521&ei=QZOgaJugEb-W1d8PxpIC&ip=2405%3A4802%3A694%3A2cf0%3A9db9%3A5d4a%3Aff77%3A96f1&id=o-AMtREHJeP7YbLF7upXs2oUp5lOE0XDBz-dd2-qFCrPqV&itag=133&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1755353921%2C&mh=cG&mm=31%2C26&mn=sn-42u-i5olz%2Csn-un57sn7y&ms=au%2Conr&mv=m&mvi=4&pl=44&rms=au%2Cau&initcwndbps=2653750&bui=AY1jyLN44ldmrCCA8EfXw5IVKWIfNZBc7NTY0nbUYUHzMObq5kDbCyOPZOe1VP1ZlAhpz5WgeA2KD61n&spc=l3OVKTAfYW_O1oOkclKSH2XHt10OLUrNNLiV8Izzh9isb0ZkhW5ZOP_4nR_lwbi6RzM&vprv=1&svpuc=1&mime=video%2Fmp4&ns=EAvxMcOS8FsbuNXd4Mx991oQ&rqh=1&gir=yes&clen=315497599&dur=25113.166&lmt=1754255617486128&mt=1755353355&fvip=5&keepalive=yes&fexp=51548755%2C51565116%2C51565682&c=WEB_EMBEDDED_PLAYER&sefc=1&txp=4432534&n=2qe4tSbSqY3flw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAOqHxyYpL3PVbJVe3RPGAfYE-C6v5sjPNPIdxEanDVSAAiEAh2Bskc0V4gFRWYt_v8m4JTpC2j7XUAjE6IiK7q7_R20%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRAIgX_D9g777QnQ1tPO9nWWiSSbu70TOJBPN5fd6_Uc01ssCIAVQypRknXhPlBYbuToPeoeoSofKi6PuTGgmrJih3AMA",
            "width": 426,
            "height": 240,
            "initRange": {
                "start": "0",
                "end": "739"
            },
            "indexRange": {
                "start": "740",
                "end": "53451"
            },
            "lastModified": "1754255617486128",
            "contentLength": "315497599",
            "quality": "small",
            "fps": 24,
            "projectionType": "RECTANGULAR",
            "averageBitrate": 100504,
            "approxDurationMs": "25113166",
            "qualityOrdinal": "QUALITY_ORDINAL_240P",
            "hasVideo": true,
            "hasAudio": false,
            "container": "mp4",
            "codecs": "avc1.4d4015",
            "videoCodec": "avc1.4d4015",
            "audioCodec": null,
            "isLive": false,
            "isHLS": false,
            "isDashMPD": false
        },
        "144p": {
            "mimeType": "video/mp4; codecs=\"avc1.4d400c\"",
            "qualityLabel": "144p",
            "bitrate": 212922,
            "audioBitrate": null,
            "itag": 160,
            "url": "https://rr4---sn-42u-i5olz.googlevideo.com/videoplayback?expire=1755375521&ei=QZOgaJugEb-W1d8PxpIC&ip=2405%3A4802%3A694%3A2cf0%3A9db9%3A5d4a%3Aff77%3A96f1&id=o-AMtREHJeP7YbLF7upXs2oUp5lOE0XDBz-dd2-qFCrPqV&itag=160&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1755353921%2C&mh=cG&mm=31%2C26&mn=sn-42u-i5olz%2Csn-un57sn7y&ms=au%2Conr&mv=m&mvi=4&pl=44&rms=au%2Cau&initcwndbps=2653750&bui=AY1jyLN44ldmrCCA8EfXw5IVKWIfNZBc7NTY0nbUYUHzMObq5kDbCyOPZOe1VP1ZlAhpz5WgeA2KD61n&spc=l3OVKTAfYW_O1oOkclKSH2XHt10OLUrNNLiV8Izzh9isb0ZkhW5ZOP_4nR_lwbi6RzM&vprv=1&svpuc=1&mime=video%2Fmp4&ns=EAvxMcOS8FsbuNXd4Mx991oQ&rqh=1&gir=yes&clen=154247320&dur=25113.166&lmt=1754256916029511&mt=1755353355&fvip=5&keepalive=yes&fexp=51548755%2C51565116%2C51565682&c=WEB_EMBEDDED_PLAYER&sefc=1&txp=4432534&n=2qe4tSbSqY3flw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgJ6xmPuXmGBnFl3btxVaFhd89MR0ClIGv97V4-ncvziECIQDona49LbKR1L01HlEpQqE0XkLpGhikFF6TydTm1O4zvQ%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRAIgX_D9g777QnQ1tPO9nWWiSSbu70TOJBPN5fd6_Uc01ssCIAVQypRknXhPlBYbuToPeoeoSofKi6PuTGgmrJih3AMA",
            "width": 256,
            "height": 144,
            "initRange": {
                "start": "0",
                "end": "738"
            },
            "indexRange": {
                "start": "739",
                "end": "53450"
            },
            "lastModified": "1754256916029511",
            "contentLength": "154247320",
            "quality": "tiny",
            "fps": 24,
            "projectionType": "RECTANGULAR",
            "averageBitrate": 49136,
            "approxDurationMs": "25113166",
            "qualityOrdinal": "QUALITY_ORDINAL_144P",
            "hasVideo": true,
            "hasAudio": false,
            "container": "mp4",
            "codecs": "avc1.4d400c",
            "videoCodec": "avc1.4d400c",
            "audioCodec": null,
            "isLive": false,
            "isHLS": false,
            "isDashMPD": false
        }
    })
  // console.log(process.env.NEXT_PUBLIC_API_DOWNLOAD); 
  
  // useEffect(() => {
  //   getData();
  // }, []);
  let handleGetdata = async () => {
      const respone = await getData();
      console.log(respone);
  }
  
  if (showFormDownload == 1 || showFormDownload == 2) {
    return (
      <>
        <div className="relative fvn-form flex justify-center items-center gap-5">
          {showFormDownload == 2 ? <Spinner /> : ""}
          <div className="fvn-form-item mx-4 w-full max-w-2xl">
            <input
              type="email"
              placeholder="https://www.youtube.com/watch?v=H9KESr_ceJs&t=9s"
              className="px-6 py-4 text-[#4a474c] w-full bg-inherit border-[2px] border-[#4e5a87] rounded-lg outline-none leading-5 hover:border-sky-500 focus:border-sky-500 duration-500 placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold"
            />
          </div>
          <div className="fvn-form-item">
            <button
              onClick={handleGetdata}
              type="button"
              className="fvn-button-1 bg-blue-400 text-white rounded-lg w-max"
            >
              Download
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="grid sm:grid-cols-2 w-full gap-8">
          <div className="mx-4 bg-stone-300">
            <table className="border-collapse border border-gray-400 w-full text-gray-950">
              <tbody>
                <tr>
                  <td className="fvn-border-table-td" colSpan={3}>
                    <h3 className="flex">
                      <BiMusic className="size-6 mr-2"/>
                      Audio
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td className="fvn-border-table-td">MP3</td>
                  <td className="fvn-border-table-td">{formatBytes(audio?.contentLength)}</td>
                  <td className="fvn-border-table-td">
                    <button
                      type="button"
                      className="fvn-link-2 flex items-center justify-center rounded-lg w-full"
                    >
                      <BiDownload className="size-6 mr-2" />
                      Dowload
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="fvn-border-table-td" colSpan={3}>
                    <h3 className="flex">
                      <BiVideoRecording className="size-6 mr-2"/>
                      Video
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td className="fvn-border-table-td">
                    <div className="flex">
                      <span className="mr-2">1080p</span>
                      <BiVolumeFull className="size-6" />
               
                    </div>
                  </td>
                  <td className="fvn-border-table-td">13MB</td>
                  <td className="fvn-border-table-td">
                    <button
                      type="button"
                      className="fvn-link-2 flex items-center justify-center rounded-lg w-full"
                    >
                      <BiDownload className="size-6 mr-2" />
                      Dowload
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="fvn-border-table-td">
                    <div className="flex">
                      <span className="mr-2">1080p</span>
                      <BiVolumeMute className="size-6 text-red-500"/>
                
                    </div>
                  </td>
                  <td className="fvn-border-table-td">13MB</td>
                  <td className="fvn-border-table-td">
                    <button
                      type="button"
                      className="fvn-link-2 flex items-center justify-center rounded-lg w-full"
                    >
                      <BiDownload className="size-6 mr-2" />
                      Dowload
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mx-4">
            <div className="">
              <Image
                src={information?.thumbnail}
                alt="rocket"
                className="me-2 w-full h-full float-left"
                width={320}
                height={320}
                priority
              />
            </div>
            <div className="mt-2">
              <div className="text-xl font-bold inline-flex"><BiRename className="text-3xl" />: {information?.title}</div>
              <div className="flex justify-between mt-4">
                <span className="inline-flex"><BsClockHistory className="text-xl mr-2" /> {formatTime(information?.lengthSeconds)}</span>
                <span className="inline-flex"><BsEye className="text-xl mr-2" /> {information?.viewCount}</span>
                <span className="inline-flex"><BiLike className="text-xl mr-2" /> {information?.likeCount}</span>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
