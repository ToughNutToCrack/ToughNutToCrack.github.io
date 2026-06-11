/*! For license information please see landing-page.js.LICENSE.txt */
(() => {
  var e = {
      79: (e) => {
        ((e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      157: (e, t, n) => {
        const r = n(6886),
          o = n(9953),
          i = n(9899),
          a = n(8820),
          l = n(6421),
          s = n(7756),
          u = n(1332),
          c = n(7518),
          d = n(4764),
          f = n(1427),
          p = n(4565),
          h = n(208),
          g = n(9801);
        function _(e, t, n) {
          const r = e.size,
            o = p.getEncodedBits(t, n);
          let i, a;
          for (i = 0; i < 15; i++)
            ((a = 1 == ((o >> i) & 1)),
              i < 6
                ? e.set(i, 8, a, !0)
                : i < 8
                  ? e.set(i + 1, 8, a, !0)
                  : e.set(r - 15 + i, 8, a, !0),
              i < 8
                ? e.set(8, r - i - 1, a, !0)
                : i < 9
                  ? e.set(8, 15 - i - 1 + 1, a, !0)
                  : e.set(8, 15 - i - 1, a, !0));
          e.set(r - 8, 8, 1, !0);
        }
        function m(e, t, n, o) {
          let p;
          if (Array.isArray(e)) p = g.fromArray(e);
          else {
            if ("string" != typeof e) throw new Error("Invalid data");
            {
              let r = t;
              if (!r) {
                const t = g.rawSplit(e);
                r = f.getBestVersionForData(t, n);
              }
              p = g.fromString(e, r || 40);
            }
          }
          const m = f.getBestVersionForData(p, n);
          if (!m)
            throw new Error(
              "The amount of data is too big to be stored in a QR Code",
            );
          if (t) {
            if (t < m)
              throw new Error(
                "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                  m +
                  ".\n",
              );
          } else t = m;
          const v = (function (e, t, n) {
              const o = new i();
              n.forEach(function (t) {
                (o.put(t.mode.bit, 4),
                  o.put(t.getLength(), h.getCharCountIndicator(t.mode, e)),
                  t.write(o));
              });
              const a =
                8 *
                (r.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, t));
              for (
                o.getLengthInBits() + 4 <= a && o.put(0, 4);
                o.getLengthInBits() % 8 != 0;
              )
                o.putBit(0);
              const l = (a - o.getLengthInBits()) / 8;
              for (let e = 0; e < l; e++) o.put(e % 2 ? 17 : 236, 8);
              return (function (e, t, n) {
                const o = r.getSymbolTotalCodewords(t),
                  i = o - c.getTotalCodewordsCount(t, n),
                  a = c.getBlocksCount(t, n),
                  l = a - (o % a),
                  s = Math.floor(o / a),
                  u = Math.floor(i / a),
                  f = u + 1,
                  p = s - u,
                  h = new d(p);
                let g = 0;
                const _ = new Array(a),
                  m = new Array(a);
                let v = 0;
                const y = new Uint8Array(e.buffer);
                for (let e = 0; e < a; e++) {
                  const t = e < l ? u : f;
                  ((_[e] = y.slice(g, g + t)),
                    (m[e] = h.encode(_[e])),
                    (g += t),
                    (v = Math.max(v, t)));
                }
                const b = new Uint8Array(o);
                let w,
                  x,
                  M = 0;
                for (w = 0; w < v; w++)
                  for (x = 0; x < a; x++) w < _[x].length && (b[M++] = _[x][w]);
                for (w = 0; w < p; w++)
                  for (x = 0; x < a; x++) b[M++] = m[x][w];
                return b;
              })(o, e, t);
            })(t, n, p),
            y = r.getSymbolSize(t),
            b = new a(y);
          return (
            (function (e, t) {
              const n = e.size,
                r = s.getPositions(t);
              for (let t = 0; t < r.length; t++) {
                const o = r[t][0],
                  i = r[t][1];
                for (let t = -1; t <= 7; t++)
                  if (!(o + t <= -1 || n <= o + t))
                    for (let r = -1; r <= 7; r++)
                      i + r <= -1 ||
                        n <= i + r ||
                        ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                        (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                        (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                          ? e.set(o + t, i + r, !0, !0)
                          : e.set(o + t, i + r, !1, !0));
              }
            })(b, t),
            (function (e) {
              const t = e.size;
              for (let n = 8; n < t - 8; n++) {
                const t = n % 2 == 0;
                (e.set(n, 6, t, !0), e.set(6, n, t, !0));
              }
            })(b),
            (function (e, t) {
              const n = l.getPositions(t);
              for (let t = 0; t < n.length; t++) {
                const r = n[t][0],
                  o = n[t][1];
                for (let t = -2; t <= 2; t++)
                  for (let n = -2; n <= 2; n++)
                    -2 === t ||
                    2 === t ||
                    -2 === n ||
                    2 === n ||
                    (0 === t && 0 === n)
                      ? e.set(r + t, o + n, !0, !0)
                      : e.set(r + t, o + n, !1, !0);
              }
            })(b, t),
            _(b, n, 0),
            t >= 7 &&
              (function (e, t) {
                const n = e.size,
                  r = f.getEncodedBits(t);
                let o, i, a;
                for (let t = 0; t < 18; t++)
                  ((o = Math.floor(t / 3)),
                    (i = (t % 3) + n - 8 - 3),
                    (a = 1 == ((r >> t) & 1)),
                    e.set(o, i, a, !0),
                    e.set(i, o, a, !0));
              })(b, t),
            (function (e, t) {
              const n = e.size;
              let r = -1,
                o = n - 1,
                i = 7,
                a = 0;
              for (let l = n - 1; l > 0; l -= 2)
                for (6 === l && l--; ; ) {
                  for (let n = 0; n < 2; n++)
                    if (!e.isReserved(o, l - n)) {
                      let r = !1;
                      (a < t.length && (r = 1 == ((t[a] >>> i) & 1)),
                        e.set(o, l - n, r),
                        i--,
                        -1 === i && (a++, (i = 7)));
                    }
                  if (((o += r), o < 0 || n <= o)) {
                    ((o -= r), (r = -r));
                    break;
                  }
                }
            })(b, v),
            isNaN(o) && (o = u.getBestMask(b, _.bind(null, b, n))),
            u.applyMask(o, b),
            _(b, n, o),
            {
              modules: b,
              version: t,
              errorCorrectionLevel: n,
              maskPattern: o,
              segments: p,
            }
          );
        }
        t.create = function (e, t) {
          if (void 0 === e || "" === e) throw new Error("No input text");
          let n,
            i,
            a = o.M;
          return (
            void 0 !== t &&
              ((a = o.from(t.errorCorrectionLevel, o.M)),
              (n = f.from(t.version)),
              (i = u.from(t.maskPattern)),
              t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
            m(e, n, a, i)
          );
        };
      },
      165: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/play-ce0953f5855849b2bd39.svg";
      },
      172: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, {
            Component: () => E,
            Fragment: () => P,
            cloneElement: () => X,
            createContext: () => K,
            createElement: () => x,
            createRef: () => k,
            h: () => x,
            hydrate: () => J,
            isValidElement: () => a,
            options: () => o,
            render: () => Z,
            toChildArray: () => R,
          }));
        var r,
          o,
          i,
          a,
          l,
          s,
          u,
          c,
          d,
          f,
          p,
          h,
          g,
          _ = {},
          m = [],
          v =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
          y = Array.isArray;
        function b(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function w(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        function x(e, t, n) {
          var o,
            i,
            a,
            l = {};
          for (a in t)
            "key" == a ? (o = t[a]) : "ref" == a ? (i = t[a]) : (l[a] = t[a]);
          if (
            (arguments.length > 2 &&
              (l.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
          )
            for (a in e.defaultProps)
              void 0 === l[a] && (l[a] = e.defaultProps[a]);
          return M(e, l, o, i, null);
        }
        function M(e, t, n, r, a) {
          var l = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: null == a ? ++i : a,
            __i: -1,
            __u: 0,
          };
          return (null == a && null != o.vnode && o.vnode(l), l);
        }
        function k() {
          return { current: null };
        }
        function P(e) {
          return e.children;
        }
        function E(e, t) {
          ((this.props = e), (this.context = t));
        }
        function S(e, t) {
          if (null == t) return e.__ ? S(e.__, e.__i + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return "function" == typeof e.type ? S(e) : null;
        }
        function O(e) {
          var t, n;
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
              }
            return O(e);
          }
        }
        function C(e) {
          ((!e.__d && (e.__d = !0) && l.push(e) && !A.__r++) ||
            s != o.debounceRendering) &&
            ((s = o.debounceRendering) || u)(A);
        }
        function A() {
          for (var e, t, n, r, i, a, s, u = 1; l.length; )
            (l.length > u && l.sort(c),
              (e = l.shift()),
              (u = l.length),
              e.__d &&
                ((n = void 0),
                (r = void 0),
                (i = (r = (t = e).__v).__e),
                (a = []),
                (s = []),
                t.__P &&
                  (((n = b({}, r)).__v = r.__v + 1),
                  o.vnode && o.vnode(n),
                  D(
                    t.__P,
                    n,
                    r,
                    t.__n,
                    t.__P.namespaceURI,
                    32 & r.__u ? [i] : null,
                    a,
                    null == i ? S(r) : i,
                    !!(32 & r.__u),
                    s,
                  ),
                  (n.__v = r.__v),
                  (n.__.__k[n.__i] = n),
                  W(a, n, s),
                  (r.__e = r.__ = null),
                  n.__e != i && O(n))));
          A.__r = 0;
        }
        function j(e, t, n, r, o, i, a, l, s, u, c) {
          var d,
            f,
            p,
            h,
            g,
            v,
            y,
            b = (r && r.__k) || m,
            w = t.length;
          for (s = N(n, t, b, s, w), d = 0; d < w; d++)
            null != (p = n.__k[d]) &&
              ((f = -1 == p.__i ? _ : b[p.__i] || _),
              (p.__i = d),
              (v = D(e, p, f, o, i, a, l, s, u, c)),
              (h = p.__e),
              p.ref &&
                f.ref != p.ref &&
                (f.ref && V(f.ref, null, p), c.push(p.ref, p.__c || h, p)),
              null == g && null != h && (g = h),
              (y = !!(4 & p.__u)) || f.__k === p.__k
                ? (s = T(p, s, e, y))
                : "function" == typeof p.type && void 0 !== v
                  ? (s = v)
                  : h && (s = h.nextSibling),
              (p.__u &= -7));
          return ((n.__e = g), s);
        }
        function N(e, t, n, r, o) {
          var i,
            a,
            l,
            s,
            u,
            c = n.length,
            d = c,
            f = 0;
          for (e.__k = new Array(o), i = 0; i < o; i++)
            null != (a = t[i]) &&
            "boolean" != typeof a &&
            "function" != typeof a
              ? ("string" == typeof a ||
                "number" == typeof a ||
                "bigint" == typeof a ||
                a.constructor == String
                  ? (a = e.__k[i] = M(null, a, null, null, null))
                  : y(a)
                    ? (a = e.__k[i] = M(P, { children: a }, null, null, null))
                    : null == a.constructor && a.__b > 0
                      ? (a = e.__k[i] =
                          M(
                            a.type,
                            a.props,
                            a.key,
                            a.ref ? a.ref : null,
                            a.__v,
                          ))
                      : (e.__k[i] = a),
                (s = i + f),
                (a.__ = e),
                (a.__b = e.__b + 1),
                -1 != (u = a.__i = I(a, n, s, d)) &&
                  (d--, (l = n[u]) && (l.__u |= 2)),
                null == l || null == l.__v
                  ? (-1 == u && (o > c ? f-- : o < c && f++),
                    "function" != typeof a.type && (a.__u |= 4))
                  : u != s &&
                    (u == s - 1
                      ? f--
                      : u == s + 1
                        ? f++
                        : (u > s ? f-- : f++, (a.__u |= 4))))
              : (e.__k[i] = null);
          if (d)
            for (i = 0; i < c; i++)
              null != (l = n[i]) &&
                !(2 & l.__u) &&
                (l.__e == r && (r = S(l)), q(l, l));
          return r;
        }
        function T(e, t, n, r) {
          var o, i;
          if ("function" == typeof e.type) {
            for (o = e.__k, i = 0; o && i < o.length; i++)
              o[i] && ((o[i].__ = e), (t = T(o[i], t, n, r)));
            return t;
          }
          e.__e != t &&
            (r &&
              (t && e.type && !t.parentNode && (t = S(e)),
              n.insertBefore(e.__e, t || null)),
            (t = e.__e));
          do {
            t = t && t.nextSibling;
          } while (null != t && 8 == t.nodeType);
          return t;
        }
        function R(e, t) {
          return (
            (t = t || []),
            null == e ||
              "boolean" == typeof e ||
              (y(e)
                ? e.some(function (e) {
                    R(e, t);
                  })
                : t.push(e)),
            t
          );
        }
        function I(e, t, n, r) {
          var o,
            i,
            a,
            l = e.key,
            s = e.type,
            u = t[n],
            c = null != u && !(2 & u.__u);
          if ((null === u && null == l) || (c && l == u.key && s == u.type))
            return n;
          if (r > (c ? 1 : 0))
            for (o = n - 1, i = n + 1; o >= 0 || i < t.length; )
              if (
                null != (u = t[(a = o >= 0 ? o-- : i++)]) &&
                !(2 & u.__u) &&
                l == u.key &&
                s == u.type
              )
                return a;
          return -1;
        }
        function B(e, t, n) {
          "-" == t[0]
            ? e.setProperty(t, null == n ? "" : n)
            : (e[t] =
                null == n
                  ? ""
                  : "number" != typeof n || v.test(t)
                    ? n
                    : n + "px");
        }
        function L(e, t, n, r, o) {
          var i, a;
          e: if ("style" == t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
              if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (n && t in n) || B(e.style, t, "");
              if (n) for (t in n) (r && n[t] == r[t]) || B(e.style, t, n[t]);
            }
          else if ("o" == t[0] && "n" == t[1])
            ((i = t != (t = t.replace(d, "$1"))),
              (a = t.toLowerCase()),
              (t =
                a in e || "onFocusOut" == t || "onFocusIn" == t
                  ? a.slice(2)
                  : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + i] = n),
              n
                ? r
                  ? (n.u = r.u)
                  : ((n.u = f), e.addEventListener(t, i ? h : p, i))
                : e.removeEventListener(t, i ? h : p, i));
          else {
            if ("http://www.w3.org/2000/svg" == o)
              t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "width" != t &&
              "height" != t &&
              "href" != t &&
              "list" != t &&
              "form" != t &&
              "tabIndex" != t &&
              "download" != t &&
              "rowSpan" != t &&
              "colSpan" != t &&
              "role" != t &&
              "popover" != t &&
              t in e
            )
              try {
                e[t] = null == n ? "" : n;
                break e;
              } catch (e) {}
            "function" == typeof n ||
              (null == n || (!1 === n && "-" != t[4])
                ? e.removeAttribute(t)
                : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
          }
        }
        function z(e) {
          return function (t) {
            if (this.l) {
              var n = this.l[t.type + e];
              if (null == t.t) t.t = f++;
              else if (t.t < n.u) return;
              return n(o.event ? o.event(t) : t);
            }
          };
        }
        function D(e, t, n, r, i, a, l, s, u, c) {
          var d,
            f,
            p,
            h,
            g,
            _,
            m,
            v,
            x,
            M,
            k,
            S,
            O,
            C,
            A,
            N,
            T,
            R = t.type;
          if (null != t.constructor) return null;
          (128 & n.__u && ((u = !!(32 & n.__u)), (a = [(s = t.__e = n.__e)])),
            (d = o.__b) && d(t));
          e: if ("function" == typeof R)
            try {
              if (
                ((v = t.props),
                (x = "prototype" in R && R.prototype.render),
                (M = (d = R.contextType) && r[d.__c]),
                (k = d ? (M ? M.props.value : d.__) : r),
                n.__c
                  ? (m = (f = t.__c = n.__c).__ = f.__E)
                  : (x
                      ? (t.__c = f = new R(v, k))
                      : ((t.__c = f = new E(v, k)),
                        (f.constructor = R),
                        (f.render = Y)),
                    M && M.sub(f),
                    f.state || (f.state = {}),
                    (f.__n = r),
                    (p = f.__d = !0),
                    (f.__h = []),
                    (f._sb = [])),
                x && null == f.__s && (f.__s = f.state),
                x &&
                  null != R.getDerivedStateFromProps &&
                  (f.__s == f.state && (f.__s = b({}, f.__s)),
                  b(f.__s, R.getDerivedStateFromProps(v, f.__s))),
                (h = f.props),
                (g = f.state),
                (f.__v = t),
                p)
              )
                (x &&
                  null == R.getDerivedStateFromProps &&
                  null != f.componentWillMount &&
                  f.componentWillMount(),
                  x &&
                    null != f.componentDidMount &&
                    f.__h.push(f.componentDidMount));
              else {
                if (
                  (x &&
                    null == R.getDerivedStateFromProps &&
                    v !== h &&
                    null != f.componentWillReceiveProps &&
                    f.componentWillReceiveProps(v, k),
                  t.__v == n.__v ||
                    (!f.__e &&
                      null != f.shouldComponentUpdate &&
                      !1 === f.shouldComponentUpdate(v, f.__s, k)))
                ) {
                  for (
                    t.__v != n.__v &&
                      ((f.props = v), (f.state = f.__s), (f.__d = !1)),
                      t.__e = n.__e,
                      t.__k = n.__k,
                      t.__k.some(function (e) {
                        e && (e.__ = t);
                      }),
                      S = 0;
                    S < f._sb.length;
                    S++
                  )
                    f.__h.push(f._sb[S]);
                  ((f._sb = []), f.__h.length && l.push(f));
                  break e;
                }
                (null != f.componentWillUpdate &&
                  f.componentWillUpdate(v, f.__s, k),
                  x &&
                    null != f.componentDidUpdate &&
                    f.__h.push(function () {
                      f.componentDidUpdate(h, g, _);
                    }));
              }
              if (
                ((f.context = k),
                (f.props = v),
                (f.__P = e),
                (f.__e = !1),
                (O = o.__r),
                (C = 0),
                x)
              ) {
                for (
                  f.state = f.__s,
                    f.__d = !1,
                    O && O(t),
                    d = f.render(f.props, f.state, f.context),
                    A = 0;
                  A < f._sb.length;
                  A++
                )
                  f.__h.push(f._sb[A]);
                f._sb = [];
              } else
                do {
                  ((f.__d = !1),
                    O && O(t),
                    (d = f.render(f.props, f.state, f.context)),
                    (f.state = f.__s));
                } while (f.__d && ++C < 25);
              ((f.state = f.__s),
                null != f.getChildContext &&
                  (r = b(b({}, r), f.getChildContext())),
                x &&
                  !p &&
                  null != f.getSnapshotBeforeUpdate &&
                  (_ = f.getSnapshotBeforeUpdate(h, g)),
                (N = d),
                null != d &&
                  d.type === P &&
                  null == d.key &&
                  (N = F(d.props.children)),
                (s = j(e, y(N) ? N : [N], t, n, r, i, a, l, s, u, c)),
                (f.base = t.__e),
                (t.__u &= -161),
                f.__h.length && l.push(f),
                m && (f.__E = f.__ = null));
            } catch (e) {
              if (((t.__v = null), u || null != a))
                if (e.then) {
                  for (
                    t.__u |= u ? 160 : 128;
                    s && 8 == s.nodeType && s.nextSibling;
                  )
                    s = s.nextSibling;
                  ((a[a.indexOf(s)] = null), (t.__e = s));
                } else {
                  for (T = a.length; T--; ) w(a[T]);
                  U(t);
                }
              else ((t.__e = n.__e), (t.__k = n.__k), e.then || U(t));
              o.__e(e, t, n);
            }
          else
            null == a && t.__v == n.__v
              ? ((t.__k = n.__k), (t.__e = n.__e))
              : (s = t.__e = H(n.__e, t, n, r, i, a, l, u, c));
          return ((d = o.diffed) && d(t), 128 & t.__u ? void 0 : s);
        }
        function U(e) {
          (e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(U));
        }
        function W(e, t, n) {
          for (var r = 0; r < n.length; r++) V(n[r], n[++r], n[++r]);
          (o.__c && o.__c(t, e),
            e.some(function (t) {
              try {
                ((e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t);
                  }));
              } catch (e) {
                o.__e(e, t.__v);
              }
            }));
        }
        function F(e) {
          return "object" != typeof e || null == e || (e.__b && e.__b > 0)
            ? e
            : y(e)
              ? e.map(F)
              : b({}, e);
        }
        function H(e, t, n, i, a, l, s, u, c) {
          var d,
            f,
            p,
            h,
            g,
            m,
            v,
            b = n.props || _,
            x = t.props,
            M = t.type;
          if (
            ("svg" == M
              ? (a = "http://www.w3.org/2000/svg")
              : "math" == M
                ? (a = "http://www.w3.org/1998/Math/MathML")
                : a || (a = "http://www.w3.org/1999/xhtml"),
            null != l)
          )
            for (d = 0; d < l.length; d++)
              if (
                (g = l[d]) &&
                "setAttribute" in g == !!M &&
                (M ? g.localName == M : 3 == g.nodeType)
              ) {
                ((e = g), (l[d] = null));
                break;
              }
          if (null == e) {
            if (null == M) return document.createTextNode(x);
            ((e = document.createElementNS(a, M, x.is && x)),
              u && (o.__m && o.__m(t, l), (u = !1)),
              (l = null));
          }
          if (null == M) b === x || (u && e.data == x) || (e.data = x);
          else {
            if (((l = l && r.call(e.childNodes)), !u && null != l))
              for (b = {}, d = 0; d < e.attributes.length; d++)
                b[(g = e.attributes[d]).name] = g.value;
            for (d in b)
              if (((g = b[d]), "children" == d));
              else if ("dangerouslySetInnerHTML" == d) p = g;
              else if (!(d in x)) {
                if (
                  ("value" == d && "defaultValue" in x) ||
                  ("checked" == d && "defaultChecked" in x)
                )
                  continue;
                L(e, d, null, g, a);
              }
            for (d in x)
              ((g = x[d]),
                "children" == d
                  ? (h = g)
                  : "dangerouslySetInnerHTML" == d
                    ? (f = g)
                    : "value" == d
                      ? (m = g)
                      : "checked" == d
                        ? (v = g)
                        : (u && "function" != typeof g) ||
                          b[d] === g ||
                          L(e, d, g, b[d], a));
            if (f)
              (u ||
                (p && (f.__html == p.__html || f.__html == e.innerHTML)) ||
                (e.innerHTML = f.__html),
                (t.__k = []));
            else if (
              (p && (e.innerHTML = ""),
              j(
                "template" == t.type ? e.content : e,
                y(h) ? h : [h],
                t,
                n,
                i,
                "foreignObject" == M ? "http://www.w3.org/1999/xhtml" : a,
                l,
                s,
                l ? l[0] : n.__k && S(n, 0),
                u,
                c,
              ),
              null != l)
            )
              for (d = l.length; d--; ) w(l[d]);
            u ||
              ((d = "value"),
              "progress" == M && null == m
                ? e.removeAttribute("value")
                : null != m &&
                  (m !== e[d] ||
                    ("progress" == M && !m) ||
                    ("option" == M && m != b[d])) &&
                  L(e, d, m, b[d], a),
              (d = "checked"),
              null != v && v != e[d] && L(e, d, v, b[d], a));
          }
          return e;
        }
        function V(e, t, n) {
          try {
            if ("function" == typeof e) {
              var r = "function" == typeof e.__u;
              (r && e.__u(), (r && null == t) || (e.__u = e(t)));
            } else e.current = t;
          } catch (e) {
            o.__e(e, n);
          }
        }
        function q(e, t, n) {
          var r, i;
          if (
            (o.unmount && o.unmount(e),
            (r = e.ref) && ((r.current && r.current != e.__e) || V(r, null, t)),
            null != (r = e.__c))
          ) {
            if (r.componentWillUnmount)
              try {
                r.componentWillUnmount();
              } catch (e) {
                o.__e(e, t);
              }
            r.base = r.__P = null;
          }
          if ((r = e.__k))
            for (i = 0; i < r.length; i++)
              r[i] && q(r[i], t, n || "function" != typeof e.type);
          (n || w(e.__e), (e.__c = e.__ = e.__e = void 0));
        }
        function Y(e, t, n) {
          return this.constructor(e, n);
        }
        function Z(e, t, n) {
          var i, a, l, s;
          (t == document && (t = document.documentElement),
            o.__ && o.__(e, t),
            (a = (i = "function" == typeof n) ? null : (n && n.__k) || t.__k),
            (l = []),
            (s = []),
            D(
              t,
              (e = ((!i && n) || t).__k = x(P, null, [e])),
              a || _,
              _,
              t.namespaceURI,
              !i && n
                ? [n]
                : a
                  ? null
                  : t.firstChild
                    ? r.call(t.childNodes)
                    : null,
              l,
              !i && n ? n : a ? a.__e : t.firstChild,
              i,
              s,
            ),
            W(l, e, s));
        }
        function J(e, t) {
          Z(e, t, J);
        }
        function X(e, t, n) {
          var o,
            i,
            a,
            l,
            s = b({}, e.props);
          for (a in (e.type && e.type.defaultProps && (l = e.type.defaultProps),
          t))
            "key" == a
              ? (o = t[a])
              : "ref" == a
                ? (i = t[a])
                : (s[a] = void 0 === t[a] && null != l ? l[a] : t[a]);
          return (
            arguments.length > 2 &&
              (s.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            M(e.type, s, o || e.key, i || e.ref, null)
          );
        }
        function K(e) {
          function t(e) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = new Set()),
                ((r = {})[t.__c] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.componentWillUnmount = function () {
                  n = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value != e.value &&
                    n.forEach(function (e) {
                      ((e.__e = !0), C(e));
                    });
                }),
                (this.sub = function (e) {
                  n.add(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    (n && n.delete(e), t && t.call(e));
                  };
                })),
              e.children
            );
          }
          return (
            (t.__c = "__cC" + g++),
            (t.__ = e),
            (t.Provider =
              t.__l =
              (t.Consumer = function (e, t) {
                return e.children(t);
              }).contextType =
                t),
            t
          );
        }
        ((r = m.slice),
          (o = {
            __e: function (e, t, n, r) {
              for (var o, i, a; (t = t.__); )
                if ((o = t.__c) && !o.__)
                  try {
                    if (
                      ((i = o.constructor) &&
                        null != i.getDerivedStateFromError &&
                        (o.setState(i.getDerivedStateFromError(e)),
                        (a = o.__d)),
                      null != o.componentDidCatch &&
                        (o.componentDidCatch(e, r || {}), (a = o.__d)),
                      a)
                    )
                      return (o.__E = o);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (i = 0),
          (a = function (e) {
            return null != e && null == e.constructor;
          }),
          (E.prototype.setState = function (e, t) {
            var n;
            ((n =
              null != this.__s && this.__s != this.state
                ? this.__s
                : (this.__s = b({}, this.state))),
              "function" == typeof e && (e = e(b({}, n), this.props)),
              e && b(n, e),
              null != e && this.__v && (t && this._sb.push(t), C(this)));
          }),
          (E.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), C(this));
          }),
          (E.prototype.render = P),
          (l = []),
          (u =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (c = function (e, t) {
            return e.__v.__b - t.__v.__b;
          }),
          (A.__r = 0),
          (d = /(PointerCapture)$|Capture$/i),
          (f = 0),
          (p = z(!1)),
          (h = z(!0)),
          (g = 0));
      },
      208: (e, t, n) => {
        const r = n(1878),
          o = n(7044);
        ((t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (t.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13],
          }),
          (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (t.MIXED = { bit: -1 }),
          (t.getCharCountIndicator = function (e, t) {
            if (!e.ccBits) throw new Error("Invalid mode: " + e);
            if (!r.isValid(t)) throw new Error("Invalid version: " + t);
            return t >= 1 && t < 10
              ? e.ccBits[0]
              : t < 27
                ? e.ccBits[1]
                : e.ccBits[2];
          }),
          (t.getBestModeForData = function (e) {
            return o.testNumeric(e)
              ? t.NUMERIC
              : o.testAlphanumeric(e)
                ? t.ALPHANUMERIC
                : o.testKanji(e)
                  ? t.KANJI
                  : t.BYTE;
          }),
          (t.toString = function (e) {
            if (e && e.id) return e.id;
            throw new Error("Invalid mode");
          }),
          (t.isValid = function (e) {
            return e && e.bit && e.ccBits;
          }),
          (t.from = function (e, n) {
            if (t.isValid(e)) return e;
            try {
              return (function (e) {
                if ("string" != typeof e)
                  throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                  case "numeric":
                    return t.NUMERIC;
                  case "alphanumeric":
                    return t.ALPHANUMERIC;
                  case "kanji":
                    return t.KANJI;
                  case "byte":
                    return t.BYTE;
                  default:
                    throw new Error("Unknown mode: " + e);
                }
              })(e);
            } catch (e) {
              return n;
            }
          }));
      },
      540: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return (e.setAttributes(t, e.attributes), e.insert(t, e.options), t);
        };
      },
      579: (e, t, n) => {
        var r = n(3738).default;
        ((e.exports = function (e) {
          if (null != e) {
            var t =
                e[
                  ("function" == typeof Symbol && Symbol.iterator) ||
                    "@@iterator"
                ],
              n = 0;
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length))
              return {
                next: function () {
                  return (
                    e && n >= e.length && (e = void 0),
                    { value: e && e[n++], done: !e }
                  );
                },
              };
          }
          throw new TypeError(r(e) + " is not iterable");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      887: (e, t, n) => {
        var r = n(6993),
          o = n(1791);
        ((e.exports = function (e, t, n, i, a) {
          return new o(r().w(e, t, n, i), a || Promise);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      924: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MediaImage = void 0));
        var o = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              o,
              i = { __proto__: null, default: e };
            if (null === e || ("object" != r(e) && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (var a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((o =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (o.get || o.set)
                  ? n(i, a, o)
                  : (i[a] = e[a]));
            return i;
          })(e);
        })(n(172));
        t.MediaImage = function (e) {
          var t = e.src,
            n = e.alt,
            r = e.onSizeChange,
            i = e.onError;
          return o.h("img", {
            className: "landing8-media-image",
            src: t,
            alt: n,
            onLoad: function (e) {
              r({
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
              });
            },
            onError: i,
          });
        };
      },
      1113: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      1156: (e) => {
        ((e.exports = function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              l = [],
              s = !0,
              u = !1;
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(n)).done) &&
                  (l.push(r.value), l.length !== t);
                  s = !0
                );
            } catch (e) {
              ((u = !0), (o = e));
            } finally {
              try {
                if (
                  !s &&
                  null != n.return &&
                  ((a = n.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return l;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      1163: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MediaElement = void 0));
        var o = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != r(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (o.get || o.set)
                    ? n(i, a, o)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          i = n(924),
          a = n(9694),
          l = n(4848);
        t.MediaElement = function (e) {
          var t = e.src,
            n = e.alt,
            r = e.onSizeChange,
            s = e.autoplay,
            u = e.onError,
            c = e.mediaControls;
          if (t.startsWith("https://www.youtube.com/watch?v=")) {
            var d = t.substr(32);
            return o.h(l.YoutubeMediaEmbed, {
              videoId: d,
              autoplay: s,
              onSizeChange: r,
            });
          }
          return t.endsWith(".mp4")
            ? o.h(a.MediaVideo, {
                src: t,
                autoplay: s,
                onSizeChange: r,
                onError: u,
                mediaControls: c,
              })
            : o.h(i.MediaImage, {
                src: t,
                alt: n,
                onSizeChange: r,
                onError: u,
              });
        };
      },
      1230: (e, t, n) => {
        "use strict";
        var r = n(4994),
          o = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UrlPromptSection = void 0));
        var i = r(n(4756)),
          a = r(n(5715)),
          l = r(n(9293)),
          s = p(n(172)),
          u = n(5994),
          c = p(n(7583)),
          d = n(9839),
          f = n(4215);
        function p(e, t) {
          if ("function" == typeof WeakMap)
            var n = new WeakMap(),
              r = new WeakMap();
          return (p = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var i,
              a,
              l = { __proto__: null, default: e };
            if (null === e || ("object" != o(e) && "function" != typeof e))
              return l;
            if ((i = t ? r : n)) {
              if (i.has(e)) return i.get(e);
              i.set(e, l);
            }
            for (var s in e)
              "default" !== s &&
                {}.hasOwnProperty.call(e, s) &&
                ((a =
                  (i = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, s)) &&
                (a.get || a.set)
                  ? i(l, s, a)
                  : (l[s] = e[s]));
            return l;
          })(e, t);
        }
        var h = (function () {
          var e = (0, l.default)(
            i.default.mark(function e(t) {
              var n, r;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 1),
                          c.toDataURL(t, {
                            type: "svg",
                            width: 250,
                            margin: 2,
                            errorCorrectionLevel: "M",
                            color: { dark: "#000000", light: "#FFFFFF" },
                          })
                        );
                      case 1:
                        return ((n = e.sent), e.abrupt("return", n));
                      case 2:
                        return (
                          (e.prev = 2),
                          (r = e.catch(0)),
                          console.error("Error generating QR code:", r),
                          e.abrupt("return", "")
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 2]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        t.UrlPromptSection = function (e) {
          var t = e.url,
            n = e.promptPrefix,
            r = e.promptSuffix,
            o = e.vrPromptPrefix,
            c = (function () {
              try {
                return (
                  window.navigator.userAgent.match(/Pacific/) ||
                  window.navigator.userAgent.match(/Quest/)
                );
              } catch (e) {
                return !1;
              }
            })(),
            p = (0, u.useState)(""),
            g = (0, a.default)(p, 2),
            _ = g[0],
            m = g[1];
          return (
            (0, u.useEffect)(
              function () {
                var e = (function () {
                  var e = (0, l.default)(
                    i.default.mark(function e() {
                      var n;
                      return i.default.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return ((e.next = 1), h(t));
                            case 1:
                              ((n = e.sent), m(n));
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                e();
              },
              [t],
            ),
            s.h(
              "div",
              { className: "landing8-prompt-section" },
              !c &&
                s.h("img", {
                  className: "landing8-qr",
                  src: _,
                  alt: "QR Code",
                }),
              s.h(
                "div",
                { className: "landing8-prompt-text" },
                c && s.h(f.FacebookMessengerButton, { url: t }),
                c ? o : n,
                " ",
                s.h(d.UrlPromptLink, { url: t }),
                " ",
                r,
              ),
            )
          );
        };
      },
      1332: (e, t) => {
        t.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        function n(e, n, r) {
          switch (e) {
            case t.Patterns.PATTERN000:
              return (n + r) % 2 == 0;
            case t.Patterns.PATTERN001:
              return n % 2 == 0;
            case t.Patterns.PATTERN010:
              return r % 3 == 0;
            case t.Patterns.PATTERN011:
              return (n + r) % 3 == 0;
            case t.Patterns.PATTERN100:
              return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
            case t.Patterns.PATTERN101:
              return ((n * r) % 2) + ((n * r) % 3) == 0;
            case t.Patterns.PATTERN110:
              return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
            case t.Patterns.PATTERN111:
              return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
            default:
              throw new Error("bad maskPattern:" + e);
          }
        }
        ((t.isValid = function (e) {
          return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
        }),
          (t.from = function (e) {
            return t.isValid(e) ? parseInt(e, 10) : void 0;
          }),
          (t.getPenaltyN1 = function (e) {
            const t = e.size;
            let n = 0,
              r = 0,
              o = 0,
              i = null,
              a = null;
            for (let l = 0; l < t; l++) {
              ((r = o = 0), (i = a = null));
              for (let s = 0; s < t; s++) {
                let t = e.get(l, s);
                (t === i ? r++ : (r >= 5 && (n += r - 5 + 3), (i = t), (r = 1)),
                  (t = e.get(s, l)),
                  t === a
                    ? o++
                    : (o >= 5 && (n += o - 5 + 3), (a = t), (o = 1)));
              }
              (r >= 5 && (n += r - 5 + 3), o >= 5 && (n += o - 5 + 3));
            }
            return n;
          }),
          (t.getPenaltyN2 = function (e) {
            const t = e.size;
            let n = 0;
            for (let r = 0; r < t - 1; r++)
              for (let o = 0; o < t - 1; o++) {
                const t =
                  e.get(r, o) +
                  e.get(r, o + 1) +
                  e.get(r + 1, o) +
                  e.get(r + 1, o + 1);
                (4 !== t && 0 !== t) || n++;
              }
            return 3 * n;
          }),
          (t.getPenaltyN3 = function (e) {
            const t = e.size;
            let n = 0,
              r = 0,
              o = 0;
            for (let i = 0; i < t; i++) {
              r = o = 0;
              for (let a = 0; a < t; a++)
                ((r = ((r << 1) & 2047) | e.get(i, a)),
                  a >= 10 && (1488 === r || 93 === r) && n++,
                  (o = ((o << 1) & 2047) | e.get(a, i)),
                  a >= 10 && (1488 === o || 93 === o) && n++);
            }
            return 40 * n;
          }),
          (t.getPenaltyN4 = function (e) {
            let t = 0;
            const n = e.data.length;
            for (let r = 0; r < n; r++) t += e.data[r];
            return 10 * Math.abs(Math.ceil((100 * t) / n / 5) - 10);
          }),
          (t.applyMask = function (e, t) {
            const r = t.size;
            for (let o = 0; o < r; o++)
              for (let i = 0; i < r; i++)
                t.isReserved(i, o) || t.xor(i, o, n(e, i, o));
          }),
          (t.getBestMask = function (e, n) {
            const r = Object.keys(t.Patterns).length;
            let o = 0,
              i = 1 / 0;
            for (let a = 0; a < r; a++) {
              (n(a), t.applyMask(a, e));
              const r =
                t.getPenaltyN1(e) +
                t.getPenaltyN2(e) +
                t.getPenaltyN3(e) +
                t.getPenaltyN4(e);
              (t.applyMask(a, e), r < i && ((i = r), (o = a)));
            }
            return o;
          }));
      },
      1333: (e) => {
        e.exports = function () {
          return (
            "function" == typeof Promise &&
            Promise.prototype &&
            Promise.prototype.then
          );
        };
      },
      1427: (e, t, n) => {
        const r = n(6886),
          o = n(7518),
          i = n(9953),
          a = n(208),
          l = n(1878),
          s = r.getBCHDigit(7973);
        function u(e, t) {
          return a.getCharCountIndicator(e, t) + 4;
        }
        function c(e, t) {
          let n = 0;
          return (
            e.forEach(function (e) {
              const r = u(e.mode, t);
              n += r + e.getBitsLength();
            }),
            n
          );
        }
        ((t.from = function (e, t) {
          return l.isValid(e) ? parseInt(e, 10) : t;
        }),
          (t.getCapacity = function (e, t, n) {
            if (!l.isValid(e)) throw new Error("Invalid QR Code version");
            void 0 === n && (n = a.BYTE);
            const i =
              8 *
              (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
            if (n === a.MIXED) return i;
            const s = i - u(n, e);
            switch (n) {
              case a.NUMERIC:
                return Math.floor((s / 10) * 3);
              case a.ALPHANUMERIC:
                return Math.floor((s / 11) * 2);
              case a.KANJI:
                return Math.floor(s / 13);
              case a.BYTE:
              default:
                return Math.floor(s / 8);
            }
          }),
          (t.getBestVersionForData = function (e, n) {
            let r;
            const o = i.from(n, i.M);
            if (Array.isArray(e)) {
              if (e.length > 1)
                return (function (e, n) {
                  for (let r = 1; r <= 40; r++)
                    if (c(e, r) <= t.getCapacity(r, n, a.MIXED)) return r;
                })(e, o);
              if (0 === e.length) return 1;
              r = e[0];
            } else r = e;
            return (function (e, n, r) {
              for (let o = 1; o <= 40; o++)
                if (n <= t.getCapacity(o, r, e)) return o;
            })(r.mode, r.getLength(), o);
          }),
          (t.getEncodedBits = function (e) {
            if (!l.isValid(e) || e < 7)
              throw new Error("Invalid QR Code version");
            let t = e << 12;
            for (; r.getBCHDigit(t) - s >= 0; )
              t ^= 7973 << (r.getBCHDigit(t) - s);
            return (e << 12) | t;
          }));
      },
      1433: (e, t, n) => {
        const r = n(208),
          o = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            " ",
            "$",
            "%",
            "*",
            "+",
            "-",
            ".",
            "/",
            ":",
          ];
        function i(e) {
          ((this.mode = r.ALPHANUMERIC), (this.data = e));
        }
        ((i.getBitsLength = function (e) {
          return 11 * Math.floor(e / 2) + (e % 2) * 6;
        }),
          (i.prototype.getLength = function () {
            return this.data.length;
          }),
          (i.prototype.getBitsLength = function () {
            return i.getBitsLength(this.data.length);
          }),
          (i.prototype.write = function (e) {
            let t;
            for (t = 0; t + 2 <= this.data.length; t += 2) {
              let n = 45 * o.indexOf(this.data[t]);
              ((n += o.indexOf(this.data[t + 1])), e.put(n, 11));
            }
            this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6);
          }),
          (e.exports = i));
      },
      1587: (e, t, n) => {
        "use strict";
        var r = n(4994);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.normalizeParameters = t.defaultParameters = void 0));
        var o = r(n(3693));
        function i(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function a(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(n), !0).forEach(function (t) {
                  (0, o.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        t.defaultParameters = {
          url: "",
          promptPrefix: "Scan or visit",
          promptSuffix: "to continue",
          vrPromptPrefix: "or visit",
          logoSrc: "",
          logoAlt: "Logo",
          backgroundSrc: "",
          backgroundColor: "linear-gradient(#464766, #2D2E43)",
          backgroundBlur: 0,
          mediaSrc: "",
          mediaAlt: "Preview",
          mediaAutoplay: !0,
          mediaAnimation: "",
          mediaControls: "minimal",
          font: "'Nunito-SemiBold', 'Nunito', sans-serif",
          textColor: "white",
          textShadow: !1,
          sceneEnvMap: "field",
          sceneOrbitIdle: "spin",
          sceneOrbitInteraction: "drag",
          sceneLightingIntensity: 1,
        };
        var l = ["none", "spin", "bounce"],
          s = ["drag", "none"],
          u = function (e, t) {
            return e.includes(t) ? t : e[0];
          };
        t.normalizeParameters = function (e) {
          return a(
            a({}, e),
            {},
            {
              sceneOrbitIdle: u(l, e.sceneOrbitIdle),
              sceneOrbitInteraction: u(s, e.sceneOrbitInteraction),
              sceneLightingIntensity:
                ((t = e.sceneLightingIntensity),
                (n = NaN),
                "string" == typeof t
                  ? (n = parseFloat(t))
                  : "number" == typeof t && (n = t),
                Number.isNaN(n) ? 1 : n),
            },
          );
          var t, n;
        };
      },
      1791: (e, t, n) => {
        var r = n(5172),
          o = n(5546);
        ((e.exports = function e(t, n) {
          function i(e, o, a, l) {
            try {
              var s = t[e](o),
                u = s.value;
              return u instanceof r
                ? n.resolve(u.v).then(
                    function (e) {
                      i("next", e, a, l);
                    },
                    function (e) {
                      i("throw", e, a, l);
                    },
                  )
                : n.resolve(u).then(
                    function (e) {
                      ((s.value = e), a(s));
                    },
                    function (e) {
                      return i("throw", e, a, l);
                    },
                  );
            } catch (e) {
              l(e);
            }
          }
          var a;
          (this.next ||
            (o(e.prototype),
            o(
              e.prototype,
              ("function" == typeof Symbol && Symbol.asyncIterator) ||
                "@asyncIterator",
              function () {
                return this;
              },
            )),
            o(
              this,
              "_invoke",
              function (e, t, r) {
                function o() {
                  return new n(function (t, n) {
                    i(e, r, t, n);
                  });
                }
                return (a = a ? a.then(o, o) : o());
              },
              !0,
            ));
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      1829: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/pastel-d9670995a124f4dd0df4.png";
      },
      1842: (e, t, n) => {
        "use strict";
        var r = n(4994);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.showAlmostThereCollisionError =
            t.showAlmostThere =
            t.hideAlmostThere =
              void 0));
        var o = r(n(9700)),
          i = r(n(3123)),
          a = null,
          l = function (e) {
            document.getElementById(e).classList.remove("hidden");
          },
          s = (t.hideAlmostThere = function () {
            a && (a.parentNode.removeChild(a), (a = null));
          }),
          u =
            ((t.showAlmostThere = function (e, t) {
              s();
              var n = document.createElement("template");
              ((n.innerHTML = o.default.trim()),
                (a = n.content.firstChild),
                document.getElementsByTagName("body")[0].appendChild(a));
              for (
                var r = t || window.location.href,
                  u = a.querySelectorAll(".desktop-home-link"),
                  c = 0;
                c < u.length;
                c++
              )
                u[c].textContent = r;
              var d = XR8.XrDevice.incompatibleReasons(e),
                f = XR8.XrDevice.incompatibleReasonDetails(e),
                p = XR8.XrDevice.deviceEstimate(),
                h = document.querySelector('meta[property="og:image"]'),
                g = h && h.content;
              Array.from(document.querySelectorAll(".app-header-img")).forEach(
                function (e) {
                  g
                    ? (e.src = g)
                    : (e.classList.add("foreground-image"),
                      (e.src = i.default));
                },
              );
              var _ = document.getElementById("error_copy_link_btn");
              if (
                (_.addEventListener("click", function () {
                  var e = document.createElement("input");
                  (document.body.appendChild(e),
                    (e.value = r),
                    e.select(),
                    document.execCommand("copy"),
                    document.body.removeChild(e),
                    (_.innerHTML = "Copied!"),
                    _.classList.add("error-copy-link-copied"));
                }),
                d.includes(
                  XR8.XrDevice.IncompatibilityReasons.UNSUPPORTED_BROWSER,
                ) && "iOS" === p.os)
              ) {
                if ("Safari" === f.inAppBrowserType)
                  l("error_msg_open_in_safari");
                else
                  switch (f.inAppBrowser) {
                    case "Instagram":
                    case "Facebook":
                    case "WeChat":
                    case "LinkedIn":
                    case "QQ":
                    case "Sino Weibo":
                    case "Snapchat":
                      (l("error_msg_open_in_safari"),
                        l("error_text_header_top"),
                        l("top_corner_open_safari"),
                        "Instagram" === f.inAppBrowser &&
                          document.body.classList.add("bottombarbump"));
                      break;
                    case "Facebook Messenger":
                    case "Kakao Talk":
                    case "Naver":
                      (l("error_msg_open_in_safari"),
                        l("error_text_header_bottom"),
                        l("bottom_corner_open_safari"));
                      break;
                    case "Line":
                    case "Mozilla Firefox Focus":
                      (l("error_msg_open_in_safari"),
                        l("error_text_header_top"),
                        l("top_close_open_safari"));
                      break;
                    default:
                      l("error_unknown_webview");
                  }
                return !0;
              }
              if (
                d.includes(
                  XR8.XrDevice.IncompatibilityReasons.MISSING_WEB_ASSEMBLY,
                )
              ) {
                if ("iOS" === p.os)
                  return (l("error_msg_web_assembly_ios"), !0);
                if ("Android" === p.os)
                  return (l("error_msg_web_assembly_android"), !0);
              }
              return "iOS" === p.os
                ? (l("error_unknown_webview"),
                  l("error_text_header_unknown"),
                  !0)
                : "Android" === p.os &&
                    (l("error_msg_android_almost_there"),
                    "Huawei" === p.manufacturer
                      ? l("error_msg_detail_huawei_almost_there")
                      : l("error_msg_detail_android_almost_there"),
                    !0);
            }),
            !1);
        t.showAlmostThereCollisionError = function () {
          u ||
            (console.error(
              "[Landing Page] XRExtras Almost There should not be used with Landing Page.",
            ),
            (u = !0));
        };
      },
      1878: (e, t) => {
        t.isValid = function (e) {
          return !isNaN(e) && e >= 1 && e <= 40;
        };
      },
      1991: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/Nunito-Regular-1c6859b0d94c85eeab14.ttf";
      },
      2060: (e, t, n) => {
        "use strict";
        var r = n(4994);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.useElementSize = void 0));
        var o = r(n(5715)),
          i = n(5994);
        t.useElementSize = function (e) {
          var t = (0, i.useState)(null),
            n = (0, o.default)(t, 2),
            r = n[0],
            a = n[1],
            l = (0, i.useMemo)(function () {
              return window.ResizeObserver
                ? new window.ResizeObserver(function (e) {
                    var t,
                      n =
                        null === (t = e[0]) || void 0 === t
                          ? void 0
                          : t.contentRect;
                    n && a({ width: n.width, height: n.height });
                  })
                : null;
            }, []);
          return (
            (0, i.useLayoutEffect)(
              function () {
                if (l) {
                  var t = e.current;
                  return (
                    l.observe(t),
                    function () {
                      l.unobserve(t);
                    }
                  );
                }
              },
              [l, e],
            ),
            r
          );
        };
      },
      2076: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => i });
        var r = n(6314),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          '#almostthereContainer{z-index:820;background-color:#101118}.xrextras-old-style #almostthereContainer{background-color:#fff}#qrcode{background-color:white;margin:0 auto;width:250px;height:250px;padding:8px;border-radius:20px;box-sizing:content-box}#qrcode>svg{width:100%;display:block}.arrow-top-corner{position:fixed;top:3%;right:1.5%;height:36px}.arrow-top-close{position:fixed;top:3%;right:12.5%;height:36px}.arrow-bottom-close{position:fixed;bottom:3%;right:15%;height:36px;-moz-transform:scale(-1, -1);-o-transform:scale(-1, -1);-webkit-transform:scale(-1, -1);transform:scale(-1, -1)}.arrow-bottom-corner{position:fixed;bottom:3%;right:2%;height:36px;-moz-transform:scale(-1, -1);-o-transform:scale(-1, -1);-webkit-transform:scale(-1, -1);transform:scale(-1, -1)}.app-header-img{position:fixed;width:100vw;max-width:500px;left:50%;top:50%;transform:translateX(-50%) translateY(-50%)}.app-header-img.unknown{position:fixed;width:100vw;max-width:500px;left:50%;top:43%;transform:translateX(-50%) translateY(-57%)}.poweredby-img{width:35vw;max-width:200px;position:fixed;bottom:2%;left:50%;transform:translateX(-50%)}.poweredby-img.desktop{width:200px;bottom:5%}.bottombarbump .poweredby-img{bottom:15%}#error_msg_open_in_safari{background-color:#101118}.xrextras-old-style #error_msg_open_in_safari{background-color:white}.open-header-top{font-family:"Nunito-SemiBold",sans-serif;color:white;letter-spacing:.37;font-size:1em;position:fixed;top:0%;left:50%;transform:translateX(-50%)}.xrextras-old-style .open-header-top{color:#323232}.open-header-bottom{font-family:"Nunito-SemiBold",sans-serif;color:white;letter-spacing:.37;font-size:1em;position:fixed;top:10%;left:50%;transform:translateX(-50%)}.xrextras-old-style .open-header-bottom{color:#323232}.open-header-unknown{font-family:"Nunito-SemiBold",sans-serif;color:white;letter-spacing:.37;font-size:1em;position:fixed;top:5%;left:50%;transform:translateX(-50%)}.xrextras-old-style .open-header-unknown{color:#323232}.desktop-message{font-family:"Nunito-SemiBold",sans-serif;margin:0 auto;margin-top:1vh;width:500px;color:white;font-size:24pt;line-height:1em}.xrextras-old-style .desktop-message{color:#323232}.desktop-hint{font-family:"Nunito",sans-serif;font-size:14pt;color:#fff;line-height:2em;margin-top:2vh;letter-spacing:.37}.xrextras-old-style .desktop-hint{color:#323232}.copy-link-btn{position:fixed;bottom:20%;left:50%;transform:translateX(-50%);font-family:"Nunito-SemiBold",sans-serif;font-weight:800;font-size:1.1em;text-align:center;color:white;text-decoration:none;border:none;background-color:#ad50ff;padding:6px 13px;border-radius:10px}.xrextras-old-style .copy-link-btn{background-color:#7611b7}.error-copy-link-copied{background-color:#8083a2 !important}.safari-hero-image{max-height:30vmin}',
          "",
        ]);
        const i = o;
      },
      2242: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BlankView = void 0));
        var o = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != r(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (o.get || o.set)
                    ? n(i, a, o)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          i = n(7933),
          a = n(1230),
          l = n(3351);
        t.BlankView = function (e) {
          return o.h(
            l.ViewContainer,
            {
              backgroundColor: e.backgroundColor,
              backgroundSrc: e.backgroundSrc,
              backgroundBlur: e.backgroundBlur,
            },
            o.h(
              "div",
              {
                className: "landing8-blank-view ".concat(
                  e.textShadow ? "landing8-text-shadow" : "",
                ),
                style: { color: e.textColor, fontFamily: e.font },
              },
              o.h(a.UrlPromptSection, {
                url: e.url,
                promptPrefix: e.promptPrefix,
                promptSuffix: e.promptSuffix,
                vrPromptPrefix: e.vrPromptPrefix,
              }),
              o.h(i.LogoSection, null),
            ),
          );
        };
      },
      2422: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/Nunito-SemiBold-30a2630500a6934f6e62.ttf";
      },
      2483: (e, t) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getModelBoundingBox = void 0));
        var n = {
            xmax: -1 / 0,
            xmin: 1 / 0,
            ymax: -1 / 0,
            ymin: 1 / 0,
            zmax: -1 / 0,
            zmin: 1 / 0,
          },
          r = function (e, t) {
            return {
              xmax: Math.max(e.xmax, t.xmax),
              xmin: Math.min(e.xmin, t.xmin),
              ymax: Math.max(e.ymax, t.ymax),
              ymin: Math.min(e.ymin, t.ymin),
              zmax: Math.max(e.zmax, t.zmax),
              zmin: Math.min(e.zmin, t.zmin),
            };
          },
          o = function (e, t) {
            return r(
              (function (e) {
                e.updateMatrixWorld();
                var t = new window.THREE.Box3().setFromObject(e);
                return {
                  xmax: t.max.x,
                  xmin: t.min.x,
                  ymax: t.max.y,
                  ymin: t.min.y,
                  zmax: t.max.z,
                  zmin: t.min.z,
                };
              })(t),
              e,
            );
          },
          i = function (e, t) {
            return r(
              (function (e) {
                return e.children && e.children.length
                  ? e.children.reduce(o, n)
                  : n;
              })(t),
              e,
            );
          };
        t.getModelBoundingBox = function (e) {
          return (e.scenes && e.scenes.length ? e.scenes : [e.scene]).reduce(
            i,
            n,
          );
        };
      },
      2587: (e, t, n) => {
        "use strict";
        var r = n(4994);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.aframeComponent = void 0));
        var o = r(n(3693)),
          i = n(1842),
          a = n(7535),
          l = n(1587);
        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? s(Object(n), !0).forEach(function (t) {
                  (0, o.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : s(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        var c = function (e) {
          var t;
          return e && e.startsWith("#")
            ? null === (t = document.querySelector(e)) || void 0 === t
              ? void 0
              : t.getAttribute("src")
            : e;
        };
        t.aframeComponent = function () {
          return {
            schema:
              ((e = {}),
              Object.keys(l.defaultParameters).forEach(function (t) {
                e[t] = { default: l.defaultParameters[t] };
              }),
              e),
            init: function () {
              var e = (0, a.pipelineModule)();
              ((this.moduleName = e.name),
                XR8.addCameraPipelineModule(e),
                this.el.attributes["xrextras-almost-there"] &&
                  (0, i.showAlmostThereCollisionError)());
            },
            update: function () {
              (0, a.configure)(
                u(
                  u({}, this.data),
                  {},
                  {
                    mediaSrc: c(this.data.mediaSrc),
                    logoSrc: c(this.data.logoSrc),
                    backgroundSrc: c(this.data.backgroundSrc),
                    sceneEnvMap: c(this.data.sceneEnvMap),
                  },
                ),
              );
            },
            remove: function () {
              XR8.removeCameraPipelineModule(this.moduleName);
            },
          };
          var e;
        };
      },
      2604: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ModelScene = void 0));
        var o = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != r(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (o.get || o.set)
                    ? n(i, a, o)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          i = n(5994),
          a = n(3711),
          l = n(5034);
        t.ModelScene = function (e) {
          var t = e.mediaSrc,
            n = e.mediaAnimation,
            r = e.sceneLightingIntensity,
            s = e.sceneOrbitIdle,
            u = e.sceneOrbitInteraction,
            c = e.sceneEnvMap,
            d = e.onError,
            f = (0, i.useRef)(),
            p = (0, i.useRef)();
          return (
            (0, i.useEffect)(function () {
              return (
                (f.current = (0, a.createScene)(p.current)),
                function () {
                  f.current.destroy();
                }
              );
            }, []),
            (0, i.useEffect)(
              function () {
                f.current.setErrorHandler(d);
              },
              [d],
            ),
            (0, i.useEffect)(
              function () {
                f.current.setModelSrc(t);
              },
              [t],
            ),
            (0, i.useEffect)(
              function () {
                f.current.setMediaAnimation(n);
              },
              [n],
            ),
            (0, i.useEffect)(
              function () {
                f.current.setLightingIntensity(r);
              },
              [r],
            ),
            (0, i.useEffect)(
              function () {
                f.current.setOrbitIdle(s);
              },
              [s],
            ),
            (0, i.useEffect)(
              function () {
                f.current.setOrbitInteraction(u);
              },
              [u],
            ),
            (0, i.useEffect)(
              function () {
                f.current.setEnvMap(l.defaultMaps[c] || c);
              },
              [c],
            ),
            o.h("canvas", { ref: p, className: "landing8-model-canvas" })
          );
        };
      },
      2633: (e, t, n) => {
        "use strict";
        var r = n(4994);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.applyInferredParameters = void 0));
        var o = r(n(3693));
        function i(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function a(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(Object(n), !0).forEach(function (t) {
                  (0, o.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        var l = function (e, t) {
          var n;
          return null === (n = document.querySelector(e)) || void 0 === n
            ? void 0
            : n.getAttribute(t);
        };
        t.applyInferredParameters = function (e) {
          return a(
            a({}, e),
            {},
            {
              url:
                e.url ||
                ((t = l('meta[name="8thwall:shortlink"]', "content")),
                t
                  ? t.startsWith("http://") || t.startsWith("https://")
                    ? t
                    : "https://8th.io/".concat(t)
                  : null) ||
                l('link[rel="canonical"]', "href") ||
                l('meta[property="og:url"]', "content") ||
                window.location.href,
              mediaSrc: e.mediaSrc || l('meta[property="og:image"]', "content"),
            },
          );
          var t;
        };
      },
      2726: (e, t) => {
        function n(e) {
          if (
            ("number" == typeof e && (e = e.toString()), "string" != typeof e)
          )
            throw new Error("Color should be defined as hex string");
          let t = e.slice().replace("#", "").split("");
          if (t.length < 3 || 5 === t.length || t.length > 8)
            throw new Error("Invalid hex color: " + e);
          ((3 !== t.length && 4 !== t.length) ||
            (t = Array.prototype.concat.apply(
              [],
              t.map(function (e) {
                return [e, e];
              }),
            )),
            6 === t.length && t.push("F", "F"));
          const n = parseInt(t.join(""), 16);
          return {
            r: (n >> 24) & 255,
            g: (n >> 16) & 255,
            b: (n >> 8) & 255,
            a: 255 & n,
            hex: "#" + t.slice(0, 6).join(""),
          };
        }
        ((t.getOptions = function (e) {
          (e || (e = {}), e.color || (e.color = {}));
          const t =
              void 0 === e.margin || null === e.margin || e.margin < 0
                ? 4
                : e.margin,
            r = e.width && e.width >= 21 ? e.width : void 0,
            o = e.scale || 4;
          return {
            width: r,
            scale: r ? 4 : o,
            margin: t,
            color: {
              dark: n(e.color.dark || "#000000ff"),
              light: n(e.color.light || "#ffffffff"),
            },
            type: e.type,
            rendererOpts: e.rendererOpts || {},
          };
        }),
          (t.getScale = function (e, t) {
            return t.width && t.width >= e + 2 * t.margin
              ? t.width / (e + 2 * t.margin)
              : t.scale;
          }),
          (t.getImageWidth = function (e, n) {
            const r = t.getScale(e, n);
            return Math.floor((e + 2 * n.margin) * r);
          }),
          (t.qrToImageData = function (e, n, r) {
            const o = n.modules.size,
              i = n.modules.data,
              a = t.getScale(o, r),
              l = Math.floor((o + 2 * r.margin) * a),
              s = r.margin * a,
              u = [r.color.light, r.color.dark];
            for (let t = 0; t < l; t++)
              for (let n = 0; n < l; n++) {
                let c = 4 * (t * l + n),
                  d = r.color.light;
                (t >= s &&
                  n >= s &&
                  t < l - s &&
                  n < l - s &&
                  (d =
                    u[
                      i[Math.floor((t - s) / a) * o + Math.floor((n - s) / a)]
                        ? 1
                        : 0
                    ]),
                  (e[c++] = d.r),
                  (e[c++] = d.g),
                  (e[c++] = d.b),
                  (e[c] = d.a));
              }
          }));
      },
      2731: (e, t) => {
        const n = new Uint8Array(512),
          r = new Uint8Array(256);
        (!(function () {
          let e = 1;
          for (let t = 0; t < 255; t++)
            ((n[t] = e), (r[e] = t), (e <<= 1), 256 & e && (e ^= 285));
          for (let e = 255; e < 512; e++) n[e] = n[e - 255];
        })(),
          (t.log = function (e) {
            if (e < 1) throw new Error("log(" + e + ")");
            return r[e];
          }),
          (t.exp = function (e) {
            return n[e];
          }),
          (t.mul = function (e, t) {
            return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
          }));
      },
      2987: (e) => {
        ((e.exports = function (e) {
          if (Array.isArray(e)) return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      3123: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/safari-fallback-651a4291492cf0a55a49.png";
      },
      3351: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ViewContainer = void 0));
        var o = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              o,
              i = { __proto__: null, default: e };
            if (null === e || ("object" != r(e) && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (var a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((o =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (o.get || o.set)
                  ? n(i, a, o)
                  : (i[a] = e[a]));
            return i;
          })(e);
        })(n(172));
        t.ViewContainer = function (e) {
          var t = e.backgroundColor,
            n = e.backgroundSrc,
            r = e.backgroundBlur,
            i = e.children,
            a = e.centered,
            l = void 0 === a || a;
          return o.h(
            "div",
            { className: "landing8-container" },
            o.h("div", {
              className: "landing8-background",
              style: { background: t },
            }),
            n &&
              o.h("div", {
                className: "landing8-background-image",
                style: {
                  backgroundImage: n ? "url('".concat(n, "')") : void 0,
                  filter: r ? "blur(".concat(r, "vmax)") : void 0,
                  top: r ? "-".concat(r, "vmax") : 0,
                  left: r ? "-".concat(r, "vmax") : 0,
                  bottom: r ? "-".concat(r, "vmax") : 0,
                  right: r ? "-".concat(r, "vmax") : 0,
                },
              }),
            l ? o.h("div", { className: "landing8-centered-container" }, i) : i,
          );
        };
      },
      3467: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AttributionLogo = void 0));
        var o = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              o,
              i = { __proto__: null, default: e };
            if (null === e || ("object" != r(e) && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (var a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((o =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (o.get || o.set)
                  ? n(i, a, o)
                  : (i[a] = e[a]));
            return i;
          })(e);
        })(n(172));
        t.AttributionLogo = function () {
          return o.h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 137.462402 20.000031",
            className: "landing8-attribution-logo",
            role: "img",
            "aria-label": "powered by 8th Wall",
          });
        };
      },
      3693: (e, t, n) => {
        var r = n(7736);
        ((e.exports = function (e, t, n) {
          return (
            (t = r(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      3711: (e, t, n) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createScene = void 0));
        var r = n(2483);
        t.createScene = function (e) {
          var t = window.THREE,
            n = t,
            o = n.OrbitControls,
            i = n.GLTFLoader,
            a = new t.Scene(),
            l = new t.WebGLRenderer({ antialias: !0, alpha: !0, canvas: e });
          (l.setPixelRatio(window.devicePixelRatio),
            l.setSize(window.innerWidth, window.innerHeight),
            (l.outputColorSpace = t.SRGBColorSpace));
          var s = new t.PerspectiveCamera(
            80,
            window.innerWidth / window.innerHeight,
            1,
            1e3,
          );
          s.position.set(5, 5, 10);
          var u = new t.AmbientLight(12303291);
          ((u.intensity = 1), a.add(u));
          var c = new t.DirectionalLight(16777215);
          (c.position.set(-0.5, 1, 1).normalize(),
            (c.intensity = 0.6),
            a.add(c));
          var d = new t.Object3D();
          a.add(d);
          var f = new o(s, l.domElement);
          ((f.enablePan = !1),
            (f.minDistance = 7),
            (f.maxDistance = 35),
            f.target.set(0, 0, 0),
            f.update());
          var p = null,
            h = null,
            g = null,
            _ = Date.now(),
            m = null,
            v = null,
            y = null,
            b = new i(),
            w = new t.TextureLoader(),
            x = function () {
              ((s.aspect = window.innerWidth / window.innerHeight),
                s.updateProjectionMatrix(),
                l.setSize(window.innerWidth, window.innerHeight));
            },
            M = function (e) {
              var t = e - _;
              ((m = requestAnimationFrame(M)),
                l.render(a, s),
                f.update(),
                h && h.update(t / 1e3),
                (_ = e));
            },
            k = function () {
              var e;
              (h && (h.stopAllAction(), h.uncacheRoot(h.getRoot()), (h = null)),
                p &&
                  p.animations &&
                  (g
                    ? "none" === g
                      ? (e = [])
                      : "*" === g
                        ? (e = p.animations)
                        : (e = p.animations.filter(function (e) {
                            return e.name === g;
                          })).length ||
                          console.warn("[landing8] Unrecognized animation:", g)
                    : (e = p.animations.slice(0, 1)),
                  e.length &&
                    ((h = new t.AnimationMixer(p.scene)),
                    e
                      .map(function (e) {
                        return h.clipAction(e);
                      })
                      .forEach(function (e) {
                        ((e.enabled = !0), e.play());
                      }))));
            },
            P = function (e) {
              if ((p && (a.remove(p.scene), (p = null)), e)) {
                p = e;
                var t = (0, r.getModelBoundingBox)(p),
                  n =
                    9 /
                    Math.max(t.xmax - t.xmin, t.ymax - t.ymin, t.zmax - t.zmin);
                (d.scale.set(n, n, n),
                  d.position
                    .set(t.xmax + t.xmin, t.ymax + t.ymin, t.zmax + t.zmin)
                    .multiplyScalar(-0.5 * n),
                  d.add(p.scene),
                  k());
              }
            },
            E = function (e) {
              var n = w.load(e);
              return (
                (n.mapping = t.EquirectangularReflectionMapping),
                (n.colorSpace = t.SRGBColorSpace),
                n
              );
            };
          return (
            window.addEventListener("resize", x),
            M(_),
            {
              setModelSrc: function (e) {
                e
                  ? b.load(e, P, null, function (e) {
                      (console.error("Model load error: ", e), y && y());
                    })
                  : P(null);
              },
              setMediaAnimation: function (e) {
                ((g = e), p && k());
              },
              setLightingIntensity: function (e) {
                ((u.intensity = 1 * e), (c.intensity = 0.6 * e));
              },
              setOrbitIdle: function (e) {
                switch (e) {
                  case "spin":
                    ((f.maxAzimuthAngle = 1 / 0),
                      (f.minAzimuthAngle = -1 / 0),
                      (f.autoRotate = !0));
                    break;
                  case "none":
                    ((f.maxAzimuthAngle = 1 / 0),
                      (f.minAzimuthAngle = -1 / 0),
                      (f.autoRotate = !1));
                    break;
                  default:
                    console.warn("Unknown sceneOrbitIdle value:", e);
                }
              },
              setOrbitInteraction: function (e) {
                switch (e) {
                  case "drag":
                    f.enabled = !0;
                    break;
                  case "none":
                    f.enabled = !1;
                    break;
                  default:
                    console.warn("Unknown sceneOrbitInteraction value:", e);
                }
              },
              setEnvMap: function (e) {
                if (!e)
                  return ((a.environment = null), a.remove(v), void (v = null));
                ((a.environment = E(e)),
                  v
                    ? (v.material.map = E(e))
                    : ((v = new t.Mesh(
                        new t.SphereGeometry(500, 60, 40).scale(-1, 1, 1),
                        new t.MeshBasicMaterial({ map: E(e) }),
                      )).rotateY(Math.PI),
                      a.add(v)));
              },
              setErrorHandler: function (e) {
                y = e;
              },
              destroy: function () {
                (f.dispose(),
                  cancelAnimationFrame(m),
                  window.removeEventListener("resize", x),
                  (y = null));
              },
            }
          );
        };
      },
      3738: (e) => {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        ((e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      4215: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FacebookMessengerButton = void 0));
        var o = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != r(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (o.get || o.set)
                    ? n(i, a, o)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          i = function (e) {
            var t = new URLSearchParams({
              link: e,
              redirect_uri: e,
              app_id: "<REMOVED_BEFORE_OPEN_SOURCING>",
            });
            return "https://www.facebook.com/dialog/send?".concat(t.toString());
          };
        t.FacebookMessengerButton = function (e) {
          var t = e.url;
          return o.h(
            "a",
            { className: "landing8-facebook-messenger-button", href: i(t) },
            o.h(
              "svg",
              {
                width: "24",
                height: "24",
                xmlns: "http://www.w3.org/2000/svg",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                "aria-hidden": "true",
                className: "landing8-facebook-messenger-icon",
              },
              o.h("path", {
                fill: "currentColor",
                d: "M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z",
              }),
            ),
            "Send to Messenger",
          );
        };
      },
      4260: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/field-ee8ae872176648572ef9.jpg";
      },
      4357: (e, t, n) => {
        const r = n(208);
        function o(e) {
          ((this.mode = r.NUMERIC), (this.data = e.toString()));
        }
        ((o.getBitsLength = function (e) {
          return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
        }),
          (o.prototype.getLength = function () {
            return this.data.length;
          }),
          (o.prototype.getBitsLength = function () {
            return o.getBitsLength(this.data.length);
          }),
          (o.prototype.write = function (e) {
            let t, n, r;
            for (t = 0; t + 3 <= this.data.length; t += 3)
              ((n = this.data.substr(t, 3)),
                (r = parseInt(n, 10)),
                e.put(r, 10));
            const o = this.data.length - t;
            o > 0 &&
              ((n = this.data.substr(t)),
              (r = parseInt(n, 10)),
              e.put(r, 3 * o + 1));
          }),
          (e.exports = o));
      },
      4373: (e) => {
        ((e.exports = function (e) {
          var t = Object(e),
            n = [];
          for (var r in t) n.unshift(r);
          return function e() {
            for (; n.length; )
              if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
            return ((e.done = !0), e);
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      4385: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                t.hash && (e += t.hash),
                t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e)
                  ? '"'.concat(e, '"')
                  : e)
              : e
          );
        };
      },
      4417: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            "string" != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : e)
          );
        };
      },
      4565: (e, t, n) => {
        const r = n(6886),
          o = r.getBCHDigit(1335);
        t.getEncodedBits = function (e, t) {
          const n = (e.bit << 3) | t;
          let i = n << 10;
          for (; r.getBCHDigit(i) - o >= 0; )
            i ^= 1335 << (r.getBCHDigit(i) - o);
          return 21522 ^ ((n << 10) | i);
        };
      },
      4572: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/sound-off-6132727c7910ba93733a.svg";
      },
      4633: (e, t, n) => {
        var r = n(5172),
          o = n(6993),
          i = n(5869),
          a = n(887),
          l = n(1791),
          s = n(4373),
          u = n(579);
        function c() {
          "use strict";
          var t = o(),
            n = t.m(c),
            d = (Object.getPrototypeOf ? Object.getPrototypeOf(n) : n.__proto__)
              .constructor;
          function f(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }
          var p = { throw: 1, return: 2, break: 3, continue: 3 };
          function h(e) {
            var t, n;
            return function (r) {
              (t ||
                ((t = {
                  stop: function () {
                    return n(r.a, 2);
                  },
                  catch: function () {
                    return r.v;
                  },
                  abrupt: function (e, t) {
                    return n(r.a, p[e], t);
                  },
                  delegateYield: function (e, o, i) {
                    return ((t.resultName = o), n(r.d, u(e), i));
                  },
                  finish: function (e) {
                    return n(r.f, e);
                  },
                }),
                (n = function (e, n, o) {
                  ((r.p = t.prev), (r.n = t.next));
                  try {
                    return e(n, o);
                  } finally {
                    t.next = r.n;
                  }
                })),
                t.resultName &&
                  ((t[t.resultName] = r.v), (t.resultName = void 0)),
                (t.sent = r.v),
                (t.next = r.n));
              try {
                return e.call(this, t);
              } finally {
                ((r.p = t.prev), (r.n = t.next));
              }
            };
          }
          return ((e.exports = c =
            function () {
              return {
                wrap: function (e, n, r, o) {
                  return t.w(h(e), n, r, o && o.reverse());
                },
                isGeneratorFunction: f,
                mark: t.m,
                awrap: function (e, t) {
                  return new r(e, t);
                },
                AsyncIterator: l,
                async: function (e, t, n, r, o) {
                  return (f(t) ? a : i)(h(e), t, n, r, o);
                },
                keys: s,
                values: u,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))();
        }
        ((e.exports = c),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      4634: (e) => {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        ((e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      4713: (e, t, n) => {
        const r = n(2731);
        ((t.mul = function (e, t) {
          const n = new Uint8Array(e.length + t.length - 1);
          for (let o = 0; o < e.length; o++)
            for (let i = 0; i < t.length; i++) n[o + i] ^= r.mul(e[o], t[i]);
          return n;
        }),
          (t.mod = function (e, t) {
            let n = new Uint8Array(e);
            for (; n.length - t.length >= 0; ) {
              const e = n[0];
              for (let o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], e);
              let o = 0;
              for (; o < n.length && 0 === n[o]; ) o++;
              n = n.slice(o);
            }
            return n;
          }),
          (t.generateECPolynomial = function (e) {
            let n = new Uint8Array([1]);
            for (let o = 0; o < e; o++)
              n = t.mul(n, new Uint8Array([1, r.exp(o)]));
            return n;
          }));
      },
      4727: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/hill-99295806f2cf596c3190.jpg";
      },
      4756: (e, t, n) => {
        var r = n(4633)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
      4764: (e, t, n) => {
        const r = n(4713);
        function o(e) {
          ((this.genPoly = void 0),
            (this.degree = e),
            this.degree && this.initialize(this.degree));
        }
        ((o.prototype.initialize = function (e) {
          ((this.degree = e),
            (this.genPoly = r.generateECPolynomial(this.degree)));
        }),
          (o.prototype.encode = function (e) {
            if (!this.genPoly) throw new Error("Encoder not initialized");
            const t = new Uint8Array(e.length + this.degree);
            t.set(e);
            const n = r.mod(t, this.genPoly),
              o = this.degree - n.length;
            if (o > 0) {
              const e = new Uint8Array(this.degree);
              return (e.set(n, o), e);
            }
            return n;
          }),
          (e.exports = o));
      },
      4848: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.YoutubeMediaEmbed = void 0));
        var o = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != r(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (o.get || o.set)
                    ? n(i, a, o)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          i = n(5994);
        t.YoutubeMediaEmbed = function (e) {
          var t = e.videoId,
            n = e.onSizeChange,
            r = e.autoplay;
          (0, i.useEffect)(
            function () {
              n({ width: 1600, height: 900 });
            },
            [t],
          );
          var a = r ? "&autoplay=1&mute=1" : "",
            l = ""
              .concat("https://www.youtube.com/embed/")
              .concat(t, "?modestbranding=1&loop=1&playlist=")
              .concat(t)
              .concat(a);
          return o.h(
            "div",
            { className: "landing8-media-embed" },
            o.h("iframe", {
              src: l,
              width: "160",
              height: "90",
              title: "Video Player",
              frameBorder: "0",
              allow: "autoplay; fullscreen; picture-in-picture",
              allowFullScreen: !0,
            }),
          );
        };
      },
      4861: (e, t, n) => {
        const r = n(208),
          o = n(6886);
        function i(e) {
          ((this.mode = r.KANJI), (this.data = e));
        }
        ((i.getBitsLength = function (e) {
          return 13 * e;
        }),
          (i.prototype.getLength = function () {
            return this.data.length;
          }),
          (i.prototype.getBitsLength = function () {
            return i.getBitsLength(this.data.length);
          }),
          (i.prototype.write = function (e) {
            let t;
            for (t = 0; t < this.data.length; t++) {
              let n = o.toSJIS(this.data[t]);
              if (n >= 33088 && n <= 40956) n -= 33088;
              else {
                if (!(n >= 57408 && n <= 60351))
                  throw new Error(
                    "Invalid SJIS character: " +
                      this.data[t] +
                      "\nMake sure your charset is UTF-8",
                  );
                n -= 49472;
              }
              ((n = 192 * ((n >>> 8) & 255) + (255 & n)), e.put(n, 13));
            }
          }),
          (e.exports = i));
      },
      4988: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => _ });
        var r = n(6314),
          o = n.n(r),
          i = n(4417),
          a = n.n(i),
          l = n(5573),
          s = n(1991),
          u = n(5014),
          c = n(2422),
          d = o()(function (e) {
            return e[1];
          }),
          f = a()(l),
          p = a()(s),
          h = a()(u),
          g = a()(c);
        d.push([
          e.id,
          '@font-face{font-family:"Nunito";src:url(' +
            f +
            ') format("woff"),url(' +
            p +
            ') format("truetype")}@font-face{font-family:"Nunito-SemiBold";src:url(' +
            h +
            ') format("woff"),url(' +
            g +
            ') format("truetype")}',
          "",
        ]);
        const _ = d;
      },
      4994: (e) => {
        ((e.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      5014: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/Nunito-SemiBold-51aac6462452f9d89a71.woff";
      },
      5034: (e, t, n) => {
        "use strict";
        var r = n(4994);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultMaps = void 0));
        var o = r(n(4260)),
          i = r(n(4727)),
          a = r(n(8651)),
          l = r(n(1829)),
          s = r(n(7806));
        t.defaultMaps = {
          field: o.default,
          hill: i.default,
          city: a.default,
          pastel: l.default,
          space: s.default,
        };
      },
      5056: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      5072: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], l = 0; l < e.length; l++) {
            var s = e[l],
              u = r.base ? s[0] + r.base : s[0],
              c = i[u] || 0,
              d = "".concat(u, " ").concat(c);
            i[u] = c + 1;
            var f = n(d),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) (t[f].references++, t[f].updater(p));
            else {
              var h = o(p, r);
              ((r.byIndex = l),
                t.splice(l, 0, { identifier: d, updater: h, references: 1 }));
            }
            a.push(d);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var l = n(i[a]);
              t[l].references--;
            }
            for (var s = r(e, o), u = 0; u < i.length; u++) {
              var c = n(i[u]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            i = s;
          };
        };
      },
      5172: (e) => {
        ((e.exports = function (e, t) {
          ((this.v = e), (this.k = t));
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      5497: (e, t, n) => {
        "use strict";
        var r = n(4994),
          o = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ModelView = void 0));
        var i = r(n(5715)),
          a = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                r,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != o(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((r =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (r.get || r.set)
                    ? n(i, a, r)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          l = n(5994),
          s = n(3351),
          u = n(7933),
          c = n(1230),
          d = n(2604),
          f = n(7935);
        t.ModelView = function (e) {
          var t = (0, l.useState)(!1),
            n = (0, i.default)(t, 2),
            r = n[0],
            o = n[1];
          return (
            (0, l.useEffect)(function () {
              var t = !0;
              return (
                (0, f.loadThreeJs)()
                  .then(function () {
                    t && o(!0);
                  })
                  .catch(function (n) {
                    (console.error("Error loading model view", n),
                      t && e.onError());
                  }),
                function () {
                  t = !1;
                }
              );
            }, []),
            a.h(
              s.ViewContainer,
              {
                backgroundColor: e.backgroundColor,
                backgroundSrc: e.backgroundSrc,
                backgroundBlur: e.backgroundBlur,
              },
              a.h(
                "div",
                {
                  className: "landing8-model-viewer-info ".concat(
                    e.textShadow ? "landing8-text-shadow" : "",
                  ),
                  style: { color: e.textColor, fontFamily: e.font },
                },
                a.h(c.UrlPromptSection, {
                  url: e.url,
                  promptPrefix: e.promptPrefix,
                  promptSuffix: e.promptSuffix,
                  vrPromptPrefix: e.vrPromptPrefix,
                }),
                a.h(u.LogoSection, { logoSrc: e.logoSrc, logoAlt: e.logoAlt }),
              ),
              r && a.h(d.ModelScene, e),
            )
          );
        };
      },
      5546: (e) => {
        function t(n, r, o, i) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (n) {
            a = 0;
          }
          ((e.exports = t =
            function (e, n, r, o) {
              function i(n, r) {
                t(e, n, function (e) {
                  return this._invoke(n, r, e);
                });
              }
              n
                ? a
                  ? a(e, n, {
                      value: r,
                      enumerable: !o,
                      configurable: !o,
                      writable: !o,
                    })
                  : (e[n] = r)
                : (i("next", 0), i("throw", 1), i("return", 2));
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n, r, o, i));
        }
        ((e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      5573: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/Nunito-Regular-e8aadc1b678fa56c9d09.woff";
      },
      5715: (e, t, n) => {
        var r = n(2987),
          o = n(1156),
          i = n(7122),
          a = n(7752);
        ((e.exports = function (e, t) {
          return r(e) || o(e, t) || i(e, t) || a();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      5822: (e, t, n) => {
        const r = n(208);
        function o(e) {
          ((this.mode = r.BYTE),
            (this.data =
              "string" == typeof e
                ? new TextEncoder().encode(e)
                : new Uint8Array(e)));
        }
        ((o.getBitsLength = function (e) {
          return 8 * e;
        }),
          (o.prototype.getLength = function () {
            return this.data.length;
          }),
          (o.prototype.getBitsLength = function () {
            return o.getBitsLength(this.data.length);
          }),
          (o.prototype.write = function (e) {
            for (let t = 0, n = this.data.length; t < n; t++)
              e.put(this.data[t], 8);
          }),
          (e.exports = o));
      },
      5869: (e, t, n) => {
        var r = n(887);
        ((e.exports = function (e, t, n, o, i) {
          var a = r(e, t, n, o, i);
          return a.next().then(function (e) {
            return e.done ? e.value : a.next();
          });
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      5994: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, {
            useCallback: () => P,
            useContext: () => E,
            useDebugValue: () => S,
            useEffect: () => b,
            useErrorBoundary: () => O,
            useId: () => C,
            useImperativeHandle: () => M,
            useLayoutEffect: () => w,
            useMemo: () => k,
            useReducer: () => y,
            useRef: () => x,
            useState: () => v,
          }));
        var r,
          o,
          i,
          a,
          l = n(172),
          s = 0,
          u = [],
          c = l.options,
          d = c.__b,
          f = c.__r,
          p = c.diffed,
          h = c.__c,
          g = c.unmount,
          _ = c.__;
        function m(e, t) {
          (c.__h && c.__h(o, e, s || t), (s = 0));
          var n = o.__H || (o.__H = { __: [], __h: [] });
          return (e >= n.__.length && n.__.push({}), n.__[e]);
        }
        function v(e) {
          return ((s = 1), y(B, e));
        }
        function y(e, t, n) {
          var i = m(r++, 2);
          if (
            ((i.t = e),
            !i.__c &&
              ((i.__ = [
                n ? n(t) : B(void 0, t),
                function (e) {
                  var t = i.__N ? i.__N[0] : i.__[0],
                    n = i.t(t, e);
                  t !== n && ((i.__N = [n, i.__[1]]), i.__c.setState({}));
                },
              ]),
              (i.__c = o),
              !o.__f))
          ) {
            var a = function (e, t, n) {
              if (!i.__c.__H) return !0;
              var r = i.__c.__H.__.filter(function (e) {
                return !!e.__c;
              });
              if (
                r.every(function (e) {
                  return !e.__N;
                })
              )
                return !l || l.call(this, e, t, n);
              var o = i.__c.props !== e;
              return (
                r.forEach(function (e) {
                  if (e.__N) {
                    var t = e.__[0];
                    ((e.__ = e.__N),
                      (e.__N = void 0),
                      t !== e.__[0] && (o = !0));
                  }
                }),
                (l && l.call(this, e, t, n)) || o
              );
            };
            o.__f = !0;
            var l = o.shouldComponentUpdate,
              s = o.componentWillUpdate;
            ((o.componentWillUpdate = function (e, t, n) {
              if (this.__e) {
                var r = l;
                ((l = void 0), a(e, t, n), (l = r));
              }
              s && s.call(this, e, t, n);
            }),
              (o.shouldComponentUpdate = a));
          }
          return i.__N || i.__;
        }
        function b(e, t) {
          var n = m(r++, 3);
          !c.__s && I(n.__H, t) && ((n.__ = e), (n.u = t), o.__H.__h.push(n));
        }
        function w(e, t) {
          var n = m(r++, 4);
          !c.__s && I(n.__H, t) && ((n.__ = e), (n.u = t), o.__h.push(n));
        }
        function x(e) {
          return (
            (s = 5),
            k(function () {
              return { current: e };
            }, [])
          );
        }
        function M(e, t, n) {
          ((s = 6),
            w(
              function () {
                if ("function" == typeof e) {
                  var n = e(t());
                  return function () {
                    (e(null), n && "function" == typeof n && n());
                  };
                }
                if (e)
                  return (
                    (e.current = t()),
                    function () {
                      return (e.current = null);
                    }
                  );
              },
              null == n ? n : n.concat(e),
            ));
        }
        function k(e, t) {
          var n = m(r++, 7);
          return (
            I(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)),
            n.__
          );
        }
        function P(e, t) {
          return (
            (s = 8),
            k(function () {
              return e;
            }, t)
          );
        }
        function E(e) {
          var t = o.context[e.__c],
            n = m(r++, 9);
          return (
            (n.c = e),
            t ? (null == n.__ && ((n.__ = !0), t.sub(o)), t.props.value) : e.__
          );
        }
        function S(e, t) {
          c.useDebugValue && c.useDebugValue(t ? t(e) : e);
        }
        function O(e) {
          var t = m(r++, 10),
            n = v();
          return (
            (t.__ = e),
            o.componentDidCatch ||
              (o.componentDidCatch = function (e, r) {
                (t.__ && t.__(e, r), n[1](e));
              }),
            [
              n[0],
              function () {
                n[1](void 0);
              },
            ]
          );
        }
        function C() {
          var e = m(r++, 11);
          if (!e.__) {
            for (var t = o.__v; null !== t && !t.__m && null !== t.__; )
              t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++;
          }
          return e.__;
        }
        function A() {
          for (var e; (e = u.shift()); )
            if (e.__P && e.__H)
              try {
                (e.__H.__h.forEach(T), e.__H.__h.forEach(R), (e.__H.__h = []));
              } catch (t) {
                ((e.__H.__h = []), c.__e(t, e.__v));
              }
        }
        ((c.__b = function (e) {
          ((o = null), d && d(e));
        }),
          (c.__ = function (e, t) {
            (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), _ && _(e, t));
          }),
          (c.__r = function (e) {
            (f && f(e), (r = 0));
            var t = (o = e.__c).__H;
            (t &&
              (i === o
                ? ((t.__h = []),
                  (o.__h = []),
                  t.__.forEach(function (e) {
                    (e.__N && (e.__ = e.__N), (e.u = e.__N = void 0));
                  }))
                : (t.__h.forEach(T), t.__h.forEach(R), (t.__h = []), (r = 0))),
              (i = o));
          }),
          (c.diffed = function (e) {
            p && p(e);
            var t = e.__c;
            (t &&
              t.__H &&
              (t.__H.__h.length &&
                ((1 !== u.push(t) && a === c.requestAnimationFrame) ||
                  ((a = c.requestAnimationFrame) || N)(A)),
              t.__H.__.forEach(function (e) {
                (e.u && (e.__H = e.u), (e.u = void 0));
              })),
              (i = o = null));
          }),
          (c.__c = function (e, t) {
            (t.some(function (e) {
              try {
                (e.__h.forEach(T),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || R(e);
                  })));
              } catch (n) {
                (t.some(function (e) {
                  e.__h && (e.__h = []);
                }),
                  (t = []),
                  c.__e(n, e.__v));
              }
            }),
              h && h(e, t));
          }),
          (c.unmount = function (e) {
            g && g(e);
            var t,
              n = e.__c;
            n &&
              n.__H &&
              (n.__H.__.forEach(function (e) {
                try {
                  T(e);
                } catch (e) {
                  t = e;
                }
              }),
              (n.__H = void 0),
              t && c.__e(t, n.__v));
          }));
        var j = "function" == typeof requestAnimationFrame;
        function N(e) {
          var t,
            n = function () {
              (clearTimeout(r), j && cancelAnimationFrame(t), setTimeout(e));
            },
            r = setTimeout(n, 35);
          j && (t = requestAnimationFrame(n));
        }
        function T(e) {
          var t = o,
            n = e.__c;
          ("function" == typeof n && ((e.__c = void 0), n()), (o = t));
        }
        function R(e) {
          var t = o;
          ((e.__c = e.__()), (o = t));
        }
        function I(e, t) {
          return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, n) {
              return t !== e[n];
            })
          );
        }
        function B(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
      },
      6100: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => i });
        var r = n(6314),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          '.landing8-container{position:fixed;top:0;left:0;bottom:0;right:0;z-index:815;box-sizing:border-box}.landing8-container *{box-sizing:inherit}.landing8-background{position:absolute;top:0;left:0;bottom:0;right:0;z-index:-2}.landing8-background-image{position:absolute;z-index:-1;background-position:center;background-repeat:no-repeat;background-size:cover}.landing8-centered-container{position:absolute;top:0;left:0;bottom:0;right:0;overflow:auto;display:grid;justify-content:center;align-items:center}.landing8-media-view{padding:16px}.landing8-view-loading{opacity:0;transform:scale(0.97)}.landing8-view-transition{transition:.3s opacity,.3s transform}.landing8-logo{display:block;max-width:100%;height:auto;max-height:168px;margin-bottom:24px}.landing8-attribution-logo{margin-top:auto;width:220px;max-width:100%}.landing8-media-embed,.landing8-media-image,.landing8-media-video{width:100%;min-width:0;border-radius:10px;overflow:hidden;margin:0 auto;display:block}.landing8-media-embed,.landing8-media-image,.landing8-media-video-container{grid-area:media}.landing8-prompt-text{text-align:center;font-size:24px;min-width:0;z-index:1}.landing8-prompt-link{display:block;position:relative;width:100%;line-height:0}.landing8-qr{background:#fff;border-radius:16px;width:220px;height:220px;grid-area:qr;margin-bottom:12px}.landing8-prompt-link:link,.landing8-prompt-link:visited,.landing8-prompt-link:hover,.landing8-prompt-link:active{color:inherit;text-decoration:none}.landing8-prompt-link:hover .landing8-prompt-link-overflow-container{display:block}.landing8-prompt-link:active .landing8-prompt-link-overflow-text{background-color:#000;color:#fff}.landing8-prompt-link-placeholder{display:inline-block;overflow:hidden;width:100%;white-space:nowrap;text-overflow:ellipsis;line-height:normal}.landing8-prompt-link-overflow-container{display:none;position:absolute;top:-2px;left:-8px;width:150%;max-width:calc(100% + 16px)}.landing8-prompt-link-overflow-text{display:inline-block;color:#000;background-color:#fff;padding:2px 8px;border-radius:8px;max-width:100%;overflow:hidden;white-space:normal;word-break:break-all;line-height:normal}.landing8-prompt-link-icon{display:inline-block;position:relative;top:3px;margin-left:4px}.landing8-shadow{filter:drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.8))}.landing8-media-image,.landing8-media-video{max-width:calc(var(--landing8-media-width)/var(--landing8-media-height)*var(--landing8-media-max-height));--landing8-media-max-height: 600px}.landing8-media-view{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;grid-gap:24px;grid-template-areas:"media" "logo" "qr"}.landing8-prompt-section{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;grid-area:qr}.landing8-logo-section{display:flex;flex-direction:column;justify-content:space-between;align-items:center;grid-area:logo;max-width:300px;margin:0 auto}@media screen and (min-width: 768px){.landing8-media-view .landing8-prompt-link-overflow-container,.landing8-model-viewer-info .landing8-prompt-link-overflow-container{max-width:150%}.landing8-media-view .landing8-prompt-text,.landing8-model-viewer-info .landing8-prompt-text{text-align:left}.landing8-media-view .landing8-qr,.landing8-model-viewer-info .landing8-qr{margin-right:24px;margin-bottom:0}.landing8-media-view .landing8-prompt-section,.landing8-model-viewer-info .landing8-prompt-section{flex-direction:row;align-items:flex-end}.landing8-logo-section{align-items:flex-end;margin-right:0}.landing8-portrait-layout{grid-template-columns:500px minmax(0, 500px);grid-template-rows:1fr auto;grid-template-areas:"logo media" "qr media"}.landing8-portrait-layout .landing8-media-image,.landing8-portrait-layout .landing8-media-video{--landing8-media-max-height: 80vh}.landing8-portrait-layout .landing8-logo-section{align-items:flex-start;margin-left:0;justify-content:space-between}.landing8-landscape-layout{min-width:736px;width:65vw;max-width:1000px;grid-template-columns:minmax(500px, 1fr) minmax(0, 300px);grid-template-rows:auto auto;grid-template-areas:"media media" "qr logo"}.landing8-landscape-layout .landing8-media-image,.landing8-landscape-layout .landing8-media-video-element{max-height:650px}.landing8-landscape-layout .landing8-logo-section{align-items:flex-end;justify-content:space-between}}.landing8-blank-view{padding:16px}.landing8-blank-view .landing8-prompt-section{margin-bottom:200px}.landing8-blank-view .landing8-logo-section{align-items:center}.landing8-media-embed{width:80vw;max-width:100%;padding-top:56.25%;position:relative}.landing8-media-embed iframe{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.landing8-model-canvas{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.landing8-model-viewer-info{z-index:1;position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:1440px;display:flex;padding:48px;justify-content:space-between;overflow:hidden;pointer-events:none}.landing8-model-viewer-info .landing8-attribution-logo,.landing8-model-viewer-info .landing8-logo,.landing8-model-viewer-info .landing8-qr,.landing8-model-viewer-info .landing8-prompt-text{pointer-events:auto}.landing8-model-viewer-info .landing8-prompt-link-overflow-container{max-width:150%}.landing8-text-shadow .landing8-prompt-text,.landing8-text-shadow .landing8-attribution-logo{filter:drop-shadow(0 0 2px rgba(0, 0, 0, 0.6))}.landing8-facebook-messenger-button{display:block;background:#0082fa;font-family:sans-serif;border-radius:8px;padding:8px 16px;font-size:24px;margin-bottom:8px;font-weight:300}.landing8-facebook-messenger-button:link,.landing8-facebook-messenger-button:visited,.landing8-facebook-messenger-button:hover,.landing8-facebook-messenger-button:active{color:#fff;text-decoration:none}.landing8-facebook-messenger-icon{margin-right:8px;display:inline-block;position:relative;top:3px}.landing8-media-video-container{position:relative;max-width:100%;z-index:3}.landing8-media-control-button{background:none;border:none;box-shadow:none;position:absolute;z-index:5;cursor:pointer;padding:0;margin:0}.landing8-media-control-icon{display:block;width:32px;height:32px}.landing8-media-play-button{top:var(--landing8-video-center-y, 50%);left:var(--landing8-video-center-x, 50%);transform:translate(-50%, -50%)}.landing8-media-play-button .landing8-media-control-icon{width:56px;height:56px}.landing8-media-mute-button{right:calc(var(--landing8-video-right, 0) + 32px);bottom:32px;transition:.5s opacity}.landing8-media-video-container:not(:hover) .landing8-media-mute-button.landing8-playing-with-sound:not(:focus){opacity:0;transition-delay:1s}.landing8-media-pause-button{top:0;left:0;width:var(--landing8-video-width, 100%);height:var(--landing8-video-height, 100%);color:rgba(0,0,0,0);z-index:4}',
          "",
        ]);
        const i = o;
      },
      6285: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.show = t.isVisible = t.hide = void 0));
        var o,
          i = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != r(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (o.get || o.set)
                    ? n(i, a, o)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          a = n(6341);
        (n(9353),
          n(6777),
          n(7325),
          (t.show = function (e) {
            (o ||
              ((o = document.createElement("div")),
              document.body.appendChild(o)),
              i.render(i.h(a.View, e), o));
          }),
          (t.hide = function () {
            o && (i.render(null, o), o.parentNode.removeChild(o), (o = null));
          }),
          (t.isVisible = function () {
            return !!o;
          }));
      },
      6314: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var s = [].concat(e[l]);
                (r && o[s[0]]) ||
                  (n &&
                    (s[2]
                      ? (s[2] = "".concat(n, " and ").concat(s[2]))
                      : (s[2] = n)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      6320: (e) => {
        "use strict";
        var t = {
          single_source_shortest_paths: function (e, n, r) {
            var o = {},
              i = {};
            i[n] = 0;
            var a,
              l,
              s,
              u,
              c,
              d,
              f,
              p = t.PriorityQueue.make();
            for (p.push(n, 0); !p.empty(); )
              for (s in ((l = (a = p.pop()).value),
              (u = a.cost),
              (c = e[l] || {})))
                c.hasOwnProperty(s) &&
                  ((d = u + c[s]),
                  (f = i[s]),
                  (void 0 === i[s] || f > d) &&
                    ((i[s] = d), p.push(s, d), (o[s] = l)));
            if (void 0 !== r && void 0 === i[r]) {
              var h = ["Could not find a path from ", n, " to ", r, "."].join(
                "",
              );
              throw new Error(h);
            }
            return o;
          },
          extract_shortest_path_from_predecessor_list: function (e, t) {
            for (var n = [], r = t; r; ) (n.push(r), e[r], (r = e[r]));
            return (n.reverse(), n);
          },
          find_path: function (e, n, r) {
            var o = t.single_source_shortest_paths(e, n, r);
            return t.extract_shortest_path_from_predecessor_list(o, r);
          },
          PriorityQueue: {
            make: function (e) {
              var n,
                r = t.PriorityQueue,
                o = {};
              for (n in ((e = e || {}), r))
                r.hasOwnProperty(n) && (o[n] = r[n]);
              return (
                (o.queue = []),
                (o.sorter = e.sorter || r.default_sorter),
                o
              );
            },
            default_sorter: function (e, t) {
              return e.cost - t.cost;
            },
            push: function (e, t) {
              var n = { value: e, cost: t };
              (this.queue.push(n), this.queue.sort(this.sorter));
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return 0 === this.queue.length;
            },
          },
        };
        e.exports = t;
      },
      6341: (e, t, n) => {
        "use strict";
        var r = n(4994),
          o = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.View = void 0));
        var i = r(n(4634)),
          a = r(n(5715)),
          l = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                r,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != o(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((r =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (r.get || r.set)
                    ? n(i, a, r)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          s = n(5994),
          u = n(9720),
          c = n(2242),
          d = n(5497);
        t.View = function (e) {
          var t = (0, s.useState)(!1),
            n = (0, a.default)(t, 2),
            r = n[0],
            o = n[1];
          (0, s.useEffect)(
            function () {
              return function () {
                o(!1);
              };
            },
            [e.mediaSrc],
          );
          var f = function () {
            (console.error(
              "[Landing Page] Failed to load content, falling back to blank view",
            ),
              o(!0));
          };
          return !e.mediaSrc || r
            ? l.h(c.BlankView, e)
            : [".glb", ".gltf"].some(function (t) {
                  return e.mediaSrc.endsWith(t);
                })
              ? l.h(d.ModelView, (0, i.default)({}, e, { onError: f }))
              : l.h(u.MediaView, (0, i.default)({}, e, { onError: f }));
        };
      },
      6421: (e, t, n) => {
        const r = n(6886).getSymbolSize;
        ((t.getRowColCoords = function (e) {
          if (1 === e) return [];
          const t = Math.floor(e / 7) + 2,
            n = r(e),
            o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
            i = [n - 7];
          for (let e = 1; e < t - 1; e++) i[e] = i[e - 1] - o;
          return (i.push(6), i.reverse());
        }),
          (t.getPositions = function (e) {
            const n = [],
              r = t.getRowColCoords(e),
              o = r.length;
            for (let e = 0; e < o; e++)
              for (let t = 0; t < o; t++)
                (0 === e && 0 === t) ||
                  (0 === e && t === o - 1) ||
                  (e === o - 1 && 0 === t) ||
                  n.push([r[e], r[t]]);
            return n;
          }));
      },
      6644: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/google-chrome-36a08b3267faf39f1efd.png";
      },
      6756: (e, t, n) => {
        const r = n(2726);
        function o(e, t) {
          const n = e.a / 255,
            r = t + '="' + e.hex + '"';
          return n < 1
            ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
            : r;
        }
        function i(e, t, n) {
          let r = e + t;
          return (void 0 !== n && (r += " " + n), r);
        }
        t.render = function (e, t, n) {
          const a = r.getOptions(t),
            l = e.modules.size,
            s = e.modules.data,
            u = l + 2 * a.margin,
            c = a.color.light.a
              ? "<path " +
                o(a.color.light, "fill") +
                ' d="M0 0h' +
                u +
                "v" +
                u +
                'H0z"/>'
              : "",
            d =
              "<path " +
              o(a.color.dark, "stroke") +
              ' stroke-width="1.02" d="' +
              (function (e, t, n) {
                let r = "",
                  o = 0,
                  a = !1,
                  l = 0;
                for (let s = 0; s < e.length; s++) {
                  const u = Math.floor(s % t),
                    c = Math.floor(s / t);
                  (u || a || (a = !0),
                    e[s]
                      ? (l++,
                        (s > 0 && u > 0 && e[s - 1]) ||
                          ((r += a ? i("M", u + n, 0.5 + c + n) : i("m", o, 0)),
                          (o = 0),
                          (a = !1)),
                        (u + 1 < t && e[s + 1]) || ((r += i("h", l)), (l = 0)))
                      : o++);
                }
                return r;
              })(s, l, a.margin) +
              '"/>',
            f = 'viewBox="0 0 ' + u + " " + u + '"',
            p =
              '<svg xmlns="http://www.w3.org/2000/svg" ' +
              (a.width
                ? 'width="' + a.width + '" height="' + a.width + '" '
                : "") +
              f +
              ' shape-rendering="crispEdges">' +
              c +
              d +
              "</svg>\n";
          return ("function" == typeof n && n(null, p), p);
        };
      },
      6777: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => m }));
        var r = n(5072),
          o = n.n(r),
          i = n(7825),
          a = n.n(i),
          l = n(7659),
          s = n.n(l),
          u = n(5056),
          c = n.n(u),
          d = n(540),
          f = n.n(d),
          p = n(1113),
          h = n.n(p),
          g = n(4988),
          _ = {};
        ((_.styleTagTransform = h()),
          (_.setAttributes = c()),
          (_.insert = s().bind(null, "head")),
          (_.domAPI = a()),
          (_.insertStyleElement = f()),
          o()(g.A, _));
        const m = g.A && g.A.locals ? g.A.locals : void 0;
      },
      6886: (e, t) => {
        let n;
        const r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
        ((t.getSymbolSize = function (e) {
          if (!e) throw new Error('"version" cannot be null or undefined');
          if (e < 1 || e > 40)
            throw new Error('"version" should be in range from 1 to 40');
          return 4 * e + 17;
        }),
          (t.getSymbolTotalCodewords = function (e) {
            return r[e];
          }),
          (t.getBCHDigit = function (e) {
            let t = 0;
            for (; 0 !== e; ) (t++, (e >>>= 1));
            return t;
          }),
          (t.setToSJISFunction = function (e) {
            if ("function" != typeof e)
              throw new Error('"toSJISFunc" is not a valid function.');
            n = e;
          }),
          (t.isKanjiModeEnabled = function () {
            return void 0 !== n;
          }),
          (t.toSJIS = function (e) {
            return n(e);
          }));
      },
      6993: (e, t, n) => {
        var r = n(5546);
        function o() {
          var t,
            n,
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            l = i.toStringTag || "@@toStringTag";
          function s(e, o, i, a) {
            var l = o && o.prototype instanceof c ? o : c,
              s = Object.create(l.prototype);
            return (
              r(
                s,
                "_invoke",
                (function (e, r, o) {
                  var i,
                    a,
                    l,
                    s = 0,
                    c = o || [],
                    d = !1,
                    f = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((i = e), (a = 0), (l = t), (f.n = n), u);
                      },
                    };
                  function p(e, r) {
                    for (
                      a = e, l = r, n = 0;
                      !d && s && !o && n < c.length;
                      n++
                    ) {
                      var o,
                        i = c[n],
                        p = f.p,
                        h = i[2];
                      e > 3
                        ? (o = h === r) &&
                          ((l = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                          (i[4] = i[5] = t))
                        : i[0] <= p &&
                          ((o = e < 2 && p < i[1])
                            ? ((a = 0), (f.v = r), (f.n = i[1]))
                            : p < h &&
                              (o = e < 3 || i[0] > r || r > h) &&
                              ((i[4] = e), (i[5] = r), (f.n = h), (a = 0)));
                    }
                    if (o || e > 1) return u;
                    throw ((d = !0), r);
                  }
                  return function (o, c, h) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      d && 1 === c && p(c, h), a = c, l = h;
                      (n = a < 2 ? t : l) || !d;
                    ) {
                      i ||
                        (a
                          ? a < 3
                            ? (a > 1 && (f.n = -1), p(a, l))
                            : (f.n = l)
                          : (f.v = l));
                      try {
                        if (((s = 2), i)) {
                          if ((a || (o = "next"), (n = i[o]))) {
                            if (!(n = n.call(i, l)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!n.done) return n;
                            ((l = n.value), a < 2 && (a = 0));
                          } else
                            (1 === a && (n = i.return) && n.call(i),
                              a < 2 &&
                                ((l = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (a = 1)));
                          i = t;
                        } else if ((n = (d = f.n < 0) ? l : e.call(r, f)) !== u)
                          break;
                      } catch (e) {
                        ((i = t), (a = 1), (l = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: n, done: d };
                  };
                })(e, i, a),
                !0,
              ),
              s
            );
          }
          var u = {};
          function c() {}
          function d() {}
          function f() {}
          n = Object.getPrototypeOf;
          var p = [][a]
              ? n(n([][a]()))
              : (r((n = {}), a, function () {
                  return this;
                }),
                n),
            h = (f.prototype = c.prototype = Object.create(p));
          function g(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), r(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(h)),
              e
            );
          }
          return (
            (d.prototype = f),
            r(h, "constructor", f),
            r(f, "constructor", d),
            (d.displayName = "GeneratorFunction"),
            r(f, l, "GeneratorFunction"),
            r(h),
            r(h, l, "Generator"),
            r(h, a, function () {
              return this;
            }),
            r(h, "toString", function () {
              return "[object Generator]";
            }),
            ((e.exports = o =
              function () {
                return { w: s, m: g };
              }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports))()
          );
        }
        ((e.exports = o),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      7044: (e, t) => {
        const n = "[0-9]+";
        let r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
        r = r.replace(/u/g, "\\u");
        const o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
        ((t.KANJI = new RegExp(r, "g")),
          (t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
          (t.BYTE = new RegExp(o, "g")),
          (t.NUMERIC = new RegExp(n, "g")),
          (t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g")));
        const i = new RegExp("^" + r + "$"),
          a = new RegExp("^" + n + "$"),
          l = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        ((t.testKanji = function (e) {
          return i.test(e);
        }),
          (t.testNumeric = function (e) {
            return a.test(e);
          }),
          (t.testAlphanumeric = function (e) {
            return l.test(e);
          }));
      },
      7105: (e, t, n) => {
        "use strict";
        e.exports =
          n.p + "resources/poweredby-horiz-white-0b1f38e485e6541907d3.svg";
      },
      7122: (e, t, n) => {
        var r = n(79);
        ((e.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
            );
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      7325: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => m }));
        var r = n(5072),
          o = n.n(r),
          i = n(7825),
          a = n.n(i),
          l = n(7659),
          s = n.n(l),
          u = n(5056),
          c = n.n(u),
          d = n(540),
          f = n.n(d),
          p = n(1113),
          h = n.n(p),
          g = n(2076),
          _ = {};
        ((_.styleTagTransform = h()),
          (_.setAttributes = c()),
          (_.insert = s().bind(null, "head")),
          (_.domAPI = a()),
          (_.insertStyleElement = f()),
          o()(g.A, _));
        const m = g.A && g.A.locals ? g.A.locals : void 0;
      },
      7518: (e, t, n) => {
        const r = n(9953),
          o = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
            4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4,
            8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16,
            6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17,
            23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29,
            35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45,
            15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19,
            37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45,
            62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
          ],
          i = [
            7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26,
            48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60,
            110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260,
            308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432,
            144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196,
            364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476,
            690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870,
            1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
            1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290,
            1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
            1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770,
            2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040,
            2430,
          ];
        ((t.getBlocksCount = function (e, t) {
          switch (t) {
            case r.L:
              return o[4 * (e - 1) + 0];
            case r.M:
              return o[4 * (e - 1) + 1];
            case r.Q:
              return o[4 * (e - 1) + 2];
            case r.H:
              return o[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
          (t.getTotalCodewordsCount = function (e, t) {
            switch (t) {
              case r.L:
                return i[4 * (e - 1) + 0];
              case r.M:
                return i[4 * (e - 1) + 1];
              case r.Q:
                return i[4 * (e - 1) + 2];
              case r.H:
                return i[4 * (e - 1) + 3];
              default:
                return;
            }
          }));
      },
      7535: (e, t, n) => {
        "use strict";
        var r = n(4994);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.pipelineModule = t.configure = void 0));
        var o = r(n(3693)),
          i = n(2633),
          a = n(1587),
          l = n(6285),
          s = n(1842);
        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        var c,
          d = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(n), !0).forEach(function (t) {
                    (0, o.default)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : u(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          })({}, a.defaultParameters),
          f = function () {
            (0, l.show)((0, i.applyInferredParameters)(d));
          };
        ((t.configure = function (e) {
          (Object.keys(d).forEach(function (t) {
            void 0 !== e[t] && (d[t] = e[t]);
          }),
            (0, l.isVisible)() && f());
        }),
          (t.pipelineModule = function () {
            return {
              name: "landing8",
              onBeforeRun: function (e) {
                var t = e.config;
                c = t;
              },
              onException: function () {
                if (!XR8.XrDevice.isDeviceBrowserCompatible(c)) {
                  var e = (0, s.showAlmostThere)(
                    c,
                    (0, i.applyInferredParameters)(d).url,
                  );
                  (e ? (0, l.hide)() : ((0, s.hideAlmostThere)(), f()),
                    setTimeout(function () {
                      document.querySelectorAll("#almostthereContainer")
                        .length > (e ? 1 : 0) &&
                        (0, s.showAlmostThereCollisionError)();
                    }, 0));
                }
              },
              onRemove: function () {
                ((c = null), (0, l.hide)(), (0, s.hideAlmostThere)());
              },
            };
          }));
      },
      7583: (e, t, n) => {
        const r = n(1333),
          o = n(157),
          i = n(7899),
          a = n(6756);
        function l(e, t, n, i, a) {
          const l = [].slice.call(arguments, 1),
            s = l.length,
            u = "function" == typeof l[s - 1];
          if (!u && !r()) throw new Error("Callback required as last argument");
          if (!u) {
            if (s < 1) throw new Error("Too few arguments provided");
            return (
              1 === s
                ? ((n = t), (t = i = void 0))
                : 2 !== s || t.getContext || ((i = n), (n = t), (t = void 0)),
              new Promise(function (r, a) {
                try {
                  const a = o.create(n, i);
                  r(e(a, t, i));
                } catch (e) {
                  a(e);
                }
              })
            );
          }
          if (s < 2) throw new Error("Too few arguments provided");
          2 === s
            ? ((a = n), (n = t), (t = i = void 0))
            : 3 === s &&
              (t.getContext && void 0 === a
                ? ((a = i), (i = void 0))
                : ((a = i), (i = n), (n = t), (t = void 0)));
          try {
            const r = o.create(n, i);
            a(null, e(r, t, i));
          } catch (e) {
            a(e);
          }
        }
        ((t.create = o.create),
          (t.toCanvas = l.bind(null, i.render)),
          (t.toDataURL = l.bind(null, i.renderToDataURL)),
          (t.toString = l.bind(null, function (e, t, n) {
            return a.render(e, n);
          })));
      },
      7659: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      7736: (e, t, n) => {
        var r = n(3738).default,
          o = n(9045);
        ((e.exports = function (e) {
          var t = o(e, "string");
          return "symbol" == r(t) ? t : t + "";
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      7752: (e) => {
        ((e.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      7756: (e, t, n) => {
        const r = n(6886).getSymbolSize;
        t.getPositions = function (e) {
          const t = r(e);
          return [
            [0, 0],
            [t - 7, 0],
            [0, t - 7],
          ];
        };
      },
      7806: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/space-e450dcc81f5184a3be14.jpg";
      },
      7825: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                (n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {")));
                var o = void 0 !== n.layer;
                (o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}"));
                var i = n.sourceMap;
                (i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options));
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      7899: (e, t, n) => {
        const r = n(2726);
        ((t.render = function (e, t, n) {
          let o = n,
            i = t;
          (void 0 !== o || (t && t.getContext) || ((o = t), (t = void 0)),
            t ||
              (i = (function () {
                try {
                  return document.createElement("canvas");
                } catch (e) {
                  throw new Error("You need to specify a canvas element");
                }
              })()),
            (o = r.getOptions(o)));
          const a = r.getImageWidth(e.modules.size, o),
            l = i.getContext("2d"),
            s = l.createImageData(a, a);
          return (
            r.qrToImageData(s.data, e, o),
            (function (e, t, n) {
              (e.clearRect(0, 0, t.width, t.height),
                t.style || (t.style = {}),
                (t.height = n),
                (t.width = n),
                (t.style.height = n + "px"),
                (t.style.width = n + "px"));
            })(l, i, a),
            l.putImageData(s, 0, 0),
            i
          );
        }),
          (t.renderToDataURL = function (e, n, r) {
            let o = r;
            (void 0 !== o || (n && n.getContext) || ((o = n), (n = void 0)),
              o || (o = {}));
            const i = t.render(e, n, o),
              a = o.type || "image/png",
              l = o.rendererOpts || {};
            return i.toDataURL(a, l.quality);
          }));
      },
      7933: (e, t, n) => {
        "use strict";
        var r = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LogoSection = void 0));
        var o = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != r(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (o.get || o.set)
                    ? n(i, a, o)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          i = n(3467);
        t.LogoSection = function (e) {
          var t = e.logoSrc,
            n = e.logoAlt;
          return o.h(
            "div",
            { className: "landing8-logo-section" },
            t && o.h("img", { className: "landing8-logo", src: t, alt: n }),
            o.h(i.AttributionLogo, null),
          );
        };
      },
      7935: (e, t) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.loadThreeJs = void 0));
        var n = "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r131",
          r = "".concat(n, "/build/three.min.js"),
          o = "".concat(n, "/examples/js/controls/OrbitControls.js"),
          i = "".concat(n, "/examples/js/loaders/GLTFLoader.js"),
          a = function (e) {
            return new Promise(function (t, n) {
              var r = document.createElement("script");
              ((r.async = !0),
                (r.crossOrigin = "anonymous"),
                (r.onload = function () {
                  return t();
                }),
                (r.onerror = n),
                (r.src = e),
                document.head.appendChild(r));
            });
          },
          l = null;
        t.loadThreeJs = function () {
          if (l) return l;
          if (window.AFRAME) {
            if (!window.THREE || !window.THREE.GLTFLoader)
              throw new Error(
                "Expected AFRAME to define THREE and THREE.GLTFLoader",
              );
            l = Promise.resolve(
              window.THREE.OrbitControls
                ? null
                : a(
                    "https://cdn.jsdelivr.net/gh/supermedium/three.js@super-r113/examples/js/controls/OrbitControls.js",
                  ),
            );
          } else
            l = Promise.resolve(window.THREE ? null : a(r)).then(function () {
              var e = window.THREE.OrbitControls ? null : a(o),
                t = window.THREE.GLTFLoader ? null : a(i);
              return Promise.all([e, t]);
            });
          return l;
        };
      },
      8102: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/xtra-arrow-7ee38c097d8b81c7c5fa.svg";
      },
      8651: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/city-77bc4a5a6091446260c5.jpg";
      },
      8820: (e) => {
        function t(e) {
          if (!e || e < 1)
            throw new Error(
              "BitMatrix size must be defined and greater than 0",
            );
          ((this.size = e),
            (this.data = new Uint8Array(e * e)),
            (this.reservedBit = new Uint8Array(e * e)));
        }
        ((t.prototype.set = function (e, t, n, r) {
          const o = e * this.size + t;
          ((this.data[o] = n), r && (this.reservedBit[o] = !0));
        }),
          (t.prototype.get = function (e, t) {
            return this.data[e * this.size + t];
          }),
          (t.prototype.xor = function (e, t, n) {
            this.data[e * this.size + t] ^= n;
          }),
          (t.prototype.isReserved = function (e, t) {
            return this.reservedBit[e * this.size + t];
          }),
          (e.exports = t));
      },
      9045: (e, t, n) => {
        var r = n(3738).default;
        ((e.exports = function (e, t) {
          if ("object" != r(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" != r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      9293: (e) => {
        function t(e, t, n, r, o, i, a) {
          try {
            var l = e[i](a),
              s = l.value;
          } catch (e) {
            return void n(e);
          }
          l.done ? t(s) : Promise.resolve(s).then(r, o);
        }
        ((e.exports = function (e) {
          return function () {
            var n = this,
              r = arguments;
            return new Promise(function (o, i) {
              var a = e.apply(n, r);
              function l(e) {
                t(a, o, i, l, s, "next", e);
              }
              function s(e) {
                t(a, o, i, l, s, "throw", e);
              }
              l(void 0);
            });
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports));
      },
      9353: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => m }));
        var r = n(5072),
          o = n.n(r),
          i = n(7825),
          a = n.n(i),
          l = n(7659),
          s = n.n(l),
          u = n(5056),
          c = n.n(u),
          d = n(540),
          f = n.n(d),
          p = n(1113),
          h = n.n(p),
          g = n(6100),
          _ = {};
        ((_.styleTagTransform = h()),
          (_.setAttributes = c()),
          (_.insert = s().bind(null, "head")),
          (_.domAPI = a()),
          (_.insertStyleElement = f()),
          o()(g.A, _));
        const m = g.A && g.A.locals ? g.A.locals : void 0;
      },
      9558: (e, t, n) => {
        "use strict";
        e.exports = n.p + "resources/sound-on-0c58ab154bdbbc9c963f.svg";
      },
      9694: (e, t, n) => {
        "use strict";
        var r = n(4994),
          o = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MediaVideo = void 0));
        var i = r(n(5715)),
          a = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                r,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != o(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((r =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (r.get || r.set)
                    ? n(i, a, r)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          l = n(5994),
          s = n(2060),
          u = r(n(165)),
          c = r(n(9558)),
          d = r(n(4572));
        t.MediaVideo = function (e) {
          var t = e.src,
            n = e.onSizeChange,
            r = e.autoplay,
            o = e.mediaControls,
            f = e.onError,
            p = (0, l.useRef)(),
            h = (0, l.useRef)(),
            g = (0, l.useState)(r),
            _ = (0, i.default)(g, 2),
            m = _[0],
            v = _[1],
            y = (0, l.useState)(!1),
            b = (0, i.default)(y, 2),
            w = b[0],
            x = b[1],
            M = (0, s.useElementSize)(p),
            k = (0, s.useElementSize)(h),
            P =
              M && k
                ? {
                    "--landing8-video-center-x": "".concat(M.width / 2, "px"),
                    "--landing8-video-center-y": "".concat(k.height / 2, "px"),
                    "--landing8-video-right": "".concat(
                      M.width / 2 - k.width / 2,
                      "px",
                    ),
                  }
                : void 0;
          return a.h(
            "div",
            { ref: p, className: "landing8-media-video-container", style: P },
            "minimal" === o &&
              a.h(
                a.Fragment,
                null,
                w
                  ? a.h(
                      "button",
                      {
                        type: "button",
                        onClick: function () {
                          return h.current.pause();
                        },
                        className:
                          "landing8-media-control-button landing8-media-pause-button",
                      },
                      "Pause",
                    )
                  : a.h(
                      "button",
                      {
                        type: "button",
                        onClick: function () {
                          return h.current.play();
                        },
                        className:
                          "landing8-media-control-button landing8-media-play-button landing8-shadow",
                      },
                      a.h("img", {
                        alt: "Play",
                        src: u.default,
                        className: "landing8-media-control-icon",
                      }),
                    ),
                a.h(
                  "button",
                  {
                    type: "button",
                    onClick: function () {
                      return v(function (e) {
                        return !e;
                      });
                    },
                    className:
                      "landing8-media-control-button landing8-media-mute-button landing8-shadow ".concat(
                        !m && w ? "landing8-playing-with-sound" : "",
                      ),
                  },
                  m
                    ? a.h("img", {
                        alt: "Unmute",
                        src: d.default,
                        className: "landing8-media-control-icon",
                      })
                    : a.h("img", {
                        alt: "Mute",
                        src: c.default,
                        className: "landing8-media-control-icon",
                      }),
                ),
              ),
            a.h("video", {
              ref: h,
              className: "landing8-media-video",
              src: t,
              autoPlay: r,
              muted: m,
              loop: !0,
              controls: "browser" === o,
              onCanPlayThrough: function (e) {
                var t = {
                  width: e.target.videoWidth,
                  height: e.target.videoHeight,
                };
                (n(t), v(h.current.muted), x(!h.current.paused));
              },
              onError: f,
              onPlay: function () {
                return x(!0);
              },
              onPause: function () {
                return x(!1);
              },
            }),
          );
        };
      },
      9700: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => p }));
        var r = n(4385),
          o = n.n(r),
          i = new URL(n(7105), n.b),
          a = new URL(n(8102), n.b),
          l = new URL(n(3123), n.b),
          s = new URL(n(6644), n.b),
          u = o()(i),
          c = o()(a),
          d = o()(l),
          f = o()(s);
        const p =
          '<div id="almostthereContainer" class="absolute-fill"> <div id="error_msg_device" class="hidden"> <div class="error-text-outer-container"> <div class="error-text-container error-margin-top-20"> <div id="qrcode"></div> <br/> <div class="desktop-message"> <span> To view, open camera on smartphone and scan code </span> </div> <div class="desktop-hint"> <span style="font-size:15pt;line-height:20pt;letter-spacing:-.21"> or visit <br/><span class="desktop-home-link"></span><br/> on a smartphone or tablet. </span> </div> <img class="foreground-image poweredby-img desktop" src="' +
          u +
          '"> </div> </div> </div> <div id="error_msg_open_in_safari" class="hidden absolute-fill"> <div class="error-text-outer-container"> <div class="error-text-container error-margin-top-5"> <span id="error_text_header_top" class="hidden open-header-top"> <h2>Open in Safari<br/> to view AR</h2> </span> <span id="error_text_header_bottom" class="hidden open-header-bottom"> <h2>Open in Safari<br/> to view AR</h2> </span> <img class="app-header-img"> <img class="foreground-image poweredby-img" src="' +
          u +
          '"> <br/> <img id="top_corner_open_safari" src="' +
          c +
          '" class="foreground-image arrow-top-corner hidden"/> <img id="top_close_open_safari" src="' +
          c +
          '" class="foreground-image arrow-top-close hidden"/> <img id="bottom_corner_open_safari" src="' +
          c +
          '" class="foreground-image arrow-bottom-corner hidden"/> <img id="bottom_close_open_safari" src="' +
          c +
          '" class="foreground-image arrow-bottom-close hidden"/> </div> </div> </div> <div id="error_unknown_webview" class="hidden"> <div class="error-text-outer-container"> <div class="error-text-container error-margin-top-5"> <span id="error_text_header_unknown" class="open-header-unknown"> <h2>Open in Safari<br/> to view AR</h2> </span> <img id="app_img" class="app-header-img unknown"> <br/> <span id="app_link" class="desktop-home-link mobile"></span> <button id="error_copy_link_btn" class="copy-link-btn">Copy Link</button> <img class="foreground-image poweredby-img" src="' +
          u +
          '"> </div> </div> </div> <div id="error_msg_web_assembly_ios" class="hidden"> <div class="error-text-outer-container"> <div class="error-text-container error-margin-top-5"> <p><img class="foreground-image safari-hero-image" src="' +
          d +
          '"></p> <div class="error-text-header">You\'re almost there!</div> <div class="error-text-detail"> To view this experience, please update to a newer version of iOS. </div> </div> </div> </div> <div id="error_msg_web_assembly_android" class="hidden"> <div class="error-text-outer-container"> <div class="error-text-container error-margin-top-5"> <p><img src="' +
          f +
          '"></p> <div class="error-text-header">You\'re almost there!</div> <div class="error-text-detail"> Browser doesn\'t support WebAssembly. Please update your browser. </div> </div> </div> </div> <div id="error_msg_android_almost_there" class="hidden"> <div class="error-text-outer-container"> <div class="error-text-container error-margin-top-5"> <p><img height="100px" src="' +
          f +
          '"></p> <div class="error-text-header">You\'re almost there!</div> <div id="error_msg_detail_android_almost_there" class="hidden error-text-detail"> To view this experience on your Android device, please open in Google Chrome or your native browser. </div> <div id="error_msg_detail_huawei_almost_there" class="hidden error-text-detail"> To view this experience on your Huawei device, please open in Google Chrome or UC Browser. </div> <br/> <p><span class="desktop-home-link"></span></p> <div id="android_copy_hint" class="error-text-hint">Open your browser and paste.</div> </div> </div> </div> </div> ';
      },
      9720: (e, t, n) => {
        "use strict";
        var r = n(4994),
          o = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MediaView = void 0));
        var i = r(n(5715)),
          a = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                r,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != o(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((r =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (r.get || r.set)
                    ? n(i, a, r)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          l = n(5994),
          s = n(7933),
          u = n(1163),
          c = n(1230),
          d = n(3351);
        t.MediaView = function (e) {
          var t = (0, l.useState)(!1),
            n = (0, i.default)(t, 2),
            r = n[0],
            o = n[1],
            f = (0, l.useState)(null),
            p = (0, i.default)(f, 2),
            h = p[0],
            g = p[1],
            _ = (0, l.useRef)(null),
            m = (0, l.useRef)(Date.now());
          ((0, l.useEffect)(
            function () {
              return (
                (m.current = Date.now()),
                function () {
                  g(null);
                }
              );
            },
            [e.mediaSrc],
          ),
            (0, l.useEffect)(function () {
              return function () {
                clearTimeout(_.current);
              };
            }));
          var v = !!h,
            y = [
              "landing8-media-view",
              !v && "landing8-view-loading",
              v && r && "landing8-view-transition",
              h && h.width < h.height
                ? "landing8-portrait-layout"
                : "landing8-landscape-layout",
              e.textShadow && "landing8-text-shadow",
            ]
              .filter(Boolean)
              .join(" "),
            b = {
              color: e.textColor,
              fontFamily: e.font,
              "--landing8-media-width": h ? h.width : void 0,
              "--landing8-media-height": h ? h.height : void 0,
            };
          return a.h(
            d.ViewContainer,
            {
              backgroundColor: e.backgroundColor,
              backgroundSrc: e.backgroundSrc,
              backgroundBlur: e.backgroundBlur,
            },
            a.h(
              "div",
              { className: y, style: b },
              a.h(u.MediaElement, {
                src: e.mediaSrc,
                alt: e.mediaAlt,
                autoplay: e.mediaAutoplay,
                onSizeChange: function (e) {
                  (o(Date.now() - m.current > 1e3), g(e));
                },
                onError: e.onError,
                mediaControls: e.mediaControls,
              }),
              a.h(c.UrlPromptSection, {
                url: e.url,
                promptPrefix: e.promptPrefix,
                promptSuffix: e.promptSuffix,
                vrPromptPrefix: e.vrPromptPrefix,
              }),
              a.h(s.LogoSection, { logoSrc: e.logoSrc, logoAlt: e.logoAlt }),
            ),
          );
        };
      },
      9801: (e, t, n) => {
        const r = n(208),
          o = n(4357),
          i = n(1433),
          a = n(5822),
          l = n(4861),
          s = n(7044),
          u = n(6886),
          c = n(6320);
        function d(e) {
          return unescape(encodeURIComponent(e)).length;
        }
        function f(e, t, n) {
          const r = [];
          let o;
          for (; null !== (o = e.exec(n)); )
            r.push({
              data: o[0],
              index: o.index,
              mode: t,
              length: o[0].length,
            });
          return r;
        }
        function p(e) {
          const t = f(s.NUMERIC, r.NUMERIC, e),
            n = f(s.ALPHANUMERIC, r.ALPHANUMERIC, e);
          let o, i;
          return (
            u.isKanjiModeEnabled()
              ? ((o = f(s.BYTE, r.BYTE, e)), (i = f(s.KANJI, r.KANJI, e)))
              : ((o = f(s.BYTE_KANJI, r.BYTE, e)), (i = [])),
            t
              .concat(n, o, i)
              .sort(function (e, t) {
                return e.index - t.index;
              })
              .map(function (e) {
                return { data: e.data, mode: e.mode, length: e.length };
              })
          );
        }
        function h(e, t) {
          switch (t) {
            case r.NUMERIC:
              return o.getBitsLength(e);
            case r.ALPHANUMERIC:
              return i.getBitsLength(e);
            case r.KANJI:
              return l.getBitsLength(e);
            case r.BYTE:
              return a.getBitsLength(e);
          }
        }
        function g(e, t) {
          let n;
          const s = r.getBestModeForData(e);
          if (((n = r.from(t, s)), n !== r.BYTE && n.bit < s.bit))
            throw new Error(
              '"' +
                e +
                '" cannot be encoded with mode ' +
                r.toString(n) +
                ".\n Suggested mode is: " +
                r.toString(s),
            );
          switch (
            (n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n)
          ) {
            case r.NUMERIC:
              return new o(e);
            case r.ALPHANUMERIC:
              return new i(e);
            case r.KANJI:
              return new l(e);
            case r.BYTE:
              return new a(e);
          }
        }
        ((t.fromArray = function (e) {
          return e.reduce(function (e, t) {
            return (
              "string" == typeof t
                ? e.push(g(t, null))
                : t.data && e.push(g(t.data, t.mode)),
              e
            );
          }, []);
        }),
          (t.fromString = function (e, n) {
            const o = (function (e) {
                const t = [];
                for (let n = 0; n < e.length; n++) {
                  const o = e[n];
                  switch (o.mode) {
                    case r.NUMERIC:
                      t.push([
                        o,
                        {
                          data: o.data,
                          mode: r.ALPHANUMERIC,
                          length: o.length,
                        },
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.KANJI:
                      t.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: d(o.data) },
                      ]);
                      break;
                    case r.BYTE:
                      t.push([
                        { data: o.data, mode: r.BYTE, length: d(o.data) },
                      ]);
                  }
                }
                return t;
              })(p(e, u.isKanjiModeEnabled())),
              i = (function (e, t) {
                const n = {},
                  o = { start: {} };
                let i = ["start"];
                for (let a = 0; a < e.length; a++) {
                  const l = e[a],
                    s = [];
                  for (let e = 0; e < l.length; e++) {
                    const u = l[e],
                      c = "" + a + e;
                    (s.push(c),
                      (n[c] = { node: u, lastCount: 0 }),
                      (o[c] = {}));
                    for (let e = 0; e < i.length; e++) {
                      const a = i[e];
                      n[a] && n[a].node.mode === u.mode
                        ? ((o[a][c] =
                            h(n[a].lastCount + u.length, u.mode) -
                            h(n[a].lastCount, u.mode)),
                          (n[a].lastCount += u.length))
                        : (n[a] && (n[a].lastCount = u.length),
                          (o[a][c] =
                            h(u.length, u.mode) +
                            4 +
                            r.getCharCountIndicator(u.mode, t)));
                    }
                  }
                  i = s;
                }
                for (let e = 0; e < i.length; e++) o[i[e]].end = 0;
                return { map: o, table: n };
              })(o, n),
              a = c.find_path(i.map, "start", "end"),
              l = [];
            for (let e = 1; e < a.length - 1; e++) l.push(i.table[a[e]].node);
            return t.fromArray(
              l.reduce(function (e, t) {
                const n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return n && n.mode === t.mode
                  ? ((e[e.length - 1].data += t.data), e)
                  : (e.push(t), e);
              }, []),
            );
          }),
          (t.rawSplit = function (e) {
            return t.fromArray(p(e, u.isKanjiModeEnabled()));
          }));
      },
      9839: (e, t, n) => {
        "use strict";
        var r = n(4994),
          o = n(3738);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.UrlPromptLink = void 0));
        var i = r(n(5715)),
          a = (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                r,
                i = { __proto__: null, default: e };
              if (null === e || ("object" != o(e) && "function" != typeof e))
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (var a in e)
                "default" !== a &&
                  {}.hasOwnProperty.call(e, a) &&
                  ((r =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, a)) &&
                  (r.get || r.set)
                    ? n(i, a, r)
                    : (i[a] = e[a]));
              return i;
            })(e);
          })(n(172)),
          l = n(5994);
        t.UrlPromptLink = function (e) {
          var t = e.url,
            n = (0, l.useState)(!1),
            r = (0, i.default)(n, 2),
            o = r[0],
            s = r[1],
            u = t.replace(/^https:\/\//, "");
          return a.h(
            "a",
            {
              onClick: function (e) {
                e.preventDefault();
                var n = document.createElement("input");
                (document.body.appendChild(n),
                  (n.value = t),
                  n.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(n),
                  s(!0));
              },
              className: "landing8-prompt-link",
              href: t,
            },
            a.h("span", { className: "landing8-prompt-link-placeholder" }, u),
            a.h(
              "span",
              {
                className: "landing8-prompt-link-overflow-container",
                "aria-hidden": "true",
              },
              a.h(
                "span",
                { className: "landing8-prompt-link-overflow-text" },
                u,
                a.h(
                  "svg",
                  {
                    className: "landing8-prompt-link-icon",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                  },
                  a.h("path", {
                    d: "\nM 5 7 H 14 A 2 2 90 0 1 16 9 V 20 A 2 2 90 0 1 14 22 H 5 A 2 2 90 0 1 3 20 V 9 A 2 2 90 0 1 5 7 \nM 8 4 V 4 A 2 2 90 0 1 10 2 H 19 A 2 2 90 0 1 21 4 V 15 A 2 2 90 0 1 19 17 H 19 L 19 17\n",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                  }),
                  o &&
                    a.h("path", {
                      d: "M 6 16 L 8 18 L 13 13",
                      fill: "none",
                      stroke: "#080",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    }),
                ),
              ),
            ),
          );
        };
      },
      9899: (e) => {
        function t() {
          ((this.buffer = []), (this.length = 0));
        }
        ((t.prototype = {
          get: function (e) {
            const t = Math.floor(e / 8);
            return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
          },
          put: function (e, t) {
            for (let n = 0; n < t; n++)
              this.putBit(1 == ((e >>> (t - n - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (e) {
            const t = Math.floor(this.length / 8);
            (this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> (this.length % 8)),
              this.length++);
          },
        }),
          (e.exports = t));
      },
      9953: (e, t) => {
        ((t.L = { bit: 1 }),
          (t.M = { bit: 0 }),
          (t.Q = { bit: 3 }),
          (t.H = { bit: 2 }),
          (t.isValid = function (e) {
            return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
          }),
          (t.from = function (e, n) {
            if (t.isValid(e)) return e;
            try {
              return (function (e) {
                if ("string" != typeof e)
                  throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                  case "l":
                  case "low":
                    return t.L;
                  case "m":
                  case "medium":
                    return t.M;
                  case "q":
                  case "quartile":
                    return t.Q;
                  case "h":
                  case "high":
                    return t.H;
                  default:
                    throw new Error("Unknown EC Level: " + e);
                }
              })(e);
            } catch (e) {
              return n;
            }
          }));
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return (e[r](i, i.exports, n), i.exports);
  }
  ((n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (n.d(t, { a: t }), t);
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (
        !e &&
        t &&
        (t.currentScript &&
          "SCRIPT" === t.currentScript.tagName.toUpperCase() &&
          (e = t.currentScript.src),
        !e)
      ) {
        var r = t.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
            e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/^blob:/, "")
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e));
    })(),
    (n.b =
      ("undefined" != typeof document && document.baseURI) ||
      self.location.href),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(4994)(n(4634)),
        t = n(2587),
        r = n(7535),
        o = {
          configure: r.configure,
          pipelineModule: r.pipelineModule,
          aframeComponent: t.aframeComponent,
        };
      ((0, e.default)(window, { LandingPage: o }),
        window.AFRAME &&
          window.AFRAME.registerComponent(
            "landing-page",
            (0, t.aframeComponent)(),
          ));
    })());
})();
