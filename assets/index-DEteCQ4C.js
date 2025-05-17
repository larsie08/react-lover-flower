const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CEBBSjgO.js","assets/vendor-DsNSJXVB.js","assets/vendor-DV8PrLMj.css","assets/index-BtP6gyP3.js","assets/vendor-redux-CF_v3iJm.js","assets/index-BDmUrxLb.js","assets/index-Bsgy-FKQ.js","assets/index-CIIaK8L4.js","assets/index-CIOvp2sS.js","assets/index-BS0uFe2Q.js","assets/index-CyGvSHNP.js","assets/index-uF4ggOrh.js","assets/index-ofKoiS9e.js","assets/index-C-SBp1M3.js","assets/index-HuDZA0JD.js","assets/index-BpnorXUV.js"])))=>i.map(i=>d[i]);
import { b as z, c as te, r as l, j as e, d as b, L as C, u as Z, e as Ne, T as ye, f as se, g as ae, h as T, B as ke, A as Ie, S as M, k as Be, l as Le, M as Se, N as Fe, m as Ae, n as le, o as w, O as Oe, R as qe, q as f, s as Me, t as Ee, H as Pe, __tla as __tla_0 } from "./vendor-DsNSJXVB.js";
import { c as O, a as re, b as Te, u as De, d as y, P as Re } from "./vendor-redux-CF_v3iJm.js";
let p2, Xt, g, d, v, v2, pt, V, L, Ue, lt, d2, c2, x2, dt, ue, oe, C2, it, G, ce, m2, fe, f2, h2, N, j2, k, pe, mt, g2, Je, m1;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const i of o) if (i.type === "childList") for (const c of i.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function a(o) {
      const i = {};
      return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function r(o) {
      if (o.ep) return;
      o.ep = true;
      const i = a(o);
      fetch(o.href, i);
    }
  })();
  let He, ze, Q, _, Ze, ie, Ve;
  He = "modulepreload";
  ze = function(t) {
    return "/react-lover-flower/" + t;
  };
  Q = {};
  _ = function(s, a, r) {
    let o = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const c = document.querySelector("meta[property=csp-nonce]"), m = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
      o = Promise.allSettled(a.map((n) => {
        if (n = ze(n), n in Q) return;
        Q[n] = true;
        const x = n.endsWith(".css"), h = x ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${n}"]${h}`)) return;
        const u = document.createElement("link");
        if (u.rel = x ? "stylesheet" : He, x || (u.as = "script"), u.crossOrigin = "", u.href = n, m && u.setAttribute("nonce", m), document.head.appendChild(u), x) return new Promise((B, S) => {
          u.addEventListener("load", B), u.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${n}`)));
        });
      }));
    }
    function i(c) {
      const m = new Event("vite:preloadError", {
        cancelable: true
      });
      if (m.payload = c, window.dispatchEvent(m), !m.defaultPrevented) throw c;
    }
    return o.then((c) => {
      for (const m of c || []) m.status === "rejected" && i(m.reason);
      return s().catch(i);
    });
  };
  Ze = {
    isOpenModal: false,
    isOpenCart: false,
    isOpenHamburgerMenu: false,
    isOpenAlertBlock: false,
    severityOption: "success"
  };
  ie = O({
    name: "modals",
    initialState: Ze,
    reducers: {
      setModalState(t, s) {
        const { modalType: a, isOpen: r } = s.payload;
        t[a] = r;
      },
      setSeverityOption(t, s) {
        const { severity: a } = s.payload;
        t.severityOption = a;
      }
    }
  });
  ({ setModalState: N, setSeverityOption: V } = ie.actions);
  Ve = ie.reducer;
  d = ((t) => (t.GypsophilaBouquets = "\u0411\u0443\u043A\u0435\u0442\u044B \u0438\u0437 \u0433\u0438\u043F\u0441\u043E\u0444\u0438\u043B", t.ChamomileBouquets = "\u0411\u0443\u043A\u0435\u0442\u044B \u0438\u0437 \u0440\u043E\u043C\u0430\u0448\u0435\u043A", t.ChrysanthemumBouquets = "\u0411\u0443\u043A\u0435\u0442\u044B \u0438\u0437 \u0445\u0440\u0438\u0437\u0430\u043D\u0442\u0435\u043C", t.PottedIndoorPlants = "\u041A\u043E\u043C\u043D\u0430\u0442\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u044B \u0432 \u0433\u043E\u0440\u0448\u043A\u0430\u0445", t.MonoBouquets = "\u041C\u043E\u043D\u043E\u0431\u0443\u043A\u0435\u0442\u044B", t.AssortedBouquets = "\u0421\u0431\u043E\u0440\u043D\u044B\u0435 \u0431\u0443\u043A\u0435\u0442\u044B", t.HolidayBouquets = "\u0411\u0443\u043A\u0435\u0442 \u043D\u0430 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A", t.FlowerCompositions = "\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438\u0437 \u0446\u0432\u0435\u0442\u043E\u0432", t.Envelopes = "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u044B", t.GreetingCards = "\u041E\u0442\u043A\u0440\u044B\u0442\u043A\u0438", t.Gifts = "\u041F\u043E\u0434\u0430\u0440\u043A\u0438", t.DriedFlowerBouquets = "\u0411\u0443\u043A\u0435\u0442\u044B \u0438\u0437 \u0441\u0443\u0445\u043E\u0446\u0432\u0435\u0442\u043E\u0432", t.Balloons = "\u0428\u0430\u0440\u044B", t.PopularItems = "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435", t.RoseBouquets = "\u0411\u0443\u043A\u0435\u0442\u044B \u0440\u043E\u0437", t.FuneralFlowers = "\u0426\u0432\u0435\u0442\u044B \u043D\u0430 \u043F\u043E\u0445\u043E\u0440\u043E\u043D\u044B", t.GiftWrapping = "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432", t))(d || {});
  oe = ((t) => (t.RATING = "rating", t.NAME = "name", t.COST = "cost", t))(oe || {});
  let Ge, ne, $e, E;
  Ge = {
    category: "",
    filtersId: [],
    fieldPriceValue: [
      800,
      2500
    ],
    isConfirm: false,
    sortOption: {
      name: "\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438",
      sortProperty: oe.RATING
    }
  };
  ne = O({
    name: "filter",
    initialState: Ge,
    reducers: {
      setCategory(t, s) {
        const { category: a } = s.payload;
        t.category === a ? t.category = "" : t.category = a;
      },
      setFiltersId(t, s) {
        const { payload: a } = s;
        t.filtersId = t.filtersId.includes(a) ? t.filtersId.filter((r) => r !== a) : [
          ...t.filtersId,
          a
        ];
      },
      setClearFiltersId(t) {
        t.filtersId = [];
      },
      setSortValue(t, s) {
        t.sortOption = s.payload;
      },
      setConfirm(t, s) {
        t.isConfirm = s.payload;
      },
      setFieldPriceValue(t, s) {
        t.fieldPriceValue = s.payload;
      }
    }
  });
  ({ setCategory: ce, setFiltersId: c2, setClearFiltersId: x2, setSortValue: m2, setConfirm: Ue, setFieldPriceValue: d2 } = ne.actions);
  $e = ne.reducer;
  E = re("bouquets/fetchBouquetsStatus", async ({ sortProperty: t, category: s, filterIds: a, fieldPriceValue: r }) => {
    const o = new URLSearchParams({
      sortBy: t,
      category: s,
      minPriceValue: String(r[0]),
      maxPriceValue: String(r[1])
    });
    a && a.forEach((c) => {
      o.append("filters", c);
    });
    const { data: i } = await z.get(`http://localhost:3000/api/bouquets?${o}`);
    return i;
  });
  var I = ((t) => (t.LOADING = "loading", t.SUCCESS = "success", t.ERROR = "error", t))(I || {});
  let Qe, xe, We, P, Ye, Ke, me, Xe, W, et, D, tt, de, u2, st, at, rt, ot, nt, ct;
  Qe = {
    items: [],
    status: I.LOADING
  };
  xe = O({
    name: "bouquet",
    initialState: Qe,
    reducers: {
      updateBouquet(t, s) {
        var _a;
        const { id: a, review: r } = s.payload, o = t.items.find((i) => i.id === a);
        o && (Array.isArray(o.reviews) ? (_a = o.reviews) == null ? void 0 : _a.push(r) : o.reviews = [
          r
        ]);
      }
    },
    extraReducers: (t) => {
      t.addCase(E.pending, (s) => {
        s.status = I.LOADING, s.items = [];
      }), t.addCase(E.fulfilled, (s, a) => {
        s.items = a.payload, s.status = I.SUCCESS;
      }), t.addCase(E.rejected, (s) => {
        s.status = I.ERROR, s.items = [];
      });
    }
  });
  ({ updateBouquet: p2 } = xe.actions);
  We = xe.reducer;
  P = (t) => t.reduce((s, a) => a.cost * a.quantity + s, 0);
  Ye = () => {
    const t = localStorage.getItem("flower-cart"), s = t ? JSON.parse(t) : [], a = P(s);
    return {
      cartItems: s,
      totalPrice: a
    };
  };
  Ke = Ye();
  me = O({
    name: "cart",
    initialState: Ke,
    reducers: {
      setCartItem(t, s) {
        const { id: a, quantity: r } = s.payload, o = t.cartItems.find((i) => i.id === a);
        o ? o.quantity += r : t.cartItems.push({
          ...s.payload
        }), t.totalPrice = P(t.cartItems);
      },
      updateItemCount(t, s) {
        const { id: a, delta: r } = s.payload, o = t.cartItems.find((i) => i.id === a);
        o && (o.quantity += r), t.totalPrice = P(t.cartItems);
      },
      setDeleteBouquet(t, s) {
        t.cartItems = t.cartItems.filter((a) => a.id !== s.payload), t.totalPrice = P(t.cartItems);
      }
    }
  });
  ({ setCartItem: Je, setDeleteBouquet: Xe, updateItemCount: W } = me.actions);
  et = me.reducer;
  D = re("reviews/fetchReviewsStatus", async ({ bouquetId: t }) => {
    const { data: s } = await z.get(`http://localhost:3000/api/review/${t}`);
    return s;
  });
  tt = {
    reviews: [],
    status: I.LOADING
  };
  de = O({
    name: "reviws",
    initialState: tt,
    reducers: {
      addReview(t, s) {
        t.reviews.push({
          ...s.payload
        });
      }
    },
    extraReducers: (t) => {
      t.addCase(D.pending, (s) => {
        s.status = I.LOADING, s.reviews = [];
      }), t.addCase(D.fulfilled, (s, a) => {
        s.reviews = a.payload, s.status = I.SUCCESS;
      }), t.addCase(D.rejected, (s) => {
        s.status = I.ERROR, s.reviews = [];
      });
    }
  });
  ({ addReview: u2 } = de.actions);
  st = de.reducer;
  at = Te({
    reducer: {
      modal: Ve,
      filter: $e,
      bouquets: We,
      cart: et,
      reviews: st
    }
  });
  k = () => De();
  lt = (t) => t.filter;
  rt = (t) => t.bouquets.items;
  it = (t) => t.bouquets;
  g2 = te([
    rt,
    (t, s) => s
  ], (t, s) => t.find((a) => a.id === s));
  ot = (t) => t.cart.cartItems;
  nt = (t) => t.modal.isOpenCart;
  G = (t) => t.cart;
  ct = te([
    ot,
    (t, s) => s
  ], (t, s) => t.find((a) => a.id === s));
  v = ((t) => (t.Modal = "isOpenModal", t.Cart = "isOpenCart", t.HamburgerMenu = "isOpenHamburgerMenu", t.Alert = "isOpenAlertBlock", t))(v || {});
  let xt, ut, gt, ht, ft, Ct, jt, vt, wt, bt, _t, Nt, yt, kt, It, Bt, Lt, ge, St, Ft, U, At, Ot, qt, Mt, Et, Pt, Tt, Dt, Rt, A, Ht, R, zt, Y, K, Zt, Vt, Gt, Ut, $t, Qt, $, Wt, Yt, Kt, Jt, J, e1, t1, s1, a1, l1, r1, i1, o1, n1;
  pe = l.memo(() => e.jsx("svg", {
    className: "mr-2.5",
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    children: e.jsx("path", {
      d: "M15.9489 15.5509L12.7239 12.326C13.8154 11.1308 14.3957 9.55591 14.3407 7.93829C14.2857 6.32068 13.5998 4.78882 12.4297 3.67051C11.2597 2.5522 9.69835 1.93626 8.0799 1.9545C6.46145 1.97273 4.91441 2.62368 3.76982 3.76807C2.62523 4.91246 1.974 6.45938 1.95548 8.07783C1.93696 9.69627 2.55263 11.2577 3.67073 12.428C4.78883 13.5982 6.32057 14.2844 7.93818 14.3397C9.55578 14.395 11.1308 13.8149 12.3261 12.7237L15.5512 15.9488C15.6039 16.0015 15.6755 16.0311 15.7501 16.0311C15.8247 16.0311 15.8962 16.0014 15.9489 15.9487C16.0017 15.8959 16.0313 15.8244 16.0313 15.7498C16.0313 15.6752 16.0016 15.6037 15.9489 15.5509ZM2.53175 8.15602C2.53175 7.0435 2.86165 5.95597 3.47974 5.03094C4.09782 4.10591 4.97632 3.38494 6.00416 2.9592C7.03199 2.53346 8.16299 2.42206 9.25413 2.6391C10.3453 2.85615 11.3476 3.39188 12.1342 4.17855C12.9209 4.96522 13.4566 5.9675 13.6737 7.05864C13.8907 8.14978 13.7793 9.28078 13.3536 10.3086C12.9278 11.3365 12.2069 12.215 11.2818 12.833C10.3568 13.4511 9.26927 13.781 8.15675 13.781C6.66542 13.7793 5.23566 13.1862 4.18113 12.1316C3.1266 11.0771 2.53343 9.64735 2.53175 8.15602Z",
      fill: "white"
    })
  }));
  xt = l.memo(() => e.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    children: e.jsx("path", {
      d: "M14.625 16.5C15.2452 16.5 15.75 15.9952 15.75 15.375V12.75C15.75 12.1298 15.2452 11.625 14.625 11.625C13.7475 11.625 12.885 11.487 12.06 11.2148C11.8628 11.1525 11.6524 11.1449 11.4512 11.1929C11.25 11.2408 11.0657 11.3425 10.9178 11.487L9.83775 12.567C7.97108 11.5536 6.43802 10.0211 5.424 8.15475L6.495 7.077C6.804 6.7905 6.915 6.35475 6.783 5.9355C6.5113 5.10922 6.37356 4.2448 6.375 3.375C6.375 2.75475 5.87025 2.25 5.25 2.25H2.625C2.00475 2.25 1.5 2.75475 1.5 3.375C1.5 10.6125 7.3875 16.5 14.625 16.5ZM2.625 3H5.25C5.34946 3 5.44484 3.03951 5.51516 3.10984C5.58549 3.18016 5.625 3.27554 5.625 3.375C5.625 4.33275 5.775 5.27325 6.06975 6.165C6.09141 6.22971 6.09394 6.29929 6.07704 6.36541C6.06015 6.43152 6.02455 6.49136 5.9745 6.53775L4.5075 8.01225C5.73525 10.4332 7.54875 12.2467 9.981 13.485L11.4427 12.0225C11.4926 11.9731 11.555 11.9383 11.6232 11.9216C11.6913 11.905 11.7627 11.9072 11.8298 11.928C12.7267 12.225 13.6672 12.375 14.625 12.375C14.8313 12.375 15 12.5437 15 12.75V15.375C15 15.5813 14.8313 15.75 14.625 15.75C7.8015 15.75 2.25 10.1985 2.25 3.375C2.25 3.27554 2.28951 3.18016 2.35984 3.10984C2.43016 3.03951 2.52554 3 2.625 3Z",
      fill: "#43FFD2"
    })
  }));
  mt = l.memo(() => e.jsxs("svg", {
    className: "ei-close",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      e.jsxs("g", {
        filter: "url(#filter0_d_1_1160)",
        children: [
          e.jsx("path", {
            d: "M13.4294 4.06152L13.9385 4.57056L4.57056 13.9378L4.06152 13.4291L13.4294 4.06152Z",
            fill: "#7C7C7C"
          }),
          e.jsx("path", {
            d: "M4.57056 4.06152L13.9385 13.4287L13.4294 13.9381L4.06152 4.57092L4.57056 4.06152Z",
            fill: "#7C7C7C"
          })
        ]
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_d_1_1160",
          x: "-4",
          y: "0",
          width: "26",
          height: "26",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feColorMatrix", {
              in: "SourceAlpha",
              type: "matrix",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
              result: "hardAlpha"
            }),
            e.jsx("feOffset", {
              dy: "4"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "2"
            }),
            e.jsx("feComposite", {
              in2: "hardAlpha",
              operator: "out"
            }),
            e.jsx("feColorMatrix", {
              type: "matrix",
              values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in2: "BackgroundImageFix",
              result: "effect1_dropShadow_1_1160"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "effect1_dropShadow_1_1160",
              result: "shape"
            })
          ]
        })
      })
    ]
  }));
  ue = l.memo(() => e.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    children: e.jsx("path", {
      d: "M27.538 24.2196L25.8715 9.21957C25.8336 8.87548 25.67 8.55751 25.412 8.32664C25.1541 8.09577 24.82 7.96827 24.4738 7.96859H20.1343C20.0175 6.68774 19.426 5.49683 18.4761 4.62967C17.5263 3.76251 16.2865 3.28174 15.0004 3.28174C13.7142 3.28174 12.4745 3.76251 11.5246 4.62967C10.5747 5.49683 9.98325 6.68774 9.86637 7.96859H5.52692C5.18075 7.96827 4.84665 8.09577 4.5887 8.32664C4.33076 8.55751 4.16714 8.87548 4.12922 9.21957L2.4627 24.2196C2.44086 24.4161 2.46073 24.6151 2.52101 24.8034C2.58128 24.9918 2.68061 25.1653 2.8125 25.3127C2.94439 25.46 3.10588 25.5779 3.28643 25.6586C3.46697 25.7394 3.66251 25.7811 3.86028 25.7811H26.1403C26.3381 25.7811 26.5336 25.7394 26.7142 25.6587C26.8948 25.578 27.0563 25.4601 27.1882 25.3127C27.3201 25.1654 27.4194 24.9918 27.4797 24.8035C27.54 24.6151 27.5599 24.4161 27.538 24.2196ZM15.0004 4.21859C16.0376 4.21998 17.0381 4.60294 17.8112 5.2945C18.5843 5.98607 19.0759 6.93789 19.1924 7.96859H10.8083C10.9248 6.93789 11.4164 5.98607 12.1895 5.2945C12.9626 4.60294 13.9631 4.21998 15.0004 4.21859ZM26.4897 24.6875C26.4459 24.7369 26.3922 24.7764 26.3319 24.8033C26.2717 24.8302 26.2064 24.844 26.1404 24.8436H3.86028C3.79436 24.8436 3.72918 24.8297 3.669 24.8028C3.60882 24.7759 3.55499 24.7366 3.51103 24.6874C3.46707 24.6383 3.43396 24.5805 3.41388 24.5177C3.39379 24.4549 3.38717 24.3886 3.39446 24.323L5.0611 9.32305C5.07374 9.20837 5.12828 9.1024 5.21424 9.02545C5.30021 8.94851 5.41155 8.90601 5.52692 8.90609H9.84411V12.1873C9.84411 12.3117 9.89349 12.4309 9.9814 12.5188C10.0693 12.6067 10.1885 12.6561 10.3129 12.6561C10.4372 12.6561 10.5564 12.6067 10.6443 12.5188C10.7322 12.4309 10.7816 12.3117 10.7816 12.1873V8.90609H19.2191V12.1873C19.2191 12.3117 19.2685 12.4309 19.3564 12.5188C19.4443 12.6067 19.5635 12.6561 19.6879 12.6561C19.8122 12.6561 19.9314 12.6067 20.0193 12.5188C20.1072 12.4309 20.1566 12.3117 20.1566 12.1873V8.90609H24.4738C24.5892 8.90601 24.7005 8.94851 24.7865 9.02545C24.8724 9.1024 24.927 9.20837 24.9396 9.32305L26.6063 24.323C26.6139 24.3886 26.6075 24.455 26.5873 24.5179C26.5672 24.5807 26.5339 24.6386 26.4897 24.6875Z",
      fill: "white"
    })
  }));
  dt = () => e.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: e.jsx("path", {
      d: "M12.9997 14.6667C13.551 14.6667 13.9997 14.218 13.9997 13.6667V11.3333C13.9997 10.782 13.551 10.3333 12.9997 10.3333C12.2197 10.3333 11.453 10.2107 10.7197 9.96867C10.5444 9.91331 10.3573 9.90659 10.1785 9.94921C9.99971 9.99183 9.83582 10.0822 9.70434 10.2107L8.74434 11.1707C7.08508 10.2699 5.72236 8.90762 4.82101 7.24867L5.77301 6.29067C6.04767 6.036 6.14634 5.64867 6.02901 5.276C5.7875 4.54153 5.66506 3.77315 5.66634 3C5.66634 2.44867 5.21767 2 4.66634 2H2.33301C1.78167 2 1.33301 2.44867 1.33301 3C1.33301 9.43333 6.56634 14.6667 12.9997 14.6667ZM2.33301 2.66667H4.66634C4.75475 2.66667 4.83953 2.70179 4.90204 2.7643C4.96456 2.82681 4.99967 2.91159 4.99967 3C4.99967 3.85133 5.13301 4.68733 5.39501 5.48C5.41426 5.53752 5.41651 5.59937 5.40149 5.65814C5.38647 5.71691 5.35483 5.7701 5.31034 5.81133L4.00634 7.122C5.09767 9.274 6.70967 10.886 8.87167 11.9867L10.171 10.6867C10.2153 10.6428 10.2708 10.6118 10.3314 10.597C10.392 10.5822 10.4554 10.5842 10.515 10.6027C11.3123 10.8667 12.1483 11 12.9997 11C13.183 11 13.333 11.15 13.333 11.3333V13.6667C13.333 13.85 13.183 14 12.9997 14C6.93434 14 1.99967 9.06533 1.99967 3C1.99967 2.91159 2.03479 2.82681 2.09731 2.7643C2.15982 2.70179 2.2446 2.66667 2.33301 2.66667Z",
      fill: "#43FFD2"
    })
  });
  pt = () => e.jsxs("svg", {
    className: "relative z-20 max-sm:hidden",
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "154",
    viewBox: "0 0 60 154",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_b_1_37)",
        children: e.jsx("rect", {
          width: "60",
          height: "154",
          rx: "10",
          fill: "black",
          fillOpacity: "0.2"
        })
      }),
      e.jsx("path", {
        d: "M42.5716 70.9113C42.5615 70.3929 42.52 69.8756 42.4471 69.3622C42.3603 68.9056 42.2128 68.4626 42.0085 68.0451C41.5612 67.1622 40.8442 66.4448 39.9616 65.997C39.5468 65.7936 39.1067 65.6465 38.653 65.5596C38.1357 65.4852 37.6143 65.4429 37.0918 65.4327C36.8707 65.4242 36.5843 65.4206 36.4514 65.4206L24.5517 65.417C24.4188 65.417 24.1324 65.4206 23.9113 65.4291C23.3929 65.4391 22.8756 65.4806 22.3622 65.5535C21.9056 65.6403 21.4626 65.7879 21.0451 65.9922C20.1622 66.4395 19.4448 67.1565 18.997 68.0391C18.7937 68.4539 18.6466 68.894 18.5596 69.3477C18.4849 69.865 18.4421 70.3863 18.4315 70.9089C18.4242 71.13 18.4194 71.4164 18.4194 71.5493L18.417 83.4489C18.417 83.5819 18.4206 83.8682 18.4291 84.0894C18.4391 84.6078 18.4806 85.1251 18.5535 85.6385C18.6404 86.0951 18.7879 86.538 18.9922 86.9555C19.4395 87.8384 20.1565 88.5558 21.0391 89.0037C21.4539 89.2069 21.894 89.354 22.3477 89.4411C22.865 89.5154 23.3864 89.5578 23.9089 89.5679C24.13 89.5764 24.4164 89.58 24.5493 89.58L36.449 89.5824C36.5819 89.5824 36.8682 89.5788 37.0894 89.5704C37.6078 89.5603 38.1251 89.5188 38.6385 89.4459C39.0951 89.359 39.538 89.2115 39.9555 89.0073C40.8389 88.5602 41.5567 87.8432 42.0049 86.9604C42.2082 86.5455 42.3553 86.1055 42.4423 85.6517C42.517 85.1345 42.5598 84.6131 42.5704 84.0906C42.5776 83.8694 42.5825 83.5831 42.5825 83.4502L42.5837 71.5517C42.5837 71.4188 42.58 71.1324 42.5716 70.9113ZM30.7625 85.9067H30.7589C29.3206 85.9064 27.9052 85.5458 26.6421 84.8579L22.0746 86.0553L23.2975 81.5929C22.3507 79.95 21.9724 78.0406 22.2212 76.1607C22.47 74.2809 23.3321 72.5357 24.6737 71.1956C26.0153 69.8556 27.7616 68.9956 29.6417 68.749C31.5219 68.5024 33.4308 68.883 35.0727 69.8318C36.7145 70.7805 37.9974 72.2444 38.7226 73.9965C39.4478 75.7486 39.5747 77.691 39.0836 79.5225C38.5925 81.354 37.5109 82.9724 36.0064 84.1267C34.502 85.2809 32.6588 85.9066 30.7625 85.9067Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        d: "M30.7664 70.1301C29.4869 70.1297 28.2306 70.4722 27.1283 71.1218C26.0259 71.7714 25.1178 72.7045 24.4982 73.824C23.8786 74.9435 23.5703 76.2085 23.6052 77.4876C23.6402 78.7666 24.0172 80.013 24.697 81.0969L24.8673 81.3676L24.1435 84.009L26.8538 83.2985L27.1148 83.4532C28.2182 84.1066 29.4769 84.4514 30.7592 84.4513H30.7628C32.6621 84.4516 34.4837 83.6974 35.8269 82.3547C37.1701 81.0119 37.9249 79.1906 37.9252 77.2913C37.9255 75.392 37.1713 73.5704 35.8286 72.2272C34.4858 70.884 32.6645 70.1292 30.7652 70.1289L30.7664 70.1301ZM34.9763 80.3647C34.8179 80.6263 34.6071 80.8522 34.3571 81.0284C34.1072 81.2045 33.8234 81.327 33.5238 81.3882C33.0715 81.4657 32.6073 81.4368 32.1681 81.3036C31.7516 81.1738 31.3422 81.0221 30.9416 80.8492C29.4551 80.1032 28.188 78.9835 27.2647 77.6C26.761 76.9596 26.4553 76.186 26.385 75.3743C26.3792 75.0392 26.4433 74.7066 26.5731 74.3977C26.7029 74.0888 26.8956 73.8103 27.139 73.5799C27.2109 73.4979 27.2991 73.4316 27.3978 73.3852C27.4966 73.3388 27.6039 73.3134 27.713 73.3104C27.8555 73.3104 27.9993 73.3104 28.125 73.3177C28.2579 73.3237 28.4343 73.2669 28.6083 73.6874C28.7896 74.1176 29.2198 75.1773 29.2729 75.2849C29.3071 75.3412 29.3266 75.4052 29.3297 75.4711C29.3329 75.5369 29.3196 75.6025 29.291 75.6619C29.2368 75.7911 29.1644 75.912 29.076 76.0207C28.9672 76.1464 28.85 76.3011 28.7533 76.3977C28.6446 76.5053 28.5334 76.6213 28.6579 76.8364C28.9811 77.3898 29.3847 77.8923 29.8553 78.3274C30.366 78.7815 30.952 79.1429 31.5869 79.3956C31.802 79.5044 31.9276 79.485 32.0533 79.3412C32.179 79.1974 32.591 78.7129 32.7348 78.4978C32.8786 78.2827 33.0212 78.319 33.2181 78.3903C33.4151 78.4616 34.4748 78.9824 34.6899 79.0911C34.905 79.1999 35.0488 79.2518 35.1019 79.3412C35.1609 79.6873 35.1172 80.0431 34.9763 80.3647Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        d: "M30.4884 28.3259C28.1947 28.3259 26.3228 30.1978 26.3228 32.4916C26.3228 34.7853 28.1947 36.6572 30.4884 36.6572C32.7822 36.6572 34.6541 34.7853 34.6541 32.4916C34.6541 30.1978 32.7822 28.3259 30.4884 28.3259ZM42.9822 32.4916C42.9822 30.7666 42.9978 29.0572 42.9009 27.3353C42.8041 25.3353 42.951 22.9537 41.4885 21.4912C40.0229 20.0256 37.6478 20.1791 35.6478 20.0822C33.9228 19.9853 32.2134 20.0009 30.4916 20.0009C28.7666 20.0009 27.0572 19.9853 25.3353 20.0822C23.3353 20.1791 20.951 20.0287 19.4885 21.4912C18.0229 22.9568 18.1791 25.3353 18.0822 27.3353C17.9853 29.0603 18.0009 30.7697 18.0009 32.4916C18.0009 34.2134 17.9853 35.9259 18.0822 37.6478C18.1791 39.6478 18.026 42.0287 19.4885 43.4912C20.9542 44.9568 23.3353 44.8041 25.3353 44.9009C27.0603 44.9978 28.7697 44.9822 30.4916 44.9822C32.2166 44.9822 33.9259 44.9978 35.6478 44.9009C37.6478 44.8041 40.026 44.9537 41.4885 43.4912C42.9542 42.0256 42.8041 39.6478 42.9009 37.6478C43.0009 35.9259 42.9822 34.2166 42.9822 32.4916ZM30.4884 38.9009C26.9416 38.9009 24.0791 36.0384 24.0791 32.4916C24.0791 28.9447 26.9416 26.0822 30.4884 26.0822C34.0353 26.0822 36.8978 28.9447 36.8978 32.4916C36.8978 36.0384 34.0353 38.9009 30.4884 38.9009ZM37.1603 27.3166C36.3322 27.3166 35.6634 26.6478 35.6634 25.8197C35.6634 24.9916 36.3322 24.3228 37.1603 24.3228C37.9884 24.3228 38.6572 24.9916 38.6572 25.8197C38.6574 26.0163 38.6189 26.2111 38.5437 26.3928C38.4686 26.5745 38.3584 26.7396 38.2193 26.8787C38.0803 27.0177 37.9151 27.128 37.7334 27.2031C37.5517 27.2783 37.3569 27.3168 37.1603 27.3166Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        d: "M37.9902 134H21.9902C19.9902 134 19.4637 133.707 18.8783 133.121C18.2929 132.535 17.9902 132 18.0002 130V114C18.0002 112 18.2929 111.465 18.8783 110.879C19.4637 110.293 19.9902 110 21.9902 110H37.9902C38.8175 110 40.0036 110.012 40.9902 111C41.9768 111.988 41.9768 113.172 41.9768 114V130C41.9902 132 41.6841 132.535 41.0988 133.121C40.5134 133.707 39.9902 134 37.9902 134ZM25.4929 119V116.75C25.4929 116.328 25.3641 115.914 25.1066 115.508C24.849 115.102 24.5641 114.812 24.2519 114.641C23.9398 114.469 23.6978 114.461 23.5261 114.617L21.8168 116.352C21.3485 116.82 21.0832 117.449 21.0207 118.238C20.9583 119.027 21.0793 119.887 21.3837 120.816C21.688 121.746 22.1759 122.73 22.8471 123.77C23.5183 124.809 24.3222 125.797 25.2588 126.734C26.1954 127.672 27.1827 128.477 28.2207 129.148C29.2588 129.82 30.2422 130.312 31.171 130.625C32.0998 130.938 32.9583 131.062 33.7466 131C34.5349 130.938 35.1632 130.672 35.6315 130.203L37.3641 128.469C37.5202 128.312 37.5124 128.074 37.3407 127.754C37.169 127.434 36.8802 127.145 36.4744 126.887C36.0685 126.629 35.6549 126.5 35.2334 126.5H32.9856L31.4637 127.438C30.7612 127.25 29.8949 126.742 28.8646 125.914C27.8344 125.086 26.9056 124.156 26.0783 123.125C25.251 122.094 24.7437 121.227 24.5563 120.523L25.4929 119ZM34.4373 122.75L35.9593 123.008C35.8344 121.133 35.1085 119.531 33.7817 118.203C32.4549 116.875 30.8627 116.148 29.0051 116.023L29.2393 117.547C30.5973 117.719 31.7602 118.289 32.728 119.258C33.6959 120.227 34.2656 121.391 34.4373 122.75ZM29.5202 119.117L29.8012 120.805C30.41 121.102 30.8705 121.562 31.1827 122.188L32.8685 122.469C32.6656 121.641 32.2637 120.926 31.6627 120.324C31.0617 119.723 30.3476 119.32 29.5202 119.117ZM28.49 113L28.7476 114.523C30.3085 114.555 31.7485 114.965 33.0676 115.754C34.3866 116.543 35.4402 117.598 36.2285 118.918C37.0168 120.238 37.4266 121.68 37.4578 123.242L38.9798 123.5C38.9798 122.078 38.7027 120.719 38.1485 119.422C37.5944 118.125 36.849 117.008 35.9124 116.07C34.9759 115.133 33.8598 114.387 32.5641 113.832C31.2685 113.277 29.9105 113 28.49 113Z",
        fill: "#43FFD2"
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_b_1_37",
          x: "-20",
          y: "-20",
          width: "100",
          height: "194",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feGaussianBlur", {
              in: "BackgroundImageFix",
              stdDeviation: "10"
            }),
            e.jsx("feComposite", {
              in2: "SourceAlpha",
              operator: "in",
              result: "effect1_backgroundBlur_1_37"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "effect1_backgroundBlur_1_37",
              result: "shape"
            })
          ]
        })
      })
    ]
  });
  ut = () => e.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "80",
    height: "6",
    viewBox: "0 0 80 6",
    fill: "none",
    children: e.jsx("path", {
      d: "M0 2.99999L5 5.88674L5 0.113242L0 2.99999ZM80 2.5L4.5 2.49999L4.5 3.49999L80 3.5L80 2.5Z",
      fill: "#43FFD2"
    })
  });
  gt = () => e.jsx("svg", {
    className: "ml-2",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "6",
    viewBox: "0 0 40 6",
    fill: "none",
    children: e.jsx("path", {
      d: "M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z",
      fill: "#D978AC"
    })
  });
  ht = () => e.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "80",
    height: "6",
    viewBox: "0 0 80 6",
    fill: "none",
    children: e.jsx("path", {
      d: "M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z",
      fill: "#43FFD2"
    })
  });
  ft = () => e.jsxs("svg", {
    className: "absolute right-0 top-0 max-xl:size-2/3 w-[439px]",
    xmlns: "http://www.w3.org/2000/svg",
    height: "900",
    viewBox: "0 0 439 900",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_23)",
        children: e.jsx("path", {
          d: "M562.127 491.246C523.706 550.8 435.621 690.35 353.262 637.217C270.903 584.083 225.458 358.388 263.879 298.833C302.301 239.279 400.212 234.073 482.571 287.206C564.93 340.339 600.549 431.691 562.127 491.246Z",
          fill: "#7D2253"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_23",
          x: "0.0517578",
          y: "0.526367",
          width: "827.544",
          height: "898.525",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "125",
              result: "effect1_foregroundBlur_1_23"
            })
          ]
        })
      })
    ]
  });
  Ct = () => e.jsx("svg", {
    className: "absolute bottom-6 left-24 max-xl:-left-[1rem] max-2xl:left-[3rem]",
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "61",
    viewBox: "0 0 11 61",
    fill: "none",
    children: e.jsx("path", {
      d: "M9.09795 59.6018L9.5181 59.3308L9.5181 59.3308L9.09795 59.6018ZM10 61L9.71509 55.2335L4.86364 58.3635L10 61ZM9.58839 0.716134C-2.63574 18.4411 -2.99499 41.7801 8.6778 59.8729L9.5181 59.3308C-1.93569 41.5774 -1.58318 18.6763 10.4116 1.28387L9.58839 0.716134Z",
      fill: "#43FFD2"
    })
  });
  jt = () => e.jsx("svg", {
    className: "absolute bottom-6 max-md:right-[2.5rem] md:left-[16rem]",
    width: "25",
    height: "63",
    viewBox: "0 0 25 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: e.jsx("path", {
      d: "M18.7016 61.6468L19.1455 61.877L18.7016 61.6468ZM18 63L17.7389 57.2324L22.8643 59.89L18 63ZM0.743784 0.563457C22.4326 12.6754 30.5805 39.8238 19.1455 61.877L18.2578 61.4167C29.4441 39.843 21.4734 13.2851 0.256216 1.43654L0.743784 0.563457Z",
      fill: "#43FFD2"
    })
  });
  vt = () => e.jsxs("svg", {
    className: "absolute z-10  -top-48",
    xmlns: "http://www.w3.org/2000/svg",
    width: "712",
    height: "968",
    viewBox: "0 0 712 968",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_135)",
        children: e.jsx("path", {
          d: "M443.674 532.673C398.617 602.513 295.319 766.165 198.735 703.855C102.152 641.545 48.8577 376.869 93.9149 307.028C138.972 237.187 253.794 231.083 350.378 293.393C446.961 355.703 488.732 462.832 443.674 532.673Z",
          fill: "#7D2253"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_135",
          x: "-172.302",
          y: "0.377441",
          width: "884.116",
          height: "967.356",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "125",
              result: "effect1_foregroundBlur_1_135"
            })
          ]
        })
      })
    ]
  });
  wt = () => e.jsxs("svg", {
    className: "absolute w-[733px] left-[24rem] z-10 top-0 blur-[50px] max-xl:w-[500px]",
    xmlns: "http://www.w3.org/2000/svg",
    height: "802",
    viewBox: "0 0 733 802",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_136)",
        children: e.jsx("path", {
          d: "M469.079 424.353C438.914 471.109 369.628 580.585 312.831 543.942C256.034 507.3 233.234 338.416 263.398 291.66C293.563 244.903 364.059 236.704 420.856 273.347C477.653 309.989 499.243 377.597 469.079 424.353Z",
          fill: "#43FFD2"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_136",
          x: "0.0380859",
          y: "0.44165",
          width: "732.667",
          height: "800.872",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "125",
              result: "effect1_foregroundBlur_1_136"
            })
          ]
        })
      })
    ]
  });
  bt = () => e.jsxs("svg", {
    className: "absolute blur-[40px] right-[3rem]",
    width: "320",
    height: "402",
    viewBox: "0 0 320 402",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_2039)",
        children: e.jsx("path", {
          d: "M233.797 222.048C214.34 252.207 169.732 322.877 128.025 295.97C86.3172 269.062 63.3032 154.767 82.7602 124.608C102.217 94.4489 151.801 91.8127 193.508 118.72C235.216 145.627 253.254 191.889 233.797 222.048Z",
          fill: "#7D2253"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_2039",
          x: "-24.2422",
          y: "0.144531",
          width: "365.872",
          height: "401.818",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "50",
              result: "effect1_foregroundBlur_1_2039"
            })
          ]
        })
      })
    ]
  });
  _t = () => e.jsxs("svg", {
    className: "absolute blur-[50px] right-0 top-[3rem]",
    width: "229",
    height: "331",
    viewBox: "0 0 229 331",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_2040)",
        children: e.jsx("path", {
          d: "M195.222 175.977C182.196 196.167 152.276 243.442 127.749 227.619C103.223 211.796 93.3769 138.866 106.403 118.676C119.429 98.485 149.871 94.9444 174.398 110.768C198.924 126.591 208.248 155.786 195.222 175.977Z",
          fill: "#43FFD2"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_2040",
          x: "0.633789",
          y: "0.876953",
          width: "300.473",
          height: "329.925",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "50",
              result: "effect1_foregroundBlur_1_2040"
            })
          ]
        })
      })
    ]
  });
  Nt = () => e.jsx("svg", {
    className: "max-sm:w-[20px]",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: e.jsx("path", {
      d: "M19.9946 13.3305C16.3222 13.3305 13.3252 16.3275 13.3252 20C13.3252 23.6725 16.3222 26.6695 19.9946 26.6695C23.667 26.6695 26.664 23.6725 26.664 20C26.664 16.3275 23.667 13.3305 19.9946 13.3305ZM39.9978 20C39.9978 17.2381 40.0228 14.5013 39.8677 11.7444C39.7126 8.54226 39.9479 4.72913 37.6063 2.38755C35.2598 0.0409651 31.4572 0.286681 28.2551 0.131576C25.4932 -0.0235287 22.7564 0.00148823 19.9996 0.00148823C17.2378 0.00148823 14.501 -0.0235287 11.7442 0.131576C8.5421 0.286681 4.72474 0.0459686 2.38321 2.38755C0.0366646 4.73414 0.286675 8.54226 0.131574 11.7444C-0.0235283 14.5063 0.0014882 17.2431 0.0014882 20C0.0014882 22.7569 -0.0235283 25.4987 0.131574 28.2556C0.286675 31.4577 0.041668 35.2698 2.38321 37.6113C4.72975 39.9579 8.5421 39.7133 11.7442 39.8684C14.506 40.0235 17.2428 39.9985 19.9996 39.9985C22.7614 39.9985 25.4982 40.0235 28.2551 39.8684C31.4572 39.7133 35.2648 39.9529 37.6063 37.6113C39.9529 35.2648 39.7126 31.4577 39.8677 28.2556C40.0278 25.4987 39.9978 22.7619 39.9978 20ZM19.9946 30.2619C14.3159 30.2619 9.73288 25.6788 9.73288 20C9.73288 14.3212 14.3159 9.73807 19.9946 9.73807C25.6734 9.73807 30.2564 14.3212 30.2564 20C30.2564 25.6788 25.6734 30.2619 19.9946 30.2619ZM30.6766 11.7144C29.3508 11.7144 28.2801 10.6437 28.2801 9.31778C28.2801 7.99189 29.3508 6.92116 30.6766 6.92116C32.0025 6.92116 33.0732 7.99189 33.0732 9.31778C33.0736 9.63262 33.0119 9.94445 32.8916 10.2354C32.7713 10.5263 32.5948 10.7907 32.3722 11.0133C32.1495 11.236 31.8852 11.4125 31.5942 11.5328C31.3033 11.6531 30.9915 11.7148 30.6766 11.7144Z",
      fill: "#43FFD2"
    })
  });
  yt = () => e.jsxs("svg", {
    className: "max-sm:w-[20px]",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [
      e.jsx("path", {
        d: "M39.98 9.09445C39.9633 8.23636 39.8945 7.38007 39.774 6.53033C39.6303 5.77449 39.3862 5.04128 39.048 4.35022C38.3077 2.88875 37.121 1.70123 35.66 0.960048C34.9734 0.623456 34.245 0.379963 33.494 0.236012C32.6378 0.112971 31.7748 0.0428342 30.91 0.0260013C30.544 0.0120006 30.07 0.00600034 29.85 0.00600034L10.154 0C9.934 0 9.46 0.00600028 9.094 0.020001C8.23594 0.036535 7.37969 0.105332 6.53 0.226011C5.7742 0.369698 5.04103 0.613877 4.35 0.952048C2.88869 1.69249 1.70126 2.87927 0.96 4.34022C0.623513 5.02688 0.380037 5.75533 0.236 6.50632C0.112407 7.36254 0.0416062 8.22555 0.0240002 9.09046C0.0120002 9.45647 0.00400019 9.9305 0.00400019 10.1505L0 29.8475C0 30.0675 0.00599998 30.5415 0.02 30.9075C0.0365332 31.7656 0.105327 32.6219 0.226 33.4717C0.369703 34.2275 0.613869 34.9607 0.952 35.6518C1.6924 37.1132 2.87912 38.3007 4.34 39.042C5.02665 39.3784 5.75505 39.6219 6.506 39.766C7.3622 39.889 8.22517 39.9592 9.09 39.976C9.456 39.99 9.93 39.996 10.15 39.996L29.846 40C30.066 40 30.54 39.994 30.906 39.98C31.7641 39.9634 32.6203 39.8946 33.47 39.774C34.2258 39.6302 34.9589 39.386 35.65 39.048C37.1121 38.3079 38.3002 37.121 39.042 35.6598C39.3785 34.9731 39.622 34.2447 39.766 33.4937C39.8897 32.6375 39.9605 31.7745 39.978 30.9095C39.99 30.5435 39.998 30.0695 39.998 29.8495L40 10.1545C40 9.9345 39.994 9.46047 39.98 9.09445ZM20.434 33.9157H20.428C18.0473 33.9152 15.7047 33.3184 13.614 32.1796L6.054 34.1617L8.078 26.7753C6.51091 24.0558 5.88474 20.8953 6.2966 17.7837C6.70845 14.6721 8.13531 11.7832 10.3559 9.56514C12.5766 7.34703 15.4669 5.92354 18.5789 5.51537C21.6908 5.10719 24.8505 5.73715 27.568 7.30755C30.2855 8.87796 32.409 11.3011 33.6093 14.2012C34.8096 17.1014 35.0196 20.3165 34.2068 23.3482C33.394 26.3799 31.6037 29.0587 29.1136 30.9693C26.6235 32.8799 23.5726 33.9155 20.434 33.9157Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        d: "M20.4405 7.80132C18.3226 7.8007 16.2433 8.3675 14.4187 9.44277C12.5942 10.518 11.0909 12.0625 10.0654 13.9156C9.03993 15.7687 8.52957 17.8627 8.58743 19.9798C8.6453 22.097 9.26928 24.1599 10.3945 25.9542L10.6765 26.4023L9.47847 30.7745L13.9645 29.5984L14.3965 29.8544C16.2227 30.936 18.3061 31.5066 20.4285 31.5065H20.4345C23.5781 31.507 26.5931 30.2587 28.8164 28.0361C31.0396 25.8135 32.2889 22.7987 32.2895 19.6549C32.29 16.5111 31.0417 13.4959 28.8192 11.2726C26.5967 9.04921 23.5821 7.79985 20.4385 7.79932L20.4405 7.80132ZM27.4085 24.7422C27.1463 25.1751 26.7974 25.5492 26.3837 25.8407C25.9699 26.1322 25.5004 26.335 25.0045 26.4363C24.2558 26.5647 23.4874 26.5167 22.7605 26.2962C22.0711 26.0814 21.3935 25.8304 20.7305 25.5442C18.2699 24.3093 16.1727 22.456 14.6445 20.1659C13.8108 19.1058 13.3048 17.8254 13.1885 16.4818C13.1789 15.9272 13.2849 15.3766 13.4997 14.8653C13.7146 14.3539 14.0336 13.8929 14.4365 13.5116C14.5555 13.3758 14.7014 13.2661 14.8649 13.1893C15.0283 13.1125 15.2059 13.0704 15.3865 13.0656C15.6225 13.0656 15.8605 13.0656 16.0685 13.0776C16.2885 13.0876 16.5805 12.9936 16.8685 13.6896C17.1685 14.4016 17.8805 16.1557 17.9685 16.3337C18.025 16.4271 18.0573 16.533 18.0625 16.642C18.0678 16.7509 18.0457 16.8595 17.9985 16.9578C17.9087 17.1718 17.7889 17.3718 17.6425 17.5518C17.4625 17.7598 17.2685 18.0158 17.1085 18.1758C16.9285 18.3538 16.7445 18.5459 16.9505 18.9019C17.4855 19.818 18.1534 20.6498 18.9325 21.37C19.7777 22.1215 20.7476 22.7199 21.7985 23.1381C22.1545 23.3181 22.3625 23.2861 22.5705 23.0481C22.7785 22.8101 23.4605 22.008 23.6985 21.652C23.9365 21.296 24.1725 21.356 24.4985 21.474C24.8245 21.592 26.5785 22.4541 26.9345 22.6341C27.2905 22.8141 27.5285 22.9001 27.6165 23.0481C27.714 23.621 27.6417 24.2099 27.4085 24.7422Z",
        fill: "#43FFD2"
      })
    ]
  });
  kt = () => e.jsx("svg", {
    className: "max-sm:w-[20px]",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: e.jsx("path", {
      d: "M33.3487 40H6.65669C3.3202 40 2.44174 39.5117 1.4652 38.5352C0.488669 37.5586 -0.0162915 36.6667 0.000401108 33.3333V6.66667C0.000401108 3.33333 0.488669 2.44141 1.4652 1.46484C2.44174 0.488281 3.3202 0 6.65669 0H33.3487C34.7288 0 36.7075 0.0207356 38.3534 1.66667C39.9993 3.3126 39.9993 5.28646 39.9993 6.66667V33.3333C40.0217 36.6667 39.511 37.5586 38.5345 38.5352C37.558 39.5117 36.6852 40 33.3487 40ZM12.5001 15V11.25C12.5001 10.5469 12.2852 9.85677 11.8555 9.17969C11.4259 8.5026 10.9506 8.02083 10.4298 7.73438C9.90898 7.44792 9.50535 7.4349 9.2189 7.69531L6.36741 10.5859C5.58618 11.3672 5.14349 12.4154 5.03932 13.7305C4.93516 15.0456 5.13698 16.4779 5.64478 18.0273C6.15258 19.5768 6.96635 21.2174 8.08611 22.9492C9.20588 24.681 10.547 26.3281 12.1094 27.8906C13.6719 29.4531 15.319 30.7943 17.0507 31.9141C18.7824 33.0339 20.423 33.8542 21.9725 34.375C23.5219 34.8958 24.9541 35.1042 26.2692 35C27.5843 34.8958 28.6324 34.4531 29.4137 33.6719L32.3042 30.7812C32.5646 30.5208 32.5516 30.1237 32.2651 29.5898C31.9787 29.056 31.4969 28.5742 30.8199 28.1445C30.1428 27.7148 29.4527 27.5 28.7496 27.5H24.9997L22.4607 29.0625C21.2889 28.75 19.8436 27.9036 18.1249 26.5234C16.4062 25.1432 14.8568 23.5938 13.4766 21.875C12.0964 20.1562 11.2501 18.7109 10.9376 17.5391L12.5001 15ZM27.4215 21.25L29.9605 21.6797C29.7522 18.5547 28.5413 15.8854 26.3278 13.6719C24.1143 11.4583 21.4581 10.2474 18.3593 10.0391L18.7499 12.5781C21.0154 12.8646 22.9555 13.8151 24.57 15.4297C26.1846 17.0443 27.1351 18.9844 27.4215 21.25ZM19.2186 15.1953L19.6874 18.0078C20.703 18.5026 21.4712 19.2708 21.992 20.3125L24.8044 20.7812C24.4659 19.401 23.7953 18.2096 22.7927 17.207C21.7902 16.2044 20.5988 15.5339 19.2186 15.1953ZM17.4999 5L17.9296 7.53906C20.5337 7.59115 22.936 8.27474 25.1364 9.58984C27.3369 10.9049 29.0946 12.6628 30.4097 14.8633C31.7248 17.0638 32.4084 19.4661 32.4604 22.0703L34.9994 22.5C34.9994 20.1302 34.5372 17.8646 33.6128 15.7031C32.6883 13.5417 31.4448 11.6797 29.8824 10.1172C28.3199 8.55469 26.458 7.3112 24.2966 6.38672C22.1352 5.46224 19.8696 5 17.4999 5Z",
      fill: "#43FFD2"
    })
  });
  It = () => e.jsxs("svg", {
    className: "absolute -bottom-56 right-0 blur-[10px] max-lg:right-0 w-[489px]",
    xmlns: "http://www.w3.org/2000/svg",
    height: "818",
    viewBox: "0 0 489 818",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_24)",
        children: e.jsx("path", {
          d: "M562.127 491.246C523.706 550.8 435.621 690.35 353.262 637.217C270.903 584.083 225.458 358.388 263.879 298.833C302.301 239.279 400.212 234.073 482.571 287.206C564.93 340.339 600.549 431.691 562.127 491.246Z",
          fill: "#7D2253"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_24",
          x: "0.0517578",
          y: "0.526367",
          width: "827.544",
          height: "898.525",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "125",
              result: "effect1_foregroundBlur_1_24"
            })
          ]
        })
      })
    ]
  });
  Bt = () => e.jsxs("svg", {
    className: "absolute -bottom-56 left-0 blur-[10px]",
    xmlns: "http://www.w3.org/2000/svg",
    width: "339",
    height: "689",
    viewBox: "0 0 339 689",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_57)",
        children: e.jsx("ellipse", {
          cx: "28.4407",
          cy: "350.377",
          rx: "49.7935",
          ry: "105.527",
          transform: "rotate(21.0974 28.4407 350.377)",
          fill: "#43FFD2"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_57",
          x: "-281.569",
          y: "0.287842",
          width: "620.021",
          height: "700.178",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "125",
              result: "effect1_foregroundBlur_1_57"
            })
          ]
        })
      })
    ]
  });
  Lt = () => e.jsxs("svg", {
    className: "absolute -bottom-[11rem] right-0 z-30 max-xl:size-2/3",
    width: "235",
    height: "413",
    viewBox: "0 0 235 413",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_2071)",
        children: e.jsx("path", {
          d: "M266.611 228.668C246.179 260.339 199.336 334.55 155.538 306.295C111.741 278.039 87.5732 158.016 108.005 126.345C128.437 94.6742 180.506 91.9059 224.304 120.162C268.102 148.418 287.043 196.998 266.611 228.668Z",
          fill: "#7D2253"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_2071",
          x: "0.651367",
          y: "0.655273",
          width: "374.186",
          height: "411.933",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "50",
              result: "effect1_foregroundBlur_1_2071"
            })
          ]
        })
      })
    ]
  });
  h2 = l.memo(() => e.jsxs("svg", {
    className: "absolute -bottom-[20rem] right-0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "489",
    height: "818",
    viewBox: "0 0 489 818",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_291)",
        children: e.jsx("path", {
          d: "M562.127 491.246C523.706 550.8 435.621 690.35 353.262 637.217C270.903 584.083 225.458 358.388 263.879 298.833C302.301 239.279 400.212 234.073 482.571 287.206C564.93 340.339 600.549 431.691 562.127 491.246Z",
          fill: "#7D2253"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_291",
          x: "0.0512695",
          y: "0.526367",
          width: "827.544",
          height: "898.525",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "125",
              result: "effect1_foregroundBlur_1_291"
            })
          ]
        })
      })
    ]
  }));
  f2 = l.memo(() => e.jsxs("svg", {
    className: "absolute -bottom-[20rem]",
    xmlns: "http://www.w3.org/2000/svg",
    width: "339",
    height: "689",
    viewBox: "0 0 339 689",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_308)",
        children: e.jsx("ellipse", {
          cx: "28.4407",
          cy: "350.377",
          rx: "49.7935",
          ry: "105.527",
          transform: "rotate(21.0974 28.4407 350.377)",
          fill: "#43FFD2"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_308",
          x: "-281.569",
          y: "0.287598",
          width: "620.021",
          height: "700.179",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "125",
              result: "effect1_foregroundBlur_1_308"
            })
          ]
        })
      })
    ]
  }));
  C2 = l.memo(({ isOpen: t }) => e.jsx("svg", {
    className: b("transition-all duration-300", {
      "-rotate-180": t
    }),
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    children: e.jsx("path", {
      d: "M5.58891 9.7845C5.63478 9.85112 5.69615 9.90559 5.76775 9.94323C5.83935 9.98086 5.91902 10.0005 5.99991 10.0005C6.08079 10.0005 6.16046 9.98086 6.23206 9.94323C6.30366 9.90559 6.36504 9.85112 6.41091 9.7845L10.9109 3.2845C10.963 3.20953 10.9935 3.12172 10.9992 3.0306C11.0049 2.93949 10.9855 2.84856 10.9432 2.7677C10.9008 2.68683 10.8371 2.61912 10.7589 2.57193C10.6808 2.52473 10.5912 2.49986 10.4999 2.5H1.49991C1.40883 2.50038 1.31958 2.52557 1.24175 2.57288C1.16392 2.62019 1.10046 2.68782 1.05819 2.7685C1.01592 2.84917 0.99645 2.93985 1.00186 3.03077C1.00727 3.12168 1.03737 3.20941 1.08891 3.2845L5.58891 9.7845Z",
      fill: "white"
    })
  }));
  ge = l.memo(() => e.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "112",
    height: "24",
    viewBox: "0 0 112 24",
    fill: "none",
    children: [
      e.jsx("path", {
        className: "cursor-pointer",
        d: "M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.9687 2.83748 22.5638 1.43253C21.1559 0.0245791 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 2.83485 0.0275812 1.42992 1.43253C0.0219988 2.84048 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.0250008 21.1619 1.42992 22.5668C2.83785 23.9748 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 21.1589 23.9718 22.5638 22.5668C23.9717 21.1589 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        className: "cursor-pointer",
        d: "M67.988 5.45667C67.978 4.94182 67.9367 4.42804 67.8644 3.9182C67.7782 3.4647 67.6317 3.02477 67.4288 2.61013C66.9846 1.73325 66.2726 1.02074 65.396 0.576029C64.984 0.374074 64.547 0.227978 64.0964 0.141607C63.5827 0.0677825 63.0649 0.0257005 62.546 0.0156008C62.3264 0.00720037 62.042 0.00360021 61.91 0.00360021L50.0924 0C49.9604 0 49.676 0.00360017 49.4564 0.0120006C48.9416 0.021921 48.4278 0.0631995 47.918 0.135607C47.4645 0.221819 47.0246 0.368326 46.61 0.571229C45.7332 1.01549 45.0208 1.72756 44.576 2.60413C44.3741 3.01613 44.228 3.4532 44.1416 3.90379C44.0674 4.41752 44.025 4.93533 44.0144 5.45427C44.0072 5.67388 44.0024 5.9583 44.0024 6.0903L44 17.9085C44 18.0405 44.0036 18.3249 44.012 18.5445C44.0219 19.0594 44.0632 19.5732 44.1356 20.083C44.2218 20.5365 44.3683 20.9764 44.5712 21.3911C45.0154 22.2679 45.7275 22.9804 46.604 23.4252C47.016 23.627 47.453 23.7731 47.9036 23.8596C48.4173 23.9334 48.9351 23.9755 49.454 23.9856C49.6736 23.994 49.958 23.9976 50.09 23.9976L61.9076 24C62.0396 24 62.324 23.9964 62.5436 23.988C63.0584 23.978 63.5722 23.9368 64.082 23.8644C64.5355 23.7781 64.9754 23.6316 65.39 23.4288C66.2672 22.9847 66.9801 22.2726 67.4252 21.3959C67.6271 20.9839 67.7732 20.5468 67.8596 20.0962C67.9338 19.5825 67.9763 19.0647 67.9868 18.5457C67.994 18.3261 67.9988 18.0417 67.9988 17.9097L68 6.0927C68 5.9607 67.9964 5.67628 67.988 5.45667ZM56.2604 20.3494H56.2568C54.8284 20.3491 53.4228 19.991 52.1684 19.3078L47.6324 20.497L48.8468 16.0652C47.9065 14.4335 47.5308 12.5372 47.778 10.6702C48.0251 8.80323 48.8812 7.06995 50.2136 5.73908C51.546 4.40822 53.2802 3.55412 55.1473 3.30922C57.0145 3.06432 58.9103 3.44229 60.5408 4.38453C62.1713 5.32678 63.4454 6.78065 64.1656 8.52074C64.8858 10.2608 65.0118 12.1899 64.5241 14.0089C64.0364 15.8279 62.9622 17.4352 61.4681 18.5816C59.9741 19.7279 58.1436 20.3493 56.2604 20.3494Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        className: "cursor-pointer",
        d: "M56.2639 4.68089C54.9932 4.68052 53.7456 5.0206 52.6509 5.66576C51.5561 6.31093 50.6542 7.23762 50.0389 8.34946C49.4236 9.4613 49.1174 10.7177 49.1521 11.988C49.1868 13.2583 49.5612 14.4961 50.2363 15.5726L50.4055 15.8414L49.6867 18.4648L52.3783 17.7591L52.6375 17.9128C53.7332 18.5617 54.9832 18.9041 56.2567 18.904H56.2603C58.1465 18.9043 59.9555 18.1553 61.2894 16.8217C62.6234 15.4882 63.373 13.6793 63.3733 11.793C63.3736 9.90678 62.6246 8.09765 61.2911 6.76364C59.9576 5.42963 58.1489 4.68001 56.2627 4.67969L56.2639 4.68089ZM60.4447 14.8454C60.2874 15.1052 60.078 15.3296 59.8298 15.5045C59.5816 15.6794 59.2998 15.8011 59.0023 15.8618C58.5531 15.9389 58.0921 15.9101 57.6559 15.7778C57.2422 15.6489 56.8357 15.4983 56.4379 15.3266C54.9616 14.5857 53.7032 13.4737 52.7863 12.0997C52.2861 11.4636 51.9825 10.6953 51.9127 9.88915C51.9069 9.55639 51.9705 9.22608 52.0995 8.91925C52.2284 8.61243 52.4198 8.33583 52.6615 8.10706C52.7329 8.02557 52.8204 7.95973 52.9185 7.91368C53.0166 7.86762 53.1232 7.84235 53.2315 7.83945C53.3731 7.83945 53.5159 7.83945 53.6407 7.84665C53.7727 7.85265 53.9479 7.79624 54.1207 8.21387C54.3007 8.64109 54.7279 9.69354 54.7807 9.80034C54.8146 9.85634 54.834 9.9199 54.8371 9.98527C54.8403 10.0507 54.8271 10.1158 54.7987 10.1748C54.7449 10.3032 54.6729 10.4232 54.5851 10.5312C54.4771 10.656 54.3607 10.8096 54.2647 10.9056C54.1567 11.0124 54.0463 11.1276 54.1699 11.3412C54.4909 11.8909 54.8917 12.39 55.3591 12.8221C55.8663 13.273 56.4482 13.632 57.0787 13.8829C57.2923 13.991 57.4171 13.9718 57.5419 13.8289C57.6667 13.6861 58.0759 13.2049 58.2187 12.9913C58.3615 12.7777 58.5031 12.8137 58.6987 12.8845C58.8943 12.9553 59.9467 13.4725 60.1603 13.5805C60.3739 13.6885 60.5167 13.7401 60.5695 13.8289C60.628 14.1727 60.5846 14.526 60.4447 14.8454Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        className: "cursor-pointer",
        d: "M108.009 24H91.994C89.9921 24 89.465 23.707 88.8791 23.1211C88.2932 22.5352 87.9902 22 88.0002 20V4C88.0002 2 88.2932 1.46484 88.8791 0.878906C89.465 0.292969 89.9921 0 91.994 0H108.009C108.837 0 110.025 0.0124413 111.012 1C112 1.98756 112 3.17188 112 4V20C112.013 22 111.707 22.5352 111.121 23.1211C110.535 23.707 110.011 24 108.009 24ZM95.5 9V6.75C95.5 6.32812 95.3711 5.91406 95.1133 5.50781C94.8555 5.10156 94.5704 4.8125 94.2579 4.64062C93.9454 4.46875 93.7032 4.46094 93.5313 4.61719L91.8204 6.35156C91.3517 6.82031 91.0861 7.44922 91.0236 8.23828C90.9611 9.02734 91.0822 9.88672 91.3869 10.8164C91.6915 11.7461 92.1798 12.7305 92.8517 13.7695C93.5235 14.8086 94.3282 15.7969 95.2657 16.7344C96.2031 17.6719 97.1914 18.4766 98.2304 19.1484C99.2695 19.8203 100.254 20.3125 101.183 20.625C102.113 20.9375 102.972 21.0625 103.762 21C104.551 20.9375 105.179 20.6719 105.648 20.2031L107.383 18.4688C107.539 18.3125 107.531 18.0742 107.359 17.7539C107.187 17.4336 106.898 17.1445 106.492 16.8867C106.086 16.6289 105.672 16.5 105.25 16.5H103L101.476 17.4375C100.773 17.25 99.9062 16.7422 98.8749 15.9141C97.8437 15.0859 96.9141 14.1562 96.086 13.125C95.2579 12.0938 94.7501 11.2266 94.5626 10.5234L95.5 9ZM104.453 12.75L105.976 13.0078C105.851 11.1328 105.125 9.53125 103.797 8.20312C102.469 6.875 100.875 6.14844 99.0156 6.02344L99.2499 7.54688C100.609 7.71875 101.773 8.28906 102.742 9.25781C103.711 10.2266 104.281 11.3906 104.453 12.75ZM99.5312 9.11719L99.8124 10.8047C100.422 11.1016 100.883 11.5625 101.195 12.1875L102.883 12.4688C102.68 11.6406 102.277 10.9258 101.676 10.3242C101.074 9.72266 100.359 9.32031 99.5312 9.11719ZM98.5 3L98.7578 4.52344C100.32 4.55469 101.762 4.96484 103.082 5.75391C104.402 6.54297 105.457 7.59766 106.246 8.91797C107.035 10.2383 107.445 11.6797 107.476 13.2422L109 13.5C109 12.0781 108.722 10.7188 108.168 9.42188C107.613 8.125 106.867 7.00781 105.929 6.07031C104.992 5.13281 103.875 4.38672 102.578 3.83203C101.281 3.27734 99.9218 3 98.5 3Z",
        fill: "#43FFD2"
      })
    ]
  }));
  St = () => e.jsxs("svg", {
    className: "absolute top-0 z-10",
    xmlns: "http://www.w3.org/2000/svg",
    width: "410",
    height: "402",
    viewBox: "0 0 410 402",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_177)",
        children: e.jsx("path", {
          d: "M251.911 177.009C234.19 204.478 193.484 268.794 160.116 247.267C126.748 225.74 113.353 126.521 131.074 99.0518C148.796 71.5826 190.212 66.7657 223.58 88.2929C256.949 109.82 269.633 149.54 251.911 177.009Z",
          fill: "#43FFD2"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_177",
          x: "-26.7744",
          y: "-75.1636",
          width: "436.691",
          height: "476.761",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "75",
              result: "effect1_foregroundBlur_1_177"
            })
          ]
        })
      })
    ]
  });
  Ft = () => e.jsxs("svg", {
    className: "absolute top-0 z-10",
    xmlns: "http://www.w3.org/2000/svg",
    width: "342",
    height: "424",
    viewBox: "0 0 342 424",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_176)",
        children: e.jsx("path", {
          d: "M180.587 164.859C154.116 205.89 93.4286 302.035 36.6861 265.428C-20.0564 228.821 -51.3667 73.3247 -24.8957 32.2935C1.57523 -8.73765 69.0331 -12.3242 125.776 24.2828C182.518 60.8898 207.058 123.828 180.587 164.859Z",
          fill: "#7D2253"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_176",
          x: "-184.423",
          y: "-150.988",
          width: "525.667",
          height: "574.57",
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            e.jsx("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }),
            e.jsx("feBlend", {
              mode: "normal",
              in: "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }),
            e.jsx("feGaussianBlur", {
              stdDeviation: "75",
              result: "effect1_foregroundBlur_1_176"
            })
          ]
        })
      })
    ]
  });
  U = () => e.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    children: [
      e.jsx("path", {
        d: "M22.3822 6.76953L23.2306 7.61793L7.61744 23.2299L6.76904 22.3821L22.3822 6.76953Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        d: "M7.61744 6.76953L23.2306 22.3815L22.3822 23.2305L6.76904 7.61853L7.61744 6.76953Z",
        fill: "#43FFD2"
      })
    ]
  });
  At = () => e.jsxs("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      e.jsx("path", {
        d: "M13.4294 4.06152L13.9385 4.57056L4.57056 13.9378L4.06152 13.4291L13.4294 4.06152Z",
        fill: "#43FFD2"
      }),
      e.jsx("path", {
        d: "M4.57056 4.06152L13.9385 13.4287L13.4294 13.9381L4.06152 4.57092L4.57056 4.06152Z",
        fill: "#43FFD2"
      })
    ]
  });
  Ot = l.memo(({ cart: t, openCart: s }) => e.jsxs("div", {
    className: "cart_block flex items-center gap-8",
    children: [
      e.jsxs("div", {
        className: "cart_block__phone items-center gap-3 max-lg:hidden lg:flex",
        children: [
          e.jsx(xt, {}),
          e.jsx("p", {
            className: "text-[14px] text-light-turquoise font-normal tracking-[1.4px] uppercase",
            children: "+375 (29) 113-69-69"
          })
        ]
      }),
      e.jsxs("button", {
        onClick: s,
        className: "cart flex relative bg-[#000]/[.20] rounded-xl backdrop-blur-[10px] max-sm:mr-8 md:mr-8",
        children: [
          e.jsx(ue, {}),
          e.jsx("svg", {
            className: "absolute -right-[8px] -top-[3px]",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            children: e.jsx("circle", {
              cx: "8",
              cy: "8.86523",
              r: "8",
              fill: "#43FFD2"
            })
          }),
          e.jsx("p", {
            className: b("text-dark-green absolute -right-[3px] -top-[3px] text-standart", {
              "-right-[5px]": t.length >= 10
            }),
            children: t.length
          })
        ]
      })
    ]
  }));
  qt = l.memo(() => e.jsxs("div", {
    className: "flex flex-col gap-5 mt-5",
    children: [
      e.jsxs("div", {
        className: "flex flex-col gap-1.5 items-end",
        children: [
          e.jsx("h2", {
            className: "text-[14px] font-normal tracking-[1.4px] text-light-turquoise uppercase",
            children: "zakaz@loverflower.by"
          }),
          e.jsx("p", {
            className: "text-[10px] font-light tracking-[1px] uppercase",
            children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 24/7 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C"
          })
        ]
      }),
      e.jsxs("div", {
        className: "flex flex-col gap-1.5 items-end",
        children: [
          e.jsx("h2", {
            className: "text-[14px] font-normal tracking-[1.4px] text-light-turquoise uppercase",
            children: "\u0443\u043B. \u0422\u0438\u043C\u0438\u0440\u044F\u0437\u0435\u0432\u0430 67"
          }),
          e.jsx("p", {
            className: "text-[10px] font-light tracking-[1px] uppercase max-w-[80px]",
            children: "10:00 \u0434\u043E 21:00 \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445"
          })
        ]
      })
    ]
  }));
  Mt = l.memo(({ id: t, name: s, imageUrl: a, cost: r }) => e.jsxs(C, {
    to: `/catalog/bouquet/${t}`,
    className: "card group/card relative flex gap-3 z-20 h-[80px] border-t p-3 w-full hover:bg-light-turquoise transition-colors",
    children: [
      e.jsx("img", {
        className: "bg-cover h-full w-[50px]",
        src: a,
        alt: "bouquet"
      }),
      e.jsxs("div", {
        className: "flex flex-col justify-between",
        children: [
          e.jsx("h1", {
            className: "text-[14px] font-normal tracking-[0.8px] uppercase group-hover/card:text-[black]",
            children: s
          }),
          e.jsxs("p", {
            className: "text-[14px] font-normal tracking-[0.56px] uppercase group-hover/card:text-[black]",
            children: [
              r,
              " \u20BD"
            ]
          })
        ]
      })
    ]
  }));
  Et = l.memo(({ lastScrollY: t, SCROLL_HIDE_THRESHOLD: s, showHeader: a }) => {
    const r = Z(), o = l.useRef(null), [i, c] = l.useState(""), [m, n] = l.useState([]), [x, h] = l.useState(false);
    l.useEffect(() => (document.body.addEventListener("click", B), () => {
      document.body.removeEventListener("click", B);
    }), []), l.useEffect(() => (i ? document.addEventListener("keydown", u) : h(false), () => {
      document.removeEventListener("keydown", u);
    }), [
      i
    ]);
    const u = (p) => {
      o.current && p.composedPath().includes(o.current) && p.key === "Enter" && r(`search/${i}`);
    }, B = (p) => {
      o.current && p.composedPath().includes(o.current) ? h(true) : h(false);
    }, S = l.useCallback((p) => {
      p.preventDefault(), c(""), n([]);
    }, [
      r
    ]), we = async (p) => {
      try {
        const { data: F } = await z.get(`http://localhost:3000/api/bouquets/search/${p}`);
        n(F), h(true);
      } catch (F) {
        console.error("Error fetching search bouquets:", F);
      }
    }, be = Ne((p) => {
      p !== "" ? we(p) : n([]);
    }, 500), _e = (p) => {
      const F = p.target.value.toLowerCase();
      c(F), be(F);
    };
    return e.jsxs("div", {
      className: "flex xl:ml-[50px] flex-col relative justify-center lg:ml-[30px]",
      children: [
        e.jsx("form", {
          className: "relative flex items-center",
          children: e.jsx(ye, {
            id: "search-input",
            type: "search",
            ref: o,
            value: i,
            autoComplete: "off",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",
            onChange: _e,
            variant: "standard",
            sx: {
              input: {
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 400,
                width: "150px",
                transition: "width 0.3s ease",
                "&:focus": {
                  width: "315px"
                },
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.4,
                  textTransform: "none",
                  fontWeight: 300,
                  letterSpacing: "0.02em"
                }
              },
              "& .MuiInput-underline:before": {
                borderBottom: "1px solid #6B7280"
              },
              "& .MuiInput-underline:hover": {
                borderBottom: "1px solid #9CA3AF"
              },
              "& .MuiInput-underline:after": {
                borderBottom: "1px solid white"
              },
              transition: "border-color 0.3s ease",
              backgroundColor: t < s ? "rgba(4, 10, 10, 0.4)" : "rgb(0, 0, 0)"
            },
            slotProps: {
              input: {
                startAdornment: e.jsx(pe, {}),
                endAdornment: i.length !== 0 && e.jsx("button", {
                  onClick: S,
                  children: e.jsx(mt, {})
                })
              }
            }
          })
        }),
        m.length > 0 && e.jsx("div", {
          className: b("absolute flex flex-col top-0 left-0 bg-[black]/[0.8] [&:last-of-type]:border-b transition-all ease-in-out w-[360px] duration-300", {
            "top-[70px]": t < s
          }, {
            "top-[5rem]": t > s
          }, {
            "-translate-y-[200%] opacity-0": !a && t > s || !x
          }),
          children: m.map((p) => e.jsx(Mt, {
            id: p.id,
            name: p.name,
            imageUrl: p.imageUrl,
            cost: p.cost
          }, p.id))
        })
      ]
    });
  });
  g = l.memo(({ className: t, children: s }) => e.jsx("div", {
    className: t,
    children: s
  }));
  Pt = l.memo(({ name: t, handleCategorySelect: s }) => e.jsxs(C, {
    to: "catalog",
    onClick: () => s(t),
    className: "group/categories catalog_name group-[:hover]:opacity-100 opacity-0 text-[14px] font-normal relative z-30 tracking-[.56px] uppercase cursor-pointer hover:text-light-turquoise",
    children: [
      t,
      e.jsx(g, {
        className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/categories:w-full group-hover/categories:visible transition-all duration-300"
      })
    ]
  }));
  Tt = l.memo(({ categories: t, navLinks: s, handleCategorySelect: a }) => e.jsxs(e.Fragment, {
    children: [
      e.jsx(C, {
        to: "/",
        className: "logo",
        children: e.jsx("img", {
          src: "./img/logo.png",
          alt: "logo",
          className: "w-[34px] h-[75px]"
        })
      }),
      e.jsxs("ul", {
        className: "navbar flex xl:ml-[70px] items-center xl:gap-12 lg:ml-[40px] lg:gap-8",
        children: [
          e.jsxs("li", {
            className: "group catalog-header text-[14px] font-normal tracking-[.56px] relative uppercase py-3",
            children: [
              e.jsxs(C, {
                to: "catalog",
                className: "group/link hover:text-light-turquoise hover:decoration-light-turquoise cursor-pointer transition-all group-hover:text-light-turquoise",
                children: [
                  "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
                  e.jsx(g, {
                    className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/link:w-full group-hover/link:visible transition-all group-hover:w-full group-hover:visible"
                  })
                ]
              }),
              e.jsx("ul", {
                className: "group/submenu absolute group-[:hover]:visible group-[:hover]:opacity-100 opacity-0 -left-4 top-[40px] invisible bg-[grey]/[.3] backdrop-blur-[10px] flex flex-col gap-1 w-[260px] p-2 transition-all z-20",
                children: t.map((r) => e.jsx(Pt, {
                  name: r.name,
                  handleCategorySelect: a
                }, r.name))
              })
            ]
          }),
          s.map((r) => e.jsx("li", {
            className: "group/nav text-[14px] font-normal tracking-[.56px] uppercase hover:text-light-turquoise transition-colors",
            children: e.jsxs(C, {
              to: r.url,
              className: "relative",
              children: [
                r.label,
                e.jsx(g, {
                  className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/nav:w-full group-hover/nav:visible transition-all"
                })
              ]
            })
          }, r.label))
        ]
      })
    ]
  }));
  L = () => {
    const [t, s] = l.useState(window.outerWidth);
    return l.useEffect(() => {
      const a = () => s(window.outerWidth);
      return window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
    }, []), t;
  };
  Dt = [
    {
      name: d.PopularItems
    },
    {
      name: d.AssortedBouquets
    },
    {
      name: d.MonoBouquets
    },
    {
      name: d.RoseBouquets
    },
    {
      name: d.HolidayBouquets
    },
    {
      name: d.FlowerCompositions
    },
    {
      name: d.PottedIndoorPlants
    },
    {
      name: d.DriedFlowerBouquets
    },
    {
      name: d.Gifts
    },
    {
      name: d.ChrysanthemumBouquets
    }
  ];
  Rt = [
    {
      label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430 ",
      url: "delivery"
    },
    {
      label: "\u041E \u043D\u0430\u0441",
      url: "aboutUs"
    },
    {
      label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      url: "contacts"
    },
    {
      label: "FAQ",
      url: "FAQ"
    }
  ];
  A = 80;
  Ht = l.memo(() => {
    const t = k(), s = se(), a = L(), [r, o] = l.useState(true), [i, c] = l.useState(0), { cartItems: m } = y(G), n = l.useCallback(() => {
      o(!(window.scrollY > i)), c(window.scrollY);
    }, [
      i
    ]), x = l.useCallback((B) => {
      t(ce({
        category: B
      }));
    }, [
      t
    ]), h = l.useCallback(() => {
      t(N({
        modalType: v.Cart,
        isOpen: true
      })), t(N({
        modalType: v.HamburgerMenu,
        isOpen: false
      }));
    }, [
      t
    ]), u = l.useCallback(() => {
      t(N({
        modalType: v.HamburgerMenu,
        isOpen: true
      }));
    }, [
      t
    ]);
    return l.useEffect(() => (window.addEventListener("scroll", n), () => {
      window.removeEventListener("scroll", n);
    }), [
      i
    ]), e.jsx("div", {
      id: "header",
      className: b("w-full fixed z-40 transition", {
        "-translate-y-full": !r && i > A,
        "bg-[black]": s.pathname !== "/" && a < 768 || i > A
      }),
      children: e.jsxs("div", {
        className: "header__wrapper flex justify-between h-[80px] container mx-auto",
        children: [
          e.jsx("div", {
            className: "my-auto ml-2.5 lg:hidden",
            children: e.jsx("button", {
              onClick: u,
              className: "p-3 relative z-20",
              children: e.jsx("img", {
                src: "./img/headerImg/burgerIcon.png",
                alt: "icon",
                className: "my-auto"
              })
            })
          }),
          e.jsxs("div", {
            className: b("intro__content flex flex-col my-auto md:hidden", {
              hidden: s.pathname === "/" && i < A
            }),
            children: [
              e.jsx("h1", {
                className: "text-[20px] h-[25px] font-light tracking-[0.2em] uppercase font-cormorant flex justify-center items-center",
                children: "lover"
              }),
              e.jsx("h1", {
                className: "text-[20px] h-[25px] font-light tracking-[0.2em] uppercase font-cormorant flex justify-center items-center relative z-20",
                children: "Flower"
              })
            ]
          }),
          e.jsxs("div", {
            className: "content max-lg:hidden lg:flex",
            children: [
              e.jsx(Tt, {
                handleCategorySelect: x,
                categories: Dt,
                navLinks: Rt
              }),
              e.jsx(Et, {
                lastScrollY: i,
                SCROLL_HIDE_THRESHOLD: A,
                showHeader: r
              })
            ]
          }),
          a <= 768 || i > A ? e.jsx(Ot, {
            cart: m,
            openCart: h
          }) : e.jsx(qt, {})
        ]
      })
    });
  });
  R = l.memo(({ title: t, path: s, className: a }) => e.jsx("li", {
    className: a,
    children: e.jsxs(C, {
      to: s,
      className: "group/footer-title relative hover:text-cherry transition-colors",
      children: [
        t,
        e.jsx(g, {
          className: "absolute invisible h-[1px] w-0 bg-cherry group-hover/footer-title:w-full group-hover/footer-title:visible transition-all duration-300"
        })
      ]
    })
  }));
  zt = l.memo(({ name: t, contentInfo: s }) => e.jsxs("div", {
    className: "flex flex-col gap-1.5",
    children: [
      e.jsx("h2", {
        className: "text-[14px] font-normal text-light-turquoise uppercase text-center",
        children: t
      }),
      e.jsx("p", {
        className: "text-[10px] font-light tracking-[1px] uppercase text-center",
        children: s
      })
    ]
  }));
  Y = l.memo(({ name: t, selectCategory: s }) => e.jsx("li", {
    className: "max-sm:hidden sm:flex",
    children: e.jsxs(C, {
      to: "catalog",
      onClick: () => s == null ? void 0 : s(t),
      className: "group/catalog relative text-standart font-light uppercase tracking-[0.48px] cursor-pointer hover:text-light-turquoise transition-colors",
      children: [
        t,
        e.jsx(g, {
          className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/catalog:w-full group-hover/catalog:visible transition-all duration-300 z-0"
        })
      ]
    })
  }));
  K = "text-[14px] font-bold text-light-turquoise mb-2.5 uppercase";
  Zt = "text-[14px] font-bold text-light-turquoise uppercase";
  Vt = [
    {
      name: d.PopularItems
    },
    {
      name: d.DriedFlowerBouquets
    },
    {
      name: d.RoseBouquets
    },
    {
      name: d.FlowerCompositions
    },
    {
      name: d.AssortedBouquets
    },
    {
      name: d.MonoBouquets
    },
    {
      name: d.HolidayBouquets
    },
    {
      name: d.PottedIndoorPlants
    },
    {
      name: d.Gifts
    },
    {
      name: d.ChrysanthemumBouquets
    }
  ];
  Gt = [
    "\u0414\u043B\u044F \u0434\u0435\u0432\u0443\u0448\u043A\u0438",
    "\u0414\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D\u044B",
    "\u0414\u043B\u044F \u0436\u0435\u043D\u044B",
    "\u0414\u043B\u044F \u043C\u0430\u043C\u044B",
    "\u0414\u043B\u044F \u043A\u043E\u043B\u043B\u0435\u0433\u0438",
    "\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430",
    "\u0414\u043B\u044F \u0434\u043E\u0447\u043A\u0438",
    "\u0414\u043B\u044F \u0434\u0435\u0442\u0435\u0439",
    "\u0414\u043B\u044F \u0436\u0435\u043D\u0449\u0438\u043D\u044B"
  ];
  Ut = [
    {
      link: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430",
      url: "delivery"
    },
    {
      link: "\u041E \u043D\u0430\u0441",
      url: "aboutUs"
    },
    {
      link: "FAQ",
      url: "FAQ"
    },
    {
      link: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      url: "contacts"
    },
    {
      link: "\u0434\u043B\u044F \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
      url: "corporate"
    }
  ];
  $t = [
    {
      title: "zakaz@loverflower.by",
      content: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 24/7 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C"
    },
    {
      title: "\u0443\u043B. \u0422\u0438\u043C\u0438\u0440\u044F\u0437\u0435\u0432\u0430 67",
      content: "10:00 \u0434\u043E 21:00 \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445"
    },
    {
      title: "+375 (29) 113-69-69",
      content: "\u043F\u0440\u0438\u0435\u043C \u0437\u0432\u043E\u043D\u043A\u043E\u0432 \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E"
    }
  ];
  Qt = () => {
    const t = k(), s = l.useCallback((a) => {
      t(ce({
        category: a
      }));
    }, [
      t
    ]);
    return e.jsx("footer", {
      className: "footer relative z-50 pb-[30px] bg-[#000] max-lg:max-h-[800px]",
      children: e.jsxs("div", {
        className: "container mx-auto flex h-full lg:justify-between transition-all max-lg:flex-col max-lg:items-center",
        children: [
          e.jsxs("div", {
            className: "flex flex-col",
            children: [
              e.jsx("div", {
                className: "logo flex max-lg:justify-center",
                children: e.jsx("img", {
                  src: "./img/logo.png",
                  alt: "logo"
                })
              }),
              e.jsx("h3", {
                className: "text-light-turquoise mt-[8px] text-[14px] uppercase tracking-[0.56px] max-lg:hidden lg:block",
                children: "\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B"
              }),
              e.jsx("p", {
                className: "mt-[10px] max-w-[16rem] text-standart font-light uppercase max-lg:hidden lg:block",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium saepe quae laborum suscipit consectetur expedita est neque autem ipsam et fugit deserunt earum molestiae a, nulla dolor corporis magni."
              })
            ]
          }),
          e.jsxs("ul", {
            className: "flex flex-col gap-2 lg:mt-7 max-lg:hidden max-lg:mt-5",
            children: [
              e.jsx(R, {
                title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
                path: "catalog",
                className: K
              }),
              Vt.map((a) => e.jsx(Y, {
                name: a.name,
                selectCategory: s
              }, a.name))
            ]
          }),
          e.jsxs("ul", {
            className: "flex-col gap-2 lg:mt-7 max-lg:hidden lg:flex",
            children: [
              e.jsx(R, {
                title: "\u0411\u0443\u043A\u0435\u0442",
                path: "catalog",
                className: K
              }),
              Gt.map((a) => e.jsx(Y, {
                name: a
              }, a))
            ]
          }),
          e.jsx("ul", {
            className: "flex flex-col gap-6 lg:mt-7 max-lg:gap-2.5 max-w-[160px] max-lg:items-center max-lg:text-center",
            children: Ut.map((a) => e.jsx(R, {
              path: a.url,
              title: a.link,
              className: Zt
            }, a.url))
          }),
          e.jsxs("div", {
            className: "flex flex-col gap-5 mt-7",
            children: [
              $t.map((a) => e.jsx(zt, {
                name: a.title,
                contentInfo: a.content
              }, a.title)),
              e.jsx("div", {
                className: "mt-9 flex justify-center",
                children: e.jsx(ge, {})
              })
            ]
          })
        ]
      })
    });
  };
  $ = (t) => t.modal;
  Wt = (t) => t.modal.severityOption;
  Yt = ({ handleAlert: t }) => {
    const { register: s, handleSubmit: a, formState: { errors: r } } = ae(), o = (c) => {
      console.log(c), t("success");
    }, i = (c) => {
      console.log(c), t("error");
    };
    return e.jsxs("form", {
      onSubmit: a(o, i),
      className: "call_modal__form flex flex-col gap-3 mt-3",
      children: [
        e.jsx("input", {
          className: "form__input w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:bg-[#0F2222] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
          type: "text",
          placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
          ...s("name", {
            required: true
          }),
          "aria-invalid": !!r.name
        }),
        e.jsx("input", {
          className: "form__input w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
          type: "tel",
          placeholder: "+7 (977) 777-77-77",
          ...s("name", {
            required: true
          }),
          "aria-invalid": !!r.name
        }),
        e.jsx("button", {
          className: "w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
          children: "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        })
      ]
    });
  };
  Kt = l.memo(() => {
    const t = k(), { isOpenModal: s } = y($), a = () => {
      t(N({
        modalType: v.Modal,
        isOpen: false
      }));
    }, r = l.useCallback((o) => {
      t(N({
        modalType: v.Alert,
        isOpen: true
      })), t(V({
        severity: o
      }));
    }, [
      t
    ]);
    return T.createPortal(e.jsxs("div", {
      className: b("call_modal fixed z-40 bottom-4 right-4 w-0 h-[485px] bg-[#0F2222] opacity-0 transition-all duration-200", {
        "w-[540px] opacity-100": s
      }),
      children: [
        e.jsx(Ft, {}),
        e.jsx(St, {}),
        e.jsxs("div", {
          className: "call_modal__wrapper z-20 p-5 relative flex flex-col",
          children: [
            e.jsx("div", {
              className: "call_modal__close flex justify-end",
              children: e.jsx("button", {
                onClick: a,
                children: e.jsx(U, {})
              })
            }),
            e.jsx("div", {
              className: "call_modal__title flex z-20",
              children: e.jsx("h1", {
                className: "title text-[40px] font-normal tracking-[.8px] uppercase font-cormorant",
                children: "\u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
              })
            }),
            e.jsx("div", {
              className: "border-t-[1px] w-[100px] mt-5"
            }),
            e.jsx("div", {
              className: "call_modal__content mt-3",
              children: e.jsx("p", {
                className: "max-w-[310px] text-[14px] font-normal tracking-[.56px] uppercase",
                children: "\u0412\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435, \u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438. \u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0438 \u043F\u0440\u0438 \u043A\u0430\u043A\u0438\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u0445 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C."
              })
            }),
            e.jsx(Yt, {
              handleAlert: r
            }),
            e.jsx("div", {
              className: "mt-3",
              children: e.jsxs("p", {
                className: "max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed",
                children: [
                  "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441",
                  e.jsx("span", {
                    className: "text-pink underline ml-1",
                    children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                  })
                ]
              })
            })
          ]
        })
      ]
    }), document.getElementById("portal"));
  });
  Jt = l.memo(({ closeCart: t, screenWidth: s }) => e.jsxs("div", {
    className: "title flex items-center justify-between border-b-[1px] w-full pb-4 border-[#555] ",
    children: [
      e.jsx("h1", {
        className: "text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase max-lg:text-[14px] max-lg:tracking-[0.04em]",
        children: "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430"
      }),
      e.jsx("button", {
        onClick: t,
        children: s > 640 ? e.jsx(U, {}) : e.jsx(At, {})
      })
    ]
  }));
  J = l.memo(({ onClick: t, disabled: s = false, children: a }) => e.jsx("button", {
    onClick: t,
    disabled: s,
    className: "h-full w-[8px] disabled:text-[#555] text-[white] hover:text-light-turquoise active:text-cherry transition-colors",
    children: a
  }));
  Xt = l.memo(({ id: t, name: s, cost: a, imageUrl: r, quantity: o, dispatch: i }) => {
    const c = (x) => i(W({
      id: x,
      delta: 1
    })), m = (x) => i(W({
      id: x,
      delta: -1
    })), n = (x) => i(Xe(x));
    return e.jsxs("div", {
      className: "card_block flex border-b-[1px] border-[#555] py-5 max-lg:py-2",
      children: [
        e.jsx("div", {
          className: "img",
          children: e.jsx("img", {
            className: "h-[80px] w-[60px]",
            src: r,
            alt: s
          })
        }),
        e.jsxs("div", {
          className: "flex flex-col justify-between lg:ml-5 max-lg:ml-2",
          children: [
            e.jsx("h2", {
              className: "text-[14px] font-normal tracking-[0.28px] uppercase max-lg:text-[12px] max-lg:tracking-[0.02em]",
              children: s
            }),
            e.jsxs("div", {
              className: "flex justify-around items-center w-[100px] h-[30px] border-[0.5px] border-[#555] max-lg:w-[80px]",
              children: [
                e.jsx(J, {
                  onClick: () => m(t),
                  disabled: o === 1,
                  children: "\u2013"
                }),
                e.jsx("b", {
                  children: o
                }),
                e.jsx(J, {
                  onClick: () => c(t),
                  children: "+"
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex flex-col justify-between ml-auto",
          children: [
            e.jsxs("p", {
              className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase max-lg:text-[12px] max-lg:tracking-[0.04em]",
              children: [
                a,
                " \u20BD"
              ]
            }),
            e.jsx("button", {
              onClick: () => n(t),
              className: "text-[10px] font-normal tracking-[0.4px] underline uppercase max-lg:tracking-[0.04em]",
              children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
            })
          ]
        })
      ]
    });
  });
  e1 = [
    {
      title: "\u0428\u0410\u0420 \u201C\u0417\u0412\u0415\u0417\u0414\u0410\u201D",
      url: "./img/balls/star.png"
    },
    {
      title: "\u0428\u0410\u0420 \u201C\u0421\u0415\u0420\u0414\u0426\u0415\u201D",
      url: "./img/balls/heart.png"
    }
  ];
  t1 = l.memo(() => e.jsxs("div", {
    className: "top_block flex flex-col gap-3",
    children: [
      e.jsx("div", {
        className: "title",
        children: e.jsxs("h2", {
          className: "text-[12px] font-normal tracking-[0.24px] uppercase max-sm:text-[10px] max-sm:tracking-[0.02em]",
          children: [
            "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043A \u0437\u0430\u043A\u0430\u0437\u0443",
            e.jsx("span", {
              className: "text-light-turquoise",
              children: " \u0428\u0430\u0440\u044B:"
            })
          ]
        })
      }),
      e.jsx("div", {
        className: "cards flex justify-between",
        children: e1.map((t, s) => e.jsxs("div", {
          className: "card flex h-[60px] gap-3 max-sm:h-[40px]",
          children: [
            e.jsx("img", {
              className: "h-[60px] w-[60px] max-sm:w-[40px] max-sm:h-[40px]",
              src: t.url,
              alt: "star"
            }),
            e.jsxs("div", {
              className: "flex flex-col justify-between items-start",
              children: [
                e.jsx("h3", {
                  className: "text-[12px] font-normal tracking-[0.24px] uppercase max-sm:text-[8px] max-sm:tracking-[0.02em]",
                  children: t.title
                }),
                e.jsx("p", {
                  className: "text-[12px] text-light-turquoise font-bold tracking-[0.48px] uppercase max-sm:text-[8px] max-sm:tracking-[0.04em]",
                  children: "11.00 \u20BD"
                }),
                e.jsx("button", {
                  className: "text-[10px] text-light-turquoise font-normal tracking-[0.4px] underline uppercase max-sm:text-[8px] max-sm:tracking-[0.04em]",
                  children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
                })
              ]
            })
          ]
        }, s))
      })
    ]
  }));
  s1 = l.memo(({ totalPrice: t, handleOrderButton: s }) => e.jsxs("div", {
    className: "total_price_block flex flex-col lg:gap-5 max-lg:gap-2",
    children: [
      e.jsxs("div", {
        className: "total_price w-[295px]",
        children: [
          e.jsxs("h2", {
            className: "text-[14px] text-light-turquoise font-bold tracking-[0.28px] uppercase max-lg:text-[10px] max-lg:tracking-[0.02em]",
            children: [
              "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0438\u0442\u043E\u0433: ",
              t,
              " \u0440\u0443\u0431."
            ]
          }),
          e.jsx("p", {
            className: "text-[14px] font-normal tracking-[0.28px] uppercase text-balance max-lg:text-[10px] max-lg:tracking-[0.02em]",
            children: "\u0427\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438, \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E \u0437\u0430\u043A\u0430\u0437\u0430."
          })
        ]
      }),
      e.jsx("button", {
        onClick: s,
        className: "border-[0.5px] p-5 text-[12px] text-center font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]",
        children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"
      })
    ]
  }));
  a1 = () => {
    const t = k(), s = Z(), a = L(), { totalPrice: r, cartItems: o } = y(G), i = y(nt), c = l.useCallback(() => t(N({
      modalType: v.Cart,
      isOpen: false
    })), [
      t
    ]), m = l.useCallback(() => {
      (o.length !== 0 || o) && (s("order"), c());
    }, [
      t,
      o
    ]);
    return l.useEffect(() => {
      localStorage.setItem("flower-cart", JSON.stringify(o));
    }, [
      o
    ]), l.useEffect(() => {
      const n = document.body, x = document.getElementById("header"), u = `${window.innerWidth - document.documentElement.clientWidth}px`;
      return i ? (n.style.paddingRight = u, n.style.overflow = "hidden", x && (x.style.paddingRight = u)) : (n.style.paddingRight = "0px", n.style.overflow = "visible", x && (x.style.paddingRight = "0px")), () => {
        n.style.paddingRight = "0px", n.style.overflow = "visible", x && (x.style.paddingRight = "0px");
      };
    }, [
      i
    ]), T.createPortal(e.jsxs("div", {
      className: b("cart fixed top-0 w-full h-full z-40 delay-75", {
        invisible: !i,
        visible: i
      }),
      children: [
        e.jsx("div", {
          onClick: c,
          className: b("w-full h-full absolute bg-[#000]/[0.20] backdrop-blur-[10px] z-40 transition-opacity ease-in-out duration-300", {
            "opacity-100": i,
            "opacity-0": !i
          })
        }),
        e.jsxs("div", {
          className: b("cart__wrapper absolute flex flex-col justify-between right-0 z-50 h-full lg:p-5 max-lg:py-5 max-lg:px-2 bg-[#000] transition-[width]", {
            "w-[420px] max-lg:w-[260px]": i,
            "w-0": !i
          }),
          children: [
            e.jsxs("div", {
              className: "flex flex-col overflow-y-hidden",
              children: [
                e.jsx(Jt, {
                  closeCart: c,
                  screenWidth: a
                }),
                e.jsx("div", {
                  className: b("flex flex-col pr-4", {
                    "overflow-y-scroll": o.length > 5 || a < 769 && o.length >= 4
                  }),
                  children: o.map((n) => e.jsx(Xt, {
                    id: n.id,
                    name: n.name,
                    imageUrl: n.imageUrl,
                    cost: n.cost,
                    quantity: n.quantity,
                    dispatch: t
                  }, n.id))
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx(t1, {}),
                e.jsx(g, {
                  className: "lg:mt-7 mb-3 border-b-[1px] border-[#555] max-lg:mt-3"
                }),
                e.jsx(s1, {
                  totalPrice: r,
                  handleOrderButton: m
                })
              ]
            })
          ]
        })
      ]
    }), document.getElementById("portal"));
  };
  l1 = l.memo(() => e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "flex flex-col",
        children: [
          e.jsx("span", {
            className: "text-[10px] font-normal tracking-[0.04em] text-[#555555]",
            children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
          }),
          e.jsx("span", {
            className: "text-[10px] font-normal tracking-[0.04em] text-[#555555]",
            children: "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          })
        ]
      }),
      e.jsx("span", {
        className: "underline uppercase text-[14px] tracking-[0.1em] font-normal",
        children: "+375 (29) 113-69-69"
      }),
      e.jsx("div", {
        className: "mt-2.5",
        children: e.jsx(ge, {})
      })
    ]
  }));
  r1 = l.memo(({ title: t, content: s }) => e.jsxs("div", {
    className: "flex flex-col",
    children: [
      e.jsx("h1", {
        className: "text-[14px] tracking-[0.1em] font-normal uppercase text-light-turquoise",
        children: t
      }),
      e.jsx("h2", {
        className: "text-[10px] tracking-[0.1em] font-light uppercase",
        children: s
      })
    ]
  }, t));
  i1 = [
    {
      link: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      url: "/"
    },
    {
      link: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
      url: "catalog"
    },
    {
      link: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430",
      url: "delivery"
    },
    {
      link: "\u041E \u043D\u0430\u0441",
      url: "aboutUs"
    },
    {
      link: "FAQ",
      url: "FAQ"
    },
    {
      link: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      url: "contacts"
    },
    {
      link: "\u0434\u043B\u044F \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
      url: "corporate"
    }
  ];
  o1 = [
    {
      title: "zakaz@loverflower.by",
      content: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 24/7 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C"
    },
    {
      title: "\u0443\u043B. \u0422\u0438\u043C\u0438\u0440\u044F\u0437\u0435\u0432\u0430 67",
      content: "10:00 \u0434\u043E 21:00 \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445"
    }
  ];
  n1 = l.memo(() => {
    const t = k(), { isOpenHamburgerMenu: s } = y($), a = () => {
      t(N({
        modalType: v.HamburgerMenu,
        isOpen: false
      }));
    };
    return T.createPortal(e.jsx("div", {
      className: b("hamburger-menu fixed z-40 top-0 left-0 w-0 h-[100vh] bg-[black] opacity-0 transition-all duration-200", {
        "w-[260px] opacity-100 visible": s
      }, {
        invisible: !s
      }),
      children: e.jsxs("div", {
        className: "content flex flex-col px-2.5 py-5 justify-between h-full",
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center",
            children: [
              e.jsx("img", {
                src: "./img/logo.png",
                alt: "logo"
              }),
              e.jsx("button", {
                onClick: a,
                children: e.jsx(U, {})
              })
            ]
          }),
          e.jsxs(C, {
            className: "relative flex items-center mt-2",
            to: "search",
            children: [
              e.jsx(pe, {}),
              e.jsx("span", {
                className: "text-[14px] tracking-[0.04em] font-normal uppercase",
                children: "\u041F\u043E\u0438\u0441\u043A"
              })
            ]
          }),
          e.jsx("div", {
            className: "flex flex-col gap-2.5 mt-2.5",
            children: i1.map((r) => e.jsx(C, {
              to: r.url,
              onClick: a,
              className: "text-[14px] tracking-[0.04em] font-normal uppercase",
              children: r.link
            }, r.url))
          }),
          e.jsx(g, {
            className: "border-b-[1px] border-[#555555] mt-2.5 w-[100px]"
          }),
          e.jsxs("div", {
            className: "mt-5 flex flex-col gap-2.5",
            children: [
              o1.map((r) => e.jsx(r1, {
                title: r.title,
                content: r.content
              }, r.title)),
              e.jsx(l1, {})
            ]
          })
        ]
      })
    }), document.getElementById("portal"));
  });
  var he = ((t) => (t.success = "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E.", t.info = "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.", t.warning = "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435: \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.", t.error = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.", t))(he || {});
  let c1, x1, d1, p1, u1, g1, h1, Ce, H, q, f1, C1, j1, v1, w1, b1, _1, N1, y1, k1, I1, X, B1, L1, S1, F1, A1, O1, q1, M1, E1, ee, P1, T1, D1, je, R1, H1, ve, z1, Z1, V1, G1, U1, $1, Q1, W1, Y1, K1, J1, X1, e2, t2, s2, a2, l2, j, r2;
  c1 = 80;
  x1 = l.memo(() => {
    const t = k(), [s, a] = l.useState(0), [r, o] = l.useState(false), i = y(Wt), { isOpenAlertBlock: c } = y($), m = () => {
      t(N({
        modalType: v.Alert,
        isOpen: false
      }));
    }, n = () => {
      o(!(window.scrollY > s)), a(window.scrollY);
    };
    return l.useEffect(() => {
      if (!c) return;
      const x = setTimeout(() => m(), 1e4);
      return () => clearTimeout(x);
    }, [
      c
    ]), l.useEffect(() => (window.addEventListener("scroll", n), () => {
      window.removeEventListener("scroll", n);
    }), [
      s
    ]), T.createPortal(e.jsx(ke, {
      sx: {
        position: "fixed",
        top: s > c1 && r ? 100 : 40,
        right: 0,
        zIndex: 1300,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: c ? 1 : 0,
        transform: `translate(-50%, ${c ? "0" : "-10px"})`
      },
      children: c && e.jsx(Ie, {
        severity: i,
        onClose: m,
        variant: "filled",
        children: he[i]
      })
    }), document.getElementById("portal"));
  });
  fe = l.memo(({ id: t, name: s, cost: a, imageUrl: r, filters: o, imgClassName: i, categories: c }) => {
    const m = k(), n = Z(), x = y((S) => ct(S, t)), h = () => {
      m(Je({
        id: t,
        name: s,
        imageUrl: r,
        cost: a,
        quantity: 1,
        filters: o,
        categories: c
      }));
    }, u = () => {
      n(`/catalog/bouquet/${t}`);
    }, B = `\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 ${(x == null ? void 0 : x.quantity) ? `(${x.quantity})` : ""}`;
    return e.jsxs("div", {
      className: "card relative flex flex-col gap-3 z-20",
      children: [
        e.jsx("div", {
          onClick: u,
          className: "cursor-pointer",
          children: e.jsx("img", {
            className: `${i} bg-cover pointer-events-none select-none`,
            src: r,
            alt: "bouquet"
          })
        }),
        e.jsxs("div", {
          className: "flex flex-col gap-3",
          children: [
            e.jsx("h1", {
              className: "text-[20px] font-normal tracking-[0.8px] uppercase",
              children: s
            }),
            e.jsxs("p", {
              className: "text-[14px] font-bold tracking-[0.56px] uppercase",
              children: [
                a,
                " \u20BD"
              ]
            })
          ]
        }),
        e.jsx("button", {
          onClick: h,
          className: "border-[.5px] w-[255px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] transition",
          children: B
        })
      ]
    });
  });
  j2 = l.memo(() => e.jsxs("div", {
    children: [
      e.jsx(M, {
        variant: "rectangular",
        animation: "wave",
        sx: {
          bgcolor: "grey.900",
          opacity: "0.6"
        },
        width: 255,
        height: 335
      }),
      e.jsx(M, {
        variant: "text",
        animation: "wave",
        height: 50,
        sx: {
          bgcolor: "grey.900",
          opacity: "0.6"
        }
      }),
      e.jsx(M, {
        variant: "text",
        animation: "wave",
        height: 30,
        sx: {
          bgcolor: "grey.900",
          opacity: "0.6"
        }
      }),
      e.jsx(M, {
        variant: "rectangular",
        animation: "wave",
        height: 50,
        sx: {
          bgcolor: "grey.900",
          marginTop: "10px",
          opacity: "0.6"
        }
      })
    ]
  }));
  m1 = l.memo(({ bouquets: t, screenWidth: s }) => e.jsx(e.Fragment, {
    children: e.jsxs("div", {
      className: "popular_bouquets__slider gap-8 flex items-center justify-center",
      children: [
        e.jsx("button", {
          className: "arrow-prev mb-14 relative z-10 cursor-pointer select-none max-md:hidden",
          children: e.jsx(ut, {})
        }),
        e.jsx(Be, {
          spaceBetween: 10,
          freeMode: true,
          slidesPerView: s > 1024 ? 3 : 2,
          navigation: {
            prevEl: ".arrow-prev",
            nextEl: ".arrow-next"
          },
          mousewheel: true,
          modules: [
            Le,
            Se,
            Fe
          ],
          className: "flex flex-nowrap select-none z-30 relative",
          children: t.map((a) => e.jsx(Ae, {
            children: e.jsx(fe, {
              id: a.id,
              name: a.name,
              imageUrl: a.imageUrl,
              cost: a.cost,
              categories: a.categories,
              filters: a.filters,
              imgClassName: "h-[450px] w-[350px]"
            }, a.id)
          }, a.id))
        }),
        e.jsx("button", {
          className: "arrow-next mb-14 relative cursor-pointer select-none z-10 max-md:hidden",
          children: e.jsx(ht, {})
        })
      ]
    })
  }));
  v2 = l.memo(({ items: t }) => e.jsx(e.Fragment, {
    children: e.jsx("nav", {
      className: "title",
      children: e.jsx("ol", {
        className: "flex max-w-[500px]",
        children: t.map((s, a) => e.jsxs("li", {
          className: "text-[12px] font-normal tracking-[0.48px] uppercase",
          children: [
            e.jsxs(C, {
              className: "group/path relative hover:text-light-turquoise transition-colors",
              to: s.path,
              children: [
                s.text,
                e.jsx(g, {
                  className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/path:w-full group-hover/path:visible transition-all duration-300 z-0"
                })
              ]
            }),
            a < t.length - 1 && e.jsx("span", {
              className: "mx-1",
              children: "/"
            })
          ]
        }, s.text))
      })
    })
  }));
  d1 = [
    "./img/PagesImg/HomeImg/CardImg/tree.png",
    "./img/PagesImg/HomeImg/CardImg/decorations.png",
    "./img/PagesImg/HomeImg/CardImg/candle.png",
    "./img/PagesImg/HomeImg/CardImg/bouquetCard.png"
  ];
  p1 = l.memo(() => e.jsx("ul", {
    className: "card_footer_block__content flex z-20 gap-8 max-lg:w-full max-lg:grid max-lg:grid-cols-2 max-lg:mt-6 max-lg:justify-center",
    children: d1.map((t, s) => e.jsx("li", {
      className: "max-lg:w-full max-lg:flex max-lg:justify-center",
      children: e.jsx("img", {
        className: "backdrop-blur-[10px] lg:h-[160px] lg:w-[160px] max-lg:w-[147px] max-lg:h-[137px]",
        src: t,
        alt: `bouquet-${s}`
      })
    }, s))
  }));
  u1 = [
    e.jsx(Nt, {}),
    e.jsx(yt, {}),
    e.jsx(kt, {})
  ];
  g1 = l.memo(() => e.jsx("ul", {
    className: "social_icons flex justify-end lg:mt-28 lg:gap-8 max-lg:gap-5",
    children: u1.map((t, s) => e.jsx("li", {
      children: t
    }, s))
  }));
  h1 = l.memo(({ screenWidth: t }) => {
    const s = t > 1024;
    return e.jsxs("div", {
      className: "card_footer_block relative h-[500px] mt-[10rem] max-lg:px-2",
      children: [
        s ? e.jsx(It, {}) : e.jsx(Lt, {}),
        s && e.jsx(Bt, {}),
        e.jsx(g, {
          className: `absolute -bottom-[10rem] right-[45rem] z-10 h-[212px] w-[400px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px]
        max-lg:w-[259px] max-lg:h-[106px] max-lg:rotate-[21.097deg] max-lg:blur-[50px] max-lg:-bottom-[3.5rem] max-lg:-left-[10rem]`
        }),
        e.jsxs("div", {
          className: "card_footer_block__wrapper relative flex justify-around lg:mt-80 container mx-auto max-lg:flex-col-reverse max-lg:mt-[5rem]",
          children: [
            e.jsx("h2", {
              className: "absolute left-0 overflow-hidden text-[#0A1717] text-[200px] font-bold tracking-[8px] uppercase max-lg:hidden lg:max-w-[1000px]",
              children: "instagram"
            }),
            e.jsx(p1, {}),
            e.jsxs("div", {
              className: "card_footer_block__socials flex lg:flex-col z-20 max-lg:justify-around",
              children: [
                e.jsxs("div", {
                  className: "signature relative",
                  children: [
                    e.jsx("div", {
                      className: "border-t-[1px] lg:w-[350px] border-light-turquoise max-lg:w-[133px]"
                    }),
                    e.jsx("img", {
                      className: "absolute left-0 lg:-top-24 max-lg:w-[133px] max-lg:h-[121px] max-lg:-top-[4rem]",
                      src: "./img/PagesImg/HomeImg/CardImg/ourSocialNetworks.png",
                      alt: "signature"
                    })
                  ]
                }),
                e.jsx(g1, {})
              ]
            })
          ]
        })
      ]
    });
  });
  Ce = (t, s = 0, a = 0.8) => {
    const r = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: a,
          ease: "easeOut",
          delay: s
        }
      }
    };
    switch (t) {
      case "fade-left":
        return {
          ...r,
          hidden: {
            ...r.hidden,
            x: 100
          },
          visible: {
            ...r.visible,
            x: 0
          }
        };
      case "fade-right":
        return {
          ...r,
          hidden: {
            ...r.hidden,
            x: -100
          },
          visible: {
            ...r.visible,
            x: 0
          }
        };
      case "fade-bottom":
        return {
          ...r,
          hidden: {
            ...r.hidden,
            y: 100
          },
          visible: {
            ...r.visible,
            y: 0
          }
        };
      default:
        return r;
    }
  };
  H = l.memo(({ items: t, title: s, subTitleBlock: a, animation: r, titleClassName: o, marginTop: i, height: c = "h-[280px]" }) => {
    const [m, n] = le({
      triggerOnce: true,
      threshold: 0.2
    }), x = Ce(r);
    return e.jsxs("div", {
      ref: m,
      className: `catalog__content_block relative ${c} ${i}`,
      children: [
        e.jsx("h2", {
          className: o,
          children: s
        }),
        e.jsxs(w.ul, {
          initial: "hidden",
          animate: n ? "visible" : "hidden",
          variants: x,
          className: "relative z-30 h-full w-[445px] rounded-[20px] bg-[#000]/[0.20] px-10 py-5 backdrop-blur-[10px] max-sm:flex max-sm:w-[300px] max-sm:flex-col max-sm:items-center max-sm:justify-between md:w-[540px] lg:w-[480px]",
          children: [
            e.jsx("li", {
              className: "block_title mb-2.5 max-w-[271px] text-[30px] font-bold uppercase tracking-[1.2px] text-light-turquoise max-sm:text-center max-sm:text-[20px] max-sm:tracking-[0.04em]",
              children: a
            }),
            t.map((h) => e.jsx("li", {
              className: "ml-5 list-disc text-[18px] font-normal uppercase tracking-[.72px] max-sm:text-[14px]",
              children: h
            }, h)),
            e.jsx("li", {
              className: "float-right mt-6",
              children: e.jsx(C, {
                to: "catalog",
                className: "text-standart font-bold uppercase tracking-[1.2px] text-pink underline",
                children: "\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433"
              })
            })
          ]
        })
      ]
    });
  });
  q = ({ title: t, subtitle: s, titleClassName: a, subtitleClassName: r, subtitleWrapperClassName: o, animation: i, renderTitleText: c }) => {
    const [m, n] = le({
      triggerOnce: true,
      threshold: 0.2
    }), x = Ce(i);
    return e.jsxs("div", {
      ref: m,
      className: "title_block relative z-30 flex flex-col max-lg:items-center",
      children: [
        e.jsx(w.h1, {
          initial: "hidden",
          animate: n ? "visible" : "hidden",
          variants: x,
          className: a,
          children: t
        }),
        s && e.jsx("div", {
          className: o,
          children: e.jsx(w.h2, {
            initial: "hidden",
            animate: n ? "visible" : "hidden",
            variants: x,
            transition: {
              duration: 1
            },
            className: r || "",
            children: s
          })
        }),
        c == null ? void 0 : c()
      ]
    });
  };
  f1 = "sm:absolute text-[160px] top-0 right-0 font-bold tracking-[8px] uppercase text-[#0A1717] max-lg:hidden";
  C1 = "absolute -top-10 left-[5rem] text-[160px] font-bold tracking-[8px] uppercase text-[#0A1717] max-lg:hidden z-0";
  j1 = "absolute top-0 -right-[10rem] text-[160px] max-w-[800px] break-words leading-[1.2] font-bold tracking-[8px] uppercase text-[#0A1717] max-[1536px]:max-w-[500px] max-lg:hidden";
  v1 = [
    "\u0431\u0443\u043A\u0435\u0442\u044B",
    "\u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430",
    "\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438"
  ];
  w1 = [
    "\u0421\u0431\u043E\u0440\u043D\u044B\u0435 \u0431\u0443\u043A\u0435\u0442\u044B",
    "\u041C\u043E\u043D\u043E\u0431\u0443\u043A\u0435\u0442\u044B",
    "\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438\u0437 \u0446\u0432\u0435\u0442\u043E\u0432",
    "\u0440\u043E\u0437\u044B",
    "\u0441\u0432\u0430\u0434\u0435\u0431\u043D\u044B\u0435"
  ];
  b1 = [
    "\u0448\u0430\u0440\u044B",
    "\u0438\u0433\u0440\u0443\u0448\u043A\u0438",
    "\u043E\u0442\u043A\u0440\u044B\u0442\u043A\u0438",
    "\u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"
  ];
  _1 = "title text-[100px] font-normal tracking-[2px] font-cormorant uppercase max-sm:text-[40px] max-sm:tracking-[0.02em]";
  N1 = () => e.jsxs(e.Fragment, {
    children: [
      e.jsx(w.p, {
        initial: {
          opacity: 0,
          y: L() <= 768 ? 100 : 0,
          x: L() >= 768 ? -100 : 0
        },
        whileInView: {
          opacity: 1,
          x: 0,
          y: 0
        },
        transition: {
          duration: 1
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        className: "relative z-10 max-w-[540px] text-[20px] font-light leading-[130%] tracking-[.8px] max-sm:hidden lg:ml-[90px]",
        children: "\u0423 \u043D\u0430\u0441 \u0441\u0430\u043C\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0432\u044B\u0431\u043E\u0440 \u0446\u0432\u0435\u0442\u043E\u0432, \u0431\u0443\u043A\u0435\u0442\u043E\u0432, \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043A \u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432. \u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u0430\u043C \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0431\u0443\u043A\u0435\u0442 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F. \u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0430\u0441 \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u0435\u0442 \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C."
      }),
      e.jsx(w.p, {
        initial: {
          opacity: 0,
          x: -100
        },
        whileInView: {
          opacity: 1,
          x: 0
        },
        transition: {
          duration: 1,
          delay: 0.2
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        className: "relative z-10 mt-7 text-[20px] font-light tracking-[.4px] max-sm:hidden lg:ml-[90px]",
        children: "\u041E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u043C\u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430."
      })
    ]
  });
  y1 = l.memo(({ screenWidth: t }) => e.jsx("section", {
    className: "catalog_block__wrapper mt-[100px] lg:h-[1100px]",
    children: e.jsxs("div", {
      className: "container relative mx-auto flex h-full flex-col max-lg:items-center",
      children: [
        e.jsx(g, {
          className: "absolute top-[34rem] z-10 h-[236px] w-[707px] rotate-[32.828deg] rounded-[50%] bg-cherry blur-[125px] max-sm:right-0 max-sm:top-[50rem] max-sm:h-[237px] max-sm:rotate-[-37.57deg]"
        }),
        e.jsx(g, {
          className: "absolute right-[2rem] top-[24rem] z-10 h-[211px] w-[880px] rotate-[32.828deg] rounded-[50%] bg-light-turquoise blur-[125px] max-sm:top-[20rem] max-sm:h-[128px]"
        }),
        e.jsxs("div", {
          className: "catalog_block__top relative flex max-lg:flex-col max-md:justify-center lg:justify-around",
          children: [
            e.jsx(q, {
              title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
              titleClassName: _1,
              animation: t >= 768 ? "fade-right" : "fade-bottom",
              renderTitleText: N1
            }),
            e.jsx(H, {
              items: v1,
              title: "\u0431\u0443\u043A\u0435\u0442\u044B",
              subTitleBlock: "\u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0431\u0443\u043A\u0435\u0442\u044B \u0438\u0437 \u0441\u0443\u0445\u043E\u0446\u0432\u0435\u0442\u043E\u0432",
              animation: t >= 768 ? "fade-left" : "fade-bottom",
              titleClassName: f1,
              marginTop: "lg:mt-36 max-lg:mt-5"
            })
          ]
        }),
        e.jsxs("div", {
          className: "catalog_block__bottom flex justify-around max-lg:mt-10 max-lg:flex-col",
          children: [
            e.jsx(H, {
              items: w1,
              title: "\u0426\u0432\u0435\u0442\u044B",
              subTitleBlock: "\u0426\u0432\u0435\u0442\u044B",
              animation: t >= 768 ? "fade-right" : "fade-bottom",
              titleClassName: C1
            }),
            e.jsx(H, {
              items: b1,
              title: "\u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",
              subTitleBlock: "\u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E",
              animation: t >= 768 ? "fade-left" : "fade-bottom",
              titleClassName: j1,
              marginTop: "mt-8",
              height: "h-[250px]"
            })
          ]
        })
      ]
    })
  }));
  k1 = l.memo(({ step: t, info: s }) => e.jsxs(w.div, {
    className: `content_block flex flex-col gap-3 z-20
        max-sm:[&:nth-child(1)]:items-end max-sm:[&:nth-child(1)]:mr-[3rem] 
        max-sm:[&:nth-child(2)]:items-end max-sm:[&:nth-child(2)]:mr-[6rem] 
        max-sm:[&:nth-child(3)]:items-center 
        max-sm:[&:nth-child(4)]:items-center
        max-sm:[&:nth-child(5)]:items-center`,
    initial: {
      opacity: 0,
      y: 50
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.8
    },
    viewport: {
      once: true,
      amount: 0.2
    },
    children: [
      e.jsxs("h1", {
        className: "title text-pink text-[30px] font-bold tracking-[1.2px] uppercase max-sm:text-[20px] max-sm:tracking-[0.04em] max-sm:[&:nth-child(1)]:mr-[6rem]",
        children: [
          t,
          " \u0448\u0430\u0433"
        ]
      }),
      e.jsx("p", {
        className: "text-[14px] sm:max-w-[260px] font-normal tracking-[.56px] uppercase max-sm:w-[150px]",
        children: s
      })
    ]
  }));
  I1 = [
    {
      step: 1,
      info: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u043A\u0438\u0435 \u0446\u0432\u0435\u0442\u044B \u0438\u043B\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C"
    },
    {
      step: 2,
      info: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437, \u0438 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0432\u0430\u043C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0438\u043B\u0438 \u0432 WhatsApp"
    },
    {
      step: 3,
      info: "\u041D\u0430\u0448\u0438 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u044B \u0431\u0435\u0440\u0435\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0439\u0434\u0443\u0442 \u043A \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u0431\u0443\u043A\u0435\u0442\u0430 \u0446\u0432\u0435\u0442\u043E\u0432 \u0432 \u0441\u0430\u043C\u043E\u043C \u043D\u0430\u0447\u0430\u043B\u0435 \u0434\u043D\u044F \u0438\u043B\u0438 \u043D\u0430\u043A\u0430\u043D\u0443\u043D\u0435"
    },
    {
      step: 4,
      info: "\u041E\u0434\u0438\u043D \u0438\u0437 \u043D\u0430\u0448\u0438\u0445 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u0432 \u0438\u043B\u0438 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u0432\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443. \u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0432\u0430\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 Whats App \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u043A\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D"
    },
    {
      step: 5,
      info: "\u041D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044C \u0446\u0432\u0435\u0442\u0430\u043C\u0438 , \u0435\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u043A\u0430\u0437\u0430\u043B\u0438 \u0438\u0445 \u0434\u043B\u044F \u0434\u043E\u043C\u0430 \u0438\u043B\u0438 \u043B\u044E\u0431\u043E\u0432\u044C\u044E, \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u0434\u0435\u043B\u0438\u043B\u0438\u0441\u044C, \u0435\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u043A\u0430\u0437\u0430\u043B\u0438 \u0434\u043B\u044F \u0434\u0440\u0443\u0433\u0430"
    }
  ];
  X = "title flex items-center text-[100px] h-[100px] font-normal tracking-[2px] uppercase font-cormorant max-md:text-[40px] max-md:tracking-[0.02em] max-md:h-[50px]";
  B1 = l.memo(({ screenWidth: t }) => e.jsxs("div", {
    className: "about_order relative mt-[250px] max-lg:mt-24",
    children: [
      e.jsx(g, {
        className: "max-lg:absolute max-lg:right-3 max-lg:top-[10rem] max-lg:h-[166px] max-lg:w-[390px] max-lg:rotate-[-37.57deg] max-lg:rounded-[50%] max-lg:bg-cherry max-lg:blur-[125px] lg:hidden"
      }),
      e.jsx(g, {
        className: "bg-light-turquoise max-lg:absolute max-lg:-left-[6rem] max-lg:bottom-0 max-lg:h-[274px] max-lg:w-[335px] max-lg:-rotate-[71.859deg] max-lg:blur-[200px] lg:hidden"
      }),
      e.jsx("img", {
        className: "absolute top-10 h-[845px] w-[562px] max-lg:h-[500px] max-lg:w-[250px]",
        srcSet: "./img/PagesImg/HomeImg/IntroImg/flowerBg.png 1280w, ./img/PagesImg/HomeImg/IntroImg/flower-640.png 640w",
        alt: "Flower"
      }),
      e.jsxs("div", {
        className: "about_order__wrapper container mx-auto",
        children: [
          e.jsx(q, {
            title: "\u041A\u0430\u043A \u0441\u0434\u0435\u043B\u0430\u0442\u044C",
            subtitle: "\u0437\u0430\u043A\u0430\u0437",
            titleClassName: X,
            subtitleClassName: X,
            animation: t >= 768 ? "fade-right" : "fade-bottom"
          }),
          e.jsx("div", {
            className: "mb-5 flex justify-center max-lg:ml-[5rem] max-lg:mt-3 sm:ml-28",
            children: e.jsx("div", {
              className: "h-[10px] w-[65px] bg-pink max-lg:mt-5"
            })
          }),
          e.jsxs("div", {
            className: "about_order__content relative flex flex-col max-lg:mt-5 max-lg:h-full max-lg:gap-12 sm:h-[500px] sm:flex-wrap sm:content-end sm:gap-10 sm:gap-x-[110px]",
            children: [
              I1.map((s) => e.jsx(k1, {
                step: s.step,
                info: s.info
              }, s.info)),
              e.jsx("img", {
                className: "absolute right-0 z-10 rotate-[-11.947deg] max-xl:right-[1rem] max-lg:-bottom-[4rem] max-lg:right-5 max-lg:w-[137px] max-lg:rotate-[-10.255deg] sm:-bottom-[4rem]",
                srcSet: "./img/signature.png 1280w, ./img/signature-640.png 640w"
              }),
              e.jsx("div", {
                className: "relative z-10 float-right h-[437px] w-0 border-r-[1px] border-pink max-lg:hidden"
              })
            ]
          })
        ]
      })
    ]
  }));
  L1 = l.memo(({ screenWidth: t }) => e.jsxs("div", {
    className: "intro__title flex items-center containter mx-auto w-full",
    children: [
      e.jsxs("div", {
        className: "intro__content flex-1 flex flex-col",
        children: [
          e.jsx("h1", {
            className: "lg:text-[200px] lg:h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center max-sm:z-30 max-sm:text-[50px] max-sm:tracking-[0.1em] md:text-[120px] max-md:text-[110px]",
            children: "lover"
          }),
          e.jsx("h2", {
            className: "lg:text-[200px] max-sm:z-30 lg:h-[160px] font-light tracking-[40px] uppercase font-cormorant flex justify-center items-center relative sm:z-20 max-sm:text-[50px] max-sm:tracking-[0.1em] md:text-[120px] max-md:text-[110px]",
            children: "Flower"
          })
        ]
      }),
      t > 768 && e.jsx(pt, {})
    ]
  }));
  S1 = ({ onClick: t }) => e.jsxs("button", {
    onClick: t,
    className: "call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-black/20 rounded-xl backdrop-blur-[10px]",
    children: [
      e.jsx(dt, {}),
      e.jsx("p", {
        className: "text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise",
        children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
      })
    ]
  });
  F1 = ({ cartCount: t, onClick: s }) => e.jsxs("button", {
    onClick: s,
    className: "cart relative flex mt-5 bg-black/20 rounded-xl backdrop-blur-[10px] p-[15px]",
    children: [
      e.jsx(ue, {}),
      t > 0 && e.jsxs(e.Fragment, {
        children: [
          e.jsx("svg", {
            className: "absolute right-[8px] top-[10px]",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            children: e.jsx("circle", {
              cx: "8",
              cy: "8.86523",
              r: "8",
              fill: "#43FFD2"
            })
          }),
          e.jsx("p", {
            className: b("text-dark-green absolute text-standart top-[10px]", t >= 10 ? "right-0 left-10" : "right-[13px]"),
            children: t
          })
        ]
      })
    ]
  });
  A1 = l.memo(({ cart: t, screenWidth: s, openModal: a }) => {
    const r = s <= 768;
    return e.jsxs("div", {
      className: "intro relative max-sm:h-[1000px] max-sm:pt-5 sm:h-[1600px] sm:pt-[140px]",
      children: [
        e.jsxs("div", {
          className: "absolute top-0 w-full max-sm:h-[800px] sm:h-[1600px]",
          children: [
            e.jsxs("picture", {
              children: [
                e.jsx("source", {
                  srcSet: "./img/PagesImg/HomeImg/IntroImg/introAdaptive.png 640w",
                  media: "(max-width: 767px)"
                }),
                e.jsx("img", {
                  className: "absolute left-0 top-0 z-10 h-full w-full",
                  src: "./img/PagesImg/HomeImg/IntroImg/intro.png",
                  srcSet: "./img/PagesImg/HomeImg/IntroImg/intro.png 1280w, ./img/PagesImg/HomeImg/IntroImg/introAdaptive.png 640w",
                  loading: "lazy",
                  alt: "flower"
                })
              ]
            }),
            e.jsx("img", {
              srcSet: "./img/PagesImg/HomeImg/IntroImg/shadow.png 1280w, ./img/PagesImg/HomeImg/IntroImg/shadow-640.png 640w",
              className: "absolute bottom-0 z-20 h-[300px] w-full",
              alt: "shadow"
            })
          ]
        }),
        e.jsx(g, {
          className: "absolute left-[16rem] top-[34rem] h-[294px] w-[359px] rotate-[41.599deg] rounded-[50%] bg-light-turquoise blur-[125px] max-sm:left-0 max-sm:top-[300px] max-sm:h-[121px] max-sm:w-[148px] max-sm:blur-[60px]"
        }),
        e.jsx(g, {
          className: "absolute top-[25rem] h-[212px] w-[473px] -rotate-[43.21deg] rounded-[50%] bg-cherry blur-[125px] max-sm:right-[2rem] max-sm:top-[17rem] max-sm:h-[64px] max-sm:w-[131px] max-sm:blur-[25px] sm:right-[25rem]"
        }),
        e.jsxs("div", {
          className: "intro_wrapper container relative mx-auto",
          children: [
            e.jsx(L1, {
              screenWidth: s
            }),
            e.jsxs("div", {
              className: "intro__footer__content relative z-20 mt-10 flex justify-end",
              children: [
                e.jsxs("div", {
                  className: "flex flex-1 flex-col items-center max-sm:mt-[600px]",
                  children: [
                    e.jsx("h2", {
                      className: "text-[20px] font-normal tracking-[0.4px] max-sm:w-[300px] max-sm:text-center",
                      children: "\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0446\u0435\u043D\u0438\u0442 \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u044C \u0438 \u0438\u0437\u044F\u0449\u0435\u0441\u0442\u0432\u043E \u0446\u0432\u0435\u0442\u043A\u0430"
                    }),
                    e.jsx(C, {
                      to: "catalog",
                      className: "hover:text-white mt-12 h-[50px] w-[220px] border border-light-turquoise bg-light-turquoise px-12 py-4 text-center text-standart font-bold uppercase tracking-[1.2px] text-[black] transition-all hover:border-cherry hover:bg-cherry max-sm:w-[300px]",
                      children: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433"
                    })
                  ]
                }),
                !r && e.jsxs("div", {
                  className: "intro__footer_buttons flex-col items-end justify-center max-sm:hidden sm:flex",
                  children: [
                    e.jsx("h3", {
                      className: "phone mt-14 text-[16px] font-normal uppercase tracking-[1.6px] text-light-turquoise",
                      children: "+375 (29) 113-69-69"
                    }),
                    e.jsx(S1, {
                      onClick: () => a(v.Modal)
                    }),
                    e.jsx(F1, {
                      cartCount: t.length,
                      onClick: () => a(v.Cart)
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  });
  O1 = [
    {
      src: "./img/PagesImg/HomeImg/OccasionImg/bouquet.png",
      alt: "bouquet"
    },
    {
      src: "./img/PagesImg/HomeImg/OccasionImg/cloth.png",
      alt: "cloth"
    },
    {
      src: "./img/PagesImg/HomeImg/OccasionImg/decoration.png",
      alt: "decoration"
    }
  ];
  q1 = () => e.jsx("ul", {
    className: "flex gap-8",
    children: O1.map((t, s) => e.jsx("li", {
      children: e.jsx(w.img, {
        src: t.src,
        alt: t.alt,
        initial: {
          opacity: 0,
          x: 100
        },
        whileInView: {
          opacity: 1,
          x: 0
        },
        transition: {
          duration: 0.8
        },
        viewport: {
          once: true,
          amount: 0.2
        }
      })
    }, s))
  });
  M1 = l.memo(({ screenWidth: t }) => e.jsx("ul", {
    className: "flex max-w-[275px] flex-col gap-5",
    children: [
      "\u0443\u0447\u0442\u0435\u043C \u0434\u0430\u0436\u0435 \u0441\u0430\u043C\u044B\u0435 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F",
      "\u043F\u043E\u0434\u0431\u0435\u0440\u0435\u043C \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0438\u0435 \u0446\u0432\u0435\u0442\u044B \u0438 \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0443\u043A\u0435\u0442 \u0438\u043B\u0438 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044E",
      "\u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0438\u043B\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"
    ].map((s, a) => e.jsx(w.li, {
      initial: {
        opacity: 0,
        y: t <= 768 ? 100 : 0,
        x: t >= 768 ? -100 : 0
      },
      whileInView: {
        opacity: 1,
        x: 0,
        y: 0
      },
      transition: {
        duration: 0.6,
        delay: a * 0.2
      },
      viewport: {
        once: true,
        amount: 0.2
      },
      className: "list-disc text-[14px] font-normal uppercase leading-normal tracking-[.56px]",
      children: s
    }, a))
  }));
  E1 = "flex items-center lg:ml-[130px] lg:gap-7 max-lg:gap-2";
  ee = "text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-md:text-[40px] max-md:tracking-[0.02em]";
  P1 = l.memo(({ screenWidth: t }) => e.jsxs("div", {
    className: "occasion_block relative mt-[160px] max-lg:mt-[6rem] sm:h-[1000px]",
    children: [
      t > 640 && e.jsx(ft, {}),
      e.jsxs("div", {
        className: "occasion_block__wrapper container mx-auto",
        children: [
          e.jsxs("div", {
            className: "occasion_block__top flex max-lg:justify-center lg:justify-between",
            children: [
              e.jsx(q, {
                title: "\u043E\u0441\u043E\u0431\u0435\u043D\u043D\u044B\u0439",
                subtitle: "\u043F\u043E\u0432\u043E\u0434?",
                titleClassName: ee,
                subtitleClassName: ee,
                animation: t >= 768 ? "fade-right" : "fade-bottom",
                subtitleWrapperClassName: E1
              }),
              e.jsx("div", {
                className: "img_block relative z-20 mr-[130px] flex items-center justify-center max-lg:hidden",
                children: e.jsx(w.img, {
                  initial: {
                    opacity: 0,
                    x: 100
                  },
                  whileInView: {
                    opacity: 1,
                    x: 0
                  },
                  transition: {
                    duration: 1
                  },
                  viewport: {
                    once: true,
                    amount: 0.2
                  },
                  className: "h-[223px] w-[255px]",
                  src: "./img/PagesImg/HomeImg/OccasionImg/packing.png",
                  alt: "packing"
                })
              })
            ]
          }),
          e.jsxs("div", {
            className: "occasion_block__bottom relative mt-8 flex justify-around",
            children: [
              e.jsxs("div", {
                className: "content_block flex flex-col gap-8",
                children: [
                  e.jsx(w.p, {
                    initial: {
                      opacity: 0,
                      y: t <= 768 ? 100 : 0,
                      x: t >= 768 ? -100 : 0
                    },
                    whileInView: {
                      opacity: 1,
                      x: 0,
                      y: 0
                    },
                    transition: {
                      duration: 1
                    },
                    viewport: {
                      once: true,
                      amount: 0.2
                    },
                    className: "max-w-[255px] text-[14px] font-normal uppercase tracking-[.56px] max-lg:w-[300px] max-lg:tracking-[0.02em] sm:leading-normal",
                    children: "\u041C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0438\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u043C\u043E\u0449\u044C \u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0443\u043A\u0435\u0442, \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441, \u0431\u044E\u0434\u0436\u0435\u0442 \u0438 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443."
                  }),
                  e.jsx(M1, {
                    screenWidth: t
                  }),
                  t > 1024 ? e.jsx(Ct, {}) : e.jsx(jt, {}),
                  e.jsx(C, {
                    to: "catalog",
                    className: "h-[50px] bg-light-turquoise p-4 text-center text-[12px] font-bold uppercase tracking-[1.2px] text-[black] transition hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
                    children: "\u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0443\u043A\u0435\u0442"
                  })
                ]
              }),
              e.jsx("div", {
                className: "img_block max-md:hidden",
                children: e.jsx(q1, {})
              })
            ]
          })
        ]
      })
    ]
  }));
  T1 = ({ screenWidth: t }) => e.jsxs("div", {
    className: "z-20 flex flex-col max-sm:ml-2 max-sm:mt-[8rem] max-sm:gap-5 sm:gap-14",
    children: [
      e.jsx(w.div, {
        initial: {
          width: 0
        },
        whileInView: {
          width: "100%"
        },
        transition: {
          duration: 1
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        className: "line border-t-[1px] border-light-turquoise max-sm:w-[96px] sm:max-w-[255px]"
      }),
      e.jsx(w.p, {
        initial: {
          opacity: 0,
          y: t <= 768 ? 100 : 0,
          x: t >= 768 ? -100 : 0
        },
        whileInView: {
          opacity: 1,
          x: 0,
          y: 0
        },
        transition: {
          duration: 1
        },
        viewport: {
          once: true,
          amount: 0.2
        },
        className: "max-sm:text-[14px] max-sm:font-normal max-sm:tracking-[0.04em] md:w-[255px]",
        children: "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441, \u0437\u0430\u043A\u0430\u0437, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0436\u0430\u043B\u043E\u0431\u0443 \u0447\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438, \u0438 \u043D\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442."
      })
    ]
  });
  D1 = () => {
    const t = k(), { register: s, handleSubmit: a, formState: { errors: r } } = ae(), o = () => {
      t(N({
        modalType: v.Alert,
        isOpen: true
      })), t(V({
        severity: "success"
      }));
    }, i = (m) => {
      o(), console.log(m);
    }, c = (m) => console.log(m);
    return e.jsx("div", {
      className: "question_block__form relative flex flex-col z-20 md:items-end mt-8 max-lg:items-center md:mr-[1rem]",
      children: e.jsxs("form", {
        onSubmit: a(i, c),
        className: "sm:w-[455px] flex flex-col gap-3 max-lg:max-w-[400px]",
        children: [
          e.jsx("input", {
            className: "form__input w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal trans tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
            type: "text",
            placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
            ...s("name", {
              required: true
            }),
            "aria-invalid": !!r.name
          }),
          e.jsx("input", {
            className: "form__input w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
            type: "tel",
            placeholder: "+7 (977) 777-77-77",
            ...s("tel", {
              required: true
            }),
            "aria-invalid": !!r.tel
          }),
          e.jsx("input", {
            className: "form__input w-full h-[120px] border border-light-turquoise bg-[#0F2222] placeholder:-translate-y-8 p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
            type: "text",
            placeholder: "\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
            ...s("comment"),
            "aria-invalid": !!r.comment
          }),
          e.jsx("button", {
            className: "w-[255px] mt-2 transition-all text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
            children: "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
          }),
          e.jsxs("p", {
            className: "max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed",
            children: [
              "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441",
              e.jsx("span", {
                className: "text-pink underline ml-1",
                children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
              })
            ]
          })
        ]
      })
    });
  };
  je = "title flex items-center sm:h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase max-sm:text-[40px] max-sm:tracking-[0.02em]";
  R1 = `${je} sm:ml-24`;
  H1 = l.memo(({ screenWidth: t }) => {
    const s = t > 768;
    return e.jsxs("div", {
      className: "question_block relative h-[850px] bg-[#0F2222] max-lg:mt-[6rem] max-sm:h-[800px]",
      children: [
        e.jsxs("picture", {
          children: [
            e.jsx("source", {
              srcSet: "./img/PagesImg/HomeImg/QuestionImg/leaves-640.png 640w",
              media: "(max-width: 767px)"
            }),
            e.jsx("img", {
              className: "absolute top-0 z-20 object-fill max-md:right-0 max-md:h-[379px] max-md:w-[252px] md:left-0 lg:h-[1038px] lg:w-[691px]",
              src: "./img/PagesImg/HomeImg/QuestionImg/leaves.png",
              srcSet: "./img/PagesImg/HomeImg/QuestionImg/leaves.png 1280w, ./img/PagesImg/HomeImg/QuestionImg/leaves-640.png 640w",
              loading: "lazy",
              alt: "flower"
            })
          ]
        }),
        e.jsxs("picture", {
          children: [
            e.jsx("source", {
              srcSet: "./img/PagesImg/HomeImg/QuestionImg/questions-640.png 640w",
              media: "(max-width: 767px)"
            }),
            e.jsx("img", {
              className: "absolute z-30 max-xl:bottom-[1rem] max-xl:right-[10rem] max-lg:right-[5rem] max-lg:top-[12rem] max-lg:rotate-[-18.444deg] max-md:right-0 max-md:top-[5rem] max-sm:right-[9rem] max-sm:top-[8rem] max-sm:w-[133px] xl:h-[200px] xl:w-[305px]",
              src: "./img/PagesImg/HomeImg/QuestionImg/questions.png",
              srcSet: "./img/PagesImg/HomeImg/QuestionImg/questions.png 1280w, ./img/PagesImg/HomeImg/QuestionImg/questions-640.png 640w",
              loading: "lazy",
              alt: "Questions Decoration"
            })
          ]
        }),
        s ? e.jsx(vt, {}) : e.jsx(bt, {}),
        s ? e.jsx(wt, {}) : e.jsx(_t, {}),
        e.jsxs("div", {
          className: "question_block__wrapper container sm:mx-auto",
          children: [
            e.jsxs("div", {
              className: "question_block__top flex justify-between pt-8 max-lg:flex-col sm:items-center",
              children: [
                e.jsx(q, {
                  title: "\u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C",
                  subtitle: "\u0432\u043E\u043F\u0440\u043E\u0441\u044B?",
                  titleClassName: je,
                  subtitleClassName: R1,
                  animation: t >= 768 ? "fade-right" : "fade-bottom"
                }),
                e.jsx(T1, {
                  screenWidth: t
                })
              ]
            }),
            e.jsx(D1, {})
          ]
        })
      ]
    });
  });
  ve = "title relative z-20 flex items-center h-[100px] text-[100px] font-normal tracking-[2px] uppercase font-cormorant max-lg:text-[40px] max-lg:tracking-[0.02em] max-lg:h-[50px]";
  z1 = "subtitle relative z-20 flex justify-center items-center sm:mt-5 text-[20px] font-light tracking-[.4px] sm:mb-20 max-lg:text-[14px] max-lg:tracking-[0.04em]";
  Z1 = `${ve} justify-center`;
  V1 = () => e.jsx(e.Fragment, {
    children: e.jsx(w.h3, {
      initial: {
        opacity: 0,
        y: L() <= 768 ? 100 : 0,
        x: L() >= 768 ? -100 : 0
      },
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0
      },
      transition: {
        duration: L() >= 768 ? 2 : 1
      },
      viewport: {
        once: true,
        amount: 0.2
      },
      className: z1,
      children: "\u0421\u0430\u043C\u044B\u0435 \u043B\u044E\u0431\u0438\u043C\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
    })
  });
  G1 = () => {
    const t = k(), s = L(), { cartItems: a } = y(G), { items: r } = y(it), o = l.useCallback((i) => t(N({
      modalType: i,
      isOpen: true
    })), [
      t
    ]);
    return e.jsxs("div", {
      className: "wrapper bg-[#040A0A]",
      children: [
        e.jsx(A1, {
          cart: a,
          openModal: o,
          screenWidth: s
        }),
        e.jsx(y1, {
          screenWidth: s
        }),
        e.jsxs("div", {
          className: "popular_bouquets relative",
          children: [
            s > 768 && e.jsx(g, {
              className: "absolute right-0 z-10 h-[750px] w-[60%] bg-[url('./img/PagesImg/HomeImg/IntroImg/BouquetsBG.png')]"
            }),
            s > 768 && e.jsx(g, {
              className: "absolute left-0 z-10 h-[800px] w-[500px] rounded-[40%] bg-[#43FFD2]/[0.47] blur-[125px]"
            }),
            s > 768 && e.jsx(g, {
              className: "absolute right-[30rem] top-[22rem] z-0 h-[1007px] w-[1001px] rounded-[40%] bg-[#7D2253]/[0.46] blur-[125px] max-[1440px]:right-[13rem]"
            }),
            e.jsxs("div", {
              className: "popular_bouquets__wrapper container relative mx-auto max-lg:mt-[6rem] max-lg:flex max-lg:flex-col",
              children: [
                e.jsx(q, {
                  title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",
                  subtitle: "\u0431\u0443\u043A\u0435\u0442\u044B",
                  animation: s >= 768 ? "fade-right" : "fade-bottom",
                  titleClassName: ve,
                  subtitleClassName: Z1,
                  renderTitleText: V1
                }),
                s > 500 ? e.jsx(m1, {
                  bouquets: r,
                  screenWidth: s
                }) : e.jsx("div", {
                  className: "mt-6 flex flex-col items-center gap-10",
                  children: r.slice(0, 3).map((i) => e.jsx(fe, {
                    id: i.id,
                    name: i.name,
                    cost: i.cost,
                    imageUrl: i.imageUrl,
                    filters: i.filters,
                    categories: i.categories,
                    imgClassName: "h-[335px] w-[300px]"
                  }))
                }),
                e.jsxs("div", {
                  className: "popular_bouquets__link ml-3 mt-16 flex items-center",
                  children: [
                    e.jsx(C, {
                      to: "catalog",
                      className: "link text-[12px] font-bold uppercase tracking-[1.2px] text-pink underline",
                      children: "\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433"
                    }),
                    e.jsx(gt, {})
                  ]
                })
              ]
            })
          ]
        }),
        e.jsx(B1, {
          screenWidth: s
        }),
        e.jsx(P1, {
          screenWidth: s
        }),
        e.jsx(H1, {
          screenWidth: s
        }),
        e.jsx(h1, {
          screenWidth: s
        })
      ]
    });
  };
  U1 = () => e.jsxs("div", {
    className: "layout bg-[#040A0A] flex flex-col justify-between h-[100vh]",
    children: [
      e.jsx(Ht, {}),
      e.jsx("div", {
        children: e.jsx(Oe, {})
      }),
      e.jsx(Qt, {})
    ]
  });
  $1 = l.lazy(() => _(() => import("./index-CEBBSjgO.js"), __vite__mapDeps([0,1,2,3,4])));
  Q1 = l.lazy(() => _(() => import("./index-BDmUrxLb.js"), __vite__mapDeps([5,1,2,4,3])));
  W1 = l.lazy(() => _(() => import("./index-Bsgy-FKQ.js"), __vite__mapDeps([6,1,2,3,4])));
  Y1 = l.lazy(() => _(() => import("./index-CIIaK8L4.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([7,1,2,3,4])));
  K1 = l.lazy(() => _(() => import("./index-CIOvp2sS.js"), __vite__mapDeps([8,1,2,3,4])));
  J1 = l.lazy(() => _(() => import("./index-BS0uFe2Q.js"), __vite__mapDeps([9,1,2,3,4])));
  X1 = l.lazy(() => _(() => import("./index-CyGvSHNP.js"), __vite__mapDeps([10,1,2,4,3])));
  e2 = l.lazy(() => _(() => import("./index-uF4ggOrh.js"), __vite__mapDeps([11,1,2,4])));
  t2 = l.lazy(() => _(() => import("./index-ofKoiS9e.js"), __vite__mapDeps([12,1,2,4])));
  s2 = l.lazy(() => _(() => import("./index-C-SBp1M3.js"), __vite__mapDeps([13,1,2,4])));
  a2 = l.lazy(() => _(() => import("./index-HuDZA0JD.js"), __vite__mapDeps([14,1,2,4])));
  l2 = l.lazy(() => _(() => import("./index-BpnorXUV.js"), __vite__mapDeps([15,1,2])));
  j = {
    HOME: "/",
    CATALOG: "/catalog",
    BOUQUET: "/catalog/bouquet/:id",
    DELIVERY: "/delivery",
    ABOUT_US: "/aboutUs",
    CONTACTS: "/contacts",
    FAQ: "/FAQ",
    CORPORATE: "/corporate",
    SEARCH: "/search/:searchValue?",
    ORDER: "/order"
  };
  r2 = [
    j.HOME,
    j.CATALOG,
    "/catalog/bouquet"
  ];
  function i2() {
    const t = k(), s = se(), { category: a, filtersId: r, isConfirm: o, sortOption: i, fieldPriceValue: c } = y(lt);
    return l.useEffect(() => {
      window.scrollTo(0, 0);
    }, [
      s.pathname
    ]), l.useEffect(() => {
      (async () => {
        try {
          const n = {
            sortProperty: i.sortProperty,
            category: a,
            fieldPriceValue: c,
            ...s.pathname === j.CATALOG && {
              filtersId: r
            }
          }, x = s.pathname.split("/").slice(0, 3).join("/");
          r2.includes(x) && (await t(E(n)).unwrap(), t(Ue(false)));
        } catch (n) {
          console.error("Error fetching bouquets:", n), t(N({
            modalType: v.Alert,
            isOpen: true
          })), t(V({
            severity: "error"
          }));
        }
      })();
    }, [
      t,
      i.sortProperty,
      a,
      s,
      o
    ]), e.jsxs(e.Fragment, {
      children: [
        e.jsx(l.Suspense, {
          fallback: e.jsx("div", {
            className: "loading",
            children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
          }),
          children: e.jsx(qe, {
            children: e.jsxs(f, {
              path: j.HOME,
              element: e.jsx(U1, {}),
              children: [
                e.jsx(f, {
                  index: true,
                  element: e.jsx(G1, {})
                }),
                e.jsx(f, {
                  path: "*",
                  element: e.jsx(s2, {})
                }),
                e.jsx(f, {
                  path: j.CATALOG,
                  element: e.jsx(X1, {})
                }),
                e.jsx(f, {
                  path: j.DELIVERY,
                  element: e.jsx($1, {})
                }),
                e.jsx(f, {
                  path: j.ABOUT_US,
                  element: e.jsx(W1, {})
                }),
                e.jsx(f, {
                  path: j.CONTACTS,
                  element: e.jsx(Y1, {})
                }),
                e.jsx(f, {
                  path: j.FAQ,
                  element: e.jsx(K1, {})
                }),
                e.jsx(f, {
                  path: j.CORPORATE,
                  element: e.jsx(J1, {})
                }),
                e.jsx(f, {
                  path: j.SEARCH,
                  element: e.jsx(e2, {})
                }),
                e.jsx(f, {
                  path: j.ORDER,
                  element: e.jsx(Q1, {})
                }),
                e.jsxs(f, {
                  path: j.BOUQUET,
                  element: e.jsx(t2, {}),
                  children: [
                    e.jsx(f, {
                      index: true,
                      element: e.jsx(l2, {})
                    }),
                    e.jsx(f, {
                      path: "reviews",
                      element: e.jsx(a2, {})
                    })
                  ]
                })
              ]
            })
          })
        }),
        e.jsx(Kt, {}),
        e.jsx(a1, {}),
        e.jsx(n1, {}),
        e.jsx(x1, {})
      ]
    });
  }
  Me.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode, {
    children: e.jsx(Pe, {
      children: e.jsx(Re, {
        store: at,
        children: e.jsx(i2, {})
      })
    })
  }));
});
export {
  p2 as A,
  Xt as C,
  g as D,
  d as F,
  v as M,
  v2 as P,
  pt as S,
  __tla,
  V as a,
  L as b,
  Ue as c,
  lt as d,
  d2 as e,
  c2 as f,
  x2 as g,
  dt as h,
  ue as i,
  oe as j,
  C2 as k,
  it as l,
  G as m,
  ce as n,
  m2 as o,
  fe as p,
  f2 as q,
  h2 as r,
  N as s,
  j2 as t,
  k as u,
  pe as v,
  mt as w,
  g2 as x,
  Je as y,
  m1 as z
};
