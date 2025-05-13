import { o as oe, j as t, a as ke, g as Me, r as g, u as Ce, v as ce, f as Le, U as Pe, t as Ee, k as D, s as Y, c as W, b as de, d as ze, m as ue, Y as He, S as ie, K as Ie, z as pe, A as Te, az as $e, w as Oe, aA as Be, y as qe, F as De, M as _e, G as Ue } from "./index-DN9CFzXB.js";
import { v as Xe } from "./visuallyHidden-Dan1xhjv.js";
const We = oe(t.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })), Ye = oe(t.jsx("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" }));
function Ge(o) {
  return Me("MuiRating", o);
}
const q = ke("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]);
function Ke(o) {
  const e = o.toString().split(".")[1];
  return e ? e.length : 0;
}
function te(o, e) {
  if (o == null) return o;
  const n = Math.round(o / e) * e;
  return Number(n.toFixed(Ke(e)));
}
const Je = (o) => {
  const { classes: e, size: n, readOnly: u, disabled: d, emptyValueFocused: F, focusVisible: x } = o, y = { root: ["root", `size${de(n)}`, d && "disabled", x && "focusVisible", u && "readOnly"], label: ["label", "pristine"], labelEmptyValue: [F && "labelEmptyValueActive"], icon: ["icon"], iconEmpty: ["iconEmpty"], iconFilled: ["iconFilled"], iconHover: ["iconHover"], iconFocus: ["iconFocus"], iconActive: ["iconActive"], decimal: ["decimal"], visuallyHidden: ["visuallyHidden"] };
  return ze(y, Ge, e);
}, Qe = Y("span", { name: "MuiRating", slot: "Root", overridesResolver: (o, e) => {
  const { ownerState: n } = o;
  return [{ [`& .${q.visuallyHidden}`]: e.visuallyHidden }, e.root, e[`size${de(n.size)}`], n.readOnly && e.readOnly];
} })(ue(({ theme: o }) => ({ display: "inline-flex", position: "relative", fontSize: o.typography.pxToRem(24), color: "#faaf00", cursor: "pointer", textAlign: "left", width: "min-content", WebkitTapHighlightColor: "transparent", [`&.${q.disabled}`]: { opacity: (o.vars || o).palette.action.disabledOpacity, pointerEvents: "none" }, [`&.${q.focusVisible} .${q.iconActive}`]: { outline: "1px solid #999" }, [`& .${q.visuallyHidden}`]: Xe, variants: [{ props: { size: "small" }, style: { fontSize: o.typography.pxToRem(18) } }, { props: { size: "large" }, style: { fontSize: o.typography.pxToRem(30) } }, { props: ({ ownerState: e }) => e.readOnly, style: { pointerEvents: "none" } }] }))), me = Y("label", { name: "MuiRating", slot: "Label", overridesResolver: ({ ownerState: o }, e) => [e.label, o.emptyValueFocused && e.labelEmptyValueActive] })({ cursor: "inherit", variants: [{ props: ({ ownerState: o }) => o.emptyValueFocused, style: { top: 0, bottom: 0, position: "absolute", outline: "1px solid #999", width: "100%" } }] }), Ze = Y("span", { name: "MuiRating", slot: "Icon", overridesResolver: (o, e) => {
  const { ownerState: n } = o;
  return [e.icon, n.iconEmpty && e.iconEmpty, n.iconFilled && e.iconFilled, n.iconHover && e.iconHover, n.iconFocus && e.iconFocus, n.iconActive && e.iconActive];
} })(ue(({ theme: o }) => ({ display: "flex", transition: o.transitions.create("transform", { duration: o.transitions.duration.shortest }), pointerEvents: "none", variants: [{ props: ({ ownerState: e }) => e.iconActive, style: { transform: "scale(1.2)" } }, { props: ({ ownerState: e }) => e.iconEmpty, style: { color: (o.vars || o).palette.action.disabled } }] }))), et = Y("span", { name: "MuiRating", slot: "Decimal", shouldForwardProp: (o) => He(o) && o !== "iconActive", overridesResolver: (o, e) => {
  const { iconActive: n } = o;
  return [e.decimal, n && e.iconActive];
} })({ position: "relative", variants: [{ props: ({ iconActive: o }) => o, style: { transform: "scale(1.2)" } }] });
function tt(o) {
  const { value: e, ...n } = o;
  return t.jsx("span", { ...n });
}
function re(o) {
  const { classes: e, disabled: n, emptyIcon: u, focus: d, getLabelText: F, highlightSelectedOnly: x, hover: y, icon: w, IconContainerComponent: C, isActive: A, itemValue: c, labelProps: j, name: V, onBlur: a, onChange: r, onClick: h, onFocus: v, readOnly: S, ownerState: L, ratingValue: i, ratingValueRounded: f, slots: G = {}, slotProps: K = {} } = o, k = x ? c === i : c <= i, T = c <= y, _ = c <= d, $ = c === f, U = `${V}-${ce()}`, O = { slots: G, slotProps: K }, [P, J] = D("icon", { elementType: Ze, className: W(e.icon, k ? e.iconFilled : e.iconEmpty, T && e.iconHover, _ && e.iconFocus, A && e.iconActive), externalForwardedProps: O, ownerState: { ...L, iconEmpty: !k, iconFilled: k, iconHover: T, iconFocus: _, iconActive: A }, additionalProps: { value: c }, internalForwardedProps: { as: C } }), [p, E] = D("label", { elementType: me, externalForwardedProps: O, ownerState: { ...L, emptyValueFocused: void 0 }, additionalProps: { style: j == null ? void 0 : j.style, htmlFor: U } }), R = t.jsx(P, { ...J, children: u && !k ? u : w });
  return S ? t.jsx("span", { ...j, children: R }) : t.jsxs(g.Fragment, { children: [t.jsxs(p, { ...E, children: [R, t.jsx("span", { className: e.visuallyHidden, children: F(c) })] }), t.jsx("input", { className: e.visuallyHidden, onFocus: v, onBlur: a, onChange: r, onClick: h, disabled: n, value: c, id: U, type: "radio", name: V, checked: $ })] });
}
const ot = t.jsx(We, { fontSize: "inherit" }), at = t.jsx(Ye, { fontSize: "inherit" });
function st(o) {
  return `${o || "0"} Star${o !== 1 ? "s" : ""}`;
}
const xe = g.forwardRef(function(e, n) {
  const u = Ce({ name: "MuiRating", props: e }), { component: d = "span", className: F, defaultValue: x = null, disabled: y = false, emptyIcon: w = at, emptyLabelText: C = "Empty", getLabelText: A = st, highlightSelectedOnly: c = false, icon: j = ot, IconContainerComponent: V = tt, max: a = 5, name: r, onChange: h, onChangeActive: v, onMouseLeave: S, onMouseMove: L, precision: i = 1, readOnly: f = false, size: G = "medium", value: K, slots: k = {}, slotProps: T = {}, ..._ } = u, $ = ce(r), [U, O] = Le({ controlled: K, default: x, name: "Rating" }), P = te(U, i), J = Pe(), [{ hover: p, focus: E }, R] = g.useState({ hover: -1, focus: -1 });
  let z = P;
  p !== -1 && (z = p), E !== -1 && (z = E);
  const [ve, Q] = g.useState(false), ae = g.useRef(), fe = Ee(ae, n), ge = (s) => {
    L && L(s);
    const l = ae.current, { right: m, left: X, width: H } = l.getBoundingClientRect();
    let I;
    J ? I = (m - s.clientX) / H : I = (s.clientX - X) / H;
    let b = te(a * I + i / 2, i);
    b = Ie(b, i, a), R((M) => M.hover === b && M.focus === b ? M : { hover: b, focus: b }), Q(false), v && p !== b && v(s, b);
  }, ye = (s) => {
    S && S(s);
    const l = -1;
    R({ hover: l, focus: l }), v && p !== l && v(s, l);
  }, se = (s) => {
    let l = s.target.value === "" ? null : parseFloat(s.target.value);
    p !== -1 && (l = p), O(l), h && h(s, l);
  }, be = (s) => {
    s.clientX === 0 && s.clientY === 0 || (R({ hover: -1, focus: -1 }), O(null), h && parseFloat(s.target.value) === P && h(s, null));
  }, Fe = (s) => {
    ie(s.target) && Q(true);
    const l = parseFloat(s.target.value);
    R((m) => ({ hover: m.hover, focus: l }));
  }, we = (s) => {
    if (p !== -1) return;
    ie(s.target) || Q(false);
    const l = -1;
    R((m) => ({ hover: m.hover, focus: l }));
  }, [Ae, ne] = g.useState(false), B = { ...u, component: d, defaultValue: x, disabled: y, emptyIcon: w, emptyLabelText: C, emptyValueFocused: Ae, focusVisible: ve, getLabelText: A, icon: j, IconContainerComponent: V, max: a, precision: i, readOnly: f, size: G }, N = Je(B), Z = { slots: k, slotProps: T }, [je, Se] = D("root", { ref: fe, className: W(N.root, F), elementType: Qe, externalForwardedProps: { ...Z, ..._, component: d }, getSlotProps: (s) => ({ ...s, onMouseMove: (l) => {
    var _a;
    ge(l), (_a = s.onMouseMove) == null ? void 0 : _a.call(s, l);
  }, onMouseLeave: (l) => {
    var _a;
    ye(l), (_a = s.onMouseLeave) == null ? void 0 : _a.call(s, l);
  } }), ownerState: B, additionalProps: { role: f ? "img" : null, "aria-label": f ? A(z) : null } }), [Re, Ne] = D("label", { className: W(N.label, N.labelEmptyValue), elementType: me, externalForwardedProps: Z, ownerState: B }), [Ve, le] = D("decimal", { className: N.decimal, elementType: et, externalForwardedProps: Z, ownerState: B });
  return t.jsxs(je, { ...Se, children: [Array.from(new Array(a)).map((s, l) => {
    const m = l + 1, X = { classes: N, disabled: y, emptyIcon: w, focus: E, getLabelText: A, highlightSelectedOnly: c, hover: p, icon: j, IconContainerComponent: V, name: $, onBlur: we, onChange: se, onClick: be, onFocus: Fe, ratingValue: z, ratingValueRounded: P, readOnly: f, ownerState: B, slots: k, slotProps: T }, H = m === Math.ceil(z) && (p !== -1 || E !== -1);
    if (i < 1) {
      const I = Array.from(new Array(1 / i));
      return g.createElement(Ve, { ...le, key: m, className: W(le.className, H && N.iconActive), iconActive: H }, I.map((b, M) => {
        const ee = te(m - 1 + (M + 1) * i, i);
        return t.jsx(re, { ...X, isActive: false, itemValue: ee, labelProps: { style: I.length - 1 === M ? {} : { width: ee === z ? `${(M + 1) * i * 100}%` : "0%", overflow: "hidden", position: "absolute" } } }, ee);
      }));
    }
    return t.jsx(re, { ...X, isActive: H, itemValue: m }, m);
  }), !f && !y && t.jsxs(Re, { ...Ne, children: [t.jsx("input", { className: N.visuallyHidden, value: "", id: `${$}-empty`, type: "radio", name: $, checked: P == null, onFocus: () => ne(true), onBlur: () => ne(false), onChange: se }), t.jsx("span", { className: N.visuallyHidden, children: C })] })] });
}), he = oe(t.jsx("path", { d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z" })), nt = ({ rating: o, feedback: e, name: n, createdAt: u }) => t.jsxs("div", { className: "flex flex-col gap-2", children: [t.jsx("p", { className: "h-[25px] text-light-turquoise text-[30px] font-normal tracking-[0.6px] uppercase", children: "\u201C" }), t.jsx("h2", { className: "max-w-[540px] text-[16px] font-normal tracking-[0.32px]", children: e }), t.jsx("div", { className: "rating__group mt-1 relative w-[10em] h-[2em]", children: t.jsx(xe, { name: "read-only-rating", value: o, readOnly: true, max: 5, emptyIcon: t.jsx(he, { style: { color: pe[800], opacity: "inherit" } }) }) }), t.jsxs("div", { className: "flex gap-1", children: [t.jsxs("h4", { className: "text-[14px] font-normal tracking-[0.14px] text-[#555]", children: [n, ","] }), t.jsx("h4", { className: "text-[14px] font-normal tracking-[0.28px] text-[#555]", children: u })] })] }), rt = () => {
  const o = Te(), e = $e(), [n, u] = g.useState(0), [d, F] = g.useState([]), { register: x, handleSubmit: y, formState: { errors: w } } = Oe(), C = (a) => {
    V(n, a.feedback, a.name, a.email), c("success");
  }, A = (a) => {
    console.log(a), c("error");
  }, c = (a) => {
    o(De({ modalType: _e.Alert, isOpen: true })), o(Ue({ severity: a }));
  }, j = (a) => {
    let r = "";
    return a instanceof Date ? r = a.toLocaleDateString().split(".").reverse().join("-") : r = a.split("T")[0].split("-").reverse().join("-"), r;
  }, V = async (a, r, h, v) => {
    try {
      const S = { bouquetId: e.id, rating: a, feedback: r, name: h, email: v }, i = j(/* @__PURE__ */ new Date()), f = d.length + 1;
      F([...d, { reviewId: f, rating: a, feedback: r, name: h, email: v, createdAt: i }]), o(Be({ id: e.id, review: { reviewId: f, rating: a, feedback: r, name: h, email: v, createdAt: i } })), await qe.post("http://localhost:3000/api/review", S);
    } catch (S) {
      console.log(S);
    }
  };
  return g.useEffect(() => {
    e.reviews && F(e.reviews);
  }, [e]), t.jsxs("div", { className: "mt-16", children: [t.jsx("div", { className: "reviews", children: d ? d.map((a) => t.jsx(nt, { rating: a.rating, feedback: a.feedback, name: a.name, createdAt: j(a.createdAt) }, a.reviewId)) : t.jsx("h3", { className: "text-[14px] font-normal tracking-[0.84px]", children: "\u041E\u0442\u0437\u044B\u0432\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442" }) }), t.jsxs("div", { className: "mt-16 flex flex-col gap-2", children: [t.jsx("h2", { className: "text-[14px] text-light-turquoise font-normal tracking-[0.84px] uppercase", children: d ? `\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u201C${e == null ? void 0 : e.name}\u201D` : `\u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u043B \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u201C${e == null ? void 0 : e.name}\u201D` }), t.jsx("h3", { className: "text-[14px] font-normal tracking-[0.84px]", children: "\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 email \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D. \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F \u043F\u043E\u043C\u0435\u0447\u0435\u043D\u044B *" })] }), t.jsxs("form", { onSubmit: y(C, A), className: "flex flex-col gap-5 mt-5", children: [t.jsxs("div", { className: "flex flex-col", children: [t.jsx("label", { htmlFor: "rating-review", children: "\u0412\u0430\u0448\u0430 \u043E\u0446\u0435\u043D\u043A\u0430:" }), t.jsx(xe, { name: "rating-review", defaultValue: 0, value: n, max: 5, precision: 1, onChange: (a, r) => {
    u(r || 0);
  }, emptyIcon: t.jsx(he, { style: { color: pe[800], opacity: "inherit" } }) })] }), t.jsxs("div", { className: "flex flex-col", children: [t.jsx("label", { className: "text-[14px] font-normal tracking-[0.84px]", htmlFor: "review", children: "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432*" }), t.jsx("textarea", { className: "w-[540px] h-[180px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]", id: "review", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", ...x("feedback", { required: true }), "aria-invalid": !!w.name })] }), t.jsxs("div", { className: "flex flex-col", children: [t.jsx("label", { className: "text-[14px] font-normal tracking-[0.84px]", htmlFor: "name", children: "\u0418\u043C\u044F*" }), t.jsx("input", { className: "w-[540px] h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]", type: "text", id: "name", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F", ...x("name", { required: true }), "aria-invalid": !!w.name })] }), t.jsxs("div", { className: "flex flex-col", children: [t.jsx("label", { className: "text-[14px] font-normal tracking-[0.84px]", htmlFor: "email", children: "E-mail*" }), t.jsx("input", { className: "w-[540px] h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:bg-[#040A0A] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]", type: "email", id: "email", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443", ...x("email", { required: true }), "aria-invalid": !!w.name })] }), t.jsx("button", { className: "w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]", children: "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }), t.jsxs("p", { className: "max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed", children: ["\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441", t.jsx("span", { className: "text-pink underline ml-1", children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" })] })] })] });
};
export {
  rt as default
};
