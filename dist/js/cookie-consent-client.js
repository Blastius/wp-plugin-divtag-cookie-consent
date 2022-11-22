/*!
 * CookieConsent v2.8.8
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */(function(){var Z="initCookieConsent";typeof window<"u"&&typeof window[Z]!="function"&&(window[Z]=function(le){var s,O,j,M,f,R,U,de,Le,De,Ee,ue,Me,F,pe,y,Q,we,Y,W,V,X,N,I,ge,ee,te,x,ne,oe,ie,ae,r={mode:"opt-in",current_lang:"en",auto_language:null,autorun:!0,page_scripts:!0,hide_from_bots:!0,cookie_name:"cc_cookie",cookie_expiration:182,cookie_domain:window.location.hostname,cookie_path:"/",cookie_same_site:"Lax",use_rfc_cookie:!1,autoclear_cookies:!0,revision:0,script_selector:"data-cookiecategory"},p={},h={},T=null,$=!0,P=!1,fe=!1,He=!1,_e=!1,Ie=!1,Ce=!0,K=[],Ae=!1,Je=[],et=[],Pe=[],tt=!1,qe=[],ce=[],q=[],L=[],xe=[],he=document.documentElement,mt=function(e){typeof(s=e).cookie_expiration=="number"&&(r.cookie_expiration=s.cookie_expiration),typeof s.cookie_necessary_only_expiration=="number"&&(r.cookie_necessary_only_expiration=s.cookie_necessary_only_expiration),typeof s.autorun=="boolean"&&(r.autorun=s.autorun),typeof s.cookie_domain=="string"&&(r.cookie_domain=s.cookie_domain),typeof s.cookie_same_site=="string"&&(r.cookie_same_site=s.cookie_same_site),typeof s.cookie_path=="string"&&(r.cookie_path=s.cookie_path),typeof s.cookie_name=="string"&&(r.cookie_name=s.cookie_name),typeof s.onAccept=="function"&&(de=s.onAccept),typeof s.onFirstAction=="function"&&(De=s.onFirstAction),typeof s.onChange=="function"&&(Le=s.onChange),s.mode==="opt-out"&&(r.mode="opt-out"),typeof s.revision=="number"&&(s.revision>-1&&(r.revision=s.revision),Ie=!0),typeof s.autoclear_cookies=="boolean"&&(r.autoclear_cookies=s.autoclear_cookies),s.use_rfc_cookie===!0&&(r.use_rfc_cookie=!0),typeof s.hide_from_bots=="boolean"&&(r.hide_from_bots=s.hide_from_bots),r.hide_from_bots&&(tt=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),r.page_scripts=s.page_scripts===!0,s.auto_language==="browser"||s.auto_language===!0?r.auto_language="browser":s.auto_language==="document"&&(r.auto_language="document"),r.current_lang=bt(s.languages,s.current_lang)},nt=function(e){for(var n="accept-",a=g("c-settings"),o=g(n+"all"),c=g(n+"necessary"),t=g(n+"custom"),i=0;i<a.length;i++)a[i].setAttribute("aria-haspopup","dialog"),A(a[i],"click",function(u){u.preventDefault(),p.showSettings(0)});for(i=0;i<o.length;i++)A(o[i],"click",function(u){l(u,"all")});for(i=0;i<t.length;i++)A(t[i],"click",function(u){l(u)});for(i=0;i<c.length;i++)A(c[i],"click",function(u){l(u,[])});function g(u){return(e||document).querySelectorAll('a[data-cc="'+u+'"], button[data-cc="'+u+'"]')}function l(u,_){u.preventDefault(),p.accept(_),p.hideSettings(),p.hide()}},Se=function(e,n){return Object.prototype.hasOwnProperty.call(n,e)?e:be(n).length>0?Object.prototype.hasOwnProperty.call(n,r.current_lang)?r.current_lang:be(n)[0]:void 0},Ue=function(e){if(s.force_consent===!0&&D(he,"force--consent"),!y){y=d("div");var n=d("div"),a=d("div");y.id="cm",n.id="c-inr-i",a.id="cm-ov",y.setAttribute("role","dialog"),y.setAttribute("aria-modal","true"),y.setAttribute("aria-hidden","false"),y.setAttribute("aria-labelledby","c-ttl"),y.setAttribute("aria-describedby","c-txt"),pe.appendChild(y),pe.appendChild(a),y.style.visibility=a.style.visibility="hidden",a.style.opacity=0}var o=s.languages[e].consent_modal.title;o&&(Q||((Q=d("div")).id="c-ttl",Q.setAttribute("role","heading"),Q.setAttribute("aria-level","2"),n.appendChild(Q)),Q.innerHTML=o);var c=s.languages[e].consent_modal.description;Ie&&(c=Ce?c.replace("{{revision_message}}",""):c.replace("{{revision_message}}",s.languages[e].consent_modal.revision_message||"")),we||((we=d("div")).id="c-txt",n.appendChild(we)),we.innerHTML=c;var t,i=s.languages[e].consent_modal.primary_btn,g=s.languages[e].consent_modal.secondary_btn;i&&(Y||((Y=d("button")).id="c-p-bn",Y.className="c-bn",i.role==="accept_all"&&(t="all"),A(Y,"click",function(){p.hide(),p.accept(t)})),Y.innerHTML=s.languages[e].consent_modal.primary_btn.text),g&&(W||((W=d("button")).id="c-s-bn",W.className="c-bn c_link",g.role==="accept_necessary"?A(W,"click",function(){p.hide(),p.accept([])}):A(W,"click",function(){p.showSettings(0)})),W.innerHTML=s.languages[e].consent_modal.secondary_btn.text);var l=s.gui_options;X||((X=d("div")).id="c-inr",X.appendChild(n)),V||((V=d("div")).id="c-bns",l&&l.consent_modal&&l.consent_modal.swap_buttons===!0?(g&&V.appendChild(W),i&&V.appendChild(Y),V.className="swap"):(i&&V.appendChild(Y),g&&V.appendChild(W)),(i||g)&&X.appendChild(V),y.appendChild(X)),P=!0},ot=function(e){if(N)(x=d("div")).id="s-bl";else{N=d("div");var n=d("div"),a=d("div"),o=d("div");I=d("div"),ge=d("div");var c=d("div");ee=d("button");var t=d("div");te=d("div");var i=d("div");N.id="s-cnt",n.id="c-vln",o.id="c-s-in",a.id="cs",ge.id="s-ttl",I.id="s-inr",c.id="s-hdr",te.id="s-bl",ee.id="s-c-bn",i.id="cs-ov",t.id="s-c-bnc",ee.className="c-bn",N.setAttribute("role","dialog"),N.setAttribute("aria-modal","true"),N.setAttribute("aria-hidden","true"),N.setAttribute("aria-labelledby","s-ttl"),ge.setAttribute("role","heading"),N.style.visibility=i.style.visibility="hidden",i.style.opacity=0,t.appendChild(ee),A(n,"keydown",function(ye){(ye=ye||window.event).keyCode===27&&p.hideSettings(0)},!0),A(ee,"click",function(){p.hideSettings(0)})}ee.setAttribute("aria-label",s.languages[e].settings_modal.close_btn_label||"Close"),U=s.languages[e].settings_modal.blocks,R=s.languages[e].settings_modal.cookie_table_headers;var g=U.length;ge.innerHTML=s.languages[e].settings_modal.title;for(var l=0;l<g;++l){var u=U[l].title,_=U[l].description,k=U[l].toggle,m=U[l].cookie_table,w=s.remove_cookie_tables===!0,C=(_||!w&&m)&&"truthy",v=d("div"),H=d("div");if(_){var ve=d("div");ve.className="p",ve.insertAdjacentHTML("beforeend",_)}var J=d("div");if(J.className="title",v.className="c-bl",H.className="desc",k!==void 0){var Ne="c-ac-"+l,E=d(C?"button":"div"),B=d("label"),G=d("input"),re=d("span"),Ke=d("span"),ct=d("span"),rt=d("span");E.className=C?"b-tl exp":"b-tl",B.className="b-tg",G.className="c-tgl",ct.className="on-i",rt.className="off-i",re.className="c-tg",Ke.className="t-lb",C&&(E.setAttribute("aria-expanded","false"),E.setAttribute("aria-controls",Ne)),G.type="checkbox",re.setAttribute("aria-hidden","true");var Te=k.value;G.value=Te,Ke.textContent=u,E.insertAdjacentHTML("beforeend",u),J.appendChild(E),re.appendChild(ct),re.appendChild(rt),$?k.enabled?(G.checked=!0,!x&&q.push(!0),k.enabled&&!x&&Pe.push(Te)):!x&&q.push(!1):z(h.categories,Te)>-1?(G.checked=!0,!x&&q.push(!0)):!x&&q.push(!1),!x&&L.push(Te),k.readonly?(G.disabled=!0,D(re,"c-ro"),!x&&xe.push(!0)):!x&&xe.push(!1),D(H,"b-acc"),D(J,"b-bn"),D(v,"b-ex"),H.id=Ne,H.setAttribute("aria-hidden","true"),B.appendChild(G),B.appendChild(re),B.appendChild(Ke),J.appendChild(B),C&&function(ye,Qe,_t){A(E,"click",function(){kt(Qe,"act")?($e(Qe,"act"),_t.setAttribute("aria-expanded","false"),ye.setAttribute("aria-hidden","true")):(D(Qe,"act"),_t.setAttribute("aria-expanded","true"),ye.setAttribute("aria-hidden","false"))},!1)}(H,v,E)}else if(u){var ke=d("div");ke.className="b-tl",ke.setAttribute("role","heading"),ke.setAttribute("aria-level","3"),ke.insertAdjacentHTML("beforeend",u),J.appendChild(ke)}if(u&&v.appendChild(J),_&&H.appendChild(ve),!w&&m!==void 0){for(var st=document.createDocumentFragment(),ze=0;ze<R.length;++ze){var Be=d("th"),se=R[ze];if(Be.setAttribute("scope","col"),se){var Oe=se&&be(se)[0];Be.textContent=R[ze][Oe],st.appendChild(Be)}}var lt=d("tr");lt.appendChild(st);var dt=d("thead");dt.appendChild(lt);var Ze=d("table");Ze.appendChild(dt);for(var ut=document.createDocumentFragment(),Re=0;Re<m.length;Re++){for(var pt=d("tr"),Ye=0;Ye<R.length;++Ye)if(se=R[Ye]){Oe=be(se)[0];var Ge=d("td");Ge.insertAdjacentHTML("beforeend",m[Re][Oe]),Ge.setAttribute("data-column",se[Oe]),pt.appendChild(Ge)}ut.appendChild(pt)}var gt=d("tbody");gt.appendChild(ut),Ze.appendChild(gt),H.appendChild(Ze)}(k&&u||!k&&(u||_))&&(v.appendChild(H),x?x.appendChild(v):te.appendChild(v))}ne||((ne=d("div")).id="s-bns"),ie||((ie=d("button")).id="s-all-bn",ie.className="c-bn",ne.appendChild(ie),A(ie,"click",function(){p.hideSettings(),p.hide(),p.accept("all")})),ie.innerHTML=s.languages[e].settings_modal.accept_all_btn;var ft=s.languages[e].settings_modal.reject_all_btn;if(ft&&(ae||((ae=d("button")).id="s-rall-bn",ae.className="c-bn",A(ae,"click",function(){p.hideSettings(),p.hide(),p.accept([])}),I.className="bns-t",ne.appendChild(ae)),ae.innerHTML=ft),oe||((oe=d("button")).id="s-sv-bn",oe.className="c-bn",ne.appendChild(oe),A(oe,"click",function(){p.hideSettings(),p.hide(),p.accept()})),oe.innerHTML=s.languages[e].settings_modal.save_settings_btn,x)return I.replaceChild(x,te),void(te=x);c.appendChild(ge),c.appendChild(t),I.appendChild(c),I.appendChild(te),I.appendChild(ne),o.appendChild(I),a.appendChild(o),n.appendChild(a),N.appendChild(n),pe.appendChild(N),pe.appendChild(i)};p.updateLanguage=function(e,n){if(typeof e=="string"){var a=Se(e,s.languages);return(a!==r.current_lang||n===!0)&&(r.current_lang=a,P&&(Ue(a),nt(X)),ot(a),!0)}};var it=function(e){var n=U.length,a=-1;Ae=!1;var o=me("","all"),c=[r.cookie_domain,"."+r.cookie_domain];if(r.cookie_domain.slice(0,4)==="www."){var t=r.cookie_domain.substr(4);c.push(t),c.push("."+t)}for(var i=0;i<n;i++){var g=U[i];if(Object.prototype.hasOwnProperty.call(g,"toggle")){var l=z(K,g.toggle.value)>-1;if(!q[++a]&&Object.prototype.hasOwnProperty.call(g,"cookie_table")&&(e||l)){var u=g.cookie_table,_=be(R[0])[0],k=u.length;g.toggle.reload==="on_disable"&&l&&(Ae=!0);for(var m=0;m<k;m++){var w=c,C=u[m],v=[],H=C[_],ve=C.is_regex||!1,J=C.domain||null,Ne=C.path||!1;if(J&&(w=[J,"."+J]),ve)for(var E=0;E<o.length;E++)o[E].match(H)&&v.push(o[E]);else{var B=z(o,H);B>-1&&v.push(o[B])}v.length>0&&(at(v,Ne,w),g.toggle.reload==="on_clear"&&(Ae=!0))}}}}},z=function(e,n){return e.indexOf(n)},d=function(e){var n=document.createElement(e);return e==="button"&&n.setAttribute("type",e),n},bt=function(e,n){return r.auto_language==="browser"?Se(vt(),e):r.auto_language==="document"?Se(document.documentElement.lang,e):typeof n=="string"?r.current_lang=Se(n,e):r.current_lang},vt=function(){var e=navigator.language||navigator.browserLanguage;return e.length>2&&(e=e[0]+e[1]),e.toLowerCase()};p.allowedCategory=function(e){if($&&r.mode!=="opt-in")n=Pe;else var n=JSON.parse(me(r.cookie_name,"one",!0)||"{}").categories||[];return z(n,e)>-1},p.run=function(e){if(!document.getElementById("cc_div")){if(mt(e),tt)return;h=JSON.parse(me(r.cookie_name,"one",!0)||"{}");var n=(M=h.consent_uuid)!==void 0;if((O=h.consent_date)&&(O=new Date(O)),(j=h.last_consent_update)&&(j=new Date(j)),T=h.data!==void 0?h.data:null,Ie&&h.revision!==r.revision&&(Ce=!1),P=$=!(n&&Ce&&O&&j&&M),function(){(F=d("div")).id="cc--main",F.style.position="fixed",F.style.zIndex="2147483647",F.innerHTML='<!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--><!--[if (gt IE 8)|!(IE)]><!--><div id="cc_div" class="cc_div"></div><!--<![endif]-->',pe=F.children[0];var o=r.current_lang;P&&Ue(o),ot(o),(le||document.body).appendChild(F)}(),function(){var o=["[href]","button","input","details",'[tabindex="0"]'];function c(t,i){var g=!1,l=!1;try{for(var u,_=t.querySelectorAll(o.join(':not([tabindex="-1"]), ')),k=_.length,m=0;m<k;)u=_[m].getAttribute("data-focus"),l||u!=="1"?u==="0"&&(g=_[m],l||_[m+1].getAttribute("data-focus")==="0"||(l=_[m+1])):l=_[m],m++}catch{return t.querySelectorAll(o.join(", "))}i[0]=_[0],i[1]=_[_.length-1],i[2]=g,i[3]=l}c(I,ce),P&&c(y,qe)}(),function(o,c){if(typeof o=="object"){var t=o.consent_modal,i=o.settings_modal;P&&t&&g(y,["box","bar","cloud"],["top","middle","bottom"],["zoom","slide"],t.layout,t.position,t.transition),i&&g(N,["bar"],["left","right"],["zoom","slide"],i.layout,i.position,i.transition)}function g(l,u,_,k,m,w,C){if(w=w&&w.split(" ")||[],z(u,m)>-1&&(D(l,m),(m!=="bar"||w[0]!=="middle")&&z(_,w[0])>-1))for(var v=0;v<w.length;v++)D(l,w[v]);z(k,C)>-1&&D(l,C)}}(e.gui_options),nt(),r.autorun&&P&&p.show(e.delay||0),setTimeout(function(){D(F,"c--anim")},30),setTimeout(function(){var o,c;o=!1,c=!1,A(document,"keydown",function(t){(t=t||window.event).key==="Tab"&&(f&&(t.shiftKey?document.activeElement===f[0]&&(f[1].focus(),t.preventDefault()):document.activeElement===f[1]&&(f[0].focus(),t.preventDefault()),c||_e||(c=!0,!o&&t.preventDefault(),t.shiftKey?f[3]?f[2]?f[2].focus():f[0].focus():f[1].focus():f[3]?f[3].focus():f[0].focus())),!c&&(o=!0))}),document.contains&&A(F,"click",function(t){t=t||window.event,He?I.contains(t.target)?_e=!0:(p.hideSettings(0),_e=!1):fe&&y.contains(t.target)&&(_e=!0)},!0)},100),$)r.mode==="opt-out"&&je(Pe);else{var a=typeof h.rfc_cookie=="boolean";(!a||a&&h.rfc_cookie!==r.use_rfc_cookie)&&(h.rfc_cookie=r.use_rfc_cookie,Ve(r.cookie_name,JSON.stringify(h))),Ee=We(Fe()),je(),typeof de=="function"&&de(h)}}},p.showSettings=function(e){setTimeout(function(){D(he,"show--settings"),N.setAttribute("aria-hidden","false"),He=!0,setTimeout(function(){fe?Me=document.activeElement:ue=document.activeElement,ce.length!==0&&(ce[3]?ce[3].focus():ce[0].focus(),f=ce)},200)},e>0?e:0)};var je=function(e){if(r.page_scripts){var n=document.querySelectorAll("script["+r.script_selector+"]"),a=e||h.categories||[],o=function(c,t){if(t<c.length){var i=c[t],g=i.getAttribute(r.script_selector);if(z(a,g)>-1){i.type="text/javascript",i.removeAttribute(r.script_selector);var l=i.getAttribute("data-src");l&&i.removeAttribute("data-src");var u=d("script");if(u.textContent=i.innerHTML,function(_,k){for(var m=k.attributes,w=m.length,C=0;C<w;C++){var v=m[C].nodeName;_.setAttribute(v,k[v]||k.getAttribute(v))}}(u,i),l?u.src=l:l=i.src,l&&(u.readyState?u.onreadystatechange=function(){u.readyState!=="loaded"&&u.readyState!=="complete"||(u.onreadystatechange=null,o(c,++t))}:u.onload=function(){u.onload=null,o(c,++t)}),i.parentNode.replaceChild(u,i),l)return}o(c,++t)}};o(n,0)}};p.set=function(e,n){return e==="data"&&function(a,o){var c=!1;if(o==="update"){var t=typeof(T=p.get("data"))==typeof a;if(t&&typeof T=="object")for(var i in!T&&(T={}),a)T[i]!==a[i]&&(T[i]=a[i],c=!0);else!t&&T||T===a||(T=a,c=!0)}else T=a,c=!0;return c&&(h.data=T,Ve(r.cookie_name,JSON.stringify(h))),c}(n.value,n.mode)},p.get=function(e,n){return JSON.parse(me(n||r.cookie_name,"one",!0)||"{}")[e]},p.getConfig=function(e){return r[e]||s[e]};var Fe=function(){return Je=h.categories||[],et=L.filter(function(e){return z(Je,e)===-1}),{accepted:Je,rejected:et}},We=function(e){var n="custom",a=xe.filter(function(o){return o===!0}).length;return e.accepted.length===L.length?n="all":e.accepted.length===a&&(n="necessary"),n};p.getUserPreferences=function(){var e=Fe();return{accept_type:We(e),accepted_categories:e.accepted,rejected_categories:e.rejected}},p.loadScript=function(e,n,a){var o=typeof n=="function";if(document.querySelector('script[src="'+e+'"]'))o&&n();else{var c=d("script");if(a&&a.length>0)for(var t=0;t<a.length;++t)a[t]&&c.setAttribute(a[t].name,a[t].value);o&&(c.onload=n),c.src=e,document.head.appendChild(c)}},p.updateScripts=function(){je()},p.show=function(e,n){n===!0&&Ue(r.current_lang),P&&setTimeout(function(){D(he,"show--consent"),y.setAttribute("aria-hidden","false"),fe=!0,setTimeout(function(){ue=document.activeElement,f=qe},200)},e>0?e:n?30:0)},p.hide=function(){P&&($e(he,"show--consent"),y.setAttribute("aria-hidden","true"),fe=!1,setTimeout(function(){ue.focus(),f=null},200))},p.hideSettings=function(){$e(he,"show--settings"),He=!1,N.setAttribute("aria-hidden","true"),setTimeout(function(){fe?(Me&&Me.focus(),f=qe):(ue&&ue.focus(),f=null),_e=!1},200)},p.accept=function(e,n){var a=e||void 0,o=n||[],c=[];if(a)if(typeof a=="object"&&typeof a.length=="number")for(var t=0;t<a.length;t++)z(L,a[t])!==-1&&c.push(a[t]);else typeof a=="string"&&(a==="all"?c=L.slice():z(L,a)!==-1&&c.push(a));else c=function(){for(var i=document.querySelectorAll(".c-tgl")||[],g=[],l=0;l<i.length;l++)i[l].checked&&g.push(i[l].value);return g}();if(o.length>=1)for(t=0;t<o.length;t++)c=c.filter(function(i){return i!==o[t]});for(t=0;t<L.length;t++)xe[t]===!0&&z(c,L[t])===-1&&c.push(L[t]);(function(i){K=[];var g=document.querySelectorAll(".c-tgl")||[];if(g.length>0)for(var l=0;l<g.length;l++)z(i,L[l])!==-1?(g[l].checked=!0,q[l]||(K.push(L[l]),q[l]=!0)):(g[l].checked=!1,q[l]&&(K.push(L[l]),q[l]=!1));!$&&r.autoclear_cookies&&K.length>0&&it(),O||(O=new Date),M||(M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(u){try{return(u^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>u/4).toString(16)}catch{return""}})),h={categories:i,level:i,revision:r.revision,data:T,rfc_cookie:r.use_rfc_cookie,consent_date:O.toISOString(),consent_uuid:M},($||K.length>0)&&(Ce=!0,j=j?new Date:O,h.last_consent_update=j.toISOString(),Ee=We(Fe()),Ve(r.cookie_name,JSON.stringify(h)),je()),$&&(r.autoclear_cookies&&it(!0),typeof De=="function"&&De(p.getUserPreferences(),h),typeof de=="function"&&de(h),$=!1,r.mode==="opt-in")||(typeof Le=="function"&&K.length>0&&Le(h,K),Ae&&window.location.reload())})(c)},p.eraseCookies=function(e,n,a){var o=[],c=a?[a,"."+a]:[r.cookie_domain,"."+r.cookie_domain];if(typeof e=="object"&&e.length>0)for(var t=0;t<e.length;t++)this.validCookie(e[t])&&o.push(e[t]);else this.validCookie(e)&&o.push(e);at(o,n,c)};var Ve=function(e,n){var a=r.cookie_expiration;typeof r.cookie_necessary_only_expiration=="number"&&Ee==="necessary"&&(a=r.cookie_necessary_only_expiration),n=r.use_rfc_cookie?encodeURIComponent(n):n;var o=new Date;o.setTime(o.getTime()+24*a*60*60*1e3);var c=e+"="+(n||"")+"; expires="+o.toUTCString()+"; Path="+r.cookie_path+";";c+=" SameSite="+r.cookie_same_site+";",window.location.hostname.indexOf(".")>-1&&(c+=" Domain="+r.cookie_domain+";"),window.location.protocol==="https:"&&(c+=" Secure;"),document.cookie=c},me=function(e,n,a){var o;if(n==="one"){if((o=(o=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?a?o.pop():e:"")&&e===r.cookie_name){try{o=JSON.parse(o)}catch{try{o=JSON.parse(decodeURIComponent(o))}catch{o={}}}o=JSON.stringify(o)}}else if(n==="all"){var c=document.cookie.split(/;\s*/);o=[];for(var t=0;t<c.length;t++)o.push(c[t].split("=")[0])}return o},at=function(e,n,a){for(var o=n||"/",c=0;c<e.length;c++){for(var t=0;t<a.length;t++)document.cookie=e[c]+"=; path="+o+(a[t].indexOf(".")==0?"; domain="+a[t]:"")+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";e[c]}};p.validCookie=function(e){return me(e,"one",!0)!==""};var A=function(e,n,a,o){e.addEventListener(n,a,o===!0&&{passive:!0})},be=function(e){if(typeof e=="object")return Object.keys(e)},D=function(e,n){e.classList.add(n)},$e=function(e,n){e.classList.remove(n)},kt=function(e,n){return e.classList.contains(n)};return p})})();function yt(Z,le){let s=!1;Z[0]=="#"&&(Z=Z.slice(1),s=!0);let O=parseInt(Z,16),j=(O>>16)+le,M=(O&255)+le,f=(O>>8&255)+le;return j>255?j=255:j<0&&(j=0),M>255?M=255:M<0&&(M=0),f>255?f=255:f<0&&(f=0),(s?"#":"")+(M|f<<8|j<<16).toString(16)}const wt=initCookieConsent(),b=cookie_consent_settings.options,S={force_consent:!!b.force_consent,dark_mode:b.dark_mode,title_nl:b.title_nl?b.title_nl:"We gebruiken cookies!",description_nl:b.description_nl?b.description_nl:"We gebruiken analytische cookies en sommige cookies worden geplaatst door diensten van derden die op onze pagina's worden weergegeven. Door op 'Laat mij kiezen' te klikken, kun je meer lezen over onze cookies en je voorkeuren aanpassen.",title_en:b.title_en?b.title_nl:"We use cookies!",description_en:b.description_en?b.description_nl:"Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.",gui:{consent_modal:{layout:b.layout||"cloud",position_y:b.position_vertical||"bottom",position_x:b.position_horizontal||"right",transition:b.transition,swap_buttons:!!b.swap_buttons},settings_modal:{layout:b.layout_settings||"box",position_x:b.position_horizontal_settings||"right",transition:b.transition_settings}}};let Xe="mailto:"+cookie_consent_settings.admin_email;b.contact_url&&(Xe=b.contact_url);b.button_color&&(document.documentElement.style.setProperty("--cc-btn-primary-bg",b.button_color),document.documentElement.style.setProperty("--cc-btn-primary-hover-bg",yt(b.button_color,-15)));S.dark_mode&&document.body.classList.toggle("c_darkmode");const ht=document.documentElement.getAttribute("lang"),Ct=ht==="nl"||ht==="nl-NL"?"nl":"en";wt.run({current_lang:Ct,autoclear_cookies:!0,page_scripts:!0,force_consent:S.force_consent,gui_options:{consent_modal:{layout:S.gui.consent_modal.layout,position:`${S.gui.consent_modal.position_y} ${S.gui.consent_modal.position_x}`,transition:S.gui.consent_modal.transition,swap_buttons:S.gui.consent_modal.swap_buttons},settings_modal:{layout:S.gui.settings_modal.layout,position:S.gui.settings_modal.position_x,transition:S.gui.settings_modal.transition}},languages:{nl:{consent_modal:{title:S.title_nl,description:S.description_nl+' <button type="button" data-cc="c-settings" class="cc-link">Laat mij kiezen</button>',primary_btn:{text:"Accepteer alles",role:"accept_all"},secondary_btn:{text:"Weiger alles",role:"accept_necessary"}},settings_modal:{title:"Cookie voorkeuren",save_settings_btn:"Sla voorkeuren op",accept_all_btn:"Accepteer alles",reject_all_btn:"Weiger alles",close_btn_label:"Sluiten",blocks:[{title:"Cookie gebruik \u{1F4E2}",description:"We gebruiken cookies om de basis functionaliteiten van de website goed te laten werken. Je kan voor elke categorie kiezen om deze in of uit te schakelen."},{title:"Strikt noodzakelijke cookies",description:"Deze cookies zijn nodig om de website goed te laten werken. De website zou niet meer goed kunnen werken als je deze niet accepteert.",toggle:{value:"necessary",enabled:!0,readonly:!0}},{title:"Marketing cookies",description:"Deze cookies verzamelen informatie over hoe je de website gebruikt, welke pagina's je bezocht hebt en op welke links je geklikt hebt. Deze data is niet geanonimiseerd en kunnen aan jou gekoppeld worden.",toggle:{value:"marketing",enabled:!1,readonly:!1}},{title:"Meer informatie",description:'Voor vragen omtrent onze policy over cookies en jouw keuzes, neem <a class="cc-link" href="'+Xe+'" target="_blank" rel="noreferrer noopener">contact op</a>.'}]}},en:{consent_modal:{title:S.title_en,description:S.description_en+' <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',primary_btn:{text:"Accept all",role:"accept_all"},secondary_btn:{text:"Reject all",role:"accept_necessary"}},settings_modal:{title:"Cookie preferences",save_settings_btn:"Save settings",accept_all_btn:"Accept all",reject_all_btn:"Reject all",close_btn_label:"Close",blocks:[{title:"Cookie usage \u{1F4E2}",description:"I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want."},{title:"Strictly necessary cookies",description:"These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.",toggle:{value:"necessary",enabled:!0,readonly:!0}},{title:"Marketing cookies",description:"These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is not anonymized and can be used to identify you.",toggle:{value:"marketing",enabled:!1,readonly:!1}},{title:"More information",description:'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="'+Xe+'">contact us</a>.'}]}}}});
