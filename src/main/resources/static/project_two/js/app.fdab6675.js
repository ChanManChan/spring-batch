(function (e) {
    function t(t) {
        for (var a, o, s = t[0], l = t[1], c = t[2], d = 0, p = []; d < s.length; d++) (o = s[d]), Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]), (i[o] = 0);
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        u && u(t);
        while (p.length) p.shift()();
        return n.push.apply(n, c || []), r();
    }
    function r() {
        for (var e, t = 0; t < n.length; t++) {
            for (var r = n[t], a = !0, s = 1; s < r.length; s++) {
                var l = r[s];
                0 !== i[l] && (a = !1);
            }
            a && (n.splice(t--, 1), (e = o((o.s = r[0]))));
        }
        return e;
    }
    var a = {},
        i = { app: 0 },
        n = [];
    function o(t) {
        if (a[t]) return a[t].exports;
        var r = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    (o.m = e),
        (o.c = a),
        (o.d = function (e, t, r) {
            o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (o.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                    o.d(
                        r,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return r;
        }),
        (o.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e["default"];
                      }
                    : function () {
                          return e;
                      };
            return o.d(t, "a", t), t;
        }),
        (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (o.p = "/");
    var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = s.push.bind(s);
    (s.push = t), (s = s.slice());
    for (var c = 0; c < s.length; c++) t(s[c]);
    var u = l;
    n.push([0, "chunk-vendors"]), r();
})({
    0: function (e, t, r) {
        e.exports = r("56d7");
    },
    "034f": function (e, t, r) {
        "use strict";
        var a = r("85ec"),
            i = r.n(a);
        i.a;
    },
    "2c94": function (e, t, r) {
        "use strict";
        var a = r("4d8a"),
            i = r.n(a);
        i.a;
    },
    "4d8a": function (e, t, r) {},
    "56d7": function (e, t, r) {
        "use strict";
        r.r(t);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var a = r("2b0e"),
            i = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("thePage")], 1);
            },
            n = [],
            o = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r(
                    "div",
                    [
                        e.lockToWindow
                            ? r(
                                  "backstretchHeader",
                                  { attrs: { resizeToWindowView: !0, image: e.exampleOne.image, focusYinPercent: e.exampleOne.y, focusXinPercent: e.exampleOne.x, heightPercentageOfWindow: 60, widthPercentageOfWindow: 100 } },
                                  [r("div", { staticClass: "container" }, [r("searchComponent")], 1)]
                              )
                            : e._e(),
                        r(
                            "a",
                            {
                                staticStyle: {
                                    "background-color": "transparent",
                                    color: "black",
                                    "text-decoration": "none",
                                    padding: "4px 6px",
                                    "font-family": '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
                                    "font-size": "12px",
                                    "font-weight": "bold",
                                    "line-height": "1.2",
                                    display: "inline-block",
                                    "border-radius": "0px",
                                },
                                attrs: {
                                    href: "https://unsplash.com/@nilsnedel?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    title: "Download free do whatever you want high-resolution photos from Nils Nedel",
                                },
                            },
                            [
                                r("span", { staticStyle: { display: "inline-block", padding: "2px 3px" } }, [
                                    r(
                                        "svg",
                                        { staticStyle: { height: "12px", width: "auto", position: "relative", "vertical-align": "middle", top: "-2px", fill: "white" }, attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" } },
                                        [r("title", [e._v("unsplash-logo")]), r("path", { attrs: { d: "M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" } })]
                                    ),
                                ]),
                                r("span", { staticStyle: { display: "inline-block", padding: "2px 3px" } }, [e._v("Picture by Nils Nedel")]),
                            ]
                        ),
                        e.$store.state.errorMessage ? r("div", { staticClass: "container error-indicator" }, [e._v(" " + e._s(e.$store.state.errorMessage) + " ")]) : e._e(),
                        e.loadingState ? r("div", { staticClass: "container loading-indicator" }, [r("font-awesome-icon", { attrs: { icon: "spinner", rotation: "90", pulse: "" } })], 1) : e._e(),
                        r("div", { staticClass: "container" }, [
                            r(
                                "div",
                                { staticClass: "result-list" },
                                e._l(e.searchResultList, function (t) {
                                    return r("div", { key: t, staticClass: "result-item" }, [
                                        r("div", { staticClass: "result-times" }, [
                                            r("span", { staticClass: "time-label" }, [r("font-awesome-icon", { attrs: { icon: "plane-departure" } }), e._v(" Start:")], 1),
                                            r("span", { staticClass: "time" }, [e._v(e._s(t.departureTime))]),
                                            r("span", { staticClass: "time-label" }, [r("font-awesome-icon", { attrs: { icon: "plane-arrival" } }), e._v(" Arrival:")], 1),
                                            r("span", { staticClass: "time" }, [e._v(e._s(t.arrivalTime))]),
                                        ]),
                                        r("hr"),
                                        r("div", { staticClass: "result-footer" }, [
                                            r("span", { staticClass: "airline-name" }, [e._v(e._s(t.airlineName))]),
                                            r("span", { staticClass: "price" }, [e._v(e._s(t.price) + " $ ")]),
                                            r("button", { staticClass: "booking" }, [e._v("Check this offer")]),
                                        ]),
                                    ]);
                                }),
                                0
                            ),
                        ]),
                    ],
                    1
                );
            },
            s = [],
            l = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", { class: "bsdefault", style: Object.assign({}, e.computedStyle, { "background-repeat": "no-repeat", "background-size": "cover" }) }, [e._t("default")], 2);
            },
            c = [],
            u = (r("a9e3"), r("5530")),
            d = {
                props: {
                    resizeToWindowView: { type: Boolean, default: !0 },
                    heightPercentageOfWindow: { type: Number, default: 100 },
                    widthPercentageOfWindow: { type: Number, default: 100 },
                    width: { type: Number, default: void 0 },
                    height: { type: Number, default: void 0 },
                    image: { type: String, required: !0 },
                    focusXinPercent: { type: Number, default: 100 },
                    focusYinPercent: { type: Number, default: 100 },
                },
                watch: {
                    width: function () {
                        this.computeStyle();
                    },
                    height: function () {
                        this.computeStyle();
                    },
                    image: function () {
                        this.computeStyle();
                    },
                    focusXinPercent: function (e) {
                        this.computeStyle();
                    },
                    focusYinPercent: function (e) {
                        this.computeStyle();
                    },
                },
                data: function () {
                    return { computedStyle: {} };
                },
                methods: {
                    inPixels: function (e) {
                        return e + "px";
                    },
                    inPercent: function (e) {
                        return e + "%";
                    },
                    handleResize: function () {
                        this.computeStyle();
                    },
                    computeStyle: function () {
                        var e = this.image ? "url('".concat(this.image, "')") : "none",
                            t = {
                                "background-position-y": this.focusYinPercent ? this.inPercent(this.focusYinPercent) : this.inPercent(0),
                                "background-position-x": this.focusXinPercent ? this.inPercent(this.focusXinPercent) : this.inPercent(0),
                                backgroundImage: e,
                            };
                        if (this.resizeToWindowView) {
                            var r = 100 === this.heightPercentageOfWindow ? window.outerHeight : window.outerHeight * (this.heightPercentageOfWindow / 100),
                                a = 100 === this.widthPercentageOfWindow ? window.outerWidth : window.outerWidth * (this.widthPercentageOfWindow / 100);
                            this.computedStyle = Object(u["a"])({ width: this.inPixels(a), height: this.inPixels(r) }, t);
                        } else this.computedStyle = Object(u["a"])({ width: this.inPixels(this.width), height: this.inPixels(this.height) }, t);
                    },
                },
                created: function () {
                    window.addEventListener("resize", this.handleResize), this.handleResize();
                },
                destroyed: function () {
                    window.removeEventListener("resize", this.handleResize);
                },
            },
            p = d,
            h = r("2877"),
            f = Object(h["a"])(p, l, c, !1, null, null, null),
            g = f.exports,
            v = function () {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", { staticClass: "panel " }, [
                    r("div", { staticClass: "container" }, [r("H2", [e._v("Pick your next flight!")])], 1),
                    r("div", { staticClass: "container" }, [
                        r("label", [e._v("From")]),
                        r(
                            "select",
                            {
                                directives: [{ name: "model", rawName: "v-model", value: e.selectedDepartureAirport, expression: "selectedDepartureAirport" }],
                                attrs: { type: "select", disabled: e.loadingState },
                                on: {
                                    change: [
                                        function (t) {
                                            var r = Array.prototype.filter
                                                .call(t.target.options, function (e) {
                                                    return e.selected;
                                                })
                                                .map(function (e) {
                                                    var t = "_value" in e ? e._value : e.value;
                                                    return t;
                                                });
                                            e.selectedDepartureAirport = t.target.multiple ? r : r[0];
                                        },
                                        e.changeDep,
                                    ],
                                },
                            },
                            e._l(e.getAailableAirports(), function (t) {
                                return r("option", { key: t, domProps: { value: t } }, [e._v(" " + e._s(t) + " ")]);
                            }),
                            0
                        ),
                        r("label", [e._v("To")]),
                        r(
                            "select",
                            {
                                directives: [{ name: "model", rawName: "v-model", value: e.selectedArrivalAirport, expression: "selectedArrivalAirport" }],
                                attrs: { type: "select", disabled: e.loadingState },
                                on: {
                                    change: [
                                        function (t) {
                                            var r = Array.prototype.filter
                                                .call(t.target.options, function (e) {
                                                    return e.selected;
                                                })
                                                .map(function (e) {
                                                    var t = "_value" in e ? e._value : e.value;
                                                    return t;
                                                });
                                            e.selectedArrivalAirport = t.target.multiple ? r : r[0];
                                        },
                                        e.changeArr,
                                    ],
                                },
                            },
                            e._l(e.getAailableAirports(), function (t) {
                                return r("option", { key: t, domProps: { value: t } }, [e._v(" " + e._s(t) + " ")]);
                            }),
                            0
                        ),
                        r("label", [e._v("At")]),
                        r("select", { attrs: { type: "select", disabled: e.loadingState } }, [r("option", [e._v(" Today ")])]),
                        r(
                            "button",
                            {
                                staticClass: "search-button",
                                attrs: { disabled: e.loadingState },
                                on: {
                                    click: function (t) {
                                        return e.triggerSearch({ departure: e.selectedDepartureAirport, arrival: e.selectedArrivalAirport });
                                    },
                                },
                            },
                            [e._v("SEARCH")]
                        ),
                    ]),
                    r("div", { staticClass: "container" }, [
                        r("div", { staticClass: "random" }, [
                            r("p", { attrs: { href: "#" } }, [
                                e._v("Or let us choose one for you "),
                                r(
                                    "a",
                                    {
                                        staticClass: "random-link",
                                        attrs: { disabled: e.loadingState, href: "#" },
                                        on: {
                                            click: function (t) {
                                                return t.preventDefault(), e.shuffle(t);
                                            },
                                        },
                                    },
                                    [e._v("randomly")]
                                ),
                            ]),
                        ]),
                    ]),
                ]);
            },
            m = [],
            b = r("2f62"),
            w = {
                methods: Object(u["a"])({}, Object(b["b"])(["triggerSearch"]), {}, Object(b["c"])(["getAailableAirports"]), {}, Object(b["d"])(["changeDeparture", "changeArrival", "shuffle"]), {
                    changeDep: function (e) {
                        this.changeDeparture(e.target.value);
                    },
                    changeArr: function (e) {
                        this.changeArrival(e.target.value);
                    },
                }),
                computed: {
                    loadingState: function () {
                        return this.$store.state.loadingState;
                    },
                    selectedDepartureAirport: function () {
                        return this.$store.state.selectedDepartureAirport;
                    },
                    selectedArrivalAirport: function () {
                        return this.$store.state.selectedArrivalAirport;
                    },
                },
            },
            y = w,
            _ = (r("2c94"), Object(h["a"])(y, v, m, !1, null, "167cfa02", null)),
            S = _.exports,
            A = r("bf74"),
            P = r.n(A),
            x = {
                data: function () {
                    return { lockToWindow: !0, previewWidth: 1280, previewHeight: 768, exampleOne: { x: 90, y: 0, image: P.a, text: "In this exampign in any scale. Try to resize the window!" } };
                },
                computed: {
                    loadingState: function () {
                        return this.$store.state.loadingState;
                    },
                    searchResultList: function () {
                        return this.$store.state.searchResult;
                    },
                },
                methods: {},
                components: { backstretchHeader: g, searchComponent: S },
            },
            O = x,
            k = (r("8571"), Object(h["a"])(O, o, s, !1, null, "4b4e702a", null)),
            C = k.exports,
            j = {
                data: function () {
                    return { lockToWindow: !1 };
                },
                components: { thePage: C },
            },
            D = j,
            W = (r("034f"), Object(h["a"])(D, i, n, !1, null, null, null)),
            M = W.exports,
            N = r("ecee"),
            T = r("c074"),
            R = r("ad3d"),
            z = r("bc3a"),
            E = r.n(z),
            $ = r("a7fe"),
            H = r.n($);
        a["a"].use(b["a"]), a["a"].use(H.a, E.a), (E.a.defaults.baseURL = "/holiday"), (E.a.defaults.headers.get["Content-Type"] = "application/json");
        var L = new b["a"].Store({
            state: { searchResult: [], errorMessage: "", loadingState: !1, selectedDepartureAirport: "", selectedArrivalAirport: "", availableAirports: ["", "NewYork", "SanFrancisco", "London", "Frankfurt", "Amsterdam", "Paris", "Dubai"] },
            getters: {
                getAailableAirports: function (e) {
                    return e.availableAirports;
                },
            },
            mutations: {
                setSearchResult: function (e, t) {
                    e.searchResult = t;
                },
                setError: function (e, t) {
                    e.errorMessage = t;
                },
                enableLoadingState: function (e) {
                    e.loadingState = !0;
                },
                disableLoadingState: function (e) {
                    e.loadingState = !1;
                },
                changeDeparture: function (e, t) {
                    e.selectedDepartureAirport = t;
                },
                changeArrival: function (e, t) {
                    e.selectedArrivalAirport = t;
                },
                shuffle: function (e) {
                    if (!e.loadingState) {
                        var t = e.availableAirports,
                            r = t.length,
                            a = Math.floor(Math.random() * Math.floor(r - 1)) + 1,
                            i = Math.floor(Math.random() * Math.floor(r - 1)) + 1;
                        (e.selectedDepartureAirport = t[a]), (e.selectedArrivalAirport = t[i]);
                    }
                },
            },
            actions: {
                triggerSearch: function (e, t) {
                    console.log(e), console.log(t), e.commit("setSearchResult", []);
                    var r = t.departure,
                        a = t.arrival;
                    "" !== r
                        ? "" !== a
                            ? r !== a
                                ? (e.commit("setError", ""),
                                  e.commit("enableLoadingState"),
                                  E.a
                                      .post("/search", { flightDate: "2020-06-20", departureAirport: r ? r.toUpperCase() : "", arrivalAirport: a ? a.toUpperCase() : "" })
                                      .then(function (t) {
                                          e.commit("disableLoadingState"), e.commit("setSearchResult", t.data);
                                      })
                                      .catch(function (t) {
                                          e.commit("disableLoadingState"), console.log(t), e.commit("setError", t);
                                      }))
                                : e.commit("setError", "Departure and arrival are equal. Take the bus!")
                            : e.commit("setError", "Please select your arrival airport!")
                        : e.commit("setError", "Please select your departure airport!");
                },
            },
        });
        (a["a"].config.productionTip = !1),
            N["c"].add(T["b"]),
            N["c"].add(T["a"]),
            N["c"].add(T["c"]),
            a["a"].component("font-awesome-icon", R["a"]),
            new a["a"]({
                render: function (e) {
                    return e(M);
                },
                store: L,
            }).$mount("#app");
    },
    8571: function (e, t, r) {
        "use strict";
        var a = r("f84b"),
            i = r.n(a);
        i.a;
    },
    "85ec": function (e, t, r) {},
    bf74: function (e, t, r) {
        e.exports = r.p + "project_two/img/flight.4adb7593.jpg";
    },
    f84b: function (e, t, r) {},
});
//# sourceMappingURL=app.fdab6675.js.map
