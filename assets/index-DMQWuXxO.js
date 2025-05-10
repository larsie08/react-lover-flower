import { j as e, A as p, w as d, F as m, M as u, G as h, R as f, I as g, D as o, P as j, __tla as __tla_0 } from "./index-BRYhcpXE.js";
let P;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let b, v, _, y, N, l, w, k, F, A, C, D, B, M, I;
  b = () => e.jsxs("svg", {
    className: "absolute right-0 -bottom-48",
    xmlns: "http://www.w3.org/2000/svg",
    width: "489",
    height: "693",
    viewBox: "0 0 489 693",
    fill: "none",
    children: [
      e.jsx("g", {
        filter: "url(#filter0_f_1_1055)",
        children: e.jsx("path", {
          d: "M562.127 491.246C523.706 550.8 435.621 690.35 353.262 637.217C270.903 584.083 225.458 358.388 263.879 298.833C302.301 239.279 400.212 234.073 482.571 287.206C564.93 340.339 600.549 431.691 562.127 491.246Z",
          fill: "#922D2D"
        })
      }),
      e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "filter0_f_1_1055",
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
              result: "effect1_foregroundBlur_1_1055"
            })
          ]
        })
      })
    ]
  });
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
  _ = () => e.jsxs("div", {
    className: "card_blocks relative",
    children: [
      e.jsx("div", {
        className: "absolute right-[15rem] bottom-0 w-[1006px] h-[124px] -rotate-[165.265deg] rounded-[1007px] bg-[#922D2D] blur-[125px]"
      }),
      e.jsx("div", {
        className: "card_blocks__wrapper relative flex justify-evenly gap-5 mt-16 z-20",
        children: v.map((t, a) => e.jsxs("div", {
          className: "card__block h-[255px] w-[255px] flex flex-col items-center justify-center gap-8 p-5 bg-[black]/[0.20] rounded-[20px] backdrop-blur-[10px]",
          children: [
            e.jsx("h1", {
              className: "text-[20px] text-light-turquoise font-bold tracking-[0.8px] uppercase",
              children: t.title
            }),
            e.jsx("p", {
              className: "text-[20px] text-center font-light leading-[26px] tracking-[0.4px]",
              children: t.content
            })
          ]
        }, a))
      })
    ]
  });
  y = () => {
    const t = p(), { register: a, handleSubmit: n, formState: { errors: s } } = d(), c = () => {
      t(m({
        modalType: u.Alert,
        isOpen: true
      })), t(h({
        severity: "success"
      }));
    }, i = (r) => {
      c(), console.log(r);
    }, x = (r) => console.log(r);
    return e.jsx("div", {
      className: "contacts_form mt-36",
      children: e.jsxs("div", {
        className: "contacts_form__wrapper container mx-auto",
        children: [
          e.jsxs("div", {
            className: "contacts_form__top flex justify-between items-center pt-8",
            children: [
              e.jsxs("div", {
                className: "contacts_form__title flex z-30 flex-col",
                children: [
                  e.jsx("h1", {
                    className: "title flex items-center h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase",
                    children: "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435"
                  }),
                  e.jsx("h1", {
                    className: "title flex items-center justify-end h-[100px] text-[100px] font-cormorant font-normal tracking-[2px] uppercase",
                    children: "\u043D\u0430\u043C"
                  })
                ]
              }),
              e.jsxs("div", {
                className: "max-w-[255px] flex flex-col gap-14",
                children: [
                  e.jsx("div", {
                    className: "line border-t-[1px] border-light-turquoise"
                  }),
                  e.jsx("p", {
                    children: "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441, \u0437\u0430\u043A\u0430\u0437, \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0436\u0430\u043B\u043E\u0431\u0443 \u0447\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438, \u0438 \u043D\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442."
                  })
                ]
              })
            ]
          }),
          e.jsxs("div", {
            className: "contacts__form relative flex justify-end mt-8",
            children: [
              e.jsx("img", {
                className: "absolute left-[30rem] -rotate-[18.444deg]",
                src: "./img/PagesImg/ContactsImg/signature.png",
                alt: "signature"
              }),
              e.jsxs("form", {
                onSubmit: n(i, x),
                className: "w-[455px] flex flex-col gap-3",
                children: [
                  e.jsx("input", {
                    className: "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
                    type: "text",
                    placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                    ...a("name", {
                      required: true
                    }),
                    "aria-invalid": !!s.name
                  }),
                  e.jsx("input", {
                    className: "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
                    type: "tel",
                    placeholder: "+7 (977) 777-77-77",
                    ...a("tel", {
                      required: true
                    }),
                    "aria-invalid": !!s.tel
                  }),
                  e.jsx("input", {
                    className: "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]",
                    type: "text",
                    placeholder: "\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                    ...a("comment", {
                      required: true
                    }),
                    "aria-invalid": !!s.comment
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
            ]
          })
        ]
      })
    });
  };
  [N] = await Promise.all([
    ymaps3.import("@yandex/ymaps3-reactify"),
    ymaps3.ready
  ]);
  l = N.reactify.bindTo(f, g);
  ({ YMap: w, YMapDefaultSchemeLayer: k, YMapControls: F, YMapDefaultFeaturesLayer: A } = l.module(ymaps3));
  ({ YMapZoomControl: C } = l.module(await ymaps3.import("@yandex/ymaps3-controls@0.0.1")));
  ({ YMapDefaultMarker: D } = l.module(await ymaps3.import("@yandex/ymaps3-markers@0.0.1")));
  B = {
    center: [
      27.508175,
      53.925269
    ],
    zoom: 18
  };
  M = () => e.jsx("div", {
    className: "h-[500px]",
    children: e.jsxs(w, {
      location: B,
      mode: "vector",
      children: [
        e.jsx(k, {}),
        e.jsx(A, {}),
        e.jsx(D, {
          coordinates: [
            27.508175,
            53.925269
          ]
        }),
        e.jsx(F, {
          position: "right",
          children: e.jsx(C, {})
        })
      ]
    })
  });
  I = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      path: "/"
    },
    {
      text: "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
      path: "/contacts"
    }
  ];
  P = () => e.jsxs("div", {
    className: "contacts pt-[120px] relative bg-[#040A0A] h-[2300px]",
    children: [
      e.jsx(o, {
        className: "absolute right-0 top-0 w-[342px] h-[274px] rounded-[342px] bg-[#922D2D] blur-[125px]"
      }),
      e.jsx("img", {
        className: "absolute right-0 top-0",
        src: "./img/PagesImg/ContactsImg/ContactsFlowerTop.png",
        alt: "flower"
      }),
      e.jsx(o, {
        className: "absolute -left-36 top-0 w-[465px] h-[220px] -rotate-[71.859deg] rounded-[466px] bg-[#922D2D] blur-[125px]"
      }),
      e.jsx("img", {
        className: "absolute left-0",
        src: "./img/PagesImg/ContactsImg/ContactsFlowerMiddle.png",
        alt: "flower"
      }),
      e.jsxs("div", {
        className: "contacts__wrapper container mx-auto",
        children: [
          e.jsx(j, {
            items: I
          }),
          e.jsx("div", {
            className: "contacts__title relative z-10 mt-14",
            children: e.jsx("h1", {
              className: "flex items-center ml-20 h-[100px] text-[100px] font-normal font-cormorant tracking-[2px] uppercase",
              children: "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
            })
          }),
          e.jsx(_, {}),
          e.jsx(y, {}),
          e.jsxs("div", {
            className: "contacts__yandex_map flex flex-col mt-24 gap-5",
            children: [
              e.jsx("h1", {
                className: "text-[20px] text-light-turquoise font-bold tracking-[0.8px] uppercase",
                children: "\u041C\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435"
              }),
              e.jsx(M, {})
            ]
          })
        ]
      }),
      e.jsx(o, {
        className: "absolute left-0 -bottom-48 w-[205px] h-[437px] rounded-[437px] bg-[#922D2D] blur-[125px]"
      }),
      e.jsx(b, {})
    ]
  });
});
export {
  __tla,
  P as default
};
