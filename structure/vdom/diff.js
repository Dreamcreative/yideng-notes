var patchs = [];
var index = 0;
function isString(val) {
  return typeof val === "string";
}
function domDiff(oldDom, newDom) {
  walk(oldDom, newDom, index);
  return patchs;
}
function walk(oldDom, newDom, index) {
  let patch = [];
  if (!newDom) {
    patch.push({
      type: "REMOVE",
      index
    });
  } else if (isString(oldDom) && isString(newDom)) {
    if (oldDom !== newDom) {
      patch.push({
        type: "TEXT",
        newDom
      });
    }
  } else if (oldDom.type === newDom.type) {
    var attrs = diffAttr(oldDom.props, newDom.props);
    if (Object.keys(attrs).length) {
      patch.push({
        type: "ATTR",
        attrs
      });
    }
    diffChidren(oldDom.children, newDom.children);
  } else {
    patch.push({
      type: "REPLACE",
      newDom
    });
  }
  if (patch.length) {
    patchs[index] = patch;
  }
}
function diffAttr(oldProps, newProps) {
  var attr = {};
  for (let key in oldProps) {
    if (oldProps[key] !== newProps[key]) {
      attr[key] = newProps[key];
    }
  }
  for (let key in newProps) {
    if (!oldProps.hasOwnProperty(key)) {
      attr[key] = newProps[key];
    }
  }
  return attr;
}
function diffChidren(oldChildren, newChildren) {
  oldChildren.forEach((item, i) => {
    walk(item, newChildren[i], ++index);
  });
}
