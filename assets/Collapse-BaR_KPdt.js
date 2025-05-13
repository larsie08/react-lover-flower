import { g as _, a as tt, r as y, u as et, aj as nt, ak as it, al as ot, am as rt, t as st, j as E, s as S, c as at, d as lt, an as P, m as pt } from "./index-DN9CFzXB.js";
function dt(n) {
  return _("MuiCollapse", n);
}
tt("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const ct = (n) => {
  const { orientation: e, classes: r } = n, h = { root: ["root", `${e}`], entered: ["entered"], hidden: ["hidden"], wrapper: ["wrapper", `${e}`], wrapperInner: ["wrapperInner", `${e}`] };
  return lt(h, dt, r);
}, ut = S("div", { name: "MuiCollapse", slot: "Root", overridesResolver: (n, e) => {
  const { ownerState: r } = n;
  return [e.root, e[r.orientation], r.state === "entered" && e.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && e.hidden];
} })(pt(({ theme: n }) => ({ height: 0, overflow: "hidden", transition: n.transitions.create("height"), variants: [{ props: { orientation: "horizontal" }, style: { height: "auto", width: 0, transition: n.transitions.create("width") } }, { props: { state: "entered" }, style: { height: "auto", overflow: "visible" } }, { props: { state: "entered", orientation: "horizontal" }, style: { width: "auto" } }, { props: ({ ownerState: e }) => e.state === "exited" && !e.in && e.collapsedSize === "0px", style: { visibility: "hidden" } }] }))), ht = S("div", { name: "MuiCollapse", slot: "Wrapper", overridesResolver: (n, e) => e.wrapper })({ display: "flex", width: "100%", variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }] }), mt = S("div", { name: "MuiCollapse", slot: "WrapperInner", overridesResolver: (n, e) => e.wrapperInner })({ width: "100%", variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }] }), U = y.forwardRef(function(e, r) {
  const h = et({ props: e, name: "MuiCollapse" }), { addEndListener: R, children: A, className: L, collapsedSize: m = "0px", component: b, easing: T, in: D, onEnter: $, onEntered: j, onEntering: W, onExit: I, onExited: k, onExiting: M, orientation: F = "vertical", style: C, timeout: s = nt.standard, TransitionComponent: O = it, ...q } = h, f = { ...h, orientation: F, collapsedSize: m }, p = ct(f), H = ot(), B = rt(), a = y.useRef(null), v = y.useRef(), g = typeof m == "number" ? `${m}px` : m, d = F === "horizontal", c = d ? "width" : "height", w = y.useRef(null), G = st(r, w), l = (t) => (i) => {
    if (t) {
      const o = w.current;
      i === void 0 ? t(o) : t(o, i);
    }
  }, z = () => a.current ? a.current[d ? "clientWidth" : "clientHeight"] : 0, J = l((t, i) => {
    a.current && d && (a.current.style.position = "absolute"), t.style[c] = g, $ && $(t, i);
  }), K = l((t, i) => {
    const o = z();
    a.current && d && (a.current.style.position = "");
    const { duration: u, easing: x } = P({ style: C, timeout: s, easing: T }, { mode: "enter" });
    if (s === "auto") {
      const N = H.transitions.getAutoHeightDuration(o);
      t.style.transitionDuration = `${N}ms`, v.current = N;
    } else t.style.transitionDuration = typeof u == "string" ? u : `${u}ms`;
    t.style[c] = `${o}px`, t.style.transitionTimingFunction = x, W && W(t, i);
  }), Q = l((t, i) => {
    t.style[c] = "auto", j && j(t, i);
  }), V = l((t) => {
    t.style[c] = `${z()}px`, I && I(t);
  }), X = l(k), Y = l((t) => {
    const i = z(), { duration: o, easing: u } = P({ style: C, timeout: s, easing: T }, { mode: "exit" });
    if (s === "auto") {
      const x = H.transitions.getAutoHeightDuration(i);
      t.style.transitionDuration = `${x}ms`, v.current = x;
    } else t.style.transitionDuration = typeof o == "string" ? o : `${o}ms`;
    t.style[c] = g, t.style.transitionTimingFunction = u, M && M(t);
  }), Z = (t) => {
    s === "auto" && B.start(v.current || 0, t), R && R(w.current, t);
  };
  return E.jsx(O, { in: D, onEnter: J, onEntered: Q, onEntering: K, onExit: V, onExited: X, onExiting: Y, addEndListener: Z, nodeRef: w, timeout: s === "auto" ? null : s, ...q, children: (t, { ownerState: i, ...o }) => E.jsx(ut, { as: b, className: at(p.root, L, { entered: p.entered, exited: !D && g === "0px" && p.hidden }[t]), style: { [d ? "minWidth" : "minHeight"]: g, ...C }, ref: G, ownerState: { ...f, state: t }, ...o, children: E.jsx(ht, { ownerState: { ...f, state: t }, className: p.wrapper, ref: a, children: E.jsx(mt, { ownerState: { ...f, state: t }, className: p.wrapperInner, children: A }) }) }) });
});
U && (U.muiSupportAuto = true);
export {
  U as C
};
