var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as S, w as te, p as F, i as H, a as re } from "./vendor-DsNSJXVB.js";
function ne(e) {
  e();
}
function oe() {
  let e = null, t = null;
  return { clear() {
    e = null, t = null;
  }, notify() {
    ne(() => {
      let r = e;
      for (; r; ) r.callback(), r = r.next;
    });
  }, get() {
    const r = [];
    let n = e;
    for (; n; ) r.push(n), n = n.next;
    return r;
  }, subscribe(r) {
    let n = true;
    const o = t = { callback: r, next: null, prev: t };
    return o.prev ? o.prev.next = o : e = o, function() {
      !n || e === null || (n = false, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
    };
  } };
}
var B = { notify() {
}, get: () => [] };
function ie(e, t) {
  let r, n = B, o = 0, s = false;
  function u(x) {
    c();
    const w = n.subscribe(x);
    let m = false;
    return () => {
      m || (m = true, w(), l());
    };
  }
  function a() {
    n.notify();
  }
  function i() {
    g.onStateChange && g.onStateChange();
  }
  function f() {
    return s;
  }
  function c() {
    o++, r || (r = e.subscribe(i), n = oe());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = B);
  }
  function y() {
    s || (s = true, c());
  }
  function h() {
    s && (s = false, l());
  }
  const g = { addNestedSub: u, notifyNestedSubs: a, handleChangeWrapper: i, isSubscribed: f, trySubscribe: y, tryUnsubscribe: h, getListeners: () => n };
  return g;
}
var se = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ue = se(), ce = () => typeof navigator < "u" && navigator.product === "ReactNative", ae = ce(), fe = () => ue || ae ? S.useLayoutEffect : S.useEffect, le = fe(), de = Symbol.for("react-redux-context"), pe = typeof globalThis < "u" ? globalThis : {};
function he() {
  if (!S.createContext) return {};
  const e = pe[de] ?? (pe[de] = /* @__PURE__ */ new Map());
  let t = e.get(S.createContext);
  return t || (t = S.createContext(null), e.set(S.createContext, t)), t;
}
var k = he();
function ye(e) {
  const { children: t, context: r, serverState: n, store: o } = e, s = S.useMemo(() => {
    const i = ie(o);
    return { store: o, subscription: i, getServerState: n ? () => n : void 0 };
  }, [o, n]), u = S.useMemo(() => o.getState(), [o]);
  le(() => {
    const { subscription: i } = s;
    return i.onStateChange = i.notifyNestedSubs, i.trySubscribe(), u !== o.getState() && i.notifyNestedSubs(), () => {
      i.tryUnsubscribe(), i.onStateChange = void 0;
    };
  }, [s, u]);
  const a = r || k;
  return S.createElement(a.Provider, { value: s }, t);
}
var tt = ye;
function I(e = k) {
  return function() {
    return S.useContext(e);
  };
}
var z = I();
function G(e = k) {
  const t = e === k ? z : I(e), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, { withTypes: () => r }), r;
}
var be = G();
function we(e = k) {
  const t = e === k ? be : G(e), r = () => t().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var rt = we(), me = (e, t) => e === t;
function ge(e = k) {
  const t = e === k ? z : I(e), r = (n, o = {}) => {
    const { equalityFn: s = me } = typeof o == "function" ? { equalityFn: o } : o, u = t(), { store: a, subscription: i, getServerState: f } = u;
    S.useRef(true);
    const c = S.useCallback({ [n.name](y) {
      return n(y);
    } }[n.name], [n]), l = te.useSyncExternalStoreWithSelector(i.addNestedSub, a.getState, f || a.getState, c, s);
    return S.useDebugValue(l), l;
  };
  return Object.assign(r, { withTypes: () => r }), r;
}
var nt = ge();
function C(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ee = typeof Symbol == "function" && Symbol.observable || "@@observable", U = Ee, _ = () => Math.random().toString(36).substring(7).split("").join("."), ve = { INIT: `@@redux/INIT${_()}`, REPLACE: `@@redux/REPLACE${_()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_()}` }, A = ve;
function L(e) {
  if (typeof e != "object" || e === null) return false;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function X(e, t, r) {
  if (typeof e != "function") throw new Error(C(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(C(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function") throw new Error(C(1));
    return r(X)(e, t);
  }
  let n = e, o = t, s = /* @__PURE__ */ new Map(), u = s, a = 0, i = false;
  function f() {
    u === s && (u = /* @__PURE__ */ new Map(), s.forEach((w, m) => {
      u.set(m, w);
    }));
  }
  function c() {
    if (i) throw new Error(C(3));
    return o;
  }
  function l(w) {
    if (typeof w != "function") throw new Error(C(4));
    if (i) throw new Error(C(5));
    let m = true;
    f();
    const d = a++;
    return u.set(d, w), function() {
      if (m) {
        if (i) throw new Error(C(6));
        m = false, f(), u.delete(d), s = null;
      }
    };
  }
  function y(w) {
    if (!L(w)) throw new Error(C(7));
    if (typeof w.type > "u") throw new Error(C(8));
    if (typeof w.type != "string") throw new Error(C(17));
    if (i) throw new Error(C(9));
    try {
      i = true, o = n(o, w);
    } finally {
      i = false;
    }
    return (s = u).forEach((d) => {
      d();
    }), w;
  }
  function h(w) {
    if (typeof w != "function") throw new Error(C(10));
    n = w, y({ type: A.REPLACE });
  }
  function g() {
    const w = l;
    return { subscribe(m) {
      if (typeof m != "object" || m === null) throw new Error(C(11));
      function d() {
        const E = m;
        E.next && E.next(c());
      }
      return d(), { unsubscribe: w(d) };
    }, [U]() {
      return this;
    } };
  }
  return y({ type: A.INIT }), { dispatch: y, subscribe: l, getState: c, replaceReducer: h, [U]: g };
}
function Ce(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: A.INIT }) > "u") throw new Error(C(12));
    if (typeof r(void 0, { type: A.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(C(13));
  });
}
function Se(e) {
  const t = Object.keys(e), r = {};
  for (let s = 0; s < t.length; s++) {
    const u = t[s];
    typeof e[u] == "function" && (r[u] = e[u]);
  }
  const n = Object.keys(r);
  let o;
  try {
    Ce(r);
  } catch (s) {
    o = s;
  }
  return function(u = {}, a) {
    if (o) throw o;
    let i = false;
    const f = {};
    for (let c = 0; c < n.length; c++) {
      const l = n[c], y = r[l], h = u[l], g = y(h, a);
      if (typeof g > "u") throw a && a.type, new Error(C(14));
      f[l] = g, i = i || g !== h;
    }
    return i = i || n.length !== Object.keys(u).length, i ? f : u;
  };
}
function N(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function xe(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let s = () => {
      throw new Error(C(15));
    };
    const u = { getState: o.getState, dispatch: (i, ...f) => s(i, ...f) }, a = e.map((i) => i(u));
    return s = N(...a)(o.dispatch), { ...o, dispatch: s };
  };
}
function Re(e) {
  return L(e) && "type" in e && typeof e.type == "string";
}
function Q(e) {
  return ({ dispatch: r, getState: n }) => (o) => (s) => typeof s == "function" ? s(r, n, e) : o(s);
}
var Te = Q(), Me = Q, ke = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0) return typeof arguments[0] == "object" ? N : N.apply(null, arguments);
}, Oe = (e) => e && typeof e.match == "function";
function j(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o) throw new Error(T(0));
      return { type: e, payload: o.payload, ..."meta" in o && { meta: o.meta }, ..."error" in o && { error: o.error } };
    }
    return { type: e, payload: n[0] };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Re(n) && n.type === e, r;
}
var J = class O extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, O.prototype);
  }
  static get [Symbol.species]() {
    return O;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new O(...t[0].concat(this)) : new O(...t.concat(this));
  }
};
function V(e) {
  return H(e) ? F(e, () => {
  }) : e;
}
function W(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function je(e) {
  return typeof e == "boolean";
}
var De = () => function(t) {
  const { thunk: r = true, immutableCheck: n = true, serializableCheck: o = true, actionCreatorCheck: s = true } = t ?? {};
  let u = new J();
  return r && (je(r) ? u.push(Te) : u.push(Me(r.extraArgument))), u;
}, Ae = "RTK_autoBatch", $ = (e) => (t) => {
  setTimeout(t, e);
}, Ne = (e = { type: "raf" }) => (t) => (...r) => {
  const n = t(...r);
  let o = true, s = false, u = false;
  const a = /* @__PURE__ */ new Set(), i = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : $(10) : e.type === "callback" ? e.queueNotification : $(e.timeout), f = () => {
    u = false, s && (s = false, a.forEach((c) => c()));
  };
  return Object.assign({}, n, { subscribe(c) {
    const l = () => o && c(), y = n.subscribe(l);
    return a.add(c), () => {
      y(), a.delete(c);
    };
  }, dispatch(c) {
    var _a;
    try {
      return o = !((_a = c == null ? void 0 : c.meta) == null ? void 0 : _a[Ae]), s = !o, s && (u || (u = true, i(f))), n.dispatch(c);
    } finally {
      o = true;
    }
  } });
}, _e = (e) => function(r) {
  const { autoBatch: n = true } = r ?? {};
  let o = new J(e);
  return n && o.push(Ne(typeof n == "object" ? n : void 0)), o;
};
function ot(e) {
  const t = De(), { reducer: r = void 0, middleware: n, devTools: o = true, preloadedState: s = void 0, enhancers: u = void 0 } = e || {};
  let a;
  if (typeof r == "function") a = r;
  else if (L(r)) a = Se(r);
  else throw new Error(T(1));
  let i;
  typeof n == "function" ? i = n(t) : i = t();
  let f = N;
  o && (f = ke({ trace: false, ...typeof o == "object" && o }));
  const c = xe(...i), l = _e(c);
  let y = typeof u == "function" ? u(l) : l();
  const h = f(...y);
  return X(a, s, h);
}
function Y(e) {
  const t = {}, r = [];
  let n;
  const o = { addCase(s, u) {
    const a = typeof s == "string" ? s : s.type;
    if (!a) throw new Error(T(28));
    if (a in t) throw new Error(T(29));
    return t[a] = u, o;
  }, addMatcher(s, u) {
    return r.push({ matcher: s, reducer: u }), o;
  }, addDefaultCase(s) {
    return n = s, o;
  } };
  return e(o), [t, r, n];
}
function Pe(e) {
  return typeof e == "function";
}
function Ie(e, t) {
  let [r, n, o] = Y(t), s;
  if (Pe(e)) s = () => V(e());
  else {
    const a = V(e);
    s = () => a;
  }
  function u(a = s(), i) {
    let f = [r[i.type], ...n.filter(({ matcher: c }) => c(i)).map(({ reducer: c }) => c)];
    return f.filter((c) => !!c).length === 0 && (f = [o]), f.reduce((c, l) => {
      if (l) if (re(c)) {
        const h = l(c, i);
        return h === void 0 ? c : h;
      } else {
        if (H(c)) return F(c, (y) => l(y, i));
        {
          const y = l(c, i);
          if (y === void 0) {
            if (c === null) return c;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return y;
        }
      }
      return c;
    }, a);
  }
  return u.getInitialState = s, u;
}
var Le = (e, t) => Oe(e) ? e.match(t) : e(t);
function Be(...e) {
  return (t) => e.some((r) => Le(r, t));
}
var Ue = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ve = (e = 21) => {
  let t = "", r = e;
  for (; r--; ) t += Ue[Math.random() * 64 | 0];
  return t;
}, We = ["name", "message", "stack", "code"], P = class {
  constructor(e, t) {
    __publicField(this, "_type");
    this.payload = e, this.meta = t;
  }
}, q = class {
  constructor(e, t) {
    __publicField(this, "_type");
    this.payload = e, this.meta = t;
  }
}, $e = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of We) typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return { message: String(e) };
}, K = "External signal was aborted", it = (() => {
  function e(t, r, n) {
    const o = j(t + "/fulfilled", (i, f, c, l) => ({ payload: i, meta: { ...l || {}, arg: c, requestId: f, requestStatus: "fulfilled" } })), s = j(t + "/pending", (i, f, c) => ({ payload: void 0, meta: { ...c || {}, arg: f, requestId: i, requestStatus: "pending" } })), u = j(t + "/rejected", (i, f, c, l, y) => ({ payload: l, error: (n && n.serializeError || $e)(i || "Rejected"), meta: { ...y || {}, arg: c, requestId: f, rejectedWithValue: !!l, requestStatus: "rejected", aborted: (i == null ? void 0 : i.name) === "AbortError", condition: (i == null ? void 0 : i.name) === "ConditionError" } }));
    function a(i, { signal: f } = {}) {
      return (c, l, y) => {
        const h = (n == null ? void 0 : n.idGenerator) ? n.idGenerator(i) : Ve(), g = new AbortController();
        let x, w;
        function m(p) {
          w = p, g.abort();
        }
        f && (f.aborted ? m(K) : f.addEventListener("abort", () => m(K), { once: true }));
        const d = async function() {
          var _a, _b;
          let p;
          try {
            let v = (_a = n == null ? void 0 : n.condition) == null ? void 0 : _a.call(n, i, { getState: l, extra: y });
            if (Ke(v) && (v = await v), v === false || g.signal.aborted) throw { name: "ConditionError", message: "Aborted due to condition callback returning false." };
            const R = new Promise((b, M) => {
              x = () => {
                M({ name: "AbortError", message: w || "Aborted" });
              }, g.signal.addEventListener("abort", x);
            });
            c(s(h, i, (_b = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : _b.call(n, { requestId: h, arg: i }, { getState: l, extra: y }))), p = await Promise.race([R, Promise.resolve(r(i, { dispatch: c, getState: l, extra: y, requestId: h, signal: g.signal, abort: m, rejectWithValue: (b, M) => new P(b, M), fulfillWithValue: (b, M) => new q(b, M) })).then((b) => {
              if (b instanceof P) throw b;
              return b instanceof q ? o(b.payload, h, i, b.meta) : o(b, h, i);
            })]);
          } catch (v) {
            p = v instanceof P ? u(null, h, i, v.payload, v.meta) : u(v, h, i);
          } finally {
            x && g.signal.removeEventListener("abort", x);
          }
          return n && !n.dispatchConditionRejection && u.match(p) && p.meta.condition || c(p), p;
        }();
        return Object.assign(d, { abort: m, requestId: h, arg: i, unwrap() {
          return d.then(qe);
        } });
      };
    }
    return Object.assign(a, { pending: s, rejected: u, fulfilled: o, settled: Be(u, o), typePrefix: t });
  }
  return e.withTypes = () => e, e;
})();
function qe(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Ke(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Fe = Symbol.for("rtk-slice-createasyncthunk");
function He(e, t) {
  return `${e}/${t}`;
}
function ze({ creators: e } = {}) {
  var _a;
  const t = (_a = e == null ? void 0 : e.asyncThunk) == null ? void 0 : _a[Fe];
  return function(n) {
    const { name: o, reducerPath: s = o } = n;
    if (!o) throw new Error(T(11));
    const u = (typeof n.reducers == "function" ? n.reducers(Xe()) : n.reducers) || {}, a = Object.keys(u), i = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, f = { addCase(d, p) {
      const E = typeof d == "string" ? d : d.type;
      if (!E) throw new Error(T(12));
      if (E in i.sliceCaseReducersByType) throw new Error(T(13));
      return i.sliceCaseReducersByType[E] = p, f;
    }, addMatcher(d, p) {
      return i.sliceMatchers.push({ matcher: d, reducer: p }), f;
    }, exposeAction(d, p) {
      return i.actionCreators[d] = p, f;
    }, exposeCaseReducer(d, p) {
      return i.sliceCaseReducersByName[d] = p, f;
    } };
    a.forEach((d) => {
      const p = u[d], E = { reducerName: d, type: He(o, d), createNotation: typeof n.reducers == "function" };
      Je(p) ? Ze(E, p, f, t) : Qe(E, p, f);
    });
    function c() {
      const [d = {}, p = [], E = void 0] = typeof n.extraReducers == "function" ? Y(n.extraReducers) : [n.extraReducers], v = { ...d, ...i.sliceCaseReducersByType };
      return Ie(n.initialState, (R) => {
        for (let b in v) R.addCase(b, v[b]);
        for (let b of i.sliceMatchers) R.addMatcher(b.matcher, b.reducer);
        for (let b of p) R.addMatcher(b.matcher, b.reducer);
        E && R.addDefaultCase(E);
      });
    }
    const l = (d) => d, y = /* @__PURE__ */ new Map();
    let h;
    function g(d, p) {
      return h || (h = c()), h(d, p);
    }
    function x() {
      return h || (h = c()), h.getInitialState();
    }
    function w(d, p = false) {
      function E(R) {
        let b = R[d];
        return typeof b > "u" && p && (b = x()), b;
      }
      function v(R = l) {
        const b = W(y, p, () => /* @__PURE__ */ new WeakMap());
        return W(b, R, () => {
          const M = {};
          for (const [Z, ee] of Object.entries(n.selectors ?? {})) M[Z] = Ge(ee, R, x, p);
          return M;
        });
      }
      return { reducerPath: d, getSelectors: v, get selectors() {
        return v(E);
      }, selectSlice: E };
    }
    const m = { name: o, reducer: g, actions: i.actionCreators, caseReducers: i.sliceCaseReducersByName, getInitialState: x, ...w(s), injectInto(d, { reducerPath: p, ...E } = {}) {
      const v = p ?? s;
      return d.inject({ reducerPath: v, reducer: g }, E), { ...m, ...w(v, true) };
    } };
    return m;
  };
}
function Ge(e, t, r, n) {
  function o(s, ...u) {
    let a = t(s);
    return typeof a > "u" && n && (a = r()), e(a, ...u);
  }
  return o.unwrapped = e, o;
}
var st = ze();
function Xe() {
  function e(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return e.withTypes = () => e, { reducer(t) {
    return Object.assign({ [t.name](...r) {
      return t(...r);
    } }[t.name], { _reducerDefinitionType: "reducer" });
  }, preparedReducer(t, r) {
    return { _reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: r };
  }, asyncThunk: e };
}
function Qe({ type: e, reducerName: t, createNotation: r }, n, o) {
  let s, u;
  if ("reducer" in n) {
    if (r && !Ye(n)) throw new Error(T(17));
    s = n.reducer, u = n.prepare;
  } else s = n;
  o.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, u ? j(e, u) : j(e));
}
function Je(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ye(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ze({ type: e, reducerName: t }, r, n, o) {
  if (!o) throw new Error(T(18));
  const { payloadCreator: s, fulfilled: u, pending: a, rejected: i, settled: f, options: c } = r, l = o(e, s, c);
  n.exposeAction(t, l), u && n.addCase(l.fulfilled, u), a && n.addCase(l.pending, a), i && n.addCase(l.rejected, i), f && n.addMatcher(l.settled, f), n.exposeCaseReducer(t, { fulfilled: u || D, pending: a || D, rejected: i || D, settled: f || D });
}
function D() {
}
function T(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
export {
  tt as P,
  it as a,
  ot as b,
  st as c,
  nt as d,
  rt as u
};
