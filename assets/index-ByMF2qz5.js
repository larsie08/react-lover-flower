import { j as a, r as c, f as vt, Q as me, t as kt, S as yt, U as Ge, V as Fe, W as Ke, X as Je, Y as Me, a as wt, g as St, c as le, u as Ct, Z as jt, _ as B, s as Q, b as q, d as Nt, m as ie, e as Ze, $ as et, a0 as tt, q as at, a1 as dt, a2 as ze, D as Z, A as mt, a3 as Lt, a4 as Pt, E as Ee, a5 as xt, x as At, a6 as Tt, a7 as Rt, a8 as It, a9 as Ft, aa as Mt, ab as Et, ac as Xe, ad as _t, P as zt, ae as L, af as Vt, ag as Ot, ah as rt, ai as $t, F as st, M as ot, aj as Dt, ak as Ht, al as Bt, am as qt } from "./index-BRYhcpXE.js";
import { v as Ut } from "./visuallyHidden-Dan1xhjv.js";
const Yt = () => a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [a.jsx("path", { d: "M10.4453 3.15918L10.8413 3.5551L3.5551 10.8407L3.15918 10.4451L10.4453 3.15918Z", fill: "#43FFD2" }), a.jsx("path", { d: "M3.5551 3.15918L10.8413 10.4448L10.4453 10.841L3.15918 3.55538L3.5551 3.15918Z", fill: "#43FFD2" })] }), Wt = () => a.jsx("svg", { className: "absolute -top-[2px] -left-[1px]", width: "14px", height: "14px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: a.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z", fill: "white" }) });
function Gt(e, t, r = (n, u) => n === u) {
  return e.length === t.length && e.every((n, u) => r(n, t[u]));
}
const Kt = 2;
function ne(e, t, r, n, u) {
  return r === 1 ? Math.min(e + t, u) : Math.max(e - t, n);
}
function ht(e, t) {
  return e - t;
}
function nt(e, t) {
  const { index: r } = e.reduce((n, u, f) => {
    const b = Math.abs(t - u);
    return n === null || b < n.distance || b === n.distance ? { distance: b, index: f } : n;
  }, null) ?? {};
  return r;
}
function Le(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let n = 0; n < r.changedTouches.length; n += 1) {
      const u = r.changedTouches[n];
      if (u.identifier === t.current) return { x: u.clientX, y: u.clientY };
    }
    return false;
  }
  return { x: e.clientX, y: e.clientY };
}
function _e(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function Xt(e, t, r) {
  return (r - t) * e + t;
}
function Zt(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), n = r[0].split(".")[1];
    return (n ? n.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Qt(e, t, r) {
  const n = Math.round((e - r) / t) * t + r;
  return Number(n.toFixed(Zt(t)));
}
function lt({ values: e, newValue: t, index: r }) {
  const n = e.slice();
  return n[r] = t, n.sort(ht);
}
function Pe({ sliderRef: e, activeIndex: t, setActive: r }) {
  var _a, _b, _c;
  const n = Fe(e.current);
  (!((_a = e.current) == null ? void 0 : _a.contains(n.activeElement)) || Number((_b = n == null ? void 0 : n.activeElement) == null ? void 0 : _b.getAttribute("data-index")) !== t) && ((_c = e.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${t}"]`).focus()), r && r(t);
}
function Ae(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? Gt(e, t) : false;
}
const Jt = { horizontal: { offset: (e) => ({ left: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, "horizontal-reverse": { offset: (e) => ({ right: `${e}%` }), leap: (e) => ({ width: `${e}%` }) }, vertical: { offset: (e) => ({ bottom: `${e}%` }), leap: (e) => ({ height: `${e}%` }) } }, ea = (e) => e;
let Te;
function it() {
  return Te === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Te = CSS.supports("touch-action", "none") : Te = true), Te;
}
function ta(e) {
  const { "aria-labelledby": t, defaultValue: r, disabled: n = false, disableSwap: u = false, isRtl: f = false, marks: b = false, max: x = 100, min: l = 0, name: C, onChange: S, onChangeCommitted: h, orientation: O = "horizontal", rootRef: Ve, scale: xe = ea, step: E = 1, shiftStep: J = 10, tabIndex: he, value: Oe } = e, _ = c.useRef(void 0), [$, ee] = c.useState(-1), [Qe, te] = c.useState(-1), [fe, ge] = c.useState(false), ae = c.useRef(0), ce = c.useRef(null), [I, T] = vt({ controlled: Oe, default: r ?? l, name: "Slider" }), j = S && ((o, s, i) => {
    const m = o.nativeEvent || o, d = new m.constructor(m.type, m);
    Object.defineProperty(d, "target", { writable: true, value: { value: s, name: C } }), ce.current = s, S(d, s, i);
  }), re = Array.isArray(I);
  let k = re ? I.slice().sort(ht) : [I];
  k = k.map((o) => o == null ? l : me(o, l, x));
  const ue = b === true && E !== null ? [...Array(Math.floor((x - l) / E) + 1)].map((o, s) => ({ value: l + E * s })) : b || [], v = ue.map((o) => o.value), [H, se] = c.useState(-1), g = c.useRef(null), U = kt(Ve, g), $e = (o) => (s) => {
    var _a;
    const i = Number(s.currentTarget.getAttribute("data-index"));
    Je(s.target) && se(i), te(i), (_a = o == null ? void 0 : o.onFocus) == null ? void 0 : _a.call(o, s);
  }, De = (o) => (s) => {
    var _a;
    Je(s.target) || se(-1), te(-1), (_a = o == null ? void 0 : o.onBlur) == null ? void 0 : _a.call(o, s);
  }, be = (o, s) => {
    const i = Number(o.currentTarget.getAttribute("data-index")), m = k[i], d = v.indexOf(m);
    let p = s;
    if (ue && E == null) {
      const R = v[v.length - 1];
      p >= R ? p = R : p <= v[0] ? p = v[0] : p = p < m ? v[d - 1] : v[d + 1];
    }
    if (p = me(p, l, x), re) {
      u && (p = me(p, k[i - 1] || -1 / 0, k[i + 1] || 1 / 0));
      const R = p;
      p = lt({ values: k, newValue: p, index: i });
      let F = i;
      u || (F = p.indexOf(R)), Pe({ sliderRef: g, activeIndex: F });
    }
    T(p), se(i), j && !Ae(p, I) && j(o, p, i), h && h(o, ce.current ?? p);
  }, He = (o) => (s) => {
    var _a;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(s.key)) {
      s.preventDefault();
      const i = Number(s.currentTarget.getAttribute("data-index")), m = k[i];
      let d = null;
      if (E != null) {
        const p = s.shiftKey ? J : E;
        switch (s.key) {
          case "ArrowUp":
            d = ne(m, p, 1, l, x);
            break;
          case "ArrowRight":
            d = ne(m, p, f ? -1 : 1, l, x);
            break;
          case "ArrowDown":
            d = ne(m, p, -1, l, x);
            break;
          case "ArrowLeft":
            d = ne(m, p, f ? 1 : -1, l, x);
            break;
          case "PageUp":
            d = ne(m, J, 1, l, x);
            break;
          case "PageDown":
            d = ne(m, J, -1, l, x);
            break;
          case "Home":
            d = l;
            break;
          case "End":
            d = x;
            break;
        }
      } else if (ue) {
        const p = v[v.length - 1], R = v.indexOf(m), F = [f ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], w = [f ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        F.includes(s.key) ? R === 0 ? d = v[0] : d = v[R - 1] : w.includes(s.key) && (R === v.length - 1 ? d = p : d = v[R + 1]);
      }
      d != null && be(s, d);
    }
    (_a = o == null ? void 0 : o.onKeyDown) == null ? void 0 : _a.call(o, s);
  };
  yt(() => {
    var _a;
    n && g.current.contains(document.activeElement) && ((_a = document.activeElement) == null ? void 0 : _a.blur());
  }, [n]), n && $ !== -1 && ee(-1), n && H !== -1 && se(-1);
  const ve = (o) => (s) => {
    var _a;
    (_a = o.onChange) == null ? void 0 : _a.call(o, s), be(s, s.target.valueAsNumber);
  }, Y = c.useRef(void 0);
  let W = O;
  f && O === "horizontal" && (W += "-reverse");
  const G = ({ finger: o, move: s = false }) => {
    const { current: i } = g, { width: m, height: d, bottom: p, left: R } = i.getBoundingClientRect();
    let F;
    W.startsWith("vertical") ? F = (p - o.y) / d : F = (o.x - R) / m, W.includes("-reverse") && (F = 1 - F);
    let w;
    if (w = Xt(F, l, x), E) w = Qt(w, E, l);
    else {
      const de = nt(v, w);
      w = v[de];
    }
    w = me(w, l, x);
    let V = 0;
    if (re) {
      s ? V = Y.current : V = nt(k, w), u && (w = me(w, k[V - 1] || -1 / 0, k[V + 1] || 1 / 0));
      const de = w;
      w = lt({ values: k, newValue: w, index: V }), u && s || (V = w.indexOf(de), Y.current = V);
    }
    return { newValue: w, activeIndex: V };
  }, K = Ge((o) => {
    const s = Le(o, _);
    if (!s) return;
    if (ae.current += 1, o.type === "mousemove" && o.buttons === 0) {
      z(o);
      return;
    }
    const { newValue: i, activeIndex: m } = G({ finger: s, move: true });
    Pe({ sliderRef: g, activeIndex: m, setActive: ee }), T(i), !fe && ae.current > Kt && ge(true), j && !Ae(i, I) && j(o, i, m);
  }), z = Ge((o) => {
    const s = Le(o, _);
    if (ge(false), !s) return;
    const { newValue: i } = G({ finger: s, move: true });
    ee(-1), o.type === "touchend" && te(-1), h && h(o, ce.current ?? i), _.current = void 0, X();
  }), P = Ge((o) => {
    if (n) return;
    it() || o.preventDefault();
    const s = o.changedTouches[0];
    s != null && (_.current = s.identifier);
    const i = Le(o, _);
    if (i !== false) {
      const { newValue: d, activeIndex: p } = G({ finger: i });
      Pe({ sliderRef: g, activeIndex: p, setActive: ee }), T(d), j && !Ae(d, I) && j(o, d, p);
    }
    ae.current = 0;
    const m = Fe(g.current);
    m.addEventListener("touchmove", K, { passive: true }), m.addEventListener("touchend", z, { passive: true });
  }), X = c.useCallback(() => {
    const o = Fe(g.current);
    o.removeEventListener("mousemove", K), o.removeEventListener("mouseup", z), o.removeEventListener("touchmove", K), o.removeEventListener("touchend", z);
  }, [z, K]);
  c.useEffect(() => {
    const { current: o } = g;
    return o.addEventListener("touchstart", P, { passive: it() }), () => {
      o.removeEventListener("touchstart", P), X();
    };
  }, [X, P]), c.useEffect(() => {
    n && X();
  }, [n, X]);
  const Be = (o) => (s) => {
    var _a;
    if ((_a = o.onMouseDown) == null ? void 0 : _a.call(o, s), n || s.defaultPrevented || s.button !== 0) return;
    s.preventDefault();
    const i = Le(s, _);
    if (i !== false) {
      const { newValue: d, activeIndex: p } = G({ finger: i });
      Pe({ sliderRef: g, activeIndex: p, setActive: ee }), T(d), j && !Ae(d, I) && j(s, d, p);
    }
    ae.current = 0;
    const m = Fe(g.current);
    m.addEventListener("mousemove", K, { passive: true }), m.addEventListener("mouseup", z);
  }, ke = _e(re ? k[0] : l, l, x), A = _e(k[k.length - 1], l, x) - ke, pe = (o = {}) => {
    const s = Ke(o), i = { onMouseDown: Be(s || {}) }, m = { ...s, ...i };
    return { ...o, ref: U, ...m };
  }, ye = (o) => (s) => {
    var _a;
    (_a = o.onMouseOver) == null ? void 0 : _a.call(o, s);
    const i = Number(s.currentTarget.getAttribute("data-index"));
    te(i);
  }, we = (o) => (s) => {
    var _a;
    (_a = o.onMouseLeave) == null ? void 0 : _a.call(o, s), te(-1);
  }, Se = (o = {}) => {
    const s = Ke(o), i = { onMouseOver: ye(s || {}), onMouseLeave: we(s || {}) };
    return { ...o, ...s, ...i };
  }, Ce = (o) => ({ pointerEvents: $ !== -1 && $ !== o ? "none" : void 0 });
  let oe;
  return O === "vertical" && (oe = f ? "vertical-rl" : "vertical-lr"), { active: $, axis: W, axisProps: Jt, dragging: fe, focusedThumbIndex: H, getHiddenInputProps: (o = {}) => {
    const s = Ke(o), i = { onChange: ve(s || {}), onFocus: $e(s || {}), onBlur: De(s || {}), onKeyDown: He(s || {}) }, m = { ...s, ...i };
    return { tabIndex: he, "aria-labelledby": t, "aria-orientation": O, "aria-valuemax": xe(x), "aria-valuemin": xe(l), name: C, type: "range", min: e.min, max: e.max, step: e.step === null && e.marks ? "any" : e.step ?? void 0, disabled: n, ...o, ...m, style: { ...Ut, direction: f ? "rtl" : "ltr", width: "100%", height: "100%", writingMode: oe } };
  }, getRootProps: pe, getThumbProps: Se, marks: ue, open: Qe, range: re, rootRef: U, trackLeap: A, trackOffset: ke, values: k, getThumbStyle: Ce };
}
const aa = (e) => !e || !Me(e);
function ra(e) {
  return St("MuiSlider", e);
}
const M = wt("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), sa = (e) => {
  const { open: t } = e;
  return { offset: le(t && M.valueLabelOpen), circle: M.valueLabelCircle, label: M.valueLabelLabel };
};
function oa(e) {
  const { children: t, className: r, value: n } = e, u = sa(e);
  return t ? c.cloneElement(t, { className: le(t.props.className) }, a.jsxs(c.Fragment, { children: [t.props.children, a.jsx("span", { className: le(u.offset, r), "aria-hidden": true, children: a.jsx("span", { className: u.circle, children: a.jsx("span", { className: u.label, children: n }) }) })] })) : null;
}
function ct(e) {
  return e;
}
const na = Q("span", { name: "MuiSlider", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, t[`color${q(r.color)}`], r.size !== "medium" && t[`size${q(r.size)}`], r.marked && t.marked, r.orientation === "vertical" && t.vertical, r.track === "inverted" && t.trackInverted, r.track === false && t.trackFalse];
} })(ie(({ theme: e }) => ({ borderRadius: 12, boxSizing: "content-box", display: "inline-block", position: "relative", cursor: "pointer", touchAction: "none", WebkitTapHighlightColor: "transparent", "@media print": { colorAdjust: "exact" }, [`&.${M.disabled}`]: { pointerEvents: "none", cursor: "default", color: (e.vars || e).palette.grey[400] }, [`&.${M.dragging}`]: { [`& .${M.thumb}, & .${M.track}`]: { transition: "none" } }, variants: [...Object.entries(e.palette).filter(Ze()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), { props: { orientation: "horizontal" }, style: { height: 4, width: "100%", padding: "13px 0", "@media (pointer: coarse)": { padding: "20px 0" } } }, { props: { orientation: "horizontal", size: "small" }, style: { height: 2 } }, { props: { orientation: "horizontal", marked: true }, style: { marginBottom: 20 } }, { props: { orientation: "vertical" }, style: { height: "100%", width: 4, padding: "0 13px", "@media (pointer: coarse)": { padding: "0 20px" } } }, { props: { orientation: "vertical", size: "small" }, style: { width: 2 } }, { props: { orientation: "vertical", marked: true }, style: { marginRight: 44 } }] }))), la = Q("span", { name: "MuiSlider", slot: "Rail", overridesResolver: (e, t) => t.rail })({ display: "block", position: "absolute", borderRadius: "inherit", backgroundColor: "currentColor", opacity: 0.38, variants: [{ props: { orientation: "horizontal" }, style: { width: "100%", height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { height: "100%", width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: "inverted" }, style: { opacity: 1 } }] }), ia = Q("span", { name: "MuiSlider", slot: "Track", overridesResolver: (e, t) => t.track })(ie(({ theme: e }) => ({ display: "block", position: "absolute", borderRadius: "inherit", border: "1px solid currentColor", backgroundColor: "currentColor", transition: e.transitions.create(["left", "width", "bottom", "height"], { duration: e.transitions.duration.shortest }), variants: [{ props: { size: "small" }, style: { border: "none" } }, { props: { orientation: "horizontal" }, style: { height: "inherit", top: "50%", transform: "translateY(-50%)" } }, { props: { orientation: "vertical" }, style: { width: "inherit", left: "50%", transform: "translateX(-50%)" } }, { props: { track: false }, style: { display: "none" } }, ...Object.entries(e.palette).filter(Ze()).map(([t]) => ({ props: { color: t, track: "inverted" }, style: { ...e.vars ? { backgroundColor: e.vars.palette.Slider[`${t}Track`], borderColor: e.vars.palette.Slider[`${t}Track`] } : { backgroundColor: et(e.palette[t].main, 0.62), borderColor: et(e.palette[t].main, 0.62), ...e.applyStyles("dark", { backgroundColor: tt(e.palette[t].main, 0.5) }), ...e.applyStyles("dark", { borderColor: tt(e.palette[t].main, 0.5) }) } } }))] }))), ca = Q("span", { name: "MuiSlider", slot: "Thumb", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.thumb, t[`thumbColor${q(r.color)}`], r.size !== "medium" && t[`thumbSize${q(r.size)}`]];
} })(ie(({ theme: e }) => ({ position: "absolute", width: 20, height: 20, boxSizing: "border-box", borderRadius: "50%", outline: 0, backgroundColor: "currentColor", display: "flex", alignItems: "center", justifyContent: "center", transition: e.transitions.create(["box-shadow", "left", "bottom"], { duration: e.transitions.duration.shortest }), "&::before": { position: "absolute", content: '""', borderRadius: "inherit", width: "100%", height: "100%", boxShadow: (e.vars || e).shadows[2] }, "&::after": { position: "absolute", content: '""', borderRadius: "50%", width: 42, height: 42, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }, [`&.${M.disabled}`]: { "&:hover": { boxShadow: "none" } }, variants: [{ props: { size: "small" }, style: { width: 12, height: 12, "&::before": { boxShadow: "none" } } }, { props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-50%, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 50%)" } }, ...Object.entries(e.palette).filter(Ze()).map(([t]) => ({ props: { color: t }, style: { [`&:hover, &.${M.focusVisible}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 8px ${at(e.palette[t].main, 0.16)}` }, "@media (hover: none)": { boxShadow: "none" } }, [`&.${M.active}`]: { ...e.vars ? { boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)` } : { boxShadow: `0px 0px 0px 14px ${at(e.palette[t].main, 0.16)}` } } } }))] }))), ua = Q(oa, { name: "MuiSlider", slot: "ValueLabel", overridesResolver: (e, t) => t.valueLabel })(ie(({ theme: e }) => ({ zIndex: 1, whiteSpace: "nowrap", ...e.typography.body2, fontWeight: 500, transition: e.transitions.create(["transform"], { duration: e.transitions.duration.shortest }), position: "absolute", backgroundColor: (e.vars || e).palette.grey[600], borderRadius: 2, color: (e.vars || e).palette.common.white, display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem 0.75rem", variants: [{ props: { orientation: "horizontal" }, style: { transform: "translateY(-100%) scale(0)", top: "-10px", transformOrigin: "bottom center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, 50%) rotate(45deg)", backgroundColor: "inherit", bottom: 0, left: "50%" }, [`&.${M.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" } } }, { props: { orientation: "vertical" }, style: { transform: "translateY(-50%) scale(0)", right: "30px", top: "50%", transformOrigin: "right center", "&::before": { position: "absolute", content: '""', width: 8, height: 8, transform: "translate(-50%, -50%) rotate(45deg)", backgroundColor: "inherit", right: -8, top: "50%" }, [`&.${M.valueLabelOpen}`]: { transform: "translateY(-50%) scale(1)" } } }, { props: { size: "small" }, style: { fontSize: e.typography.pxToRem(12), padding: "0.25rem 0.5rem" } }, { props: { orientation: "vertical", size: "small" }, style: { right: "20px" } }] }))), pa = Q("span", { name: "MuiSlider", slot: "Mark", shouldForwardProp: (e) => dt(e) && e !== "markActive", overridesResolver: (e, t) => {
  const { markActive: r } = e;
  return [t.mark, r && t.markActive];
} })(ie(({ theme: e }) => ({ position: "absolute", width: 2, height: 2, borderRadius: 1, backgroundColor: "currentColor", variants: [{ props: { orientation: "horizontal" }, style: { top: "50%", transform: "translate(-1px, -50%)" } }, { props: { orientation: "vertical" }, style: { left: "50%", transform: "translate(-50%, 1px)" } }, { props: { markActive: true }, style: { backgroundColor: (e.vars || e).palette.background.paper, opacity: 0.8 } }] }))), da = Q("span", { name: "MuiSlider", slot: "MarkLabel", shouldForwardProp: (e) => dt(e) && e !== "markLabelActive", overridesResolver: (e, t) => t.markLabel })(ie(({ theme: e }) => ({ ...e.typography.body2, color: (e.vars || e).palette.text.secondary, position: "absolute", whiteSpace: "nowrap", variants: [{ props: { orientation: "horizontal" }, style: { top: 30, transform: "translateX(-50%)", "@media (pointer: coarse)": { top: 40 } } }, { props: { orientation: "vertical" }, style: { left: 36, transform: "translateY(50%)", "@media (pointer: coarse)": { left: 44 } } }, { props: { markLabelActive: true }, style: { color: (e.vars || e).palette.text.primary } }] }))), ma = (e) => {
  const { disabled: t, dragging: r, marked: n, orientation: u, track: f, classes: b, color: x, size: l } = e, C = { root: ["root", t && "disabled", r && "dragging", n && "marked", u === "vertical" && "vertical", f === "inverted" && "trackInverted", f === false && "trackFalse", x && `color${q(x)}`, l && `size${q(l)}`], rail: ["rail"], track: ["track"], mark: ["mark"], markActive: ["markActive"], markLabel: ["markLabel"], markLabelActive: ["markLabelActive"], valueLabel: ["valueLabel"], thumb: ["thumb", t && "disabled", l && `thumbSize${q(l)}`, x && `thumbColor${q(x)}`], active: ["active"], disabled: ["disabled"], focusVisible: ["focusVisible"] };
  return Nt(C, ra, b);
}, xa = ({ children: e }) => e, ha = c.forwardRef(function(t, r) {
  const n = Ct({ props: t, name: "MuiSlider" }), u = jt(), { "aria-label": f, "aria-valuetext": b, "aria-labelledby": x, component: l = "span", components: C = {}, componentsProps: S = {}, color: h = "primary", classes: O, className: Ve, disableSwap: xe = false, disabled: E = false, getAriaLabel: J, getAriaValueText: he, marks: Oe = false, max: _ = 100, min: $ = 0, name: ee, onChange: Qe, onChangeCommitted: te, orientation: fe = "horizontal", shiftStep: ge = 10, size: ae = "medium", step: ce = 1, scale: I = ct, slotProps: T, slots: j, tabIndex: re, track: k = "normal", value: ue, valueLabelDisplay: v = "off", valueLabelFormat: H = ct, ...se } = n, g = { ...n, isRtl: u, max: _, min: $, classes: O, disabled: E, disableSwap: xe, orientation: fe, marks: Oe, color: h, size: ae, step: ce, shiftStep: ge, scale: I, track: k, valueLabelDisplay: v, valueLabelFormat: H }, { axisProps: U, getRootProps: $e, getHiddenInputProps: De, getThumbProps: be, open: He, active: ve, axis: Y, focusedThumbIndex: W, range: G, dragging: K, marks: z, values: P, trackOffset: X, trackLeap: Be, getThumbStyle: ke } = ta({ ...g, rootRef: r });
  g.marked = z.length > 0 && z.some((y) => y.label), g.dragging = K, g.focusedThumbIndex = W;
  const A = ma(g), pe = (j == null ? void 0 : j.root) ?? C.Root ?? na, ye = (j == null ? void 0 : j.rail) ?? C.Rail ?? la, we = (j == null ? void 0 : j.track) ?? C.Track ?? ia, Se = (j == null ? void 0 : j.thumb) ?? C.Thumb ?? ca, Ce = (j == null ? void 0 : j.valueLabel) ?? C.ValueLabel ?? ua, oe = (j == null ? void 0 : j.mark) ?? C.Mark ?? pa, je = (j == null ? void 0 : j.markLabel) ?? C.MarkLabel ?? da, o = (j == null ? void 0 : j.input) ?? C.Input ?? "input", s = (T == null ? void 0 : T.root) ?? S.root, i = (T == null ? void 0 : T.rail) ?? S.rail, m = (T == null ? void 0 : T.track) ?? S.track, d = (T == null ? void 0 : T.thumb) ?? S.thumb, p = (T == null ? void 0 : T.valueLabel) ?? S.valueLabel, R = (T == null ? void 0 : T.mark) ?? S.mark, F = (T == null ? void 0 : T.markLabel) ?? S.markLabel, w = (T == null ? void 0 : T.input) ?? S.input, V = B({ elementType: pe, getSlotProps: $e, externalSlotProps: s, externalForwardedProps: se, additionalProps: { ...aa(pe) && { as: l } }, ownerState: { ...g, ...s == null ? void 0 : s.ownerState }, className: [A.root, Ve] }), de = B({ elementType: ye, externalSlotProps: i, ownerState: g, className: A.rail }), ft = B({ elementType: we, externalSlotProps: m, additionalProps: { style: { ...U[Y].offset(X), ...U[Y].leap(Be) } }, ownerState: { ...g, ...m == null ? void 0 : m.ownerState }, className: A.track }), qe = B({ elementType: Se, getSlotProps: be, externalSlotProps: d, ownerState: { ...g, ...d == null ? void 0 : d.ownerState }, className: A.thumb }), gt = B({ elementType: Ce, externalSlotProps: p, ownerState: { ...g, ...p == null ? void 0 : p.ownerState }, className: A.valueLabel }), Ue = B({ elementType: oe, externalSlotProps: R, ownerState: g, className: A.mark }), Ye = B({ elementType: je, externalSlotProps: F, ownerState: g, className: A.markLabel }), bt = B({ elementType: o, getSlotProps: De, externalSlotProps: w, ownerState: g });
  return a.jsxs(pe, { ...V, children: [a.jsx(ye, { ...de }), a.jsx(we, { ...ft }), z.filter((y) => y.value >= $ && y.value <= _).map((y, N) => {
    const We = _e(y.value, $, _), Ne = U[Y].offset(We);
    let D;
    return k === false ? D = P.includes(y.value) : D = k === "normal" && (G ? y.value >= P[0] && y.value <= P[P.length - 1] : y.value <= P[0]) || k === "inverted" && (G ? y.value <= P[0] || y.value >= P[P.length - 1] : y.value >= P[0]), a.jsxs(c.Fragment, { children: [a.jsx(oe, { "data-index": N, ...Ue, ...!Me(oe) && { markActive: D }, style: { ...Ne, ...Ue.style }, className: le(Ue.className, D && A.markActive) }), y.label != null ? a.jsx(je, { "aria-hidden": true, "data-index": N, ...Ye, ...!Me(je) && { markLabelActive: D }, style: { ...Ne, ...Ye.style }, className: le(A.markLabel, Ye.className, D && A.markLabelActive), children: y.label }) : null] }, N);
  }), P.map((y, N) => {
    const We = _e(y, $, _), Ne = U[Y].offset(We), D = v === "off" ? xa : Ce;
    return a.jsx(D, { ...!Me(D) && { valueLabelFormat: H, valueLabelDisplay: v, value: typeof H == "function" ? H(I(y), N) : H, index: N, open: He === N || ve === N || v === "on", disabled: E }, ...gt, children: a.jsx(Se, { "data-index": N, ...qe, className: le(A.thumb, qe.className, ve === N && A.active, W === N && A.focusVisible), style: { ...Ne, ...ke(N), ...qe.style }, children: a.jsx(o, { "data-index": N, "aria-label": J ? J(N) : f, "aria-valuenow": I(y), "aria-labelledby": x, "aria-valuetext": he ? he(I(y), N) : b, value: P[N], ...bt }) }) }, N);
  })] });
}), fa = c.memo(({ categoryId: e, onClear: t }) => a.jsx("div", { className: "flex items-end ml-[30rem] ", children: a.jsxs("div", { className: "flex gap-2 h-6", children: [a.jsx("h3", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: e }), a.jsx("button", { className: ze({ invisible: e === "" }), onClick: t, children: a.jsx(Yt, {}) })] }) })), Re = c.memo(({ title: e, options: t, currentId: r, handleClick: n, isOptionSelected: u }) => a.jsxs("div", { className: "light_block flex flex-col gap-2", children: [a.jsx("h2", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: e }), a.jsx("ul", { className: "flex flex-col gap-1", children: t.map(({ id: f, name: b }) => a.jsxs("li", { className: "flex gap-1 relative", children: [a.jsxs("label", { onClick: () => n(f), className: "group/light_filter flex items-center gap-1 text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer", children: [a.jsx("div", { className: "relative w-[12px] h-[12px] rounded-[2px] border-[0.5px] border-[#FFF]", children: u(f) && a.jsx(Wt, {}) }), a.jsxs("span", { className: "relative group-hover/light_filter:text-light-turquoise duration-200 transition-all", children: [b, a.jsx(Z, { className: "absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/light_filter:w-full group-hover/light_filter:visible transition-all duration-200" })] })] }), r === f && a.jsx(ba, {})] }, f)) })] })), ga = c.memo(({ lowerFieldValue: e, upperFieldValue: t, value: r, handleSliderChange: n }) => a.jsxs("div", { className: "range_block flex flex-col gap-2", children: [a.jsx("h2", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.56px] uppercase", children: "\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C" }), a.jsxs("form", { className: "flex flex-col w-full", children: [a.jsx("div", { className: "group__range_inputs h-[15px] relative", children: a.jsx(ha, { size: "small", min: e, max: t, value: r, onChange: n }) }), a.jsxs("label", { className: "text-[12px] mt-2.5 font-light tracking-[0.48px] uppercase", htmlFor: "range", children: ["\u0426\u0435\u043D\u0430: ", r[0], " \u20BD \u2013 ", r[1], " \u20BD"] })] })] })), ba = () => {
  const e = mt(), t = () => e(Lt(true));
  return a.jsx("div", { className: "confirm_modal absolute -right-4 -top-[9px] z-20", children: a.jsx("div", { className: "relative", children: a.jsx("button", { onClick: t, className: "text-cherry p-2 bg-light-turquoise rounded-lg", children: "\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C" }) }) });
}, Ie = { format: [{ id: "bouquet", name: "\u0431\u0443\u043A\u0435\u0442" }, { id: "vase", name: "\u0432 \u0432\u0430\u0437\u0435" }, { id: "envelope", name: "\u0432 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0435" }, { id: "basket", name: "\u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435" }, { id: "hatbox", name: "\u0432 \u0448\u043B\u044F\u043F\u043D\u043E\u0439 \u043A\u043E\u0440\u043E\u0431\u043A\u0435" }, { id: "box", name: "\u0432 \u044F\u0449\u0438\u043A\u0435" }], colors: [{ id: "white", name: "\u0431\u0435\u043B\u044B\u0439" }, { id: "yellow", name: "\u0436\u0435\u043B\u0442\u044B\u0439" }, { id: "green", name: "\u0437\u0435\u043B\u0435\u043D\u044B\u0439" }, { id: "red", name: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439" }, { id: "orange", name: "\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439" }, { id: "pink", name: "\u0440\u043E\u0437\u043E\u0432\u044B\u0439" }, { id: "blue", name: "\u0441\u0438\u043D\u0438\u0439" }], lighting: [{ id: "gentle", name: "\u043D\u0435\u0436\u043D\u044B\u0435" }, { id: "light", name: "\u044F\u0440\u043A\u0438\u0435" }], flowers: [{ id: "Alstroemeria", name: "\u0410\u043B\u044C\u0441\u0442\u0440\u043E\u043C\u0435\u0440\u0438\u044F (2)" }, { id: "Anthurium", name: "\u0410\u043D\u0442\u0443\u0440\u0438\u0443\u043C (1)" }, { id: "Asparagus", name: "\u0410\u0441\u043F\u0430\u0440\u0430\u0433\u0443\u0441 (1)" }, { id: "Astilba", name: "\u0410\u0441\u0442\u0438\u043B\u044C\u0431\u0430 (7)" }, { id: "Astrance", name: "\u0410\u0441\u0442\u0440\u0430\u043D\u0446\u0438\u044F (1)" }] }, ut = 800, pt = 2500, va = c.memo(() => {
  const e = Pt(), [t, r] = c.useState([ut, pt]), [n, u] = c.useState(null), { filtersId: f } = Ee(xt), b = At((h) => {
    e(Tt(h));
  }, 250), x = c.useCallback((h, O) => {
    r(O), b(O);
  }, [b]), l = c.useCallback((h) => {
    u(h), e(Rt(h));
  }, [e]), C = () => {
    u(null), e(It());
  }, S = c.useCallback((h) => f.includes(h), [f]);
  return c.useEffect(() => {
    if (n) {
      const h = setTimeout(() => u(null), 1e4);
      return () => clearTimeout(h);
    }
  }, [n]), a.jsxs("div", { className: "sticky top-24 bottom-0 flex flex-col gap-5 p-5 bg-[#000]/[0.30] rounded-[20px] backdrop-blur-[10px] select-none", children: [a.jsx(Re, { title: "\u041F\u043E \u0441\u0432\u0435\u0442\u0443", options: Ie.lighting, handleClick: l, isOptionSelected: S, currentId: n }), a.jsx(Re, { title: "\u041F\u043E \u0446\u0432\u0435\u0442\u0443", options: Ie.colors, handleClick: l, isOptionSelected: S, currentId: n }), a.jsx(Re, { title: "\u041F\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0443", options: Ie.format, handleClick: l, isOptionSelected: S, currentId: n }), a.jsx(ga, { lowerFieldValue: ut, upperFieldValue: pt, value: t, handleSliderChange: x }), a.jsx(Re, { title: "\u041F\u043E \u0446\u0432\u0435\u0442\u043A\u0443", options: Ie.flowers, handleClick: l, isOptionSelected: S, currentId: n }), a.jsx("button", { onClick: C, className: "border-[1px] p-4 text-[12px] font-bold tracking-[1.2px] uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset]", children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440" })] });
}), ka = c.memo(({ openModal: e, openCart: t, cartItems: r }) => a.jsxs("div", { className: "flex flex-col justify-between", children: [a.jsx("div", { className: "socials flex justify-end mt-20", children: a.jsx(Ft, {}) }), a.jsxs("div", { className: "footer_buttons flex flex-col items-end justify-center", children: [a.jsx("h3", { className: "phone text-[16px] relative z-20 mt-14 font-normal tracking-[1.6px] uppercase", children: "+375 (29) 113-69-69" }), a.jsxs("button", { onClick: e, className: "call w-[180px] mt-3 flex items-center gap-2 py-2 px-4 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px]", children: [a.jsx(Mt, {}), a.jsx("p", { className: "text-[14px] font-normal tracking-[1.4px] uppercase text-light-turquoise", children: "\u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A" })] }), a.jsxs("button", { onClick: t, className: "cart flex mt-5 bg-[#000]/[.20] rounded-xl backdrop-blur-[10px] p-[15px]", children: [a.jsx(Et, {}), a.jsx("svg", { className: "absolute right-[8px] top-[10px]", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "17", viewBox: "0 0 16 17", fill: "none", children: a.jsx("circle", { cx: "8", cy: "8.86523", r: "8", fill: "#43FFD2" }) }), a.jsx("p", { className: ze("text-dark-green absolute right-[13px] top-[10px] text-standart", { "right-0 left-10": r.length >= 10 }), children: r.length })] })] })] })), ya = [{ name: "\u043F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438", sortProperty: Xe.RATING }, { name: "\u043F\u043E \u0446\u0435\u043D\u0435", sortProperty: Xe.COST }, { name: "\u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443", sortProperty: Xe.NAME }], wa = c.memo(({ sortValue: e, handleSortValue: t }) => {
  const r = c.useRef(null), [n, u] = c.useState(false), f = ya.filter((l) => l.sortProperty !== e.sortProperty), b = (l) => {
    r.current && !l.composedPath().includes(r.current) && u(false);
  }, x = (l) => {
    t(l), u(false);
  };
  return c.useEffect(() => (n ? document.addEventListener("click", b) : document.removeEventListener("click", b), () => document.removeEventListener("click", b)), [n, b]), a.jsxs("ul", { ref: r, className: "catalog_page__sort relative flex flex-col w-[260px] gap-2 p-3 rounded-[10px] bg-[#000]/[.20] backdrop-blur-[10px] z-30 select-none", children: [a.jsxs("div", { onClick: () => u(!n), className: "flex justify-between items-center cursor-pointer", children: [a.jsx("span", { className: "text-[12px] font-light tracking-[0.48px] uppercase", children: e.name }), a.jsx(_t, { isOpen: n })] }), a.jsx("div", { className: ze("popup absolute left-0 top-[42px] p-3 w-[260px] flex flex-col gap-2 rounded-[5px] bg-[#000]/[.40] z-30 transition-all duration-150", { "visible h-[70px] opacity-100": n, "invisible h-0 opacity-0": !n }), children: f.map((l) => a.jsx("li", { onClick: () => x(l), className: "text-[12px] font-light tracking-[0.48px] uppercase cursor-pointer", children: l.name }, l.name)) })] });
}), Sa = c.memo(({ category: e, isSelected: t, onClick: r }) => a.jsx("li", { className: ze("p-5 border-[0.5px] border-[white] rounded-[40px] text-[12px] font-normal tracking-[0.48px] transition-all uppercase cursor-pointer hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]", { "bg-light-turquoise text-[black]": t }), onClick: () => r(e.name), children: e.name })), Ca = [{ text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", path: "/" }, { text: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433", path: "/catalog" }], ja = [{ name: L.GypsophilaBouquets }, { name: L.ChamomileBouquets }, { name: L.ChrysanthemumBouquets }, { name: L.PottedIndoorPlants }, { name: L.MonoBouquets }, { name: L.AssortedBouquets }, { name: L.HolidayBouquets }, { name: L.FlowerCompositions }, { name: L.Envelopes }, { name: L.GreetingCards }, { name: L.Gifts }, { name: L.DriedFlowerBouquets }, { name: L.Balloons }, { name: L.PopularItems }, { name: L.RoseBouquets }, { name: L.FuneralFlowers }, { name: L.GiftWrapping }], Na = c.memo(({ categoryId: e, onClick: t }) => a.jsxs("div", { className: "relative z-10", children: [a.jsx(zt, { items: [...Ca, ...e ? [{ text: e, path: "/catalog" }] : []] }), a.jsxs("div", { className: "max-w-[950px] mt-5 p-5 bg-[#000]/[0.30] backdrop-blur-[10px] rounded-[20px]", children: [a.jsxs("div", { className: "catalog__title relative z-10", children: [a.jsx("h1", { className: "flex items-center  h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase", children: "\u043A\u0430\u0442\u0430\u043B\u043E\u0433" }), a.jsx("h1", { className: "flex items-center ml-[270px] h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase", children: "\u0431\u0443\u043A\u0435\u0442\u043E\u0432" }), a.jsx("h2", { className: "subtitle max-w-[430px] mt-5 ml-[270px] text-[14px] font-normal tracking-[0.56px] uppercase", children: "\u0412 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0441\u0430\u043C\u044B\u0439 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0432\u044B\u0431\u043E\u0440 \u0431\u0443\u043A\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439:" })] }), a.jsx("ul", { className: "category_block flex flex-wrap gap-3 mt-16 select-none", children: ja.map((r) => a.jsx(Sa, { category: r, isSelected: e === r.name, onClick: t }, r.name)) })] })] })), La = [...new Array(9)].map((e, t) => a.jsx(qt, {}, t)), Ta = () => {
  const e = mt(), { category: t, sortOption: r } = Ee(xt), { items: n, status: u } = Ee(Vt), { cartItems: f } = Ee(Ot), b = c.useCallback((h) => {
    e(rt({ category: h }));
  }, [e]), x = c.useCallback((h) => {
    e($t(h));
  }, [e]), l = c.useCallback(() => {
    e(rt({ category: "" }));
  }, [e]), C = c.useCallback(() => e(st({ modalType: ot.Modal, isOpen: true })), [e]), S = c.useCallback(() => e(st({ modalType: ot.Cart, isOpen: true })), [e]);
  return a.jsxs("div", { className: "catalog_page relative pt-[120px] pb-[200px] bg-[#040A0A]", children: [a.jsx("img", { className: "absolute top-0 left-0 z-10", src: "./img/PagesImg/CatalogImg/CatalogFlowerLeft.png" }), a.jsx(Z, { className: "absolute top-0 right-0 w-[393px] h-[280px] bg-cherry rounded-[393px] blur-[125px] select-none" }), a.jsx(Z, { className: "absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px] select-none" }), a.jsx(Z, { className: "absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none" }), a.jsx(Z, { className: "absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px] select-none" }), a.jsx(Z, { className: "absolute top-[95rem] left-0 w-[750px] h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px] select-none" }), a.jsx("img", { className: "absolute top-0 right-0", src: "./img/PagesImg/CatalogImg/CatalogFlowerRight.png" }), a.jsxs("div", { className: "catalog_page__wrapper container mx-auto", children: [a.jsxs("div", { className: "flex justify-between", children: [a.jsx(Na, { categoryId: t, onClick: b }), a.jsx(ka, { openModal: C, openCart: S, cartItems: f })] }), a.jsxs("div", { className: "catalog_page__content flex flex-col mt-8", children: [a.jsxs("div", { className: "flex justify-between relative z-30", children: [a.jsx(fa, { categoryId: t, onClear: l }), a.jsx(wa, { sortValue: r, handleSortValue: x })] }), a.jsxs("div", { className: "flex", children: [a.jsx("div", { className: "catalog_page__sticky w-[255px]", children: a.jsx(va, {}) }), a.jsx("div", { className: "catalog_page__cards relative grid grid-cols-[repeat(3,_255px)] mx-auto gap-x-7 gap-y-14 mt-3", children: u === "error" ? a.jsx("h1", { className: "mt-4 text-[18px] font-normal uppercase w-[600px]", children: "\u041D\u0438\u0447\u0435\u0433\u043E \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" }) : u === "success" ? n.map((h) => a.jsx(Dt, { id: h.id, name: h.name, cost: h.cost, imageUrl: h.imageUrl, filters: h.filters, categories: h.categories, imgClassName: "h-[335px]" }, h.name)) : La })] })] })] }), a.jsx(Ht, {}), a.jsx(Z, { className: "absolute -bottom-[13rem] right-[15rem] w-[800px] h-[212px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px] select-none z-0" }), a.jsx(Bt, {})] });
};
export {
  Ta as default
};
