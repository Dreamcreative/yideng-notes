var vdom1 = createElement("ul", { class: "list" }, [
  createElement("li", {}, ["1"]),
  createElement("li", {}, ["2"]),
  createElement("li", {}, ["3"])
]);
var vdom2 = createElement("ul", { class: "new-list" }, [
  createElement("li", {id:'id'}, ["a"]),
  createElement("li", {}, ["b"]),
  createElement("li", {}, ["c"])
]);
var result = domDiff(vdom1, vdom2);
console.log(result)
