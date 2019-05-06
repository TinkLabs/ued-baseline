class dropdown {
    constructor(options) {
        // btn id
        this.id = options.id;
        // list id
        this.listId = options.id + "_list";
        this.allValues = options.allValues || [];
        this.defaultValue = options.defaultValue || "---";
        this.currentValue = options.defaultValue || "";
    }

    init() {
        // create btn element
        let btn = document.getElementById(this.id);
        btn.classList.add("btn");
        btn.classList.add("dropdown");
        btn.addEventListener('click', e => this.onBtnClick(e));
        // set display value
        let display = document.createElement("span");
        display.classList.add("dd-default");
        display.id = `dd-${this.id}-current`;
        display.setAttribute("data-value", this.defaultValue);
        display.innerHTML = this.defaultValue;
        // append and set
        btn.appendChild(display);
    }

    onBtnClick(e) {
        if (!document.getElementById(this.listId)) {
            this.generateList();
        } else {
            this.toggle(e);
        }
    }

    generateList() {
        // create list wrapper
        let listBase = document.createElement("div");
        listBase.classList.add("dd-list");
        listBase.classList.add("dd-show");
        listBase.id = this.listId;
        listBase.addEventListener('click', e => {
            if (this.hasClass(e.target.classList, "dd-show")) {
                // clicked on background
                this.close();
            }
        });

        // create list 
        let list = document.createElement("ul");
        list.classList.add("list");
        // create rows
        this.allValues.forEach((value, index) => {
            // create row wrapper
            let listRow = document.createElement("li");
            listRow.classList.add("list-row");
            listRow.id = `dd-${this.id}-item-${index}`;
            listRow.setAttribute("data-value", value);
            listRow.addEventListener('click', e => {
                this.updateCurrentValue(e.currentTarget);
            });
            // content wrapper
            let content = document.createElement("div");
            content.classList.add("list-content");
            // list content
            let text = document.createElement("span");
            text.classList.add("list-text");
            text.innerHTML = value;
            // appending elements
            content.appendChild(text);
            listRow.appendChild(content);
            list.appendChild(listRow);
        });

        listBase.appendChild(list);
        document.getElementById(this.id).parentNode.appendChild(listBase);
    }

    toggle(e) {
        let c = e.target.classList;
        let isOpen = this.hasClass(c, "dd-show");
        isOpen ? this.close() : this.open();
    }
    
    open() {
        document.getElementById(this.listId).classList.add("dd-show");
    }
    
    close() {
        document.getElementById(this.listId).classList.remove("dd-show");
    }

    hasClass(array, target) {
        let result = false;
        for (let i = 0; i < array.length; i ++) {
            if (array[i] === target) {
                result = true;
                i = array.length;
            }
        }
        return result;
    }

    updateCurrentValue(target) {
        let v = target.getAttribute("data-value");
        let display = document.getElementById(`dd-${this.id}-current`);
        display.innerHTML = v;
        display.setAttribute("data-value", v);
        this.close();
    }
}

/*
 *
 * Modal
 * 
 * Modal can be created and styled by pure html and css.
 * 
 * Or use this modal class to generate, destory basic modal with
 * built-in trigger.
 * 
 * To create a modal, an object of options is required:
 * 
 * id
 *  string
 *  required
 *  the id of your modal element
 * 
 * iconClass
 *  string array
 *  optional
 *  classnames of the icon above modal title
 * 
 * title
 *  string
 *  optional
 *  modal title
 * 
 * body
 *  string
 *  optional
 *  modal body text
 * 
 * buttonText
 *  string array
 *  require at least 1 entry, max 2
 *  text for modal actions at modal footer
 * 
 * stackButton
 *  boolean
 *  optional
 *  stacking action buttons if button text is too long
 * 
 */

class Modal {
    constructor(options) {
        this.id = options.id;
        this.iconClass = options.iconClass || [];
        this.title = options.title;
        this.body = options.body;
        this.buttonText = options.buttonText;
        this.stackButton = options.stackButton;
    }

    init() {
        // find Target DOM location
        let anchor = document.getElementById(this.id);
        let modal = this.createModalBase();

        // create modal wrapper
        let modalWrapper = document.createElement("div");
        modalWrapper.classList.add("modal-wrapper");

        // create modal header
        let modalHeader = this.createModalHeader();
        modalWrapper.appendChild(modalHeader);

        // create modal body
        let modalBody = this.createModalBody();
        modalWrapper.appendChild(modalBody);

        // create modal footer
        let modalFooter = this.createModalFooter();
        modalWrapper.appendChild(modalFooter);

        modal.appendChild(modalWrapper);
        anchor.appendChild(modal);
    }

    destory() {
        let e = document.getElementById(this.id);
        while (e.firstChild) {
            e.removeChild(e.firstChild);
        }
    }

    // hide(id) {

    // }

    // bringForward(id) {

    // }

    // element creation
    createModalBase() {
        let modalBase = document.createElement("div");
        modalBase.classList.add("modal");
        modalBase.classList.add("modal-base");

        modalBase.addEventListener('click', e => {
            let classList = e.target.classList;
            let destory = false;
            for (let i = 0; i < classList.length; i++) {
                if (classList[i] === "modal-base") {
                    i = classList.length;
                    destory = true;
                }
            }
            if (destory) {
                this.destory();
            }
        });


        return modalBase;
    }

    createModalHeader() {
        let modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");

        if (this.iconClass.length) {
            let iconEle = document.createElement("i");
            for (let i = 0; i < this.iconClass.length; i++) {
                iconEle.classList.add(this.iconClass[i])
            }
            modalHeader.appendChild(iconEle);
        }

        let headerTitle = document.createElement("h3");
        headerTitle.classList.add("modal-title");
        headerTitle.innerHTML = this.title;
        modalHeader.appendChild(headerTitle);

        return modalHeader;
    }

    createModalBody() {
        let modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");

        let bodyText = document.createElement("p");
        bodyText.classList.add("modal-content");
        bodyText.innerHTML = this.body;
        modalBody.appendChild(bodyText);

        return modalBody;
    }

    createModalFooter() {
        let modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        if (this.stackButton) {
            modalFooter.classList.add("stacked");
        }
        if (this.buttonText.length === 1) {
            let footerText = document.createElement("button");
            footerText.classList.add("btn");
            footerText.classList.add("btn-contained");
            footerText.id = "modal-btn-primary";
            footerText.innerHTML = this.buttonText[0];
            footerText.onclick = () => { this.destory() };
            modalFooter.appendChild(footerText);
        } else {
            let footerText1 = document.createElement("button");
            footerText1.classList.add("btn");
            footerText1.classList.add("btn-contained");
            footerText1.id = "modal-btn-secondary";
            footerText1.innerHTML = this.buttonText[0];
            footerText1.onclick = () => { this.destory() };
            let footerText2 = document.createElement("button");
            footerText2.classList.add("btn");
            footerText2.classList.add("btn-contained");
            footerText2.id = "modal-btn-primary";
            footerText2.innerHTML = this.buttonText[1];
            footerText2.onclick = () => { this.destory() };

            modalFooter.appendChild(footerText1);
            modalFooter.appendChild(footerText2);
        }
        return modalFooter;
    }
}

/*
 *
 * Circular progress bar
 *
 */

class circularProgressBar {
    constructor(options) {
        this.id = options.id;
        this.r = 20; // (exclude border width)
        this.w = 4;
        this.outerRadius = this.r + this.w;
        this.boxWidth = this.outerRadius * 2;
        this.circumference = 2 * Math.PI * this.outerRadius;
    }

    init() {
        this.els = document.getElementById(this.id);
        this.els.classList.add('svg');
        this.els.classList.add('circular-progress');

        let svg = this.createSVG();
        let background = this.createCircle("background");
        let cover = this.createCircle("cover");
        let center = this.createCircle("center");

        svg.appendChild(background);
        svg.appendChild(cover);
        svg.appendChild(center);
        this.els.appendChild(svg);
    }

    createSVG() {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("height", `${this.boxWidth}px`);
        svg.setAttribute("width", `${this.boxWidth}px`);
        return svg;
    }

    createCircle(type) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let r;
        if (type === "center") {
            r = `${this.r}px`;
        } else if (type === "cover") {
            // remove residue border
            r = `${this.r + this.w / 2 + 1}px`;
        } else {
            r = `${this.r + this.w / 2}px`;
        }
        circle.id = `${this.id}_circular-progress-${type}`
        circle.classList.add(`circular-progress-${type}`)
        circle.setAttribute("r", r);
        circle.setAttribute("cx", `${this.outerRadius}px`);
        circle.setAttribute("cy", `${this.outerRadius}px`);
        circle.setAttribute("fill", 'transparent');
        circle.setAttribute("stroke-dasharray", `${this.circumference}px`);
        circle.setAttribute("stroke-dashoffset", '0');
        return circle;
    }

    update(percent) {
        if (percent < 0 || percent > 1) { return }
        let offset = -(this.circumference * percent) + 'px';
        document.getElementById(`${this.id}_circular-progress-cover`).setAttribute('stroke-dashoffset', offset);
    }

    infinite() {
        let offset = -(this.circumference * 0.6) + 'px';
        let cover = document.getElementById(`${this.id}_circular-progress-cover`);
        cover.setAttribute('stroke-dashoffset', offset);
        cover.classList.add('infinite');
    }

    toggleInfinite() {
        let cover = document.getElementById(`${this.id}_circular-progress-cover`);
        let isPaused = false;
        cover.classList.forEach(c => {
            if (c === "paused") {
                isPaused = true;
            };
        });
        if (isPaused) {
            cover.classList.remove("paused");
        } else {
            cover.classList.add("paused");
        }
    }

    reset() {
        let cover = document.getElementById(`${this.id}_circular-progress-cover`);
        cover.classList.remove('paused');
        cover.classList.remove('infinite');
    }
}

textAreaResize = (field) => {
    // Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
    var height = 
        parseInt(computed.getPropertyValue('border-top-width'), 10)
        // + parseInt(computed.getPropertyValue('padding-top'), 10)
        + field.scrollHeight
        // + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10)
        // - 8;

	field.style.height = height + 'px';

}

/*! nouislider - 13.1.5 - 4/24/2019 */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var ut="13.1.5";function ct(t){t.parentElement.removeChild(t)}function s(t){return null!=t}function pt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ft(t,e,r){0<r&&(mt(t,e),setTimeout(function(){gt(t,e)},r))}function dt(t){return Math.max(Math.min(t,100),0)}function ht(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function mt(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function gt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function vt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function c(t,e){return 100/(e-t)}function p(t,e){return 100*e/(t[1]-t[0])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),a=t[o-1],s=t[o],l=e[o-1],u=e[o];return l+(i=r,p(n=[a,s],n[0]<0?i+Math.abs(n[0]):i-n[0])/c(l,u))}function n(t,e,r,n){if(100===n)return n;var i,o,a=f(n,t),s=t[a-1],l=t[a];return r?(l-s)/2<n-s?l:s:e[a-1]?t[a-1]+(i=n-t[a-1],o=e[a-1],Math.round(i/o)*o):n}function o(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+ut+"): 'range' contains invalid value.");if(!i(n="min"===t?0:"max"===t?100:parseFloat(t))||!i(e[0]))throw new Error("noUiSlider ("+ut+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function a(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e)/c(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function l(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)o(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)a(n,this.xNumSteps[n],this)}l.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+ut+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&p(this.xVal,t)},l.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},l.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],a=t[i],s=e[i-1],l=e[i];return n=[o,a],(r-s)*c(s,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},l.prototype.getStep=function(t){return t=n(this.xPct,this.xSteps,this.snap,t)},l.prototype.getDefaultStep=function(t,e,r){var n=f(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},l.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},l.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},l.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var u={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function d(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+ut+"): 'format' requires 'to' and 'from' methods.")}function h(t,e){if(!i(e))throw new Error("noUiSlider ("+ut+"): 'step' is not numeric.");t.singleStep=e}function m(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+ut+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+ut+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+ut+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new l(e,t.snap,t.singleStep)}function g(t,e){if(e=ht(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+ut+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function v(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+ut+"): 'snap' option must be a boolean.")}function b(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+ut+"): 'animate' option must be a boolean.")}function S(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+ut+"): 'animationDuration' option must be a number.")}function x(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+ut+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+ut+"): 'orientation' option is invalid.")}}function y(t,e){if(!i(e))throw new Error("noUiSlider ("+ut+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+ut+"): 'margin' option is only supported on linear sliders.")}function E(t,e){if(!i(e))throw new Error("noUiSlider ("+ut+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+ut+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+ut+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider ("+ut+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){if(Array.isArray(e)||(e=[e,e]),!(t.padding=[t.spectrum.getMargin(e[0]),t.spectrum.getMargin(e[1])])===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider ("+ut+"): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider ("+ut+"): 'padding' option must be a positive number(s).");if(100<t.padding[0]+t.padding[1])throw new Error("noUiSlider ("+ut+"): 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+ut+"): 'direction' option was not recognized.")}}function U(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+ut+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),a=0<=e.indexOf("hover"),s=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+ut+"): 'fixed' behaviour must be used with 2 handles");y(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider ("+ut+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:a,unconstrained:s}}function k(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=ht(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+ut+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+ut+"): 'tooltips' must be passed a formatter or 'false'.")})}}function P(t,e){d(t.ariaFormat=e)}function A(t,e){d(t.format=e)}function V(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+ut+"): 'keyboardSupport' option must be a boolean.")}function M(t,e){t.documentElement=e}function O(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+ut+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function L(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+ut+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function bt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:h},start:{r:!0,t:g},connect:{r:!0,t:x},direction:{r:!0,t:N},snap:{r:!1,t:v},animate:{r:!1,t:b},animationDuration:{r:!1,t:S},range:{r:!0,t:m},orientation:{r:!1,t:w},margin:{r:!1,t:y},limit:{r:!1,t:E},padding:{r:!1,t:C},behaviour:{r:!0,t:U},ariaFormat:{r:!1,t:P},format:{r:!1,t:A},tooltips:{r:!1,t:k},keyboardSupport:{r:!0,t:V},documentElement:{r:!1,t:M},cssPrefix:{r:!0,t:O},cssClasses:{r:!0,t:L}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!s(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+ut+"): '"+t+"' is required.");return!0}n[t].t(r,s(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,a=void 0!==t.style.transform;r.transformRule=a?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function z(t,f,o){var l,u,a,c,i,s,e,p,d=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},h=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),y=t,E=f.spectrum,m=[],g=[],v=[],b=0,S={},x=t.ownerDocument,w=f.documentElement||x.documentElement,C=x.body,N=-1,U=0,k=1,P=2,A="rtl"===x.dir||1===f.ort?0:100;function V(t,e){var r=x.createElement("div");return e&&mt(r,e),t.appendChild(r),r}function M(t,e){var r=V(t,f.cssClasses.origin),n=V(r,f.cssClasses.handle);return V(n,f.cssClasses.touchArea),n.setAttribute("data-handle",e),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(L()||z(e))return!1;var r=["Left","Right"],n=["Down","Up"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&n.reverse();var i=t.key.replace("Arrow",""),o=i===n[0]||i===r[0],a=i===n[1]||i===r[1];if(!o&&!a)return!0;t.preventDefault();var s=o?0:1,l=lt(e)[s];if(null===l)return!1;!1===l&&(l=E.getDefaultStep(g[e],o,10));return l=Math.max(l,1e-7),l*=o?-1:1,at(e,m[e]+l,!0),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?mt(n,f.cssClasses.handleLower):e===f.handles-1&&mt(n,f.cssClasses.handleUpper),r}function O(t,e){return!!e&&V(t,f.cssClasses.connect)}function r(t,e){return!!f.tooltips[e]&&V(t.firstChild,f.cssClasses.tooltip)}function L(){return y.hasAttribute("disabled")}function z(t){return u[t].hasAttribute("disabled")}function j(){i&&(G("update.tooltips"),i.forEach(function(t){t&&ct(t)}),i=null)}function H(){j(),i=u.map(r),$("update.tooltips",function(t,e,r){if(i[e]){var n=t[e];!0!==f.tooltips[e]&&(n=f.tooltips[e].to(r[e])),i[e].innerHTML=n}})}function F(e,i,o){var a=x.createElement("div"),s=[];s[U]=f.cssClasses.valueNormal,s[k]=f.cssClasses.valueLarge,s[P]=f.cssClasses.valueSub;var l=[];l[U]=f.cssClasses.markerNormal,l[k]=f.cssClasses.markerLarge,l[P]=f.cssClasses.markerSub;var u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value,n=r?s:l;return e+" "+(r?u:c)[f.ort]+" "+n[t]}return mt(a,f.cssClasses.pips),mt(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=i?i(e,r):r)!==N){var n=V(a,!1);n.className=p(r,f.cssClasses.marker),n.style[f.style]=t+"%",U<r&&((n=V(a,!1)).className=p(r,f.cssClasses.value),n.setAttribute("data-value",e),n.style[f.style]=t+"%",n.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),a}function D(){c&&(ct(c),c=null)}function T(t){D();var m,g,v,b,e,r,S,x,w,n=t.mode,i=t.density||1,o=t.filter||!1,a=function(t,e,r){if("range"===t||"steps"===t)return E.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+ut+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return E.fromStepping(r?E.getStep(t):t)}):"values"===t?r?e.map(function(t){return E.fromStepping(E.getStep(E.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),s=(m=i,g=n,v=a,b={},e=E.xVal[0],r=E.xVal[E.xVal.length-1],x=S=!1,w=0,(v=v.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(v.unshift(e),S=!0),v[v.length-1]!==r&&(v.push(r),x=!0),v.forEach(function(t,e){var r,n,i,o,a,s,l,u,c,p,f=t,d=v[e+1],h="steps"===g;if(h&&(r=E.xNumSteps[e]),r||(r=d-f),!1!==f&&void 0!==d)for(r=Math.max(r,1e-7),n=f;n<=d;n=(n+r).toFixed(7)/1){for(u=(a=(o=E.toStepping(n))-w)/m,p=a/(c=Math.round(u)),i=1;i<=c;i+=1)b[(s=w+i*p).toFixed(5)]=[E.fromStepping(s),0];l=-1<v.indexOf(n)?k:h?P:U,!e&&S&&(l=0),n===d&&x||(b[o.toFixed(5)]=[n,l]),w=o}}),b),l=t.format||{to:Math.round};return c=y.appendChild(F(s,o,l))}function R(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||l[e]:t.height||l[e]}function B(n,i,o,a){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(s=!0);if(o){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||vt(x),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}(t,a.pageOffset,a.target||i))&&(!(L()&&!a.doNotReject)&&(e=y,r=f.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!a.doNotReject)&&(!(n===d.start&&void 0!==t.buttons&&1<t.buttons)&&((!a.hover||!t.buttons)&&(h||t.preventDefault(),t.calcPoint=t.points[f.ort],void o(t,a))))));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!h&&{passive:!0}),r.push([t,e])}),r}function q(t){var e,r,n,i,o,a,s=100*(t-(e=l,r=f.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,a=vt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),r?n.top+a.y-o.clientTop:n.left+a.x-o.clientLeft))/R();return s=dt(s),f.dir?100-s:s}function X(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function Y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);var r=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function _(t,e){e.handle&&(gt(e.handle,f.cssClasses.active),b-=1),e.listeners.forEach(function(t){w.removeEventListener(t[0],t[1])}),0===b&&(gt(y,f.cssClasses.drag),et(),t.cursor&&(C.style.cursor="",C.removeEventListener("selectstart",pt))),e.handleNumbers.forEach(function(t){J("change",t),J("set",t),J("end",t)})}function I(t,e){if(e.handleNumbers.some(z))return!1;var r;1===e.handleNumbers.length&&(r=u[e.handleNumbers[0]].children[0],b+=1,mt(r,f.cssClasses.active));t.stopPropagation();var n=[],i=B(d.move,w,Y,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:R(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:g.slice()}),o=B(d.end,w,_,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),a=B("mouseout",w,X,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,i.concat(o,a)),t.cursor&&(C.style.cursor=getComputedStyle(t.target).cursor,1<u.length&&mt(y,f.cssClasses.drag),C.addEventListener("selectstart",pt,!1)),e.handleNumbers.forEach(function(t){J("start",t)})}function n(t){t.stopPropagation();var n,i,o,e=q(t.calcPoint),r=(n=e,o=!(i=100),u.forEach(function(t,e){if(!z(e)){var r=Math.abs(g[e]-n);(r<i||100===r&&100===i)&&(o=e,i=r)}}),o);if(!1===r)return!1;f.events.snap||ft(y,f.cssClasses.tap,f.animationDuration),rt(r,e,!0,!0),et(),J("slide",r,!0),J("update",r,!0),J("change",r,!0),J("set",r,!0),f.events.snap&&I(t,{handleNumbers:[r]})}function W(t){var e=q(t.calcPoint),r=E.getStep(e),n=E.fromStepping(r);Object.keys(S).forEach(function(t){"hover"===t.split(".")[0]&&S[t].forEach(function(t){t.call(s,n)})})}function $(t,e){S[t]=S[t]||[],S[t].push(e),"update"===t.split(".")[0]&&u.forEach(function(t,e){J("update",e)})}function G(t){var n=t&&t.split(".")[0],i=n&&t.substring(n.length);Object.keys(S).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||delete S[t]})}function J(r,n,i){Object.keys(S).forEach(function(t){var e=t.split(".")[0];r===e&&S[t].forEach(function(t){t.call(s,m.map(f.format.to),n,m.slice(),i||!1,g.slice())})})}function K(t,e,r,n,i,o){return 1<u.length&&!f.events.unconstrained&&(n&&0<e&&(r=Math.max(r,t[e-1]+f.margin)),i&&e<u.length-1&&(r=Math.min(r,t[e+1]-f.margin))),1<u.length&&f.limit&&(n&&0<e&&(r=Math.min(r,t[e-1]+f.limit)),i&&e<u.length-1&&(r=Math.max(r,t[e+1]-f.limit))),f.padding&&(0===e&&(r=Math.max(r,f.padding[0])),e===u.length-1&&(r=Math.min(r,100-f.padding[1]))),!((r=dt(r=E.getStep(r)))===t[e]&&!o)&&r}function Q(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,n,r,e){var i=r.slice(),o=[!t,t],a=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=K(i,t,i[t]+n,o[e],a[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=a=[!0];var s=!1;e.forEach(function(t,e){s=rt(t,r[t]+n,o[e],a[e])||s}),s&&e.forEach(function(t){J("update",t),J("slide",t)})}function tt(t,e){return f.dir?100-t-e:t}function et(){v.forEach(function(t){var e=50<g[t]?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=r})}function rt(t,e,r,n){return!1!==(e=K(g,t,e,r,n,!1))&&(function(t,e){g[t]=e,m[t]=E.fromStepping(e);var r="translate("+Q(tt(e,0)-A+"%","0")+")";u[t].style[f.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(a[t]){var e=0,r=100;0!==t&&(e=g[t-1]),t!==a.length-1&&(r=g[t]);var n=r-e,i="translate("+Q(tt(e,n)+"%","0")+")",o="scale("+Q(n/100,"1")+")";a[t].style[f.transformRule]=i+" "+o}}function it(t,e){return null===t||!1===t||void 0===t?g[e]:("number"==typeof t&&(t=String(t)),t=f.format.from(t),!1===(t=E.toStepping(t))||isNaN(t)?g[e]:t)}function ot(t,e){var r=ht(t),n=void 0===g[0];e=void 0===e||!!e,f.animate&&!n&&ft(y,f.cssClasses.tap,f.animationDuration),v.forEach(function(t){rt(t,it(r[t],t),!0,!1)}),v.forEach(function(t){rt(t,g[t],!0,!0)}),et(),v.forEach(function(t){J("update",t),null!==r[t]&&e&&J("set",t)})}function at(t,e,r){if(!(0<=(t=Number(t))&&t<v.length))throw new Error("noUiSlider ("+ut+"): invalid handle number, got: "+t);rt(t,it(e,t),!0,!0),J("update",t),r&&J("set",t)}function st(){var t=m.map(f.format.to);return 1===t.length?t[0]:t}function lt(t){var e=g[t],r=E.getNearbySteps(e),n=m[t],i=r.thisStep.step,o=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(o=null);var a=E.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==o&&!1!==o&&(o=Number(o.toFixed(a))),[o,i]}return mt(e=y,f.cssClasses.target),0===f.dir?mt(e,f.cssClasses.ltr):mt(e,f.cssClasses.rtl),0===f.ort?mt(e,f.cssClasses.horizontal):mt(e,f.cssClasses.vertical),l=V(e,f.cssClasses.base),function(t,e){var r=V(e,f.cssClasses.connects);u=[],(a=[]).push(O(r,t[0]));for(var n=0;n<f.handles;n++)u.push(M(e,n)),v[n]=n,a.push(O(r,t[n+1]))}(f.connect,l),(p=f.events).fixed||u.forEach(function(t,e){B(d.start,t.children[0],I,{handleNumbers:[e]})}),p.tap&&B(d.start,l,n,{}),p.hover&&B(d.move,l,W,{hover:!0}),p.drag&&a.forEach(function(t,e){if(!1!==t&&0!==e&&e!==a.length-1){var r=u[e-1],n=u[e],i=[t];mt(t,f.cssClasses.draggable),p.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){B(d.start,t,I,{handles:[r,n],handleNumbers:[e-1,e]})})}}),ot(f.start),f.pips&&T(f.pips),f.tooltips&&H(),$("update",function(t,e,a,r,s){v.forEach(function(t){var e=u[t],r=K(g,t,0,!0,!0,!0),n=K(g,t,100,!0,!0,!0),i=s[t],o=f.ariaFormat.to(a[t]);r=E.fromStepping(r).toFixed(1),n=E.fromStepping(n).toFixed(1),i=E.fromStepping(i).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",o)})}),s={destroy:function(){for(var t in f.cssClasses)f.cssClasses.hasOwnProperty(t)&&gt(y,f.cssClasses[t]);for(;y.firstChild;)y.removeChild(y.firstChild);delete y.noUiSlider},steps:function(){return v.map(lt)},on:$,off:G,get:st,set:ot,setHandle:at,reset:function(t){ot(f.start,t)},__moveHandles:function(t,e,r){Z(t,e,g,r)},options:o,updateOptions:function(e,t){var r=st(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=bt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),E=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):D(),f.tooltips?H():j(),g=[],ot(e.start||r,t)},target:y,removePips:D,removeTooltips:j,pips:T}}return{__spectrum:l,version:ut,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+ut+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+ut+"): Slider was already initialized.");var r=z(t,bt(e),e);return t.noUiSlider=r}}});