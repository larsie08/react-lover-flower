import { j as a, r as l, f as Ct, K as he, t as jt, L as Nt, N as Ge, O as _e, Q as Xe, S as et, T as ze, a as Lt, g as Pt, c as ie, u as It, U as At, V as U, s as J, b as Y, d as Tt, m as pe, e as Qe, W as tt, X as at, q as rt, Y as dt, Z as ce, A as mt, _ as Rt, D as H, $ as Ft, E as Be, a0 as xt, x as Mt, a1 as Et, a2 as _t, a3 as zt, a4 as Bt, a5 as Vt, M as st, a6 as Ot, a7 as Ze, a8 as gt, P as $t, a9 as I, aa as Dt, ab as Ht, ac as qt, ad as ot, ae as Ut, F as Yt, af as Wt, ag as Kt, ah as Gt, ai as Xt } from "./index-bVRnJW3-.js";
import { v as Zt } from "./visuallyHidden-Dan1xhjv.js";
import { T as Qt } from "./index-C5WqwIs0.js";
import { C as Jt } from "./Collapse-C_nV435W.js";
const ea = () => a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [a.jsx("path", { d: "M10.4453 3.15918L10.8413 3.5551L3.5551 10.8407L3.15918 10.4451L10.4453 3.15918Z", fill: "#43FFD2" }), a.jsx("path", { d: "M3.5551 3.15918L10.8413 10.4448L10.4453 10.841L3.15918 3.55538L3.5551 3.15918Z", fill: "#43FFD2" })] }), ta = () => a.jsx("svg", { className: "absolute -top-[2px] -left-[1px]", width: "14px", height: "14px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z", fill: "white" }) });
function aa(e, t, r = (o, c) => o === c) {
  return e.length === t.length && e.every((o, c) => r(o, t[c]));
}
const ra = 2;
function le(e, t, r, o, c) {
  return r === 1 ? Math.min(e + t, c) : Math.max(e - t, o);
}
function ht(e, t) {
  return e - t;
}
function nt(e, t) {
  const { index: r } = e.reduce((o, c, d) => {
    const b = Math.abs(t - c);
    return o === null || b < o.distance || b === o.distance ? { distance: b, index: d } : o;
  }, null) ?? {};
  return r;
}
function Ie(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let o = 0; o < r.changedTouches.length; o += 1) {
      const c = r.changedTouches[o];
      if (c.identifier === t.current) return { x: c.clientX, y: c.clientY };
    }
    return false;
  }
  return { x: e.clientX, y: e.clientY };
}
function Ve(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function sa(e, t, r) {
  return (r - t) * e + t;
}
function oa(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), o = r[0].split(".")[1];
    return (o ? o.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function na(e, t, r) {
  const o = Math.round((e - r) / t) * t + r;
  return Number(o.toFixed(oa(t)));
}
function lt({ values: e, newValue: t, index: r }) {
  const o = e.slice();
  return o[r] = t, o.sort(ht);
}
function Ae({ sliderRef: e, activeIndex: t, setActive: r }) {
  var _a2, _b, _c;
  const o = _e(e.current);
  (!((_a2 = e.current) == null ? void 0 : _a2.contains(o.activeElement)) || Number((_b = o == null ? void 0 : o.activeElement) == null ? void 0 : _b.getAttribute("data-index")) !== t) && ((_c = e.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${t}"]`).focus()), r && r(t);
}
function Te(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? aa(e, t) : false;
}
const la = { horizontal: { offset: (e) => ({ left: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, "horizontal-reverse": { offset: (e) => ({ right: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, vertical: { offset: (e) => ({ bottom: `${e}%` }), leap: (e) => ({ height: `${e}%` }) } }, ia = (e) => e;
let Re;
function it() {
  return Re === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Re = CSS.supports("touch-action", "none") : Re = true), Re;
}
function ca(e) {
  const { "aria-labelledby": t, defaultValue: r, disabled: o = false, disableSwap: c = false, isRtl: d = false, marks: b = false, max: g = 100, min: i = 0, name: v, onChange: f, onChangeCommitted: S, orientation: k = "horizontal", rootRef: ue, scale: w = ia, step: R = 1, shiftStep: ee = 10, tabIndex: fe, value: Oe } = e, B = l.useRef(void 0), [$, te] = l.useState(-1), [Je, ae] = l.useState(-1), [be, ve] = l.useState(false), re = l.useRef(0), de = l.useRef(null), [E, F] = Ct({ controlled: Oe, default: r ?? i, name: "Slider" }), L = f && ((n, s, p) => {
    const x = n.nativeEvent || n, m = new x.constructor(x.type, x);
    Object.defineProperty(m, "target", { writable: true, value: { value: s, name: v } }), de.current = s, f(m, s, p);
  }), se = Array.isArray(E);
  let C = se ? E.slice().sort(ht) : [E];
  C = C.map((n) => n == null ? i : he(n, i, g));
  const me = b === true && R !== null ? [...Array(Math.floor((g - i) / R) + 1)].map((n, s) => ({ value: i + R * s })) : b || [], y = me.map((n) => n.value), [q, oe] = l.useState(-1), h = l.useRef(null), W = jt(ue, h), $e = (n) => (s) => {
    var _a2;
    const p = Number(s.currentTarget.getAttribute("data-index"));
    et(s.target) && oe(p), ae(p), (_a2 = n == null ? void 0 : n.onFocus) == null ? void 0 : _a2.call(n, s);
  }, De = (n) => (s) => {
    var _a2;
    et(s.target) || oe(-1), ae(-1), (_a2 = n == null ? void 0 : n.onBlur) == null ? void 0 : _a2.call(n, s);
  }, ke = (n, s) => {
    const p = Number(n.currentTarget.getAttribute("data-index")), x = C[p], m = y.indexOf(x);
    let u = s;
    if (me && R == null) {
      const M = y[y.length - 1];
      u >= M ? u = M : u <= y[0] ? u = y[0] : u = u < x ? y[m - 1] : y[m + 1];
    }
    if (u = he(u, i, g), se) {
      c && (u = he(u, C[p - 1] || -1 / 0, C[p + 1] || 1 / 0));
      const M = u;
      u = lt({ values: C, newValue: u, index: p });
      let _ = p;
      c || (_ = u.indexOf(M)), Ae({ sliderRef: h, activeIndex: _ });
    }
    F(u), oe(p), L && !Te(u, E) && L(n, u, p), S && S(n, de.current ?? u);
  }, He = (n) => (s) => {
    var _a2;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(s.key)) {
      s.preventDefault();
      const p = Number(s.currentTarget.getAttribute("data-index")), x = C[p];
      let m = null;
      if (R != null) {
        const u = s.shiftKey ? ee : R;
        switch (s.key) {
          case "ArrowUp":
            m = le(x, u, 1, i, g);
            break;
          case "ArrowRight":
            m = le(x, u, d ? -1 : 1, i, g);
            break;
          case "ArrowDown":
            m = le(x, u, -1, i, g);
            break;
          case "ArrowLeft":
            m = le(x, u, d ? 1 : -1, i, g);
            break;
          case "PageUp":
            m = le(x, ee, 1, i, g);
            break;
          case "PageDown":
            m = le(x, ee, -1, i, g);
            break;
          case "Home":
            m = i;
            break;
          case "End":
            m = g;
            break;
        }
      } else if (me) {
        const u = y[y.length - 1], M = y.indexOf(x), _ = [d ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], N = [d ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        _.includes(s.key) ? M === 0 ? m = y[0] : m = y[M - 1] : N.includes(s.key) && (M === y.length - 1 ? m = u : m = y[M + 1]);
      }
      m != null && ke(s, m);
    }
    (_a2 = n == null ? void 0 : n.onKeyDown) == null ? void 0 : _a2.call(n, s);
  };
  Nt(() => {
    var _a2;
    o && h.current.contains(document.activeElement) && ((_a2 = document.activeElement) == null ? void 0 : _a2.blur());
  }, [o]), o && $ !== -1 && te(-1), o && q !== -1 && oe(-1);
  const we = (n) => (s) => {
    var _a2;
    (_a2 = n.onChange) == null ? void 0 : _a2.call(n, s), ke(s, s.target.valueAsNumber);
  }, K = l.useRef(void 0);
  let G = k;
  d && k === "horizontal" && (G += "-reverse");
  const X = ({ finger: n, move: s = false }) => {
    const { current: p } = h, { width: x, height: m, bottom: u, left: M } = p.getBoundingClientRect();
    let _;
    G.startsWith("vertical") ? _ = (u - n.y) / m : _ = (n.x - M) / x, G.includes("-reverse") && (_ = 1 - _);
    let N;
    if (N = sa(_, i, g), R) N = na(N, R, i);
    else {
      const ge = nt(y, N);
      N = y[ge];
    }
    N = he(N, i, g);
    let O = 0;
    if (se) {
      s ? O = K.current : O = nt(C, N), c && (N = he(N, C[O - 1] || -1 / 0, C[O + 1] || 1 / 0));
      const ge = N;
      N = lt({ values: C, newValue: N, index: O }), c && s || (O = N.indexOf(ge), K.current = O);
    }
    return { newValue: N, activeIndex: O };
  }, Z = Ge((n) => {
    const s = Ie(n, B);
    if (!s) return;
    if (re.current += 1, n.type === "mousemove" && n.buttons === 0) {
      V(n);
      return;
    }
    const { newValue: p, activeIndex: x } = X({ finger: s, move: true });
    Ae({ sliderRef: h, activeIndex: x, setActive: te }), F(p), !be && re.current > ra && ve(true), L && !Te(p, E) && L(n, p, x);
  }), V = Ge((n) => {
    const s = Ie(n, B);
    if (ve(false), !s) return;
    const { newValue: p } = X({ finger: s, move: true });
    te(-1), n.type === "touchend" && ae(-1), S && S(n, de.current ?? p), B.current = void 0, Q();
  }), A = Ge((n) => {
    if (o) return;
    it() || n.preventDefault();
    const s = n.changedTouches[0];
    s != null && (B.current = s.identifier);
    const p = Ie(n, B);
    if (p !== false) {
      const { newValue: m, activeIndex: u } = X({ finger: p });
      Ae({ sliderRef: h, activeIndex: u, setActive: te }), F(m), L && !Te(m, E) && L(n, m, u);
    }
    re.current = 0;
    const x = _e(h.current);
    x.addEventListener("touchmove", Z, { passive: true }), x.addEventListener("touchend", V, { passive: true });
  }), Q = l.useCallback(() => {
    const n = _e(h.current);
    n.removeEventListener("mousemove", Z), n.removeEventListener("mouseup", V), n.removeEventListener("touchmove", Z), n.removeEventListener("touchend", V);
  }, [V, Z]);
  l.useEffect(() => {
    const { current: n } = h;
    return n.addEventListener("touchstart", A, { passive: it() }), () => {
      n.removeEventListener("touchstart", A), Q();
    };
  }, [Q, A]), l.useEffect(() => {
    o && Q();
  }, [o, Q]);
  const qe = (n) => (s) => {
    var _a2;
    if ((_a2 = n.onMouseDown) == null ? void 0 : _a2.call(n, s), o || s.defaultPrevented || s.button !== 0) return;
    s.preventDefault();
    const p = Ie(s, B);
    if (p !== false) {
      const { newValue: m, activeIndex: u } = X({ finger: p });
      Ae({ sliderRef: h, activeIndex: u, setActive: te }), F(m), L && !Te(m, E) && L(s, m, u);
    }
    re.current = 0;
    const x = _e(h.current);
    x.addEventListener("mousemove", Z, { passive: true }), x.addEventListener("mouseup", V);
  }, ye = Ve(se ? C[0] : i, i, g), T = Ve(C[C.length - 1], i, g) - ye, xe = (n = {}) => {
    const s = Xe(n), p = { onMouseDown: qe(s || {}) }, x = { ...s, ...p };
    return { ...n, ref: W, ...x };
  }, Se = (n) => (s) => {
    var _a2;
    (_a2 = n.onMouseOver) == null ? void 0 : _a2.call(n, s);
    const p = Number(s.currentTarget.getAttribute("data-index"));
    ae(p);
  }, Ce = (n) => (s) => {
    var _a2;
    (_a2 = n.onMouseLeave) == null ? void 0 : _a2.call(n, s), ae(-1);
  }, je = (n = {}) => {
    const s = Xe(n), p = { onMouseOver: Se(s || {}), onMouseLeave: Ce(s || {}) };
    return { ...n, ...s, ...p };
  }, Ne = (n) => ({ pointerEvents: $ !== -1 && $ !== n ? "none" : void 0 });
  let ne;
  return k === "vertical" && (ne = d ? "vertical-rl" : "vertical-lr"), { active: $, axis: G, axisProps: la, dragging: be, focusedThumbIndex: q, getHiddenInputProps: (n = {}) => {
    const s = Xe(n), p = { onChange: we(s || {}), onFocus: $e(s || {}), onBlur: De(s || {}), onKeyDown: He(s || {}) }, x = { ...s, ...p };
    return { tabIndex: fe, "aria-labelledby": t, "aria-orientation": k, "aria-valuemax": w(g), "aria-valuemin": w(i), name: v, type: "range", min: e.min, max: e.max, step: e.step === null && e.marks ? "any" : e.step ?? void 0, disabled: o, ...n, ...x, style: { ...Zt, direction: d ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: ne } };
  }, getRootProps: xe, getThumbProps: je, marks: me, open: Je, range: se, rootRef: W, trackLeap: T, trackOffset: ye, values: C, getThumbStyle: Ne };
}
const pa = (e) => !e || !ze(e);
function ua(e) {
  return Pt("MuiSlider", e);
}
const z = Lt("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), da = (e) => {
  const { open: t } = e;
  return { offset: ie(t && z.valueLabelOpen), circle: z.valueLabelCircle, label: z.valueLabelLabel };
};
function ma(e) {
  const { children: t, className: r, value: o } = e, c = da(e);
  return t ? l.cloneElement(t, { className: ie(t.props.className) }, a.jsxs(l.Fragment, { children: [t.props.children, a.jsx("span", { className: ie(c.offset, r), "aria-hidden": true, children: a.jsx("span", { className: c.circle, children: a.jsx("span", { className: c.label, children: o }) }) })] })) : null;
}
function ct(e) {
  return e;
}
const xa = J("span", { name: "MuiSlider", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[`color${Y(r.color)}`], r.size !== "medium" && t[`size${Y(r.size)}`], r.marked && t.marked, r.orientation === "vertical" && t.vertical, r.track === "inverted" && t.trackInverted, r.track === false && t.trackFalse];
} })(pe(({ theme: e }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${z.disabled}`]: { pointerEvents: "none", cursor: "default", color: (e.vars || e).palette.grey[400] }, [`&.${z.dragging}`]: { [`& .${z.thumb}, & .${z.track}`]: { transition: "none" } }, variants: [...Object.entries(e.palette).filter(Qe()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), ga = J("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (e, t) => t.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), ha = J("span", { name: "MuiSlider", slot: "Track", overridesResolver: (e, t) => t.track })(pe(({ theme: e }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: e.transitions.create(["left", "width", "bottom", "height"], { duration: e.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(e.palette).filter(Qe()).map(([t]) => ({ props: { color: t, track: "inverted" }, style: { ...e.vars ? { backgroundColor: e.vars.palette.Slider[`${t}Track`], borderColor: e.vars.palette.Slider[`${t}Track`] } : { backgroundColor: tt(e.palette[t].main, 0.62), borderColor: tt(e.palette[t].main, 0.62), ...e.applyStyles("dark", { backgroundColor: at(e.palette[t].main, 0.5) }), ...e.applyStyles("dark", { borderColor: at(e.palette[t].main, 0.5) }) } } }))] }))), fa = J("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.thumb, t[`thumbColor${Y(r.color)}`], r.size !== "medium" && t[`thumbSize${Y(r.size)}`]];
} })(pe(({ theme: e }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: e.transitions.create(["box-shadow", "left", "bottom"], { duration: e.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (e.vars || e).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${z.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(e.palette).filter(Qe()).map(([t]) => ({ props: { color: t }, style: { [`&:hover, &.${z.focusVisible}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${rt(e.palette[t].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${z.active}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${rt(e.palette[t].main, 0.16)}` } } } }))] }))), ba = J(ma, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (e, t) => t.valueLabel })(pe(({ theme: e }) => ({ zIndex: 1, whiteSpace: "nowrap", ...e.typography.body2, fontWeight: 500, transition: e.transitions.create(["transform"], { duration: e.transitions.duration.shortest }), position: "absolute", backgroundColor: (e.vars || e).palette.grey[600], borderRadius: 2, color: (e.vars || e).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${z.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${z.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: e.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), va = J("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (e) => dt(e) && e !== "markActive", overridesResolver: (e, t) => {
  const { markActive: r } = e;
  return [t.mark, r && t.markActive];
} })(pe(({ theme: e }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (e.vars || e).palette.background.paper, opacity: 0.8 } }] }))), ka = J("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (e) => dt(e) && e !== "markLabelActive", overridesResolver: (e, t) => t.markLabel })(pe(({ theme: e }) => ({ ...e.typography.body2, color: (e.vars || e).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (e.vars || e).palette.text.primary } }] }))), wa = (e) => {
  const { disabled: t, dragging: r, marked: o, orientation: c, track: d, classes: b, color: g, size: i } = e, v = { root: ["root", t && "disabled", r && "dragging", o && "marked", c === "vertical" && "vertical", d === "inverted" && "trackInverted", d === false && "trackFalse", g && `color${Y(g)}`, i && `size${Y(i)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", t && "disabled", i && `thumbSize${Y(i)}`, g && `thumbColor${Y(g)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return Tt(v, ua, b);
}, ya = ({ children: e }) => e, Sa = l.forwardRef(function(t, r) {
  const o = It({ props: t, name: "MuiSlider" }), c = At(), { "aria-label": d, "aria-valuetext": b, "aria-labelledby": g, component: i = "span", components: v = {}, componentsProps: f = {}, color: S = "primary", classes: k, className: ue, disableSwap: w = false, disabled: R = false, getAriaLabel: ee, getAriaValueText: fe, marks: Oe = false, max: B = 100, min: $ = 0, name: te, onChange: Je, onChangeCommitted: ae, orientation: be = "horizontal", shiftStep: ve = 10, size: re = "medium", step: de = 1, scale: E = ct, slotProps: F, slots: L, tabIndex: se, track: C = "normal", value: me, valueLabelDisplay: y = "off", valueLabelFormat: q = ct, ...oe } = o, h = { ...o, isRtl: c, max: B, min: $, classes: k, disabled: R, disableSwap: w, orientation: be, marks: Oe, color: S, size: re, step: de, shiftStep: ve, scale: E, track: C, valueLabelDisplay: y, valueLabelFormat: q }, { axisProps: W, getRootProps: $e, getHiddenInputProps: De, getThumbProps: ke, open: He, active: we, axis: K, focusedThumbIndex: G, range: X, dragging: Z, marks: V, values: A, trackOffset: Q, trackLeap: qe, getThumbStyle: ye } = ca({ ...h, rootRef: r });
  h.marked = V.length > 0 && V.some((j) => j.label), h.dragging = Z, h.focusedThumbIndex = G;
  const T = wa(h), xe = (L == null ? void 0 : L.root) ?? v.Root ?? xa, Se = (L == null ? void 0 : L.rail) ?? v.Rail ?? ga, Ce = (L == null ? void 0 : L.track) ?? v.Track ?? ha, je = (L == null ? void 0 : L.thumb) ?? v.Thumb ?? fa, Ne = (L == null ? void 0 : L.valueLabel) ?? v.ValueLabel ?? ba, ne = (L == null ? void 0 : L.mark) ?? v.Mark ?? va, Le = (L == null ? void 0 : L.markLabel) ?? v.MarkLabel ?? ka, n = (L == null ? void 0 : L.input) ?? v.Input ?? "input", s = (F == null ? void 0 : F.root) ?? f.root, p = (F == null ? void 0 : F.rail) ?? f.rail, x = (F == null ? void 0 : F.track) ?? f.track, m = (F == null ? void 0 : F.thumb) ?? f.thumb, u = (F == null ? void 0 : F.valueLabel) ?? f.valueLabel, M = (F == null ? void 0 : F.mark) ?? f.mark, _ = (F == null ? void 0 : F.markLabel) ?? f.markLabel, N = (F == null ? void 0 : F.input) ?? f.input, O = U({ elementType: xe, getSlotProps: $e, externalSlotProps: s, externalForwardedProps: oe, additionalProps: { ...pa(xe) && { as: i } }, ownerState: { ...h, ...s == null ? void 0 : s.ownerState }, className: [T.root, ue] }), ge = U({ elementType: Se, externalSlotProps: p, ownerState: h, className: T.rail }), wt = U({ elementType: Ce, externalSlotProps: x, additionalProps: { style: { ...W[K].offset(Q), ...W[K].leap(qe) } }, ownerState: { ...h, ...x == null ? void 0 : x.ownerState }, className: T.track }), Ue = U({ elementType: je, getSlotProps: ke, externalSlotProps: m, ownerState: { ...h, ...m == null ? void 0 : m.ownerState }, className: T.thumb }), yt = U({ elementType: Ne, externalSlotProps: u, ownerState: { ...h, ...u == null ? void 0 : u.ownerState }, className: T.valueLabel }), Ye = U({ elementType: ne, externalSlotProps: M, ownerState: h, className: T.mark }), We = U({ elementType: Le, externalSlotProps: _, ownerState: h, className: T.markLabel }), St = U({ elementType: n, getSlotProps: De, externalSlotProps: N, ownerState: h });
  return a.jsxs(xe, { ...O, children: [a.jsx(Se, { ...ge }), a.jsx(Ce, { ...wt }), V.filter((j) => j.value >= $ && j.value <= B).map((j, P) => {
    const Ke = Ve(j.value, $, B), Pe = W[K].offset(Ke);
    let D;
    return C === false ? D = A.includes(j.value) : D = C === "normal" && (X ? j.value >= A[0] && j.value <= A[A.length - 1] : j.value <= A[0]) || C === "inverted" && (X ? j.value <= A[0] || j.value >= A[A.length - 1] : j.value >= A[0]), a.jsxs(l.Fragment, { children: [a.jsx(ne, { "data-index": P, ...Ye, ...!ze(ne) && { markActive: D }, style: { ...Pe, ...Ye.style }, className: ie(Ye.className, D && T.markActive) }), j.label != null ? a.jsx(Le, { "aria-hidden": true, "data-index": P, ...We, ...!ze(Le) && { markLabelActive: D }, style: { ...Pe, ...We.style }, className: ie(T.markLabel, We.className, D && T.markLabelActive), children: j.label }) : null] }, P);
  }), A.map((j, P) => {
    const Ke = Ve(j, $, B), Pe = W[K].offset(Ke), D = y === "off" ? ya : Ne;
    return a.jsx(D, { ...!ze(D) && { valueLabelFormat: q, valueLabelDisplay: y, value: typeof q == "function" ? q(E(j), P) : q, index: P, open: He === P || we === P || y === "on", disabled: R }, ...yt, children: a.jsx(je, { "data-index": P, ...Ue, className: ie(T.thumb, Ue.className, we === P && T.active, G === P && T.focusVisible), style: { ...Pe, ...ye(P), ...Ue.style }, children: a.jsx(n, { "data-index": P, "aria-label": ee ? ee(P) : d, "aria-valuenow": E(j), "aria-labelledby": g, "aria-valuetext": fe ? fe(E(j), P) : b, value: A[P], ...St }) }) }, P);
  })] });
}), Ca = l.memo(({ categoryId: e, onClear: t }) => a.jsx("div", { className: "flex items-end ml-[30rem] ", children: a.jsxs("div", { className: "flex gap-2 h-6", children: [a.jsx("h3", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: e }), a.jsx("button", { className: ce({ invisible: e === "" }), onClick: t, children: a.jsx(ea, {}) })] }) })), ja = () => {
  const e = mt(), t = () => e(Rt(true));
  return a.jsx("div", { className: "confirm_modal absolute -right-4 -top-[9px] z-20", children: a.jsx("div", { className: "relative", children: a.jsx("button", { onClick: t, className: "text-cherry p-2 bg-light-turquoise rounded-lg", children: "\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C" }) }) });
}, Fe = l.memo(({ title: e, options: t, currentId: r, handleClick: o, isOptionSelected: c }) => a.jsxs("div", { className: "light_block flex flex-col gap-2", children: [a.jsx("h2", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: e }), a.jsx("ul", { className: "flex flex-col gap-1", children: t.map(({ id: d, name: b }) => a.jsxs("li", { className: "flex gap-1 relative", children: [a.jsxs("label", { onClick: () => o(d), className: "group/light_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer", children: [a.jsx(H, { className: "relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]", children: c(d) && a.jsx(ta, {}) }), a.jsxs("span", { className: "relative group-hover/light_filter:text-light-turquoise duration-200 transition-all", children: [b, a.jsx(H, { className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/light_filter:w-full group-hover/light_filter:visible transition-all duration-200" })] })] }), r === d && a.jsx(ja, {})] }, d)) })] })), Na = l.memo(({ lowerFieldValue: e, upperFieldValue: t, value: r, handleSliderChange: o }) => a.jsxs("div", { className: "range_block flex flex-col gap-2", children: [a.jsx("h2", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: "\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C" }), a.jsxs("form", { className: "flex flex-col w-full", children: [a.jsx("div", { className: "group__range_inputs h-[15px] relative", children: a.jsx(Sa, { size: "small", min: e, max: t, value: r, onChange: o }) }), a.jsxs("label", { className: "text-[12px] mt-2.5 font-light tracking-[0.48px] uppercase", htmlFor: "range", children: ["\u0426\u0435\u043D\u0430: ", r[0], " \u20BD \u2013 ", r[1], " \u20BD"] })] })] })), Me = { format: [{ id: "bouquet", name: "\u0431\u0443\u043A\u0435\u0442" }, { id: "vase", name: "\u0432 \u0432\u0430\u0437\u0435" }, { id: "envelope", name: "\u0432 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0435" }, { id: "basket", name: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435" }, { id: "hatbox", name: "\u0432 \u0448\u043B\u044F\u043F\u043D\u043E\u0439 \u043A\u043E\u0440\u043E\u0431\u043A\u0435" }, { id: "box", name: "\u0432 \u044F\u0449\u0438\u043A\u0435" }], colors: [{ id: "white", name: "\u0431\u0435\u043B\u044B\u0439" }, { id: "yellow", name: "\u0436\u0435\u043B\u0442\u044B\u0439" }, { id: "green", name: "\u0437\u0435\u043B\u0435\u043D\u044B\u0439" }, { id: "red", name: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439" }, { id: "orange", name: "\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439" }, { id: "pink", name: "\u0440\u043E\u0437\u043E\u0432\u044B\u0439" }, { id: "blue", name: "\u0441\u0438\u043D\u0438\u0439" }], lighting: [{ id: "gentle", name: "\u043D\u0435\u0436\u043D\u044B\u0435" }, { id: "light", name: "\u044F\u0440\u043A\u0438\u0435" }], flowers: [{ id: "Alstroemeria", name: "\u0410\u043B\u044C\u0441\u0442\u0440\u043E\u043C\u0435\u0440\u0438\u044F (2)" }, { id: "Anthurium", name: "\u0410\u043D\u0442\u0443\u0440\u0438\u0443\u043C (1)" }, { id: "Asparagus", name: "\u0410\u0441\u043F\u0430\u0440\u0430\u0433\u0443\u0441 (1)" }, { id: "Astilba", name: "\u0410\u0441\u0442\u0438\u043B\u044C\u0431\u0430 (7)" }, { id: "Astrance", name: "\u0410\u0441\u0442\u0440\u0430\u043D\u0446\u0438\u044F (1)" }] }, pt = 800, ut = 2500, ft = l.memo(() => {
  const e = Ft(), [t, r] = l.useState([pt, ut]), [o, c] = l.useState(null), { filtersId: d } = Be(xt), b = l.useMemo(() => Mt((S) => {
    e(Et(S));
  }, 250), [e]), g = l.useCallback((S, k) => {
    r(k), b(k);
  }, [b]), i = l.useCallback((S) => {
    c(S), e(_t(S));
  }, [e]), v = () => {
    c(null), e(zt());
  }, f = l.useCallback((S) => d.includes(S), [d]);
  return l.useEffect(() => {
    if (o) {
      const S = setTimeout(() => c(null), 1e4);
      return () => clearTimeout(S);
    }
  }, [o]), a.jsxs("div", { className: "md:sticky md:top-20 md:bottom-6 flex flex-col gap-5 p-5 bg-[#000]/[0.30] rounded-[20px] backdrop-blur-[10px] select-none", children: [a.jsx(Fe, { title: "\u041F\u043E \u0441\u0432\u0435\u0442\u0443", options: Me.lighting, handleClick: i, isOptionSelected: f, currentId: o }), a.jsx(Fe, { title: "\u041F\u043E \u0446\u0432\u0435\u0442\u0443", options: Me.colors, handleClick: i, isOptionSelected: f, currentId: o }), a.jsx(Fe, { title: "\u041F\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0443", options: Me.format, handleClick: i, isOptionSelected: f, currentId: o }), a.jsx(Na, { lowerFieldValue: pt, upperFieldValue: ut, value: t, handleSliderChange: g }), a.jsx(Fe, { title: "\u041F\u043E \u0446\u0432\u0435\u0442\u043A\u0443", options: Me.flowers, handleClick: i, isOptionSelected: f, currentId: o }), a.jsx("button", { onClick: v, className: "border-[1px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]", children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440" })] });
}), La = l.memo(({ openModal: e, cartItems: t }) => a.jsxs("div", { className: "flex flex-col justify-between", children: [a.jsx("div", { className: "socials flex justify-end mt-20", children: a.jsx(Bt, {}) }), a.jsxs("div", { className: "footer_buttons flex flex-col items-end justify-center", children: [a.jsx("h3", { className: "phone text-[16px] relative z-20 mt-14 font-normal tracking-[1.6px] uppercase", children: "+375 (29) 113-69-69" }), a.jsxs("button", { onClick: () => e(st.Modal), className: "call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px]", children: [a.jsx(Vt, {}), a.jsx("p", { className: "text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise", children: "\u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A" })] }), a.jsxs("button", { onClick: () => e(st.Cart), className: "cart flex mt-5 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px] p-[15px]", children: [a.jsx(Ot, {}), a.jsx("svg", { className: "absolute right-[8px] top-[10px]", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", viewBox: "0 0 16 17", fill: "none", children: a.jsx("circle", { cx: "8", cy: "8.86523", r: "8", fill: "#43FFD2" }) }), a.jsx("p", { className: ce("text-dark-green absolute right-[13px] top-[10px] text-standart", { "right-0 left-10": t.length >= 10 }), children: t.length })] })] })] })), Ee = [{ name: "\u043F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438", sortProperty: Ze.RATING }, { name: "\u043F\u043E \u0446\u0435\u043D\u0435", sortProperty: Ze.COST }, { name: "\u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443", sortProperty: Ze.NAME }], bt = l.memo(({ sortValue: e, handleSortValue: t, screenWidth: r, adaptiveIsOpen: o }) => {
  const c = l.useRef(null), [d, b] = l.useState(false), [g, i] = l.useState(Ee[0].name), v = l.useMemo(() => r >= 768 ? Ee.filter((k) => k.sortProperty !== e.sortProperty) : Ee, [r, Ee, e]), f = (k) => {
    c.current && !k.composedPath().includes(c.current) && b(false);
  }, S = (k) => {
    t(k), i(k.name), b(false);
  };
  return l.useEffect(() => (d ? document.addEventListener("click", f) : document.removeEventListener("click", f), () => document.removeEventListener("click", f)), [d, f]), a.jsxs("ul", { ref: c, className: "catalog_page__sort relative flex flex-col w-[260px] md:gap-2 md:p-3 md:rounded-[10px] md:bg-[#000]/[.20] md:backdrop-blur-[10px] z-30 select-none", children: [r >= 768 && a.jsxs("div", { onClick: () => b(!d), className: "flex justify-between items-center cursor-pointer", children: [a.jsx("span", { className: "text-[12px] font-light tracking-[0.48px] uppercase", children: e.name }), a.jsx(gt, { isOpen: d })] }), a.jsx("div", { className: ce("popup md:absolute md:left-0 md:top-[42px] p-3 w-[260px] flex flex-col gap-2 rounded-[5px] md:bg-[#000]/[.40] z-30 transition-all duration-150", { "visible md:h-[70px] opacity-100": d || o, "invisible h-0 opacity-0": !d && !o }), children: v.map((k) => a.jsxs("li", { onClick: () => S(k), className: "flex items-center gap-2 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer", children: [a.jsx(H, { className: ce("relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]", { "bg-light-turquoise": g === k.name }) }), a.jsx("p", { children: k.name })] }, k.name)) })] });
}), vt = l.memo(({ category: e, isSelectedCategory: t, onClickCategory: r }) => a.jsx("li", { className: ce("lg:p-5 max-lg:p-3 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] transition-all uppercase cursor-pointer hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]", { "bg-light-turquoise text-[black]": t }), onClick: () => r(e.name), children: e.name })), Pa = [{ text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", path: "/" }, { text: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433", path: "/catalog" }], kt = [{ name: I.GypsophilaBouquets }, { name: I.ChamomileBouquets }, { name: I.ChrysanthemumBouquets }, { name: I.PottedIndoorPlants }, { name: I.MonoBouquets }, { name: I.AssortedBouquets }, { name: I.HolidayBouquets }, { name: I.FlowerCompositions }, { name: I.Envelopes }, { name: I.GreetingCards }, { name: I.Gifts }, { name: I.DriedFlowerBouquets }, { name: I.Balloons }, { name: I.PopularItems }, { name: I.RoseBouquets }, { name: I.FuneralFlowers }, { name: I.GiftWrapping }], Ia = "lg:h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase max-md:text-[40px]", Aa = "ml-[270px] lg:h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase max-md:ml-[4rem] max-md:text-[40px]", Ta = () => a.jsx("p", { className: "max-w-[430px] text-left break-words whitespace-normal mt-5 lg:ml-[270px] text-[14px] font-normal tracking-[0.56px] uppercase max-md:ml-[4rem]", children: "\u0412 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0441\u0430\u043C\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0432\u044B\u0431\u043E\u0440 \u0431\u0443\u043A\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439:" }), Ra = l.memo(({ categoryId: e, onClickCategory: t, screenWidth: r }) => a.jsxs("div", { className: "relative z-30", children: [a.jsx($t, { items: [...Pa, ...e ? [{ text: e, path: "/catalog" }] : []] }), a.jsxs("div", { className: "max-w-[950px] mt-5 p-5 lg:bg-[#000]/[0.30] lg:backdrop-blur-[10px] lg:rounded-[20px]", children: [a.jsx(Qt, { title: "\u043A\u0430\u0442\u0430\u043B\u043E\u0433", titleClassName: Ia, subtitle: "\u0431\u0443\u043A\u0435\u0442\u043E\u0432", subtitleClassName: Aa, renderTitleText: Ta }), r > 768 && a.jsx("ul", { className: "category_block flex flex-wrap gap-3 mt-16 select-none", children: kt.map((o) => a.jsx(vt, { category: o, isSelectedCategory: e === o.name, onClickCategory: t }, o.name)) })] })] })), Fa = ({ textButton: e, isOpen: t, onClickAdaptiveBlock: r, children: o }) => a.jsxs(a.Fragment, { children: [a.jsxs("div", { onClick: r, className: "flex gap-5 items-center cursor-pointer", children: [a.jsx("span", { className: ce("text-[16px]  font-normal tracking-[0.1em] underline uppercase", { "text-light-turquoise": t }, { "text-pink": !t }), children: e }), a.jsx(gt, { isOpen: t })] }), a.jsx(Jt, { orientation: "vertical", in: t, children: o })] }), Ma = ({ categoryId: e, onClickCategory: t }) => a.jsx("ul", { className: "flex flex-wrap gap-3 select-none", children: kt.map((r) => a.jsx(vt, { category: r, isSelectedCategory: e === r.name, onClickCategory: t }, r.name)) }), Ea = l.memo(({ sortValue: e, blockId: t, category: r, screenWidth: o, handleSortValue: c, onClickAdaptiveBlock: d, onClickCategory: b }) => {
  const g = [{ label: "\u0444\u0438\u043B\u044C\u0442\u0440 \u0442\u043E\u0432\u0430\u0440\u043E\u0432", content: a.jsx(ft, {}) }, { label: "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432", content: a.jsx(bt, { adaptiveIsOpen: t === 1, screenWidth: o, sortValue: e, handleSortValue: c }) }, { label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", content: a.jsx(Ma, { categoryId: r, onClickCategory: b }) }];
  return a.jsx("div", { className: "flex flex-col gap-3 px-3 mb-[4rem]", children: g.map((i, v) => a.jsx(Fa, { textButton: i.label, isOpen: t === v, onClickAdaptiveBlock: () => d(v), children: i.content }, i.label)) });
}), _a = [...new Array(9)].map((e, t) => a.jsx(Xt, {}, t)), $a = () => {
  const e = mt(), t = Dt(), { category: r, sortOption: o } = Be(xt), { items: c, status: d } = Be(Ht), { cartItems: b } = Be(qt), [g, i] = l.useState(null), v = l.useCallback((w) => {
    e(ot({ category: w }));
  }, [e]), f = l.useCallback((w) => {
    e(Ut(w));
  }, [e]), S = l.useCallback(() => {
    e(ot({ category: "" }));
  }, [e]), k = l.useCallback((w) => e(Yt({ modalType: w, isOpen: true })), [e]), ue = l.useCallback((w) => {
    i((R) => R === w ? null : w);
  }, [e]);
  return a.jsxs("div", { className: "catalog_page relative pt-[120px] pb-[200px] bg-[#040A0A]", children: [a.jsxs("picture", { children: [a.jsx("source", { srcSet: "./img/PagesImg/CatalogImg/AdaptiveFlowerLeft.png 640w", media: "(max-width: 767px)" }), a.jsx("img", { className: "absolute md:top-0 left-0 md:w-[700px] md:h-[700px] max-md:w-[80px] max-md:h-[150px] max-md:top-[14rem] z-20", src: "./img/PagesImg/CatalogImg/CatalogFlowerLeft.png", srcSet: "./img/PagesImg/CatalogImg/CatalogFlowerLeft.png 1280w, ./img/PagesImg/CatalogImg/AdaptiveFlowerLeft.png 640w", loading: "lazy", alt: "flower" })] }), a.jsx(H, { className: "absolute lg:top-0 max-lg:top-[10rem] lg:right-0 max-lg:left-0 lg:w-[393px] lg:h-[280px] max-lg:h-[90px] max-lg:w-[200px] bg-cherry rounded-[393px] max-lg:rotate-[33deg] lg:blur-[125px] max-lg:blur-[100px] select-none" }), a.jsx(H, { className: "absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px] select-none" }), a.jsx(H, { className: "absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none max-lg:hidden" }), a.jsx(H, { className: "absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none max-lg:hidden" }), a.jsx(H, { className: "absolute lg:top-[95rem] max-lg:top-[65rem] left-0 lg:w-[750px] lg:h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px] select-none max-lg:h-[180px] max-lg:w-[300px] max-sm:w-[200px]" }), a.jsxs("picture", { children: [a.jsx("source", { srcSet: "./img/PagesImg/CatalogImg/AdaptiveFlowerRight.png 640w", media: "(max-width: 767px)" }), a.jsx("img", { className: "absolute lg:top-0 right-0 md:w-[700px] md:h-[1100px] max-md:w-[150px] max-md:h-[220px] max-md:top-[7rem]", src: "./img/PagesImg/CatalogImg/CatalogFlowerRight.png", srcSet: "./img/PagesImg/CatalogImg/CatalogFlowerRight.png 1280w, ./img/PagesImg/CatalogImg/AdaptiveFlowerRight.png 640w", loading: "lazy", alt: "flower" })] }), a.jsxs("div", { className: "catalog_page__wrapper container mx-auto", children: [a.jsxs("div", { className: "flex justify-between", children: [a.jsx(Ra, { screenWidth: t, categoryId: r, onClickCategory: v }), t >= 1024 && a.jsx(La, { openModal: k, cartItems: b })] }), a.jsxs("div", { className: "catalog_page__content flex flex-col mt-8", children: [a.jsxs("div", { className: "flex justify-between relative z-30", children: [t >= 768 && a.jsx(Ca, { categoryId: r, onClear: S }), t >= 768 && a.jsx(bt, { sortValue: o, screenWidth: t, handleSortValue: f }), t <= 768 && a.jsx(Ea, { blockId: g, screenWidth: t, category: r, sortValue: o, handleSortValue: f, onClickAdaptiveBlock: ue, onClickCategory: v })] }), a.jsxs("div", { className: "flex", children: [t >= 768 && a.jsx("div", { className: "catalog_page__sticky w-[255px]", children: a.jsx(ft, {}) }), a.jsx("div", { className: "catalog_page__cards relative grid lg:grid-cols-[repeat(3,_255px)] max-lg:grid-cols-[repeat(2,_255px)] max-md:grid-cols-[repeat(1,_255px)] mx-auto gap-x-7 gap-y-14 mt-3", children: d === "error" ? a.jsx("h1", { className: "mt-4 text-[18px] font-normal uppercase w-[600px]", children: "\u041D\u0438\u0447\u0435\u0433\u043E \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" }) : d === "success" ? c.map((w) => a.jsx(Wt, { id: w.id, name: w.name, cost: w.cost, imageUrl: w.imageUrl, filters: w.filters, categories: w.categories, imgClassName: "h-[335px]" }, w.name)) : _a })] })] })] }), a.jsx(Kt, {}), a.jsx(H, { className: "absolute -bottom-[13rem] right-[15rem] w-[800px] h-[212px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px] select-none z-0" }), a.jsx(Gt, {})] });
};
export {
  $a as default
};
