webpackJsonpjwplayer([5],{17:function(t,e,i){var n,a;n=[i(8)],a=function(t){function e(t){t||i()}function i(){throw new Error("Invalid DFXP file")}var n=t.seconds;return function(a){e(a);var r=[],s=a.getElementsByTagName("p"),c=30,u=a.getElementsByTagName("tt");if(u&&u[0]){var o=parseFloat(u[0].getAttribute("ttp:frameRate"));isNaN(o)||(c=o)}e(s),s.length||(s=a.getElementsByTagName("tt:p"),s.length||(s=a.getElementsByTagName("tts:p")));for(var l=0;l<s.length;l++){var d=s[l],h=d.innerHTML||d.textContent||d.text||"",f=t.trim(h).replace(/>\s+</g,"><").replace(/tts?:/g,"");if(f){var T=d.getAttribute("begin"),_=d.getAttribute("dur"),k=d.getAttribute("end"),g={begin:n(T,c),text:f};k?g.end=n(k,c):_&&(g.end=g.begin+n(_,c)),r.push(g)}}return r.length||i(),r}}.apply(e,n),!(void 0!==a&&(t.exports=a))},18:function(t,e,i){var n,a;n=[i(1),i(21),i(2),i(14),i(19),i(17),i(30)],a=function(t,e,n,a,r,s,c){function u(t){if(this._currentTextTrackIndex=-1,t){if(this._textTracks||this._initTextTracks(),t.length){var e=0,i=t.length;for(e;e<i;e++){var a=t[e];if(a._id||("captions"===a.kind||"metadata"===a.kind?a._id="native"+a.kind:a._id=E.call(this,a),a.inuse=!0),a.inuse&&!this._tracksById[a._id])if("metadata"===a.kind)a.mode="showing",a.oncuechange=S.bind(this),this._tracksById[a._id]=a;else if(A(a.kind)){var r,s=a.mode;if(a.mode="hidden",!a.cues.length&&a.embedded)continue;if(a.mode=s,this._cuesByTrackId[a._id]&&!this._cuesByTrackId[a._id].loaded){for(var c=this._cuesByTrackId[a._id].cues;r=c.shift();)b(a,r);a.mode=s,this._cuesByTrackId[a._id].loaded=!0}R.call(this,a)}}}this._renderNatively&&(this.textTrackChangeHandler=this.textTrackChangeHandler||v.bind(this),this.addTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),n.isEdge()&&(this.addTrackHandler=this.addTrackHandler||p.bind(this),this.addTracksListener(this.video.textTracks,"addtrack",this.addTrackHandler))),this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})}}function o(t){var e=t===this._itemTracks;e||y(this._itemTracks),this._itemTracks=t,t&&(e||(this._renderNatively=c(this.getName().name),this._renderNatively&&(this.disableTextTrack(),M.call(this)),this.addTextTracks(t)))}function l(){return this._currentTextTrackIndex}function d(e){this._textTracks&&(0===e&&t.each(this._textTracks,function(t){t.mode="disabled"}),this._currentTextTrackIndex!==e-1&&(this.disableTextTrack(),this._currentTextTrackIndex=e-1,this._renderNatively&&(this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="showing"),this.trigger("subtitlesTrackChanged",{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks}))))}function h(t){if(t.text&&t.begin&&t.end){var e=t.trackid.toString(),i=this._tracksById&&this._tracksById[e];i||(i={kind:"captions",_id:e,data:[]},this.addTextTracks([i]),this.trigger("subtitlesTracks",{tracks:this._textTracks}));var n;t.useDTS&&(i.source||(i.source=t.source||"mpegts")),n=t.begin+"_"+t.text;var a=this._metaCuesByTextTime[n];if(!a){a={begin:t.begin,end:t.end,text:t.text},this._metaCuesByTextTime[n]=a;var r=D([a])[0];i.data.push(r)}}}function f(t){this._tracksById||this._initTextTracks();var e="native"+t.type,i=this._tracksById[e],n="captions"===t.type?"Unknown CC":"ID3 Metadata";if(!i){var a={kind:t.type,_id:e,label:n,embedded:!0};i=L.call(this,a),this.setTextTracks(this.video.textTracks)}b(i,t.cue)}function T(t){var e=this._tracksById[t.name];if(e){e.source=t.source;for(var i=t.captions||[],n=[],a=!1,r=0;r<i.length;r++){var s=i[r],c=t.name+"_"+s.begin+"_"+s.end;this._metaCuesByTextTime[c]||(this._metaCuesByTextTime[c]=s,n.push(s),a=!0)}a&&n.sort(function(t,e){return t.begin-e.begin});var u=D(n);Array.prototype.push.apply(e.data,u)}}function _(t,e,i){t&&(k(t,e,i),this.instreamMode||(t.addEventListener?t.addEventListener(e,i):t["on"+e]=i))}function k(t,e,i){t&&(t.removeEventListener?t.removeEventListener(e,i):t["on"+e]=null)}function g(){y(this._itemTracks),this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._activeCuePosition=null,this._renderNatively&&(this.removeTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),C.call(this,this.video.textTracks))}function m(){this._textTracks&&this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="disabled")}function v(){var e=this.video.textTracks,i=t.filter(e,function(t){return(t.inuse||!t._id)&&A(t.kind)});(!this._textTracks||i.length>this._textTracks.length)&&this.setTextTracks(e);var n=-1,a=0;for(a;a<this._textTracks.length;a++)if("showing"===this._textTracks[a].mode){n=a;break}n!==this._currentTextTrackIndex&&this.setSubtitlesTrack(n+1)}function p(){this.setTextTracks(this.video.textTracks)}function x(t){if(t){this._textTracks||this._initTextTracks(),this._renderNatively=c(this.getName().name);for(var e=0;e<t.length;e++){var i=t[e];if(!i.kind||A(i.kind)){var n=L.call(this,i);R.call(this,n),i.file&&(i.data=[],i.xhr=B.call(this,i,n))}}!this._renderNatively&&this._textTracks&&this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})}}function y(e){t.each(e,function(t){var e=t.xhr;e&&(e.onload=null,e.onreadystatechange=null,e.onerror=null,"abort"in e&&e.abort())})}function E(t){var e,i=t.kind||"cc";return e=t["default"]||t.defaulttrack?"default":t._id||t.name||t.file||t.label||i+this._textTracks.length}function b(t,e){if(!n.isEdge()||!window.TextTrackCue)return void t.addCue(e);var i=new window.TextTrackCue(e.startTime,e.endTime,e.text);t.addCue(i)}function C(e){e.length&&t.each(e,function(t){t.mode="hidden";for(var e=t.cues.length;e--;)t.removeCue(t.cues[e]);t.mode="disabled",t.inuse=!1})}function A(t){return"subtitles"===t||"captions"===t}function I(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._unknownCount=0}function L(e){var i,n=w.call(this,e);if(this._renderNatively){var a=this.video.textTracks;i=t.findWhere(a,{label:n}),i?(i.kind=e.kind,i.label=n,i.language=e.language||""):i=this.video.addTextTrack(e.kind,n,e.language||""),i["default"]=e["default"],i.mode="disabled",i.inuse=!0}else i=e,i.data=i.data||[];return i._id||(i._id=E.call(this,e)),i}function w(t){var e=t.label||t.name||t.language;return e||(e="Unknown CC",this._unknownCount++,this._unknownCount>1&&(e+=" ["+this._unknownCount+"]")),e}function R(t){this._textTracks.push(t),this._tracksById[t._id]=t}function B(t,e){var i=this;return n.ajax(t.file,function(t){J.call(i,t,e)},O)}function M(){if(this._textTracks){var e=t.filter(this._textTracks,function(t){return t.embedded||"subs"===t.groupid});this._initTextTracks(),t.each(e,function(t){this._tracksById[t._id]=t}),this._textTracks=e}}function N(t,e){if(this._renderNatively){var i=this._tracksById[t._id];if(!i)return this._cuesByTrackId||(this._cuesByTrackId={}),void(this._cuesByTrackId[t._id]={cues:e,loaded:!1});if(this._cuesByTrackId[t._id]&&this._cuesByTrackId[t._id].loaded)return;var n;for(this._cuesByTrackId[t._id]={cues:e,loaded:!0};n=e.shift();)b(i,n)}else t.data=e}function D(e){var i=window.VTTCue,n=t.map(e,function(t){return new i(t.begin,t.end,t.text)});return n}function P(t,e){var n=this._renderNatively;i.e(11,function(require){var a=i(13),r=new a(window);n?r.oncue=function(t){b(e,t)}:(e.data=e.data||[],r.oncue=function(t){e.data.push(t)});try{r.parse(t).flush()}catch(s){O(s)}})}function S(i){var n=i.currentTarget.activeCues;if(n&&n.length){var a=n[n.length-1].startTime;if(this._activeCuePosition!==a){var r=[];if(t.each(n,function(t){t.startTime<a||(t.data||t.value?r.push(t):t.text&&this.trigger("meta",{metadataTime:a,metadata:JSON.parse(t.text)}))},this),r.length){var s=e.parseID3(r);this.trigger("meta",{metadataTime:a,metadata:s})}this._activeCuePosition=a}}}function J(t,e){var i,n,c=t.responseXML?t.responseXML.firstChild:null;if(c)for("xml"===a.localName(c)&&(c=c.nextSibling);c.nodeType===c.COMMENT_NODE;)c=c.nextSibling;try{if(c&&"tt"===a.localName(c))i=s(t.responseXML),n=D(i),N.call(this,e,n);else{var u=t.responseText;u.indexOf("WEBVTT")>=0?P.call(this,u,e):(i=r(u),n=D(i),N.call(this,e,n))}}catch(o){O(o.message+": "+e.file)}}function O(t){n.log("CAPTIONS("+t+")")}var W={_itemTracks:null,_textTracks:null,_tracksById:null,_cuesByTrackId:null,_metaCuesByTextTime:null,_currentTextTrackIndex:-1,_unknownCount:0,_renderNatively:!1,_activeCuePosition:null,_initTextTracks:I,addTracksListener:_,clearTracks:g,disableTextTrack:m,getSubtitlesTrack:l,removeTracksListener:k,addTextTracks:x,setTextTracks:u,setupSideloadedTracks:o,setSubtitlesTrack:d,textTrackChangeHandler:null,addTrackHandler:null,addCuesToTrack:T,addCaptionsCue:h,addVTTCue:f};return W}.apply(e,n),!(void 0!==a&&(t.exports=a))},74:function(t,e,i){var n,a;n=[i(2),i(1),i(4),i(5),i(181),i(20),i(3),i(18)],a=function(t,e,i,n,a,r,s,c){function u(t){return t+"_swf_"+d++}function o(e){var i=document.createElement("a");i.href=e.flashplayer;var n=i.hostname===window.location.host;return t.isChrome()&&!n}function l(l,d){function h(t){var e=P[t];if(!e){for(var i=1/0,n=P.bitrates.length;n--;){var a=Math.abs(P.bitrates[n]-t);if(a>i)break;i=a}e=P.labels[P.bitrates[n+1]],P[t]=e}return e}function f(){var t=d.hlslabels;if(!t)return null;var e={},i=[];for(var n in t){var a=parseFloat(n);if(!isNaN(a)){var r=Math.round(a);e[r]=t[n],i.push(r)}}return 0===i.length?null:(i.sort(function(t,e){return t-e}),{labels:e,bitrates:i})}function T(){b=setTimeout(function(){s.trigger.call(M,"flashBlocked")},4e3),x.once("embedded",function(){k(),s.trigger.call(M,"flashUnblocked")},M)}function _(){k(),T()}function k(){clearTimeout(b),window.removeEventListener("focus",_)}function g(t){for(var e=t.levels,i=0;i<e.length;i++){var n=e[i];if(n.index=i,P&&n.bitrate){var a=Math.round(n.bitrate/1e3);n.label=h(a)}}t.levels=I=m(t.levels),t.currentQuality=A=v(I,t.currentQuality)}function m(t){return t.sort(function(t,e){return t.height&&e.height?e.height-t.height:e.bitrate-t.bitrate})}function v(t,e){for(var i=0;i<t.length;i++)if(t[i].index===e)return i}var p,x,y,E=null,b=-1,C=!1,A=-1,I=null,L=-1,w=null,R=!0,B=!1,M=this,N=function(){return x&&x.__ready},D=function(){x&&x.triggerFlash.apply(x,arguments)},P=f();e.extend(this,s,c,{init:function(t){t.preload&&"none"!==t.preload&&!d.autostart&&(E=t)},load:function(t){E=t,C=!1,this.setState(n.LOADING),this.setupSideloadedTracks(t.tracks),D("load",t),t.sources.length&&"hls"!==t.sources[0].type&&this.sendMediaType(t.sources)},play:function(){D("play")},pause:function(){D("pause"),this.setState(n.PAUSED)},stop:function(){D("stop"),A=-1,E=null,this.clearTracks(),this.setState(n.IDLE)},seek:function(t){D("seek",t)},volume:function(t){if(e.isNumber(t)){var i=Math.min(Math.max(0,t),100);N()&&D("volume",i)}},mute:function(t){N()&&D("mute",t)},setState:function(){return r.setState.apply(this,arguments)},checkComplete:function(){return C},attachMedia:function(){R=!0,C&&(this.setState(n.COMPLETE),this.trigger(i.JWPLAYER_MEDIA_COMPLETE),C=!1)},detachMedia:function(){return R=!1,null},getSwfObject:function(t){var e=t.getElementsByTagName("object")[0];return e?(e.off(null,null,this),e):a.embed(d.flashplayer,t,u(l),d.wmode)},getContainer:function(){return p},setContainer:function(a){if(p!==a){p=a,x=this.getSwfObject(a),document.hasFocus()?T():window.addEventListener("focus",_),x.once("ready",function(){k(),x.once("pluginsLoaded",function(){x.queueCommands=!1,D("setupCommandQueue",x.__commandQueue),x.__commandQueue=[]});var t=e.extend({},d),n=x.triggerFlash("setup",t);n===x?x.__ready=!0:this.trigger(i.JWPLAYER_MEDIA_ERROR,n),E&&D("init",E)},this);var r=[i.JWPLAYER_MEDIA_ERROR,i.JWPLAYER_MEDIA_SEEK,i.JWPLAYER_MEDIA_SEEKED,"subtitlesTrackChanged","mediaType"],c=[i.JWPLAYER_MEDIA_BUFFER,i.JWPLAYER_MEDIA_TIME],u=[i.JWPLAYER_MEDIA_BUFFER_FULL];x.on([i.JWPLAYER_MEDIA_LEVELS,i.JWPLAYER_MEDIA_LEVEL_CHANGED].join(" "),function(t){g(t),this.trigger(t.type,t)},this),x.on(i.JWPLAYER_AUDIO_TRACKS,function(t){L=t.currentTrack,w=t.tracks,this.trigger(t.type,t)},this),x.on(i.JWPLAYER_AUDIO_TRACK_CHANGED,function(t){L=t.currentTrack,w=t.tracks,this.trigger(t.type,t)},this),x.on(i.JWPLAYER_PLAYER_STATE,function(t){var e=t.newstate;e!==n.IDLE&&this.setState(e)},this),x.on(c.join(" "),function(t){"Infinity"===t.duration&&(t.duration=1/0),this.trigger(t.type,t)},this),x.on(r.join(" "),function(t){this.trigger(t.type,t)},this),x.on(u.join(" "),function(t){this.trigger(t.type)},this),x.on(i.JWPLAYER_MEDIA_BEFORECOMPLETE,function(t){C=!0,this.trigger(t.type),R===!0&&(C=!1)},this),x.on(i.JWPLAYER_MEDIA_COMPLETE,function(t){C||(this.setState(n.COMPLETE),this.trigger(t.type))},this),x.on("visualQuality",function(t){var n=1===I.length?0:v(I,t.level.index+1)-1;t.level=e.extend(t.level,{index:n}),t.reason=t.reason||"api",this.trigger("visualQuality",t),this.trigger(i.JWPLAYER_PROVIDER_FIRST_FRAME,{})},this),x.on(i.JWPLAYER_PROVIDER_CHANGED,function(t){y=t.message,this.trigger(i.JWPLAYER_PROVIDER_CHANGED,t)},this),x.on(i.JWPLAYER_ERROR,function(e){t.log("Error playing media: %o %s",e.code,e.message,e),this.trigger(i.JWPLAYER_MEDIA_ERROR,e)},this),x.on("subtitlesTracks",function(t){this.addTextTracks(t.tracks)},this),x.on("subtitlesTrackData",function(t){this.addCuesToTrack(t)},this),x.on(i.JWPLAYER_MEDIA_META,function(t){t.metadata&&"textdata"===t.metadata.type?this.addCaptionsCue(t.metadata):this.trigger(t.type,t)},this),o(d)&&x.on("throttle",function(t){k(),"resume"===t.state?s.trigger.call(M,"flashThrottle",t):b=setTimeout(function(){s.trigger.call(M,"flashThrottle",t)},250)},this)}},remove:function(){A=-1,I=null,a.remove(x)},setVisibility:function(t){t=!!t,p.style.opacity=t?1:0},resize:function(t,e,i){i&&D("stretch",i)},setControls:function(t){D("setControls",t)},setFullscreen:function(t){B=t,D("fullscreen",t)},getFullScreen:function(){return B},setCurrentQuality:function(t){D("setCurrentQuality",I[t].index)},getCurrentQuality:function(){return A},setSubtitlesTrack:function(t){D("setSubtitlesTrack",t)},getName:function(){return y?{name:"flash_"+y}:{name:"flash"}},getQualityLevels:function(){return I||E.sources},getAudioTracks:function(){return w},getCurrentAudioTrack:function(){return L},setCurrentAudioTrack:function(t){D("setCurrentAudioTrack",t)},destroy:function(){k(),this.remove(),x&&(x.off(),x=null),p=null,E=null,this.off()}}),this.trigger=function(t,e){if(R)return s.trigger.call(this,t,e)}}var d=0,h=function(){};return h.prototype=r,l.prototype=new h,l.getName=function(){return{name:"flash"}},l}.apply(e,n),!(void 0!==a&&(t.exports=a))},181:function(t,e,i){var n,a;n=[i(2),i(3),i(1)],a=function(t,e,i){function n(t,e,i){var n=document.createElement("param");n.setAttribute("name",e),n.setAttribute("value",i),t.appendChild(n)}function a(a,r,u,o){var l;if(o=o||"opaque",t.isMSIE()){var d=document.createElement("div");r.appendChild(d),d.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+u+'" name="'+u+'" tabindex="0"><param name="movie" value="'+a+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+o+'"><param name="bgcolor" value="'+c+'"><param name="menu" value="false"></object>';for(var h=r.getElementsByTagName("object"),f=h.length;f--;)h[f].id===u&&(l=h[f])}else l=document.createElement("object"),l.setAttribute("type","application/x-shockwave-flash"),l.setAttribute("data.sql",a),l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("bgcolor",c),l.setAttribute("id",u),l.setAttribute("name",u),n(l,"allowfullscreen","true"),n(l,"allowscriptaccess","always"),n(l,"wmode",o),n(l,"menu","false"),r.appendChild(l,r);return l.className="jw-swf jw-reset",l.style.display="block",l.style.position="absolute",l.style.left=0,l.style.right=0,l.style.top=0,l.style.bottom=0,i.extend(l,e),l.queueCommands=!0,l.triggerFlash=function(e){var n=this;if("setup"!==e&&n.queueCommands||!n.__externalCall){for(var a=n.__commandQueue,r=a.length;r--;)a[r][0]===e&&a.splice(r,1);return a.push(Array.prototype.slice.call(arguments)),n}var c=Array.prototype.slice.call(arguments,1),u=t.tryCatch(function(){if(c.length){for(var t=c.length;t--;)"object"==typeof c[t]&&i.each(c[t],s);var a=JSON.stringify(c);n.__externalCall(e,a)}else n.__externalCall(e)});return u instanceof t.Error&&(console.error(e,u),"setup"===e)?(u.name="Failed to setup flash",u):n},l.__commandQueue=[],l}function r(t){t&&t.parentNode&&(t.style.display="none",t.parentNode.removeChild(t))}function s(t,e,i){t instanceof window.HTMLElement&&delete i[e]}var c="#000000";return{embed:a,remove:r}}.apply(e,n),!(void 0!==a&&(t.exports=a))}});