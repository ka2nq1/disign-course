"use strict";
(self.webpackChunkglivera_webpack_template = self.webpackChunkglivera_webpack_template || []).push([
	["src_js_pages_IndexPage_js"], {
		990: (e, t, i) => {
			i.r(t), i.d(t, {
				default: () => k
			});
			i(365);
			var n = i(348);
			const o = function() {};
			const r = function() {};
			const a = function() {};
			const s = function() {};
			var c = i(751),
				l = i.n(c);

			function u(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			var d = function() {
				function e(t) {
					var i = t.triggers,
						n = t.activeStateName;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.$allTriggers = i || null, this.activeStateName = n || this.CLASSNAMES.defaultActiveState, this.enabled = !0, this.init = this.init.bind(this), this.enable = this.enable.bind(this), this.disable = this.disable.bind(this), this.isEnabled = this.isEnabled.bind(this), this.closeAllAccordion = this.closeAllAccordion.bind(this), this.openAccordion = this.openAccordion.bind(this), this.toggleActiveState = this.toggleActiveState.bind(this), this.onResize = this.onResize.bind(this)
				}
				var t, i, o;
				return t = e, (i = [{
					key: "CLASSNAMES",
					get: function() {
						return {
							defaultActiveState: "accordion__item--active-mod"
						}
					}
				}, {
					key: "isEnabled",
					value: function() {
						return this.enabled
					}
				}, {
					key: "disable",
					value: function() {
						this.enabled = !1
					}
				}, {
					key: "enable",
					value: function() {
						this.enabled = !0
					}
				}, {
					key: "onResize",
					value: function() {
						var e = this;
						this.isEnabled() && this.$allTriggers.forEach((function(t) {
							if (t.parentNode.classList.contains(e.activeStateName)) {
								var i = t.nextElementSibling;
								i.style.maxHeight = i.scrollHeight + "px"
							}
						}))
					}
				}, {
					key: "closeAllAccordion",
					value: function() {
						var e = this;
						this.$allTriggers.forEach((function(t) {
							e.closeAccordion(t.parentNode, t.nextElementSibling)
						}))
					}
				}, {
					key: "closeAccordion",
					value: function(e, t) {
						e.classList.remove(this.activeStateName), t.style.maxHeight = null
					}
				}, {
					key: "openAccordion",
					value: function(e, t) {
						var i = this;
						setTimeout((function() {
							i.closeAllAccordion(), e.classList.add(i.activeStateName), t.style.maxHeight = t.scrollHeight + "px"
						}), 100)
					}
				}, {
					key: "toggleActiveState",
					value: function(e) {
						if (this.enabled) {
							if (!e) return;
							var t = e.parentNode,
								i = e.nextElementSibling;
							t.classList.contains(this.activeStateName) ? this.closeAccordion(t, i) : this.openAccordion(t, i)
						}
					}
				}, {
					key: "init",
					value: function() {
						var e = this;
						this.$allTriggers && ((0, n.KN)(this.onResize), this.$allTriggers.forEach((function(t) {
							var i = t.parentNode;
							if (i.classList.contains(e.activeStateName) && e.isEnabled()) {
								var n = t.nextElementSibling;
								e.openAccordion(i, n)
							}
							t.addEventListener("click", (function() {
								e.toggleActiveState(t)
							}))
						})))
					}
				}]) && u(t.prototype, i), o && u(t, o), Object.defineProperty(t, "prototype", {
					writable: !1
				}), e
			}();
			const v = function() {
				var e, t = document.querySelector(".ProgBtn"),
					i = document.querySelector(".program__list"),
					n = document.querySelector(".program__title"),
					o = document.querySelector(".program__decor2_img"),
					r = !0,
					a = !1,
					s = !0,
					c = !0;
				t.addEventListener("click", (function() {
					i && i.classList.toggle("program__list--active_state"), t && t.classList.toggle("program__btn--active_state"), o && o.classList.toggle("program__decor2_img--show_mod"), r ? (r = !1, e = new(l())(".program__list", {
						itemSelector: ".program__item",
						horizontalOrder: !0
					})) : (n.scrollIntoView(), r = !0, e.destroy())
				}));
				var u = function() {
					var t = new d({
						triggers: document.querySelectorAll(".programAcc"),
						activeStateName: "program__item--active-mod"
					});
					(a || (t.init(), a = !0), e instanceof Object && e.destroy(), s = !1, c = !0)
				};
				u(), window.addEventListener("resize", (function() {
					u()
				}))
			};
			const f = function() {};
			const h = function() {};
			const g = function() {};
			var p = i(257);
			const m = function(e) {
				var t = document.querySelectorAll("".concat(e, ":not(.swiper)"));
				t && t.forEach((function(e) {
					var t = e,
						i = '<ul class="swiper-wrapper">'.concat(e.innerHTML, "</div>");
					t.classList.add("swiper"), t.innerHTML = i;
					var n = t.querySelector(".swiper-wrapper").children;
					Array.from(n).forEach((function(e) {
						return e.classList.add("swiper-slide")
					}))
				}))
			};
			const b = function() {
				var e = ".CasesSlider";
				m(e);
				var t = document.querySelectorAll(e);
				if (void 0 !== t && null != t) new p.ZP(e, {
					modules: [p.W_],
					observer: !0,
					observeParents: !0,
					speed: 800,
					spaceBetween: 30,
					navigation: {
						prevEl: ".slider_arrow--prev",
						nextEl: ".slider_arrow--next"
					},
					breakpoints: {
						320: {
							slidesPerView: 1
						}
					}
				})
			};
			const z = function() {
				var e = ".FeedbackSlider";
				m(e);
				var t = document.querySelectorAll(e);
				if (void 0 !== t && null != t) new p.ZP(e, {
					modules: [p.W_],
					observer: !0,
					observeParents: !0,
					speed: 800,
					spaceBetween: 30,
					navigation: {
						prevEl: ".slider_arrow--prev-first",
						nextEl: ".slider_arrow--next-first"
					},
					breakpoints: {
						320: {
							slidesPerView: 1
						}
					}
				})
			};
			const _ = function() {
				b()
			};
            const asd = function() {
                z()
            }
			const w = function() {
				new d({
					triggers: document.querySelectorAll(".accordion__item_head"),
					activeStateName: "accordion__item--active-mod"
				}).init()
			};
			const y = function() {
				var e = ".MaterialsSlider";
				m(e);
				var t = document.querySelectorAll(e);
				if (void 0 !== t && null != t) new p.ZP(e, {
					modules: [p.tl],
					observer: !0,
					observeParents: !0,
					speed: 800,
					slidesPerView: 1,
					spaceBetween: 30,
					autoHeight: !0,
					pagination: {
						el: ".slider_dots",
						type: "bullets",
						clickable: !0
					}
				})
			};
			const S = function() {
				y()
			};

			function A(e, t) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			var k = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.init = this.init.bind(this)
				}
				var t, i, c;
				return t = e, (i = [{
					key: "loadFunc",
					value: function() {
						o(), r(), a(), s(), v(), f(), h(), g(), _(), w(), S(), asd()
					}
				}, {
					key: "init",
					value: function() {
						var e = this;
						(0, n.$X)((function() {
							e.loadFunc()
						}))
					}
				}]) && A(t.prototype, i), c && A(t, c), Object.defineProperty(t, "prototype", {
					writable: !1
				}), e
			}()
		}
	}
]);