import { ref as p, defineComponent as M, watch as W, onBeforeUnmount as me, toRefs as Q, computed as ke, provide as U, inject as K, onMounted as Fe, onUnmounted as Pe } from "vue";
const ge = Symbol(), _e = Symbol(), we = Symbol();
function Ae(t) {
  const e = p([]), n = (r, s) => s ? Array.prototype.indexOf.call(r, s) : -1, i = (r) => {
    var l, c;
    const s = (c = (l = r[0].originRef) == null ? void 0 : l.parentNode) == null ? void 0 : c.children;
    s && s.length && r.sort((d, h) => n(s, d.originRef) - n(s, h.originRef));
  };
  return {
    items: e,
    updateItem: (r) => {
      const s = e.value.findIndex(({ key: l }) => r.key === l);
      s > -1 ? e.value.splice(s, 1, r) : (e.value.push(r), i(e.value));
    },
    removeItem: (r) => {
      const s = e.value.filter((c) => c.key !== r), l = s.length - 1;
      e.value = s, t.value = Math.max(Math.min(t.value, l), 0);
    }
  };
}
function Le(t, e, n) {
  const i = p(!1);
  return {
    visible: i,
    handleHide: () => {
      i.value = !1, n();
    },
    handleShow: (r) => {
      const s = t.value.findIndex((l) => l.key === r);
      s > -1 && (e.value = s, i.value = !0, n());
    }
  };
}
function Ne(t) {
  const e = p(0);
  return {
    index: e,
    updateIndex: (i) => {
      e.value = i, t();
    }
  };
}
const Be = M({});
function S(t, e, n, i, o, a, r, s) {
  var l = typeof t == "function" ? t.options : t;
  return e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), {
    exports: t,
    options: l
  };
}
var Ee = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("div", { staticClass: "PhotoView__Spinner" }, [n("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "36", height: "36", fill: "white" } }, [n("path", { attrs: { opacity: ".25", d: "M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4" } }), n("path", { attrs: { d: "M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" } })])]);
}, Ve = [], ze = /* @__PURE__ */ S(
  Be,
  Ee,
  Ve
);
const je = ze.exports;
function Xe(t, e, n) {
  let { innerWidth: i, innerHeight: o } = window;
  n % 180 !== 0 && ([i, o] = [o, i]);
  let r, s;
  const l = i / t, c = o / e;
  return t < i && e < o ? (r = t, s = e) : l < c ? (r = i, s = i * (e / t)) : (r = o * (t / e), s = o), {
    width: r,
    height: s
  };
}
function De(t) {
  const e = p(0), n = p(0), i = p(0), o = p(0), a = p(!1);
  function r(l, c, d) {
    const h = Xe(l, c, d);
    i.value = h.width, o.value = h.height;
  }
  const s = (l) => {
    a.value = !1;
    const c = new Image();
    c.onload = () => {
      e.value = c.naturalWidth, n.value = c.naturalHeight, r(e.value, n.value, 0), a.value = !0;
    }, c.src = l;
  };
  return s(t.value), W(t, () => {
    s(t.value);
  }), {
    width: i,
    height: o,
    loaded: a,
    naturalWidth: e,
    naturalHeight: n,
    setSuitableImageSize: r
  };
}
function Y(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ye = typeof global == "object" && global && global.Object === Object && global, He = typeof self == "object" && self && self.Object === Object && self, be = Ye || He || Function("return this")(), G = function() {
  return be.Date.now();
}, We = /\s/;
function qe(t) {
  for (var e = t.length; e-- && We.test(t.charAt(e)); )
    ;
  return e;
}
var Ue = /^\s+/;
function Ke(t) {
  return t && t.slice(0, qe(t) + 1).replace(Ue, "");
}
var V = be.Symbol, ye = Object.prototype, Ge = ye.hasOwnProperty, Ze = ye.toString, z = V ? V.toStringTag : void 0;
function Je(t) {
  var e = Ge.call(t, z), n = t[z];
  try {
    t[z] = void 0;
    var i = !0;
  } catch {
  }
  var o = Ze.call(t);
  return i && (e ? t[z] = n : delete t[z]), o;
}
var Qe = Object.prototype, et = Qe.toString;
function tt(t) {
  return et.call(t);
}
var nt = "[object Null]", it = "[object Undefined]", re = V ? V.toStringTag : void 0;
function ot(t) {
  return t == null ? t === void 0 ? it : nt : re && re in Object(t) ? Je(t) : tt(t);
}
function st(t) {
  return t != null && typeof t == "object";
}
var rt = "[object Symbol]";
function xe(t) {
  return typeof t == "symbol" || st(t) && ot(t) == rt;
}
var ae = NaN, at = /^[-+]0x[0-9a-f]+$/i, lt = /^0b[01]+$/i, ct = /^0o[0-7]+$/i, dt = parseInt;
function le(t) {
  if (typeof t == "number")
    return t;
  if (xe(t))
    return ae;
  if (Y(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Y(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ke(t);
  var n = lt.test(t);
  return n || ct.test(t) ? dt(t.slice(2), n ? 2 : 8) : at.test(t) ? ae : +t;
}
var ht = "Expected a function", ut = Math.max, ft = Math.min;
function Me(t, e, n) {
  var i, o, a, r, s, l, c = 0, d = !1, h = !1, v = !0;
  if (typeof t != "function")
    throw new TypeError(ht);
  e = le(e) || 0, Y(n) && (d = !!n.leading, h = "maxWait" in n, a = h ? ut(le(n.maxWait) || 0, e) : a, v = "trailing" in n ? !!n.trailing : v);
  function y(m) {
    var _ = i, b = o;
    return i = o = void 0, c = m, r = t.apply(b, _), r;
  }
  function $(m) {
    return c = m, s = setTimeout(T, e), d ? y(m) : r;
  }
  function C(m) {
    var _ = m - l, b = m - c, R = e - _;
    return h ? ft(R, a - b) : R;
  }
  function g(m) {
    var _ = m - l, b = m - c;
    return l === void 0 || _ >= e || _ < 0 || h && b >= a;
  }
  function T() {
    var m = G();
    if (g(m))
      return F(m);
    s = setTimeout(T, C(m));
  }
  function F(m) {
    return s = void 0, v && i ? y(m) : (i = o = void 0, r);
  }
  function A() {
    s !== void 0 && clearTimeout(s), c = 0, i = l = o = s = void 0;
  }
  function L() {
    return s === void 0 ? r : F(G());
  }
  function I() {
    var m = G(), _ = g(m);
    if (i = arguments, o = this, l = m, _) {
      if (s === void 0)
        return $(l);
      if (h)
        return clearTimeout(s), s = setTimeout(T, e), y(l);
    }
    return s === void 0 && (s = setTimeout(T, e)), r;
  }
  return I.cancel = A, I.flush = L, I;
}
var vt = "Expected a function";
function ee(t, e, n) {
  var i = !0, o = !0;
  if (typeof t != "function")
    throw new TypeError(vt);
  return Y(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Me(t, e, {
    leading: i,
    maxWait: e,
    trailing: o
  });
}
function pt(t, e, n, i) {
  const o = ee(() => {
    i(t.value, e.value, n.value);
  }, 8);
  window.addEventListener("resize", o), me(() => {
    window.removeEventListener("resize", o);
  });
}
var P = /* @__PURE__ */ ((t) => (t[t.None = 0] = "None", t[t.In = 1] = "In", t[t.Out = 2] = "Out", t))(P || {}), w = /* @__PURE__ */ ((t) => (t[t.Normal = 0] = "Normal", t[t.X = 1] = "X", t[t.Y = 2] = "Y", t[t.Scale = 3] = "Scale", t))(w || {}), k = /* @__PURE__ */ ((t) => (t[t.Left = 0] = "Left", t[t.Right = 1] = "Right", t[t.Top = 2] = "Top", t[t.Bottom = 3] = "Bottom", t))(k || {});
function mt(t) {
  if (t) {
    const { innerWidth: e, innerHeight: n } = window, i = t.left + t.width / 2 - e / 2, o = t.top + t.height / 2 - n / 2;
    return `${i}px ${o}px`;
  }
  return null;
}
const N = typeof document < "u" && "ontouchstart" in document.documentElement, gt = 20, ce = 10, D = 40, de = 6;
function _t(t, e) {
  let n = 0;
  const i = Me((...o) => {
    n = 0, t(...o);
  }, 300);
  return function(...a) {
    n += 1, i(...a), n >= 2 && (i.cancel(), n = 0, e(...a));
  };
}
function he({
  x: t,
  y: e,
  clientX: n,
  clientY: i,
  fromScale: o,
  toScale: a
}) {
  const { innerWidth: r, innerHeight: s } = window, l = r / 2 + t, c = s / 2 + e, d = a / o, h = -(n - l) * (d - 1), v = -(i - c) * (d - 1);
  return {
    x: h + t,
    y: v + e,
    scale: a
  };
}
function Se({
  width: t,
  height: e,
  scale: n,
  rotate: i
}) {
  i % 180 !== 0 && ([t, e] = [e, t]);
  const { innerWidth: a, innerHeight: r } = window, s = t * n, l = e * n;
  let c, d, h, v;
  return s > a ? (c = (s - a) / 2, d = -(s - a) / 2) : (c = 0, d = 0), l > r ? (h = (l - r) / 2, v = -(l - r) / 2) : (h = 0, v = 0), {
    edgeLeft: c,
    edgeRight: d,
    edgeTop: h,
    edgeBottom: v
  };
}
function wt({
  width: t,
  height: e,
  scale: n,
  rotate: i,
  x: o,
  y: a
}) {
  const r = Se({ width: t, height: e, scale: n, rotate: i }), s = [];
  return o === r.edgeLeft && s.push(k.Left), o === r.edgeRight && s.push(k.Right), a === r.edgeTop && s.push(k.Top), a === r.edgeBottom && s.push(k.Bottom), s;
}
function bt({
  width: t,
  height: e,
  scale: n,
  rotate: i,
  x: o,
  y: a
}) {
  const { edgeLeft: r, edgeRight: s, edgeTop: l, edgeBottom: c } = Se({ width: t, height: e, scale: n, rotate: i });
  return o > r && (o = r), o < s && (o = s), a > l && (a = l), a < c && (a = c), { x: o, y: a, scale: n };
}
function ue(t) {
  const { clientX: e, clientY: n } = t.touches[0];
  if (t.touches.length >= 2) {
    const { clientX: i, clientY: o } = t.touches[1];
    return {
      clientX: (e + i) / 2,
      clientY: (n + o) / 2,
      touchLength: Math.sqrt(Math.pow(i - e, 2) + Math.pow(o - n, 2))
    };
  }
  return { clientX: e, clientY: n, touchLength: 0 };
}
function yt(t, e, n, i, o, a, r, s, l) {
  const c = p(0), d = p(0), h = p(1), v = p(0), y = p(!1), $ = p(0), C = p(0), g = p(w.Normal), T = p(0), F = p(0), A = p(0), L = p(1);
  let I = [];
  const m = (u) => {
    N || (b(u.clientX, u.clientY, 0), window.addEventListener("mousemove", R), window.addEventListener("mouseup", te));
  }, _ = (u) => {
    if (!N) return;
    const f = ue(u);
    b(f.clientX, f.clientY, f.touchLength), window.addEventListener("touchmove", B), window.addEventListener("touchend", ne);
  }, b = (u, f, x) => {
    y.value = !0, $.value = u, C.value = f, A.value = x, L.value = h.value, I = wt({
      width: t.value,
      height: e.value,
      scale: h.value,
      rotate: v.value,
      x: T.value,
      y: F.value
    }), a(u, f);
  }, R = (u) => {
    N || !y.value || E(u.clientX, u.clientY, 0);
  }, B = (u) => {
    if (!N || !y.value) return;
    const f = ue(u);
    E(f.clientX, f.clientY, f.touchLength);
  }, E = ee((u, f, x) => {
    if (g.value === w.Normal)
      if (h.value !== 1 || x)
        g.value = w.Scale;
      else {
        const X = Math.abs(u - $.value) > ce, q = Math.abs(f - C.value) > ce;
        if (!X && !q) return;
        g.value = X ? w.X : w.Y;
      }
    r(g.value, u, f, L.value, I);
    const O = u - $.value, se = f - C.value;
    if (g.value === w.Y && (c.value = O + T.value, d.value = se + F.value), g.value === w.Scale)
      if (x) {
        const X = h.value + (x - A.value) / 100 / 2 * h.value, q = Math.max(Math.min(X, Math.max(de, n.value / t.value)), 1);
        oe(q, u, f), A.value = x;
      } else
        !(O > 0 && I.includes(k.Left)) && !(O < 0 && I.includes(k.Right)) && (c.value = O + T.value), d.value = se + F.value;
  }, 8, { trailing: !1 }), te = (u) => {
    N || (ie(u.clientX, u.clientY, u), window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", te));
  }, ne = (u) => {
    if (!N) return;
    const f = u.changedTouches[0];
    ie(f.clientX, f.clientY, u), window.removeEventListener("touchmove", B), window.removeEventListener("touchend", ne);
  }, Ie = _t(l, (u, f) => {
    if (g.value === w.Normal)
      if (h.value === 1) {
        const x = Math.max(2, n.value / t.value), O = he({
          x: c.value,
          y: d.value,
          clientX: u,
          clientY: f,
          fromScale: h.value,
          toScale: x
        });
        c.value = O.x, d.value = O.y, h.value = O.scale;
      } else
        c.value = 0, d.value = 0, h.value = 1;
  }), ie = (u, f, x) => {
    $.value === u && C.value === f && Ie(u, f, x), s(g.value, u, f, L.value, I), g.value === w.Y && (c.value = 0, d.value = 0), g.value === w.Scale && j({
      width: t.value,
      height: e.value,
      scale: h.value,
      rotate: v.value,
      x: c.value,
      y: d.value
    }), y.value = !1, g.value = w.Normal, $.value = 0, C.value = 0, T.value = c.value, F.value = d.value;
  }, Re = (u) => {
    const f = h.value - u.deltaY / 100 / 2, x = Math.max(Math.min(f, Math.max(de, n.value / t.value)), 1);
    oe(x, u.clientX, u.clientY);
  }, oe = (u, f, x) => {
    const O = he({
      x: c.value,
      y: d.value,
      clientX: f,
      clientY: x,
      fromScale: h.value,
      toScale: u
    });
    j({
      width: t.value,
      height: e.value,
      scale: O.scale,
      rotate: v.value,
      x: O.x,
      y: O.y
    });
  }, j = (u) => {
    const f = bt(u);
    c.value = f.x, d.value = f.y, T.value = f.x, F.value = f.y, h.value = f.scale;
  };
  return {
    x: c,
    y: d,
    scale: h,
    touched: y,
    handleMouseDown: m,
    handleTouchStart: _,
    handleWheel: Re,
    rotate: v,
    handleRotateLeft: () => {
      v.value = v.value - 90, o(n.value, i.value, v.value), j({
        width: t.value,
        height: e.value,
        scale: h.value,
        rotate: v.value,
        x: c.value,
        y: d.value
      });
    },
    handleRotateRight: () => {
      v.value = v.value + 90, o(n.value, i.value, v.value), j({
        width: t.value,
        height: e.value,
        scale: h.value,
        rotate: v.value,
        x: c.value,
        y: d.value
      });
    }
  };
}
const xt = M({
  name: "PhotoView",
  components: {
    Spinner: je
  },
  props: {
    /**
     * 图片地址
     */
    src: {
      type: String,
      required: !0
    },
    /**
     * 触发打开模态框的位置信息
     */
    originRect: {
      type: Object,
      default: null
    },
    /**
     * 动画类型
     */
    showAnimateType: {
      type: Number,
      default: null
    }
  },
  emits: ["touchStart", "touchMove", "touchEnd", "singleTap"],
  setup(t, { emit: e }) {
    const { src: n } = Q(t), { width: i, height: o, loaded: a, naturalWidth: r, naturalHeight: s, setSuitableImageSize: l } = De(n), c = (_, b) => {
      e("touchStart", _, b);
    }, d = (_, b, R, B, E) => {
      e("touchMove", _, b, R, B, E);
    }, h = (_, b, R, B, E) => {
      e("touchEnd", _, b, R, B, E);
    }, v = (_, b, R) => {
      e("singleTap", _, b, R);
    }, {
      x: y,
      y: $,
      scale: C,
      rotate: g,
      touched: T,
      handleMouseDown: F,
      handleTouchStart: A,
      handleWheel: L,
      handleRotateLeft: I,
      handleRotateRight: m
    } = yt(
      i,
      o,
      r,
      s,
      l,
      c,
      d,
      h,
      v
    );
    return pt(r, s, g, l), {
      width: i,
      height: o,
      loaded: a,
      x: y,
      y: $,
      scale: C,
      touched: T,
      handleMouseDown: F,
      handleTouchStart: A,
      handleWheel: L,
      rotate: g,
      handleRotateLeft: I,
      handleRotateRight: m
    };
  },
  data() {
    return {
      ShowAnimateEnum: P,
      // 翻转
      isFlipHorizontal: !1,
      isFlipVertical: !1
    };
  },
  methods: {
    getAnimateOrigin: mt,
    toggleFlipHorizontal() {
      this.isFlipHorizontal = !this.isFlipHorizontal;
    },
    toggleFlipVertical() {
      this.isFlipVertical = !this.isFlipVertical;
    },
    getTransform() {
      const t = `${this.isFlipHorizontal ? "-" : ""}${this.scale}`, e = `${this.isFlipVertical ? "-" : ""}${this.scale}`, n = {
        matrix: `${t}, 0, 0, ${e}, ${this.x}, ${this.y}`
      };
      this.rotate && (n.rotate = `${this.rotate}deg`);
      let i = "";
      return Object.keys(n).forEach((o) => {
        i += `${o}(${n[o]})`;
      }), i;
    }
  }
});
var Mt = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, e.loaded ? n("div", { staticClass: "PhotoView__PhotoWrap", style: {
    width: `${e.width}px`,
    height: `${e.height}px`
  } }, [n("div", { staticClass: "PhotoView__PhotoBox", class: {
    PhotoView__animateIn: e.showAnimateType === e.ShowAnimateEnum.In,
    PhotoView__animateOut: e.showAnimateType === e.ShowAnimateEnum.Out
  }, style: {
    transformOrigin: e.getAnimateOrigin(e.originRect) || "center",
    width: e.showAnimateType === e.ShowAnimateEnum.In || e.showAnimateType === e.ShowAnimateEnum.Out ? "0" : "100%"
  } }, [n("img", { staticClass: "PhotoView__Photo", style: {
    width: `${e.width}px`,
    height: `${e.height}px`,
    transform: e.getTransform(),
    transition: e.touched ? void 0 : "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)"
  }, attrs: { src: e.src }, on: { mousedown: function(i) {
    return i.preventDefault(), e.handleMouseDown.apply(null, arguments);
  }, touchstart: function(i) {
    return i.preventDefault(), e.handleTouchStart.apply(null, arguments);
  }, wheel: e.handleWheel } })])]) : n("spinner");
}, St = [], $t = /* @__PURE__ */ S(
  xt,
  Mt,
  St
);
const Tt = $t.exports;
function Ot(t) {
  const { style: e } = document.body, n = e.overflow;
  W(t, () => {
    t.value ? e.overflow = "hidden" : e.overflow = n;
  });
}
function Ct() {
  const t = p(window.innerWidth), e = ee(() => {
    t.value = window.innerWidth;
  }, 8);
  return window.addEventListener("resize", e), me(() => {
    window.removeEventListener("resize", e);
  }), {
    innerWidth: t
  };
}
const It = M({});
var Rt = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44", viewBox: "0 0 768 768" } }, [n("path", { attrs: { fill: "#FFF", d: "M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z" } })]);
}, kt = [], Ft = /* @__PURE__ */ S(
  It,
  Rt,
  kt
);
const Pt = Ft.exports, At = M({});
var Lt = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44", viewBox: "0 0 768 768" } }, [n("path", { attrs: { d: "M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z" } })]);
}, Nt = [], Bt = /* @__PURE__ */ S(
  At,
  Lt,
  Nt
);
const Et = Bt.exports, Vt = M({});
var zt = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44", viewBox: "0 0 768 768" } }, [n("path", { attrs: { d: "M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z" } })]);
}, jt = [], Xt = /* @__PURE__ */ S(
  Vt,
  zt,
  jt
);
const Dt = Xt.exports, Yt = M({});
var Ht = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44" } }, [n("path", { attrs: { fill: "#FFF", d: "M744.81 959.5c99.37-180.1 116.14-454.76-274.34-445.6v221.85L134.82 400.12 470.46 64.5v217.1c467.59-12.2 519.68 412.74 274.35 677.9z" } })]);
}, Wt = [], qt = /* @__PURE__ */ S(
  Yt,
  Ht,
  Wt
);
const Ut = qt.exports, Kt = M({});
var Gt = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { viewBox: "0 0 1000 1000", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44" } }, [n("path", { attrs: { fill: "#FFF", d: "M555.668 258.9754V47.24496791175579l327.3385 327.3241L555.668 701.8941V485.52881146582615c-380.8294-8.9369-364.4728 258.9334-267.5596 434.5814C48.8389 661.5105 99.6385 247.0815 555.668 258.9754z" } })]);
}, Zt = [], Jt = /* @__PURE__ */ S(
  Kt,
  Gt,
  Zt
);
const Qt = Jt.exports, en = M({});
var tn = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44" } }, [n("path", { attrs: { fill: "#FFF", d: "M978.432 492.832l-153.696-116.896c-17.504-13.312-31.968-6.208-32.096 15.776L792.032 480H231.968l-0.608-88.288c-0.16-22.016-14.592-29.088-32.096-15.776l-153.696 116.896c-17.504 13.312-17.12 34.592 0.864 47.264l154.144 108.608c17.984 12.672 32.576 5.056 32.416-16.96L232.384 544h559.2l-0.576 87.712c-0.16 22.016 14.432 29.632 32.416 16.96l154.144-108.608c17.984-12.672 18.4-33.92 0.864-47.232z" } })]);
}, nn = [], on = /* @__PURE__ */ S(
  en,
  tn,
  nn
);
const sn = on.exports, rn = M({});
var an = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "44", height: "44" } }, [n("path", { attrs: { fill: "#FFF", d: "M494.03 74.72l-109.59 144.09c-12.48 16.41-5.82 29.97 14.79000001 30.09L482 249.47 482 774.53l-82.77 0.54c-20.64 0.15-27.27 13.68-14.79 30.09l109.59 144.09c12.48 16.41 32.43 16.05 44.31000001-0.81l101.81999999-144.51c11.88-16.86 4.74-30.54-15.9-30.39L542.00000001 774.14l-1e-8-524.25 82.23 0.54c20.64 0.15 27.78-13.53 15.9-30.39l-101.82-144.51c-11.88-16.86-31.8-17.25-44.28-0.81z" } })]);
}, ln = [], cn = /* @__PURE__ */ S(
  rn,
  an,
  ln
);
const dn = cn.exports, hn = M({});
var un = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("svg", { attrs: { viewBox: "0 0 1068 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "2740", width: "44", height: "44" } }, [n("path", { attrs: { d: "M252.622237 809.004596a252.614304 252.614304 0 0 1-31.486765-503.2587v-4.352863a301.406611 301.406611 0 0 1 594.880633-68.660847 288.877568 288.877568 0 0 1-36.146765 575.488683 31.529129 31.529129 0 0 1 0-63.047667 225.819311 225.819311 0 0 0 8.472726-451.479758l-26.244267-0.974363-3.812726-25.990085a238.358944 238.358944 0 0 0-474.176071 34.664037 243.040125 243.040125 0 0 0 1.874591 30.035812l4.501135 35.786673-37.163491-0.3495h-0.730773c-104.521657 0-189.577228 85.034389-189.577228 189.577228s85.034389 189.577228 189.577228 189.577228a31.529129 31.529129 0 0 1 0 63.047667z", fill: "#FFF" } }), n("path", { attrs: { d: "M500.417679 442.421546m10.590906 0l46.599989 0q10.590907 0 10.590907 10.590906l0 528.878103q0 10.590907-10.590907 10.590907l-46.599989 0q-10.590907 0-10.590906-10.590907l0-528.878103q0-10.590907 10.590906-10.590906Z", fill: "#FFF" } }), n("path", { attrs: { d: "M487.406543 980.472843m7.488902-7.488902l171.982631-171.982631q7.488902-7.488902 14.977804 0l32.951168 32.951168q7.488902 7.488902 0 14.977804l-171.982631 171.982631q-7.488902 7.488902-14.977804 0l-32.951168-32.951168q-7.488902-7.488902 0-14.977804Z", fill: "#FFF" } }), n("path", { attrs: { d: "M344.966294 837.223674m7.488902-7.488902l32.951168-32.951168q7.488902-7.488902 14.977804 0l176.198883 176.198883q7.488902 7.488902 0 14.977804l-32.951168 32.951168q-7.488902 7.488902-14.977804 0l-176.198883-176.198883q-7.488902-7.488902 0-14.977804Z", fill: "#FFF" } })]);
}, fn = [], vn = /* @__PURE__ */ S(
  hn,
  un,
  fn
);
const pn = vn.exports;
function mn(t, e) {
  const n = p(t.value), i = p(P.None), o = p(null);
  return W(t, () => {
    const r = e.value.originRef;
    if (r && r.nodeType === 1 && r.children.length > 0) {
      const { top: s, left: l, width: c, height: d } = r.getBoundingClientRect();
      o.value = {
        left: l,
        top: s,
        width: c,
        height: d
      };
    } else
      o.value = null;
    t.value ? (i.value = P.In, n.value = !0) : i.value = P.Out;
  }), {
    photoVisible: n,
    showAnimateType: i,
    originRect: o,
    onShowAnimateEnd: () => {
      i.value === P.Out && (n.value = !1), i.value = P.None;
    }
  };
}
var gn = {
  name: "teleport",
  props: {
    to: {
      type: String,
      required: !0
    },
    where: {
      type: String,
      default: "after"
    },
    disabled: Boolean
  },
  data: function() {
    return {
      nodes: [],
      waiting: !1,
      observer: null,
      parent: null
    };
  },
  watch: {
    to: "maybeMove",
    where: "maybeMove",
    disabled: function(e) {
      var n = this;
      e ? (this.disable(), this.$nextTick(function() {
        n.teardownObserver();
      })) : (this.bootObserver(), this.move());
    }
  },
  mounted: function() {
    this.nodes = Array.from(this.$el.childNodes), this.disabled || this.bootObserver(), this.maybeMove();
  },
  beforeDestroy: function() {
    this.nodes = this.getComponentChildrenNode(), this.disable(), this.teardownObserver();
  },
  computed: {
    classes: function() {
      return this.disabled ? ["teleporter"] : ["teleporter", "hidden"];
    }
  },
  methods: {
    maybeMove: function() {
      this.disabled || this.move();
    },
    move: function() {
      if (this.waiting = !1, this.parent = document.querySelector(this.to), !this.parent) {
        this.disable(), this.waiting = !0;
        return;
      }
      this.where === "before" ? this.parent.prepend(this.getFragment()) : this.parent.appendChild(this.getFragment());
    },
    disable: function() {
      this.$el.appendChild(this.getFragment()), this.parent = null;
    },
    // Using a fragment is faster because it'll trigger only a single reflow
    // See https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    getFragment: function() {
      var e = document.createDocumentFragment();
      return this.nodes.forEach(function(n) {
        return e.appendChild(n);
      }), e;
    },
    onMutations: function(e) {
      for (var n = this, i = !1, o = 0; o < e.length; o++) {
        var a = e[o], r = Array.from(a.addedNodes).filter(function(s) {
          return !n.nodes.includes(s);
        });
        Array.from(a.removedNodes).includes(this.parent) ? (this.disable(), this.waiting = !this.disabled) : this.waiting && r.length > 0 && (i = !0);
      }
      i && this.move();
    },
    bootObserver: function() {
      var e = this;
      this.observer || (this.observer = new MutationObserver(function(n) {
        return e.onMutations(n);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !1,
        characterData: !1
      }), !this.childObserver && (this.childObserver = new MutationObserver(function(n) {
        var i = n.find(function(o) {
          return o.target === e.$el;
        });
        i && (e.nodes.forEach(function(o) {
          return o.parentNode && o.parentNode.removeChild(o);
        }), e.nodes = e.getComponentChildrenNode(), e.maybeMove());
      }), this.childObserver.observe(this.$el, {
        childList: !0,
        subtree: !1,
        attributes: !1,
        characterData: !1
      })));
    },
    teardownObserver: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.childObserver && (this.childObserver.disconnect(), this.childObserver = null);
    },
    getComponentChildrenNode: function() {
      return this.$vnode.componentOptions.children.map(function(e) {
        return e.elm;
      }).filter(function(e) {
        return e;
      });
    }
  }
};
function _n(t, e, n, i, o, a, r, s, l, c) {
  var d = typeof n == "function" ? n.options : n;
  t && t.render && (d.render = t.render, d.staticRenderFns = t.staticRenderFns, d._compiled = !0), d._scopeId = i;
  var h;
  if (e && (h = function($) {
    e.call(this, s($));
  }), h)
    if (d.functional) {
      var v = d.render;
      d.render = function(C, g) {
        return h.call(g), v(C, g);
      };
    } else {
      var y = d.beforeCreate;
      d.beforeCreate = y ? [].concat(y, h) : [h];
    }
  return n;
}
var wn = typeof navigator < "u" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function bn(t) {
  return function(e, n) {
    return yn(e, n);
  };
}
var Z, fe = {};
function yn(t, e) {
  var n = wn ? e.media || "default" : t, i = fe[n] || (fe[n] = { ids: /* @__PURE__ */ new Set(), styles: [] });
  if (!i.ids.has(t)) {
    i.ids.add(t);
    var o = e.source;
    if (e.map && (o += `
/*# sourceURL=` + e.map.sources[0] + " */", o += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) + " */"), i.element || (i.element = document.createElement("style"), i.element.type = "text/css", e.media && i.element.setAttribute("media", e.media), Z === void 0 && (Z = document.head || document.getElementsByTagName("head")[0]), Z.appendChild(i.element)), "styleSheet" in i.element)
      i.styles.push(o), i.element.styleSheet.cssText = i.styles.filter(Boolean).join(`
`);
    else {
      var a = i.ids.size - 1, r = document.createTextNode(o), s = i.element.childNodes;
      s[a] && i.element.removeChild(s[a]), s.length ? i.element.insertBefore(r, s[a]) : i.element.appendChild(r);
    }
  }
}
var xn = gn, $e = function() {
  var t = this, e = t.$createElement, n = t._self._c || e;
  return n("div", { class: t.classes }, [t._t("default")], 2);
}, Mn = [];
$e._withStripped = !0;
var Sn = function(t) {
  t && t("data-v-50f4b45b_0", { source: `.hidden[data-v-50f4b45b] {
  visibility: hidden;
  display: none;
}

/*# sourceMappingURL=Teleport.vue.map */`, map: { version: 3, sources: ["/home/shodan/Projects/vue2-teleport/src/Teleport.vue", "Teleport.vue"], names: [], mappings: "AA2LA;EACA,kBAAA;EACA,aAAA;AC1LA;;AAEA,uCAAuC", file: "Teleport.vue", sourcesContent: [`<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'teleport',
  props: {
    to: {
      type: String,
      required: true,
    },
    where: {
      type: String,
      default: 'after',
    },
    disabled: Boolean,
  },
  data() {
    return {
      nodes: [],
      waiting: false,
      observer: null,
      parent: null,
    };
  },
  watch: {
    to: 'maybeMove',
    where: 'maybeMove',
    disabled(value) {
      if (value) {
        this.disable();
        // Ensure all event done.
        this.$nextTick(() => {
          this.teardownObserver();
        });
      } else {
        this.bootObserver();
        this.move();
      }
    },
  },
  mounted() {
    // Store a reference to the nodes
    this.nodes = Array.from(this.$el.childNodes);

    if (!this.disabled) {
      this.bootObserver();
    }

    // Move slot content to target
    this.maybeMove();
  },
  beforeDestroy() {
    // Fix nodes reference
    this.nodes = this.getComponentChildrenNode();

    // Move back
    this.disable();

    // Stop observing
    this.teardownObserver();
  },
  computed: {
    classes() {
      if (this.disabled) {
        return ['teleporter'];
      }

      return ['teleporter', 'hidden'];
    },
  },
  methods: {
    maybeMove() {
      if (!this.disabled) {
        this.move();
      }
    },
    move() {
      this.waiting = false;

      this.parent = document.querySelector(this.to);

      if (!this.parent) {
        this.disable();

        this.waiting = true;

        return;
      }

      if (this.where === 'before') {
        this.parent.prepend(this.getFragment());
      } else {
        this.parent.appendChild(this.getFragment());
      }
    },
    disable() {
      this.$el.appendChild(this.getFragment());
      this.parent = null;
    },
    // Using a fragment is faster because it'll trigger only a single reflow
    // See https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    getFragment() {
      const fragment = document.createDocumentFragment();

      this.nodes.forEach(node => fragment.appendChild(node));

      return fragment;
    },
    onMutations(mutations) {
      // Makes sure the move operation is only done once
      let shouldMove = false;

      for (let i = 0; i < mutations.length; i++) {
        const mutation = mutations[i];
        const filteredAddedNodes = Array.from(mutation.addedNodes).filter(node => !this.nodes.includes(node));

        if (Array.from(mutation.removedNodes).includes(this.parent)) {
          this.disable();
          this.waiting = !this.disabled;
        } else if (this.waiting && filteredAddedNodes.length > 0) {
          shouldMove = true;
        }
      }

      if (shouldMove) {
        this.move();
      }
    },
    bootObserver() {
      if (this.observer) {
        return;
      }

      this.observer = new MutationObserver(mutations => this.onMutations(mutations));

      this.observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
      });

      if (this.childObserver) {
        return;
      }
      // watch childNodes change
      this.childObserver = new MutationObserver(mutations => {
        const childChangeRecord = mutations.find(i => i.target === this.$el);
        if (childChangeRecord) {
          // Remove old nodes before update position.
          this.nodes.forEach((node) => node.parentNode && node.parentNode.removeChild(node));
          this.nodes = this.getComponentChildrenNode();
          this.maybeMove();
        }
      });

      this.childObserver.observe(this.$el, {
        childList: true,
        subtree: false,
        attributes: false,
        characterData: false,
      });
    },
    teardownObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      if (this.childObserver) {
        this.childObserver.disconnect();
        this.childObserver = null;
      }
    },
    getComponentChildrenNode() {
      return this.$vnode.componentOptions.children
        .map((i) => i.elm)
        .filter((i) => i);
    },
  },
};
<\/script>

<style scoped lang="scss">
.hidden {
  visibility: hidden;
  display: none;
}
</style>
`, `.hidden {
  visibility: hidden;
  display: none;
}

/*# sourceMappingURL=Teleport.vue.map */`] }, media: void 0 });
}, $n = "data-v-50f4b45b", Tn = void 0, On = !1, Te = /* @__PURE__ */ _n(
  { render: $e, staticRenderFns: Mn },
  Sn,
  xn,
  $n,
  On,
  Tn,
  !1,
  bn
);
function J(t) {
  J.installed || (J.installed = !0, t.component("Teleport", Te));
}
var Cn = {
  install: J
}, H = null;
typeof window < "u" ? H = window.Vue : typeof global < "u" && (H = global.Vue);
H && H.use(Cn);
const In = M({
  name: "PhotoSlider",
  components: {
    Teleport: Te,
    PhotoView: Tt,
    Close: Pt,
    ArrowLeft: Et,
    ArrowRight: Dt,
    RotateLeft: Ut,
    RotateRight: Qt,
    FlipHorizontal: sn,
    FlipVertical: dn,
    Download: pn
  },
  props: {
    /**
     * 图片列表
     */
    items: {
      type: Array,
      required: !0
    },
    /**
     * 图片当前索引
     */
    index: {
      type: Number,
      required: !0
    },
    /**
     * 是否显示模态框
     */
    visible: {
      type: Boolean,
      required: !0
    },
    /**
     * 箭头切换是否需要过渡
     */
    shouldTransition: {
      type: Boolean,
      default: !1
    },
    /**
     * 是否切换显隐覆盖物
     */
    toggleOverlay: {
      type: Boolean,
      default: !0
    },
    /**
     * 默认背景透明度
     */
    defaultBackdropOpacity: {
      type: Number,
      default: 1
    },
    /**
     * 是否循环显示预览图
     */
    loop: {
      type: Boolean,
      default: !1
    },
    /**
     * 下载图片方法，不传使用内置的下载方法
     */
    downloadMethod: {
      type: Function,
      default: null
    }
  },
  emits: ["clickPhoto", "clickMask", "changeIndex", "closeModal"],
  setup(t) {
    const { items: e, index: n, visible: i } = Q(t), o = ke(() => e.value[n.value] || {});
    Ot(i);
    const { photoVisible: a, showAnimateType: r, originRect: s, onShowAnimateEnd: l } = mn(i, o), { innerWidth: c } = Ct();
    return {
      innerWidth: c,
      currentItem: o,
      photoVisible: a,
      showAnimateType: r,
      originRect: s,
      onShowAnimateEnd: l
    };
  },
  data() {
    return {
      // 常量
      horizontalOffset: gt,
      ShowAnimateEnum: P,
      isTouchDevice: N,
      // 触摸相关
      touched: !1,
      hasMove: !1,
      needTransition: !1,
      clientX: 0,
      clientY: 0,
      touchMoveX: 0,
      backdropOpacity: this.defaultBackdropOpacity,
      // 是否显示覆盖物
      overlayVisible: !0,
      // 虚拟下标，用于循环预览
      virtualIndex: 0,
      // photo-view 子组件
      photoViewRefs: {}
    };
  },
  computed: {
    // 当前显示的图片列表
    showItems() {
      const t = this.items.length;
      return this.loop ? this.items.concat(this.items).concat(this.items).slice(t + this.index - 1, t + this.index + 2) : this.items.slice(
        Math.max(this.index - 1, 0),
        Math.min(this.index + 2, t)
      );
    }
  },
  created() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  beforeUpdate() {
    this.photoViewRefs = {};
  },
  methods: {
    defaultDownloadMethod(t) {
      const e = t.src.split("/"), n = e[e.length - 1], i = new Image();
      i.setAttribute("crossOrigin", "Anonymous"), i.onload = () => {
        const o = document.createElement("canvas"), a = o.getContext("2d");
        o.width = i.width, o.height = i.height, a == null || a.drawImage(i, 0, 0, i.width, i.height), o.toBlob((r) => {
          if (r) {
            const s = URL.createObjectURL(r), l = document.createElement("a");
            l.download = t.downloadName || n, l.href = s, l.dispatchEvent(new MouseEvent("click")), URL.revokeObjectURL(s);
          }
        });
      }, i.src = t.src + "?v=" + Date.now();
    },
    handleDownload() {
      const t = this.items[this.index];
      typeof this.downloadMethod == "function" ? this.downloadMethod(t) : this.defaultDownloadMethod(t);
    },
    toggleFlipHorizontal() {
      this.photoViewRefs[this.currentItem.key].toggleFlipHorizontal();
    },
    toggleFlipVertical() {
      this.photoViewRefs[this.currentItem.key].toggleFlipVertical();
    },
    handleRotateLeft() {
      this.photoViewRefs[this.currentItem.key].handleRotateLeft();
    },
    handleRotateRight() {
      this.photoViewRefs[this.currentItem.key].handleRotateRight();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setPhotoViewRef(t, e) {
      this.photoViewRefs[t] = e;
    },
    handleKeyDown(t) {
      if (this.visible)
        switch (t.code) {
          case "ArrowLeft":
            this.handlePrevious();
            break;
          case "ArrowRight":
            this.handleNext();
            break;
          case "Escape":
            this.handleClickClose();
            break;
        }
    },
    handleSingleTap(t, e, n) {
      this.toggleOverlay && (this.overlayVisible = !this.overlayVisible), this.$emit("clickPhoto", n);
    },
    handleTouchStart(t, e) {
      this.touched = !0, this.needTransition = !1, this.clientX = t, this.clientY = e;
    },
    handleTouchMove(t, e, n, i, o) {
      t === w.Scale && i !== 1 && this.handleTouchScaleMove(e, o), t === w.X && this.handleTouchHorizontalMove(e), t === w.Y && this.handleTouchVerticalMove(e, n);
    },
    handleTouchScaleMove(t, e) {
      let n = t - this.clientX;
      (n > 0 && e.includes(k.Left) || n < 0 && e.includes(k.Right)) && this.handleTouchHorizontalMove(t);
    },
    handleTouchHorizontalMove(t) {
      let e = t - this.clientX;
      !this.loop && (this.index === 0 && e > 0 || this.index === this.items.length - 1 && e < 0) && (e = e / 2), this.hasMove = t !== this.clientX, this.touchMoveX = e;
    },
    handleTouchVerticalMove(t, e) {
      let n = Math.abs(e - this.clientY);
      const i = Math.max(
        Math.min(
          this.defaultBackdropOpacity,
          this.defaultBackdropOpacity - n / 100 / 4
        ),
        0
      );
      this.hasMove = t !== this.clientX || e !== this.clientY, this.backdropOpacity = i;
    },
    handleTouchEnd(t, e, n, i, o) {
      t === w.Scale && i !== 1 && this.handleTouchScaleEnd(e, o), t === w.X && this.handleTouchHorizontalEnd(e), t === w.Y && this.handleTouchVerticalEnd(n), this.hasMove && (this.needTransition = !0), this.touched = !1, this.hasMove = !1, this.clientX = 0, this.clientY = 0, this.touchMoveX = 0;
    },
    handleTouchScaleEnd(t, e) {
      const n = t - this.clientX;
      n < -D && e.includes(k.Right) && this.handleNext(), n > D && e.includes(k.Left) && this.handlePrevious();
    },
    handleTouchHorizontalEnd(t) {
      const e = t - this.clientX;
      e < -D && this.handleNext(), e > D && this.handlePrevious();
    },
    handleTouchVerticalEnd(t) {
      const e = t - this.clientY;
      Math.abs(e) > window.innerHeight * 0.14 ? this.$emit("closeModal") : this.resetBackdropOpacity();
    },
    resetBackdropOpacity() {
      this.backdropOpacity = this.defaultBackdropOpacity;
    },
    resetNeedTransition() {
      this.needTransition = !1;
    },
    handlePrevious() {
      const t = this.items.length;
      !this.loop && this.index === 0 || (this.$emit("changeIndex", (this.index + t - 1) % t), this.virtualIndex -= 1);
    },
    handleNext() {
      const t = this.items.length;
      !this.loop && this.index === t - 1 || (this.$emit("changeIndex", (this.index + 1) % t), this.virtualIndex += 1);
    },
    handleClickMask(t) {
      this.$emit("clickMask", t);
    },
    handleClickClose() {
      this.$emit("closeModal");
    },
    // 对于中间的图片，当预览下一张时，getItemTransform 方法会做动画左移一个单位。showItems 列表会发生变化使 currentIndex 会从 1 变成 0，也相当于左移一个单位
    // 所以此时需要根据 virtualIndex 右移一个单位的来平衡其中一个左移即可
    getItemLeft(t) {
      let e = this.virtualIndex + t;
      return (this.loop || this.index !== 0) && (e -= 1), `${(this.innerWidth + this.horizontalOffset) * e}px`;
    },
    getItemTransition() {
      const t = "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
      if (this.needTransition)
        return t;
      if (!this.hasMove)
        return this.shouldTransition ? t : void 0;
    },
    getItemTransform() {
      return `translate3d(${-(this.innerWidth + this.horizontalOffset) * this.virtualIndex + this.touchMoveX}px, 0px, 0px)`;
    }
  }
});
var Rn = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("teleport", { attrs: { to: "body" } }, [e.photoVisible ? n("div", { staticClass: "PhotoSlider__Wrapper", class: {
    PhotoSlider__Clean: e.showAnimateType !== e.ShowAnimateEnum.None,
    PhotoSlider__Hide: !e.overlayVisible
  } }, [n("div", { staticClass: "PhotoSlider__Backdrop", class: {
    PhotoSlider__fadeIn: e.showAnimateType === e.ShowAnimateEnum.In,
    PhotoSlider__fadeOut: e.showAnimateType === e.ShowAnimateEnum.Out
  }, style: {
    background: `rgba(0, 0, 0, ${e.backdropOpacity})`
  }, on: { animationend: function(i) {
    e.onShowAnimateEnd(), e.resetBackdropOpacity();
  } } }), n("div", { staticClass: "PhotoSlider__BannerWrap" }, [n("div", { staticClass: "PhotoSlider__Counter" }, [e._v(" " + e._s(e.index + 1) + " / " + e._s(e.items.length) + " ")]), n("div", { staticClass: "PhotoSlider__BannerRight" }, [n("download", { staticClass: "PhotoSlider__BannerIcon", nativeOn: { click: function(i) {
    return e.handleDownload.apply(null, arguments);
  } } }), n("rotate-left", { staticClass: "PhotoSlider__BannerIcon", nativeOn: { click: function(i) {
    return e.handleRotateLeft.apply(null, arguments);
  } } }), n("rotate-right", { staticClass: "PhotoSlider__BannerIcon", nativeOn: { click: function(i) {
    return e.handleRotateRight.apply(null, arguments);
  } } }), n("flip-horizontal", { staticClass: "PhotoSlider__BannerIcon", nativeOn: { click: function(i) {
    return e.toggleFlipHorizontal.apply(null, arguments);
  } } }), n("flip-vertical", { staticClass: "PhotoSlider__BannerIcon", nativeOn: { click: function(i) {
    return e.toggleFlipVertical.apply(null, arguments);
  } } }), n("close", { staticClass: "PhotoSlider__BannerIcon", nativeOn: { click: function(i) {
    return e.handleClickClose.apply(null, arguments);
  } } })], 1)]), e._l(e.showItems, function(i, o) {
    return n("div", { key: i.key, staticClass: "PhotoSlider__PhotoBox", style: {
      left: e.getItemLeft(o),
      transition: e.getItemTransition(),
      transform: e.getItemTransform()
    }, on: { transitionend: e.resetNeedTransition, click: e.handleClickMask } }, [n("photo-view", { ref: (a) => e.setPhotoViewRef(i.key, a), refInFor: !0, attrs: { "origin-rect": e.originRect, "show-animate-type": e.showAnimateType, src: i.src }, on: { click: function(a) {
      a.stopPropagation();
    }, touchStart: e.handleTouchStart, touchMove: e.handleTouchMove, touchEnd: e.handleTouchEnd, singleTap: e.handleSingleTap } })], 1);
  }), e.isTouchDevice ? e._e() : [e.loop || e.index > 0 ? n("div", { staticClass: "PhotoSlider__ArrowLeft", on: { click: e.handlePrevious } }, [n("arrow-left")], 1) : e._e(), e.loop || e.index < e.items.length - 1 ? n("div", { staticClass: "PhotoSlider__ArrowRight", on: { click: e.handleNext } }, [n("arrow-right")], 1) : e._e()], e.currentItem.intro ? n("div", { staticClass: "PhotoSlider__FooterWrap" }, [e._v(" " + e._s(e.currentItem.intro) + " ")]) : e._e()], 2) : e._e()]);
}, kn = [], Fn = /* @__PURE__ */ S(
  In,
  Rn,
  kn
);
const Oe = Fn.exports, Pn = M({
  name: "PhotoProvider",
  components: {
    PhotoSlider: Oe
  },
  props: {
    /**
     * 图片点击是否关闭
     */
    photoClosable: {
      type: Boolean,
      default: !1
    },
    /**
     * 背景点击是否关闭
     */
    maskClosable: {
      type: Boolean,
      default: !0
    },
    /**
     * 箭头切换是否需要过渡
     */
    shouldTransition: {
      type: Boolean,
      default: !1
    },
    /**
     * 默认背景透明度
     */
    defaultBackdropOpacity: {
      type: Number,
      default: 1
    },
    /**
     * 是否循环显示预览图
     */
    loop: {
      type: Boolean,
      default: !1
    },
    /**
     * 下载图片方法，不传使用内置的下载方法
     */
    downloadMethod: {
      type: Function,
      default: null
    }
  },
  emits: ["indexChange", "visibleChange"],
  setup(t, { emit: e }) {
    const n = () => {
      e("indexChange", { index: o, items: r, visible: c });
    }, i = () => {
      e("visibleChange", { index: o, items: r, visible: c });
    }, { index: o, updateIndex: a } = Ne(n), { items: r, updateItem: s, removeItem: l } = Ae(o), { visible: c, handleHide: d, handleShow: h } = Le(
      r,
      o,
      i
    );
    return U(ge, s), U(_e, l), U(we, h), {
      items: r,
      updateItem: s,
      removeItem: l,
      visible: c,
      handleHide: d,
      handleShow: h,
      index: o,
      updateIndex: a
    };
  },
  methods: {
    handleClickPhoto() {
      this.photoClosable && this.handleHide();
    },
    handleClickMask() {
      this.maskClosable && this.handleHide();
    }
  }
});
var An = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("div", [e._t("default"), n("photo-slider", { attrs: { visible: e.visible, index: e.index, "should-transition": e.shouldTransition, "toggle-overlay": !e.photoClosable, "default-backdrop-opacity": e.defaultBackdropOpacity, items: e.items, loop: e.loop, "download-method": e.downloadMethod }, on: { clickPhoto: e.handleClickPhoto, clickMask: e.handleClickMask, changeIndex: e.updateIndex, closeModal: e.handleHide } })], 2);
}, Ln = [], Nn = /* @__PURE__ */ S(
  Pn,
  An,
  Ln
);
const Bn = Nn.exports;
function En(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, o = Array(i); ++n < i; )
    o[n] = e(t[n], n, t);
  return o;
}
var Vn = Array.isArray, zn = 1 / 0, ve = V ? V.prototype : void 0, pe = ve ? ve.toString : void 0;
function Ce(t) {
  if (typeof t == "string")
    return t;
  if (Vn(t))
    return En(t, Ce) + "";
  if (xe(t))
    return pe ? pe.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -zn ? "-0" : e;
}
function jn(t) {
  return t == null ? "" : Ce(t);
}
var Xn = 0;
function Dn(t) {
  var e = ++Xn;
  return jn(t) + e;
}
const Yn = M({
  name: "PhotoConsumer",
  props: {
    /**
     * 图片地址
     */
    src: {
      type: String,
      required: !0
    },
    /**
     * 图片介绍
     */
    intro: {
      type: String,
      default: null
    },
    /**
     * 图片下载名称，默认图片名称
     */
    downloadName: {
      type: String,
      default: null
    }
  },
  setup(t) {
    const e = K(ge), n = K(_e), i = K(we), o = p(null), a = Dn(), { src: r, intro: s, downloadName: l } = Q(t), c = () => {
      i == null || i(a);
    }, d = () => ({
      key: a,
      src: r.value,
      originRef: o.value,
      intro: s.value,
      downloadName: l.value
    });
    return W([r, s, l], () => {
      e == null || e(d());
    }), Fe(() => {
      e == null || e(d());
    }), Pe(() => {
      n == null || n(a);
    }), {
      root: o,
      handleClick: c
    };
  }
});
var Hn = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, n("span", { ref: "root", staticClass: "PhotoConsumer", staticStyle: { display: "inline-block" }, on: { click: e.handleClick } }, [e._t("default")], 2);
}, Wn = [], qn = /* @__PURE__ */ S(
  Yn,
  Hn,
  Wn
);
const Un = qn.exports, Kn = [Bn, Un, Oe], Gn = (t) => {
  Kn.forEach((e) => {
    t.component(e.name, e);
  });
}, ti = { install: Gn };
export {
  k as EdgeTypeEnum,
  Un as PhotoConsumer,
  Bn as PhotoProvider,
  Oe as PhotoSlider,
  P as ShowAnimateEnum,
  w as TouchTypeEnum,
  ti as default
};
//# sourceMappingURL=vue2-photo-preview.umd.js.map
