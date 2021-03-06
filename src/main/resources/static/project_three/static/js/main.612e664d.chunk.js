(this["webpackJsonpbatch-practice-three"] = this["webpackJsonpbatch-practice-three"] || []).push([
    [0],
    {
        37: function (e, t, a) {
            e.exports = a(57);
        },
        42: function (e, t, a) {},
        44: function (e, t, a) {},
        57: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                c = a.n(n),
                l = a(13),
                r = a.n(l),
                o = a(20),
                s = a(11),
                m = (a(42), a(43), a(44), a(14)),
                i = a(15),
                u = a(18),
                E = a(17),
                d = a(59),
                p = a(9),
                b = a(58),
                h = function () {
                    var e = Object(p.c)(function (e) {
                        return e.isConnected;
                    });
                    return c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            b.a,
                            { className: "navbar-top navbar-dark", expand: "md", id: "navbar-main" },
                            c.a.createElement(d.a, { fluid: !0 }, e && c.a.createElement(c.a.Fragment, null, "Connected"), !e && c.a.createElement(c.a.Fragment, null, "Disconnected"))
                        )
                    );
                },
                f = a(60),
                N = a(61),
                v = (function (e) {
                    Object(u.a)(a, e);
                    var t = Object(E.a)(a);
                    function a() {
                        return Object(m.a)(this, a), t.apply(this, arguments);
                    }
                    return (
                        Object(i.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    return c.a.createElement(
                                        "footer",
                                        { className: "footer" },
                                        c.a.createElement(
                                            f.a,
                                            { className: "align-items-center justify-content-xl-between" },
                                            c.a.createElement(
                                                N.a,
                                                { xl: "6" },
                                                c.a.createElement(
                                                    "div",
                                                    { className: "copyright text-center text-xl-left text-muted" },
                                                    "\xa9 2021",
                                                    " ",
                                                    c.a.createElement("a", { className: "font-weight-bold ml-1", href: "https://google.com", rel: "noopener noreferrer", target: "_blank" }, "Nanda Gopal")
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(c.a.Component),
                g = a(23),
                O = a(62),
                j = a(63),
                y = a(64),
                x = a(65),
                C = a(73),
                I = (function (e) {
                    Object(u.a)(a, e);
                    var t = Object(E.a)(a);
                    function a(e) {
                        var n;
                        return (
                            Object(m.a)(this, a),
                            ((n = t.call(this, e)).state = { collapseOpen: !1 }),
                            (n.toggleCollapse = function () {
                                n.setState({ collapseOpen: !n.state.collapseOpen });
                            }),
                            (n.closeCollapse = function () {
                                n.setState({ collapseOpen: !1 });
                            }),
                            (n.createLinks = function (e) {
                                return e.map(function (e, t) {
                                    return c.a.createElement(
                                        O.a,
                                        { key: t },
                                        c.a.createElement(j.a, { to: e.layout + e.path, tag: o.b, onClick: n.closeCollapse, activeClassName: "active" }, c.a.createElement("i", { className: e.icon }), e.name)
                                    );
                                });
                            }),
                            n.activeRoute.bind(Object(g.a)(n)),
                            n
                        );
                    }
                    return (
                        Object(i.a)(a, [
                            {
                                key: "activeRoute",
                                value: function (e) {
                                    return this.props.location.pathname.indexOf(e) > -1 ? "active" : "";
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.routes,
                                        a = e.logo;
                                    return c.a.createElement(
                                        b.a,
                                        { className: "navbar-vertical fixed-left navbar-light bg-white", expand: "md", id: "sidenav-main" },
                                        c.a.createElement(
                                            d.a,
                                            { fluid: !0 },
                                            c.a.createElement("button", { className: "navbar-toggler", type: "button", onClick: this.toggleCollapse }, c.a.createElement("span", { className: "navbar-toggler-icon" })),
                                            a ? c.a.createElement(y.a, Object.assign({ className: "pt-0" }, void 0), "Batch Dashboard") : null,
                                            c.a.createElement(x.a, { className: "align-items-center d-md-none" }),
                                            c.a.createElement(
                                                C.a,
                                                { navbar: !0, isOpen: this.state.collapseOpen },
                                                c.a.createElement(
                                                    "div",
                                                    { className: "navbar-collapse-header d-md-none" },
                                                    c.a.createElement(
                                                        f.a,
                                                        null,
                                                        c.a.createElement(
                                                            N.a,
                                                            { className: "collapse-close", xs: "6" },
                                                            c.a.createElement("button", { className: "navbar-toggler", type: "button", onClick: this.toggleCollapse }, c.a.createElement("span", null), c.a.createElement("span", null))
                                                        )
                                                    )
                                                ),
                                                c.a.createElement(x.a, { navbar: !0 }, this.createLinks(t)),
                                                c.a.createElement("hr", { className: "my-3" })
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(c.a.Component);
            I.defaultProps = { routes: [{}] };
            var T = I,
                S = function (e) {
                    return e ? { type: "CONNECTED" } : { type: "DISCONNECTED" };
                },
                w = function (e) {
                    return { type: "JOB_DEFINITIONS", payload: e };
                },
                D = function (e) {
                    return { type: "JOB_NAMES", payload: e };
                },
                k = "/job-monitoring",
                J = function (e) {
                    fetch(k + "/job-definitions")
                        .then(function (e) {
                            return e.json();
                        })
                        .then(function (t) {
                            e.dispatch(w(t.value));
                        })
                        .catch(function () {
                            e.dispatch(w(0));
                        });
                },
                _ = function (e, t) {
                    fetch(k + "/job/" + e + "/instances")
                        .then(function (e) {
                            return e.json();
                        })
                        .then(function (e) {
                            t({ type: "JOB_INSTANCES", payload: e.value });
                        })
                        .catch(function () {
                            console.log("Unable to load job instaces");
                        });
                },
                R = function (e, t) {
                    fetch(k + "/job/instance/" + e)
                        .then(function (e) {
                            return e.json();
                        })
                        .then(function (e) {
                            t({ type: "JOB_EXECUTIONS", payload: e.value });
                        })
                        .catch(function () {
                            console.log("Unable to load job executions");
                        });
                },
                B = a(66),
                U = a(70),
                F = a(71),
                A = a(72),
                L = a(67),
                P = a(68),
                X = a(69),
                V = function () {
                    var e = Object(p.b)(),
                        t = Object(p.c)(function (e) {
                            return e.jobDefinition;
                        }),
                        a = Object(p.c)(function (e) {
                            return e.jobNames;
                        });
                    return (
                        a || (a = []),
                        c.a.createElement(
                            c.a.Fragment,
                            null,
                            c.a.createElement(
                                "div",
                                { className: "header bg-gradient-info pb-8 pt-5 pt-md-8" },
                                c.a.createElement(
                                    d.a,
                                    { fluid: !0 },
                                    c.a.createElement(
                                        "div",
                                        { className: "header-body" },
                                        c.a.createElement(
                                            f.a,
                                            null,
                                            c.a.createElement(
                                                N.a,
                                                { lg: "6", xl: "6" },
                                                c.a.createElement(
                                                    B.a,
                                                    { className: "card-stats mb-4 mb-xl-0" },
                                                    c.a.createElement(
                                                        L.a,
                                                        null,
                                                        c.a.createElement(
                                                            f.a,
                                                            null,
                                                            c.a.createElement(
                                                                "div",
                                                                { className: "col" },
                                                                c.a.createElement(P.a, { tag: "h5", className: "text-uppercase text-muted mb-0" }, "Job Definitions"),
                                                                c.a.createElement("span", { className: "h2 font-weight-bold mb-0" }, t)
                                                            ),
                                                            c.a.createElement(
                                                                N.a,
                                                                { className: "col-auto" },
                                                                c.a.createElement("div", { className: "icon icon-shape bg-danger text-white rounded-circle shadow" }, c.a.createElement("i", { className: "fas fa-project-diagram" }))
                                                            )
                                                        ),
                                                        c.a.createElement(
                                                            "p",
                                                            { className: "mt-3 mb-0 text-muted text-sm" },
                                                            a.map(function (t) {
                                                                return c.a.createElement(
                                                                    "span",
                                                                    { key: t, className: "jobLink" },
                                                                    c.a.createElement(
                                                                        "a",
                                                                        {
                                                                            href: "#selectJobName",
                                                                            onClick: function () {
                                                                                e({ type: "CURRENT_JOB", payload: t }), _(t, e);
                                                                            },
                                                                        },
                                                                        t
                                                                    )
                                                                );
                                                            })
                                                        )
                                                    )
                                                )
                                            ),
                                            c.a.createElement(
                                                N.a,
                                                { lg: "6", xl: "6" },
                                                c.a.createElement(
                                                    B.a,
                                                    { className: "card-stats mb-4 mb-xl-0" },
                                                    c.a.createElement(
                                                        L.a,
                                                        null,
                                                        c.a.createElement(
                                                            f.a,
                                                            null,
                                                            c.a.createElement(
                                                                "div",
                                                                { className: "col" },
                                                                c.a.createElement(P.a, { tag: "h5", className: "text-uppercase text-muted mb-0" }, "Run simpleJob with parameters"),
                                                                c.a.createElement("span", { className: "h2 font-weight-bold mb-0" }, c.a.createElement(X.a, { id: "param", type: "text", cl: !0, placeholder: "Parameter", bsSize: "sm" }))
                                                            ),
                                                            c.a.createElement(
                                                                N.a,
                                                                { className: "col-auto" },
                                                                c.a.createElement("div", { className: "icon icon-shape bg-yellow text-white rounded-circle shadow" }, c.a.createElement("i", { className: "fas fa-play" }))
                                                            )
                                                        ),
                                                        c.a.createElement(
                                                            "p",
                                                            { className: "mt-3 mb-0 text-muted text-sm" },
                                                            c.a.createElement(
                                                                "span",
                                                                { className: "text-success mr-2" },
                                                                c.a.createElement(
                                                                    "button",
                                                                    {
                                                                        onClick: function () {
                                                                            return (e = document.getElementById("param").value), void fetch(k + "/simple-job/start/" + e, { method: "POST" });
                                                                            var e;
                                                                        },
                                                                        className: "btn btn-sm",
                                                                    },
                                                                    "Run Job"
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    );
                },
                z = [
                    {
                        path: "/index",
                        name: "Dashboard",
                        icon: "ni ni-tv-2 text-primary",
                        component: function () {
                            var e = Object(p.b)(),
                                t = Object(p.c)(function (e) {
                                    return e.currentJobData;
                                }),
                                a = t.name,
                                n = t.currentInstance,
                                l = t.instances ? t.instances : [],
                                r = t.executions ? t.executions : null;
                            return c.a.createElement(
                                c.a.Fragment,
                                null,
                                c.a.createElement(V, null),
                                c.a.createElement(
                                    d.a,
                                    { className: "mt--7", fluid: !0 },
                                    c.a.createElement(
                                        f.a,
                                        { className: "mt-5" },
                                        a &&
                                            c.a.createElement(
                                                N.a,
                                                { className: "mb-5 mb-xl-0", xl: "6" },
                                                c.a.createElement(
                                                    B.a,
                                                    { className: "shadow" },
                                                    c.a.createElement(
                                                        U.a,
                                                        { className: "border-0" },
                                                        c.a.createElement(
                                                            f.a,
                                                            { className: "align-items-center" },
                                                            c.a.createElement("div", { className: "col" }, c.a.createElement("h3", { className: "mb-0" }, "Job: ", a)),
                                                            c.a.createElement(
                                                                "div",
                                                                { className: "col text-right" },
                                                                c.a.createElement(
                                                                    F.a,
                                                                    {
                                                                        color: "primary",
                                                                        href: "#pablo",
                                                                        onClick: function (e) {
                                                                            e.preventDefault(), fetch(k + "/job/start-new/?jobName=" + a, { method: "POST" });
                                                                        },
                                                                        size: "sm",
                                                                    },
                                                                    "Trigger new Job without parameters"
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    c.a.createElement(
                                                        A.a,
                                                        { className: "align-items-center table-flush", responsive: !0 },
                                                        c.a.createElement(
                                                            "thead",
                                                            { className: "thead-light" },
                                                            c.a.createElement("tr", null, c.a.createElement("th", { scope: "col" }, "Instance Id"), c.a.createElement("th", { scope: "col" }, "Version"))
                                                        ),
                                                        c.a.createElement(
                                                            "tbody",
                                                            null,
                                                            l.map(function (t) {
                                                                return c.a.createElement(
                                                                    "tr",
                                                                    { key: t.id },
                                                                    c.a.createElement(
                                                                        "th",
                                                                        { scope: "row" },
                                                                        c.a.createElement(
                                                                            "a",
                                                                            {
                                                                                href: "#selectInstance",
                                                                                onClick: function () {
                                                                                    e({ type: "CURRENT_INSTANCE", payload: t.id }), R(t.id, e);
                                                                                },
                                                                            },
                                                                            "Instance ",
                                                                            t.id
                                                                        )
                                                                    ),
                                                                    c.a.createElement("td", null, t.version)
                                                                );
                                                            })
                                                        )
                                                    )
                                                )
                                            ),
                                        r &&
                                            c.a.createElement(
                                                N.a,
                                                { className: "mb-5 mb-xl-0", xl: "6" },
                                                c.a.createElement(
                                                    B.a,
                                                    { className: "shadow" },
                                                    c.a.createElement(
                                                        U.a,
                                                        { className: "border-0" },
                                                        c.a.createElement(
                                                            f.a,
                                                            { className: "align-items-center" },
                                                            c.a.createElement("div", { className: "col" }, c.a.createElement("h3", { className: "mb-0" }, "Job Executions for Instance: ", n)),
                                                            c.a.createElement("div", { className: "col text-right" })
                                                        )
                                                    ),
                                                    c.a.createElement(
                                                        A.a,
                                                        { className: "align-items-center table-flush", responsive: !0 },
                                                        c.a.createElement(
                                                            "thead",
                                                            { className: "thead-light" },
                                                            c.a.createElement(
                                                                "tr",
                                                                null,
                                                                c.a.createElement("th", { scope: "col" }, "Status"),
                                                                c.a.createElement("th", { scope: "col" }, "Running"),
                                                                c.a.createElement("th", { scope: "col" }, "ContextInfo"),
                                                                c.a.createElement("th", { scope: "col" }, "Action")
                                                            )
                                                        ),
                                                        c.a.createElement(
                                                            "tbody",
                                                            null,
                                                            r.map(function (e) {
                                                                return c.a.createElement(
                                                                    "tr",
                                                                    { key: e.id },
                                                                    c.a.createElement("td", null, e.status),
                                                                    c.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        e.isRunning && c.a.createElement("i", { className: "fas fa-spinner ni spin text-success mr-3" }),
                                                                        !e.isRunning && c.a.createElement(c.a.Fragment, null, "not running")
                                                                    ),
                                                                    c.a.createElement("td", null, e.contextInfo),
                                                                    c.a.createElement(
                                                                        "td",
                                                                        null,
                                                                        c.a.createElement(
                                                                            "button",
                                                                            {
                                                                                className: "btn btn-sm",
                                                                                onClick: function () {
                                                                                    return (t = e.id), void fetch(k + "/execution/" + t + "/stop", { method: "POST" });
                                                                                    var t;
                                                                                },
                                                                            },
                                                                            "Stop"
                                                                        ),
                                                                        c.a.createElement(
                                                                            "button",
                                                                            {
                                                                                className: "btn btn-sm",
                                                                                onClick: function () {
                                                                                    return (t = e.id), void fetch(k + "/execution/" + t + "/restart", { method: "POST" });
                                                                                    var t;
                                                                                },
                                                                            },
                                                                            "Restart"
                                                                        )
                                                                    )
                                                                );
                                                            })
                                                        )
                                                    )
                                                )
                                            )
                                    ),
                                    !a &&
                                        c.a.createElement(
                                            f.a,
                                            { className: "mt-5" },
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null),
                                            c.a.createElement("br", null)
                                        )
                                )
                            );
                        },
                        layout: "/jobs",
                    },
                ],
                M = (function (e) {
                    Object(u.a)(a, e);
                    var t = Object(E.a)(a);
                    function a() {
                        var e;
                        Object(m.a)(this, a);
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r];
                        return (
                            ((e = t.call.apply(t, [this].concat(l))).getRoutes = function (e) {
                                return e.map(function (e, t) {
                                    return "/jobs" === e.layout ? c.a.createElement(s.b, { path: e.layout + e.path, component: e.component, key: t }) : null;
                                });
                            }),
                            (e.getBrandText = function (t) {
                                for (var a = 0; a < z.length; a++) if (-1 !== e.props.location.pathname.indexOf(z[a].layout + z[a].path)) return z[a].name;
                                return "Brand";
                            }),
                            e
                        );
                    }
                    return (
                        Object(i.a)(a, [
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    (document.documentElement.scrollTop = 0), (document.scrollingElement.scrollTop = 0), (this.refs.mainContent.scrollTop = 0);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return c.a.createElement(
                                        c.a.Fragment,
                                        null,
                                        c.a.createElement(T, Object.assign({}, this.props, { routes: z, logo: { innerLink: "/jobs/index" } })),
                                        c.a.createElement(
                                            "div",
                                            { className: "main-content", ref: "mainContent" },
                                            c.a.createElement(h, Object.assign({}, this.props, { brandText: this.getBrandText(this.props.location.pathname) })),
                                            c.a.createElement(s.d, null, this.getRoutes(z), c.a.createElement(s.a, { from: "*", to: "/jobs" })),
                                            c.a.createElement(d.a, { fluid: !0 }, c.a.createElement(v, null))
                                        )
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(c.a.Component),
                q = a(16),
                G = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "JOB_DEFINITIONS":
                            return t.payload;
                        default:
                            return e;
                    }
                },
                H = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CONNECTED":
                            return !0;
                        case "DISCONNECTED":
                            return !1;
                        default:
                            return e;
                    }
                },
                K = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "JOB_NAMES":
                            return t.payload;
                        default:
                            return e;
                    }
                },
                Q = a(12),
                W = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CURRENT_JOB":
                            return { name: t.payload, items: [] };
                        case "JOB_INSTANCES":
                            return Object(Q.a)(Object(Q.a)({}, e), {}, { instances: t.payload });
                        case "CURRENT_INSTANCE":
                            return Object(Q.a)(Object(Q.a)({}, e), {}, { currentInstance: t.payload });
                        case "JOB_EXECUTIONS":
                            return Object(Q.a)(Object(Q.a)({}, e), {}, { executions: t.payload.executions });
                        default:
                            return e;
                    }
                },
                Y = Object(q.b)({ jobDefinition: G, isConnected: H, jobNames: K, currentJobData: W }),
                Z = Object(q.c)(Y, { isConnected: !0 }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            r.a.render(
                c.a.createElement(
                    p.a,
                    { store: Z },
                    c.a.createElement(
                        o.a,
                        null,
                        c.a.createElement(
                            s.d,
                            null,
                            c.a.createElement(s.b, {
                                path: "/jobs",
                                render: function (e) {
                                    return c.a.createElement(M, e);
                                },
                            }),
                            c.a.createElement(s.a, { from: "/", to: "/jobs/index" })
                        )
                    )
                ),
                document.getElementById("root")
            );
            var $,
                ee = new EventSource("/events/register-client");
            (ee.onopen = function () {
                Z.dispatch(S(!0));
            }),
                (ee.onerror = function (e) {
                    console.error(e), Z.dispatch(S(!1));
                }),
                ee.addEventListener("ping", function (e) {
                    !(function (e) {
                        J(e);
                        var t = e.getState();
                        t.currentJobData.currentInstance && R(t.currentJobData.currentInstance, e.dispatch);
                    })(Z);
                }),
                ee.addEventListener("jobs", function (e) {
                    !(function (e) {
                        var t = e.getState();
                        t.currentJobData.name && _(t.currentJobData.name, e.dispatch), t.currentJobData.currentInstance && R(t.currentJobData.currentInstance, e.dispatch);
                    })(Z);
                }),
                J(Z),
                ($ = Z),
                fetch(k + "/job-names")
                    .then(function (e) {
                        return e.json();
                    })
                    .then(function (e) {
                        $.dispatch(D(e.value));
                    })
                    .catch(function () {
                        $.dispatch(D([]));
                    });
        },
    },
    [[37, 1, 2]],
]);
//# sourceMappingURL=main.612e664d.chunk.js.map
