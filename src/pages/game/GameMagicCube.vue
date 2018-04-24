<template>
  <div class="game1">
    <el-card>
      <nav-breadcrumb>
        <el-breadcrumb-item to="/GameIndex">游戏首页</el-breadcrumb-item>
        <el-breadcrumb-item>3D魔方</el-breadcrumb-item>
      </nav-breadcrumb>
    </el-card>

    <div class="body-wrapper">

      <div class="cubetwo-help-component">
        <div class="cubetwo-row">
          <div class="cubetwo-device-info">
            <i class="material-icons">touch_app</i>
            <div>tap or swipe with fingers</div>
          </div>

          <div class="cubetwo-device-info">
            <i class="material-icons">mouse</i>
            <div>click or swipe with mouse</div>
          </div>

          <div class="cubetwo-device-info cubetwo-device-info--keyboard">
            <i class="material-icons">keyboard</i>
            <div>keyboard keys</div>
            <div class="cubetwo-device-info-groups">
              <div class="cubetwo-device-info-group">
                <div>
                  <i class="material-icons">keyboard_tab</i>
                  <i class="material-icons">keyboard_arrow_up</i>
                </div>
                <div>
                  <i class="material-icons">keyboard_arrow_left</i>
                  <i class="material-icons">keyboard_arrow_down</i>
                  <i class="material-icons">keyboard_arrow_right</i>
                </div>
              </div>

              <div class="cubetwo-device-info-group">
                <div>
                  <span>q</span>
                  <span>w</span>
                  <span>e</span>
                </div>
                <div>
                  <span>a</span>
                  <span>s</span>
                  <span>d</span>
                </div>
                <div>
                  <span>x</span>
                  <span>y</span>
                  <span>z</span>
                </div>

              </div>

            </div>
          </div>
        </div>
        
      </div>

      <div class="cubetwo-menu-component">
        <div class="cubetwo-row">
          <button class="cubetwo-js cubetwo-btn cubetwo-btn-scramble">scramble</button>
          <button class="cubetwo-js cubetwo-btn cubetwo-btn-spin">spin</button>
          <button class="cubetwo-js cubetwo-btn cubetwo-btn-solve">solve</button>
        </div>
      </div>

      <div class="cubetwo-component" id="cubetwo-component-1">

        <div class="cubetwo-rotation-view">

          <div class="cubetwo-cube-group cubetwo-cube-group--1">

            <div class="cubetwo-cube-1" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="1">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="front">touch front</div>
                <div data-type="up">touch up</div>
                <div data-type="left">touch left</div>
              </div>
            </div>

            <div class="cubetwo-cube-2" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="2">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="front">touch front</div>
                <div data-type="up">touch up</div>
                <div data-type="right">touch right</div>
              </div>
            </div>

            <div class="cubetwo-cube-3" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="3">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="front">touch front</div>
                <div data-type="left">touch left</div>
                <div data-type="down">touch down</div>
              </div>
            </div>

            <div class="cubetwo-cube-4" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="4">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="front">touch front</div>
                <div data-type="right">touch right</div>
                <div data-type="down">touch down</div>
              </div>
            </div>

          </div>

          <div class="cubetwo-cube-group cubetwo-cube-group--2">

            <div class="cubetwo-cube-5" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="5">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="up">touch up</div>
                <div data-type="left">touch left</div>
                <div data-type="back">touch back</div>
              </div>
            </div>


            <div class="cubetwo-cube-6" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="6">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="up">touch up</div>
                <div data-type="right">touch right</div>
                <div data-type="back">touch back</div>
              </div>
            </div>


            <div class="cubetwo-cube-7" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="7">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="left">touch left</div>
                <div data-type="back">touch back</div>
                <div data-type="down">touch down</div>
              </div>
            </div>


            <div class="cubetwo-cube-8" tabindex="0" data-type="cubetwo">

              <div class="cubetwo-cube" data-type="cubetwo-display" data-index="8">
                <div data-type="front">
                  <div>front</div>
                </div>
                <div data-type="up">
                  <div>up</div>
                </div>
                <div data-type="right">
                  <div>right</div>
                </div>
                <div data-type="back">
                  <div>back</div>
                </div>
                <div data-type="down">
                  <div>down</div>
                </div>
                <div data-type="left">
                  <div>left</div>
                </div>
              </div>
              <div class="cubetwo-cube" data-type="cubetwo-touch">
                <div data-type="right">touch right</div>
                <div data-type="back">touch back</div>
                <div data-type="down">touch down</div>
              </div>
            </div>

          </div>
        </div>

        <div class="cubetwo-button-grid cubetwo-row-top">
          <button class="cubetwo-js cubetwo-btn-top-left cubetwo-btn-adjust">
            <i class="material-icons" aria-hidden="true">adjust</i>
          </button>
          <button class="cubetwo-js cubetwo-btn-top-center" aria-label="rotate up">
            <i class="material-icons" aria-hidden="true">&#xE5D8;</i>
          </button>
          <button class="cubetwo-js cubetwo-btn-top-right cubetwo-btn-adjust">
            <i class="material-icons" aria-hidden="true">adjust</i>
          </button>
        </div>
        <div class="cubetwo-button-grid cubetwo-column-left">
          <div></div>
          <div>
            <button class="cubetwo-js cubetwo-btn-rotate-left-2x" aria-label="rotate left 2">
              <i class="material-icons" aria-hidden="true">rotate_left</i>
            </button>
            <button class="cubetwo-js cubetwo-btn-rotate-left" aria-label="rotate left">
              <i class="material-icons" aria-hidden="true">&#xE5C4;</i>
            </button>
            <button class="cubetwo-js cubetwo-btn-toggle cubetwo-btn-help">
              <i class="material-icons">help_outline</i>
            </button>
          </div>
          <div></div>
        </div>
        <div class="cubetwo-button-grid cubetwo-column-right">
          <div></div>
          <div>
            <button class="cubetwo-js cubetwo-btn-rotate-right-2x" aria-label="rotate right 2">
              <i class="material-icons" aria-hidden="true">rotate_right</i>
            </button>
            <button class="cubetwo-js cubetwo-btn-rotate-right" aria-label="rotate right">
              <i class="material-icons" aria-hidden="true">arrow_forward</i>
            </button>
            <button class="cubetwo-js cubetwo-btn-toggle cubetwo-btn-menu" aria-label="menu">
              <i class="material-icons" aria-hidden="true">menu</i>
            </button>
          </div>
          <div></div>
        </div>


        <div class="cubetwo-button-grid cubetwo-row-bottom">
          <button class="cubetwo-js cubetwo-btn-bottom-left cubetwo-btn-adjust">
            <i class="material-icons" aria-hidden="true">adjust</i>
          </button>
          <button class="cubetwo-js cubetwo-btn-bottom-center" aria-label="rotate down">
            <i class="material-icons" aria-hidden="true">&#xE5DB;</i>
          </button>
          <button class="cubetwo-js cubetwo-btn-bottom-right cubetwo-btn-adjust">
            <i class="material-icons" aria-hidden="true">adjust</i>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import NavBreadcrumb from "@/components/NavBreadcrumb";
  export default {
    components: {
      NavBreadcrumb
    },
    //Vuex
    computed: {
      activeIndex() {
        return this.$store.state.activeIndex;
      }
    },
    mounted() {
      this.getGameInfo();
      this.getHammer();
      this.getCode();
      this.getJavascript();
    },
    methods: {
      //给导航加活跃状态
      getGameInfo() {
        this.$store.commit("updateNavHeaderActiveIndex", "/MyOrgIndex");
      },
      getHammer() {
        /*! Hammer.JS - v2.0.7 - 2016-04-22
         * http://hammerjs.github.io/
         *
         * Copyright (c) 2016 Jorik Tangelder;
         * Licensed under the MIT license */
        ! function (a, b, c, d) {
          "use strict";

          function e(a, b, c) {
            return setTimeout(j(a, c), b)
          }

          function f(a, b, c) {
            return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
          }

          function g(a, b, c) {
            var e;
            if (a)
              if (a.forEach) a.forEach(b, c);
              else if (a.length !== d)
              for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
            else
              for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
          }

          function h(b, c, d) {
            var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
            return function () {
              var c = new Error("get-stack-trace"),
                d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(
                  /^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                f = a.console && (a.console.warn || a.console.log);
              return f && f.call(a.console, e, d), b.apply(this, arguments)
            }
          }

          function i(a, b, c) {
            var d, e = b.prototype;
            d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
          }

          function j(a, b) {
            return function () {
              return a.apply(b, arguments)
            }
          }

          function k(a, b) {
            return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
          }

          function l(a, b) {
            return a === d ? b : a
          }

          function m(a, b, c) {
            g(q(b), function (b) {
              a.addEventListener(b, c, !1)
            })
          }

          function n(a, b, c) {
            g(q(b), function (b) {
              a.removeEventListener(b, c, !1)
            })
          }

          function o(a, b) {
            for (; a;) {
              if (a == b) return !0;
              a = a.parentNode
            }
            return !1
          }

          function p(a, b) {
            return a.indexOf(b) > -1
          }

          function q(a) {
            return a.trim().split(/\s+/g)
          }

          function r(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
              if (c && a[d][c] == b || !c && a[d] === b) return d;
              d++
            }
            return -1
          }

          function s(a) {
            return Array.prototype.slice.call(a, 0)
          }

          function t(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
              var g = b ? a[f][b] : a[f];
              r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
            }
            return c && (d = b ? d.sort(function (a, c) {
              return a[b] > c[b]
            }) : d.sort()), d
          }

          function u(a, b) {
            for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
              if (c = ma[g], e = c ? c + f : b, e in a) return e;
              g++
            }
            return d
          }

          function v() {
            return ua++
          }

          function w(b) {
            var c = b.ownerDocument || b;
            return c.defaultView || c.parentWindow || a
          }

          function x(a, b) {
            var c = this;
            this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler =
              function (b) {
                k(a.options.enable, [a]) && c.handler(b)
              }, this.init()
          }

          function y(a) {
            var b, c = a.options.inputClass;
            return new(b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
          }

          function z(a, b, c) {
            var d = c.pointers.length,
              e = c.changedPointers.length,
              f = b & Ea && d - e === 0,
              g = b & (Ga | Ha) && d - e === 0;
            c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c),
              a.recognize(c), a.session.prevInput = c
          }

          function A(a, b) {
            var c = a.session,
              d = b.pointers,
              e = d.length;
            c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !
              1);
            var f = c.firstInput,
              g = c.firstMultiple,
              h = g ? g.center : f.center,
              i = b.center = E(d);
            b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c,
              b), b.offsetDirection = G(b.deltaX, b.deltaY);
            var j = F(b.deltaTime, b.deltaX, b.deltaY);
            b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale =
              g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers
              .length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c,
                b);
            var k = a.element;
            o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
          }

          function B(a, b) {
            var c = b.center,
              d = a.offsetDelta || {},
              e = a.prevDelta || {},
              f = a.prevInput || {};
            b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
              x: f.deltaX || 0,
              y: f.deltaY || 0
            }, d = a.offsetDelta = {
              x: c.x,
              y: c.y
            }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
          }

          function C(a, b) {
            var c, e, f, g, h = a.lastInterval || b,
              i = b.timeStamp - h.timeStamp;
            if (b.eventType != Ha && (i > Da || h.velocity === d)) {
              var j = b.deltaX - h.deltaX,
                k = b.deltaY - h.deltaY,
                l = F(i, j, k);
              e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
            } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
            b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
          }

          function D(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
              clientX: pa(a.pointers[c].clientX),
              clientY: pa(a.pointers[c].clientY)
            }, c++;
            return {
              timeStamp: ra(),
              pointers: b,
              center: E(b),
              deltaX: a.deltaX,
              deltaY: a.deltaY
            }
          }

          function E(a) {
            var b = a.length;
            if (1 === b) return {
              x: pa(a[0].clientX),
              y: pa(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
              x: pa(c / b),
              y: pa(d / b)
            }
          }

          function F(a, b, c) {
            return {
              x: b / a || 0,
              y: c / a || 0
            }
          }

          function G(a, b) {
            return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
          }

          function H(a, b, c) {
            c || (c = Qa);
            var d = b[c[0]] - a[c[0]],
              e = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + e * e)
          }

          function I(a, b, c) {
            c || (c = Qa);
            var d = b[c[0]] - a[c[0]],
              e = b[c[1]] - a[c[1]];
            return 180 * Math.atan2(e, d) / Math.PI
          }

          function J(a, b) {
            return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
          }

          function K(a, b) {
            return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
          }

          function L() {
            this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
          }

          function M() {
            this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
          }

          function N() {
            this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
          }

          function O(a, b) {
            var c = s(a.touches),
              d = s(a.changedTouches);
            return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
          }

          function P() {
            this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
          }

          function Q(a, b) {
            var c = s(a.touches),
              d = this.targetIds;
            if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
            var e, f, g = s(a.changedTouches),
              h = [],
              i = this.target;
            if (f = c.filter(function (a) {
                return o(a.target, i)
              }), b === Ea)
              for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
            for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier],
              e++;
            return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
          }

          function R() {
            x.apply(this, arguments);
            var a = j(this.handler, this);
            this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
          }

          function S(a, b) {
            a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(
              this, b)
          }

          function T(a) {
            var b = a.changedPointers[0];
            if (b.identifier === this.primaryTouch) {
              var c = {
                x: b.clientX,
                y: b.clientY
              };
              this.lastTouches.push(c);
              var d = this.lastTouches,
                e = function () {
                  var a = d.indexOf(c);
                  a > -1 && d.splice(a, 1)
                };
              setTimeout(e, cb)
            }
          }

          function U(a) {
            for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
              var e = this.lastTouches[d],
                f = Math.abs(b - e.x),
                g = Math.abs(c - e.y);
              if (db >= f && db >= g) return !0
            }
            return !1
          }

          function V(a, b) {
            this.manager = a, this.set(b)
          }

          function W(a) {
            if (p(a, jb)) return jb;
            var b = p(a, kb),
              c = p(a, lb);
            return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
          }

          function X() {
            if (!fb) return !1;
            var b = {},
              c = a.CSS && a.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
              b[d] = c ? a.CSS.supports("touch-action", d) : !0
            }), b
          }

          function Y(a) {
            this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(
              this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
          }

          function Z(a) {
            return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
          }

          function $(a) {
            return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
          }

          function _(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
          }

          function aa() {
            Y.apply(this, arguments)
          }

          function ba() {
            aa.apply(this, arguments), this.pX = null, this.pY = null
          }

          function ca() {
            aa.apply(this, arguments)
          }

          function da() {
            Y.apply(this, arguments), this._timer = null, this._input = null
          }

          function ea() {
            aa.apply(this, arguments)
          }

          function fa() {
            aa.apply(this, arguments)
          }

          function ga() {
            Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count =
              0
          }

          function ha(a, b) {
            return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
          }

          function ia(a, b) {
            this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this
              .handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input =
              y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers,
                function (a) {
                  var b = this.add(new a[0](a[1]));
                  a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
                }, this)
          }

          function ja(a, b) {
            var c = a.element;
            if (c.style) {
              var d;
              g(a.options.cssProps, function (e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[
                  d] || ""
              }), b || (a.oldCssProps = {})
            }
          }

          function ka(a, c) {
            var d = b.createEvent("Event");
            d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
          }
          var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"],
            na = b.createElement("div"),
            oa = "function",
            pa = Math.round,
            qa = Math.abs,
            ra = Date.now;
          la = "function" != typeof Object.assign ? function (a) {
            if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
            for (var b = Object(a), c = 1; c < arguments.length; c++) {
              var e = arguments[c];
              if (e !== d && null !== e)
                for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
            }
            return b
          } : Object.assign;
          var sa = h(function (a, b, c) {
              for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
              return a
            }, "extend", "Use `assign`."),
            ta = h(function (a, b) {
              return sa(a, b, !0)
            }, "merge", "Use `assign`."),
            ua = 1,
            va = /mobile|tablet|ip(ad|hone|od)|android/i,
            wa = "ontouchstart" in a,
            xa = u(a, "PointerEvent") !== d,
            ya = wa && va.test(navigator.userAgent),
            za = "touch",
            Aa = "pen",
            Ba = "mouse",
            Ca = "kinect",
            Da = 25,
            Ea = 1,
            Fa = 2,
            Ga = 4,
            Ha = 8,
            Ia = 1,
            Ja = 2,
            Ka = 4,
            La = 8,
            Ma = 16,
            Na = Ja | Ka,
            Oa = La | Ma,
            Pa = Na | Oa,
            Qa = ["x", "y"],
            Ra = ["clientX", "clientY"];
          x.prototype = {
            handler: function () {},
            init: function () {
              this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget,
                this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
            },
            destroy: function () {
              this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget,
                this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
            }
          };
          var Sa = {
              mousedown: Ea,
              mousemove: Fa,
              mouseup: Ga
            },
            Ta = "mousedown",
            Ua = "mousemove mouseup";
          i(L, x, {
            handler: function (a) {
              var b = Sa[a.type];
              b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed &&
                (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                  pointers: [a],
                  changedPointers: [a],
                  pointerType: Ba,
                  srcEvent: a
                }))
            }
          });
          var Va = {
              pointerdown: Ea,
              pointermove: Fa,
              pointerup: Ga,
              pointercancel: Ha,
              pointerout: Ha
            },
            Wa = {
              2: za,
              3: Aa,
              4: Ba,
              5: Ca
            },
            Xa = "pointerdown",
            Ya = "pointermove pointerup pointercancel";
          a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya =
            "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
            handler: function (a) {
              var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Va[d],
                f = Wa[a.pointerType] || a.pointerType,
                g = f == za,
                h = r(b, a.pointerId, "pointerId");
              e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0),
                0 > h || (b[h] = a, this.callback(this.manager, e, {
                  pointers: b,
                  changedPointers: [a],
                  pointerType: f,
                  srcEvent: a
                }), c && b.splice(h, 1))
            }
          });
          var Za = {
              touchstart: Ea,
              touchmove: Fa,
              touchend: Ga,
              touchcancel: Ha
            },
            $a = "touchstart",
            _a = "touchstart touchmove touchend touchcancel";
          i(N, x, {
            handler: function (a) {
              var b = Za[a.type];
              if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager,
                  b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                  })
              }
            }
          });
          var ab = {
              touchstart: Ea,
              touchmove: Fa,
              touchend: Ga,
              touchcancel: Ha
            },
            bb = "touchstart touchmove touchend touchcancel";
          i(P, x, {
            handler: function (a) {
              var b = ab[a.type],
                c = Q.call(this, a, b);
              c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
              })
            }
          });
          var cb = 2500,
            db = 25;
          i(R, x, {
            handler: function (a, b, c) {
              var d = c.pointerType == za,
                e = c.pointerType == Ba;
              if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d) S.call(this, b, c);
                else if (e && U.call(this, c)) return;
                this.callback(a, b, c)
              }
            },
            destroy: function () {
              this.touch.destroy(), this.mouse.destroy()
            }
          });
          var eb = u(na.style, "touchAction"),
            fb = eb !== d,
            gb = "compute",
            hb = "auto",
            ib = "manipulation",
            jb = "none",
            kb = "pan-x",
            lb = "pan-y",
            mb = X();
          V.prototype = {
            set: function (a) {
              a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[
                eb] = a), this.actions = a.toLowerCase().trim()
            },
            update: function () {
              this.set(this.manager.options.touchAction)
            },
            compute: function () {
              var a = [];
              return g(this.manager.recognizers, function (b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
              }), W(a.join(" "))
            },
            preventDefaults: function (a) {
              var b = a.srcEvent,
                c = a.offsetDirection;
              if (this.manager.session.prevented) return void b.preventDefault();
              var d = this.actions,
                e = p(d, jb) && !mb[jb],
                f = p(d, lb) && !mb[lb],
                g = p(d, kb) && !mb[kb];
              if (e) {
                var h = 1 === a.pointers.length,
                  i = a.distance < 2,
                  j = a.deltaTime < 250;
                if (h && i && j) return
              }
              return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
            },
            preventSrc: function (a) {
              this.manager.session.prevented = !0, a.preventDefault()
            }
          };
          var nb = 1,
            ob = 2,
            pb = 4,
            qb = 8,
            rb = qb,
            sb = 16,
            tb = 32;
          Y.prototype = {
            defaults: {},
            set: function (a) {
              return la(this.options, a), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function (a) {
              if (f(a, "recognizeWith", this)) return this;
              var b = this.simultaneous;
              return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
            },
            dropRecognizeWith: function (a) {
              return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
            },
            requireFailure: function (a) {
              if (f(a, "requireFailure", this)) return this;
              var b = this.requireFail;
              return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
            },
            dropRequireFailure: function (a) {
              if (f(a, "dropRequireFailure", this)) return this;
              a = _(a, this);
              var b = r(this.requireFail, a);
              return b > -1 && this.requireFail.splice(b, 1), this
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0
            },
            canRecognizeWith: function (a) {
              return !!this.simultaneous[a.id]
            },
            emit: function (a) {
              function b(b) {
                c.manager.emit(b, a)
              }
              var c = this,
                d = this.state;
              qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >=
                qb && b(c.options.event + Z(d))
            },
            tryEmit: function (a) {
              return this.canEmit() ? this.emit(a) : void(this.state = tb)
            },
            canEmit: function () {
              for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (tb | nb))) return !1;
                a++
              }
              return !0
            },
            recognize: function (a) {
              var b = la({}, a);
              return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state =
                this.process(b), void(this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void(
                this.state = tb))
            },
            process: function (a) {},
            getTouchAction: function () {},
            reset: function () {}
          }, i(aa, Y, {
            defaults: {
              pointers: 1
            },
            attrTest: function (a) {
              var b = this.options.pointers;
              return 0 === b || a.pointers.length === b
            },
            process: function (a) {
              var b = this.state,
                c = a.eventType,
                d = b & (ob | pb),
                e = this.attrTest(a);
              return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
            }
          }), i(ba, aa, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: Pa
            },
            getTouchAction: function () {
              var a = this.options.direction,
                b = [];
              return a & Na && b.push(lb), a & Oa && b.push(kb), b
            },
            directionTest: function (a) {
              var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;
              return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX,
                d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(
                a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
            },
            attrTest: function (a) {
              return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(
                a))
            },
            emit: function (a) {
              this.pX = a.deltaX, this.pY = a.deltaY;
              var b = $(a.direction);
              b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
            }
          }), i(ca, aa, {
            defaults: {
              event: "pinch",
              threshold: 0,
              pointers: 2
            },
            getTouchAction: function () {
              return [jb]
            },
            attrTest: function (a) {
              return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold ||
                this.state & ob)
            },
            emit: function (a) {
              if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
              }
              this._super.emit.call(this, a)
            }
          }), i(da, Y, {
            defaults: {
              event: "press",
              pointers: 1,
              time: 251,
              threshold: 9
            },
            getTouchAction: function () {
              return [hb]
            },
            process: function (a) {
              var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
              if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();
              else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
                this.state = rb, this.tryEmit()
              }, b.time, this);
              else if (a.eventType & Ga) return rb;
              return tb
            },
            reset: function () {
              clearTimeout(this._timer)
            },
            emit: function (a) {
              this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (
                this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
            }
          }), i(ea, aa, {
            defaults: {
              event: "rotate",
              threshold: 0,
              pointers: 2
            },
            getTouchAction: function () {
              return [jb]
            },
            attrTest: function (a) {
              return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this
                .state & ob)
            }
          }), i(fa, aa, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: .3,
              direction: Na | Oa,
              pointers: 1
            },
            getTouchAction: function () {
              return ba.prototype.getTouchAction.call(this)
            },
            attrTest: function (a) {
              var b, c = this.options.direction;
              return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY),
                this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold &&
                a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
            },
            emit: function (a) {
              var b = $(a.offsetDirection);
              b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
            }
          }), i(ga, Y, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10
            },
            getTouchAction: function () {
              return [ib]
            },
            process: function (a) {
              var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
              if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
              if (d && f && c) {
                if (a.eventType != Ga) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                  h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1,
                  this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
                  this.state = rb, this.tryEmit()
                }, b.interval, this), ob) : rb
              }
              return tb
            },
            failTimeout: function () {
              return this._timer = e(function () {
                this.state = tb
              }, this.options.interval, this), tb
            },
            reset: function () {
              clearTimeout(this._timer)
            },
            emit: function () {
              this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
          }), ha.VERSION = "2.0.7", ha.defaults = {
            domEvents: !1,
            touchAction: gb,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [ea, {
                enable: !1
              }],
              [ca, {
                  enable: !1
                },
                ["rotate"]
              ],
              [fa, {
                direction: Na
              }],
              [ba, {
                  direction: Na
                },
                ["swipe"]
              ],
              [ga],
              [ga, {
                  event: "doubletap",
                  taps: 2
                },
                ["tap"]
              ],
              [da]
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)"
            }
          };
          var ub = 1,
            vb = 2;
          ia.prototype = {
            set: function (a) {
              return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(),
                this.input.target = a.inputTarget, this.input.init()), this
            },
            stop: function (a) {
              this.session.stopped = a ? vb : ub
            },
            recognize: function (a) {
              var b = this.session;
              if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                  e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ?
                  c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
              }
            },
            get: function (a) {
              if (a instanceof Y) return a;
              for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
              return null
            },
            add: function (a) {
              if (f(a, "add", this)) return this;
              var b = this.get(a.options.event);
              return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
            },
            remove: function (a) {
              if (f(a, "remove", this)) return this;
              if (a = this.get(a)) {
                var b = this.recognizers,
                  c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
              }
              return this
            },
            on: function (a, b) {
              if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                  c[a] = c[a] || [], c[a].push(b)
                }), this
              }
            },
            off: function (a, b) {
              if (a !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                  b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                }), this
              }
            },
            emit: function (a, b) {
              this.options.domEvents && ka(a, b);
              var c = this.handlers[a] && this.handlers[a].slice();
              if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                  b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
              }
            },
            destroy: function () {
              this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element =
                null
            }
          }, la(ha, {
            INPUT_START: Ea,
            INPUT_MOVE: Fa,
            INPUT_END: Ga,
            INPUT_CANCEL: Ha,
            STATE_POSSIBLE: nb,
            STATE_BEGAN: ob,
            STATE_CHANGED: pb,
            STATE_ENDED: qb,
            STATE_RECOGNIZED: rb,
            STATE_CANCELLED: sb,
            STATE_FAILED: tb,
            DIRECTION_NONE: Ia,
            DIRECTION_LEFT: Ja,
            DIRECTION_RIGHT: Ka,
            DIRECTION_UP: La,
            DIRECTION_DOWN: Ma,
            DIRECTION_HORIZONTAL: Na,
            DIRECTION_VERTICAL: Oa,
            DIRECTION_ALL: Pa,
            Manager: ia,
            Input: x,
            TouchAction: V,
            TouchInput: P,
            MouseInput: L,
            PointerEventInput: M,
            TouchMouseInput: R,
            SingleTouchInput: N,
            Recognizer: Y,
            AttrRecognizer: aa,
            Tap: ga,
            Pan: ba,
            Swipe: fa,
            Pinch: ca,
            Rotate: ea,
            Press: da,
            on: m,
            off: n,
            each: g,
            merge: ta,
            extend: sa,
            assign: la,
            inherit: i,
            bindFn: j,
            prefixed: u
          });
          var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
          wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
            return ha
          }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
        }(window, document, "Hammer");
        //# sourceMappingURL=hammer.min.js.map
      },
      getCode() {
        ! function (e) {
          function t(a) {
            if (i[a]) return i[a].exports;
            var n = i[a] = {
              exports: {},
              id: a,
              loaded: !1
            };
            return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
          }
          var i = {};
          return t.m = e, t.c = i, t.p = "", t(0)
        }([function (e, t, i) {
          e.exports = i(9)
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ROTATION_VIEW = t.EVENT_NAMES = t.KEY = t.LEFT = t.OPPOSITE = t.STATES_ARRAY = t.STATES = void 0;
          var n = i(3),
            s = a(n),
            r = {
              X: 20,
              Y: 30
            };
          (0, s.default)(r);
          var o = {
            uf: "uf",
            ur: "ur",
            ub: "ub",
            ul: "ul",
            fu: "fu",
            fl: "fl",
            fd: "fd",
            fr: "fr",
            ru: "ru",
            rf: "rf",
            rd: "rd",
            rb: "rb",
            df: "df",
            dl: "dl",
            db: "db",
            dr: "dr",
            bu: "bu",
            br: "br",
            bd: "bd",
            bl: "bl",
            lu: "lu",
            lb: "lb",
            ld: "ld",
            lf: "lf"
          };
          (0, s.default)(o);
          var c = [];
          Object.keys(o).forEach(function (e, t) {
            return c.push(e)
          }), (0, s.default)(c);
          var u = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            a: 65,
            d: 68,
            e: 69,
            q: 81,
            s: 83,
            w: 87,
            x: 88,
            y: 89,
            z: 90
          };
          (0, s.default)(u);
          var l = {
            init: "init",
            statechange: "statechange",
            beforerotate: "beforerotate",
            afterrotate: "afterrotate",
            issolved: "issolved"
          };
          (0, s.default)(l);
          var d = [];
          d.u = "d", d.d = "u", d.r = "l", d.l = "r", d.f = "b", d.b = "f";
          var p = [];
          p.uf = "l", p.ur = "f", p.ub = "r", p.ul = "b", p.fu = "r", p.fl = "u", p.fd = "l", p.fr = "d", p.ru =
            "b", p.rf = "u", p.rd = "f", p.rb = "d", p.df = "r", p.dl = "f", p.db = "l", p.dr = "b", p.bu = "l", p.br =
            "u", p.bd = "r", p.bl = "d", p.lu = "f", p.lb = "u", p.ld = "b", p.lf = "d", t.STATES = o, t.STATES_ARRAY =
            c, t.OPPOSITE = d, t.LEFT = p, t.KEY = u, t.EVENT_NAMES = l, t.ROTATION_VIEW = r
        }, function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          t.log = console.log.bind(console), t.error = console.error.bind(console), t.debug = console.debug.bind(
            console)
        }, function (e, t) {
          e.exports = function e(t) {
            return Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function (i) {
              !t.hasOwnProperty(i) || null === t[i] || "object" != typeof t[i] && "function" != typeof t[i] ||
                Object.isFrozen(t[i]) || e(t[i])
            }), t
          }
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            window.requestAnimationFrame(e)
          }

          function n(e) {
            window.requestAnimationFrame(function (t) {
              window.requestAnimationFrame(e)
            })
          }

          function s(e) {
            return e[0]
          }

          function r(e) {
            return e[1]
          }

          function o(e) {
            return f.OPPOSITE[c(e)]
          }

          function c(e) {
            return f.LEFT[e]
          }

          function u(e) {
            return f.OPPOSITE[e[0]]
          }

          function l(e) {
            return f.OPPOSITE[e[1]]
          }

          function d(e) {
            return Object.assign({}, e)
          }

          function p() {
            var e = f.STATES_ARRAY;
            this.first = f.STATES_ARRAY[0], this.last = f.STATES_ARRAY[f.STATES_ARRAY.length - 1], this.stateCount =
              e.length, this.get = function (t) {
                var i = e.indexOf(t);
                if (i >= 0) return i === e.length - 1 ? {
                  state: e[0],
                  index: 0
                } : {
                  state: e[i + 1],
                  index: i + 1
                }
              }
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
            }), t.nextState = void 0, t.rAF = a, t.nextFrame = n, t.getUp = s, t.getFront = r, t.getRight = o, t.getLeft =
            c, t.getDown = u, t.getBack = l, t.cloneObject = d;
          var f = i(1),
            b = (i(2), new p);
          t.nextState = b
        }, function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          t.qs = function (e, t) {
            return (t || document).querySelector(e)
          }, t.qsa = function (e, t) {
            return [].slice.call((t || document).querySelectorAll(e), 0)
          }, t.byId = function (e) {
            return document.getElementById(e)
          }
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          var n = i(1),
            s = i(3),
            r = a(s),
            o = [];
          Object.keys(n.STATES).forEach(function (e, t) {
            return o[e] = []
          }), o.lf.u = {
            angle: 90,
            dir: "Z"
          }, o.rf.u = {
            angle: -90,
            dir: "Z"
          }, o.fl.u = {
            angle: -90,
            dir: "Z"
          }, o.fu.u = {
            angle: 180,
            dir: "Z"
          }, o.fr.u = {
            angle: 90,
            dir: "Z"
          }, o.bl.u = {
            angle: 90,
            dir: "Z"
          }, o.dl.u = {
            angle: -90,
            dir: "Z"
          }, o.rb.u = {
            angle: 90,
            dir: "Z"
          }, o.lu.u = {
            angle: -90,
            dir: "Z"
          }, o.lf.f = {
            angle: 90,
            dir: "Z"
          }, o.rf.f = {
            angle: -90,
            dir: "Z"
          }, o.db.f = {
            angle: 180,
            dir: "Z"
          }, o.fl.f = {
            angle: -90,
            dir: "Z"
          }, o.dl.f = {
            angle: 180,
            dir: "Z"
          }, o.bl.f = {
            angle: 90,
            dir: "Z"
          }, o.rd.f = {
            angle: -90,
            dir: "Z"
          }, o.ld.f = {
            angle: 90,
            dir: "Z"
          }, o.bd.f = {
            angle: 180,
            dir: "Z"
          }, o.br.f = {
            angle: -90,
            dir: "Z"
          }, o.fu.f = {
            angle: 180,
            dir: "Z"
          }, o.lu.f = {
            angle: 90,
            dir: "Z"
          }, o.ru.f = {
            angle: -90,
            dir: "Z"
          }, o.fr.f = {
            angle: 90,
            dir: "Z"
          }, o.df.f = {
            angle: 180,
            dir: "Z"
          }, o.dr.f = {
            angle: 180,
            dir: "Z"
          }, o.rb.f = {
            angle: 90,
            dir: "Z"
          }, o.lb.f = {
            angle: -90,
            dir: "Z"
          }, o.fd.r = {
            angle: 90,
            dir: "Z"
          }, o.db.r = {
            angle: 180,
            dir: "Z"
          }, o.bu.r = {
            angle: -90,
            dir: "Z"
          }, o.ld.r = {
            angle: 90,
            dir: "Z"
          }, o.rd.r = {
            angle: 90,
            dir: "Z"
          }, o.dl.r = {
            angle: 180,
            dir: "Z"
          }, o.lu.r = {
            angle: -90,
            dir: "Z"
          }, o.lf.r = {
            angle: 90,
            dir: "Z"
          }, o.rf.r = {
            angle: -90,
            dir: "Z"
          }, o.bd.r = {
            angle: 90,
            dir: "Z"
          }, o.br.r = {
            angle: 180,
            dir: "Z"
          }, o.lb.r = {
            angle: 90,
            dir: "Z"
          }, o.fu.r = {
            angle: -90,
            dir: "Z"
          }, o.df.r = {
            angle: 180,
            dir: "Z"
          }, o.fr.r = {
            angle: 180,
            dir: "Z"
          }, o.ru.r = {
            angle: -90,
            dir: "Z"
          }, o.dr.r = {
            angle: 180,
            dir: "Z"
          }, o.rb.r = {
            angle: -90,
            dir: "Z"
          }, o.fd.l = {
            angle: -90,
            dir: "Z"
          }, o.db.l = {
            angle: 180,
            dir: "Z"
          }, o.bu.l = {
            angle: 90,
            dir: "Z"
          }, o.rf.l = {
            angle: -90,
            dir: "Z"
          }, o.fl.l = {
            angle: 180,
            dir: "Z"
          }, o.rd.l = {
            angle: -90,
            dir: "Z"
          }, o.bl.l = {
            angle: 180,
            dir: "Z"
          }, o.bd.l = {
            angle: -90,
            dir: "Z"
          }, o.fu.l = {
            angle: 90,
            dir: "Z"
          }, o.lf.l = {
            angle: 90,
            dir: "Z"
          }, o.df.l = {
            angle: 180,
            dir: "Z"
          }, o.rb.l = {
            angle: -90,
            dir: "Z"
          }, o.ru.l = {
            angle: 90,
            dir: "Z"
          }, o.ld.l = {
            angle: -90,
            dir: "Z"
          }, o.dr.l = {
            angle: 180,
            dir: "Z"
          }, o.lu.l = {
            angle: 90,
            dir: "Z"
          }, o.dl.l = {
            angle: 180,
            dir: "Z"
          }, o.lb.l = {
            angle: 90,
            dir: "Z"
          }, o.ul.u = {
            angle: -90,
            dir: "Z"
          }, o.ur.u = {
            angle: 90,
            dir: "Z"
          }, o.ub.u = {
            angle: 180,
            dir: "Z"
          }, o.bu.u = {
            angle: 180,
            dir: "Z"
          }, o.dr.u = {
            angle: 90,
            dir: "Z"
          }, o.ru.u = {
            angle: 180,
            dir: "Z"
          }, o.br.u = {
            angle: -90,
            dir: "Z"
          }, o.lb.u = {
            angle: -90,
            dir: "Z"
          }, o.lu.u = {
            angle: 180,
            dir: "Z"
          }, o.df.u = {
            angle: 180,
            dir: "Z"
          }, o.fd.b = {
            angle: 180,
            dir: "Z"
          }, o.dr.b = {
            angle: 180,
            dir: "Z"
          }, o.db.b = {
            angle: 180,
            dir: "Z"
          }, o.bu.b = {
            angle: 180,
            dir: "Z"
          }, o.bl.b = {
            angle: -90,
            dir: "Z"
          }, o.fl.b = {
            angle: 90,
            dir: "Z"
          }, o.lb.b = {
            angle: 90,
            dir: "Z"
          }, o.rd.b = {
            angle: -90,
            dir: "Z"
          }, o.ld.b = {
            angle: 90,
            dir: "Z"
          }, o.ru.b = {
            angle: -90,
            dir: "Z"
          }, o.br.b = {
            angle: 90,
            dir: "Z"
          }, o.fr.b = {
            angle: -90,
            dir: "Z"
          }, o.lf.b = {
            angle: -90,
            dir: "Z"
          }, o.df.b = {
            angle: 180,
            dir: "Z"
          }, o.rf.b = {
            angle: 90,
            dir: "Z"
          }, o.rb.b = {
            angle: -90,
            dir: "Z"
          }, o.dl.b = {
            angle: 180,
            dir: "Z"
          }, o.lu.b = {
            angle: 90,
            dir: "Z"
          }, o.lf.d = {
            angle: 90,
            dir: "Z"
          }, o.fd.d = {
            angle: 180,
            dir: "Z"
          }, o.dl.d = {
            angle: 90,
            dir: "Z"
          }, o.ul.d = {
            angle: 90,
            dir: "Z"
          }, o.bl.d = {
            angle: 90,
            dir: "Z"
          }, o.ur.d = {
            angle: -90,
            dir: "Z"
          }, o.ub.d = {
            angle: 180,
            dir: "Z"
          }, o.br.d = {
            angle: -90,
            dir: "Z"
          }, o.bd.d = {
            angle: 180,
            dir: "Z"
          }, o.rf.d = {
            angle: -90,
            dir: "Z"
          }, o.df.d = {
            angle: 180,
            dir: "Z"
          }, o.dr.d = {
            angle: -90,
            dir: "Z"
          }, o.ld.d = {
            angle: 180,
            dir: "Z"
          }, o.fl.d = {
            angle: -90,
            dir: "Z"
          }, o.fr.d = {
            angle: 90,
            dir: "Z"
          }, o.rd.d = {
            angle: 180,
            dir: "Z"
          }, o.rb.d = {
            angle: 90,
            dir: "Z"
          }, o.lb.d = {
            angle: -90,
            dir: "Z"
          }, (0, r.default)(o), t.default = o
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          var n = i(1),
            s = i(4),
            r = i(3),
            o = a(r),
            c = [];
          Object.keys(n.STATES).forEach(function (e, t) {
            return c[e] = []
          });
          var u = void 0,
            l = void 0,
            d = void 0,
            p = void 0,
            f = s.nextState.first;
          for (u = 0; u < s.nextState.stateCount; u++) l = f[0], d = f[1], c[f].x = "" + d + n.OPPOSITE[l], c[f][
            "-x"
          ] = "" + n.OPPOSITE[d] + l, c[f].y = "" + l + (0, s.getLeft)(f), c[f]["-y"] = "" + l + (0, s.getRight)(
            f), c[f].z = "" + (0, s.getLeft)(f) + d, c[f]["-z"] = "" + (0, s.getRight)(f) + d, p = s.nextState.get(
            f), f = p.state;
          (0, o.default)(c), t.default = c
        }, function (e, t) {}, function (e, t, i) {
          "use strict";
          i(8);
          var a = (i(2), i(5)),
            n = i(1),
            s = i(17),
            r = ((0, a.qs)(".body-wrapper"), (0, a.byId)("cubetwo-component-1")),
            o = (0, a.qs)(".cubetwo-rotation-view", r),
            c = (0, a.qs)(".cubetwo-js.cubetwo-btn-menu", r),
            u = (0, a.qs)(".cubetwo-menu-component"),
            l = (0, a.qs)(".cubetwo-btn-solve", u),
            d = (0, a.qs)(".cubetwo-btn-scramble", u),
            p = (0, a.qs)(".cubetwo-btn-spin", u);
          c.addEventListener("click", function (e) {
            // u.classList.toggle("cubetwo-show-dialog"), e.currentTarget.classList.toggle("cubetwo-active")
          }), l.addEventListener("click", function (e) {
            return cubetwo.solve()
          }), d.addEventListener("click", function (e) {
            return cubetwo.scramble()
          }), p.addEventListener("click", function (e) {
            p.classList.toggle("cubetwo-active"), o.classList.toggle("spin")
          });
          var f = (0, a.qs)(".cubetwo-js.cubetwo-btn-help", r),
            b = (0, a.qs)(".cubetwo-help-component");
          f.addEventListener("click", function (e) {
            // b.classList.toggle("cubetwo-show-dialog"), e.currentTarget.classList.toggle("cubetwo-active")
          }), (0, a.qs)(".cubetwo-btn-top-left", r).addEventListener("click", function (e) {
            return o.style.transform = "rotateX(" + n.ROTATION_VIEW.X + "deg) rotateY(-" + n.ROTATION_VIEW.Y +
              "deg) rotateZ(0deg)"
          }), (0, a.qs)(".cubetwo-btn-top-right", r).addEventListener("click", function (e) {
            return o.style.transform = "rotateX(" + n.ROTATION_VIEW.X + "deg) rotateY(" + n.ROTATION_VIEW.Y +
              "deg) rotateZ(0deg)"
          }), (0, a.qs)(".cubetwo-btn-bottom-left", r).addEventListener("click", function (e) {
            return o.style.transform = "rotateX(-" + n.ROTATION_VIEW.X + "deg) rotateY(-" + n.ROTATION_VIEW.Y +
              "deg) rotateZ(0deg)"
          }), (0, a.qs)(".cubetwo-btn-bottom-right", r).addEventListener("click", function (e) {
            return o.style.transform = "rotateX(-" + n.ROTATION_VIEW.X + "deg) rotateY(" + n.ROTATION_VIEW.Y +
              "deg) rotateZ(0deg)"
          }), (0, a.qs)(".cubetwo-btn-top-center", r).addEventListener("click", function (e) {
            return cubetwo.x()
          }), (0, a.qs)(".cubetwo-btn-bottom-center", r).addEventListener("click", function (e) {
            return cubetwo.x_()
          }), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-left", r).addEventListener("click", function (e) {
            return cubetwo.y_()
          }), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-left-2x", r).addEventListener("click", function (e) {
            return cubetwo.z_()
          }), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-right", r).addEventListener("click", function (e) {
            return cubetwo.y()
          }), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-right-2x", r).addEventListener("click", function (e) {
            return cubetwo.z()
          }), window.CubeTwo = s.CubeTwo
        }, , function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          t.CUBE_COUNT = 8, t.CUBE_SIZE_2X = "50vmin"
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.U();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.L_();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.U_();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.L();
                break;
              case p.KEY.q:
                this.F_();
                break;
              case p.KEY.e:
                this.F();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function n(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.U();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.R();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.U_();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.R_();
                break;
              case p.KEY.q:
                this.F_();
                break;
              case p.KEY.e:
                this.F();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function s(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.D_();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.L_();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.D();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.L();
                break;
              case p.KEY.q:
                this.F_();
                break;
              case p.KEY.e:
                this.F();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function r(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.D_();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.R();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.D();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.R_();
                break;
              case p.KEY.q:
                this.F_();
                break;
              case p.KEY.e:
                this.F();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function o(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.U();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.L_();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.U_();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.L();
                break;
              case p.KEY.q:
                this.B();
                break;
              case p.KEY.e:
                this.B_();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function c(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.U();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.R();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.U_();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.R_();
                break;
              case p.KEY.q:
                this.B();
                break;
              case p.KEY.e:
                this.B_();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function u(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.D_();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.L_();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.D();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.L();
                break;
              case p.KEY.q:
                this.B();
                break;
              case p.KEY.e:
                this.B_();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function l(e) {
            switch (e.stopPropagation(), e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.D_();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
                this.R();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
                this.D();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.R_();
                break;
              case p.KEY.q:
                this.B();
                break;
              case p.KEY.e:
                this.B_();
                break;
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.z:
                this.z()
            }
          }

          function d(e) {
            switch (e.keyCode) {
              case p.KEY.LEFT:
              case p.KEY.a:
                this.y_();
                break;
              case p.KEY.UP:
                e.preventDefault();
              case p.KEY.w:
              case p.KEY.x:
                this.x();
                break;
              case p.KEY.RIGHT:
              case p.KEY.d:
              case p.KEY.y:
                this.y();
                break;
              case p.KEY.DOWN:
                e.preventDefault();
              case p.KEY.s:
                this.x_();
                break;
              case p.KEY.q:
                this.z_();
                break;
              case p.KEY.e:
              case p.KEY.z:
                this.z()
            }
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
            }), t.handleKeyEventCube1 = a, t.handleKeyEventCube2 = n, t.handleKeyEventCube3 = s, t.handleKeyEventCube4 =
            r, t.handleKeyEventCube5 = o, t.handleKeyEventCube6 = c, t.handleKeyEventCube7 = u, t.handleKeyEventCube8 =
            l, t.handleGlobalKeyEvent = d;
          var p = i(1)
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }

          function n(e) {
            function t(e, t, i, a, n) {
              e.code = o.default[e.code][n], t.code = o.default[t.code][n], i.code = o.default[i.code][n], a.code =
                o.default[a.code][n]
            }

            function i() {
              var e = _[0],
                i = _[1],
                a = _[2],
                n = _[3];
              t(e, i, a, n, "z");
              var r = (0, s.cloneObject)(e);
              _[0] = a, _[2] = n, _[3] = i, _[1] = r
            }

            function a() {
              var e = _[0],
                i = _[1],
                a = _[2],
                n = _[3];
              t(e, i, a, n, "-z");
              var r = (0, s.cloneObject)(e);
              _[0] = i, _[1] = n, _[3] = a, _[2] = r
            }

            function n() {
              var e = _[4],
                i = _[5],
                a = _[6],
                n = _[7];
              t(e, i, a, n, "z");
              var r = (0, s.cloneObject)(e);
              _[4] = a, _[6] = n, _[7] = i, _[5] = r
            }

            function r() {
              var e = _[4],
                i = _[5],
                a = _[6],
                n = _[7];
              t(e, i, a, n, "-z");
              var r = (0, s.cloneObject)(e);
              _[4] = i, _[5] = n, _[7] = a, _[6] = r
            }

            function c() {
              var e = _[1],
                i = _[3],
                a = _[5],
                n = _[7];
              t(e, i, a, n, "x");
              var r = (0, s.cloneObject)(e);
              _[1] = i, _[3] = n, _[7] = a, _[5] = r
            }

            function u() {
              var e = _[1],
                i = _[3],
                a = _[5],
                n = _[7];
              t(e, i, a, n, "-x");
              var r = (0, s.cloneObject)(e);
              _[1] = a, _[5] = n, _[7] = i, _[3] = r
            }

            function l() {
              var e = _[0],
                i = _[2],
                a = _[4],
                n = _[6];
              t(e, i, a, n, "-x");
              var r = (0, s.cloneObject)(e);
              _[0] = a, _[4] = n, _[6] = i, _[2] = r
            }

            function d() {
              var e = _[0],
                i = _[2],
                a = _[4],
                n = _[6];
              t(e, i, a, n, "x");
              var r = (0, s.cloneObject)(e);
              _[0] = i, _[2] = n, _[6] = a, _[4] = r
            }

            function p() {
              var e = _[0],
                i = _[1],
                a = _[4],
                n = _[5];
              t(e, i, a, n, "-y");
              var r = (0, s.cloneObject)(e);
              _[0] = i, _[1] = n, _[5] = a, _[4] = r
            }

            function f() {
              var e = _[0],
                i = _[1],
                a = _[4],
                n = _[5];
              t(e, i, a, n, "y");
              var r = (0, s.cloneObject)(e);
              _[0] = a, _[4] = n, _[5] = i, _[1] = r
            }

            function b() {
              var e = _[2],
                i = _[3],
                a = _[6],
                n = _[7];
              t(e, i, a, n, "y");
              var r = (0, s.cloneObject)(e);
              _[2] = a, _[6] = n, _[7] = i, _[3] = r
            }

            function g() {
              var e = _[2],
                i = _[3],
                a = _[6],
                n = _[7];
              t(e, i, a, n, "-y");
              var r = (0, s.cloneObject)(e);
              _[2] = i, _[3] = n, _[7] = a, _[6] = r
            }
            var h = e.action,
              _ = e.stateCodes;
            switch (h) {
              case "F":
                i();
                break;
              case "F_":
                a();
                break;
              case "B":
                r();
                break;
              case "B_":
                n();
                break;
              case "z":
                i(), n();
                break;
              case "z2":
                i(), n(), i(), n();
                break;
              case "z_":
                a(), r();
                break;
              case "z2_":
                a(), r(), a(), r();
                break;
              case "R":
                c();
                break;
              case "R_":
                u();
                break;
              case "L":
                l();
                break;
              case "L_":
                d();
                break;
              case "x":
                c(), d();
                break;
              case "x2":
                c(), d(), c(), d();
                break;
              case "x_":
                u(), l();
                break;
              case "x2_":
                u(), l(), u(), l();
                break;
              case "U":
                p();
                break;
              case "U_":
                f();
                break;
              case "D":
                b();
                break;
              case "D_":
                g();
                break;
              case "y":
                f(), b();
                break;
              case "y2":
                f(), b(), f(), b();
                break;
              case "y_":
                p(), g();
                break;
              case "y2_":
                p(), g(), p(), g()
            }
            return _
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.reducer = n;
          var s = (i(2), i(4)),
            r = i(7),
            o = a(r),
            c = i(6);
          a(c)
        }, function (e, t, i) {
          (function (e) {
            "use strict";

            function a(t) {
              var i = this,
                a = t && t.isTapEnabled,
                n = this._touchElements[1],
                s = (0, d.qs)('[data-type="up"]', n),
                r = (0, d.qs)('[data-type="front"]', n),
                o = (0, d.qs)('[data-type="left"]', n),
                c = new e.Swipe;
              c.set({
                direction: e.DIRECTION_ALL
              });
              var u = new e.Manager(r, {});
              u.add(c), u.add(new e.Tap({
                event: "singletab"
              })), u.on("singletab swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletab":
                    a && i.L_();
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.U()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type,
                  n = e.target;
                switch ("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type &&
                  (n = n.parentElement)), t) {
                  case "singletap":
                    a && i.F_();
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.F();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.F_()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type,
                  n = e.target;
                switch ("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type &&
                  (n = n.parentElement)), t) {
                  case "singletap":
                    a && i.U_();
                    break;
                  case "swipeup":
                    i.F();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.F_();
                    break;
                  case "swipeleft":
                    i.U()
                }
              })
            }

            function n(t) {
              var i = this,
                a = t && t.isTapEnabled,
                n = this._touchElements[2],
                s = (0, d.qs)('[data-type="up"]', n),
                r = (0, d.qs)('[data-type="front"]', n),
                o = (0, d.qs)('[data-type="right"]', n),
                c = new e.Swipe;
              c.set({
                direction: e.DIRECTION_ALL
              });
              var u = new e.Manager(r, {});
              u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.R();
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.U()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type,
                  n = e.target;
                switch ("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type &&
                  (n = n.parentElement)), t) {
                  case "singletap":
                    a && i.F();
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.F();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.F_()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type,
                  n = e.target;
                switch ("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type &&
                  (n = n.parentElement)), t) {
                  case "singletap":
                    a && i.U();
                    break;
                  case "swipeup":
                    i.F_();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.F();
                    break;
                  case "swipeleft":
                    i.U()
                }
              })
            }

            function s(t) {
              var i = this,
                a = t && t.isTapEnabled,
                n = this._touchElements[3],
                s = (0, d.qs)('[data-type="down"]', n),
                r = (0, d.qs)('[data-type="front"]', n),
                o = (0, d.qs)('[data-type="left"]', n),
                c = new e.Swipe;
              c.set({
                direction: e.DIRECTION_ALL
              });
              var u = new e.Manager(r, {});
              u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.L();
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.F();
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.F_();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.F()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.D();
                    break;
                  case "swipeup":
                    i.F();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.F_();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              })
            }

            function r(t) {
              var i = this,
                a = t && t.isTapEnabled,
                n = this._touchElements[4],
                s = (0, d.qs)('[data-type="down"]', n),
                r = (0, d.qs)('[data-type="front"]', n),
                o = (0, d.qs)('[data-type="right"]', n),
                c = new e.Swipe;
              c.set({
                direction: e.DIRECTION_ALL
              });
              var u = new e.Manager(r, {});
              u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.R_();
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.F_();
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.F_();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.F()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.D_();
                    break;
                  case "swipeup":
                    i.F_();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.F();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              })
            }

            function o(t) {
              var i = this,
                a = t && t.isTapEnabled,
                n = this._touchElements[5],
                s = (0, d.qs)('[data-type="up"]', n),
                r = (0, d.qs)('[data-type="back"]', n),
                o = (0, d.qs)('[data-type="left"]', n),
                c = new e.Swipe;
              c.set({
                direction: e.DIRECTION_ALL
              });
              var u = new e.Manager(r, {});
              u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.L_();
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.U()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.B();
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.B_();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.B()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.U();
                    break;
                  case "swipeup":
                    i.B_();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.B();
                    break;
                  case "swipeleft":
                    i.U()
                }
              })
            }

            function c(t) {
              var i = this,
                a = t && t.isTapEnabled,
                n = this._touchElements[6],
                s = (0, d.qs)('[data-type="up"]', n),
                r = (0, d.qs)('[data-type="back"]', n),
                o = (0, d.qs)('[data-type="right"]', n),
                c = new e.Swipe;
              c.set({
                direction: e.DIRECTION_ALL
              });
              var u = new e.Manager(r, {});
              u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.U()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.B_();
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.B_();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.B()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.U_();
                    break;
                  case "swipeup":
                    i.B();
                    break;
                  case "swiperight":
                    i.U_();
                    break;
                  case "swipedown":
                    i.B_();
                    break;
                  case "swipeleft":
                    i.U()
                }
              })
            }

            function u(t) {
              var i = this,
                a = (t && t.isTapEnabled, this._touchElements[7]),
                n = (0, d.qs)('[data-type="down"]', a),
                s = (0, d.qs)('[data-type="back"]', a),
                r = (0, d.qs)('[data-type="left"]', a),
                o = new e.Swipe;
              o.set({
                direction: e.DIRECTION_ALL
              });
              var c = new e.Manager(s, {});
              c.add(o), c.add(new e.Tap({
                event: "singletap"
              })), c.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              }), o = new e.Swipe, o.set({
                direction: e.DIRECTION_ALL
              }), c = new e.Manager(n, {}), c.add(o), c.add(new e.Tap({
                event: "singletap"
              })), c.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    i.B_();
                    break;
                  case "swipeup":
                    i.L_();
                    break;
                  case "swiperight":
                    i.B();
                    break;
                  case "swipedown":
                    i.L();
                    break;
                  case "swipeleft":
                    i.B_()
                }
              }), o = new e.Swipe, o.set({
                direction: e.DIRECTION_ALL
              }), c = new e.Manager(r, {}), c.add(o), c.add(new e.Tap({
                event: "singletap"
              })), c.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    i.D_();
                    break;
                  case "swipeup":
                    i.B_();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.B();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              })
            }

            function l(t) {
              var i = this,
                a = t && t.isTapEnabled,
                n = this._touchElements[8],
                s = (0, d.qs)('[data-type="down"]', n),
                r = (0, d.qs)('[data-type="back"]', n),
                o = (0, d.qs)('[data-type="right"]', n),
                c = new e.Swipe;
              c.set({
                direction: e.DIRECTION_ALL
              });
              var u = new e.Manager(r, {});
              u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.R_();
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.B();
                    break;
                  case "swipeup":
                    i.R();
                    break;
                  case "swiperight":
                    i.B();
                    break;
                  case "swipedown":
                    i.R_();
                    break;
                  case "swipeleft":
                    i.B_()
                }
              }), c = new e.Swipe, c.set({
                direction: e.DIRECTION_ALL
              }), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
                event: "singletap"
              })), u.on("singletap swipeup swipedown swiperight swipeleft", function (e) {
                var t = e.type;
                e.target;
                switch (t) {
                  case "singletap":
                    a && i.D();
                    break;
                  case "swipeup":
                    i.B();
                    break;
                  case "swiperight":
                    i.D();
                    break;
                  case "swipedown":
                    i.B_();
                    break;
                  case "swipeleft":
                    i.D_()
                }
              })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.setupCube1 = a, t.setupCube2 = n, t.setupCube3 = s, t.setupCube4 = r, t.setupCube5 = o, t.setupCube6 =
              c, t.setupCube7 = u, t.setupCube8 = l;
            var d = i(5);
            i(2)
          }).call(t, i(20))
        }, function (e, t, i) {
          "use strict";

          function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.CubeTwoUi = void 0;
          var n = function () {
            function e(e, t) {
              for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object
                  .defineProperty(e, a.key, a)
              }
            }
            return function (t, i, a) {
              return i && e(t.prototype, i), a && e(t, a), t
            }
          }();
          i(2), t.CubeTwoUi = function () {
            function e(t) {
              a(this, e), this.displayElements = t
            }
            return n(e, [{
              key: "uiF_Helper",
              value: function (e) {
                this.displayElements[1].style.transformOrigin = "100% 100%", this.displayElements[2].style
                  .transformOrigin = "0% 100%", this.displayElements[3].style.transformOrigin = "100% 0%",
                  this.displayElements[4].style.transformOrigin = "0% 0%", this.displayElements[1].style.transform =
                  "rotateZ(" + e + "deg)", this.displayElements[2].style.transform = "rotateZ(" + e +
                  "deg)", this.displayElements[3].style.transform = "rotateZ(" + e + "deg)", this.displayElements[
                    4].style.transform = "rotateZ(" + e + "deg)"
              }
            }, {
              key: "uiF",
              value: function () {
                this.uiF_Helper("90")
              }
            }, {
              key: "uiF_",
              value: function () {
                this.uiF_Helper("-90")
              }
            }, {
              key: "uiF2",
              value: function () {
                this.uiF_Helper("180")
              }
            }, {
              key: "uiF2_",
              value: function () {
                this.uiF_Helper("-180")
              }
            }, {
              key: "uiB_Helper",
              value: function (e) {
                this.displayElements[5].style.transformOrigin = "100% 100%", this.displayElements[6].style
                  .transformOrigin = "0% 100%", this.displayElements[7].style.transformOrigin = "100% 0%",
                  this.displayElements[8].style.transformOrigin = "0% 0%", this.displayElements[5].style.transform =
                  "rotateZ(" + e + "deg)", this.displayElements[6].style.transform = "rotateZ(" + e +
                  "deg)", this.displayElements[7].style.transform = "rotateZ(" + e + "deg)", this.displayElements[
                    8].style.transform = "rotateZ(" + e + "deg)"
              }
            }, {
              key: "uiB",
              value: function () {
                this.uiB_Helper("-90")
              }
            }, {
              key: "uiB_",
              value: function () {
                this.uiB_Helper("90")
              }
            }, {
              key: "uiB2",
              value: function () {
                this.uiB_Helper("-180")
              }
            }, {
              key: "uiB2_",
              value: function () {
                this.uiB_Helper("180")
              }
            }, {
              key: "uiU_Helper",
              value: function (e) {
                this.displayElements[1].style.transformOrigin = "100% 0%", this.displayElements[2].style.transformOrigin =
                  "0% 0%", this.displayElements[5].style.transformOrigin = "100% 0%", this.displayElements[
                    6].style.transformOrigin = "0% 0%", this.displayElements[1].style.transform =
                  "rotateY(" + e + "deg)", this.displayElements[2].style.transform = "rotateY(" + e +
                  "deg)", this.displayElements[5].style.transform = "rotateY(" + e + "deg)", this.displayElements[
                    6].style.transform = "rotateY(" + e + "deg)"
              }
            }, {
              key: "uiU",
              value: function () {
                this.uiU_Helper("-90")
              }
            }, {
              key: "uiU_",
              value: function () {
                this.uiU_Helper("90")
              }
            }, {
              key: "uiU2",
              value: function () {
                this.uiU_Helper("-180")
              }
            }, {
              key: "uiU2_",
              value: function () {
                this.uiU_Helper("180")
              }
            }, {
              key: "uiD_Helper",
              value: function (e) {
                this.displayElements[3].style.transformOrigin = "100% 0%", this.displayElements[4].style.transformOrigin =
                  "0% 0%", this.displayElements[7].style.transformOrigin = "100% 0%", this.displayElements[
                    8].style.transformOrigin = "0% 0%", this.displayElements[3].style.transform =
                  "rotateY(" + e + "deg)", this.displayElements[4].style.transform = "rotateY(" + e +
                  "deg)", this.displayElements[7].style.transform = "rotateY(" + e + "deg)", this.displayElements[
                    8].style.transform = "rotateY(" + e + "deg)"
              }
            }, {
              key: "uiD",
              value: function () {
                this.uiD_Helper("90")
              }
            }, {
              key: "uiD_",
              value: function () {
                this.uiD_Helper("-90")
              }
            }, {
              key: "uiD2",
              value: function () {
                this.uiD_Helper("180")
              }
            }, {
              key: "uiD2_",
              value: function () {
                this.uiD_Helper("-180")
              }
            }, {
              key: "uiR_Helper",
              value: function (e) {
                this.displayElements[2].style.transformOrigin = "0% 100%", this.displayElements[6].style.transformOrigin =
                  "0% 100%", this.displayElements[8].style.transformOrigin = "0% 0%", this.displayElements[
                    4].style.transformOrigin = "0% 0%", this.displayElements[2].style.transform =
                  "rotateX(" + e + "deg)", this.displayElements[6].style.transform = "rotateX(" + e +
                  "deg)", this.displayElements[8].style.transform = "rotateX(" + e + "deg)", this.displayElements[
                    4].style.transform = "rotateX(" + e + "deg)"
              }
            }, {
              key: "uiR",
              value: function () {
                this.uiR_Helper("90")
              }
            }, {
              key: "uiR_",
              value: function () {
                this.uiR_Helper("-90")
              }
            }, {
              key: "uiR2",
              value: function () {
                this.uiR_Helper("180")
              }
            }, {
              key: "uiR2_",
              value: function () {
                this.uiR_Helper("-180")
              }
            }, {
              key: "uiL_Helper",
              value: function (e) {
                this.displayElements[1].style.transformOrigin = "0% 100%", this.displayElements[5].style.transformOrigin =
                  "0% 100%", this.displayElements[7].style.transformOrigin = "0% 0%", this.displayElements[
                    3].style.transformOrigin = "0% 0%", this.displayElements[1].style.transform =
                  "rotateX(" + e + "deg)", this.displayElements[5].style.transform = "rotateX(" + e +
                  "deg)", this.displayElements[7].style.transform = "rotateX(" + e + "deg)", this.displayElements[
                    3].style.transform = "rotateX(" + e + "deg)"
              }
            }, {
              key: "uiL",
              value: function () {
                this.uiL_Helper("-90")
              }
            }, {
              key: "uiL_",
              value: function () {
                this.uiL_Helper("90")
              }
            }, {
              key: "uiL2",
              value: function () {
                this.uiL_Helper("-180")
              }
            }, {
              key: "uiL2_",
              value: function () {
                this.uiL_Helper("180")
              }
            }, {
              key: "uix",
              value: function () {
                this.uiR(), this.uiL_()
              }
            }, {
              key: "uix_",
              value: function () {
                this.uiR_(), this.uiL()
              }
            }, {
              key: "uix2",
              value: function () {
                this.uiR2(), this.uiL2_()
              }
            }, {
              key: "uix2_",
              value: function () {
                this.uiR2_(), this.uiL2()
              }
            }, {
              key: "uiy",
              value: function () {
                this.uiU_(), this.uiD()
              }
            }, {
              key: "uiy_",
              value: function () {
                this.uiU(), this.uiD_()
              }
            }, {
              key: "uiy2",
              value: function () {
                this.uiU2_(), this.uiD2()
              }
            }, {
              key: "uiy2_",
              value: function () {
                this.uiU2(), this.uiD2_()
              }
            }, {
              key: "uiz",
              value: function () {
                this.uiF(), this.uiB_()
              }
            }, {
              key: "uiz_",
              value: function () {
                this.uiF_(), this.uiB()
              }
            }, {
              key: "uiz2",
              value: function () {
                this.uiF2(), this.uiB2_()
              }
            }, {
              key: "uiz2_",
              value: function () {
                this.uiF2_(), this.uiB2()
              }
            }]), e
          }()
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }

          function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.CubeTwo = void 0;
          var s = function () {
              function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var a = t[i];
                  a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object
                    .defineProperty(e, a.key, a)
                }
              }
              return function (t, i, a) {
                return i && e(t.prototype, i),
                  a && e(t, a), t
              }
            }(),
            r = i(2),
            o = i(5),
            c = i(3),
            u = a(c),
            l = i(4),
            d = i(14),
            p = i(7),
            f = (a(p), i(6)),
            b = a(f),
            g = i(18),
            h = a(g),
            _ = i(11),
            w = i(15),
            v = i(13),
            y = i(1),
            k = i(12),
            E = function () {
              function e(t) {
                return n(this, e), t ? t.cubeComponent ? (this._cubeComponentEl = t.cubeComponent, this._appState = {},
                  this._ui = null, this._config = (0, l.cloneObject)(t), this._parseConfig(this._config, this._cubeComponentEl),
                  this._updateEventBindings(), void this._initCallbacks()) : void(0, r.error)(
                  "CubeTwo element was not provided: " + t.cubeComponent) : void(0, r.error)(
                  "config is invalid for CubeTwo, did you forgot to provide one?")
              }
              return s(e, [{
                key: "_parseConfig",
                value: function (e, t) {
                  function i(e, t) {
                    e ? l[t] = {
                      c1: n[t] + ' url("' + r[t] + '") 0% 0% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X +
                        " no-repeat",
                      c2: n[t] + ' url("' + r[t] + '") 100% 0% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X +
                        " no-repeat",
                      c3: n[t] + ' url("' + r[t] + '") 0% 100% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X +
                        " no-repeat",
                      c4: n[t] + ' url("' + r[t] + '") 100% 100% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X +
                        " no-repeat"
                    } : l[t] = {
                      c1: n[t],
                      c2: n[t],
                      c3: n[t],
                      c4: n[t]
                    }
                  }
                  void 0 === e.isRotateAnimationEnabled && (e.isRotateAnimationEnabled = !0), void 0 === e.isTapEnabled &&
                    (e.isTapEnabled = !0), void 0 === e.isAnimationLockEnabled && (e.isAnimationLockEnabled = !
                      0), void 0 === e.borderOnTheCube && (e.borderOnTheCube = !0), void 0 === e.backgroundBlendModeOnTheCube &&
                    (e.backgroundBlendModeOnTheCube = !0), e.transition && (0, o.qsa)(
                      '[data-type="cubetwo-display"]', t).forEach(function (t) {
                      t.style.transition = e.transition
                    }), e.backgroundImages = e.backgroundImages || {}, e.backgroundColors = e.backgroundColors ||
                    {};
                  var a = e.backgroundColors,
                    n = {};
                  n.backface = a.backface || a._ || h.default.backface, n.f = a.f || h.default.f, n.b = a.b ||
                    h.default.b, n.u = a.u || h.default.u, n.d = a.d || h.default.d, n.r = a.r || h.default
                    .r, n.l = a.l || h.default.l, e.backgroundColors = n;
                  var s = n.backface,
                    r = e.backgroundImages,
                    c = {
                      cubes: [null, null, null, null, null, null, null, null, null],
                      backface: s
                    },
                    l = {};
                  i(r.f, "f"), i(r.b, "b"), i(r.u, "u"), i(r.d, "d"), i(r.r, "r"), i(r.l, "l"), c.cubes[1] = {
                    u: l.u.c3,
                    d: s,
                    f: l.f.c1,
                    b: s,
                    r: s,
                    l: l.l.c2
                  }, c.cubes[2] = {
                    u: l.u.c4,
                    d: s,
                    f: l.f.c2,
                    b: s,
                    r: l.r.c1,
                    l: s
                  }, c.cubes[3] = {
                    u: s,
                    d: l.d.c1,
                    f: l.f.c3,
                    b: s,
                    r: s,
                    l: l.l.c4
                  }, c.cubes[4] = {
                    u: s,
                    d: l.d.c2,
                    f: l.f.c4,
                    b: s,
                    r: l.r.c3,
                    l: s
                  }, c.cubes[5] = {
                    u: l.u.c1,
                    d: s,
                    f: s,
                    b: l.b.c2,
                    r: s,
                    l: l.l.c1
                  }, c.cubes[6] = {
                    u: l.u.c2,
                    d: s,
                    f: s,
                    b: l.b.c1,
                    r: l.r.c2,
                    l: s
                  }, c.cubes[7] = {
                    u: s,
                    d: l.d.c3,
                    f: s,
                    b: l.b.c4,
                    r: s,
                    l: l.l.c3
                  }, c.cubes[8] = {
                    u: s,
                    d: l.d.c4,
                    f: s,
                    b: l.b.c3,
                    r: l.r.c4,
                    l: s
                  }, e.cubeSkins = c, (0, u.default)(e)
                }
              }, {
                key: "_updateEventBindings",
                value: function () {
                  this._transitionEnd = this._transitionEnd.bind(this), this.handleGlobalKeyEvent = k.handleGlobalKeyEvent
                    .bind(this)
                }
              }, {
                key: "_initCallbacks",
                value: function () {
                  var e = this;
                  this.callbacks = {}, Object.keys(y.EVENT_NAMES).forEach(function (t, i) {
                    return e.callbacks[t] = []
                  })
                }
              }, {
                key: "addCallbackForEvent",
                value: function (e, t) {
                  var i = this.callbacks[e = e.toLowerCase()];
                  i && "function" == typeof t && i.push(t)
                }
              }, {
                key: "_triggerEvent",
                value: function (e, t) {
                  var i = this.callbacks[e] || [],
                    a = void 0,
                    n = void 0;
                  for (a = 0, n = i.length; a < n; a++) i[a].call(this, e, t)
                }
              }, {
                key: "getState",
                value: function () {
                  var e = this._appState.codes.map(function (e) {
                    return (0, l.cloneObject)(e)
                  });
                  return {
                    codes: e,
                    isRotateEnabled: !!this._appState.isRotateEnabled
                  }
                }
              }, {
                key: "getStateCode",
                value: function () {
                  return JSON.stringify(this.getState().codes)
                }
              }, {
                key: "isSolved",
                value: function () {
                  return this._isSolved(this.getState().codes)
                }
              }, {
                key: "_isSolved",
                value: function (e) {
                  return !!e.reduce(function (e, t) {
                    return e.code === t.code ? e : NaN
                  })
                }
              }, {
                key: "_setState",
                value: function (e) {
                  var t = JSON.stringify(this._appState.codes),
                    i = JSON.stringify(e.codes);
                  void 0 === e.isRotateEnabled && (e.isRotateEnabled = !0), this._appState = e, t !== i &&
                    (this._triggerEvent("statechange", {
                      previousStateCode: t,
                      currentStateCode: i,
                      state: e
                    }), this._isSolved(e.codes) && this._triggerEvent("issolved", {
                      state: e
                    }))
                }
              }, {
                key: "_beforeRotateTriggerHelper",
                value: function (e) {
                  var t = e.action,
                    i = e.config;
                  i && i.skipTriggerEvent || this._triggerEvent("beforerotate", {
                    action: t,
                    state: this.getState()
                  })
                }
              }, {
                key: "F",
                value: function (e) {
                  var t = "F";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiF
                  })
                }
              }, {
                key: "F_",
                value: function (e) {
                  var t = "F_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiF_
                  })
                }
              }, {
                key: "F2",
                value: function (e) {
                  var t = "F2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiF2
                  })
                }
              }, {
                key: "F2_",
                value: function (e) {
                  var t = "F2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiF2_
                  })
                }
              }, {
                key: "B",
                value: function (e) {
                  var t = "B";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiB
                  })
                }
              }, {
                key: "B_",
                value: function (e) {
                  var t = "B_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiB_
                  })
                }
              }, {
                key: "B2",
                value: function (e) {
                  var t = "B2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiB2
                  })
                }
              }, {
                key: "B2_",
                value: function (e) {
                  var t = "B2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiB2_
                  })
                }
              }, {
                key: "U",
                value: function (e) {
                  var t = "U";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiU
                  })
                }
              }, {
                key: "U_",
                value: function (e) {
                  var t = "U_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiU_
                  })
                }
              }, {
                key: "U2",
                value: function (e) {
                  var t = "U2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiU2
                  })
                }
              }, {
                key: "U2_",
                value: function (e) {
                  var t = "U2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiU2_
                  })
                }
              }, {
                key: "D",
                value: function (e) {
                  var t = "D";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiD
                  })
                }
              }, {
                key: "D_",
                value: function (e) {
                  var t = "D_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiD_
                  })
                }
              }, {
                key: "D2",
                value: function (e) {
                  var t = "D2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiD2
                  })
                }
              }, {
                key: "D2_",
                value: function (e) {
                  var t = "D2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiD2_
                  })
                }
              }, {
                key: "R",
                value: function (e) {
                  var t = "R";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiR
                  })
                }
              }, {
                key: "R_",
                value: function (e) {
                  var t = "R_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiR_
                  })
                }
              }, {
                key: "R2",
                value: function (e) {
                  var t = "R2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiR2
                  })
                }
              }, {
                key: "R2_",
                value: function (e) {
                  var t = "R2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiR2_
                  })
                }
              }, {
                key: "L",
                value: function (e) {
                  var t = "L";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiL
                  })
                }
              }, {
                key: "L_",
                value: function (e) {
                  var t = "L_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiL_
                  })
                }
              }, {
                key: "L2",
                value: function (e) {
                  var t = "L2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiL2
                  })
                }
              }, {
                key: "L2_",
                value: function (e) {
                  var t = "L2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiL2_
                  })
                }
              }, {
                key: "x",
                value: function (e) {
                  var t = "x";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uix
                  })
                }
              }, {
                key: "x_",
                value: function (e) {
                  var t = "x_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uix_
                  })
                }
              }, {
                key: "x2",
                value: function (e) {
                  var t = "x2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uix2
                  })
                }
              }, {
                key: "x2_",
                value: function (e) {
                  var t = "x2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uix2_
                  })
                }
              }, {
                key: "y",
                value: function (e) {
                  var t = "y";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiy
                  })
                }
              }, {
                key: "y_",
                value: function (e) {
                  var t = "y_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiy_
                  })
                }
              }, {
                key: "y2",
                value: function (e) {
                  var t = "y2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiy2
                  })
                }
              }, {
                key: "y2_",
                value: function (e) {
                  var t = "y2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiy2_
                  })
                }
              }, {
                key: "z",
                value: function (e) {
                  var t = "z";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiz
                  })
                }
              }, {
                key: "z2",
                value: function (e) {
                  var t = "z2";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiz2
                  })
                }
              }, {
                key: "z_",
                value: function (e) {
                  var t = "z_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiz_
                  })
                }
              }, {
                key: "z2_",
                value: function (e) {
                  var t = "z2_";
                  this._beforeRotateTriggerHelper({
                    action: t,
                    config: e
                  }), this._actionInvoke({
                    action: t,
                    config: e,
                    ui: this._ui.uiz2_
                  })
                }
              }, {
                key: "_actionInvoke",
                value: function (e) {
                  var t = e.action,
                    i = e.config,
                    a = e.ui;
                  i = i || {};
                  var n = this.getState();
                  if (i.noVisualUpdate) {
                    var s = (0, v.reducer)({
                      action: t,
                      stateCodes: n.codes
                    });
                    return n.codes = s, void this._setState(n)
                  }
                  if (!n.isRotateEnabled) return void(0, r.debug)("rotate is locked " + new Date);
                  var o = this._config,
                    c = (0, v.reducer)({
                      action: t,
                      stateCodes: n.codes
                    });
                  n.codes = c, o.isRotateAnimationEnabled ? (n.isRotateEnabled = !1, this._setState(n), a.bind(
                    this._ui)()) : (this._setState(n), this._updateUiFaces())
                }
              }, {
                key: "destroy",
                value: function () {}
              }, {
                key: "_transitionEnd",
                value: function (e) {
                  var t = this,
                    i = e.currentTarget,
                    a = this._config;
                  i && ! function () {
                    var e = i.style.transition;
                    i.style.transition = "0s", (0, l.nextFrame)(function (n) {
                      i.style.transformOrigin = "", i.style.transform = "", t._updateUiFaces(), (0, l
                        .rAF)(function (n) {
                        if (i.style.transition = e, a.isAnimationLockEnabled) {
                          var s = t.getState();
                          s.isRotateEnabled = !0, t._setState(s)
                        }
                        t._triggerEvent("afterrotate", {
                          index: i.dataset.index
                        })
                      })
                    })
                  }()
                }
              }, {
                key: "init",
                value: function () {
                  var e = l.nextState.first;
                  this._setState({
                    codes: [{
                      cube: 1,
                      code: e
                    }, {
                      cube: 2,
                      code: e
                    }, {
                      cube: 3,
                      code: e
                    }, {
                      cube: 4,
                      code: e
                    }, {
                      cube: 5,
                      code: e
                    }, {
                      cube: 6,
                      code: e
                    }, {
                      cube: 7,
                      code: e
                    }, {
                      cube: 8,
                      code: e
                    }],
                    isRotateEnabled: !0
                  }), this._cubeElements = [""], this._touchElements = [""], this._displayElements = [{}];
                  var t = this._config;
                  t.borderOnTheCube && this._cubeComponentEl.classList.add(
                      "cubetwo-border-on-display-cubes"), t.backfaceVisibilityHiddenOnTheCube && this._cubeComponentEl
                    .classList.add("cubetwo-backface-visibility-hidden-on-display-cubes"), t.backgroundBlendModeOnTheCube &&
                    (t.backgroundBlendModeOnTheCube === !0 || "multiply" === t.backgroundBlendModeOnTheCube ?
                      this._cubeComponentEl.classList.add("cubetwo-background-blend-mode-on-display-cubes") :
                      (0, o.qsa)('[data-type="cubetwo-display"] > div > div', this._cubeComponentEl).forEach(
                        function (e) {
                          e.style.backgroundBlendMode = t.backgroundBlendModeOnTheCube
                        }));
                  for (var i = 1; i <= _.CUBE_COUNT; i++) {
                    var a = (0, o.qs)(".cubetwo-cube-" + i, this._cubeComponentEl),
                      n = (0, o.qs)('[data-type="cubetwo-touch"]', a),
                      s = (0, o.qs)('[data-type="cubetwo-display"]', a),
                      r = (0, o.qs)('[data-type="front"] > div', s),
                      c = (0, o.qs)('[data-type="back"] > div', s),
                      p = (0, o.qs)('[data-type="up"] > div', s),
                      f = (0, o.qs)('[data-type="down"] > div', s),
                      b = (0, o.qs)('[data-type="right"] > div', s),
                      g = (0, o.qs)('[data-type="left"] > div', s);
                    this._cubeElements.push(a), this._displayElements.push({
                      root: s,
                      f: r,
                      b: c,
                      u: p,
                      d: f,
                      r: b,
                      l: g
                    }), this._touchElements.push(n)
                  }(0, u.default)(this._cubeElements), (0, u.default)(this._touchElements), this._ui = new w
                    .CubeTwoUi(this._displayElements.map(function (e) {
                      return e.root
                    }));
                  for (var i = 1; i <= _.CUBE_COUNT; i++) {
                    var h = this._displayElements[i].root;
                    h && h.addEventListener("transitionend", this._transitionEnd)
                  }
                  d.setupCube1.bind(this)(t), d.setupCube2.bind(this)(t), d.setupCube3.bind(this)(t), d.setupCube4
                    .bind(this)(t), d.setupCube5.bind(this)(t), d.setupCube6.bind(this)(t), d.setupCube7.bind(
                      this)(t), d.setupCube8.bind(this)(t), this._updateUiFaces(), this._cubeElements[1].addEventListener(
                      "keydown", k.handleKeyEventCube1.bind(this), !1), this._cubeElements[2].addEventListener(
                      "keydown", k.handleKeyEventCube2.bind(this), !1), this._cubeElements[3].addEventListener(
                      "keydown", k.handleKeyEventCube3.bind(this), !1), this._cubeElements[4].addEventListener(
                      "keydown", k.handleKeyEventCube4.bind(this), !1), this._cubeElements[5].addEventListener(
                      "keydown", k.handleKeyEventCube5.bind(this), !1), this._cubeElements[6].addEventListener(
                      "keydown", k.handleKeyEventCube6.bind(this), !1), this._cubeElements[7].addEventListener(
                      "keydown", k.handleKeyEventCube7.bind(this), !1), this._cubeElements[8].addEventListener(
                      "keydown", k.handleKeyEventCube8.bind(this), !1), this._triggerEvent("init", {
                      state: this.getState()
                    })
                }
              }, {
                key: "_updateUiFaces",
                value: function () {
                  for (var e = this._config, t = e.cubeSkins.cubes, i = (e.cubeSkins.backface, this.getState()),
                      a = void 0, n = void 0, s = void 0, r = void 0, o = void 0, c = void 0, u = void 0, d =
                      void 0, p = void 0, f = void 0, g = 1; g <= _.CUBE_COUNT; g++) s = i.codes[g - 1], c =
                    (0, l.getUp)(s.code), u = (0, l.getDown)(s.code), r = (0, l.getFront)(s.code), o = (0,
                      l.getBack)(s.code), d = (0, l.getRight)(s.code), p = (0, l.getLeft)(s.code), a = this
                    ._displayElements[g], n = t[s.cube], a.u.style.background = n[c], a.d.style.background =
                    n[u], a.f.style.background = n[r], a.b.style.background = n[o], a.r.style.background =
                    n[d], a.l.style.background = n[p], f = b.default[s.code].u, a.u.style.transform = f ?
                    "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].f, a.f.style.transform =
                    f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].r, a.r.style.transform =
                    f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].l, a.l.style.transform =
                    f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].b, a.b.style.transform =
                    f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].d, a.d.style.transform =
                    f ? "rotate" + f.dir + "(" + f.angle + "deg)" : ""
                }
              }, {
                key: "solve",
                value: function () {
                  var e = l.nextState.first;
                  this._setState({
                    codes: [{
                      cube: 1,
                      code: e
                    }, {
                      cube: 2,
                      code: e
                    }, {
                      cube: 3,
                      code: e
                    }, {
                      cube: 4,
                      code: e
                    }, {
                      cube: 5,
                      code: e
                    }, {
                      cube: 6,
                      code: e
                    }, {
                      cube: 7,
                      code: e
                    }, {
                      cube: 8,
                      code: e
                    }],
                    isRotateEnabled: !0
                  }), this._updateUiFaces()
                }
              }, {
                key: "scramble",
                value: function () {
                  for (var e = [this.F, this.F_, this.B, this.B_, this.U, this.U_, this.D, this.D_, this.R,
                      this.R_, this.L, this.L_, this.x, this.y, this.z, this.x_, this.y_, this.z_
                    ], t = e.length, i = void 0, a = void 0, n = 0; n < 10; n++) a = Math.random() * t | 0,
                    (i = e[a].bind(this))({
                      noVisualUpdate: !0
                    });
                  var s = this.getState();
                  s.isRotateEnabled = !0, this._setState(s), this._updateUiFaces()
                }
              }]), e
            }();
          t.CubeTwo = E
        }, function (e, t, i) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          var a = i(16);
          Object.defineProperty(t, "CubeTwo", {
            enumerable: !0,
            get: function () {
              return a.CubeTwo
            }
          })
        }, function (e, t, i) {
          "use strict";

          function a(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          var n = i(3),
            s = a(n),
            r = [],
            o = .9;
          r._ = r.backface = "transparent", r.u = "rgba(255, 255, 255, " + o + ")", r.f = "rgba(0, 158, 96, " + o +
            ")", r.r = "rgba(196, 30, 58, " + o + ")", r.l = "rgba(255, 88, 0, " + o + ")", r.b =
            "rgba(0, 81, 186, " + o + ")", r.d = "rgba(255, 213, 0, " + o + ")", o = .3, r["u-dark"] =
            "rgba(255, 255, 255, " + o + ")", r["f-dark"] = "rgba(0, 158, 96, " + o + ")", r["r-dark"] =
            "rgba(196, 30, 58, " + o + ")", r["l-dark"] = "rgba(255, 88, 0, " + o + ")", r["b-dark"] =
            "rgba(0, 81, 186, " + o + ")", r["d-dark"] = "rgba(255, 213, 0, " + o + ")", (0, s.default)(r), t.default =
            r
        }, , function (e, t) {
          e.exports = Hammer
        }]);
      },
      getJavascript() {
        var log = console.log.bind(console);

        var imgPath = '/static/game-image/Game-3DMagicCute-selfieMonkey.jpg';

        var cubetwo = new window.CubeTwo({
          cubeComponent: document.getElementById('cubetwo-component-1'),
          backgroundImages: { /* optional */
            u: imgPath,
            d: imgPath,
            f: imgPath,
            b: imgPath,
            r: imgPath,
            l: imgPath,
          },
          backgroundColors: { /* optional */
            u: 'rgba(255, 255, 255, .7)',
            f: 'rgba(0, 158, 96, .7)',
            r: 'rgba(196, 30, 58, .7)',
            l: 'rgba(255, 88, 0, .7)',
            b: 'rgba(0, 81, 186, .7)',
            d: 'rgba(255, 213, 0, .7)',
            _: 'transparent',
          },
        });

        cubetwo.init();

        window.addEventListener('keydown', cubetwo.handleGlobalKeyEvent, false);

        window.cubetwo = cubetwo;

        log('cubetwo is available in console');

        // Custom
        setTimeout(function () {

          cubetwo._setState(JSON.parse(
            '{"codes":[{"cube":6,"code":"ru"},{"cube":5,"code":"lu"},{"cube":1,"code":"bu"},{"cube":2,"code":"bu"},{"cube":4,"code":"dl"},{"cube":3,"code":"dr"},{"cube":7,"code":"fr"},{"cube":8,"code":"fl"}],"isRotateEnabled":true}'
          ));
          cubetwo._updateUiFaces();

        }, 0);
      }
    }
  }

</script>
<style scoped>
  *,
  :after,
  :before {
    box-sizing: border-box
  }

  a,
  button {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer
  }

  button {
    margin: 0;
    padding: 4px;
    background: #111;
    border: 1px solid #409EFF;
    border: 0;
    color: #409EFF;
    box-shadow: 2px 2px 4px gray;
    outline: none;
    -webkit-transition: background .2s;
    transition: background .2s;
    border-radius: 0;
    font-size: 0;
    box-shadow: none;
    background: transparent;
    border-radius: 50%
  }

  button:focus {
    box-shadow: 2px 2px 1rem #409EFF
  }

  button.cubetwo-active {
    background: hsla(0, 0%, 100%, .2)
  }

  button.cubetwo-btn-adjust {
    opacity: .2
  }

  .cubetwo-help-component,
  .cubetwo-menu-component {
    z-index: 2;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s;
    position: fixed;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transform: translateY(-50vh);
    transform: translateY(-50vh);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 25vh;
    border-bottom: 1px solid hsla(0, 0%, 100%, .2);
    padding: .5em 0 4em;
    color: #fff;
    background: hsla(0, 0%, 7%, .96);
    font-size: .8rem
  }

  .cubetwo-help-component.cubetwo-show-dialog,
  .cubetwo-menu-component.cubetwo-show-dialog {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }

  @media (min-width:600px) {
    .cubetwo-help-component,
    .cubetwo-menu-component {
      font-size: 1.2rem
    }
  }

  .cubetwo-help-component>.cubetwo-github-link,
  .cubetwo-menu-component>.cubetwo-github-link {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    -webkit-transition: .2s;
    transition: .2s;
    color: hsla(0, 0%, 100%, .5)
  }

  .cubetwo-help-component>.cubetwo-github-link:focus,
  .cubetwo-menu-component>.cubetwo-github-link:focus {
    color: #add8e6
  }

  .cubetwo-help-component .cubetwo-row,
  .cubetwo-menu-component .cubetwo-row {
    padding: .1em 0;
    margin: 0 auto;
    max-width: 40rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 100%;
    -webkit-transition: .2s;
    transition: .2s;
    font-size: .8em
  }

  .cubetwo-help-component .cubetwo-device-info,
  .cubetwo-menu-component .cubetwo-device-info {
    text-align: center
  }

  .cubetwo-help-component .cubetwo-device-info--keyboard .cubetwo-device-info-groups,
  .cubetwo-menu-component .cubetwo-device-info--keyboard .cubetwo-device-info-groups {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .cubetwo-help-component .cubetwo-device-info--keyboard .cubetwo-device-info-group,
  .cubetwo-menu-component .cubetwo-device-info--keyboard .cubetwo-device-info-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .cubetwo-help-component .cubetwo-device-info--keyboard .cubetwo-device-info-group>div,
  .cubetwo-menu-component .cubetwo-device-info--keyboard .cubetwo-device-info-group>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
  }

  .cubetwo-help-component .cubetwo-device-info--keyboard .cubetwo-device-info-group>div i,
  .cubetwo-help-component .cubetwo-device-info--keyboard .cubetwo-device-info-group>div span,
  .cubetwo-menu-component .cubetwo-device-info--keyboard .cubetwo-device-info-group>div i,
  .cubetwo-menu-component .cubetwo-device-info--keyboard .cubetwo-device-info-group>div span {
    font-size: inherit;
    display: inline-block;
    position: relative;
    min-width: 1.4em
  }

  .cubetwo-menu-component .cubetwo-row {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .cubetwo-menu-component .cubetwo-btn {
    font-size: 1rem;
    border-radius: 0;
    border: 1px solid #0785ec;
    margin: 0 1rem;
    padding: .5rem;
    border-radius: 2px
  }

  .cubetwo-component {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100vmin;
    height: 100vmin;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden
  }

  .cubetwo-component.cubetwo-border-on-display-cubes [data-type=cubetwo] [data-type=cubetwo-display]>div {
    border: 1px solid #111
  }

  .cubetwo-component.cubetwo-backface-visibility-hidden-on-display-cubes [data-type=cubetwo] [data-type=cubetwo-display]>div {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
  }

  .cubetwo-component.cubetwo-background-blend-mode-on-display-cubes [data-type=cubetwo] [data-type=cubetwo-display]>div>div {
    background-blend-mode: multiply
  }

  .cubetwo-component>.cubetwo-button-grid {
    padding: .5rem
  }

  .cubetwo-component>.cubetwo-button-grid button {
    display: block
  }

  .cubetwo-component>.cubetwo-button-grid .cubetwo-button-space {
    min-height: 32px;
    margin-bottom: 1rem
  }

  .cubetwo-component>.cubetwo-column-left,
  .cubetwo-component>.cubetwo-column-right {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .cubetwo-component>.cubetwo-column-left button,
  .cubetwo-component>.cubetwo-column-right button {
    margin-bottom: 1rem
  }

  @media (min-width:600px) {
    .cubetwo-component>.cubetwo-column-left button,
    .cubetwo-component>.cubetwo-column-right button {
      margin-bottom: 2rem
    }
  }

  .cubetwo-component>.cubetwo-column-right {
    left: auto;
    right: 0
  }

  .cubetwo-component>.cubetwo-row-bottom,
  .cubetwo-component>.cubetwo-row-top {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .cubetwo-component>.cubetwo-row-bottom {
    top: auto;
    bottom: 0
  }

  .cubetwo-rotation-view {
    -webkit-transition: -webkit-transform .19s cubic-bezier(.4, 0, .2, 1);
    transition: -webkit-transform .19s cubic-bezier(.4, 0, .2, 1);
    transition: transform .19s cubic-bezier(.4, 0, .2, 1);
    transition: transform .19s cubic-bezier(.4, 0, .2, 1), -webkit-transform .19s cubic-bezier(.4, 0, .2, 1);
    width: 50vmin;
    height: 50vmin;
    max-width: 100%;
    -webkit-perspective: 5000px;
    perspective: 5000px;
    position: relative;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotateX(-20deg) rotateY(-30deg) rotate(0deg);
    transform: rotateX(-20deg) rotateY(-30deg) rotate(0deg)
  }

  .cubetwo-rotation-view.spin {
    -webkit-animation: spin-animation 16s linear infinite;
    animation: spin-animation 16s linear infinite
  }

  .cubetwo-rotation-view .cubetwo-cube-group {
    width: 50vmin;
    height: 50vmin;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
  }

  .cubetwo-cube-1,
  .cubetwo-cube-5 {
    position: absolute;
    top: 0;
    left: 0
  }

  .cubetwo-cube-2,
  .cubetwo-cube-6 {
    position: absolute;
    top: 0;
    right: 0
  }

  .cubetwo-cube-3,
  .cubetwo-cube-7 {
    position: absolute;
    bottom: 0;
    left: 0
  }

  .cubetwo-cube-4,
  .cubetwo-cube-8 {
    position: absolute;
    bottom: 0;
    right: 0
  }

  [data-type=cubetwo] {
    width: 25vmin;
    height: 25vmin;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    font-size: 1rem
  }

  [data-type=cubetwo]:focus {
    outline: none
  }

  [data-type=cubetwo]:focus .cubetwo-cube[data-type=cubetwo-display]>div {
    border-color: #409EFF
  }

  [data-type=cubetwo] .cubetwo-cube {
    width: inherit;
    height: inherit;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
  }

  [data-type=cubetwo] .cubetwo-cube [data-type=front] {
    -webkit-transform: translateZ(25vmin);
    transform: translateZ(25vmin)
  }

  [data-type=cubetwo] .cubetwo-cube [data-type=up] {
    -webkit-transform: rotateX(-90deg) rotateY(180deg) rotate(180deg);
    transform: rotateX(-90deg) rotateY(180deg) rotate(180deg);
    -webkit-transform-origin: top center;
    transform-origin: top center
  }

  [data-type=cubetwo] .cubetwo-cube [data-type=right] {
    -webkit-transform: rotateY(-270deg);
    transform: rotateY(-270deg);
    -webkit-transform-origin: top right;
    transform-origin: top right
  }

  [data-type=cubetwo] .cubetwo-cube [data-type=back] {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg)
  }

  [data-type=cubetwo] .cubetwo-cube [data-type=down] {
    -webkit-transform: rotateX(90deg) rotateY(180deg) rotate(180deg);
    transform: rotateX(90deg) rotateY(180deg) rotate(180deg);
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center
  }

  [data-type=cubetwo] .cubetwo-cube [data-type=left] {
    -webkit-transform: rotateY(270deg);
    transform: rotateY(270deg);
    -webkit-transform-origin: center left;
    transform-origin: center left
  }

  [data-type=cubetwo] .cubetwo-cube[data-type=cubetwo-display] {
    -webkit-transition: -webkit-transform .19s cubic-bezier(.4, 0, .2, 1);
    transition: -webkit-transform .19s cubic-bezier(.4, 0, .2, 1);
    transition: transform .19s cubic-bezier(.4, 0, .2, 1);
    transition: transform .19s cubic-bezier(.4, 0, .2, 1), -webkit-transform .19s cubic-bezier(.4, 0, .2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    position: relative
  }

  [data-type=cubetwo] .cubetwo-cube[data-type=cubetwo-display]>div {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    width: inherit;
    height: inherit;
    text-transform: uppercase;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0;
    color: transparent
  }

  [data-type=cubetwo] .cubetwo-cube[data-type=cubetwo-display]>div>div {
    color: #111;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: hsla(0, 0%, 100%, .9);
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat
  }

  [data-type=cubetwo] .cubetwo-cube[data-type=cubetwo-touch] {
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0
  }

  [data-type=cubetwo] .cubetwo-cube[data-type=cubetwo-touch]>div {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
    color: #222;
    color: transparent;
    cursor: pointer;
    background: transparent;
    font-size: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  [data-type=cubetwo].cubetwo-cube-5 .cubetwo-cube [data-type=front],
  [data-type=cubetwo].cubetwo-cube-6 .cubetwo-cube [data-type=front],
  [data-type=cubetwo].cubetwo-cube-7 .cubetwo-cube [data-type=front],
  [data-type=cubetwo].cubetwo-cube-8 .cubetwo-cube [data-type=front] {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }

  [data-type=cubetwo].cubetwo-cube-5 .cubetwo-cube [data-type=up],
  [data-type=cubetwo].cubetwo-cube-6 .cubetwo-cube [data-type=up],
  [data-type=cubetwo].cubetwo-cube-7 .cubetwo-cube [data-type=up],
  [data-type=cubetwo].cubetwo-cube-8 .cubetwo-cube [data-type=up] {
    -webkit-transform: translateZ(-25vmin) rotateX(-90deg) rotateY(180deg) rotate(180deg);
    transform: translateZ(-25vmin) rotateX(-90deg) rotateY(180deg) rotate(180deg);
    -webkit-transform-origin: top center;
    transform-origin: top center
  }

  [data-type=cubetwo].cubetwo-cube-5 .cubetwo-cube [data-type=right],
  [data-type=cubetwo].cubetwo-cube-6 .cubetwo-cube [data-type=right],
  [data-type=cubetwo].cubetwo-cube-7 .cubetwo-cube [data-type=right],
  [data-type=cubetwo].cubetwo-cube-8 .cubetwo-cube [data-type=right] {
    -webkit-transform: translateZ(-25vmin) rotateY(-270deg);
    transform: translateZ(-25vmin) rotateY(-270deg);
    -webkit-transform-origin: top right;
    transform-origin: top right
  }

  [data-type=cubetwo].cubetwo-cube-5 .cubetwo-cube [data-type=back],
  [data-type=cubetwo].cubetwo-cube-6 .cubetwo-cube [data-type=back],
  [data-type=cubetwo].cubetwo-cube-7 .cubetwo-cube [data-type=back],
  [data-type=cubetwo].cubetwo-cube-8 .cubetwo-cube [data-type=back] {
    -webkit-transform: translateZ(-25vmin) rotateY(180deg);
    transform: translateZ(-25vmin) rotateY(180deg)
  }

  [data-type=cubetwo].cubetwo-cube-5 .cubetwo-cube [data-type=down],
  [data-type=cubetwo].cubetwo-cube-6 .cubetwo-cube [data-type=down],
  [data-type=cubetwo].cubetwo-cube-7 .cubetwo-cube [data-type=down],
  [data-type=cubetwo].cubetwo-cube-8 .cubetwo-cube [data-type=down] {
    -webkit-transform: translateZ(-25vmin) rotateX(90deg) rotateY(180deg) rotate(180deg);
    transform: translateZ(-25vmin) rotateX(90deg) rotateY(180deg) rotate(180deg);
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center
  }

  [data-type=cubetwo].cubetwo-cube-5 .cubetwo-cube [data-type=left],
  [data-type=cubetwo].cubetwo-cube-6 .cubetwo-cube [data-type=left],
  [data-type=cubetwo].cubetwo-cube-7 .cubetwo-cube [data-type=left],
  [data-type=cubetwo].cubetwo-cube-8 .cubetwo-cube [data-type=left] {
    -webkit-transform: translateZ(-25vmin) rotateY(270deg);
    transform: translateZ(-25vmin) rotateY(270deg);
    -webkit-transform-origin: center left;
    transform-origin: center left
  }

  @-webkit-keyframes spin-animation {
    0% {
      -webkit-transform: rotateY(0turn) rotateX(0turn) rotate(0);
      transform: rotateY(0turn) rotateX(0turn) rotate(0)
    }
    to {
      -webkit-transform: rotateY(3turn) rotateX(2turn) rotate(0);
      transform: rotateY(3turn) rotateX(2turn) rotate(0)
    }
  }

  @keyframes spin-animation {
    0% {
      -webkit-transform: rotateY(0turn) rotateX(0turn) rotate(0);
      transform: rotateY(0turn) rotateX(0turn) rotate(0)
    }
    to {
      -webkit-transform: rotateY(3turn) rotateX(2turn) rotate(0);
      transform: rotateY(3turn) rotateX(2turn) rotate(0)
    }
  }

  html {
    font-size: 100%
  }

  body,
  html {
    min-height: 100%;
    min-height: 100vh
  }

  .body-wrapper {
    min-height: 100%;
    min-height: 100vh;
    font-family: Helvetica, sans-serif;
    color: #fff;
    margin: 0;
    /* background-color: #111; */
    position: relative;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-blend-mode: multiply;
    -webkit-animation: page-fade-in 2s;
    animation: page-fade-in 2s
  }

  @-webkit-keyframes page-fade-in {
    0% {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

  @keyframes page-fade-in {
    0% {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }

</style>
