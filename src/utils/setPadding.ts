export const setPadding = (isOpenCart: boolean) => {
  const body = document.body;
  const header = document.getElementById("header");

  if (isOpenCart) {
    body.style.paddingRight =
      window.innerWidth - document.body.offsetWidth + "px";
    if (header)
      header.style.paddingRight =
        window.innerWidth - document.body.offsetWidth + "px";

    body.style.overflow = "hidden";
  } else {
    body.style.paddingRight = "0px";
    if (header) header.style.paddingRight = "0px";

    body.style.overflow = "visible";
  }
};
