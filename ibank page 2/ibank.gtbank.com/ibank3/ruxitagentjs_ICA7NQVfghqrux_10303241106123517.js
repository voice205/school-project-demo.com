/*
 Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/ */
(function() {
    function Ka() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var Ta = document.cookie.includes("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return Ta
    }

    function bb() {
        return void 0 === eb.dialogArguments ? navigator.cookieEnabled || Ka() : Ka()
    }

    function kb() {
        var Ta;
        if (bb()) {
            var Sa = eb.dT_,
                Xa = null === Sa || void 0 === Sa ? void 0 : Sa.platformPrefix,
                Ua;
            if (Ua = !Sa || Xa) {
                var Pa;
                (Ua = null === Sa || void 0 === Sa ? void 0 : Sa.minAgentVersion) &&
                "10303241106123517" < "".concat(Ua) ? (console.log("[CookiePrefix/initConfig] Min agent version detected, and javascript agent is older - the javascript agent will not be initialized!"), Ua = !1) : (Ua = (null === (Pa = document.currentScript) || void 0 === Pa ? void 0 : Pa.getAttribute("data-dtconfig")) || "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#", Xa && !Ua.includes("cuc=".concat(Xa)) ? (console.log("[CookiePrefix/initConfig] value of platformPrefix [".concat(Xa, '] does not match the "cuc" value in the current config - initConfig will not initialize!')),
                    Ua = !1) : Ua = !0)
            }
            Ua && (Pa = (Ta = {}, Ta.cfg = "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#", Ta.iCE = bb, Ta.platformCookieOffset = null === Sa || void 0 === Sa ? void 0 : Sa.platformCookieOffset, Ta), Xa && (Pa.platformPrefix = Xa), eb.dT_ = Pa)
        }
    }
    this.dT_ && dT_.prm && dT_.prm();
    var eb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0;
    if (!("documentMode" in document) || isNaN(document.documentMode)) {
        var cb = eb.dT_;
        !cb || !cb.cfg && cb.platformPrefix ? kb() : cb.gCP ||
            (eb.console.log("Duplicate agent injection detected, turning off redundant initConfig."), cb.di = 1)
    }
})();
(function() {
    function Ka(g, q, F) {
        if (F || 2 === arguments.length)
            for (var C = 0, Y = q.length, O; C < Y; C++) !O && C in q || (O || (O = Array.prototype.slice.call(q, 0, C)), O[C] = q[C]);
        return g.concat(O || Array.prototype.slice.call(q))
    }

    function bb(g) {
        var q;
        return function() {
            if (q) return q;
            var F, C, Y, O, nb = -1 !== Xe ? Xe : (null === (C = null === (F = Wa.dT_) || void 0 === F ? void 0 : F.scv) || void 0 === C ? void 0 : C.call(F, "postfix")) || (null === (O = null === (Y = Wa.dT_) || void 0 === Y ? void 0 : Y.gCP) || void 0 === O ? void 0 : O.call(Y));
            return q = F = (Xe = nb) ? "".concat(g).concat(nb) :
                g
        }
    }

    function kb() {
        var g = 0;
        try {
            g = Math.round(Wa.performance.timeOrigin)
        } catch (q) {}
        if (0 >= g || isNaN(g) || !isFinite(g)) {
            ye.push({
                severity: "Warning",
                type: "ptoi",
                text: "performance.timeOrigin is invalid, with a value of [".concat(g, "]. Falling back to performance.timing.navigationStart")
            });
            g = 0;
            try {
                g = Wa.performance.timing.navigationStart
            } catch (q) {}
            g = 0 >= g || isNaN(g) || !isFinite(g) ? Lf : g
        }
        u = g;
        t = eb;
        return u
    }

    function eb() {
        return u
    }

    function cb() {
        return t()
    }

    function Ta() {
        var g, q = 0;
        if (null === (g = null === Wa || void 0 === Wa ? void 0 :
                Wa.performance) || void 0 === g ? 0 : g.now) try {
            q = Math.round(Wa.performance.now())
        } catch (F) {}
        return 0 >= q || isNaN(q) || !isFinite(q) ? (new Date).getTime() - t() : q
    }

    function Sa(g, q) {
        if (!q) return "";
        var F = g + "=";
        g = q.indexOf(F);
        if (0 > g) return "";
        for (; 0 <= g;) {
            if (0 === g || " " === q.charAt(g - 1) || ";" === q.charAt(g - 1)) return F = g + F.length, g = q.indexOf(";", g), 0 <= g ? q.substring(F, g) : q.substring(F);
            g = q.indexOf(F, g + F.length)
        }
        return ""
    }

    function Xa(g) {
        return Sa(g, document.cookie)
    }

    function Ua() {}

    function Pa(g, q) {
        void 0 === q && (q = document.cookie);
        return Sa(g, q)
    }

    function Za() {}

    function rb(g, q) {
        return function() {
            g.apply(q, arguments)
        }
    }

    function qa(g) {
        if (!(this instanceof qa)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof g) throw new TypeError("not a function");
        this.oa = 0;
        this.sc = !1;
        this.sa = void 0;
        this.Ia = [];
        S(g, this)
    }

    function ta(g, q) {
        for (; 3 === g.oa;) g = g.sa;
        0 === g.oa ? g.Ia.push(q) : (g.sc = !0, qa.Hb(function() {
            var F = 1 === g.oa ? q.Re : q.Se;
            if (null === F)(1 === g.oa ? Ha : Da)(q.promise, g.sa);
            else {
                try {
                    var C = F(g.sa)
                } catch (Y) {
                    Da(q.promise,
                        Y);
                    return
                }
                Ha(q.promise, C)
            }
        }))
    }

    function Ha(g, q) {
        try {
            if (q === g) throw new TypeError("A promise cannot be resolved with itself.");
            if (q && ("object" === typeof q || "function" === typeof q)) {
                var F = q.then;
                if (q instanceof qa) {
                    g.oa = 3;
                    g.sa = q;
                    Ea(g);
                    return
                }
                if ("function" === typeof F) {
                    S(rb(F, q), g);
                    return
                }
            }
            g.oa = 1;
            g.sa = q;
            Ea(g)
        } catch (C) {
            Da(g, C)
        }
    }

    function Da(g, q) {
        g.oa = 2;
        g.sa = q;
        Ea(g)
    }

    function Ea(g) {
        2 === g.oa && 0 === g.Ia.length && qa.Hb(function() {
            g.sc || qa.wc(g.sa)
        });
        for (var q = 0, F = g.Ia.length; q < F; q++) ta(g, g.Ia[q]);
        g.Ia = null
    }

    function U(g,
        q, F) {
        this.Re = "function" === typeof g ? g : null;
        this.Se = "function" === typeof q ? q : null;
        this.promise = F
    }

    function S(g, q) {
        var F = !1;
        try {
            g(function(C) {
                F || (F = !0, Ha(q, C))
            }, function(C) {
                F || (F = !0, Da(q, C))
            })
        } catch (C) {
            F || (F = !0, Da(q, C))
        }
    }

    function sa() {
        R.Hb = function(g) {
            if ("string" === typeof g) throw Error("Promise polyfill called _immediateFn with string");
            g()
        };
        R.wc = function() {};
        return R
    }

    function ma(g, q) {
        var F;
        void 0 === q && (q = []);
        if (!g || "object" !== typeof g && "function" !== typeof g) return !1;
        var C = "number" !== typeof q ? q : [],
            Y = null,
            O = [];
        switch ("number" === typeof q ? q : 5) {
            case 1:
                Y = "Boolean";
                break;
            case 2:
                Y = "Number";
                break;
            case 3:
                Y = "String";
                break;
            case 4:
                Y = "Function";
                break;
            case 5:
                Y = "Object";
                break;
            case 6:
                Y = "Date";
                O.push("getTime");
                break;
            case 7:
                Y = "Error";
                O.push("name", "message");
                break;
            case 8:
                Y = "Element";
                break;
            case 9:
                Y = "HTMLElement";
                break;
            case 10:
                Y = "HTMLImageElement";
                O.push("complete");
                break;
            case 11:
                Y = "PerformanceEntry";
                break;
            case 12:
                Y = "PerformanceTiming";
                break;
            case 13:
                Y = "PerformanceResourceTiming";
                break;
            case 14:
                Y = "PerformanceNavigationTiming";
                break;
            case 15:
                Y = "CSSRule";
                O.push("cssText", "parentStyleSheet");
                break;
            case 16:
                Y = "CSSStyleSheet";
                O.push("cssRules", "insertRule");
                break;
            case 17:
                Y = "Request";
                O.push("url");
                break;
            case 18:
                Y = "Response";
                O.push("ok", "status", "statusText");
                break;
            case 19:
                Y = "Set";
                O.push("add", "entries", "forEach");
                break;
            case 20:
                Y = "Map";
                O.push("set", "entries", "forEach");
                break;
            case 21:
                Y = "Worker";
                O.push("addEventListener", "postMessage", "terminate");
                break;
            case 22:
                Y = "XMLHttpRequest";
                O.push("open", "send", "setRequestHeader");
                break;
            case 23:
                Y =
                    "SVGScriptElement";
                O.push("ownerSVGElement", "type");
                break;
            case 24:
                Y = "HTMLMetaElement";
                O.push("httpEquiv", "content", "name");
                break;
            case 25:
                Y = "HTMLHeadElement";
                break;
            case 26:
                Y = "ArrayBuffer";
                break;
            case 27:
                Y = "ShadowRoot", O.push("host", "mode")
        }
        q = Y;
        if (!q) return !1;
        O = O.length ? O : C;
        if (!C.length) try {
            if (Wa[q] && g instanceof Wa[q] || Object.prototype.toString.call(g) === "[object " + q + "]") return !0;
            if (g && g.nodeType && 1 === g.nodeType) {
                var nb = null === (F = g.ownerDocument.defaultView) || void 0 === F ? void 0 : F[q];
                if ("function" ===
                    typeof nb && g instanceof nb) return !0
            }
        } catch (Ub) {}
        for (F = 0; F < O.length; F++)
            if (C = O[F], "string" !== typeof C && "number" !== typeof C && "symbol" !== typeof C || !(C in g)) return !1;
        return !!O.length
    }

    function ea(g, q, F, C) {
        "undefined" === typeof C && (C = Na(q, !0));
        "boolean" === typeof C && (C = Na(q, C));
        g === Wa ? La && La(q, F, C) : Bb && ma(g, 21) ? Zb.call(g, q, F, C) : g.addEventListener && (g === Wa.document || g === Wa.document.documentElement ? ib.call(g, q, F, C) : La.call(g, q, F, C));
        C = !1;
        for (var Y = lc.length; 0 <= --Y;) {
            var O = lc[Y];
            if (O.object === g && O.event ===
                q && O.I === F) {
                C = !0;
                break
            }
        }
        C || lc.push({
            object: g,
            event: q,
            I: F
        })
    }

    function Ga(g, q, F, C) {
        for (var Y = lc.length; 0 <= --Y;) {
            var O = lc[Y];
            if (O.object === g && O.event === q && O.I === F) {
                lc.splice(Y, 1);
                break
            }
        }
        "undefined" === typeof C && (C = Na(q, !0));
        "boolean" === typeof C && (C = Na(q, C));
        g === Wa ? ob && ob(q, F, C) : g.removeEventListener && (g === Wa.document || g === Wa.document.documentElement ? Ab.call(g, q, F, C) : ob.call(g, q, F, C))
    }

    function Na(g, q) {
        var F = !1;
        try {
            if (La && Lc.includes(g)) {
                var C = Object.defineProperty({}, "passive", {
                    get: function() {
                        F = !0
                    }
                });
                La("test",
                    Ua, C)
            }
        } catch (Y) {}
        return F ? {
            passive: !0,
            capture: q
        } : q
    }

    function pa() {
        for (var g = lc, q = g.length; 0 <= --q;) {
            var F = g[q];
            Ga(F.object, F.event, F.I)
        }
        lc = []
    }

    function oa(g) {
        return "function" === typeof g && /{\s+\[native code]/.test(Function.prototype.toString.call(g))
    }

    function Q(g, q) {
        for (var F, C = [], Y = 2; Y < arguments.length; Y++) C[Y - 2] = arguments[Y];
        return void 0 !== Function.prototype.bind && oa(Function.prototype.bind) ? (F = Function.prototype.bind).call.apply(F, Ka([g, q], C, !1)) : function() {
            for (var O = 0; O < arguments.length; O++);
            return g.apply(q,
                (C || []).concat(Array.prototype.slice.call(arguments) || []))
        }
    }

    function ba() {
        if (Oc) {
            var g = new Oc;
            if (Vc)
                for (var q = 0, F = sc; q < F.length; q++) {
                    var C = F[q];
                    void 0 !== Vc[C] && (g[C] = Q(Vc[C], g))
                }
            return g
        }
        return new Wa.XMLHttpRequest
    }

    function E() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var g = document.cookie.includes("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return g
    }

    function P() {
        return void 0 === Wa.dialogArguments ?
            navigator.cookieEnabled || E() : E()
    }

    function aa() {
        return Wa.dT_
    }

    function la(g) {
        g = encodeURIComponent(g);
        var q = [];
        if (g)
            for (var F = 0; F < g.length; F++) {
                var C = g.charAt(F);
                q.push($f[C] || C)
            }
        return q.join("")
    }

    function ha(g) {
        g.includes("^") && (g = g.split("^^").join("^"), g = g.split("^dq").join('"'), g = g.split("^rb").join(">"), g = g.split("^lb").join("<"), g = g.split("^p").join("|"), g = g.split("^e").join("="), g = g.split("^s").join(";"), g = g.split("^c").join(","), g = g.split("^bs").join("\\"));
        return g
    }

    function W() {
        return qd
    }

    function wa(g) {
        qd =
            g
    }

    function Ra(g) {
        var q = H("rid"),
            F = H("rpid");
        q && (g.rid = q);
        F && (g.rpid = F)
    }

    function gb(g) {
        if (g = g.xb) {
            g = ha(g);
            try {
                qd = new RegExp(g, "i")
            } catch (q) {}
        } else qd = void 0
    }

    function pb(g) {
        return "n" === g || "s" === g || "l" === g ? ";SameSite=".concat($d[g]) : ""
    }

    function Vb(g, q, F) {
        var C = 1,
            Y = 0;
        do document.cookie = g + '=""' + (q ? ";domain=" + q : "") + ";path=" + F.substring(0, C) + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;", C = F.indexOf("/", C), Y++; while (-1 !== C && 5 > Y)
    }

    function na() {
        var g = (document.domain || location.hostname || "").split(".");
        return 1 >=
            g.length ? [] : g
    }

    function Db(g, q) {
        q = "dTValidationCookieValue;path=/;domain=".concat(g).concat(pb(q));
        document.cookie = "".concat(ag(), "=").concat(q);
        return Pa(ag()) ? (Vb(ag(), g, "/"), !0) : !1
    }

    function zc(g) {
        B("eao") ? ze = g : Wa.console.log("".concat(rd, " App override configuration is not enabled! The provided app config callback method will not be invoked!"))
    }

    function Ec() {
        if (Wa.MobileAgent || Wa.dynatraceMobile) {
            var g = Xa("dtAdkSettings");
            return xb(g).privacyState || null
        }
        return null
    }

    function hb(g, q) {
        return !Qb() ||
            aa().overloadPrevention && !da() ? null : g.apply(this, q)
    }

    function Qb() {
        var g = Ec();
        return 2 === g || 1 === g ? !1 : !B("coo") || B("cooO") || da()
    }

    function qc(g, q) {
        try {
            Wa.sessionStorage.setItem(g, q)
        } catch (F) {}
    }

    function Hb(g, q) {
        hb(qc, [g, q])
    }

    function vc(g) {
        try {
            return Wa.sessionStorage.getItem(g)
        } catch (q) {}
        return null
    }

    function ec(g) {
        try {
            Wa.sessionStorage.removeItem(g)
        } catch (q) {}
    }

    function cc(g) {
        document.cookie = g + '="";path=/' + (H("domain") ? ";domain=" + H("domain") : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }

    function Pb(g,
        q, F, C) {
        q || 0 === q ? (q = (q + "").replace(/[;\n\r]/g, "_"), g = g + "=" + q + ";path=/" + (H("domain") ? ";domain=" + H("domain") : ""), F && (g += ";expires=" + F.toUTCString()), g += pb(H("cssm")), C && "https:" === location.protocol && (g += ";Secure"), document.cookie = g) : cc(g)
    }

    function Lb(g, q, F, C) {
        hb(Pb, [g, q, F, C])
    }

    function Ob(g) {
        return g.includes("v_4") ? !0 : !1
    }

    function dc(g) {
        g = Pa(Uc(), g);
        g || ((g = vc(Uc())) && Ob(g) ? Fb(g) : g = "");
        return Ob(g) ? g : ""
    }

    function Fb(g) {
        Lb(Uc(), g, void 0, B("ssc"))
    }

    function G(g) {
        return (g = g || dc()) ? xb(g) : {
            sessionId: "",
            serverId: "",
            overloadState: 0,
            appState: {}
        }
    }

    function fa(g) {
        return G(g).serverId
    }

    function Ca(g) {
        return G(g).sessionId
    }

    function da() {
        return navigator.userAgent.includes("RuxitSynthetic")
    }

    function yb(g) {
        var q = {},
            F = 0;
        for (g = g.split("|"); F < g.length; F++) {
            var C = g[F].split("=");
            2 === C.length && (q[C[0]] = decodeURIComponent(C[1].replace(/\+/g, " ")))
        }
        return q
    }

    function tb() {
        var g = H("csu");
        return (g.indexOf("dbg") === g.length - 3 ? g.substring(0, g.length - 3) : g) + "_" + H("app") + "_Store"
    }

    function Ya(g, q, F) {
        void 0 === q && (q = {});
        var C = 0;
        for (g =
            g.split("|"); C < g.length; C++) {
            var Y = g[C],
                O = Y,
                nb = Y.indexOf("="); - 1 === nb ? q[O] = "1" : (O = Y.substring(0, nb), q[O] = Y.substring(nb + 1, Y.length))
        }!F && (F = q, C = F.spc) && (g = document.createElement("textarea"), g.innerHTML = C, F.spc = g.value);
        return q
    }

    function w(g) {
        var q;
        return null !== (q = hc[g]) && void 0 !== q ? q : Hd[g]
    }

    function B(g) {
        g = w(g);
        return "false" === g || "0" === g ? !1 : !!g
    }

    function K(g) {
        var q = w(g);
        q = parseInt(q);
        isNaN(q) && (q = Hd[g]);
        return q
    }

    function H(g) {
        if ("app" === g) {
            a: {
                try {
                    if (ze) {
                        var q = ze();
                        if (q && "string" === typeof q && gd.test(q)) {
                            var F =
                                q;
                            break a
                        }
                        Wa.console.log("".concat(rd, " Registered app config callback method did not return a string in the correct app id format ").concat(gd) + " The default app ID will be used instead! Got value: ".concat(q))
                    }
                } catch (C) {
                    Wa.console.log("".concat(rd, " Failed to execute the registered app config callback method! The default app ID will be used instead!"), C)
                }
                F = void 0
            }
            if (F) return F
        }
        return (w(g) || "") + ""
    }

    function V(g, q) {
        hc[g] = q + ""
    }

    function I(g) {
        return hc = g
    }

    function Ma(g) {
        var q = hc[g];
        q && (hc[g] = q.includes("#" +
            g.toUpperCase()) ? "" : q)
    }

    function ia(g) {
        var q = g.agentUri;
        (null === q || void 0 === q ? 0 : q.includes("_")) && (q = /([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(q)) && q.length && 2 < q.length && (g.csu = q[1], g.featureHash = q[2])
    }

    function Ia(g) {
        var q = aa().platformCookieOffset;
        if ("number" === typeof q) {
            a: {
                var F = H("cssm");
                var C = na();
                if (C.length)
                    for (q = C.slice(q); q.length;) {
                        if (Db(q.join("."), F)) {
                            F = q.join(".");
                            break a
                        }
                        q.shift()
                    }
                F = ""
            }
            F && (g.domain = F)
        }
        else if (F = g.domain || "", q = (q = location.hostname) && F ? q === F || q.includes("." + F,
                q.length - ("." + F).length) : !0, !F || !q) {
            g.domainOverride || (g.domainOriginal = g.domain || "", g.domainOverride = "".concat(location.hostname, ",").concat(F), delete g.domain);
            a: {
                C = H("cssm");
                var Y = na().reverse();
                if (Y.length)
                    for (var O = Y[0], nb = 1; nb <= Y.length; nb++) {
                        if (Db(O, C)) {
                            C = O;
                            break a
                        }
                        var Ub = Y[nb];
                        Ub && (O = "".concat(Ub, ".").concat(O))
                    }
                C = ""
            }
            C && (g.domain = C);
            q || ye.push({
                type: "dpi",
                severity: "Warning",
                text: 'Configured domain "'.concat(F, '" is invalid for current location "').concat(location.hostname, '". Agent will use "').concat(g.domain,
                    '" instead.')
            })
        }
    }

    function Aa(g, q) {
        Ia(g);
        var F = hc.pVO;
        F && (g.pVO = F);
        q || (g.bp = (g.bp || Hd.bp) + "")
    }

    function vb(g, q) {
        if (null === g || void 0 === g || !g.attributes) return q;
        var F = q,
            C = g.attributes.getNamedItem("data-dtconfig");
        if (!C) return F;
        g = g.src;
        var Y = C.value;
        C = {};
        hc.legacy = "1";
        var O = /([a-zA-Z]*)_([a-zA-Z_0-9]*)_([0-9]+)/g;
        if (g) {
            var nb = O.exec(g);
            if (null === nb || void 0 === nb ? 0 : nb.length) C.csu = nb[1], C.featureHash = nb[2], C.agentLocation = g.substring(0, g.indexOf(nb[1]) - 1), C.buildNumber = nb[3]
        }
        Y && (Ya(Y, C, !0), Y = C.agentUri, !g && Y && (nb = O.exec(Y), null === nb || void 0 === nb ? 0 : nb.length)) && (C.csu = nb[1]);
        Ia(C);
        if (!q) F = C;
        else if (!C.syntheticConfig) return C;
        return F
    }

    function ub() {
        return hc
    }

    function mb(g) {
        return Hd[g] === w(g)
    }

    function xb(g) {
        var q, F = {},
            C = {
                sessionId: "",
                serverId: "",
                overloadState: 0,
                appState: F
            },
            Y = g.split("_");
        if (2 < Y.length && 0 === Y.length % 2) {
            g = +Y[1];
            if (isNaN(g) || 3 > g) return C;
            g = {};
            for (var O = 2; O < Y.length; O++) {
                var nb = Y[O];
                nb.startsWith(Ee) ? F[nb.substring(6).toLowerCase()] = +Y[O + 1] : g[nb] = Y[O + 1];
                O++
            }
            g.sn ? (Y = g.sn, Y = Y.length ===
                dd || 12 >= Y.length ? Y : "") : Y = "hybrid";
            C.sessionId = Y;
            if (g.srv) {
                a: {
                    Y = g.srv.replace("-2D", "-");
                    if (!isNaN(+Y) && (O = parseInt(Y), -99 <= O && 99 >= O)) break a;Y = ""
                }
                C.serverId = Y
            }
            Y = +g.ol;
            1 === Y && Mb(da());
            0 <= Y && 2 >= Y && (C.overloadState = Y);
            g = +g.prv;
            isNaN(g) || (C.privacyState = 1 > g || 4 < g ? 1 : g);
            g = null === (q = H("app")) || void 0 === q ? void 0 : q.toLowerCase();
            q = F[g];
            isNaN(q) || 0 !== q || Mb(da())
        }
        return C
    }

    function Mb(g) {
        var q = aa();
        g || (q.disabled = !0, q.overloadPrevention = !0)
    }

    function sb() {
        return Ac()
    }

    function Rb(g, q) {
        function F() {
            delete pe[O];
            g.apply(this, arguments)
        }
        for (var C = [], Y = 2; Y < arguments.length; Y++) C[Y - 2] = arguments[Y];
        if ("apply" in Mf) {
            C.unshift(F, q);
            var O = Mf.apply(Wa, C)
        } else O = Mf(F, q);
        pe[O] = !0;
        return O
    }

    function mc(g) {
        delete pe[g];
        "apply" in qe ? qe.call(Wa, g) : qe(g)
    }

    function Hc(g) {
        ee.push(g)
    }

    function fe(g) {
        for (var q = ee.length; q--;)
            if (ee[q] === g) {
                ee.splice(q, 1);
                break
            }
    }

    function Fc() {
        return ee
    }

    function Jc(g, q) {
        return dh(g, q)
    }

    function Ic(g) {
        bg(g)
    }

    function yd(g, q) {
        if (!cg || !eh) return "";
        g = new cg([g], {
            type: q
        });
        return eh(g)
    }

    function ge(g, q) {
        return ef ?
            new ef(g, q) : void 0
    }

    function sd(g) {
        "function" === typeof g && dg.push(g)
    }

    function M() {
        return dg
    }

    function D() {
        return Lf
    }

    function ua(g) {
        return function() {
            for (var q = [], F = 0; F < arguments.length; F++) q[F] = arguments[F];
            if ("number" !== typeof q[0] || !pe[q[0]]) try {
                return g.apply(this, q)
            } catch (C) {
                return g(q[0])
            }
        }
    }

    function Ba() {
        return ye
    }

    function ya() {
        t = kb;
        Wa.performance && (Ac = function() {
            return Math.round(t() + Ta())
        });
        if (!Ac || isNaN(Ac()) || 0 >= Ac() || !isFinite(Ac())) Ac = function() {
            return (new Date).getTime()
        }
    }

    function Fa() {
        Fe &&
            (Wa.clearTimeout = qe, Wa.clearInterval = bg, Fe = !1)
    }

    function xa(g, q) {
        try {
            Wa.localStorage.setItem(g, q)
        } catch (F) {}
    }

    function Ja(g) {
        try {
            Wa.localStorage.removeItem(g)
        } catch (q) {}
    }

    function lb(g) {
        try {
            return Wa.localStorage.getItem(g)
        } catch (q) {}
        return null
    }

    function Qa(g, q) {
        void 0 === q && (q = !1);
        Qb() ? g() : q ? Wd.push(g) : Kd.push(g)
    }

    function jb() {
        if (!B("coo") || Qb()) return !1;
        for (var g = 0, q = Kd; g < q.length; g++) Rb(q[g], 0);
        Kd = [];
        V("cooO", !0);
        g = 0;
        for (q = Wd; g < q.length; g++)(0, q[g])();
        Wd.length = 0;
        return !0
    }

    function ic() {
        if (!B("coo") ||
            !Qb()) return !1;
        V("cooO", !1);
        cc(Uc());
        cc(tf());
        cc(Jh());
        cc("dtAdk");
        cc(ad());
        cc(hd());
        try {
            ec(Zc()), ec(hd()), Ja(Zc()), Ja(hd()), ec(ad()), ec(Uc()), Ja(tb()), Ja("dtAdk")
        } catch (g) {}
        return !0
    }

    function Kb(g, q) {
        void 0 === q && (q = document.cookie || "");
        return q.split(g + "=").length - 1
    }

    function Jb(g, q) {
        var F = Kb(g, q);
        if (1 < F) {
            q = H("domain") || Wa.location.hostname;
            var C = Wa.location.hostname,
                Y = Wa.location.pathname,
                O = 0,
                nb = 0;
            zd.add(g);
            do {
                var Ub = C.substring(O);
                if (Ub !== q || "/" !== Y) {
                    Vb(g, Ub === q ? "" : Ub, Y);
                    var fc = Kb(g);
                    fc < F && (zd.add(Ub),
                        F = fc)
                }
                O = C.indexOf(".", O) + 1;
                nb++
            } while (0 !== O && 10 > nb && 1 < F);
            H("domain") && 1 < F && Vb(g, "", Y)
        }
    }

    function kc() {
        var g = document.cookie;
        Jb(tf(), g);
        Jb(Uc(), g);
        Jb(hd(), g);
        g = zd.size;
        0 < g && g !== Ld && (Ld = g, ye.push({
            severity: "Error",
            type: "dcn",
            text: "Duplicate cookie name".concat(1 !== g ? "s" : "", " detected: ").concat(Array.from(zd).join(","))
        }))
    }

    function Mc() {
        zd = new Set;
        kc();
        Hc(function(g, q, F, C) {
            0 === zd.size || q || (g.av(C, "dCN", Array.from(zd).join(",")), zd.clear(), Ld = 0)
        })
    }

    function td() {
        return navigator.userAgent.includes("Googlebot") ||
            navigator.userAgent.includes("AdsBot-Google")
    }

    function Ad(g) {
        var q = g,
            F = Math.pow(2, 32);
        return function() {
            q = (1664525 * q + 1013904223) % F;
            return q / F
        }
    }

    function Bd(g, q) {
        return isNaN(g) || isNaN(q) ? Math.floor(33 * he()) : Math.floor(he() * (q - g + 1)) + g
    }

    function nd(g) {
        if (isNaN(g) || 0 > g) return "";
        var q = Wa.crypto;
        if (q && !td()) q = q.getRandomValues(new Uint8Array(g));
        else {
            q = [];
            for (var F = 0; F < g; F++) q.push(Bd(0, 32))
        }
        g = Array(g);
        for (F = 0; F < q.length; F++) {
            var C = Math.abs(q[F] % 32);
            g.push(String.fromCharCode(C + (9 >= C ? 48 : 55)))
        }
        return g.join("")
    }

    function Id() {
        return Md
    }

    function Sd(g) {
        void 0 === g && (g = !0);
        zg = g
    }

    function id() {
        var g = Wa.dT_;
        try {
            for (var q = Wa.parent; q && q !== Wa;) {
                var F = q.dT_,
                    C;
                if (C = !!(F && "ea" in F) && "10303241106123517" === F.version) {
                    var Y = g,
                        O = F,
                        nb = !Y.bcv("ac") || Y.scv("app") === O.scv("app"),
                        Ub = Y.scv("postfix"),
                        fc = O.scv("postfix");
                    C = nb && Ub === fc
                }
                if (C) return F.tdto();
                q = q !== q.parent ? q.parent : void 0
            }
        } catch (Nc) {}
        return g
    }

    function Pc(g, q, F) {
        var C = K("pcl");
        C = g.length - C;
        0 < C && g.splice(0, C);
        C = fa(Pa(Uc(), F));
        for (var Y = [], O = C ? "".concat(C, "$") : "", nb =
                0; nb < g.length; nb++) {
            var Ub = g[nb];
            "-" !== Ub.D && Y.push("".concat(O).concat(Ub.frameId, "h").concat(Ub.D))
        }
        g = Y.join("p");
        g || (zg && (wc(!0, "a", F), Sd(!1)), g += "".concat(C, "$").concat(Md, "h-"));
        g += "v".concat(q || Rc(F));
        q = g + "e0";
        Lb(tf(), q, void 0, B("ssc"))
    }

    function Cd(g, q) {
        void 0 === q && (q = document.cookie);
        var F = Pa(tf(), q);
        q = [];
        if (F && "-" !== F) {
            var C = "";
            var Y = 0;
            for (F = F.split("p"); Y < F.length; Y++) {
                var O = F[Y],
                    nb = C;
                void 0 === nb && (nb = "");
                var Ub = O.indexOf("h");
                var fc = O.indexOf("v"),
                    Nc = O.indexOf("e");
                C = O.substring(O.indexOf("$") +
                    1, Ub);
                Ub = -1 !== fc ? O.substring(Ub + 1, fc) : O.substring(Ub + 1);
                nb || -1 === fc || (nb = -1 !== Nc ? O.substring(fc + 1, Nc) : O.substring(fc + 1));
                O = null;
                (fc = g) || (fc = parseInt(C.split("_")[0]), Nc = Ac() % ff, Nc < fc && (Nc += ff), fc = fc + 9E5 > Nc);
                fc && (O = {
                    frameId: C,
                    D: "-" === Ub ? "-" : parseInt(Ub),
                    visitId: ""
                });
                C = nb;
                (Ub = O) && q.push(Ub)
            }
            for (g = 0; g < q.length; g++) q[g].visitId = C
        }
        return q
    }

    function Wc(g, q) {
        var F = document.cookie;
        q = Cd(q, F);
        for (var C = !1, Y = 0; Y < q.length; Y++) {
            var O = q[Y];
            O.frameId === Md && (O.D = g, C = !0)
        }
        C || q.push({
            frameId: Md,
            D: g,
            visitId: ""
        });
        Pc(q,
            void 0, F)
    }

    function ae() {
        return Ye
    }

    function Rc(g) {
        return ie(g) || wc(!0, "c", g)
    }

    function ie(g) {
        if (L(g) <= Ac()) return wc(!0, "t", g);
        var q = jd(g);
        if (!q) return wc(!0, "c", g);
        var F = pi.exec(q);
        if (!F || 3 !== F.length || 32 !== F[1].length || isNaN(parseInt(F[2]))) return wc(!0, "i", g);
        Hb(Zc(), q);
        return q
    }

    function od(g, q) {
        var F = Ac();
        q = J(q).Pc;
        g && (q = F);
        n(F + uf + "|" + q);
        kd()
    }

    function Dd(g) {
        var q = "t" + (Ac() - L(g));
        wc(!0, q, g)
    }

    function jd(g) {
        var q, F;
        return null !== (F = null === (q = Cd(!0, g)[0]) || void 0 === q ? void 0 : q.visitId) && void 0 !== F ? F :
            vc(Zc())
    }

    function Nd() {
        var g = nd(dd);
        try {
            g = g.replace(/[0-9]/g, function(q) {
                return String.fromCharCode(Math.floor(2.5 * parseInt(q) + 65))
            })
        } catch (q) {
            throw ma(q, 7), q;
        }
        return g + "-0"
    }

    function Ed(g, q) {
        var F = Cd(!1, q);
        Pc(F, g, q);
        Hb(Zc(), g);
        od(!0)
    }

    function ud(g, q, F) {
        return wc(g, q, F)
    }

    function wc(g, q, F) {
        g && (gf = !0);
        g = jd(F);
        F = Nd();
        Ed(F);
        if (jd(document.cookie))
            for (var C = 0, Y = fh; C < Y.length; C++)(0, Y[C])(F, gf, q, g);
        return F
    }

    function Jd(g) {
        fh.push(g)
    }

    function kd(g) {
        Ge && mc(Ge);
        Ge = Rb(Sc, L(g) - Ac())
    }

    function Sc() {
        var g = document.cookie;
        if (L(g) <= Ac()) return hb(Dd, [g]), !0;
        Qa(kd);
        return !1
    }

    function n(g) {
        var q = Q(Lb, null, hd(), g, void 0, B("ssc"));
        q();
        var F = Pa(hd());
        "" !== F && g !== F && (kc(), q(), g === Pa(hd()) || gh || (ye.push({
            severity: "Error",
            type: "dcn",
            text: "Could not sanitize cookies"
        }), gh = !0));
        Hb(hd(), g)
    }

    function v(g, q) {
        (q = Pa(g, q)) || (q = vc(g) || "");
        return q
    }

    function y() {
        var g = ie() || "";
        Hb(Zc(), g);
        g = v(hd());
        n(g);
        Ja(Zc());
        Ja(hd())
    }

    function J(g) {
        var q = {
            Xd: 0,
            Pc: 0
        };
        if (g = v(hd(), g)) try {
            var F = g.split("|");
            2 === F.length && (q.Xd = parseInt(F[0]), q.Pc = parseInt(F[1]))
        } catch (C) {}
        return q
    }

    function L(g) {
        g = J(g);
        return Math.min(g.Xd, g.Pc + Nf)
    }

    function Z(g) {
        uf = g
    }

    function ja() {
        var g = gf;
        gf = !1;
        return g
    }

    function va() {
        Sc() || od(!1)
    }

    function Oa() {
        var g = Pa(ad());
        g && 45 === (null === g || void 0 === g ? void 0 : g.length) || (g = lb(ad()) || vc(ad()), 45 !== (null === g || void 0 === g ? void 0 : g.length) && (eg = !0, g = Ac() + "", g += nd(45 - g.length)));
        Va(g);
        return g
    }

    function Va(g) {
        if (B("dpvc") || B("pVO")) Hb(ad(), g);
        else {
            var q = new Date;
            var F = q.getMonth() + Math.min(24, Math.max(1, K("rvcl")));
            q.setMonth(F);
            F = ad();
            hb(xa, [F, g])
        }
        Lb(ad(), g, q,
            B("ssc"))
    }

    function zb() {
        return eg
    }

    function Tb(g) {
        var q = Pa(ad());
        cc(ad());
        ec(ad());
        Ja(ad());
        V("pVO", !0);
        Va(q);
        g && hb(xa, ["dt-pVO", "1"]);
        y()
    }

    function tc() {
        Ja("dt-pVO");
        B("pVO") && (V("pVO", !1), Oa());
        ec(ad());
        y()
    }

    function pc(g, q, F, C, Y) {
        var O = document.createElement("script");
        O.setAttribute("src", g);
        q && O.setAttribute("defer", "defer");
        F && (O.onload = F);
        C && (O.onerror = C);
        Y && O.setAttribute("id", Y);
        O.setAttribute("crossorigin", "anonymous");
        g = document.getElementsByTagName("script")[0];
        g.parentElement.insertBefore(O,
            g)
    }

    function Xc(g, q) {
        return Ag + "/" + (q || re) + "_" + g + "_" + (K("buildNumber") || aa().version) + ".js"
    }

    function vd() {
        var g, q;
        try {
            null === (q = null === (g = Wa.MobileAgent) || void 0 === g ? void 0 : g.incrementActionCount) || void 0 === q ? void 0 : q.call(g)
        } catch (F) {}
    }

    function je() {
        var g, q = Wa.dT_;
        Wa.dT_ = (g = {}, g.di = 0, g.version = "10303241106123517", g.cfg = q ? q.cfg : "", g.iCE = q ? P : function() {
                return navigator.cookieEnabled
            }, g.ica = 1, g.disabled = !1, g.disabledReason = "", g.overloadPrevention = !1, g.gAST = D, g.ww = ge, g.stu = yd, g.nw = sb, g.st = Rb, g.si = Jc,
            g.aBPSL = Hc, g.rBPSL = fe, g.gBPSL = Fc, g.aBPSCC = sd, g.gBPSCC = M, g.buildType = "dynatrace", g.gSSV = vc, g.sSSV = Hb, g.rSSV = ec, g.rvl = Ja, g.iVSC = Ob, g.p3SC = xb, g.dC = cc, g.sC = Lb, g.esc = la, g.gSId = fa, g.gDtc = Ca, g.gSC = dc, g.sSC = Fb, g.gC = Xa, g.cRN = Bd, g.cRS = nd, g.cfgO = ub, g.pCfg = yb, g.pCSAA = Ya, g.cFHFAU = ia, g.sCD = Aa, g.bcv = B, g.ncv = K, g.scv = H, g.stcv = V, g.rplC = I, g.cLSCK = tb, g.gFId = Id, g.gBAU = Xc, g.iS = pc, g.eWE = Qa, g.oEIEWA = hb, g.eA = jb, g.dA = ic, g.iNV = zb, g.gVID = Oa, g.dPV = Tb, g.ePV = tc, g.sVIdUP = Sd, g.sVTT = Z, g.sVID = Ed, g.rVID = ie, g.gVI = Rc, g.gNVIdN = ud, g.gARnVF =
            ja, g.cAUV = va, g.uVT = od, g.aNVL = Jd, g.gPC = Cd, g.cPC = Wc, g.sPC = Pc, g.clB = Fa, g.ct = mc, g.aRI = Ra, g.iXB = gb, g.gXBR = W, g.sXBR = wa, g.de = ha, g.iEC = vd, g.rnw = Ta, g.gto = cb, g.ael = ea, g.rel = Ga, g.sup = Na, g.cuel = pa, g.iAEPOO = Qb, g.iSM = da, g.gxwp = ba, g.iIO = ma, g.prm = sa, g.cI = Ic, g.gidi = Ba, g.iDCV = mb, g.gCF = Pa, g.gPSMB = Ec, g.lvl = lb, g.gCP = (null === q || void 0 === q ? 0 : q.platformPrefix) ? function() {
                return q.platformPrefix || ""
            } : void 0, g.platformCookieOffset = null === q || void 0 === q ? void 0 : q.platformCookieOffset, g.tdto = id, g.gFLAI = ae, g.rACC = zc, g)
    }

    function Xd() {
        if (B("nsfnv")) {
            var g =
                Pa(Uc());
            if (!g.includes("".concat(He, "-"))) {
                var q = xb(g).serverId;
                g = g.replace("".concat(He).concat(q), "".concat(He).concat("".concat(-1 * Bd(2, 99)).replace("-", "-2D")));
                Fb(g)
            }
        }
    }

    function Ie() {
        Qa(function() {
            if (!Ca()) {
                var g = -1 * Bd(2, 99),
                    q = nd(dd);
                Fb("v_4".concat(He).concat("".concat(g).replace("-", "-2D"), "_sn_").concat(q))
            }
        }, !0);
        Jd(Xd)
    }

    function Je() {
        for (var g = [], q = 0; q < arguments.length; q++) g[q] = arguments[q];
        Wa.console.log.apply(Wa.console, g)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Wa = "undefined" !== typeof globalThis ?
        globalThis : "undefined" !== typeof window ? window : void 0,
        fg;
    (function(g) {
        g[g.ENABLED = 0] = "ENABLED";
        g[g.DISABLED = 1] = "DISABLED";
        g[g.DELAYED = 2] = "DELAYED"
    })(fg || (fg = {}));
    var Bg;
    (function(g) {
        g[g.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        g[g.ENABLED = 1] = "ENABLED";
        g[g.BLOCKED = 2] = "BLOCKED"
    })(Bg || (Bg = {}));
    var hf;
    (function(g) {
        g[g.NONE = 1] = "NONE";
        g[g.OFF = 2] = "OFF";
        g[g.PERFORMANCE = 3] = "PERFORMANCE";
        g[g.BEHAVIOR = 4] = "BEHAVIOR"
    })(hf || (hf = {}));
    var jf;
    (function(g) {
        g.OVERLOAD_PREVENTION = "ol";
        g.PRIVACY_STATE = "prv";
        g.SERVER_ID =
            "srv";
        g.SESSION_ID = "sn"
    })(jf || (jf = {}));
    var se;
    (function(g) {
        g.DYNATRACE_MOBILE = "dynatraceMobile";
        g.MOBILE_AGENT = "MobileAgent"
    })(se || (se = {}));
    var vf;
    (function(g) {
        g[g.ARRAY = 0] = "ARRAY";
        g[g.BOOLEAN = 1] = "BOOLEAN";
        g[g.NUMBER = 2] = "NUMBER";
        g[g.STRING = 3] = "STRING";
        g[g.FUNCTION = 4] = "FUNCTION";
        g[g.OBJECT = 5] = "OBJECT";
        g[g.DATE = 6] = "DATE";
        g[g.ERROR = 7] = "ERROR";
        g[g.ELEMENT = 8] = "ELEMENT";
        g[g.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        g[g.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        g[g.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        g[g.PERFORMANCE_TIMING =
            12] = "PERFORMANCE_TIMING";
        g[g.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        g[g.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING";
        g[g.CSS_RULE = 15] = "CSS_RULE";
        g[g.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        g[g.REQUEST = 17] = "REQUEST";
        g[g.RESPONSE = 18] = "RESPONSE";
        g[g.SET = 19] = "SET";
        g[g.MAP = 20] = "MAP";
        g[g.WORKER = 21] = "WORKER";
        g[g.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        g[g.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        g[g.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        g[g.HTML_HEAD_ELEMENT =
            25] = "HTML_HEAD_ELEMENT";
        g[g.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        g[g.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(vf || (vf = {}));
    var Xe = -1,
        tf = bb("dtPC"),
        Uc = bb("dtCookie"),
        hd = bb("rxvt"),
        ad = bb("rxVisitor"),
        ag = bb("dTValidationCookie"),
        Jh = bb("dtSa"),
        u, t, z = setTimeout;
    qa.prototype["catch"] = function(g) {
        return this.then(null, g)
    };
    qa.prototype.then = function(g, q) {
        var F = new this.constructor(Za);
        ta(this, new U(g, q, F));
        return F
    };
    qa.prototype["finally"] = function(g) {
        var q = this.constructor;
        return this.then(function(F) {
                return q.resolve(g()).then(function() {
                    return F
                })
            },
            function(F) {
                return q.resolve(g()).then(function() {
                    return q.reject(F)
                })
            })
    };
    qa.all = function(g) {
        return new qa(function(q, F) {
            function C(Ub, fc) {
                try {
                    if (fc && ("object" === typeof fc || "function" === typeof fc)) {
                        var Nc = fc.then;
                        if ("function" === typeof Nc) {
                            Nc.call(fc, function(Ze) {
                                C(Ub, Ze)
                            }, F);
                            return
                        }
                    }
                    Y[Ub] = fc;
                    0 === --O && q(Y)
                } catch (Ze) {
                    F(Ze)
                }
            }
            if (!g || "undefined" === typeof g.length) return F(new TypeError("Promise.all accepts an array"));
            var Y = Array.prototype.slice.call(g);
            if (0 === Y.length) return q([]);
            for (var O = Y.length,
                    nb = 0; nb < Y.length; nb++) C(nb, Y[nb])
        })
    };
    qa.allSettled = function(g) {
        return new this(function(q, F) {
            function C(nb, Ub) {
                if (Ub && ("object" === typeof Ub || "function" === typeof Ub)) {
                    var fc = Ub.then;
                    if ("function" === typeof fc) {
                        fc.call(Ub, function(Nc) {
                            C(nb, Nc)
                        }, function(Nc) {
                            Y[nb] = {
                                status: "rejected",
                                reason: Nc
                            };
                            0 === --O && q(Y)
                        });
                        return
                    }
                }
                Y[nb] = {
                    status: "fulfilled",
                    value: Ub
                };
                0 === --O && q(Y)
            }
            if (!g || "undefined" === typeof g.length) return F(new TypeError(typeof g + " " + g + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var Y = Array.prototype.slice.call(g);
            if (0 === Y.length) return q([]);
            var O = Y.length;
            for (F = 0; F < Y.length; F++) C(F, Y[F])
        })
    };
    qa.resolve = function(g) {
        return g && "object" === typeof g && g.constructor === qa ? g : new qa(function(q) {
            q(g)
        })
    };
    qa.reject = function(g) {
        return new qa(function(q, F) {
            F(g)
        })
    };
    qa.race = function(g) {
        return new qa(function(q, F) {
            if (!g || "undefined" === typeof g.length) return F(new TypeError("Promise.race accepts an array"));
            for (var C = 0, Y = g.length; C < Y; C++) qa.resolve(g[C]).then(q, F)
        })
    };
    qa.Hb = "function" === typeof setImmediate &&
        function(g) {
            setImmediate(g)
        } || function(g) {
            z(g, 0)
        };
    qa.wc = function(g) {
        "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", g)
    };
    var R = qa,
        ka;
    (function(g) {
        g.ANCHOR = "A";
        g.BUTTON = "BUTTON";
        g.FORM = "FORM";
        g.I_FRAME = "IFRAME";
        g.IMAGE = "IMG";
        g.INPUT = "INPUT";
        g.LABEL = "LABEL";
        g.LINK = "LINK";
        g.OPTION = "OPTION";
        g.SCRIPT = "SCRIPT";
        g.SELECT = "SELECT";
        g.STYLE = "STYLE";
        g.TEXT_AREA = "TEXTAREA"
    })(ka || (ka = {}));
    var La, ob, ib, Ab, Bb = Wa.Worker,
        Zb = Bb && Bb.prototype.addEventListener,
        lc = [],
        Lc = ["touchstart",
            "touchend", "scroll"
        ],
        Oc, sc = "abort getAllResponseHeaders getResponseHeader open overrideMimeType send setRequestHeader".split(" "),
        Vc, $f = {
            "!": "%21",
            "~": "%7E",
            "*": "%2A",
            "(": "%28",
            ")": "%29",
            "'": "%27",
            $: "%24",
            ";": "%3B",
            ",": "%2C"
        },
        qd, Bc, $d = (Bc = {}, Bc.l = "Lax", Bc.s = "Strict", Bc.n = "None", Bc),
        Hd, rd = "[Dynatrace RUM JavaScript]",
        gd = /^[a-f0-9]{12,16}$/,
        ze, dd = 32,
        Ke;
    (function(g) {
        g.LAX = "l";
        g.NONE = "n";
        g.NOT_SET = "0";
        g.STRICT = "s"
    })(Ke || (Ke = {}));
    var Zc = bb("rxvisitid"),
        hc = {},
        Ee = "app-3A",
        ef = Wa.Worker,
        cg = Wa.Blob,
        eh = Wa.URL &&
        Wa.URL.createObjectURL,
        qe, bg, Mf, dh, Fe = !1,
        ee, dg = [],
        ye = [],
        Lf, gg, pe = {},
        Ac, Kd = [],
        Wd = [],
        zd, Ld = 0,
        he, te, Md, ff = 6E8,
        zg = !1,
        Ye, pi = /([A-Z]+)-([0-9]+)/,
        fh = [],
        uf, Nf, gf = !1,
        Ge, gh = !1,
        eg = !1,
        kf, Ag, re, He = "".concat("_", "srv").concat("_");
    (function() {
        var g, q, F, C;
        if (!("documentMode" in document) || isNaN(document.documentMode)) {
            var Y = !(null === (q = navigator.userAgent) || void 0 === q ? 0 : q.includes("RuxitSynthetic"));
            if (!Wa.dT_ || !Wa.dT_.cfg || "string" !== typeof Wa.dT_.cfg || "initialized" in Wa.dT_ && Wa.dT_.initialized)(null === (F = Wa.dT_) ||
                void 0 === F ? 0 : F.gCP) ? Je("[CookiePrefix/initCode] initCode with cookie prefix already initialized, not initializing initCode!") : Je("InitConfig not found or agent already initialized! This is an injection issue."), Wa.dT_ && (Wa.dT_.di = 3);
            else if (Y) try {
                je();
                var O;
                Hd = (O = {}, O.ade = "", O.aew = !0, O.apn = "", O.agentLocation = "", O.agentUri = "", O.app = "", O.ac = !0, O.async = !1, O.ase = !1, O.auto = !1, O.bp = 3, O.bs = !1, O.buildNumber = 0, O.csprv = !0, O.cepl = 16E3, O.cls = !0, O.ccNcss = !1, O.coo = !1, O.cooO = !1, O.cssm = "0", O.cwtDomains = "", O.cwtUrl =
                    "w2dax4xgw3", O.cwt = "", O.cors = !1, O.csu = "", O.cuc = "", O.cce = !1, O.cux = !1, O.postfix = "", O.dataDtConfig = "", O.debugName = "", O.dvl = 500, O.dASXH = !1, O.disableCookieManager = !1, O.dKAH = !1, O.disableLogging = !1, O.dmo = !1, O.doel = !1, O.dpch = !1, O.dpvc = !1, O.disableXhrFailures = !1, O.domain = "", O.domainOverride = "", O.domainOriginal = "", O.doNotDetect = "", O.ds = !0, O.dsndb = !1, O.dsa = !1, O.dsss = !1, O.dssv = !0, O.earxa = !0, O.eao = !1, O.exp = !1, O.eni = !0, O.etc = !1, O.expw = !1, O.instr = "", O.evl = "", O.fa = !1, O.fvdi = !1, O.featureHash = "", O.hvt = 216E5, O.imm = !1, O.ign = "", O.iub = "", O.iqvn = !1, O.initializedModules = "", O.lastModification = 0, O.lupr = !0, O.lab = !1, O.legacy = !1, O.lt = !0, O.mb = "", O.md = "", O.mdp = "", O.mdl = "", O.mcepsl = 100, O.mdn = 5E3, O.mhl = 4E3, O.mpl = 1024, O.mmds = 2E4, O.msl = 3E4, O.bismepl = 2E3, O.mel = 200, O.mepp = 10, O.moa = 30, O.mrt = 3, O.ntd = !1, O.nsfnv = !1, O.ncw = !1, O.oat = 180, O.ote = !1, O.owasp = !1, O.pcl = 20, O.pt = !0, O.perfbv = 1, O.prfSmpl = 0, O.pVO = !1, O.peti = !1, O.raxeh = !0, O.rdnt = 0, O.nosr = !0, O.reportUrl = "dynaTraceMonitor", O.rid = "", O.ridPath = "", O.rpid = "", O.rcdec = 12096E5, O.rtl = 0, O.rtp =
                    2, O.rtt = 1E3, O.rtu = 200, O.rvcl = 24, O.sl = 100, O.ssc = !1, O.svNB = !1, O.srad = !0, O.srbbv = 1, O.srbw = !0, O.srdinitrec = !0, O.srmr = 100, O.srms = "1,1,,,", O.srsr = 1E5, O.srtbv = 3, O.srtd = 1, O.srtr = 500, O.srvr = "", O.srvi = 0, O.srwo = !1, O.srre = "", O.srxcss = !0, O.srxicss = !0, O.srficros = !0, O.srmrc = !1, O.srsdom = !0, O.srfirrbv = !0, O.srcss = !0, O.srmcrl = 1, O.srmcrv = 10, O.st = 3E3, O.spc = "", O.syntheticConfig = !1, O.tal = 0, O.tt = 100, O.tvc = 3E3, O.uxdce = !1, O.uxdcw = 1500, O.uxrgce = !0, O.uxrgcm = "100,25,300,3;100,25,300,3", O.uam = !1, O.uana = "data-dtname,data-dtName",
                    O.uanpi = 0, O.pui = !1, O.usrvd = !0, O.vrt = !1, O.vcfi = !0, O.vcsb = !1, O.vcit = 1E3, O.vct = 50, O.vcx = 50, O.vscl = 0, O.vncm = 1, O.vrei = "", O.xb = "", O.chw = "", O.xt = 0, O.xhb = "", O);
                var nb;
                sa();
                var Ub;
                Oc = Wa.XMLHttpRequest;
                var fc = null === (Ub = Wa.XMLHttpRequest) || void 0 === Ub ? void 0 : Ub.prototype;
                if (fc)
                    for (Vc = {}, q = 0, F = sc; q < F.length; q++) {
                        var Nc = F[q];
                        void 0 !== fc[Nc] && (Vc[Nc] = fc[Nc])
                    }
                La = Wa.addEventListener;
                ob = Wa.removeEventListener;
                ib = Wa.document.addEventListener;
                Ab = Wa.document.removeEventListener;
                Mf = Wa.setTimeout;
                dh = Wa.setInterval;
                Fe ||
                    (qe = Wa.clearTimeout, bg = Wa.clearInterval);
                var Ze = P ? P() : navigator.cookieEnabled,
                    Qg = 1 === xb(Pa("dtAdkSettings") || (null === (nb = gg) || void 0 === nb ? void 0 : nb.getItem("dtAdkSettings")) || "").overloadState;
                if (!(!Ze || Qg ? 0 : "complete" !== document.readyState || Wa.performance && Wa.performance.timing)) throw Error("Error during initCode initialization");
                try {
                    gg = Wa.localStorage
                } catch (Kh) {}
                ye = [];
                ya();
                Lf = Ac();
                ee = [];
                pe = {};
                Fe || (Wa.clearTimeout = ua(qe), Wa.clearInterval = ua(bg), Fe = !0);
                var wf = Math.random(),
                    hg = Math.random();
                te = 0 !==
                    wf && 0 !== hg && wf !== hg;
                if (td()) {
                    var ig = performance.getEntriesByType("navigation")[0];
                    if (ig) {
                        nb = 0;
                        for (var lf in ig) {
                            var Of = +ig[lf];
                            !isNaN(Of) && isFinite(Of) && (nb += Math.abs(Of))
                        }
                        var jg = Math.floor(1E4 * nb)
                    } else jg = Ac();
                    he = Ad(jg)
                } else te ? he = Math.random : he = Ad(Ac());
                Md = Lf % ff + "_" + parseInt(Bd(0, 1E3) + "");
                a: {
                    var mf = aa().cfg;hc = {
                        reportUrl: "dynaTraceMonitor",
                        initializedModules: "",
                        csu: "dtagent",
                        dataDtConfig: "string" === typeof mf ? mf : ""
                    };aa().cfg = hc;hc.csu = "ruxitagentjs";
                    var Pf = hc.dataDtConfig;Pf && !Pf.includes("#CONFIGSTRING") &&
                    (Ya(Pf, hc), Ma("domain"), Ma("auto"), Ma("app"), ia(hc));
                    var xf = (hc.dataDtConfig || "").includes("#CONFIGSTRING") ? null : hc;
                    if (xf = vb(document.currentScript, xf))
                        for (var hh in xf)
                            if (Object.prototype.hasOwnProperty.call(xf, hh)) {
                                jg = hh;
                                var Rg = xf[jg];
                                "undefined" !== typeof Rg && (hc[jg] = Rg)
                            }
                    var yf = tb();
                    try {
                        var Le = (xf = gg) && xf.getItem(yf);
                        if (Le) {
                            var Fd = yb(Le),
                                pd = Ya(Fd.config || ""),
                                zf = hc.lastModification || "0",
                                Me = parseInt((pd.lastModification || Fd.lastModification || "0").substring(0, 13)),
                                nf = "string" === typeof zf ? parseInt(zf.substring(0,
                                    13)) : zf;
                            if (!zf || Me >= nf)
                                if (pd.csu = Fd.name || H("csu"), pd.featureHash = Fd.featureHash || H("featureHash"), pd.agentUri && ia(pd), Aa(pd, !0), gb(pd), Ra(pd), Me > (+hc.lastModification || 0)) {
                                    var ih = B("auto"),
                                        be = B("legacy");
                                    hc = I(pd);
                                    hc.auto = ih ? "1" : "0";
                                    hc.legacy = be ? "1" : "0"
                                }
                        }
                    } catch (Kh) {}
                    Aa(hc);
                    try {
                        var kg = hc.ign;
                        if (kg && (new RegExp(kg)).test(Wa.location.href)) {
                            delete Wa.dT_;
                            var lg = !1;
                            break a
                        }
                    } catch (Kh) {}
                    if (da()) {
                        var Lh = navigator.userAgent,
                            Qf = Lh.lastIndexOf("RuxitSynthetic");
                        if (-1 === Qf) var ke = {};
                        else {
                            var Ne = Lh.substring(Qf +
                                14);
                            if (Ne.includes(" c")) {
                                yf = {};
                                Le = 0;
                                for (var Oe = Ne.split(" "); Le < Oe.length; Le++) {
                                    var mg = Oe[Le];
                                    if (mg.startsWith("c")) {
                                        var ng = mg.substring(1),
                                            Pe = ng.indexOf("="),
                                            jh = ng.substring(0, Pe),
                                            Cg = ng.substring(Pe + 1);
                                        jh && Cg && (yf[jh] = Cg)
                                    }
                                }
                                ke = yf
                            } else ke = {}
                        }
                        Ne = void 0;
                        for (Ne in ke)
                            if (Object.prototype.hasOwnProperty.call(ke, Ne) && ke[Ne]) {
                                var Qe = ke[Ne];
                                "undefined" !== typeof Qe && (hc[Ne] = Qe)
                            }
                        I(hc)
                    }
                    var Mh = H("cuc"),
                        Re, Rf, Sf = null === (Rf = null === (Re = Wa.dT_) || void 0 === Re ? void 0 : Re.gCP) || void 0 === Rf ? void 0 : Rf.call(Re);
                    if (Mh && Sf &&
                        Mh !== Sf) throw Error("platformPrefix and cuc do not match!");lg = !0
                }
                if (!lg) throw Error("Error during config initialization");
                Mc();
                kf = aa().disabled;
                var le;
                if (!(le = H("agentLocation"))) a: {
                    var Dg = H("agentUri");
                    if (Dg || document.currentScript) {
                        var Af = Dg || document.currentScript.src;
                        if (Af) {
                            var Sg = Af.includes("_complete") ? 2 : 1,
                                Bf = Af.lastIndexOf("/");
                            for (lg = 0; lg < Sg && -1 !== Bf; lg++) Af = Af.substring(0, Bf), Bf = Af.lastIndexOf("/");
                            le = Af;
                            break a
                        }
                    }
                    var qi = location.pathname;le = qi.substring(0, qi.lastIndexOf("/"))
                }
                Ag = le;
                re =
                    H("csu") || "ruxitagentjs";
                "true" !== Pa("dtUseDebugAgent") || re.includes("dbg") || (re = H("debugName") || re + "dbg");
                if (!B("auto") && !B("legacy") && !kf) {
                    var kh = H("agentUri") || Xc(H("featureHash"));
                    if (B("async") || "complete" === document.readyState) pc(kh, B("async"), void 0, void 0, "dtjsagent");
                    else {
                        var Nh = "".concat("dtjsagent", "dw");
                        document.write('<script id="'.concat(Nh, '" type="text/javascript" src="').concat(kh, '">\x3c/script>'));
                        document.getElementById(Nh) || pc(kh, B("async"), void 0, void 0, "dtjsagent")
                    }
                }
                Pa(Uc()) &&
                    V("cooO", !0);
                Ie();
                V("pVO", !!lb("dt-pVO"));
                Qa(Oa);
                uf = 18E5;
                Nf = K("hvt") || 216E5;
                var Tg = id();
                Ye = void 0;
                Tg && "ea" in Tg && (Ye = Tg.gITAID());
                hb(Wc, [Ye || 1])
            } catch (Kh) {
                "platformPrefix and cuc do not match!" === Kh.message ? (le = Wa.dT_, Wa.dT_ = (g = {}, g.minAgentVersion = le.minAgentVersion, g.platformPrefix = (null === (C = le.gCP) || void 0 === C ? void 0 : C.call(le)) || le.platformPrefix, g.platformCookieOffset = le.platformCookieOffset, g), Je("[CookiePrefix/initCode] cuc and platformPrefix do not match, disabling agent!")) : (delete Wa.dT_,
                    Je("JsAgent initCode initialization failed!", Kh))
            }
        }
    })()
})();
(function() {
    function Ka() {
        Ka = Object.assign || function(a) {
            for (var b, f = 1, k = arguments.length; f < k; f++) {
                b = arguments[f];
                for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (a[p] = b[p])
            }
            return a
        };
        return Ka.apply(this, arguments)
    }

    function bb(a, b) {
        bb = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(f, k) {
            f.__proto__ = k
        } || function(f, k) {
            for (var p in k) Object.prototype.hasOwnProperty.call(k, p) && (f[p] = k[p])
        };
        return bb(a, b)
    }

    function kb(a, b) {
        function f() {
            this.constructor = a
        }
        if ("function" !== typeof b &&
            null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        bb(a, b);
        a.prototype = null === b ? Object.create(b) : (f.prototype = b.prototype, new f)
    }

    function eb(a, b, f) {
        if (f || 2 === arguments.length)
            for (var k = 0, p = b.length, x; k < p; k++) !x && k in b || (x || (x = Array.prototype.slice.call(b, 0, k)), x[k] = b[k]);
        return a.concat(x || Array.prototype.slice.call(b))
    }

    function cb(a) {
        var b;
        return function() {
            if (b) return b;
            var f, k, p, x, N = -1 !== rk ? rk : (null === (k = null === (f = Eb.dT_) || void 0 === f ? void 0 : f.scv) ||
                void 0 === k ? void 0 : k.call(f, "postfix")) || (null === (x = null === (p = Eb.dT_) || void 0 === p ? void 0 : p.gCP) || void 0 === x ? void 0 : x.call(p));
            return b = f = (rk = N) ? "".concat(a).concat(N) : a
        }
    }

    function Ta(a) {
        return !!a.interactionId
    }

    function Sa(a) {
        a.getEntries().filter(Ta).forEach(function(b) {
            lh = Math.min(lh, b.interactionId);
            Cf = (mh = Math.max(mh, b.interactionId)) ? (mh - lh) / 7 + 1 : 0
        })
    }

    function Xa(a) {
        function b() {
            $b.takeRecords && p($b.takeRecords())
        }

        function f() {
            db = [];
            fb = Od ? Cf : performance.interactionCount || 0
        }

        function k(Ib) {
            var uc = db[db.length -
                    1],
                xc = Wb[Ib.interactionId];
            if (xc || 10 > db.length || Ib.duration > uc.latency) xc ? (xc.entries.push(Ib), xc.latency = Math.max(xc.latency, Ib.duration)) : (Ib = {
                id: Ib.interactionId,
                latency: Ib.duration,
                entries: [Ib]
            }, Wb[Ib.id] = Ib, db.push(Ib)), db.sort(Ua), db.splice(10).forEach(function($c) {
                delete Wb[$c.id]
            })
        }

        function p(Ib) {
            if (Ib) {
                for (var uc = 0, xc = 0; xc < Ib.length; xc++) x(Ib[xc]) && uc++;
                if (0 === uc) N || ca.forEach(function(me) {
                    me({
                        entries: [],
                        latency: 8,
                        id: -1
                    })
                });
                else {
                    ra += uc;
                    var $c = db[Math.min(db.length - 1, Math.floor(((Od ? Cf : performance.interactionCount ||
                        0) - fb) / 50))];
                    $c && (N !== $c.latency && ca.forEach(function(me) {
                        me($c)
                    }), N = $c.latency)
                }
            }
        }

        function x(Ib) {
            if (40 > Ib.duration) return !1;
            if (-1 !== qb && Ib.startTime < qb) return !0;
            Ib.interactionId && k(Ib);
            "first-input" === Ib.entryType && (db.some(function(uc) {
                return uc.entries.some(function(xc) {
                    return Ib.duration === xc.duration && Ib.startTime === xc.startTime
                })
            }) || k(Ib));
            return !0
        }
        void 0 === a && (a = 40);
        "interactionCount" in performance || Od || (Od = new PerformanceObserver(Sa), Od.observe({
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }));
        var N = 0,
            ca = [],
            ra = 0,
            fb = 0,
            qb = -1,
            db = [],
            Wb = {},
            $b = new PerformanceObserver(function(Ib) {
                p(Ib.getEntries())
            });
        $b.observe({
            type: "event",
            buffered: !0,
            durationThreshold: a
        });
        "PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && $b.observe({
            type: "first-input",
            buffered: !0
        });
        Eb.addEventListener("pageshow", f, !0);
        return {
            Mc: function() {
                b();
                return N
            },
            reset: function(Ib) {
                void 0 === Ib && (Ib = -1);
                db = [];
                Wb = {};
                ra = N = fb = 0;
                qb = Ib
            },
            Gj: function(Ib) {
                ca.push(Ib)
            },
            Vj: function() {
                ca = [];
                Eb.removeEventListener("pageshow",
                    f, !0);
                $b.disconnect()
            },
            Gg: b,
            Vi: function() {
                return ra
            }
        }
    }

    function Ua(a, b) {
        return b.latency - a.latency
    }

    function Pa() {
        return "10303241106123517"
    }

    function Za(a) {
        return !!(a && "ea" in a)
    }

    function rb(a, b) {
        var f = !a.bcv("ac") || a.scv("app") === b.scv("app");
        a = a.scv("postfix");
        b = b.scv("postfix");
        return f && a === b
    }

    function qa() {
        var a = Eb.dT_;
        try {
            for (var b = Eb.parent; b && b !== Eb;) {
                var f = b.dT_;
                if (Za(f) && "10303241106123517" === f.version && rb(a, f)) return f.tdto();
                b = b !== b.parent ? b.parent : void 0
            }
        } catch (k) {}
        return a
    }

    function ta(a) {
        var b =
            a.version.startsWith("10279");
        a.tdto && !b ? ($e = a.tdto, cd = a.gFLAI) : ($e = qa, a.tdto = $e, cd = function() {}, a.gFLAI = cd)
    }

    function Ha() {
        document.cookie = "".concat("__dTCookie", "=").concat("1", ";SameSite=Lax");
        var a = document.cookie.includes("__dTCookie");
        document.cookie = "".concat("__dTCookie", "=").concat("1", "; expires=Thu, 01-Jan-1970 00:00:01 GMT");
        return a
    }

    function Da(a) {
        for (var b = [], f = 1; f < arguments.length; f++) b[f - 1] = arguments[f];
        return Ug ? Ug(a, b) : a.apply(this, b)
    }

    function Ea(a, b, f) {
        return a.splice(b, (f || b) - b +
            1 || a.length)
    }

    function U() {
        return af
    }

    function S() {
        return Eb.dT_
    }

    function sa() {
        return bf
    }

    function ma() {
        return of
    }

    function ea() {
        return Vg
    }

    function Ga() {
        var a = document.location;
        return a ? !a.href.startsWith("http") : !0
    }

    function Na() {
        var a = navigator.userAgent || navigator.vendor || Eb.opera && Eb.opera.version() || "";
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substring(0,
                4))
    }

    function pa() {
        return "1" === navigator.doNotTrack || "yes" === navigator.doNotTrack || "1" === navigator.msDoNotTrack || "1" === Eb.doNotTrack
    }

    function oa() {
        return /(gomezagent|googlebot|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|ia_archiver)/i.test(navigator.userAgent)
    }

    function Q(a) {
        if (!a || !a.includes("://")) return "";
        a = a.split("/")[2].split(":")[0].toLowerCase();
        a: {
            var b = 0;
            for (var f = ld; b < f.length; b++)
                if (a.includes(f[b])) {
                    b = !0;
                    break a
                }
            b = !1
        }
        return b ? "" : a
    }

    function ba(a) {
        var b = 0;
        if (a)
            for (var f = a.length, k = 0; k < f; k++) b = 31 * b + a.charCodeAt(k), b &= b;
        return b
    }

    function E(a, b, f) {
        Ug(P, [a, b, f])
    }

    function P(a, b, f) {
        try {
            Eb.sessionStorage.setItem(a, b + "")
        } catch (k) {
            f || og(a, b + "", void 0, Nb("ssc"))
        }
    }

    function aa(a, b, f) {
        void 0 === f && (f = !0);
        var k = !0;
        try {
            Eb.localStorage[a] = b
        } catch (p) {
            k = !1, f && og(a, b, void 0, Nb("ssc"))
        }
        return k
    }

    function la(a, b) {
        try {
            return Eb.sessionStorage[a] || ""
        } catch (f) {}
        return b ? "" : nh(a)
    }

    function ha(a) {
        var b = [];
        if (a)
            for (var f = 0; f < a.length; f++) {
                var k =
                    a.charAt(f),
                    p = Eg[k];
                p ? b.push(p) : b.push(k)
            }
        return b.join("")
    }

    function W(a) {
        if (!a) return "";
        for (var b = "", f = 0; f < a.length; f++) {
            var k = Oh[a.charAt(f) + a.charAt(f + 1)];
            k ? (b += k, f++) : b += a.charAt(f)
        }
        return b
    }

    function wa(a) {
        return a ? W(a).replace(/_5F/g, "_").replace(/_25/g, "%").replace(/_7C/g, "|") : ""
    }

    function Ra(a) {
        if (!a) return "";
        a = a.replace(/_/g, "_5F").replace(/%/g, "_25").replace(/\|/g, "_7C");
        return ha(a)
    }

    function gb() {
        var a = Eb.location;
        return a ? pb(a.href) : "-"
    }

    function pb(a) {
        var b = a.indexOf("#");
        return 0 <= b ? a.substring(0,
            b) : a
    }

    function Vb(a) {
        og("dtUseDebugAgent", a, void 0, Nb("ssc"))
    }

    function na(a) {
        og("dt_dbg_console", a, void 0, Nb("ssc"))
    }

    function Db(a) {
        void 0 === a && (a = "TRACE");
        og("dt_dbg_logfilter", "level=".concat(a, "|featureHash=|fileName="), void 0, Nb("ssc"))
    }

    function zc(a) {
        var b = a.match(/:(\d+)/);
        return b ? b[1] : a.startsWith("https") ? "443" : "80"
    }

    function Ec(a) {
        if (!a) return !1;
        a = a.trim().toLowerCase();
        a.startsWith("//") && (a = location.protocol + a);
        var b = location.href.startsWith("http");
        if (!a.startsWith("http") || !b) return !1;
        if (location.href.indexOf(location.host) !== a.indexOf(location.host.toLowerCase())) return !0;
        b = location.port || zc(location.href);
        return zc(a) !== b
    }

    function hb(a) {
        try {
            return (new URL(a, document.baseURI)).href
        } catch (b) {
            return a
        }
    }

    function Qb() {
        try {
            return Eb.location.href
        } catch (a) {}
        return ""
    }

    function qc(a) {
        if (!a) return "";
        try {
            var b = void 0,
                f = hb(a);
            if (!Eb.location) return f;
            var k = Eb.location,
                p = k.origin;
            if (!p) {
                if (!k.protocol || !k.host) return f;
                p = k.protocol + "//" + k.host
            }
            var x = b = f.substring(0, p.length + 1).toLowerCase() ===
                (p + "/").toLowerCase() ? f.substring(p.length) : f
        } catch (N) {
            x = a, a.startsWith("?") && (x = Eb.location.pathname + a)
        }
        return Hb(x, 500)
    }

    function Hb(a, b, f, k) {
        void 0 === b && (b = 100);
        void 0 === f && (f = !1);
        void 0 === k && (k = "...");
        return !a || a.length <= b ? a : f ? k + a.substring(Math.max(0, a.length - b + k.length)) : a.substring(0, Math.max(0, b - k.length)) + k
    }

    function vc(a) {
        var b = Yb("sl");
        return Hb(a, b)
    }

    function ec(a, b, f, k) {
        if (a[k].set) {
            var p = a[k].set(b, f);
            p && p.get && p.get(b) === f && (a[k] = p)
        } else a[k][b] = f
    }

    function cc(a, b, f, k) {
        f && (f = Hb(f, Yb("mhl")),
            ec(a, b, f, k))
    }

    function Pb(a) {
        return a ? a.split("?")[0] : ""
    }

    function Lb() {
        var a = Ph();
        if (a) {
            var b = a.indexOf("-");
            a = -1 === b ? "" : a.substring(0, b);
            if (a) {
                b = "";
                for (var f = 0; f + 1 < a.length; f += 2) b += a.charCodeAt(f) + a.charCodeAt(f + 1) + "";
                a = Math.floor(Math.abs(1E7 * Math.sin(parseInt(b))))
            } else a = 0
        } else a = !1;
        return a
    }

    function Ob() {
        var a = Ui();
        return 3 === a ? !0 : 4 === a ? !1 : !!Yb("rdnt") && pa()
    }

    function dc(a, b, f) {
        if (!a || !b) return [];
        for (var k = [], p = 0; p < a.length; p += b) {
            if (p + b <= a.length) {
                var x = a.slice(p, p + b);
                "%" === x.charAt(x.length - 1) &&
                    a.length >= p + b + 1 && (x += a.charAt(p + b), x += a.charAt(p + b + 1), p += 2);
                "%" === x.charAt(x.length - 2) && a.length >= p + b + 2 && (x += a.charAt(p + b), p += 1)
            } else x = a.slice(p);
            k.push(x)
        }
        if (f)
            for (a = k.length, b = 0; b < a; b++) k[b] = f.replace(/#index#/, b + 1 + "").replace(/#total#/, a + "") + k[b];
        return k
    }

    function Fb(a) {
        return !1 === a ? 0 : "number" === typeof a ? 2 : 1
    }

    function G(a, b) {
        void 0 === b && (b = Yb("rtu"));
        if (!a) return "";
        var f = Yb("rtp");
        if (!f || a.length > b && 2 === f) a = Pb(a);
        var k = Ra(a);
        if (k.length > b) {
            f = Ra(Q(a));
            a = a.split("/");
            a = a[a.length - 1];
            var p = Ra(a);
            if (p !== f) {
                if (k = f + "/../" + p, b = k.length - b, 0 < b)
                    if (p.length > b) {
                        b = Math.max(p.length - (b + 2), 0);
                        k = Math.max(a.length - b, 0);
                        for (p = Ra(a.substring(k, a.length)); p.length > b;) k += Math.ceil((p.length - b) / 3), p = Ra(a.substring(k, a.length));
                        k = f + "/../.." + p
                    } else k = Hb(f, b, !1, ".../") + p
            } else k = Hb(k, b, !0)
        }
        return k
    }

    function fa(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function Ca(a, b) {
        var f = 1E3 * Yb("oat");
        return (null !== b && void 0 !== b ? b : ed()) + f >= a ? a : -2
    }

    function da() {
        return S().disabled && !S().syn
    }

    function yb(a) {
        var b = S();
        b.syn || (b.disabledReason = a, b.disabled = !0)
    }

    function tb(a, b) {
        return nh(a, b) || oh(a) || ""
    }

    function Ya(a) {
        return null === a || void 0 === a ? void 0 : a.startsWith("data:")
    }

    function w(a) {
        if (Object.keys) return Object.keys(a);
        var b = [];
        if (a === Object(a))
            for (var f in a) fa(a, f) && b.push(f);
        return b
    }

    function B(a, b) {
        a = pg[a];
        a.includes(b) || a.push(b)
    }

    function K(a, b) {
        a = pg[a];
        b = a.indexOf(b); - 1 !== b && Ea(a, b)
    }

    function H(a) {
        for (var b = [], f = 0, k = pg[a.kind].slice(); f < k.length; f++) {
            var p = (0, k[f])(a);
            p && b.push(p)
        }
        return b
    }

    function V() {
        var a =
            af,
            b = Pa();
        a !== b && B("DEBUG_INFO_REQUESTED", function() {
            return [{
                type: "miav",
                severity: "Warning",
                text: "Snippet version(".concat(a, ") does not match the version of the monitoring code(").concat(b, "). Consider updating your code snippet for best compatibility.")
            }]
        });
        B("DEBUG_INFO_REQUESTED", function() {
            return [{
                type: "v",
                severity: "Info",
                text: "Snippet version: ".concat(a, " ; Monitoring code:").concat(Pa())
            }]
        })
    }

    function I(a, b) {
        void 0 === b && (b = []);
        var f = Eb.dT_;
        f = (null === f || void 0 === f ? 0 : f.iIO) ? f.iIO : null;
        return !(null ===
            f || void 0 === f || !f(a, b))
    }

    function Ma() {}

    function ia(a) {
        return (I(a, 9) || Ia(a)) && ("string" === typeof a.textContent || "string" === typeof a.innerText)
    }

    function Ia(a) {
        return a && a.nodeType && 1 === a.nodeType
    }

    function Aa(a) {
        return a && "INPUT" === a.nodeName
    }

    function vb(a) {
        return a && "SCRIPT" === a.nodeName
    }

    function ub(a) {
        return "function" === typeof a && /{\s+\[native code]/.test(Function.prototype.toString.call(a))
    }

    function mb() {
        return Td
    }

    function xb() {
        return md
    }

    function Mb() {
        return pf
    }

    function sb() {
        return wd
    }

    function Rb(a,
        b) {
        a ? a.id === a.La() && (Fg = a) : Fg = b ? null : Fg
    }

    function mc() {
        for (var a = Yd.Ca.length - 1; 0 <= a; a--) {
            var b = Yd.Ca[a];
            if (b.Sc() && !b.Na || b.Na && b.Rg()) return b
        }
        return null
    }

    function Hc(a) {
        return Yd.actions[a]
    }

    function fe() {
        var a = $e();
        if (a === S() || !Za(a) || !a.gITAID) return ph = Fc, ph();
        a = a.gITAID();
        Gg = a + 1;
        return a
    }

    function Fc() {
        return Gg++
    }

    function Jc() {
        return ph()
    }

    function Ic(a) {
        return (a = Hc(a)) && a.fb ? a : null
    }

    function yd(a) {
        return (a = "number" === typeof a ? Ic(a) : a) ? a.cb() : ""
    }

    function ge(a, b, f) {
        var k = wd;
        f && (k = Hc(f));
        if (!k) return !1;
        k.Xf(a, b);
        return !0
    }

    function sd() {
        var a = Vi(!0);
        if (0 < a.length) {
            for (var b = [], f = 0; f < a.length; f++) {
                var k = a[f];
                k.frameId !== Df() && b.push(k)
            }
            Hg(b)
        }
    }

    function M(a) {
        if (!a) return "";
        var b = Df() + "h" + a,
            f = document.cookie,
            k = nh(Wi(), f);
        return Nb("dASXH") && k && k.includes(b) && !Ga() ? "" : ue() + "$" + Df() + "h" + a + "v" + Ph(f) + "e0"
    }

    function D(a) {
        for (var b = qg.length - 1; 0 <= b; b--)
            if (qg[b] === a) {
                Ea(qg, b);
                break
            }
    }

    function ua(a) {
        if (0 < Pd || a && 0 < qg.length)
            if (a = qg.length, 0 < a) return qg[a - 1];
        return 0
    }

    function Ba(a, b) {
        if (ub(Array.prototype.map)) return Array.prototype.map.call(a,
            b);
        for (var f = [], k = 0; k < a.length; k++) f.push(b(a[k], k, a));
        return f
    }

    function ya() {
        return Ba(ri, function(a) {
            return a.message ? "Status: ".concat(a.status, ', Message: "').concat(a.message, '"') : "Status: ".concat(a.status)
        })
    }

    function Fa(a, b, f, k, p, x) {
        void 0 === p && (p = !1);
        void 0 === x && (x = !1);
        if (p) Ja(a, b, f, k, x);
        else {
            try {
                for (p = 0; p < a.length; p++) p in a && b.call(f, a[p], p, a, function() {})
            } catch (ca) {
                var N = ca
            }
            if (k) N ? k.call(f, a, N) : k.call(f, a);
            else if (N) throw N;
        }
    }

    function xa(a, b, f, k, p) {
        void 0 === k && (k = !1);
        void 0 === p && (p = !1);
        return new Tf(function(x, N) {
            Fa(a, b, f, function(ca, ra) {
                ra ? N(ra) : x(ca)
            }, k, p)
        })
    }

    function Ja(a, b, f, k, p) {
        function x(Wb) {
            db = Wb;
            lb(function() {
                N(Wb, ra)
            })
        }

        function N(Wb, $b) {
            if (!qb) {
                var Ib;
                try {
                    4 > b.length && fb++, Wb in $b && (Ib = b.call(f, $b[Wb], Wb, $b, function() {
                        function $c(qf) {
                            db = qf;
                            lb(function() {
                                N(qf, ra)
                            })
                        }
                        fb++;
                        fb === $b.length && ca();
                        for (var me = db + 1; me < $b.length; me++) $c(me)
                    }))
                } catch ($c) {
                    var uc = $c;
                    Ib = !1
                }
                Wb = function($c) {
                    db = $c;
                    lb(function() {
                        N($c, ra)
                    })
                };
                for (var xc = db + 1; xc < $b.length; xc++) Wb(xc);
                (!1 === Ib || uc) && ca(uc);
                fb !==
                    $b.length || qb || ca()
            }
        }

        function ca(Wb) {
            k && !qb && (k.apply(f, Wb ? [ra, Wb] : [ra]), qb = !0)
        }
        void 0 === p && (p = !1);
        var ra = p ? a : Array.prototype.slice.call(a),
            fb = 0,
            qb = !1,
            db = 0;
        for (a = 0; a < ra.length; a++) x(a);
        fb === ra.length && lb(ca)
    }

    function lb(a) {
        Xi || (Xi = !0, ac(function() {
            Xi = !1;
            var b = yj;
            yj = [];
            for (var f = oc(), k = 0; k < b.length && 35 > oc() - f;) b[k](), k++;
            for (f = k; f < b.length; f++) lb(b[f])
        }, 0));
        yj.push(a)
    }

    function Qa(a, b) {
        if (ub(Array.prototype.filter)) return Array.prototype.filter.call(a, b);
        for (var f = [], k = 0; k < a.length; k++) {
            var p = a[k];
            b(p, k, a) && f.push(p)
        }
        return f
    }

    function jb(a, b, f, k) {
        void 0 === k && (k = !1);
        return f ? new Tf(function(p, x) {
            var N = [];
            Fa(a, function(ca, ra) {
                b(ca, ra, a) && N.push(ca)
            }, null, function(ca, ra) {
                ra ? x(N) : p(N)
            }, f, k)
        }) : Tf.resolve(Qa(a, b))
    }

    function ic(a, b) {
        void 0 === b && (b = !1);
        var f = ["i".concat(a.id), "k".concat(a.kind), "h".concat(+a.hydrated)];
        b && f.push("t".concat(+a.trigger));
        return f.join(";")
    }

    function Kb(a) {
        if (a)
            for (var b = document.getElementsByTagName("LABEL"), f = b.length, k = 0; k < f; k++) {
                var p = b[k];
                if (p && "LABEL" === p.nodeName &&
                    p.htmlFor === a) return Jb(p.innerText, p.textContent)
            }
        return ""
    }

    function Jb() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        for (b = 0; b < a.length; b++) {
            var f = a[b];
            if ("string" === typeof f && (f = f.trim())) return f
        }
        return ""
    }

    function kc(a) {
        if (!a || a.startsWith("data:")) return "";
        a = a.split("/");
        return 0 < a.length ? a[a.length - 1].split(".")[0] : ""
    }

    function Mc(a) {
        if (a && a.split) {
            var b = a.split("/");
            if (0 < b.length && (b = b[b.length - 1].trim(), null !== b)) return b
        }
        return a || ""
    }

    function td(a) {
        return ia(a) ? a.innerText || a.textContent :
            a.textContent
    }

    function Ad(a, b) {
        var f = b.nodeName ? b.nodeName.toUpperCase() : "unknown",
            k = Ia(b) ? b.getAttribute("type") : "";
        k = "string" === typeof k ? k.toUpperCase() : "";
        var p = "";
        switch (a) {
            case 0:
                Ia(b) ? (f = "", Aa(b) && "HIDDEN" !== k && (f = !k || "BUTTON" !== k && "SUBMIT" !== k && "RESET" !== k && "IMAGE" !== k ? null : b.value, a = Kb(b.id), f = !k || "BUTTON" !== k && "SUBMIT" !== k && "RESET" !== k ? Jb(a, f) : Jb(f, a)), f || (f = Jb(td(b))), p = f) : p = "";
                break;
            case 1:
                f = "";
                if (Aa(b) && "HIDDEN" !== k || b && "BUTTON" === b.nodeName) k = "IMAGE" === k ? b.getAttribute("alt") : null, f =
                    Jb(b.name, b.title, k);
                p = f;
                break;
            case 3:
                Ia(b) ? (b = b.className, p = I(b, ["baseVal", "animVal"]) ? b.baseVal || b.animVal || "" : b) : p = "";
                break;
            case 4:
                b = "";
                "INPUT" === f && "HIDDEN" !== k ? b = "INPUT: " + k : "A" === f ? b = "LINK" : "-" === r && (r = b = f);
                p = b;
                break;
            case 2:
                f = "", Aa(b) && "IMAGE" === k ? f = kc(b.src) : b && "A" === b.nodeName ? f = Jb(b.title, Mc(b.href)) : b && "IMG" === b.nodeName ? f = Jb(b.name, b.title, b.alt, kc(b.src)) : b && "FORM" === b.nodeName && (f = Jb(b.name, b.id, b.action)), f || (f = Jb(b.title, b.data, b.wholeText, b.id)), p = f
        }
        return p
    }

    function Bd(a) {
        if (!a) return "";
        try {
            var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if ("HTML" === b || "BODY" === b || "HEAD" === b || "#DOCUMENT" === b) return r;
            for (b = 0; 4 >= b; b++) {
                var f = Ad(b, a);
                if (f && f !== r) return f
            }
            return Bd(a.parentNode)
        } catch (k) {}
        return ""
    }

    function nd(a, b) {
        if (!b) return "";
        var f = b.length;
        if (0 >= f || 20 < T) return "";
        for (var k = 0; k < f; k++) {
            var p = b[k],
                x;
            T++;
            if (x = nd(a, p.childNodes)) return x;
            T--;
            if (x = Ad(a, p)) return x
        }
        return ""
    }

    function Id(a) {
        try {
            var b = a.nodeName ? a.nodeName.toUpperCase() : "unknown";
            if ("HTML" === b || "BODY" === b || "HEAD" === b ||
                "#DOCUMENT" === b) return "Page: " + e;
            if (a && "SELECT" === a.nodeName) {
                var f = a.nodeName ? a.nodeName.toUpperCase() : null,
                    k = Kb(a.id),
                    p = Jb(k, a.name, f),
                    x = null;
                if (!a.multiple) {
                    var N = a.options && -1 < a.selectedIndex ? a.options[a.selectedIndex] : null;
                    N && (x = Jb(N.label, N.innerText, N.textContent))
                }
                return x ? "[" + p + "] to value [" + x + "]" : p
            }
            if (a && "TEXTAREA" === a.nodeName) {
                var ca = a.nodeName ? a.nodeName.toUpperCase() : null,
                    ra = Kb(a.id);
                return Jb(ra, a.name, ca) || a.nodeName
            }
            var fb = Jb(td(a));
            if (fb) return fb;
            T = 0;
            if (a.childNodes && 0 < a.childNodes.length) {
                a: {
                    for (p =
                        0; 4 >= p; p++) {
                        var qb = nd(p, [a]);
                        if (qb) {
                            x = qb;
                            break a
                        }
                    }
                    x = ""
                }
                return x
            }
        } catch (db) {}
        return Bd(a)
    }

    function Sd() {
        h = Kc("uana").split(",");
        m = Yb("uanpi") || 0
    }

    function id() {
        return Gb
    }

    function Pc(a) {
        3 === a && (ab = []);
        Gb = a
    }

    function Cd() {
        return X
    }

    function Wc(a) {
        var b = Qa(Gd, function(f) {
            return f.timestamp <= a
        });
        return b[b.length - 1] || null
    }

    function ae(a) {
        Array.isArray(a) ? ab.push.apply(ab, a) : ab.push(a)
    }

    function Rc(a, b) {
        void 0 === b && (b = Infinity);
        var f = b + 1,
            k = "",
            p = "";
        "string" === typeof a ? p = a : "object" === typeof a && a && (p = a.toString());
        a = Kc("spc") + "\t\n\r";
        for (var x = 0; x < p.length; x++) {
            var N = p[x];
            if (!a.includes(N) && (k += N, k.length >= f)) break
        }
        return Hb(k, b, !1, "...")
    }

    function ie(a) {
        var b = Qd;
        try {
            for (; b;) {
                var f;
                if (f = a.target && "string" !== typeof a.target && a.target !== b.target && "string" !== typeof b.target) a: {
                    try {
                        for (var k = a.target.parentNode; k;) {
                            if (k === b.target) {
                                f = !0;
                                break a
                            }
                            k = k.parentNode
                        }
                    } catch (p) {}
                    f = !1
                }
                f && (a = b);
                b = b.next
            }
        } catch (p) {}
        Qd = a
    }

    function od(a) {
        var b, f = a.Gh,
            k = a.url,
            p = a.title,
            x = a.view;
        return b = {
            id: a.id,
            target: a.target,
            name: "",
            type: a.type,
            next: void 0,
            Eb: void 0,
            info: a.Wf || "-",
            start: oc(),
            kc: !1,
            vf: oc() + (f || 30),
            url: k || Qb(),
            title: p || document.title,
            aa: ""
        }, b.view = x, b.Rb = function() {
            if (!this.name) {
                if (Nb("uam")) var N = {
                    aa: "dTMasked_" + (ia(this.target) ? this.target.nodeName : "")
                };
                else {
                    var ca = this.target || "";
                    r = "-";
                    if ("string" === typeof ca) N = {
                        aa: ca
                    };
                    else if (Ia(ca)) {
                        N = Id(ca) || r;
                        a: {
                            try {
                                for (var ra = 0; ra <= m; ra++) {
                                    for (var fb = 0, qb = h; fb < qb.length; fb++) {
                                        var db = ca.getAttribute(qb[fb]);
                                        if (db) {
                                            var Wb = db;
                                            break a
                                        }
                                    }
                                    if (ca.parentElement) ca = ca.parentElement;
                                    else break
                                }
                            } catch ($b) {}
                            Wb =
                            ""
                        }
                        N = {
                            aa: N,
                            Ob: Wb
                        }
                    } else N = {
                        aa: r
                    }
                }
                Wb = Yb("sl");
                N.aa = Rc(N.aa, Wb);
                N.Ob = Rc(N.Ob, Wb);
                this.name = N.Ob || N.aa;
                N.Ob && (this.aa = N.aa)
            }
            return this.name
        }, b.lj = function() {
            return this.kc
        }, b.th = function() {
            var N = this;
            do N.kc = !0, N = N.next; while (N)
        }, b
    }

    function Dd(a, b, f, k, p, x, N) {
        void 0 === N && (N = X);
        if (v(Ef)) return Ef.bi(a, b, f, k, p, x, N);
        var ca = od({
            id: Zd++,
            target: a,
            type: b,
            Wf: f,
            Gh: k,
            url: p,
            title: x,
            view: N
        });
        try {
            return xd && (ca.next = Qd, ca.next && (ca.next.Eb = ca), ie(ca)), ca
        } finally {
            ac(function() {
                Jd(ca)
            }, ca.vf - oc())
        }
    }

    function jd() {
        return v(Ef) ?
            Ef.gci() : Qd
    }

    function Nd() {
        return v(Ef) ? Ef.gpi() : Ud
    }

    function Ed(a, b) {
        if (v(Ef)) return Ef.cii(a, b);
        b = b ? Nd() : jd();
        if (!b) return qh[a];
        switch (a) {
            case "name":
                return b.Rb();
            case "type":
                return b.type;
            case "validUntil":
                return b.vf;
            case "start":
                return b.start;
            case "target":
                return b.target;
            case "url":
                return b.url;
            case "title":
                return b.title;
            default:
                return null
        }
    }

    function ud(a) {
        return Ed(a, !0)
    }

    function wc(a, b) {
        return {
            timeout: a,
            url: Ed("url", b),
            name: Ed("name", b),
            startTime: Ed("start", b),
            type: Ed("type", b) || "-",
            title: Ed("title",
                b)
        }
    }

    function Jd(a) {
        if (v(Ef)) Ef.ei(a);
        else if (Qd) {
            for (var b = Qd; b.next && b !== a;) b = b.next;
            b === a && (Ed("name") && (Ud = Qd), b.target = void 0, b.Eb && (b.Eb.next = b.next), b.next && (b.next.Eb = b.Eb), b === Qd && (Qd = b.next))
        }
    }

    function kd(a) {
        void 0 === a && (a = "");
        return a ? (Kc("doNotDetect") ? Kc("doNotDetect").split(",") : []).includes(a) : !1
    }

    function Sc(a, b, f) {
        if (!kd(f)) {
            var k = b ? b : a;
            sk[a] = function(p) {
                var x, N;
                H((x = {}, x.kind = "GLOBAL_EVENT_FIRED", x.detail = (N = {}, N.t = a, N.e = p, N), x));
                x = Nb("ote");
                N = Nb("ase");
                var ca = "boolean" !== typeof p.isTrusted ||
                    p.isTrusted,
                    ra = p.isRuxitSynthetic;
                if (N ? ra : !x || ca) {
                    (x = p.target || p.currentTarget || p.srcElement || null) && x.shadowRoot && p.composed && p.bubbles && "function" === typeof p.composedPath && (N = p.composedPath()) && N.length && (x = N[0]);
                    a: {
                        N = x;
                        if (("KD" === k || "KU" === k) && Aa(N) && "password" !== N.type)
                            if (p = p.keyCode || p.charCode || p.code, N = +p, Nb("uam") && !isNaN(N)) {
                                if (N = String.fromCharCode(N), !("a" <= N && "z" >= N || "A" <= N && "Z" >= N || "0" <= N && "9" >= N)) {
                                    p += "";
                                    break a
                                }
                            } else {
                                p += "";
                                break a
                            }
                        p = ""
                    }
                    Dd(x, k + p, void 0, 30)
                }
            };
            Ae(document, a, sk[a])
        }
    }

    function n(a) {
        xd =
            a;
        if (!a) {
            for (a = Qd; a;) a.target = void 0, a = a.next;
            Qd = void 0
        }
    }

    function v(a) {
        return a !== S() && Za(a)
    }

    function y(a) {
        si = a
    }

    function J(a, b) {
        var f;
        if (b <= si) return !1;
        b = null === (f = wd) || void 0 === f ? void 0 : f.Tb();
        f = !!b && a === b.name;
        b = Fg;
        if (!b) return !f;
        a = a === b.name && (!b.B || 3E3 >= oc() - b.start);
        return !f && !a
    }

    function L(a, b) {
        if (!Nb("dsa") || !a.startsWith("false")) {
            var f = Nb("dssv"),
                k = Nb("dsss"),
                p = k && f,
                x = k && !f,
                N = f && !k;
            f = !f && !k;
            k = b ? a + "|" + b : a;
            var ca = Qh();
            p && E(ca, k);
            x && (E(ca, a), og(ca, Ig(b || "-"), void 0, Nb("ssc")));
            N && (E(ca, b || "-"),
                og(ca, Ig(a), void 0, Nb("ssc")));
            f && og(ca, Ig(k), void 0, Nb("ssc"))
        }
    }

    function Z() {
        var a = null,
            b = ce[0];
        if (b) {
            b.Ea(0);
            b.oe();
            a = b;
            for (var f = 0; f < b.subActions.length; f++) a = b.subActions[f], a.Ea(0), a.oe()
        }
        return a
    }

    function ja(a, b, f, k, p, x) {
        void 0 === a && (a = oc());
        var N = ua(!0),
            ca = wd || Z(),
            ra = [];
        if (!N && b && f && a) ra = [!p + "", ha(f), p || "-1", ha(b), ha(k || "-"), a, Df(), Ra(gb()), "", "", ha(location.hash.substring(1)), ha(x || "")];
        else if (ca) {
            ca.Mb();
            var fb = ca.status;
            ca.status = 2;
            ac(function() {
                ca.status = fb
            }, 0);
            ra = ["false", ha(ca.type),
                ca.id, ha(ca.name), ha(ca.info || "-"), ca.start, Df(), Ra(gb()), "", "", ha(location.hash.substring(1)), ha(ca.aa || "")
            ]
        }
        return ra
    }

    function va(a, b, f) {
        void 0 === b && (b = null);
        var k = !1,
            p = $e();
        Za(p) && (k = p.iSAC());
        if (!k || p === S()) {
            a && (L("-"), tk = []);
            k = jd();
            if (!k) {
                var x = Nd();
                x && J(ud("name"), ud("start")) && 3E3 >= oc() - ud("validUntil") && (k = x)
            }
            x = [];
            k && !k.kc ? (k.th(), x = ja(k.start, k.Rb(), k.type, k.info, k.D, k.aa)) : b ? x = ja(b.start, b.name, b.type, b.info, b.id, b.aa) : a && (x = ja(f));
            a = x;
            f = tk;
            1 < f.length && 1 < a.length && f[3] === a[3] && (f[2] = a[2],
                f[0] = a[0], a = f);
            a.length && (f = X, b = f.timestamp, k = f.group, f = [Ra(f.name), b, Ra(k || ""), ha(ic(f, !0))], L(a.join("|"), f.join("|")), tk = a.concat(f), Za(p) && p.sSAC(!0, !0))
        }
    }

    function Oa(a, b) {
        return zj("mcepsl") ? G(b) : G(b, Yb("mcepsl"))
    }

    function Va(a, b, f, k) {
        var p;
        void 0 === f && (f = !1);
        return "tvn" === a || "svn" === a || "tvg" === a || "svg" === a ? b : b && b.length > k ? (f && (null === (p = Eb.console) || void 0 === p ? void 0 : p.log("Truncating agent event because the size for property [".concat(a, "] exceeds size limit of ").concat(k, " characters: [").concat(b.length,
            "]"))), Hb(b, k, "lcpSel" === a)) : b
    }

    function zb(a, b) {
        for (var f = Yb("mcepsl"), k = [], p = 0; p < b.length; p++) {
            var x = b[p],
                N = x[0],
                ca = x[1];
            x = N;
            if (0 !== Gb) {
                var ra = X,
                    fb = ra.name,
                    qb = ra.group;
                ra = ra.timestamp;
                ca = fb && ca === fb && "tvn" === x || qb && ca === qb && ("tvg" === x || "svg" === x) || ra && ca === ra + "" && "tvt" === x ? "" : ca
            }
            x = Va;
            fb = uk[a];
            "function" === typeof fb && (x = fb);
            "object" === typeof fb && fb[N] && (x = fb[N]);
            fb = Hb(N, f);
            (N = x(N, ca, !1, Yb("mcepsl"))) && fb && k.push([fb, N])
        }
        return k
    }

    function Tb(a, b) {
        void 0 === b && (b = 1);
        var f = [b + "", a.id + "", "_event_", a.timestamp +
            "", a.kind + ""
        ];
        a = zb(a.kind, a.$b);
        Fa(a, function(k) {
            var p = k[1];
            f.push(ha(k[0]));
            f.push(ha(p))
        });
        return f.join("|")
    }

    function tc(a, b, f) {
        for (var k, p, x = "", N = "", ca = 0; ca < a.length; ca++) {
            var ra = a[ca];
            ra.Pe();
            var fb = ra.Hc();
            ra.$c(f);
            x || (x = ra.cb());
            N = ra.cb();
            if ("_load_" === ra.type && (Td = !0, k = rh)) {
                N = [k.id, k.name, k.type, k.info, k.frameId, k.startTime];
                k.isDelayed ? (p = "", k.anchor && (p = "#" + k.anchor), N.unshift("d"), p = ha(k.Ba + p), N.push(p, "")) : N.unshift("s");
                N.push(k.aa || "");
                if (k.ua) {
                    p = k.ua;
                    var qb = p.timestamp,
                        db = p.group;
                    N.push(p.name);
                    N.push(qb);
                    db && N.push(db)
                }
                k = k.Ba;
                p = N.join("|");
                N = k;
                b.push(p);
                rh = null
            }
            ra.parentFrameActionName && (k = b, p = k.push, qb = ra.Xe, ra = [0, ra.We, ha(ra.parentFrameActionName), qb].join("|"), p.call(k, ra));
            b.push(fb)
        }
        return {
            hb: x,
            Ba: N
        }
    }

    function pc(a, b) {
        var f, k, p = Qa(ce, function(ra) {
                return (ra.Ce() || a || b) && !ra.wh()
            }),
            x = pf;
        if (b) {
            x = [];
            pf = [];
            for (var N = 0; N < p.length; N++) {
                var ca = p[N];
                H((f = {}, f.kind = 2 <= ca.status ? "ACTION_BEACON_FORCED" : "ACTION_CLOSED", f.detail = (k = {}, k.a = ca.start, k.s = ca.stop, k.r = ca.La(), k.i = ca.id, k.f = !0, k.t = ca.type,
                    k.x = ca.xhrUrl, k.rt = void 0, k.xm = ca.nb, k.xe = ca.Wa, k.cs = ca.Ga, k.ce = ca.Ra, k["in"] = ca.info, k), f))
            }
            Yd.Ca = [];
            Rb(wd && null !== wd ? wd.Tb() : null);
            wd = null
        }
        return {
            lh: p,
            qg: x
        }
    }

    function Xc(a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = !1);
        var f = [],
            k = pc(b, a);
        b = k.qg;
        k = tc(k.lh, f, a);
        a = k.hb;
        k = k.Ba;
        Fa(Aj, function(p) {
            f.push(Tb(p))
        });
        ce = eb([], b, !0);
        Aj = [];
        return {
            xc: f.join(","),
            referer: a,
            sourceUrl: k
        }
    }

    function vd(a, b, f, k) {
        for (var p = 0, x = Se().slice(); p < x.length; p++) {
            var N = x[p];
            try {
                N(a, b, f, k)
            } catch (ca) {}
        }
    }

    function je() {
        return vk
    }

    function Xd(a) {
        a =
            ha(a);
        Vl.includes(a) || Vl.push(a)
    }

    function Ie(a) {
        return Vl.includes(a)
    }

    function Je() {
        var a = {};
        try {
            for (var b = ti; b && b !== Eb;) {
                var f = b.dT_;
                Za(f) && f.version !== Pa() && (a[f.version] = 1);
                b = b !== b.parent ? b.parent : void 0
            }
        } catch (k) {}
        return a
    }

    function Wa() {
        return !Rh
    }

    function fg(a, b, f, k) {
        b = Je();
        b = Qa(w(b), Bg);
        wk.push.apply(wk, b);
        0 < b.length && (b.unshift(Pa()), a.av(k, "afv", b.join(",")))
    }

    function Bg(a) {
        return !wk.includes(a)
    }

    function hf() {
        if (ti && ti !== Eb) {
            var a = ti.dT_;
            Za(a) && a.version === Pa() && rb(S(), a) && (Wg = a, a = Wg.tdto(),
                Za(a) && (Rh = a))
        }
    }

    function jf() {
        try {
            hf()
        } catch (b) {}
        Rd(fg);
        var a = S();
        Rh ? (vk = Rh.pageId, a.Ve = Rh.Ve, xk = Wg.gFId(), Wg.Ti++) : (vk = Df(), a.Ve = document.title);
        a.pageId = vk;
        B("DEBUG_INFO_REQUESTED", function() {
            var b = Je();
            b = w(b);
            return 0 === b.length ? null : [{
                severity: "Error",
                text: "Version of current agent ".concat(Pa(), " mismatches with version").concat(1 < b.length ? "s" : "", " ").concat(b.join(", "), " of parent frames. Make sure to use the same version on all frames to secure compatibility!"),
                type: "mpv"
            }]
        })
    }

    function se(a) {
        return a &&
            1 === a.length ? Kc("featureHash").includes(a) : !1
    }

    function vf(a, b, f, k) {
        void 0 === k && (k = Xe(a));
        var p = Eb.dT_,
            x = !!S().syn;
        b = b || !x;
        a = x && !p.iMod().includes(a);
        return b && f && (k || a)
    }

    function Xe(a) {
        var b = Eb.dT_;
        if (b.ism(a) && !b.iMod().includes(a)) return b.iMod(a), !0;
        b.ism(a) && (a = 'Module "' + a + '" already enabled!', S().gCP || Eb.console.log("WARNING: " + a));
        return !1
    }

    function tf(a) {
        var b = rg.initializedModules || "";
        a && (b += a);
        return rg.initializedModules = b
    }

    function Uc(a, b) {
        void 0 === b && (b = Pa());
        var f = Kc("agentUri");
        f = f.substring(0,
            f.lastIndexOf("/"));
        var k = Kc("csu");
        "true" === Xg("dtUseDebugAgent") && Eb.dT_debugger && !k.includes("dbg") && (k = Kc("debugName") || k + "dbg");
        return "".concat(f, "/").concat(k, "_").concat(a, "_").concat(b, ".js")
    }

    function hd(a) {
        return rg[a]
    }

    function ad(a, b) {
        var f;
        rg[a] = b + "";
        H((f = {}, f.kind = "CONFIG_UPDATE", f.detail = rg, f))
    }

    function ag(a) {
        var b = a.Xg,
            f = a.ud;
        return a.ag || b && "sendBeacon" in navigator && !Nb("dsndb") && !f ? Bm : Vg.ff ? Cm : Wl
    }

    function Jh() {
        return ui
    }

    function u(a, b, f, k, p, x) {
        sh = !1;
        a = k || ui.Ze(a, b, f);
        return a.beacon ?
            ob(!!f, a, p, x) : 0
    }

    function t(a, b, f, k, p, x) {
        var N = Te(tb("dtAdkSettings")).overloadState;
        Yi = N;
        if (1 === N) return 0;
        if (2 !== N) return u(a, b, f, k, p, x) || 0;
        if (f) return 0;
        ac(function() {
            t(a, b, f, k, p, x)
        }, 5E3);
        return 0
    }

    function z(a, b) {
        var f = document.cookie,
            k = th(f),
            p = Kc("cuc");
        R(b, "sn", encodeURIComponent(k));
        R(b, "latency", "0");
        R(b, "flavor", Nb("cors") ? "cors" : "post");
        if (void 0 === b.crc) {
            var x;
            k = a.Ae ? a.pd : a.uf();
            "string" === typeof k ? x = (new TextEncoder).encode(k) : x = k;
            k = -1;
            for (var N = 0; N < x.length;) k = k >>> 8 ^ Jg[(k ^ x[N++]) & 255];
            x = (k ^ -1) >>> 0; - 1 !== x && (b.crc = x)
        }
        R(b, "vi", encodeURIComponent(a.Sb("vi") || Ph()));
        R(b, "bp", 3);
        R(b, "v", vi);
        R(b, "app", encodeURIComponent(Kc("app")));
        R(b, "type", "js3");
        R(b, "dtAdk", encodeURIComponent(tb("dtAdk", f)));
        R(b, "contentType", "");
        R(b, "modifiedSince", Yb("lastModification"));
        R(b, "svrid", ue());
        p && (b.en = p);
        b.contentType && "srRs" === b.contentType && R(b, "msl", Yb("msl"));
        b.end = 1
    }

    function R(a, b, f) {
        void 0 === a[b] && (a[b] = f)
    }

    function ka(a) {
        var b = "type sn svrid flavor vi contentType modifiedSince".split(" ");
        Nb("owasp") ||
            b.push("rf");
        Nb("cors") && b.push("dtAdk");
        b.push("bp");
        Kc("app") && b.push("app");
        a.contentType && b.push("v");
        "event" === a.contentType && b.push("st"); - 1 !== a.crc && b.push("crc");
        Kc("cuc") && b.push("en");
        "srRs" === a.contentType && b.push("msl");
        b.push("end");
        return b
    }

    function La(a, b) {
        z(a, b);
        var f = ka(b);
        a = Kc("reportUrl");
        (f = Ba(Qa(f, function(k) {
            return !!b[k]
        }), function(k) {
            return "".concat(k, "=").concat(b[k])
        }).join("&")) && (a += "?" + f);
        return a
    }

    function ob(a, b, f, k) {
        var p;
        void 0 === f && (f = !1);
        void 0 === k && (k = (p = {}, p.contentType =
            "", p));
        if (da() || !b.beacon) return 0;
        var x = b.beacon,
            N = b.referrer || Qb();
        ib(k, N, x);
        b = Zb(x);
        if (!b.length) return 0;
        var ca = ag({
                ag: Nb("svNB"),
                Xg: a,
                ud: f
            }),
            ra = La(x, k);
        Fa(Ba(Ba(b, function(fb, qb, db) {
            return {
                path: ra,
                hb: N,
                beacon: x,
                Ac: fb,
                fg: qb,
                gg: db.length,
                ud: f
            }
        }), function(fb) {
            return new ca(fb)
        }), Ab);
        return 2
    }

    function ib(a, b, f) {
        b = encodeURIComponent(b || "");
        R(a, "rf", dc(b, Yb("mhl"))[0]);
        Nb("owasp") && ui.av(f, "rf", b);
        ui.av(f, "time", oc())
    }

    function Ab(a) {
        return !!Da(Bb, a)
    }

    function Bb(a) {
        a.send().catch(function() {})
    }

    function Zb(a) {
        if (a.pd) return [a.pd];
        a = a.uf();
        var b = S().syn ? 145E3 : Yb("msl") - 40;
        var f = a.length;
        b = 0 === f % b ? Math.floor(f / b) : Math.floor(f / b) + 1;
        if (!(1 < b)) return [a];
        if (1 > b || 20 < b) return [];
        b = S().syn ? 145E3 : Yb("msl") - 40;
        f = "sid=" + oc() + "&p#index#_#total#=";
        return dc(a, b, f)
    }

    function lc(a) {
        sh ? "number" !== typeof a ? Lc() : oc() + a < uh && Lc(a) : Lc(a)
    }

    function Lc(a) {
        Yg(Xl);
        "number" === typeof a ? (uh = oc() + (a || 0), Xl = ac(t, a), sh = !0) : t()
    }

    function Oc(a, b) {
        return t(a, b, !1)
    }

    function sc(a) {
        Se().push(function(b, f, k, p) {
            a(p, f, k, p.Nb)
        })
    }

    function Vc() {
        for (var a = ya(), b = [], f = 0; f <
            a.length; f++) b.push({
            severity: "Error",
            type: "be",
            text: "Beacon sending failure instance ".concat(f + 1, " of ").concat(a.length, ": ").concat(a[f])
        });
        100 === a.length && b.push({
            severity: "Error",
            type: "be",
            text: "Beacon sending failures exceeded limit of ".concat(100, " errors!")
        });
        return b
    }

    function $f() {
        vi = parseInt(Pa());
        ui = new Kg;
        dl = 0;
        Sh(function(a, b, f) {
            f && (10 > Zg.length ? Zg.push(f) : (a = Zg[10]) ? Zg[10] = +a + 1 + "" : Zg.push("1"))
        });
        Yi = Te(tb("dtAdkSettings")).overloadState;
        B("DEBUG_INFO_REQUESTED", Vc)
    }

    function qd() {
        for (var a = !1, b = [], f = 0, k = pf; f < k.length; f++) {
            var p = k[f];
            p.bc && 0 < p.bc && (p.Va && oc() > p.Va && (p.Va += 6E4, b.push(p)), a = !0)
        }
        0 < b.length && t(!0, !0);
        for (f = 0; f < b.length; f++) k = b[f], k.bc && k.bc--;
        a && ac(qd, 1E3)
    }

    function Bc(a, b, f) {
        var k = wd;
        k !== a && (k && !f && Rb(k), (wd = a) ? Da(vh, a.id, b) : sd())
    }

    function $d(a) {
        var b;
        wh = null;
        var f = (null === (b = null === Wg || void 0 === Wg ? void 0 : Wg.gca) || void 0 === b ? void 0 : b.call(Wg)) || [];
        if (wh = f[f.length - 1]) a.We = wh.id, a.parentFrameActionName = wh.name, wh.childFrameActions ? wh.childFrameActions++ : wh.childFrameActions =
            1
    }

    function Hd() {
        var a = Te(tb("dtAdkSettings")).overloadState;
        if (Yi !== a && (Yi = a, 0 !== a)) {
            a = 0;
            for (var b = pf; a < b.length; a++) b[a].Zc()
        }
    }

    function rd() {
        var a = [];
        for (var b = Yd.Ca.length - 1; 0 <= b; b--)
            if (Yd.Ca[b].Ce()) {
                var f = Ea(Yd.Ca, b);
                a = a.concat(f)
            }
        b = !1;
        Hd();
        f = pf;
        for (var k = f.length - 1; 0 <= k; k--) {
            var p = f[k];
            if (p.xh) Ea(f, k);
            else {
                var x = a.includes(p),
                    N = wh;
                x ? (Ea(f, k), b = !0) : N && (x = Wg.gca(), p.Xe = ti && x[x.length - 1] === N ? "S" : "A", wh = null)
            }
        }
        b && lc()
    }

    function gd() {
        "hidden" === document.visibilityState ? (Zi = "1", ze()) : Zi = "0"
    }

    function ze() {
        var a;
        H((a = {}, a.kind = "VISIBILITY_CHANGED", a.detail = Zi, a))
    }

    function dd(a, b, f) {
        if (ub(Array.prototype.reduce)) return Array.prototype.reduce.call(a, b, f);
        var k = "undefined" !== typeof f;
        f = k ? f : a[0];
        if ("undefined" === typeof f) throw new TypeError("Reduce of empty array with no initial value");
        for (k = k ? 0 : 1; k < a.length; k++) f = b(f, a[k], k, a);
        return f
    }

    function Ke(a, b, f, k) {
        var p = ed() + Math.round(f.startTime),
            x = p - a;
        p >= a && p <= b && 0 <= x && (null == k.rb || x < k.ed) && (k.rb = f, k.ed = x)
    }

    function Zc(a, b, f) {
        return dd(a, function(k, p) {
            if ("rtRequestId" in
                p) return k;
            Ke(b, f, p, k);
            return k
        }, {
            rb: null,
            ed: Number.MAX_VALUE
        }).rb
    }

    function hc(a, b) {
        return Qa(a, function(f) {
            return f.initiatorType === b
        })
    }

    function Ee(a, b, f, k) {
        try {
            if (!(a && performance && performance.getEntriesByName)) return null;
            var p = hb(a);
            p.startsWith("/") ? p = location.protocol + "//" + location.host + p : p.startsWith("http") || (p = location.href.substring(0, location.href.lastIndexOf("/") + 1) + p);
            var x = performance.getEntriesByName(p);
            b && (x = hc(x, b));
            if (x.length) return f ? Zc(x, f, k || Number.MAX_VALUE) : x[x.length - 1];
            x =
                performance.getEntriesByType("resource");
            b && (x = hc(x, b));
            p.includes("?") || (p += "?");
            for (var N = {
                    rb: null,
                    ed: Number.MAX_VALUE
                }, ca = x.length - 1; 0 <= ca; ca--) {
                var ra = x[ca];
                if (0 === ra.name.lastIndexOf(p, 0))
                    if (f) Ke(f, k || Number.MAX_VALUE, ra, N);
                    else return ra
            }
            return N.rb
        } catch (fb) {
            return null
        }
    }

    function ef(a) {
        return $i && I(a, 13) && "navigation" !== a.entryType || I(a, ["_dtCl"])
    }

    function cg(a) {
        return Vm && I(a, 14) || I(a, ["entryType", "requestStart"]) && "navigation" === a.entryType
    }

    function eh(a) {
        Yc++;
        (a = Hc(a.detail.i)) && !a.ua &&
            (a.ua = X)
    }

    function qe(a) {
        Yc--;
        if (a = Hc(a.detail.i)) a.Bh = Wc(a.stop) || X;
        1 > Yc && (Gd = [])
    }

    function bg(a, b, f) {
        var k = b[Th[a]];
        b = b.startTime;
        if (k)
            if ("yK".includes(a)) f.push(a, k);
            else if ("T" === a) "number" === typeof k && 0 > k && 0 === k % 1 && f.push(a, k);
        else {
            var p = +k >= b;
            "j" === a && Uh(k, 2) && Math.abs(k - b) < Wm && (p = !1);
            var x = k;
            "uvwxACDEFNOPQRSTUX".includes(a) ? p = 0 <= +k : "number" === typeof k ? x = Math.round(k - b) : x = k;
            p && f.push(a, x)
        }
    }

    function Mf(a, b, f) {
        if (b = b[Uf[a]]) {
            var k = 0 <= b;
            "j" === a && 0 === b && (k = !1);
            k && f.push(a, Math.round(b))
        }
    }

    function dh(a,
        b, f) {
        (b = b[Vf[a]]) && f.push(a, b)
    }

    function Fe(a, b) {
        a = a.serverTiming;
        for (var f = {}, k = 0, p = Dm; k < p.length; k++) {
            var x = p[k];
            f[x] = ""
        }
        if (a) {
            for (k = 0; k < a.length; k++) p = a[k], p.description && !isNaN(+p.description) && (x = p.name, x in f && !f[x] && (f[x] = p.description));
            f.dtRequestID && (b.push("C"), b.push(f.dtRequestID));
            f.dtRpid && (b.push("M"), b.push(f.dtRpid));
            f.dtSInfo && (b.push("V"), b.push(f.dtSInfo));
            f.dtTao && (b.push("W"), b.push(f.dtTao))
        }
    }

    function ee(a, b, f, k) {
        var p = 0;
        for (a = w(a); p < a.length; p++) f(a[p], b, k)
    }

    function dg() {
        if (!window.performance) return [];
        var a = null,
            b = -1,
            f = ed();
        "getEntriesByType" in performance && (a = performance.getEntriesByType("navigation")[0]) && a.type && (b = Xm[a.type]);
        a && "responseEnd" in a || (a = performance.timing); - 1 === b && (b = performance.navigation.type);
        return (!S().googleBot || S().syn) && 0 < f ? (b = ["a", b, "b", Math.round(f)], ye(a, b, f), b) : []
    }

    function ye(a, b, f) {
        if (Ym && I(a, 12) || I(a, ["navigationStart"]) && !("entryType" in a))
            for (var k in cf) {
                if (fa(cf, k)) {
                    var p = k,
                        x = a[cf[p]];
                    if (x) {
                        var N = x >= f;
                        "j" === k && x === f && (N = !1);
                        N && b.push(p, Math.round(x - f))
                    }
                }
            } else if (f =
                S(), f = f.gFU ? f.gFU() : {}, ef(a)) {
                ee(Th, a, bg, b);
                k = b.push;
                x = k.apply;
                N = [];
                if (ef(a)) {
                    if ("xmlhttprequest" === a.initiatorType || "fetch" === a.initiatorType) {
                        var ca = "1";
                        aj[a.name] && (ca = "11", delete aj[a.name]);
                        N.push("z", ca)
                    } else aj[a.name] && (N.push("z", "01"), delete aj[a.name]);
                    ca = "";
                    "frame" === a.initiatorType ? ca = "f" : "iframe" === a.initiatorType || "subdocument" === a.initiatorType ? ca = isNaN(f[a.name]) ? "i" : "i" + f[a.name] : 0 <= (a.frameId || -1) && (ca = "r" + a.frameId);
                    ca && N.push("B", ca)
                } else aj[a.name] && (N.push("z", "01"), delete aj[a.name]);
                x.call(k, b, N);
                b.push("I", null !== (p = Yl[a.initiatorType]) && void 0 !== p ? p : 0);
                Fe(a, b)
            } else cg(a) ? (ee(Uf, a, Mf, b), Fe(a, b)) : ee(Vf, a, dh, b)
    }

    function Lf() {
        Nb("ntd") || Rd(function(a, b, f, k) {
            b || Em || !a.hla(k) || (Em = !0, b = Zl || dg(), a.av(k, "nt", b.join("") || "0", !0), Zl = void 0)
        })
    }

    function gg(a) {
        var b;
        if (!a) return null;
        var f = null === (b = a.getEntriesByType) || void 0 === b ? void 0 : b.call(a, "navigation")[0];
        cg(f) || (f = a.timing);
        return f
    }

    function pe(a, b) {
        void 0 === b && (b = !1);
        if (!a) return null;
        for (var f, k = Kd(a), p = 0, x = Zm; p < x.length; p++)
            if (f =
                Ac(a, x[p], b) || -1, 0 < f && f !== k) return Math.round(f);
        return null
    }

    function Ac(a, b, f) {
        void 0 === f && (f = !1);
        var k = gg(a);
        if (!k) return null;
        b = k[b];
        if ("number" !== typeof b || 0 === b) return null;
        a = Kd(a);
        cg(k) ? f && (b += a) : f || (b -= a);
        return Math.round(b)
    }

    function Kd(a) {
        var b;
        return Math.round(a.timeOrigin || (null === (b = a.timing) || void 0 === b ? void 0 : b.navigationStart) || -1)
    }

    function Wd() {
        var a;
        H((a = {}, a.kind = "INSTRUMENTATION_TRIGGERED", a.detail = void 0, a))
    }

    function zd(a) {
        var b = pf;
        $d(a);
        b.push(a);
        b = wd;
        b !== a && (Rb(b), wd = a);
        ce.push(a);
        ac(qd, 5E3)
    }

    function Ld(a) {
        var b = a.start,
            f = a.xhrUrl,
            k = a.Ad,
            p = a.Ba,
            x = a.tb;
        x = void 0 === x ? !1 : x;
        var N = a.isCustomAction;
        N = void 0 === N ? !1 : N;
        var ca = a.fb;
        ca = void 0 === ca ? !1 : ca;
        var ra = a.rf;
        ra = void 0 === ra ? -1 : ra;
        var fb = a.aa;
        fb = void 0 === fb ? "" : fb;
        var qb = a.ua,
            db = a.Wc,
            Wb = a.id;
        a = new $g(b, a.stop || b, a.type, a.name, a.info || "", a.domNodes || -1, he(void 0 === p ? "" : p), document.title, f || "", N, ca, x, k, ra, fb, Fm, qb, db, Wb);
        Hd();
        a.Sc() && Yd.Ca.push(a);
        Yd.actions[a.id] = a;
        Da(xh);
        return a
    }

    function he(a) {
        if (a) {
            var b = document.createElement("a");
            b.href = a;
            if ("file:" === b.protocol || "about:" === b.protocol || b.hostname) return b.href;
            var f = function(k, p, x, N) {
                k.av(N, "rfi", 1, !1);
                Bj(f)
            };
            Rd(f)
        }
        return location.href
    }

    function te(a) {
        var b, f, k;
        a.start || (a.start = oc());
        var p = Ld(a);
        p.qa = ac(function() {
            if (p && (3 !== p.status || p.Vc())) {
                var N = p.start + 1E3 * Yb("oat");
                Md(p.id, N, void 0, !0)
            }
        }, 1E3 * Yb("oat"));
        var x = null;
        switch (Fb(a.Aa)) {
            case 1:
                x = wd;
                break;
            case 2:
                if (x = Hc(a.Aa), !x && "_load_" === a.type) return p
        }
        H((b = {}, b.kind = "ACTION_ENTERED", b.detail = (f = {}, f.i = p.id, f.a = a.start,
            f.s = 0, f.x = a.xhrUrl, f.r = x ? x.La() : p.id, f.t = p.type, f.e = null === (k = jd()) || void 0 === k ? void 0 : k.target, f.rt = void 0, f.xm = p.nb, f.xe = p.Wa, f.cs = p.Ga, f.ce = p.Ra, f["in"] = p.info, f), b));
        "undefined" === typeof a.rf && Bc(p, !1, !!x);
        if (x)
            for (x = x.Tb(), x.Od(p), a = 0, b = pf; a < b.length; a++) f = b[a], f.Va && f.Va > p.start + 1E4 && (f.Va = p.start + 1E4);
        else zd(p.Ig()), Be();
        return p
    }

    function Md(a, b, f, k) {
        var p, x;
        void 0 === k && (k = !1);
        a = Hc(a);
        var N = S();
        !b && a && "_load_" === a.name && "_load_" === a.type && N.gLVD && ((k = Ac(Eb.performance, "loadEventEnd")) ? (b =
            N.gVCP(), b = Math.max(b, k) + ed()) : b = oc(), k = !0);
        N = "number" === typeof b && (null === a || void 0 === a ? void 0 : a.isCustomAction);
        b = b || oc();
        a && (H((p = {}, p.kind = "ACTION_LEFT", p.detail = (x = {}, x.i = a.id, x.a = a.start, x.s = b, x.r = a.La(), x), p)), a.Ec(b, f, N, k), rd());
        Bc(mc(), !0)
    }

    function ff(a, b, f) {
        var k = wd;
        "undefined" !== typeof b && null !== b && (k = Hc(b));
        if (k) return k.Od(a, f), !1;
        $d(a);
        ce.push(a);
        return !0
    }

    function zg(a, b, f, k, p, x, N, ca) {
        "undefined" === typeof k ? k = !0 : null === k && (k = !1);
        a = {
            name: vc(a),
            type: b,
            start: f,
            Aa: k,
            info: p || "",
            xhrUrl: x ||
                "",
            isCustomAction: !!N
        };
        ca && (a.Ba = ca);
        return te(a).id
    }

    function Ye(a, b, f) {
        Wd();
        Md(a, b, f)
    }

    function pi(a, b, f, k) {
        a = Ld({
            type: a,
            name: Hb(b + "=" + f, Yb("mpl")),
            start: oc(),
            tb: !0
        });
        ff(a, k);
        lc()
    }

    function fh(a) {
        for (var b = Yd.Ca.slice(), f = 0; f < b.length; f++) Md(b[f].id, a);
        return b.length
    }

    function uf(a) {
        for (var b = 0, f = Lg; b < f.length; b++)
            if (f[b].D === a) return !0;
        return !1
    }

    function Nf(a) {
        if (Ya(a)) return !0;
        var b = rf();
        return !!((null === b || void 0 === b ? 0 : b.exec) && a && (b.exec(a) || b.exec(hb(a))))
    }

    function gf(a, b, f, k, p, x, N) {
        void 0 === b &&
            (b = 3);
        void 0 === f && (f = "");
        void 0 === k && (k = !1);
        void 0 === p && (p = void 0);
        void 0 === x && (x = !1);
        void 0 === N && (N = !1);
        if (f && Nf(f)) return 0;
        var ca = qc(f),
            ra = jd(),
            fb = a || "-",
            qb = ua(!1);
        if (Gc) {
            if (qb && !Hc(qb)) return 0;
            jc = !0
        }
        ra && (ra.info = "-" === ra.info ? fb : ra.info + ", " + fb);
        !qb && (null === ra || void 0 === ra ? 0 : ra.D) && (qb = ra.D);
        f = hb(f);
        aj[f] = !0;
        a = {
            name: a,
            type: "xhr",
            start: oc(),
            info: fb,
            xhrUrl: ca,
            isCustomAction: k,
            Ad: p,
            Wc: N
        };
        qb ? (ra = 0, x || (a.Aa = qb, ra = gh(a))) : ra ? (qb = 0, 3 <= b && (qb = Ge(Ka(Ka({}, a), {
            name: ra.Rb(),
            type: ra.type,
            start: ra.start,
            info: ra.info,
            Ba: ra.url,
            Aa: !1,
            aa: ra.aa || "",
            ua: ra.view
        })), ra.D = qb, ra.kc && va(!0, Hc(qb))), ra = qb) : (ra = wd) ? (qb = 0, 1 <= b && !x && (qb = gh(Ka(Ka({}, a), {
            Aa: ra.id
        }))), ra = qb) : ra = Nb("cux") ? Ge(Ka(Ka({}, a), {
            name: "Unlinked XHR",
            type: "xhr",
            Aa: !1
        })) : 0;
        return ra
    }

    function Ge(a) {
        a: {
            var b = a.info;
            var f = a.xhrUrl;
            if (a.Ad && Lg.length)
                for (var k = Lg.length - 1; 0 <= k; k--) {
                    var p = Lg[k],
                        x = p.D,
                        N = Ic(x);
                    if (N && b && !b.startsWith(p.tg) && Pb(N.xhrUrl || "") === p.xhrUrl && p.xhrUrl === Pb(f || "")) {
                        b = x;
                        break a
                    }
                }
            b = 0
        }
        if (b) return b;a.fb = !0;
        return te(a).id
    }

    function gh(a) {
        var b =
            a.Aa,
            f = null;
        "number" === typeof b && (f = Ic(b));
        a.Aa = f ? f.id : !0;
        return Ge(a)
    }

    function eg(a, b, f, k) {
        void 0 === b && (b = oc());
        void 0 === k && (k = Ma);
        var p = Ic(a);
        if (!p) return -1;
        p.He();
        return ac(function() {
            kf(a, b, f);
            k()
        }, 0)
    }

    function kf(a, b, f) {
        void 0 === b && (b = oc());
        var k = Ic(a);
        !k || f && !k.info.includes(f) && k.name !== f || (k.He(), ac(function() {
            if (!jc) {
                var p = b;
                Ic(a) && Md(a, p)
            }
        }, Cj), Wd())
    }

    function Ag(a, b) {
        if (a) {
            var f = Ic(a);
            f && (f.hd++, f.Ga || b && 4 !== b || f.vh(oc()), qg.push(a), Pd++)
        }
    }

    function re(a) {
        if (a) {
            var b = Ic(a);
            b && (b.uh(oc()),
                b.hd--, Pd--, ac(function() {
                    D(a)
                }, 0))
        }
    }

    function He(a, b, f) {
        if ("number" !== typeof a || isNaN(a) || 0 > a) return !1;
        0 === a && (a = 971, b = "XHR Canceled");
        b && (b += "");
        f = Hc(f) || wd;
        if (!f || -1 !== f.Wa || !f.fb) return !1;
        f.Wa = a;
        b && 0 < b.length && (f.nb = b);
        return !0
    }

    function g() {
        return !Nb("disableXhrFailures")
    }

    function q(a) {
        return (a = Hc(a)) && a.fb ? [a.Ga, a.Ra] : [0, 0]
    }

    function F(a, b) {
        var f = Ic(a);
        if (f) {
            var k = f.xhrUrl;
            f.jf(b);
            f = 0;
            for (var p = Lg; f < p.length; f++) {
                var x = p[f];
                x.D === a && x.xhrUrl === Pb(k) && (x.xhrUrl = Pb(b))
            }
        }
    }

    function C(a) {
        return (a = Ic(a)) ?
            a.xhrUrl : ""
    }

    function Y(a, b) {
        (a = Ic(a)) && a.qh(b)
    }

    function O(a, b, f, k, p) {
        void 0 === k && (k = "headers");
        void 0 === p && (p = void 0);
        a = a || {};
        b = b || a.url;
        a[k] = a[k] || {};
        f = f || a.actionId;
        var x;
        if (!(x = !a[k] || !bj())) {
            if (x = !Ya(b)) x = !(Dj && b && (Dj.test(b) || Dj.test(hb(b))));
            x = !x
        }
        if (x) return a;
        var N = !(!wi || !b || !wi.test(b) && !wi.test(hb(b)));
        var ca = "";
        x = yd(f);
        if (N) {
            ca = M(f);
            N = a;
            var ra = ca,
                fb = k,
                qb = [],
                db = th(),
                Wb = ue(db).replace("-", "-2D");
            qb.push('sn="v_4_srv_'.concat(Wb, "_sn_").concat(xi(db), '"'));
            ra && qb.push('pc="'.concat(ra, '"'));
            qb.push('v="'.concat(yi(), '"'));
            qb.push('app="'.concat(Kc("app"), '"'));
            (ra = tb("dtAdk")) && qb.push('adk="'.concat(ra, '"'));
            qb = qb.join(", ");
            ra = Yb("mhl") - qb.length - 6;
            qb += ', r="'.concat(Hb(pb(x), Math.max(ra, 0)), '"');
            ec(N, "x-dtc", qb, fb)
        }
        if (Ec(b)) return a;
        p && ec(a, "traceparent", "00-".concat(p.traceId, "-").concat(p.spanId, "-00"), k);
        p = Nb("dpch");
        f && (p || (N = a, f = ca || M(f), ca = k, f && (cc(N, "x-dtpc", f, ca), Ga() && (cc(N, "x-dtreferer", pb(Qb()), ca), cc(N, "x-host", Q(b), ca)))), x && x !== Qb() && cc(a, "x-dtreferer", pb(x), k));
        Nf(b) &&
            !p && cc(a, "x-dtpc", "ignore", k);
        return a
    }

    function nb(a) {
        a = zi(a);
        if (!a) return null;
        try {
            return new RegExp(a, "i")
        } catch (b) {}
        return null
    }

    function Ub() {
        wi = nb(Kc("chw"));
        Dj = nb(Kc("xhb"));
        B("CONFIG_UPDATE", function() {
            wi = nb(Kc("chw"));
            Dj = nb(Kc("xhb"))
        })
    }

    function fc() {
        var a = wd;
        return a ? a.name : ""
    }

    function Nc(a) {
        for (var b = 0, f = Yd.Ca; b < f.length; b++) f[b].wf = a.detail
    }

    function Ze(a) {
        var b;
        return null === (b = Hc(a)) || void 0 === b ? void 0 : b.Zf()
    }

    function Qg() {
        var a = document,
            b = a.documentElement,
            f = 0,
            k = 0,
            p = a.body;
        "number" ===
        typeof self.innerWidth ? (f = self.innerWidth, k = self.innerHeight) : a && (b.clientWidth || b.clientHeight) ? (f = b.clientWidth, k = b.clientHeight) : p && (p.clientWidth || p.clientHeight) && (f = p.clientWidth, k = p.clientHeight);
        if (0 > f || 0 > k) a = 0, Vg.ie ? a = 140 : a = 10, f = Math.max(f, a), k = Math.max(k, 10);
        S().bwsW = f;
        S().bwsH = k
    }

    function wf() {
        var a = S();
        B("LOAD_END", Qg);
        Rd(function(b, f, k, p) {
            if (!f) {
                f = function(ra) {
                    return 0 > ra || 2147483647 <= ra || isNaN(ra) ? 0 : ra
                };
                k = a.bwsW;
                var x = a.bwsH,
                    N = $e();
                Za(N) && (k = N.bwsW, x = N.bwsH);
                0 >= k && (Qg(), k = a.bwsW, x = a.bwsH);
                k = f(k);
                N = f(x);
                var ca = x = 0;
                b.av(p, "w", k);
                b.av(p, "h", N);
                if (k = Eb.screen) x = f(k.width), ca = f(k.height), b.av(p, "sw", x), b.av(p, "sh", ca)
            }
        })
    }

    function hg() {
        var a = 0,
            b = 0,
            f = 0,
            k = "Info",
            p = [];
        Nb("coo") && Nb("cooO") ? (a++, p.push({
            severity: "Info",
            text: "Opt-in mode is active, but dtrum.enable() has been called.",
            type: "cooeaoa"
        })) : Nb("coo") && (k = "Warning", b++, p.push({
            severity: "Warning",
            text: "Opt-in mode is active. Call dtrum.enable() to start collecting data.",
            type: "cooe"
        }));
        if (da()) {
            b++;
            k = "Warning";
            var x = S().disabledReason,
                N = "Agent for application '".concat(Kc("app"), "' is currently disabled because of ");
            p.push({
                severity: "Warning",
                text: "".concat(N).concat(x || "a missing RUM License or RUM was disabled for this application", "."),
                type: "jsad"
            })
        }
        Nb("dsss") && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "DISABLE_SUBDOMAIN_SOURCEACTION_SUPPORT is set.",
            type: "sssd"
        }));
        a: {
            x = Kc("featureHash");N = 0;
            for (var ca = "7degijmovx".split(""); N < ca.length; N++)
                if (x.includes(ca[N])) {
                    x = !1;
                    break a
                }
            x = !0
        }
        x && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "No module(that could detect a XHR) is active!",
            type: "nxma"
        }));
        Ob() && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "Should not track is set on this browser and respected by the RUM monitoring code!",
            type: "snt"
        }));
        if (x = Kc("doNotDetect")) x = Kc("featureHash"), x = !x.includes("a") && !x.includes("l");
        x && (b++, k = "Warning", p.push({
            severity: "Warning",
            text: "Do not detect values are configured & neither module 'a' nor 'l' are active. This can result in missing user actions!",
            type: "dnt"
        }));
        Nb("ssc") && "https:" !==
            location.protocol && (f++, k = "Error", p.push({
                severity: "Error",
                text: "Secure cookies are enabled, but can't be set as the page isn't using https.",
                type: "scbip"
            }));
        return 0 < p.length ? (a = [ig(f, "Error"), ig(b, "Warning"), ig(a, "Info")], [{
            severity: k,
            text: "".concat(a.join(""), "regarding agent configuration."),
            type: "ci",
            children: p
        }]) : null
    }

    function ig(a, b) {
        return a ? "".concat(a, " ").concat(b).concat(1 < a ? "s" : "", " ") : ""
    }

    function lf() {
        B("DEBUG_INFO_REQUESTED", hg);
        Rd(function(a, b, f, k) {
            Nb("ssc") && "https:" !== location.protocol &&
                a.av(k, "sconsp", 1)
        })
    }

    function Of() {
        return Kc("rpid") ? "automatically" : "manually"
    }

    function jg() {
        yk = void 0;
        vb(document.currentScript) && (Ai = document.currentScript);
        B("DEBUG_INFO_REQUESTED", function() {
            yk || (yk = Ai ? Ai.src ? Ai.dataset.dtconfig ? "OneAgent JavaScripTag ".concat(Of(), " injected") : Ai.src.includes("_complete") ? "JavaScriptTag ".concat(Of(), " injected") : Ai.getAttribute("defer") ? "CodeSnippetDeferred ".concat(Of(), " injected") : "CodeSnippetSync ".concat(Of(), " injected") : Ai.dataset.dtconfig ? "InlineCode ".concat(Of(),
                " injected") : "Couldn't detect injection mode." : "Couldn't detect injection mode.");
            return [{
                severity: "Info",
                text: yk,
                type: "im"
            }]
        })
    }

    function mf(a) {
        switch (a) {
            case 1:
                if ((a = document.currentScript) && vb(a)) {
                    a: {
                        var b, f;
                        if (document.documentElement && (a = document.documentElement.outerHTML.split(a.outerHTML), 2 === a.length)) {
                            a = (null === (f = null === (b = a[0]) || void 0 === b ? void 0 : b.split("\n")) || void 0 === f ? void 0 : f.length) + 1;
                            break a
                        }
                        a = void 0
                    }
                    return "Agent is double injected! Is it manually and automatic injected? Current used agent is near: ".concat(document.location,
                        ":").concat(a)
                }
                return "Agent is double injected! Is it manually and automatic injected?";
            case 2:
                return "Problem detected while agent initialization! Snippet couldn't initialize so can't initialize monitoring code";
            case 3:
                return "Problem detected while agent initialization! Snippet couldn't initialize as initConfig didn't initialize.";
            default:
                return ""
        }
    }

    function Pf() {
        B("DEBUG_INFO_REQUESTED", function() {
            return 0 !== S().di ? [{
                severity: "Error",
                text: mf(S().di),
                type: "di"
            }] : null
        });
        Rd(function(a, b, f, k) {
            0 === S().di ||
                b || a.av(k, "di", S().di)
        })
    }

    function xf() {
        var a = [];
        Fa([{
            object: window,
            jd: "window",
            Lc: ["postMessage", "Map", "Array", "WeakMap", "MutationObserver"]
        }, {
            object: Array.prototype,
            jd: "Array.prototype",
            Lc: "forEach map filter every some find includes join reverse slice sort splice concat pop push shift unshift".split(" ")
        }, {
            object: Map.prototype,
            jd: "Map.prototype",
            Lc: ["forEach"]
        }], function(b) {
            var f = b.object,
                k = b.jd;
            b = b.Lc;
            f && Fa(b, function(p) {
                ub(f[p]) || a.push("".concat(k, ".").concat(p))
            })
        });
        return a.length ? [{
            severity: "Warning",
            text: "The following native functions are modified: ".concat(a.join(", ")),
            type: "mnf"
        }] : null
    }

    function hh() {
        var a;
        return H((a = {}, a.kind = "DEBUG_INFO_REQUESTED", a.detail = void 0, a)).flat()
    }

    function Rg() {
        Rd(function() {
            if (!rg.disableCookieManager) {
                var a = th();
                if (!a || !a.includes("_srv_-")) try {
                    if (Eb.sessionStorage) {
                        var b = a,
                            f = zk(Ue()) || "";
                        Vh(f) || (f = "");
                        if (f && "null" !== f && b !== f) {
                            var k = Te(f).sessionId || "";
                            if ("undefined" !== typeof b && "" !== b) {
                                if ((f = b) && k) {
                                    var p = f,
                                        x = p.indexOf("_sn_");
                                    if (-1 !== x) {
                                        var N = p.indexOf("_",
                                                x + 4),
                                            ca = -1 !== N ? p.substring(x, N) : p.substring(x);
                                        ca && (p = p.replace(ca, "_sn_" + k))
                                    }
                                    f = p
                                }
                                var ra = f
                            } else ra = f;
                            b = ra
                        }
                        if (a = b) yh(a), Bi(Ue(), a)
                    }
                } catch (fb) {}
            }
        })
    }

    function yf(a) {
        B("ACTION_ENTERED", function k(f) {
            a.dtWF = k;
            f = f.detail;
            var p = f.i;
            a(p, f.a, f.r === p, f.e)
        })
    }

    function Le(a) {
        B("ACTION_LEFT", function k(f) {
            a.dtWF = k;
            f = f.detail;
            var p = f.i;
            a(p, f.s, f.r === p)
        })
    }

    function Fd(a, b) {
        Aj.push(a);
        0 === b ? lc() : lc(2E3)
    }

    function pd(a, b, f, k, p) {
        void 0 === f && (f = !1);
        void 0 === k && (k = oc());
        void 0 === p && (p = 0);
        var x = b;
        if (1 === p && "_csprv_" === a) {
            if (0 !==
                Gb) {
                x = X;
                var N = x.timestamp,
                    ca = x.group,
                    ra = x.trigger;
                b.push(["tvn", x.name]);
                b.push(["tvt", N + ""]);
                b.push(["tvtrg", ra + ""]);
                b.push(["tvm", ic(x)]);
                ca && b.push(["tvg", ca])
            }
            x = b
        }
        a = {
            id: ph(),
            timestamp: k,
            kind: a,
            $b: x
        };
        switch (Fb(f)) {
            case 1:
                (f = wd) ? f.Md(a): Fd(a, p);
                break;
            case 2:
                (f = Hc(f)) ? f.Md(a): Fd(a, p);
                break;
            case 0:
                Fd(a, p)
        }
    }

    function zf(a, b) {
        return a ? {
            oldView: a,
            newView: b
        } : {
            newView: b
        }
    }

    function Me(a, b) {
        void 0 === b && (b = Yb("vncm"));
        var f = new URL(a);
        a = f.pathname;
        f = f.hash;
        0 === b ? b = a + f : 2 === b ? (b = f || "/", b.startsWith("#") && (b =
            b.replace("#", "")), b.startsWith("/") || (b = "/" + b)) : b = a;
        return b
    }

    function nf(a, b) {
        a.name = b.name;
        b.group && (a.group = b.group);
        a.hydrated = !0
    }

    function ih(a) {
        var b = [],
            f = a.name,
            k = a.timestamp,
            p = a.group,
            x = a.trigger;
        f && k && (b.push(["svn", f]), b.push(["svt", k + ""]), b.push(["svtrg", x + ""]), b.push(["svm", ic(a)]));
        p && b.push(["svg", p]);
        return b
    }

    function be(a) {
        var b = [],
            f = a.oldView,
            k = a.newView;
        f && b.push.apply(b, ih(f));
        f = k.group;
        var p = k.trigger;
        b.push(["tvn", k.name]);
        b.push(["tvtrg", p + ""]);
        b.push(["tvm", ic(k)]);
        f && b.push(["tvg",
            f
        ]);
        b.length && pd("_view_", b, !1, a.newView.timestamp || void 0, 1)
    }

    function kg(a) {
        Td ? be(a.detail) : ae(a.detail)
    }

    function lg(a) {
        a.detail.i === of && (a = ab, a.length && (Fa(a, be), ab = []), K("ACTION_SENT", lg))
    }

    function Lh() {
        $a = X = Ka(Ka({}, X), {
            id: ++za,
            timestamp: oc(),
            kind: 2,
            hydrated: !1
        });
        be({
            newView: X
        })
    }

    function Qf() {
        Ae(Eb, "pageshow", function(a) {
            var b;
            "persisted" in a && a.persisted && H((b = {}, b.kind = "BF_CACHE_RESTORED", b.detail = void 0, b))
        })
    }

    function ke(a, b) {
        void 0 === b && (b = Yb("dvl"));
        var f;
        return function() {
            for (var k = this,
                    p = [], x = 0; x < arguments.length; x++) p[x] = arguments[x];
            void 0 !== f && Yg(f);
            f = ac(function() {
                a.apply(k, p)
            }, b)
        }
    }

    function Ne() {
        if (1 === Gb) {
            var a = X,
                b = Me(Qb());
            a = a.name;
            (a + "/" === b ? 0 : a !== b) && mg({
                name: b
            })
        }
    }

    function Oe() {
        var a, b = X,
            f = $a;
        b.id !== f.id && (H((a = {}, a.kind = "VIEW_STABLE", a.detail = zf(f, b), a)), $a = b)
    }

    function mg(a) {
        var b, f = X,
            k = Ka,
            p = Ka,
            x = Yb("rtu"),
            N = Ka({}, a);
        N.name = Hb(a.name, x, !0);
        a.group && (N.group = Hb(a.group, x, !0));
        X = a = k(p({}, N), {
            timestamp: oc(),
            id: ++za,
            kind: 1,
            trigger: Gb,
            hydrated: !1
        });
        0 < Yc && Gd.push(a);
        H((b = {},
            b.kind = "VIEW_CHANGE", b.detail = zf(f, X), b));
        el()
    }

    function ng(a) {
        var b, f, k, p = null === (b = null === a || void 0 === a ? void 0 : a.detail) || void 0 === b ? void 0 : b.oldView;
        p && (a = null === (k = null === (f = null === a || void 0 === a ? void 0 : a.detail) || void 0 === f ? void 0 : f.newView) || void 0 === k ? void 0 : k.timestamp, Pe(p, 0, a))
    }

    function Pe(a, b, f) {
        var k, p = H((k = {}, k.kind = "VIEW_END", k.detail = {
            view: a,
            Eh: 1 === b
        }, k)).flat();
        0 !== p.length && (a = eb(eb([], p, !0), ih(a), !0), pd("_viewend_", a, !1, f, 1))
    }

    function jh(a) {
        var b = History.prototype[a];
        b && (History.prototype[a] =
            function() {
                for (var f = [], k = 0; k < arguments.length; k++) f[k] = arguments[k];
                k = Gm.dtAWF(b, this, f);
                var p, x;
                H((p = {}, p.kind = "HISTORY_API_EVENT", p.detail = (x = {}, x.t = a, x.p = f, x), p));
                return k
            })
    }

    function Cg(a, b, f, k) {
        if (!b) {
            b = X;
            f = b.timestamp;
            var p = b.group,
                x = b.trigger;
            a.av(k, "tvn", encodeURIComponent(ha(b.name)));
            a.av(k, "tvt", f + "");
            a.av(k, "tvm", encodeURIComponent(ic(b)));
            a.av(k, "tvtrg", x + "");
            p && a.av(k, "tvg", encodeURIComponent(ha(p)))
        }
    }

    function Qe() {
        Ej || (Ej = document.createElement("doc:rdy"));
        if (Ej.doScroll) {
            var a = function() {
                try {
                    Ej.doScroll("left"),
                        Ej = void 0, fd = oc(), Wd()
                } catch (b) {
                    ac(a, 0)
                }
            };
            a()
        } else document.addEventListener("DOMContentLoaded", function() {
            fd = oc();
            Wd()
        }, !1)
    }

    function Mh() {
        return Fj
    }

    function Re() {
        var a = Ce,
            b = gg(Eb.performance);
        if (!b) return Math.round(a);
        var f = cg(b) ? 6E4 >= b.domContentLoadedEventStart : 6E4 >= Math.abs(b.domLoading - a);
        if (!S().syn && !f) return a;
        f = ed();
        var k = b.redirectStart,
            p = b.fetchStart;
        b = (cg(b) ? 0 : f) + 6E4;
        b = k ? b > k ? f : k : p ? b > p ? f : p : f;
        isFinite(b) && (a = b);
        return Math.round(a)
    }

    function Rf() {
        var a = Ac(Eb.performance, "loadEventEnd", !0),
            b = oc();
        return Math.round(a || b)
    }

    function Sf(a, b) {
        var f;
        Wh--;
        if (Xh && b) {
            var k = (Xh.get(b) || 1) - 1;
            k ? Xh.set(b, k) : Xh.delete(b)
        }
        if (!Wh && Yh) try {
            H((f = {}, f.kind = "LOAD_END", f.detail = void 0, f))
        } catch (p) {}
        0 >= Wh && (Yh && (b = Yh.id, Zl = dg(), a = a ? Math.max(Rf(), a) : Rf(), f = Ac(Eb.performance, "loadEventStart", !0) || ed(), f = f < bf ? 0 : Math.round(f), a && f && a >= f ? (k = oc() - a, 5E3 < Math.abs(k) && (a += k), Md(b, a, f)) : Md(b), Yh = null), zh || Dg());
        b = $e();
        b !== S() && Za(b) && b.sole()
    }

    function le(a) {
        Wh++;
        if (Xh && a) {
            var b = Xh.get(a) || 0;
            Xh.set(a, b + 1)
        }
    }

    function Dg(a,
        b) {
        var f = Hc( of );
        if (f) {
            var k = 0;
            Eb.performance && !a && (k = b || Rf());
            k || (k = oc());
            Md(f.id, k);
            Fj = f.stop;
            Wd()
        }
    }

    function Af() {
        Dg(1)
    }

    function Sg() {
        zh = !0
    }

    function Bf() {
        var a = Hc( of );
        a && !Yh && (Yh = te({
            name: "_onload_",
            type: "_load_",
            start: oc(),
            Aa: a.id
        }))
    }

    function qi() {
        if (!Ci || 0 < Wh) Ci = !0, Wd(), Sf()
    }

    function kh() {
        Wd();
        if (!cj) {
            var a = $e(),
                b = Za(a) && a !== S();
            b && a.iolm(Eb);
            Bf();
            cj = !0;
            B("PAGE_LEAVING", function k() {
                Yh && b && a.sole(void 0, Eb);
                K("PAGE_LEAVING", k)
            });
            ac(qi, 0)
        }
    }

    function Nh() {
        "loaded" === document.readyState && Wd();
        "complete" ===
        document.readyState && kh()
    }

    function Tg() {
        Wd();
        cj || ("complete" === document.readyState ? fl ? t(!1, !0) : (fl = !0, ac(Tg, 3E3)) : ac(Tg, 3E3))
    }

    function Kh() {
        var a;
        Pe(X, 1);
        var b = H((a = {}, a.kind = "PAGE_END", a.detail = void 0, a)).flat();
        0 !== b.length && (a = eb(eb([], b, !0), [
            ["url", Gj]
        ], !1), pd("_pageend_", a, !1, void 0, 1));
        Ak(0);
        sd()
    }

    function $l() {
        Ak(1)
    }

    function gl() {
        Hj = Gc = !1;
        hl(!1);
        t(!1, !0, !0);
        jc = !1
    }

    function Bk(a) {
        var b = ui.Ze(!1, !0, !0);
        b.beacon && (t(!1, !0, !0, b), 1 === a && (Hj = !0))
    }

    function Ak(a) {
        var b;
        if (Gc && !jc) Bk(a);
        else {
            var f = oc();
            1 === a && (Gc = !0, ac(function() {
                ac(gl, 2E3)
            }, 1));
            H((b = {}, b.kind = "PAGE_LEAVING", b.detail = Gc, b));
            Ck && Hj || va(1 === a, wd, f);
            Bk(a);
            jc = !1
        }
    }

    function il(a, b) {
        if (Td || isNaN(a) || 100 > a || 1E3 < a) return !1;
        Dk = {
            responseCode: a,
            message: b + ""
        };
        return !0
    }

    function jl() {
        return Ck
    }

    function hl(a, b) {
        Ck = a;
        Yg(dj);
        b && (dj = ac(function() {
            Ck = !1
        }, 2E3))
    }

    function kl() {
        function a(b) { of === b.detail.i && K("ACTION_CLOSED", a)
        }
        Eb.doNotCreateLoadAction || ( of = te({
            name: "_load_",
            type: "_load_",
            start: bf,
            id: cd() || ph()
        }).id, Wd(), Nh());
        B("ACTION_CLOSED", a)
    }

    function Zh(a,
        b, f, k) {
        var p;
        void 0 === f && (f = !1);
        var x = (p = {}, p.msg = "", p.file = "", p.line = -1, p.column = -1, p.error = a, p.stackContainsWrapper = f, p);
        "number" === typeof b && (x.parentActionId = b);
        k && (x.source = k);
        ej(x)
    }

    function $h(a, b, f, k) {
        a[b] && ah(f, "" + a[b], k)
    }

    function ej(a) {
        var b, f = a.error,
            k = a.msg;
        if (!(!k && !f || Ij + 1 > Yb("mepp"))) {
            Ij++;
            "string" === typeof f ? k = a.msg || f : f = f || Eb.event || {
                message: "",
                name: ""
            };
            var p = Ka(Ka({}, a), (b = {}, b.msg = k, b.error = f, b));
            b = jd();
            var x;
            b && (x = {
                name: b.Rb(),
                type: b.type
            });
            f = p.error;
            "string" === typeof f && (f = {});
            var N = f.columnNumber || 0,
                ca = p.msg,
                ra = p.file,
                fb = p.column,
                qb = p.line;
            k = p.source;
            b = {};
            b.message = f.message || f.name || f.wj || f.description || ca || f.errorMessage || f.li || f.data || f.yi || "Indeterminable error name";
            b.file = f.fileName || f.filename || f.sourceURL || f.Oi || f.file || ra || "";
            b.line = f.lineNumber || f.lineno || f.line || f.Qi || qb || -1;
            b.column = (f.columnNumber ? N + 1 : void 0) || f.Pi || f.colno || f.column || fb || -1;
            if (!(N = fj(f))) a: {
                try {
                    throw Error("");
                } catch (db) {
                    if ((N = fj(db)) && 3 < N.split(/\r\n|\r|\n/).length) {
                        N = "<generated>\n" + N;
                        break a
                    }
                }
                N = ""
            }
            x = (b.stack = N, b.userInput = x, b.code = f.yj || f.code || f.errorCode || f.status, b.timestamp = oc() - Ce, b.debugInfo = "", b.type = f.name || "Error", b.source = k || "1", b);
            "Indeterminable error name" === x.message && (b = Mg("msg", p.msg), b += Mg("file", p.file), b += Mg("line", p.line), b += Mg("column", p.column), b += Mg("error", p.error), x.debugInfo = b);
            x.stack && p.stackContainsWrapper && (x.stack = "<wrapper>" + x.stack);
            if (x.stack) {
                if (1200 < x.stack.length) {
                    p = "";
                    b = 0;
                    for (f = x.stack.split(/(\r\n|\n|\r)/gm); b < f.length && !(k = f[b].trim(), N =
                            k.length, 0 < N && (p = 250 < N ? p + (k.substring(0, 150) + "[...]" + k.substring(N - 100) + "\n") : p + (k + "\n")), 1200 < p.length); b++);
                    x.stack = p
                }
                x.stack = x.stack.replace(RegExp("\\|", "g"), "^p").replace(/(\r\n|\n|\r)/gm, "|")
            }
            500 < x.message.length && (x.message = x.message.substring(0, 500));
            p = x.file;
            b = x.stack;
            f = Kc("csu");
            p && b && !b.includes(f) && p.includes(f) && (x.incompleteStack = 1200 < b.length ? "stringLength" : "numLines");
            5011 !== x.code && (p = a.parentActionId, a = oc(), a = Ld({
                type: "_error_",
                name: Rc(x.message),
                start: a,
                tb: !0
            }), p = ff(a, p), a && ($h(x,
                "type", "_type_", a), x.file && (b = x.file, 0 <= x.line && (b += "|" + x.line), 0 <= x.column && (b += "|" + x.column), ah("_location_", b, a)), (b = x.incompleteStack) && ah("_istack_", b, a), $h(x, "stack", "_stack_", a), $h(x, "code", "_code_", a), $h(x, "timestamp", "_ts_", a), $h(x, "debugInfo", "_debug_", a), x.userInput && ah("_useraction_", x.userInput.type + "|" + x.userInput.name, a), $h(x, "source", "_source_", a), p && lc()))
        }
    }

    function fj(a) {
        return a ? a.stack || a.xi || a.Qj || a.error && a.error.stack || "" : ""
    }

    function ah(a, b, f) {
        var k = oc();
        a = Ld({
            type: a,
            name: Rc(b),
            start: k,
            tb: !0
        });
        ff(a, f.id, !0)
    }

    function Mg(a, b) {
        a = a + "|" + (typeof b + "|");
        if (null === b) a += "null|";
        else if ("object" === typeof b)
            for (var f in b) {
                if (fa(b, f) && "stack" !== f && "error" !== f) {
                    var k = f;
                    a += f + "|";
                    var p = typeof b[k];
                    a += p + "|";
                    "object" !== p && "function" !== p && (a += b[k] + "|")
                }
            } else a += b + "|";
        return a
    }

    function Di(a, b, f) {
        var k = oc();
        a = Rc(a);
        b = Ld({
            type: b,
            name: a,
            start: k,
            stop: k,
            tb: !0,
            domNodes: -1
        });
        f = ff(b, f);
        Da(xh);
        f && lc();
        return f
    }

    function Ek() {
        S().syn || (Di("visit end", "_endVisit_", -1) ? Jj(!1, "a") : Ei())
    }

    function am(a,
        b) {
        Ij > Yb("mepp") || (Ij++, Di(a, "_error_", b))
    }

    function ll(a, b) {
        Di(a, "_warning_", b)
    }

    function Fk(a, b) {
        Di(a, "_log_", b)
    }

    function Kj(a, b, f) {
        var k = oc();
        a = Ld({
            type: "_rs_",
            name: vc(a + "=" + b),
            start: k,
            tb: !0
        });
        ff(a, f);
        lc()
    }

    function Ah(a, b) {
        switch (a) {
            case "_uaps_":
                if ("string" !== typeof b) {
                    a = "value [".concat(b, "] is not a valid short string, because it is of type ").concat(typeof b, ".");
                    break
                } else a = "value is not of type 'string'. Make sure to pass in a string.";
                (b = b.length) || (a = "value is not a valid short string because it is empty.");
                var f = Yb("mpl");
                b > f && (a = "value is ".concat(b, " characters long, which is longer than the maximum of ").concat(f, " characters"));
                break;
            case "_uapl_":
                a = "value [".concat(b, "] is not a valid java long.");
                break;
            case "_uapdt_":
                a = "value [".concat(b, "] is not a valid date.");
                break;
            case "_uapdbl_":
                a = "value [".concat(b, "] is not a valid java double.");
                break;
            default:
                a = "value [".concat(b, "] is not of a supported type. Has type of ").concat(typeof b, ".")
        }
        return a
    }

    function Lj(a, b) {
        return {
            failedProperties: a.Nc(),
            sentProperties: a.te(),
            info: "Number of total failed properties: ".concat(b)
        }
    }

    function bm(a) {
        return !("number" !== typeof a || isNaN(a) || 0 !== a % 1 || 0x7fffffffffffffff < a || -0x7fffffffffffffff > a)
    }

    function rc(a) {
        return !("number" !== typeof a || isNaN(a) || 1.7976931348623157E308 < a || -1.7976931348623157E308 > a)
    }

    function ml(a) {
        return "string" === typeof a && 0 !== a.trim().length && a.length <= Yb("mpl")
    }

    function Mj(a) {
        return !!a && "[object Date]" === Object.prototype.toString.call(a)
    }

    function Fi(a, b, f, k, p) {
        b && "object" === typeof b && ai({
            data: b,
            type: "_uapl_"
        }, bm, a);
        f && "object" === typeof f && ai({
            data: f,
            type: "_uapdt_"
        }, Mj, a);
        k && "object" === typeof k && ai({
            data: k,
            type: "_uaps_"
        }, ml, a);
        p && "object" === typeof p && ai({
            data: p,
            type: "_uapdbl_"
        }, rc, a)
    }

    function ai(a, b, f) {
        var k = a.data,
            p = Ob(),
            x;
        for (x in k)
            if (fa(k, x) && 0 < x.trim().length && 50 >= x.length) {
                var N = p,
                    ca = k[x];
                null !== ca && "object" === typeof ca && fa(ca, "value") && (N = N && !ca["public"], ca = ca.value);
                b(ca) ? (N ? ca = "dT_pv" : "_uapdt_" === a.type && Mj(ca) && (ca = ca.getTime()), f.mf(a.type, x, ca)) : f.je(a.type, x, ca)
            }
    }

    function Gk(a) {
        a =
            a ? Object.keys(a) : [];
        if (0 === a.length) return !1;
        for (var b = 0; b < a.length; b++)
            if (!Hm.includes(a[b])) return !1;
        return !0
    }

    function nl(a) {
        return Ba(Qa(w(a), function(b) {
            b = a[b];
            return !!(b && 0 < b.size)
        }), function(b) {
            var f = [];
            a[b].forEach(function(k, p) {
                f.push("".concat(p, ",").concat(k))
            });
            return "".concat(b, "=").concat(f.join(";"))
        }).join(";")
    }

    function Cc(a, b, f, k, p) {
        a = new Gi(a);
        Gk(b) ? Fi(a, b.oj, b.Li, b.Nj, b.nj) : Fi(a, b, f, k, p);
        return a.xg()
    }

    function Dc(a) {
        sg[a] ? sg[a]++ : sg[a] = 1
    }

    function Hk() {
        Nb("ds") && (sg = {}, Rd(function(a,
            b, f, k) {
            if (Nb("ds")) {
                f = "";
                for (p in sg) fa(sg, p) && (f += "".concat(f ? "|" : "").concat(p, "-").concat(sg[p]));
                var p = f;
                !b && Td && p && (a.av(k, "ds", p, !1), sg = {})
            }
        }))
    }

    function ol(a, b, f, k) {
        if (bi || gj.length) gj.length && a.av(k, "fsp", encodeURIComponent(gj.join(",")), !0), bi && a.av(k, "sp", encodeURIComponent(nl(bi)), !0), bi = void 0, gj = []
    }

    function pl(a, b, f, k) {
        var p = new Ik;
        bi || (bi = {});
        Gk(a) ? p.Nd(bi, a) : p.Nd(bi, {
            javaLong: a,
            date: b,
            shortString: f,
            javaDouble: k
        });
        gj.push.apply(gj, p.Dg());
        a = Lj(p, Ik.Gb);
        b = p.Nc();
        if (b.length)
            for (f = 0; f < b.length; f++) k =
                b[f], Jk = "Property key [" + k.key + "] was not accepted because: " + k.reason, Eb.console.log(Jk);
        (p.Hg() || b.length) && lc();
        return a
    }

    function Ve() {
        return Jk ? [{
            severity: "Info",
            text: Jk + "(Note: only last errorMessage gets reported!)",
            type: "wsp"
        }] : null
    }

    function We(a, b) {
        if (Gb !== b) return -2;
        if (3 === b && !Td) {
            var f;
            nf(X, a);
            nf($a, a);
            a = zf(null === (f = rh) || void 0 === f ? void 0 : f.ua, X);
            ae(a);
            return 2
        }
        f = X;
        if (1 === a.id && 1 === f.id && 1 === ab.length) return nf(ab[0].newView, a), nf(X, a), nf($a, a), 2;
        if (f.name === a.name) return -1;
        mg(a);
        return 1
    }

    function Sb(a) {
        var b = +a;
        return a && !isNaN(b) && 11359836E5 < b && 41338908E5 > b ? b : oc()
    }

    function wb(a) {
        return "function" === typeof a
    }

    function Xb(a, b) {
        return typeof a === b
    }

    function bd(a, b) {
        return Xb(a, b) || "undefined" === typeof a || null === a
    }

    function De(a) {
        Eb.console.log(a)
    }

    function Tc(a, b, f) {
        De("".concat(a, ' "').concat(b, '" is deprecated! ').concat(f))
    }

    function bc() {
        De("Wrong argument types in method. Please check the documentation to fix that")
    }

    function yc() {
        De("Too many arguments. Please check the documentation to fix that")
    }

    function ci() {
        De("No action was found with provided action id argument.")
    }

    function Nj() {
        return ui.Gc()
    }

    function ql(a, b, f, k) {
        void 0 === b && (b = !1);
        void 0 === f && (f = !1);
        Oj(a, (null === k || void 0 === k ? void 0 : k.contentType) || "");
        return t(!1, !0, b, {
            referrer: Qb(),
            beacon: a
        }, f, k)
    }

    function rl(a) {
        Kk.push(a)
    }

    function Oj(a, b) {
        Fa(Kk, function(f) {
            f(a, b)
        })
    }

    function sl(a, b) {
        Pj && (Pj && !tg && (hj.observe(document, Lk), tg = !0), ug[a] || (ug[a] = [], ij = Object.keys(ug), Hi[a] = b))
    }

    function tl(a) {
        Pj && (ug[a] && (delete ug[a], delete Hi[a]), ij = Object.keys(ug),
            0 === ij.length && hj && tg && (hj.disconnect(), tg = !1))
    }

    function ul(a, b) {
        if (!di) return null;
        ei[a] || (ei[a] = new di(b));
        return ei[a]
    }

    function vl(a) {
        Pj && ei[a] && (ei[a].disconnect(), delete ei[a])
    }

    function wl(a) {
        return ug[a] ? ug[a] : []
    }

    function xl(a, b) {
        ug[a] = b
    }

    function yl() {
        Lk = {
            childList: !0,
            subtree: !0
        };
        di && (hj = new di(function(a) {
            for (var b = oc(), f = [], k = 0; k < a.length; k++) {
                var p = a[k];
                "childList" === p.type && f.push.apply(f, p.addedNodes)
            }
            if (f.length)
                for (a = {
                        time: b,
                        nodes: f
                    }, b = 0, f = ij; b < f.length; b++) k = f[b], p = Hi[k], "function" ===
                    typeof p && p(k, a), ug[k].push(a)
        }))
    }

    function zl(a, b, f, k, p, x) {
        void 0 === x && (x = "win");
        try {
            var N = jj[x] || {};
            N[b] = a[b];
            jj[x] = N;
            Object.defineProperty(a, b, {
                get: f || function() {
                    return N[b]
                },
                set: function(ca) {
                    N[b] = ca;
                    k && (ca || p) && k.apply(a, [ca])
                },
                configurable: !0
            });
            return !0
        } catch (ca) {}
        return !1
    }

    function Al(a, b, f, k) {
        if (k = k || a[b]) {
            var p = f || "win";
            try {
                delete a[b] && (a[b] = k, jj[p] && (jj[p][b] = null))
            } catch (x) {
                try {
                    Object.defineProperty(a, b, {
                        get: function() {
                            return jj[p] && jj[p][b]
                        },
                        configurable: !0
                    })
                } catch (N) {}
            }
        }
    }

    function Bl(a) {
        var b =
            wd;
        return b && b.nc < Yb("tal") && b.ib + a <= Yb("tt") ? (b = ua(!1), a = {
            name: "".concat("setTimeout(..., ").concat(a, ")"),
            type: "_t_",
            start: oc(),
            rf: a,
            Aa: b || !0
        }, te(a).id) : 0
    }

    function Ii(a) {
        if (a = Hc(a)) a.Ec(), ac(function() {
            rd();
            Bc(mc(), !0)
        }, 0)
    }

    function vg(a) {
        var b = Hc(a);
        b && (b.Ah(), Pd++, qg.push(a), Bc(b))
    }

    function Ff(a) {
        var b = Hc(a);
        b && (Pd--, ac(function() {
            D(a);
            b.rg();
            Bc(mc(), !0)
        }, 0))
    }

    function Qj(a) {
        if (Nb("etc") || !a) Rj = a
    }

    function Cl() {
        return null === Rj || void 0 === Rj ? void 0 : Rj()
    }

    function Sj(a, b) {
        return He(970, a || "XHR Error",
            b)
    }

    function Mk(a) {
        return He(971, "XHR Canceled", a)
    }

    function Wf(a) {
        return He(972, "XHR Timeout", a)
    }

    function Tj(a, b) {
        var f = 0 === a.time ? 0 : b - a.time;
        a.total += f;
        a.time = b;
        return a.Fe = f
    }

    function kj(a, b) {
        void 0 === b && (b = oc());
        var f = Nk[a];
        void 0 === f && (f = Nk[a] = {
            time: b,
            total: 0,
            Fe: 0
        });
        return Tj(f, b)
    }

    function lj(a, b) {
        void 0 === b && (b = oc());
        a = Nk[a];
        if (void 0 === a) return 0;
        Tj(a, b);
        a.time = 0;
        return a.Fe
    }

    function Dl(a) {
        a = Nk[a];
        return void 0 === a ? 0 : a.total
    }

    function cm(a, b, f) {
        if (!a || !b) return -1;
        if (a.findIndex) return a.findIndex(b,
            f);
        for (var k = 0; k < a.length; k++)
            if (b.call(f, a[k], k, a)) return k;
        return -1
    }

    function dm(a) {
        var b = a.getAttribute("class"),
            f = 100 - a.tagName.length;
        if (!b) return "";
        b = b.trim().replace(/ +/g, ".");
        if (b.length <= f) return b;
        a = Qa(b.split("."), function(k) {
            return k.length < f
        });
        for (b = a.join("."); b.length > f && a.length;) a.pop(), b = a.join(".");
        return b
    }

    function Ok(a, b) {
        if (a.id && 100 >= a.id.length) return b.unshift("#".concat(a.id)), !0;
        var f = a.nodeName.toLowerCase();
        b.unshift(f);
        var k = dm(a);
        if (k && (f += ".".concat(k), b[0] = f, Bh(b))) return !0;
        k = a;
        for (var p = 1; k;) k = k.previousElementSibling, (null === k || void 0 === k ? void 0 : k.nodeName) === a.nodeName && p++;
        f += ":nth-of-type(".concat(p, ")");
        b[0] = f;
        if (Bh(b)) return !0;
        k = a.previousElementSibling;
        for (p = 1; k;) k = k.previousElementSibling, ++p;
        f = f.replace(/:nth-of-type\(\d+\)/, 1 < p ? ":nth-child(".concat(p, ")") : ":first-child");
        b[0] = f;
        return Bh(b)
    }

    function Bh(a) {
        return 1 === document.querySelectorAll(a.join(">") || "").length
    }

    function gc(a) {
        if (!a || !Uh(a, 8) || !document.querySelectorAll) return "";
        try {
            for (var b = a, f = []; b &&
                100 >= f.join(">").length && !Ok(b, f);) b = b.parentElement;
            var k = f.join(">");
            if (100 < k.length) {
                var p = a.getAttribute("class"),
                    x = a.tagName.toLowerCase();
                if (p) var N = "..." + Hb("".concat(x, ".").concat(p), 100 - x.length - 3, !1, "");
                else {
                    var ca = a.id;
                    N = ca ? "..." + Hb("#".concat(ca), 97, !1, "") : ""
                }
                var ra = N || Hb(k, 100, !0)
            } else ra = k;
            return ra
        } catch (fb) {}
        return ""
    }

    function em(a, b) {
        try {
            if (3 !== Gb && ("__vue__" === b || "__vue_app__" === b) && Nb("usrvd") && 2 !== Gb) {
                var f, k, p, x;
                var N = (null === (p = null === (k = null === (f = a.__vue_app__) || void 0 === f ? void 0 :
                    f.config) || void 0 === k ? void 0 : k.globalProperties) || void 0 === p ? void 0 : p.$router) || (null === (x = a.__vue__) || void 0 === x ? void 0 : x.$router);
                if (N) {
                    var ca = "function" === typeof N.afterEach;
                    var ra = N.currentRoute && ca ? !0 : !1
                } else ra = !1;
                if (ra) {
                    var fb, qb;
                    if (fb = (null === (qb = N.matcher) || void 0 === qb ? void 0 : qb.match) || N.resolve) {
                        var db, Wb, $b, Ib = null !== ($b = null !== (db = N.options.base) && void 0 !== db ? db : null === (Wb = N.options.history) || void 0 === Wb ? void 0 : Wb.base) && void 0 !== $b ? $b : "",
                            uc = N.options.mode;
                        Ib || "hash" !== uc || (Ib = "#");
                        var xc =
                            Ib;
                        a = ab;
                        for (b = 0; b < a.length; b++) {
                            var $c = a[b];
                            $c.oldView && nf($c.oldView, bh($c.oldView, fb, xc));
                            nf($c.newView, bh($c.newView, fb, xc))
                        }
                        $c = X;
                        a = $a;
                        nf($c, bh($c, fb, xc));
                        nf(a, bh(a, fb, xc))
                    }
                    N.afterEach(fi);
                    Pc(2)
                }
            }
        } catch (me) {
            Pc(1)
        }
    }

    function fi(a) {
        2 === Gb && We(Ng(a), 2)
    }

    function Ng(a) {
        var b = a.matched;
        a = a.path;
        return b.length ? {
            group: b[b.length - 1].path,
            name: a
        } : {
            name: a
        }
    }

    function bh(a, b, f) {
        var k = a.name.indexOf(f),
            p = a.name;
        p === f ? p = "/" : -1 !== k && (p = p.substring(k + f.length));
        a = Ka(Ka({}, a), {
            name: p
        });
        return Ka(Ka({}, a), Ng(b(a.name)))
    }

    function mj(a) {
        void 0 === nj && (nj = Yb("prfSmpl") > Math.floor(1E4 * Math.random()));
        nj && (0 > sf && (sf = Yb("msl"), Cb.dT_.si(function() {
            El()
        }, 3E4), Ae(Eb, "beforeunload", function() {
            El(!0)
        })), Fl.push(a))
    }

    function Pk(a) {
        var b = "";
        Fa(a.d, function(f) {
            b += "".concat(f[0]).concat("=").concat(f[1]).concat("|")
        });
        return "".concat(a.i).concat("|").concat(a.t).concat("|").concat(b.slice(0, -1))
    }

    function Ji(a, b) {
        var f = "";
        Fa(w(b[1]), function(k) {
            f += "".concat(k).concat("=").concat(b[1][k]).concat("|")
        });
        return "".concat(a).concat("|").concat(b[0]).concat("|").concat(f.slice(0, -1))
    }

    function El(a) {
        void 0 === a && (a = !1);
        Fa(Fl.splice(0), function(b) {
            if (0 === b.t) {
                var f = !1;
                for (var k = b.d, p = k.length; !f && p;) f = 0 === k[--p][1]
            } else f = !1;
            f || (b.a ? fm(b) : Uj.push(Pk(b)))
        });
        Vj(a)
    }

    function fm(a) {
        var b = a.i,
            f = Og[b];
        f ? (f[0] += a.t, Fa(a.d, function(k) {
            f[1][k[0]] = void 0 !== f[1][k[0]] ? f[1][k[0]] + k[1] : k[1]
        })) : (Og[b] = [a.t, {}], Fa(a.d, function(k) {
            Og[b][1][k[0]] = k[1]
        }))
    }

    function Vj(a) {
        void 0 === a && (a = !1);
        Fa(w(Og), function(f) {
            Uj.push(Ji(f, Og[f]))
        });
        var b = "";
        Fa(Uj, function(f, k, p) {
            if (b.length + 1 + f.length >= sf) {
                gi(b,
                    a);
                b = "";
                if (k === p.length - 1) {
                    gi("".concat(Ki).concat(f), a);
                    return
                }
                b = "".concat(Ki).concat(f)
            } else b ? b = b + "," + f : b = "".concat(Ki).concat(f);
            b.length && k === p.length - 1 && gi(b, a)
        });
        Uj = [];
        Og = {}
    }

    function gi(a, b) {
        var f;
        void 0 === b && (b = !1);
        var k = Nj();
        ui.ar(k, a);
        ql(k, b, !1, (f = {}, f.contentType = "perf", f))
    }

    function Wj() {
        hi = Gl.connection;
        Nb("eni") && hi && Rd(function(a, b, f, k) {
            !b && Td && hi && (b = "".concat(hi.effectiveType || "-", "|").concat(hi.downlink || -1), hi.type && (b = "".concat(b, "|").concat(hi.type)), a.av(k, "ni", b, !1))
        })
    }

    function gm(a) {
        return "longtask" ===
            (null === a || void 0 === a ? void 0 : a.entryType) && 50 < a.duration
    }

    function hm(a) {
        Li.push({
            startTime: a.startTime,
            duration: a.duration
        })
    }

    function im() {
        try {
            Xj = new PerformanceObserver(function(a) {
                Fa(Qa(a.getEntries(), gm), hm)
            }), Xj.observe({
                type: "longtask",
                buffered: !0
            })
        } catch (a) {}
    }

    function Xf() {
        Ch = Dh = 0;
        Mi = Ni = -5E3;
        Yj = [];
        if (Nb("cls") && ve.cls) try {
            (new PerformanceObserver(function(a) {
                a = a.getEntries();
                for (var b = 0; b < a.length; b++) {
                    var f = a[b];
                    if ("layout-shift" === (null === f || void 0 === f ? void 0 : f.entryType) && !f.hadRecentInput) {
                        var k =
                            f.startTime;
                        if (0 === wg) {
                            if (5E3 < k - Ni || 1E3 < k - Mi) Ni = k, Ch = 0;
                            Mi = k;
                            Ch += f.value;
                            Dh = Math.max(Dh, Ch)
                        } else 1 === wg && Yj.push({
                            startTime: k,
                            lg: f.value
                        })
                    }
                }
            })).observe({
                type: "layout-shift",
                buffered: !0
            })
        } catch (a) {}
    }

    function Qk() {
        Zj = new Eb.PerformanceObserver(function(a) {
            a = a.getEntries();
            for (var b = 0; b < a.length; b++) {
                var f = a[b],
                    k = f.name;
                f = Math.round(f.startTime);
                "first-paint" === k && (ak = f);
                "first-contentful-paint" === k && (Rk = f)
            }
        });
        try {
            Zj.observe({
                type: "paint",
                buffered: !0
            })
        } catch (a) {
            Zj.observe({
                entryTypes: ["paint"]
            })
        }
    }

    function oj() {
        bk =
            new Eb.PerformanceObserver(function(a) {
                a = a.getEntries();
                a = a[a.length - 1];
                if (a.size > Oi) switch (Oi = a.size, wg) {
                    case 0:
                        Im = pj(a);
                        break;
                    case 1:
                        Eh.push(pj(a));
                        break;
                    case 2:
                        Fj - bf > a.startTime && (Oi = a.size, a = pj(a), pd("_wv_", [
                            ["AAI", of +""],
                            ["lcpE", a.Jc || "-"],
                            ["lcpSel", a.td || "-"],
                            ["lcpS", a.size + ""],
                            ["lcpT", a.Oa + ""],
                            ["lcpU", a.url || "-"],
                            ["lcpLT", a.loadTime + ""]
                        ], !1, void 0, 1))
                }
            });
        try {
            bk.observe({
                type: "largest-contentful-paint",
                buffered: !0
            })
        } catch (a) {
            bk.observe({
                entryTypes: ["largest-contentful-paint"]
            })
        }
    }

    function pj(a) {
        var b,
            f = a.startTime;
        f && (f = Ca(f));
        return {
            Oa: Math.round(f),
            loadTime: Math.round(a.loadTime),
            size: a.size,
            td: gc(a.element) || "-",
            Jc: (null === (b = a.element) || void 0 === b ? void 0 : b.tagName) || "-",
            url: a.url || "-"
        }
    }

    function Gf(a) {
        var b = 0;
        for (a = a.getEntries(); b < a.length; b++) {
            var f = a[b];
            "first-input" === f.entryType && f.processingStart && f.startTime && (c = Math.round(f.startTime), d = Math.round(f.processingStart - f.startTime))
        }
        Hf()
    }

    function Hf() {
        2 === wg && oc() < Fj + 2E4 && pd("_wv_", [
            ["AAI", of +""],
            ["fIS", c + ""],
            ["fID", d + ""]
        ], !1, void 0, 1)
    }

    function jm() {
        var a, b = null === (a = Eb.PerformanceObserver) || void 0 === a ? void 0 : a.supportedEntryTypes;
        return !!b && b.includes("first-input")
    }

    function km() {
        if (jm()) try {
            (new PerformanceObserver(Gf)).observe({
                type: "first-input",
                buffered: !0
            })
        } catch (a) {} else B("GLOBAL_EVENT_FIRED", function f(b) {
            var k = b.detail;
            b = k.e.timeStamp;
            if (!c && lm.includes(k.t) && b) {
                k = ed();
                var p = 1E12 < b;
                p && b < k ? b = !1 : (c = Math.round(p ? b - k : b), d = Math.max(0, Math.round(ii() - c)), Hf(), b = !0)
            } else b = !1;
            b && K("GLOBAL_EVENT_FIRED", f)
        })
    }

    function mm(a) {
        a.Gg();
        l = a.Mc();
        a.reset(ii())
    }

    function Hl(a, b) {
        return [
            ["inp", (void 0 === l || b.detail.Eh ? a.Mc() : l) + ""]
        ]
    }

    function ck(a) {
        return [
            ["inp", a.Mc() + ""]
        ]
    }

    function dk(a) {
        a.detail.i === of && (K("ACTION_CLOSED", dk), wg = 1)
    }

    function Sk(a) {
        var b = a.detail,
            f = b.a;
        a = b.s;
        if (b.i === of ) {
            K("ACTION_BEFORE_SEND", Sk);
            wg = 2;
            b = [];
            f = a - f;
            if (Nb("pt")) {
                if (ve.lcpT) {
                    var k = Im;
                    for (var p = Eh.length - 1; 0 <= p; p--)
                        if (Eh[p].Oa < f) {
                            k = Eh[p];
                            break
                        }
                    k && 0 !== k.Oa ? k.Oa > f ? k = {
                        Oa: -6
                    } : Oi = k.size || 0 : k = {
                        Oa: -5
                    };
                    k.Jc && k.td && k.url ? b.push(["lcpE", k.Jc], ["lcpSel", k.td], ["lcpS",
                        k.size + ""
                    ], ["lcpT", k.Oa + ""], ["lcpU", k.url], ["lcpLT", k.loadTime + ""]) : b.push(["lcpT", k.Oa + ""])
                } else b.push(["lcpT", "-3"]);
                ve.fcp ? b.push(["fcp", (Rk ? Rk > f ? -6 : Ca(Rk) : -5) + ""]) : b.push(["fcp", "-3"]);
                ve.fp ? b.push(["fp", (ak ? ak > f ? -6 : Ca(ak) : -5) + ""]) : b.push(["fp", "-3"])
            }
            if (Nb("cls"))
                if (ve.cls) {
                    k = b.push;
                    p = 0;
                    for (var x = Yj; p < x.length; p++) {
                        var N = x[p],
                            ca = N.startTime;
                        if (ca < f) {
                            if (5E3 < ca - Ni || 1E3 < ca - Mi) Ni = ca, Ch = 0;
                            Mi = ca;
                            Ch += N.lg;
                            Dh = Math.max(Dh, Ch)
                        }
                    }
                    Yj = [];
                    k.call(b, ["cls", +Dh.toFixed(4) + ""])
                } else b.push(["cls", "-3"]);
            if (Nb("lt"))
                if (ve.lt) {
                    k =
                        b.push;
                    p = 0;
                    x = ed();
                    N = 0;
                    for (ca = Li; N < ca.length; N++) {
                        var ra = ca[N],
                            fb = p + ra.duration > f;
                        x + ra.startTime + ra.duration <= a && !fb && (p += ra.duration)
                    }
                    null === Xj || void 0 === Xj ? void 0 : Xj.disconnect();
                    k.call(b, ["lt", Math.round(p) + ""])
                } else b.push(["lt", "-3"]);
            0 === c && 0 === d || b.push(["fIS", c + ""], ["fID", d + ""]);
            0 < b.length && pd("_wv_", b, of , bf, 1)
        }
    }

    function Yf() {
        try {
            if (!Eb.dT_ || !(void 0 === Eb.dialogArguments ? navigator.cookieEnabled || Ha() : Ha())) return !1;
            var a = Eb.dT_;
            a.initialized = !1;
            a.pageId = "";
            a.pageTitle = "";
            a.frameCount = 0;
            a.bwsW =
                0;
            a.bwsH = 0;
            a.syn = !1;
            a.googleBot = !1;
            a.tp = Wa;
            a.gicv = U;
            a.aFU = Xd;
            a.gPId = je;
            a.iRO = Ie;
            a.gBI = ea;
            a.iMD = Na;
            a.cfg = hd;
            a.acfgP = ad;
            a.smbi = Xe;
            a.ism = se;
            a.iMod = tf;
            a.gMu = Uc;
            a.tau = hb;
            a.icr = Ec;
            a.lv = la;
            a.sv = E;
            a.svl = aa;
            a.gh = Q;
            a.aesc = ha;
            a.puesc = W;
            a.tpesc = Ra;
            a.apl = zl;
            a.rpl = Al;
            a.dbg = Vb;
            a.dbc = na;
            a.dlf = Db;
            a.loc = Qb;
            a.sch = O;
            a.gNTO = Kd;
            a.vAT = Ca;
            a.cVIn = Lb;
            a.sNT = Ob;
            a.gPAH = M;
            a.id = da;
            a.ss = Oc;
            a.ssP = pl;
            a.asl = sc;
            a.sMPS = lc;
            a.gBP = Jh;
            a.cB = Nj;
            a.sB = ql;
            a.ea = zg;
            a.la = Ye;
            a.lx = kf;
            a.dlx = eg;
            a.ex = gf;
            a.ec = Ag;
            a.lc = re;
            a.eV = Ek;
            a.pe = am;
            a.pw = ll;
            a.pl = Fk;
            a.rs = Kj;
            a.pcn = Di;
            a.ca = sb;
            a.can = fc;
            a.isci = J;
            a.ti = Wd;
            a.las = mb;
            a.gca = Mb;
            a.gAR = yd;
            a.gAA = Ic;
            a.sxbe = Nf;
            a.aWF = Tk.dtAWF;
            a.mx = g;
            a.mxf = He;
            a.mxg = Sj;
            a.mxc = Mk;
            a.mxt = Wf;
            a.gITAID = Jc;
            a.re = ej;
            a.rex = Zh;
            a.bi = Dd;
            a.ei = Jd;
            a.gci = jd;
            a.gpi = Nd;
            a.cii = Ed;
            a.pii = ud;
            a.gcv = Cd;
            a.aad = n;
            a.sole = Sf;
            a.iolm = le;
            a.solb = Bf;
            a.slem = Sg;
            a.lst = sa;
            a.sle = Af;
            a.gLEELF = pe;
            a.gNNTV = Ac;
            a.gLAet = Mh;
            a.iSAC = jl;
            a.sSAC = hl;
            a.lAID = ma;
            a.maep = il;
            a.snt = ye;
            a.aO = ul;
            a.rO = vl;
            a.aMO = sl;
            a.rMO = tl;
            a.gMN = wl;
            a.sMN = xl;
            a.eta = Bl;
            a.lta = Ii;
            a.etc = vg;
            a.ltc = Ff;
            a.cia = fh;
            a.wst = kj;
            a.wsp =
                lj;
            a.wtt = Dl;
            a.rpm = mj;
            a.sasl = rl;
            a.dnrui = y;
            a.aFr = Qa;
            a.fE = Fa;
            a.aM = Ba;
            a.aAP = Cc;
            a.aAPY = pi;
            a.iBt = oa;
            a.cAE = pd;
            a.addE = B;
            a.remE = K;
            a.disE = H;
            a.red = dd;
            a.cUIRO = wc;
            a.aAWC = Ze;
            a.gXACT = q;
            a.uaxu = F;
            a.gaxu = C;
            a.last = xb;
            a.aFI = cm;
            a.aur = G;
            a.oK = w;
            a.oHOP = fa;
            a.gdi = hh;
            a.ssmbi = vf;
            a.gecsss = gc;
            a.fEP = xa;
            a.iVRA = em;
            a.sNV = We;
            a.sVDM = Pc;
            a.gVDM = id;
            a.fP = jb;
            a.iNF = ub;
            a.aAPy = ge;
            a.uabmr = Y;
            a.cbf = Zc;
            a.asyncCoreVersion = "10303241106123517";
            a.gRT = Ee;
            a.itcp = Qj;
            a.gtc = Cl;
            a.nan = Rc;
            var b = S();
            ac = b.st;
            oc = b.nw;
            og = b.sC;
            Xg = b.gC;
            Ig = b.esc;
            qj = b.cLSCK;
            Vi = b.gPC;
            Hg = b.sPC;
            Vh = b.iVSC;
            Te = b.p3SC;
            th = b.gSC;
            yh = b.sSC;
            Ph = b.gVI;
            vh = b.cPC;
            zk = b.gSSV;
            Bi = b.sSSV;
            ue = b.gSId;
            Fh = b.pCfg;
            ek = b.pCSAA;
            rj = b.cFHFAU;
            nc = b.sCD;
            Nb = b.bcv;
            Yb = b.ncv;
            Kc = b.scv;
            Pi = b.stcv;
            df = b.rplC;
            Rd = b.aBPSL;
            Se = b.gBPSL;
            xg = b.gBPSCC;
            Df = b.gFId;
            Ug = b.oEIEWA;
            fk = b.iNV;
            yi = b.gVID;
            Qi = b.gARnVF;
            xh = b.cAUV;
            Ei = b.sVIdUP;
            xi = b.gDtc;
            Ri = b.cfgO;
            af = b.version;
            Bj = b.rBPSL;
            Sh = b.aNVL;
            Si = b.dPV;
            Gh = b.ePV;
            sj = b.eA;
            gk = b.dA;
            Hh = b.iXB;
            zi = b.de;
            ji = b.aRI;
            rf = b.gXBR;
            ii = b.rnw;
            ed = b.gto;
            Be = b.iEC;
            Yg = b.ct;
            Ae = b.ael;
            Jj = b.gNVIdN;
            If = b.gxwp;
            yg = b.prm;
            ki = b.gidi;
            zj = b.iDCV;
            nh = b.gCF;
            Uh = b.iIO;
            Ui = b.gPSMB;
            bj = b.iAEPOO;
            oh = b.lvl;
            ta(b);
            b.version = Pa();
            Tf = yg();
            var f = navigator.userAgent;
            a = {
                ie: NaN,
                edge: NaN,
                ec: NaN,
                ff: NaN,
                ch: NaN,
                sf: NaN,
                msf: NaN,
                ab: NaN,
                op: NaN
            };
            try {
                b = /Firefox[\/\s](\d+\.\d+)/;
                var k = /(iPod|iPhone|iPad)/,
                    p = /AppleWebKit/;
                if (f.includes("MSIE")) {
                    var x = f.lastIndexOf("MSIE") + 5;
                    a.ie = parseInt(f.substring(x, x + 3))
                } else if (f.includes("Trident")) {
                    if (f.includes("rv:")) {
                        var N = f.lastIndexOf("rv:") + 3;
                        var ca = parseInt(f.substring(N, N + 2))
                    } else f.includes("rv ") ? (N = f.lastIndexOf("rv ") +
                        3, ca = parseInt(f.substring(N, N + 2))) : ca = NaN;
                    a.ie = ca
                } else if (f.includes("Edge")) {
                    var ra = f.lastIndexOf("Edge") + 5;
                    a.edge = parseInt(f.substring(ra, ra + 2))
                } else if (f.includes("Edg/")) {
                    var fb = f.lastIndexOf("Edg/") + 4;
                    a.ec = parseInt(f.substring(fb, fb + 2))
                } else if (b.test(f)) {
                    var qb = parseInt((f.match(b) || [])[1]);
                    a.ff = -1 === qb ? 0 : qb
                } else if (f.includes("Android")) {
                    var db = f.indexOf("Android") + 8;
                    a.ab = parseFloat(f.substring(db, db + 3))
                } else if (f.match(k) && f.match(p)) a.msf = parseFloat((f.match(/(?:OS |Version\/)([0-9]+)(?:[_.][0-9])*/) || [])[1]);
                else if ("Safari" !== navigator.appName && !f.includes("Safari") || f.includes("Chrom"))
                    if (Eb.opera) a.op = parseInt(Eb.opera.version().split(".")[0]);
                    else if (f.includes("OPR/")) a.op = parseInt((f.match(/OPR\/([0-9]*\.[0-9]*)/) || [])[1]);
                else {
                    var Wb;
                    var $b = +(null === (Wb = /Chrome\/([0-9]{1,4})/.exec(f)) || void 0 === Wb ? NaN : Wb[1]) || NaN;
                    a.ch = $b
                } else {
                    var Ib = f.substring(f.lastIndexOf("Version/")).match(/Version\/([0-9]+(\.[0-9]*)?)/);
                    a.sf = Ib ? parseInt(Ib[1]) : NaN
                }
            } catch ($m) {}
            Vg = a;
            S().syn = f.includes("RuxitSynthetic");
            S().googleBot = f.includes("Googlebot");
            var uc, xc = Eb.dT_,
                $c = Pa();
            $c !== xc.version && (null === (uc = Eb.console) || void 0 === uc ? void 0 : uc.log("WARNING: Snippet version [" + xc.version + "] and monitoring code [" + $c + "] versions do not match! Please update your code snippet to ensure compatibility."));
            xc.version = "10303241106123517";
            Ce = xc.agentStartTime || xc.gAST();
            if (!xc || xc.initialized) return !1;
            f = 0;
            for (var me = w(pg); f < me.length; f++) pg[me[f]] = [];
            V();
            jf();
            rg = Ri ? Ri() : S().cfg;
            rg.initializedModules = "";
            Hh(rg);
            $f();
            me = 0;
            Vg.sf ? me = 100 : Vg.msf && (me = 1E3);
            Cj = me;
            Yd = {
                actions: {},
                Ca: []
            };
            ph = fe;
            Gg = 1;
            Jm = 0;
            pf = [];
            ce = [];
            wd = null;
            Rb(null, !0);
            Lg = [];
            Ub();
            md = 0;
            B("VISIBILITY_CHANGED", Nc);
            e = Mc(Qb());
            Sd();
            B("CONFIG_UPDATE", Sd);
            sk = {};
            Ef = $e();
            Ud = Qd = void 0;
            Zd = 0;
            xd = !0;
            Nb("imm") && Na() || (Sc("click", "C", "clk"), Sc("mousedown", "D", "mdw"), Sc("mouseup", "U", "mup"));
            Sc("dblclick", "CC", "dcl");
            Sc("keydown", "KD", "kyd");
            Sc("keyup", "KU", "kyu");
            Sc("scroll", "S", "scr");
            Sc("touchstart", "TS", "tcs");
            Sc("touchend", "TE", "tce");
            Sc("change", "H", "chg");
            if (Kc("ade")) {
                var qf =
                    Kc("ade").split(",");
                if (qf && 0 < qf.length)
                    for (me = 0; me < qf.length; me++) Sc(qf[me])
            }
            Fj = 0;
            a: {
                var Uk = document.getElementsByTagName("meta"),
                    Km = Yb("mrt");
                for (qf = 0; qf < Uk.length; qf++) {
                    var hk = Uk[qf],
                        nm = hk.getAttribute("http-equiv");
                    if (nm && "refresh" === nm.toLowerCase()) {
                        var om = hk.getAttribute("content");
                        if (parseInt((om && om.split(";") || [])[0]) <= Km) {
                            var ik = !0;
                            break a
                        }
                    }
                }
                ik = !1
            }
            ik && le();
            "undefined" !== typeof WeakMap && (Xh = new WeakMap);
            var Vk = document.location,
                Lm = $e();
            Vk && Za(Lm) && Lm.aFU(Vk.href);
            var tj = Kc("rid");
            if (!tj ||
                "RID_" === tj) {
                Uk = Pi;
                var uj = Kc("ridPath"),
                    Il = uj ? uj : Eb.location.pathname,
                    ch = Eb.location.search;
                ch && ch.length && ch.startsWith("?") && (ch = ch.substring(1));
                uj = ch;
                var ne = 31 + ba(Il);
                ne = 31 * ne + ba(uj);
                Uk("rid", "RID_" + (ne & ne))
            }
            Ae(Eb, "beforeunload", $l);
            Ae(Eb, "pagehide", Kh);
            Ae(document, "readystatechange", Nh);
            ac(Tg, 3E3);
            Ae(Eb, "load", kh);
            bf = Re();
            ik = !ik;
            var li = $e();
            if (Za(li)) {
                var vj = li.sSAC;
                vj && vj(!1);
                var de = (Nb("dsss") ? la(Qh()) : decodeURIComponent(nh(Qh()))).split("|");
                if (12 === de.length) {
                    var jk = Nb("dsss"),
                        Mm = Nb("dssv");
                    vj = "";
                    !jk && Mm ? vj = la(Qh(), !0) : jk && !Mm && (vj = decodeURIComponent(nh(Qh())));
                    var Wk = vj.split("|");
                    if (4 === Wk.length) {
                        var Jl = Wk[1],
                            we = Wk[2],
                            Nm = Wk[3];
                        de.push(Wk[0]);
                        de.push(Jl);
                        de.push(we || "");
                        de.push(Nm)
                    }
                }
                var Xk = de.join("|");
                ik && L("-");
                if (Xk && "-" !== Xk) {
                    var oe = Xk.split("|");
                    if (16 === oe.length || 12 === oe.length) {
                        var Yk = parseInt(oe[5]);
                        de = bf - Yk;
                        if (-10 < de && 6E4 >= de) {
                            de = {
                                id: -1,
                                kind: -1,
                                hydrated: !1,
                                trigger: -1
                            };
                            jk = 0;
                            for (var kk = W(oe[15]).split(";"); jk < kk.length; jk++) {
                                var Kl = kk[jk],
                                    Ll = Kl.substring(1);
                                switch (Kl.charAt(0)) {
                                    case "i":
                                        de.id = +Ll;
                                        break;
                                    case "k":
                                        de.kind = +Ll;
                                        break;
                                    case "h":
                                        de.hydrated = !!+Ll;
                                        break;
                                    case "t":
                                        de.trigger = +Ll
                                }
                            }
                            var Zk = {
                                isDelayed: "true" == oe[0],
                                type: oe[1],
                                id: parseInt(oe[2]),
                                name: oe[3],
                                info: oe[4],
                                startTime: Yk,
                                frameId: oe[6],
                                Ba: wa(oe[7]),
                                anchor: oe[10],
                                aa: oe[11],
                                ua: void 0
                            };
                            16 === oe.length && (Zk.ua = {
                                name: wa(oe[12]),
                                timestamp: parseInt(oe[13]),
                                group: wa(oe[14]),
                                trigger: de.trigger,
                                kind: de.kind,
                                hydrated: de.hydrated,
                                id: de.id
                            });
                            oe = !1;
                            S() !== li && (oe = li.iRO(Zk.Ba));
                            !document.referrer || Zk.Ba === document.referrer || Zk.Ba === document.location.href ||
                                oe ? rh = Zk : L(Xk)
                        } else L("-")
                    }
                }
            }
            try {
                Pc(1);
                $a = X = {
                    id: ++za,
                    name: Me(Qb()),
                    timestamp: bf,
                    kind: 0,
                    trigger: Gb,
                    hydrated: !1
                };
                Qf();
                var Ml, $k = null === (Ml = rh) || void 0 === Ml ? void 0 : Ml.ua,
                    pm = zf($k, X);
                ae(pm);
                B("VIEW_STABLE", kg);
                B("ACTION_ENTERED", eh);
                B("ACTION_BEFORE_SEND", qe);
                B("ACTION_SENT", lg);
                B("BF_CACHE_RESTORED", Lh);
                el = ke(Oe);
                B("HISTORY_API_EVENT", Ne);
                Ae(Eb, "popstate", Ne);
                Ae(Eb, "hashchange", Ne);
                try {
                    jh("pushState"), jh("replaceState")
                } catch ($m) {}
                Rd(Cg);
                B("VIEW_STABLE", ng);
                Gj = Qb()
            } catch ($m) {}
            Qe();
            kl();
            wf();
            Rg();
            Lf();
            Wj();
            Zi = "0";
            var al = document.visibilityState;
            al ? ("hidden" === al && (Zi = "1"), Ae(document, "visibilitychange", gd)) : Zi = "2";
            ze();
            wg = 0;
            var wj = !!Eb.PerformanceObserver;
            ve.cls = !(!wj || !Eb.LayoutShift);
            ve.fcp = !(!wj || !Eb.PerformancePaintTiming);
            ve.fp = !(!wj || !Eb.PerformancePaintTiming);
            ve.lcpT = !(!wj || !Eb.LargestContentfulPaint);
            ve.lt = !(!wj || !Eb.PerformanceLongTaskTiming);
            Nb("pt") && (ve.fp && Qk(), ve.lcpT && oj());
            Xf();
            Li = [];
            Nb("lt") && ve.lt && im();
            km();
            var qm, Nl, Ol, an = Eb.PerformanceEventTiming && "interactionId" in Eb.PerformanceEventTiming.prototype,
                Om = null === (Ol = null === (Nl = null === (qm = Eb.PerformanceObserver) || void 0 === qm ? void 0 : qm.supportedEntryTypes) || void 0 === Nl ? void 0 : Nl.includes) || void 0 === Ol ? void 0 : Ol.call(Nl, "event");
            if (an && Om) {
                var Pl = Xa();
                B("VIEW_CHANGE", mm.bind(null, Pl));
                B("VIEW_END", Hl.bind(null, Pl));
                var rm = Xa();
                B("PAGE_END", ck.bind(null, rm))
            }
            B("ACTION_CLOSED", dk);
            B("ACTION_BEFORE_SEND", Sk);
            Hk();
            yl();
            Rd(ol);
            B("DEBUG_INFO_REQUESTED", Ve);
            jg();
            lf();
            B("DEBUG_INFO_REQUESTED", ki);
            Pf();
            B("DEBUG_INFO_REQUESTED", xf);
            if ("undefined" === typeof Eb.dT_) var dn = !1;
            else "undefined" === typeof Eb.dtrum && (Eb.dtrum = new Ql), dn = !0;
            if (!dn) return !1;
            var bn = S();
            bn.initialized = !0;
            "function" === typeof bn.initCallback && bn.initCallback()
        } catch ($m) {
            return !1
        }
        return !0
    }
    var Tf = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        Cb = "undefined" !== typeof window ? window : self,
        Eb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Gl = Eb.navigator,
        Ih = {
            u: "transferSize",
            v: "encodedBodySize",
            w: "decodedBodySize",
            L: "workerStart",
            M: "dtRpid",
            V: "dtSInfo",
            W: "dtTao",
            X: "responseStatus"
        },
        Vf = {
            x: "statuscode",
            y: "ip",
            A: "failedResource",
            C: "requestId",
            E: "relevance",
            F: "relevantArea",
            K: "isCritical",
            N: "vcIrrelevanceReason",
            O: "imageWidth",
            P: "imageHeight",
            Q: "imageNaturalWidth",
            R: "imageNaturalHeight",
            S: "onloadTime",
            T: "rtRequestId",
            U: "certExpDate"
        },
        lk = {
            o: "domInteractive",
            p: "domContentLoadedEventStart",
            q: "domContentLoadedEventEnd",
            r: "domComplete",
            s: "loadEventStart",
            t: "loadEventEnd"
        },
        Jf = {
            c: "redirectStart",
            d: "redirectEnd",
            e: "fetchStart",
            f: "domainLookupStart",
            g: "domainLookupEnd",
            h: "connectStart",
            i: "connectEnd",
            j: "secureConnectionStart",
            k: "requestStart",
            l: "responseStart",
            m: "responseEnd"
        },
        cf = Ka(Ka(Ka({}, Jf), {
            n: "domLoading"
        }), lk),
        Uf = Ka(Ka(Ka({}, Jf), lk), Ih),
        Th = Ka(Ka(Ka({}, Jf), Ih), Vf);
    Ka(Ka(Ka({}, Th), cf), Uf);
    var Kf;
    (function(a) {
        a[a.ENABLED = 0] = "ENABLED";
        a[a.DISABLED = 1] = "DISABLED";
        a[a.DELAYED = 2] = "DELAYED"
    })(Kf || (Kf = {}));
    var xe;
    (function(a) {
        a[a.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        a[a.ENABLED = 1] = "ENABLED";
        a[a.BLOCKED = 2] = "BLOCKED"
    })(xe || (xe = {}));
    var mk;
    (function(a) {
        a[a.NONE = 1] = "NONE";
        a[a.OFF = 2] = "OFF";
        a[a.PERFORMANCE = 3] = "PERFORMANCE";
        a[a.BEHAVIOR = 4] = "BEHAVIOR"
    })(mk || (mk = {}));
    var nk;
    (function(a) {
        a.OVERLOAD_PREVENTION = "ol";
        a.PRIVACY_STATE = "prv";
        a.SERVER_ID = "srv";
        a.SESSION_ID = "sn"
    })(nk || (nk = {}));
    var Pg;
    (function(a) {
        a.DYNATRACE_MOBILE = "dynatraceMobile";
        a.MOBILE_AGENT = "MobileAgent"
    })(Pg || (Pg = {}));
    var ok;
    (function(a) {
        a[a.ARRAY = 0] = "ARRAY";
        a[a.BOOLEAN = 1] = "BOOLEAN";
        a[a.NUMBER = 2] = "NUMBER";
        a[a.STRING = 3] = "STRING";
        a[a.FUNCTION = 4] = "FUNCTION";
        a[a.OBJECT = 5] = "OBJECT";
        a[a.DATE = 6] = "DATE";
        a[a.ERROR =
            7] = "ERROR";
        a[a.ELEMENT = 8] = "ELEMENT";
        a[a.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        a[a.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        a[a.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        a[a.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        a[a.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        a[a.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING";
        a[a.CSS_RULE = 15] = "CSS_RULE";
        a[a.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        a[a.REQUEST = 17] = "REQUEST";
        a[a.RESPONSE = 18] = "RESPONSE";
        a[a.SET = 19] = "SET";
        a[a.MAP = 20] =
            "MAP";
        a[a.WORKER = 21] = "WORKER";
        a[a.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        a[a.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        a[a.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        a[a.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        a[a.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        a[a.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(ok || (ok = {}));
    var rk = -1,
        Wi = cb("dtPC"),
        Ue = cb("dtCookie");
    cb("rxvt");
    cb("rxVisitor");
    cb("dTValidationCookie");
    var Qh = cb("dtSa"),
        Jg = function() {
            for (var a, b = [], f = 0; 256 > f; f++) {
                a = f;
                for (var k = 0; 8 > k; k++) a = a & 1 ? 3988292384 ^ a >>> 1 :
                    a >>> 1;
                b[f] = a
            }
            return b
        }(),
        Cf = 0,
        lh = Infinity,
        mh = 0,
        Od, $e, cd, ac, oc, og, Xg, Ig, qj, Vi, Hg, Vh, Te, th, yh, Ph, vh, zk, Bi, ue, Fh, ek, rj, nc, Nb, Yb, Kc, Pi, df, Rd, Se, xg, Df, Ug, fk, yi, Qi, xh, Ei, xi, Ri, Bj, Sh, Si, Gh, sj, gk, Hh, zi, ji, rf, ii, ed, Be, Yg, Ae, Jj, If, yg, ki, zj, nh, Uh, Ui, bj, oh, af, Ce, jc = !1,
        bf = -1,
        of , Zg = [],
        Gc = !1,
        fd, Dk, Yi, Vg, ld = "^><%/\\(){}[]".split(""),
        Eg = {
            "^": "^^",
            "|": "^p",
            ",": "^c",
            ";": "^s"
        },
        Oh = function(a) {
            var b = {},
                f;
            for (f in a) fa(a, f) && (b[a[f]] = f);
            return b
        }(Eg),
        Qc, pg = (Qc = {}, Qc.CONFIG_UPDATE = [], Qc.ACTION_CLOSED = [], Qc.ACTION_BEACON_FORCED = [], Qc.ACTION_BEFORE_SEND = [], Qc.ACTION_SENT = [], Qc.ACTION_ENTERED = [], Qc.ACTION_LEFT = [], Qc.VIEW_CHANGE = [], Qc.VIEW_STABLE = [], Qc.DEBUG_INFO_REQUESTED = [], Qc.CSS_TRANSMISSION_STARTED = [], Qc.VISUALLY_COMPLETE = [], Qc.GLOBAL_EVENT_FIRED = [], Qc.HISTORY_API_EVENT = [], Qc.VISIBILITY_CHANGED = [], Qc.LOAD_END = [], Qc.INSTRUMENTATION_TRIGGERED = [], Qc.PAGE_LEAVING = [], Qc.HTTP_RESPONSE = [], Qc.OPT_IN_STATE_CHANGED = [], Qc.PAGE_END = [], Qc.VIEW_END = [], Qc.BF_CACHE_RESTORED = [], Qc.REQUEST_STARTED = [], Qc.REQUEST_COMPLETED = [], Qc),
        Zf;
    (function(a) {
        a.ANCHOR =
            "A";
        a.BUTTON = "BUTTON";
        a.FORM = "FORM";
        a.I_FRAME = "IFRAME";
        a.IMAGE = "IMG";
        a.INPUT = "INPUT";
        a.LABEL = "LABEL";
        a.LINK = "LINK";
        a.OPTION = "OPTION";
        a.SCRIPT = "SCRIPT";
        a.SELECT = "SELECT";
        a.STYLE = "STYLE";
        a.TEXT_AREA = "TEXTAREA"
    })(Zf || (Zf = {}));
    var Td = !1,
        md = 0,
        pf = [],
        ce = [],
        wd, Fg, Yd, Gg = 1,
        ph = fe,
        Pd = 0,
        qg = [],
        xj = !0,
        ri = [],
        yj = [],
        Xi = !1,
        Aj = [],
        e, h = [],
        m = 0,
        r = "-",
        A;
    (function(a) {
        a[a.LABEL = 0] = "LABEL";
        a[a.NAME = 1] = "NAME";
        a[a.OTHER = 2] = "OTHER";
        a[a.CLASS = 3] = "CLASS";
        a[a.TAG = 4] = "TAG"
    })(A || (A = {}));
    var T = 0,
        za = 0,
        X, $a, ab = [],
        Gb = 0,
        Yc = 0,
        Gd = [],
        Vd, qh =
        (Vd = {}, Vd.name = "", Vd.type = "", Vd.validUntil = 0, Vd.start = 0, Vd.target = void 0, Vd.url = "", Vd.title = "", Vd.view = void 0, Vd),
        Qd, Ud, Zd, xd, Ef, sk, si = -1,
        rh = null,
        tk = [],
        mi, pk, Rl, sm, uk = (mi = {}, mi._csprv_ = (pk = {}, pk.blockedURL = Oa, pk.documentURL = Oa, pk.referrer = Oa, pk.sourceFile = Oa, pk), mi._customerror_ = function(a, b) {
            return "name" === a ? Va(a, b, !0, 1E3) : Va(a, b, !0, Yb("mcepsl"))
        }, mi._vc_ = (Rl = {}, Rl.VE = function(a, b) {
            return b
        }, Rl), mi._dj_ = function(a, b) {
            return b
        }, mi._wv_ = (sm = {}, sm.lcpU = Oa, sm), mi),
        dl, ni = function() {
            function a() {
                this.id =
                    ++dl;
                this.Fb = [];
                this.Ae = this.Nb = !1;
                this.pc = []
            }
            a.prototype.Vf = function(b) {
                this.Fb.push(b)
            };
            a.prototype.hh = function(b) {
                for (var f = 0; f < this.Fb.length; f++)
                    if (this.Fb[f] === b) {
                        Ea(this.Fb, f);
                        break
                    }
            };
            a.prototype.kb = function(b, f, k, p) {
                for (var x = 0, N = this.Fb; x < N.length; x++)(0, N[x])(b, f, k, p)
            };
            a.prototype.Yf = function(b) {
                this.pd = b;
                "string" !== typeof b && (this.Ae = !0)
            };
            a.prototype.Y = function(b, f, k) {
                void 0 === k && (k = !1);
                this.Nb = this.Nb || k;
                this.pc.push([b, f])
            };
            a.prototype.Za = function(b, f, k) {
                f && this.Y(b, f, k)
            };
            a.prototype.Sb =
                function(b) {
                    for (var f = 0, k = this.pc; f < k.length; f++) {
                        var p = k[f];
                        if (p[0] === b) return p[1]
                    }
                    return ""
                };
            a.prototype.uf = function() {
                for (var b = [], f = 0, k = this.pc; f < k.length; f++) {
                    var p = k[f];
                    b.push("$", p[0], "=", p[1])
                }
                return b.join("")
            };
            a.prototype.raw = function() {
                return this.pc
            };
            return a
        }(),
        Rh, xk, Wg, ti = Eb.parent,
        Vl = [],
        wk = [],
        vk = "",
        Kg = function() {
            function a() {}
            a.prototype.Gc = function() {
                return new ni
            };
            a.prototype.$g = function(b, f) {
                if (xj) return null;
                var k = this.Gc();
                Nb("bs") && k.Y("bs", "1", !1);
                Da(vd, this, b, f, k);
                return k.Nb ?
                    k : null
            };
            a.prototype.Tf = function(b, f, k, p) {
                k.Za("isUnload", p ? "1" : "", !1);
                k.Za("latC", "0", !1);
                k.Za("app", Kc("app"), !1);
                k.Y("vi", Ph(), !1);
                k.Za("dnt", pa() ? "1" : "", !1);
                k.Y("fId", Df(), !1);
                p = Pa();
                var x = af;
                k.Y("v", p, !1);
                x !== p && k.Y("iv", x, !1);
                b || (p = yi(), this.av(k, "vID", p), this.ha(k) && fk() && this.av(k, "nV", "1"));
                !b && f && Qi() && k.Y("nVAT", "1", !1);
                b = k.Za;
                f = encodeURIComponent;
                p = Zg;
                Zg = [];
                b.call(k, "vcr", f(p.join(",")))
            };
            a.prototype.bg = function(b) {
                var f = Dk;
                f && Td && (b.Y("responseCode", f.responseCode, !1), b.Za("responseMessage",
                    Ig(f.message), !1), Dk = void 0)
            };
            a.prototype.Ze = function(b, f, k) {
                void 0 === b && (b = !1);
                void 0 === f && (f = !1);
                void 0 === k && (k = !1);
                if (b) {
                    var p = [];
                    for (var x = "", N = "", ca = {
                            Bb: 0
                        }, ra = 0, fb = pf; ra < fb.length; ra++) {
                        var qb = fb[ra];
                        var db = qb;
                        var Wb = ca;
                        if (db.ee(Wb.Bb)) var $b = db = !0;
                        else Wb.Bb++, $b = db.ee(Wb.Bb + db.Cb), $b || (Wb.Bb += db.Cb), db = !1;
                        if (!db) {
                            x || (x = qb.cb());
                            N = qb.cb();
                            if (qb.parentFrameActionName) {
                                db = p;
                                Wb = db.push;
                                var Ib = qb.Xe;
                                Ib = [0, qb.We, ha(qb.parentFrameActionName), Ib].join("|");
                                Wb.call(db, Ib)
                            }
                            p.push(qb.Hc($b))
                        }
                    }
                    p = {
                        xc: p.join(","),
                        referer: x,
                        sourceUrl: N
                    }
                } else p = Xc(f, k);
                if (x = 0 < p.xc.length) {
                    N = this.Gc();
                    N.Y("a", Ig(p.xc), !0);
                    Kc("domainOverride") && (N.Y("dO", Kc("domainOverride"), !1), Pi("domainOverride", ""));
                    Nb("bs") && N.Y("bs", "1", !1);
                    b && N.Y("PV", "1", !1);
                    S().pageId !== Df() && N.Y("pId", S().pageId, !1);
                    xk && N.Y("pFId", xk, !1);
                    N.Y("rId", Kc("rid"), !1);
                    N.Y("rpId", Kc("rpid"), !1);
                    if (!b) {
                        a: {
                            ca = (ra = Eb.performance) ? ra.timing : !1;
                            if (ra && ca && (ra = ca.domComplete, ca = ca.domContentLoadedEventEnd, ra || ca)) {
                                ca = ra ? ra : ca;
                                break a
                            }
                            ca = fd
                        }
                        ca && N.Y("domR", ca, !1);this.bg(N)
                    }
                    ua(k) &&
                        N.Y("unload", "xhr", !1);
                    Da(vd, this, b, f, N);
                    xj = !1
                } else N = this.$g(b, f);
                N && (this.cg(p.sourceUrl, N), this.Tf(b, x, N, k));
                return {
                    beacon: N,
                    referrer: p.referer
                }
            };
            a.prototype.cg = function(b, f) {
                var k = Qb();
                f.Y("url", encodeURIComponent(k), !1);
                f.Y("title", Ig(Rc(document.title, 100)), !1);
                var p = f.Sb("a");
                p = p && (p.startsWith("s") || p.startsWith("d"));
                b && b !== k && !p && f.Y("sUrl", encodeURIComponent(b), !1)
            };
            a.prototype.av = function(b, f, k, p, x) {
                k = "function" === typeof k ? k() : k;
                "undefined" !== typeof k && null !== k && "" !== k && b.Y(f + (x ? x : ""),
                    k, p)
            };
            a.prototype.ha = function(b) {
                return !!b.Sb("a")
            };
            a.prototype.hla = function(b) {
                return b.Sb("a").includes("_load_")
            };
            a.prototype.ar = function(b, f) {
                b.Yf(f)
            };
            a.prototype.aBRL = function(b, f) {
                b.Vf(f)
            };
            a.prototype.rBRL = function(b, f) {
                b.hh(f)
            };
            return a
        }(),
        Sl = function(a) {
            function b(f) {
                var k = a.call(this) || this;
                k.status = f;
                return k
            }
            kb(b, a);
            return b
        }(Error),
        tm = function(a) {
            function b(f) {
                var k = f.message,
                    p = f.Ja,
                    x = f.Bc;
                f = a.call(this, f.status) || this;
                f.message = k || "";
                f.Ja = p;
                f.Bc = x;
                return f
            }
            kb(b, a);
            return b
        }(Sl),
        rg, um = [],
        Tl;
    (function(a) {
        a.ENABLED = "enabled";
        a.NAME = "name"
    })(Tl || (Tl = {}));
    var Pm;
    (function(a) {
        a.FAIL = "fail";
        a.SUCCESS = "success"
    })(Pm || (Pm = {}));
    var Qm;
    (function(a) {
        a.STREAM = "application/octet-stream";
        a.TEXT = "text/plain;charset=UTF-8"
    })(Qm || (Qm = {}));
    var vm = function() {
            function a(b) {
                this.wa = b;
                this.Wd = b.ud ? "application/octet-stream" : "text/plain;charset=UTF-8"
            }
            a.prototype.send = function() {
                for (var b = this.wa.path, f = 0; f < um.length; f++)(0, um[f])(b);
                return this.vd().then(this.Fg.bind(this)).catch(this.Eg.bind(this))
            };
            a.prototype.se = function() {
                return Hb(this.wa.hb, Yb("mhl"))
            };
            a.prototype.lf = function() {
                var b = this.wa.hb;
                return !!b && b !== Qb() && !Nb("cors")
            };
            a.prototype.kb = function(b, f) {
                var k = this.wa,
                    p = k.fg,
                    x = k.gg;
                k = k.beacon;
                try {
                    k.kb(b, f, p, x)
                } catch (N) {}
            };
            a.prototype.ig = function(b) {
                if (!("object" === typeof b && b && "status" in b && Uh(b, 7))) {
                    b = "object" === typeof b && b && "message" in b ? b.message : "";
                    var f;
                    if (f = this.Ja()) f = Vg, f = !!(f.sf || f.msf || f.ff) && "sendBeacon" in navigator && !Nb("dsndb");
                    b = new tm({
                        status: 0,
                        message: b,
                        Ja: f,
                        Bc: this.wa
                    })
                }
                return b
            };
            a.prototype.Fg = function(b) {
                var f = b.body;
                b = b.status;
                this.fe("success", f || b);
                if (f) {
                    b = (null === f || void 0 === f ? void 0 : f.split("|")) || [];
                    b.splice(0, 1);
                    for (var k = 0; k < b.length; k++) {
                        var p = f,
                            x = b[k].split("="),
                            N = x[0];
                        x = x[1];
                        if (N === Ue() || "sn" === N) {
                            if (p = decodeURIComponent(x), Vh(p)) {
                                yh(p);
                                p = Ue();
                                try {
                                    Eb.sessionStorage.removeItem(p)
                                } catch (uc) {}
                            }
                        } else if ("name" === N) {
                            N = void 0;
                            try {
                                if (!Nb("eao")) {
                                    var ca = qj(),
                                        ra = Eb.localStorage.getItem(ca),
                                        fb = Kc("cuc");
                                    x = 0;
                                    if (ra) {
                                        var qb = Fh(ra),
                                            db = ek(qb.config || "", qb);
                                        qb.name && (db.csu =
                                            qb.name);
                                        x = parseInt(db.lastModification || "0")
                                    }
                                    var Wb = Fh(p),
                                        $b = ek(Wb.config || "");
                                    if (!fb || !$b.cuc || fb === $b.cuc) {
                                        $b.csu = Wb.name || Kc("csu");
                                        var Ib = parseInt($b.lastModification || "0");
                                        Ib > x && (Eb.localStorage.setItem(ca, p), rj($b), nc($b, !0), Hh($b), ji($b), Ib > +(rg.lastModification || 0) && (rg = df($b), H((N = {}, N.kind = "CONFIG_UPDATE", N.detail = rg, N))))
                                    }
                                }
                            } catch (uc) {}
                        } else "enabled" === N && "false" === x && yb("Cost Control")
                    }
                }
            };
            a.prototype.fe = function(b, f) {
                for (var k = 0, p = xg(); k < p.length; k++)(0, p[k])(this.wa.beacon, b, f)
            };
            a.prototype.Eg =
                function(b) {
                    b = this.ig(b);
                    100 <= ri.length || ri.push(b);
                    this.fe("fail", b.status);
                    if (429 === b.status) {
                        var f = 0;
                        for (b = pf; f < b.length; f++) b[f].Zc();
                        yb("Overload Prevention");
                        return Tf.resolve()
                    }
                    if (!Gc) try {
                        f = qj(), Eb.localStorage.removeItem(f)
                    } catch (k) {}
                    return b.Ja ? Tf.reject(b) : Tf.resolve()
                };
            return a
        }(),
        cn = Eb.fetch,
        Wl = function(a) {
            function b(f) {
                var k, p = a.call(this, f) || this;
                f = f.Ac;
                var x = (k = {}, k["Content-Type"] = p.Wd, k);
                p.lf() && (x["x-dtreferer"] = p.se());
                p.bf = {
                    method: "POST",
                    credentials: "same-origin",
                    headers: x,
                    body: f,
                    keepalive: "string" === typeof f && 65536 > f.length
                };
                p.Jg();
                return p
            }
            kb(b, a);
            b.prototype.Jg = function() {
                var f = Yb("xt");
                if (f) {
                    var k = new AbortController;
                    Cb.dT_.st(k.abort.bind(k), f);
                    this.bf.signal = k.signal
                }
            };
            b.prototype.vd = function() {
                try {
                    return cn(this.wa.path, this.bf).then(this.Bg.bind(this))
                } catch (f) {
                    return Tf.reject(f)
                }
            };
            b.prototype.Bg = function(f) {
                this.kb(XMLHttpRequest.DONE, f.status);
                if (!f.ok || 200 !== f.status) throw new Sl(f.status);
                return f.text().then(function(k) {
                    return {
                        body: k,
                        status: f.status
                    }
                })
            };
            b.prototype.Ja =
                function() {
                    return !0
                };
            return b
        }(vm),
        Bm = function(a) {
            function b(f) {
                return a.call(this, f) || this
            }
            kb(b, a);
            b.prototype.vd = function() {
                var f = this.wa,
                    k = f.path;
                f = f.Ac;
                var p = !1;
                try {
                    p = navigator.sendBeacon(k, f || "")
                } catch (x) {}
                if (!p) return this.kb(XMLHttpRequest.DONE, 0), Tf.reject(new Sl(0));
                this.kb(XMLHttpRequest.DONE, 200);
                return Tf.resolve({
                    status: 200,
                    body: void 0
                })
            };
            b.prototype.Ja = function() {
                return !1
            };
            return b
        }(vm),
        Cm = function(a) {
            function b(f) {
                f = a.call(this, f) || this;
                var k = Yb("xt");
                if (!k) return f;
                f.rc.timeout = k;
                f.rc.ontimeout = f.Pf.bind(f);
                return f
            }
            kb(b, a);
            b.prototype.Pf = function() {
                try {
                    this.rc.abort()
                } catch (f) {}
            };
            b.prototype.Ja = function() {
                return !0
            };
            return b
        }(function(a) {
            function b(f) {
                f = a.call(this, f) || this;
                f.rc = If();
                return f
            }
            kb(b, a);
            b.prototype.vd = function() {
                var f = this.wa,
                    k = f.path,
                    p = f.Ac,
                    x = this;
                return new Tf(function(N, ca) {
                    var ra = x.rc;
                    ra.open("POST", k, !0);
                    ra.setRequestHeader("Content-Type", x.Wd);
                    x.lf() && ra.setRequestHeader("x-dtreferer", x.se());
                    ra.addEventListener("readystatechange", function() {
                        x.kb(ra.readyState,
                            ra.status);
                        ra.readyState === XMLHttpRequest.DONE && (200 === ra.status ? N({
                            body: ra.responseText,
                            status: ra.status
                        }) : ca(new tm({
                            status: ra.status,
                            Ja: !0,
                            Bc: x.wa
                        })))
                    });
                    ra.send(p)
                })
            };
            return b
        }(vm)),
        sh = !1,
        Xl, uh, ui, vi, wh, Fm = {
            jg: rd
        },
        Zi, Jm = 0,
        Rm;
    (function(a) {
        a.INITIATOR_TYPE = "initiatorType";
        a.START_TIME = "startTime"
    })(Rm || (Rm = {}));
    var $i = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        Vm = "function" === typeof PerformanceNavigationTiming || "object" === typeof PerformanceNavigationTiming,
        Ym = "function" === typeof PerformanceTiming || "object" === typeof PerformanceTiming,
        aj = {},
        Wm = Math.pow(2, -52),
        Dm = ["dtRpid", "dtSInfo", "dtTao", "dtRequestID"],
        Yl = {
            unknown: 0,
            xmlhttprequest: 1,
            fetch: 2,
            beacon: 3,
            iframe: 4,
            frame: 5,
            subdocument: 6,
            img: 7,
            image: 8,
            css: 9,
            svg: 10,
            link: 11,
            script: 12,
            input: 13,
            body: 14,
            object: 15,
            embed: 16,
            source: 17,
            audio: 18,
            video: 19,
            track: 20,
            eventsource: 21,
            other: 22,
            icon: 23
        },
        Xm = {
            navigate: 0,
            reload: 1,
            back_forward: 2,
            prerender: 3
        },
        Em = !1,
        Zl, wm = ["_warning_", "_error_", "_log_", "_rs_"],
        $g = function() {
            function a(b,
                f, k, p, x, N, ca, ra, fb, qb, db, Wb, $b, Ib, uc, xc, $c, me, qf) {
                void 0 === $b && ($b = {
                    readyState: -1,
                    status: -1
                });
                void 0 === Ib && (Ib = -1);
                void 0 === qf && (qf = ph());
                this.start = b;
                this.stop = f;
                this.type = k;
                this.name = p;
                this.info = x;
                this.domNodes = N;
                this.hb = ca;
                this.title = ra;
                this.isCustomAction = qb;
                this.fb = db;
                this.Ad = $b;
                this.aa = uc;
                this.Rf = xc;
                this.Wc = me;
                this.id = qf;
                this.depth = 1;
                this.ib = this.nc = 0;
                this.qa = -1;
                this.hd = this.Cb = 0;
                this.Wa = -1;
                this.nb = "";
                this.subActions = [];
                this.Qd = [];
                this.$b = [];
                this.errors = [];
                this.status = 0;
                this.qc = [];
                this.childFrameActions =
                    0;
                this.Xc = !1;
                this.Ra = this.Ga = 0;
                this.B = !1;
                this.Zb = 0;
                this.xhrUrl = "";
                this.qe = !1;
                this.jf(fb);
                this.wf = Zi;
                this.Ea(f);
                this.status = Wb ? 3 : 0;
                this.Na = 0 <= Ib;
                this.ib = Math.max(Ib, 0);
                $c && (this.ua = $c)
            }
            a.prototype.cb = function() {
                return this.parent ? this.parent.cb() : this.hb
            };
            a.prototype.La = function() {
                return this.parent ? this.parent.La() : this.id
            };
            a.prototype.Ea = function(b) {
                this.qe || (this.stop = b, md = Math.max(md, this.stop))
            };
            a.prototype.oe = function() {
                this.qe = !0
            };
            a.prototype.Od = function(b, f) {
                void 0 === f && (f = !1);
                (3 !== this.status ||
                    f) && b && b.name && (b.depth = this.depth + 1, this.subActions.push(b), b.Sc() && (this.Zb++, this.ye(1)), b.parent = this, b.Na || this.Mb(), b.ib += this.ib, b.nc = this.nc + +b.Na)
            };
            a.prototype.Ce = function() {
                return 3 === this.status && !this.Vc()
            };
            a.prototype.close = function(b, f, k, p) {
                var x, N;
                void 0 === p && (p = !1);
                this.domNodes = document.getElementsByTagName("*").length;
                this.start = f || this.start;
                f = !1;
                var ca = this.start,
                    ra = this.stop,
                    fb = this.id,
                    qb = this.Zb;
                b && (this.Ea(Math.max(b, ca, ra)), k && (f = !0));
                if (qb) return this.status = 1, !1;
                if (3 ===
                    this.status) return !1;
                this.status = 3;
                H((x = {}, x.kind = "ACTION_CLOSED", x.detail = (N = {}, N.s = ra, N.a = ca, N.r = this.La(), N.i = fb, N.f = p, N.t = this.type, N.x = this.xhrUrl, N.dne = f, N.rt = void 0, N.cs = this.Ga, N.ce = this.Ra, N.xe = this.Wa, N.xm = this.nb, N["in"] = this.info, N), x));
                return !0
            };
            a.prototype.Zd = function() {
                this.Cb--;
                this.parent && this.parent.Zd()
            };
            a.prototype.Ec = function(b, f, k, p) {
                var x = this;
                void 0 === p && (p = !1);
                if (this.close(b, f, k, p)) {
                    var N = this.parent;
                    if (N) {
                        N.Zb--;
                        this.Uc() || N.Zd();
                        var ca = N.stop;
                        N.Ea(Math.max(this.stop, ca));
                        ac(function() {
                            x.kg(N, ca)
                        }, 0);
                        1 === N.status && N.Ec(b)
                    }
                }
            };
            a.prototype.kg = function(b, f) {
                this.Na && (Yg(this.qa), b.stop === this.stop && (b.stop = f), b.ih(this), delete Yd.actions[this.id])
            };
            a.prototype.ee = function(b) {
                return b + 1 > Yb("moa") && !this.Uc()
            };
            a.prototype.ug = function() {
                var b = this.bestMatchingResource || Ee(this.xhrUrl, "fetch" === this.info ? "fetch" : "xmlhttprequest", this.start, 3 === this.status ? this.stop : 0);
                return ef(b) ? b : null
            };
            a.prototype.ph = function() {
                var b = this.ug();
                if (!b || 0 >= b.startTime) return [];
                this.Ie(b);
                var f = ["b", ed() + Math.round(b.startTime)];
                ye(b, f, b.startTime);
                return f
            };
            a.prototype.Pe = function() {
                for (var b, f, k = this.start, p = this.stop, x = this.id, N = 0, ca = this.subActions; N < ca.length; N++) ca[N].Pe();
                H((b = {}, b.kind = "ACTION_BEFORE_SEND", b.detail = (f = {}, f.s = p, f.a = k, f.i = x, f.r = this.La(), f), b))
            };
            a.prototype.$c = function(b) {
                for (var f, k, p = this.start, x = this.stop, N = this.id, ca = this.type, ra = this.xhrUrl, fb = this.Ga, qb = this.Ra, db = this.nb, Wb = this.Wa, $b = this.fc, Ib = 0, uc = this.subActions; Ib < uc.length; Ib++) uc[Ib].$c(b);
                H((f = {}, f.kind = "ACTION_SENT", f.detail = (k = {}, k.s = x, k.a = p, k.r = this.La(), k.i = N, k.f = b, k.t = ca, k.x = ra, k.rt = $b, k.cs = fb, k.ce = qb, k.xm = db, k.xe = Wb, k["in"] = this.info, k), f));
                Yg(this.qa);
                delete Yd.actions[this.id];
                this.B = !0
            };
            a.prototype.Zc = function() {
                this.xh = !0;
                Fa(this.subActions, function(b) {
                    b.Zc()
                })
            };
            a.prototype.Vc = function() {
                return !!this.qc.length
            };
            a.prototype.Ig = function() {
                this.Va = this.start + 1E4;
                this.bc = 100;
                return this
            };
            a.prototype.Ah = function() {
                this.Dh = oc()
            };
            a.prototype.rg = function() {
                this.tf = oc()
            };
            a.prototype.Rg =
                function() {
                    return !!this.Dh && !this.tf
                };
            a.prototype.Sc = function() {
                return 1 === this.status || 0 === this.status
            };
            a.prototype.Tb = function() {
                return (this.Na && 3 === this.status || this.fb && !(0 < this.hd)) && this.parent ? this.parent.Tb() : this
            };
            a.prototype.Hc = function(b) {
                var f = this.depth,
                    k = this.Qd,
                    p = this.subActions;
                this.domNodes || (this.domNodes = document.getElementsByTagName("*").length);
                var x = [];
                Fa(k, function(N) {
                    x.push(Tb(N, f + 1))
                });
                for (k = 0; k < p.length && !b; k++) x.push(p[k].Hc());
                x.unshift(this.Ha());
                return x.join(",")
            };
            a.prototype.Ha =
                function() {
                    var b = this.stop,
                        f = this.start,
                        k = this.id,
                        p = this.type,
                        x = this.info,
                        N = this.status,
                        ca = this.name,
                        ra = [];
                    ra[0] = this.depth + "";
                    ra[1] = k + "";
                    ra[2] = ha(ca);
                    ra[3] = ha(p);
                    ra[4] = ha(x) || "-";
                    ra[5] = f + "";
                    ra[6] = (3 === N ? b : 0) + "";
                    b = 0;
                    for (f = this.Ag(); b < f.length; b++)
                        if (k = f[b], p = k[1]) p = "string" === typeof p ? ha(p) : "boolean" === typeof p ? +p + "" : p + "", ra.push(k[0] + "", p);
                    return ra.join("|")
                };
            a.prototype.Ag = function() {
                var b = this.xhrUrl,
                    f = this.Ra,
                    k = this.Ga,
                    p = this.start,
                    x = this.name,
                    N = this.Wa,
                    ca = this.nb,
                    ra = this.ua,
                    fb = this.Bh,
                    qb = this.wf,
                    db = this.$b.slice();
                db.push(["dn", this.domNodes], ["cfa", this.childFrameActions], ["xu", b], ["ica", this.isCustomAction], ["gn", this.aa]);
                var Wb = db.push,
                    $b = Wb.apply;
                var Ib = [];
                if (0 !== Gb) {
                    var uc = X,
                        xc = uc.name,
                        $c = uc.timestamp;
                    uc = uc.group;
                    ra && (ra.name !== xc && Ib.push(["svn", ra.name]), ra.timestamp !== $c && Ib.push(["svt", ra.timestamp]), ra.group && ra.group !== uc && Ib.push(["svg", ra.group]), Ib.push(["svtrg", ra.trigger]), Ib.push(["svm", ic(ra)]));
                    fb && (fb.name !== xc && Ib.push(["tvn", fb.name]), fb.timestamp !== $c && Ib.push(["tvt",
                        fb.timestamp
                    ]), fb.group && fb.group !== uc && Ib.push(["tvg", fb.group]), Ib.push(["tvtrg", fb.trigger]), Ib.push(["tvm", ic(fb)]))
                }
                $b.call(Wb, db, Ib);
                b && !Nb("ntd") && db.push(["xrt", this.ph().join("")]);
                "_load_" === x && "undefined" !== typeof document && db.push(["lr", document.referrer]);
                "0" !== qb && db.push(["bg", qb]);
                k && f && (0 < k ? db.push(["xcs", k - p]) : db.push(["xcs", k]), 0 < f ? db.push(["xce", f - p]) : db.push(["xce", f])); - 1 !== N && db.push(["rc", N]);
                ca && db.push(["rm", ca]);
                this.fc && this.stop < this.fc.responseEnd && this.Wc && db.push(["sd",
                    1
                ]);
                return db
            };
            a.prototype.wh = function() {
                return 3600001 <= oc() - this.start ? (this.$c(!1), !0) : !1
            };
            a.prototype.jf = function(b) {
                this.xhrUrl = b.trim()
            };
            a.prototype.qh = function(b) {
                this.bestMatchingResource = b;
                this.Ie(b)
            };
            a.prototype.Ie = function(b) {
                !ef(b) || this.fc === b || "rtRequestId" in b || (b.rtRequestId = --Jm, this.fc = b)
            };
            a.prototype.Mb = function() {
                this.Na && (this.Na = !1, this.Ea(this.tf || this.stop), this.ib = this.nc = 0, this.parent && this.parent.Mb())
            };
            a.prototype.Md = function(b) {
                this.Mb();
                this.Ea(Math.max(b.timestamp, this.stop));
                for (var f = this.parent; f;) f.Ea(Math.max(f.stop, this.stop)), f = f.parent;
                this.Qd.push(b)
            };
            a.prototype.Zf = function() {
                function b(k) {
                    var p;
                    void 0 === k && (k = -1);
                    Ea(f.qc, f.qc.indexOf(b));
                    f.Ea(Math.max(k, f.stop));
                    f.Vc() || (null === (p = f.Rf) || void 0 === p ? void 0 : p.jg())
                }
                var f = this;
                this.qc.push(b);
                return b
            };
            a.prototype.Xf = function(b, f) {
                this.$b.push([b, f])
            };
            a.prototype.He = function() {
                this.Xc = !0
            };
            a.prototype.vh = function(b) {
                this.Xc || (b > this.stop && 3 === this.status ? this.Ga = -6 : this.Ga = b)
            };
            a.prototype.uh = function(b) {
                this.Xc ||
                    (b > this.stop && 3 === this.status ? this.Ra = -6 : this.Ra = b)
            };
            a.prototype.ye = function(b) {
                this.Cb += b;
                var f = 3 === this.status;
                f && (this.status = 1);
                this.parent && (f && (this.Uc() || b++, this.parent.Zb++), this.parent.ye(b))
            };
            a.prototype.Uc = function() {
                return wm.includes(this.type)
            };
            a.prototype.ih = function(b) {
                for (var f = this.subActions, k = f.length - 1; 0 <= k; k--)
                    if (f[k] === b) {
                        Ea(f, k);
                        b.parent = void 0;
                        break
                    }
            };
            return a
        }(),
        Zm = "loadEventEnd loadEventStart domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive responseEnd".split(" "),
        Ul, Lg = [],
        Tk = (Ul = {}, Ul.dtAWF = function(a, b, f, k, p, x) {
            k && !uf(k) ? (Lg.push({
                xhrUrl: qc(Pb(p || "")),
                D: k,
                tg: x || ""
            }), a = a.apply(b, f || []), "g" === x ? ac(function() {
                for (var N = 0; N < Lg.length; N++)
                    if (Lg[N].D === k) {
                        Ea(Lg, N);
                        break
                    }
            }, 0) : Lg.pop()) : a = a.apply(b, f || []);
            return a
        }, Ul),
        Cj, Ti;
    (function(a) {
        a[a.ERROR = 970] = "ERROR";
        a[a.CANCELED = 971] = "CANCELED";
        a[a.TIMEOUT = 972] = "TIMEOUT"
    })(Ti || (Ti = {}));
    var wi = null,
        Dj = null,
        Ai = void 0,
        yk = void 0,
        xm;
    (function(a) {
        a[a.BOTH = 0] = "BOTH";
        a[a.PATH = 1] = "PATH";
        a[a.HASH = 2] = "HASH"
    })(xm || (xm = {}));
    var ym;
    (function(a) {
        a.HASHCHANGE = "hashchange";
        a.POPSTATE = "popstate"
    })(ym || (ym = {}));
    var el, Sm;
    (function(a) {
        a[a.VIEW_CHANGE = 0] = "VIEW_CHANGE";
        a[a.PAGE_END = 1] = "PAGE_END"
    })(Sm || (Sm = {}));
    var Gj = "",
        bl, Gm = (bl = {}, bl.dtAWF = function(a, b, f) {
            return a.apply(b, f || [])
        }, bl),
        Ej, cj = !1,
        Ci = !1,
        fl = !1,
        Wh = 1,
        Yh = null,
        Hj = !1,
        Fj, zh = !1,
        Ck = !1,
        dj = -1,
        Xh, Tm;
    (function(a) {
        a[a.PAGE_HIDE = 0] = "PAGE_HIDE";
        a[a.BEFORE_UNLOAD = 1] = "BEFORE_UNLOAD"
    })(Tm || (Tm = {}));
    var Ij = 0;
    setInterval(function() {
        0 < Ij && Ij--
    }, 3E4);
    var oi;
    (function(a) {
        a.DATE = "spD";
        a.DOUBLE =
            "spDb";
        a.LONG = "spL";
        a.SHORT_STRING = "spSS"
    })(oi || (oi = {}));
    var Hm = ["javaLong", "date", "shortString", "javaDouble"],
        Gi = function() {
            function a(b) {
                this.D = b;
                this.nf = [];
                this.he = []
            }
            a.prototype.mf = function(b, f, k) {
                pi(b, f, k, this.D);
                this.nf.push({
                    key: f,
                    value: k
                })
            };
            a.prototype.je = function(b, f, k) {
                b = Ah(b, k);
                this.he.push({
                    key: f,
                    reason: b
                });
                a.Gb++
            };
            a.prototype.te = function() {
                return this.nf
            };
            a.prototype.Nc = function() {
                return this.he
            };
            a.prototype.xg = function() {
                return Lj(this, a.Gb)
            };
            a.Gb = 0;
            return a
        }(),
        sg = {},
        Ik = function() {
            function a() {
                this.Kc = [];
                this.pf = [];
                this.Ee = new Map;
                this.Yd = new Map;
                this.kf = new Map;
                this.De = new Map;
                this.Kd = 0
            }
            a.prototype.mf = function(b, f, k) {
                switch (b) {
                    case "_uapl_":
                        this.Ee.set(f, k);
                        break;
                    case "_uapdbl_":
                        this.De.set(f, k);
                        break;
                    case "_uaps_":
                        this.kf.set(f, k);
                        break;
                    case "_uapdt_":
                        this.Yd.set(f, k);
                        break;
                    default:
                        return
                }
                this.Kd++;
                this.pf.push({
                    key: f,
                    value: k
                })
            };
            a.prototype.je = function(b, f, k) {
                b = Ah(b, k);
                this.Kc.push({
                    key: f,
                    reason: b
                });
                a.Gb++
            };
            a.prototype.Hg = function() {
                return 0 < this.Kd
            };
            a.prototype.te = function() {
                return this.pf
            };
            a.prototype.Nc = function() {
                return this.Kc
            };
            a.prototype.Dg = function() {
                for (var b = [], f = 0, k = this.Kc; f < k.length; f++) b.push(k[f].key);
                return b
            };
            a.prototype.Nd = function(b, f) {
                Fi(this, f.javaLong, f.date, f.shortString, f.javaDouble);
                this.Ee.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spL) && void 0 !== x ? x : b.spL = new Map;
                    b.spL.set(p, k + "")
                });
                this.Yd.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spD) && void 0 !== x ? x : b.spD = new Map;
                    b.spD.set(p, k + "")
                });
                this.kf.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spSS) && void 0 !== x ? x : b.spSS = new Map;
                    b.spSS.set(p, ha(k + ""))
                });
                this.De.forEach(function(k, p) {
                    var x;
                    null !== (x = b.spDb) && void 0 !== x ? x : b.spDb = new Map;
                    b.spDb.set(p, k + "")
                })
            };
            a.Gb = 0;
            return a
        }(),
        bi, gj = [],
        Jk, Um;
    (function(a) {
        a[a.BEGIN = 11359836E5] = "BEGIN";
        a[a.END = 41338908E5] = "END"
    })(Um || (Um = {}));
    var zm;
    (function(a) {
        a.METHOD = "method";
        a.PARAMETER = "parameter"
    })(zm || (zm = {}));
    var Am = [0, 1, 2, 3],
        Ql = function() {
            function a() {}
            a.prototype.setAutomaticActionDetection = function(b) {
                Xb(b, "boolean") ? (1 < arguments.length && yc(), Dc("saad"), n(b)) : bc()
            };
            a.prototype.setLoadEndManually =
                function() {
                    0 < arguments.length && yc();
                    Dc("slem");
                    zh = !0
                };
            a.prototype.signalLoadEnd = function() {
                0 < arguments.length && yc();
                Dc("sle");
                Af()
            };
            a.prototype.markAsErrorPage = function(b, f) {
                if (!Xb(b, "number") || !Xb(f, "string")) return bc(), !1;
                2 < arguments.length && yc();
                Dc("maep");
                return il(b, f)
            };
            a.prototype.markXHRFailed = function(b, f, k) {
                if (!Xb(b, "number") || !Xb(f, "string") || !bd(k, "number")) return bc(), !1;
                3 < arguments.length && yc();
                Dc("mxf");
                return He(b, f, +k || -1)
            };
            a.prototype.sendSignal = function() {
                Tc("method", "sendSignal",
                    'This method is deprecated and has no functionality. Use "sendBeacon" instead.')
            };
            a.prototype.sendBeacon = function(b, f, k) {
                Xb(b, "boolean") && Xb(f, "boolean") && Xb(k, "boolean") ? ("undefined" !== typeof b && Tc("parameter", "forceSync", "This parameter has been deprecated and has no effect anymore. Beacons are always sent asynchronously."), 3 < arguments.length && yc(), Dc("ss"), Oc(f, k)) : bc()
            };
            a.prototype.enterAction = function(b, f, k, p) {
                if (!Xb(b, "string") || !bd(p, "string")) return bc(), 0;
                f && Tc("parameter", "actionType", "This parameter is deprecated and has no effect anymore.");
                5 < arguments.length && yc();
                Dc("ea");
                var x = k;
                if (x) {
                    if (!+x) return bc(), 0;
                    x = Sb(x)
                }
                return zg(b, "", +x, !1, void 0, void 0, !0, p)
            };
            a.prototype.addEnterActionListener = function(b) {
                wb(b) ? (1 < arguments.length && yc(), Dc("aeal"), yf(b)) : bc()
            };
            a.prototype.removeEnterActionListener = function(b) {
                if (wb(b)) {
                    1 < arguments.length && yc();
                    Dc("real");
                    var f = b.dtWF;
                    f && K("ACTION_ENTERED", f)
                } else bc()
            };
            a.prototype.leaveAction = function(b, f, k) {
                if (Xb(b, "number") && bd(f, "number") && bd(k, "number")) {
                    3 < arguments.length && yc();
                    Dc("la");
                    var p = Hc(b);
                    if (p)
                        if (p.isCustomAction) {
                            (p = k) && (p = Sb(p));
                            var x = f;
                            x && (x = Sb(x));
                            Ye(b, x, p)
                        } else De('"dtrum.leaveAction" can only be called for actions created by dtrum, and action with id of "'.concat(b, '" is not a custom action!'));
                    else ci()
                } else bc()
            };
            a.prototype.addLeaveActionListener = function(b) {
                wb(b) ? (1 < arguments.length && yc(), Dc("alal"), Le(b)) : bc()
            };
            a.prototype.removeLeaveActionListener = function(b) {
                if (wb(b)) {
                    1 < arguments.length && yc();
                    Dc("rlal");
                    var f = b.dtWF;
                    f && K("ACTION_LEFT", f)
                } else bc()
            };
            a.prototype.addActionProperties =
                function(b, f, k, p, x) {
                    if (Xb(b, "number") && bd(f, "object") && bd(k, "object") && bd(p, "object") && bd(x, "object")) {
                        5 < arguments.length && yc();
                        if (Hc(b)) return Dc("aap"), Cc(b, f, k, p, x);
                        ci()
                    } else bc()
                };
            a.prototype.reportError = function(b, f) {
                ("object" !== typeof b && "string" !== typeof b || null === b ? 0 : "object" === typeof b && "message" in b || "string" === typeof b) && bd(f, "number") ? (2 < arguments.length && yc(), Dc("re"), Zh(b, f, !1, "0")) : bc()
            };
            a.prototype.identifyUser = function(b) {
                Xb(b, "string") ? (1 < arguments.length && yc(), Dc("iu"), Ob() ? De("navigator.doNotTrack is enabled on the browser") :
                    (Kj("rx_visittag", b, -1), Eb.dynatrace && "identifyUser" in Eb.dynatrace && wb(Eb.dynatrace.identifyUser) && Eb.dynatrace.identifyUser(b))) : bc()
            };
            a.prototype.startThirdParty = function() {
                Tc("method", "startThirdParty", "This method is deprecated and has no functionality.")
            };
            a.prototype.stopThirdParty = function() {
                Tc("method", "stopThirdParty", "This method is deprecated and has no functionality.")
            };
            a.prototype.addPageLeavingListener = function(b) {
                wb(b) ? (1 < arguments.length && yc(), Dc("apll"), B("PAGE_LEAVING", function(f) {
                        b(f.detail)
                    })) :
                    bc()
            };
            a.prototype.beginUserInput = function(b, f, k, p) {
                if (!ia(b) && !Xb(b, "string") || !Xb(f, "string") || !bd(k, "string") || !bd(p, "number")) return bc(), {};
                4 < arguments.length && yc();
                Dc("bui");
                return Dd(b, f, k, p)
            };
            a.prototype.endUserInput = function(b) {
                ("object" !== typeof b || null === b ? 0 : "object" === typeof b && "name" in b && "info" in b && "title" in b) ? (1 < arguments.length && yc(), Dc("eui"), Jd(b)) : bc()
            };
            a.prototype.enterXhrAction = function(b, f, k) {
                var p;
                if (!(p = !Xb(b, "string"))) {
                    a: {
                        for (var x in Am)
                            if (Am[x] === f) {
                                p = !0;
                                break a
                            }
                        p = !1
                    }
                    p = !p && !bd(k, "string")
                }
                if (p) return bc(), -1;
                p = f;
                2 === f && (Tc("parameter", "xmode 2", "xmode 2 is deprecated and will fallback to value of 1."), p = 1);
                3 < arguments.length && yc();
                k || De("No XHR URL was provided, which will result in the request being marked as `/undefined` in the waterfall! In the future, this argument will be required!");
                Dc("exa");
                return gf(b, p, k + "", !0)
            };
            a.prototype.leaveXhrAction = function(b, f) {
                if (Xb(b, "number") && bd(f, "number")) {
                    2 < arguments.length && yc();
                    Dc("lxa");
                    var k = Ic(b);
                    k ? k.isCustomAction ?
                        ((k = f) && (k = Sb(f)), kf(b, k)) : De('"dtrum.leaveXhrAction" can only be called for actions created by dtrum, and action with id of "'.concat(b, '" is not a custom action!')) : ci()
                } else bc()
            };
            a.prototype.enterXhrCallback = function(b) {
                Xb(b, "number") ? (1 < arguments.length && yc(), Ic(b) ? (Dc("exc"), Ag(b)) : ci()) : bc()
            };
            a.prototype.leaveXhrCallback = function(b) {
                Xb(b, "number") ? (1 < arguments.length && yc(), Ic(b) ? (Dc("lxc"), re(b)) : ci()) : bc()
            };
            a.prototype.signalOnLoadStart = function() {
                0 < arguments.length && yc();
                Dc("sols");
                Bf()
            };
            a.prototype.incrementOnLoadEndMarkers = function() {
                0 < arguments.length && yc();
                Dc("iolem");
                le()
            };
            a.prototype.signalOnLoadEnd = function() {
                0 < arguments.length && yc();
                Dc("sole");
                Sf()
            };
            a.prototype.actionName = function(b, f) {
                if (!Xb(b, "string")) return bc(), 2;
                if (!bd(f, "number")) return bc(), 3;
                2 < arguments.length && yc();
                Dc("an");
                return ge("an", vc(b), +f) ? 0 : 1
            };
            a.prototype.endSession = function() {
                0 < arguments.length && yc();
                Dc("es");
                Ek()
            };
            a.prototype.now = function() {
                0 < arguments.length && yc();
                Dc("n");
                return oc()
            };
            a.prototype.enable =
                function() {
                    var b;
                    0 < arguments.length && yc();
                    Dc("e");
                    sj() ? H((b = {}, b.kind = "OPT_IN_STATE_CHANGED", b.detail = !0, b)) : De("Call to dtrum.enable() had no effect since RUM JavaScript agent was already enabled or opt-in mode was not active!")
                };
            a.prototype.disable = function() {
                var b;
                0 < arguments.length && yc();
                Dc("d");
                gk() ? H((b = {}, b.kind = "OPT_IN_STATE_CHANGED", b.detail = !1, b)) : De("Call to dtrum.disable() had no effect since RUM JavaScript agent was already disabled or opt-in mode was not active!")
            };
            a.prototype.addVisitTimeoutListener =
                function(b) {
                    wb(b) ? (1 < arguments.length && yc(), Dc("avtl"), Sh(b)) : bc()
                };
            a.prototype.enableSessionReplay = function(b) {
                if (Xb(b, "boolean")) {
                    1 < arguments.length && yc();
                    Dc("esr");
                    var f = Eb.dT_;
                    f && f.srel && f.srel(b)
                } else bc()
            };
            a.prototype.disableSessionReplay = function() {
                0 < arguments.length && yc();
                Dc("dsr");
                var b = Eb.dT_;
                b && b.srel && b.srdl()
            };
            a.prototype.getAndEvaluateMetaData = function() {
                0 < arguments.length && yc();
                Dc("gaemd");
                var b = Eb.dT_;
                return b && b.gEMD && b.iRHCA ? b.gEMD() : []
            };
            a.prototype.enablePersistentValues = function() {
                0 <
                    arguments.length && yc();
                Dc("epv");
                Gh()
            };
            a.prototype.disablePersistentValues = function(b) {
                Xb(b, "boolean") ? (1 < arguments.length && yc(), Dc("dpv"), Si(b)) : bc()
            };
            a.prototype.registerPreDiffMethod = function(b) {
                if (wb(b)) {
                    1 < arguments.length && yc();
                    Dc("rpdm");
                    var f = Eb.dT_;
                    f && f.srel && Array.isArray(f.srpdm) && f.srpdm.push(b)
                } else bc()
            };
            a.prototype.sendSessionProperties = function(b, f, k, p) {
                if (bd(b, "object") && bd(f, "object") && bd(k, "object") && bd(p, "object")) return 4 < arguments.length && yc(), Dc("ssp"), pl(b, f, k, p);
                bc()
            };
            a.prototype.reportCustomError =
                function(b, f, k, p) {
                    if (Xb(b, "string") && Xb(f, "string") && bd(k, "string") && (bd(p, "number") || bd(p, "boolean")))
                        if (4 < arguments.length && yc(), Dc("rce"), b && f) {
                            var x = [
                                ["type", b],
                                ["name", f]
                            ];
                            k && x.push(["hint", k + ""]);
                            pd("_customerror_", x, p)
                        } else De("Key or value is missing but mandatory for 'reportCustomError' method!");
                    else bc()
                };
            a.prototype.enableManualPageDetection = function() {
                0 < arguments.length && yc();
                Dc("emvd");
                Pc(3)
            };
            a.prototype.setPage = function(b) {
                if (!("object" === typeof b && null !== b && "group" in b && "name" in b &&
                        Xb(b.name, "string")) || b.group && !Xb(b.group, "string")) return bc(), -1;
                1 < arguments.length && yc();
                Dc("sp");
                return We(b, 3)
            };
            return a
        }(),
        Kk = [],
        Lk, hj, tg = !1,
        Pj = !!Eb.MutationObserver,
        di = Eb.MutationObserver ? Eb.MutationObserver : void 0,
        ug = {},
        Hi = {},
        ei = {},
        ij = [],
        jj = {},
        Rj, Nk = {},
        cl;
    (function(a) {
        a.CONFIG = "config";
        a.GLOBAL_PROPERTIES = "globalProperties";
        a.ROUTER = "$router"
    })(cl || (cl = {}));
    var Ki = "".concat(1).concat(","),
        Fl = [],
        Uj = [],
        Og = {},
        sf, nj, hi, ve = {},
        Xj = null,
        Li = [],
        wg, qk;
    (function(a) {
        a[a.BEFORE_LOAD_ACTION_CLOSED = 0] = "BEFORE_LOAD_ACTION_CLOSED";
        a[a.BEFORE_LOAD_ACTION_SENT = 1] = "BEFORE_LOAD_ACTION_SENT";
        a[a.AFTER_LOAD_ACTION_SENT = 2] = "AFTER_LOAD_ACTION_SENT"
    })(qk || (qk = {}));
    var Dh = 0,
        Ch = 0,
        Ni, Mi, Yj = [],
        ak, Rk, Zj, bk, Im, Eh = [],
        Oi = 0,
        lm = ["click", "mousedown", "keydown", "touchstart"],
        c = 0,
        d = 0,
        l = void 0;
    (function() {
        var a, b;
        if ("documentMode" in document && !isNaN(document.documentMode)) null === (a = window.console) || void 0 === a ? void 0 : a.log("Internet Explorer detected, agent will not initialize.");
        else if (a = !(null === (b = navigator.userAgent) || void 0 === b ? 0 : b.includes("RuxitSynthetic")), !Eb.dT_ || !Eb.dT_.ica) Eb.console.log("No initCode available, turning off asyncCore."), Eb.dT_ && (Eb.dT_.di = 2);
        else if ("initialized" in Eb.dT_ && Eb.dT_.initialized) Eb.dT_.gCP || Eb.console.log("Duplicate agent injection detected, turning off redundant asyncCore."), Eb.dT_.di = 1;
        else if (a) {
            if (a = (b = Eb.dT_) && b.gCP) b = b.gCP(), a = +(Cb.dT_.ncv("buildNumber") || S().version), a = !(b && !isNaN(a) && +Pa() === a);
            a || Yf() || (delete Eb.dT_, Eb.console.log("JsAgent asyncCore initialization failed!"))
        }
    })()
})();
(function() {
    function Ka() {
        return bb(this, void 0, void 0, function() {
            return kb(this, function() {
                return [2]
            })
        })
    }

    function bb(pa, oa, Q, ba) {
        function E(P) {
            return P instanceof Q ? P : new Q(function(aa) {
                aa(P)
            })
        }
        return new(Q || (Q = Ha))(function(P, aa) {
            function la(wa) {
                try {
                    W(ba.next(wa))
                } catch (Ra) {
                    aa(Ra)
                }
            }

            function ha(wa) {
                try {
                    W(ba["throw"](wa))
                } catch (Ra) {
                    aa(Ra)
                }
            }

            function W(wa) {
                wa.done ? P(wa.value) : E(wa.value).then(la, ha)
            }
            W((ba = ba.apply(pa, oa || [])).next())
        })
    }

    function kb(pa, oa) {
        function Q(W) {
            return function(wa) {
                return ba([W,
                    wa
                ])
            }
        }

        function ba(W) {
            if (P) throw new TypeError("Generator is already executing.");
            for (; ha && (ha = 0, W[0] && (E = 0)), E;) try {
                if (P = 1, aa && (la = W[0] & 2 ? aa["return"] : W[0] ? aa["throw"] || ((la = aa["return"]) && la.call(aa), 0) : aa.next) && !(la = la.call(aa, W[1])).done) return la;
                if (aa = 0, la) W = [W[0] & 2, la.value];
                switch (W[0]) {
                    case 0:
                    case 1:
                        la = W;
                        break;
                    case 4:
                        return E.label++, {
                            value: W[1],
                            done: !1
                        };
                    case 5:
                        E.label++;
                        aa = W[1];
                        W = [0];
                        continue;
                    case 7:
                        W = E.ia.pop();
                        E.H.pop();
                        continue;
                    default:
                        if (!(la = E.H, la = 0 < la.length && la[la.length - 1]) && (6 ===
                                W[0] || 2 === W[0])) {
                            E = 0;
                            continue
                        }
                        if (3 === W[0] && (!la || W[1] > la[0] && W[1] < la[3])) E.label = W[1];
                        else if (6 === W[0] && E.label < la[1]) E.label = la[1], la = W;
                        else if (la && E.label < la[2]) E.label = la[2], E.ia.push(W);
                        else {
                            la[2] && E.ia.pop();
                            E.H.pop();
                            continue
                        }
                }
                W = oa.call(pa, E)
            } catch (wa) {
                W = [6, wa], aa = 0
            } finally {
                P = la = 0
            }
            if (W[0] & 5) throw W[1];
            return {
                value: W[0] ? W[1] : void 0,
                done: !0
            }
        }
        var E = {
                label: 0,
                B: function() {
                    if (la[0] & 1) throw la[1];
                    return la[1]
                },
                H: [],
                ia: []
            },
            P, aa, la, ha;
        return ha = {
                next: Q(0),
                "throw": Q(1),
                "return": Q(2)
            }, "function" === typeof Symbol &&
            (ha[Symbol.iterator] = function() {
                return this
            }), ha
    }

    function eb(pa, oa) {
        void 0 === oa && (oa = []);
        var Q = Ea.dT_;
        Q = (null === Q || void 0 === Q ? 0 : Q.iIO) ? Q.iIO : null;
        return !(null === Q || void 0 === Q || !Q(pa, oa))
    }

    function cb() {}

    function Ta(pa, oa, Q) {
        var ba = {
            D: pa,
            Sf: oa,
            Vg: function(E) {
                return "fetch" === E.initiatorType && Da.dT_.gto() + Math.round(E.startTime) >= oa && E.name === Da.dT_.tau(Q)
            },
            Ke: []
        };
        sa.set(pa, ba);
        return ba
    }

    function Sa(pa) {
        var oa = pa.D,
            Q = pa.Sf,
            ba = pa.jh,
            E = pa.Ke,
            P = pa.bestMatchingResource,
            aa = pa.hg;
        Q && ba && E.length && (P && E.push(P),
            Q = Da.dT_.cbf(E, Q, ba) || P, E.length = 0, Q && (pa.bestMatchingResource = Q, Da.dT_.uabmr(oa, Q), null === aa || void 0 === aa ? void 0 : aa()))
    }

    function Xa(pa) {
        sa.forEach(function(oa) {
            var Q = oa.Ke,
                ba = Da.dT_.aFr(pa, oa.Vg);
            Q.push.apply(Q, ba);
            Sa(oa)
        })
    }

    function Ua(pa) {
        return bb(this, void 0, void 0, function() {
            var oa;
            return kb(this, function(Q) {
                switch (Q.label) {
                    case 0:
                        Da.dT_.nw(), Q.label = 1;
                    case 1:
                        return Q.H.push([1, 3, , 4]), oa = new Ha(function(ba, E) {
                            var P = Da.dT_.st(E, 1E3);
                            pa.hg = function() {
                                Da.dT_.ct(P);
                                ba();
                                sa.delete(pa.D)
                            };
                            Sa(pa)
                        }), [4, oa];
                    case 2:
                        return Q.B(), [3, 4];
                    case 3:
                        return Q.B(), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function Pa(pa, oa, Q) {
        if (!S) return Ka;
        var ba = Ta(pa, oa, Q);
        return function(E) {
            ba.jh = E;
            return Ua(ba)
        }
    }

    function Za() {
        (S = !!Ea.PerformanceObserver) && (new PerformanceObserver(function(pa) {
            Xa(pa.getEntries())
        })).observe({
            entryTypes: ["resource"]
        })
    }

    function rb(pa) {
        var oa = {};
        pa.forEach(function(Q, ba) {
            oa[ba] = Q
        });
        return oa
    }

    function qa(pa, oa) {
        function Q(ha) {
            var W = ha.then;
            ha.then = function(wa, Ra) {
                var gb = [];
                "function" === typeof wa && (gb[0] =
                    function(pb) {
                        Da.dT_.ec(oa.D);
                        var Vb = pb,
                            na, Db;
                        if (Da.dT_.iIO(Vb, 18)) {
                            var zc = oa.D;
                            oa.status = Vb.status;
                            oa.statusText = Vb.statusText;
                            "headers" in Vb && ea.gEMD && ea.iRHCA && ea.iRHCA() && Da.dT_.disE((na = {}, na.kind = "HTTP_RESPONSE", na.detail = (Db = {}, Db.a = zc, Db.h = rb(Vb.headers), Db), na));
                            Da.dT_.mx() && !Vb.ok && (oa.ga = !0, oa.da = "abort", -1 === Vb.status ? Da.dT_.mxc(zc) : Da.dT_.mxf(Vb.status, Vb.statusText, zc))
                        }
                        try {
                            var Ec = Na.onFulfilled(wa, this, arguments)
                        } finally {
                            Da.dT_.lc(oa.D), ba()
                        }
                        return Ec
                    });
                "function" === typeof Ra && (gb[1] =
                    function(pb) {
                        Da.dT_.ec(oa.D);
                        var Vb = pb;
                        Da.dT_.mx() && Da.dT_.iIO(Vb, 7) && (oa.ga = !0, Da.dT_.mxg(Vb.message, oa.D));
                        try {
                            var na = Na.onRejected(Ra, this, arguments)
                        } finally {
                            Da.dT_.lc(oa.D), ba()
                        }
                        return na
                    });
                gb = Na.then(W, this, gb);
                Q(gb);
                return gb
            }
        }

        function ba() {
            aa = Da.dT_.nw();
            if (!P) {
                P = !0;
                var ha = Da.dT_.nw();
                la(ha).then(E).catch(E)
            }
        }

        function E() {
            var ha, W = Da.dT_.gAA(oa.D);
            W = null !== (ha = null === W || void 0 === W ? void 0 : W.bestMatchingResource) && void 0 !== ha ? ha : Da.dT_.gRT(oa.url, "fetch", oa.startTime, Da.dT_.nw());
            Da.dT_.dlx(oa.D,
                aa);
            var wa = Da.dT_,
                Ra = wa.disE;
            ha = {
                kind: "REQUEST_COMPLETED"
            };
            var gb = {
                i: "fetch"
            };
            gb.x = oa.url;
            gb.m = oa.Fc.method || "GET";
            gb.c = oa.status;
            gb.s = oa.statusText;
            gb.a = void 0;
            gb.e = void 0;
            var pb = U && eb(W, 13) && "navigation" !== W.entryType || eb(W, ["_dtCl"]);
            Ra.call(wa, (ha.detail = (gb.r = pb ? W : void 0, gb.q = oa.startTime, gb.t = oa.ga, gb.o = oa.da, gb.n = oa.Qa, gb), ha))
        }
        var P = !1,
            aa, la = Pa(oa.D, oa.startTime, oa.url);
        Q(pa)
    }

    function ta() {
        for (var pa = [], oa = 0; oa < arguments.length; oa++) pa[oa] = arguments[oa];
        if (!pa.length) return Na.fetch(Ga, this,
            pa);
        var Q;
        pa = Array.prototype.slice.call(pa);
        var ba, E = "function" === typeof Ea.Request && Da.dT_.iIO(pa[0], 17);
        oa = E ? pa[0].url : pa[0];
        "object" === typeof oa && (oa = oa.toString());
        if (E) E = pa[0];
        else {
            E = pa[1];
            var P = Ea.Headers ? new Ea.Headers : {};
            E ? E.headers || (E.headers = P) : E = {
                headers: P
            };
            pa[1] = E
        }
        P = Da.dT_.nw();
        var aa = Da.dT_.ex("fetch", 3, oa);
        Da.dT_.disE((Q = {}, Q.kind = "REQUEST_STARTED", Q.detail = (ba = {}, ba.i = "fetch", ba.x = oa, ba), Q));
        Q = {
            url: oa,
            Fc: E,
            va: pa,
            D: aa,
            startTime: P,
            status: 0,
            statusText: "",
            da: void 0,
            ga: !1,
            Qa: Da.dT_.gtc()
        };
        Q.Fc.keepalive && Da.dT_.bcv("dKAH") || Da.dT_.sch(Q.Fc, Q.url, Q.D, void 0, Q.Qa);
        ba = Na.fetch(Ga, this, Q.va);
        qa(ba, Q);
        ba.then(cb, cb);
        return ba
    }
    var Ha = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        Da = "undefined" !== typeof window ? window : self,
        Ea = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        U = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        S, sa = new Map,
        ma, ea, Ga, Na = (ma = {}, ma.fetch = function(pa, oa, Q) {
                return ea.aWF(pa, oa, Q)
            }, ma.then =
            function(pa, oa, Q) {
                return ea.aWF(pa, oa, Q)
            }, ma.onFulfilled = function(pa, oa, Q) {
                return ea.aWF(pa, oa, Q)
            }, ma.onRejected = function(pa, oa, Q) {
                return ea.aWF(pa, oa, Q)
            }, ma);
    (function() {
        var pa, oa;
        (ea = Ea.dT_) && (null === (oa = (pa = Da.dT_).smbi) || void 0 === oa ? 0 : oa.call(pa, "7")) && Ea.fetch && (Za(), Ga = Ea.fetch, Ea.fetch = ta)
    })()
})();
(function() {
    function Ka() {
        Ka = Object.assign || function(qa) {
            for (var ta, Ha = 1, Da = arguments.length; Ha < Da; Ha++) {
                ta = arguments[Ha];
                for (var Ea in ta) Object.prototype.hasOwnProperty.call(ta, Ea) && (qa[Ea] = ta[Ea])
            }
            return qa
        };
        return Ka.apply(this, arguments)
    }

    function bb(qa) {
        var ta;
        null === (ta = rb.console) || void 0 === ta ? void 0 : ta.log("".concat("[dynatrace]", " ").concat(qa))
    }

    function kb(qa) {
        return null === qa || "object" !== typeof qa ? !1 : "[object Object]" === Object.prototype.toString.call(qa)
    }

    function eb(qa) {
        var ta = !1,
            Ha;
        for (Ha in qa) Object.prototype.hasOwnProperty.call(qa,
            Ha) && cb(qa[Ha]) && (bb('key "'.concat(Ha, '" contains non-finite numbers: [').concat(qa[Ha], "] which have been changed to null!")), ta = !0);
        return ta
    }

    function cb(qa) {
        if ("function" === typeof qa) qa = !0;
        else if (Array.isArray(qa)) {
            for (var ta = !1, Ha = 0; Ha < qa.length; Ha++) cb(qa[Ha]) && (ta = !0);
            qa = ta
        } else qa = kb(qa) ? eb(qa) : !("number" !== typeof qa || isFinite(qa));
        return qa
    }

    function Ta(qa, ta) {
        var Ha, Da, Ea = {},
            U;
        for (U in ta) Za.dT_.oHOP(ta, U) && ("dt" === U ? bb('"'.concat("dt", '" is a reserved property and will be discarded!')) :
            U.startsWith("dt.") ? bb('"dt.*" is a reserved keyword as a property name. Key "'.concat(U, '" will be discarded!')) : Ea[U] = ta[U]);
        var S;
        ta = (null === (S = rb.performance) || void 0 === S ? 0 : S.now) ? Math.round(1E6 * ((performance.timeOrigin || performance.timing.navigationStart) + rb.performance.now())) : 1E6 * Date.now();
        S = Ka(Ka(Ka((Ha = {}, Ha.timestamp = ta, Ha["event.kind"] = "RUM_EVENT", Ha["event.provider"] = rb.location.hostname, Ha), Ea), qa), (Da = {}, Da["dt.rum.application.id"] = Za.dT_.scv("app"), Da["dt.rum.sid"] = Za.dT_.gVI(), Da["dt.rum.instance.id"] =
            Za.dT_.gVID(), Da["dt.rum.schema_version"] = "1.2", Da));
        eb(S) && (S["dt.rum.has_nfn_values"] = !0);
        return S
    }

    function Sa(qa) {
        var ta, Ha = Za.dT_.cB();
        Za.dT_.gBP().ar(Ha, JSON.stringify(qa));
        Za.dT_.sB(Ha, !1, !1, (ta = {}, ta.contentType = "event", ta.st = Za.dT_.nw(), ta))
    }

    function Xa(qa) {
        return kb(qa) ? !0 : (bb("Provided attributes must be a JSON like object!"), !1)
    }

    function Ua(qa, ta) {
        if (!qa || "string" !== typeof qa) bb("Provided event type must be a non-empty string!");
        else if (Xa(ta)) {
            var Ha = {};
            Ha["event.type"] = qa;
            Ha["event.kind"] =
                "BIZ_EVENT";
            var Da, Ea = JSON.stringify(Ka((Da = {}, Da["event.type"] = qa, Da), ta));
            try {
                var U = (new rb.TextEncoder).encode(Ea).length
            } catch (S) {
                U = Ea.length
            }
            qa = Ta((Ha["dt.rum.custom_attributes_size"] = U, Ha), ta);
            Sa(qa)
        }
    }

    function Pa(qa, ta) {
        var Ha;
        if (!qa || "string" !== typeof qa) bb("Provided event name must be a non-empty string!");
        else if (Xa(ta)) {
            var Da = Ta((Ha = {}, Ha["event.type"] = qa, Ha), ta);
            Sa(Da)
        }
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Za = "undefined" !== typeof window ? window : self,
        rb = "undefined" !== typeof globalThis ? globalThis :
        "undefined" !== typeof window ? window : void 0;
    (function() {
        var qa, ta;
        if (rb.JSON && rb.JSON.stringify && rb.dT_ && (null === (ta = (qa = Za.dT_).smbi) || void 0 === ta ? 0 : ta.call(qa, "N"))) {
            var Ha;
            (null === (Ha = rb.dynatrace) || void 0 === Ha ? 0 : Ha.sendBizEvent) ? Object.assign(rb.dynatrace, {
                sendBizEvent: Ua
            }): rb.dynatrace = {
                sendEvent: Pa,
                sendBizEvent: Ua
            }
        }
    })()
})();
(function() {
    function Ka(e) {
        return new Sb(function(h) {
            return U(this, void 0, void 0, function() {
                return S(this, function(m) {
                    switch (m.label) {
                        case 0:
                            if (!e || document.hasFocus() || "mouseenter" !== e.type) return [3, 2];
                            Ka.pending = {
                                resolve: h
                            };
                            return [4, Ge(100)];
                        case 1:
                            m.B();
                            if (!Ka.pending || Ka.pending.resolve !== h) return h(null), [2];
                            m.label = 2;
                        case 2:
                            if (If) return h(null), [2];
                            If = !0;
                            h(If);
                            return [2]
                    }
                })
            })
        })
    }

    function bb(e) {
        bb.listener = e
    }

    function kb() {
        kb = Object.assign || function(e) {
            for (var h, m = 1, r = arguments.length; m < r; m++) {
                h =
                    arguments[m];
                for (var A in h) Object.prototype.hasOwnProperty.call(h, A) && (e[A] = h[A])
            }
            return e
        };
        return kb.apply(this, arguments)
    }

    function eb(e, h) {
        return Pa(e) && "href" === h ? 1 : qa(e) && "value" === h ? 32 : Xf.Sd.some(function(m) {
            return m.test(h)
        }) ? 16 : Ua(e) && "value" === h ? 2 === cb(e) ? 16 : 1 : 1
    }

    function cb(e) {
        if (Za(e) || Za(e.parentNode)) return 1;
        pj.has(e) && Gf.set(e, Gf.get(e) | 8);
        oj.has(e) && Gf.set(e, Gf.get(e) | 2);
        Qk.has(e) && (Xf.qb ? Hf.set(e, Hf.get(e) | 1) : Hf.set(e, Hf.get(e) | 4));
        rb(e) && e.hasAttribute("data-dtrum-mask") && (Xa(e) ?
            Hf.set(e, Hf.get(e) | 4) : Gf.set(e, Gf.get(e) | 10));
        if (Gf.has(e)) return Gf.get(e);
        if (Hf.has(e)) return Hf.get(e);
        var h = e,
            m = !1;
        h.nodeType === Node.TEXT_NODE && (h = h.parentNode, m = !0);
        var r = Xa(h);
        var A = m;
        void 0 === A && (A = !1);
        A = !r || A || "OPTION" === h.nodeName ? (r ? Hf : Gf).get(A ? h : h.parentNode) : void 0;
        var T = void 0;
        r && Ta(Xf.ub, h) && (T |= 4);
        !r && Ta(Xf.sb, h) && (T |= 2);
        !r && Ta(Xf.yb, h) && (T |= 8);
        if (T || r) a: if (r = void 0 === r ? !1 : r, m = void 0 === m ? !1 : m, !r && T) A = T;
            else {
                if (r) {
                    T = T && !(T & 1) || Xf.qb ? (!T || T & 1) && Xf.qb || T && !(T & 1) && !Xf.qb ? h.parentNode &&
                        Xa(h.parentNode) ? A && !(A & 1) : !0 : !1 : A && !(A & 1);
                    if (m && T) {
                        A = A ? A : 2;
                        break a
                    }
                    if (T) {
                        A = Ta(im, h) || h instanceof HTMLFormElement && "text" === h.type ? 4 : 8;
                        break a
                    }
                }
                A = 1
            }
        else A = A ? A : 1;
        Xa(e) ? Hf.set(e, Hf.get(e) | A) : Gf.set(e, Gf.get(e) | A);
        return A
    }

    function Ta(e, h) {
        for (var m = 0; m < e.length; m++)
            if (Wj.matchesSelector(h, e[m])) return !0;
        return !1
    }

    function Sa(e, h) {
        e.forEach(function(m) {
            [].slice.call(document.querySelectorAll(m)).forEach(function(r) {
                h.has(r) || h.set(r, m)
            })
        })
    }

    function Xa(e) {
        return Ua(e) ? !1 : -1 !== gm.indexOf(e.nodeName)
    }

    function Ua(e) {
        return e &&
            "INPUT" === e.nodeName ? (e = e.getAttribute("type")) ? -1 !== hm.indexOf(e.toLowerCase()) : !1 : !1
    }

    function Pa(e) {
        return rb(e) && "link" === e.nodeName.toLowerCase()
    }

    function Za(e) {
        return rb(e) && "style" === e.nodeName.toLowerCase()
    }

    function rb(e) {
        return e && e.nodeType && 1 === e.nodeType
    }

    function qa(e) {
        return e && "INPUT" === e.nodeName && "password" === e.type.toLowerCase()
    }

    function ta() {
        ta = Object.assign || function(e) {
            for (var h, m = 1, r = arguments.length; m < r; m++) {
                h = arguments[m];
                for (var A in h) Object.prototype.hasOwnProperty.call(h,
                    A) && (e[A] = h[A])
            }
            return e
        };
        return ta.apply(this, arguments)
    }

    function Ha(e, h) {
        Ha = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(m, r) {
            m.__proto__ = r
        } || function(m, r) {
            for (var A in r) Object.prototype.hasOwnProperty.call(r, A) && (m[A] = r[A])
        };
        return Ha(e, h)
    }

    function Da(e, h) {
        function m() {
            this.constructor = e
        }
        if ("function" !== typeof h && null !== h) throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
        Ha(e, h);
        e.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype,
            new m)
    }

    function Ea(e, h) {
        var m = {},
            r;
        for (r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > h.indexOf(r) && (m[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var A = 0;
            for (r = Object.getOwnPropertySymbols(e); A < r.length; A++) 0 > h.indexOf(r[A]) && Object.prototype.propertyIsEnumerable.call(e, r[A]) && (m[r[A]] = e[r[A]])
        }
        return m
    }

    function U(e, h, m, r) {
        function A(T) {
            return T instanceof m ? T : new m(function(za) {
                za(T)
            })
        }
        return new(m || (m = Sb))(function(T, za) {
            function X(Gb) {
                try {
                    ab(r.next(Gb))
                } catch (Yc) {
                    za(Yc)
                }
            }

            function $a(Gb) {
                try {
                    ab(r["throw"](Gb))
                } catch (Yc) {
                    za(Yc)
                }
            }

            function ab(Gb) {
                Gb.done ? T(Gb.value) : A(Gb.value).then(X, $a)
            }
            ab((r = r.apply(e, h || [])).next())
        })
    }

    function S(e, h) {
        function m(ab) {
            return function(Gb) {
                return r([ab, Gb])
            }
        }

        function r(ab) {
            if (T) throw new TypeError("Generator is already executing.");
            for (; $a && ($a = 0, ab[0] && (A = 0)), A;) try {
                if (T = 1, za && (X = ab[0] & 2 ? za["return"] : ab[0] ? za["throw"] || ((X = za["return"]) && X.call(za), 0) : za.next) && !(X = X.call(za, ab[1])).done) return X;
                if (za = 0, X) ab = [ab[0] & 2, X.value];
                switch (ab[0]) {
                    case 0:
                    case 1:
                        X =
                            ab;
                        break;
                    case 4:
                        return A.label++, {
                            value: ab[1],
                            done: !1
                        };
                    case 5:
                        A.label++;
                        za = ab[1];
                        ab = [0];
                        continue;
                    case 7:
                        ab = A.ia.pop();
                        A.H.pop();
                        continue;
                    default:
                        if (!(X = A.H, X = 0 < X.length && X[X.length - 1]) && (6 === ab[0] || 2 === ab[0])) {
                            A = 0;
                            continue
                        }
                        if (3 === ab[0] && (!X || ab[1] > X[0] && ab[1] < X[3])) A.label = ab[1];
                        else if (6 === ab[0] && A.label < X[1]) A.label = X[1], X = ab;
                        else if (X && A.label < X[2]) A.label = X[2], A.ia.push(ab);
                        else {
                            X[2] && A.ia.pop();
                            A.H.pop();
                            continue
                        }
                }
                ab = h.call(e, A)
            } catch (Gb) {
                ab = [6, Gb], za = 0
            } finally {
                T = X = 0
            }
            if (ab[0] & 5) throw ab[1];
            return {
                value: ab[0] ?
                    ab[1] : void 0,
                done: !0
            }
        }
        var A = {
                label: 0,
                B: function() {
                    if (X[0] & 1) throw X[1];
                    return X[1]
                },
                H: [],
                ia: []
            },
            T, za, X, $a;
        return $a = {
            next: m(0),
            "throw": m(1),
            "return": m(2)
        }, "function" === typeof Symbol && ($a[Symbol.iterator] = function() {
            return this
        }), $a
    }

    function sa(e, h, m) {
        if (m || 2 === arguments.length)
            for (var r = 0, A = h.length, T; r < A; r++) !T && r in h || (T || (T = Array.prototype.slice.call(h, 0, r)), T[r] = h[r]);
        return e.concat(T || Array.prototype.slice.call(h))
    }

    function ma(e) {
        return (new TextEncoder).encode(e)
    }

    function ea(e) {
        e = "string" ===
            typeof e ? ma(e) : e;
        for (var h = -1, m = 0; m < e.length;) h = h >>> 8 ^ ql[(h ^ e[m++]) & 255];
        return (h ^ -1) >>> 0
    }

    function Ga(e, h) {
        void 0 === h && (h = []);
        var m = Xb.dT_;
        m = (null === m || void 0 === m ? 0 : m.iIO) ? m.iIO : null;
        return !(null === m || void 0 === m || !m(e, h))
    }

    function Na() {}

    function pa(e) {
        return e && "nodeType" in e
    }

    function oa(e) {
        return e && "IMG" === e.nodeName
    }

    function Q(e) {
        return e && "LINK" === e.nodeName
    }

    function ba(e) {
        return e && e.nodeType && 1 === e.nodeType
    }

    function E(e) {
        return e && "SELECT" === e.nodeName
    }

    function P(e) {
        return e && "INPUT" === e.nodeName
    }

    function aa(e) {
        return e && "STYLE" === e.nodeName
    }

    function la(e) {
        return e.type === CSSRule.IMPORT_RULE
    }

    function ha(e) {
        Oj = e
    }

    function W() {
        return "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
    }

    function wa() {
        var e, h = Xb.dT_;
        return e = {
            version: "10303241106123517"
        }, e.ac = h.bcv("ac"), e.app = h.scv("app"), e.postfix = h.scv("postfix"), e
    }

    function Ra(e, h, m) {
        void 0 === m && (m = 1);
        return U(this, void 0, void 0, function() {
            var r;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return A.H.push([0, 2, , 3]), [4,
                            Sb.race([e(), new Sb(function(T, za) {
                                setTimeout(za, h)
                            })])
                        ];
                    case 1:
                        return [2, A.B()];
                    case 2:
                        r = A.B();
                        if (0 < m) return [2, Ra(e, h, m - 1)];
                        throw r;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function gb() {
        return U(this, void 0, void 0, function() {
            var e, h, m, r, A, T;
            return S(this, function(za) {
                switch (za.label) {
                    case 0:
                        e = Xb.dT_;
                        if (!e || W() || Xb.parent === Xb) return Ii = !1, [2];
                        if (m = (h = e.tdto()) && e !== h) return Ii = !0, [2];
                        za.label = 1;
                    case 1:
                        return za.H.push([1, 3, , 4]), r = wa(), A = function() {
                            return fa("detectSubframe", r)
                        }, [4, Ra(A, 1E3)];
                    case 2:
                        return T = za.B(),
                            Ii = !0 === T, [2];
                    case 3:
                        return za.B(), [3, 4];
                    case 4:
                        return Ii = !1, [2]
                }
            })
        })
    }

    function pb() {
        if (void 0 === Ii) throw Error("Sub-frame environment detection not yet performed");
        return Ii
    }

    function Vb(e) {
        var h = Cl;
        Qj.set(h, e);
        setTimeout(function() {
            Qj.delete(h)
        }, 1E3);
        Cl++;
        return new vg({
            I: "pair",
            query: "pair-id",
            result: h
        })
    }

    function na(e) {
        Sj && (Ff.Hd(self, Sj), Sj = null);
        return new Sb(function(h) {
            Sj = Ff.Gd(self, function(m, r, A) {
                "pair" === m.I && "pair-id" === m.query && (e.send(new vg({
                        I: "pair",
                        query: "pair-ack",
                        result: m.result
                    })),
                    A(), h())
            });
            e.send(new vg({
                I: "pair",
                query: "pair-req"
            }))
        })
    }

    function Db(e) {
        return new Sb(function(h) {
            e.Jb(function(m) {
                if ("pair" === m.I && ["pair-req", "pair-ack"].includes(m.query))
                    if ("pair-ack" === m.query && "number" === typeof m.result)(m = Qj.get(m.result)) && h(m);
                    else
                        for (Ff.hc(self, Vb(self)), m = 0; m < Xb.frames.length; m++) Ff.hc(Xb.frames[m], Vb(Xb.frames[m]))
            })
        })
    }

    function zc(e) {
        return new Sb(function(h) {
            e.Jb(function(m) {
                "handshake" === m.I && ["connect-ack", "connect-pair"].includes(m.query) && h({
                    Wg: "connect-pair" ===
                        m.query
                })
            })
        })
    }

    function Ec(e) {
        return new Sb(function(h, m) {
            setTimeout(m, e)
        })
    }

    function hb(e) {
        return U(this, void 0, void 0, function() {
            var h, m, r;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        h = new vg({
                            I: "handshake",
                            query: "connect-req"
                        }), m = new Ff, Ff.hc(e, h, {
                            transfer: [m.fh]
                        }), A.label = 1;
                    case 1:
                        return A.H.push([1, 5, , 6]), [4, Sb.race([zc(m), Ec(1E3)])];
                    case 2:
                        return (r = A.B()) && r.Wg ? [4, Sb.race([na(m), Ec(1E3)])] : [3, 4];
                    case 3:
                        A.B(), A.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        throw A.B(), m.port.close(), Error("timeout");
                    case 6:
                        return [2, m]
                }
            })
        })
    }

    function Qb(e, h) {
        void 0 === h && (h = 15);
        return U(this, void 0, void 0, function() {
            var m;
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        m = 0, r.label = 1;
                    case 1:
                        if (!(m < h)) return [3, 6];
                        r.label = 2;
                    case 2:
                        return r.H.push([2, 4, , 5]), [4, hb(e)];
                    case 3:
                        return [2, r.B()];
                    case 4:
                        return r.B(), m++, [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        throw Error("connect handshake failed");
                }
            })
        })
    }

    function qc(e, h) {
        Ff.Gd(e, function(m, r) {
            return U(this, void 0, void 0, function() {
                var A, T, za, X;
                return S(this, function($a) {
                    switch ($a.label) {
                        case 0:
                            if ("handshake" !==
                                m.I || "connect-req" !== m.query) return [2];
                            A = -1 < Object.prototype.toString.call(e).indexOf("Worker") ? e : r.source;
                            T = "undefined" === typeof A;
                            za = r.ports[0];
                            X = new Ff(za);
                            X.send(new vg({
                                I: "handshake",
                                query: T ? "connect-pair" : "connect-ack"
                            }));
                            if (!T) return [3, 4];
                            $a.label = 1;
                        case 1:
                            return $a.H.push([1, 3, , 4]), [4, Db(X)];
                        case 2:
                            return A = $a.B(), [3, 4];
                        case 3:
                            return $a.B(), [3, 4];
                        case 4:
                            return A && h(A, X), [2]
                    }
                })
            })
        })
    }

    function Hb(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        try {
            JSON.stringify(h)
        } catch (r) {}
    }

    function vc(e,
        h, m) {
        return U(this, void 0, void 0, function() {
            var r, A, T, za, X, $a, ab;
            return S(this, function(Gb) {
                switch (Gb.label) {
                    case 0:
                        if ("undefined" === typeof m.result) return [3, 1];
                        r = (kj.get(m.id) || {}).resolve;
                        kj.delete(m.id);
                        if (!r) return Hb("Resolver not found for message", m), [2];
                        r(m.result);
                        return [3, 5];
                    case 1:
                        if (!lj.has(m.I)) return [3, 4];
                        A = lj.get(m.I);
                        if (!A) return [3, 3];
                        T = Dl.includes(A);
                        return [4, A.apply(h, sa([e], m.query, !0))];
                    case 2:
                        za = Gb.B(), X = T ? za : [za, []], $a = X[0], ab = X[1], m.sh($a), h.send(m, ab), Gb.label = 3;
                    case 3:
                        return [3,
                            5
                        ];
                    case 4:
                        Hb("Invalid Protocol Message", m), Gb.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }

    function ec() {
        Wf = new WeakMap;
        Tj = new WeakMap;
        kj = new Map;
        lj = new Map;
        Qj = new Map
    }

    function cc() {
        Wf && kj && lj || ec()
    }

    function Pb(e) {
        void 0 === e && (e = !1);
        return U(this, void 0, void 0, function() {
            var h, m, r, A, T;
            return S(this, function(za) {
                switch (za.label) {
                    case 0:
                        Mk = self;
                        ec();
                        if (!W() && !e) return [3, 5];
                        h = self;
                        za.label = 1;
                    case 1:
                        return za.H.push([1, 3, , 4]), [4, Qb(h)];
                    case 2:
                        return m = za.B(), Wf.set(h, m), m.Jb(function(X) {
                            vc(h, m, X)
                        }), [3, 4];
                    case 3:
                        return r =
                            za.B(), [2, {
                                Df: !1,
                                Cf: "".concat(r)
                            }];
                    case 4:
                        return [3, 9];
                    case 5:
                        if (self.parent === self) return [3, 9];
                        A = self.parent;
                        za.label = 6;
                    case 6:
                        return za.H.push([6, 8, , 9]), [4, Qb(A, 2)];
                    case 7:
                        return T = za.B(), Wf.set(A, T), T.Jb(function(X) {
                            vc(A, T, X)
                        }), [3, 9];
                    case 8:
                        return za.B(), [3, 9];
                    case 9:
                        return [2, {
                            Df: !0,
                            Cf: ""
                        }]
                }
            })
        })
    }

    function Lb(e) {
        return U(this, void 0, void 0, function() {
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return Mk = e, [4, new Sb(function(m) {
                            qc(e, function(r, A) {
                                Wf.set(r, A);
                                A.Jb(function(T) {
                                    vc(r, A, T)
                                });
                                m()
                            })
                        })];
                    case 1:
                        return h.B(), [2]
                }
            })
        })
    }

    function Ob() {
        qc(self, function(e, h) {
            Wf.set(e, h);
            h.Jb(function(m) {
                vc(e, h, m)
            })
        })
    }

    function dc(e, h, m) {
        m = (void 0 === m ? {} : m).transfer;
        m = void 0 === m ? !1 : m;
        cc();
        lj.set(e, h);
        m && Dl.push(h)
    }

    function Fb(e, h, m) {
        var r = new vg({
            I: h,
            query: m
        });
        return new Sb(function(A, T) {
            kj.set(r.id, {
                resolve: A,
                reject: T
            });
            e.send(r)
        })
    }

    function G(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        cc();
        m = Wf.get(Mk);
        return m ? Fb(m, e, h) : (Hb("sendQueryToWorker - Channel not found for query", e, h), Sb.resolve())
    }

    function fa(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        cc();
        m = Wf.get(self.parent);
        return m ? Fb(m, e, h) : (Hb("sendQueryToParent - Channel not found for query", e, h), Sb.resolve())
    }

    function Ca(e, h) {
        for (var m = [], r = 2; r < arguments.length; r++) m[r - 2] = arguments[r];
        cc();
        if (!h || !h.contentWindow) return Hb("sendQueryToIframe - Iframe without content", e, m), Sb.resolve();
        r = Wf.get(h.contentWindow);
        return r ? Fb(r, e, m) : (Hb("sendQueryToIframe - Channel not found for query", e, m), Sb.resolve())
    }

    function da(e) {
        for (var h = [], m = 1; m < arguments.length; m++) h[m - 1] = arguments[m];
        cc();
        m = [];
        for (var r = 0; r < self.frames.length; r++) {
            var A = Wf.get(self.frames[r]);
            A ? m.push(Fb(A, e, h)) : Hb("sendQueryToChildren - Channel not found for query", e, h)
        }
        return Sb.all(m)
    }

    function yb(e) {
        return void 0 !== cm[e] ? Td(e) : void 0 !== dm[e] ? md(e) : void 0 !== Ok[e] ? jc.Dd(e) : null
    }

    function tb() {
        return U(this, void 0, void 0, function() {
            var e, h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return e = new Map, h = new Map, Bh = new Map, dc("config", function(r, A, T) {
                            if (r = e.get(A)) {
                                if ("undefined" ===
                                    typeof T) return gc[r];
                                gc[r] = T
                            }
                        }), [4, Sb.all(wb.dT_.aM(Object.getOwnPropertyNames(gc), function(r) {
                            return U(this, void 0, void 0, function() {
                                var A, T, za, X;
                                return S(this, function($a) {
                                    switch ($a.label) {
                                        case 0:
                                            return A = gc[r], T = A.name, X = (za = A.Hi) ? yb(za) : A.initial, za && h.set(za, r), pb() ? [4, fa("config", T)] : [3, 2];
                                        case 1:
                                            X = $a.B(), $a.label = 2;
                                        case 2:
                                            return e.set(T, r), Bh.set(T, []), Object.defineProperty(gc, "__".concat(r), {
                                                writable: !0,
                                                value: X
                                            }), Object.defineProperty(gc, r, {
                                                enumerable: !0,
                                                get: function() {
                                                    return gc["__".concat(r)]
                                                },
                                                set: function(ab) {
                                                    gc["__".concat(r)] !== ab && (gc["__".concat(r)] = ab, w(T, ab))
                                                }
                                            }), [2, null]
                                    }
                                })
                            })
                        }))];
                    case 1:
                        return m.B(), ph("CONFIG_UPDATE", function(r) {
                            h.forEach(function(A, T) {
                                (T = r.detail[T]) && (gc[A] = T)
                            })
                        }), [2]
                }
            })
        })
    }

    function Ya(e, h) {
        var m;
        Bh.has(e) && (null === (m = Bh.get(e)) || void 0 === m ? void 0 : m.push(h))
    }

    function w(e, h) {
        da("config", e, h);
        (e = Bh.get(e)) && wb.dT_.fE(e, function(m) {
            m(h)
        })
    }

    function B(e) {
        var h = [];
        if (!e) return h;
        wb.dT_.fE(e.split(","), function(m) {
            try {
                var r = new RegExp(decodeURIComponent(m));
                h.push(r)
            } catch (A) {}
        });
        return h
    }

    function K(e, h) {
        for (var m = 0; m < h.length; m++)
            if (h[m].test(e)) return !0;
        return !1
    }

    function H() {
        return Oh("dtsrVID")
    }

    function V() {
        var e = gc.Fa;
        "string" === typeof e && Eg("dtsrVID", e)
    }

    function I() {
        window.opener && !Hk("dtsrTIDrSt") && (Dc("dtsrTIDrSt", "true"), Dc("dtsrTID", Gc() + ""));
        var e = Hk("dtsrTID");
        if (e) return e;
        e = Gc() + "";
        Dc("dtsrTID", e);
        return e
    }

    function Ma() {
        var e = Oh("dtsrE");
        if (e) {
            e = e.split("=");
            var h = e[1];
            if (e[0] === pg()) return h
        }
        return null
    }

    function ia(e) {
        e = "".concat(pg(), "=").concat(e);
        Eg("dtsrE",
            e)
    }

    function Ia(e) {
        var h;
        if (!e && fi) return fi;
        fi = (h = {}, h.css = 0, h.image = 0, h.font = 0, h);
        e = wb.dT_.gSC();
        h = /(css_\d)|(font_\d)|(image_\d)/g;
        var m = "_";
        e.startsWith("v") || (h = /(css=\d)|(font=\d)|(image=\d)/g, m = "=");
        e = e.match(h);
        if (!e) return fi;
        fd(e, function(r) {
            var A = r.split(m);
            r = A[0];
            A = A[1];
            em.includes(r) && (fi[r] = parseInt(A))
        });
        return fi
    }

    function Aa() {
        return !!Hk("dtsrRCDM")
    }

    function vb(e) {
        Ng && bh && mj || xb();
        return Ng.has(e) || bh.has(e)
    }

    function ub(e) {
        Ng && bh && mj || xb();
        return Ng.get(e) || bh.get(e) || null
    }

    function mb(e) {
        var h =
            ub(e);
        if (null !== h) e = h;
        else {
            ++Pk;
            h = "".concat(Pk);
            try {
                Ng.set(e, h)
            } catch (m) {
                bh.set(e, h)
            }
            e = h
        }
        return e
    }

    function xb() {
        Pk = 0;
        Ng = new WeakMap;
        bh = new Map;
        mj = new Map
    }

    function Mb() {
        W() || (Ji = new Map, pb() || (dc("perfstart", function(e, h) {
            e = h.i;
            Ji.has(e) || Ji.set(e, []);
            Ji.get(e).push(h)
        }), dc("perfend", function(e, h) {
            var m = Ji.get(h.i);
            if (!m || !m.length) return Hb("PerformanceRecord not matched to any started metric", h);
            e = Yd;
            var r = m.shift(),
                A;
            r.d || (r.d = []);
            h.d || (h.d = []);
            m = (A = {}, A.i = h.i, A.t = h.t - r.t, A.d = r.d.concat(h.d), A.a =
                r.a || h.a, A);
            e(m)
        })), dc("perf", function(e, h) {
            pb() ? fa("perf", h) : Yd(h)
        }))
    }

    function sb(e, h, m) {
        var r;
        void 0 === h && (h = []);
        void 0 === m && (m = !1);
        var A = (r = {}, r.i = e, r.t = Fg(e), r.d = h, r.a = m, r);
        pb() ? fa("perf", A) : Yd(A)
    }

    function Rb(e) {
        if (!e) return !1;
        void 0 === gi && (gi = rc("iIO"));
        return El.includes(e.nodeType) && !(e.nodeType === Node.TEXT_NODE && null !== e.textContent && /^[\t\n\r ]+$/.test(e.textContent)) && !(e && "SCRIPT" === e.nodeName) && !("script" === e.nodeName && gi(e, 23)) && !gi(e, 24) && !(e && "IFRAME" === e.nodeName && gi(e.parentNode,
            25))
    }

    function mc(e) {
        return e && ba(e) ? !!e.shadowRoot : !1
    }

    function Hc(e) {
        return e ? rc("iIO")(e, 27) : !1
    }

    function fe(e) {
        return e && "TEXTAREA" === e.nodeName || P(e) && !Vj.includes(e.type.toLowerCase())
    }

    function Fc(e) {
        return P(e) && Vj.includes(e.type.toLowerCase())
    }

    function Jc(e, h) {
        var m;
        if (m = !fm.includes(h)) m = !(P(e) && "file" === e.type.toLowerCase() && "value" === h);
        if (m = m && !(fe(e) && "value" === h) && !(E(e) && "value" === h) && !(Fc(e) && "checked" === h) && !(e && "OPTION" === e.nodeName && "selected" === h)) m = !(P(e) && "hidden" === e.type.toLowerCase() &&
            "value" === h);
        return m && !(Q(e) && "integrity" === h) && "srcdoc" !== h
    }

    function Ic(e) {
        try {
            if ("" === e) throw Error("Rule is an empty string");
            Wj.matchesSelector(document.documentElement, e);
            return !0
        } catch (h) {
            return console.warn("Masking selector evaluation error: " + h.name, h), !1
        }
    }

    function yd(e) {
        e.ub = e.ub.filter(function(h) {
            return Ic(h)
        });
        e.sb = e.sb.filter(function(h) {
            return Ic(h)
        });
        e.yb = e.yb.filter(function(h) {
            return Ic(h)
        });
        return e
    }

    function ge(e) {
        var h = {
            qb: !0,
            ub: [],
            sb: [],
            yb: [],
            Sd: [],
            version: "1"
        };
        if ("undefined" ===
            typeof e || "" === e) return h;
        var m = decodeURIComponent(e).split(",");
        e = m[0];
        var r = m[1],
            A = m[2],
            T = m[3];
        m = m[4];
        "1" === e && (h.version = e);
        if ("1" === r || "0" === r) h.qb = "1" === r;
        "" !== A && "undefined" !== typeof A && (h.ub = decodeURIComponent(A).split(";"));
        "" !== T && "undefined" !== typeof T && (h.sb = decodeURIComponent(T).split(";").map(function(za) {
            za = za.split("&");
            var X = za[0];
            "undefined" !== typeof za[1] && h.yb.push(X);
            return X
        }));
        if ("" !== m && "undefined" !== typeof m) try {
            h.Sd = decodeURIComponent(m).split(";").map(function(za) {
                if ("" ===
                    za) throw Error("RegExp rule is an empty string");
                return new RegExp(za)
            })
        } catch (za) {
            console.warn("Masking attribute rule error: " + za.name, za)
        }
        return yd(h)
    }

    function sd(e) {
        void 0 === e && (e = []);
        var h = [];
        e.forEach(function(m) {
            var r = m.split("/");
            m = r[1];
            r = Number(r[0]);
            try {
                if (0 === r) {
                    var A = m.length - 1,
                        T = m;
                    m[A] === ck.Ld && (T = m.substr(0, A));
                    Wj.matchesSelector(document.documentElement, T)
                } else 1 === r && new RegExp(m);
                h.push(Tf.create(r, m))
            } catch (za) {}
        });
        return h
    }

    function M(e, h) {
        for (h = e(h); h;) {
            if (Rb(h)) return h;
            h = e(h)
        }
    }

    function D(e, h) {
        "addNode" === e && mb(h);
        var m = ub(h);
        if (!m) return null;
        m = {
            J: m
        };
        if ("addNode" === e || "updateNode" === e) h.parentNode && (Ld() && Hc(h.parentNode) ? m.ja = ub(h.parentNode.host) : m.ja = ub(h.parentNode)), e = M(function(r) {
            if (pa(r.previousSibling)) return r.previousSibling;
            if (Ld() && Hc(r.parentNode)) return r.parentNode.host.lastChild || void 0
        }, h), h = M(function(r) {
            var A;
            if (pa(r.nextSibling)) return r.nextSibling;
            if (Ld() && mc(r.parentNode)) return (null === (A = r.parentNode.shadowRoot) || void 0 === A ? void 0 : A.firstChild) ||
                void 0
        }, h), m.ma = e ? ub(e) : null, m.pa = h ? ub(h) : null;
        return m
    }

    function ua(e, h, m) {
        var r = D(e, h);
        if (r) switch (e) {
            case "addNode":
                return r.nodeName = "http://www.w3.org/2000/svg" === h.namespaceURI ? h.nodeName : h.nodeName.toLowerCase(), null !== h.nodeValue && (r.nodeValue = h.nodeValue), r.namespaceURI = null !== h.namespaceURI ? h.namespaceURI : void 0, r.ka = Vf.Xa(h), r;
            case "updateNode":
                return r.ka = Vf.Xa(h), r;
            case "removeNode":
                return r;
            case "updateNodeValue":
                return null !== h.nodeValue && (r.nodeValue = h.nodeValue), r;
            case "updateAttribute":
                if (m) return r.attributeName =
                    m.name, r.Sa = m.value, r.ka = Vf.Cd(h, m.name), r
        }
    }

    function Ba(e, h) {
        e && (h.prototype.toJSON = e)
    }

    function ya(e) {
        var h = new Map,
            m = Date.prototype.toJSON;
        [Number, Boolean, String, Array, Object].forEach(function(r) {
            h.set(r, r.prototype.toJSON);
            delete r.prototype.toJSON
        });
        Date.prototype.toJSON = lk;
        try {
            return JSON.stringify(e)
        } finally {
            h.forEach(Ba), Date.prototype.toJSON = m
        }
    }

    function Fa(e, h) {
        return function() {
            for (var m = [], r = 0; r < arguments.length; r++) m[r] = arguments[r];
            h && xa(h);
            return e.apply(void 0, m)
        }
    }

    function xa(e) {
        return 0 ===
            wb.dT_.aFr(wb.dT_.oK(e), function(h) {
                return void 0 === e[h]
            }).length
    }

    function Ja() {
        var e = [];
        Uf.store.forEach(function(h) {
            e.push(h)
        });
        return e
    }

    function lb(e) {
        e = e && e.length;
        return "number" === typeof e && -1 < e
    }

    function Qa(e, h, m) {
        return "function" === typeof h ? (h = void 0 === m ? h : h.bind(m), wb.dT_.aM(e, h)) : e
    }

    function jb(e, h, m) {
        function r() {}
        if ("function" === typeof Array.from) return h ? Array.from(e, h, m) : Array.from(e);
        if (Array.isArray(e)) return Qa(e, h, m);
        if (lb(e)) return Qa([].slice.call(e), h, m);
        var A = Xb.Map || r,
            T = Xb.Symbol ||
            r,
            za = [];
        wb.dT_.iNF(Xb.Set || r) && rc("iIO")(e, 19) && e.forEach(function(X) {
            za.push(X)
        });
        wb.dT_.iNF(A) && rc("iIO")(e, 20) && e.forEach(function(X, $a) {
            za.push([$a, X])
        });
        if (wb.dT_.iNF(T) && Xb.Symbol && "function" === typeof e[Symbol.iterator] && 0 === za.length)
            for (e = e[Symbol.iterator](), A = e.next(); !A.done;) za.push(A.value), A = e.next();
        return Qa(za, h, m)
    }

    function ic(e, h, m, r) {
        e = jb(e.childNodes);
        fd(e, function(A) {
            Dd(A, h, m, r);
            A = {
                type: "addNode",
                nodeName: "sdw.s",
                nodeValue: mb(A)
            };
            A = new Kf(A);
            h.add(A)
        })
    }

    function Kb(e, h, m, r) {
        function A(ab) {
            for (var Gb = [], Yc = 1; Yc < arguments.length; Yc++) Gb[Yc - 1] = arguments[Yc];
            return U(T, void 0, void 0, function() {
                var Gd;
                return S(this, function(Vd) {
                    switch (Vd.label) {
                        case 0:
                            return [4, m.apply(void 0, sa([ab], Gb, !1))];
                        case 1:
                            return Gd = Vd.B(), void 0 !== X && void 0 !== Gd && null !== Gd && X(Gd), [2]
                    }
                })
            })
        }
        var T = this;
        r = void 0 === r ? {} : r;
        var za = r.Ka,
            X = void 0 === za ? void 0 : za;
        za = r.Id;
        za = void 0 === za ? void 0 : za;
        r = r.Mf;
        var $a = void 0 === r ? !1 : r;
        za && (A = za(A));
        r = {
            listener: A,
            Mf: $a
        };
        wb.dT_.fE(h.split(" "), function(ab) { of (e, ab, A, $a)
        });
        return r
    }

    function Jb(e,
        h, m) {
        wb.dT_.fE(h.split(" "), function(r) {
            Zg(e, r, m.listener, m.Mf)
        })
    }

    function kc(e) {
        if (fe(e) || E(e)) var h = {
            name: "value",
            value: e.value
        };
        else if (Fc(e)) h = {
            name: "checked",
            value: e.checked ? "" : void 0
        };
        else if (e && "OPTION" === e.nodeName) h = {
            name: "selected",
            value: e.selected ? "" : void 0
        };
        else return null;
        return cf.create("updateAttribute", {
            node: e,
            Ib: h
        })
    }

    function Mc(e) {
        if (ba(e.target)) {
            var h = new xe(Gc());
            E(e.target) ? fd(e.target.querySelectorAll("option"), function(m) {
                (m = kc(m)) && h.add(m)
            }) : (e = kc(e.target)) && h.add(e);
            return h
        }
    }

    function td(e, h) {
        (e = kc(e)) && h(e)
    }

    function Ad(e, h) {
        void 0 === h && (h = document.documentElement);
        e = Kb(h, "input change", Mc, {
            Ka: e
        });
        h === document.documentElement && (mk = e);
        return e
    }

    function Bd(e, h) {
        void 0 === h && (h = mk);
        Jb(e, "input change", h)
    }

    function nd(e) {
        if (!e.size) return Sb.resolve();
        e = [e.Ha()];
        return pb() ? fa.apply(void 0, sa(["mutations"], e, !1)) : G.apply(void 0, sa(["mutations"], e, !1))
    }

    function Id(e) {
        return U(this, void 0, void 0, function() {
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return pb() ? [4, fa("events",
                            e.Si())] : [3, 2];
                    case 1:
                        return h.B(), [2];
                    case 2:
                        return bb.listener && bb.listener(e), [2]
                }
            })
        })
    }

    function Sd(e) {
        if (!e) return null;
        Pg || (Pg = new WeakMap);
        var h = Pg.get(e);
        if (h) return h.J;
        h = document.querySelectorAll("iframe");
        for (var m = 0; m < h.length; m++)
            if (h[m].contentWindow === e) {
                var r = ub(h[m]);
                Pg.set(e, {
                    J: r,
                    frame: h[m]
                });
                return r
            }
        return null
    }

    function id(e, h) {
        var m = (void 0 === h ? {} : h).context,
            r = Sd(m);
        wd(nk);
        e.Kh(function(A) {
            A.node && A.Lf();
            if ("undefined" === typeof A.J) return !0;
            if (!m) return !1;
            if (!r) return !0;
            A.J = "".concat(r,
                ".").concat(A.J);
            A.ja ? A.ja = "".concat(r, ".").concat(A.ja) : A.ja = r;
            A.pa && (A.pa = "".concat(r, ".").concat(A.pa));
            A.ma && (A.ma = "".concat(r, ".").concat(A.ma));
            return !1
        });
        sb(nk, [
            ["mutations", e.size]
        ], !0);
        return nd(e)
    }

    function Pc(e, h) {
        var m = (void 0 === h ? {} : h).context;
        return U(this, void 0, void 0, function() {
            var r, A;
            return S(this, function(T) {
                switch (T.label) {
                    case 0:
                        r = Sd(m);
                        if (m && !r) return [2];
                        if (m && r && (e.ra = "".concat(r, ".").concat(e.ra), e.type && ["click", "move"].includes(e.type))) {
                            Pg || (Pg = new WeakMap);
                            (T = Pg.get(m)) ?
                            (T = T.frame.getBoundingClientRect(), A = {
                                top: Math.round(T.top),
                                left: Math.round(T.left)
                            }) : A = void 0;
                            if (void 0 === A || void 0 === e.x || void 0 === e.y) return [2];
                            e.x += A.left;
                            e.y += A.top
                        }
                        return [4, Id(e)];
                    case 1:
                        return T.B(), [2]
                }
            })
        })
    }

    function Cd(e) {
        return U(this, void 0, void 0, function() {
            var h, m, r, A;
            return S(this, function(T) {
                switch (T.label) {
                    case 0:
                        return h = e.src, [4, Ca("iframeLocation", e)];
                    case 1:
                        return (m = T.B()) && "about:blank" !== m && m !== h && (h = m), r = new xe(Gc()), A = cf.create("updateAttribute", {
                                node: e,
                                Ib: {
                                    name: "src",
                                    value: h
                                }
                            }),
                            r.add(A), id(r), [2]
                }
            })
        })
    }

    function Wc(e, h) {
        var m = Wi.zh(e);
        m && Rc(h, e, {
            name: ok,
            value: ""
        });
        return m
    }

    function ae(e) {
        var h, m = !1,
            r = e.tagName.toLowerCase();
        e = e.parentElement;
        var A = null !== (h = null === e || void 0 === e ? void 0 : e.tagName.toLowerCase()) && void 0 !== h ? h : "";
        if (!e) return !0;
        "source" === r && "picture" === A && fd(e.childNodes, function(T) {
            oa(T) && Wi.zh(T) && (m = !0)
        });
        return m
    }

    function Rc(e, h, m) {
        h = cf.create("updateAttribute", {
            node: h,
            Ib: m
        });
        e.add(h)
    }

    function ie(e, h) {
        if (ba(e)) {
            var m = !1;
            oa(e) && (m = Wc(e, h));
            "source" === e.tagName.toLowerCase() &&
                (m = ae(e));
            fd(e.attributes, function(r) {
                !Jc(e, r.name) || m && rk.includes(r.name) || (e && "IFRAME" === e.nodeName && "src" === r.name && Cd(e).catch(function() {}), Rc(h, e, r))
            });
            oa(e) && e.complete && od(e, h);
            td(e, function(r) {
                h.add(r)
            })
        }
    }

    function od(e, h) {
        void 0 === h && (h = new xe(Gc()));
        if (!oa(e) || !e.parentElement || "picture" === e.parentElement.tagName.toLowerCase()) return h;
        Rc(h, e, {
            name: "data-dt-natural-dimensions",
            value: "".concat(e.naturalWidth + "", "x").concat(e.naturalHeight + "")
        });
        return h
    }

    function Dd(e, h, m, r) {
        if (Rb(e) && (!e.parentNode ||
                Rb(e.parentNode))) {
            var A = cf.create(vb(e) ? "updateNode" : "addNode", {
                node: e
            });
            if (A) {
                A.node && oa(A.node) && !A.node.complete && !r.includes(A.node) && r.push(A.node);
                h.add(A);
                if (e && "IFRAME" === e.nodeName && (A = e.getAttribute("data-dt-last-src"))) {
                    var T = cf.create("updateAttribute", {
                        node: e,
                        Ib: {
                            name: "src",
                            value: A
                        }
                    });
                    e.removeAttribute("data-dt-last-src")
                }
                ie(e, h);
                T && h.add(T);
                if (Q(e)) e.sheet ? m.push(e.sheet) : e.addEventListener("load", n);
                else if (aa(e) && e.sheet) m.push(e.sheet);
                else
                    for (Ld() && mc(e) ? (mc(e) && ((T = he(e)) ? Ye(T,
                            h) : (T = {
                            host: e,
                            ld: !1
                        }, Rd.push(T), tc(T), J(T), zg(T, h), Ye(T, h))), T = e.shadowRoot.firstChild, ic(e, h, m, r)) : T = e.firstChild; T;) Dd(T, h, m, r), T = T.nextSibling
            }
        }
    }

    function jd(e, h) {
        void 0 === h && (h = document.documentElement);
        if (h.parentNode) {
            wd("snapshot");
            var m = new xe(Gc(), jc.Pb("srficros")),
                r = [],
                A = [];
            Dd(h, m, r, A);
            pb() || (h = Th.getEntries(), fd(h, function(T) {
                m.add(T);
                Th.remove(T)
            }), Xb !== Xb.top && (h = new Kf({
                type: "addNode",
                nodeName: "tf.iframe",
                nodeValue: ""
            }), m.add(h)));
            sb("snapshot", [
                ["nodes", m.size]
            ], !0);
            e(m, r, A)
        }
    }

    function Nd(e) {
        var h =
            Function.prototype.toString.call(e);
        return !!e && /{\s+\[native code]/.test(h)
    }

    function Ed(e, h) {
        var m = e.prototype,
            r = new e.Wh(h);
        fd(Object.keys(m), function(A) {
            r[A] = m[A].bind(r)
        });
        return r
    }

    function ud(e, h) {
        "function" === typeof Jg && Jg(e, h)
    }

    function wc(e) {
        var h = [],
            m = new xe(Gc()),
            r = [],
            A = [],
            T = [],
            za = [];
        fd(e, function(X) {
            aa(X.target) && X.target.sheet && h.push(X.target.sheet);
            X.target && X.target.parentNode && aa(X.target.parentNode) && X.target.parentNode.sheet && h.push(X.target.parentNode.sheet);
            "childList" === X.type ?
                (fd(X.removedNodes, function($a) {
                    T.push($a)
                }), fd(X.addedNodes, function($a) {
                    A.push($a)
                })) : za.push(X)
        });
        fd(wb.dT_.aFr(T, vb), function(X) {
            m.add(cf.create("removeNode", {
                node: X,
                Ib: void 0
            }));
            Ld() && mc(X) && te(X)
        });
        e = wb.dT_.aFr(A, function(X) {
            return !!(Rb(X) && X.parentNode && vb(X.parentNode))
        });
        fd(e, function(X) {
            jd(function($a, ab, Gb) {
                h.push.apply(h, ab);
                r.push.apply(r, Gb);
                $a.forEach(function(Yc) {
                    m.add(Yc)
                })
            }, X)
        });
        e = wb.dT_.aFr(za, function(X) {
            return vb(X.target)
        });
        fd(e, function(X) {
            switch (X.type) {
                case "characterData":
                    m.add(cf.create("updateNodeValue", {
                        node: X.target,
                        Ib: void 0
                    }));
                    break;
                case "attributes":
                    if (!ba(X.target) || !X.attributeName || !Jc(X.target, X.attributeName)) break;
                    var $a = X.target.getAttribute(X.attributeName),
                        ab = "data-dt-last-src" === X.attributeName,
                        Gb = X.target,
                        Yc = X.attributeName;
                    oa(Gb) && "src" === Yc && Ih.zh(Gb) || ab || m.add(cf.create("updateAttribute", {
                        node: X.target,
                        Ib: {
                            name: X.attributeName,
                            value: null !== $a ? $a : void 0
                        }
                    }));
                    "src" !== X.attributeName || !oa(X.target) || X.target.parentNode && "picture" === X.target.parentNode.nodeName.toLowerCase() || (X = X.target,
                        X.complete ? od(X, m) : r.push(X));
                    break;
                default:
                    Hb("Unexpected mutation type", {
                        type: X.type
                    })
            }
        });
        return {
            Vh: m,
            styleSheets: h,
            fj: r
        }
    }

    function Jd(e) {
        fd(e, function(h) {
            h.complete || (h.removeEventListener("load", Sc), h.addEventListener("load", Sc), h.removeEventListener("error", Sc), h.addEventListener("error", Sc))
        })
    }

    function kd() {
        fd(document.getElementsByTagName("img"), function(e) {
            e.removeEventListener("load", Sc)
        })
    }

    function Sc(e) {
        oa(e.target) && (e = od(e.target), ud(e, []))
    }

    function n(e) {
        if (pa(e.target)) {
            e = e.target;
            try {
                Q(e) &&
                    e.sheet && ud(new xe(Gc()), [e.sheet]), e.removeEventListener("load", n)
            } catch (h) {}
        }
    }

    function v(e) {
        wd("observe");
        var h = wc(e);
        e = h.Vh;
        var m = h.styleSheets;
        h = h.fj;
        sb("observe", [
            ["mutations", e.size]
        ], !0);
        (0 < e.size || 0 < m.length) && ud(e, m);
        0 < h.length && Jd(h)
    }

    function y(e, h) {
        void 0 === h && (h = document.documentElement);
        "function" === typeof e && (Cf = Qh.Yi(v), Jg = e, Cf.observe(h, mh), Ad(e), L(), Ld() && wb.dT_.fE(Rd, J), Jd(document.getElementsByTagName("img")))
    }

    function J(e) {
        Cf && Jg && e && e.host.shadowRoot && (Cf.observe(e.host.shadowRoot,
            mh), e.hj = Ad(Jg, e.host.shadowRoot))
    }

    function L() {
        Xb.PerformanceObserver && (lh = new PerformanceObserver(Z), lh.observe({
            entryTypes: ["resource"]
        }), setTimeout(function() {
            ja(performance.getEntriesByType("resource"))
        }, 0))
    }

    function Z(e) {
        ja(e.getEntries())
    }

    function ja(e) {
        for (var h = new xe(Gc()), m = 0; m < e.length; m++) {
            var r = e[m],
                A = r.decodedBodySize,
                T = r.name;
            0 === r.transferSize && 0 === A && T.includes(".css") && T.startsWith(Xb.location.origin) && h.add(new Kf({
                type: "addNode",
                nodeName: "rl.fail",
                nodeValue: T
            }))
        }
        h.size && Jg && Jg(h)
    }

    function va() {
        if (Cf) {
            var e = Cf.takeRecords();
            if (e) {
                var h = wc(e);
                e = h.Vh;
                h = h.styleSheets;
                0 < e.size && ud(e, h)
            }
        }
    }

    function Oa(e) {
        e && e.host.shadowRoot && Bd(e.host.shadowRoot, e.hj)
    }

    function Va(e) {
        if (P(e) && "password" === e.type.toLowerCase()) {
            var h = e.value;
            return h ? h.replace(/./g, "*") : ""
        }
        var m = cd.Pj(e),
            r = cd.Oj(e);
        h = "INPUT" === e.nodeName && "number" === e.getAttribute("type") ? "0" : "*";
        m || r ? (e = e.value, void 0 === h && (h = "*"), h = null !== e && "" !== e ? e.replace(/[^- :\u2013\/\u2014._;,()=!?|<>+%\u20ac$\u00a2\u00a5\u00a3\u20bd\u5143\u20a8\u20bf'"@&\u3002\u3001\]\[\n\r\\]/g,
            h) : e) : h = P(e) ? ["radio", "checkbox"].includes(e.type.toLowerCase()) ? e.checked : e.value : e.value;
        return h
    }

    function zb(e, h) {
        var m = e.target;
        void 0 === h && (h = Gc());
        if (cd.yh(m)) return Sb.resolve(null);
        e = Va(m);
        var r = Sb,
            A = r.resolve,
            T = Od,
            za = ub(m);
        if (m.name) m = m.name;
        else if (m.id) m = "#".concat(m.id);
        else {
            var X = m.tagName.toLowerCase();
            m = P(m) ? "<".concat(X, ".").concat(m.type, ">") : "<".concat(X, ">")
        }
        return A.call(r, new T("input", {
            ra: za,
            name: m,
            value: "string" === typeof e ? 5E3 >= e.length ? e : e.slice(0, -(e.length - 5E3)) : e,
            duration: Gc() -
                h
        }))
    }

    function Tb(e, h) {
        void 0 === h && (h = document);
        e = Kb(h, "focus blur", zb, {
            Ka: e,
            Id: function(m) {
                var r, A, T;
                return function(za) {
                    var X = za.target;
                    ba(X) && (P(X) || X && "TEXTAREA" === X.nodeName || E(X)) && ("blur" === za.type && X === A && T !== Va(A) && m(za, r), A = X, T = Va(A), r = Gc())
                }
            },
            Mf: !0
        });
        h === document && ($e = e);
        return e
    }

    function tc(e) {
        if (e.host.shadowRoot && !e.ld) {
            var h = Tb(Pc, e.host.shadowRoot);
            e.ld = !0;
            e.Lh = h
        }
    }

    function pc(e) {
        e.host.shadowRoot && e.ld && e.Lh && (Jb(e.host.shadowRoot, "focus blur", e.Lh), e.ld = !1)
    }

    function Xc(e) {
        try {
            return null !==
                e.cssRules && 0 < e.cssRules.length
        } catch (h) {
            return !1
        }
    }

    function vd(e) {
        try {
            var h = e.cssRules
        } catch (m) {
            h = null
        }
        return {
            url: null === e || void 0 === e ? void 0 : e.href,
            ownerNode: null === e || void 0 === e ? void 0 : e.ownerNode,
            cssRules: h
        }
    }

    function je(e) {
        e.createObjectStore("global");
        e.createObjectStore("visit")
    }

    function Xd(e) {
        return Sb.reject(Error("".concat(Vh, " '").concat(e, "' on non-initialized db")))
    }

    function Ie(e) {
        void 0 === e && (e = je);
        return Te = new Sb(function(h, m) {
            var r = indexedDB.open("dT_store", 1);
            r.onsuccess = function() {
                h(r.result)
            };
            r.onerror = function() {
                m(r.error)
            };
            r.onupgradeneeded = function() {
                var A = r.result;
                A.onversionchange = function() {
                    A.close()
                };
                e(A)
            }
        })
    }

    function Je(e, h, m) {
        if (!Te) return Xd("put");
        var r = m || h.key;
        return Te.then(function(A) {
            return new Sb(function(T, za) {
                var X = A.transaction(e, "readwrite");
                X.oncomplete = function() {
                    T()
                };
                X.onerror = function() {
                    var ab, Gb, Yc = null !== (ab = $a.error) && void 0 !== ab ? ab : null === (Gb = null === $a || void 0 === $a ? void 0 : $a.transaction) || void 0 === Gb ? void 0 : Gb.error;
                    za(Yc)
                };
                X.onabort = X.onerror;
                X = X.objectStore(e);
                var $a = r ? X.put(h, r) : X.put(h)
            })
        })
    }

    function Wa(e, h) {
        return Te ? Te.then(function(m) {
            return new Sb(function(r, A) {
                var T = m.transaction(e, "readonly").objectStore(e).get(h);
                T.onsuccess = function() {
                    r(T.result)
                };
                T.onerror = function() {
                    A(T.error)
                }
            })
        }) : Xd("getByKey")
    }

    function fg(e) {
        return Te ? Te.then(function(h) {
                return new Sb(function(m, r) {
                    var A = [],
                        T = h.transaction(e, "readonly").objectStore(e).openCursor();
                    T.onsuccess = function() {
                        var za = T.result;
                        za ? (A.push(za.value), za.continue()) : m(A)
                    };
                    T.onerror = function() {
                        r(T.error)
                    }
                })
            }) :
            Xd("getAll")
    }

    function Bg(e, h) {
        return Te ? Te.then(function(m) {
            return new Sb(function(r, A) {
                var T = m.transaction(e, "readwrite");
                T.oncomplete = function() {
                    r()
                };
                T.onerror = function() {
                    var X, $a, ab = null !== (X = za.error) && void 0 !== X ? X : null === ($a = null === za || void 0 === za ? void 0 : za.transaction) || void 0 === $a ? void 0 : $a.error;
                    A(ab)
                };
                T.onabort = T.onerror;
                var za = T.objectStore(e).delete(h)
            })
        }) : Xd("remove")
    }

    function hf(e, h) {
        return Je(e, h).catch(function() {
            var m = Xe(e);
            m.set(h.key, h);
            th.set(e, m)
        })
    }

    function jf(e, h) {
        return Wa(e,
            h).then(function(m) {
            if (!m) throw Error("Record not found");
            return m
        }).catch(function() {
            return Xe(e).get(h)
        })
    }

    function se(e) {
        var h = jb(Xe(e), function(m) {
            return m[1]
        });
        return fg(e).then(function(m) {
            if (!m) throw Error("Records not found");
            return m
        }).then(function(m) {
            m = m.concat(h);
            for (var r = [], A = [], T = 0; T < m.length; T++) {
                var za = m[T];
                A.includes(za.key) || (r.push(za), A.push(za.key))
            }
            return r
        }).catch(function() {
            return h
        })
    }

    function vf(e, h) {
        return Bg(e, h).catch(function() {
            Xe(e).delete(h)
        })
    }

    function Xe(e) {
        return th.get(e) ||
            new Map
    }

    function tf(e) {
        return Uc(e, "srrcur_")
    }

    function Uc(e, h) {
        return e && "string" === typeof e.key && 0 === e.key.indexOf(h)
    }

    function hd(e) {
        return jf("visit", "".concat(Hg).concat(e.url)).then(function(h) {
            if (!Uc(h, Hg)) throw Error("Record not found");
            h = h.body;
            var m = document.implementation.createHTMLDocument(""),
                r = document.createElement("style");
            r.innerText = h;
            m.head.appendChild(r);
            h = r.sheet;
            if (!h) throw Error("css resource from string has not been created");
            return wb.dT_.aFr(h.cssRules, la)
        }).catch(function() {
            return []
        })
    }

    function ad(e) {
        return e.cssRules ? wb.dT_.aFr(e.cssRules, function(h) {
            if (!la(h) || !h.styleSheet) return !1;
            h = vd(h.styleSheet);
            return Xc(h) || Td("srxicss") ? !0 : !1
        }) : []
    }

    function ag(e) {
        return Xc(e) ? Sb.resolve(ad(e)) : Td("srxicss") ? hd(e) : Sb.resolve([])
    }

    function Jh(e) {
        return new Sb(function(h, m) {
            if (e.url) {
                var r = rc("gxwp")();
                r.open("GET", e.url);
                r.timeout = zk;
                r.onload = function() {
                    200 === r.status ? h(r.responseText) : m(Error("".concat(r.status, ": ").concat(r.statusText)))
                };
                r.onerror = function() {
                    m(Error("".concat(r.status,
                        ": ").concat(r.statusText)))
                };
                r.ontimeout = r.onerror;
                r.send()
            } else m(Error("stylesheet doesn't have href"))
        })
    }

    function u(e, h) {
        var m = document.implementation.createHTMLDocument(""),
            r = m.createElement("base");
        r.href = h;
        m.head.appendChild(r);
        h = m.createElement("a");
        h.href = e;
        return h.href
    }

    function t(e) {
        if ("string" !== typeof e.cssText) e = "";
        else {
            var h;
            if (!(h = z(e)))
                if ("conditionText" in e) {
                    h = e.conditionText;
                    var m = e.cssRules,
                        r = e.cssText;
                    if (r.includes("grid-template:") && r.includes("repeat(")) {
                        r = "";
                        for (var A = 0; A <
                            m.length; ++A) {
                            var T = m.item(A);
                            T && (r += "{".concat(z(T), "}"))
                        }
                        h = "@media ".concat(h, " ").concat(r)
                    } else h = null
                } else h = null;
            e = h || e.cssText
        }
        return e
    }

    function z(e) {
        if (!("selectorText" in e)) return null;
        var h = e.selectorText;
        e = e.gk;
        if (!e) return null;
        var m = e.get("grid-template");
        if (!m || !m.toString().includes("repeat(")) return null;
        var r = "";
        e.forEach(function(A, T) {
            "grid-template" !== T && (r += "".concat(T, ":").concat(A, ";"))
        });
        return "".concat(h, "{").concat(r, "}")
    }

    function R(e) {
        try {
            if (!e.cssRules) return Sb.reject(Error("No rules defined"));
            var h = e.url,
                m = wb.dT_.aM(e.cssRules, function(r) {
                    r = t(r);
                    if (r.length && h) {
                        var A = new RegExp(/url\(["|'](.+?)["|']/g),
                            T = A.exec(r);
                        if (T) {
                            for (var za = r; null !== T;) {
                                T = T[1];
                                if (/^([https?]+:)?\/\//i.test(T)) {
                                    var X = h.split("/");
                                    var $a = T.split("/");
                                    if (X[0] !== $a[0] || X[2] !== $a[2]) $a = T;
                                    else if (X.slice(3).join("/") === $a.slice(3).join("/")) $a = $a.slice(3).join("/");
                                    else {
                                        var ab = X.splice(3);
                                        $a = $a.splice(3);
                                        var Gb = ab.length;
                                        X = 0;
                                        for (X; X < Math.min($a.length, Gb) - 1 && $a[X] === ab[X]; X++);
                                        ab = "";
                                        for (--Gb; Gb > X; Gb--) ab += "../";
                                        $a = ab +=
                                            $a.splice(X).join("/")
                                    }
                                    za = za.replace(T, $a)
                                }
                                T = A.exec(r)
                            }
                            r = za
                        }
                    }
                    return r
                }).join("");
            return Sb.resolve(m)
        } catch (r) {
            return Sb.reject(r)
        }
    }

    function ka() {
        return se("visit").then(function(e) {
            for (var h = [], m = 0; m < e.length; m++) {
                var r = e[m];
                Uc(r, Hg) && h.push(r)
            }
            return h
        }).catch(function() {
            return []
        })
    }

    function La(e) {
        return jf("global", "".concat("srrckr_").concat(e)).then(function(h) {
            return Uc(h, "srrckr_") && !(h.ttl < wb.dT_.nw())
        }).catch(function() {
            return !1
        })
    }

    function ob(e) {
        return Xc(e) ? R(e) : Jh(e).catch(function(h) {
            e.url &&
                ue.sj(e.url);
            throw h;
        })
    }

    function ib(e) {
        return wb.dT_.aM(new Uint8Array(e), function(h) {
            return ("00" + h.toString(16)).slice(-2)
        }).join("")
    }

    function Ab(e, h) {
        void 0 === h && (h = "SHA-256");
        return U(this, void 0, void 0, function() {
            var m;
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, Xb.crypto.subtle.digest(h, e)];
                    case 1:
                        return m = r.B(), [2, ib(m)]
                }
            })
        })
    }

    function Bb(e) {
        return U(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        var r, A;
                        return (null === (r = null === Xb || void 0 ===
                            Xb ? void 0 : Xb.msCrypto) || void 0 === r ? 0 : r.subtle) || (null === (A = null === Xb || void 0 === Xb ? void 0 : Xb.crypto) || void 0 === A ? 0 : A.subtle) ? [2, Ab(e)] : [4, Zb(e)];
                    case 1:
                        h = m.B();
                        if (!h) throw Error("Error generating hash with fast-sha256");
                        return [2, ib(h)]
                }
            })
        })
    }

    function Zb(e) {
        return U(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return pb() ? [4, fa("SHA-256", e)] : [3, 2];
                    case 1:
                        return h = m.B(), [3, 4];
                    case 2:
                        return [4, G("SHA-256", e)];
                    case 3:
                        h = m.B(), m.label = 4;
                    case 4:
                        return [2, h]
                }
            })
        })
    }

    function lc() {
        return Lc().then(function(e) {
            if (!e) return sc(0)
        })
    }

    function Lc() {
        return jf("visit", "".concat("srrckrc")).then(function(e) {
            return e && "string" === typeof e.key && "srrckrc" === e.key && e ? e.counter : 0
        }).catch(function() {
            return 0
        })
    }

    function Oc() {
        return Lc().then(function(e) {
            return sc(e + 1)
        })
    }

    function sc(e) {
        var h, m = (h = {}, h[vh] = "srrckrc", h.visitId = wb.dT_.gVI(), h.counter = e, h);
        return hf("visit", m)
    }

    function Vc() {
        return vf("visit", "srrckrc").catch(function() {})
    }

    function $f() {
        Fh += 1;
        return Oc()
    }

    function qd() {
        return {
            Mj: Lc(),
            Bj: Fh
        }
    }

    function Bc() {
        Fh = 0;
        return Vc()
    }

    function $d(e) {
        return new Uint8Array(ma(e))
    }

    function Hd() {
        return wb.dT_.ncv("msl")
    }

    function rd(e, h, m, r) {
        return r ? "sid=".concat(e, "-").concat(1, "&p").concat(h, "_").concat(m, "&").concat(1, ",").concat(e, ",").concat(encodeURIComponent(r), ",") : "sid=".concat(e, "-").concat(1, "&p").concat(h, "_").concat(m, "&")
    }

    function gd(e, h) {
        var m = new Uint8Array(e.length + h.length);
        m.set(e, 0);
        m.set(h, e.length);
        return m
    }

    function ze(e, h, m) {
        var r = rd(h, 0, 20, e);
        var A = rd(h, 20, 20);
        r = Hd() - r.length;
        r = m.length - r;
        A = Hd() - A.length;
        r = 0 >= A ? 1 : Math.ceil(r / A);
        r += 1;
        if (20 < r) return [];
        e = $d(rd(h, 1, r, e));
        A = Hd() - e.length;
        for (var T = m.slice(A), za = 0, X = [], $a = 2; $a <= r; $a++) {
            var ab = $d(rd(h, $a, r)),
                Gb = Hd() - ab.length;
            Gb = T.slice(za, za + Gb);
            X.push(gd(ab, Gb));
            za += Gb.length
        }
        X.unshift(gd(e, m.slice(0, A)));
        return X
    }

    function dd(e, h, m) {
        e = ze(e, h, m);
        if (!e.length) return -1;
        wb.dT_.fE(e, function(r) {
            var A, T = wb.dT_.cB();
            wb.dT_.gBP().ar(T, r);
            wb.dT_.sB(T, !1, !0, (A = {}, A.contentType = "srRs", A))
        });
        return 1
    }

    function Ke(e, h, m) {
        return U(this, void 0, void 0, function() {
            var r, A, T, za, X, $a;
            return S(this, function(ab) {
                switch (ab.label) {
                    case 0:
                        return pb() ? [4, fa("sendResource", e, h, m)] : [3, 2];
                    case 1:
                        return r = ab.B(), [3, 4];
                    case 2:
                        return A = $d("".concat(1, ",").concat(h, ",").concat(encodeURIComponent(e), ",")), [4, G("compress", m)];
                    case 3:
                        T = ab.B();
                        if (A.length + T.length > Hd()) return [2, dd(e, h, T)];
                        za = wb.dT_.cB();
                        X = gd(A, T);
                        wb.dT_.gBP().ar(za, X);
                        wb.dT_.sB(za, !1, !0, ($a = {}, $a.contentType = "srRs", $a));
                        r = 1;
                        ab.label = 4;
                    case 4:
                        return [2, r]
                }
            })
        })
    }

    function Zc() {
        if (Aa() || Td("srcss") || Td("srxcss"))
            if (Aa() || !wb.dT_.iMD() || Td("srmrc")) rj = ek.initialize(), wb.dT_.addE("CSS_TRANSMISSION_STARTED",
                bg)
    }

    function hc() {
        return 1 === Ia().css || Aa() ? Ee().then(function(e) {
            if (e) throw Error("Capturing discarded as limits reached");
            return ue.size()
        }).then(function(e) {
            if (!e) throw Error("Store is empty");
            return ef()
        }) : Sb.reject(Error("Capture discarded as ActiveGate is not accepting resource beacons"))
    }

    function Ee() {
        if (Aa()) return Sb.resolve(!1);
        var e = rj.Wi(),
            h = e.Mj;
        e = e.Bj;
        var m = wb.dT_.ncv("srmcrv"),
            r = wb.dT_.ncv("srmcrl");
        return e >= r ? Sb.resolve(!0) : h.then(function(A) {
            return A >= m
        })
    }

    function ef() {
        var e;
        return ue.aj().then(function(h) {
            e =
                h[Math.floor(Math.random() * h.length)];
            return ue.Rh(e.hash)
        }).then(function(h) {
            if (!h) throw Error("Resource not known");
            qe(e.url)
        }).catch(function() {
            return cg(e)
        })
    }

    function cg(e) {
        var h;
        return Ke(e.url, e.hash, $d(e.body)).then(function(m) {
            h = m;
            if (1 !== h) throw Error("Resource has not been sent");
            return ue.rj(e.hash)
        }).then(function() {
            return rj.Wj()
        }).then(function() {
            qe(e.url)
        }).catch(function() {
            h = h || 0; - 1 === h ? qe(e.url) : (nc[e.hash] = void 0 !== nc[e.hash] ? nc[e.hash] + 1 : 0, 3 <= nc[e.hash] ? qe(e.url) : eh())
        })
    }

    function eh() {
        ue.size().then(function(e) {
            if (!e) throw Error("No resources to queue");
            wb.dT_.st(hc, 0)
        }).catch(function() {})
    }

    function qe(e) {
        ue.Kj(e).then(function() {
            eh()
        }).catch(function() {})
    }

    function bg() {
        hc().catch(function() {})
    }

    function Mf(e) {
        if (!Yb) return Sb.reject(Error("Resource Capturing not initialized"));
        if (!e.url) return Sb.reject(Error("The resource doesn't have href"));
        var h = e.url;
        if (K(h, Nb)) return Sb.reject(Error("The url ".concat(h, " is blacklisted")));
        var m, r;
        return ue.$i(h).then(function(A) {
            if (!A) throw Error("resource not found");
            return A.hash
        }).catch(function() {
            return ue.kj(h).then(function(A) {
                if (A) throw Error("The resource is unreachable");
                return ob(e)
            }).then(function(A) {
                if ("" === A.trim()) throw Error("The resource is empty");
                m = A;
                return Bb($d(A))
            }).then(function(A) {
                r = A;
                return ue.Rh(r)
            }).then(function(A) {
                if (A) return r;
                dh(h, m, r);
                return r
            })
        })
    }

    function dh(e, h, m) {
        var r, A = (r = {}, r[vh] = "".concat(Hg).concat(e), r.body = h, r.url = e, r.hash = m, r.visitId = wb.dT_.gVI(), r);
        ue.wi(A).catch(function() {})
    }

    function Fe(e) {
        if (!e.url) return Sb.resolve([]);
        var h = [],
            m = e.url;
        return Mf(e).then(function(r) {
            var A = ba(e.ownerNode) ? new Kf({
                type: "addNode",
                nodeName: "rc.link",
                ja: mb(e.ownerNode)
            }) : void 0;
            if (void 0 === A) return [];
            var T = A.J;
            r = dg(T, r, m);
            h.push.apply(h, sa([A], r, !1));
            return ee(e, T)
        }).then(function(r) {
            h.push.apply(h, r);
            return h
        })
    }

    function ee(e, h) {
        var m, r = [];
        return ag(e).then(function(A) {
            return A.length ? wb.dT_.red(A, function(T, za) {
                var X = u(za.href, e.url + "");
                if (!za.styleSheet) return T;
                var $a = vd(za.styleSheet);
                $a.url = X;
                return T.then(function() {
                    return Mf($a)
                }).then(function(ab) {
                    var Gb = new Kf({
                        type: "addNode",
                        nodeName: "rc.import",
                        ja: h,
                        ma: m
                    });
                    ab = dg(Gb.J, ab, X);
                    r.push.apply(r,
                        sa([Gb], ab, !1));
                    m = Gb.J;
                    return ee($a, m)
                }).then(function(ab) {
                    ab && r.push.apply(r, ab)
                }).catch(function() {})
            }, Sb.resolve()).then(function() {
                return r
            }) : []
        })
    }

    function dg(e, h, m) {
        h = new Kf({
            type: "updateAttribute",
            J: e,
            attributeName: "hash",
            Sa: h
        });
        e = new Kf({
            type: "updateAttribute",
            J: e,
            attributeName: "url",
            Sa: m
        });
        return [h, e]
    }

    function ye(e) {
        var h = e.url,
            m = e.ownerNode;
        return h ? m ? jf("visit", "".concat(Vi).concat(h)).then(function(r) {
            if (!Uc(r, Vi) || !r.metadata.length) throw Error("Metadata mutations not found");
            var A = r.metadata,
                T = r.metadata[0],
                za = mb(m);
            T = ta({}, T);
            T.parentId && T.parentId !== za && (T.parentId = za);
            A[0] = T;
            A = r.metadata;
            za = new Map;
            for (r = 0; r < A.length; r++) T = A[r], T.nodeId && za.set(T.nodeId, Kf.Mh());
            r = [];
            for (T = 0; T < A.length; T++) {
                var X = ta({}, A[T]);
                X.previousId && za.has(X.previousId) && (X.previousId = za.get(X.previousId));
                X.parentId && za.has(X.parentId) && (X.parentId = za.get(X.parentId));
                X.nodeId && za.has(X.nodeId) && (X.nodeId = za.get(X.nodeId));
                r.push(X)
            }
            A = [];
            for (za = 0; za < r.length; za++) T = r[za], A.push(new Kf({
                type: T.type,
                ja: T.parentId,
                ma: T.previousId,
                pa: T.nextId,
                J: T.nodeId,
                namespaceURI: T.namespaceURI,
                nodeName: T.nodeName,
                attributeName: T.attributeName,
                Sa: T.attributeValue
            }));
            return A
        }).catch(function() {
            return Fe(e).then(function(r) {
                var A = {};
                A[vh] = "".concat(Vi).concat(h);
                A.visitId = rc("gVI")();
                A.url = h;
                for (var T = [], za = 0; za < r.length; za++) {
                    var X = r[za];
                    T.push({
                        type: X.type,
                        parentId: X.ja,
                        previousId: X.ma,
                        nextId: X.pa,
                        nodeId: X.J,
                        namespaceURI: X.namespaceURI,
                        nodeName: X.nodeName,
                        attributeName: X.attributeName,
                        attributeValue: X.Sa
                    })
                }
                A = (A.metadata =
                    T, A);
                hf("visit", A);
                return r
            })
        }) : Sb.reject(Error("css discarded for capturing since it is not attached into the document")) : Sb.reject(Error("css discarded for capturing since it has not href"))
    }

    function Lf(e) {
        e = vd(e);
        var h = Xc(e);
        return h && !Td("srcss") ? Sb.reject(Error("Resource capturing for css same origin resources is not enabled")) : h || Td("srxcss") ? ye(e).then(function(m) {
            nd(xe.og(m, Gc()))
        }) : Sb.reject(Error("Resource capturing for css cross origin resources is not enabled"))
    }

    function gg(e, h, m, r) {
        var A = {
            pa: null,
            ja: null,
            ma: null,
            J: mb(h)
        };
        if ("addNode" === e || "updateNode" === e) h.parentStyleSheet && (e = h.parentStyleSheet.ownerNode, A.ja = e ? ub(e) : ub(h.parentStyleSheet)), A.ma = m ? ub(m) : null, A.pa = r ? ub(r) : null;
        return A
    }

    function pe(e, h) {
        fd(e, function(m, r) {
            m = new Kc(vb(m) ? "updateNode" : "addNode", m, r);
            h.add(m)
        })
    }

    function Ac(e) {
        void 0 === e && (e = new WeakMap);
        df = e
    }

    function Kd() {
        df || Ac();
        return df
    }

    function Wd(e, h) {
        var m;
        if (Ga(e, 16))
            if (e.ownerNode && Q(e.ownerNode)) Lf(e).catch(function() {});
            else try {
                if (e.cssRules.length) {
                    var r =
                        new xe(Gc()),
                        A = Gc();
                    pe(e.cssRules, r);
                    Yd((m = {}, m.i = Pi, m.t = Gc() - A, m.d = [
                        ["nodes", r.size]
                    ], m.a = !0, m));
                    h(r)
                }
            } catch (T) {
                e.ownerNode && (Kd().set(e, h), e.ownerNode.addEventListener("load", zd.bind(e)))
            }
    }

    function zd() {
        wd(Pi);
        var e = new xe(Gc());
        try {
            pe(this.cssRules, e)
        } catch (m) {}
        sb(Pi, [
            ["nodes", e.size]
        ], !0);
        var h = Kd().get(this);
        h && h(e)
    }

    function Ld() {
        return "ShadowRoot" in Xb ? wb.dT_.bcv("srsdom") : !1
    }

    function he(e) {
        var h;
        return null !== (h = Rd.find(function(m) {
            return m.host === e
        })) && void 0 !== h ? h : null
    }

    function te(e) {
        if (e =
            he(e)) e = Rd.indexOf(e), 0 <= e && (e = Rd.splice(e, 1)[0]) && e.ld && (Oa(e), pc(e))
    }

    function Md() {
        var e = [];
        wb.dT_.fE(Rd, function(h) {
            for (var m = h.host; m && m.nodeType !== Node.DOCUMENT_NODE;) m = m.parentNode ? m.parentNode : m.host;
            m ? h.ld || tc(h) : e.push(h)
        });
        wb.dT_.fE(e, function(h) {
            te(h.host)
        })
    }

    function ff() {
        wb.dT_.fE(Rd, function(e) {
            e.ld && pc(e)
        })
    }

    function zg(e, h) {
        var m = !h,
            r = h || new xe(Gc());
        wb.dT_.fE(e ? [e] : Rd, function(A) {
            var T = {
                type: "addNode",
                nodeName: "sdw.o",
                nodeValue: mb(A.host)
            };
            A.Uh && (T.J = A.Uh);
            var za = T.J ? (za = mj.get(T.J)) ?
                za.type === T.type && za.nodeName === T.nodeName && za.nodeValue === T.nodeValue : !1 : !1;
            za || (za = new Kf(T), A.Uh = za.J, T.J = za.J, r.add(za), T.J && mj.set(T.J, T))
        });
        m && nd(r)
    }

    function Ye(e, h) {
        var m = !h,
            r = h || new xe(Gc());
        wb.dT_.fE(e ? [e] : Rd, function(A) {
            var T, za = null === (T = A.host.shadowRoot) || void 0 === T ? void 0 : T.adoptedStyleSheets;
            null !== za && void 0 !== za && za.length && (T = wb.dT_.aM(za, function(X) {
                var $a = "";
                if (!vb(X)) {
                    $a = mb(X);
                    var ab = new ac({
                        type: "addNode",
                        nodeName: "css.create",
                        J: $a,
                        nodeValue: "{}"
                    });
                    r.add(ab)
                }
                Wd(X, function(Gb) {
                    Gb.forEach(function(Yc) {
                        r.add(Yc)
                    })
                });
                return $a || ub(X)
            }), A = cf.create("updateAttribute", {
                node: A.host,
                Ib: {
                    name: "adoptedStyleSheets",
                    value: JSON.stringify(T)
                }
            }), r.add(A))
        });
        m && nd(r)
    }

    function pi(e) {
        e = Gc() - e.start;
        return 0 > e || 9E5 <= e
    }

    function fh(e, h) {
        void 0 === h && (h = !1);
        h ? Se.unshift(e) : Se.push(e)
    }

    function uf(e) {
        for (; 0 !== Se.length && (Se[0].Fa === e || pi(Se[0]));) e = Se[0].Fa, Se.shift();
        return e
    }

    function Nf(e, h) {
        if ("number" !== typeof e || Number.isNaN(e) || 0 > e) throw new Df("Invalid beacon param [".concat(h, "=").concat(e, "]"));
        return "".concat(Math.floor(e))
    }

    function gf(e, h, m) {
        return U(this, void 0, void 0, function() {
            var r, A, T, za, X, $a, ab, Gb, Yc, Gd, Vd, qh;
            return S(this, function(Qd) {
                switch (Qd.label) {
                    case 0:
                        T = m.start;
                        za = m.end;
                        X = m.vc;
                        var Ud = za,
                            Zd = X,
                            xd = Nf(T, "start");
                        Ud = Nf(Ud, "end");
                        if (xd > Ud) throw new Df("Invalid beacon param [startTime=".concat(xd, "] > [endTime=").concat(Ud, "]"));
                        Zd = Nf(Zd, "sequenceNumber");
                        xd = "".concat("srBm" === e ? 1 : 3, ",").concat(Gc(), ",").concat(xd, ",").concat(Ud);
                        "srBm" === e ? (xd = $d("".concat(xd, ",").concat(Zd, ",")), Zd = new Uint8Array(xd.length +
                            h.length), Zd.set(xd, 0), Zd.set(h, xd.length), xd = Zd.buffer, Zd = ea(Zd)) : (xd = "".concat(xd, ",").concat(Zd, ",").concat(h), Zd = ea(xd));
                        r = xd;
                        A = Zd;
                        $a = "srBm" === e;
                        Gb = wb.dT_.cB();
                        ce().ar(Gb, r);
                        ce().av(Gb, "vi", Oj);
                        wb.dT_.sB(Gb, !1, $a, (qh = {}, qh.contentType = e, qh.crc = A, qh));
                        Qd.label = 1;
                    case 1:
                        return Qd.H.push([1, 3, , 4]), [4, nl(Gb)];
                    case 2:
                        return ab = Qd.B(), [3, 4];
                    case 3:
                        return Yc = Qd.B(), [2, Sb.reject({
                            code: "Network Error",
                            message: Yc + ""
                        })];
                    case 4:
                        return "string" !== typeof ab ? [2, Sb.reject({
                                code: "Network Error",
                                message: ab.toString()
                            })] :
                            ab.startsWith("FL") ? (Vd = (Gd = ab.match(/\((.+?)\)/)) && Gd[1] ? Gd[1] : "no message", [2, Sb.reject({
                                code: "Cluster Rejection",
                                message: Vd
                            })]) : ab.startsWith("OK") ? [2, Sb.resolve()] : [2, Sb.reject({
                                code: "Unknown Error",
                                message: ab
                            })]
                }
            })
        })
    }

    function Ge(e) {
        return new Sb(function(h) {
            setTimeout(h, e)
        })
    }

    function gh() {
        return U(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return e = gc.Fa + "", Ve("rst", [
                            ["expir", e]
                        ]), [4, Ah(!1)];
                    case 1:
                        return h.B(), uf(e), [4, Kj(!0)];
                    case 2:
                        return h.B(), [2]
                }
            })
        })
    }

    function eg(e, h, m) {
        Ve(e, [
            ["fl", m.substring(0, 50)],
            ["ctype", h]
        ])
    }

    function kf(e) {
        void 0 === e && (e = 0);
        return U(this, void 0, void 0, function() {
            var h, m, r, A, T, za, X, $a;
            return S(this, function(ab) {
                switch (ab.label) {
                    case 0:
                        if (Ug || rc("id")()) return [2];
                        h = uf();
                        if (h === gc.Fa) return [2, gh()];
                        if (0 === Se.length) return [2];
                        Ug = !0;
                        return [4, Ge(Math.min(6E4, 2E3 * e))];
                    case 1:
                        ab.B();
                        m = Se[0];
                        if (!m) return Ug = !1, [2];
                        r = m.type;
                        A = m.data;
                        T = m.start;
                        za = m.end;
                        X = m.vc;
                        ab.label = 2;
                    case 2:
                        return ab.H.push([2, 4, , 5]), [4, gf(r, A, {
                            start: T,
                            end: za,
                            vc: X
                        })];
                    case 3:
                        return ab.B(), ab = Se.indexOf(m), -1 !== ab && Se.splice(ab, 1), Ug = !1, kf(), [3, 5];
                    case 4:
                        $a = ab.B();
                        Ug = !1;
                        if ("Invalid Params" === $a.code) return eg("paramErr", r, $a.message), [2];
                        if ("Cluster Rejection" === $a.code) return eg("stop", r, $a.message), uf(gc.Fa + ""), [2];
                        "Unknown Error" === $a.code && 0 === e && eg("netErr", r, $a.message);
                        kf(e + 1);
                        return [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }

    function Ag(e, h, m) {
        fh({
            type: e,
            data: h,
            start: m.start,
            end: m.end,
            vc: m.vc,
            Fa: gc.Fa + ""
        });
        kf()
    }

    function re() {
        return U(this, void 0, void 0, function() {
            return S(this,
                function(e) {
                    switch (e.label) {
                        case 0:
                            return "active" !== gc.state ? [3, 3] : [4, Pe()];
                        case 1:
                            return e.B(), [4, Oe()];
                        case 2:
                            return e.B(), [3, 4];
                        case 3:
                            Ei = !0, He(), e.label = 4;
                        case 4:
                            return [2]
                    }
                })
        })
    }

    function He() {
        void 0 !== xh && (ld(xh), xh = void 0)
    }

    function g(e) {
        return Math.max(Math.round(e), 0)
    }

    function q(e) {
        void 0 === e && (e = window.location.href);
        return !K(e, yi)
    }

    function F() {
        xi = xi || Sb.resolve();
        xi = xi.then(function() {
            return U(this, void 0, void 0, function() {
                return S(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Pe({
                                gf: !1
                            })];
                        case 1:
                            e.B();
                            if (!q()) return [3, 3];
                            kf();
                            return [4, Oe()];
                        case 2:
                            return e.B(), [3, 4];
                        case 3:
                            Qe("view", {
                                url: document.location.href,
                                Fd: !1,
                                mc: I(),
                                Bd: !0,
                                ra: null
                            }), e.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        })
    }

    function C(e) {
        var h, m;
        return function() {
            for (var r = [], A = 0; A < arguments.length; A++) r[A] = arguments[A];
            h = r;
            m || (m = requestAnimationFrame(function() {
                void 0 !== m && cancelAnimationFrame(m);
                m = void 0;
                return e.apply(void 0, h)
            }))
        }
    }

    function Y(e, h) {
        var m;
        return function() {
            for (var r = [], A = 0; A < arguments.length; A++) r[A] = arguments[A];
            void 0 ===
                m && (e.apply(void 0, r), m = Vg(function() {
                    m = void 0
                }, h))
        }
    }

    function O(e, h, m) {
        m = void 0 === m ? {} : m;
        var r = m.Gf,
            A = void 0 === r ? !1 : r;
        m = m.Kf;
        var T = void 0 === m ? !0 : m,
            za;
        return function() {
            for (var X = [], $a = 0; $a < arguments.length; $a++) X[$a] = arguments[$a];
            void 0 !== za && ld(za);
            void 0 === za && A && (X.push({
                Gf: A
            }), e.apply(void 0, X));
            za = Vg(function() {
                za = void 0;
                T && (X.push({
                    Kf: T
                }), e.apply(void 0, X))
            }, h)
        }
    }

    function nb(e) {
        return e === document ? {
            ra: ub(document.documentElement),
            target: document.scrollingElement || document.documentElement
        } : {
            ra: ub(e),
            target: e
        }
    }

    function Ub(e) {
        if (!pa(e.target)) return Sb.resolve(null);
        var h = nb(e.target);
        e = h.ra;
        h = h.target;
        return ba(h) ? Sb.resolve(Nc(e, h)) : Sb.resolve(null)
    }

    function fc() {
        var e = nb(document),
            h = e.ra;
        e = e.target;
        ba(e) && Pc(Nc(h, e)).catch(function() {})
    }

    function Nc(e, h) {
        return new Od("scroll", {
            ra: e,
            top: g(h.scrollTop),
            left: g(h.scrollLeft)
        })
    }

    function Ze(e) {
        return !pa(e.target) || Ih.yh(e.target) ? Sb.resolve(null) : Sb.resolve(new Od("click", {
            ra: ub(e.target),
            x: g(e.clientX),
            y: g(e.clientY)
        }))
    }

    function Qg(e, h, m) {
        try {
            return {
                error: void 0,
                value: e.apply(h, m)
            }
        } catch (r) {
            return {
                value: void 0,
                error: r
            }
        }
    }

    function wf(e, h, m, r) {
        function A() {
            for (var $a = [], ab = 0; ab < arguments.length; ab++) $a[ab] = arguments[ab];
            ab = !Sh;
            var Gb = Sh;
            Sh = !0;
            var Yc = Qg(r, null, [this, $a]);
            Gb = Qg(Gb ? za : X, this, $a);
            ab && Qg(m, null, [this, $a, Yc.error ? [] : Yc.value, Gb.error ? void 0 : Gb.value]);
            Sh = !1;
            if (Gb.error) throw Gb.error;
            return Gb.value
        }
        void 0 === m && (m = Na);
        void 0 === r && (r = function() {
            return []
        });
        if (!wb.dT_.oHOP(e, h) || "function" !== typeof e[h]) return Na;
        var T = Object.getOwnPropertyDescriptor(e,
            h);
        if (!T) return Na;
        var za = T.value || (T.get ? T.get() : void 0),
            X = za;
        if ("function" !== typeof za || !T.configurable) return Na;
        Object.defineProperty(e, h, {
            configurable: T.configurable,
            enumerable: !!T.enumerable,
            get: function() {
                return A
            },
            set: function($a) {
                X = $a
            }
        });
        return function() {
            var $a = Object.getOwnPropertyDescriptor(e, h);
            $a && $a.configurable && ($a.value || ($a.get ? $a.get() : void 0)) === A && Object.defineProperty(e, h, {
                configurable: $a.configurable,
                enumerable: !!$a.enumerable,
                writable: !0,
                value: X
            })
        }
    }

    function hg(e, h, m, r) {
        Gh &&
            vb(e.ownerNode || e) && (e = new xe(Gc()), h = new Kc(h, m, r), e.add(h), Gh(e))
    }

    function ig(e, h, m, r) {
        "string" === typeof h[0] && "number" === typeof r && hg(e, "addNode", e.cssRules[r], r)
    }

    function lf(e, h) {
        var m = h[0],
            r = h[1];
        h = h[2];
        void 0 === h && (h = e.cssRules.length - 1);
        "string" === typeof m && "string" === typeof r && "number" === typeof h && hg(e, "addNode", e.cssRules[h], h)
    }

    function Of(e, h, m) {
        mf(e, (void 0 === h ? [] : h)[0], m && m[0])
    }

    function jg(e, h, m) {
        h = h[0];
        mf(e, void 0 === h ? 0 : h, m && m[0])
    }

    function mf(e, h, m) {
        Ga(m, 15) && "number" === typeof h && hg(e,
            "removeNode", m)
    }

    function Pf(e, h) {
        void 0 === h && (h = []);
        return [e.cssRules[h[0] || 0]]
    }

    function xf(e, h, m, r) {
        return U(this, void 0, void 0, function() {
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return vb(e.ownerNode || e) ? [4, r] : [2];
                    case 1:
                        return A.B(), Gh && Wd(e, Gh), [2]
                }
            })
        })
    }

    function hh(e) {
        if (vb(e.ownerNode || e)) {
            var h = jb(e.cssRules);
            h.reverse();
            fd(h, function(m) {
                hg(e, "removeNode", m)
            })
        }
        return []
    }

    function Rg() {
        for (; 0 < Si.length;) {
            var e = Si.pop();
            e && e()
        }
        Gh = void 0;
        fd(document.getElementsByTagName("style"), function(h) {
            var m =
                h.sheet;
            m && (h.removeEventListener("load", zd), Kd().delete(m))
        })
    }

    function yf(e) {
        return !pa(e.target) || Ih.yh(e.target) ? Sb.resolve(null) : Sb.resolve(new Od("move", {
            ra: ub(e.target),
            x: g(e.clientX),
            y: g(e.clientY)
        }))
    }

    function Le() {
        var e = document.documentElement;
        var h = document.body;
        e = {
            width: g(window.innerWidth || e.clientWidth || h.clientWidth),
            height: g(window.innerHeight || e.clientHeight || h.clientHeight)
        };
        if (e.height === Hh.height && e.width === Hh.width) return Sb.resolve(void 0);
        Hh = e;
        return Sb.resolve(new Od("resize",
            ta(ta({}, e), {
                ra: null
            })))
    }

    function Fd(e, h) {
        if (e || !Hh) Hh = {
            width: 0,
            height: 0
        };
        Le().then(function(m) {
            m && h(m)
        }).catch(function(m) {
            Hb(m.message)
        });
        gk = Kb(window, "resize", Le, {
            Ka: h,
            Id: C
        })
    }

    function pd(e, h, m, r, A) {
        m = "" + (A ? e.time - m : e.time - r - m);
        m += " ";
        r = "";
        switch (e.type) {
            case "view":
                A = "";
                h ? A = be(e.url, h.url) : e.url && (A = e.url);
                e.mc && e.mc !== e.Fa && (A = A + " " + e.mc);
                e.Bd && (A += " x");
                r += A;
                break;
            case "click":
            case "move":
                e = be(e.ra, h ? h.ra : void 0) + " " + be(e.x, h ? h.x : void 0) + " " + be(e.y, h ? h.y : void 0);
                r += e;
                break;
            case "resize":
                e = be(e.width,
                    h ? h.width : void 0) + " " + be(e.height, h ? h.height : void 0);
                r += e;
                break;
            case "scroll":
                e = be(e.ra, h ? h.ra : void 0) + " " + be(e.top, h ? h.top : void 0) + " " + be(e.left, h ? h.left : void 0);
                r += e;
                break;
            case "input":
                A = be(e.ra, h ? h.ra : void 0), A = A + " " + be(e.duration, h ? h.duration : void 0), A = A + " " + encodeURIComponent(be(e.name, h ? h.name : void 0)), "" !== e.value && (A = A + " " + encodeURIComponent(be(e.value, h ? h.value : void 0))), r += A
        }
        return m + r
    }

    function zf(e, h) {
        e = nf(e);
        var m = [],
            r = "";
        Me(e, function(A, T, za, X) {
            r += T + "^";
            Me(A, function($a, ab, Gb, Yc) {
                if (ab in
                    zi) {
                    var Gd = zi[ab];
                    r += Gd + " ";
                    var Vd = $a[0].time - h,
                        qh;
                    $a.sort(ih);
                    fd($a, function(Qd, Ud) {
                        var Zd = 0 === Ud;
                        Ud = Ud === $a.length - 1;
                        var xd = pd(Qd, qh, h, Vd, Zd);
                        r.length + xd.length > md("msl") && (xd = 0 + (Gb && Zd ? (T + "").length : 0), xd = xd + (Gb && Zd ? 1 : 0) + (Zd ? 1 : 0), xd += Zd ? (Gd + "").length : 0, m.push(r.slice(0, -(xd + 1))), r = "", r += T + "^", r += zi[ab] + " ", Vd = Qd.time - h, xd = pd(Qd, void 0, h, Vd, !0));
                        r += xd;
                        r += Ud ? "" : ">";
                        qh = Qd
                    });
                    r += Yc ? "" : "^"
                }
            });
            r += X ? "" : "|"
        });
        m.push(r);
        return m
    }

    function Me(e, h) {
        var m = 0;
        e.forEach(function(r, A) {
            var T = 0 === m,
                za = ++m === e.size;
            h(r, A, T, za)
        })
    }

    function nf(e) {
        var h = new Map;
        fd(e, function(m) {
            if (null !== m.type) {
                if (!(m.type in zi)) return Hb("Event Serializer: Unrecognized event type");
                var r = m.Fa + "";
                h.has(r) || h.set(r, new Map);
                if (r = h.get(r)) {
                    var A = m.type + "";
                    r.has(A) || r.set(A, []);
                    (r = r.get(A)) && r.push(m)
                }
            }
        });
        return h
    }

    function ih(e, h) {
        return e.time - h.time
    }

    function be(e, h) {
        return void 0 !== e ? e !== h ? e : "~" : ""
    }

    function kg() {
        return U(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return e = {
                            maxSignalLength: md("msl"),
                            transmissionDelay: md("srtd"),
                            isEdgeOrIe: void 0 !== document.documentMode || void 0 !== Xb.MSInputMethodContext
                        }, [4, G("collectorConfig", e)];
                    case 1:
                        return h.B(), [2]
                }
            })
        })
    }

    function lg() {
        return U(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return [4, G("collect", Gc())];
                    case 1:
                        return (e = h.B()) ? [2, wb.dT_.aM(e, function(m) {
                            var r = m.data,
                                A;
                            null === r ? A = new Uint8Array(0) : "string" === typeof r ? A = $d(r) : A = new Uint8Array(r);
                            return {
                                data: A,
                                start: m.from,
                                end: m.to
                            }
                        })] : [2, []]
                }
            })
        })
    }

    function Lh() {
        Qc("beaconRetry");
        var e = Oh(rf);
        e && (wb.dT_.fE(e.split(","), function(h) {
            if (h) {
                var m = h.split("."),
                    r = m[0],
                    A = m[1],
                    T = m[2];
                m = Oh("".concat(ii).concat(h));
                if (r === pg() && m) {
                    var za = m.split(".", 3);
                    r = za[0];
                    var X = za[2];
                    m = m.split("".concat(X, "."))[1];
                    X = wb.dT_.aM([za[1], X, T], function($a) {
                        return parseInt($a)
                    });
                    T = X[0];
                    za = X[1];
                    X = X[2];
                    switch (r) {
                        case "srBm":
                            m = new Uint8Array(wb.dT_.aM(m.split(","), function($a) {
                                return parseInt($a)
                            }));
                            break;
                        case "srTe":
                            break;
                        default:
                            Qc("".concat(ii).concat(h));
                            return
                    }
                    fh({
                        type: r,
                        start: T,
                        end: za,
                        Fa: A,
                        vc: X,
                        data: m
                    }, !0)
                }
                Qc("".concat(ii).concat(h))
            }
        }), Qc(rf), kf())
    }

    function Qf() {
        return U(this, void 0, void 0, function() {
            var e;
            return S(this, function(h) {
                switch (h.label) {
                    case 0:
                        return [4, lg()];
                    case 1:
                        return e = h.B(), ke(e), Ne(), [2]
                }
            })
        })
    }

    function ke(e) {
        e && e.length && wb.dT_.fE(e, function(h) {
            h.data && h.data.length && (Ag("srBm", h.data, {
                start: h.start,
                end: h.end,
                vc: Ae.Ab
            }), Ae.Ab++)
        })
    }

    function Ne() {
        ed && 0 < ed.size && (wb.dT_.fE(ed.Ha(), function(e) {
            Ag("srTe", e, {
                start: ed.start,
                end: ed.end,
                vc: Ae.sg
            });
            Ae.sg++
        }), Zf(!1));
        ed = new ji
    }

    function Oe() {
        return U(this,
            void 0, void 0,
            function() {
                var e;
                return S(this, function(h) {
                    switch (h.label) {
                        case 0:
                            if (!gc.Nf || !q() || !gc.enabled) return [2];
                            e = Gc() + "";
                            ed = new ji;
                            ed.add(new Od("view", {
                                ra: null,
                                url: document.location.href,
                                Fd: !1,
                                mc: I()
                            }, e));
                            Ya("viewId", function() {
                                Ae.Ab = 1;
                                Ae.sg = 1
                            });
                            wb.dT_.bcv("srfirrbv") && G("reset");
                            return [4, Ge(1)];
                        case 1:
                            return h.B(), gc.Fa = e, V(), xb(), Ac(), Pg = new WeakMap, ng(!0), Qi = md("srvi") || 0, 0 !== Qi && void 0 === xh && (Ei = !1, xh = Vg(re, 6E4 * Math.max(Qi, fk))), [2]
                    }
                })
            })
    }

    function mg(e, h) {
        void 0 === h && (h = []);
        if (e.size ||
            h.length) id(e), wb.dT_.fE(h, function(m) {
            Wd(m, id)
        })
    }

    function ng(e) {
        void 0 === e && (e = !1);
        if (!Be && gc.enabled && q()) {
            ed && 0 !== ed.size || (ed = new ji);
            try {
                Lh()
            } catch (h) {}
            bb(function(h) {
                ed.add(h)
            });
            y(mg);
            jd(mg);
            "function" === typeof id && (Gh = id, 0 === Si.length && Si.push(wf(CSSStyleSheet.prototype, "insertRule", ig), wf(CSSStyleSheet.prototype, "addRule", lf), wf(CSSStyleSheet.prototype, "removeRule", jg, Pf), wf(CSSStyleSheet.prototype, "deleteRule", Of, Pf), wf(CSSStyleSheet.prototype, "replace", xf, hh), wf(CSSStyleSheet.prototype,
                "replaceSync", xf, hh)));
            Bj = Kb(document, "click", Ze, {
                Ka: Pc
            });
            sj = Kb(document, "mousemove", yf, {
                Ka: Pc,
                Id: C
            });
            pb() || Fd(e, Pc);
            Ri = Kb(document, "scroll", Ub, {
                Ka: Pc,
                Id: C,
                Mf: !0
            });
            fc();
            Tb(Pc);
            Ld() && (Md(), zg());
            pb() || (Yg = Dk(Qf, 1E3));
            gc.state = "active";
            Be = !0
        }
    }

    function Pe(e) {
        e = (void 0 === e ? {} : e).gf;
        var h = void 0 === e ? !0 : e;
        return U(this, void 0, void 0, function() {
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return He(), [4, Cg({
                            gf: h
                        })];
                    case 1:
                        return m.B(), xb(), "stopped" === gc.state ? [2] : [4, G("reset")];
                    case 2:
                        return m.B(),
                            gc.state = "stopped", [2]
                }
            })
        })
    }

    function jh() {
        Be && va()
    }

    function Cg(e) {
        e = void 0 === e ? {} : e;
        var h = e.bh,
            m = void 0 === h ? !0 : h;
        e = e.gf;
        var r = void 0 === e ? !0 : e;
        return U(this, void 0, void 0, function() {
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        if (!Be) return [2];
                        if (A = document.doctype ? (new XMLSerializer).serializeToString(document.doctype) : null) A = {
                            type: "addNode",
                            nodeName: "doc.doctype",
                            nodeValue: A,
                            ja: ub(document.documentElement)
                        }, A = new Kf(A), nd(xe.og([A], wb.dT_.nw()));
                        Yi(Yg);
                        Yg = void 0;
                        A = document.documentElement;
                        var T = {
                            bh: m
                        };
                        T = (void 0 === T ? {} : T).bh;
                        Cf && ((void 0 === T || T) && va(), Cf.disconnect(), lh && lh.disconnect(), Bd(A), Ld() && wb.dT_.fE(Rd, Oa), kd(), Cf = Jg = null);
                        Rg();
                        Jb(document, "click", Bj);
                        Jb(document, "mousemove", sj);
                        pb() || Jb(window, "resize", gk);
                        Jb(document, "scroll", Ri);
                        Jb(document, "focus blur", $e);
                        Ld() && ff();
                        gc.state = "paused";
                        Be = !1;
                        return pb() || !r ? [3, 2] : [4, Qf()];
                    case 1:
                        A.B(), A.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function Qe(e, h) {
        if (Be) ed.add(new Od(e, h));
        else {
            var m = Gc() + "";
            ed = new ji;
            ed.add(new Od(e, h, m))
        }
        Ne()
    }

    function Mh(e) {
        return U(this,
            void 0, void 0,
            function() {
                var h;
                return S(this, function(m) {
                    switch (m.label) {
                        case 0:
                            return [4, da("detectSubframeViewIdsChange", e)];
                        case 1:
                            return h = m.B(), [2, Rf(h)]
                    }
                })
            })
    }

    function Re(e) {
        return U(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return H() !== e ? [2, !0] : [4, da("detectSubframeViewIdsChange", e)];
                    case 1:
                        return h = m.B(), [2, Rf(h)]
                }
            })
        })
    }

    function Rf(e) {
        return e && e.length ? e.some(function(h) {
            return h
        }) : !1
    }

    function Sf() {
        var e = Ma();
        e ? gc.enabled = "enabled" === e : (gc.enabled =
            jc.Pb("srad"), gc.enabled ? ia("enabled") : We("optin"))
    }

    function le(e) {
        return U(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        h = e;
                        switch (h) {
                            case "active":
                                return [3, 1];
                            case "paused":
                                return [3, 2];
                            case "stopped":
                                return [3, 4];
                            case "ended":
                                return [3, 4]
                        }
                        return [3, 6];
                    case 1:
                        return m = gc.Fa + "", H() !== m && V(), ng(), [3, 7];
                    case 2:
                        return [4, Cg()];
                    case 3:
                        return m.B(), [3, 7];
                    case 4:
                        return [4, Cg({
                            bh: !1
                        })];
                    case 5:
                        return m.B(), xb(), [3, 7];
                    case 6:
                        Hb("Invalid record state", {
                            state: e
                        }), m.label = 7;
                    case 7:
                        return [2]
                }
            })
        })
    }

    function Dg(e) {
        return U(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return gc.Nf = e, "ended" !== gc.state && gc.enabled ? e && "stopped" === gc.state ? [4, Oe()] : [3, 2] : [2];
                    case 1:
                        return m.B(), [2];
                    case 2:
                        return e && H() !== gc.Fa ? [4, Pe()] : [3, 5];
                    case 3:
                        return m.B(), [4, Oe()];
                    case 4:
                        return m.B(), [2];
                    case 5:
                        return e ? Ei ? [4, Pe()] : [3, 8] : [3, 14];
                    case 6:
                        return m.B(), [4, Oe()];
                    case 7:
                        return m.B(), [3, 13];
                    case 8:
                        return [4, Mh(H())];
                    case 9:
                        return (h = m.B()) ? [4, Pe()] : [3, 12];
                    case 10:
                        return m.B(), [4, Oe()];
                    case 11:
                        return m.B(), [3, 13];
                    case 12:
                        ng(), m.label = 13;
                    case 13:
                        return [3, 16];
                    case 14:
                        return [4, Cg()];
                    case 15:
                        m.B(), m.label = 16;
                    case 16:
                        return [2]
                }
            })
        })
    }

    function Af(e) {
        return U(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        return h = gc.state, "stopped" === h || "ended" === h ? [3, 2] : [4, Pe()];
                    case 1:
                        m.B(), m.label = 2;
                    case 2:
                        return "active" === h && e ? [4, Oe()] : [3, 4];
                    case 3:
                        m.B(), m.label = 4;
                    case 4:
                        return e || (gc.state = "ended", jc.vi(function A() {
                            return U(this,
                                void 0, void 0,
                                function() {
                                    return S(this, function(T) {
                                        switch (T.label) {
                                            case 0:
                                                jc.Hj(A);
                                                if (!gc.enabled || "ended" !== gc.state) return [2];
                                                gc.state = "stopped";
                                                return gc.Nf ? [4, Oe()] : [3, 2];
                                            case 1:
                                                T.B(), T.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                                })
                        })), [2]
                }
            })
        })
    }

    function Sg() {
        return U(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, new Sb(function(h, m) {
                            var r = wb.dT_.st(function() {
                                m(Error("TIMEOUT initializing worker in ui thread"))
                            }, 5E3);
                            dc("workerLoaded", function() {
                                wb.dT_.ct(r);
                                h()
                            });
                            Ff.hc(self,
                                new vg({
                                    I: "worker",
                                    query: "initialize"
                                }), {
                                    origin: location.href
                                })
                        })];
                    case 1:
                        return e.B(), [2]
                }
            })
        })
    }

    function Bf() {
        return U(this, void 0, void 0, function() {
            var e, h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        e = location.origin, h = setInterval(function() {
                            Ff.hc(self, new vg({
                                I: "worker",
                                query: "source-req"
                            }), {
                                origin: e
                            })
                        }, 100), m.label = 1;
                    case 1:
                        return m.H.push([1, , 3, 4]), [4, new Sb(function(r, A) {
                            var T = wb.dT_.st(function() {
                                    A(Error("TIMEOUT getting worker source"));
                                    Ff.Hd(self, za)
                                }, 5E3),
                                za = Ff.Gd(self, function(X, $a,
                                    ab) {
                                    "worker" === X.I && "source" === X.query && X.result && (wb.dT_.ct(T), ab(), $a.origin === e ? r(X.result + "") : A(Error("Received message from wrong origin")))
                                })
                        })];
                    case 2:
                        return [2, m.B()];
                    case 3:
                        return clearInterval(h), [7];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function qi(e) {
        var h = jc.Ji(e, void 0);
        return h ? Sb.race([new Sb(function(m, r) {
            h.onmessage = function() {
                m(h)
            };
            h.onerror = function(A) {
                r(Error(A.message))
            }
        }), new Sb(function(m, r) {
            wb.dT_.st(function() {
                r(Error("TIMEOUT loading worker as a thread"))
            }, 5E3)
        })]) : Sb.reject("failed to load worker as thread")
    }

    function kh() {
        return U(this, void 0, void 0, function() {
            var e, h, m;
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, Bf()];
                    case 1:
                        return e = r.B(), h = jc.Tj(e, "text/javascript"), [4, qi(h)];
                    case 2:
                        return m = r.B(), Ff.hc(self, new vg({
                            I: "worker",
                            query: "initialized"
                        }), {
                            origin: location.href
                        }), [2, m]
                }
            })
        })
    }

    function Nh() {
        return U(this, void 0, void 0, function() {
            var e, h, m, r, A, T, za;
            return S(this, function(X) {
                switch (X.label) {
                    case 0:
                        e = jc.Xi("D", void 0);
                        h = [];
                        if (!jc.Ef("D") || !jc.Pb("srbw")) return [3, 4];
                        X.label = 1;
                    case 1:
                        return X.H.push([1,
                            3, , 4
                        ]), [4, kh()];
                    case 2:
                        return (m = X.B()) || h.push("loadWorkerAsBlob returned void"), [2, {
                            yf: m,
                            Me: h
                        }];
                    case 3:
                        return r = X.B(), h.push("loadWorkerAsBlob failed: ".concat(r.message)), [3, 4];
                    case 4:
                        if (Gg(e)) return [3, 8];
                        X.label = 5;
                    case 5:
                        return X.H.push([5, 7, , 8]), [4, qi(e)];
                    case 6:
                        return (m = X.B()) || h.push("loadWorkerAsThread returned void"), [2, {
                            yf: m,
                            Me: h
                        }];
                    case 7:
                        return A = X.B(), h.push("loadWorkerAsThread failed: ".concat(A.message)), [3, 8];
                    case 8:
                        if (jc.Ef("D")) return h.push("worker injected, return void"), [2, {
                            yf: void 0,
                            Me: h
                        }];
                        X.label = 9;
                    case 9:
                        return X.H.push([9, 11, , 12]), [4, pl(e, {
                            async: !0
                        })];
                    case 10:
                        return X.B(), [3, 12];
                    case 11:
                        return T = X.B(), h.push("injectScript failed: ".concat(T.message)), [3, 12];
                    case 12:
                        if (!jc.Pb("srbw")) return [3, 16];
                        X.label = 13;
                    case 13:
                        return X.H.push([13, 15, , 16]), [4, kh()];
                    case 14:
                        return (m = X.B()) || h.push("loadWorkerAsBlob-2 returned void"), [2, {
                            yf: m,
                            Me: h
                        }];
                    case 15:
                        return za = X.B(), h.push("loadWorkerAsBlob-2 failed: ".concat(za.message)), [3, 16];
                    case 16:
                        return [2, {
                            yf: void 0,
                            Me: h
                        }]
                }
            })
        })
    }

    function Tg() {
        if (document.hasFocus()) return null;
        Ka.pending && (Ka.pending.resolve(null), Ka.pending = null);
        return If ? If = !1 : null
    }

    function Kh(e, h) {
        e = void 0 === h ? {
            Gf: !0,
            Kf: void 0
        } : h;
        h = e.Kf;
        return e.Gf && !If ? If = !0 : h && If ? If = !1 : null
    }

    function $l(e) {
        return "visible" === document.visibilityState ? Ka(e) : Tg()
    }

    function gl() {
        Di(!0)
    }

    function Bk(e) {
        Kb(document, Jj.join(" "), function(h) {
            return h
        }, {
            Ka: e,
            Id: function(h) {
                return Y(h, 1E3)
            }
        });
        dc("interaction", e)
    }

    function Ak(e) {
        document.hasFocus() && (If = !0, e(If));
        Kb(document, "mouseenter", Ka, {
            Ka: e
        });
        Kb(document, "mouseleave", Tg, {
            Ka: e
        });
        Kb(document, "visibilitychange", $l, {
            Ka: e
        });
        Kb(window, "focus", Ka, {
            Ka: e
        });
        Kb(window, "blur", Tg, {
            Ka: e
        });
        Kb(document, Jj.join(" "), Kh, {
            Ka: e,
            Id: function(h) {
                return O(h, 1E4, {
                    Gf: !0,
                    Kf: !0
                })
            }
        });
        dc("interaction", gl)
    }

    function il(e) {
        return fg("visit").then(function(h) {
            wb.dT_.fE(h, function(m) {
                m.visitId !== e && Bg("visit", m.key)
            })
        })
    }

    function jl() {
        return Xb.indexedDB ? Ie().then(function() {
            var e, h = (e = {}, e[vh] = "v", e.value = 1, e);
            Je("global", h);
            il(wb.dT_.gVI())
        }) : Sb.reject(Error("Indexeddb not supported in the browser"))
    }

    function hl() {
        jl().catch(function() {});
        th = new Map
    }

    function kl() {
        var e;
        if (Ld()) {
            var h = null === (e = Object.getOwnPropertyDescriptor(ShadowRoot.prototype, "adoptedStyleSheets")) || void 0 === e ? void 0 : e.set;
            if (h) {
                Object.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", {
                    set: function() {
                        for (var r = [], A = 0; A < arguments.length; A++) r[A] = arguments[A];
                        h.apply(this, r);
                        "active" === gc.state && (r = he(this.host)) && Ye(r)
                    }
                });
                var m = Element.prototype.attachShadow;
                Element.prototype.attachShadow = function() {
                    for (var r = [], A = 0; A < arguments.length; A++) r[A] = arguments[A];
                    r = m.apply(this, r);
                    var T = this;
                    setTimeout(function() {
                        jd(mg, T)
                    }, 600);
                    return r
                }
            }
        }
    }

    function Zh() {
        Th.initialize();
        dc("iframebootstrap", function(e, h) {
            e = h[0];
            h = h[1];
            var m = "active" === gc.state;
            Mg({
                Lj: !0,
                Th: [
                    ["iframe", "boot"]
                ]
            });
            var r = jb(document.getElementsByTagName("iframe"));
            cc();
            for (var A = 0; A < r.length; A++) {
                var T = r[A];
                if (T.contentWindow) {
                    var za = Wf.get(T.contentWindow);
                    za && Tj.set(za, T)
                }
            }
            if (r = Tj.get(this)) try {
                if (r.getAttribute("src") !== e) {
                    var X = cf.create("updateAttribute", {
                        node: r,
                        Ib: {
                            name: "src",
                            value: e
                        }
                    });
                    if (X)
                        if (m) {
                            var $a = new xe(h, jc.Pb("srficros"));
                            $a.add(X);
                            id($a)
                        } else Th.add(X);
                    else r.setAttribute("data-dt-last-src", e)
                }
            } catch (ab) {}
        })
    }

    function $h() {
        return U(this, void 0, void 0, function() {
            var e, h, m, r, A, T, za, X, $a;
            return S(this, function(ab) {
                switch (ab.label) {
                    case 0:
                        return m = [], [4, Pb()];
                    case 1:
                        return r = ab.B(), A = r.Df, T = r.Cf, A ? [4, gb()] : (h = ["initializeBridge failed: ".concat(T)], Ve("boot", sa([
                            ["worker", "0"],
                            ["srwo", "1"]
                        ], ej(h), !0)), [2, !1]);
                    case 2:
                        return ab.B(), pb() ? [3, 4] : [4, Nh()];
                    case 3:
                        return $a = ab.B(),
                            e = $a.yf, h = $a.Me, [3, 5];
                    case 4:
                        h = ["SubFrame Environment detected"], ab.label = 5;
                    case 5:
                        return e ? [4, Lb(e)] : [3, 7];
                    case 6:
                        return ab.B(), [3, 8];
                    case 7:
                        h.push("worker didn't load"), ab.label = 8;
                    case 8:
                        if (!e && !pb() && jc.Pb("srwo")) return We("nowk", [
                            ["nowkreason", "nowkui"]
                        ]), Ve("boot", sa([
                            ["worker", "0"],
                            ["srwo", "0"]
                        ], ej(h), !0)), [2, !1];
                        if (e || pb()) return [3, 12];
                        m.push(["srwo", "1"]);
                        ab.label = 9;
                    case 9:
                        return ab.H.push([9, 11, , 12]), [4, Sg()];
                    case 10:
                        return ab.B(), [3, 12];
                    case 11:
                        return za = ab.B(), h.push("initialiseWorkerInUiThread failed: ".concat(za)),
                            Ve("boot", sa([
                                ["worker", "0"],
                                ["srwo", "1"],
                                ["initui", "1"]
                            ], ej(h), !0)), We("nowk", [
                                ["nowkreason", "flwkui"]
                            ]), [2, !1];
                    case 12:
                        return pb() || (m.push(["srad", jc.Pb("srad") ? "1" : "0"]), Ve("boot", m)), [4, tb()];
                    case 13:
                        ab.B();
                        hl();
                        X = jc.Dd("srms");
                        Vf = new Cb(X);
                        Mb();
                        fj();
                        Ob();
                        pf(function(Gb, Yc, Gd, Vd) {
                            gc.ci && gc.enabled && Gb.av(Vd, "sr", 1)
                        });
                        try {
                            Nb = B(jc.Dd("srre")), ue.initialize(), Zc(), Yb = !0
                        } catch (Gb) {
                            Yb = !1
                        }
                        Ek();
                        return [2, !0]
                }
            })
        })
    }

    function ej(e) {
        return wb.dT_.aM(e, function(h, m) {
            return ["msg_".concat(m), h]
        })
    }

    function fj() {
        dc("detectSubframe",
            function(e, h) {
                e = wa();
                var m = e.postfix === h.postfix,
                    r = e.version === h.version;
                return (!(e.ac || h.ac) || e.app === h.app) && m && r
            });
        dc("mutations", function(e, h) {
            return U(this, void 0, void 0, function() {
                var m;
                return S(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return (m = xe.decode(h)) ? [4, id(m, {
                                context: e
                            })] : [2];
                        case 1:
                            return r.B(), [2]
                    }
                })
            })
        });
        dc("events", function(e, h) {
            return U(this, void 0, void 0, function() {
                var m;
                return S(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return (m = Od.decode(h)) ? [4, Pc(m, {
                                context: e
                            })] : [2];
                        case 1:
                            return r.B(), [2]
                    }
                })
            })
        });
        dc("sendResource", function(e, h, m, r) {
            return Ke(h, m, r)
        });
        dc("SHA-256", function(e, h) {
            return Zb(h)
        });
        dc("detectSubframeViewIdsChange", function(e, h) {
            return Re(h)
        })
    }

    function ah() {
        return U(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return Sf(), [4, kg()];
                    case 1:
                        return e.B(), wb.dT_.aNVL(function(h, m, r, A) {
                            Mg({
                                Th: [
                                    ["visit", A || ""]
                                ]
                            });
                            ki = !1;
                            return Af(m)
                        }), rc("ael")(window, "beforeunload", function() {
                            for (; 0 !== Se.length;) {
                                var h = Se.shift();
                                if (!h) break;
                                var m = h.Fa,
                                    r = h.type,
                                    A = h.data,
                                    T = h.start,
                                    za = h.end;
                                h = h.vc;
                                m = "".concat(pg(), ".").concat(m, ".").concat(h);
                                h = Oh(rf);
                                if (!Eg(rf, h ? "".concat(h, ",").concat(m) : m, !1)) break;
                                if (!Eg("".concat(ii).concat(m), "".concat(r, ".").concat(T, ".").concat(za, ".").concat(A), !1)) break
                            }
                            Mg()
                        }), Cc() ? [3, 3] : [4, ll()];
                    case 2:
                        e.B(), e.label = 3;
                    case 3:
                        return Ak(Di), [2]
                }
            })
        })
    }

    function Mg(e) {
        var h = void 0 === e ? {} : e;
        e = h.Lj;
        e = void 0 === e ? !1 : e;
        h = h.Th;
        h = void 0 === h ? [] : h;
        (!e && !ki || e && !zj) && We("idle", h)
    }

    function Di(e) {
        ki = !0;
        zj = e;
        return Dg(e)
    }

    function Ek() {
        wb.dT_.st(function() {
            ("active" ===
                gc.state || "paused" === gc.state) && (Td("srcss") || Td("srxcss") || Aa()) && wb.dT_.disE({
                kind: "CSS_TRANSMISSION_STARTED",
                detail: void 0
            });
            Ek()
        }, 5E3)
    }

    function am() {
        return U(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, $h()];
                    case 1:
                        if (!e.B()) return [2];
                        kl();
                        pb() || Zh();
                        if (!pb()) return [3, 3];
                        Bk(function() {
                            return fa("interaction")
                        });
                        return [4, le(gc.state)];
                    case 2:
                        return e.B(), Ya("state", le), of (window, "beforeunload", jh), [2];
                    case 3:
                        return [4, Ge(0)];
                    case 4:
                        return e.B(), Cc() ? [4,
                            ll()
                        ] : [3, 6];
                    case 5:
                        return e.B(), [3, 8];
                    case 6:
                        return [4, ah()];
                    case 7:
                        e.B(), e.label = 8;
                    case 8:
                        return [2]
                }
            })
        })
    }

    function ll() {
        return U(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, new Sb(function(h) {
                            Gk(function(m) {
                                m();
                                h()
                            })
                        })];
                    case 1:
                        return e.B(), [2]
                }
            })
        })
    }

    function Fk(e, h) {
        void 0 === e && (e = !1);
        void 0 === h && (h = !1);
        return U(this, void 0, void 0, function() {
            var m, r;
            return S(this, function(A) {
                switch (A.label) {
                    case 0:
                        return (m = void 0 !== yg) ? [4, yg] : [3, 2];
                    case 1:
                        m = A.B(), A.label =
                            2;
                    case 2:
                        if (m) return [2, !0];
                        r = e || "enabled" === Ma();
                        yg = function() {
                            return U(this, void 0, void 0, function() {
                                var T, za, X, $a, ab;
                                return S(this, function(Gb) {
                                    switch (Gb.label) {
                                        case 0:
                                            return T = Gc(), void 0 !== yg ? [3, 2] : [4, am()];
                                        case 1:
                                            Gb.B(), Gb.label = 2;
                                        case 2:
                                            if (pb()) return za = window.location.href, fa("iframebootstrap", [za, T]), dc("iframeLocation", function() {
                                                return window.location.href
                                            }), [2, !0];
                                            e && Ve("conf", [
                                                ["iCC", "1"]
                                            ]);
                                            X = jc.Ef("Q");
                                            $a = ol();
                                            ab = r || $a.$h;
                                            return X && ab ? [3, 4] : [4, Ah(!1)];
                                        case 3:
                                            return Gb.B(), Ve("conf", [
                                                ["module", X ? "1" : "0"],
                                                ["excluded", ab ? "0" : "1"],
                                                ["srsr", $a.mh ? "".concat($a.mh) : "unknown"],
                                                ["vsn", $a.gi ? "".concat($a.gi) : "unknown"],
                                                ["appid", $a.appId || "unknown"]
                                            ]), ab || We("sout"), [2, !1];
                                        case 4:
                                            return Cc() ? [4, ah()] : [3, 6];
                                        case 5:
                                            Gb.B(), Gb.label = 6;
                                        case 6:
                                            if (h) return [3, 8];
                                            Ya("viewRules", function(Yc) {
                                                yi = B(Yc);
                                                F()
                                            });
                                            wb.dT_.addE("VIEW_STABLE", F);
                                            yi = B(gc.Yj + "");
                                            return q() ? [3, 8] : [4, Pe({
                                                gf: !1
                                            })];
                                        case 7:
                                            Gb.B(), Qe("view", {
                                                ra: null,
                                                url: document.location.href,
                                                Fd: !1,
                                                mc: I(),
                                                Bd: !0
                                            }), Gb.label = 8;
                                        case 8:
                                            return gc.ci = !0,
                                                Gk(function() {
                                                    return U(this, void 0, void 0, function() {
                                                        return S(this, function(Yc) {
                                                            switch (Yc.label) {
                                                                case 0:
                                                                    if (!gc.enabled || jc.Ef("Q")) return [2];
                                                                    Ve("confupd", [
                                                                        ["module", "0"]
                                                                    ]);
                                                                    return [4, Ah(!1)];
                                                                case 1:
                                                                    return Yc.B(), [2]
                                                            }
                                                        })
                                                    })
                                                }), [2, !0]
                                    }
                                })
                            })
                        }();
                        return [2, yg]
                }
            })
        })
    }

    function Kj(e, h) {
        void 0 === e && (e = !1);
        void 0 === h && (h = !1);
        return U(this, void 0, void 0, function() {
            var m;
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, Fk(e, h)];
                    case 1:
                        m = r.B();
                        if (!m || gc.enabled || "ended" === gc.state) return [2];
                        gc.enabled = !0;
                        ia("enabled");
                        return "stopped" === gc.state && gc.Nf ? [4, Oe()] : [3, 3];
                    case 2:
                        r.B(), r.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function Ah(e) {
        return U(this, void 0, void 0, function() {
            var h;
            return S(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (!gc.enabled || "ended" === gc.state) return [2];
                        h = e;
                        void 0 === h && (h = 1E3 < Gc() - nh);
                        gc.enabled = !1;
                        ia("disabled");
                        return "stopped" === gc.state ? [3, 2] : [4, Pe({
                            gf: h
                        })];
                    case 1:
                        m.B(), m.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function Lj(e) {
        return pb() ? (console.log("Enable/disable session replay apis should be called on the top frame"), !1) : "srel" === e && "ended" === gc.state ? (console.log('Session was already ended, possibly "dtrum.endSession()" was called previously'), !1) : !0
    }

    function bm() {
        nh = Gc();
        bf.srel = function(e, h) {
            void 0 === e && (e = !1);
            void 0 === h && (h = !1);
            if (!Lj("srel")) return Sb.resolve();
            Ve("optin", [
                ["iCC", e ? "1" : "0"]
            ]);
            return Kj(e, h)
        };
        bf.srdl = function() {
            if (!Lj("srdl")) return Sb.resolve();
            Ve("optout");
            gc.enabled && "ended" !== gc.state && We("optout");
            return Ah()
        };
        bf.srrcdm = function() {
            Lj("srrcdm") && (Dc("dtsrRCDM", "true"), Zc())
        }
    }

    function rc(e) {
        return void 0 !==
            Uh[e] ? Uh[e] : function() {
                for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
                Hb("Intercepted call to missing core api ".concat(e), h)
            }
    }

    function ml() {
        oh = !1;
        af = new Set;
        Ce = new Map;
        jc.ri(function(e, h, m) {
            var r = e.id;
            return U(this, void 0, void 0, function() {
                var A, T, za;
                return S(this, function(X) {
                    switch (X.label) {
                        case 0:
                            return Ce.has(r) && (A = Ce.get(r), T = A[0], za = A[1], "success" === h ? T(m) : za(m), Ce.delete(r)), "success" === h ? [3, 3] : "fail" !== h || 429 !== m ? [3, 2] : [4, Ah(!1)];
                        case 1:
                            X.B(), X.label = 2;
                        case 2:
                            return [2];
                        case 3:
                            return [4,
                                Mj()
                            ];
                        case 4:
                            X.B();
                            if ("string" !== typeof m) X = [3, 6];
                            else {
                                var $a = Fi(m);
                                X = "disabled" === $a.parameters.sr;
                                if ("OK" === $a.status) {
                                    var ab = ($a = $a.parameters.error) && X,
                                        Gb = ab ? "k-err" : null;
                                    ab = ab ? [
                                        ["errmsg", $a]
                                    ] : null;
                                    X && "Unexpected content-type request header" === $a && (Gb = "k-mime", ab = null);
                                    X = $a || X ? ai(ab, Gb, $a || (X ? "disabled in config" : "")) : Sb.resolve()
                                } else $a.status ? (Gb = $a.I, Gb = ($a = $a.parameters.error) || Gb, ab = null, X && ($a && (ab = "k-err"), "Unexpected content-type request header" === $a && (ab = "k-mime"), Gb.includes("SessionReplayDisabled") &&
                                    (ab = "k-lic")), "Record and Replay disabled" === $a && (ab = "k-emg"), Gb.includes("minJSAgentVersionForSR") && (ab = "k-min"), X = ai("k-err" === ab ? [
                                    ["errmsg", $a]
                                ] : null, ab, Gb)) : X = ai(null, "k-ires");
                                X = [4, X]
                            }
                            return X;
                        case 5:
                            X.B(), X.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        })
    }

    function Mj() {
        return U(this, void 0, void 0, function() {
            return S(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Ge(0)];
                    case 1:
                        return e.B(), oh = !0, af.forEach(function(h) {
                            h(function() {
                                return af.delete(h)
                            })
                        }), [2]
                }
            })
        })
    }

    function Fi(e) {
        var h = e.match(Ui);
        if (h) {
            e = h[1];
            var m = h[2];
            h = wb.dT_.red(h[3].split("|"), function(r, A) {
                A = A.split("=");
                r[A[0].toLowerCase()] = A[1];
                return r
            }, {});
            return {
                status: e,
                I: m,
                parameters: h
            }
        }
        return {
            status: "",
            I: "",
            parameters: {}
        }
    }

    function ai(e, h, m) {
        void 0 === m && (m = "unknown");
        return U(this, void 0, void 0, function() {
            return S(this, function(r) {
                switch (r.label) {
                    case 0:
                        return gc.enabled && h && We(h, e || void 0), [4, Ah(!1)];
                    case 1:
                        return r.B(), Ve("stop", [
                            ["kill", m]
                        ]), [2]
                }
            })
        })
    }

    function Gk(e) {
        af.add(e);
        oh && e(function() {
            return af.delete(e)
        })
    }

    function nl(e) {
        return new Sb(function(h,
            m) {
            Ce.set(e.id, [h, m])
        })
    }

    function Cc() {
        return jc.Pb("srdinitrec")
    }

    function Dc(e, h, m) {
        void 0 === m && (m = !0);
        jc.Rj(e, h, m)
    }

    function Hk(e, h) {
        void 0 === h && (h = !0);
        return jc.pj(e, h)
    }

    function ol() {
        var e = jc.Ph("srsr"),
            h = jc.Ci(),
            m = jc.Dd("app");
        return e && "number" === typeof h ? {
            appId: m,
            $h: h % 1E5 <= e,
            mh: e,
            gi: h
        } : {
            appId: m,
            $h: !1,
            mh: e
        }
    }

    function pl(e, h) {
        h = (void 0 === h ? {} : h).async;
        var m = void 0 === h ? !0 : h;
        return new Sb(function(r, A) {
            jc.gj(e, m, r, A)
        })
    }

    function Ve(e, h) {
        void 0 === h && (h = []);
        rc("id")() || jc.Ii("_sr_", sa([
            ["type", e]
        ], h, !0), !1, jc.now(), 1)
    }

    function We(e, h) {
        void 0 === h && (h = []);
        var m = rc("id")();
        var r = rc("iAEPOO")(),
            A = rc("syn");
        if (!wb.dT_.bcv("nosr") || !r || A || m) m = !1;
        else {
            m = Oj;
            r = (Oh(Xi) || "").split("|");
            A = r[1];
            var T = yj[e] || 0;
            r[0] !== m || (A ? +A : 0) < T ? (Eg(Xi, m + "|" + T), m = !0) : m = !1
        }
        m && wb.dT_.cAE("_nosr_", sa([
            ["r", e]
        ], h, !0), !1, wb.dT_.nw(), "idle" === e ? 0 : 1)
    }
    var Sb = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        wb = "undefined" !== typeof window ? window : self,
        Xb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        bd = Xb,
        De;
    (function(e) {
        e[e.ENABLED = 0] = "ENABLED";
        e[e.DISABLED = 1] = "DISABLED";
        e[e.DELAYED = 2] = "DELAYED"
    })(De || (De = {}));
    var Tc;
    (function(e) {
        e[e.BLOCKED_BY_PERCENTAGE = 0] = "BLOCKED_BY_PERCENTAGE";
        e[e.ENABLED = 1] = "ENABLED";
        e[e.BLOCKED = 2] = "BLOCKED"
    })(Tc || (Tc = {}));
    var bc;
    (function(e) {
        e[e.NONE = 1] = "NONE";
        e[e.OFF = 2] = "OFF";
        e[e.PERFORMANCE = 3] = "PERFORMANCE";
        e[e.BEHAVIOR = 4] = "BEHAVIOR"
    })(bc || (bc = {}));
    var yc;
    (function(e) {
        e.OVERLOAD_PREVENTION = "ol";
        e.PRIVACY_STATE = "prv";
        e.SERVER_ID = "srv";
        e.SESSION_ID = "sn"
    })(yc || (yc = {}));
    var ci;
    (function(e) {
        e.DYNATRACE_MOBILE = "dynatraceMobile";
        e.MOBILE_AGENT = "MobileAgent"
    })(ci || (ci = {}));
    var Nj;
    (function(e) {
        e[e.ARRAY = 0] = "ARRAY";
        e[e.BOOLEAN = 1] = "BOOLEAN";
        e[e.NUMBER = 2] = "NUMBER";
        e[e.STRING = 3] = "STRING";
        e[e.FUNCTION = 4] = "FUNCTION";
        e[e.OBJECT = 5] = "OBJECT";
        e[e.DATE = 6] = "DATE";
        e[e.ERROR = 7] = "ERROR";
        e[e.ELEMENT = 8] = "ELEMENT";
        e[e.HTML_ELEMENT = 9] = "HTML_ELEMENT";
        e[e.HTML_IMAGE_ELEMENT = 10] = "HTML_IMAGE_ELEMENT";
        e[e.PERFORMANCE_ENTRY = 11] = "PERFORMANCE_ENTRY";
        e[e.PERFORMANCE_TIMING = 12] = "PERFORMANCE_TIMING";
        e[e.PERFORMANCE_RESOURCE_TIMING = 13] = "PERFORMANCE_RESOURCE_TIMING";
        e[e.PERFORMANCE_NAVIGATION_TIMING = 14] = "PERFORMANCE_NAVIGATION_TIMING";
        e[e.CSS_RULE = 15] = "CSS_RULE";
        e[e.CSS_STYLE_SHEET = 16] = "CSS_STYLE_SHEET";
        e[e.REQUEST = 17] = "REQUEST";
        e[e.RESPONSE = 18] = "RESPONSE";
        e[e.SET = 19] = "SET";
        e[e.MAP = 20] = "MAP";
        e[e.WORKER = 21] = "WORKER";
        e[e.XML_HTTP_REQUEST = 22] = "XML_HTTP_REQUEST";
        e[e.SVG_SCRIPT_ELEMENT = 23] = "SVG_SCRIPT_ELEMENT";
        e[e.HTML_META_ELEMENT = 24] = "HTML_META_ELEMENT";
        e[e.HTML_HEAD_ELEMENT = 25] = "HTML_HEAD_ELEMENT";
        e[e.ARRAY_BUFFER = 26] = "ARRAY_BUFFER";
        e[e.SHADOW_ROOT = 27] = "SHADOW_ROOT"
    })(Nj || (Nj = {}));
    var ql = function() {
            for (var e, h = [], m = 0; 256 > m; m++) {
                e = m;
                for (var r = 0; 8 > r; r++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
                h[m] = e
            }
            return h
        }(),
        rl;
    (function(e) {
        e.ANCHOR = "A";
        e.BUTTON = "BUTTON";
        e.FORM = "FORM";
        e.I_FRAME = "IFRAME";
        e.IMAGE = "IMG";
        e.INPUT = "INPUT";
        e.LABEL = "LABEL";
        e.LINK = "LINK";
        e.OPTION = "OPTION";
        e.SCRIPT = "SCRIPT";
        e.SELECT = "SELECT";
        e.STYLE = "STYLE";
        e.TEXT_AREA = "TEXTAREA"
    })(rl || (rl = {}));
    var Oj = "",
        sl;
    (function(e) {
        e.ADD_NODE = "addNode";
        e.REMOVE_NODE =
            "removeNode";
        e.UPDATE_ATTRIBUTE = "updateAttribute";
        e.UPDATE_NODE = "updateNode";
        e.UPDATE_NODE_VALUE = "updateNodeValue"
    })(sl || (sl = {}));
    var tl;
    (function(e) {
        e.EVENTS = "srTe";
        e.MUTATIONS = "srBm";
        e.RESOURCES = "srRs"
    })(tl || (tl = {}));
    var ul;
    (ul || (ul = {})).SR_IMAGE_NATURAL_DIMENSIONS = "data-dt-natural-dimensions";
    var vl;
    (function(e) {
        e.CSS_STYLESHEET = "css-stylesheet";
        e.MATHML = "http://www.w3.org/1998/Math/MathML";
        e.METADATA = "dynatrace-metadata";
        e.SVG = "http://www.w3.org/2000/svg"
    })(vl || (vl = {}));
    var wl;
    (function(e) {
        e.IMPORT =
            "rc.import";
        e.LINK = "rc.link"
    })(wl || (wl = {}));
    var xl;
    (function(e) {
        e.OPEN = "sdw.o";
        e.SLOT = "sdw.s"
    })(xl || (xl = {}));
    var yl;
    (yl || (yl = {})).DOCTYPE = "doc.doctype";
    var zl;
    (zl || (zl = {})).IFRAME = "tf.iframe";
    var Al;
    (Al || (Al = {})).CREATE = "css.create";
    var Bl;
    (Bl || (Bl = {})).FAILURE = "rl.fail";
    var Ii, vg = function() {
            function e(h) {
                var m = h.id;
                m = void 0 === m ? void 0 : m;
                var r = h.I,
                    A = h.query;
                h = h.result;
                m ? this.id = m : (e.we++, this.id = e.we);
                this.I = r;
                this.query = A;
                this.result = void 0 === h ? void 0 : h
            }
            e.decode = function(h) {
                try {
                    if ("DT UI Worker Bridge" ===
                        h.type) {
                        var m = h.payload;
                        return new e({
                            id: m.id,
                            I: m.handler,
                            query: m.query,
                            result: m.result
                        })
                    }
                } catch (r) {}
            };
            e.prototype.sh = function(h) {
                "undefined" === typeof h ? this.result = null : this.result = h
            };
            e.prototype.Ha = function() {
                return {
                    type: "DT UI Worker Bridge",
                    payload: {
                        id: this.id,
                        handler: this.I,
                        query: this.query,
                        result: this.result
                    }
                }
            };
            e.we = 0;
            return e
        }(),
        Ff = function() {
            function e(h) {
                h ? this.port = h : (h = new MessageChannel, this.port = h.port1, this.fh = h.port2)
            }
            e.be = function() {
                e.cc || (e.cc = new Map)
            };
            e.Gd = function(h, m) {
                e.be();
                var r = e.cc.get(h);
                if (r) r.push(m);
                else {
                    var A = [m];
                    e.cc.set(h, A);
                    h.addEventListener("message", function(T) {
                        var za = vg.decode(T.data);
                        za && A.slice(0).forEach(function(X) {
                            X(za, T, function() {
                                e.Hd(h, X)
                            })
                        })
                    })
                }
                return m
            };
            e.Hd = function(h, m) {
                e.be();
                h = e.cc.get(h) || [];
                h.splice(h.indexOf(m), 1)
            };
            e.hc = function(h, m, r) {
                var A = void 0 === r ? {} : r;
                r = A.origin;
                r = void 0 === r ? "*" : r;
                A = A.transfer;
                A = void 0 === A ? [] : A;
                m = m.Ha();
                W() || -1 < Object.prototype.toString.call(h).indexOf("Worker") ? h.postMessage(m, A) : h.postMessage(m, r, A)
            };
            e.prototype.Jb =
                function(h) {
                    this.port.onmessage = function(m) {
                        (m = vg.decode(m.data)) && h(m)
                    }
                };
            e.prototype.send = function(h, m) {
                void 0 === m && (m = []);
                this.port.postMessage(h.Ha(), m)
            };
            return e
        }(),
        Qj, Cl = 0,
        Sj, Mk, Wf, Tj, kj, lj, Dl = [],
        cm = {},
        dm = {},
        Ok = {
            srvr: "srvr"
        },
        Bh, gc = {
            Fa: {
                initial: "",
                name: "viewId"
            },
            Nf: {
                initial: !1,
                name: "viewActive"
            },
            enabled: {
                initial: !1,
                name: "enabled"
            },
            state: {
                initial: "stopped",
                name: "state"
            },
            ci: {
                initial: !1,
                name: "samplingEvaluated"
            },
            Yj: {
                initial: "",
                name: "viewRules",
                Hi: "srvr"
            }
        },
        em = ["css", "font", "image"],
        fi, Ng, bh, mj, Pk =
        0,
        Ji, El = bd.Node ? [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.DOCUMENT_TYPE_NODE, Node.ELEMENT_NODE, Node.TEXT_NODE] : [],
        fm = "onabort onactivate onanimationcancel onanimationend onanimationiteration onanimationstart onauxclick onafterprint onbeforeactivate onbeforedeactivate onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextmenu oncopy oncuechange oncut ondblclick ondeactivate ondrag ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onfinish onfocus onfocusin onfocusout onhashchange oninput oninvalid onkeydown onkeypress onkeyup onlanguagechange onload onloadeddata onloadedmetadata onloadend onloadstart onmessage onmessageerror onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onwheel onoffline ononline onpagehide onpageshow onpaste onpause onplay onplaying onpopstate onprogress onratechange onreadystatechange onrepeat onreset onresize onrejectionhandled onscroll onsecuritypolicyviolation onseeked onseeking onselect onstalled onstart onstorage onsubmit onsuspend ontimeupdate ontransitioncancel ontransitionend ontransitionrun ontoggle onunhandledrejection onunload onvolumechange onwaiting".split(" "),
        Vj = ["radio", "checkbox"],
        gi, Wj = {
            matchesSelector: function(e, h) {
                return rb(e) ? (e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector).call(e, h) : !1
            }
        },
        gm = ["DATALIST", "INPUT", "TEXTAREA", "SELECT", "OPTION"],
        hm = ["submit", "button", "reset"],
        im = "textarea input[type=text] input:not([type]) input[type=password] input[type=hidden] input[type=checkbox] input[type=radio] input[type=date] input[type=month] input[type=week] input[type=datetime-local] input[type=time] input[type=number] input[type=range] input[type=file] input[type=email] input[type=url] input[type=tel] input[type=search] select option".split(" "),
        Xf, Qk, oj, pj, Gf, Hf, jm = function() {
            function e(h, m) {
                this.Oe = h;
                this.ae = m
            }
            e.prototype.dd = function(h) {
                var m = this;
                return this.ae.some(function(r) {
                    return m.Oe.matchesSelector(h, r.ya())
                })
            };
            e.prototype.wd = function(h) {
                var m = this;
                return this.ae.some(function(r) {
                    return m.Oe.matchesSelector(h, r.ya()) && r.wd()
                })
            };
            return e
        }(),
        km = function() {
            function e(h) {
                this.eg = h
            }
            e.prototype.dd = function(h) {
                return this.eg.some(function(m) {
                    return m.ya().test(h)
                })
            };
            return e
        }(),
        mm = function() {
            function e(h, m, r, A) {
                void 0 === A && (A = new WeakMap);
                this.$d = h;
                this.dg = m;
                this.za = r;
                this.Yb = A
            }
            e.prototype.Xa = function(h) {
                if (Za(h) || Za(h.parentNode)) return 1;
                var m = this.za ? 1 : 2,
                    r = rb(h) && h.hasAttribute("data-dtrum-mask"),
                    A = this.$d.dd(h);
                r ? m = 10 : A && (m = this.za ? this.vg(h) : 1);
                var T = this.Yb.get(h.parentNode),
                    za = r;
                T && (r = this.yg(T, m, r || A), m = r.Tg, za = za || r.od);
                this.oh(h, m, za);
                return m
            };
            e.prototype.Cd = function(h, m) {
                var r = this.za ? 1 : 16;
                return -1 !== ["value", "placeholder", "label"].indexOf(m) ? this.wg(h, m) : this.Og(m) || !this.Ng(m) ? 1 : this.dg.dd(m) ? this.za ? 16 : 1 : (h = this.Yb.get(h)) ?
                    (r = this.za ? h.Cc : h.zc, 2 === (r & 2) ? 16 : r) : r
            };
            e.prototype.yg = function(h, m, r) {
                var A = !1;
                h.od ? (m = 10, A = !0) : (h = this.za ? h.Cc : h.zc, r || (m = h), this.za && (m |= h));
                return {
                    Tg: m,
                    od: A
                }
            };
            e.prototype.oh = function(h, m, r) {
                r = {
                    od: r
                };
                var A = this.Yb.get(h);
                this.za ? r.Cc = (A && A.Cc) | m : r.zc = (A && A.zc) | m;
                A && (r = kb(kb({}, A), r));
                this.Yb.set(h, r)
            };
            e.prototype.vg = function(h) {
                var m = 2;
                this.$d.wd(h) && (m |= 8);
                return m
            };
            e.prototype.Ng = function(h) {
                return /^data(-.*)?$/.test(h)
            };
            e.prototype.Og = function(h) {
                return /^data-dt-(.+)$/.test(h)
            };
            e.prototype.wg =
                function(h, m) {
                    return qa(h) && "value" === m ? 32 : 2 === (this.Xa(h) & 2) ? 16 : 1
                };
            return e
        }(),
        Hl = function() {
            function e(h) {
                this.value = h
            }
            e.Mg = function(h) {
                return h instanceof e
            };
            e.prototype.ya = function() {
                return this.value
            };
            return e
        }(),
        ck = function() {
            function e(h) {
                this.Je = !1;
                h = h.split(e.Ld);
                var m = h[1];
                this.value = h[0];
                this.Je = "" === m
            }
            e.Pg = function(h) {
                return h instanceof e
            };
            e.prototype.ya = function() {
                return this.value
            };
            e.prototype.wd = function() {
                return this.Je
            };
            e.Ld = "&";
            return e
        }(),
        dk = function() {
            function e(h) {
                this.Zg = h
            }
            e.create = function(h) {
                return new e(h)
            };
            e.prototype.ya = function() {
                return this.Zg
            };
            return e
        }(),
        Sk = function() {
            function e(h) {
                this.ah = h
            }
            e.create = function(h) {
                return new e(h)
            };
            e.prototype.ya = function() {
                return this.ah
            };
            return e
        }(),
        Yf = function() {
            function e(h, m, r) {
                void 0 === h && Sk.create(2);
                void 0 === m && (m = dk.create(0));
                void 0 === r && (r = []);
                this.Yg = m;
                this.rules = r
            }
            e.prototype.Cg = function() {
                return this.rules.filter(ck.Pg)
            };
            e.prototype.zg = function() {
                return this.rules.filter(Hl.Mg)
            };
            e.prototype.addRule = function(h) {
                this.rules.push(h)
            };
            e.prototype.za = function() {
                return 0 === this.Yg.ya()
            };
            return e
        }(),
        Tf = function() {
            function e() {}
            e.create = function(h, m) {
                if (!e.validate(m)) throw Error("Invalid masking rule value: " + m + "!");
                switch (h) {
                    case 0:
                        return new ck(m);
                    case 1:
                        return new Hl(new RegExp(m));
                    default:
                        throw Error("Invalid masking rule type: " + h + "!");
                }
            };
            e.validate = function(h) {
                return h && "" !== h.trim()
            };
            return e
        }(),
        Cb = function() {
            function e(h) {
                var m = this;
                this.ad = [];
                this.Sg = new WeakMap;
                Array.isArray(h) ? h.forEach(function(r) {
                    m.ze(r)
                }) : this.ze(h)
            }
            e.prototype.ze = function(h) {
                var m;
                h = h.split(",");
                2 === Number(h[0]) ? m = {
                    bd: h.slice(0, 4).join(",")
                } : m = {
                    Ug: h.slice(0, 5).join(","),
                    bd: h.slice(5, 9).join(",")
                };
                if (m.bd) {
                    h = m.bd.split(",").map(decodeURIComponent);
                    var r = h[2];
                    m = h[3];
                    h = Sk.create(Number(h[1]));
                    r = dk.create(Number(r));
                    m = sd(m ? m.split(";") : []);
                    m = new Yf(h, r, m)
                } else m = ge(m.Ug);
                m instanceof Yf ? (h = new jm(Wj, m.Cg()), r = new km(m.zg()), m = new mm(h, r, m.za(), this.Sg), this.ad.push(m)) : (m = this.cd = m, Qk = new WeakMap, oj = new WeakMap, pj = new WeakMap, Gf = new WeakMap, Hf =
                    new WeakMap, Xf = m, Sa(Xf.ub, Qk), Sa(Xf.sb, oj), Sa(Xf.yb, pj))
            };
            e.prototype.Xa = function(h) {
                if (this.cd) return cb(h);
                for (var m, r = 0, A = this.ad; r < A.length; r++) {
                    var T = A[r].Xa(h);
                    1 !== T && (m |= T)
                }
                return m || 1
            };
            e.prototype.Cd = function(h, m) {
                if (this.cd) return eb(h, m);
                for (var r, A = 0, T = this.ad; A < T.length; A++) {
                    var za = T[A].Cd(h, m);
                    1 !== za && (r |= za)
                }
                return r || 1
            };
            return e
        }(),
        Eb = ["button", "datalist", "select", "option"],
        Gl = "button checkbox radio date month week datetime-local time number range".split(" "),
        Ih = {
            zh: function(e) {
                return 2 ===
                    (Vf.Xa(e) & 2)
            },
            Pj: function(e) {
                return 4 === (Vf.Xa(e) & 4)
            },
            Oj: function(e) {
                return 2 === (Vf.Xa(e) & 2)
            },
            yh: function(e) {
                var h;
                !(h = 8 === (Vf.Xa(e) & 8)) && (h = 4 === (Vf.Xa(e) & 4)) && (h = (e = e.nodeType === Node.TEXT_NODE ? e.parentNode : e) && "INPUT" === e.nodeName && -1 !== Gl.indexOf(e.type.toLowerCase()), h = -1 !== Eb.indexOf(e.nodeName.toLowerCase()) || h);
                return h
            }
        },
        Vf, lk = Date.prototype.toJSON,
        Jf = function() {
            function e(h, m) {
                if (!h || !m) throw Hb("Invalid parameters for mutation construction", {
                    type: h,
                    Yh: m
                }), Error("Invalid parameters");
                this.type =
                    h;
                this.J = m.J;
                this.nodeName = m.nodeName;
                this.namespaceURI = m.namespaceURI;
                this.nodeValue = m.nodeValue;
                this.attributeName = m.attributeName;
                this.Sa = m.Sa;
                this.ja = m.ja;
                this.ma = m.ma;
                this.pa = m.pa;
                this.ka = m.ka
            }
            e.decode = function(h) {
                try {
                    var m = JSON.parse(h);
                    return new e(m.type, {
                        J: m.nodeId,
                        nodeName: m.nodeName,
                        namespaceURI: m.namespaceURI,
                        nodeValue: m.nodeValue,
                        attributeName: m.attributeName,
                        Sa: m.attributeValue,
                        ja: m.parentId,
                        ma: m.previousId,
                        pa: m.nextId,
                        ka: m.masking
                    })
                } catch (r) {
                    return null
                }
            };
            e.prototype.Ha = function() {
                return ya({
                    type: this.type,
                    nodeId: this.J,
                    nodeName: this.nodeName,
                    namespaceURI: this.namespaceURI,
                    nodeValue: this.nodeValue,
                    attributeName: this.attributeName,
                    attributeValue: this.Sa,
                    parentId: this.ja,
                    previousId: this.ma,
                    nextId: this.pa,
                    masking: this.ka
                })
            };
            e.prototype.Lf = function() {};
            e.Hh = "removeNode";
            e.Of = "updateNode";
            return e
        }(),
        cf = function(e) {
            function h(m, r, A) {
                m = e.call(this, m, r) || this;
                m.node = A;
                return m
            }
            Da(h, e);
            h.Sh = function(m, r, A) {
                Hb("Invalid parameters for mutation construction", {
                    type: m,
                    node: r,
                    Ib: A
                })
            };
            h.create = function(m, r, A) {
                void 0 ===
                    r && (r = {});
                var T = r.node;
                r = r.Ib;
                if (!m || !A && (!pa(T) || "updateAttribute" === m && !r)) return h.Sh(m, T, r), null;
                var za;
                A ? za = A : pa(T) && (za = ua(m, T, r));
                return za ? new h(m, za, T) : (h.Sh(m, T, r), null)
            };
            h.prototype.Lf = function() {
                if (this.node) {
                    var m = D(this.type, this.node);
                    m && (this.J = m.J, this.ja = this.ja || m.ja, this.ma = this.ma || m.ma, this.pa = this.pa || m.pa)
                }
            };
            return h
        }(Jf),
        Uf = {
            store: void 0
        },
        Th = {
            initialize: function(e) {
                void 0 === e && (e = new Set);
                Uf.store = e
            },
            add: Fa(function(e) {
                Uf.store.add(e)
            }, Uf),
            getEntries: Fa(Ja, Uf),
            remove: Fa(function(e) {
                    Uf.store.delete(e)
                },
                Uf),
            size: Fa(function() {
                return Ja().length
            }, Uf)
        },
        Kf = function(e) {
            function h(m) {
                var r = m.type,
                    A = m.J;
                A = void 0 === A ? h.Mh() : A;
                m = Ea(m, ["type", "nodeId"]);
                m = ta({
                    namespaceURI: "dynatrace-metadata",
                    J: A
                }, m);
                return e.call(this, r, m) || this
            }
            Da(h, e);
            h.Mh = function() {
                return "".concat(h.ej).concat(++h.id)
            };
            h.id = 0;
            h.ej = "m";
            return h
        }(Jf),
        xe = function(e) {
            function h() {
                return null !== e && e.apply(this, arguments) || this
            }
            Da(h, e);
            return h
        }(function() {
            function e(h, m) {
                void 0 === m && (m = !1);
                this.time = h;
                this.Vd = m;
                this.set = [];
                this.size = this.set.length
            }
            e.decode = function(h) {
                try {
                    var m = JSON.parse(h);
                    if (m && "Mutation List" === m.type) {
                        var r = m.payload,
                            A = new e(r.time, r.checkIROnSnapshotFlag);
                        h = 0;
                        for (var T = r.entries; h < T.length; h++) {
                            var za = Jf.decode(T[h]);
                            za && A.add(za)
                        }
                        return A
                    }
                } catch (X) {}
            };
            e.og = function(h, m) {
                var r;
                void 0 === r && (r = !1);
                var A = new e(m, r);
                h.forEach(function(T) {
                    A.add(T)
                });
                return A
            };
            e.prototype.add = function(h) {
                h instanceof Jf && (this.set.push(h), this.size = this.set.length)
            };
            e.prototype.Kh = function(h) {
                this.set = this.set.filter(function(m) {
                    return m instanceof
                    Jf && !h(m)
                });
                this.size = this.set.length
            };
            e.prototype.forEach = function(h) {
                this.set.forEach(function(m) {
                    return m instanceof Jf && h(m)
                })
            };
            e.prototype.Ha = function() {
                return ya({
                    type: "Mutation List",
                    payload: {
                        checkIROnSnapshotFlag: this.Vd,
                        time: this.time,
                        entries: this.set.map(function(h) {
                            return h.Ha()
                        })
                    }
                })
            };
            return e
        }()),
        mk, nk = "process",
        Pg, ok = "data-dtmask",
        rk = ["src", "srcset"],
        Wi = Ih,
        Ue, Qh = {
            initialize: function(e) {
                var h;
                a: {
                    if ((h = e.MutationObserver) && "function" === typeof h && Nd(h)) {
                        if (h.prototype) b: {
                            for (var m = {}, r =
                                    h.prototype; r;) {
                                for (var A = 0, T = Object.getOwnPropertyNames(r); A < T.length; A++) {
                                    var za = T[A];
                                    try {
                                        var X = r[za];
                                        if ("function" === typeof X && !Nd(X)) {
                                            var $a = void 0;
                                            break b
                                        }
                                        m[za] = m[za] || X
                                    } catch (ab) {}
                                }
                                r = r.prototype || r.__proto__
                            }
                            $a = m
                        }
                        else $a = {};
                        if ($a) {
                            h = {
                                Wh: h,
                                prototype: $a
                            };
                            break a
                        }
                    }
                    h = void 0
                }
                h || (h = e.Zone && e.Zone.__symbol__ && e[e.Zone.__symbol__("MutationObserver")] ? e[e.Zone.__symbol__("MutationObserver")] : void 0);
                Ue = h
            },
            ek: function() {
                return !!Ue
            },
            Yi: function(e) {
                e = Ue ? Ue && "function" === typeof Ue.Wh && "prototype" in Ue ? Ed(Ue,
                    e) : new Ue(e) : void 0;
                return e
            },
            Di: function() {
                return !!Ue && !!Xb.Worker && "undefined" !== typeof Xb.Worker
            }
        },
        Jg, Cf = null,
        lh, mh = {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        },
        Od = function() {
            function e(h, m, r, A) {
                void 0 === m && (m = {
                    ra: null
                });
                void 0 === r && (r = gc.Fa);
                void 0 === A && (A = Gc());
                this.type = h;
                this.Fa = r;
                this.time = A;
                this.ra = m.ra;
                this.url = m.url;
                this.Fd = m.Fd;
                this.mc = m.mc;
                this.Bd = m.Bd;
                this.x = m.x;
                this.y = m.y;
                this.width = m.width;
                this.height = m.height;
                this.top = m.top;
                this.left = m.left;
                this.name = m.name;
                this.value =
                    m.value;
                this.duration = m.duration
            }
            e.decode = function(h) {
                try {
                    return new e(h.type || null, {
                        url: h.url,
                        Fd: h.isIframe,
                        mc: h.tabId,
                        ra: h.targetId || null,
                        x: h.x,
                        y: h.y,
                        width: h.width,
                        height: h.height,
                        top: h.top,
                        left: h.left,
                        name: h.name,
                        value: h.value,
                        duration: h.duration,
                        Bd: h.excludedView
                    }, gc.Fa, h.time)
                } catch (m) {
                    return null
                }
            };
            e.prototype.Si = function() {
                var h;
                void 0 === h && (h = 0);
                return {
                    viewId: this.Fa,
                    time: this.time - h,
                    type: this.type,
                    url: this.url,
                    isIframe: this.Fd,
                    tabId: this.mc,
                    targetId: this.ra,
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height,
                    top: this.top,
                    left: this.left,
                    name: this.name,
                    value: this.value,
                    duration: this.duration,
                    excludedView: this.Bd
                }
            };
            return e
        }(),
        $e, cd = Ih,
        ac = function(e) {
            function h(m) {
                var r = m.type,
                    A = m.J;
                m = Ea(m, ["type", "nodeId"]);
                A = ta({
                    namespaceURI: "css-stylesheet",
                    J: A
                }, m);
                return e.call(this, r, A) || this
            }
            Da(h, e);
            return h
        }(Jf),
        oc;
    (oc || (oc = {})).VISIT_ID = "visitId";
    var og;
    (function(e) {
        e.METADATA = "metadata";
        e.URL = "url"
    })(og || (og = {}));
    var Xg;
    (function(e) {
        e.BODY = "body";
        e.HASH = "hash";
        e.URL = "url"
    })(Xg || (Xg = {}));
    var Ig;
    (Ig || (Ig = {})).URL = "url";
    var qj;
    (qj || (qj = {})).COUNTER = "counter";
    var Vi = "srrcmm_",
        Hg = "srrcir_",
        Vh = "recorder/platform/indexeddb",
        Te, th, yh;
    (yh || (yh = {})).VALUE = "value";
    var Ph;
    (function(e) {
        e.HASH = "hash";
        e.TTL = "ttl"
    })(Ph || (Ph = {}));
    var vh = "key",
        zk = 15E3,
        Bi = 0,
        ue = {
            initialize: function(e) {
                void 0 === e && (e = wb.dT_.ncv("rcdec"), e = !e || 0 >= e ? 12096E5 : e);
                Bi = e;
                ue.Ij()
            },
            Kj: function(e) {
                return vf("visit", "".concat(Hg).concat(e))
            },
            wi: function(e) {
                return hf("visit", e)
            },
            $i: function(e) {
                return jf("visit", "".concat(Hg).concat(e)).then(function(h) {
                    if (Uc(h,
                            Hg)) return h
                })
            },
            aj: ka,
            size: function() {
                return ka().then(function(e) {
                    return e.length
                }).catch(function() {
                    return 0
                })
            },
            sj: function(e) {
                var h, m = (h = {}, h[vh] = "".concat("srrcur_").concat(e), h.visitId = wb.dT_.gVI(), h.url = e, h);
                hf("visit", m)
            },
            kj: function(e) {
                return jf("visit", "".concat("srrcur_").concat(e)).then(tf).catch(function() {
                    return !1
                })
            },
            Rh: La,
            rj: function(e) {
                return La(e).then(function(h) {
                    var m;
                    h || (h = (m = {}, m[vh] = "".concat("srrckr_").concat(e), m.hash = e, m.ttl = wb.dT_.nw() + Bi, m), hf("global", h))
                })
            },
            Ij: function() {
                return se("global").then(function(e) {
                    for (var h =
                            wb.dT_.nw(), m = [], r = 0; r < e.length; r++) {
                        var A = e[r];
                        Uc(A, "srrckr_") && A.ttl < h && m.push(vf("global", "".concat("srrckr_").concat(A.hash)))
                    }
                    return Sb.allSettled(m)
                }).catch(function() {})
            }
        },
        Fh = 0,
        ek = {
            initialize: function() {
                Fh = 0;
                lc().catch(function() {});
                return {
                    Wj: $f,
                    Wi: qd,
                    bk: Bc
                }
            }
        },
        rj, nc = {},
        Nb, Yb = !1,
        Kc = function(e) {
            function h(m, r, A, T) {
                void 0 === A && (A = -2);
                if (!h.mj(m, r, A, T)) throw Hb("Invalid parameters for mutation construction", {
                    type: m,
                    If: r,
                    Yh: T
                }), Error("Invalid parameters");
                var za = r && r.parentStyleSheet && r.parentStyleSheet.cssRules[A -
                    1];
                A = r && r.parentStyleSheet && r.parentStyleSheet.cssRules[A + 1];
                if (!T) a: {
                    T = gg(m, r, za, A);
                    switch (m) {
                        case "addNode":
                            T.nodeName = "#text";
                            T.nodeValue = t(r);
                            break a;
                        case "updateNode":
                        case "removeNode":
                            break a
                    }
                    T = void 0
                }
                if (!T) throw Hb("Invalid parameters for mutation construction", {
                    type: m,
                    If: r
                }), Error("Invalid parameters");
                m = e.call(this, m, T) || this;
                m.If = r;
                m.Ej = za;
                m.xj = A;
                return m
            }
            Da(h, e);
            h.mj = function(m, r, A, T) {
                return m ? !(!T && (!r || "removeNode" !== m && void 0 === A)) : !1
            };
            h.prototype.Lf = function() {
                if (this.If) {
                    var m = gg(this.type,
                        this.If, this.Ej, this.xj);
                    this.J = m.J;
                    this.ja = this.ja || m.ja;
                    this.ma = this.ma || m.ma;
                    this.pa = this.pa || m.pa
                }
            };
            return h
        }(Jf),
        Pi = "snapshot",
        df, Rd = [],
        Se = [],
        xg;
    (function(e) {
        e.CLUSTER_REJECTION = "Cluster Rejection";
        e.INVALID_PARAMS = "Invalid Params";
        e.NETWORK_ERROR = "Network Error";
        e.UNKNOWN_ERROR = "Unknown Error"
    })(xg || (xg = {}));
    var Df = function(e) {
            function h(m) {
                return e.call(this, m, "Invalid Params") || this
            }
            Da(h, e);
            return h
        }(function(e) {
            function h(m, r) {
                m = e.call(this, m) || this;
                m.code = r;
                return m
            }
            Da(h, e);
            return h
        }(Error)),
        Ug = !1,
        fk = 5,
        yi = [],
        Qi = 0,
        xh, Ei = !1,
        xi, Ri, Bj, Sh = !1,
        Si = [],
        Gh, sj, gk, Hh, zi = {
            view: "v",
            move: "m",
            click: "c",
            resize: "r",
            scroll: "s",
            input: "i"
        },
        ji = function() {
            function e() {
                this.start = Gc();
                this.end = Gc();
                this.set = [];
                this.size = this.set.length
            }
            e.prototype.add = function(h) {
                this.end = Gc();
                h.time < this.start && (this.start = h.time);
                this.set.push(h);
                this.size = this.set.length
            };
            e.prototype.forEach = function(h) {
                fd(this.set, h)
            };
            e.prototype.Ha = function() {
                this.end = Gc();
                var h = this.Ai();
                this.forEach(h);
                return zf(this.set, this.start)
            };
            e.prototype.Ai = function() {
                var h = this;
                return function(m) {
                    return e.ji(h, m)
                }.bind(this)
            };
            e.ji = function(h, m) {
                m.ck = m.time - h.start
            };
            return e
        }(),
        rf = "dyn-sr-retryKeys",
        ii = "dyn-sr-retry-",
        ed, Be = !1,
        Yg, Ae = {
            Ab: 1,
            sg: 1
        },
        Jj = "focus blur resize scroll keydown keyup mousemove mousedown mouseup click touchstart touchend touchmove".split(" "),
        If = !1,
        yg, ki = !1,
        zj = !1,
        nh;
    var Uh = Xb.dT_ || {};
    var Ui = /(.*)(?:\((.*)\))\|?(.*)/,
        bj;
    (function(e) {
        e.FAIL = "fail";
        e.SUCCESS = "success"
    })(bj || (bj = {}));
    var oh = !1,
        af, Ce, jc = {};
    (function() {
        jc = {
            Ji: rc("ww"),
            gj: rc("iS"),
            Tj: rc("stu"),
            addEventListener: rc("ael"),
            removeEventListener: rc("rel"),
            now: rc("nw"),
            setInterval: rc("si"),
            clearInterval: rc("cI"),
            setTimeout: rc("st"),
            clearTimeout: rc("ct"),
            Sj: rc("svl"),
            qj: rc("lvl"),
            Jj: rc("rvl"),
            hk: rc("sMPS"),
            Ph: rc("ncv"),
            Pb: rc("bcv"),
            Dd: rc("scv"),
            Ci: rc("cVIn"),
            Rj: rc("sv"),
            pj: rc("lv"),
            bj: rc("gVI"),
            Xj: rc("uVT"),
            pi: rc("aBPSL"),
            Ui: rc("gBP"),
            ri: rc("aBPSCC"),
            postError: rc("pe"),
            Zj: rc("wst"),
            $j: rc("wsp"),
            ik: rc("wtt"),
            Fj: rc("rpm"),
            Ef: rc("ism"),
            forEach: rc("fE"),
            jj: rc("icr"),
            fk: rc("las"),
            dk: rc("gBI"),
            Xi: rc("gMu"),
            Ii: rc("cAE"),
            vi: function(e) {
                rc("addE")("ACTION_ENTERED", e)
            },
            Hj: function(e) {
                rc("remE")("ACTION_ENTERED", e)
            },
            ui: rc("addE")
        }
    })();
    var bf = Uh,
        of = jc.addEventListener,
        Zg = jc.removeEventListener,
        Gc = jc.now,
        fd = jc.forEach,
        Dk = jc.setInterval,
        Yi = jc.clearInterval,
        Vg = jc.setTimeout,
        ld = jc.clearTimeout,
        Eg = jc.Sj,
        Oh = jc.qj,
        Qc = jc.Jj,
        pg = jc.bj,
        Zf = jc.Xj,
        Td = jc.Pb,
        md = jc.Ph,
        pf = jc.pi,
        ce = jc.Ui,
        wd = jc.Zj,
        Fg = jc.$j,
        Yd = jc.Fj,
        Gg = jc.jj,
        ph = jc.ui,
        Pd, qg;
    (function(e) {
        e.KILLED_EMERGENCY = "k-emg";
        e.KILLED_ERROR =
            "k-err";
        e.KILLED_INVALID_RESPONSE = "k-ires";
        e.KILLED_MIN_JS_AGENT_VERSION = "k-min";
        e.KILLED_NO_LICENSE = "k-lic";
        e.KILLED_WRONG_CONTENT_TYPE = "k-mime";
        e.MODULE_ABSENT_IN_FEATURE_HASH = "smbi";
        e.NO_ACTIVITY = "idle";
        e.NO_WORKER = "nowk";
        e.OPT_IN_MODE = "optin";
        e.OPTED_OUT_SESSION = "optout";
        e.ROBOT_DETECTED = "bot";
        e.SAMPLED_OUT = "sout";
        e.UNKNOWN = "no";
        e.UNSUPPORTED_BROWSER = "nosup"
    })(qg || (qg = {}));
    var xj;
    (function(e) {
        e.ERROR_MESSAGE = "errmsg";
        e.IFRAME = "iframe";
        e.NO_WORKER_REASON = "nowkreason";
        e.REASON_KEY = "r";
        e.VISIT_ID =
            "visit"
    })(xj || (xj = {}));
    var ri;
    (function(e) {
        e.CANNOT_RUN_WORKER_IN_UI_THREAD = "nowkui";
        e.FAILED_RUNNING_WORKER_IN_UI_THREAD = "flwkui"
    })(ri || (ri = {}));
    var yj = (Pd = {}, Pd.no = 100, Pd.idle = 200, Pd.optin = 300, Pd.sout = 400, Pd.optout = 500, Pd["k-min"] = 700, Pd["k-lic"] = 800, Pd["k-err"] = 900, Pd["k-ires"] = 950, Pd["k-mime"] = 1E3, Pd["k-emg"] = 1050, Pd.nowk = 1100, Pd.nosup = 1300, Pd.bot = 1400, Pd.smbi = 1500, Pd),
        Xi = "dtsrNOSR",
        Aj = function() {
            function e(h) {
                this.window = h
            }
            e.prototype.Ri = function() {
                Qh.initialize(this.window);
                Qh.Di() ? (Ve("init", [
                    ["fh", jc.Dd("featureHash")]
                ]), ml(), bm(), Fk()) : Ve("noinit", [
                    ["fh", jc.Dd("featureHash")],
                    ["mutobs", "0"]
                ])
            };
            return e
        }();
    Xb.dT_ && Xb.dT_.initialized && (Oj = wb.dT_.gVI(), wb.dT_.aNVL(ha), void 0 === window.WeakMap || void 0 === window.Map ? We("nosup") : wb.dT_.iBt() ? We("bot") : wb.dT_.smbi("Q") ? (We("no"), (new Aj(Xb)).Ri()) : We("smbi"))
})();
(function() {
    function Ka() {
        Ka = Object.assign || function(n) {
            for (var v, y = 1, J = arguments.length; y < J; y++) {
                v = arguments[y];
                for (var L in v) Object.prototype.hasOwnProperty.call(v, L) && (n[L] = v[L])
            }
            return n
        };
        return Ka.apply(this, arguments)
    }

    function bb(n, v, y, J) {
        function L(Z) {
            return Z instanceof y ? Z : new y(function(ja) {
                ja(Z)
            })
        }
        return new(y || (y = M))(function(Z, ja) {
            function va(zb) {
                try {
                    Va(J.next(zb))
                } catch (Tb) {
                    ja(Tb)
                }
            }

            function Oa(zb) {
                try {
                    Va(J["throw"](zb))
                } catch (Tb) {
                    ja(Tb)
                }
            }

            function Va(zb) {
                zb.done ? Z(zb.value) : L(zb.value).then(va,
                    Oa)
            }
            Va((J = J.apply(n, v || [])).next())
        })
    }

    function kb(n, v) {
        function y(Va) {
            return function(zb) {
                return J([Va, zb])
            }
        }

        function J(Va) {
            if (Z) throw new TypeError("Generator is already executing.");
            for (; Oa && (Oa = 0, Va[0] && (L = 0)), L;) try {
                if (Z = 1, ja && (va = Va[0] & 2 ? ja["return"] : Va[0] ? ja["throw"] || ((va = ja["return"]) && va.call(ja), 0) : ja.next) && !(va = va.call(ja, Va[1])).done) return va;
                if (ja = 0, va) Va = [Va[0] & 2, va.value];
                switch (Va[0]) {
                    case 0:
                    case 1:
                        va = Va;
                        break;
                    case 4:
                        return L.label++, {
                            value: Va[1],
                            done: !1
                        };
                    case 5:
                        L.label++;
                        ja = Va[1];
                        Va = [0];
                        continue;
                    case 7:
                        Va = L.ia.pop();
                        L.H.pop();
                        continue;
                    default:
                        if (!(va = L.H, va = 0 < va.length && va[va.length - 1]) && (6 === Va[0] || 2 === Va[0])) {
                            L = 0;
                            continue
                        }
                        if (3 === Va[0] && (!va || Va[1] > va[0] && Va[1] < va[3])) L.label = Va[1];
                        else if (6 === Va[0] && L.label < va[1]) L.label = va[1], va = Va;
                        else if (va && L.label < va[2]) L.label = va[2], L.ia.push(Va);
                        else {
                            va[2] && L.ia.pop();
                            L.H.pop();
                            continue
                        }
                }
                Va = v.call(n, L)
            } catch (zb) {
                Va = [6, zb], ja = 0
            } finally {
                Z = va = 0
            }
            if (Va[0] & 5) throw Va[1];
            return {
                value: Va[0] ? Va[1] : void 0,
                done: !0
            }
        }
        var L = {
                label: 0,
                B: function() {
                    if (va[0] &
                        1) throw va[1];
                    return va[1]
                },
                H: [],
                ia: []
            },
            Z, ja, va, Oa;
        return Oa = {
            next: y(0),
            "throw": y(1),
            "return": y(2)
        }, "function" === typeof Symbol && (Oa[Symbol.iterator] = function() {
            return this
        }), Oa
    }

    function eb(n, v) {
        void 0 === v && (v = []);
        var y = ua.dT_;
        y = (null === y || void 0 === y ? 0 : y.iIO) ? y.iIO : null;
        return !(null === y || void 0 === y || !y(n, v))
    }

    function cb(n) {
        return n && "IFRAME" === n.nodeName
    }

    function Ta(n) {
        return n && "IMG" === n.nodeName
    }

    function Sa() {
        return id
    }

    function Xa(n, v, y) {
        if (!Cd[y]) {
            var J = new Image;
            v = {
                url: y,
                time: D.dT_.nw(),
                element: J,
                Aj: v
            };
            rb(J, v, n);
            J.src = y;
            Cd[y] = J
        }
        return Cd[y]
    }

    function Ua(n, v, y) {
        var J = Wc[v][y] || [];
        if (n.element) {
            var L = D.dT_.aFI(J, function(Z) {
                return Z.element === n.element
            });
            0 <= L && J.splice(L, 1)
        }
        Pa(n, v, y)
    }

    function Pa(n, v, y) {
        Wc[v][y] || (Wc[v][y] = []);
        Wc[v][y].push(n)
    }

    function Za(n, v, y) {
        v = Wc[v][y] || [];
        n = v.indexOf(n);
        0 <= n && v.splice(n, 1)
    }

    function rb(n, v, y) {
        function J() {
            Za(v, 2, y);
            Ua(v, 1, y);
            var Z = J;
            n.removeEventListener("load", L);
            n.removeEventListener("error", Z)
        }

        function L() {
            Za(v, 2, y);
            var Z = J;
            n.removeEventListener("load",
                L);
            n.removeEventListener("error", Z)
        }
        Pa(v, 2, y);
        n.addEventListener("load", L);
        n.addEventListener("error", J)
    }

    function qa(n) {
        return ae && eb(n, 13) && "navigation" !== n.entryType || eb(n, ["_dtCl"])
    }

    function ta() {}

    function Ha(n) {
        return 0 < n.left + n.width && n.left < U() && 0 < n.top + n.height && n.top < Ea()
    }

    function Da(n) {
        return n && 0 < n.width && 0 < n.height && Ha(n)
    }

    function Ea() {
        od || (od = ua.innerHeight || ie.clientHeight);
        return Id.bwsH || od
    }

    function U() {
        Dd || (Dd = ua.innerWidth || ie.clientWidth);
        return Id.bwsW || Dd
    }

    function S(n) {
        var v = U(),
            y = Ea();
        return {
            top: 0,
            left: 0,
            width: Math.max(0, Math.min(n.left + n.width, v)) - Math.max(0, Math.min(n.left, v)),
            height: Math.max(0, Math.min(n.top + n.height, y)) - Math.max(0, Math.min(n.top, y))
        }
    }

    function sa(n, v, y) {
        if (!y && ma(n)) return !0;
        n = y || W(v);
        (v = "hidden" === n.visibility || "none" === n.display || "0" === n.opacity || "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)" === n.clipPath) || (v = n.transform || "", n = !1, y = v.indexOf("("), 0 < y && (v = v.substring(y + 1, v.length - 1).split(", "), n = "0" === v[0], 6 === v.length ? n = n || "0" === v[3] : 16 === v.length &&
            (n = n || "0" === v[5] || "0" === v[10])), v = n);
        return v
    }

    function ma(n) {
        if (0 < Mc && n.fd >= Mc) return n.gd++, !0;
        n.fd++;
        return !1
    }

    function ea(n) {
        return Math.ceil(n.width * n.height)
    }

    function Ga(n, v, y, J, L, Z) {
        var ja;
        void 0 === Z && (Z = "");
        try {
            if (!J && (J = Na(v, n.Da, L), !Da(J))) return null;
            L = J;
            var va = (ja = {}, ja.url = Z, ja.time = 0, ja.node = v, ja.v = !sa(n, v, y), ja.area = ea(S(L)), ja.offset = {
                    top: L.top,
                    left: L.left,
                    width: L.width,
                    height: L.height
                }, ja.is = 0, ja.ts = 1, ja),
                Oa = D.dT_.tau(Z);
            (n = Fa) && n.test(Oa) && (va.is = 2);
            return va
        } catch (Va) {}
        return null
    }

    function Na(n, v, y) {
        void 0 === v && (v = new WeakMap);
        var J = D.dT_.gFId();
        var L = v;
        v = L.get(n);
        v || (v = {}, L.set(n, v));
        if (v[J]) J = v[J];
        else {
            L = ua.pageYOffset;
            var Z = n.clientTop,
                ja = ua.pageXOffset,
                va = n.clientLeft,
                Oa = 0,
                Va = 0;
            wa(n) && (Oa = n.offsetWidth, Va = n.offsetHeight);
            Oa = {
                top: 0,
                left: 0,
                offsetWidth: Oa,
                offsetHeight: Va,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight
            };
            if ("function" === typeof n.getBoundingClientRect) try {
                var zb = n.getBoundingClientRect(),
                    Tb = zb.left;
                Oa.top = zb.top + L - Z;
                Oa.left = Tb + ja - va
            } catch (tc) {}
            J = v[J] = Oa
        }
        zb =
            J.top;
        Tb = J.left;
        y && (zb += y.top, Tb += y.left);
        y = {
            top: zb,
            left: Tb,
            width: J.clientWidth,
            height: J.clientHeight
        };
        wa(n) && (y.width = J.offsetWidth, y.height = J.offsetHeight);
        return y
    }

    function pa(n) {
        return n.area > ya && n.v && 0 === n.is && 0 < n.time
    }

    function oa(n, v) {
        for (var y = 0; y < v.length; y++) {
            var J = v[y],
                L = 0,
                Z = J === n ? 2 : 0;
            pa(J) && (Z = Math.max(Z, 1));
            0 === Z && (L = 0, J.v || (L += 1), J.area > ya || (L += 2), 0 !== J.is && (L += 4));
            J.relevance = Z;
            J.ireason = L
        }
    }

    function Q(n) {
        if (n.length) return D.dT_.red(n, function(v, y) {
            return pa(y) && (!v || v.time <= y.time) ?
                y : v
        }, void 0)
    }

    function ba() {
        var n = D.dT_.bcv,
            v = D.dT_.scv,
            y = D.dT_.ncv,
            J = D.dT_.de(v("iub"));
        try {
            J && (Fa = new RegExp(J, "i"))
        } catch (L) {}
        xa = n("vcfi");
        Ja = y("vcx");
        lb = y("tvc");
        Qa = v("uana");
        jb = D.dT_.puesc(v("mb"));
        ic = y("vcit");
        Kb = 1E3 * y("oat");
        Jb = n("fvdi");
        Mc = y("vscl");
        ya = y("vct");
        kc = n("ccNcss");
        td = n("vrt");
        Ad = n("vcsb")
    }

    function E(n) {
        for (var v = 0; v < Rc.length; v++)
            if (Rc[v] === n) {
                Rc.splice(v, 1);
                break
            }
    }

    function P(n, v) {
        void 0 === v && (v = !1);
        for (var y = Rc.slice(), J = Rc.length = 0; J < y.length; J++)(0, y[J])(n, v)
    }

    function aa(n) {
        return !!n &&
            "about:blank" !== n && n !== location.href && n !== location.href.substring(0, location.href.lastIndexOf("/") + 1) && n !== document.baseURI
    }

    function la(n) {
        try {
            return !!n.contentWindow && !D.dT_.gNNTV(n.contentWindow.performance, "loadEventEnd")
        } catch (v) {
            return !1
        }
    }

    function ha(n) {
        return !!n.area
    }

    function W(n, v) {
        void 0 === v && (v = ua);
        return v.getComputedStyle(n)
    }

    function wa(n) {
        var v = jd.get(n);
        if (v) return v;
        v = (eb(n, 9) || n && n.nodeType && 1 === n.nodeType) && ("string" === typeof n.textContent || "string" === typeof n.innerText);
        jd.set(n,
            v);
        return v
    }

    function Ra() {
        var n = D.dT_.gto();
        return function(v, y) {
            var J = y.duration,
                L = n + y.startTime + J;
            !J && qa(y) && (L = n + y.responseEnd);
            return Math.max(v, L)
        }
    }

    function gb(n, v, y) {
        if (n) {
            var J;
            var L = (J = {}, J.time = n.time, J.offset = n.offset, J.area = n.area, J.url = n.url, J.v = n.v, J.node = n.node, J.is = 0, J.ts = n.ts, J);
            L.v && (L.v = v);
            y.push(L)
        }
    }

    function pb(n) {
        var v;
        try {
            if (n && n.dT_) {
                var y = n.dT_;
                if (y && "ea" in y) {
                    var J;
                    if (J = "10303241106123517" === y.version && !!y.gLVD) {
                        var L = ua.dT_,
                            Z = !L.bcv("ac") || L.scv("app") === y.scv("app"),
                            ja = L.scv("postfix"),
                            va = y.scv("postfix");
                        J = Z && ja === va
                    }
                    var Oa = J
                } else Oa = !1;
                Oa && (v = y)
            }
        } catch (Va) {}
        return v
    }

    function Vb(n, v, y, J, L, Z, ja) {
        return bb(this, void 0, void 0, function() {
            var va, Oa;
            return kb(this, function(Va) {
                switch (Va.label) {
                    case 0:
                        return (va = Ga(n, v, y, J)) && v.contentWindow ? [4, Lb(n, v.contentWindow, va.offset, void 0, L)] : [3, 2];
                    case 1:
                        Oa = Va.B(), D.dT_.fE(Oa, function(zb) {
                            zb.v = zb.v && Z;
                            ja.push(zb)
                        }), Va.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }

    function na(n, v, y) {
        var J = n.gLVD();
        return J ? (gb(J.k, v, y), M.resolve()) : new M(function(L) {
            n.addE("VISUALLY_COMPLETE",
                function(Z) {
                    gb(Z.detail.k, v, y);
                    L()
                })
        })
    }

    function Db(n, v, y, J, L, Z, ja) {
        void 0 === ja && (ja = !1);
        return new M(function(va, Oa) {
            var Va = !1,
                zb;
            ma(n) || (zb = W(v, y));
            var Tb = zb && zb.backgroundImage;
            if (Tb && "none" !== Tb) {
                var tc = D.dT_.aM(Tb.split(","), dc);
                Tb = 0;
                for (tc = D.dT_.aFr(tc, ec); Tb < tc.length; Tb++) {
                    var pc = tc[Tb];
                    (pc = Ga(n, v, zb, Z, J, D.dT_.tau(pc))) && L.push(pc)
                }
            }
            if (cb(v)) {
                var Xc = v.contentWindow;
                Va = function() {
                    var vd = zb,
                        je = ja,
                        Xd = pb(Xc),
                        Ie = !sa(n, v) && Ha(Z);
                    (Xd ? na(Xd, Ie, L) : Vb(n, v, vd, Z, je, Ie, L)).then(va).catch(Oa)
                };
                !ja && la(v) ?
                    (v.addEventListener("load", Va), v.addEventListener("error", Va)) : Va();
                Va = !0
            }
            Ta(v) && (pc = Pb(v)) && (Tb = Ga(n, v, zb, Z, J, pc)) && L.push(Tb);
            Va || va()
        })
    }

    function zc(n, v, y, J, L, Z) {
        void 0 === Z && (Z = !1);
        return bb(this, void 0, void 0, function() {
            var ja, va;
            return kb(this, function(Oa) {
                switch (Oa.label) {
                    case 0:
                        return Oa.H.push([0, 6, , 7]), ja = Na(v, n.Da), va = y.getComputedStyle(v), (wa(v) ? v.offsetWidth * v.offsetHeight > ya : v.clientWidth * v.clientHeight > ya) ? Da(ja) ? [4, Db(n, v, y, J, L, ja, Z)] : [3, 2] : [3, 3];
                    case 1:
                        Oa.B(), Oa.label = 2;
                    case 2:
                        return [3,
                            5
                        ];
                    case 3:
                        return D.dT_.iIO(v, 10) || va.backgroundImage && "none" !== va.backgroundImage ? [4, Db(n, v, y, J, L, ja, Z)] : [3, 5];
                    case 4:
                        Oa.B(), Oa.label = 5;
                    case 5:
                        return [3, 7];
                    case 6:
                        return Oa.B(), [3, 7];
                    case 7:
                        return [2]
                }
            })
        })
    }

    function Ec(n) {
        return Bd ? Qb(1, n).concat(Qb(2, n)) : []
    }

    function hb(n) {
        return function(v) {
            var y = D.dT_.gto(),
                J = v.time - y;
            y = (v.endTime || v.time) - y;
            return {
                name: v.url,
                failedResource: n,
                startTime: J,
                responseEnd: y,
                duration: y - J,
                _dtCl: !0
            }
        }
    }

    function Qb(n, v) {
        var y = D.dT_.aM(Wc[n][v] || [], hb(n));
        v ? delete Wc[n][v] : Wc[n] = {};
        return y
    }

    function qc(n) {
        return !n.time
    }

    function Hb(n, v, y) {
        n = n.getEntriesByName(y.url, "resource")[0];
        qa(n) ? (y.time = Math.round(v + n.responseEnd), y.ts = 0) : y.time = 0
    }

    function vc(n, v) {
        var y = null,
            J = 0;
        try {
            y = v.performance, J = D.dT_.gNTO(y)
        } catch (L) {}
        y && (n = D.dT_.aFr(n, qc), D.dT_.fE(n, Hb.bind(null, y, J)))
    }

    function ec(n) {
        return !(!n || !n.startsWith("http"))
    }

    function cc(n, v) {
        return "loading" in HTMLImageElement.prototype && "lazy" === n.getAttribute("loading") && !Ha(Na(n, v))
    }

    function Pb(n) {
        try {
            if (n.srcset) return n.currentSrc;
            var v = n.parentElement;
            if (v && "PICTURE" === v.nodeName)
                for (var y = 0; y < v.children.length; y++)
                    if ("SOURCE" === v.children[y].tagName) return n.currentSrc;
            return n.currentSrc || n.src
        } catch (L) {
            try {
                var J = n.getAttribute("src");
                return J ? D.dT_.tau(J) : ""
            } catch (Z) {
                return ""
            }
        }
    }

    function Lb(n, v, y, J, L) {
        void 0 === L && (L = !1);
        return bb(this, void 0, void 0, function() {
            var Z, ja;
            return kb(this, function(va) {
                switch (va.label) {
                    case 0:
                        Z = [];
                        try {
                            ja = (J || v.document).getElementsByTagName("*")
                        } catch (Oa) {
                            return [2, Z]
                        }
                        return [4, D.dT_.fEP(ja, function(Oa,
                            Va, zb, Tb) {
                            zc(n, Oa, v, y, Z, L).then(Tb).catch(ta)
                        }, void 0, !(nd.syn || L))];
                    case 1:
                        return va.B(), vc(Z, v), [2, Z]
                }
            })
        })
    }

    function Ob(n, v, y, J) {
        var L = {
            Td: [],
            style: void 0
        };
        if (!y && !kc || ma(J)) return L;
        y = W(n);
        if (!y) return L;
        L.style = y;
        (y = y.backgroundImage) && "none" !== y && (y = D.dT_.aM(y.split(","), dc), y = D.dT_.aFr(D.dT_.aFr(y, ec), aa), L.Td = D.dT_.aM(y, Xa.bind(null, v, n)));
        return L
    }

    function dc(n) {
        void 0 === n && (n = "");
        Nd.lastIndex = 0;
        return (n = Nd.exec(n)) && 1 < n.length ? n[1] || n[2] || n[3] : ""
    }

    function Fb(n, v, y, J) {
        if (xa && !n.dT_vcInstr &&
            !cc(n, J.Da))
            if (Ta(n)) {
                if (y = Pb(n), aa(y) && ec(y)) {
                    y = {
                        url: y,
                        time: D.dT_.nw(),
                        element: n
                    };
                    n.dT_vcInstr = !0;
                    a: if (n.complete && !n.naturalWidth) {
                        if (D.dT_.gBI().ff) {
                            var L = J = Pb(n),
                                Z = J.indexOf("?");
                            0 <= Z && (L = J.substring(0, Z));
                            if (L.endsWith(".svg")) {
                                J = "UNKNOWN";
                                break a
                            }
                        }
                        J = "FAILED"
                    } else J = n.complete ? "SUCCESSFUL" : "PENDING";
                    switch (J) {
                        case "FAILED":
                            Ua(y, 1, v);
                            break;
                        case "PENDING":
                            rb(n, y, v)
                    }
                }
            } else wa(n) && Ob(n, v, y, J)
    }

    function G(n, v, y, J) {
        var L = v.contentWindow;
        if (!L) return M.resolve();
        var Z = pb(L),
            ja = !sa(n, v) && Ha(J);
        return Z ?
            na(Z, ja, n.na) : Lb(n, L, y).then(function(va) {
                var Oa;
                (Oa = n.na).push.apply(Oa, D.dT_.aM(va, function(Va) {
                    var zb;
                    return Ka(Ka({}, Va), (zb = {}, zb.v = Va.v && ja, zb))
                }))
            })
    }

    function fa() {
        P("f", !0);
        return Sd
    }

    function Ca() {
        var n = nd;
        n.gUI = Ec;
        n.vWW = U;
        n.vWH = Ea;
        n.gVCP = fa;
        n.gLVD = Sa
    }

    function da(n) {
        for (var v = 0, y = 0, J = 0, L = D.dT_.red(n, function(va, Oa) {
                return va + Oa.yc
            }, 0), Z = 0; Z < n.length; Z++) {
            var ja = n[Z];
            y = ja.time - y;
            0 < y && 1 > J && (v += (1 - J) * y);
            J += ja.yc / L;
            y = ja.time
        }
        return Math.round(v)
    }

    function yb(n, v, y) {
        var J = [],
            L;
        for (L in n)
            if (D.dT_.oHOP(n,
                    L)) {
                var Z = n[L].$a;
                J.push({
                    time: +L - y,
                    yc: Z / v,
                    $a: Z
                })
            }
        J.sort(function(ja, va) {
            return ja.time - va.time
        });
        return J
    }

    function tb(n) {
        return n.v
    }

    function Ya(n, v) {
        var y, J = v.time;
        v = v.area;
        null !== (y = n[J]) && void 0 !== y ? y : n[J] = {
            $a: 0,
            yc: 0,
            time: 0
        };
        n[J].$a += v;
        return n
    }

    function w(n) {
        n.Ua--;
        V(n)
    }

    function B(n, v) {
        var y = -1;
        if (v) {
            y = Math;
            var J = v.time;
            y = y.round.call(y, 0 > J ? -1 : J - n.Ya);
            y >= Kb ? (n.trigger = "t", y = -2) : 0 > y && (y = -1);
            var L = v.node;
            if (L) {
                J = v.area;
                var Z = {
                    left: NaN,
                    top: NaN
                };
                try {
                    Z = L.getBoundingClientRect()
                } catch (Va) {}
                var ja = Qa.split(",");
                J = {
                    location: {
                        x: Math.ceil(Z.left),
                        y: Math.ceil(Z.top)
                    },
                    size: Math.ceil(J),
                    Ki: L.getAttribute("class"),
                    id: L.getAttribute("id"),
                    name: L.getAttribute("name"),
                    tagName: L.tagName,
                    pg: D.dT_.gecsss(L)
                };
                for (Z = 0; Z < ja.length; Z++) {
                    var va = ja[Z],
                        Oa = L.getAttribute(va);
                    if (Oa) {
                        J.Fh = {
                            key: va,
                            value: Oa
                        };
                        break
                    }
                }
                J ? (L = J.Fh, va = J.location, Oa = J.size, ja = J.tagName, Z = J.pg, J = D.dT_.aesc(J.name || ""), va = [va.x, va.y, Oa], J && va.push("n;".concat(J)), L && va.push("u;".concat(D.dT_.aesc(L.key), ",").concat(D.dT_.aesc(L.value))), Z ? va.push("s;".concat(D.dT_.aesc(Z))) :
                    va.push("t;".concat(D.dT_.aesc(ja))), J = va.join("|")) : J = "";
                v.kd = J
            }
            n.Qg && (Bd = !0)
        }
        return y
    }

    function K(n, v, y) {
        var J = D.dT_.nw() - v.Ud,
            L = D.dT_.nw(),
            Z = D.dT_.aFr(v.na, ha);
        var ja = v.Ya;
        D.dT_.nw();
        for (var va = Z.length - 1; 0 < va; va--)
            for (var Oa = Z[va], Va = va - 1; 0 <= Va; Va--) {
                var zb = Z[Va],
                    Tb = zb.area,
                    tc = Oa.area;
                if (tc && Tb && 2500 < Tb) {
                    var pc = Oa.offset,
                        Xc = zb.offset,
                        vd = wc(pc.top, Xc.top),
                        je = wc(pc.left, Xc.left),
                        Xd = ud(pc.left + pc.width, Xc.left + Xc.width);
                    pc = ud(pc.top + pc.height, Xc.top + Xc.height);
                    je = wc(0, Xd - je);
                    vd = wc(0, pc - vd);
                    zb.area =
                        wc(0, Tb - ud(Math.round(je * vd), tc))
                }
            }
        Z = D.dT_.aFr(Z, tb);
        Z = D.dT_.red(Z, Ya, {});
        ja = yb(Z, U() * Ea(), ja);
        Jd = da(ja);
        Jd > n && (Jd = n);
        D.dT_.nw();
        ja = Jd;
        L = D.dT_.nw() - L;
        n = [
            ["V", n + "|" + v.trigger],
            ["VCD", J + ""],
            ["VCDS", L + ""],
            ["VCS", v.Ud - v.Ya + ""],
            ["VCO", v.Qe - v.Ya + ""],
            ["VCI", v.gd + ""]
        ];
        y && n.push(["TS", y.ts + ""]);
        (y = (null === y || void 0 === y ? void 0 : y.kd) || "") && n.push(["VE", y]);
        n.push(["S", (0 <= ja ? ja : -1) + ""]);
        D.dT_.cAE("_vc_", n, v.D, v.Ya)
    }

    function H(n) {
        var v, y, J;
        "n" === n.trigger && (n.trigger = n.Ma ? "f" : "c");
        n.na.sort(function(va, Oa) {
            return va.time -
                Oa.time
        });
        var L = Q(n.na),
            Z = B(n, L);
        K(Z, n, L);
        oa(L, n.na);
        Sd = Z;
        var ja = (v = {}, v.t = n.trigger, v.k = L, v.v = Z, v);
        id = ja;
        D.dT_.disE((y = {}, y.kind = "VISUALLY_COMPLETE", y.detail = Ka(Ka({}, ja), (J = {}, J.a = n.D, J.e = n.na, J)), y));
        L && (L.node = null);
        n.na = [];
        E(n.ne);
        n.ue = !0;
        n.kh(-1 < Z ? n.Ya + Z : -1)
    }

    function V(n) {
        var v = n.ge === n.ke,
            y = !n.Ua;
        v && y && n.qa && (D.dT_.ct(n.qa), n.qa = 0);
        !n.ue && y && (!n.wb.length && v || n.Ma) && H(n)
    }

    function I() {
        var n = !1;
        xa && D.dT_.addE("INSTRUMENTATION_TRIGGERED", function() {
            if (!n) {
                n = !0;
                for (var v = document.getElementsByTagName("*"),
                        y = {
                            fd: 0,
                            gd: 0,
                            Da: new WeakMap
                        }, J = 0; J < v.length; J++) Fb(v[J], D.dT_.lAID(), !0, y)
            }
        })
    }

    function Ma() {
        var n;
        jd = new WeakMap;
        I();
        kd = !(null === (n = document.body) || void 0 === n || !n.childElementCount);
        D.dT_.las() || D.dT_.aMO(D.dT_.lAID());
        D.dT_.addE("ACTION_ENTERED", function(v) {
            D.dT_.aMO(v.detail.i);
            v.detail.i === v.detail.r && P("u")
        });
        D.dT_.addE("ACTION_CLOSED", function(v) {
            var y = v.detail,
                J = y.i,
                L = y.r;
            v = y.f;
            var Z = y.a;
            if (y.dne || L !== J) D.dT_.rMO(J);
            else {
                var ja = function(Va, zb) {
                    mc(Va, J, zb) || (D.dT_.ct(va), ia(J, !0, Z, ja, Oa, Va))
                };
                y = !("visible" === document.visibilityState || !Ad);
                Rc.push(ja);
                v = ia(J, v || y, Z, ja, void 0, y ? "b" : void 0);
                var va = v.qa,
                    Oa = v.xf
            }
        });
        D.dT_.addE("ACTION_BEACON_FORCED", function() {
            P(D.dT_.las() ? "l" : "f")
        });
        D.dT_.addE("VISIBILITY_CHANGED", function(v) {
            "1" === v.detail && P("b")
        })
    }

    function ia(n, v, y, J, L, Z) {
        var ja = L || D.dT_.aAWC(n);
        if (!ja) return Sc;
        if (!v) return {
            qa: D.dT_.st(function() {
                Rb(n, ja, !1, y, J, Z)
            }, Ja),
            xf: ja
        };
        Rb(n, ja, !0, y, J, Z);
        return Sc
    }

    function Ia(n, v) {
        return function(y) {
            y = v + y.time;
            return !n || n <= y
        }
    }

    function Aa(n, v, y, J,
        L) {
        var Z = J.push;
        a: {
            var ja;
            if ((y || !n.oc.has(L)) && L.nodeType !== Node.TEXT_NODE && wa(L)) {
                var va = Ob(L, n.D, y, n),
                    Oa = va.Td;
                Ta(L) ? (Fb(L, n.D, y, n), Oa.push(L)) : cb(L) && Oa.push(L);
                if (y = L && L.nodeType && 1 === L.nodeType) try {
                    var Va = jb;
                    y = !!Va && L.matches(Va)
                } catch (Tb) {
                    y = !1
                }
                if (Oa.length && !y)
                    for (ja = 0; ja < Oa.length; ja++) Jc(Oa[ja], n, v, L, va.style);
                else Oa = Na(L, n.Da), Oa = ea(S(Oa)), sb(n, (ja = {}, ja.time = Math.round(v), ja.node = L, ja.area = Oa, ja.v = !sa(n, L, va.style), ja.url = "", ja.offset = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    }, ja.is = y ? 1 : 0, ja.ts =
                    1, ja));
                try {
                    if (L.hasChildNodes()) {
                        var zb = L.childNodes;
                        break a
                    }
                } catch (Tb) {}
            }
            zb = []
        }
        Z.call(J, zb)
    }

    function vb(n, v) {
        return bb(this, void 0, void 0, function() {
            var y, J, L;
            return kb(this, function(Z) {
                switch (Z.label) {
                    case 0:
                        return y = !v.Ma, J = D.dT_.gXACT(v.D)[0], L = n, J ? [4, D.dT_.fP(n, Ia(J, D.dT_.gto()), y)] : [3, 2];
                    case 1:
                        L = Z.B(), Z.label = 2;
                    case 2:
                        return [4, D.dT_.fEP(L, function(ja, va, Oa, Va) {
                            var zb = [],
                                Tb = ja.time;
                            D.dT_.fEP(ja.nodes, Aa.bind(null, v, Tb, !0, zb), Tb, y).then(function() {
                                return D.dT_.fEP(zb, function(tc, pc, Xc, vd) {
                                    D.dT_.fEP(tc,
                                        Aa.bind(null, v, Tb, !1, zb), null, y, !0).then(vd).catch(ta)
                                }, null, y, !0)
                            }).then(Va).catch(ta)
                        }, null, y, !0)];
                    case 3:
                        return Z.B(), [2, v]
                }
            })
        })
    }

    function ub(n, v, y) {
        D.dT_.ct(n.eb);
        D.dT_.ct(n.vb);
        D.dT_.rMO("vc-timeout-".concat(v));
        n.eb = -1;
        n.vb = -1;
        Mb(v, y, !0)
    }

    function mb(n, v) {
        var y = {
            vb: -1,
            eb: -1
        };
        y.vb = D.dT_.st(function() {
            ub(y, n, v)
        }, lb);
        xb(n, v, y);
        D.dT_.aMO("vc-timeout-".concat(n), function() {
            xb(n, v, y)
        });
        return y
    }

    function xb(n, v, y) {
        D.dT_.ct(y.eb);
        y.eb = D.dT_.st(function() {
            ub(y, n, v)
        }, ic)
    }

    function Mb(n, v, y) {
        return bb(this,
            void 0, void 0,
            function() {
                var J, L;
                return kb(this, function(Z) {
                    switch (Z.label) {
                        case 0:
                            J = D.dT_.gMN(n);
                            D.dT_.rMO(n);
                            v.Qe = D.dT_.nw();
                            v.Ua++;
                            if (!y || !kd && !Jb) return [3, 2];
                            v.Ua++;
                            return [4, Lb(v, ua, void 0, void 0, v.Ma)];
                        case 1:
                            return L = Z.B(), D.dT_.fE(L, sb.bind(null, v)), w(v), [3, 3];
                        case 2:
                            J.length || V(v), Z.label = 3;
                        case 3:
                            return [4, vb(J, v)];
                        case 4:
                            return Z.B(), w(v), [2]
                    }
                })
            })
    }

    function sb(n, v) {
        var y = v.node;
        if (y) {
            if (n.oc.has(y)) {
                (y = n.oc.get(y)) && v.time > n.na[y].time && (n.na[y] = v);
                return
            }
            n.oc.set(y, n.na.length)
        }
        n.na.push(v)
    }

    function Rb(n, v, y, J, L, Z) {
        void 0 === Z && (Z = "n");
        E(L);
        L = D.dT_.lAID() === n;
        var ja = {
            Ya: J,
            ge: 0,
            ke: 0,
            Ua: 0,
            ue: !1,
            Ud: D.dT_.nw(),
            Qe: 0,
            qa: D.dT_.st(function() {
                ja.Ma = !0;
                ja.Ua = 0;
                V(ja)
            }, Kb),
            wb: [],
            ng: [],
            na: [],
            oc: new WeakMap,
            Qg: L,
            kh: v,
            D: n,
            trigger: Z,
            Ma: y,
            fd: 0,
            gd: 0,
            Da: new WeakMap,
            ne: function(Oa, Va) {
                mc(Oa, n, Va) || (ja.Ma = !0, ja.Ua = 0, ja.trigger = Oa, 0 <= va.eb && 0 <= va.vb && ub(va, n, ja), V(ja))
            }
        };
        if ("b" === Z) V(ja);
        else {
            var va = {
                eb: -1,
                vb: -1
            };
            Rc.push(ja.ne);
            L && !y ? va = mb(n, ja) : Mb(n, ja, L)
        }
    }

    function mc(n, v, y) {
        return v !== D.dT_.lAID() && (y ||
            "u" === n)
    }

    function Hc(n, v, y, J, L, Z, ja) {
        var va, Oa = D.dT_.tau(n),
            Va = Fa;
        Va = Oa && Va && Va.test(Oa);
        var zb = ea(S(J)),
            Tb = (va = {}, va.url = Oa, va.time = Math.round(v), va.node = y, va.v = !sa(L, y, ja), va.area = zb, va.offset = J, va.is = Va ? 2 : 0, va.ts = 1, va);
        sb(L, Tb);
        J = Ta(y);
        ja = cb(y);
        n = J && !y.complete && !n.startsWith("data:") || ja && la(y);
        L.ge++;
        L.wb.push({
            name: Tb.url,
            startTime: v
        });
        if (!n || L.Ma || Va)(J || ja) && yd(y, L, Tb, Z, !0);
        else {
            var tc = function() {
                L.Da.delete(y);
                yd(y, L, Tb, Z, !1);
                y.removeEventListener("load", tc);
                y.removeEventListener("error",
                    tc)
            };
            y.addEventListener("load", tc);
            y.addEventListener("error", tc)
        }
    }

    function fe(n) {
        return n.currentSrc || n.getAttribute("src") || n.getAttribute("href") || ""
    }

    function Fc(n, v, y, J, L) {
        var Z, ja = Fa;
        ja = (n = D.dT_.tau(n)) && ja && ja.test(n);
        var va = L === v;
        return Z = {}, Z.url = n, Z.time = Math.round(y), Z.node = v, Z.v = !1, Z.area = 0, Z.offset = J, Z.is = ja ? 2 : 0, Z.w = va ? v.width : L.clientWidth, Z.h = va ? v.height : L.clientHeight, Z.nw = va ? v.naturalWidth : v.width, Z.nh = va ? v.naturalHeight : v.height, Z.ts = 1, Z
    }

    function Jc(n, v, y, J, L) {
        var Z = fe(n);
        if (aa(Z) &&
            !cc(n, v.Da) && !v.wb.some(function(va) {
                return va.name === Z
            })) {
            var ja = Na(J, v.Da);
            Ta(n) && !n.width || Da(ja) ? (Ha(ja) || Ta(n)) && Hc(Z, y, n, ja, v, J, L) : Ta(n) && v.na.push(Fc(Z, n, y, ja, J))
        }
    }

    function Ic(n, v, y, J) {
        var L = [{
            xd: n.ts,
            time: n.time
        }];
        !J && td ? L.push({
            xd: 2,
            time: v
        }) : (v = Math.round(D.dT_.red(y, Ra(), 0)), 0 < v && L.push({
            xd: 0,
            time: v
        }));
        L = L.sort(ge)[0];
        n.time = L.time;
        n.ts = L.xd
    }

    function yd(n, v, y, J, L) {
        var Z = ua.performance,
            ja = y.url,
            va = D.dT_.nw();
        Ic(y, va, Z.getEntriesByName(ja, "resource"), L);
        L || (y.o = va);
        Z = S(Na(J || n, v.Da));
        y.area =
            ea(Z);
        y.node = J;
        if (Ta(n)) {
            var Oa = J === n;
            y.w = Oa ? n.width : J.clientWidth;
            y.h = Oa ? n.height : J.clientHeight;
            y.nw = Oa ? n.naturalWidth : n.width;
            y.nh = Oa ? n.naturalHeight : n.height
        }
        v.ke++;
        J = D.dT_.aFI(v.wb, function(Va) {
            return Va.name === ja
        }); - 1 !== J && (J = v.wb.splice(J, 1)[0], v.ng.push(J.name), L && v.Ma && Ua({
            time: J.startTime,
            url: J.name,
            isVisible: pa(y),
            element: y.node,
            endTime: va
        }, 2, v.D), cb(n) && (v.Ua++, G(v, n, y.offset, Z).then(w.bind(null, v)).catch(ta)), V(v))
    }

    function ge(n, v) {
        return v.time - n.time
    }

    function sd(n) {
        n = n.detail;
        var v =
            n.i,
            y = n.a;
        n.r === v && D.dT_.cAE("_vc_", [
            ["V", "-3"],
            ["S", "-3"]
        ], v, y)
    }
    var M = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        D = "undefined" !== typeof window ? window : self,
        ua = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        Ba;
    (function(n) {
        n.ANCHOR = "A";
        n.BUTTON = "BUTTON";
        n.FORM = "FORM";
        n.I_FRAME = "IFRAME";
        n.IMAGE = "IMG";
        n.INPUT = "INPUT";
        n.LABEL = "LABEL";
        n.LINK = "LINK";
        n.OPTION = "OPTION";
        n.SCRIPT = "SCRIPT";
        n.SELECT = "SELECT";
        n.STYLE = "STYLE";
        n.TEXT_AREA = "TEXTAREA"
    })(Ba || (Ba = {}));
    var ya = -1,
        Fa = null,
        xa = !1,
        Ja = -1,
        lb = -1,
        Qa = "",
        jb = "",
        ic = -1,
        Kb = -1,
        Jb = !1,
        kc = !1,
        Mc = 0,
        td = !1,
        Ad = !1,
        Bd = !1,
        nd, Id, Sd, id, Pc, Cd = {},
        Wc = (Pc = {}, Pc[1] = {}, Pc[2] = {}, Pc),
        ae = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        Rc = [],
        ie = ua.document.documentElement,
        od, Dd, jd, Nd = /url\s*\(\s*(?:'(\S*?)'|"(\S*?)"|((?:\\\s|\\\)|\\"|\\'|\S)*?))\s*\)/gi,
        Ed;
    (function(n) {
        n.FAILED = "FAILED";
        n.PENDING = "PENDING";
        n.SUCCESSFUL = "SUCCESSFUL";
        n.UNKNOWN = "UNKNOWN"
    })(Ed || (Ed = {}));
    var ud = Math.min,
        wc = Math.max,
        Jd = -1,
        kd, Sc = {
            qa: 0,
            xf: void 0
        };
    (function() {
        var n, v, y = ua.dT_;
        if (y && y.smbi && y.iMod) {
            nd = y;
            (y = D.dT_.tdto()) && "ea" in y && (Id = y);
            y = D.dT_.iMod().includes("V");
            var J = D.dT_.smbi("V");
            var L = ua.performance;
            var Z = Id.syn;
            L = !!ua.MutationObserver && !(null === L || void 0 === L || !L.getEntriesByType) || Z;
            if (null === (v = (n = D.dT_).ssmbi) || void 0 === v ? 0 : v.call(n, "V", !1, L, J)) return y || D.dT_.iMod("V"), ba(), D.dT_.addE && D.dT_.addE("CONFIG_UPDATE", ba), Ma(), !0;
            !J || y || L || D.dT_.addE("ACTION_BEFORE_SEND", sd)
        }
        return !1
    })() && Ca()
})();
(function() {
    function Ka(U, S) {
        function sa(Ga) {
            return !(!Ga || !Ga[U])
        }
        var ma = 0;
        if (S) {
            var ea = document.getElementById(S);
            if (sa(ea)) return ea;
            Xa.dT_.addE("DEBUG_INFO_REQUESTED", function() {
                return [{
                    type: "mvi",
                    severity: "Info",
                    text: 'Could not find vue element with configured id "'.concat(S, '"')
                }]
            })
        }
        return sa(document.body) ? document.body : sa(document.body.firstElementChild) ? document.body.firstElementChild : document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function(Ga) {
                ma++;
                return sa(Ga) ||
                    50 === ma ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        }).nextNode()
    }

    function bb(U) {
        var S;
        if (Ua.Vue && Ua.Vue.version) {
            var sa = Ua.Vue.version;
            "2" === sa.split(".")[0] && "__vue__" === U && (S = sa);
            "3" === sa.split(".")[0] && "__vue_app__" === U && (S = sa)
        }(sa = Ka(U, Xa.dT_.scv("vrei"))) && sa[U] && (Xa.dT_.iVRA(sa, U), S || (S = ""));
        return S
    }

    function kb(U) {
        for (var S = Ua, sa = 0; sa < U.length; sa++)
            if (S = U[sa], "function" === typeof S) S = S.apply(this);
            else {
                var ma = S.split(".");
                S = Ua;
                for (var ea = 0; ea < ma.length && "undefined" !== typeof S && null != S; ea++) S = -1 === ma[ea].indexOf("()") ? S[ma[ea]] : S[ma[ea].replace("()", "")]();
                if ("undefined" !== typeof S) break
            }
        return S
    }

    function eb() {
        var U = [],
            S = 0,
            sa = Array.prototype,
            ma = sa.concat,
            ea = [];
        for (Q in Ea)
            if (Xa.dT_.oHOP(Ea, Q)) try {
                var Ga = Ea[Q];
                "object" !== typeof Ga && (Ga = [], Ga[0] = Ea[Q]);
                var Na = kb(Ga);
                if ("string" === typeof Na || Xa.dT_.iIO(Na, 3)) ea.push(Q + ("b" === Q ? Na : Na.split(/-|_| /)[0]));
                else if ("object" === typeof Na && Na.length)
                    for (var pa = Na.length, oa = 0; oa < pa; oa++) ea.push(Q + Na[oa]);
                else void 0 !== Na && ea.push(Q + "x")
            } catch (E) {}
        var Q = [];
        for (var ba in Ha)
            if (Xa.dT_.oHOP(Ha, ba))
                if (Ha[ba].startsWith("url"))
                    for (Ga = Ha[ba].replace("url:", ""), Na = document.getElementsByTagName("script"), pa = 0; pa < Na.length; pa++) try {
                        if (Na[pa].src && Na[pa].src.includes(Ga)) {
                            Q.push(ba);
                            break
                        }
                    } catch (E) {} else "undefined" !== typeof Ua[Ha[ba]] && Q.push(ba);
        for (sa = ma.call(sa, ea, Q); S < sa.length; S++) ma = sa[S], qa[ma] || (U.push(ma), qa[ma] = !0);
        return U
    }

    function cb(U, S, sa, ma) {
        S || 20 < rb || (ta.length || (ta = eb(), rb++), ta.length && (U.av(ma, "fd", Xa.dT_.aesc(ta.join(";")), !1), ta = []))
    }

    function Ta(U) {
        U.detail.i === Xa.dT_.lAID() && (ta = eb(), Xa.dT_.remE("ACTION_CLOSED", Ta))
    }

    function Sa(U, S, sa) {
        var ma = 0;
        try {
            if (3 >= sa && !Xa.dT_.iIO(U, 8))
                if ("object" === typeof U && !S.includes(U)) {
                    S.push(U);
                    for (var ea in U) Xa.dT_.oHOP(U, ea) && (ma++, ma += Sa(U[ea], S, sa + 1))
                } else if (Array.isArray(U) && !S.includes(U)) {
                S.push(U);
                for (var Ga = 0; Ga < U.length; Ga++) ea = U[Ga], ma += Sa(ea, S, sa + 1)
            }
        } catch (Na) {}
        return ma
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Xa = "undefined" !== typeof window ? window : self,
        Ua = "undefined" !== typeof globalThis ? globalThis :
        "undefined" !== typeof window ? window : void 0,
        Pa, Za, rb = 0,
        qa = [],
        ta = [],
        Ha = {
            fueldeck: "FDUPA",
            soasta: "url:c.go-mpulse.net",
            monitis: "JSBenchmark",
            pingdom: "PRUM_EPISODES",
            newrelic: "NREUM",
            appdynamics: "ADRUM",
            appneta: "_tly",
            pendo: "pendo",
            heap: "heap",
            mixpanel: "mixpanel",
            amplitude: "amplitude",
            tealeaf: "TLT",
            datadog: "DD_RUM",
            elastic: "elasticApm",
            requestmetrics: "RM",
            instana: "ineum",
            plumbr: "PLUMBR",
            glassbox: "_detector",
            decibelinsight: "decibelInsight",
            contentsquare: "CS_CONF",
            hotjar: "hjBootstrap",
            quantummetric: "QuantumMetricAPI",
            fullstory: "FS"
        },
        Da;
    (function(U) {
        U.ANGULAR = "g";
        U.DATA_LAYER = "b";
        U.NEXT = "p";
        U.NUXT = "n";
        U.REACT = "r";
        U.VUE = "v";
        U.VUE3 = "k"
    })(Da || (Da = {}));
    var Ea = (Pa = {}, Pa.g = function() {
        if (document.querySelectorAll) {
            for (var U = Array.prototype.slice.call(document.querySelectorAll("[ng-version]")), S = [], sa = 0, ma = U.length; sa < ma; sa++) S.push(U[sa].getAttribute("ng-version"));
            return S.length ? S : void 0
        }
    }, Pa.b = function() {
        var U = Ua.dataLayer,
            S = [];
        if (U && U.length) {
            for (var sa = 0, ma = 0; ma < U.length; ma++) {
                var ea = U[ma];
                if ("object" === typeof ea &&
                    !S.includes(ea)) {
                    S.push(ea);
                    for (var Ga in ea) Xa.dT_.oHOP(ea, Ga) && (sa++, sa += Sa(ea[Ga], S, 0))
                }
            }
            sa ? (U = "1-5", 500 < sa ? U = "501+" : 100 < sa ? U = "101-500" : 50 < sa ? U = "51-100" : 10 < sa ? U = "11-50" : 5 < sa && (U = "6-10"), sa = U) : sa = void 0;
            return sa
        }
    }, Pa.v = function() {
        return bb("__vue__")
    }, Pa.k = function() {
        return bb("__vue_app__")
    }, Pa.r = function() {
        if (Ua.React && Ua.React.Component) return (Ua.React.version || "") + "";
        var U = Ka("_reactRootContainer");
        if (U && U._reactRootContainer) return ""
    }, Pa.n = function() {
        var U;
        if ((null === (U = Ua.__NUXT__) || void 0 ===
                U ? 0 : U.data) || Ua.$nuxt) return ""
    }, Pa.p = function() {
        var U;
        if (Ua.__NEXT_DATA__ && Ua.__NEXT_DATA__.buildId) return ((null === (U = Ua.next) || void 0 === U ? void 0 : U.version) || "") + ""
    }, Pa);
    (function() {
        var U, S;
        (Za = Ua.dT_) && (null === (S = (U = Xa.dT_).smbi) || void 0 === S ? 0 : S.call(U, "f")) && (Xa.dT_.aBPSL(cb), Xa.dT_.addE("ACTION_CLOSED", Ta))
    })()
})();
(function() {
    function Ka() {
        if (!ha)
            if (document.querySelectorAll) {
                var G = document.querySelector("[ng-version]");
                ha = G && G.getAttribute("ng-version") || "2.0.0"
            } else ha = "2.0.0";
        return ha
    }

    function bb(G) {
        try {
            return G.toString()
        } catch (fa) {
            return ""
        }
    }

    function kb(G, fa) {
        return G.includes(fa)
    }

    function eb(G, fa) {
        return "type" in G && G.type === fa
    }

    function cb(G) {
        for (var fa in G)
            if (P.dT_.oHOP(G, fa)) {
                var Ca = G,
                    da = fa;
                P.dT_.lx(Ca[da]);
                delete Ca[da]
            }
    }

    function Ta() {
        var G = "",
            fa = P.dT_.bcv("earxa"),
            Ca = {};
        return function(da) {
            var yb,
                tb;
            if (eb(da, 13) || "ActivationStart" === da.constructor.name || kb(bb(da), "ActivationStart") || "snapshot" in da && null !== (tb = null === (yb = da.snapshot) || void 0 === yb ? void 0 : yb.routeConfig) && void 0 !== tb && tb.path) {
                var Ya, w;
                yb = [];
                for (tb = da.snapshot; tb;) {
                    var B = null !== (w = null === (Ya = tb.routeConfig) || void 0 === Ya ? void 0 : Ya.path) && void 0 !== w ? w : "";
                    B && yb.push(B);
                    tb = tb.firstChild
                }
                G = yb.join("/")
            }(eb(da, 10) || "RouteConfigLoadEnd" === da.constructor.name || kb(bb(da), "RouteConfigLoadEnd")) && (Ya = da.route.path) && Ca[Ya] && (P.dT_.lx(Ca[Ya]),
                delete Ca[Ya]);
            if (Ya = fa) Ya = eb(da, 9) || "RouteConfigLoadStart" === da.constructor.name || kb(bb(da), "RouteConfigLoadStart");
            Ya && (Ya = da.route.path) && !Ca[Ya] && (w = P.dT_.ex(Ob + Ka(), 3, Ya)) && (Ca[Ya] = w);
            (Ya = eb(da, 2) || "NavigationCancel" === da.constructor.name || kb(bb(da), "NavigationCancel") || "id" in da && "number" === typeof da.id && !!da.url && "reason" in da && !!da.reason && 3 === P.dT_.oK(da).length) || (Ya = eb(da, 16) || "NavigationSkipped" === da.constructor.name || kb(bb(da), "NavigationSkipped") || "id" in da && "number" === typeof da.id &&
                !!da.url && "reason" in da && !!da.reason && "code" in da && 4 === P.dT_.oK(da).length);
            Ya && cb(Ca);
            if (eb(da, 1) || "NavigationEnd" === da.constructor.name || kb(bb(da), "NavigationEnd") || "id" in da && "number" === typeof da.id && da.url && "urlAfterRedirects" in da && da.urlAfterRedirects && 3 === P.dT_.oK(da).length) Ya = da.urlAfterRedirects || da.url, Ya = Ya.split("?")[0], cb(Ca), G || "/" !== Ya || (G = "/"), P.dT_.sNV({
                name: Ya,
                group: G,
                id: da.id
            }, 2), G = "";
            (eb(da, 15) || "Scroll" === da.constructor.name || kb(bb(da), "Scroll") || "routerEvent" in da && da.routerEvent &&
                "position" in da && da.position && "anchor" in da && 3 === P.dT_.oK(da).length) && cb(Ca)
        }
    }

    function Sa(G) {
        return P.dT_.oHOP(G, "prototype") ? G.prototype : Object.getPrototypeOf(G)
    }

    function Xa(G) {
        if ("string" !== typeof G) return !1;
        G = G.toLowerCase();
        return pb.includes(G) || Vb.includes(G)
    }

    function Ua(G) {
        return function(fa) {
            P.dT_.rex(fa, void 0, !(fa && fa.stack), "5");
            return Fb.handleError(G, this, arguments)
        }
    }

    function Pa(G) {
        return function() {
            W || (W = !0, this && this.events && (this.events.subscribe(Ta()), 3 !== P.dT_.gVDM() && P.dT_.bcv("usrvd") &&
                P.dT_.sVDM(2)));
            return Fb.scheduleNavigation(G, this, arguments)
        }
    }

    function Za(G, fa) {
        !G._defaultOptions && ec ? fa.headers = vc ? new vc : {
            set: function(Ca, da) {
                this[Ca] = da;
                return this
            },
            has: function(Ca) {
                return !!this[Ca]
            },
            forEach: function(Ca) {
                var da = this;
                P.dT_.fE(Object.keys(da), function(yb) {
                    "set" !== yb && "has" !== yb && "forEach" !== yb && Ca.apply(da, [yb, [da[yb]]])
                })
            }
        } : G._defaultOptions && (fa.headers = {}, (G = G._defaultOptions) && G.headers && G.headers.forEach && G.headers.forEach(function(Ca, da) {
            da && (fa.headers[da] = Ca)
        }))
    }

    function rb(G,
        fa) {
        var Ca = na.includes(fa);
        return function() {
            function da(mb) {
                if (!Ma) {
                    var xb = P.dT_.nw();
                    Ma = !0;
                    P.dT_.dlx(mb, xb)
                }
            }

            function yb(mb) {
                var xb = mb.then;
                mb.then = function() {
                    for (var sb = [], Rb = 0; Rb < arguments.length; Rb++) sb[Rb] = arguments[Rb];
                    0 === sb.length && (sb[0] = function() {});
                    1 === sb.length && (sb[1] = function(mc) {
                        throw mc;
                    });
                    for (Rb = 0; Rb < sb.length; Rb++) "function" === typeof sb[Rb] && (sb[Rb] = tb(sb[Rb], 1 === Rb));
                    return yb(xb.apply(this, sb))
                };
                var Mb = mb["catch"];
                mb["catch"] = function() {
                    for (var sb = [], Rb = 0; Rb < arguments.length; Rb++) sb[Rb] =
                        arguments[Rb];
                    0 === sb.length && (sb[0] = function(mc) {
                        throw mc;
                    });
                    sb[0] && "function" === typeof sb[0] && (sb[0] = tb(sb[0], !0));
                    return yb(Mb.apply(this, sb))
                };
                return mb
            }

            function tb(mb, xb) {
                return function(Mb) {
                    var sb = !0;
                    Mb && V && "number" === typeof Mb.type && (sb = 4 === Mb.type);
                    qa(B, Mb);
                    P.dT_.ec(B);
                    try {
                        Mb && P.dT_.mx() && xb && (-1 === Mb.status ? P.dT_.mxc(B) : P.dT_.mxf(Mb.status, Mb.statusText, B));
                        var Rb = Fb.wrappedCallback(mb, this, arguments)
                    } finally {
                        P.dT_.lc(B), sb && da(B)
                    }
                    return Rb
                }
            }

            function Ya(mb) {
                return function() {
                    if (ia) {
                        var xb =
                            Fb.subscribe(mb, this, arguments, B, I, Ob);
                        xb.unsubscribe = w(xb.unsubscribe);
                        return xb
                    }
                    var Mb = xb = null;
                    B || (B = P.dT_.ex(Ob + Ka(), 3, I), xb = ta(I, B), Mb = Ha(I, B));
                    var sb = Array.prototype.slice.call(arguments);
                    if (sb[0] && sb[0].next) sb[0].next = tb(sb[0].next), sb[0].error = tb(sb[0].error, !0);
                    else if (0 === sb.length || "function" === typeof sb[0]) 0 === sb.length && (sb[0] = function() {}), 1 === sb.length && (sb[1] = function(mc) {
                        throw mc;
                    }), sb[0] = tb(sb[0]), sb[1] = tb(sb[1], !0);
                    try {
                        var Rb = Fb.subscribe(mb, this, sb, B, I, Ob);
                        Rb.unsubscribe = w(Rb.unsubscribe)
                    } finally {
                        aa.XMLHttpRequest &&
                            xb && Mb && (aa.XMLHttpRequest.prototype.open = xb, aa.XMLHttpRequest.prototype.send = Mb)
                    }
                    return Rb
                }
            }

            function w(mb) {
                return function() {
                    da(B);
                    return Fb.unsubscribe(mb, this, arguments, B, I, Ob)
                }
            }
            if (ba(this)) return Q(this), Fb.httpMethod(G, this, arguments);
            var B = 0,
                K = Array.prototype.slice.call(arguments),
                H = Xa(K[0]),
                V = K[0] && "object" === typeof K[0],
                I = "";
            I = H ? K[1] : V ? K[0].url : K[0];
            var Ma = !1,
                ia = !1,
                Ia = K[1];
            Ca || H ? Ia = K[2] : V && (Ia = K[0]);
            Ia && "object" === typeof Ia || (Ia = {});
            Ia.headers || Za(this, Ia);
            Ca || H ? K[2] = Ia : K[V ? 0 : 1] = Ia;
            oa(this);
            try {
                var Aa = Fb.httpMethod(G, this, K)
            } finally {
                Q(this)
            }
            if (Aa.toPromise) {
                var vb = Aa.toPromise;
                Aa.toPromise = function() {
                    var mb = null,
                        xb = null;
                    B || (B = P.dT_.ex(Ob + Ka(), 3, I), mb = ta(I, B), xb = Ha(I, B));
                    ia = !0;
                    try {
                        var Mb = Fb.toPromise(vb, this, arguments, B, I, Ob)
                    } finally {
                        aa.XMLHttpRequest && mb && xb && (aa.XMLHttpRequest.prototype.open = mb, aa.XMLHttpRequest.prototype.send = xb)
                    }
                    return yb(Mb)
                }
            }
            var ub = Aa.lift;
            Aa.lift = function(mb) {
                var xb = ub.apply(this, arguments);
                xb.subscribe = Ya(xb.subscribe);
                return xb
            };
            Aa.subscribe = Ya(Aa.subscribe);
            return Aa
        }
    }

    function qa(G, fa) {
        var Ca, da;
        try {
            if (fa && fa.headers) {
                var yb = fa.headers,
                    tb = {};
                P.dT_.fE(yb.keys(), function(Ya) {
                    var w = yb.getAll(Ya);
                    w && 0 < w.length && (tb[Ya] = w.join(","))
                });
                P.dT_.disE((Ca = {}, Ca.kind = "HTTP_RESPONSE", Ca.detail = (da = {}, da.a = G, da.h = tb, da), Ca))
            }
        } catch (Ya) {}
    }

    function ta(G, fa) {
        if (aa.XMLHttpRequest) {
            var Ca = aa.XMLHttpRequest.prototype.open;
            aa.XMLHttpRequest.prototype.open = function(da, yb) {
                try {
                    return this.__dtInstrumented__ || (yb !== G && P.dT_.uaxu(fa, yb), this.__dtInstrumented__ = !0, this.__dtFrameworks__ = !!fa), Ca.apply(this, arguments)
                } finally {
                    this.__dtInstrumented__ = !1
                }
            };
            return Ca
        }
    }

    function Ha(G, fa) {
        if (aa.XMLHttpRequest) {
            var Ca = aa.XMLHttpRequest.prototype.send;
            aa.XMLHttpRequest.prototype.send = function() {
                try {
                    if (!this.__dtInstrumented__) {
                        var da = {},
                            yb = P.dT_.gaxu(fa);
                        da = P.dT_.sch(da, yb && yb !== G ? yb : G, fa);
                        for (var tb in da.headers) P.dT_.oHOP(da.headers, tb) && this.setRequestHeader(tb, da.headers[tb]);
                        this.__dtInstrumented__ = !0
                    }
                    return Ca.apply(this, arguments)
                } finally {
                    this.__dtInstrumented__ = !1
                }
            };
            return Ca
        }
    }

    function Da(G) {
        function fa() {}
        G = G("", fa, fa, null, null, []);
        G = Sa(G);
        Ea(G)
    }

    function Ea(G) {
        Pb = G.create;
        cc |= 16;
        G.create = function(fa, Ca, da, yb) {
            var tb = Pb.apply(this, arguments);
            if (!da) return tb;
            try {
                var Ya = da;
                if ("string" === typeof da && (Ya = document.querySelector(da), !Ya)) return tb;
                if (!Db.length && (null === Ya || void 0 === Ya ? 0 : Ya.getAttribute)) {
                    var w = Ya.getAttribute("ng-version");
                    w && (ha = w)
                }
                Db.push(Ya)
            } catch (B) {}
            return tb
        }
    }

    function U(G) {
        try {
            if (G && ("object" === typeof G || "function" === typeof G) && !ba(G)) {
                var fa = Sa(G);
                if (fa) {
                    var Ca;
                    if (!(Ca = fa.request &&
                            fa.request.toString().includes("First argument must be a url string or Request instance")))
                        if (fa.request) {
                            var da = fa.request.toString(),
                                yb = da.includes("Response is not an ArrayBuffer.") && da.includes("Response is not a Blob.") && da.includes("Response is not a string.");
                            yb && !da.includes("headers instanceof") && (ec = !0);
                            Ca = yb
                        } else Ca = !1;
                    if (Ca) {
                        P.dT_.ti();
                        Ec = !0;
                        Ca = 0;
                        for (da = pb; Ca < da.length; Ca++) {
                            var tb = da[Ca];
                            fa[tb] && (fa[tb] = rb(fa[tb], tb))
                        }
                        cc |= 1;
                        oa(G, !0)
                    } else fa.applyUpdate && fa.init && fa.keys ? (vc = G, cc |= 2, oa(G, !0)) : P.dT_.bcv("aew") && fa.handleError && fa._findOriginalError ? (fa.handleError = Ua(fa.handleError), cc |= 4, oa(G, !0)) : fa.scheduleNavigation ? (fa.scheduleNavigation = Pa(fa.scheduleNavigation), cc |= 8, oa(G, !0)) : !Pb && fa.create && (fa.componentType || Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(fa, "componentType")) && (4 === fa.create.length && fa.create.toString().includes("ngModule should be provided") || 3 === fa.create.length && fa.create.toString().includes("createHostView")) && (Ea(fa), oa(G))
                }!Pb && "function" ===
                    typeof G && 6 === G.length && /return new \w+\(\w+(?:,\s*\w+){5}\)/.test(G.toString()) && Da(G)
            }
        } catch (Ya) {}
    }

    function S(G) {
        function fa(Ca, da, yb) {
            var tb = G.apply(this, arguments);
            if (31 === cc) return tb;
            for (var Ya in da)
                if (P.dT_.oHOP(da, Ya)) {
                    var w = void 0;
                    try {
                        w = da[Ya]
                    } catch (B) {}
                    w && U(w)
                }
            return tb
        }
        if ("function" !== typeof G || ba(G) || 31 === cc) return G;
        oa(G);
        oa(fa);
        return fa
    }

    function sa(G, fa, Ca, da) {
        Ec || (da && U(da), G && G && fa && (ha = "string" === typeof Ca ? Ca : Ca && Ca.full ? Ca.full : "2.0.0", U(G.constructor || G), U(fa)))
    }

    function ma() {
        for (var G = [], fa = 0; fa < arguments.length; fa++) G[fa] = arguments[fa];
        for (fa = 0; fa < G.length; fa++) ea(G[fa][1]);
        return qc.apply(this, arguments)
    }

    function ea(G) {
        if (Array.isArray(G)) P.dT_.fE(G, function(Ca, da) {
            G[da] = S(Ca)
        });
        else if ("object" === typeof G)
            for (var fa in G) P.dT_.oHOP(G, fa) && (G[fa] = S(G[fa]))
    }

    function Ga(G, fa, Ca) {
        ea(fa);
        return hb.apply(hb, arguments)
    }

    function Na(G, fa) {
        return P.dT_.oHOP(fa, "length") && !P.dT_.oHOP(fa, "push") && !!G
    }

    function pa(G) {
        if (aa[G]) {
            var fa = aa[G];
            "function" === typeof fa ? (hb = fa, aa[G] = Ga) : fa && Na(fa.push,
                fa) && (Qb = fa, qc = Qb.push, Qb.push = ma)
        } else P.dT_.apl(aa, G, function() {
            return Qb || hb
        }, function(Ca) {
            "function" === typeof Ca ? (hb = Ca, P.dT_.rpl(aa, G, void 0, Ga)) : Na(Ca.push, Ca) && (Qb = Ca, qc = Ca.push, P.dT_.apl(Ca, "push", function() {
                return qc
            }, function(da) {
                qc = da;
                "function" === typeof da && P.dT_.rpl(Ca, "push", void 0, ma)
            }, !0, "win"))
        }, !1, "win")
    }

    function oa(G) {
        G.__dtInstrumented__ = Hb
    }

    function Q(G) {
        delete G.__dtInstrumented__
    }

    function ba(G) {
        return !!G.__dtInstrumented__
    }

    function E() {
        P.dT_.addE("DEBUG_INFO_REQUESTED", function() {
            return Ec ?
                null : [{
                    type: "anfi",
                    severity: "Warning",
                    text: "Angular Module not fully initialized yet!"
                }]
        })
    }
    this.dT_ && dT_.prm && dT_.prm();
    var P = "undefined" !== typeof window ? window : self,
        aa = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        la;
    (function(G) {
        G.HANDLE_ERROR = "handleError";
        G.HTTP_METHOD = "httpMethod";
        G.SCHEDULE_NAVIGATION = "scheduleNavigation";
        G.SUBSCRIBE = "subscribe";
        G.TO_PROMISE = "toPromise";
        G.UNSUBSCRIBE = "unsubscribe";
        G.WRAPPED_CALLBACK = "wrappedCallback"
    })(la || (la = {}));
    var ha,
        W = !1,
        wa;
    (function(G) {
        G[G.NavigationStart = 0] = "NavigationStart";
        G[G.NavigationEnd = 1] = "NavigationEnd";
        G[G.NavigationCancel = 2] = "NavigationCancel";
        G[G.NavigationError = 3] = "NavigationError";
        G[G.RoutesRecognized = 4] = "RoutesRecognized";
        G[G.ResolveStart = 5] = "ResolveStart";
        G[G.ResolveEnd = 6] = "ResolveEnd";
        G[G.GuardsCheckStart = 7] = "GuardsCheckStart";
        G[G.GuardsCheckEnd = 8] = "GuardsCheckEnd";
        G[G.RouteConfigLoadStart = 9] = "RouteConfigLoadStart";
        G[G.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd";
        G[G.ChildActivationStart = 11] =
            "ChildActivationStart";
        G[G.ChildActivationEnd = 12] = "ChildActivationEnd";
        G[G.ActivationStart = 13] = "ActivationStart";
        G[G.ActivationEnd = 14] = "ActivationEnd";
        G[G.Scroll = 15] = "Scroll";
        G[G.NavigationSkipped = 16] = "NavigationSkipped"
    })(wa || (wa = {}));
    var Ra;
    (function(G) {
        G.ACTIVATION_START = "ActivationStart";
        G.NAVIGATION_CANCEL = "NavigationCancel";
        G.NAVIGATION_END = "NavigationEnd";
        G.NAVIGATION_SKIPPED = "NavigationSkipped";
        G.ROUTE_CONFIG_LOAD_END = "RouteConfigLoadEnd";
        G.ROUTE_CONFIG_LOAD_START = "RouteConfigLoadStart";
        G.SCROLL =
            "Scroll"
    })(Ra || (Ra = {}));
    var gb;
    (function(G) {
        G[G.NONE = 0] = "NONE";
        G[G.HTTP = 1] = "HTTP";
        G[G.HEADERS = 2] = "HEADERS";
        G[G.ERRORS = 4] = "ERRORS";
        G[G.NAV = 8] = "NAV";
        G[G.FACTORY = 16] = "FACTORY";
        G[G.ALL = 31] = "ALL"
    })(gb || (gb = {}));
    var pb = "delete get head options patch post put request".split(" "),
        Vb = ["jsonp"],
        na = ["post", "put", "patch"],
        Db = [],
        zc;
    (function(G) {
        G[G.SENT = 0] = "SENT";
        G[G.UPLOAD_PROGRESS = 1] = "UPLOAD_PROGRESS";
        G[G.RESPONSE_HEADER = 2] = "RESPONSE_HEADER";
        G[G.DOWNLOAD_PROGRESS = 3] = "DOWNLOAD_PROGRESS";
        G[G.RESPONSE = 4] = "RESPONSE";
        G[G.USER = 5] = "USER"
    })(zc || (zc = {}));
    var Ec = !1,
        hb, Qb, qc, Hb = {},
        vc, ec = !1,
        cc = 0,
        Pb, Lb, Ob = "g",
        dc, Fb = (Lb = {}, Lb.httpMethod = function(G, fa, Ca) {
                return dc.aWF(G, fa, Ca)
            }, Lb.wrappedCallback = function(G, fa, Ca) {
                return dc.aWF(G, fa, Ca)
            }, Lb.subscribe = function(G, fa, Ca, da, yb, tb) {
                return dc.aWF(G, fa, Ca, da, yb, tb)
            }, Lb.toPromise = function(G, fa, Ca, da, yb, tb) {
                return dc.aWF(G, fa, Ca, da, yb, tb)
            }, Lb.unsubscribe = function(G, fa, Ca, da, yb, tb) {
                return dc.aWF(G, fa, Ca, da, yb, tb)
            }, Lb.handleError = function(G, fa, Ca) {
                return dc.aWF(G, fa, Ca)
            }, Lb.scheduleNavigation =
            function(G, fa, Ca) {
                return dc.aWF(G, fa, Ca)
            }, Lb);
    (function() {
        var G, fa;
        return (dc = aa.dT_) && (null === (fa = (G = P.dT_).smbi) || void 0 === fa ? void 0 : fa.call(G, Ob))
    })() && (E(), Ec || (dc.initAngularNg = sa, pa("webpackJsonp"), P.dT_.scv("apn") && pa(P.dT_.scv("apn"))))
})();
(function() {
    function Ka(E, P) {
        if (!P) return "";
        var aa = E + "=";
        E = P.indexOf(aa);
        if (0 > E) return "";
        for (; 0 <= E;) {
            if (0 === E || " " === P.charAt(E - 1) || ";" === P.charAt(E - 1)) return aa = E + aa.length, E = P.indexOf(";", E), 0 <= E ? P.substring(aa, E) : P.substring(aa);
            E = P.indexOf(aa, E + aa.length)
        }
        return ""
    }

    function bb() {
        return 0 < Ea.dT_.oK(Ga).length
    }

    function kb(E) {
        var P = E.split("@");
        E = P[0];
        P = P[1];
        try {
            var aa = document.querySelector(E);
            if (!aa) return {
                info: "No elements matching the css selector '" + E + "' could be found."
            };
            if (P) {
                if (cb(aa, P)) return {
                    value: "password input field"
                };
                var la = aa.getAttribute(P);
                return la ? {
                    value: la
                } : {
                    info: "Specified attribute [".concat(P, "] contains no data.")
                }
            }
            var ha = aa.innerText || aa.textContent;
            return Sa(ha) ? {
                value: ha
            } : {
                info: "Found element contains no text content."
            }
        } catch (W) {
            return {
                info: "ERROR: retrieving meta data using selector '" + E + "' failed for reason: " + (W.message || W)
            }
        }
    }

    function eb(E) {
        var P = /([^(\n]+)\(([^)]*)\)/.exec(E);
        if (!P || 3 !== P.length) return {
            info: "Expression config [".concat(E, "] does not match function format.")
        };
        var aa = P[1],
            la = P[2] ?
            P[2].split(";") : [];
        P = ma[aa];
        if (!P || !aa || la.length < P.Ne || la.length > P.Le) return {
            info: "Function expression config [".concat(E, "] is not part of allowed functions or has invalid number of parameters.")
        };
        P = [];
        for (var ha = 0; ha < la.length; ha++) {
            var W = la[ha].split(":");
            if (2 !== W.length) return {
                info: "Function parameters for expr [".concat(E, "] are not properly configured.")
            };
            var wa = W[0];
            W = W[1];
            var Ra = parseInt(W);
            if ("Number" !== wa || isNaN(Ra))
                if ("String" === wa) P.push(W);
                else if ("Boolean" !== wa || isNaN(Ra) || 1 !== Ra &&
                0 !== Ra)
                if ("Null" === wa) P.push(null);
                else return {
                    info: "ValueType: '".concat(wa, "' or value: '").concat(W, "' is not valid.")
                };
            else P.push(!!Ra);
            else P.push(Ra)
        }
        a: {
            la = U;ha = aa.split(".");wa = ha.length - 1;
            for (Ra = 0; Ra < wa; Ra++)
                if (la = la[ha[Ra]], !la) {
                    la = null;
                    break a
                }
            la = la[ha[wa]]
        }
        if ("function" === typeof la) try {
            return W = la.apply(void 0, P), {
                value: W
            }
        } catch (gb) {
            return {
                value: "dT_err",
                info: "Error occurred while invoking the function: '" + aa + "' with the error: " + (gb.message || gb)
            }
        }
        return {
            info: "No function [".concat(E,
                "] is being found in a given scope to be executed.")
        }
    }

    function cb(E, P) {
        return E && "INPUT" === E.nodeName && "password" === E.getAttribute("type") && "value" === P.toLowerCase()
    }

    function Ta(E) {
        function P(W, wa, Ra) {
            return wa ? cb(W, wa) ? "password input field" : !W[wa] && wa.startsWith("$") ? (wa = wa.substring(1), W = JSON.parse(W), P(W[wa], la[Ra + 1], Ra + 1)) : P(W[wa], la[Ra + 1], Ra + 1) : W
        }
        try {
            var aa = E; - 1 < E.indexOf("[") && (aa = E.replace(/\[([^\]]*)]/g, ".$1"));
            var la = aa.split(".");
            var ha = P(U[la[0]], la[1], 1);
            return Sa(ha) ? {
                value: ha
            } : {
                info: "JS expression returned is null or undefined: [" +
                    typeof ha + "]."
            }
        } catch (W) {
            return {
                info: "There was an error evaluating the JS expression '" + E + "'!! error: " + (W.message || W)
            }
        }
    }

    function Sa(E) {
        return !!E || !1 === E || 0 === E
    }

    function Xa(E) {
        var P = Ea.dT_.ncv("mpl");
        (E = E.maxLength) && (P = 100 * E);
        return P
    }

    function Ua() {
        ta();
        for (var E = 0, P = "", aa = Ea.dT_.sNT(), la = 0, ha = Ea.dT_.oK(ea); la < ha.length; la++) {
            var W = ha[la],
                wa = ea[W];
            if (wa.bb && "f" !== wa.type) {
                var Ra = Q - E;
                if (P) wa.info = "Metadata limit already reached. Skipping evaluation.";
                else if (1 > Ra) P = W, wa.info = "Metadata limit reached. Metadata evaluation will stop here and will not be executed further.";
                else {
                    W = Xa(wa);
                    var gb = wa.bb;
                    var pb = {};
                    switch (wa.type) {
                        case "a":
                            pb = kb(gb);
                            break;
                        case "b":
                            pb = Ta(gb);
                            break;
                        case "c":
                            pb = Ka(gb, document.cookie);
                            pb = Sa(pb) ? {
                                value: pb
                            } : {
                                info: "No cookie [".concat(gb, "] value found.")
                            };
                            break;
                        case "d":
                            var Vb = Ea.dT_.loc();
                            pb = gb.toLowerCase();
                            if (Na[pb] && pa === Vb) pb = {
                                value: Na[pb]
                            };
                            else {
                                pa = Vb;
                                Na = {};
                                var na = U.location.search ? U.location.search.slice(1) : Vb.split("?")[1];
                                if (na) {
                                    na = na.split("#")[0];
                                    Vb = 0;
                                    for (na = na.split("&"); Vb < na.length; Vb++) {
                                        var Db = na[Vb].split("="),
                                            zc = Db[0];
                                        Db = Db[1] ?
                                            Db[1] : "";
                                        zc = zc.toLowerCase();
                                        Na[zc] || (Na[zc] = Db)
                                    }
                                    pb = Na[pb] ? {
                                        value: Na[pb]
                                    } : {
                                        info: "Searched expression [".concat(gb, "] was not found in the querystring.")
                                    }
                                } else pb = {
                                    info: "URL does not contain any query string."
                                }
                            }
                            break;
                        case "e":
                            pb = eb(gb)
                    }
                    gb = pb.value;
                    pb = pb.info;
                    Sa(gb) ? ("string" === typeof gb && (Ra < W && (gb = gb.substring(0, Ra), pb = "Because of available char length [".concat(Ra, "] captured metadata value was trimmed.")), gb.length > W && (pb = "Captured value is trimmed to configured string length of [".concat(W, "] because it is too long."),
                        gb = gb.substring(0, W))), gb += "", wa.value = gb, E += gb.length, !wa.Tc && aa && (wa.value = "dT_pv", wa.info = "Metadata value is masked because doNotTrack is active and property is not marked as public")) : wa.value = null;
                    pb && (wa.info = pb)
                }
            }
        }
        return [E, P]
    }

    function Pa(E) {
        var P = "";
        switch (E) {
            case "a":
                P = "CSS Selector";
                break;
            case "b":
                P = "JavaScript Variable";
                break;
            case "c":
                P = "Cookie";
                break;
            case "d":
                P = "Query String";
                break;
            case "e":
                P = "JavaScript Function"
        }
        return P
    }

    function Za() {
        Ua();
        for (var E = [], P = 0, aa = Ea.dT_.oK(ea); P < aa.length; P++) {
            var la =
                aa[P],
                ha = ea[la];
            "f" !== ha.type && (la = {
                id: la,
                type: Pa(ha.type),
                expression: ha.bb,
                value: ha.value
            }, ha.info && (la.info = ha.info), E.push(la))
        }
        return E
    }

    function rb() {
        var E = Ea.dT_.scv("md"),
            P = Ea.dT_.scv("mdp"),
            aa = Ea.dT_.scv("mdl");
        Q = Ea.dT_.ncv("mmds");
        if (E) {
            P = P.split(",");
            for (var la = {}, ha = 0, W = aa.split(","); ha < W.length; ha++) {
                var wa = W[ha].split("=");
                aa = wa[0];
                wa = parseInt(wa[1]);
                isNaN(wa) || (la[aa] = Math.round(wa))
            }
            ha = {};
            W = 0;
            for (E = E.split(","); W < E.length; W++) {
                var Ra = E[W],
                    gb = Ra.indexOf("=");
                aa = Ra.substring(0, gb);
                wa =
                    Ra.charAt(gb + 1);
                if ("a" === wa || "b" === wa || "c" === wa || "d" === wa || "e" === wa || "f" === wa) Ra = Ea.dT_.de(Ra.substring(gb + 2)), ha[aa] = {
                    type: wa,
                    bb: Ra,
                    value: null,
                    Tc: !1,
                    info: void 0
                }, la[aa] && (ha[aa].maxLength = la[aa])
            }
            for (la = 0; la < P.length; la++) aa = P[la], ha[aa] && (ha[aa].Tc = !0);
            ea = ha
        } else ea = {};
        P = ea;
        la = {};
        aa = 0;
        for (E = Ea.dT_.oK(P); aa < E.length; aa++) ha = E[aa], "f" === P[ha].type && (la[ha] = P[ha]);
        Ga = la
    }

    function qa(E) {
        for (var P = Ea.dT_.sNT(), aa = E.detail.h, la = {}, ha = 0, W = Ea.dT_.oK(aa); ha < W.length; ha++) {
            var wa = W[ha];
            la[wa.toLowerCase()] =
                aa[wa]
        }
        E = E.detail.a;
        aa = 0;
        for (ha = Ea.dT_.oK(Ga); aa < ha.length; aa++)
            if (W = ha[aa], wa = ea[W].bb.toLowerCase(), Sa(la[wa])) {
                wa = la[wa];
                var Ra = Xa(ea[W]);
                wa.length > Ra && (wa = wa.substring(0, Ra));
                !ea[W].Tc && P && (wa = "dT_pv");
                Ea.dT_.aAPY("_uaprh_", W, wa, E)
            }
    }

    function ta() {
        Ea.dT_.fE(Object.keys(ea), function(E) {
            E = ea[E];
            E.value = null;
            E.info = void 0
        })
    }

    function Ha() {
        Ea.dT_.addE("CONFIG_UPDATE", rb);
        Ea.dT_.addE("HTTP_RESPONSE", qa);
        rb();
        Ea.dT_.aBPSL(function(E, P, aa, la) {
            if (E.ha(la)) {
                aa = Ua();
                P = aa[0];
                aa = aa[1];
                var ha = [];
                for (wa in ea)
                    if (Ea.dT_.oHOP(ea,
                            wa)) {
                        var W = ea[wa].value;
                        "undefined" !== typeof W && null !== W && ha.push("".concat(wa, ",").concat(Ea.dT_.aesc(W)))
                    }
                var wa = (wa = ha.join(";")) && encodeURIComponent(wa);
                E.av(la, "md", wa, !0);
                P >= Q && (P = Q + "", aa && (P += "," + aa), E.av(la, "mdlr", P, !0))
            }
        })
    }

    function Da() {
        var E = [],
            P = Ua()[0],
            aa = [],
            la = [];
        for (W in ea)
            if (Ea.dT_.oHOP(ea, W)) {
                var ha = ea[W];
                null !== ha.value && "dT_err" !== ha.value || !ha.info || aa.push("'".concat(ha.bb, "'(").concat(Pa(ha.type), "): '").concat(ha.info, "'"));
                "dT_pv" === ha.value && la.push("'".concat(ha.bb, "'(").concat(Pa(ha.type),
                    ")"))
            }
        if (aa.length) {
            var W = [];
            for (ha = 0; ha < aa.length; ha++) W.push({
                type: "mnc",
                text: aa[ha],
                severity: "Info"
            });
            E.push({
                severity: "Info",
                text: "".concat(aa.length, " session/action ").concat(1 < aa.length ? "properties" : "property", " not collected"),
                type: "mnc",
                children: W
            })
        }
        la.length && E.push({
            severity: "Info",
            text: "Because of respected doNotTrack there are no session/action properties reported for: ".concat(la.join(", ")),
            type: "mdr"
        });
        P >= Q && E.push({
            severity: "Warning",
            text: 'Session/action properties size exceeds the active limit of "'.concat(Q,
                '"'),
            type: "mlr"
        });
        return E
    }
    this.dT_ && dT_.prm && dT_.prm();
    var Ea = "undefined" !== typeof window ? window : self,
        U = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        S;
    (function(E) {
        E.ANCHOR = "A";
        E.BUTTON = "BUTTON";
        E.FORM = "FORM";
        E.I_FRAME = "IFRAME";
        E.IMAGE = "IMG";
        E.INPUT = "INPUT";
        E.LABEL = "LABEL";
        E.LINK = "LINK";
        E.OPTION = "OPTION";
        E.SCRIPT = "SCRIPT";
        E.SELECT = "SELECT";
        E.STYLE = "STYLE";
        E.TEXT_AREA = "TEXTAREA"
    })(S || (S = {}));
    var sa;
    (function(E) {
        E.COOKIE = "c";
        E.CSS_SELECTOR = "a";
        E.JS_FUNCTION =
            "e";
        E.JS_VARIABLE = "b";
        E.QUERY_STRING = "d";
        E.RESPONSE_HEADER = "f"
    })(sa || (sa = {}));
    S = {
        Ne: 0,
        Le: 0
    };
    var ma = {
            "window.Intercom": {
                Ne: 1,
                Le: 1
            },
            "LC_API.get_last_visit_timestamp": S,
            "LC_API.get_visits_number": S,
            "LC_API.get_page_views_number": S,
            "LC_API.get_chats_number": S,
            "LC_API.get_visitor_id": S,
            "LC_API.get_chat_id": S
        },
        ea = {},
        Ga = {},
        Na = {},
        pa, oa;
    (function(E) {
        E.BOOLEAN = "Boolean";
        E.NULL = "Null";
        E.NUMBER = "Number";
        E.STRING = "String"
    })(oa || (oa = {}));
    var Q, ba;
    (function() {
        var E, P;
        return (ba = U.dT_) && (null === (P = (E = Ea.dT_).smbi) ||
            void 0 === P ? 0 : P.call(E, "h")) ? (Ha(), Ea.dT_.addE("DEBUG_INFO_REQUESTED", Da), !0) : !1
    })() && (ba.gEMD = Za, ba.iRHCA = bb)
})();
(function() {
    function Ka(Q, ba, E, P, aa) {
        var la, ha = !1;
        if (ma || sa) return ha;
        sa = !0;
        try {
            "function" === typeof S && S !== Ka && (ha = S(Q, ba, E, P, aa))
        } catch (W) {
            qa.dT_.rex(W, void 0, !0, "1")
        }
        ha || qa.dT_.re((la = {}, la.msg = "string" === typeof Q ? Q : "", la.file = ba || "", la.line = E || -1, la.column = P || -1, la.error = aa || "", la.stackContainsWrapper = !1, la.source = "1", la));
        sa = !1;
        return ha
    }

    function bb(Q) {
        try {
            if ("[object Function]" !== Object.prototype.toString.call(Q)) return Q;
            var ba = Q.dtwid;
            "number" === typeof ba && Ga[ba] ? Ga[ba].rd++ : (Ga[Na] = {
                xa: Q,
                rd: 1
            }, Q.dtwid = Na++);
            Q.rxewrapper = Q.rxewrapper || function(E) {
                try {
                    return pa.errorCallback(Q, this, arguments)
                } catch (P) {
                    if (-2146823277 !== P.number) throw ea && (qa.dT_.rex(P, void 0, !0, "1"), kb()), P;
                }
            };
            return Q.rxewrapper.rxewrapper = Q.rxewrapper
        } catch (E) {
            return Q
        }
    }

    function kb() {
        ma += 1;
        qa.dT_.st(function() {
            --ma
        }, 0)
    }

    function eb() {
        var Q = document.getElementsByTagName("html");
        0 !== Q.length && Q[0].hasAttribute && Q[0].hasAttribute("webdriver") || "EventTarget Window ModalWindow".replace(/\w+/g, function(ba) {
            (ba = ta[ba] && ta[ba].prototype) &&
            qa.dT_.oHOP(ba, "addEventListener") && (ba.addEventListener = cb(ba.addEventListener), ba.removeEventListener = Ta(ba.removeEventListener));
            return ""
        })
    }

    function cb(Q) {
        return function(ba, E, P, aa) {
            E && E.handleEvent && (E.handleEvent = bb(E.handleEvent));
            return Q.call(this, ba, bb(E), P, aa)
        }
    }

    function Ta(Q) {
        return function(ba, E, P, aa) {
            try {
                return Q.call(this, ba, E && E.rxewrapper ? E.rxewrapper : E, P, aa)
            } finally {
                E && (ba = E.dtwid, "number" === typeof ba && Ga[ba] && Ga[ba].xa === E && (Ga[ba].rd--, Ga[ba].rd || (delete E.rxewrapper, delete E.dtwid,
                    delete Ga[ba])))
            }
        }
    }

    function Sa() {
        try {
            qa.dT_.apl(ta, "onerror", function() {
                return Ka
            }, function(Q) {
                S = Q
            })
        } catch (Q) {}
    }

    function Xa() {
        for (var Q = [], ba = 0; ba < arguments.length; ba++) Q[ba] = arguments[ba];
        var E, P;
        for (ba = 0; ba < Q.length; ba++) {
            var aa = Q[ba];
            !E && qa.dT_.iIO(aa, 7) && (E = aa);
            !P && aa && "string" === typeof aa && (P = aa)
        }(E || P) && qa.dT_.rex(E || P, void 0, !1, "2");
        return oa.apply(this, Q)
    }

    function Ua(Q) {
        var ba;
        if (ba = "string" === typeof Q.blockedURL && "string" === typeof Q.documentURL && !!Q.blockedURL && !!Q.documentURL) ba = Q.blockedURL,
            ba = !(null !== ba && void 0 !== ba && ba.includes(qa.dT_.scv("reportUrl")));
        if (ba) {
            ba = [];
            for (var E in Q) Q[E] && "function" !== typeof Q[E] && ba.push([E, Q[E] + ""]);
            ba.length && qa.dT_.cAE("_csprv_", ba, !0, void 0, 1)
        }
    }

    function Pa(Q) {
        var ba;
        "securitypolicyviolation" === Q.type && Ua((ba = {}, ba.sourceFile = Q.sourceFile, ba.blockedURL = Q.blockedURI, ba.documentURL = Q.documentURI, ba.referrer = Q.referrer, ba.disposition = Q.disposition, ba.effectiveDirective = Q.effectiveDirective || Q.violatedDirective, ba.originalPolicy = Q.originalPolicy, ba.statusCode =
            Q.statusCode, ba.lineNumber = Q.lineNumber, ba.columnNumber = Q.columnNumber, ba.sample = Q.sample, ba))
    }

    function Za(Q) {
        for (var ba = 0; ba < Q.length; ba++) {
            var E = Q[ba];
            "csp-violation" === E.type && (E = E.body) && Ua(E)
        }
    }

    function rb(Q) {
        Q.reason && qa.dT_.iIO(Q.reason, 7) ? qa.dT_.rex(Q.reason, void 0, !0, "4") : Q.detail && qa.dT_.iIO(Q.detail.reason, 7) && qa.dT_.rex(Q.detail.reason, void 0, !0, "4")
    }
    this.dT_ && dT_.prm && dT_.prm();
    var qa = "undefined" !== typeof window ? window : self,
        ta = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ?
        window : void 0,
        Ha;
    (Ha || (Ha = {})).ERROR_CALLBACK = "errorCallback";
    var Da;
    (function(Q) {
        Q.ANGULAR = "5";
        Q.CONSOLE = "2";
        Q.CUSTOM = "0";
        Q.PROMISE_REJECTION = "4";
        Q.WINDOW_ONERROR = "1";
        Q.XHR = "3"
    })(Da || (Da = {}));
    var Ea, U, S, sa = !1,
        ma = 0,
        ea = !0,
        Ga = {},
        Na = 0,
        pa = (Ea = {}, Ea.errorCallback = function(Q, ba, E, P, aa, la) {
            return U.aWF(Q, ba, E, P, aa, la)
        }, Ea),
        oa;
    (function() {
        var Q, ba;
        if (ta.dT_ && (null === (ba = (Q = qa.dT_).smbi) || void 0 === ba ? 0 : ba.call(Q, "q"))) {
            U = ta.dT_;
            if (!qa.dT_.bcv("doel")) {
                ta.onerror !== Ka && (U.rxehandler = Ka, ta.onerror && (S = ta.onerror),
                    ta.onerror = U.rxehandler);
                Sa();
                if (!ta.atob) ea = !1;
                else if (ta.ErrorEvent) try {
                    0 === (new ta.ErrorEvent("test")).colno && (ea = !1)
                } catch (P) {}
                ea && eb()
            }
            qa.dT_.bcv("lupr") && qa.dT_.ael(ta, "unhandledrejection", rb);
            qa.dT_.bcv("csprv") && (ta.ReportingObserver ? (new ta.ReportingObserver(Za, {
                buffered: !0,
                types: ["csp-violation"]
            })).observe() : qa.dT_.gBI().ff && qa.dT_.ael(document, "securitypolicyviolation", Pa));
            if (qa.dT_.bcv("cce")) {
                var E;
                null !== (E = ta.console) && void 0 !== E && E.error && (oa = ta.console.error, ta.console.error = Xa)
            }
        }
    })()
})();
(function() {
    function Ka(M, D, ua, Ba) {
        function ya(Fa) {
            return Fa instanceof ua ? Fa : new ua(function(xa) {
                xa(Fa)
            })
        }
        return new(ua || (ua = Ec))(function(Fa, xa) {
            function Ja(jb) {
                try {
                    Qa(Ba.next(jb))
                } catch (ic) {
                    xa(ic)
                }
            }

            function lb(jb) {
                try {
                    Qa(Ba["throw"](jb))
                } catch (ic) {
                    xa(ic)
                }
            }

            function Qa(jb) {
                jb.done ? Fa(jb.value) : ya(jb.value).then(Ja, lb)
            }
            Qa((Ba = Ba.apply(M, D || [])).next())
        })
    }

    function bb(M, D) {
        function ua(Qa) {
            return function(jb) {
                return Ba([Qa, jb])
            }
        }

        function Ba(Qa) {
            if (Fa) throw new TypeError("Generator is already executing.");
            for (; lb && (lb = 0, Qa[0] && (ya = 0)), ya;) try {
                if (Fa = 1, xa && (Ja = Qa[0] & 2 ? xa["return"] : Qa[0] ? xa["throw"] || ((Ja = xa["return"]) && Ja.call(xa), 0) : xa.next) && !(Ja = Ja.call(xa, Qa[1])).done) return Ja;
                if (xa = 0, Ja) Qa = [Qa[0] & 2, Ja.value];
                switch (Qa[0]) {
                    case 0:
                    case 1:
                        Ja = Qa;
                        break;
                    case 4:
                        return ya.label++, {
                            value: Qa[1],
                            done: !1
                        };
                    case 5:
                        ya.label++;
                        xa = Qa[1];
                        Qa = [0];
                        continue;
                    case 7:
                        Qa = ya.ia.pop();
                        ya.H.pop();
                        continue;
                    default:
                        if (!(Ja = ya.H, Ja = 0 < Ja.length && Ja[Ja.length - 1]) && (6 === Qa[0] || 2 === Qa[0])) {
                            ya = 0;
                            continue
                        }
                        if (3 === Qa[0] && (!Ja || Qa[1] >
                                Ja[0] && Qa[1] < Ja[3])) ya.label = Qa[1];
                        else if (6 === Qa[0] && ya.label < Ja[1]) ya.label = Ja[1], Ja = Qa;
                        else if (Ja && ya.label < Ja[2]) ya.label = Ja[2], ya.ia.push(Qa);
                        else {
                            Ja[2] && ya.ia.pop();
                            ya.H.pop();
                            continue
                        }
                }
                Qa = D.call(M, ya)
            } catch (jb) {
                Qa = [6, jb], xa = 0
            } finally {
                Fa = Ja = 0
            }
            if (Qa[0] & 5) throw Qa[1];
            return {
                value: Qa[0] ? Qa[1] : void 0,
                done: !0
            }
        }
        var ya = {
                label: 0,
                B: function() {
                    if (Ja[0] & 1) throw Ja[1];
                    return Ja[1]
                },
                H: [],
                ia: []
            },
            Fa, xa, Ja, lb;
        return lb = {
            next: ua(0),
            "throw": ua(1),
            "return": ua(2)
        }, "function" === typeof Symbol && (lb[Symbol.iterator] =
            function() {
                return this
            }), lb
    }

    function kb(M, D) {
        void 0 === D && (D = []);
        var ua = Qb.dT_;
        ua = (null === ua || void 0 === ua ? 0 : ua.iIO) ? ua.iIO : null;
        return !(null === ua || void 0 === ua || !ua(M, D))
    }

    function eb(M, D) {
        void 0 === D && (D = 0);
        return M.name + "_" + (M.startTime + D) + "_" + M.duration
    }

    function cb() {
        try {
            performance.getEntries()[0].dt_test = !0, vc = performance.getEntries()[0].dt_test, ec = function() {
                return !!vc
            }
        } catch (M) {}
    }

    function Ta() {
        Hb = Qb.dT_;
        ec = hb.dT_.gBI().sf ? function() {
            return !1
        } : function() {
            cb();
            return !!vc
        }
    }

    function Sa() {
        function M() {}
        if (!Lb) return !1;
        dc = Lb.getEntriesByType;
        Fb = Lb.getEntriesByName;
        Ob = Lb.setResourceTimingBufferSize;
        (G = Lb.clearResourceTimings) && (Lb.clearResourceTimings = M);
        Lb.webkitClearResourceTimings && (Lb.webkitClearResourceTimings = M);
        return !!dc && !!Fb && !!Ob && !!G
    }

    function Xa(M) {
        "function" === typeof Lb.addEventListener ? Lb.addEventListener("resourcetimingbufferfull", M) : "undefined" !== typeof Lb.onresourcetimingbufferfull && (fa = Lb.onresourcetimingbufferfull, Lb.onresourcetimingbufferfull = M)
    }

    function Ua() {
        try {
            "function" ===
            typeof fa && fa.call(Lb, new Event("resourcetimingbufferfull", {
                bubbles: !0,
                cancelable: !0
            })), hb.dT_.st(function() {
                G.call(Lb)
            }, 0)
        } catch (M) {}
    }

    function Pa() {
        Lb = Qb.performance;
        var M = Sa();
        M && Ob.call(Lb, 1E3);
        return M
    }

    function Za(M) {
        var D = M.detail;
        M = D.a;
        if (D = D.e)
            for (var ua = 0; ua < D.length; ua++) {
                var Ba = D[ua],
                    ya = Ba.url;
                if (ya) {
                    var Fa = Ba.relevance || 0;
                    Ba = {
                        $a: Ba.area,
                        imageWidth: Ba.w,
                        imageHeight: Ba.h,
                        Rc: Ba.nw,
                        Qc: Ba.nh,
                        Te: Ba.o,
                        sd: Fa,
                        Lg: Ba.ireason || 0,
                        D: M || 0
                    };
                    if (!Ca[ya] || Fa > Ca[ya].sd) Ca[ya] = Ba
                }
            }
    }

    function rb(M) {
        return !!M &&
            isFinite(M) && 0 < M
    }

    function qa(M) {
        var D = Ca[M.name];
        "undefined" !== typeof D ? (M.relevantArea = D.$a, M.relevance = D.sd, M.vcIrrelevanceReason = D.Lg, D.Te && (M.onloadTime = D.Te - Math.round(M.startTime) - hb.dT_.gto()), rb(D.imageWidth) && rb(D.imageHeight) && (M.imageWidth = D.imageWidth, M.imageHeight = D.imageHeight), rb(D.Rc) && D.Rc !== D.imageWidth && (M.imageNaturalWidth = D.Rc), rb(D.Qc) && D.Qc !== D.imageHeight && (M.imageNaturalHeight = D.Qc), delete Ca[M.name]) : M.relevance = 0
    }

    function ta() {
        return yb
    }

    function Ha(M) {
        w[eb(M)] = M
    }

    function Da(M) {
        K[eb(M)] =
            M
    }

    function Ea(M, D, ua) {
        return {
            get: function() {
                var Ba = +M[ua];
                return isNaN(Ba) ? D : Ba + D
            }
        }
    }

    function U(M, D) {
        function ua(Ja) {
            Ja in M && (ya[Ja] = {
                get: function() {
                    return M[Ja]
                }
            })
        }
        if (0 >= D) return M;
        var Ba = w[eb(M, D)];
        if (Ba) return Ba;
        for (var ya = {}, Fa = 0, xa = H; Fa < xa.length; Fa++) Ba = xa[Fa], ya[Ba] = Ea(M, D, Ba);
        D = 0;
        for (Fa = V; D < Fa.length; D++) Ba = Fa[D], ua(Ba);
        Ba = Object.create(M, ya);
        Ba._dtCl = !0;
        Ha(Ba);
        return Ba
    }

    function S() {
        var M = [],
            D = document.getElementsByTagName("iframe");
        if (!D.length) return M;
        for (var ua = 0; ua < D.length; ua++) {
            var Ba =
                D[ua];
            try {
                var ya = M,
                    Fa = ya.concat;
                var xa = void 0,
                    Ja = Ba.contentWindow;
                if (da.has(Ba)) var lb = da.get(Ba);
                else {
                    var Qa = tb;
                    da.set(Ba, Qa);
                    "undefined" !== typeof Ba.src && (yb[Ba.src] = Qa);
                    tb++;
                    lb = Qa
                }
                if (Ja.dT_) var jb = [];
                else {
                    Ba = [];
                    var ic = Ja.performance.getEntriesByType("resource"),
                        Kb = Lb.timeOrigin;
                    xa = Kb ? Ja.performance.timeOrigin - Kb : Ja.performance.timing.navigationStart - Lb.timing.navigationStart;
                    xa = Math.round(xa);
                    for (Qa = 0; Qa < ic.length; Qa++) {
                        var Jb = U(ic[Qa], xa);
                        Ya[eb(Jb)] || (Jb.frameId = lb, Ba.push(Jb))
                    }
                    jb = Ba
                }
                M = Fa.call(ya,
                    jb)
            } catch (kc) {}
        }
        return M
    }

    function sa() {
        var M = [],
            D = dc.call(Lb, "resource"),
            ua = ec(),
            Ba;
        if (Qb.frames && Qb.frames.length) {
            for (var ya = [], Fa = 0; Fa < Qb.frames.length; Fa++) try {
                var xa = Qb.frames[Fa];
                xa.dT_ && (null === (Ba = null === xa || void 0 === xa ? void 0 : xa.location) || void 0 === Ba ? 0 : Ba.href) && ya.push(xa.location.href)
            } catch (Ja) {}
            Ba = ya
        } else Ba = [];
        for (ya = 0; ya < D.length; ya++) {
            Fa = D[ya];
            ua || ((xa = K[eb(Fa)]) ? Fa = xa : Da(Fa));
            if (!(xa = Ya[eb(Fa)])) a: {
                if (("iframe" === Fa.initiatorType || "subdocument" === Fa.initiatorType) && Ba.length)
                    for (xa =
                        0; xa < Ba.length; xa++)
                        if (Ba[xa] === Fa.name) {
                            xa = !0;
                            break a
                        }
                xa = !1
            }
            xa || M.push(Fa)
        }
        return M
    }

    function ma(M, D) {
        if ("text/css" === D.type) {
            var ua = D.href || "";
            var Ba = D.ownerNode;
            D = Ba && Ba.nodeType && 1 === Ba.nodeType ? D.ownerNode : null
        } else ua = D.src;
        ua && D && (M[ua] = D);
        return M
    }

    function ea(M, D) {
        return D.D !== M && !D.qf
    }

    function Ga(M, D, ua, Ba, ya, Fa) {
        return function(xa) {
            if (!Ya[eb(xa)]) try {
                var Ja = xa.name,
                    lb = (xa.workerNavigationStart || hb.dT_.gto()) + xa.startTime,
                    Qa = xa.name,
                    jb;
                if (!(jb = Qa.includes(hb.dT_.scv("csu")) || Qa.includes("dtagent_") ||
                        Qa.includes("ampbf") && Qa.includes("flavor=amp"))) {
                    var ic = Qa.includes,
                        Kb = hb.dT_.scv("reportUrl");
                    cc && Kb === Pb || (Pb = Kb, cc = hb.dT_.tau(Pb));
                    jb = ic.call(Qa, cc)
                }
                var Jb;
                if (Jb = jb || xa.startTime > xa.responseEnd || 0 > xa.startTime ? !1 : !0) Jb = !(Ja.includes("chrome-extension://") || Ja.includes("chrome://") || Ja.includes("data:") || Ja.includes("javascript:") || Ja.includes("about:") || Ja.includes("res://"));
                if (Jb) {
                    Ja = lb - M;
                    var kc = Ca[xa.name],
                        Mc = xa.Qf || Infinity;
                    Mc = ya ? Infinity : Mc;
                    Qa = Hb;
                    if (M <= lb && lb <= D + (Qa.syn ? 1E3 : hb.dT_.ncv("rtt")) &&
                        Mc >= Ja || kc && kc.D === +ua && 0 < kc.sd) {
                        var td = Ba && xa.name.includes(Ba);
                        lb = 3;
                        ya ? lb = 1 : td && (lb = 2);
                        xa.Ge && 3 !== xa.Ge || (xa.Qf = Ja, xa.Ge = lb, xa.df = Fa, xa.actionId = ua)
                    }
                }
            } catch (Ad) {}
        }
    }

    function Na(M, D, ua) {
        return Ka(this, void 0, void 0, function() {
            var Ba, ya, Fa;
            return bb(this, function(xa) {
                switch (xa.label) {
                    case 0:
                        ia = hb.dT_.aFr(ia, ea.bind(null, M)), Ba = 0, ya = ia, xa.label = 1;
                    case 1:
                        if (!(Ba < ya.length)) return [3, 4];
                        Fa = ya[Ba];
                        return [4, pa(Fa, Fa.start, D, !1, ua)];
                    case 2:
                        xa.B(), Fa.qf = !0, xa.label = 3;
                    case 3:
                        return Ba++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function pa(M, D, ua, Ba, ya) {
        var Fa = M.D,
            xa = M.ef,
            Ja = M.xhrUrl,
            lb = M.start;
        return Ka(this, void 0, void 0, function() {
            var Qa, jb, ic, Kb;
            return bb(this, function(Jb) {
                switch (Jb.label) {
                    case 0:
                        return Qa = hb.dT_.lAID(), jb = Fa === Qa, ic = Ga(lb, D, Fa, Ja, jb, xa), [4, hb.dT_.fEP(ya, ic, void 0, !ua)];
                    case 1:
                        Jb.B();
                        if (!Ba) return [2];
                        Kb = I[xa];
                        Kb.count--;
                        !Kb.count && Kb.Lb.includes(xa) && hb.dT_.sMPS(1);
                        return [2]
                }
            })
        })
    }

    function oa() {
        for (var M = 0, D = hb.dT_.oK(Ma); M < D.length; M++) {
            var ua = Ma[+D[M]];
            hb.dT_.ct(ua.qa);
            ua.Ka(!0)
        }
        Ma = {}
    }

    function Q(M,
        D, ua, Ba) {
        var ya = I[ua];
        ya || (ya = {
            count: 0,
            Lb: []
        });
        ya.count++;
        ya.Lb.push(M);
        I[ua] = ya;
        ia.push({
            D: M,
            start: D,
            ef: ua,
            xhrUrl: Ba,
            qf: !1
        })
    }

    function ba() {
        I = {};
        Ma = {};
        ia = [];
        var M = hb.dT_.lAID();
        Q(M, hb.dT_.lst(), M);
        hb.dT_.addE("ACTION_ENTERED", E);
        hb.dT_.addE("ACTION_SENT", P)
    }

    function E(M) {
        var D = M.detail;
        M = D.x;
        var ua = D.i,
            Ba = D.a,
            ya = D.r;
        Ia.includes(D.t) || (D = hb.dT_.lAID(), ya === D && ya !== ua || Q(ua, Ba, ya, M))
    }

    function P(M) {
        return Ka(this, void 0, void 0, function() {
            function D(Jb) {
                return Ka(this, void 0, void 0, function() {
                    var kc;
                    return bb(this, function(Mc) {
                        switch (Mc.label) {
                            case 0:
                                return kc = Array.prototype.concat(S(), sa(), B), [4, Na(Fa, !0, kc)];
                            case 1:
                                return Mc.B(), [4, pa({
                                    D: Fa,
                                    ef: Qa,
                                    xhrUrl: Ba,
                                    start: xa
                                }, Ja, Jb, !0, kc)];
                            case 2:
                                return Mc.B(), [2]
                        }
                    })
                })
            }
            var ua, Ba, ya, Fa, xa, Ja, lb, Qa, jb, ic, Kb;
            return bb(this, function(Jb) {
                switch (Jb.label) {
                    case 0:
                        ua = M.detail;
                        Ba = ua.x;
                        ya = ua.t;
                        Fa = ua.i;
                        xa = ua.a;
                        Ja = ua.s;
                        lb = ua.f;
                        Qa = ua.r;
                        (jb = ua.rt) && Da(jb);
                        if (Ia.includes(ya)) return [2];
                        ic = hb.dT_.lAID();
                        return Qa === ic && Qa !== Fa ? [2] : lb ? [4, D(lb)] : [3, 2];
                    case 1:
                        return Jb.B(), [3, 3];
                    case 2:
                        Kb = hb.dT_.st(function() {
                            delete Ma[Fa];
                            D(lb)
                        }, 2E3), Ma[Fa] = {
                            qa: Kb,
                            Ka: D
                        }, Jb.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }

    function aa(M) {
        var D;
        if (D = "number" === typeof M.df) {
            var ua;
            D = 0 === (null === (ua = I[M.df]) || void 0 === ua ? void 0 : ua.count)
        }
        return D
    }

    function la(M) {
        var D = [],
            ua = 0,
            Ba = [];
        for (xa in I) {
            var ya;
            if (ya = hb.dT_.oHOP(I, xa)) {
                ya = +xa;
                var Fa = I[ya];
                ya = !Ma[ya] && (!Fa || !Fa.count && Fa.Lb.includes(ya))
            }
            ya && Ba.push.apply(Ba, I[xa].Lb)
        }
        for (; ua < Ba.length; ua++) {
            var xa = +Ba[ua];
            Fa = ya = M[xa] || [];
            var Ja = xa,
                lb = Hb;
            if (!lb.syn &&
                lb.gLVD) {
                var Qa = 0;
                for (Ja = lb.gUI(Ja); Qa < Ja.length; Qa++) {
                    lb = Ja[Qa];
                    for (var jb = !1, ic = 0, Kb = Fa; ic < Kb.length; ic++) {
                        var Jb = Kb[ic];
                        if (!Jb.failedResource && Jb.name === lb.name) {
                            Jb.failedResource = lb.failedResource;
                            jb = !0;
                            break
                        }
                    }
                    jb || (qa(lb), Fa.push(lb))
                }
            }
            D.push({
                resources: ya,
                actionId: xa
            });
            delete I[xa]
        }
        return D
    }

    function ha(M) {
        M && oa();
        M = hb.dT_.aFr(Array.prototype.concat(S(), sa(), B), aa);
        var D = hb.dT_.red(Array.prototype.concat(Array.prototype.slice.call(document.scripts), Array.prototype.slice.call(document.styleSheets)),
            ma, {});
        M = hb.dT_.red(M, function(ua, Ba) {
            var ya = Ba.actionId,
                Fa = ua[ya];
            Fa || (Fa = []);
            var xa = D[Ba.name];
            if (xa) {
                if (xa && "LINK" === xa.nodeName) {
                    var Ja = xa.media || "all";
                    xa = "stylesheet" === xa.rel && window.matchMedia(Ja).matches && !xa.disabled
                } else xa = !xa.hasAttribute("async") && !xa.hasAttribute("defer") && "module" !== xa.getAttribute("type");
                Ba.isCritical = +xa
            }
            qa(Ba);
            Fa.push(Ba);
            ua[ya] = Fa;
            Ya[eb(Ba)] = !0;
            return ua
        }, {});
        M = la(M);
        900 < dc.call(Lb, "resource").length && (Ua(), Ya = {}, w = {}, K = {}, B = [], Ca = {});
        return M
    }

    function W(M) {
        return ge &&
            kb(M, 13) && "navigation" !== M.entryType || kb(M, ["_dtCl"])
    }

    function wa(M) {
        M.includes("ScriptResource.axd") ? M = "js" : (M = M.substring(1 + M.lastIndexOf("/")), 0 < M.indexOf("?") && (M = M.split("?")[0]), 0 < M.indexOf("#") && (M = M.split("#")[0]), M = 0 < M.indexOf(".") ? M.substring(M.lastIndexOf(".") + 1) : "-");
        switch (M) {
            case "js":
                return "s";
            case "gif":
            case "png":
            case "jpg":
            case "jpeg":
            case "ico":
            case "tiff":
            case "bmp":
            case "xbm":
            case "svg":
                return "i";
            case "css":
                return "c";
            default:
                return "o"
        }
    }

    function Ra(M) {
        M = Jc() + M.startTime;
        M -= mb();
        return Math.round(M)
    }

    function gb(M, D, ua, Ba) {
        var ya = M.resources;
        M = M.actionId;
        if (mc().op) {
            for (var Fa = [], xa = {}, Ja = 0; Ja < ya.length; Ja++) {
                var lb = ya[Ja];
                xa[lb.name] || (Fa.push(lb), xa[lb.name] = !0)
            }
            ya = Fa
        }
        Fa = [];
        xa = 0;
        for (Ja = ya; xa < Ja.length; xa++) {
            lb = Fa;
            var Qa = lb.push,
                jb = Ja[xa],
                ic = wa(jb.name.toLowerCase()),
                Kb = jb,
                Jb = Kb.duration;
            !Jb && W(Kb) && (Jb = Kb.responseEnd - Kb.startTime);
            Kb = Jb ? Math.round(Jb) : 0;
            Jb = Ra(jb);
            var kc = jb;
            W(kc) && 0 < kc.responseEnd ? (kc = Jc() + kc.responseEnd, kc -= mb(), kc = Math.round(kc)) : kc = Math.round(Mb() - mb());
            Kb = {
                duration: Kb,
                start: Jb,
                stop: kc
            };
            Jb = jb.name;
            kc = sb(jb.name);
            var Mc = Ra(jb) <= xb() ? "_load_" : "-",
                td = 0 === jb.responseEnd,
                Ad = jb.failedResource ? !1 : 0 < jb.responseEnd;
            jb = mc().ch ? 0 !== jb.domainLookupStart && 0 === jb.requestStart : sb(jb.name) !== yd && 0 === jb.requestStart && 2 > jb.duration ? !0 : 0 >= jb.responseEnd ? !1 : jb.requestStart === jb.fetchStart && jb.requestStart === jb.responseStart && jb.responseStart !== jb.responseEnd;
            Qa.call(lb, {
                type: ic,
                Dj: Kb,
                url: Jb,
                domain: kc,
                oi: Mc,
                ij: td,
                Uj: Ad,
                Bi: jb,
                dj: !1
            })
        }
        Vb(D, M, Fa, ya, ua, Ba)
    }

    function pb(M,
        D, ua, Ba, ya) {
        var Fa = ya || Jc();
        if (!M.length || 0 >= Fa) ua("");
        else {
            var xa = [];
            ub(M, function(Ja) {
                if (Ic && xa.length / 2 >= Ic) Ja = !1;
                else {
                    var lb = Ja.startTime,
                        Qa;
                    if (Qa = !(lb < ("iframe" === Ja.initiatorType ? 1 : 0))) Qa = Ja.actionId, Qa = !Qa || Qa === D;
                    Qa && (lb = lb ? ["b", Math.round(lb)] : [], Aa(Ja, lb, Jc()), xa.push(fe(Ja.name), lb.join("")));
                    Ja = !0
                }
                return Ja
            }, void 0, function() {
                ua(vb("".concat(D || Hc(), "-").concat(Math.round(Fa), ";").concat(xa.join("|"))))
            }, !Ba)
        }
    }

    function Vb(M, D, ua, Ba, ya, Fa) {
        pb(Ba, D, function(xa) {
            xa && M.cf.push(xa);
            ya()
        }, Fa)
    }

    function na(M, D, ua, Ba) {
        if (hb.dT_.las()) {
            var ya = xb();
            !ua && (0 >= ya || 3E3 > Mb() - ya) ? (hb.dT_.sMPS(2E3), ya = !1) : ya = !0
        } else ya = !1;
        if (ya && !D) {
            Db(ha(ua), ua);
            !sd.length || hb.dT_.last() + 3E4 <= Mb() && hb.dT_.last() ? (sd = [], D = void 0) : D = sd.splice(0, 1)[0];
            if (D)
                for (D = D.cf, ua = 0; ua < D.length; ua++) M.av(Ba, "rt", D[ua], !0, ua);
            sd.length && hb.dT_.sMPS(100)
        }
    }

    function Db(M, D) {
        for (var ua = {
                cf: [],
                resourceSummaries: []
            }, Ba = M.length, ya = 0, Fa = 0; Fa < M.length; Fa++) gb(M[Fa], ua, function() {
            ya++;
            ya === Ba && (sd.push(ua), hb.dT_.sMPS(0))
        }, D)
    }

    function zc(M) {
        Aa =
            M.snt;
        vb = M.esc;
        ub = M.fE;
        mb = M.lst;
        Mb = M.nw;
        xb = M.gLAet;
        sb = M.gh;
        Rb = M.loc;
        mc = M.gBI;
        Hc = M.lAID;
        fe = M.aur;
        Fc = M.stcv;
        Jc = M.gto;
        M = Hb;
        Ic = hb.dT_.ncv("rtl");
        M.syn && (Ic = 0, Fc("rtp", 1), Fc("rtu", 800));
        yd = sb(Rb());
        M = Qb.performance;
        0 < ((null === M || void 0 === M ? void 0 : M.timeOrigin) || (null === M || void 0 === M ? void 0 : M.timing.navigationStart)) && hb.dT_.aBPSL(na)
    }
    var Ec = this.dT_ && dT_.prm && dT_.prm() || window.Promise,
        hb = "undefined" !== typeof window ? window : self,
        Qb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window :
        void 0,
        qc;
    (function(M) {
        M.ANCHOR = "A";
        M.BUTTON = "BUTTON";
        M.FORM = "FORM";
        M.I_FRAME = "IFRAME";
        M.IMAGE = "IMG";
        M.INPUT = "INPUT";
        M.LABEL = "LABEL";
        M.LINK = "LINK";
        M.OPTION = "OPTION";
        M.SCRIPT = "SCRIPT";
        M.SELECT = "SELECT";
        M.STYLE = "STYLE";
        M.TEXT_AREA = "TEXTAREA"
    })(qc || (qc = {}));
    var Hb, vc, ec, cc, Pb, Lb, Ob, dc, Fb, G, fa, Ca = {},
        da, yb = {},
        tb = 0,
        Ya = {},
        w = {},
        B = [],
        K = {},
        H = "connectEnd connectStart domainLookupEnd domainLookupStart fetchStart redirectEnd redirectStart requestStart responseEnd responseStart secureConnectionStart startTime workerStart".split(" "),
        V = "name duration transferSize decodedBodySize encodedBodySize entryType initiatorType nextHopProtocol serverTiming transferSize responseStatus".split(" "),
        I = {},
        Ma = {},
        ia = [],
        Ia = "_error_ _ts_ _code_ _debug_ _emu_ _location_ _stack_ _useraction_ _source_ _istack_ _type_ _log_ _rs_ _endVisit_ - _t_".split(" "),
        Aa, vb, ub, mb, xb, Mb, sb, Rb, mc, Hc, fe, Fc, Jc, Ic, yd, ge = "function" === typeof PerformanceResourceTiming || "object" === typeof PerformanceResourceTiming,
        sd = [];
    (function() {
        var M, D, ua = Qb.dT_;
        if (!ua || null === (D = (M =
                hb.dT_).ssmbi) || void 0 === D || !D.call(M, "r", !1, !0) || Qb.hi) return !1;
        Ta();
        if (!Pa()) return !1;
        zc(ua);
        ba();
        yb = {};
        da = new WeakMap;
        tb = 0;
        Ca = {};
        Ya = {};
        w = {};
        K = {};
        B = [];
        Xa(function() {
            B = sa()
        });
        hb.dT_.addE("VISUALLY_COMPLETE", Za);
        return !0
    })() && (Hb.gFU = ta)
})();
(function() {
    function Ka(W) {
        U.dT_.addE && U.dT_.addE("CONFIG_UPDATE", W)
    }

    function bb() {
        (ma = U.dT_.bcv("uxdce")) && (ea = U.dT_.ncv("uxdcw"))
    }

    function kb() {
        (Na = U.dT_.aO("deadClickObserver", Ta)) && Na.observe(document.documentElement, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        });
        Na && (U.dT_.aBPSL(cb), U.dT_.ael(document, "click", eb), oa = !0)
    }

    function eb() {
        var W = U.dT_.nw();
        U.dT_.st(function() {
            Ga < W && (pa.push({
                time: Math.round(W)
            }), U.dT_.sMPS(2E3))
        }, ea)
    }

    function cb(W, wa, Ra, gb) {
        if (0 !== pa.length) {
            wa = W.av;
            Ra =
                pa;
            for (var pb = [], Vb = 0; Vb < Ra.length; Vb++) pb.push(Ra[Vb].time.toFixed());
            wa.call(W, gb, "dC", pb.join(","), !0);
            pa = []
        }
    }

    function Ta(W) {
        for (var wa = W.length; wa--;) {
            var Ra = W[wa].target,
                gb = Ra,
                pb = void 0,
                Vb = gb,
                na = 9;
            void 0 === na && (na = []);
            var Db = S.dT_;
            if (Db = (!(null === (pb = (null === Db || void 0 === Db ? 0 : Db.iIO) ? Db.iIO : null) || void 0 === pb || !pb(Vb, na)) || gb && gb.nodeType && 1 === gb.nodeType) && ("string" === typeof gb.textContent || "string" === typeof gb.innerText)) Ra = Ra.getBoundingClientRect(), Db = !(0 > Ra.right || Ra.left > (window.innerWidth ||
                document.documentElement.clientWidth) || 0 > Ra.bottom || Ra.top > (window.innerHeight || document.documentElement.clientHeight));
            if (Db) {
                Ga = U.dT_.nw();
                break
            }
        }
    }

    function Sa() {
        bb();
        ma && !oa ? kb() : !ma && oa && (U.dT_.rBPSL(cb), U.dT_.rO("deadClickObserver"), U.dT_.rel(document, "click", eb, void 0), pa = [], oa = !1, Ga = -1)
    }

    function Xa() {
        if (Q = U.dT_.bcv("uxrgce")) {
            var W = U.dT_.scv("uxrgcm").split(";"),
                wa = W[1];
            ba = Ua(W[0]);
            Ua(wa)
        }
    }

    function Ua(W) {
        W = W.split(",");
        return {
            Ei: +W[0] || 100,
            Ni: +W[1] || 25,
            fi: +W[2] || 300,
            Zh: +W[3] || 3
        }
    }

    function Pa(W) {
        return {
            x: W.x ||
                W.clientX,
            y: W.y || W.clientY,
            timeStamp: U.dT_.nw()
        }
    }

    function Za() {
        U.dT_.iMD() || (U.dT_.aBPSL(ta), U.dT_.ael(document, "click", qa), U.dT_.ael(document, "mousedown", rb), E = !0)
    }

    function rb(W) {
        aa = Pa(W)
    }

    function qa(W) {
        W = Pa(W);
        if (0 === la.length) la.push(W);
        else {
            var wa = la[0],
                Ra = la[la.length - 1];
            if (Ra = W && Ra ? W.timeStamp - Ra.timeStamp <= ba.fi : !1) Ra = ba.Ni, Ra = Math.abs(wa.x - W.x) <= Ra && Math.abs(wa.y - W.y) <= Ra;
            Ra && W && aa && W.timeStamp - aa.timeStamp <= ba.Ei ? (la.push(W), Ha()) : (la.length >= ba.Zh && Da(), la = [W])
        }
    }

    function ta(W, wa, Ra, gb) {
        if (0 !==
            ha.length) {
            wa = W.av;
            Ra = ha;
            for (var pb = [], Vb = 0; Vb < Ra.length; Vb++) {
                var na = Ra[Vb];
                pb.push(na.Fi + "|" + na.ai.toFixed() + "|" + na.duration.toFixed())
            }
            wa.call(W, gb, "rC", pb.join(","), !0);
            ha = []
        }
    }

    function Ha() {
        U.dT_.ct(P);
        P = U.dT_.st(function() {
            la.length >= ba.Zh && Da()
        }, ba.fi)
    }

    function Da() {
        var W = la[0];
        W = {
            Fi: la.length,
            ai: Math.round(W.timeStamp),
            duration: Math.round(la[la.length - 1].timeStamp - W.timeStamp)
        };
        0 < W.ai && 0 < W.duration && (ha.push(W), U.dT_.sMPS(2E3));
        la = []
    }

    function Ea() {
        Xa();
        Q && !E ? Za() : !Q && E && (U.dT_.rBPSL(ta), U.dT_.rel(document,
            "click", qa, void 0), U.dT_.rel(document, "mousedown", rb, void 0), la = [], ha = [], E = !1)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var U = "undefined" !== typeof window ? window : self,
        S = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0,
        sa;
    (function(W) {
        W.ANCHOR = "A";
        W.BUTTON = "BUTTON";
        W.FORM = "FORM";
        W.I_FRAME = "IFRAME";
        W.IMAGE = "IMG";
        W.INPUT = "INPUT";
        W.LABEL = "LABEL";
        W.LINK = "LINK";
        W.OPTION = "OPTION";
        W.SCRIPT = "SCRIPT";
        W.SELECT = "SELECT";
        W.STYLE = "STYLE";
        W.TEXT_AREA = "TEXTAREA"
    })(sa || (sa = {}));
    var ma, ea, Ga = -1,
        Na, pa = [],
        oa = !1,
        Q, ba, E = !1,
        P, aa, la = [],
        ha = [];
    (function() {
        var W, wa;
        return S.dT_ && (null === (wa = (W = U.dT_).smbi) || void 0 === wa ? void 0 : wa.call(W, "u"))
    })() && (Xa(), Q && Za(), Ka(Ea), bb(), ma && kb(), Ka(Sa))
})();
(function() {
    function Ka(w, B, K) {
        if (K || 2 === arguments.length)
            for (var H = 0, V = B.length, I; H < V; H++) !I && H in B || (I || (I = Array.prototype.slice.call(B, 0, H)), I[H] = B[H]);
        return w.concat(I || Array.prototype.slice.call(B))
    }

    function bb() {}

    function kb(w) {
        if (ec)
            for (var B = 0, K = cc; B < K.length; B++) {
                var H = K[B];
                qc.includes(H) || na.dT_.iNF(w[H]) || qc.splice(0, 0, H)
            }
    }

    function eb(w, B) {
        var K = !1;
        try {
            K = !na.dT_.iNF(w)
        } catch (V) {}
        if (!K)
            for (var H = 0; H < B.length && !(K = (K = w.prototype[B[H]]) && !na.dT_.iNF(K)); H++);
        return K ? (na.dT_.addE("DEBUG_INFO_REQUESTED",
            function() {
                return [{
                    type: "lxw",
                    text: "Found a non-native XMLHttpRequest or EventTarget object before initializing! Basic XHR is operating in late mode.",
                    severity: "Warning"
                }]
            }), !0) : !1
    }

    function cb(w) {
        if (!w) return {};
        w = w.replace(/^\s+|\s+$/g, "").split(/[\r\n]+/);
        var B = {};
        na.dT_.fE(w, function(K) {
            K = K.split(": ");
            var H = K.shift();
            H && (B[H] = K.join(": "))
        });
        return B
    }

    function Ta(w) {
        return (w = w.toString().match(/\[object (XMLHttpRequest)?(\w+)]/)) && w[2] && "Object" !== w[2] && "function" === typeof Db[w[2]] ? w[2] : "Event"
    }

    function Sa(w, B) {
        w = w.dtProps.ta;
        var K = [];
        B = B.substring(2);
        for (var H = 0; H < w.length; H++) {
            var V = w[H];
            V[0] === B && K.push(V[1])
        }
        return K
    }

    function Xa(w, B, K) {
        function H(Aa) {
            function vb(ub, mb) {
                try {
                    K ? (na.dT_.ec(K.dtProps.Z), K.dtProps.Pa++) : (na.dT_.ec(w.dtProps.Z), w.dtProps.Pa++), "object" === typeof mb && mb.handleEvent ? Fb.handleEventCallback(mb.handleEvent, mb, ub) : Fb.handleEventCallback(mb, w, ub)
                } finally {
                    K ? (K.dtProps.Pa--, na.dT_.lc(K.dtProps.Z)) : (w.dtProps.Pa--, na.dT_.lc(w.dtProps.Z))
                }
            }
            B[Aa] = function(ub) {
                var mb = Array.prototype.slice.call(arguments);
                if (0 < mb.length) {
                    var xb = Pa(ub, w);
                    na.dT_.fE(zc, function(Rb) {
                        "undefined" !== typeof ub[Rb] && (xb[Rb] = ub[Rb])
                    });
                    mb[0] = xb
                }
                if (na.dT_.mx() && Aa in I) I[Aa](V.Z);
                var Mb = w.dtProps[Aa] || ec && w[Aa];
                Mb && vb(mb, Mb);
                Mb = 0;
                for (var sb = Sa(w, Aa); Mb < sb.length; Mb++) vb(mb, sb[Mb]);
                "onloadend" === Aa && w instanceof Ca && qa(V, w)
            }
        }
        var V = K ? K.dtProps : w.dtProps;
        for (var I = {
                onerror: function() {
                    V.ga = !0;
                    K ? na.dT_.mxg("Upload failure", V.Z) : na.dT_.mxf(V.G.status, V.G.statusText, V.Z)
                },
                onabort: function(Aa) {
                    Aa = na.dT_.mxc(Aa);
                    V.ga = !0;
                    V.da = "abort";
                    return Aa
                },
                ontimeout: function(Aa) {
                    Aa = na.dT_.mxt(Aa);
                    V.ga = !0;
                    V.da = "abort";
                    return Aa
                }
            }, Ma = 0, ia = Ec; Ma < ia.length; Ma++) {
            var Ia = ia[Ma];
            try {
                if (Ia in B || ec && Ia in w) na.dT_.bcv("raxeh") ? H(Ia) : (Sa(w, Ia).length || w[Ia]) && H(Ia)
            } catch (Aa) {}
        }
    }

    function Ua(w, B, K) {
        Object.defineProperty(w, B, {
            enumerable: !0,
            get: K
        })
    }

    function Pa(w, B) {
        var K = w.timeStamp || na.dT_.nw(),
            H = "undefined" === typeof w.eventPhase ? 2 : w.eventPhase,
            V = w.stopPropagation || bb,
            I = w.stopImmediatePropagation || bb,
            Ma = w.preventDefault || bb,
            ia = w.initEvent || bb,
            Ia = Ta(w);
        try {
            var Aa =
                Za(Ia, w);
            Ua(Aa, "target", function() {
                return B
            });
            Ua(Aa, "currentTarget", function() {
                return B
            });
            Ua(Aa, "srcElement", function() {
                return B
            });
            Ua(Aa, "eventPhase", function() {
                return H
            });
            Ua(Aa, "timeStamp", function() {
                return K
            });
            Ua(Aa, "stopPropagation", function() {
                return V
            });
            Ua(Aa, "stopImmediatePropagation", function() {
                return I
            });
            Ua(Aa, "preventDefault", function() {
                return Ma
            });
            Ua(Aa, "initEvent", function() {
                return ia
            });
            return Aa
        } catch (vb) {}
        return {
            type: w.type,
            target: B,
            currentTarget: B,
            srcElement: B,
            eventPhase: H,
            bubbles: w.bubbles ||
                !1,
            cancelable: w.cancelable || !1,
            timeStamp: K,
            stopPropagation: V,
            stopImmediatePropagation: I,
            preventDefault: Ma,
            initEvent: ia
        }
    }

    function Za(w, B) {
        var K = new Db[w](B.type, B);
        "ProgressEvent" === w && rb(K, B);
        return K
    }

    function rb(w, B) {
        Ua(w, "total", function() {
            return B.total
        });
        Ua(w, "loaded", function() {
            return B.loaded
        })
    }

    function qa(w, B, K) {
        var H, V;
        na.dT_.disE((H = {}, H.kind = "REQUEST_COMPLETED", H.detail = (V = {}, V.i = "xmlhttprequest", V.x = w.url, V.m = w.method, V.c = B.status, V.s = B.statusText, V.a = K, V.e = na.dT_.nw(), V.r = na.dT_.gRT(w.url,
            "xmlhttprequest", w.requestStart, na.dT_.nw()) || void 0, V.q = w.requestStart, V.o = w.da, V.t = w.ga, V.n = w.Qa, V), H))
    }

    function ta(w, B) {
        var K, H, V = B.Z,
            I = w.status;
        try {
            var Ma = Ya;
            if (Ma.gEMD && Ma.iRHCA && Ma.iRHCA()) {
                var ia = cb(w.getAllResponseHeaders());
                na.dT_.disE((K = {}, K.kind = "HTTP_RESPONSE", K.detail = (H = {}, H.a = V, H.h = ia, H), K))
            }
        } catch (Ia) {}
        200 !== I && na.dT_.mx() && (B.ga = !0, 0 === I ? (B.da || (B.da = "abort"), na.dT_.st(function() {
            na.dT_.mxc(V)
        }, 0)) : na.dT_.mxf(I, w.statusText, V));
        na.dT_.lx(V, void 0, "x");
        B.Z = 0
    }

    function Ha(w, B) {
        try {
            var K =
                Object.getPrototypeOf(w),
                H = Object.getPrototypeOf(w.dtProps.G);
            H || (H = Ob.prototype);
            return K && H && !dc.has(K[B]) ? K[B] : null
        } catch (V) {
            return null
        }
    }

    function Da(w) {
        return na.dT_.iIO(w, ["dtProps"])
    }

    function Ea(w) {
        w.UNSENT = 0;
        w.OPENED = 1;
        w.HEADERS_RECEIVED = 2;
        w.LOADING = 3;
        w.DONE = 4
    }

    function U(w) {
        "upload" === w ? Object.defineProperty(Db.XMLHttpRequest.prototype, "upload", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                if (!this.dtProps.zb) return Ob.prototype.upload;
                this.dtProps.upload || (this.dtProps.upload = new G(this));
                return this.dtProps.upload
            }
        }) : Object.defineProperty(Db.XMLHttpRequest.prototype, w, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return this.dtProps.zb ? 0 <= hb.indexOf(w) ? this.dtProps.G[w] : this.dtProps[w] : Ob.prototype[w]
            },
            set: function(B) {
                this.dtProps.zb ? this.dtProps[w] = B : Ob.prototype[w] = B
            }
        })
    }

    function S(w, B) {
        var K = Db.XMLHttpRequest.prototype[w];
        if (B || na.dT_.iNF(K)) Db.XMLHttpRequest.prototype[w] = function(H, V) {
            function I() {
                if (Da(this)) {
                    "open" !== H || this.dtProps.url || (this.dtProps.url = arguments[1] + "");
                    this.dtProps.G.withCredentials !==
                        this.dtProps.withCredentials && (this.dtProps.G.withCredentials = this.dtProps.withCredentials);
                    var Ma = this.dtProps.G
                } else Ma = this;
                return Fb.XMLHttpRequestCallback(V, Ma, arguments)
            }
            dc.set(I, !0);
            return I
        }(w, Ob.prototype[w])
    }

    function sa() {
        Ob = Db.XMLHttpRequest;
        Lb = Ya.ct || clearTimeout;
        Db.XMLHttpRequest = Ca;
        ec = eb(Ob, qc);
        Ca.prototype = Object.create(Ob.prototype, Object.getOwnPropertyDescriptors(Ob.prototype));
        Ca.prototype.dtProps = {
            zb: !1
        };
        Ca.prototype.dtProps.zb = !1;
        Ea(Ca);
        Ea(Ca.prototype);
        kb(Ob.prototype);
        for (var w in Ob.prototype)
            if (-1 ===
                Hb.indexOf(w) || -1 !== qc.indexOf(w)) try {
                -1 !== qc.indexOf(w) ? S(w, !0) : -1 !== Qb.indexOf(w) ? U(w) : Db.XMLHttpRequest.prototype[w] = Ob.prototype[w]
            } catch (K) {
                U(w)
            }
        for (var B in Ob)
            if (!(B in Ob.prototype)) try {
                Db.XMLHttpRequest[B] = Ob[B]
            } catch (K) {}
        try {
            ma()
        } catch (K) {}
    }

    function ma() {
        if (!na.dT_.bcv("peti")) {
            var w = EventTarget.prototype,
                B = w.addEventListener;
            w.addEventListener = function(V, I, Ma) {
                if (Da(this)) this.dtProps.Pd(V, I, Ma);
                else return Fb.AELWrapper(B, this, arguments)
            };
            var K = w.removeEventListener;
            w.removeEventListener =
                function(V, I, Ma) {
                    if (Da(this)) this.dtProps.af(V, I, Ma);
                    else return Fb.RELWrapper(K, this, arguments)
                };
            var H = w.dispatchEvent;
            w.dispatchEvent = function(V) {
                return Da(this) ? this.dtProps.Ic(V) : Fb.dispatchWrapper(H, this, arguments)
            }
        }
    }

    function ea(w, B) {
        return new da(w, B)
    }

    function Ga(w) {
        return "string" === typeof w
    }

    function Na(w) {
        w.Yc || (na.dT_.lx(w.D, void 0, "x"), w.Yc = !0)
    }

    function pa(w) {
        var B = w.D,
            K = w.url;
        return Ya.aWF(w.xa, w.context, w.va, void 0 === B ? 0 : B, void 0 === K ? "" : K, "x")
    }

    function oa(w, B, K) {
        return function() {
            for (var H = [], V = 0; V < arguments.length; V++) H[V] = arguments[V];
            V = w.D;
            var I = w.url;
            try {
                if (w.Dc = na.dT_.nw(), na.dT_.ec(V), "function" === typeof B) return pa({
                    xa: B,
                    context: K,
                    va: H,
                    D: V,
                    url: I
                })
            } finally {
                na.dT_.lc(V), Na(w)
            }
        }
    }

    function Q(w, B, K, H) {
        return function() {
            for (var V = [], I = 0; I < arguments.length; I++) V[I] = arguments[I];
            try {
                na.dT_.ec(w.D);
                var Ma = V[0],
                    ia = Ta(Ma),
                    Ia = new Db[ia](Ma.type, Ma);
                ba(Ma, H, Ia);
                V[0] = Ia;
                if ("function" === typeof B) return pa({
                    xa: B,
                    context: Ma.target,
                    va: V,
                    D: w.D,
                    url: w.url
                })
            } finally {
                na.dT_.lc(w.D)
            }
        }
    }

    function ba(w,
        B, K) {
        B = E(w, "target", B);
        Object.defineProperties(K, {
            target: B,
            currentTarget: B,
            srcElement: B,
            stopPropagation: E(w, "stopPropagation", function() {
                for (var H = [], V = 0; V < arguments.length; V++) H[V] = arguments[V];
                Event.prototype.stopPropagation.apply(w, H);
                return Event.prototype.stopPropagation.apply(K, H)
            }),
            stopImmediatePropagation: E(w, "stopImmediatePropagation", function() {
                for (var H = [], V = 0; V < arguments.length; V++) H[V] = arguments[V];
                Event.prototype.stopImmediatePropagation.apply(w, H);
                return Event.prototype.stopImmediatePropagation.apply(K,
                    H)
            }),
            preventDefault: E(w, "preventDefault", function() {
                for (var H = [], V = 0; V < arguments.length; V++) H[V] = arguments[V];
                Event.prototype.preventDefault.apply(w, H);
                return Event.prototype.preventDefault.apply(K, H)
            }),
            eventPhase: E(w, "eventPhase", "undefined" === typeof w.eventPhase ? 2 : void 0),
            timeStamp: E(w, "timeStamp", w.timeStamp || na.dT_.nw()),
            initEvent: E(w, "initEvent")
        })
    }

    function E(w, B, K) {
        return {
            get: function() {
                return K || w[B]
            },
            enumerable: !0
        }
    }

    function P(w, B, K) {
        return function() {
            for (var H, V, I = [], Ma = 0; Ma < arguments.length; Ma++) I[Ma] =
                arguments[Ma];
            try {
                if (Ma = Ya, Ma.gEMD && Ma.iRHCA && Ma.iRHCA() && K.readyState === K.HEADERS_RECEIVED) {
                    var ia = cb(K.getAllResponseHeaders());
                    na.dT_.disE((H = {}, H.kind = "HTTP_RESPONSE", H.detail = (V = {}, V.a = w.D, V.h = ia, V), H))
                }
            } catch (Ia) {}
            try {
                if (w.Dc = na.dT_.nw(), na.dT_.ec(w.D), K.readyState === K.DONE && na.dT_.mx() && (0 >= K.status || 400 <= K.status) && (w.ga = !0, 0 === K.status ? (w.da || (w.da = "abort"), na.dT_.st(na.dT_.mxc.bind(null, w.D), 0)) : na.dT_.mxf(K.status, K.statusText, w.D)), "function" === typeof B) return pa({
                    xa: B,
                    context: K,
                    va: I,
                    D: w.D,
                    url: w.url
                })
            } finally {
                na.dT_.lc(w.D), K.readyState === K.DONE && Na(w)
            }
        }
    }

    function aa(w, B, K) {
        "upload" === B && na.dT_.mx() && !K.ve && (w.upload.addEventListener("error", function() {
            na.dT_.mxg("Upload failure", K.D)
        }), K.ve = !0);
        return K.Db.has(B) ? K.Db.get(B) : Reflect.get(w, B)
    }

    function la(w, B, K) {
        try {
            EventTarget.prototype.addEventListener.call(w, B, K)
        } catch (H) {
            w.addEventListener(B, K)
        }
    }

    function ha(w) {
        var B = {
            method: "",
            Dc: 0,
            requestStart: 0,
            zd: new WeakMap,
            D: 0,
            async: !0,
            Yc: !1,
            url: "",
            target: w,
            cj: !1,
            ve: !1,
            Db: new Map,
            da: void 0,
            ga: !1,
            Qa: na.dT_.gtc(),
            toString: function() {
                return "[Custom DTProperty Object]"
            },
            toJSON: function() {
                return "[Custom DTProperty Object]"
            }
        };
        w.dtProps = B;
        la(w, "readystatechange", P(B, function() {}, w));
        na.dT_.mx() && (la(w, "error", function() {
            B.ga = !0;
            B.da = void 0;
            return na.dT_.mxf(w.status, w.statusText, B.D)
        }), la(w, "abort", function() {
            B.ga = !0;
            B.da = "abort";
            return na.dT_.mxc(B.D)
        }), la(w, "timeout", function() {
            B.ga = !0;
            B.da = "abort";
            return na.dT_.mxt(B.D)
        }));
        la(w, "loadend", function() {
            var K, H;
            na.dT_.disE((K = {}, K.kind = "REQUEST_COMPLETED",
                K.detail = (H = {}, H.i = "xmlhttprequest", H.x = B.url, H.m = B.method, H.c = B.target.status, H.s = B.target.statusText, H.a = B.Dc, H.e = na.dT_.nw(), H.r = na.dT_.gRT(B.url, "xmlhttprequest", B.requestStart, na.dT_.nw()) || void 0, H.q = B.requestStart, H.o = B.da, H.t = B.ga, H.n = B.Qa, H), K))
        });
        return ea(w, {
            get: function(K, H) {
                return aa(K, H, B)
            },
            set: function(K, H, V, I) {
                try {
                    var Ma = V;
                    switch (H) {
                        case "onabort":
                        case "onerror":
                        case "ontimeout":
                            Ma = oa(B, V, K);
                            B.Db.set(H, V);
                            break;
                        case "onloadstart":
                        case "onprogress":
                        case "onload":
                        case "onloadend":
                            Ma =
                                Q(B, V, K, I);
                            B.Db.set(H, V);
                            break;
                        case "onreadystatechange":
                            Ma = P(B, V, K), B.Db.set(H, V)
                    }
                    var ia = Reflect.set(K, H, Ma)
                } catch (Ia) {
                    ia = !1
                }
                return ia
            }
        })
    }

    function W(w, B) {
        try {
            if ("string" === typeof B && "function" === typeof w[B]) {
                var K = na.dT_.iNF(w[B]);
                w[B] = ea(w[B], {
                    apply: gb.bind(null, B, K),
                    get: function(H, V, I) {
                        return "dT_proxy" === V ? !0 : Reflect.get(H, V, I)
                    }
                })
            }
        } catch (H) {}
    }

    function wa(w, B) {
        kb(B);
        w = na.dT_.aFr(w, pb.bind(null, B));
        na.dT_.fE(w, W.bind(null, B))
    }

    function Ra(w, B, K, H, V) {
        var I, Ma;
        w.requestStart = na.dT_.nw();
        if (!w.D) {
            w.D =
                na.dT_.ex("x", void 0, w.url, !1, B);
            na.dT_.disE((I = {}, I.kind = "REQUEST_STARTED", I.detail = (Ma = {}, Ma.i = "xmlhttprequest", Ma.x = w.url, Ma), I));
            var ia = na.dT_.sch({
                headers: {}
            }, w.url, w.D, void 0, w.Qa);
            I = na.dT_.aFr(Reflect.ownKeys(ia.headers), Ga);
            na.dT_.fE(I, function(Ia) {
                K.setRequestHeader(Ia, ia.headers[Ia])
            })
        }
        try {
            return pa({
                xa: B,
                context: H,
                va: V,
                D: w.D,
                url: w.url
            })
        } finally {
            w.async || Na(w)
        }
    }

    function gb(w, B, K, H, V) {
        if (!na.dT_.iIO(H, 22)) return pa({
            xa: K,
            context: H,
            va: V
        });
        var I = H.dtProps,
            Ma = H;
        I && (B || ec) && (Ma = I.target);
        if (!I) return pa({
            xa: K,
            context: Ma,
            va: V
        });
        switch ((B ? K.name : w) || w) {
            case "addEventListener":
                "function" === typeof V[1] && (w = V[1], (B = I.zd.get(w)) ? V[1] = B : (H = Q(I, w, Ma, H), I.zd.set(w, H), V[1] = H));
                break;
            case "removeEventListener":
                (H = I.zd.get(V[1])) && (V[1] = H);
                break;
            case "open":
                return I.D = 0, I.Yc = !1, I.method = V[0], I.url = V[1] + "", I.async = !0 === V[2] || void 0 === V[2], pa({
                    xa: K,
                    context: Ma,
                    va: V
                });
            case "send":
                return Ra(I, K, H, Ma, V);
            case "abort":
                I.ga = !0, I.da = "abort", Na(I)
        }
        return pa({
            xa: K,
            context: Ma,
            va: V,
            D: I.D,
            url: I.url
        })
    }

    function pb(w, B) {
        try {
            var K =
                w[B];
            if ("function" !== typeof K || K.dT_proxy) return !1
        } catch (H) {
            return !1
        }
        return !0
    }

    function Vb() {
        ec = eb(Db.XMLHttpRequest, qc) || eb(Db.EventTarget, Hb);
        da = Db.Proxy;
        var w = Db.XMLHttpRequest.prototype,
            B = EventTarget.prototype;
        Db.XMLHttpRequest = ea(Db.XMLHttpRequest, {
            construct: function(K, H) {
                wa(qc, w);
                wa(Hb, B);
                return ha(Reflect.construct(K, H))
            }
        });
        wa(qc, w);
        w.constructor = Db.XMLHttpRequest;
        wa(Hb, B)
    }
    this.dT_ && dT_.prm && dT_.prm();
    var na = "undefined" !== typeof window ? window : self,
        Db = "undefined" !== typeof globalThis ? globalThis :
        "undefined" !== typeof window ? window : void 0,
        zc = "cancelBubble defaultPrevented eventPhase isTrusted lengthComputable loaded position returnValue timeStamp total totalSize type".split(" "),
        Ec = "onabort onerror onload onloadend onloadstart onprogress ontimeout".split(" "),
        hb = "responseText response status statusText responseBody responseStream responseURL responseXML responseType".split(" "),
        Qb = Ka(Ka(Ka([], hb, !0), Ec, !0), ["onreadystatechange", "upload", "readyState"], !1),
        qc = "open send getAllResponseHeaders getResponseHeader setRequestHeader overrideMimeType abort sendAsBinary setAttributionReporting setPrivateToken".split(" "),
        Hb = ["addEventListener", "removeEventListener", "dispatchEvent"],
        vc = Ka(Ka(Ka([], qc, !0), Qb, !0), Hb, !0),
        ec = !1,
        cc = ["addEventListener", "removeEventListener"],
        Pb, Lb, Ob, dc = new WeakMap,
        Fb = (Pb = {}, Pb.handleEventCallback = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.callOpen = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.send = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.getAllResponseHeaders = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.getResponseHeader = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.setRequestHeader = function(w, B, K) {
                return Ya.aWF(w,
                    B, K)
            }, Pb.overrideMimeType = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.RELWrapper = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.AELWrapper = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.dispatchWrapper = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.onreadystatechangeCallback = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.dispatchXHRCallback = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.XMLHttpRequestCallback = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.preventDefault = function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb.stopImmediatePropagation =
            function(w, B, K) {
                return Ya.aWF(w, B, K)
            }, Pb),
        G = function() {
            function w(B) {
                var K = this;
                if (K.constructor) {
                    var H = w;
                    Object.defineProperty(K, "constructor", {
                        get: function() {
                            return H
                        },
                        set: function(Ma) {
                            H = Ma
                        }
                    })
                }
                K.dtProps = {
                    ta: [],
                    Ue: B.dtProps.G.upload,
                    Ye: B,
                    Wb: !1
                };
                var V = K.dtProps;
                B = 0;
                for (var I = Ec; B < I.length; B++)(function(Ma) {
                    Object.defineProperty(K, Ma, {
                        enumerable: !0,
                        get: function() {
                            return V[Ma]
                        },
                        set: function(ia) {
                            V[Ma] = ia;
                            V.Wb || (V.Wb = !0, Xa(K, V.Ue, V.Ye))
                        }
                    })
                })(I[B]);
                K.addEventListener = function(Ma, ia, Ia) {
                    if (ia) {
                        for (var Aa =
                                V.ta, vb = 0; vb < Aa.length; vb++) {
                            var ub = Aa[vb];
                            if (ub[0] === Ma && ub[1] === ia && ub[2] === Ia) return
                        }
                        Aa.push([Ma, ia, !!Ia]);
                        V.Wb || (V.Wb = !0, Xa(K, V.Ue, V.Ye))
                    }
                };
                K.removeEventListener = function(Ma, ia, Ia) {
                    for (var Aa, vb = V.ta, ub = 0; ub < vb.length; ub++)
                        if (Aa = vb[ub], Aa[0] === Ma && Aa[1] === ia && Aa[2] === Ia) {
                            vb.splice(ub, 1);
                            break
                        }
                };
                K.dispatchEvent = function(Ma) {
                    var ia = V.ta,
                        Ia = !1,
                        Aa = !1;
                    if (Ma.cancelable && Ma.preventDefault) {
                        var vb = Ma.preventDefault;
                        Ma.preventDefault = function() {
                            Ia = !0;
                            return Fb.preventDefault(vb, this, arguments)
                        }
                    }
                    if (Ma.stopImmediatePropagation) {
                        var ub =
                            Ma.stopImmediatePropagation;
                        Ma.stopImmediatePropagation = function() {
                            Aa = !0;
                            return Fb.stopImmediatePropagation(ub, this, arguments)
                        }
                    }
                    for (var mb = 0; mb < ia.length; mb++) {
                        var xb = ia[mb];
                        Aa || xb[0] !== Ma.type || xb[2] || ("object" === typeof xb[1] && xb[1].handleEvent ? Fb.dispatchXHRCallback(xb[1].handleEvent, xb[1], [Ma]) : Fb.dispatchXHRCallback(xb[1], K, [Ma]))
                    }
                    return !Ia
                }
            }
            w.prototype.toString = function() {
                return "[XMLHttpRequestUpload]"
            };
            return w
        }(),
        fa = {
            readyState: 0,
            response: "",
            responseText: "",
            responseType: "",
            responseURL: "",
            status: 0,
            statusText: "",
            timeout: 0,
            withCredentials: !1
        },
        Ca = function() {
            function w(B) {
                function K(ia) {
                    if (-1 === hb.indexOf(ia) && (!na.dT_.oHOP(I.G, ia) || na.dT_.oHOP(H, ia))) return ec && -1 !== qc.indexOf(ia) && S(ia, !1), "continue";
                    if ("upload" === ia) Object.defineProperty(H, "upload", {
                        enumerable: !0,
                        get: function() {
                            I.upload || (I.upload = new G(H));
                            return I.upload
                        }
                    });
                    else {
                        try {
                            I[ia] = I.G[ia]
                        } catch (Ia) {}
                        Object.defineProperty(H, ia, {
                            enumerable: !0,
                            get: function() {
                                return 0 <= hb.indexOf(ia) ? I.G[ia] : "undefined" === typeof I[ia] ? fa[ia] : I[ia]
                            },
                            set: function(Ia) {
                                I[ia] =
                                    Ia
                            }
                        })
                    }
                }
                var H = this;
                if (H.constructor) {
                    var V = w;
                    Object.defineProperty(H, "constructor", {
                        get: function() {
                            return V
                        },
                        set: function(ia) {
                            V = ia
                        }
                    })
                }
                H.dtProps = {
                    requestStart: 0,
                    zb: !0,
                    Z: 0,
                    ta: [],
                    url: "",
                    method: "",
                    aborted: !1,
                    Pa: 0,
                    async: void 0,
                    G: arguments.length ? new Ob(B) : new Ob,
                    $f: !1,
                    $e: -1,
                    nd: -1,
                    qd: [],
                    Be: !1,
                    Ub: function() {
                        H.readyState = I.G.readyState;
                        if (H.readyState !== I.$e || 100 < na.dT_.nw() - I.nd) {
                            for (var ia = 0, Ia = I.qd; ia < Ia.length; ia++) Lb(Ia[ia]);
                            I.qd = [];
                            I.dh();
                            I.nd = na.dT_.nw()
                        } else I.qd.push(na.dT_.st(I.Ub, 100));
                        I.$e = H.readyState
                    },
                    mg: function(ia, Ia) {
                        var Aa, vb;
                        I.G.onreadystatechange !== I.Ub && (I.G.onreadystatechange = I.Ub);
                        I.Z = 0;
                        I.requestStart = na.dT_.nw();
                        H.__dtFrameworks__ || (I.Z = na.dT_.ex("x", void 0, I.url, void 0, H, !1, ec));
                        na.dT_.disE((Aa = {}, Aa.kind = "REQUEST_STARTED", Aa.detail = (vb = {}, vb.i = "xmlhttprequest", vb.x = I.url, vb), Aa));
                        try {
                            I.async && (I.G.timeout = H.timeout)
                        } catch (Mb) {}
                        try {
                            I.async && (I.G.responseType = H.responseType)
                        } catch (Mb) {}
                        I.eh();
                        Aa = {};
                        Aa = na.dT_.sch(Aa, I.url, I.Z, void 0, I.Qa);
                        for (var ub in Aa.headers) na.dT_.oHOP(Aa.headers,
                            ub) && I.G.setRequestHeader(ub, Aa.headers[ub]);
                        I.G.withCredentials !== H.withCredentials && (I.G.withCredentials = H.withCredentials);
                        ub = !0;
                        try {
                            if (Ia && I.G.sendAsBinary) var mb = I.G.sendAsBinary.apply(I.G, ia);
                            else {
                                var xb = Ha(H, "send");
                                mb = xb ? Fb.send(xb, H, ia) : I.G.send.apply(I.G, ia)
                            }
                            ub = !1
                        } finally {
                            ub && na.dT_.lx(I.Z, void 0, "x")
                        }!I.async && H.readyState && I.Z && na.dT_.lx(I.Z, void 0, "x");
                        return mb
                    },
                    eh: function() {
                        I.Be || (Xa(H, I.G), I.Be = !0)
                    },
                    Pd: function(ia, Ia, Aa) {
                        void 0 === Aa && (Aa = !1);
                        for (var vb = 0, ub = I.ta; vb < ub.length; vb++) {
                            var mb =
                                ub[vb];
                            if (mb[0] === ia && mb[1] === Ia && mb[2] === Aa) return
                        }
                        I.ta.push([ia, Ia, Aa])
                    },
                    af: function(ia, Ia, Aa) {
                        void 0 === Aa && (Aa = !1);
                        for (var vb, ub = 0; ub < I.ta.length; ub++)
                            if (vb = I.ta[ub], vb[0] === ia && vb[1] === Ia && vb[2] === Aa) {
                                I.ta.splice(ub, 1);
                                break
                            }
                    },
                    Ic: function(ia) {
                        var Ia = !1,
                            Aa = !1;
                        if (ia.cancelable && ia.preventDefault) {
                            var vb = ia.preventDefault;
                            ia.preventDefault = function() {
                                Ia = !0;
                                return Fb.preventDefault(vb, this, arguments)
                            }
                        }
                        if (ia.stopImmediatePropagation) {
                            var ub = ia.stopImmediatePropagation;
                            ia.stopImmediatePropagation = function() {
                                Aa = !0;
                                return Fb.stopImmediatePropagation(ub, this, arguments)
                            }
                        }
                        ia = Pa(ia, H);
                        "readystatechange" === ia.type && "undefined" !== typeof I.onreadystatechange && I.onreadystatechange && (I.$f = !0, Fb.onreadystatechangeCallback(I.onreadystatechange, H, [ia]));
                        for (var mb = 0, xb = I.ta; mb < xb.length; mb++) {
                            var Mb = xb[mb];
                            Aa || Mb[0] !== ia.type || Mb[2] || ("object" === typeof Mb[1] && Mb[1].handleEvent ? Fb.dispatchXHRCallback(Mb[1].handleEvent, Mb[1], [ia]) : Fb.dispatchXHRCallback(Mb[1], H, [ia]))
                        }
                        return !Ia
                    },
                    dh: function() {
                        var ia = I.Z;
                        try {
                            na.dT_.ec(ia,
                                H.readyState), I.Pa++, I.Ic({
                                type: "readystatechange",
                                bubbles: !1,
                                cancelable: !1,
                                timeStamp: na.dT_.nw()
                            })
                        } finally {
                            I.Pa--, na.dT_.lc(ia), 4 === H.readyState && ia && ta(H, I)
                        }
                    },
                    da: void 0,
                    ga: !1,
                    Qa: na.dT_.gtc(),
                    toString: function() {
                        return "[Custom DTProperty Object]"
                    },
                    toJSON: function() {
                        return "[Custom DTProperty Object]"
                    }
                };
                var I = H.dtProps;
                H.readyState = 0;
                Ea(H);
                try {
                    Object.defineProperty(I, "responseType", {
                        get: function() {
                            return I.G.responseType
                        },
                        set: function(ia) {
                            I.G.responseType = ia
                        }
                    })
                } catch (ia) {}
                kb(Ob.prototype);
                for (var Ma in I.G) K(Ma);
                I.nd = na.dT_.nw();
                H.onreadystatechange = null;
                "withCredentials" in I.G && (H.withCredentials = I.G.withCredentials);
                H.timeout = 0;
                I.G.overrideMimeType && (H.overrideMimeType = function(ia) {
                    var Ia = Ha(H, "overrideMimeType");
                    return Ia ? Fb.overrideMimeType(Ia, H, arguments) : I.G.overrideMimeType(ia)
                });
                na.dT_.bcv("peti") && I.G.addEventListener && (H.addEventListener = function(ia, Ia, Aa) {
                    var vb = Ha(H, "addEventListener");
                    I.Pd(ia, Ia, Aa);
                    vb ? na.dT_.iNF(vb) || Fb.AELWrapper(vb, I.G, arguments) : na.dT_.iNF(I.G.addEventListener) || I.G.addEventListener(ia,
                        Ia, Aa)
                }, H.removeEventListener = function(ia, Ia, Aa) {
                    var vb = Ha(H, "removeEventListener");
                    I.af(ia, Ia, Aa);
                    vb ? na.dT_.iNF(vb) || Fb.RELWrapper(vb, I.G, arguments) : na.dT_.iNF(I.G.removeEventListener) || I.G.removeEventListener(ia, Ia, Aa)
                }, H.dispatchEvent = function(ia) {
                    var Ia = Ha(H, "dispatchEvent");
                    if (Ia) {
                        if (!na.dT_.iNF(Ia)) return Fb.dispatchWrapper(Ia, I.G, arguments)
                    } else if (!na.dT_.iNF(I.G.dispatchEvent)) return I.G.dispatchEvent(ia);
                    return I.Ic(ia)
                });
                H.open = function(ia, Ia, Aa, vb, ub) {
                    I.aborted = !1;
                    I.method = ia;
                    3 > arguments.length &&
                        (Aa = !0);
                    I.async = Aa;
                    I.G.onreadystatechange = I.Ub;
                    I.url = "" + Ia;
                    var mb = Ha(H, "open");
                    mb ? Fb.callOpen(mb, H, arguments) : Fb.callOpen(I.G.open, I.G, arguments);
                    H.readyState = I.G.readyState
                };
                H.send = function() {
                    return I.mg(arguments, !1)
                };
                H.abort = function() {
                    for (var ia = [], Ia = 0; Ia < arguments.length; Ia++) ia[Ia] = arguments[Ia];
                    0 < H.readyState && (I.aborted = !0);
                    (Ia = Ha(H, "abort")) ? Ia.apply(H, ia): I.G.abort();
                    if (I.Z) {
                        for (; 0 < I.Pa;) I.Pa--, na.dT_.lc(I.Z);
                        na.dT_.lx(I.Z, void 0, "x");
                        I.Z = 0
                    }
                };
                H.getAllResponseHeaders = function() {
                    var ia = Ha(H,
                        "getAllResponseHeaders");
                    return ia ? Fb.getAllResponseHeaders(ia, H, arguments) : I.G.getAllResponseHeaders()
                };
                H.getResponseHeader = function(ia) {
                    var Ia = Ha(H, "getResponseHeader");
                    return Ia ? Fb.getResponseHeader(Ia, H, arguments) : I.G.getResponseHeader(ia)
                };
                H.setRequestHeader = function(ia, Ia) {
                    var Aa = ia && ia.toLowerCase ? ia.toLowerCase() : ia;
                    if ("x-dtpc" !== Aa && "x-dtreferer" !== Aa && "x-host" !== Aa && "x-dtc" !== Aa) return (Aa = Ha(H, "setRequestHeader")) ? Fb.setRequestHeader(Aa, H, arguments) : I.G.setRequestHeader(ia, Ia)
                };
                H.toString =
                    function() {
                        return "[XMLHttpRequest]"
                    };
                H.toJSON = function() {
                    return I.G
                };
                if (Db.Proxy && na.dT_.bcv("exp")) return H = new Proxy(H, {
                    set: function(ia, Ia, Aa) {
                        ia[Ia] = Aa;
                        try {
                            -1 === vc.indexOf(Ia) && (ia.dtProps.G[Ia] = Aa)
                        } catch (vb) {}
                        return !0
                    }
                })
            }
            return w
        }(),
        da, yb, tb;
    if ((Pb = Db.dT_) && "ea" in Pb && (null === (tb = (yb = na.dT_).smbi) || void 0 === tb ? 0 : tb.call(yb, "x"))) {
        var Ya = Pb;
        "object" === typeof Db.Reflect && "function" === typeof Db.Proxy && na.dT_.bcv("expw") && !na.dT_.gBI().edge ? Vb() : sa()
    }
})();