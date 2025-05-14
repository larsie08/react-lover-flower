import { j as e, ao as w, ap as N, r, x as y, y as p, Z as h, D as o, aq as k, ar as S, af as q } from "./index-bVRnJW3-.js";
const _ = () => e.jsxs("div", { className: "flex flex-col gap-5 mt-8", children: [e.jsx("h1", { className: "max-w-[295px] text-[14px] font-normal tracking-[0.56px] uppercase", children: "\u041F\u043E \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433" }), e.jsx(w, { to: "/catalog", className: "bg-light-turquoise h-[50px] w-[220px] text-center text-[black] px-12 py-4 border border-light-turquoise uppercase text-standart font-bold tracking-[1.2px] hover:bg-cherry hover:border-cherry hover:text-[white] focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]", children: "\u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433" })] }), E = () => {
  const { searchValue: x } = N(), n = r.useRef(null), [c, t] = r.useState([]), [m, l] = r.useState(x), i = (a) => {
    const s = a.target.value.toLowerCase();
    l(s), u(s);
  }, u = y((a) => {
    a !== "" ? g(a) : t([]);
  }, 500), d = (a) => {
    a.preventDefault(), l(""), t([]);
  }, g = async (a) => {
    try {
      const { data: s } = await p.get(`https://655b76e2ab37729791a92825.mockapi.io/items?name=${a}&page=1&limit=5`);
      t(s);
    } catch (s) {
      console.error("Error fetching search bouquets:", s);
    }
  };
  return r.useEffect(() => {
    (async () => {
      try {
        const { data: s } = await p.get(`https://655b76e2ab37729791a92825.mockapi.io/items?search=${x}`);
        t(s);
      } catch (s) {
        console.log(s);
      }
    })();
  }, [x]), e.jsxs("div", { className: h("result_search max-h-[3000px] relative bg-[#040A0A] pt-[120px] pb-20 px-3", { "h-[900px]": c.length === 0 }), children: [e.jsx(o, { className: "absolute sm:top-0 sm:left-0 w-[217px] h-[173px] bg-light-turquoise blur-[125px] max-sm:w-[205px] max-sm:h-[102px] max-sm:rotate-[32.828deg] max-sm:blur-[75px] max-sm:left-[-6rem] max-sm:top-[2rem]" }), e.jsx(o, { className: "absolute -top-[20rem] right-0 w-[504px] h-[625px] bg-cherry rounded-[625px] blur-[125px] max-sm:hidden" }), e.jsxs("div", { className: "wrapper container mx-auto flex flex-col sm:gap-12 max-sm:gap-5", children: [e.jsxs("form", { className: "relative w-[300px] flex items-center sm:hidden", children: [e.jsx(k, {}), e.jsx("input", { className: h("left-6 outline-none border-[#555] transition-[width] h-[30px] text-[14px] font-normal tracking-[.56px] uppercase placeholder:font-light placeholder:tracking-[.28px] placeholder:normal-case border-b w-[300px] bg-[black]/[0]"), type: "search", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441", ref: n, id: "search", value: m, autoComplete: "off", onChange: i }), e.jsx("button", { className: "absolute right-0 cursor-pointer", onClick: d, children: e.jsx(S, {}) })] }), e.jsxs("div", { className: "title relative z-20", children: [e.jsxs("h1", { className: "text-[30px] text-light-turquoise font-bold tracking-[1.2px] uppercase max-sm:text-[14px]", children: ["\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u0438\u0441\u043A\u0430: ", m] }), c.length === 0 && e.jsx(_, {})] }), e.jsx("div", { className: "search__cards relative sm:grid sm:grid-cols-[repeat(4,_255px)] mx-auto sm:gap-7 mt-3 max-sm:flex max-sm:flex-col max-sm:gap-12", children: c.map(({ id: a, name: s, cost: b, imageUrl: f, filters: j, categories: v }) => e.jsx(q, { id: a, name: s, cost: b, imageUrl: f, filters: j, categories: v, imgClassName: "h-[335px]" }, a)) })] }), e.jsx(o, { className: "absolute -bottom-[13rem] right-[45rem] w-[879px] h-[211px] rotate-[21.097deg] bg-light-turquoise rounded-[879px] blur-[125px] max-sm:w-[258px] max-sm:h-[106px] max-sm:rotate-[21.097deg] max-sm:-left-[5rem] max-sm:-bottom-[6rem] max-sm:blur-[50px]" }), e.jsx(o, { className: "absolute sm:-bottom-[10rem] sm:left-0 w-[166px] h-[353px] bg-cherry rounded-[353px] blur-[125px] max-sm:w-[184px] max-sm:h-[305px] max-sm:rotate-[32.828deg] max-sm:right-[4.3rem] max-sm:-bottom-[8rem] max-sm:blur-[75px]" })] });
};
export {
  E as default
};
