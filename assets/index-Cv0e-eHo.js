import { g as U, a as E, r as c, u as K, i as Ce, j as o, s as z, c as L, b as M, d as V, m as W, e as X, f as ue, h as Z, k as J, B as Pe, l as te, n as me, o as he, p as we, q as se, t as Se, v as Ne, w as Re, x as ke, y as ee, C as ae, z as H, A as Fe, E as _e, F as Be, M as Ie, G as qe, D as G, P as Me, H as ze } from "./index-BRYhcpXE.js";
function Oe(e) {
  return U("MuiTypography", e);
}
E("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const $e = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, Ae = Ce(), Te = (e) => {
  const { align: t, gutterBottom: r, noWrap: s, paragraph: n, variant: d, classes: a } = e, p = { root: ["root", d, e.align !== "inherit" && `align${M(t)}`, r && "gutterBottom", s && "noWrap", n && "paragraph"] };
  return V(p, Oe, a);
}, Ge = z("span", { name: "MuiTypography", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${M(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
} })(W(({ theme: e }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({ props: { variant: t }, style: r })), ...Object.entries(e.palette).filter(X()).map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })), ...Object.entries(((_a = e.palette) == null ? void 0 : _a.text) || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({ props: { color: `text${M(t)}` }, style: { color: (e.vars || e).palette.text[t] } })), { props: ({ ownerState: t }) => t.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: t }) => t.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: t }) => t.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: t }) => t.paragraph, style: { marginBottom: 16 } }] };
})), ne = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, le = c.forwardRef(function(t, r) {
  const { color: s, ...n } = K({ props: t, name: "MuiTypography" }), d = !$e[s], a = Ae({ ...n, ...d && { color: s } }), { align: p = "inherit", className: m, component: u, gutterBottom: x = false, noWrap: P = false, paragraph: N = false, variant: w = "body1", variantMapping: g = ne, ...j } = a, b = { ...a, align: p, color: s, className: m, component: u, gutterBottom: x, noWrap: P, paragraph: N, variant: w, variantMapping: g }, R = u || (N ? "p" : g[w] || ne[w]) || "span", h = Te(b);
  return o.jsx(Ge, { as: R, ref: r, className: L(h.root, m), ...j, ownerState: b, style: { ...p !== "inherit" && { "--Typography-textAlign": p }, ...j.style } });
});
function Le(e) {
  return U("PrivateSwitchBase", e);
}
E("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Ue = (e) => {
  const { classes: t, checked: r, disabled: s, edge: n } = e, d = { root: ["root", r && "checked", s && "disabled", n && `edge${M(n)}`], input: ["input"] };
  return V(d, Le, t);
}, Ee = z(Pe)({ padding: 9, borderRadius: "50%", variants: [{ props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: ({ edge: e, ownerState: t }) => e === "start" && t.size !== "small", style: { marginLeft: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }, { props: ({ edge: e, ownerState: t }) => e === "end" && t.size !== "small", style: { marginRight: -12 } }] }), Ve = z("input", { shouldForwardProp: te })({ cursor: "inherit", position: "absolute", opacity: 0, width: "100%", height: "100%", top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), De = c.forwardRef(function(t, r) {
  const { autoFocus: s, checked: n, checkedIcon: d, defaultChecked: a, disabled: p, disableFocusRipple: m = false, edge: u = false, icon: x, id: P, inputProps: N, inputRef: w, name: g, onBlur: j, onChange: b, onFocus: R, readOnly: h, required: F = false, tabIndex: B, type: S, value: y, slots: I = {}, slotProps: A = {}, ...k } = t, [C, T] = ue({ controlled: n, default: !!a, name: "SwitchBase", state: "checked" }), v = Z(), q = (f) => {
    R && R(f), v && v.onFocus && v.onFocus(f);
  }, i = (f) => {
    j && j(f), v && v.onBlur && v.onBlur(f);
  }, l = (f) => {
    if (f.nativeEvent.defaultPrevented) return;
    const _ = f.target.checked;
    T(_), b && b(f, _);
  };
  let $ = p;
  v && typeof $ > "u" && ($ = v.disabled);
  const fe = S === "checkbox" || S === "radio", Q = { ...t, checked: C, disabled: $, disableFocusRipple: m, edge: u }, oe = Ue(Q), re = { slots: I, slotProps: { input: N, ...A } }, [be, ye] = J("root", { ref: r, elementType: Ee, className: oe.root, shouldForwardComponentProp: true, externalForwardedProps: { ...re, component: "span", ...k }, getSlotProps: (f) => ({ ...f, onFocus: (_) => {
    var _a;
    (_a = f.onFocus) == null ? void 0 : _a.call(f, _), q(_);
  }, onBlur: (_) => {
    var _a;
    (_a = f.onBlur) == null ? void 0 : _a.call(f, _), i(_);
  } }), ownerState: Q, additionalProps: { centerRipple: true, focusRipple: !m, disabled: $, role: void 0, tabIndex: null } }), [ve, je] = J("input", { ref: w, elementType: Ve, className: oe.input, externalForwardedProps: re, getSlotProps: (f) => ({ ...f, onChange: (_) => {
    var _a;
    (_a = f.onChange) == null ? void 0 : _a.call(f, _), l(_);
  } }), ownerState: Q, additionalProps: { autoFocus: s, checked: n, defaultChecked: a, disabled: $, id: fe ? P : void 0, name: g, readOnly: h, required: F, tabIndex: B, type: S, ...S === "checkbox" && y === void 0 ? {} : { value: y } } });
  return o.jsxs(be, { ...ye, children: [o.jsx(ve, { ...je }), C ? d : x] });
});
function We(e) {
  return U("MuiFormControlLabel", e);
}
const D = E("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), He = (e) => {
  const { classes: t, disabled: r, labelPlacement: s, error: n, required: d } = e, a = { root: ["root", r && "disabled", `labelPlacement${M(s)}`, n && "error", d && "required"], label: ["label", r && "disabled"], asterisk: ["asterisk", n && "error"] };
  return V(a, We, t);
}, Ye = z("label", { name: "MuiFormControlLabel", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [{ [`& .${D.label}`]: t.label }, t.root, t[`labelPlacement${M(r.labelPlacement)}`]];
} })(W(({ theme: e }) => ({ display: "inline-flex", alignItems: "center", cursor: "pointer", verticalAlign: "middle", WebkitTapHighlightColor: "transparent", marginLeft: -11, marginRight: 16, [`&.${D.disabled}`]: { cursor: "default" }, [`& .${D.label}`]: { [`&.${D.disabled}`]: { color: (e.vars || e).palette.text.disabled } }, variants: [{ props: { labelPlacement: "start" }, style: { flexDirection: "row-reverse", marginRight: -11 } }, { props: { labelPlacement: "top" }, style: { flexDirection: "column-reverse" } }, { props: { labelPlacement: "bottom" }, style: { flexDirection: "column" } }, { props: ({ labelPlacement: t }) => t === "start" || t === "top" || t === "bottom", style: { marginLeft: 16 } }] }))), Je = z("span", { name: "MuiFormControlLabel", slot: "Asterisk", overridesResolver: (e, t) => t.asterisk })(W(({ theme: e }) => ({ [`&.${D.error}`]: { color: (e.vars || e).palette.error.main } }))), ie = c.forwardRef(function(t, r) {
  const s = K({ props: t, name: "MuiFormControlLabel" }), { checked: n, className: d, componentsProps: a = {}, control: p, disabled: m, disableTypography: u, inputRef: x, label: P, labelPlacement: N = "end", name: w, onChange: g, required: j, slots: b = {}, slotProps: R = {}, value: h, ...F } = s, B = Z(), S = m ?? p.props.disabled ?? (B == null ? void 0 : B.disabled), y = j ?? p.props.required, I = { disabled: S, required: y };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((l) => {
    typeof p.props[l] > "u" && typeof s[l] < "u" && (I[l] = s[l]);
  });
  const A = me({ props: s, muiFormControl: B, states: ["error"] }), k = { ...s, disabled: S, labelPlacement: N, required: y, error: A.error }, C = He(k), T = { slots: b, slotProps: { ...a, ...R } }, [v, q] = J("typography", { elementType: le, externalForwardedProps: T, ownerState: k });
  let i = P;
  return i != null && i.type !== le && !u && (i = o.jsx(v, { component: "span", ...q, className: L(C.label, q == null ? void 0 : q.className), children: i })), o.jsxs(Ye, { className: L(C.root, d), ownerState: k, ref: r, ...F, children: [c.cloneElement(p, I), y ? o.jsxs("div", { children: [i, o.jsxs(Je, { ownerState: k, "aria-hidden": true, className: C.asterisk, children: ["\u2009", "*"] })] }) : i] });
});
function Ke(e) {
  return U("MuiFormGroup", e);
}
E("MuiFormGroup", ["root", "row", "error"]);
const Ze = (e) => {
  const { classes: t, row: r, error: s } = e;
  return V({ root: ["root", r && "row", s && "error"] }, Ke, t);
}, Qe = z("div", { name: "MuiFormGroup", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.row && t.row];
} })({ display: "flex", flexDirection: "column", flexWrap: "wrap", variants: [{ props: { row: true }, style: { flexDirection: "row" } }] }), Xe = c.forwardRef(function(t, r) {
  const s = K({ props: t, name: "MuiFormGroup" }), { className: n, row: d = false, ...a } = s, p = Z(), m = me({ props: s, muiFormControl: p, states: ["error"] }), u = { ...s, row: d, error: m.error }, x = Ze(u);
  return o.jsx(Qe, { className: L(x.root, n), ownerState: u, ref: r, ...a });
}), et = he(o.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })), tt = he(o.jsx("path", { d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" })), ot = z("span", { shouldForwardProp: te })({ position: "relative", display: "flex" }), rt = z(et)({ transform: "scale(1)" }), st = z(tt)(W(({ theme: e }) => ({ left: 0, position: "absolute", transform: "scale(0)", transition: e.transitions.create("transform", { easing: e.transitions.easing.easeIn, duration: e.transitions.duration.shortest }), variants: [{ props: { checked: true }, style: { transform: "scale(1)", transition: e.transitions.create("transform", { easing: e.transitions.easing.easeOut, duration: e.transitions.duration.shortest }) } }] })));
function xe(e) {
  const { checked: t = false, classes: r = {}, fontSize: s } = e, n = { ...e, checked: t };
  return o.jsxs(ot, { className: r.root, ownerState: n, children: [o.jsx(rt, { fontSize: s, className: r.background, ownerState: n }), o.jsx(st, { fontSize: s, className: r.dot, ownerState: n })] });
}
const ge = c.createContext(void 0);
function at() {
  return c.useContext(ge);
}
function nt(e) {
  return U("MuiRadio", e);
}
const ce = E("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), lt = (e) => {
  const { classes: t, color: r, size: s } = e, n = { root: ["root", `color${M(r)}`, s !== "medium" && `size${M(s)}`] };
  return { ...t, ...V(n, nt, t) };
}, it = z(De, { shouldForwardProp: (e) => te(e) || e === "classes", name: "MuiRadio", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: r } = e;
  return [t.root, r.size !== "medium" && t[`size${M(r.size)}`], t[`color${M(r.color)}`]];
} })(W(({ theme: e }) => ({ color: (e.vars || e).palette.text.secondary, [`&.${ce.disabled}`]: { color: (e.vars || e).palette.action.disabled }, variants: [{ props: { color: "default", disabled: false, disableRipple: false }, style: { "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : se(e.palette.action.active, e.palette.action.hoverOpacity) } } }, ...Object.entries(e.palette).filter(X()).map(([t]) => ({ props: { color: t, disabled: false, disableRipple: false }, style: { "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : se(e.palette[t].main, e.palette.action.hoverOpacity) } } })), ...Object.entries(e.palette).filter(X()).map(([t]) => ({ props: { color: t, disabled: false }, style: { [`&.${ce.checked}`]: { color: (e.vars || e).palette[t].main } } })), { props: { disableRipple: false }, style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } } }] })));
function ct(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const pt = o.jsx(xe, { checked: true }), dt = o.jsx(xe, {}), pe = c.forwardRef(function(t, r) {
  const s = K({ props: t, name: "MuiRadio" }), { checked: n, checkedIcon: d = pt, color: a = "primary", icon: p = dt, name: m, onChange: u, size: x = "medium", className: P, disabled: N, disableRipple: w = false, slots: g = {}, slotProps: j = {}, inputProps: b, ...R } = s, h = Z();
  let F = N;
  h && typeof F > "u" && (F = h.disabled), F ?? (F = false);
  const B = { ...s, disabled: F, disableRipple: w, color: a, size: x }, S = lt(B), y = at();
  let I = n;
  const A = we(u, y && y.onChange);
  let k = m;
  y && (typeof I > "u" && (I = ct(y.value, s.value)), typeof k > "u" && (k = y.name));
  const C = j.input ?? b, [T, v] = J("root", { ref: r, elementType: it, className: L(S.root, P), shouldForwardComponentProp: true, externalForwardedProps: { slots: g, slotProps: j, ...R }, getSlotProps: (q) => ({ ...q, onChange: (i, ...l) => {
    var _a;
    (_a = q.onChange) == null ? void 0 : _a.call(q, i, ...l), A(i, ...l);
  } }), ownerState: B, additionalProps: { type: "radio", icon: c.cloneElement(p, { fontSize: p.props.fontSize ?? x }), checkedIcon: c.cloneElement(d, { fontSize: d.props.fontSize ?? x }), disabled: F, name: k, checked: I, slots: g, slotProps: { input: typeof C == "function" ? C(B) : C } } });
  return o.jsx(T, { ...v, classes: S });
});
function ut(e) {
  return U("MuiRadioGroup", e);
}
E("MuiRadioGroup", ["root", "row", "error"]);
const mt = (e) => {
  const { classes: t, row: r, error: s } = e;
  return V({ root: ["root", r && "row", s && "error"] }, ut, t);
}, de = c.forwardRef(function(t, r) {
  const { actions: s, children: n, className: d, defaultValue: a, name: p, onChange: m, value: u, ...x } = t, P = c.useRef(null), N = mt(t), [w, g] = ue({ controlled: u, default: a, name: "RadioGroup" });
  c.useImperativeHandle(s, () => ({ focus: () => {
    let h = P.current.querySelector("input:not(:disabled):checked");
    h || (h = P.current.querySelector("input:not(:disabled)")), h && h.focus();
  } }), []);
  const j = Se(r, P), b = Ne(p), R = c.useMemo(() => ({ name: b, onChange(h) {
    g(h.target.value), m && m(h, h.target.value);
  }, value: w }), [b, m, g, w]);
  return o.jsx(ge.Provider, { value: R, children: o.jsx(Xe, { role: "radiogroup", ref: j, className: L(N.root, d), ...x, children: n }) });
}), ht = "flex flex-col gap-1 text-[14px] font-normal", xt = "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]", O = c.memo(({ label: e, placeholder: t, type: r = "text", register: s, error: n, autoComplete: d = "on" }) => o.jsxs("label", { className: ht, children: [e, o.jsx("input", { className: xt, placeholder: t, type: r, ...s, autoComplete: d, "aria-invalid": !!n })] })), Y = c.memo(({ title: e, children: t }) => o.jsxs("section", { className: "form-section flex flex-col gap-1 [&:not(:first-child)]:mt-16", children: [o.jsx("h3", { className: "section-title text-[14px] text-light-turquoise font-bold uppercase", children: e }), o.jsx("div", { className: "flex flex-col gap-5 mt-5", children: t })] })), gt = c.memo(({ applyPromoCode: e, register: t }) => o.jsxs("div", { className: "promo-code-input h-[60px] flex items-center", children: [o.jsx("input", { className: "promo-input h-[60px] w-[160px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]", placeholder: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434", type: "text", ...t }), o.jsx("button", { type: "button", onClick: e, className: "apply-promo-btn border-[.5px] w-[190px] h-full p-4 text-[12px] font-bold tracking-[1.2px] border-light-turquoise uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] transition", children: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C" })] })), ft = c.memo(({ suggestions: e, onSelect: t }) => o.jsx("ul", { className: "suggestion-list", children: e.map((r) => {
  var _a;
  return o.jsxs("li", { onClick: () => t(r), className: "suggestion-item", children: [o.jsx("h4", { children: r.title.text }), o.jsx("span", { children: (_a = r.subtitle) == null ? void 0 : _a.text })] }, r.distance.value);
}) })), bt = c.memo(({ finalPrice: e, discount: t, deliveryPrice: r, appliedPromo: s }) => o.jsxs("div", { className: "summary flex flex-col gap-2 mt-16", children: [o.jsxs("div", { className: "flex gap-24", children: [o.jsx("h2", { className: "text-[30px] text-light-turquoise font-bold uppercase", children: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430" }), o.jsxs("h2", { className: "text-[30px] text-light-turquoise font-bold uppercase", children: [e, " \u20BD"] })] }), o.jsxs("div", { className: "flex flex-col gap-4", children: [o.jsxs("h3", { className: "text-[14px] font-normal uppercase", children: ["\u0421\u043A\u0438\u0434\u043A\u0430: ", t, " \u20BD (", s == null ? void 0 : s.percentageDiscount, "%)"] }), o.jsxs("h3", { className: "text-[14px] font-normal uppercase", children: ["\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430: ", r, " \u20BD"] })] })] })), yt = ["\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437", "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"], vt = ["\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0430", "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438", "Apple pay", "Google pay", "\u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0430", "\u0421 \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430"], jt = { name: "", phone: "", email: "", secondPhone: "", receiverName: "", comment: "", deliveryRadioGroup: "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437", payRadioGroupOptions: "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0430", promoCode: "", address: "", apartmentNumber: "", deliveryTime: "" }, Ct = c.memo(({ submitOrder: e, totalPrice: t, sendAlert: r }) => {
  const { register: s, handleSubmit: n, control: d, watch: a, getValues: p, setValue: m, formState: { errors: u } } = Re({ defaultValues: jt }), [x, P] = c.useState(0), [N, w] = c.useState(0), [g, j] = c.useState(t), [b, R] = c.useState(), [h, F] = c.useState(void 0), [B, S] = c.useState(false), y = a("deliveryRadioGroup"), I = a("payRadioGroupOptions"), A = async () => {
    const i = p("promoCode").trim().toLowerCase();
    if (!i) return alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434");
    if (h) return alert("\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u0443\u0436\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u0451\u043D");
    const l = await k(i);
    if (!l) return r("error");
    const $ = g * l.percentageDiscount / 100;
    P(Number($.toFixed(2))), j(g - $), F(l), r("success");
  }, k = async (i) => {
    try {
      const { data: l } = await ee.get(`http://localhost:3000/api/promocode/${i}`);
      return l;
    } catch (l) {
      console.log(l);
    }
  }, C = ke(async () => {
    const i = p("address").trim();
    if (i) try {
      const { data: l } = await ee.get(`https://suggest-maps.yandex.ru/v1/suggest?apikey=YOUR_API_KEY&text=${i}&lang=ru&results=20`);
      R(l.results), S(true);
    } catch {
      console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0430\u0434\u0440\u0435\u0441\u0430"), r("error");
    }
  }, 350), T = (i) => {
    var _a;
    const l = `${((_a = i.subtitle) == null ? void 0 : _a.text) ?? ""}, ${i.title.text}`;
    m("address", l), w(Math.round(Math.random() * 900 + 100)), S(false);
  }, v = (i) => {
    e(i, g, p("address").trim(), h);
  }, q = (i) => {
    r("error"), console.log(i);
  };
  return o.jsxs("form", { onSubmit: n(v, q), className: "order__forms_block w-[540px]", children: [o.jsxs(Y, { title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435", children: [o.jsx(O, { label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F*", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F", register: s("name", { required: true }), error: u.name }), o.jsx(O, { label: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D*", placeholder: "+7 (977) 777-77-77", type: "tel", register: s("phone", { required: true }), error: u.phone }), o.jsx(O, { label: "\u0412\u0430\u0448 e-mail*", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443", type: "email", register: s("email", { required: true }), error: u.email }), o.jsx(O, { label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)", placeholder: "+7 (977) 777-77-77", type: "tel", register: s("secondPhone") }), o.jsx(O, { label: "\u0418\u043C\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F", register: s("receiverName") }), o.jsx(O, { label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443", placeholder: "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043A \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443", register: s("comment") })] }), o.jsxs(Y, { title: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430", children: [o.jsx(ae, { control: d, name: "deliveryRadioGroup", render: ({ field: i }) => o.jsx(de, { ...i, children: yt.map((l) => o.jsx(ie, { value: l, control: o.jsx(pe, { sx: { color: H[900], "&.Mui-checked": { color: H[50] } } }), label: l, className: "text-[#353535] font-normal aria-checked:text-[white] uppercase tracking-normal", "aria-checked": y === l }, l)) }) }), y === "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C" && o.jsxs(o.Fragment, { children: [o.jsx(O, { label: "\u0410\u0434\u0440\u0435\u0441*", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441", register: s("address", { required: true, onChange: C }), error: u.address, autoComplete: "off" }), o.jsxs("div", { className: "flex gap-8", children: [o.jsx(O, { label: "\u041A\u0432/\u043E\u0444\u0438\u0441", placeholder: "\u041A\u0432/\u043E\u0444\u0438\u0441", register: s("address", { required: true, onChange: C }), error: u.address, autoComplete: "off" }), o.jsx(O, { label: "\u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438", placeholder: "__/__", register: s("address", { required: true, onChange: C }), error: u.address, autoComplete: "off" })] }), B && b && o.jsx(ft, { suggestions: b, onSelect: T })] })] }), o.jsx(Y, { title: "\u041E\u043F\u043B\u0430\u0442\u0430", children: o.jsx(ae, { control: d, name: "payRadioGroupOptions", render: ({ field: i }) => o.jsx(de, { ...i, children: vt.map((l) => o.jsx(ie, { value: l, control: o.jsx(pe, { sx: { color: H[900], "&.Mui-checked": { color: H[50] } } }), label: l, className: "text-[#353535] font-normal aria-checked:text-[white] uppercase tracking-normal", "aria-checked": I === l }, l)) }) }) }), o.jsx(Y, { title: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434", children: o.jsx(gt, { applyPromoCode: A, register: s("promoCode") }) }), o.jsx(bt, { finalPrice: g, discount: x, deliveryPrice: N, appliedPromo: h }), o.jsxs("div", { className: "total_price__button_block flex flex-col gap-[10px] mt-7", children: [o.jsx("button", { onClick: n(v, q), type: "submit", className: "w-[255px] mt-2 transition-all cursor-pointer text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]", children: "\u041A \u043E\u043F\u043B\u0430\u0442\u0435" }), o.jsxs("p", { className: "max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed", children: ["\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041A \u041E\u043F\u043B\u0430\u0442\u0435\xBB, \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441", o.jsx("span", { className: "text-pink underline ml-1", children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }), ", \u0430 \u0442\u0430\u043A \u0436\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"] })] })] });
}), Pt = [{ text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", path: "/" }, { text: "\u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430", path: "/order" }], St = () => {
  const e = Fe(), { cartItems: t, totalPrice: r } = _e((a) => a.cart), s = c.useCallback((a, p, m, u) => {
    const x = { name: a.name, phoneNumber: a.phone, email: a.email, secondPhoneNumber: a.secondPhone, receiverName: a.receiverName, comment: a.comment, deliveryMethod: a.deliveryRadioGroup, paymentMethod: a.payRadioGroupOptions, cartItems: t, finalPrice: p, ...m && { address: { deliveryAddress: m, apartmentNumber: a.apartmentNumber, deliveryTime: a.deliveryTime } }, ...u && { appliedPromoCode: u } };
    d(x);
  }, [e]), n = c.useCallback((a) => {
    e(Be({ modalType: Ie.Alert, isOpen: true })), e(qe({ severity: a }));
  }, [e]), d = async (a) => {
    try {
      await ee.post("http://localhost:3000/api/order/", a), n("success");
    } catch (p) {
      console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430", p), n("error");
    }
  };
  return o.jsxs("div", { className: "order_page relative pt-[120px] pb-[200px] max-h-[3000px] bg-[#040A0A]", children: [o.jsx(G, { className: "absolute w-[217px] h-[174px] blur-[125px] bg-light-turquoise rounded-[50%] -rotate-[71.859deg] -top-[5rem] -left-[4rem] z-10" }), o.jsx("img", { src: "./img/PagesImg/OrderImg/FlowerBgLeft.png", className: "absolute top-0 left-0 z-20" }), o.jsx("img", { src: "./img/PagesImg/OrderImg/FlowerBgFirstRight.png", className: "absolute top-0 right-0 z-20" }), o.jsx("img", { src: "./img/PagesImg/OrderImg/FlowerBgSecondRight.png", className: "absolute top-0 right-0 z-20" }), o.jsx(G, { className: "absolute w-[504px] h-[625px] blur-[125px] bg-cherry rounded-[50%] -top-[5rem] right-0 z-10" }), o.jsx(G, { className: "absolute w-[403px] h-[211px] blur-[125px] bg-light-turquoise rounded-[50%] top-[80rem] right-0 z-[15]" }), o.jsx(G, { className: "absolute w-[355px] h-[365px] blur-[125px] bg-cherry rounded-[50%] top-[88rem] right-[5rem] z-10" }), o.jsxs("div", { className: "order_page__wrapper mx-auto container relative z-30", children: [o.jsx(Me, { items: Pt }), o.jsxs("div", { className: "order__title relative z-10 mt-16", children: [o.jsx("h1", { className: "flex items-center  h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase", children: "\u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435" }), o.jsx("h1", { className: "flex items-center ml-[95px] h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase", children: "\u0437\u0430\u043A\u0430\u0437\u0430" })] }), o.jsxs("div", { className: "order_block mt-20", children: [o.jsx("h2", { className: "text-[30px] text-light-turquoise font-bold uppercase", children: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430" }), o.jsxs("div", { className: "order__content_block flex justify-between mt-10 w-full", children: [o.jsx(Ct, { submitOrder: s, totalPrice: r, sendAlert: n }), o.jsxs("div", { className: "order__cart_items", children: [o.jsx("h3", { className: "form_title text-[14px] text-light-turquoise font-bold uppercase", children: "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437:" }), o.jsx("div", { className: "cart_items flex flex-col w-[350px] [&:first-of-type]:border-t border-[#555] mt-11", children: t.map((a) => o.jsx(ze, { id: a.id, name: a.name, cost: a.cost, imageUrl: a.imageUrl, quantity: a.quantity, dispatch: e }, a.id)) }), o.jsxs("h3", { className: "text-[14px] text-light-turquoise font-bold tracking-[0.28px] uppercase mt-5", children: ["\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0438\u0442\u043E\u0433: ", r, " \u0440\u0443\u0431."] })] })] })] })] }), o.jsx(G, { className: "absolute w-[100px] h-[211px] blur-[125px] bg-light-turquoise rounded-[50%] rotate-[21.097deg] -bottom-[3rem] left-0 z-10" }), o.jsx(G, { className: "absolute w-[700px] h-[211px] blur-[125px] bg-light-turquoise rounded-[50%] rotate-[21.097deg] -bottom-[12rem] right-[35%] z-10" }), o.jsx(G, { className: "absolute w-[355px] h-[365px] blur-[125px] bg-cherry rounded-[50%] -bottom-[8rem] right-0 z-10" })] });
};
export {
  St as default
};
