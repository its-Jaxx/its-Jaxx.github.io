const font1 = new FontFace("Roboto", "url(../regular.otf)", {
  style: "normal",
  weight: "1000",
  stretch: "condensed",
});

document.fonts.add(font1);

font1.load();

document.fonts.ready.then(() => {

});
