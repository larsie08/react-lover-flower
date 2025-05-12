import { j as a, r as l, f as jt, K as be, t as Nt, L as Lt, N as Ge, O as _e, Q as Xe, S as et, T as Be, a as Pt, g as It, c as ce, u as At, U as Tt, V as W, s as ee, b as Y, d as Rt, m as de, e as Qe, W as tt, X as at, q as rt, Y as mt, Z as pe, A as xt, _ as Ft, D as q, $ as Et, E as Ve, a0 as gt, x as Mt, a1 as zt, a2 as _t, a3 as Bt, a4 as Vt, a5 as Ot, a6 as $t, a7 as Ze, a8 as ht, P as Dt, a9 as I, aa as Ht, ab as qt, ac as st, ad as Ut, F as ot, M as nt, ae as Wt, af as Yt, ag as Kt, ah as Gt } from "./index-B90y6GGM.js";
import { v as Xt } from "./visuallyHidden-Dan1xhjv.js";
import { T as Zt } from "./index-w2Go94SE.js";
import { C as Qt } from "./Collapse-B3Zaxu1g.js";
const Jt = () => a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [a.jsx("path", { d: "M10.4453 3.15918L10.8413 3.5551L3.5551 10.8407L3.15918 10.4451L10.4453 3.15918Z", fill: "#43FFD2" }), a.jsx("path", { d: "M3.5551 3.15918L10.8413 10.4448L10.4453 10.841L3.15918 3.55538L3.5551 3.15918Z", fill: "#43FFD2" })] }), ea = () => a.jsx("svg", { className: "absolute -top-[2px] -left-[1px]", width: "14px", height: "14px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z", fill: "white" }) });
function ta(e, t, r = (s, c) => s === c) {
  return e.length === t.length && e.every((s, c) => r(s, t[c]));
}
const aa = 2;
function ie(e, t, r, s, c) {
  return r === 1 ? Math.min(e + t, c) : Math.max(e - t, s);
}
function ft(e, t) {
  return e - t;
}
function lt(e, t) {
  const { index: r } = e.reduce((s, c, u) => {
    const f = Math.abs(t - c);
    return s === null || f < s.distance || f === s.distance ? { distance: f, index: u } : s;
  }, null) ?? {};
  return r;
}
function Ae(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let s = 0; s < r.changedTouches.length; s += 1) {
      const c = r.changedTouches[s];
      if (c.identifier === t.current) return { x: c.clientX, y: c.clientY };
    }
    return false;
  }
  return { x: e.clientX, y: e.clientY };
}
function Oe(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function ra(e, t, r) {
  return (r - t) * e + t;
}
function sa(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), s = r[0].split(".")[1];
    return (s ? s.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function oa(e, t, r) {
  const s = Math.round((e - r) / t) * t + r;
  return Number(s.toFixed(sa(t)));
}
function it({ values: e, newValue: t, index: r }) {
  const s = e.slice();
  return s[r] = t, s.sort(ft);
}
function Te({ sliderRef: e, activeIndex: t, setActive: r }) {
  var _a, _b, _c;
  const s = _e(e.current);
  (!((_a = e.current) == null ? void 0 : _a.contains(s.activeElement)) || Number((_b = s == null ? void 0 : s.activeElement) == null ? void 0 : _b.getAttribute("data-index")) !== t) && ((_c = e.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${t}"]`).focus()), r && r(t);
}
function Re(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? ta(e, t) : false;
}
const na = { horizontal: { offset: (e) => ({ left: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, "horizontal-reverse": { offset: (e) => ({ right: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, vertical: { offset: (e) => ({ bottom: `${e}%` }), leap: (e) => ({ height: `${e}%` }) } }, la = (e) => e;
let Fe;
function ct() {
  return Fe === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Fe = CSS.supports("touch-action", "none") : Fe = true), Fe;
}
function ia(e) {
  const { "aria-labelledby": t, defaultValue: r, disabled: s = false, disableSwap: c = false, isRtl: u = false, marks: f = false, max: g = 100, min: i = 0, name: k, onChange: b, onChangeCommitted: w, orientation: v = "horizontal", rootRef: ue, scale: te = la, step: R = 1, shiftStep: $ = 10, tabIndex: j, value: me } = e, B = l.useRef(void 0), [D, ae] = l.useState(-1), [Je, re] = l.useState(-1), [ve, ke] = l.useState(false), se = l.useRef(0), xe = l.useRef(null), [M, F] = jt({ controlled: me, default: r ?? i, name: "Slider" }), L = b && ((n, o, p) => {
    const x = n.nativeEvent || n, m = new x.constructor(x.type, x);
    Object.defineProperty(m, "target", { writable: true, value: { value: o, name: k } }), xe.current = o, b(m, o, p);
  }), oe = Array.isArray(M);
  let S = oe ? M.slice().sort(ft) : [M];
  S = S.map((n) => n == null ? i : be(n, i, g));
  const ge = f === true && R !== null ? [...Array(Math.floor((g - i) / R) + 1)].map((n, o) => ({ value: i + R * o })) : f || [], y = ge.map((n) => n.value), [U, ne] = l.useState(-1), h = l.useRef(null), K = Nt(ue, h), $e = (n) => (o) => {
    var _a;
    const p = Number(o.currentTarget.getAttribute("data-index"));
    et(o.target) && ne(p), re(p), (_a = n == null ? void 0 : n.onFocus) == null ? void 0 : _a.call(n, o);
  }, De = (n) => (o) => {
    var _a;
    et(o.target) || ne(-1), re(-1), (_a = n == null ? void 0 : n.onBlur) == null ? void 0 : _a.call(n, o);
  }, we = (n, o) => {
    const p = Number(n.currentTarget.getAttribute("data-index")), x = S[p], m = y.indexOf(x);
    let d = o;
    if (ge && R == null) {
      const E = y[y.length - 1];
      d >= E ? d = E : d <= y[0] ? d = y[0] : d = d < x ? y[m - 1] : y[m + 1];
    }
    if (d = be(d, i, g), oe) {
      c && (d = be(d, S[p - 1] || -1 / 0, S[p + 1] || 1 / 0));
      const E = d;
      d = it({ values: S, newValue: d, index: p });
      let z = p;
      c || (z = d.indexOf(E)), Te({ sliderRef: h, activeIndex: z });
    }
    F(d), ne(p), L && !Re(d, M) && L(n, d, p), w && w(n, xe.current ?? d);
  }, He = (n) => (o) => {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(o.key)) {
      o.preventDefault();
      const p = Number(o.currentTarget.getAttribute("data-index")), x = S[p];
      let m = null;
      if (R != null) {
        const d = o.shiftKey ? $ : R;
        switch (o.key) {
          case "ArrowUp":
            m = ie(x, d, 1, i, g);
            break;
          case "ArrowRight":
            m = ie(x, d, u ? -1 : 1, i, g);
            break;
          case "ArrowDown":
            m = ie(x, d, -1, i, g);
            break;
          case "ArrowLeft":
            m = ie(x, d, u ? 1 : -1, i, g);
            break;
          case "PageUp":
            m = ie(x, $, 1, i, g);
            break;
          case "PageDown":
            m = ie(x, $, -1, i, g);
            break;
          case "Home":
            m = i;
            break;
          case "End":
            m = g;
            break;
        }
      } else if (ge) {
        const d = y[y.length - 1], E = y.indexOf(x), z = [u ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], N = [u ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        z.includes(o.key) ? E === 0 ? m = y[0] : m = y[E - 1] : N.includes(o.key) && (E === y.length - 1 ? m = d : m = y[E + 1]);
      }
      m != null && we(o, m);
    }
    (_a = n == null ? void 0 : n.onKeyDown) == null ? void 0 : _a.call(n, o);
  };
  Lt(() => {
    var _a;
    s && h.current.contains(document.activeElement) && ((_a = document.activeElement) == null ? void 0 : _a.blur());
  }, [s]), s && D !== -1 && ae(-1), s && U !== -1 && ne(-1);
  const ye = (n) => (o) => {
    var _a;
    (_a = n.onChange) == null ? void 0 : _a.call(n, o), we(o, o.target.valueAsNumber);
  }, G = l.useRef(void 0);
  let X = v;
  u && v === "horizontal" && (X += "-reverse");
  const Z = ({ finger: n, move: o = false }) => {
    const { current: p } = h, { width: x, height: m, bottom: d, left: E } = p.getBoundingClientRect();
    let z;
    X.startsWith("vertical") ? z = (d - n.y) / m : z = (n.x - E) / x, X.includes("-reverse") && (z = 1 - z);
    let N;
    if (N = ra(z, i, g), R) N = oa(N, R, i);
    else {
      const fe = lt(y, N);
      N = y[fe];
    }
    N = be(N, i, g);
    let O = 0;
    if (oe) {
      o ? O = G.current : O = lt(S, N), c && (N = be(N, S[O - 1] || -1 / 0, S[O + 1] || 1 / 0));
      const fe = N;
      N = it({ values: S, newValue: N, index: O }), c && o || (O = N.indexOf(fe), G.current = O);
    }
    return { newValue: N, activeIndex: O };
  }, Q = Ge((n) => {
    const o = Ae(n, B);
    if (!o) return;
    if (se.current += 1, n.type === "mousemove" && n.buttons === 0) {
      V(n);
      return;
    }
    const { newValue: p, activeIndex: x } = Z({ finger: o, move: true });
    Te({ sliderRef: h, activeIndex: x, setActive: ae }), F(p), !ve && se.current > aa && ke(true), L && !Re(p, M) && L(n, p, x);
  }), V = Ge((n) => {
    const o = Ae(n, B);
    if (ke(false), !o) return;
    const { newValue: p } = Z({ finger: o, move: true });
    ae(-1), n.type === "touchend" && re(-1), w && w(n, xe.current ?? p), B.current = void 0, J();
  }), A = Ge((n) => {
    if (s) return;
    ct() || n.preventDefault();
    const o = n.changedTouches[0];
    o != null && (B.current = o.identifier);
    const p = Ae(n, B);
    if (p !== false) {
      const { newValue: m, activeIndex: d } = Z({ finger: p });
      Te({ sliderRef: h, activeIndex: d, setActive: ae }), F(m), L && !Re(m, M) && L(n, m, d);
    }
    se.current = 0;
    const x = _e(h.current);
    x.addEventListener("touchmove", Q, { passive: true }), x.addEventListener("touchend", V, { passive: true });
  }), J = l.useCallback(() => {
    const n = _e(h.current);
    n.removeEventListener("mousemove", Q), n.removeEventListener("mouseup", V), n.removeEventListener("touchmove", Q), n.removeEventListener("touchend", V);
  }, [V, Q]);
  l.useEffect(() => {
    const { current: n } = h;
    return n.addEventListener("touchstart", A, { passive: ct() }), () => {
      n.removeEventListener("touchstart", A), J();
    };
  }, [J, A]), l.useEffect(() => {
    s && J();
  }, [s, J]);
  const qe = (n) => (o) => {
    var _a;
    if ((_a = n.onMouseDown) == null ? void 0 : _a.call(n, o), s || o.defaultPrevented || o.button !== 0) return;
    o.preventDefault();
    const p = Ae(o, B);
    if (p !== false) {
      const { newValue: m, activeIndex: d } = Z({ finger: p });
      Te({ sliderRef: h, activeIndex: d, setActive: ae }), F(m), L && !Re(m, M) && L(o, m, d);
    }
    se.current = 0;
    const x = _e(h.current);
    x.addEventListener("mousemove", Q, { passive: true }), x.addEventListener("mouseup", V);
  }, Se = Oe(oe ? S[0] : i, i, g), T = Oe(S[S.length - 1], i, g) - Se, he = (n = {}) => {
    const o = Xe(n), p = { onMouseDown: qe(o || {}) }, x = { ...o, ...p };
    return { ...n, ref: K, ...x };
  }, Ce = (n) => (o) => {
    var _a;
    (_a = n.onMouseOver) == null ? void 0 : _a.call(n, o);
    const p = Number(o.currentTarget.getAttribute("data-index"));
    re(p);
  }, je = (n) => (o) => {
    var _a;
    (_a = n.onMouseLeave) == null ? void 0 : _a.call(n, o), re(-1);
  }, Ne = (n = {}) => {
    const o = Xe(n), p = { onMouseOver: Ce(o || {}), onMouseLeave: je(o || {}) };
    return { ...n, ...o, ...p };
  }, Le = (n) => ({ pointerEvents: D !== -1 && D !== n ? "none" : void 0 });
  let le;
  return v === "vertical" && (le = u ? "vertical-rl" : "vertical-lr"), { active: D, axis: X, axisProps: na, dragging: ve, focusedThumbIndex: U, getHiddenInputProps: (n = {}) => {
    const o = Xe(n), p = { onChange: ye(o || {}), onFocus: $e(o || {}), onBlur: De(o || {}), onKeyDown: He(o || {}) }, x = { ...o, ...p };
    return { tabIndex: j, "aria-labelledby": t, "aria-orientation": v, "aria-valuemax": te(g), "aria-valuemin": te(i), name: k, type: "range", min: e.min, max: e.max, step: e.step === null && e.marks ? "any" : e.step ?? void 0, disabled: s, ...n, ...x, style: { ...Xt, direction: u ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: le } };
  }, getRootProps: he, getThumbProps: Ne, marks: ge, open: Je, range: oe, rootRef: K, trackLeap: T, trackOffset: Se, values: S, getThumbStyle: Le };
}
const ca = (e) => !e || !Be(e);
function pa(e) {
  return It("MuiSlider", e);
}
const _ = Pt("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), da = (e) => {
  const { open: t } = e;
  return { offset: ce(t && _.valueLabelOpen), circle: _.valueLabelCircle, label: _.valueLabelLabel };
};
function ua(e) {
  const { children: t, className: r, value: s } = e, c = da(e);
  return t ? l.cloneElement(t, { className: ce(t.props.className) }, a.jsxs(l.Fragment, { children: [t.props.children, a.jsx("span", { className: ce(c.offset, r), "aria-hidden": true, children: a.jsx("span", { className: c.circle, children: a.jsx("span", { className: c.label, children: s }) }) })] })) : null;
}
function pt(e) {
  return e;
}
const ma = ee("span", { name: "MuiSlider", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[`color${Y(r.color)}`], r.size !== "medium" && t[`size${Y(r.size)}`], r.marked && t.marked, r.orientation === "vertical" && t.vertical, r.track === "inverted" && t.trackInverted, r.track === false && t.trackFalse];
} })(de(({ theme: e }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${_.disabled}`]: { pointerEvents: "none", cursor: "default", color: (e.vars || e).palette.grey[400] }, [`&.${_.dragging}`]: { [`& .${_.thumb}, & .${_.track}`]: { transition: "none" } }, variants: [...Object.entries(e.palette).filter(Qe()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), xa = ee("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (e, t) => t.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), ga = ee("span", { name: "MuiSlider", slot: "Track", overridesResolver: (e, t) => t.track })(de(({ theme: e }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: e.transitions.create(["left", "width", "bottom", "height"], { duration: e.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(e.palette).filter(Qe()).map(([t]) => ({ props: { color: t, track: "inverted" }, style: { ...e.vars ? { backgroundColor: e.vars.palette.Slider[`${t}Track`], borderColor: e.vars.palette.Slider[`${t}Track`] } : { backgroundColor: tt(e.palette[t].main, 0.62), borderColor: tt(e.palette[t].main, 0.62), ...e.applyStyles("dark", { backgroundColor: at(e.palette[t].main, 0.5) }), ...e.applyStyles("dark", { borderColor: at(e.palette[t].main, 0.5) }) } } }))] }))), ha = ee("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.thumb, t[`thumbColor${Y(r.color)}`], r.size !== "medium" && t[`thumbSize${Y(r.size)}`]];
} })(de(({ theme: e }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: e.transitions.create(["box-shadow", "left", "bottom"], { duration: e.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (e.vars || e).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${_.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(e.palette).filter(Qe()).map(([t]) => ({ props: { color: t }, style: { [`&:hover, &.${_.focusVisible}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${rt(e.palette[t].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${_.active}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${rt(e.palette[t].main, 0.16)}` } } } }))] }))), fa = ee(ua, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (e, t) => t.valueLabel })(de(({ theme: e }) => ({ zIndex: 1, whiteSpace: "nowrap", ...e.typography.body2, fontWeight: 500, transition: e.transitions.create(["transform"], { duration: e.transitions.duration.shortest }), position: "absolute", backgroundColor: (e.vars || e).palette.grey[600], borderRadius: 2, color: (e.vars || e).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${_.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${_.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: e.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), ba = ee("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (e) => mt(e) && e !== "markActive", overridesResolver: (e, t) => {
  const { markActive: r } = e;
  return [t.mark, r && t.markActive];
} })(de(({ theme: e }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (e.vars || e).palette.background.paper, opacity: 0.8 } }] }))), va = ee("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (e) => mt(e) && e !== "markLabelActive", overridesResolver: (e, t) => t.markLabel })(de(({ theme: e }) => ({ ...e.typography.body2, color: (e.vars || e).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (e.vars || e).palette.text.primary } }] }))), ka = (e) => {
  const { disabled: t, dragging: r, marked: s, orientation: c, track: u, classes: f, color: g, size: i } = e, k = { root: ["root", t && "disabled", r && "dragging", s && "marked", c === "vertical" && "vertical", u === "inverted" && "trackInverted", u === false && "trackFalse", g && `color${Y(g)}`, i && `size${Y(i)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", t && "disabled", i && `thumbSize${Y(i)}`, g && `thumbColor${Y(g)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return Rt(k, pa, f);
}, wa = ({ children: e }) => e, ya = l.forwardRef(function(t, r) {
  const s = At({ props: t, name: "MuiSlider" }), c = Tt(), { "aria-label": u, "aria-valuetext": f, "aria-labelledby": g, component: i = "span", components: k = {}, componentsProps: b = {}, color: w = "primary", classes: v, className: ue, disableSwap: te = false, disabled: R = false, getAriaLabel: $, getAriaValueText: j, marks: me = false, max: B = 100, min: D = 0, name: ae, onChange: Je, onChangeCommitted: re, orientation: ve = "horizontal", shiftStep: ke = 10, size: se = "medium", step: xe = 1, scale: M = pt, slotProps: F, slots: L, tabIndex: oe, track: S = "normal", value: ge, valueLabelDisplay: y = "off", valueLabelFormat: U = pt, ...ne } = s, h = { ...s, isRtl: c, max: B, min: D, classes: v, disabled: R, disableSwap: te, orientation: ve, marks: me, color: w, size: se, step: xe, shiftStep: ke, scale: M, track: S, valueLabelDisplay: y, valueLabelFormat: U }, { axisProps: K, getRootProps: $e, getHiddenInputProps: De, getThumbProps: we, open: He, active: ye, axis: G, focusedThumbIndex: X, range: Z, dragging: Q, marks: V, values: A, trackOffset: J, trackLeap: qe, getThumbStyle: Se } = ia({ ...h, rootRef: r });
  h.marked = V.length > 0 && V.some((C) => C.label), h.dragging = Q, h.focusedThumbIndex = X;
  const T = ka(h), he = (L == null ? void 0 : L.root) ?? k.Root ?? ma, Ce = (L == null ? void 0 : L.rail) ?? k.Rail ?? xa, je = (L == null ? void 0 : L.track) ?? k.Track ?? ga, Ne = (L == null ? void 0 : L.thumb) ?? k.Thumb ?? ha, Le = (L == null ? void 0 : L.valueLabel) ?? k.ValueLabel ?? fa, le = (L == null ? void 0 : L.mark) ?? k.Mark ?? ba, Pe = (L == null ? void 0 : L.markLabel) ?? k.MarkLabel ?? va, n = (L == null ? void 0 : L.input) ?? k.Input ?? "input", o = (F == null ? void 0 : F.root) ?? b.root, p = (F == null ? void 0 : F.rail) ?? b.rail, x = (F == null ? void 0 : F.track) ?? b.track, m = (F == null ? void 0 : F.thumb) ?? b.thumb, d = (F == null ? void 0 : F.valueLabel) ?? b.valueLabel, E = (F == null ? void 0 : F.mark) ?? b.mark, z = (F == null ? void 0 : F.markLabel) ?? b.markLabel, N = (F == null ? void 0 : F.input) ?? b.input, O = W({ elementType: he, getSlotProps: $e, externalSlotProps: o, externalForwardedProps: ne, additionalProps: { ...ca(he) && { as: i } }, ownerState: { ...h, ...o == null ? void 0 : o.ownerState }, className: [T.root, ue] }), fe = W({ elementType: Ce, externalSlotProps: p, ownerState: h, className: T.rail }), yt = W({ elementType: je, externalSlotProps: x, additionalProps: { style: { ...K[G].offset(J), ...K[G].leap(qe) } }, ownerState: { ...h, ...x == null ? void 0 : x.ownerState }, className: T.track }), Ue = W({ elementType: Ne, getSlotProps: we, externalSlotProps: m, ownerState: { ...h, ...m == null ? void 0 : m.ownerState }, className: T.thumb }), St = W({ elementType: Le, externalSlotProps: d, ownerState: { ...h, ...d == null ? void 0 : d.ownerState }, className: T.valueLabel }), We = W({ elementType: le, externalSlotProps: E, ownerState: h, className: T.mark }), Ye = W({ elementType: Pe, externalSlotProps: z, ownerState: h, className: T.markLabel }), Ct = W({ elementType: n, getSlotProps: De, externalSlotProps: N, ownerState: h });
  return a.jsxs(he, { ...O, children: [a.jsx(Ce, { ...fe }), a.jsx(je, { ...yt }), V.filter((C) => C.value >= D && C.value <= B).map((C, P) => {
    const Ke = Oe(C.value, D, B), Ie = K[G].offset(Ke);
    let H;
    return S === false ? H = A.includes(C.value) : H = S === "normal" && (Z ? C.value >= A[0] && C.value <= A[A.length - 1] : C.value <= A[0]) || S === "inverted" && (Z ? C.value <= A[0] || C.value >= A[A.length - 1] : C.value >= A[0]), a.jsxs(l.Fragment, { children: [a.jsx(le, { "data-index": P, ...We, ...!Be(le) && { markActive: H }, style: { ...Ie, ...We.style }, className: ce(We.className, H && T.markActive) }), C.label != null ? a.jsx(Pe, { "aria-hidden": true, "data-index": P, ...Ye, ...!Be(Pe) && { markLabelActive: H }, style: { ...Ie, ...Ye.style }, className: ce(T.markLabel, Ye.className, H && T.markLabelActive), children: C.label }) : null] }, P);
  }), A.map((C, P) => {
    const Ke = Oe(C, D, B), Ie = K[G].offset(Ke), H = y === "off" ? wa : Le;
    return a.jsx(H, { ...!Be(H) && { valueLabelFormat: U, valueLabelDisplay: y, value: typeof U == "function" ? U(M(C), P) : U, index: P, open: He === P || ye === P || y === "on", disabled: R }, ...St, children: a.jsx(Ne, { "data-index": P, ...Ue, className: ce(T.thumb, Ue.className, ye === P && T.active, X === P && T.focusVisible), style: { ...Ie, ...Se(P), ...Ue.style }, children: a.jsx(n, { "data-index": P, "aria-label": $ ? $(P) : u, "aria-valuenow": M(C), "aria-labelledby": g, "aria-valuetext": j ? j(M(C), P) : f, value: A[P], ...Ct }) }) }, P);
  })] });
}), Sa = l.memo(({ categoryId: e, onClear: t }) => a.jsx("div", { className: "flex items-end ml-[30rem] ", children: a.jsxs("div", { className: "flex gap-2 h-6", children: [a.jsx("h3", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: e }), a.jsx("button", { className: pe({ invisible: e === "" }), onClick: t, children: a.jsx(Jt, {}) })] }) })), Ca = () => {
  const e = xt(), t = () => e(Ft(true));
  return a.jsx("div", { className: "confirm_modal absolute -right-4 -top-[9px] z-20", children: a.jsx("div", { className: "relative", children: a.jsx("button", { onClick: t, className: "text-cherry p-2 bg-light-turquoise rounded-lg", children: "\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C" }) }) });
}, Ee = l.memo(({ title: e, options: t, currentId: r, handleClick: s, isOptionSelected: c }) => a.jsxs("div", { className: "light_block flex flex-col gap-2", children: [a.jsx("h2", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: e }), a.jsx("ul", { className: "flex flex-col gap-1", children: t.map(({ id: u, name: f }) => a.jsxs("li", { className: "flex gap-1 relative", children: [a.jsxs("label", { onClick: () => s(u), className: "group/light_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer", children: [a.jsx(q, { className: "relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]", children: c(u) && a.jsx(ea, {}) }), a.jsxs("span", { className: "relative group-hover/light_filter:text-light-turquoise duration-200 transition-all", children: [f, a.jsx(q, { className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/light_filter:w-full group-hover/light_filter:visible transition-all duration-200" })] })] }), r === u && a.jsx(Ca, {})] }, u)) })] })), ja = l.memo(({ lowerFieldValue: e, upperFieldValue: t, value: r, handleSliderChange: s }) => a.jsxs("div", { className: "range_block flex flex-col gap-2", children: [a.jsx("h2", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: "\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C" }), a.jsxs("form", { className: "flex flex-col w-full", children: [a.jsx("div", { className: "group__range_inputs h-[15px] relative", children: a.jsx(ya, { size: "small", min: e, max: t, value: r, onChange: s }) }), a.jsxs("label", { className: "text-[12px] mt-2.5 font-light tracking-[0.48px] uppercase", htmlFor: "range", children: ["\u0426\u0435\u043D\u0430: ", r[0], " \u20BD \u2013 ", r[1], " \u20BD"] })] })] })), Me = { format: [{ id: "bouquet", name: "\u0431\u0443\u043A\u0435\u0442" }, { id: "vase", name: "\u0432 \u0432\u0430\u0437\u0435" }, { id: "envelope", name: "\u0432 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0435" }, { id: "basket", name: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435" }, { id: "hatbox", name: "\u0432 \u0448\u043B\u044F\u043F\u043D\u043E\u0439 \u043A\u043E\u0440\u043E\u0431\u043A\u0435" }, { id: "box", name: "\u0432 \u044F\u0449\u0438\u043A\u0435" }], colors: [{ id: "white", name: "\u0431\u0435\u043B\u044B\u0439" }, { id: "yellow", name: "\u0436\u0435\u043B\u0442\u044B\u0439" }, { id: "green", name: "\u0437\u0435\u043B\u0435\u043D\u044B\u0439" }, { id: "red", name: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439" }, { id: "orange", name: "\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439" }, { id: "pink", name: "\u0440\u043E\u0437\u043E\u0432\u044B\u0439" }, { id: "blue", name: "\u0441\u0438\u043D\u0438\u0439" }], lighting: [{ id: "gentle", name: "\u043D\u0435\u0436\u043D\u044B\u0435" }, { id: "light", name: "\u044F\u0440\u043A\u0438\u0435" }], flowers: [{ id: "Alstroemeria", name: "\u0410\u043B\u044C\u0441\u0442\u0440\u043E\u043C\u0435\u0440\u0438\u044F (2)" }, { id: "Anthurium", name: "\u0410\u043D\u0442\u0443\u0440\u0438\u0443\u043C (1)" }, { id: "Asparagus", name: "\u0410\u0441\u043F\u0430\u0440\u0430\u0433\u0443\u0441 (1)" }, { id: "Astilba", name: "\u0410\u0441\u0442\u0438\u043B\u044C\u0431\u0430 (7)" }, { id: "Astrance", name: "\u0410\u0441\u0442\u0440\u0430\u043D\u0446\u0438\u044F (1)" }] }, dt = 800, ut = 2500, bt = l.memo(() => {
  const e = Et(), [t, r] = l.useState([dt, ut]), [s, c] = l.useState(null), { filtersId: u } = Ve(gt), f = l.useMemo(() => Mt((w) => {
    e(zt(w));
  }, 250), [e]), g = l.useCallback((w, v) => {
    r(v), f(v);
  }, [f]), i = l.useCallback((w) => {
    c(w), e(_t(w));
  }, [e]), k = () => {
    c(null), e(Bt());
  }, b = l.useCallback((w) => u.includes(w), [u]);
  return l.useEffect(() => {
    if (s) {
      const w = setTimeout(() => c(null), 1e4);
      return () => clearTimeout(w);
    }
  }, [s]), a.jsxs("div", { className: "md:sticky md:top-20 md:bottom-6 flex flex-col gap-5 p-5 bg-[#000]/[0.30] rounded-[20px] backdrop-blur-[10px] select-none", children: [a.jsx(Ee, { title: "\u041F\u043E \u0441\u0432\u0435\u0442\u0443", options: Me.lighting, handleClick: i, isOptionSelected: b, currentId: s }), a.jsx(Ee, { title: "\u041F\u043E \u0446\u0432\u0435\u0442\u0443", options: Me.colors, handleClick: i, isOptionSelected: b, currentId: s }), a.jsx(Ee, { title: "\u041F\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0443", options: Me.format, handleClick: i, isOptionSelected: b, currentId: s }), a.jsx(ja, { lowerFieldValue: dt, upperFieldValue: ut, value: t, handleSliderChange: g }), a.jsx(Ee, { title: "\u041F\u043E \u0446\u0432\u0435\u0442\u043A\u0443", options: Me.flowers, handleClick: i, isOptionSelected: b, currentId: s }), a.jsx("button", { onClick: k, className: "border-[1px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]", children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440" })] });
}), Na = l.memo(({ openModal: e, openCart: t, cartItems: r }) => a.jsxs("div", { className: "flex flex-col justify-between", children: [a.jsx("div", { className: "socials flex justify-end mt-20", children: a.jsx(Vt, {}) }), a.jsxs("div", { className: "footer_buttons flex flex-col items-end justify-center", children: [a.jsx("h3", { className: "phone text-[16px] relative z-20 mt-14 font-normal tracking-[1.6px] uppercase", children: "+375 (29) 113-69-69" }), a.jsxs("button", { onClick: e, className: "call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px]", children: [a.jsx(Ot, {}), a.jsx("p", { className: "text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise", children: "\u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A" })] }), a.jsxs("button", { onClick: t, className: "cart flex mt-5 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px] p-[15px]", children: [a.jsx($t, {}), a.jsx("svg", { className: "absolute right-[8px] top-[10px]", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", viewBox: "0 0 16 17", fill: "none", children: a.jsx("circle", { cx: "8", cy: "8.86523", r: "8", fill: "#43FFD2" }) }), a.jsx("p", { className: pe("text-dark-green absolute right-[13px] top-[10px] text-standart", { "right-0 left-10": r.length >= 10 }), children: r.length })] })] })] })), ze = [{ name: "\u043F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438", sortProperty: Ze.RATING }, { name: "\u043F\u043E \u0446\u0435\u043D\u0435", sortProperty: Ze.COST }, { name: "\u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443", sortProperty: Ze.NAME }], vt = l.memo(({ sortValue: e, handleSortValue: t, screenWidth: r, adaptiveIsOpen: s }) => {
  const c = l.useRef(null), [u, f] = l.useState(false), [g, i] = l.useState(ze[0].name), k = l.useMemo(() => r >= 768 ? ze.filter((v) => v.sortProperty !== e.sortProperty) : ze, [r, ze, e]), b = (v) => {
    c.current && !v.composedPath().includes(c.current) && f(false);
  }, w = (v) => {
    t(v), i(v.name), f(false);
  };
  return l.useEffect(() => (u ? document.addEventListener("click", b) : document.removeEventListener("click", b), () => document.removeEventListener("click", b)), [u, b]), a.jsxs("ul", { ref: c, className: "catalog_page__sort relative flex flex-col w-[260px] md:gap-2 md:p-3 md:rounded-[10px] md:bg-[#000]/[.20] md:backdrop-blur-[10px] z-30 select-none", children: [r >= 768 && a.jsxs("div", { onClick: () => f(!u), className: "flex justify-between items-center cursor-pointer", children: [a.jsx("span", { className: "text-[12px] font-light tracking-[0.48px] uppercase", children: e.name }), a.jsx(ht, { isOpen: u })] }), a.jsx("div", { className: pe("popup md:absolute md:left-0 md:top-[42px] p-3 w-[260px] flex flex-col gap-2 rounded-[5px] md:bg-[#000]/[.40] z-30 transition-all duration-150", { "visible md:h-[70px] opacity-100": u || s, "invisible h-0 opacity-0": !u && !s }), children: k.map((v) => a.jsxs("li", { onClick: () => w(v), className: "flex items-center gap-2 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer", children: [a.jsx(q, { className: pe("relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]", { "bg-light-turquoise": g === v.name }) }), a.jsx("p", { children: v.name })] }, v.name)) })] });
}), kt = l.memo(({ category: e, isSelectedCategory: t, onClickCategory: r }) => a.jsx("li", { className: pe("lg:p-5 max-lg:p-3 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] transition-all uppercase cursor-pointer hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]", { "bg-light-turquoise text-[black]": t }), onClick: () => r(e.name), children: e.name })), La = [{ text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", path: "/" }, { text: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433", path: "/catalog" }], wt = [{ name: I.GypsophilaBouquets }, { name: I.ChamomileBouquets }, { name: I.ChrysanthemumBouquets }, { name: I.PottedIndoorPlants }, { name: I.MonoBouquets }, { name: I.AssortedBouquets }, { name: I.HolidayBouquets }, { name: I.FlowerCompositions }, { name: I.Envelopes }, { name: I.GreetingCards }, { name: I.Gifts }, { name: I.DriedFlowerBouquets }, { name: I.Balloons }, { name: I.PopularItems }, { name: I.RoseBouquets }, { name: I.FuneralFlowers }, { name: I.GiftWrapping }], Pa = "lg:h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase max-md:text-[40px]", Ia = "ml-[270px] lg:h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase max-md:ml-[4rem] max-md:text-[40px]", Aa = () => a.jsx("p", { className: "max-w-[430px] text-left break-words whitespace-normal mt-5 lg:ml-[270px] text-[14px] font-normal tracking-[0.56px] uppercase max-md:ml-[4rem]", children: "\u0412 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0441\u0430\u043C\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0432\u044B\u0431\u043E\u0440 \u0431\u0443\u043A\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439:" }), Ta = l.memo(({ categoryId: e, onClickCategory: t, screenWidth: r }) => a.jsxs("div", { className: "relative z-10", children: [a.jsx(Dt, { items: [...La, ...e ? [{ text: e, path: "/catalog" }] : []] }), a.jsxs("div", { className: "max-w-[950px] mt-5 p-5 lg:bg-[#000]/[0.30] lg:backdrop-blur-[10px] lg:rounded-[20px]", children: [a.jsx(Zt, { title: "\u043A\u0430\u0442\u0430\u043B\u043E\u0433", titleClassName: Pa, subtitle: "\u0431\u0443\u043A\u0435\u0442\u043E\u0432", subtitleClassName: Ia, renderTitleText: Aa }), r > 768 && a.jsx("ul", { className: "category_block flex flex-wrap gap-3 mt-16 select-none", children: wt.map((s) => a.jsx(kt, { category: s, isSelectedCategory: e === s.name, onClickCategory: t }, s.name)) })] })] })), Ra = ({ textButton: e, isOpen: t, onClickAdaptiveBlock: r, children: s }) => a.jsxs(a.Fragment, { children: [a.jsxs("div", { onClick: r, className: "flex gap-5 items-center cursor-pointer", children: [a.jsx("span", { className: pe("text-[16px]  font-normal tracking-[0.1em] underline uppercase", { "text-light-turquoise": t }, { "text-pink": !t }), children: e }), a.jsx(ht, { isOpen: t })] }), a.jsx(Qt, { orientation: "vertical", in: t, children: s })] }), Fa = ({ categoryId: e, onClickCategory: t }) => a.jsx("ul", { className: "flex flex-wrap gap-3 select-none", children: wt.map((r) => a.jsx(kt, { category: r, isSelectedCategory: e === r.name, onClickCategory: t }, r.name)) }), Ea = l.memo(({ sortValue: e, blockId: t, category: r, screenWidth: s, handleSortValue: c, onClickAdaptiveBlock: u, onClickCategory: f }) => {
  const g = [{ label: "\u0444\u0438\u043B\u044C\u0442\u0440 \u0442\u043E\u0432\u0430\u0440\u043E\u0432", content: a.jsx(bt, {}) }, { label: "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432", content: a.jsx(vt, { adaptiveIsOpen: t === 1, screenWidth: s, sortValue: e, handleSortValue: c }) }, { label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", content: a.jsx(Fa, { categoryId: r, onClickCategory: f }) }];
  return a.jsx("div", { className: "flex flex-col gap-3 px-3 mb-[4rem]", children: g.map((i, k) => a.jsx(Ra, { textButton: i.label, isOpen: t === k, onClickAdaptiveBlock: () => u(k), children: i.content }, i.label)) });
}), Ma = [...new Array(9)].map((e, t) => a.jsx(Gt, {}, t)), Oa = () => {
  const e = xt(), [t, r] = l.useState(window.outerWidth), { category: s, sortOption: c } = Ve(gt), { items: u, status: f } = Ve(Ht), { cartItems: g } = Ve(qt), [i, k] = l.useState(null), b = l.useCallback((j) => {
    e(st({ category: j }));
  }, [e]), w = l.useCallback((j) => {
    e(Ut(j));
  }, [e]), v = l.useCallback(() => {
    e(st({ category: "" }));
  }, [e]), ue = l.useCallback(() => e(ot({ modalType: nt.Modal, isOpen: true })), [e]), te = l.useCallback(() => e(ot({ modalType: nt.Cart, isOpen: true })), [e]), R = l.useCallback((j) => {
    k((me) => me === j ? null : j);
  }, [e]), $ = () => r(window.outerWidth);
  return l.useEffect(() => (window.addEventListener("resize", $), () => {
    window.removeEventListener("resize", $);
  }), []), a.jsxs("div", { className: "catalog_page relative pt-[120px] pb-[200px] bg-[#040A0A]", children: [a.jsxs("picture", { children: [a.jsx("source", { srcSet: "./img/PagesImg/CatalogImg/AdaptiveFlowerLeft.png 640w", media: "(max-width: 767px)" }), a.jsx("img", { className: "absolute md:top-0 left-0 md:w-[700px] md:h-[700px] max-md:w-[80px] max-md:h-[150px] max-md:top-[14rem] z-20", src: "./img/PagesImg/CatalogImg/CatalogFlowerLeft.png", srcSet: "./img/PagesImg/CatalogImg/CatalogFlowerLeft.png 1280w, ./img/PagesImg/CatalogImg/AdaptiveFlowerLeft.png 640w", loading: "lazy", alt: "flower" })] }), a.jsx(q, { className: "absolute lg:top-0 max-lg:top-[10rem] lg:right-0 max-lg:left-0 lg:w-[393px] lg:h-[280px] max-lg:h-[90px] max-lg:w-[200px] bg-cherry rounded-[393px] max-lg:rotate-[33deg] lg:blur-[125px] max-lg:blur-[100px] select-none" }), a.jsx(q, { className: "absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px] select-none" }), a.jsx(q, { className: "absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none max-lg:hidden" }), a.jsx(q, { className: "absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none max-lg:hidden" }), a.jsx(q, { className: "absolute lg:top-[95rem] max-lg:top-[65rem] left-0 lg:w-[750px] lg:h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px] select-none max-lg:h-[180px] max-lg:w-[300px] max-sm:w-[200px]" }), a.jsxs("picture", { children: [a.jsx("source", { srcSet: "./img/PagesImg/CatalogImg/AdaptiveFlowerRight.png 640w", media: "(max-width: 767px)" }), a.jsx("img", { className: "absolute lg:top-0 right-0 md:w-[700px] md:h-[1100px] max-md:w-[150px] max-md:h-[220px] max-md:top-[7rem]", src: "./img/PagesImg/CatalogImg/CatalogFlowerRight.png", srcSet: "./img/PagesImg/CatalogImg/CatalogFlowerRight.png 1280w, ./img/PagesImg/CatalogImg/AdaptiveFlowerRight.png 640w", loading: "lazy", alt: "flower" })] }), a.jsxs("div", { className: "catalog_page__wrapper container mx-auto", children: [a.jsxs("div", { className: "flex justify-between", children: [a.jsx(Ta, { screenWidth: t, categoryId: s, onClickCategory: b }), t >= 1024 && a.jsx(Na, { openModal: ue, openCart: te, cartItems: g })] }), a.jsxs("div", { className: "catalog_page__content flex flex-col mt-8", children: [a.jsxs("div", { className: "flex justify-between relative z-30", children: [t >= 768 && a.jsx(Sa, { categoryId: s, onClear: v }), t >= 768 && a.jsx(vt, { sortValue: c, screenWidth: t, handleSortValue: w }), t <= 768 && a.jsx(Ea, { blockId: i, screenWidth: t, category: s, sortValue: c, handleSortValue: w, onClickAdaptiveBlock: R, onClickCategory: b })] }), a.jsxs("div", { className: "flex", children: [t >= 768 && a.jsx("div", { className: "catalog_page__sticky w-[255px]", children: a.jsx(bt, {}) }), a.jsx("div", { className: "catalog_page__cards relative grid lg:grid-cols-[repeat(3,_255px)] max-lg:grid-cols-[repeat(2,_255px)] max-md:grid-cols-[repeat(1,_255px)] mx-auto gap-x-7 gap-y-14 mt-3", children: f === "error" ? a.jsx("h1", { className: "mt-4 text-[18px] font-normal uppercase w-[600px]", children: "\u041D\u0438\u0447\u0435\u0433\u043E \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" }) : f === "success" ? u.map((j) => a.jsx(Wt, { id: j.id, name: j.name, cost: j.cost, imageUrl: j.imageUrl, filters: j.filters, categories: j.categories, imgClassName: "h-[335px]" }, j.name)) : Ma })] })] })] }), a.jsx(Yt, {}), a.jsx(q, { className: "absolute -bottom-[13rem] right-[15rem] w-[800px] h-[212px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px] select-none z-0" }), a.jsx(Kt, {})] });
};
export {
  Oa as default
};
