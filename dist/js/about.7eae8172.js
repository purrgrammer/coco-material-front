(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0767":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("h3",{staticClass:"title"},[t._v("The team")]),a("div",{staticClass:"bg"},[t._m(0),a("p",[t._v("The team members are:")]),a("div",{staticClass:"members"},[a("img",{attrs:{alt:"Team members illustration",src:s("8316")}}),a("div",{staticClass:"group"},t._l(t.members,(function(e,s){return a("div",{key:s,staticClass:"person"},[a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"position"},[t._v(t._s(e.position))])])})),0)])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("CocoMaterial")]),t._v(" is an idea of Esther Moreno for Kaleidos’ PIWEEK.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"contact"},[t._v("Feel free to "),s("a",{staticClass:"highlight",attrs:{href:"mailto:esther.moreno@kaleidos.net"}},[t._v("contact us")])])}],r={name:"Team",data:function(){return{members:[{name:"Marina López",position:"Front-End Developer"},{name:"Natacha Menjibar",position:"UX/UI Designer"},{name:"Esther Moreno",position:"Creator & Illustrator"},{name:"Yamila Moreno",position:"Back-End Developer"}]}}},o=r,n=(s("bd32"),s("2877")),l=Object(n["a"])(o,a,i,!1,null,"02fc95e4",null);e["default"]=l.exports},5319:function(t,e,s){"use strict";var a=s("d784"),i=s("825a"),r=s("7b0b"),o=s("50c4"),n=s("a691"),l=s("1d80"),c=s("8aa5"),u=s("14c3"),d=Math.max,v=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,s,a){var g=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,C=a.REPLACE_KEEPS_$0,_=g?"$":"$0";return[function(s,a){var i=l(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,i,a):e.call(String(i),s,a)},function(t,a){if(!g&&C||"string"===typeof a&&-1===a.indexOf(_)){var r=s(e,t,this,a);if(r.done)return r.value}var l=i(t),f=String(this),h="function"===typeof a;h||(a=String(a));var m=l.global;if(m){var k=l.unicode;l.lastIndex=0}var x=[];while(1){var w=u(l,f);if(null===w)break;if(x.push(w),!m)break;var F=String(w[0]);""===F&&(l.lastIndex=c(f,o(l.lastIndex),k))}for(var E="",V=0,y=0;y<x.length;y++){w=x[y];for(var T=String(w[0]),S=d(v(n(w.index),f.length),0),H=[],M=1;M<w.length;M++)H.push(p(w[M]));var $=w.groups;if(h){var L=[T].concat(H,S,f);void 0!==$&&L.push($);var z=String(a.apply(void 0,L))}else z=b(T,f,S,H,$,a);S>=V&&(E+=f.slice(V,S)+z,V=S+T.length)}return E+f.slice(V)}];function b(t,s,a,i,o,n){var l=a+t.length,c=i.length,u=m;return void 0!==o&&(o=r(o),u=h),e.call(n,u,(function(e,r){var n;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,a);case"'":return s.slice(l);case"<":n=o[r.slice(1,-1)];break;default:var u=+r;if(0===u)return e;if(u>c){var d=f(u/10);return 0===d?e:d<=c?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):e}n=i[u-1]}return void 0===n?"":n}))}}))},6547:function(t,e,s){var a=s("a691"),i=s("1d80"),r=function(t){return function(e,s){var r,o,n=String(i(e)),l=a(s),c=n.length;return l<0||l>=c?t?"":void 0:(r=n.charCodeAt(l),r<55296||r>56319||l+1===c||(o=n.charCodeAt(l+1))<56320||o>57343?t?n.charAt(l):r:t?n.slice(l,l+2):o-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"6c19":function(t,e,s){t.exports=s.p+"img/coco.6d579ec8.svg"},"81d5":function(t,e,s){"use strict";var a=s("7b0b"),i=s("23cb"),r=s("50c4");t.exports=function(t){var e=a(this),s=r(e.length),o=arguments.length,n=i(o>1?arguments[1]:void 0,s),l=o>2?arguments[2]:void 0,c=void 0===l?s:i(l,s);while(c>n)e[n++]=t;return e}},8316:function(t,e,s){t.exports=s.p+"img/team.e1648445.svg"},8415:function(t,e,s){"use strict";var a=s("d2e0"),i=s.n(a);i.a},8478:function(t,e,s){},"8aa5":function(t,e,s){"use strict";var a=s("6547").charAt;t.exports=function(t,e,s){return e+(s?a(t,e).length:1)}},"999e":function(t,e,s){},"99af":function(t,e,s){"use strict";var a=s("23e7"),i=s("d039"),r=s("e8b5"),o=s("861d"),n=s("7b0b"),l=s("50c4"),c=s("8418"),u=s("65f0"),d=s("1dde"),v=s("b622"),f=s("2d00"),h=v("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",g=f>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),C=d("concat"),_=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},b=!g||!C;a({target:"Array",proto:!0,forced:b},{concat:function(t){var e,s,a,i,r,o=n(this),d=u(o,0),v=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],_(r)){if(i=l(r.length),v+i>m)throw TypeError(p);for(s=0;s<i;s++,v++)s in r&&c(d,v,r[s])}else{if(v>=m)throw TypeError(p);c(d,v++,r)}return d.length=v,d}})},b09c:function(t,e,s){"use strict";var a=s("8478"),i=s.n(a);i.a},b3c3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"results"},[t._m(0),a("section",{staticClass:"results-data"},[a("div",{staticClass:"menu"},[a("form",{staticClass:"search",attrs:{autocomplete:"off",onsubmit:"return false;"}},[a("label",{attrs:{for:"search"}},[t._v("Search results for: ")]),a("div",{staticClass:"relative"},[a("div",{staticClass:"search-input-wrapper"},[t._l(t.searchTags,(function(e,s){return a("span",{key:s,staticClass:"tag",on:{click:function(s){return t.removeTag(e)}}},[t._v("x "+t._s(e))])})),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",attrs:{id:"search",type:"text"},domProps:{value:t.search},on:{keyup:t.autocompleteSearch,input:function(e){e.target.composing||(t.search=e.target.value)}}})],2),t.autocompleteResults.length?a("div",{ref:"results",staticClass:"autocomplete-results"},t._l(t.autocompleteResults,(function(e,s){return a("span",{key:s,on:{click:function(s){return t.addTag(e.slug)}}},[t._v(" "+t._s(e.slug)+" ")])})),0):t._e()])]),t.filteredVectorsList.length?a("span",{staticClass:"info-text"},[t._v("Showing "+t._s(t.filteredVectorsList.length)+" results")]):t._e(),t.filteredVectorsList.length?a("div",{staticClass:"vectors-actions"},[a("button",{staticClass:"btn-color",on:{click:function(e){return t.showModal(t.filteredVectorsList[0],!0)}}},[a("img",{attrs:{alt:"Palette icon",src:s("d168")}}),a("span",[t._v("Customize all")])]),a("a",{staticClass:"btn-download",attrs:{href:t.downloadAllSvg,target:"_blank"}},[t._v("Download all SVG")])]):t._e()]),t.filteredVectorsList.length?a("div",{staticClass:"results-list"},t._l(t.filteredVectorsList,(function(e,s){return a("div",{key:s,staticClass:"vector-container"},[a("div",{staticClass:"img-container"},[a("img",{attrs:{id:s,alt:e.name,src:e.svg},on:{load:function(e){return t.loaded(s)}}})]),a("div",{staticClass:"download-btn"},[a("a",{staticClass:"btn svg",attrs:{href:t.downloadSvg(e),target:"_blank"}},[t._v("SVG")]),a("button",{staticClass:"btn png",on:{click:function(s){return t.showModal(e,!1)}}},[t._v("PNG")])])])})),0):a("div",{staticClass:"no-results"},[a("img",{attrs:{alt:"Coconut illustration",src:s("6c19")}}),a("h3",[t._v("Sorry, this coconut is empty")]),a("div",[a("span",[t._v("We didn't find any result matching \"")]),a("span",{staticClass:"highlight"},t._l(t.searchTags,(function(e,s){return a("span",{key:s},[t._v(" "+t._s(e)+" ")])})),0),a("span",[t._v('".')])]),t._m(1)])]),t.isModalVisible&&t.filteredVectorsList.length?a("modal",{attrs:{vector:t.svgCode,customizeBulk:t.customizeBulk,vectors:t.filteredVectorsList.length,vectorId:t.selectedVector.id,tags:t.searchTags},on:{close:t.closeModal}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"tags"},[s("p",[t._v("Popular tags")]),s("ul",{staticClass:"tags-list"},[s("li",[t._v("Food")]),s("li",[t._v("Pets")]),s("li",[t._v("Fruits")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Please try a different search term or look within our "),s("strong",[t._v("popular tags")])])}],r=(s("4de4"),s("caad"),s("a15b"),s("ac1f"),s("2532"),s("841c"),s("5530")),o=s("2f62"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal-fade"}},[s("div",{staticClass:"modal-backdrop"},[s("div",{staticClass:"modal"},[s("header",{staticClass:"modal-header"},[t._t("header",[s("div",{staticClass:"title-container"},[s("span",{staticClass:"title"},[t._v(" "+t._s(t.customizeBulk?"Customize selection":"Customize illustration")+" ")]),t.customizeBulk?s("span",{staticClass:"subtitle"},[t._v(" ("),s("strong",[t._v(t._s(t.vectors)+" illustrations ")]),t._v("selected for bulk edit) ")]):t._e()]),s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.close}},[t._v(" x ")])])],2),s("section",{staticClass:"modal-body"},[t._t("body",[s("div",{staticClass:"preview-container"},[t.customizeBulk?s("span",{staticClass:"preview-title"},[t._v("Example illustation for reference")]):t._e(),s("div",{ref:"preview",staticClass:"preview",domProps:{innerHTML:t._s(t.vector)}})]),s("div",{staticClass:"colors"},[s("div",{staticClass:"stroke"},[s("label",{staticClass:"title",attrs:{for:"strokeHex"}},[t._v(" Color ")]),s("div",{staticClass:"color-options"},[t._l(t.strokeColor,(function(e,a){return s("span",{key:a,class:"round "+(t.strokeHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(s){return t.selectStroke(e)}}})})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.strokeHexValue,expression:"strokeHexValue"}],staticClass:"hex",attrs:{name:"strokeHex",type:"text",placeholder:"HEX"},domProps:{value:t.strokeHexValue},on:{keyup:function(e){return t.selectStroke(t.strokeHexValue)},input:function(e){e.target.composing||(t.strokeHexValue=e.target.value)}}})],2)]),s("div",{staticClass:"fill"},[s("label",{staticClass:"title",attrs:{for:"fillHex"}},[t._v(" Background ")]),s("div",{staticClass:"color-options"},[t._l(t.fillColor,(function(e,a){return s("span",{key:a,class:"round "+(t.backgroundHexValue===e?"selected":""),style:{backgroundColor:""+e},on:{click:function(s){return t.selectFill(e)}}})})),s("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundHexValue,expression:"backgroundHexValue"}],staticClass:"hex",attrs:{name:"fillHex",type:"text",placeholder:"HEX"},domProps:{value:t.backgroundHexValue},on:{keyup:function(e){return t.selectFill(t.backgroundHexValue)},input:function(e){e.target.composing||(t.backgroundHexValue=e.target.value)}}})],2)]),s("div",{staticClass:"download"},[s("div",{staticClass:"title-container"},[s("span",{staticClass:"title"},[t._v("Download PNG")]),t.customizeBulk?s("span",{staticClass:"subtitle"},[t._v("( "+t._s(t.vectors)+" illustrations)")]):t._e()]),s("div",{staticClass:"buttons"},[s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("128")}},[t._v("S")]),s("span",{staticClass:"size"},[t._v("128px")])]),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("256")}},[t._v("M")]),s("span",{staticClass:"size"},[t._v("256px")])]),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn-download",attrs:{href:t.downloadPng("512")}},[t._v("L")]),s("span",{staticClass:"size"},[t._v("512px")])])])])])])],2)])])])},l=[],c=(s("99af"),s("cb29"),s("5319"),{name:"modal",props:{vector:null,vectorId:null,customizeBulk:null,vectors:null,tags:null},data:function(){return{fillColor:["#FFFFFF","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF"],strokeColor:["#1C2541","#FF4E4E","#FF9E48","#FFD144","#3CD77D","#378CFF","#D974FF"],svgCode:null,strokeHexValue:"#1C2541",backgroundHexValue:"#FFFFFF"}},methods:{close:function(){this.$emit("close")},selectStroke:function(t){7===t.length?(this.$refs.preview.firstElementChild.lastElementChild.style.fill=t,this.strokeHexValue=t):this.$refs.preview.firstElementChild.lastElementChild.style.fill="#000000"},selectFill:function(t){7===t.length?(this.$refs.preview.firstElementChild.firstElementChild.style.fill=t,this.backgroundHexValue=t):this.$refs.preview.firstElementChild.firstElementChild.style.fill="transparent"},downloadPng:function(t){return this.customizeBulk?"https://cocomaterial.com/api/download/?tags=".concat(this.tags.join(),"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue.replace("#",""):"000000","&fill=").concat(this.backgroundHexValue?this.backgroundHexValue.replace("#",""):"FFFFFF","&size=").concat(t):"https://cocomaterial.com/api/download/?id=".concat(this.vectorId,"&img_format=png&stroke=").concat(this.strokeHexValue?this.strokeHexValue.replace("#",""):"000000","&fill=").concat(this.backgroundHexValue?this.backgroundHexValue.replace("#",""):"FFFFFF","&size=").concat(t)}}}),u=c,d=(s("b09c"),s("2877")),v=Object(d["a"])(u,n,l,!1,null,"767ab73b",null),f=v.exports,h={name:"Results",components:{modal:f},data:function(){return{search:"",isModalVisible:!1,selectedVector:null,svgCode:null,autocompleteResults:[],customizeBulk:!1}},beforeMount:function(){!this.searchTags.length&&this.getTags()},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])({filteredVectorsList:"filteredVectorsList",searchTags:"searchTags",tagsList:"tagsList"})),{},{downloadAllSvg:function(){return"https://cocomaterial.com/api/download/?tags=".concat(this.searchTags.join(),"&img_format=svg")}}),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(o["b"])({getTags:"getTags",getVectorsByTag:"getVectorByTag"})),Object(o["d"])({clearFilteredVectors:"clearFilteredVectors",updateSearchTags:"updateSearchTags",removeSearchTag:"removeSearchTag"})),{},{showModal:function(t,e){this.selectedVector=t;var s=new XMLHttpRequest;s.open("GET",t.url,!1),s.send(null),this.svgCode=JSON.parse(s.responseText).svg_content,this.customizeBulk=e,this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},loaded:function(t){var e=document.getElementById("".concat(t)).clientHeight,s=document.getElementById("".concat(t)).clientWidth;document.getElementById(t).className=e>s?"vertical":"horizontal"},autocompleteSearch:function(){var t=this;this.autocompleteResults=this.tagsList.filter((function(e){return e.slug.includes(t.search)}))},closeAutocomplete:function(){this.autocompleteResults=[]},addTag:function(t){this.search="",this.$refs.search.focus(),this.autocompleteResults=[],this.updateSearchTags(t),this.$store.dispatch("getVectorByTag",this.searchTags)},removeTag:function(t){this.removeSearchTag(t),this.searchTags.length?this.$store.dispatch("getVectorByTag",this.searchTags):this.clearFilteredVectors()},downloadSvg:function(t){var e=t.id;return"https://cocomaterial.com/api/download/?id=".concat(e,"&img_format=svg")}})},m=h,p=(s("8415"),Object(d["a"])(m,a,i,!1,null,"578fdb8c",null));e["default"]=p.exports},bd32:function(t,e,s){"use strict";var a=s("e45c"),i=s.n(a);i.a},bff3:function(t,e,s){"use strict";var a=s("999e"),i=s.n(a);i.a},cb29:function(t,e,s){var a=s("23e7"),i=s("81d5"),r=s("44d2");a({target:"Array",proto:!0},{fill:i}),r("fill")},d168:function(t,e,s){t.exports=s.p+"img/palette.301da43b.svg"},d2e0:function(t,e,s){},e45c:function(t,e,s){},e70f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"license"},[s("h3",{staticClass:"title"},[t._v("License")]),s("p",[t._v("All illustrations published on CocoMaterial can be used for free. You can use them for commercial and non-commercial purposes. You do not need to ask permission from or provide credit to CocoMaterial, although it is appreciated when possible. CocoMaterial grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use creations made on CocoMaterial for free, including for commercial purposes, without permission from or attributing the illustrator.")]),s("p",[t._v("This license does not include the right to compile illustrations from CocoMaterial to replicate a similar or competing service.")])])}],r={name:"License"},o=r,n=(s("bff3"),s("2877")),l=Object(n["a"])(o,a,i,!1,null,"0ed13dd8",null);e["default"]=l.exports}}]);
//# sourceMappingURL=about.7eae8172.js.map