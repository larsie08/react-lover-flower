import { j as e, D as l, A as p, w as m, F as g, M as d, G as u, R as h, I as f, P as b, __tla as __tla_0 } from "./index-bVRnJW3-.js";
import { T as j } from "./index-C5WqwIs0.js";
let q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let v, N, _, y, o, w, k, A, F, C, D, M, z, P, T, I;
  v = [
    {
      title: "\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",
      content: "\u0441 10:00 \u0434\u043E 21:00 \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445"
    },
    {
      title: "\u0410\u0434\u0440\u0435\u0441",
      content: "\u0433. \u041C\u0438\u043D\u0441\u043A, \u0443\u043B. \u0422\u0438\u043C\u0438\u0440\u044F\u0437\u0435\u0432\u0430 67, \u043A\u043E\u043C\u043D. 112"
    },
    {
      title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      content: "+375 (29) 113-69-69"
    },
    {
      title: "E-mail",
      content: "zakaz@loverflower.by"
    }
  ];
  N = () => e.jsxs("div", {
    className: "card_blocks relative",
    children: [
      e.jsx(l, {
        className: "absolute right-[15rem] bottom-0 w-[1006px] h-[124px] -rotate-[165.265deg] rounded-[1007px] bg-[#922D2D] blur-[125px] max-lg:hidden"
      }),
      e.jsx("div", {
        className: "card_blocks__wrapper relative flex max-lg:flex-col justify-evenly gap-5 lg:mt-16 max-lg:mt-5 z-20",
        children: v.map((t, a) => e.jsxs("div", {
          className: "card__block lg:h-[255px] w-[255px] flex flex-col lg:items-center justify-center lg:gap-8 max-lg:gap-2 lg:p-5 lg:bg-[black]/[0.20] rounded-[20px] lg:backdrop-blur-[10px]",
          children: [
            e.jsx("h1", {
              className: "lg:text-[20px] max-lg:text-[14px] text-light-turquoise font-bold tracking-[0.8px] uppercase",
              children: t.title
            }),
            e.jsx("p", {
              className: "lg:text-[20px] max-lg:text-[14px] lg:text-center font-light lg:leading-[26px] tracking-[0.4px]",
              children: t.content
            })
          ]
        }, a))
      })
    ]
  });
  _ = () => {
    const t = p(), { register: a, handleSubmit: x, formState: { errors: r } } = m(), c = () => {
      t(g({
        modalType: d.Alert,
        isOpen: true
      })), t(u({
        severity: "success"
      }));
    }, n = (s) => {
      c(), console.log(s);
    }, i = (s) => console.log(s);
    return e.jsx("div", {
      className: "contacts_form lg:mt-36 max-lg:mt-16",
      children: e.jsxs("div", {
        className: "contacts_form__wrapper container mx-auto relative",
        children: [
          e.jsx("img", {
            className: "absolute max-lg:w-[132px] max-lg:h-[100px] lg:left-[20rem] lg:bottom-0 max-lg:top-[5rem] max-lg:left-[10rem] -rotate-[18.444deg] z-10",
            src: "./img/PagesImg/ContactsImg/signature.png",
            alt: "signature"
          }),
          e.jsxs("div", {
            className: "contacts_form__top flex max-lg:flex-col lg:justify-between lg:items-center lg:pt-8 relative z-20",
            children: [
              e.jsxs("div", {
                className: "contacts_form__title flex z-30 flex-col",
                children: [
                  e.jsx("h1", {
                    className: "title flex items-center lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-cormorant font-normal tracking-[2px] uppercase",
                    children: "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435"
                  }),
                  e.jsx("h1", {
                    className: "title flex items-center lg:justify-end lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-cormorant font-normal tracking-[2px] uppercase",
                    children: "\u043D\u0430\u043C"
                  })
                ]
              }),
              e.jsxs("div", {
                className: "max-w-[255px] flex flex-col lg:gap-14 max-lg:gap-5 max-lg:mt-[45px]",
                children: [
                  e.jsx("div", {
                    className: "line max-lg:w-[100px] border-t-[1px] border-light-turquoise"
                  }),
                  e.jsx("p", {
                    className: "text-[14px] font-normal tracking-[0.04px] uppercase",
                    children: "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441, \u0437\u0430\u043A\u0430\u0437, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0436\u0430\u043B\u043E\u0431\u0443 \u0447\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438, \u0438 \u043D\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442."
                  })
                ]
              })
            ]
          }),
          e.jsx("div", {
            className: "contacts__form flex justify-end mt-8",
            children: e.jsxs("form", {
              onSubmit: x(n, i),
              className: "w-[455px] flex flex-col gap-3 relative z-20",
              children: [
                e.jsx("input", {
                  className: "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
                  type: "text",
                  placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                  ...a("name", {
                    required: true
                  }),
                  "aria-invalid": !!r.name
                }),
                e.jsx("input", {
                  className: "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
                  type: "tel",
                  placeholder: "+7 (977) 777-77-77",
                  ...a("tel", {
                    required: true
                  }),
                  "aria-invalid": !!r.tel
                }),
                e.jsx("input", {
                  className: "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
                  type: "text",
                  placeholder: "\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                  ...a("comment", {
                    required: true
                  }),
                  "aria-invalid": !!r.comment
                }),
                e.jsx("button", {
                  className: "w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]",
                  children: "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
                }),
                e.jsxs("p", {
                  className: "max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed",
                  children: [
                    "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441",
                    e.jsx("span", {
                      className: "text-[#8B3131] underline ml-1",
                      children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    });
  };
  [y] = await Promise.all([
    ymaps3.import("@yandex/ymaps3-reactify"),
    ymaps3.ready
  ]);
  o = y.reactify.bindTo(h, f);
  ({ YMap: w, YMapDefaultSchemeLayer: k, YMapControls: A, YMapDefaultFeaturesLayer: F } = o.module(ymaps3));
  ({ YMapZoomControl: C } = o.module(await ymaps3.import("@yandex/ymaps3-controls@0.0.1")));
  ({ YMapDefaultMarker: D } = o.module(await ymaps3.import("@yandex/ymaps3-markers@0.0.1")));
  M = {
    center: [
      27.508175,
      53.925269
    ],
    zoom: 18
  };
  z = () => e.jsx("div", {
    className: "h-[500px] relative z-20",
    children: e.jsxs(w, {
      location: M,
      mode: "vector",
      children: [
        e.jsx(k, {}),
        e.jsx(F, {}),
        e.jsx(D, {
          coordinates: [
            27.508175,
            53.925269
          ]
        }),
        e.jsx(A, {
          position: "right",
          children: e.jsx(C, {})
        })
      ]
    })
  });
  P = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      path: "/"
    },
    {
      text: "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      path: "/contacts"
    }
  ];
  T = "flex items-center lg:ml-20 lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
  I = "contacts__title relative z-10 lg:mt-14 max-lg:mt-5";
  q = () => e.jsxs("div", {
    className: "contacts pt-[120px] max-lg:px-4 relative bg-[#040A0A] lg:pb-[200px] max-lg:pb-[150px]",
    children: [
      e.jsx(l, {
        className: "absolute lg:right-0 max-lg:left-[-10rem] top-0 w-[342px] h-[274px] rounded-[342px] bg-[#922D2D] lg:blur-[125px] max-lg:blur-[100px]"
      }),
      e.jsx("img", {
        className: "absolute right-0 top-0",
        src: "./img/PagesImg/ContactsImg/ContactsFlowerTop.png",
        loading: "lazy",
        alt: "flower"
      }),
      e.jsx(l, {
        className: "absolute lg:-left-36 max-lg:left-0 lg:top-0 max-lg:top-[40rem] lg:w-[465px] max-lg:w-[270px] lg:h-[220px] max-lg:h-[220px] -rotate-[71.859deg] rounded-[466px] bg-[#922D2D] lg:blur-[125px] max-lg:blur-[125px]"
      }),
      e.jsx("img", {
        className: "absolute left-0 max-lg:hidden",
        src: "./img/PagesImg/ContactsImg/ContactsFlowerMiddle.png",
        loading: "lazy",
        alt: "flower"
      }),
      e.jsxs("div", {
        className: "contacts__wrapper container mx-auto",
        children: [
          e.jsx(b, {
            items: P
          }),
          e.jsx(j, {
            title: "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
            titleClassName: T,
            wrapperClassName: I
          }),
          e.jsx(N, {}),
          e.jsx(_, {}),
          e.jsxs("div", {
            className: "contacts__yandex_map flex flex-col mt-24 gap-5",
            children: [
              e.jsx("h1", {
                className: "lg:text-[20px] max-lg:text-[14px] text-light-turquoise font-bold tracking-[0.8px] uppercase",
                children: "\u041C\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435"
              }),
              e.jsx(z, {})
            ]
          })
        ]
      }),
      e.jsx(l, {
        className: "absolute lg:left-0 max-lg:left-[-5rem] lg:-bottom-48 w-[205px] h-[437px] rounded-[437px] bg-[#922D2D] blur-[125px]"
      }),
      e.jsx(l, {
        className: "absolute right-0 -bottom-[20rem] w-[400px] h-[400px] bg-[#922D2D] blur-[125px] rounded-[100px] z-10 max-lg:hidden"
      })
    ]
  });
});
export {
  __tla,
  q as default
};
