/*! For license information please see main.66e0f220.js.LICENSE.txt */
!(function () {
	var e = {
			4463: function (e, t, n) {
				"use strict";
				var r = n(2791),
					a = n(5296);
				function l(e) {
					for (
						var t =
								"https://reactjs.org/docs/error-decoder.html?invariant=" + e,
							n = 1;
						n < arguments.length;
						n++
					)
						t += "&args[]=" + encodeURIComponent(arguments[n]);
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				var i = new Set(),
					s = {};
				function o(e, t) {
					c(e, t), c(e + "Capture", t);
				}
				function c(e, t) {
					for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
				}
				var u = !(
						"undefined" === typeof window ||
						"undefined" === typeof window.document ||
						"undefined" === typeof window.document.createElement
					),
					d = Object.prototype.hasOwnProperty,
					f =
						/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					h = {},
					p = {};
				function m(e, t, n, r, a, l, i) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
						(this.attributeName = r),
						(this.attributeNamespace = a),
						(this.mustUseProperty = n),
						(this.propertyName = e),
						(this.type = t),
						(this.sanitizeURL = l),
						(this.removeEmptyString = i);
				}
				var x = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
					.split(" ")
					.forEach(function (e) {
						x[e] = new m(e, 0, !1, e, null, !1, !1);
					}),
					[
						["acceptCharset", "accept-charset"],
						["className", "class"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
					].forEach(function (e) {
						var t = e[0];
						x[t] = new m(t, 1, !1, e[1], null, !1, !1);
					}),
					["contentEditable", "draggable", "spellCheck", "value"].forEach(
						function (e) {
							x[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
						}
					),
					[
						"autoReverse",
						"externalResourcesRequired",
						"focusable",
						"preserveAlpha",
					].forEach(function (e) {
						x[e] = new m(e, 2, !1, e, null, !1, !1);
					}),
					"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
						.split(" ")
						.forEach(function (e) {
							x[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
						}),
					["checked", "multiple", "muted", "selected"].forEach(function (e) {
						x[e] = new m(e, 3, !0, e, null, !1, !1);
					}),
					["capture", "download"].forEach(function (e) {
						x[e] = new m(e, 4, !1, e, null, !1, !1);
					}),
					["cols", "rows", "size", "span"].forEach(function (e) {
						x[e] = new m(e, 6, !1, e, null, !1, !1);
					}),
					["rowSpan", "start"].forEach(function (e) {
						x[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var g = /[\-:]([a-z])/g;
				function y(e) {
					return e[1].toUpperCase();
				}
				function v(e, t, n, r) {
					var a = x.hasOwnProperty(t) ? x[t] : null;
					(null !== a
						? 0 !== a.type
						: r ||
						  !(2 < t.length) ||
						  ("o" !== t[0] && "O" !== t[0]) ||
						  ("n" !== t[1] && "N" !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null === t ||
								"undefined" === typeof t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case "function":
										case "symbol":
											return !0;
										case "boolean":
											return (
												!r &&
												(null !== n
													? !n.acceptsBooleans
													: "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
													  "aria-" !== e)
											);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, a, r) && (n = null),
						r || null === a
							? (function (e) {
									return (
										!!d.call(p, e) ||
										(!d.call(h, e) &&
											(f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
									);
							  })(t) &&
							  (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
							: a.mustUseProperty
							? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
							: ((t = a.attributeName),
							  (r = a.attributeNamespace),
							  null === n
									? e.removeAttribute(t)
									: ((n =
											3 === (a = a.type) || (4 === a && !0 === n)
												? ""
												: "" + n),
									  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
					.split(" ")
					.forEach(function (e) {
						var t = e.replace(g, y);
						x[t] = new m(t, 1, !1, e, null, !1, !1);
					}),
					"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
						.split(" ")
						.forEach(function (e) {
							var t = e.replace(g, y);
							x[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
						}),
					["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
						var t = e.replace(g, y);
						x[t] = new m(
							t,
							1,
							!1,
							e,
							"http://www.w3.org/XML/1998/namespace",
							!1,
							!1
						);
					}),
					["tabIndex", "crossOrigin"].forEach(function (e) {
						x[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(x.xlinkHref = new m(
						"xlinkHref",
						1,
						!1,
						"xlink:href",
						"http://www.w3.org/1999/xlink",
						!0,
						!1
					)),
					["src", "href", "action", "formAction"].forEach(function (e) {
						x[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var j = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					b = Symbol.for("react.element"),
					w = Symbol.for("react.portal"),
					S = Symbol.for("react.fragment"),
					N = Symbol.for("react.strict_mode"),
					k = Symbol.for("react.profiler"),
					C = Symbol.for("react.provider"),
					E = Symbol.for("react.context"),
					T = Symbol.for("react.forward_ref"),
					W = Symbol.for("react.suspense"),
					R = Symbol.for("react.suspense_list"),
					I = Symbol.for("react.memo"),
					D = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var _ = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"),
					Symbol.for("react.cache"),
					Symbol.for("react.tracing_marker");
				var P = Symbol.iterator;
				function L(e) {
					return null === e || "object" !== typeof e
						? null
						: "function" === typeof (e = (P && e[P]) || e["@@iterator"])
						? e
						: null;
				}
				var M,
					A = Object.assign;
				function O(e) {
					if (void 0 === M)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							M = (t && t[1]) || "";
						}
					return "\n" + M + e;
				}
				var z = !1;
				function B(e, t) {
					if (!e || z) return "";
					z = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								"object" === typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (c) {
									var r = c;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (c) {
									r = c;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (c) {
								r = c;
							}
							e();
						}
					} catch (c) {
						if (c && r && "string" === typeof c.stack) {
							for (
								var a = c.stack.split("\n"),
									l = r.stack.split("\n"),
									i = a.length - 1,
									s = l.length - 1;
								1 <= i && 0 <= s && a[i] !== l[s];

							)
								s--;
							for (; 1 <= i && 0 <= s; i--, s--)
								if (a[i] !== l[s]) {
									if (1 !== i || 1 !== s)
										do {
											if ((i--, 0 > --s || a[i] !== l[s])) {
												var o = "\n" + a[i].replace(" at new ", " at ");
												return (
													e.displayName &&
														o.includes("<anonymous>") &&
														(o = o.replace("<anonymous>", e.displayName)),
													o
												);
											}
										} while (1 <= i && 0 <= s);
									break;
								}
						}
					} finally {
						(z = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : "") ? O(e) : "";
				}
				function F(e) {
					switch (e.tag) {
						case 5:
							return O(e.type);
						case 16:
							return O("Lazy");
						case 13:
							return O("Suspense");
						case 19:
							return O("SuspenseList");
						case 0:
						case 2:
						case 15:
							return (e = B(e.type, !1));
						case 11:
							return (e = B(e.type.render, !1));
						case 1:
							return (e = B(e.type, !0));
						default:
							return "";
					}
				}
				function H(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case S:
							return "Fragment";
						case w:
							return "Portal";
						case k:
							return "Profiler";
						case N:
							return "StrictMode";
						case W:
							return "Suspense";
						case R:
							return "SuspenseList";
					}
					if ("object" === typeof e)
						switch (e.$$typeof) {
							case E:
								return (e.displayName || "Context") + ".Consumer";
							case C:
								return (e._context.displayName || "Context") + ".Provider";
							case T:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											"" !== (e = t.displayName || t.name || "")
												? "ForwardRef(" + e + ")"
												: "ForwardRef"),
									e
								);
							case I:
								return null !== (t = e.displayName || null)
									? t
									: H(e.type) || "Memo";
							case D:
								(t = e._payload), (e = e._init);
								try {
									return H(e(t));
								} catch (n) {}
						}
					return null;
				}
				function U(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return (
								(e = (e = t.render).displayName || e.name || ""),
								t.displayName ||
									("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
							);
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return H(t);
						case 8:
							return t === N ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" === typeof t)
								return t.displayName || t.name || null;
							if ("string" === typeof t) return t;
					}
					return null;
				}
				function V(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function K(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						"input" === e.toLowerCase() &&
						("checkbox" === t || "radio" === t)
					);
				}
				function G(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = K(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = "" + e[t];
							if (
								!e.hasOwnProperty(t) &&
								"undefined" !== typeof n &&
								"function" === typeof n.get &&
								"function" === typeof n.set
							) {
								var a = n.get,
									l = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return a.call(this);
										},
										set: function (e) {
											(r = "" + e), l.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function $(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return (
						e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function Q(e) {
					if (
						"undefined" ===
						typeof (e =
							e || ("undefined" !== typeof document ? document : void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function J(e, t) {
					var n = t.checked;
					return A({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked,
					});
				}
				function Y(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = V(null != t.value ? t.value : n)),
						(e._wrapperState = {
							initialChecked: r,
							initialValue: n,
							controlled:
								"checkbox" === t.type || "radio" === t.type
									? null != t.checked
									: null != t.value,
						});
				}
				function q(e, t) {
					null != (t = t.checked) && v(e, "checked", t, !1);
				}
				function Z(e, t) {
					q(e, t);
					var n = V(t.value),
						r = t.type;
					if (null != n)
						"number" === r
							? ((0 === n && "" === e.value) || e.value != n) &&
							  (e.value = "" + n)
							: e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r)
						return void e.removeAttribute("value");
					t.hasOwnProperty("value")
						? ee(e, t.type, n)
						: t.hasOwnProperty("defaultValue") &&
						  ee(e, t.type, V(t.defaultValue)),
						null == t.checked &&
							null != t.defaultChecked &&
							(e.defaultChecked = !!t.defaultChecked);
				}
				function X(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (
							!(
								("submit" !== r && "reset" !== r) ||
								(void 0 !== t.value && null !== t.value)
							)
						)
							return;
						(t = "" + e._wrapperState.initialValue),
							n || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					"" !== (n = e.name) && (e.name = ""),
						(e.defaultChecked = !!e._wrapperState.initialChecked),
						"" !== n && (e.name = n);
				}
				function ee(e, t, n) {
					("number" === t && Q(e.ownerDocument) === e) ||
						(null == n
							? (e.defaultValue = "" + e._wrapperState.initialValue)
							: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
						for (n = 0; n < e.length; n++)
							(a = t.hasOwnProperty("$" + e[n].value)),
								e[n].selected !== a && (e[n].selected = a),
								a && r && (e[n].defaultSelected = !0);
					} else {
						for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n)
								return (
									(e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
								);
							null !== t || e[a].disabled || (t = e[a]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
					return A({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue,
					});
				}
				function ae(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(l(92));
							if (te(n)) {
								if (1 < n.length) throw Error(l(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ""), (n = t);
					}
					e._wrapperState = { initialValue: V(n) };
				}
				function le(e, t) {
					var n = V(t.value),
						r = V(t.defaultValue);
					null != n &&
						((n = "" + n) !== e.value && (e.value = n),
						null == t.defaultValue &&
							e.defaultValue !== n &&
							(e.defaultValue = n)),
						null != r && (e.defaultValue = "" + r);
				}
				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue &&
						"" !== t &&
						null !== t &&
						(e.value = t);
				}
				function se(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml";
					}
				}
				function oe(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e
						? se(t)
						: "http://www.w3.org/2000/svg" === e && "foreignObject" === t
						? "http://www.w3.org/1999/xhtml"
						: e;
				}
				var ce,
					ue,
					de =
						((ue = function (e, t) {
							if (
								"http://www.w3.org/2000/svg" !== e.namespaceURI ||
								"innerHTML" in e
							)
								e.innerHTML = t;
							else {
								for (
									(ce = ce || document.createElement("div")).innerHTML =
										"<svg>" + t.valueOf().toString() + "</svg>",
										t = ce.firstChild;
									e.firstChild;

								)
									e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						"undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, r) {
									MSApp.execUnsafeLocalFunction(function () {
										return ue(e, t);
									});
							  }
							: ue);
				function fe(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var he = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					pe = ["Webkit", "ms", "Moz", "O"];
				function me(e, t, n) {
					return null == t || "boolean" === typeof t || "" === t
						? ""
						: n ||
						  "number" !== typeof t ||
						  0 === t ||
						  (he.hasOwnProperty(e) && he[e])
						? ("" + t).trim()
						: t + "px";
				}
				function xe(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								a = me(n, t[n], r);
							"float" === n && (n = "cssFloat"),
								r ? e.setProperty(n, a) : (e[n] = a);
						}
				}
				Object.keys(he).forEach(function (e) {
					pe.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
							(he[t] = he[e]);
					});
				});
				var ge = A(
					{ menuitem: !0 },
					{
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						embed: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
					}
				);
				function ye(e, t) {
					if (t) {
						if (
							ge[e] &&
							(null != t.children || null != t.dangerouslySetInnerHTML)
						)
							throw Error(l(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(l(60));
							if (
								"object" !== typeof t.dangerouslySetInnerHTML ||
								!("__html" in t.dangerouslySetInnerHTML)
							)
								throw Error(l(61));
						}
						if (null != t.style && "object" !== typeof t.style)
							throw Error(l(62));
					}
				}
				function ve(e, t) {
					if (-1 === e.indexOf("-")) return "string" === typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var je = null;
				function be(e) {
					return (
						(e = e.target || e.srcElement || window).correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var we = null,
					Se = null,
					Ne = null;
				function ke(e) {
					if ((e = va(e))) {
						if ("function" !== typeof we) throw Error(l(280));
						var t = e.stateNode;
						t && ((t = ba(t)), we(e.stateNode, e.type, t));
					}
				}
				function Ce(e) {
					Se ? (Ne ? Ne.push(e) : (Ne = [e])) : (Se = e);
				}
				function Ee() {
					if (Se) {
						var e = Se,
							t = Ne;
						if (((Ne = Se = null), ke(e), t))
							for (e = 0; e < t.length; e++) ke(t[e]);
					}
				}
				function Te(e, t) {
					return e(t);
				}
				function We() {}
				var Re = !1;
				function Ie(e, t, n) {
					if (Re) return e(t, n);
					Re = !0;
					try {
						return Te(e, t, n);
					} finally {
						(Re = !1), (null !== Se || null !== Ne) && (We(), Ee());
					}
				}
				function De(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = ba(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) ||
								(r = !(
									"button" === (e = e.type) ||
									"input" === e ||
									"select" === e ||
									"textarea" === e
								)),
								(e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
					return n;
				}
				var _e = !1;
				if (u)
					try {
						var Pe = {};
						Object.defineProperty(Pe, "passive", {
							get: function () {
								_e = !0;
							},
						}),
							window.addEventListener("test", Pe, Pe),
							window.removeEventListener("test", Pe, Pe);
					} catch (ue) {
						_e = !1;
					}
				function Le(e, t, n, r, a, l, i, s, o) {
					var c = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, c);
					} catch (u) {
						this.onError(u);
					}
				}
				var Me = !1,
					Ae = null,
					Oe = !1,
					ze = null,
					Be = {
						onError: function (e) {
							(Me = !0), (Ae = e);
						},
					};
				function Fe(e, t, n, r, a, l, i, s, o) {
					(Me = !1), (Ae = null), Le.apply(Be, arguments);
				}
				function He(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function Ue(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function Ve(e) {
					if (He(e) !== e) throw Error(l(188));
				}
				function Ke(e) {
					return null !==
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = He(e))) throw Error(l(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var a = n.return;
								if (null === a) break;
								var i = a.alternate;
								if (null === i) {
									if (null !== (r = a.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (a.child === i.child) {
									for (i = a.child; i; ) {
										if (i === n) return Ve(a), e;
										if (i === r) return Ve(a), t;
										i = i.sibling;
									}
									throw Error(l(188));
								}
								if (n.return !== r.return) (n = a), (r = i);
								else {
									for (var s = !1, o = a.child; o; ) {
										if (o === n) {
											(s = !0), (n = a), (r = i);
											break;
										}
										if (o === r) {
											(s = !0), (r = a), (n = i);
											break;
										}
										o = o.sibling;
									}
									if (!s) {
										for (o = i.child; o; ) {
											if (o === n) {
												(s = !0), (n = i), (r = a);
												break;
											}
											if (o === r) {
												(s = !0), (r = i), (n = a);
												break;
											}
											o = o.sibling;
										}
										if (!s) throw Error(l(189));
									}
								}
								if (n.alternate !== r) throw Error(l(190));
							}
							if (3 !== n.tag) throw Error(l(188));
							return n.stateNode.current === n ? e : t;
						})(e))
						? Ge(e)
						: null;
				}
				function Ge(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = Ge(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var $e = a.unstable_scheduleCallback,
					Qe = a.unstable_cancelCallback,
					Je = a.unstable_shouldYield,
					Ye = a.unstable_requestPaint,
					qe = a.unstable_now,
					Ze = a.unstable_getCurrentPriorityLevel,
					Xe = a.unstable_ImmediatePriority,
					et = a.unstable_UserBlockingPriority,
					tt = a.unstable_NormalPriority,
					nt = a.unstable_LowPriority,
					rt = a.unstable_IdlePriority,
					at = null,
					lt = null;
				var it = Math.clz32
						? Math.clz32
						: function (e) {
								return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / ot) | 0)) | 0;
						  },
					st = Math.log,
					ot = Math.LN2;
				var ct = 64,
					ut = 4194304;
				function dt(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function ft(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						l = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var s = i & ~a;
						0 !== s ? (r = dt(s)) : 0 !== (l &= i) && (r = dt(l));
					} else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
					if (0 === r) return 0;
					if (
						0 !== t &&
						t !== r &&
						0 === (t & a) &&
						((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
					)
						return t;
					if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
						for (e = e.entanglements, t &= r; 0 < t; )
							(a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
					return r;
				}
				function ht(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function pt(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes)
						? e
						: 1073741824 & e
						? 1073741824
						: 0;
				}
				function mt() {
					var e = ct;
					return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
				}
				function xt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function gt(e, t, n) {
					(e.pendingLanes |= t),
						536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
						((e = e.eventTimes)[(t = 31 - it(t))] = n);
				}
				function yt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - it(n),
							a = 1 << r;
						(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
					}
				}
				var vt = 0;
				function jt(e) {
					return 1 < (e &= -e)
						? 4 < e
							? 0 !== (268435455 & e)
								? 16
								: 536870912
							: 4
						: 1;
				}
				var bt,
					wt,
					St,
					Nt,
					kt,
					Ct = !1,
					Et = [],
					Tt = null,
					Wt = null,
					Rt = null,
					It = new Map(),
					Dt = new Map(),
					_t = [],
					Pt =
						"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
							" "
						);
				function Lt(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Tt = null;
							break;
						case "dragenter":
						case "dragleave":
							Wt = null;
							break;
						case "mouseover":
						case "mouseout":
							Rt = null;
							break;
						case "pointerover":
						case "pointerout":
							It.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							Dt.delete(t.pointerId);
					}
				}
				function Mt(e, t, n, r, a, l) {
					return null === e || e.nativeEvent !== l
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: l,
								targetContainers: [a],
						  }),
						  null !== t && null !== (t = va(t)) && wt(t),
						  e)
						: ((e.eventSystemFlags |= r),
						  (t = e.targetContainers),
						  null !== a && -1 === t.indexOf(a) && t.push(a),
						  e);
				}
				function At(e) {
					var t = ya(e.target);
					if (null !== t) {
						var n = He(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Ue(n)))
									return (
										(e.blockedOn = t),
										void kt(e.priority, function () {
											St(n);
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function Ot(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n)
							return null !== (t = va(n)) && wt(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(je = r), n.target.dispatchEvent(r), (je = null), t.shift();
					}
					return !0;
				}
				function zt(e, t, n) {
					Ot(e) && n.delete(t);
				}
				function Bt() {
					(Ct = !1),
						null !== Tt && Ot(Tt) && (Tt = null),
						null !== Wt && Ot(Wt) && (Wt = null),
						null !== Rt && Ot(Rt) && (Rt = null),
						It.forEach(zt),
						Dt.forEach(zt);
				}
				function Ft(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						Ct ||
							((Ct = !0),
							a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
				}
				function Ht(e) {
					function t(t) {
						return Ft(t, e);
					}
					if (0 < Et.length) {
						Ft(Et[0], e);
						for (var n = 1; n < Et.length; n++) {
							var r = Et[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (
						null !== Tt && Ft(Tt, e),
							null !== Wt && Ft(Wt, e),
							null !== Rt && Ft(Rt, e),
							It.forEach(t),
							Dt.forEach(t),
							n = 0;
						n < _t.length;
						n++
					)
						(r = _t[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < _t.length && null === (n = _t[0]).blockedOn; )
						At(n), null === n.blockedOn && _t.shift();
				}
				var Ut = j.ReactCurrentBatchConfig,
					Vt = !0;
				function Kt(e, t, n, r) {
					var a = vt,
						l = Ut.transition;
					Ut.transition = null;
					try {
						(vt = 1), $t(e, t, n, r);
					} finally {
						(vt = a), (Ut.transition = l);
					}
				}
				function Gt(e, t, n, r) {
					var a = vt,
						l = Ut.transition;
					Ut.transition = null;
					try {
						(vt = 4), $t(e, t, n, r);
					} finally {
						(vt = a), (Ut.transition = l);
					}
				}
				function $t(e, t, n, r) {
					if (Vt) {
						var a = Jt(e, t, n, r);
						if (null === a) Vr(e, t, r, Qt, n), Lt(e, r);
						else if (
							(function (e, t, n, r, a) {
								switch (t) {
									case "focusin":
										return (Tt = Mt(Tt, e, t, n, r, a)), !0;
									case "dragenter":
										return (Wt = Mt(Wt, e, t, n, r, a)), !0;
									case "mouseover":
										return (Rt = Mt(Rt, e, t, n, r, a)), !0;
									case "pointerover":
										var l = a.pointerId;
										return It.set(l, Mt(It.get(l) || null, e, t, n, r, a)), !0;
									case "gotpointercapture":
										return (
											(l = a.pointerId),
											Dt.set(l, Mt(Dt.get(l) || null, e, t, n, r, a)),
											!0
										);
								}
								return !1;
							})(a, e, t, n, r)
						)
							r.stopPropagation();
						else if ((Lt(e, r), 4 & t && -1 < Pt.indexOf(e))) {
							for (; null !== a; ) {
								var l = va(a);
								if (
									(null !== l && bt(l),
									null === (l = Jt(e, t, n, r)) && Vr(e, t, r, Qt, n),
									l === a)
								)
									break;
								a = l;
							}
							null !== a && r.stopPropagation();
						} else Vr(e, t, r, null, n);
					}
				}
				var Qt = null;
				function Jt(e, t, n, r) {
					if (((Qt = null), null !== (e = ya((e = be(r))))))
						if (null === (t = He(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = Ue(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated)
								return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (Qt = e), null;
				}
				function Yt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Ze()) {
								case Xe:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var qt = null,
					Zt = null,
					Xt = null;
				function en() {
					if (Xt) return Xt;
					var e,
						t,
						n = Zt,
						r = n.length,
						a = "value" in qt ? qt.value : qt.textContent,
						l = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
					return (Xt = a.slice(e, 1 < t ? 1 - t : void 0));
				}
				function tn(e) {
					var t = e.keyCode;
					return (
						"charCode" in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function nn() {
					return !0;
				}
				function rn() {
					return !1;
				}
				function an(e) {
					function t(t, n, r, a, l) {
						for (var i in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = a),
						(this.target = l),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
						return (
							(this.isDefaultPrevented = (
								null != a.defaultPrevented
									? a.defaultPrevented
									: !1 === a.returnValue
							)
								? nn
								: rn),
							(this.isPropagationStopped = rn),
							this
						);
					}
					return (
						A(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: "unknown" !== typeof e.returnValue &&
										  (e.returnValue = !1),
									(this.isDefaultPrevented = nn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: "unknown" !== typeof e.cancelBubble &&
										  (e.cancelBubble = !0),
									(this.isPropagationStopped = nn));
							},
							persist: function () {},
							isPersistent: nn,
						}),
						t
					);
				}
				var ln,
					sn,
					on,
					cn = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					un = an(cn),
					dn = A({}, cn, { view: 0, detail: 0 }),
					fn = an(dn),
					hn = A({}, dn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: kn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e
								? e.movementX
								: (e !== on &&
										(on && "mousemove" === e.type
											? ((ln = e.screenX - on.screenX),
											  (sn = e.screenY - on.screenY))
											: (sn = ln = 0),
										(on = e)),
								  ln);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : sn;
						},
					}),
					pn = an(hn),
					mn = an(A({}, hn, { dataTransfer: 0 })),
					xn = an(A({}, dn, { relatedTarget: 0 })),
					gn = an(
						A({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					yn = A({}, cn, {
						clipboardData: function (e) {
							return "clipboardData" in e
								? e.clipboardData
								: window.clipboardData;
						},
					}),
					vn = an(yn),
					jn = an(A({}, cn, { data: 0 })),
					bn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified",
					},
					wn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					Sn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey",
					};
				function Nn(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = Sn[e]) && !!t[e];
				}
				function kn() {
					return Nn;
				}
				var Cn = A({}, dn, {
						key: function (e) {
							if (e.key) {
								var t = bn[e.key] || e.key;
								if ("Unidentified" !== t) return t;
							}
							return "keypress" === e.type
								? 13 === (e = tn(e))
									? "Enter"
									: String.fromCharCode(e)
								: "keydown" === e.type || "keyup" === e.type
								? wn[e.keyCode] || "Unidentified"
								: "";
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: kn,
						charCode: function (e) {
							return "keypress" === e.type ? tn(e) : 0;
						},
						keyCode: function (e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return "keypress" === e.type
								? tn(e)
								: "keydown" === e.type || "keyup" === e.type
								? e.keyCode
								: 0;
						},
					}),
					En = an(Cn),
					Tn = an(
						A({}, hn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						})
					),
					Wn = an(
						A({}, dn, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: kn,
						})
					),
					Rn = an(
						A({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					In = A({}, hn, {
						deltaX: function (e) {
							return "deltaX" in e
								? e.deltaX
								: "wheelDeltaX" in e
								? -e.wheelDeltaX
								: 0;
						},
						deltaY: function (e) {
							return "deltaY" in e
								? e.deltaY
								: "wheelDeltaY" in e
								? -e.wheelDeltaY
								: "wheelDelta" in e
								? -e.wheelDelta
								: 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					Dn = an(In),
					_n = [9, 13, 27, 32],
					Pn = u && "CompositionEvent" in window,
					Ln = null;
				u && "documentMode" in document && (Ln = document.documentMode);
				var Mn = u && "TextEvent" in window && !Ln,
					An = u && (!Pn || (Ln && 8 < Ln && 11 >= Ln)),
					On = String.fromCharCode(32),
					zn = !1;
				function Bn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== _n.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Fn(e) {
					return "object" === typeof (e = e.detail) && "data" in e
						? e.data
						: null;
				}
				var Hn = !1;
				var Un = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function Vn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Un[e.type] : "textarea" === t;
				}
				function Kn(e, t, n, r) {
					Ce(r),
						0 < (t = Gr(t, "onChange")).length &&
							((n = new un("onChange", "change", null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var Gn = null,
					$n = null;
				function Qn(e) {
					Or(e, 0);
				}
				function Jn(e) {
					if ($(ja(e))) return e;
				}
				function Yn(e, t) {
					if ("change" === e) return t;
				}
				var qn = !1;
				if (u) {
					var Zn;
					if (u) {
						var Xn = "oninput" in document;
						if (!Xn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"),
								(Xn = "function" === typeof er.oninput);
						}
						Zn = Xn;
					} else Zn = !1;
					qn = Zn && (!document.documentMode || 9 < document.documentMode);
				}
				function tr() {
					Gn && (Gn.detachEvent("onpropertychange", nr), ($n = Gn = null));
				}
				function nr(e) {
					if ("value" === e.propertyName && Jn($n)) {
						var t = [];
						Kn(t, $n, e, be(e)), Ie(Qn, t);
					}
				}
				function rr(e, t, n) {
					"focusin" === e
						? (tr(), ($n = n), (Gn = t).attachEvent("onpropertychange", nr))
						: "focusout" === e && tr();
				}
				function ar(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e)
						return Jn($n);
				}
				function lr(e, t) {
					if ("click" === e) return Jn(t);
				}
				function ir(e, t) {
					if ("input" === e || "change" === e) return Jn(t);
				}
				var sr =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e === 1 / t)) ||
									(e !== e && t !== t)
								);
						  };
				function or(e, t) {
					if (sr(e, t)) return !0;
					if (
						"object" !== typeof e ||
						null === e ||
						"object" !== typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!d.call(t, a) || !sr(e[a], t[a])) return !1;
					}
					return !0;
				}
				function cr(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function ur(e, t) {
					var n,
						r = cr(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t))
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = cr(r);
					}
				}
				function dr(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? dr(e, t.parentNode)
									: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
									  !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function fr() {
					for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = "string" === typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = Q((e = t.contentWindow).document);
					}
					return t;
				}
				function hr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(("input" === t &&
							("text" === e.type ||
								"search" === e.type ||
								"tel" === e.type ||
								"url" === e.type ||
								"password" === e.type)) ||
							"textarea" === t ||
							"true" === e.contentEditable)
					);
				}
				function pr(e) {
					var t = fr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (
						t !== n &&
						n &&
						n.ownerDocument &&
						dr(n.ownerDocument.documentElement, n)
					) {
						if (null !== r && hr(n))
							if (
								((t = r.start),
								void 0 === (e = r.end) && (e = t),
								"selectionStart" in n)
							)
								(n.selectionStart = t),
									(n.selectionEnd = Math.min(e, n.value.length));
							else if (
								(e =
									((t = n.ownerDocument || document) && t.defaultView) ||
									window).getSelection
							) {
								e = e.getSelection();
								var a = n.textContent.length,
									l = Math.min(r.start, a);
								(r = void 0 === r.end ? l : Math.min(r.end, a)),
									!e.extend && l > r && ((a = r), (r = l), (l = a)),
									(a = ur(n, l));
								var i = ur(n, r);
								a &&
									i &&
									(1 !== e.rangeCount ||
										e.anchorNode !== a.node ||
										e.anchorOffset !== a.offset ||
										e.focusNode !== i.node ||
										e.focusOffset !== i.offset) &&
									((t = t.createRange()).setStart(a.node, a.offset),
									e.removeAllRanges(),
									l > r
										? (e.addRange(t), e.extend(i.node, i.offset))
										: (t.setEnd(i.node, i.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); )
							1 === e.nodeType &&
								t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
						for (
							"function" === typeof n.focus && n.focus(), n = 0;
							n < t.length;
							n++
						)
							((e = t[n]).element.scrollLeft = e.left),
								(e.element.scrollTop = e.top);
					}
				}
				var mr = u && "documentMode" in document && 11 >= document.documentMode,
					xr = null,
					gr = null,
					yr = null,
					vr = !1;
				function jr(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
							? n
							: n.ownerDocument;
					vr ||
						null == xr ||
						xr !== Q(r) ||
						("selectionStart" in (r = xr) && hr(r)
							? (r = { start: r.selectionStart, end: r.selectionEnd })
							: (r = {
									anchorNode: (r = (
										(r.ownerDocument && r.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: r.anchorOffset,
									focusNode: r.focusNode,
									focusOffset: r.focusOffset,
							  }),
						(yr && or(yr, r)) ||
							((yr = r),
							0 < (r = Gr(gr, "onSelect")).length &&
								((t = new un("onSelect", "select", null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = xr))));
				}
				function br(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n["Webkit" + e] = "webkit" + t),
						(n["Moz" + e] = "moz" + t),
						n
					);
				}
				var wr = {
						animationend: br("Animation", "AnimationEnd"),
						animationiteration: br("Animation", "AnimationIteration"),
						animationstart: br("Animation", "AnimationStart"),
						transitionend: br("Transition", "TransitionEnd"),
					},
					Sr = {},
					Nr = {};
				function kr(e) {
					if (Sr[e]) return Sr[e];
					if (!wr[e]) return e;
					var t,
						n = wr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in Nr) return (Sr[e] = n[t]);
					return e;
				}
				u &&
					((Nr = document.createElement("div").style),
					"AnimationEvent" in window ||
						(delete wr.animationend.animation,
						delete wr.animationiteration.animation,
						delete wr.animationstart.animation),
					"TransitionEvent" in window || delete wr.transitionend.transition);
				var Cr = kr("animationend"),
					Er = kr("animationiteration"),
					Tr = kr("animationstart"),
					Wr = kr("transitionend"),
					Rr = new Map(),
					Ir =
						"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
							" "
						);
				function Dr(e, t) {
					Rr.set(e, t), o(t, [e]);
				}
				for (var _r = 0; _r < Ir.length; _r++) {
					var Pr = Ir[_r];
					Dr(Pr.toLowerCase(), "on" + (Pr[0].toUpperCase() + Pr.slice(1)));
				}
				Dr(Cr, "onAnimationEnd"),
					Dr(Er, "onAnimationIteration"),
					Dr(Tr, "onAnimationStart"),
					Dr("dblclick", "onDoubleClick"),
					Dr("focusin", "onFocus"),
					Dr("focusout", "onBlur"),
					Dr(Wr, "onTransitionEnd"),
					c("onMouseEnter", ["mouseout", "mouseover"]),
					c("onMouseLeave", ["mouseout", "mouseover"]),
					c("onPointerEnter", ["pointerout", "pointerover"]),
					c("onPointerLeave", ["pointerout", "pointerover"]),
					o(
						"onChange",
						"change click focusin focusout input keydown keyup selectionchange".split(
							" "
						)
					),
					o(
						"onSelect",
						"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
							" "
						)
					),
					o("onBeforeInput", [
						"compositionend",
						"keypress",
						"textInput",
						"paste",
					]),
					o(
						"onCompositionEnd",
						"compositionend focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					o(
						"onCompositionStart",
						"compositionstart focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					o(
						"onCompositionUpdate",
						"compositionupdate focusout keydown keypress keyup mousedown".split(
							" "
						)
					);
				var Lr =
						"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
							" "
						),
					Mr = new Set(
						"cancel close invalid load scroll toggle".split(" ").concat(Lr)
					);
				function Ar(e, t, n) {
					var r = e.type || "unknown-event";
					(e.currentTarget = n),
						(function (e, t, n, r, a, i, s, o, c) {
							if ((Fe.apply(this, arguments), Me)) {
								if (!Me) throw Error(l(198));
								var u = Ae;
								(Me = !1), (Ae = null), Oe || ((Oe = !0), (ze = u));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Or(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var l = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var s = r[i],
										o = s.instance,
										c = s.currentTarget;
									if (((s = s.listener), o !== l && a.isPropagationStopped()))
										break e;
									Ar(a, s, c), (l = o);
								}
							else
								for (i = 0; i < r.length; i++) {
									if (
										((o = (s = r[i]).instance),
										(c = s.currentTarget),
										(s = s.listener),
										o !== l && a.isPropagationStopped())
									)
										break e;
									Ar(a, s, c), (l = o);
								}
						}
					}
					if (Oe) throw ((e = ze), (Oe = !1), (ze = null), e);
				}
				function zr(e, t) {
					var n = t[ma];
					void 0 === n && (n = t[ma] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Ur(t, e, 2, !1), n.add(r));
				}
				function Br(e, t, n) {
					var r = 0;
					t && (r |= 4), Ur(n, e, r, t);
				}
				var Fr = "_reactListening" + Math.random().toString(36).slice(2);
				function Hr(e) {
					if (!e[Fr]) {
						(e[Fr] = !0),
							i.forEach(function (t) {
								"selectionchange" !== t &&
									(Mr.has(t) || Br(t, !1, e), Br(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Fr] || ((t[Fr] = !0), Br("selectionchange", !1, t));
					}
				}
				function Ur(e, t, n, r) {
					switch (Yt(t)) {
						case 1:
							var a = Kt;
							break;
						case 4:
							a = Gt;
							break;
						default:
							a = $t;
					}
					(n = a.bind(null, t, n, e)),
						(a = void 0),
						!_e ||
							("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
							(a = !0),
						r
							? void 0 !== a
								? e.addEventListener(t, n, { capture: !0, passive: a })
								: e.addEventListener(t, n, !0)
							: void 0 !== a
							? e.addEventListener(t, n, { passive: a })
							: e.addEventListener(t, n, !1);
				}
				function Vr(e, t, n, r, a) {
					var l = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var i = r.tag;
							if (3 === i || 4 === i) {
								var s = r.stateNode.containerInfo;
								if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
								if (4 === i)
									for (i = r.return; null !== i; ) {
										var o = i.tag;
										if (
											(3 === o || 4 === o) &&
											((o = i.stateNode.containerInfo) === a ||
												(8 === o.nodeType && o.parentNode === a))
										)
											return;
										i = i.return;
									}
								for (; null !== s; ) {
									if (null === (i = ya(s))) return;
									if (5 === (o = i.tag) || 6 === o) {
										r = l = i;
										continue e;
									}
									s = s.parentNode;
								}
							}
							r = r.return;
						}
					Ie(function () {
						var r = l,
							a = be(n),
							i = [];
						e: {
							var s = Rr.get(e);
							if (void 0 !== s) {
								var o = un,
									c = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										o = En;
										break;
									case "focusin":
										(c = "focus"), (o = xn);
										break;
									case "focusout":
										(c = "blur"), (o = xn);
										break;
									case "beforeblur":
									case "afterblur":
										o = xn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										o = pn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										o = mn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										o = Wn;
										break;
									case Cr:
									case Er:
									case Tr:
										o = gn;
										break;
									case Wr:
										o = Rn;
										break;
									case "scroll":
										o = fn;
										break;
									case "wheel":
										o = Dn;
										break;
									case "copy":
									case "cut":
									case "paste":
										o = vn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										o = Tn;
								}
								var u = 0 !== (4 & t),
									d = !u && "scroll" === e,
									f = u ? (null !== s ? s + "Capture" : null) : s;
								u = [];
								for (var h, p = r; null !== p; ) {
									var m = (h = p).stateNode;
									if (
										(5 === h.tag &&
											null !== m &&
											((h = m),
											null !== f &&
												null != (m = De(p, f)) &&
												u.push(Kr(p, m, h))),
										d)
									)
										break;
									p = p.return;
								}
								0 < u.length &&
									((s = new o(s, c, null, n, a)),
									i.push({ event: s, listeners: u }));
							}
						}
						if (0 === (7 & t)) {
							if (
								((o = "mouseout" === e || "pointerout" === e),
								(!(s = "mouseover" === e || "pointerover" === e) ||
									n === je ||
									!(c = n.relatedTarget || n.fromElement) ||
									(!ya(c) && !c[pa])) &&
									(o || s) &&
									((s =
										a.window === a
											? a
											: (s = a.ownerDocument)
											? s.defaultView || s.parentWindow
											: window),
									o
										? ((o = r),
										  null !==
												(c = (c = n.relatedTarget || n.toElement)
													? ya(c)
													: null) &&
												(c !== (d = He(c)) || (5 !== c.tag && 6 !== c.tag)) &&
												(c = null))
										: ((o = null), (c = r)),
									o !== c))
							) {
								if (
									((u = pn),
									(m = "onMouseLeave"),
									(f = "onMouseEnter"),
									(p = "mouse"),
									("pointerout" !== e && "pointerover" !== e) ||
										((u = Tn),
										(m = "onPointerLeave"),
										(f = "onPointerEnter"),
										(p = "pointer")),
									(d = null == o ? s : ja(o)),
									(h = null == c ? s : ja(c)),
									((s = new u(m, p + "leave", o, n, a)).target = d),
									(s.relatedTarget = h),
									(m = null),
									ya(a) === r &&
										(((u = new u(f, p + "enter", c, n, a)).target = h),
										(u.relatedTarget = d),
										(m = u)),
									(d = m),
									o && c)
								)
									e: {
										for (f = c, p = 0, h = u = o; h; h = $r(h)) p++;
										for (h = 0, m = f; m; m = $r(m)) h++;
										for (; 0 < p - h; ) (u = $r(u)), p--;
										for (; 0 < h - p; ) (f = $r(f)), h--;
										for (; p--; ) {
											if (u === f || (null !== f && u === f.alternate)) break e;
											(u = $r(u)), (f = $r(f));
										}
										u = null;
									}
								else u = null;
								null !== o && Qr(i, s, o, u, !1),
									null !== c && null !== d && Qr(i, d, c, u, !0);
							}
							if (
								"select" ===
									(o =
										(s = r ? ja(r) : window).nodeName &&
										s.nodeName.toLowerCase()) ||
								("input" === o && "file" === s.type)
							)
								var x = Yn;
							else if (Vn(s))
								if (qn) x = ir;
								else {
									x = ar;
									var g = rr;
								}
							else
								(o = s.nodeName) &&
									"input" === o.toLowerCase() &&
									("checkbox" === s.type || "radio" === s.type) &&
									(x = lr);
							switch (
								(x && (x = x(e, r))
									? Kn(i, x, n, a)
									: (g && g(e, s, r),
									  "focusout" === e &&
											(g = s._wrapperState) &&
											g.controlled &&
											"number" === s.type &&
											ee(s, "number", s.value)),
								(g = r ? ja(r) : window),
								e)
							) {
								case "focusin":
									(Vn(g) || "true" === g.contentEditable) &&
										((xr = g), (gr = r), (yr = null));
									break;
								case "focusout":
									yr = gr = xr = null;
									break;
								case "mousedown":
									vr = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(vr = !1), jr(i, n, a);
									break;
								case "selectionchange":
									if (mr) break;
								case "keydown":
								case "keyup":
									jr(i, n, a);
							}
							var y;
							if (Pn)
								e: {
									switch (e) {
										case "compositionstart":
											var v = "onCompositionStart";
											break e;
										case "compositionend":
											v = "onCompositionEnd";
											break e;
										case "compositionupdate":
											v = "onCompositionUpdate";
											break e;
									}
									v = void 0;
								}
							else
								Hn
									? Bn(e, n) && (v = "onCompositionEnd")
									: "keydown" === e &&
									  229 === n.keyCode &&
									  (v = "onCompositionStart");
							v &&
								(An &&
									"ko" !== n.locale &&
									(Hn || "onCompositionStart" !== v
										? "onCompositionEnd" === v && Hn && (y = en())
										: ((Zt = "value" in (qt = a) ? qt.value : qt.textContent),
										  (Hn = !0))),
								0 < (g = Gr(r, v)).length &&
									((v = new jn(v, e, null, n, a)),
									i.push({ event: v, listeners: g }),
									y ? (v.data = y) : null !== (y = Fn(n)) && (v.data = y))),
								(y = Mn
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Fn(t);
												case "keypress":
													return 32 !== t.which ? null : ((zn = !0), On);
												case "textInput":
													return (e = t.data) === On && zn ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Hn)
												return "compositionend" === e || (!Pn && Bn(e, t))
													? ((e = en()), (Xt = Zt = qt = null), (Hn = !1), e)
													: null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (
														!(t.ctrlKey || t.altKey || t.metaKey) ||
														(t.ctrlKey && t.altKey)
													) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case "compositionend":
													return An && "ko" !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (r = Gr(r, "onBeforeInput")).length &&
									((a = new jn("onBeforeInput", "beforeinput", null, n, a)),
									i.push({ event: a, listeners: r }),
									(a.data = y));
						}
						Or(i, t);
					});
				}
				function Kr(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function Gr(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var a = e,
							l = a.stateNode;
						5 === a.tag &&
							null !== l &&
							((a = l),
							null != (l = De(e, n)) && r.unshift(Kr(e, l, a)),
							null != (l = De(e, t)) && r.push(Kr(e, l, a))),
							(e = e.return);
					}
					return r;
				}
				function $r(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function Qr(e, t, n, r, a) {
					for (var l = t._reactName, i = []; null !== n && n !== r; ) {
						var s = n,
							o = s.alternate,
							c = s.stateNode;
						if (null !== o && o === r) break;
						5 === s.tag &&
							null !== c &&
							((s = c),
							a
								? null != (o = De(n, l)) && i.unshift(Kr(n, o, s))
								: a || (null != (o = De(n, l)) && i.push(Kr(n, o, s)))),
							(n = n.return);
					}
					0 !== i.length && e.push({ event: t, listeners: i });
				}
				var Jr = /\r\n?/g,
					Yr = /\u0000|\uFFFD/g;
				function qr(e) {
					return ("string" === typeof e ? e : "" + e)
						.replace(Jr, "\n")
						.replace(Yr, "");
				}
				function Zr(e, t, n) {
					if (((t = qr(t)), qr(e) !== t && n)) throw Error(l(425));
				}
				function Xr() {}
				var ea = null,
					ta = null;
				function na(e, t) {
					return (
						"textarea" === e ||
						"noscript" === e ||
						"string" === typeof t.children ||
						"number" === typeof t.children ||
						("object" === typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var ra = "function" === typeof setTimeout ? setTimeout : void 0,
					aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
					la = "function" === typeof Promise ? Promise : void 0,
					ia =
						"function" === typeof queueMicrotask
							? queueMicrotask
							: "undefined" !== typeof la
							? function (e) {
									return la.resolve(null).then(e).catch(sa);
							  }
							: ra;
				function sa(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function oa(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if ((e.removeChild(n), a && 8 === a.nodeType))
							if ("/$" === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void Ht(t);
								r--;
							} else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
						n = a;
					} while (n);
					Ht(t);
				}
				function ca(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function ua(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var da = Math.random().toString(36).slice(2),
					fa = "__reactFiber$" + da,
					ha = "__reactProps$" + da,
					pa = "__reactContainer$" + da,
					ma = "__reactEvents$" + da,
					xa = "__reactListeners$" + da,
					ga = "__reactHandles$" + da;
				function ya(e) {
					var t = e[fa];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[pa] || n[fa])) {
							if (
								((n = t.alternate),
								null !== t.child || (null !== n && null !== n.child))
							)
								for (e = ua(e); null !== e; ) {
									if ((n = e[fa])) return n;
									e = ua(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function va(e) {
					return !(e = e[fa] || e[pa]) ||
						(5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
						? null
						: e;
				}
				function ja(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(l(33));
				}
				function ba(e) {
					return e[ha] || null;
				}
				var wa = [],
					Sa = -1;
				function Na(e) {
					return { current: e };
				}
				function ka(e) {
					0 > Sa || ((e.current = wa[Sa]), (wa[Sa] = null), Sa--);
				}
				function Ca(e, t) {
					Sa++, (wa[Sa] = e.current), (e.current = t);
				}
				var Ea = {},
					Ta = Na(Ea),
					Wa = Na(!1),
					Ra = Ea;
				function Ia(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Ea;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
						return r.__reactInternalMemoizedMaskedChildContext;
					var a,
						l = {};
					for (a in n) l[a] = t[a];
					return (
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								t),
							(e.__reactInternalMemoizedMaskedChildContext = l)),
						l
					);
				}
				function Da(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e;
				}
				function _a() {
					ka(Wa), ka(Ta);
				}
				function Pa(e, t, n) {
					if (Ta.current !== Ea) throw Error(l(168));
					Ca(Ta, t), Ca(Wa, n);
				}
				function La(e, t, n) {
					var r = e.stateNode;
					if (
						((t = t.childContextTypes), "function" !== typeof r.getChildContext)
					)
						return n;
					for (var a in (r = r.getChildContext()))
						if (!(a in t)) throw Error(l(108, U(e) || "Unknown", a));
					return A({}, n, r);
				}
				function Ma(e) {
					return (
						(e =
							((e = e.stateNode) &&
								e.__reactInternalMemoizedMergedChildContext) ||
							Ea),
						(Ra = Ta.current),
						Ca(Ta, e),
						Ca(Wa, Wa.current),
						!0
					);
				}
				function Aa(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(l(169));
					n
						? ((e = La(e, t, Ra)),
						  (r.__reactInternalMemoizedMergedChildContext = e),
						  ka(Wa),
						  ka(Ta),
						  Ca(Ta, e))
						: ka(Wa),
						Ca(Wa, n);
				}
				var Oa = null,
					za = !1,
					Ba = !1;
				function Fa(e) {
					null === Oa ? (Oa = [e]) : Oa.push(e);
				}
				function Ha() {
					if (!Ba && null !== Oa) {
						Ba = !0;
						var e = 0,
							t = vt;
						try {
							var n = Oa;
							for (vt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Oa = null), (za = !1);
						} catch (a) {
							throw (null !== Oa && (Oa = Oa.slice(e + 1)), $e(Xe, Ha), a);
						} finally {
							(vt = t), (Ba = !1);
						}
					}
					return null;
				}
				var Ua = [],
					Va = 0,
					Ka = null,
					Ga = 0,
					$a = [],
					Qa = 0,
					Ja = null,
					Ya = 1,
					qa = "";
				function Za(e, t) {
					(Ua[Va++] = Ga), (Ua[Va++] = Ka), (Ka = e), (Ga = t);
				}
				function Xa(e, t, n) {
					($a[Qa++] = Ya), ($a[Qa++] = qa), ($a[Qa++] = Ja), (Ja = e);
					var r = Ya;
					e = qa;
					var a = 32 - it(r) - 1;
					(r &= ~(1 << a)), (n += 1);
					var l = 32 - it(t) + a;
					if (30 < l) {
						var i = a - (a % 5);
						(l = (r & ((1 << i) - 1)).toString(32)),
							(r >>= i),
							(a -= i),
							(Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
							(qa = l + e);
					} else (Ya = (1 << l) | (n << a) | r), (qa = e);
				}
				function el(e) {
					null !== e.return && (Za(e, 1), Xa(e, 1, 0));
				}
				function tl(e) {
					for (; e === Ka; )
						(Ka = Ua[--Va]), (Ua[Va] = null), (Ga = Ua[--Va]), (Ua[Va] = null);
					for (; e === Ja; )
						(Ja = $a[--Qa]),
							($a[Qa] = null),
							(qa = $a[--Qa]),
							($a[Qa] = null),
							(Ya = $a[--Qa]),
							($a[Qa] = null);
				}
				var nl = null,
					rl = null,
					al = !1,
					ll = null;
				function il(e, t) {
					var n = Dc(5, null, null, 0);
					(n.elementType = "DELETED"),
						(n.stateNode = t),
						(n.return = e),
						null === (t = e.deletions)
							? ((e.deletions = [n]), (e.flags |= 16))
							: t.push(n);
				}
				function sl(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return (
								null !==
									(t =
										1 !== t.nodeType ||
										n.toLowerCase() !== t.nodeName.toLowerCase()
											? null
											: t) &&
								((e.stateNode = t), (nl = e), (rl = ca(t.firstChild)), !0)
							);
						case 6:
							return (
								null !==
									(t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
								((e.stateNode = t), (nl = e), (rl = null), !0)
							);
						case 13:
							return (
								null !== (t = 8 !== t.nodeType ? null : t) &&
								((n = null !== Ja ? { id: Ya, overflow: qa } : null),
								(e.memoizedState = {
									dehydrated: t,
									treeContext: n,
									retryLane: 1073741824,
								}),
								((n = Dc(18, null, null, 0)).stateNode = t),
								(n.return = e),
								(e.child = n),
								(nl = e),
								(rl = null),
								!0)
							);
						default:
							return !1;
					}
				}
				function ol(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
				}
				function cl(e) {
					if (al) {
						var t = rl;
						if (t) {
							var n = t;
							if (!sl(e, t)) {
								if (ol(e)) throw Error(l(418));
								t = ca(n.nextSibling);
								var r = nl;
								t && sl(e, t)
									? il(r, n)
									: ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
							}
						} else {
							if (ol(e)) throw Error(l(418));
							(e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
						}
					}
				}
				function ul(e) {
					for (
						e = e.return;
						null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

					)
						e = e.return;
					nl = e;
				}
				function dl(e) {
					if (e !== nl) return !1;
					if (!al) return ul(e), (al = !0), !1;
					var t;
					if (
						((t = 3 !== e.tag) &&
							!(t = 5 !== e.tag) &&
							(t =
								"head" !== (t = e.type) &&
								"body" !== t &&
								!na(e.type, e.memoizedProps)),
						t && (t = rl))
					) {
						if (ol(e)) throw (fl(), Error(l(418)));
						for (; t; ) il(e, t), (t = ca(t.nextSibling));
					}
					if ((ul(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
							throw Error(l(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											rl = ca(e.nextSibling);
											break e;
										}
										t--;
									} else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
								}
								e = e.nextSibling;
							}
							rl = null;
						}
					} else rl = nl ? ca(e.stateNode.nextSibling) : null;
					return !0;
				}
				function fl() {
					for (var e = rl; e; ) e = ca(e.nextSibling);
				}
				function hl() {
					(rl = nl = null), (al = !1);
				}
				function pl(e) {
					null === ll ? (ll = [e]) : ll.push(e);
				}
				var ml = j.ReactCurrentBatchConfig;
				function xl(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = A({}, t)), (e = e.defaultProps)))
							void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var gl = Na(null),
					yl = null,
					vl = null,
					jl = null;
				function bl() {
					jl = vl = yl = null;
				}
				function wl(e) {
					var t = gl.current;
					ka(gl), (e._currentValue = t);
				}
				function Sl(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
								: null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function Nl(e, t) {
					(yl = e),
						(jl = vl = null),
						null !== (e = e.dependencies) &&
							null !== e.firstContext &&
							(0 !== (e.lanes & t) && (vs = !0), (e.firstContext = null));
				}
				function kl(e) {
					var t = e._currentValue;
					if (jl !== e)
						if (
							((e = { context: e, memoizedValue: t, next: null }), null === vl)
						) {
							if (null === yl) throw Error(l(308));
							(vl = e), (yl.dependencies = { lanes: 0, firstContext: e });
						} else vl = vl.next = e;
					return t;
				}
				var Cl = null;
				function El(e) {
					null === Cl ? (Cl = [e]) : Cl.push(e);
				}
				function Tl(e, t, n, r) {
					var a = t.interleaved;
					return (
						null === a
							? ((n.next = n), El(t))
							: ((n.next = a.next), (a.next = n)),
						(t.interleaved = n),
						Wl(e, r)
					);
				}
				function Wl(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
						(e.childLanes |= t),
							null !== (n = e.alternate) && (n.childLanes |= t),
							(n = e),
							(e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var Rl = !1;
				function Il(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, interleaved: null, lanes: 0 },
						effects: null,
					};
				}
				function Dl(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								effects: e.effects,
							});
				}
				function _l(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function Pl(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & Wo))) {
						var a = r.pending;
						return (
							null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
							(r.pending = t),
							Wl(e, n)
						);
					}
					return (
						null === (a = r.interleaved)
							? ((t.next = t), El(r))
							: ((t.next = a.next), (a.next = t)),
						(r.interleaved = t),
						Wl(e, n)
					);
				}
				function Ll(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 !== (4194240 & n))
					) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				function Ml(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							l = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null,
								};
								null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
							} while (null !== n);
							null === l ? (a = l = t) : (l = l.next = t);
						} else a = l = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: a,
								lastBaseUpdate: l,
								shared: r.shared,
								effects: r.effects,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				function Al(e, t, n, r) {
					var a = e.updateQueue;
					Rl = !1;
					var l = a.firstBaseUpdate,
						i = a.lastBaseUpdate,
						s = a.shared.pending;
					if (null !== s) {
						a.shared.pending = null;
						var o = s,
							c = o.next;
						(o.next = null), null === i ? (l = c) : (i.next = c), (i = o);
						var u = e.alternate;
						null !== u &&
							(s = (u = u.updateQueue).lastBaseUpdate) !== i &&
							(null === s ? (u.firstBaseUpdate = c) : (s.next = c),
							(u.lastBaseUpdate = o));
					}
					if (null !== l) {
						var d = a.baseState;
						for (i = 0, u = c = o = null, s = l; ; ) {
							var f = s.lane,
								h = s.eventTime;
							if ((r & f) === f) {
								null !== u &&
									(u = u.next =
										{
											eventTime: h,
											lane: 0,
											tag: s.tag,
											payload: s.payload,
											callback: s.callback,
											next: null,
										});
								e: {
									var p = e,
										m = s;
									switch (((f = t), (h = n), m.tag)) {
										case 1:
											if ("function" === typeof (p = m.payload)) {
												d = p.call(h, d, f);
												break e;
											}
											d = p;
											break e;
										case 3:
											p.flags = (-65537 & p.flags) | 128;
										case 0:
											if (
												null ===
													(f =
														"function" === typeof (p = m.payload)
															? p.call(h, d, f)
															: p) ||
												void 0 === f
											)
												break e;
											d = A({}, d, f);
											break e;
										case 2:
											Rl = !0;
									}
								}
								null !== s.callback &&
									0 !== s.lane &&
									((e.flags |= 64),
									null === (f = a.effects) ? (a.effects = [s]) : f.push(s));
							} else
								(h = {
									eventTime: h,
									lane: f,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null,
								}),
									null === u ? ((c = u = h), (o = d)) : (u = u.next = h),
									(i |= f);
							if (null === (s = s.next)) {
								if (null === (s = a.shared.pending)) break;
								(s = (f = s).next),
									(f.next = null),
									(a.lastBaseUpdate = f),
									(a.shared.pending = null);
							}
						}
						if (
							(null === u && (o = d),
							(a.baseState = o),
							(a.firstBaseUpdate = c),
							(a.lastBaseUpdate = u),
							null !== (t = a.shared.interleaved))
						) {
							a = t;
							do {
								(i |= a.lane), (a = a.next);
							} while (a !== t);
						} else null === l && (a.shared.lanes = 0);
						(Ao |= i), (e.lanes = i), (e.memoizedState = d);
					}
				}
				function Ol(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								a = r.callback;
							if (null !== a) {
								if (((r.callback = null), (r = n), "function" !== typeof a))
									throw Error(l(191, a));
								a.call(r);
							}
						}
				}
				var zl = new r.Component().refs;
				function Bl(e, t, n, r) {
					(n =
						null === (n = n(r, (t = e.memoizedState))) || void 0 === n
							? t
							: A({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var Fl = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && He(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = tc(),
							a = nc(e),
							l = _l(r, a);
						(l.payload = t),
							void 0 !== n && null !== n && (l.callback = n),
							null !== (t = Pl(e, l, a)) && (rc(t, e, a, r), Ll(t, e, a));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = tc(),
							a = nc(e),
							l = _l(r, a);
						(l.tag = 1),
							(l.payload = t),
							void 0 !== n && null !== n && (l.callback = n),
							null !== (t = Pl(e, l, a)) && (rc(t, e, a, r), Ll(t, e, a));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = tc(),
							r = nc(e),
							a = _l(n, r);
						(a.tag = 2),
							void 0 !== t && null !== t && (a.callback = t),
							null !== (t = Pl(e, a, r)) && (rc(t, e, r, n), Ll(t, e, r));
					},
				};
				function Hl(e, t, n, r, a, l, i) {
					return "function" === typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, l, i)
						: !t.prototype ||
								!t.prototype.isPureReactComponent ||
								!or(n, r) ||
								!or(a, l);
				}
				function Ul(e, t, n) {
					var r = !1,
						a = Ea,
						l = t.contextType;
					return (
						"object" === typeof l && null !== l
							? (l = kl(l))
							: ((a = Da(t) ? Ra : Ta.current),
							  (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
									? Ia(e, a)
									: Ea)),
						(t = new t(n, l)),
						(e.memoizedState =
							null !== t.state && void 0 !== t.state ? t.state : null),
						(t.updater = Fl),
						(e.stateNode = t),
						(t._reactInternals = e),
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								a),
							(e.__reactInternalMemoizedMaskedChildContext = l)),
						t
					);
				}
				function Vl(e, t, n, r) {
					(e = t.state),
						"function" === typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						"function" === typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e && Fl.enqueueReplaceState(t, t.state, null);
				}
				function Kl(e, t, n, r) {
					var a = e.stateNode;
					(a.props = n), (a.state = e.memoizedState), (a.refs = zl), Il(e);
					var l = t.contextType;
					"object" === typeof l && null !== l
						? (a.context = kl(l))
						: ((l = Da(t) ? Ra : Ta.current), (a.context = Ia(e, l))),
						(a.state = e.memoizedState),
						"function" === typeof (l = t.getDerivedStateFromProps) &&
							(Bl(e, t, l, n), (a.state = e.memoizedState)),
						"function" === typeof t.getDerivedStateFromProps ||
							"function" === typeof a.getSnapshotBeforeUpdate ||
							("function" !== typeof a.UNSAFE_componentWillMount &&
								"function" !== typeof a.componentWillMount) ||
							((t = a.state),
							"function" === typeof a.componentWillMount &&
								a.componentWillMount(),
							"function" === typeof a.UNSAFE_componentWillMount &&
								a.UNSAFE_componentWillMount(),
							t !== a.state && Fl.enqueueReplaceState(a, a.state, null),
							Al(e, n, a, r),
							(a.state = e.memoizedState)),
						"function" === typeof a.componentDidMount && (e.flags |= 4194308);
				}
				function Gl(e, t, n) {
					if (
						null !== (e = n.ref) &&
						"function" !== typeof e &&
						"object" !== typeof e
					) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(l(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(l(147, e));
							var a = r,
								i = "" + e;
							return null !== t &&
								null !== t.ref &&
								"function" === typeof t.ref &&
								t.ref._stringRef === i
								? t.ref
								: ((t = function (e) {
										var t = a.refs;
										t === zl && (t = a.refs = {}),
											null === e ? delete t[i] : (t[i] = e);
								  }),
								  (t._stringRef = i),
								  t);
						}
						if ("string" !== typeof e) throw Error(l(284));
						if (!n._owner) throw Error(l(290, e));
					}
					return e;
				}
				function $l(e, t) {
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							l(
								31,
								"[object Object]" === e
									? "object with keys {" + Object.keys(t).join(", ") + "}"
									: e
							)
						))
					);
				}
				function Ql(e) {
					return (0, e._init)(e._payload);
				}
				function Jl(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; )
							null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
								(t = t.sibling);
						return e;
					}
					function a(e, t) {
						return ((e = Pc(e, t)).index = 0), (e.sibling = null), e;
					}
					function i(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 2), n)
										: r
									: ((t.flags |= 2), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function s(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function o(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Oc(n, e.mode, r)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function c(e, t, n, r) {
						var l = n.type;
						return l === S
							? d(e, t, n.props.children, r, n.key)
							: null !== t &&
							  (t.elementType === l ||
									("object" === typeof l &&
										null !== l &&
										l.$$typeof === D &&
										Ql(l) === t.type))
							? (((r = a(t, n.props)).ref = Gl(e, t, n)), (r.return = e), r)
							: (((r = Lc(n.type, n.key, n.props, null, e.mode, r)).ref = Gl(
									e,
									t,
									n
							  )),
							  (r.return = e),
							  r);
					}
					function u(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = zc(n, e.mode, r)).return = e), t)
							: (((t = a(t, n.children || [])).return = e), t);
					}
					function d(e, t, n, r, l) {
						return null === t || 7 !== t.tag
							? (((t = Mc(n, e.mode, r, l)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function f(e, t, n) {
						if (("string" === typeof t && "" !== t) || "number" === typeof t)
							return ((t = Oc("" + t, e.mode, n)).return = e), t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case b:
									return (
										((n = Lc(t.type, t.key, t.props, null, e.mode, n)).ref = Gl(
											e,
											null,
											t
										)),
										(n.return = e),
										n
									);
								case w:
									return ((t = zc(t, e.mode, n)).return = e), t;
								case D:
									return f(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || L(t))
								return ((t = Mc(t, e.mode, n, null)).return = e), t;
							$l(e, t);
						}
						return null;
					}
					function h(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if (("string" === typeof n && "" !== n) || "number" === typeof n)
							return null !== a ? null : o(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case b:
									return n.key === a ? c(e, t, n, r) : null;
								case w:
									return n.key === a ? u(e, t, n, r) : null;
								case D:
									return h(e, t, (a = n._init)(n._payload), r);
							}
							if (te(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
							$l(e, n);
						}
						return null;
					}
					function p(e, t, n, r, a) {
						if (("string" === typeof r && "" !== r) || "number" === typeof r)
							return o(t, (e = e.get(n) || null), "" + r, a);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case b:
									return c(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										a
									);
								case w:
									return u(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										a
									);
								case D:
									return p(e, t, n, (0, r._init)(r._payload), a);
							}
							if (te(r) || L(r))
								return d(t, (e = e.get(n) || null), r, a, null);
							$l(t, r);
						}
						return null;
					}
					function m(a, l, s, o) {
						for (
							var c = null, u = null, d = l, m = (l = 0), x = null;
							null !== d && m < s.length;
							m++
						) {
							d.index > m ? ((x = d), (d = null)) : (x = d.sibling);
							var g = h(a, d, s[m], o);
							if (null === g) {
								null === d && (d = x);
								break;
							}
							e && d && null === g.alternate && t(a, d),
								(l = i(g, l, m)),
								null === u ? (c = g) : (u.sibling = g),
								(u = g),
								(d = x);
						}
						if (m === s.length) return n(a, d), al && Za(a, m), c;
						if (null === d) {
							for (; m < s.length; m++)
								null !== (d = f(a, s[m], o)) &&
									((l = i(d, l, m)),
									null === u ? (c = d) : (u.sibling = d),
									(u = d));
							return al && Za(a, m), c;
						}
						for (d = r(a, d); m < s.length; m++)
							null !== (x = p(d, a, m, s[m], o)) &&
								(e &&
									null !== x.alternate &&
									d.delete(null === x.key ? m : x.key),
								(l = i(x, l, m)),
								null === u ? (c = x) : (u.sibling = x),
								(u = x));
						return (
							e &&
								d.forEach(function (e) {
									return t(a, e);
								}),
							al && Za(a, m),
							c
						);
					}
					function x(a, s, o, c) {
						var u = L(o);
						if ("function" !== typeof u) throw Error(l(150));
						if (null == (o = u.call(o))) throw Error(l(151));
						for (
							var d = (u = null), m = s, x = (s = 0), g = null, y = o.next();
							null !== m && !y.done;
							x++, y = o.next()
						) {
							m.index > x ? ((g = m), (m = null)) : (g = m.sibling);
							var v = h(a, m, y.value, c);
							if (null === v) {
								null === m && (m = g);
								break;
							}
							e && m && null === v.alternate && t(a, m),
								(s = i(v, s, x)),
								null === d ? (u = v) : (d.sibling = v),
								(d = v),
								(m = g);
						}
						if (y.done) return n(a, m), al && Za(a, x), u;
						if (null === m) {
							for (; !y.done; x++, y = o.next())
								null !== (y = f(a, y.value, c)) &&
									((s = i(y, s, x)),
									null === d ? (u = y) : (d.sibling = y),
									(d = y));
							return al && Za(a, x), u;
						}
						for (m = r(a, m); !y.done; x++, y = o.next())
							null !== (y = p(m, a, x, y.value, c)) &&
								(e &&
									null !== y.alternate &&
									m.delete(null === y.key ? x : y.key),
								(s = i(y, s, x)),
								null === d ? (u = y) : (d.sibling = y),
								(d = y));
						return (
							e &&
								m.forEach(function (e) {
									return t(a, e);
								}),
							al && Za(a, x),
							u
						);
					}
					return function e(r, l, i, o) {
						if (
							("object" === typeof i &&
								null !== i &&
								i.type === S &&
								null === i.key &&
								(i = i.props.children),
							"object" === typeof i && null !== i)
						) {
							switch (i.$$typeof) {
								case b:
									e: {
										for (var c = i.key, u = l; null !== u; ) {
											if (u.key === c) {
												if ((c = i.type) === S) {
													if (7 === u.tag) {
														n(r, u.sibling),
															((l = a(u, i.props.children)).return = r),
															(r = l);
														break e;
													}
												} else if (
													u.elementType === c ||
													("object" === typeof c &&
														null !== c &&
														c.$$typeof === D &&
														Ql(c) === u.type)
												) {
													n(r, u.sibling),
														((l = a(u, i.props)).ref = Gl(r, u, i)),
														(l.return = r),
														(r = l);
													break e;
												}
												n(r, u);
												break;
											}
											t(r, u), (u = u.sibling);
										}
										i.type === S
											? (((l = Mc(i.props.children, r.mode, o, i.key)).return =
													r),
											  (r = l))
											: (((o = Lc(
													i.type,
													i.key,
													i.props,
													null,
													r.mode,
													o
											  )).ref = Gl(r, l, i)),
											  (o.return = r),
											  (r = o));
									}
									return s(r);
								case w:
									e: {
										for (u = i.key; null !== l; ) {
											if (l.key === u) {
												if (
													4 === l.tag &&
													l.stateNode.containerInfo === i.containerInfo &&
													l.stateNode.implementation === i.implementation
												) {
													n(r, l.sibling),
														((l = a(l, i.children || [])).return = r),
														(r = l);
													break e;
												}
												n(r, l);
												break;
											}
											t(r, l), (l = l.sibling);
										}
										((l = zc(i, r.mode, o)).return = r), (r = l);
									}
									return s(r);
								case D:
									return e(r, l, (u = i._init)(i._payload), o);
							}
							if (te(i)) return m(r, l, i, o);
							if (L(i)) return x(r, l, i, o);
							$l(r, i);
						}
						return ("string" === typeof i && "" !== i) || "number" === typeof i
							? ((i = "" + i),
							  null !== l && 6 === l.tag
									? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
									: (n(r, l), ((l = Oc(i, r.mode, o)).return = r), (r = l)),
							  s(r))
							: n(r, l);
					};
				}
				var Yl = Jl(!0),
					ql = Jl(!1),
					Zl = {},
					Xl = Na(Zl),
					ei = Na(Zl),
					ti = Na(Zl);
				function ni(e) {
					if (e === Zl) throw Error(l(174));
					return e;
				}
				function ri(e, t) {
					switch ((Ca(ti, t), Ca(ei, e), Ca(Xl, Zl), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : oe(null, "");
							break;
						default:
							t = oe(
								(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
								(e = e.tagName)
							);
					}
					ka(Xl), Ca(Xl, t);
				}
				function ai() {
					ka(Xl), ka(ei), ka(ti);
				}
				function li(e) {
					ni(ti.current);
					var t = ni(Xl.current),
						n = oe(t, e.type);
					t !== n && (Ca(ei, e), Ca(Xl, n));
				}
				function ii(e) {
					ei.current === e && (ka(Xl), ka(ei));
				}
				var si = Na(0);
				function oi(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									"$?" === n.data ||
									"$!" === n.data)
							)
								return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var ci = [];
				function ui() {
					for (var e = 0; e < ci.length; e++)
						ci[e]._workInProgressVersionPrimary = null;
					ci.length = 0;
				}
				var di = j.ReactCurrentDispatcher,
					fi = j.ReactCurrentBatchConfig,
					hi = 0,
					pi = null,
					mi = null,
					xi = null,
					gi = !1,
					yi = !1,
					vi = 0,
					ji = 0;
				function bi() {
					throw Error(l(321));
				}
				function wi(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!sr(e[n], t[n])) return !1;
					return !0;
				}
				function Si(e, t, n, r, a, i) {
					if (
						((hi = i),
						(pi = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(di.current = null === e || null === e.memoizedState ? is : ss),
						(e = n(r, a)),
						yi)
					) {
						i = 0;
						do {
							if (((yi = !1), (vi = 0), 25 <= i)) throw Error(l(301));
							(i += 1),
								(xi = mi = null),
								(t.updateQueue = null),
								(di.current = os),
								(e = n(r, a));
						} while (yi);
					}
					if (
						((di.current = ls),
						(t = null !== mi && null !== mi.next),
						(hi = 0),
						(xi = mi = pi = null),
						(gi = !1),
						t)
					)
						throw Error(l(300));
					return e;
				}
				function Ni() {
					var e = 0 !== vi;
					return (vi = 0), e;
				}
				function ki() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === xi ? (pi.memoizedState = xi = e) : (xi = xi.next = e), xi
					);
				}
				function Ci() {
					if (null === mi) {
						var e = pi.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = mi.next;
					var t = null === xi ? pi.memoizedState : xi.next;
					if (null !== t) (xi = t), (mi = e);
					else {
						if (null === e) throw Error(l(310));
						(e = {
							memoizedState: (mi = e).memoizedState,
							baseState: mi.baseState,
							baseQueue: mi.baseQueue,
							queue: mi.queue,
							next: null,
						}),
							null === xi ? (pi.memoizedState = xi = e) : (xi = xi.next = e);
					}
					return xi;
				}
				function Ei(e, t) {
					return "function" === typeof t ? t(e) : t;
				}
				function Ti(e) {
					var t = Ci(),
						n = t.queue;
					if (null === n) throw Error(l(311));
					n.lastRenderedReducer = e;
					var r = mi,
						a = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== a) {
							var s = a.next;
							(a.next = i.next), (i.next = s);
						}
						(r.baseQueue = a = i), (n.pending = null);
					}
					if (null !== a) {
						(i = a.next), (r = r.baseState);
						var o = (s = null),
							c = null,
							u = i;
						do {
							var d = u.lane;
							if ((hi & d) === d)
								null !== c &&
									(c = c.next =
										{
											lane: 0,
											action: u.action,
											hasEagerState: u.hasEagerState,
											eagerState: u.eagerState,
											next: null,
										}),
									(r = u.hasEagerState ? u.eagerState : e(r, u.action));
							else {
								var f = {
									lane: d,
									action: u.action,
									hasEagerState: u.hasEagerState,
									eagerState: u.eagerState,
									next: null,
								};
								null === c ? ((o = c = f), (s = r)) : (c = c.next = f),
									(pi.lanes |= d),
									(Ao |= d);
							}
							u = u.next;
						} while (null !== u && u !== i);
						null === c ? (s = r) : (c.next = o),
							sr(r, t.memoizedState) || (vs = !0),
							(t.memoizedState = r),
							(t.baseState = s),
							(t.baseQueue = c),
							(n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						a = e;
						do {
							(i = a.lane), (pi.lanes |= i), (Ao |= i), (a = a.next);
						} while (a !== e);
					} else null === a && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Wi(e) {
					var t = Ci(),
						n = t.queue;
					if (null === n) throw Error(l(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						i = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var s = (a = a.next);
						do {
							(i = e(i, s.action)), (s = s.next);
						} while (s !== a);
						sr(i, t.memoizedState) || (vs = !0),
							(t.memoizedState = i),
							null === t.baseQueue && (t.baseState = i),
							(n.lastRenderedState = i);
					}
					return [i, r];
				}
				function Ri() {}
				function Ii(e, t) {
					var n = pi,
						r = Ci(),
						a = t(),
						i = !sr(r.memoizedState, a);
					if (
						(i && ((r.memoizedState = a), (vs = !0)),
						(r = r.queue),
						Ui(Pi.bind(null, n, r, e), [e]),
						r.getSnapshot !== t ||
							i ||
							(null !== xi && 1 & xi.memoizedState.tag))
					) {
						if (
							((n.flags |= 2048),
							Oi(9, _i.bind(null, n, r, a, t), void 0, null),
							null === Ro)
						)
							throw Error(l(349));
						0 !== (30 & hi) || Di(n, t, a);
					}
					return a;
				}
				function Di(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = pi.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (pi.updateQueue = t),
							  (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function _i(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Li(t) && Mi(e);
				}
				function Pi(e, t, n) {
					return n(function () {
						Li(t) && Mi(e);
					});
				}
				function Li(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !sr(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Mi(e) {
					var t = Wl(e, 1);
					null !== t && rc(t, e, 1, -1);
				}
				function Ai(e) {
					var t = ki();
					return (
						"function" === typeof e && (e = e()),
						(t.memoizedState = t.baseState = e),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Ei,
							lastRenderedState: e,
						}),
						(t.queue = e),
						(e = e.dispatch = ts.bind(null, pi, e)),
						[t.memoizedState, e]
					);
				}
				function Oi(e, t, n, r) {
					return (
						(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
						null === (t = pi.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (pi.updateQueue = t),
							  (t.lastEffect = e.next = e))
							: null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
						e
					);
				}
				function zi() {
					return Ci().memoizedState;
				}
				function Bi(e, t, n, r) {
					var a = ki();
					(pi.flags |= e),
						(a.memoizedState = Oi(1 | t, n, void 0, void 0 === r ? null : r));
				}
				function Fi(e, t, n, r) {
					var a = Ci();
					r = void 0 === r ? null : r;
					var l = void 0;
					if (null !== mi) {
						var i = mi.memoizedState;
						if (((l = i.destroy), null !== r && wi(r, i.deps)))
							return void (a.memoizedState = Oi(t, n, l, r));
					}
					(pi.flags |= e), (a.memoizedState = Oi(1 | t, n, l, r));
				}
				function Hi(e, t) {
					return Bi(8390656, 8, e, t);
				}
				function Ui(e, t) {
					return Fi(2048, 8, e, t);
				}
				function Vi(e, t) {
					return Fi(4, 2, e, t);
				}
				function Ki(e, t) {
					return Fi(4, 4, e, t);
				}
				function Gi(e, t) {
					return "function" === typeof t
						? ((e = e()),
						  t(e),
						  function () {
								t(null);
						  })
						: null !== t && void 0 !== t
						? ((e = e()),
						  (t.current = e),
						  function () {
								t.current = null;
						  })
						: void 0;
				}
				function $i(e, t, n) {
					return (
						(n = null !== n && void 0 !== n ? n.concat([e]) : null),
						Fi(4, 4, Gi.bind(null, t, e), n)
					);
				}
				function Qi() {}
				function Ji(e, t) {
					var n = Ci();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && wi(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function Yi(e, t) {
					var n = Ci();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && wi(t, r[1])
						? r[0]
						: ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function qi(e, t, n) {
					return 0 === (21 & hi)
						? (e.baseState && ((e.baseState = !1), (vs = !0)),
						  (e.memoizedState = n))
						: (sr(n, t) ||
								((n = mt()), (pi.lanes |= n), (Ao |= n), (e.baseState = !0)),
						  t);
				}
				function Zi(e, t) {
					var n = vt;
					(vt = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = fi.transition;
					fi.transition = {};
					try {
						e(!1), t();
					} finally {
						(vt = n), (fi.transition = r);
					}
				}
				function Xi() {
					return Ci().memoizedState;
				}
				function es(e, t, n) {
					var r = nc(e);
					if (
						((n = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						ns(e))
					)
						rs(t, n);
					else if (null !== (n = Tl(e, t, n, r))) {
						rc(n, e, r, tc()), as(n, t, r);
					}
				}
				function ts(e, t, n) {
					var r = nc(e),
						a = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						};
					if (ns(e)) rs(t, a);
					else {
						var l = e.alternate;
						if (
							0 === e.lanes &&
							(null === l || 0 === l.lanes) &&
							null !== (l = t.lastRenderedReducer)
						)
							try {
								var i = t.lastRenderedState,
									s = l(i, n);
								if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, i))) {
									var o = t.interleaved;
									return (
										null === o
											? ((a.next = a), El(t))
											: ((a.next = o.next), (o.next = a)),
										void (t.interleaved = a)
									);
								}
							} catch (c) {}
						null !== (n = Tl(e, t, a, r)) &&
							(rc(n, e, r, (a = tc())), as(n, t, r));
					}
				}
				function ns(e) {
					var t = e.alternate;
					return e === pi || (null !== t && t === pi);
				}
				function rs(e, t) {
					yi = gi = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function as(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				var ls = {
						readContext: kl,
						useCallback: bi,
						useContext: bi,
						useEffect: bi,
						useImperativeHandle: bi,
						useInsertionEffect: bi,
						useLayoutEffect: bi,
						useMemo: bi,
						useReducer: bi,
						useRef: bi,
						useState: bi,
						useDebugValue: bi,
						useDeferredValue: bi,
						useTransition: bi,
						useMutableSource: bi,
						useSyncExternalStore: bi,
						useId: bi,
						unstable_isNewReconciler: !1,
					},
					is = {
						readContext: kl,
						useCallback: function (e, t) {
							return (ki().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: kl,
						useEffect: Hi,
						useImperativeHandle: function (e, t, n) {
							return (
								(n = null !== n && void 0 !== n ? n.concat([e]) : null),
								Bi(4194308, 4, Gi.bind(null, t, e), n)
							);
						},
						useLayoutEffect: function (e, t) {
							return Bi(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Bi(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = ki();
							return (
								(t = void 0 === t ? null : t),
								(e = e()),
								(n.memoizedState = [e, t]),
								e
							);
						},
						useReducer: function (e, t, n) {
							var r = ki();
							return (
								(t = void 0 !== n ? n(t) : t),
								(r.memoizedState = r.baseState = t),
								(e = {
									pending: null,
									interleaved: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}),
								(r.queue = e),
								(e = e.dispatch = es.bind(null, pi, e)),
								[r.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (e = { current: e }), (ki().memoizedState = e);
						},
						useState: Ai,
						useDebugValue: Qi,
						useDeferredValue: function (e) {
							return (ki().memoizedState = e);
						},
						useTransition: function () {
							var e = Ai(!1),
								t = e[0];
							return (
								(e = Zi.bind(null, e[1])), (ki().memoizedState = e), [t, e]
							);
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = pi,
								a = ki();
							if (al) {
								if (void 0 === n) throw Error(l(407));
								n = n();
							} else {
								if (((n = t()), null === Ro)) throw Error(l(349));
								0 !== (30 & hi) || Di(r, t, n);
							}
							a.memoizedState = n;
							var i = { value: n, getSnapshot: t };
							return (
								(a.queue = i),
								Hi(Pi.bind(null, r, i, e), [e]),
								(r.flags |= 2048),
								Oi(9, _i.bind(null, r, i, n, t), void 0, null),
								n
							);
						},
						useId: function () {
							var e = ki(),
								t = Ro.identifierPrefix;
							if (al) {
								var n = qa;
								(t =
									":" +
									t +
									"R" +
									(n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
									0 < (n = vi++) && (t += "H" + n.toString(32)),
									(t += ":");
							} else t = ":" + t + "r" + (n = ji++).toString(32) + ":";
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					ss = {
						readContext: kl,
						useCallback: Ji,
						useContext: kl,
						useEffect: Ui,
						useImperativeHandle: $i,
						useInsertionEffect: Vi,
						useLayoutEffect: Ki,
						useMemo: Yi,
						useReducer: Ti,
						useRef: zi,
						useState: function () {
							return Ti(Ei);
						},
						useDebugValue: Qi,
						useDeferredValue: function (e) {
							return qi(Ci(), mi.memoizedState, e);
						},
						useTransition: function () {
							return [Ti(Ei)[0], Ci().memoizedState];
						},
						useMutableSource: Ri,
						useSyncExternalStore: Ii,
						useId: Xi,
						unstable_isNewReconciler: !1,
					},
					os = {
						readContext: kl,
						useCallback: Ji,
						useContext: kl,
						useEffect: Ui,
						useImperativeHandle: $i,
						useInsertionEffect: Vi,
						useLayoutEffect: Ki,
						useMemo: Yi,
						useReducer: Wi,
						useRef: zi,
						useState: function () {
							return Wi(Ei);
						},
						useDebugValue: Qi,
						useDeferredValue: function (e) {
							var t = Ci();
							return null === mi
								? (t.memoizedState = e)
								: qi(t, mi.memoizedState, e);
						},
						useTransition: function () {
							return [Wi(Ei)[0], Ci().memoizedState];
						},
						useMutableSource: Ri,
						useSyncExternalStore: Ii,
						useId: Xi,
						unstable_isNewReconciler: !1,
					};
				function cs(e, t) {
					try {
						var n = "",
							r = t;
						do {
							(n += F(r)), (r = r.return);
						} while (r);
						var a = n;
					} catch (l) {
						a = "\nError generating stack: " + l.message + "\n" + l.stack;
					}
					return { value: e, source: t, stack: a, digest: null };
				}
				function us(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null,
					};
				}
				function ds(e, t) {
					try {
						console.error(t.value);
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				var fs = "function" === typeof WeakMap ? WeakMap : Map;
				function hs(e, t, n) {
					((n = _l(-1, n)).tag = 3), (n.payload = { element: null });
					var r = t.value;
					return (
						(n.callback = function () {
							Ko || ((Ko = !0), (Go = r)), ds(0, t);
						}),
						n
					);
				}
				function ps(e, t, n) {
					(n = _l(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" === typeof r) {
						var a = t.value;
						(n.payload = function () {
							return r(a);
						}),
							(n.callback = function () {
								ds(0, t);
							});
					}
					var l = e.stateNode;
					return (
						null !== l &&
							"function" === typeof l.componentDidCatch &&
							(n.callback = function () {
								ds(0, t),
									"function" !== typeof r &&
										(null === $o ? ($o = new Set([this])) : $o.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, {
									componentStack: null !== e ? e : "",
								});
							}),
						n
					);
				}
				function ms(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new fs();
						var a = new Set();
						r.set(t, a);
					} else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
					a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
				}
				function xs(e) {
					do {
						var t;
						if (
							((t = 13 === e.tag) &&
								(t = null === (t = e.memoizedState) || null !== t.dehydrated),
							t)
						)
							return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function gs(e, t, n, r, a) {
					return 0 === (1 & e.mode)
						? (e === t
								? (e.flags |= 65536)
								: ((e.flags |= 128),
								  (n.flags |= 131072),
								  (n.flags &= -52805),
								  1 === n.tag &&
										(null === n.alternate
											? (n.tag = 17)
											: (((t = _l(-1, 1)).tag = 2), Pl(n, t, 1))),
								  (n.lanes |= 1)),
						  e)
						: ((e.flags |= 65536), (e.lanes = a), e);
				}
				var ys = j.ReactCurrentOwner,
					vs = !1;
				function js(e, t, n, r) {
					t.child = null === e ? ql(t, null, n, r) : Yl(t, e.child, n, r);
				}
				function bs(e, t, n, r, a) {
					n = n.render;
					var l = t.ref;
					return (
						Nl(t, a),
						(r = Si(e, t, n, r, l, a)),
						(n = Ni()),
						null === e || vs
							? (al && n && el(t), (t.flags |= 1), js(e, t, r, a), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~a),
							  Vs(e, t, a))
					);
				}
				function ws(e, t, n, r, a) {
					if (null === e) {
						var l = n.type;
						return "function" !== typeof l ||
							_c(l) ||
							void 0 !== l.defaultProps ||
							null !== n.compare ||
							void 0 !== n.defaultProps
							? (((e = Lc(n.type, null, r, t, t.mode, a)).ref = t.ref),
							  (e.return = t),
							  (t.child = e))
							: ((t.tag = 15), (t.type = l), Ss(e, t, l, r, a));
					}
					if (((l = e.child), 0 === (e.lanes & a))) {
						var i = l.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : or)(i, r) &&
							e.ref === t.ref
						)
							return Vs(e, t, a);
					}
					return (
						(t.flags |= 1),
						((e = Pc(l, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function Ss(e, t, n, r, a) {
					if (null !== e) {
						var l = e.memoizedProps;
						if (or(l, r) && e.ref === t.ref) {
							if (((vs = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
								return (t.lanes = e.lanes), Vs(e, t, a);
							0 !== (131072 & e.flags) && (vs = !0);
						}
					}
					return Cs(e, t, n, r, a);
				}
				function Ns(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						l = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 === (1 & t.mode))
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								Ca(Po, _o),
								(_o |= n);
						else {
							if (0 === (1073741824 & n))
								return (
									(e = null !== l ? l.baseLanes | n : n),
									(t.lanes = t.childLanes = 1073741824),
									(t.memoizedState = {
										baseLanes: e,
										cachePool: null,
										transitions: null,
									}),
									(t.updateQueue = null),
									Ca(Po, _o),
									(_o |= e),
									null
								);
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								(r = null !== l ? l.baseLanes : n),
								Ca(Po, _o),
								(_o |= r);
						}
					else
						null !== l
							? ((r = l.baseLanes | n), (t.memoizedState = null))
							: (r = n),
							Ca(Po, _o),
							(_o |= r);
					return js(e, t, a, n), t.child;
				}
				function ks(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) &&
						((t.flags |= 512), (t.flags |= 2097152));
				}
				function Cs(e, t, n, r, a) {
					var l = Da(n) ? Ra : Ta.current;
					return (
						(l = Ia(t, l)),
						Nl(t, a),
						(n = Si(e, t, n, r, l, a)),
						(r = Ni()),
						null === e || vs
							? (al && r && el(t), (t.flags |= 1), js(e, t, n, a), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~a),
							  Vs(e, t, a))
					);
				}
				function Es(e, t, n, r, a) {
					if (Da(n)) {
						var l = !0;
						Ma(t);
					} else l = !1;
					if ((Nl(t, a), null === t.stateNode))
						Us(e, t), Ul(t, n, r), Kl(t, n, r, a), (r = !0);
					else if (null === e) {
						var i = t.stateNode,
							s = t.memoizedProps;
						i.props = s;
						var o = i.context,
							c = n.contextType;
						"object" === typeof c && null !== c
							? (c = kl(c))
							: (c = Ia(t, (c = Da(n) ? Ra : Ta.current)));
						var u = n.getDerivedStateFromProps,
							d =
								"function" === typeof u ||
								"function" === typeof i.getSnapshotBeforeUpdate;
						d ||
							("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
								"function" !== typeof i.componentWillReceiveProps) ||
							((s !== r || o !== c) && Vl(t, i, r, c)),
							(Rl = !1);
						var f = t.memoizedState;
						(i.state = f),
							Al(t, r, i, a),
							(o = t.memoizedState),
							s !== r || f !== o || Wa.current || Rl
								? ("function" === typeof u &&
										(Bl(t, n, u, r), (o = t.memoizedState)),
								  (s = Rl || Hl(t, n, s, r, f, o, c))
										? (d ||
												("function" !== typeof i.UNSAFE_componentWillMount &&
													"function" !== typeof i.componentWillMount) ||
												("function" === typeof i.componentWillMount &&
													i.componentWillMount(),
												"function" === typeof i.UNSAFE_componentWillMount &&
													i.UNSAFE_componentWillMount()),
										  "function" === typeof i.componentDidMount &&
												(t.flags |= 4194308))
										: ("function" === typeof i.componentDidMount &&
												(t.flags |= 4194308),
										  (t.memoizedProps = r),
										  (t.memoizedState = o)),
								  (i.props = r),
								  (i.state = o),
								  (i.context = c),
								  (r = s))
								: ("function" === typeof i.componentDidMount &&
										(t.flags |= 4194308),
								  (r = !1));
					} else {
						(i = t.stateNode),
							Dl(e, t),
							(s = t.memoizedProps),
							(c = t.type === t.elementType ? s : xl(t.type, s)),
							(i.props = c),
							(d = t.pendingProps),
							(f = i.context),
							"object" === typeof (o = n.contextType) && null !== o
								? (o = kl(o))
								: (o = Ia(t, (o = Da(n) ? Ra : Ta.current)));
						var h = n.getDerivedStateFromProps;
						(u =
							"function" === typeof h ||
							"function" === typeof i.getSnapshotBeforeUpdate) ||
							("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
								"function" !== typeof i.componentWillReceiveProps) ||
							((s !== d || f !== o) && Vl(t, i, r, o)),
							(Rl = !1),
							(f = t.memoizedState),
							(i.state = f),
							Al(t, r, i, a);
						var p = t.memoizedState;
						s !== d || f !== p || Wa.current || Rl
							? ("function" === typeof h &&
									(Bl(t, n, h, r), (p = t.memoizedState)),
							  (c = Rl || Hl(t, n, c, r, f, p, o) || !1)
									? (u ||
											("function" !== typeof i.UNSAFE_componentWillUpdate &&
												"function" !== typeof i.componentWillUpdate) ||
											("function" === typeof i.componentWillUpdate &&
												i.componentWillUpdate(r, p, o),
											"function" === typeof i.UNSAFE_componentWillUpdate &&
												i.UNSAFE_componentWillUpdate(r, p, o)),
									  "function" === typeof i.componentDidUpdate &&
											(t.flags |= 4),
									  "function" === typeof i.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ("function" !== typeof i.componentDidUpdate ||
											(s === e.memoizedProps && f === e.memoizedState) ||
											(t.flags |= 4),
									  "function" !== typeof i.getSnapshotBeforeUpdate ||
											(s === e.memoizedProps && f === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = r),
									  (t.memoizedState = p)),
							  (i.props = r),
							  (i.state = p),
							  (i.context = o),
							  (r = c))
							: ("function" !== typeof i.componentDidUpdate ||
									(s === e.memoizedProps && f === e.memoizedState) ||
									(t.flags |= 4),
							  "function" !== typeof i.getSnapshotBeforeUpdate ||
									(s === e.memoizedProps && f === e.memoizedState) ||
									(t.flags |= 1024),
							  (r = !1));
					}
					return Ts(e, t, n, r, l, a);
				}
				function Ts(e, t, n, r, a, l) {
					ks(e, t);
					var i = 0 !== (128 & t.flags);
					if (!r && !i) return a && Aa(t, n, !1), Vs(e, t, l);
					(r = t.stateNode), (ys.current = t);
					var s =
						i && "function" !== typeof n.getDerivedStateFromError
							? null
							: r.render();
					return (
						(t.flags |= 1),
						null !== e && i
							? ((t.child = Yl(t, e.child, null, l)),
							  (t.child = Yl(t, null, s, l)))
							: js(e, t, s, l),
						(t.memoizedState = r.state),
						a && Aa(t, n, !0),
						t.child
					);
				}
				function Ws(e) {
					var t = e.stateNode;
					t.pendingContext
						? Pa(0, t.pendingContext, t.pendingContext !== t.context)
						: t.context && Pa(0, t.context, !1),
						ri(e, t.containerInfo);
				}
				function Rs(e, t, n, r, a) {
					return hl(), pl(a), (t.flags |= 256), js(e, t, n, r), t.child;
				}
				var Is,
					Ds,
					_s,
					Ps,
					Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
				function Ms(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function As(e, t, n) {
					var r,
						a = t.pendingProps,
						i = si.current,
						s = !1,
						o = 0 !== (128 & t.flags);
					if (
						((r = o) ||
							(r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
						r
							? ((s = !0), (t.flags &= -129))
							: (null !== e && null === e.memoizedState) || (i |= 1),
						Ca(si, 1 & i),
						null === e)
					)
						return (
							cl(t),
							null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
								? (0 === (1 & t.mode)
										? (t.lanes = 1)
										: "$!" === e.data
										? (t.lanes = 8)
										: (t.lanes = 1073741824),
								  null)
								: ((o = a.children),
								  (e = a.fallback),
								  s
										? ((a = t.mode),
										  (s = t.child),
										  (o = { mode: "hidden", children: o }),
										  0 === (1 & a) && null !== s
												? ((s.childLanes = 0), (s.pendingProps = o))
												: (s = Ac(o, a, 0, null)),
										  (e = Mc(e, a, n, null)),
										  (s.return = t),
										  (e.return = t),
										  (s.sibling = e),
										  (t.child = s),
										  (t.child.memoizedState = Ms(n)),
										  (t.memoizedState = Ls),
										  e)
										: Os(t, o))
						);
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
						return (function (e, t, n, r, a, i, s) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257), zs(e, t, s, (r = us(Error(l(422))))))
									: null !== t.memoizedState
									? ((t.child = e.child), (t.flags |= 128), null)
									: ((i = r.fallback),
									  (a = t.mode),
									  (r = Ac(
											{ mode: "visible", children: r.children },
											a,
											0,
											null
									  )),
									  ((i = Mc(i, a, s, null)).flags |= 2),
									  (r.return = t),
									  (i.return = t),
									  (r.sibling = i),
									  (t.child = r),
									  0 !== (1 & t.mode) && Yl(t, e.child, null, s),
									  (t.child.memoizedState = Ms(s)),
									  (t.memoizedState = Ls),
									  i);
							if (0 === (1 & t.mode)) return zs(e, t, s, null);
							if ("$!" === a.data) {
								if ((r = a.nextSibling && a.nextSibling.dataset))
									var o = r.dgst;
								return (
									(r = o), zs(e, t, s, (r = us((i = Error(l(419))), r, void 0)))
								);
							}
							if (((o = 0 !== (s & e.childLanes)), vs || o)) {
								if (null !== (r = Ro)) {
									switch (s & -s) {
										case 4:
											a = 2;
											break;
										case 16:
											a = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											a = 32;
											break;
										case 536870912:
											a = 268435456;
											break;
										default:
											a = 0;
									}
									0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
										a !== i.retryLane &&
										((i.retryLane = a), Wl(e, a), rc(r, e, a, -1));
								}
								return xc(), zs(e, t, s, (r = us(Error(l(421)))));
							}
							return "$?" === a.data
								? ((t.flags |= 128),
								  (t.child = e.child),
								  (t = Tc.bind(null, e)),
								  (a._reactRetry = t),
								  null)
								: ((e = i.treeContext),
								  (rl = ca(a.nextSibling)),
								  (nl = t),
								  (al = !0),
								  (ll = null),
								  null !== e &&
										(($a[Qa++] = Ya),
										($a[Qa++] = qa),
										($a[Qa++] = Ja),
										(Ya = e.id),
										(qa = e.overflow),
										(Ja = t)),
								  (t = Os(t, r.children)),
								  (t.flags |= 4096),
								  t);
						})(e, t, o, a, r, i, n);
					if (s) {
						(s = a.fallback), (o = t.mode), (r = (i = e.child).sibling);
						var c = { mode: "hidden", children: a.children };
						return (
							0 === (1 & o) && t.child !== i
								? (((a = t.child).childLanes = 0),
								  (a.pendingProps = c),
								  (t.deletions = null))
								: ((a = Pc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
							null !== r
								? (s = Pc(r, s))
								: ((s = Mc(s, o, n, null)).flags |= 2),
							(s.return = t),
							(a.return = t),
							(a.sibling = s),
							(t.child = a),
							(a = s),
							(s = t.child),
							(o =
								null === (o = e.child.memoizedState)
									? Ms(n)
									: {
											baseLanes: o.baseLanes | n,
											cachePool: null,
											transitions: o.transitions,
									  }),
							(s.memoizedState = o),
							(s.childLanes = e.childLanes & ~n),
							(t.memoizedState = Ls),
							a
						);
					}
					return (
						(e = (s = e.child).sibling),
						(a = Pc(s, { mode: "visible", children: a.children })),
						0 === (1 & t.mode) && (a.lanes = n),
						(a.return = t),
						(a.sibling = null),
						null !== e &&
							(null === (n = t.deletions)
								? ((t.deletions = [e]), (t.flags |= 16))
								: n.push(e)),
						(t.child = a),
						(t.memoizedState = null),
						a
					);
				}
				function Os(e, t) {
					return (
						((t = Ac(
							{ mode: "visible", children: t },
							e.mode,
							0,
							null
						)).return = e),
						(e.child = t)
					);
				}
				function zs(e, t, n, r) {
					return (
						null !== r && pl(r),
						Yl(t, e.child, null, n),
						((e = Os(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function Bs(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), Sl(e.return, t, n);
				}
				function Fs(e, t, n, r, a) {
					var l = e.memoizedState;
					null === l
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: a,
						  })
						: ((l.isBackwards = t),
						  (l.rendering = null),
						  (l.renderingStartTime = 0),
						  (l.last = r),
						  (l.tail = n),
						  (l.tailMode = a));
				}
				function Hs(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						l = r.tail;
					if ((js(e, t, r.children, n), 0 !== (2 & (r = si.current))))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
								else if (19 === e.tag) Bs(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((Ca(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
					else
						switch (a) {
							case "forwards":
								for (n = t.child, a = null; null !== n; )
									null !== (e = n.alternate) && null === oi(e) && (a = n),
										(n = n.sibling);
								null === (n = a)
									? ((a = t.child), (t.child = null))
									: ((a = n.sibling), (n.sibling = null)),
									Fs(t, !1, a, n, l);
								break;
							case "backwards":
								for (n = null, a = t.child, t.child = null; null !== a; ) {
									if (null !== (e = a.alternate) && null === oi(e)) {
										t.child = a;
										break;
									}
									(e = a.sibling), (a.sibling = n), (n = a), (a = e);
								}
								Fs(t, !0, n, null, l);
								break;
							case "together":
								Fs(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function Us(e, t) {
					0 === (1 & t.mode) &&
						null !== e &&
						((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function Vs(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(Ao |= t.lanes),
						0 === (n & t.childLanes))
					)
						return null;
					if (null !== e && t.child !== e.child) throw Error(l(153));
					if (null !== t.child) {
						for (
							n = Pc((e = t.child), e.pendingProps), t.child = n, n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling = Pc(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function Ks(e, t) {
					if (!al)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n), (n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function Gs(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= 14680064 & a.subtreeFlags),
								(r |= 14680064 & a.flags),
								(a.return = e),
								(a = a.sibling);
					else
						for (a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= a.subtreeFlags),
								(r |= a.flags),
								(a.return = e),
								(a = a.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function $s(e, t, n) {
					var r = t.pendingProps;
					switch ((tl(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Gs(t), null;
						case 1:
						case 17:
							return Da(t.type) && _a(), Gs(t), null;
						case 3:
							return (
								(r = t.stateNode),
								ai(),
								ka(Wa),
								ka(Ta),
								ui(),
								r.pendingContext &&
									((r.context = r.pendingContext), (r.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(dl(t)
										? (t.flags |= 4)
										: null === e ||
										  (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
										  ((t.flags |= 1024),
										  null !== ll && (sc(ll), (ll = null)))),
								Ds(e, t),
								Gs(t),
								null
							);
						case 5:
							ii(t);
							var a = ni(ti.current);
							if (((n = t.type), null !== e && null != t.stateNode))
								_s(e, t, n, r, a),
									e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(l(166));
									return Gs(t), null;
								}
								if (((e = ni(Xl.current)), dl(t))) {
									(r = t.stateNode), (n = t.type);
									var i = t.memoizedProps;
									switch (
										((r[fa] = t), (r[ha] = i), (e = 0 !== (1 & t.mode)), n)
									) {
										case "dialog":
											zr("cancel", r), zr("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											zr("load", r);
											break;
										case "video":
										case "audio":
											for (a = 0; a < Lr.length; a++) zr(Lr[a], r);
											break;
										case "source":
											zr("error", r);
											break;
										case "img":
										case "image":
										case "link":
											zr("error", r), zr("load", r);
											break;
										case "details":
											zr("toggle", r);
											break;
										case "input":
											Y(r, i), zr("invalid", r);
											break;
										case "select":
											(r._wrapperState = { wasMultiple: !!i.multiple }),
												zr("invalid", r);
											break;
										case "textarea":
											ae(r, i), zr("invalid", r);
									}
									for (var o in (ye(n, i), (a = null), i))
										if (i.hasOwnProperty(o)) {
											var c = i[o];
											"children" === o
												? "string" === typeof c
													? r.textContent !== c &&
													  (!0 !== i.suppressHydrationWarning &&
															Zr(r.textContent, c, e),
													  (a = ["children", c]))
													: "number" === typeof c &&
													  r.textContent !== "" + c &&
													  (!0 !== i.suppressHydrationWarning &&
															Zr(r.textContent, c, e),
													  (a = ["children", "" + c]))
												: s.hasOwnProperty(o) &&
												  null != c &&
												  "onScroll" === o &&
												  zr("scroll", r);
										}
									switch (n) {
										case "input":
											G(r), X(r, i, !0);
											break;
										case "textarea":
											G(r), ie(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" === typeof i.onClick && (r.onclick = Xr);
									}
									(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
								} else {
									(o = 9 === a.nodeType ? a : a.ownerDocument),
										"http://www.w3.org/1999/xhtml" === e && (e = se(n)),
										"http://www.w3.org/1999/xhtml" === e
											? "script" === n
												? (((e = o.createElement("div")).innerHTML =
														"<script></script>"),
												  (e = e.removeChild(e.firstChild)))
												: "string" === typeof r.is
												? (e = o.createElement(n, { is: r.is }))
												: ((e = o.createElement(n)),
												  "select" === n &&
														((o = e),
														r.multiple
															? (o.multiple = !0)
															: r.size && (o.size = r.size)))
											: (e = o.createElementNS(e, n)),
										(e[fa] = t),
										(e[ha] = r),
										Is(e, t, !1, !1),
										(t.stateNode = e);
									e: {
										switch (((o = ve(n, r)), n)) {
											case "dialog":
												zr("cancel", e), zr("close", e), (a = r);
												break;
											case "iframe":
											case "object":
											case "embed":
												zr("load", e), (a = r);
												break;
											case "video":
											case "audio":
												for (a = 0; a < Lr.length; a++) zr(Lr[a], e);
												a = r;
												break;
											case "source":
												zr("error", e), (a = r);
												break;
											case "img":
											case "image":
											case "link":
												zr("error", e), zr("load", e), (a = r);
												break;
											case "details":
												zr("toggle", e), (a = r);
												break;
											case "input":
												Y(e, r), (a = J(e, r)), zr("invalid", e);
												break;
											case "option":
											default:
												a = r;
												break;
											case "select":
												(e._wrapperState = { wasMultiple: !!r.multiple }),
													(a = A({}, r, { value: void 0 })),
													zr("invalid", e);
												break;
											case "textarea":
												ae(e, r), (a = re(e, r)), zr("invalid", e);
										}
										for (i in (ye(n, a), (c = a)))
											if (c.hasOwnProperty(i)) {
												var u = c[i];
												"style" === i
													? xe(e, u)
													: "dangerouslySetInnerHTML" === i
													? null != (u = u ? u.__html : void 0) && de(e, u)
													: "children" === i
													? "string" === typeof u
														? ("textarea" !== n || "" !== u) && fe(e, u)
														: "number" === typeof u && fe(e, "" + u)
													: "suppressContentEditableWarning" !== i &&
													  "suppressHydrationWarning" !== i &&
													  "autoFocus" !== i &&
													  (s.hasOwnProperty(i)
															? null != u && "onScroll" === i && zr("scroll", e)
															: null != u && v(e, i, u, o));
											}
										switch (n) {
											case "input":
												G(e), X(e, r, !1);
												break;
											case "textarea":
												G(e), ie(e);
												break;
											case "option":
												null != r.value &&
													e.setAttribute("value", "" + V(r.value));
												break;
											case "select":
												(e.multiple = !!r.multiple),
													null != (i = r.value)
														? ne(e, !!r.multiple, i, !1)
														: null != r.defaultValue &&
														  ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" === typeof a.onClick && (e.onclick = Xr);
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1;
										}
									}
									r && (t.flags |= 4);
								}
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return Gs(t), null;
						case 6:
							if (e && null != t.stateNode) Ps(e, t, e.memoizedProps, r);
							else {
								if ("string" !== typeof r && null === t.stateNode)
									throw Error(l(166));
								if (((n = ni(ti.current)), ni(Xl.current), dl(t))) {
									if (
										((r = t.stateNode),
										(n = t.memoizedProps),
										(r[fa] = t),
										(i = r.nodeValue !== n) && null !== (e = nl))
									)
										switch (e.tag) {
											case 3:
												Zr(r.nodeValue, n, 0 !== (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning &&
													Zr(r.nodeValue, n, 0 !== (1 & e.mode));
										}
									i && (t.flags |= 4);
								} else
									((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
										r
									))[fa] = t),
										(t.stateNode = r);
							}
							return Gs(t), null;
						case 13:
							if (
								(ka(si),
								(r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									al &&
									null !== rl &&
									0 !== (1 & t.mode) &&
									0 === (128 & t.flags)
								)
									fl(), hl(), (t.flags |= 98560), (i = !1);
								else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!i) throw Error(l(318));
										if (
											!(i =
												null !== (i = t.memoizedState) ? i.dehydrated : null)
										)
											throw Error(l(317));
										i[fa] = t;
									} else
										hl(),
											0 === (128 & t.flags) && (t.memoizedState = null),
											(t.flags |= 4);
									Gs(t), (i = !1);
								} else null !== ll && (sc(ll), (ll = null)), (i = !0);
								if (!i) return 65536 & t.flags ? t : null;
							}
							return 0 !== (128 & t.flags)
								? ((t.lanes = n), t)
								: ((r = null !== r) !==
										(null !== e && null !== e.memoizedState) &&
										r &&
										((t.child.flags |= 8192),
										0 !== (1 & t.mode) &&
											(null === e || 0 !== (1 & si.current)
												? 0 === Lo && (Lo = 3)
												: xc())),
								  null !== t.updateQueue && (t.flags |= 4),
								  Gs(t),
								  null);
						case 4:
							return (
								ai(),
								Ds(e, t),
								null === e && Hr(t.stateNode.containerInfo),
								Gs(t),
								null
							);
						case 10:
							return wl(t.type._context), Gs(t), null;
						case 19:
							if ((ka(si), null === (i = t.memoizedState))) return Gs(t), null;
							if (((r = 0 !== (128 & t.flags)), null === (o = i.rendering)))
								if (r) Ks(i, !1);
								else {
									if (0 !== Lo || (null !== e && 0 !== (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (o = oi(e))) {
												for (
													t.flags |= 128,
														Ks(i, !1),
														null !== (r = o.updateQueue) &&
															((t.updateQueue = r), (t.flags |= 4)),
														t.subtreeFlags = 0,
														r = n,
														n = t.child;
													null !== n;

												)
													(e = r),
														((i = n).flags &= 14680066),
														null === (o = i.alternate)
															? ((i.childLanes = 0),
															  (i.lanes = e),
															  (i.child = null),
															  (i.subtreeFlags = 0),
															  (i.memoizedProps = null),
															  (i.memoizedState = null),
															  (i.updateQueue = null),
															  (i.dependencies = null),
															  (i.stateNode = null))
															: ((i.childLanes = o.childLanes),
															  (i.lanes = o.lanes),
															  (i.child = o.child),
															  (i.subtreeFlags = 0),
															  (i.deletions = null),
															  (i.memoizedProps = o.memoizedProps),
															  (i.memoizedState = o.memoizedState),
															  (i.updateQueue = o.updateQueue),
															  (i.type = o.type),
															  (e = o.dependencies),
															  (i.dependencies =
																	null === e
																		? null
																		: {
																				lanes: e.lanes,
																				firstContext: e.firstContext,
																		  })),
														(n = n.sibling);
												return Ca(si, (1 & si.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== i.tail &&
										qe() > Uo &&
										((t.flags |= 128),
										(r = !0),
										Ks(i, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = oi(o))) {
										if (
											((t.flags |= 128),
											(r = !0),
											null !== (n = e.updateQueue) &&
												((t.updateQueue = n), (t.flags |= 4)),
											Ks(i, !0),
											null === i.tail &&
												"hidden" === i.tailMode &&
												!o.alternate &&
												!al)
										)
											return Gs(t), null;
									} else
										2 * qe() - i.renderingStartTime > Uo &&
											1073741824 !== n &&
											((t.flags |= 128),
											(r = !0),
											Ks(i, !1),
											(t.lanes = 4194304));
								i.isBackwards
									? ((o.sibling = t.child), (t.child = o))
									: (null !== (n = i.last) ? (n.sibling = o) : (t.child = o),
									  (i.last = o));
							}
							return null !== i.tail
								? ((t = i.tail),
								  (i.rendering = t),
								  (i.tail = t.sibling),
								  (i.renderingStartTime = qe()),
								  (t.sibling = null),
								  (n = si.current),
								  Ca(si, r ? (1 & n) | 2 : 1 & n),
								  t)
								: (Gs(t), null);
						case 22:
						case 23:
							return (
								fc(),
								(r = null !== t.memoizedState),
								null !== e &&
									(null !== e.memoizedState) !== r &&
									(t.flags |= 8192),
								r && 0 !== (1 & t.mode)
									? 0 !== (1073741824 & _o) &&
									  (Gs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
									: Gs(t),
								null
							);
						case 24:
						case 25:
							return null;
					}
					throw Error(l(156, t.tag));
				}
				function Qs(e, t) {
					switch ((tl(t), t.tag)) {
						case 1:
							return (
								Da(t.type) && _a(),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 3:
							return (
								ai(),
								ka(Wa),
								ka(Ta),
								ui(),
								0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 5:
							return ii(t), null;
						case 13:
							if (
								(ka(si),
								null !== (e = t.memoizedState) && null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(l(340));
								hl();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return ka(si), null;
						case 4:
							return ai(), null;
						case 10:
							return wl(t.type._context), null;
						case 22:
						case 23:
							return fc(), null;
						default:
							return null;
					}
				}
				(Is = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(Ds = function () {}),
					(_s = function (e, t, n, r) {
						var a = e.memoizedProps;
						if (a !== r) {
							(e = t.stateNode), ni(Xl.current);
							var l,
								i = null;
							switch (n) {
								case "input":
									(a = J(e, a)), (r = J(e, r)), (i = []);
									break;
								case "select":
									(a = A({}, a, { value: void 0 })),
										(r = A({}, r, { value: void 0 })),
										(i = []);
									break;
								case "textarea":
									(a = re(e, a)), (r = re(e, r)), (i = []);
									break;
								default:
									"function" !== typeof a.onClick &&
										"function" === typeof r.onClick &&
										(e.onclick = Xr);
							}
							for (u in (ye(n, r), (n = null), a))
								if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
									if ("style" === u) {
										var o = a[u];
										for (l in o)
											o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
									} else
										"dangerouslySetInnerHTML" !== u &&
											"children" !== u &&
											"suppressContentEditableWarning" !== u &&
											"suppressHydrationWarning" !== u &&
											"autoFocus" !== u &&
											(s.hasOwnProperty(u)
												? i || (i = [])
												: (i = i || []).push(u, null));
							for (u in r) {
								var c = r[u];
								if (
									((o = null != a ? a[u] : void 0),
									r.hasOwnProperty(u) && c !== o && (null != c || null != o))
								)
									if ("style" === u)
										if (o) {
											for (l in o)
												!o.hasOwnProperty(l) ||
													(c && c.hasOwnProperty(l)) ||
													(n || (n = {}), (n[l] = ""));
											for (l in c)
												c.hasOwnProperty(l) &&
													o[l] !== c[l] &&
													(n || (n = {}), (n[l] = c[l]));
										} else n || (i || (i = []), i.push(u, n)), (n = c);
									else
										"dangerouslySetInnerHTML" === u
											? ((c = c ? c.__html : void 0),
											  (o = o ? o.__html : void 0),
											  null != c && o !== c && (i = i || []).push(u, c))
											: "children" === u
											? ("string" !== typeof c && "number" !== typeof c) ||
											  (i = i || []).push(u, "" + c)
											: "suppressContentEditableWarning" !== u &&
											  "suppressHydrationWarning" !== u &&
											  (s.hasOwnProperty(u)
													? (null != c && "onScroll" === u && zr("scroll", e),
													  i || o === c || (i = []))
													: (i = i || []).push(u, c));
							}
							n && (i = i || []).push("style", n);
							var u = i;
							(t.updateQueue = u) && (t.flags |= 4);
						}
					}),
					(Ps = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Js = !1,
					Ys = !1,
					qs = "function" === typeof WeakSet ? WeakSet : Set,
					Zs = null;
				function Xs(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" === typeof n)
							try {
								n(null);
							} catch (r) {
								kc(e, t, r);
							}
						else n.current = null;
				}
				function eo(e, t, n) {
					try {
						n();
					} catch (r) {
						kc(e, t, r);
					}
				}
				var to = !1;
				function no(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var a = (r = r.next);
						do {
							if ((a.tag & e) === e) {
								var l = a.destroy;
								(a.destroy = void 0), void 0 !== l && eo(t, n, l);
							}
							a = a.next;
						} while (a !== r);
					}
				}
				function ro(e, t) {
					if (
						null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
					) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function ao(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
					}
				}
				function lo(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), lo(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag &&
							null !== (t = e.stateNode) &&
							(delete t[fa],
							delete t[ha],
							delete t[ma],
							delete t[xa],
							delete t[ga]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function io(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function so(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || io(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function oo(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
								  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
										null !== t.onclick ||
										(t.onclick = Xr));
					else if (4 !== r && null !== (e = e.child))
						for (oo(e, t, n), e = e.sibling; null !== e; )
							oo(e, t, n), (e = e.sibling);
				}
				function co(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (co(e, t, n), e = e.sibling; null !== e; )
							co(e, t, n), (e = e.sibling);
				}
				var uo = null,
					fo = !1;
				function ho(e, t, n) {
					for (n = n.child; null !== n; ) po(e, t, n), (n = n.sibling);
				}
				function po(e, t, n) {
					if (lt && "function" === typeof lt.onCommitFiberUnmount)
						try {
							lt.onCommitFiberUnmount(at, n);
						} catch (s) {}
					switch (n.tag) {
						case 5:
							Ys || Xs(n, t);
						case 6:
							var r = uo,
								a = fo;
							(uo = null),
								ho(e, t, n),
								(fo = a),
								null !== (uo = r) &&
									(fo
										? ((e = uo),
										  (n = n.stateNode),
										  8 === e.nodeType
												? e.parentNode.removeChild(n)
												: e.removeChild(n))
										: uo.removeChild(n.stateNode));
							break;
						case 18:
							null !== uo &&
								(fo
									? ((e = uo),
									  (n = n.stateNode),
									  8 === e.nodeType
											? oa(e.parentNode, n)
											: 1 === e.nodeType && oa(e, n),
									  Ht(e))
									: oa(uo, n.stateNode));
							break;
						case 4:
							(r = uo),
								(a = fo),
								(uo = n.stateNode.containerInfo),
								(fo = !0),
								ho(e, t, n),
								(uo = r),
								(fo = a);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (
								!Ys &&
								null !== (r = n.updateQueue) &&
								null !== (r = r.lastEffect)
							) {
								a = r = r.next;
								do {
									var l = a,
										i = l.destroy;
									(l = l.tag),
										void 0 !== i &&
											(0 !== (2 & l) || 0 !== (4 & l)) &&
											eo(n, t, i),
										(a = a.next);
								} while (a !== r);
							}
							ho(e, t, n);
							break;
						case 1:
							if (
								!Ys &&
								(Xs(n, t),
								"function" === typeof (r = n.stateNode).componentWillUnmount)
							)
								try {
									(r.props = n.memoizedProps),
										(r.state = n.memoizedState),
										r.componentWillUnmount();
								} catch (s) {
									kc(n, t, s);
								}
							ho(e, t, n);
							break;
						case 21:
							ho(e, t, n);
							break;
						case 22:
							1 & n.mode
								? ((Ys = (r = Ys) || null !== n.memoizedState),
								  ho(e, t, n),
								  (Ys = r))
								: ho(e, t, n);
							break;
						default:
							ho(e, t, n);
					}
				}
				function mo(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new qs()),
							t.forEach(function (t) {
								var r = Wc.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function xo(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							try {
								var i = e,
									s = t,
									o = s;
								e: for (; null !== o; ) {
									switch (o.tag) {
										case 5:
											(uo = o.stateNode), (fo = !1);
											break e;
										case 3:
										case 4:
											(uo = o.stateNode.containerInfo), (fo = !0);
											break e;
									}
									o = o.return;
								}
								if (null === uo) throw Error(l(160));
								po(i, s, a), (uo = null), (fo = !1);
								var c = a.alternate;
								null !== c && (c.return = null), (a.return = null);
							} catch (u) {
								kc(a, t, u);
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t; ) go(t, e), (t = t.sibling);
				}
				function go(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((xo(t, e), yo(e), 4 & r)) {
								try {
									no(3, e, e.return), ro(3, e);
								} catch (x) {
									kc(e, e.return, x);
								}
								try {
									no(5, e, e.return);
								} catch (x) {
									kc(e, e.return, x);
								}
							}
							break;
						case 1:
							xo(t, e), yo(e), 512 & r && null !== n && Xs(n, n.return);
							break;
						case 5:
							if (
								(xo(t, e),
								yo(e),
								512 & r && null !== n && Xs(n, n.return),
								32 & e.flags)
							) {
								var a = e.stateNode;
								try {
									fe(a, "");
								} catch (x) {
									kc(e, e.return, x);
								}
							}
							if (4 & r && null != (a = e.stateNode)) {
								var i = e.memoizedProps,
									s = null !== n ? n.memoizedProps : i,
									o = e.type,
									c = e.updateQueue;
								if (((e.updateQueue = null), null !== c))
									try {
										"input" === o &&
											"radio" === i.type &&
											null != i.name &&
											q(a, i),
											ve(o, s);
										var u = ve(o, i);
										for (s = 0; s < c.length; s += 2) {
											var d = c[s],
												f = c[s + 1];
											"style" === d
												? xe(a, f)
												: "dangerouslySetInnerHTML" === d
												? de(a, f)
												: "children" === d
												? fe(a, f)
												: v(a, d, f, u);
										}
										switch (o) {
											case "input":
												Z(a, i);
												break;
											case "textarea":
												le(a, i);
												break;
											case "select":
												var h = a._wrapperState.wasMultiple;
												a._wrapperState.wasMultiple = !!i.multiple;
												var p = i.value;
												null != p
													? ne(a, !!i.multiple, p, !1)
													: h !== !!i.multiple &&
													  (null != i.defaultValue
															? ne(a, !!i.multiple, i.defaultValue, !0)
															: ne(a, !!i.multiple, i.multiple ? [] : "", !1));
										}
										a[ha] = i;
									} catch (x) {
										kc(e, e.return, x);
									}
							}
							break;
						case 6:
							if ((xo(t, e), yo(e), 4 & r)) {
								if (null === e.stateNode) throw Error(l(162));
								(a = e.stateNode), (i = e.memoizedProps);
								try {
									a.nodeValue = i;
								} catch (x) {
									kc(e, e.return, x);
								}
							}
							break;
						case 3:
							if (
								(xo(t, e),
								yo(e),
								4 & r && null !== n && n.memoizedState.isDehydrated)
							)
								try {
									Ht(t.containerInfo);
								} catch (x) {
									kc(e, e.return, x);
								}
							break;
						case 4:
						default:
							xo(t, e), yo(e);
							break;
						case 13:
							xo(t, e),
								yo(e),
								8192 & (a = e.child).flags &&
									((i = null !== a.memoizedState),
									(a.stateNode.isHidden = i),
									!i ||
										(null !== a.alternate &&
											null !== a.alternate.memoizedState) ||
										(Ho = qe())),
								4 & r && mo(e);
							break;
						case 22:
							if (
								((d = null !== n && null !== n.memoizedState),
								1 & e.mode
									? ((Ys = (u = Ys) || d), xo(t, e), (Ys = u))
									: xo(t, e),
								yo(e),
								8192 & r)
							) {
								if (
									((u = null !== e.memoizedState),
									(e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
								)
									for (Zs = e, d = e.child; null !== d; ) {
										for (f = Zs = d; null !== Zs; ) {
											switch (((p = (h = Zs).child), h.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													no(4, h, h.return);
													break;
												case 1:
													Xs(h, h.return);
													var m = h.stateNode;
													if ("function" === typeof m.componentWillUnmount) {
														(r = h), (n = h.return);
														try {
															(t = r),
																(m.props = t.memoizedProps),
																(m.state = t.memoizedState),
																m.componentWillUnmount();
														} catch (x) {
															kc(r, n, x);
														}
													}
													break;
												case 5:
													Xs(h, h.return);
													break;
												case 22:
													if (null !== h.memoizedState) {
														wo(f);
														continue;
													}
											}
											null !== p ? ((p.return = h), (Zs = p)) : wo(f);
										}
										d = d.sibling;
									}
								e: for (d = null, f = e; ; ) {
									if (5 === f.tag) {
										if (null === d) {
											d = f;
											try {
												(a = f.stateNode),
													u
														? "function" === typeof (i = a.style).setProperty
															? i.setProperty("display", "none", "important")
															: (i.display = "none")
														: ((o = f.stateNode),
														  (s =
																void 0 !== (c = f.memoizedProps.style) &&
																null !== c &&
																c.hasOwnProperty("display")
																	? c.display
																	: null),
														  (o.style.display = me("display", s)));
											} catch (x) {
												kc(e, e.return, x);
											}
										}
									} else if (6 === f.tag) {
										if (null === d)
											try {
												f.stateNode.nodeValue = u ? "" : f.memoizedProps;
											} catch (x) {
												kc(e, e.return, x);
											}
									} else if (
										((22 !== f.tag && 23 !== f.tag) ||
											null === f.memoizedState ||
											f === e) &&
										null !== f.child
									) {
										(f.child.return = f), (f = f.child);
										continue;
									}
									if (f === e) break e;
									for (; null === f.sibling; ) {
										if (null === f.return || f.return === e) break e;
										d === f && (d = null), (f = f.return);
									}
									d === f && (d = null),
										(f.sibling.return = f.return),
										(f = f.sibling);
								}
							}
							break;
						case 19:
							xo(t, e), yo(e), 4 & r && mo(e);
						case 21:
					}
				}
				function yo(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (io(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(l(160));
							}
							switch (r.tag) {
								case 5:
									var a = r.stateNode;
									32 & r.flags && (fe(a, ""), (r.flags &= -33)),
										co(e, so(e), a);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									oo(e, so(e), i);
									break;
								default:
									throw Error(l(161));
							}
						} catch (s) {
							kc(e, e.return, s);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function vo(e, t, n) {
					(Zs = e), jo(e, t, n);
				}
				function jo(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Zs; ) {
						var a = Zs,
							l = a.child;
						if (22 === a.tag && r) {
							var i = null !== a.memoizedState || Js;
							if (!i) {
								var s = a.alternate,
									o = (null !== s && null !== s.memoizedState) || Ys;
								s = Js;
								var c = Ys;
								if (((Js = i), (Ys = o) && !c))
									for (Zs = a; null !== Zs; )
										(o = (i = Zs).child),
											22 === i.tag && null !== i.memoizedState
												? So(a)
												: null !== o
												? ((o.return = i), (Zs = o))
												: So(a);
								for (; null !== l; ) (Zs = l), jo(l, t, n), (l = l.sibling);
								(Zs = a), (Js = s), (Ys = c);
							}
							bo(e);
						} else
							0 !== (8772 & a.subtreeFlags) && null !== l
								? ((l.return = a), (Zs = l))
								: bo(e);
					}
				}
				function bo(e) {
					for (; null !== Zs; ) {
						var t = Zs;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Ys || ro(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Ys)
												if (null === n) r.componentDidMount();
												else {
													var a =
														t.elementType === t.type
															? n.memoizedProps
															: xl(t.type, n.memoizedProps);
													r.componentDidUpdate(
														a,
														n.memoizedState,
														r.__reactInternalSnapshotBeforeUpdate
													);
												}
											var i = t.updateQueue;
											null !== i && Ol(t, i, r);
											break;
										case 3:
											var s = t.updateQueue;
											if (null !== s) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Ol(t, s, n);
											}
											break;
										case 5:
											var o = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = o;
												var c = t.memoizedProps;
												switch (t.type) {
													case "button":
													case "input":
													case "select":
													case "textarea":
														c.autoFocus && n.focus();
														break;
													case "img":
														c.src && (n.src = c.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var u = t.alternate;
												if (null !== u) {
													var d = u.memoizedState;
													if (null !== d) {
														var f = d.dehydrated;
														null !== f && Ht(f);
													}
												}
											}
											break;
										default:
											throw Error(l(163));
									}
								Ys || (512 & t.flags && ao(t));
							} catch (h) {
								kc(t, t.return, h);
							}
						}
						if (t === e) {
							Zs = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (Zs = n);
							break;
						}
						Zs = t.return;
					}
				}
				function wo(e) {
					for (; null !== Zs; ) {
						var t = Zs;
						if (t === e) {
							Zs = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (Zs = n);
							break;
						}
						Zs = t.return;
					}
				}
				function So(e) {
					for (; null !== Zs; ) {
						var t = Zs;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										ro(4, t);
									} catch (o) {
										kc(t, n, o);
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" === typeof r.componentDidMount) {
										var a = t.return;
										try {
											r.componentDidMount();
										} catch (o) {
											kc(t, a, o);
										}
									}
									var l = t.return;
									try {
										ao(t);
									} catch (o) {
										kc(t, l, o);
									}
									break;
								case 5:
									var i = t.return;
									try {
										ao(t);
									} catch (o) {
										kc(t, i, o);
									}
							}
						} catch (o) {
							kc(t, t.return, o);
						}
						if (t === e) {
							Zs = null;
							break;
						}
						var s = t.sibling;
						if (null !== s) {
							(s.return = t.return), (Zs = s);
							break;
						}
						Zs = t.return;
					}
				}
				var No,
					ko = Math.ceil,
					Co = j.ReactCurrentDispatcher,
					Eo = j.ReactCurrentOwner,
					To = j.ReactCurrentBatchConfig,
					Wo = 0,
					Ro = null,
					Io = null,
					Do = 0,
					_o = 0,
					Po = Na(0),
					Lo = 0,
					Mo = null,
					Ao = 0,
					Oo = 0,
					zo = 0,
					Bo = null,
					Fo = null,
					Ho = 0,
					Uo = 1 / 0,
					Vo = null,
					Ko = !1,
					Go = null,
					$o = null,
					Qo = !1,
					Jo = null,
					Yo = 0,
					qo = 0,
					Zo = null,
					Xo = -1,
					ec = 0;
				function tc() {
					return 0 !== (6 & Wo) ? qe() : -1 !== Xo ? Xo : (Xo = qe());
				}
				function nc(e) {
					return 0 === (1 & e.mode)
						? 1
						: 0 !== (2 & Wo) && 0 !== Do
						? Do & -Do
						: null !== ml.transition
						? (0 === ec && (ec = mt()), ec)
						: 0 !== (e = vt)
						? e
						: (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
				}
				function rc(e, t, n, r) {
					if (50 < qo) throw ((qo = 0), (Zo = null), Error(l(185)));
					gt(e, n, r),
						(0 !== (2 & Wo) && e === Ro) ||
							(e === Ro && (0 === (2 & Wo) && (Oo |= n), 4 === Lo && oc(e, Do)),
							ac(e, r),
							1 === n &&
								0 === Wo &&
								0 === (1 & t.mode) &&
								((Uo = qe() + 500), za && Ha()));
				}
				function ac(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (
							var n = e.suspendedLanes,
								r = e.pingedLanes,
								a = e.expirationTimes,
								l = e.pendingLanes;
							0 < l;

						) {
							var i = 31 - it(l),
								s = 1 << i,
								o = a[i];
							-1 === o
								? (0 !== (s & n) && 0 === (s & r)) || (a[i] = ht(s, t))
								: o <= t && (e.expiredLanes |= s),
								(l &= ~s);
						}
					})(e, t);
					var r = ft(e, e === Ro ? Do : 0);
					if (0 === r)
						null !== n && Qe(n),
							(e.callbackNode = null),
							(e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && Qe(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(za = !0), Fa(e);
								  })(cc.bind(null, e))
								: Fa(cc.bind(null, e)),
								ia(function () {
									0 === (6 & Wo) && Ha();
								}),
								(n = null);
						else {
							switch (jt(r)) {
								case 1:
									n = Xe;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt;
							}
							n = Rc(n, lc.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function lc(e, t) {
					if (((Xo = -1), (ec = 0), 0 !== (6 & Wo))) throw Error(l(327));
					var n = e.callbackNode;
					if (Sc() && e.callbackNode !== n) return null;
					var r = ft(e, e === Ro ? Do : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
					else {
						t = r;
						var a = Wo;
						Wo |= 2;
						var i = mc();
						for (
							(Ro === e && Do === t) ||
							((Vo = null), (Uo = qe() + 500), hc(e, t));
							;

						)
							try {
								vc();
								break;
							} catch (o) {
								pc(e, o);
							}
						bl(),
							(Co.current = i),
							(Wo = a),
							null !== Io ? (t = 0) : ((Ro = null), (Do = 0), (t = Lo));
					}
					if (0 !== t) {
						if (
							(2 === t && 0 !== (a = pt(e)) && ((r = a), (t = ic(e, a))),
							1 === t)
						)
							throw ((n = Mo), hc(e, 0), oc(e, r), ac(e, qe()), n);
						if (6 === t) oc(e, r);
						else {
							if (
								((a = e.current.alternate),
								0 === (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var r = 0; r < n.length; r++) {
														var a = n[r],
															l = a.getSnapshot;
														a = a.value;
														try {
															if (!sr(l(), a)) return !1;
														} catch (s) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
												(n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(a) &&
									(2 === (t = gc(e, r)) &&
										0 !== (i = pt(e)) &&
										((r = i), (t = ic(e, i))),
									1 === t))
							)
								throw ((n = Mo), hc(e, 0), oc(e, r), ac(e, qe()), n);
							switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
								case 0:
								case 1:
									throw Error(l(345));
								case 2:
								case 5:
									wc(e, Fo, Vo);
									break;
								case 3:
									if (
										(oc(e, r),
										(130023424 & r) === r && 10 < (t = Ho + 500 - qe()))
									) {
										if (0 !== ft(e, 0)) break;
										if (((a = e.suspendedLanes) & r) !== r) {
											tc(), (e.pingedLanes |= e.suspendedLanes & a);
											break;
										}
										e.timeoutHandle = ra(wc.bind(null, e, Fo, Vo), t);
										break;
									}
									wc(e, Fo, Vo);
									break;
								case 4:
									if ((oc(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, a = -1; 0 < r; ) {
										var s = 31 - it(r);
										(i = 1 << s), (s = t[s]) > a && (a = s), (r &= ~i);
									}
									if (
										((r = a),
										10 <
											(r =
												(120 > (r = qe() - r)
													? 120
													: 480 > r
													? 480
													: 1080 > r
													? 1080
													: 1920 > r
													? 1920
													: 3e3 > r
													? 3e3
													: 4320 > r
													? 4320
													: 1960 * ko(r / 1960)) - r))
									) {
										e.timeoutHandle = ra(wc.bind(null, e, Fo, Vo), r);
										break;
									}
									wc(e, Fo, Vo);
									break;
								default:
									throw Error(l(329));
							}
						}
					}
					return ac(e, qe()), e.callbackNode === n ? lc.bind(null, e) : null;
				}
				function ic(e, t) {
					var n = Bo;
					return (
						e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256),
						2 !== (e = gc(e, t)) && ((t = Fo), (Fo = n), null !== t && sc(t)),
						e
					);
				}
				function sc(e) {
					null === Fo ? (Fo = e) : Fo.push.apply(Fo, e);
				}
				function oc(e, t) {
					for (
						t &= ~zo,
							t &= ~Oo,
							e.suspendedLanes |= t,
							e.pingedLanes &= ~t,
							e = e.expirationTimes;
						0 < t;

					) {
						var n = 31 - it(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function cc(e) {
					if (0 !== (6 & Wo)) throw Error(l(327));
					Sc();
					var t = ft(e, 0);
					if (0 === (1 & t)) return ac(e, qe()), null;
					var n = gc(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = pt(e);
						0 !== r && ((t = r), (n = ic(e, r)));
					}
					if (1 === n) throw ((n = Mo), hc(e, 0), oc(e, t), ac(e, qe()), n);
					if (6 === n) throw Error(l(345));
					return (
						(e.finishedWork = e.current.alternate),
						(e.finishedLanes = t),
						wc(e, Fo, Vo),
						ac(e, qe()),
						null
					);
				}
				function uc(e, t) {
					var n = Wo;
					Wo |= 1;
					try {
						return e(t);
					} finally {
						0 === (Wo = n) && ((Uo = qe() + 500), za && Ha());
					}
				}
				function dc(e) {
					null !== Jo && 0 === Jo.tag && 0 === (6 & Wo) && Sc();
					var t = Wo;
					Wo |= 1;
					var n = To.transition,
						r = vt;
					try {
						if (((To.transition = null), (vt = 1), e)) return e();
					} finally {
						(vt = r), (To.transition = n), 0 === (6 & (Wo = t)) && Ha();
					}
				}
				function fc() {
					(_o = Po.current), ka(Po);
				}
				function hc(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Io))
						for (n = Io.return; null !== n; ) {
							var r = n;
							switch ((tl(r), r.tag)) {
								case 1:
									null !== (r = r.type.childContextTypes) &&
										void 0 !== r &&
										_a();
									break;
								case 3:
									ai(), ka(Wa), ka(Ta), ui();
									break;
								case 5:
									ii(r);
									break;
								case 4:
									ai();
									break;
								case 13:
								case 19:
									ka(si);
									break;
								case 10:
									wl(r.type._context);
									break;
								case 22:
								case 23:
									fc();
							}
							n = n.return;
						}
					if (
						((Ro = e),
						(Io = e = Pc(e.current, null)),
						(Do = _o = t),
						(Lo = 0),
						(Mo = null),
						(zo = Oo = Ao = 0),
						(Fo = Bo = null),
						null !== Cl)
					) {
						for (t = 0; t < Cl.length; t++)
							if (null !== (r = (n = Cl[t]).interleaved)) {
								n.interleaved = null;
								var a = r.next,
									l = n.pending;
								if (null !== l) {
									var i = l.next;
									(l.next = a), (r.next = i);
								}
								n.pending = r;
							}
						Cl = null;
					}
					return e;
				}
				function pc(e, t) {
					for (;;) {
						var n = Io;
						try {
							if ((bl(), (di.current = ls), gi)) {
								for (var r = pi.memoizedState; null !== r; ) {
									var a = r.queue;
									null !== a && (a.pending = null), (r = r.next);
								}
								gi = !1;
							}
							if (
								((hi = 0),
								(xi = mi = pi = null),
								(yi = !1),
								(vi = 0),
								(Eo.current = null),
								null === n || null === n.return)
							) {
								(Lo = 1), (Mo = t), (Io = null);
								break;
							}
							e: {
								var i = e,
									s = n.return,
									o = n,
									c = t;
								if (
									((t = Do),
									(o.flags |= 32768),
									null !== c &&
										"object" === typeof c &&
										"function" === typeof c.then)
								) {
									var u = c,
										d = o,
										f = d.tag;
									if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
										var h = d.alternate;
										h
											? ((d.updateQueue = h.updateQueue),
											  (d.memoizedState = h.memoizedState),
											  (d.lanes = h.lanes))
											: ((d.updateQueue = null), (d.memoizedState = null));
									}
									var p = xs(s);
									if (null !== p) {
										(p.flags &= -257),
											gs(p, s, o, 0, t),
											1 & p.mode && ms(i, u, t),
											(c = u);
										var m = (t = p).updateQueue;
										if (null === m) {
											var x = new Set();
											x.add(c), (t.updateQueue = x);
										} else m.add(c);
										break e;
									}
									if (0 === (1 & t)) {
										ms(i, u, t), xc();
										break e;
									}
									c = Error(l(426));
								} else if (al && 1 & o.mode) {
									var g = xs(s);
									if (null !== g) {
										0 === (65536 & g.flags) && (g.flags |= 256),
											gs(g, s, o, 0, t),
											pl(cs(c, o));
										break e;
									}
								}
								(i = c = cs(c, o)),
									4 !== Lo && (Lo = 2),
									null === Bo ? (Bo = [i]) : Bo.push(i),
									(i = s);
								do {
									switch (i.tag) {
										case 3:
											(i.flags |= 65536),
												(t &= -t),
												(i.lanes |= t),
												Ml(i, hs(0, c, t));
											break e;
										case 1:
											o = c;
											var y = i.type,
												v = i.stateNode;
											if (
												0 === (128 & i.flags) &&
												("function" === typeof y.getDerivedStateFromError ||
													(null !== v &&
														"function" === typeof v.componentDidCatch &&
														(null === $o || !$o.has(v))))
											) {
												(i.flags |= 65536),
													(t &= -t),
													(i.lanes |= t),
													Ml(i, ps(i, o, t));
												break e;
											}
									}
									i = i.return;
								} while (null !== i);
							}
							bc(n);
						} catch (j) {
							(t = j), Io === n && null !== n && (Io = n = n.return);
							continue;
						}
						break;
					}
				}
				function mc() {
					var e = Co.current;
					return (Co.current = ls), null === e ? ls : e;
				}
				function xc() {
					(0 !== Lo && 3 !== Lo && 2 !== Lo) || (Lo = 4),
						null === Ro ||
							(0 === (268435455 & Ao) && 0 === (268435455 & Oo)) ||
							oc(Ro, Do);
				}
				function gc(e, t) {
					var n = Wo;
					Wo |= 2;
					var r = mc();
					for ((Ro === e && Do === t) || ((Vo = null), hc(e, t)); ; )
						try {
							yc();
							break;
						} catch (a) {
							pc(e, a);
						}
					if ((bl(), (Wo = n), (Co.current = r), null !== Io))
						throw Error(l(261));
					return (Ro = null), (Do = 0), Lo;
				}
				function yc() {
					for (; null !== Io; ) jc(Io);
				}
				function vc() {
					for (; null !== Io && !Je(); ) jc(Io);
				}
				function jc(e) {
					var t = No(e.alternate, e, _o);
					(e.memoizedProps = e.pendingProps),
						null === t ? bc(e) : (Io = t),
						(Eo.current = null);
				}
				function bc(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 === (32768 & t.flags))) {
							if (null !== (n = $s(n, t, _o))) return void (Io = n);
						} else {
							if (null !== (n = Qs(n, t)))
								return (n.flags &= 32767), void (Io = n);
							if (null === e) return (Lo = 6), void (Io = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Io = t);
						Io = t = e;
					} while (null !== t);
					0 === Lo && (Lo = 5);
				}
				function wc(e, t, n) {
					var r = vt,
						a = To.transition;
					try {
						(To.transition = null),
							(vt = 1),
							(function (e, t, n, r) {
								do {
									Sc();
								} while (null !== Jo);
								if (0 !== (6 & Wo)) throw Error(l(327));
								n = e.finishedWork;
								var a = e.finishedLanes;
								if (null === n) return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									n === e.current)
								)
									throw Error(l(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var i = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.expiredLanes &= t),
											(e.mutableReadLanes &= t),
											(e.entangledLanes &= t),
											(t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var a = 31 - it(n),
												l = 1 << a;
											(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
										}
									})(e, i),
									e === Ro && ((Io = Ro = null), (Do = 0)),
									(0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
										Qo ||
										((Qo = !0),
										Rc(tt, function () {
											return Sc(), null;
										})),
									(i = 0 !== (15990 & n.flags)),
									0 !== (15990 & n.subtreeFlags) || i)
								) {
									(i = To.transition), (To.transition = null);
									var s = vt;
									vt = 1;
									var o = Wo;
									(Wo |= 4),
										(Eo.current = null),
										(function (e, t) {
											if (((ea = Vt), hr((e = fr())))) {
												if ("selectionStart" in e)
													var n = {
														start: e.selectionStart,
														end: e.selectionEnd,
													};
												else
													e: {
														var r =
															(n =
																((n = e.ownerDocument) && n.defaultView) ||
																window).getSelection && n.getSelection();
														if (r && 0 !== r.rangeCount) {
															n = r.anchorNode;
															var a = r.anchorOffset,
																i = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType, i.nodeType;
															} catch (b) {
																n = null;
																break e;
															}
															var s = 0,
																o = -1,
																c = -1,
																u = 0,
																d = 0,
																f = e,
																h = null;
															t: for (;;) {
																for (
																	var p;
																	f !== n ||
																		(0 !== a && 3 !== f.nodeType) ||
																		(o = s + a),
																		f !== i ||
																			(0 !== r && 3 !== f.nodeType) ||
																			(c = s + r),
																		3 === f.nodeType &&
																			(s += f.nodeValue.length),
																		null !== (p = f.firstChild);

																)
																	(h = f), (f = p);
																for (;;) {
																	if (f === e) break t;
																	if (
																		(h === n && ++u === a && (o = s),
																		h === i && ++d === r && (c = s),
																		null !== (p = f.nextSibling))
																	)
																		break;
																	h = (f = h).parentNode;
																}
																f = p;
															}
															n =
																-1 === o || -1 === c
																	? null
																	: { start: o, end: c };
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (
												ta = { focusedElem: e, selectionRange: n },
													Vt = !1,
													Zs = t;
												null !== Zs;

											)
												if (
													((e = (t = Zs).child),
													0 !== (1028 & t.subtreeFlags) && null !== e)
												)
													(e.return = t), (Zs = e);
												else
													for (; null !== Zs; ) {
														t = Zs;
														try {
															var m = t.alternate;
															if (0 !== (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== m) {
																			var x = m.memoizedProps,
																				g = m.memoizedState,
																				y = t.stateNode,
																				v = y.getSnapshotBeforeUpdate(
																					t.elementType === t.type
																						? x
																						: xl(t.type, x),
																					g
																				);
																			y.__reactInternalSnapshotBeforeUpdate = v;
																		}
																		break;
																	case 3:
																		var j = t.stateNode.containerInfo;
																		1 === j.nodeType
																			? (j.textContent = "")
																			: 9 === j.nodeType &&
																			  j.documentElement &&
																			  j.removeChild(j.documentElement);
																		break;
																	default:
																		throw Error(l(163));
																}
														} catch (b) {
															kc(t, t.return, b);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (Zs = e);
															break;
														}
														Zs = t.return;
													}
											(m = to), (to = !1);
										})(e, n),
										go(n, e),
										pr(ta),
										(Vt = !!ea),
										(ta = ea = null),
										(e.current = n),
										vo(n, e, a),
										Ye(),
										(Wo = o),
										(vt = s),
										(To.transition = i);
								} else e.current = n;
								if (
									(Qo && ((Qo = !1), (Jo = e), (Yo = a)),
									(i = e.pendingLanes),
									0 === i && ($o = null),
									(function (e) {
										if (lt && "function" === typeof lt.onCommitFiberRoot)
											try {
												lt.onCommitFiberRoot(
													at,
													e,
													void 0,
													128 === (128 & e.current.flags)
												);
											} catch (t) {}
									})(n.stateNode),
									ac(e, qe()),
									null !== t)
								)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++)
										(a = t[n]),
											r(a.value, { componentStack: a.stack, digest: a.digest });
								if (Ko) throw ((Ko = !1), (e = Go), (Go = null), e);
								0 !== (1 & Yo) && 0 !== e.tag && Sc(),
									(i = e.pendingLanes),
									0 !== (1 & i)
										? e === Zo
											? qo++
											: ((qo = 0), (Zo = e))
										: (qo = 0),
									Ha();
							})(e, t, n, r);
					} finally {
						(To.transition = a), (vt = r);
					}
					return null;
				}
				function Sc() {
					if (null !== Jo) {
						var e = jt(Yo),
							t = To.transition,
							n = vt;
						try {
							if (((To.transition = null), (vt = 16 > e ? 16 : e), null === Jo))
								var r = !1;
							else {
								if (((e = Jo), (Jo = null), (Yo = 0), 0 !== (6 & Wo)))
									throw Error(l(331));
								var a = Wo;
								for (Wo |= 4, Zs = e.current; null !== Zs; ) {
									var i = Zs,
										s = i.child;
									if (0 !== (16 & Zs.flags)) {
										var o = i.deletions;
										if (null !== o) {
											for (var c = 0; c < o.length; c++) {
												var u = o[c];
												for (Zs = u; null !== Zs; ) {
													var d = Zs;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															no(8, d, i);
													}
													var f = d.child;
													if (null !== f) (f.return = d), (Zs = f);
													else
														for (; null !== Zs; ) {
															var h = (d = Zs).sibling,
																p = d.return;
															if ((lo(d), d === u)) {
																Zs = null;
																break;
															}
															if (null !== h) {
																(h.return = p), (Zs = h);
																break;
															}
															Zs = p;
														}
												}
											}
											var m = i.alternate;
											if (null !== m) {
												var x = m.child;
												if (null !== x) {
													m.child = null;
													do {
														var g = x.sibling;
														(x.sibling = null), (x = g);
													} while (null !== x);
												}
											}
											Zs = i;
										}
									}
									if (0 !== (2064 & i.subtreeFlags) && null !== s)
										(s.return = i), (Zs = s);
									else
										e: for (; null !== Zs; ) {
											if (0 !== (2048 & (i = Zs).flags))
												switch (i.tag) {
													case 0:
													case 11:
													case 15:
														no(9, i, i.return);
												}
											var y = i.sibling;
											if (null !== y) {
												(y.return = i.return), (Zs = y);
												break e;
											}
											Zs = i.return;
										}
								}
								var v = e.current;
								for (Zs = v; null !== Zs; ) {
									var j = (s = Zs).child;
									if (0 !== (2064 & s.subtreeFlags) && null !== j)
										(j.return = s), (Zs = j);
									else
										e: for (s = v; null !== Zs; ) {
											if (0 !== (2048 & (o = Zs).flags))
												try {
													switch (o.tag) {
														case 0:
														case 11:
														case 15:
															ro(9, o);
													}
												} catch (w) {
													kc(o, o.return, w);
												}
											if (o === s) {
												Zs = null;
												break e;
											}
											var b = o.sibling;
											if (null !== b) {
												(b.return = o.return), (Zs = b);
												break e;
											}
											Zs = o.return;
										}
								}
								if (
									((Wo = a),
									Ha(),
									lt && "function" === typeof lt.onPostCommitFiberRoot)
								)
									try {
										lt.onPostCommitFiberRoot(at, e);
									} catch (w) {}
								r = !0;
							}
							return r;
						} finally {
							(vt = n), (To.transition = t);
						}
					}
					return !1;
				}
				function Nc(e, t, n) {
					(e = Pl(e, (t = hs(0, (t = cs(n, t)), 1)), 1)),
						(t = tc()),
						null !== e && (gt(e, 1, t), ac(e, t));
				}
				function kc(e, t, n) {
					if (3 === e.tag) Nc(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								Nc(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									"function" === typeof t.type.getDerivedStateFromError ||
									("function" === typeof r.componentDidCatch &&
										(null === $o || !$o.has(r)))
								) {
									(t = Pl(t, (e = ps(t, (e = cs(n, e)), 1)), 1)),
										(e = tc()),
										null !== t && (gt(t, 1, e), ac(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function Cc(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(t = tc()),
						(e.pingedLanes |= e.suspendedLanes & n),
						Ro === e &&
							(Do & n) === n &&
							(4 === Lo ||
							(3 === Lo && (130023424 & Do) === Do && 500 > qe() - Ho)
								? hc(e, 0)
								: (zo |= n)),
						ac(e, t);
				}
				function Ec(e, t) {
					0 === t &&
						(0 === (1 & e.mode)
							? (t = 1)
							: ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
					var n = tc();
					null !== (e = Wl(e, t)) && (gt(e, t, n), ac(e, n));
				}
				function Tc(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Ec(e, n);
				}
				function Wc(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(l(314));
					}
					null !== r && r.delete(t), Ec(e, n);
				}
				function Rc(e, t) {
					return $e(e, t);
				}
				function Ic(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function Dc(e, t, n, r) {
					return new Ic(e, t, n, r);
				}
				function _c(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Pc(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = Dc(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t),
							  (n.type = e.type),
							  (n.flags = 0),
							  (n.subtreeFlags = 0),
							  (n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: { lanes: t.lanes, firstContext: t.firstContext }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function Lc(e, t, n, r, a, i) {
					var s = 2;
					if (((r = e), "function" === typeof e)) _c(e) && (s = 1);
					else if ("string" === typeof e) s = 5;
					else
						e: switch (e) {
							case S:
								return Mc(n.children, a, i, t);
							case N:
								(s = 8), (a |= 8);
								break;
							case k:
								return (
									((e = Dc(12, n, t, 2 | a)).elementType = k), (e.lanes = i), e
								);
							case W:
								return (
									((e = Dc(13, n, t, a)).elementType = W), (e.lanes = i), e
								);
							case R:
								return (
									((e = Dc(19, n, t, a)).elementType = R), (e.lanes = i), e
								);
							case _:
								return Ac(n, a, i, t);
							default:
								if ("object" === typeof e && null !== e)
									switch (e.$$typeof) {
										case C:
											s = 10;
											break e;
										case E:
											s = 9;
											break e;
										case T:
											s = 11;
											break e;
										case I:
											s = 14;
											break e;
										case D:
											(s = 16), (r = null);
											break e;
									}
								throw Error(l(130, null == e ? e : typeof e, ""));
						}
					return (
						((t = Dc(s, n, t, a)).elementType = e),
						(t.type = r),
						(t.lanes = i),
						t
					);
				}
				function Mc(e, t, n, r) {
					return ((e = Dc(7, e, r, t)).lanes = n), e;
				}
				function Ac(e, t, n, r) {
					return (
						((e = Dc(22, e, r, t)).elementType = _),
						(e.lanes = n),
						(e.stateNode = { isHidden: !1 }),
						e
					);
				}
				function Oc(e, t, n) {
					return ((e = Dc(6, e, null, t)).lanes = n), e;
				}
				function zc(e, t, n) {
					return (
						((t = Dc(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function Bc(e, t, n, r, a) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode = this.pendingContext = this.context = null),
						(this.callbackPriority = 0),
						(this.eventTimes = xt(0)),
						(this.expirationTimes = xt(-1)),
						(this.entangledLanes =
							this.finishedLanes =
							this.mutableReadLanes =
							this.expiredLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = xt(0)),
						(this.identifierPrefix = r),
						(this.onRecoverableError = a),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Fc(e, t, n, r, a, l, i, s, o) {
					return (
						(e = new Bc(e, t, n, s, o)),
						1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
						(l = Dc(3, null, null, t)),
						(e.current = l),
						(l.stateNode = e),
						(l.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: null,
							transitions: null,
							pendingSuspenseBoundaries: null,
						}),
						Il(l),
						e
					);
				}
				function Hc(e) {
					if (!e) return Ea;
					e: {
						if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
							throw Error(l(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (Da(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(l(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (Da(n)) return La(e, n, t);
					}
					return t;
				}
				function Uc(e, t, n, r, a, l, i, s, o) {
					return (
						((e = Fc(n, r, !0, e, 0, l, 0, s, o)).context = Hc(null)),
						(n = e.current),
						((l = _l((r = tc()), (a = nc(n)))).callback =
							void 0 !== t && null !== t ? t : null),
						Pl(n, l, a),
						(e.current.lanes = a),
						gt(e, a, r),
						ac(e, r),
						e
					);
				}
				function Vc(e, t, n, r) {
					var a = t.current,
						l = tc(),
						i = nc(a);
					return (
						(n = Hc(n)),
						null === t.context ? (t.context = n) : (t.pendingContext = n),
						((t = _l(l, i)).payload = { element: e }),
						null !== (r = void 0 === r ? null : r) && (t.callback = r),
						null !== (e = Pl(a, t, i)) && (rc(e, a, i, l), Ll(e, a, i)),
						i
					);
				}
				function Kc(e) {
					return (e = e.current).child
						? (e.child.tag, e.child.stateNode)
						: null;
				}
				function Gc(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function $c(e, t) {
					Gc(e, t), (e = e.alternate) && Gc(e, t);
				}
				No = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Wa.current) vs = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags))
								return (
									(vs = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												Ws(t), hl();
												break;
											case 5:
												li(t);
												break;
											case 1:
												Da(t.type) && Ma(t);
												break;
											case 4:
												ri(t, t.stateNode.containerInfo);
												break;
											case 10:
												var r = t.type._context,
													a = t.memoizedProps.value;
												Ca(gl, r._currentValue), (r._currentValue = a);
												break;
											case 13:
												if (null !== (r = t.memoizedState))
													return null !== r.dehydrated
														? (Ca(si, 1 & si.current), (t.flags |= 128), null)
														: 0 !== (n & t.child.childLanes)
														? As(e, t, n)
														: (Ca(si, 1 & si.current),
														  null !== (e = Vs(e, t, n)) ? e.sibling : null);
												Ca(si, 1 & si.current);
												break;
											case 19:
												if (
													((r = 0 !== (n & t.childLanes)),
													0 !== (128 & e.flags))
												) {
													if (r) return Hs(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !== (a = t.memoizedState) &&
														((a.rendering = null),
														(a.tail = null),
														(a.lastEffect = null)),
													Ca(si, si.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Ns(e, t, n);
										}
										return Vs(e, t, n);
									})(e, t, n)
								);
							vs = 0 !== (131072 & e.flags);
						}
					else (vs = !1), al && 0 !== (1048576 & t.flags) && Xa(t, Ga, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							Us(e, t), (e = t.pendingProps);
							var a = Ia(t, Ta.current);
							Nl(t, n), (a = Si(null, t, r, e, a, n));
							var i = Ni();
							return (
								(t.flags |= 1),
								"object" === typeof a &&
								null !== a &&
								"function" === typeof a.render &&
								void 0 === a.$$typeof
									? ((t.tag = 1),
									  (t.memoizedState = null),
									  (t.updateQueue = null),
									  Da(r) ? ((i = !0), Ma(t)) : (i = !1),
									  (t.memoizedState =
											null !== a.state && void 0 !== a.state ? a.state : null),
									  Il(t),
									  (a.updater = Fl),
									  (t.stateNode = a),
									  (a._reactInternals = t),
									  Kl(t, r, e, n),
									  (t = Ts(null, t, r, !0, i, n)))
									: ((t.tag = 0),
									  al && i && el(t),
									  js(null, t, a, n),
									  (t = t.child)),
								t
							);
						case 16:
							r = t.elementType;
							e: {
								switch (
									(Us(e, t),
									(e = t.pendingProps),
									(r = (a = r._init)(r._payload)),
									(t.type = r),
									(a = t.tag =
										(function (e) {
											if ("function" === typeof e) return _c(e) ? 1 : 0;
											if (void 0 !== e && null !== e) {
												if ((e = e.$$typeof) === T) return 11;
												if (e === I) return 14;
											}
											return 2;
										})(r)),
									(e = xl(r, e)),
									a)
								) {
									case 0:
										t = Cs(null, t, r, e, n);
										break e;
									case 1:
										t = Es(null, t, r, e, n);
										break e;
									case 11:
										t = bs(null, t, r, e, n);
										break e;
									case 14:
										t = ws(null, t, r, xl(r.type, e), n);
										break e;
								}
								throw Error(l(306, r, ""));
							}
							return t;
						case 0:
							return (
								(r = t.type),
								(a = t.pendingProps),
								Cs(e, t, r, (a = t.elementType === r ? a : xl(r, a)), n)
							);
						case 1:
							return (
								(r = t.type),
								(a = t.pendingProps),
								Es(e, t, r, (a = t.elementType === r ? a : xl(r, a)), n)
							);
						case 3:
							e: {
								if ((Ws(t), null === e)) throw Error(l(387));
								(r = t.pendingProps),
									(a = (i = t.memoizedState).element),
									Dl(e, t),
									Al(t, r, null, n);
								var s = t.memoizedState;
								if (((r = s.element), i.isDehydrated)) {
									if (
										((i = {
											element: r,
											isDehydrated: !1,
											cache: s.cache,
											pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
											transitions: s.transitions,
										}),
										(t.updateQueue.baseState = i),
										(t.memoizedState = i),
										256 & t.flags)
									) {
										t = Rs(e, t, r, n, (a = cs(Error(l(423)), t)));
										break e;
									}
									if (r !== a) {
										t = Rs(e, t, r, n, (a = cs(Error(l(424)), t)));
										break e;
									}
									for (
										rl = ca(t.stateNode.containerInfo.firstChild),
											nl = t,
											al = !0,
											ll = null,
											n = ql(t, null, r, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((hl(), r === a)) {
										t = Vs(e, t, n);
										break e;
									}
									js(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return (
								li(t),
								null === e && cl(t),
								(r = t.type),
								(a = t.pendingProps),
								(i = null !== e ? e.memoizedProps : null),
								(s = a.children),
								na(r, a)
									? (s = null)
									: null !== i && na(r, i) && (t.flags |= 32),
								ks(e, t),
								js(e, t, s, n),
								t.child
							);
						case 6:
							return null === e && cl(t), null;
						case 13:
							return As(e, t, n);
						case 4:
							return (
								ri(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e ? (t.child = Yl(t, null, r, n)) : js(e, t, r, n),
								t.child
							);
						case 11:
							return (
								(r = t.type),
								(a = t.pendingProps),
								bs(e, t, r, (a = t.elementType === r ? a : xl(r, a)), n)
							);
						case 7:
							return js(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return js(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (
									((r = t.type._context),
									(a = t.pendingProps),
									(i = t.memoizedProps),
									(s = a.value),
									Ca(gl, r._currentValue),
									(r._currentValue = s),
									null !== i)
								)
									if (sr(i.value, s)) {
										if (i.children === a.children && !Wa.current) {
											t = Vs(e, t, n);
											break e;
										}
									} else
										for (
											null !== (i = t.child) && (i.return = t);
											null !== i;

										) {
											var o = i.dependencies;
											if (null !== o) {
												s = i.child;
												for (var c = o.firstContext; null !== c; ) {
													if (c.context === r) {
														if (1 === i.tag) {
															(c = _l(-1, n & -n)).tag = 2;
															var u = i.updateQueue;
															if (null !== u) {
																var d = (u = u.shared).pending;
																null === d
																	? (c.next = c)
																	: ((c.next = d.next), (d.next = c)),
																	(u.pending = c);
															}
														}
														(i.lanes |= n),
															null !== (c = i.alternate) && (c.lanes |= n),
															Sl(i.return, n, t),
															(o.lanes |= n);
														break;
													}
													c = c.next;
												}
											} else if (10 === i.tag)
												s = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (s = i.return)) throw Error(l(341));
												(s.lanes |= n),
													null !== (o = s.alternate) && (o.lanes |= n),
													Sl(s, n, t),
													(s = i.sibling);
											} else s = i.child;
											if (null !== s) s.return = i;
											else
												for (s = i; null !== s; ) {
													if (s === t) {
														s = null;
														break;
													}
													if (null !== (i = s.sibling)) {
														(i.return = s.return), (s = i);
														break;
													}
													s = s.return;
												}
											i = s;
										}
								js(e, t, a.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (
								(a = t.type),
								(r = t.pendingProps.children),
								Nl(t, n),
								(r = r((a = kl(a)))),
								(t.flags |= 1),
								js(e, t, r, n),
								t.child
							);
						case 14:
							return (
								(a = xl((r = t.type), t.pendingProps)),
								ws(e, t, r, (a = xl(r.type, a)), n)
							);
						case 15:
							return Ss(e, t, t.type, t.pendingProps, n);
						case 17:
							return (
								(r = t.type),
								(a = t.pendingProps),
								(a = t.elementType === r ? a : xl(r, a)),
								Us(e, t),
								(t.tag = 1),
								Da(r) ? ((e = !0), Ma(t)) : (e = !1),
								Nl(t, n),
								Ul(t, r, a),
								Kl(t, r, a, n),
								Ts(null, t, r, !0, e, n)
							);
						case 19:
							return Hs(e, t, n);
						case 22:
							return Ns(e, t, n);
					}
					throw Error(l(156, t.tag));
				};
				var Qc =
					"function" === typeof reportError
						? reportError
						: function (e) {
								console.error(e);
						  };
				function Jc(e) {
					this._internalRoot = e;
				}
				function Yc(e) {
					this._internalRoot = e;
				}
				function qc(e) {
					return !(
						!e ||
						(1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
					);
				}
				function Zc(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType &&
							(8 !== e.nodeType ||
								" react-mount-point-unstable " !== e.nodeValue))
					);
				}
				function Xc() {}
				function eu(e, t, n, r, a) {
					var l = n._reactRootContainer;
					if (l) {
						var i = l;
						if ("function" === typeof a) {
							var s = a;
							a = function () {
								var e = Kc(i);
								s.call(e);
							};
						}
						Vc(t, i, e, a);
					} else
						i = (function (e, t, n, r, a) {
							if (a) {
								if ("function" === typeof r) {
									var l = r;
									r = function () {
										var e = Kc(i);
										l.call(e);
									};
								}
								var i = Uc(t, r, e, 0, null, !1, 0, "", Xc);
								return (
									(e._reactRootContainer = i),
									(e[pa] = i.current),
									Hr(8 === e.nodeType ? e.parentNode : e),
									dc(),
									i
								);
							}
							for (; (a = e.lastChild); ) e.removeChild(a);
							if ("function" === typeof r) {
								var s = r;
								r = function () {
									var e = Kc(o);
									s.call(e);
								};
							}
							var o = Fc(e, 0, !1, null, 0, !1, 0, "", Xc);
							return (
								(e._reactRootContainer = o),
								(e[pa] = o.current),
								Hr(8 === e.nodeType ? e.parentNode : e),
								dc(function () {
									Vc(t, o, n, r);
								}),
								o
							);
						})(n, t, e, a, r);
					return Kc(i);
				}
				(Yc.prototype.render = Jc.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(l(409));
						Vc(e, t, null, null);
					}),
					(Yc.prototype.unmount = Jc.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								dc(function () {
									Vc(null, e, null, null);
								}),
									(t[pa] = null);
							}
						}),
					(Yc.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Nt();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < _t.length && 0 !== t && t < _t[n].priority;
								n++
							);
							_t.splice(n, 0, e), 0 === n && At(e);
						}
					}),
					(bt = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = dt(t.pendingLanes);
									0 !== n &&
										(yt(t, 1 | n),
										ac(t, qe()),
										0 === (6 & Wo) && ((Uo = qe() + 500), Ha()));
								}
								break;
							case 13:
								dc(function () {
									var t = Wl(e, 1);
									if (null !== t) {
										var n = tc();
										rc(t, e, 1, n);
									}
								}),
									$c(e, 1);
						}
					}),
					(wt = function (e) {
						if (13 === e.tag) {
							var t = Wl(e, 134217728);
							if (null !== t) rc(t, e, 134217728, tc());
							$c(e, 134217728);
						}
					}),
					(St = function (e) {
						if (13 === e.tag) {
							var t = nc(e),
								n = Wl(e, t);
							if (null !== n) rc(n, e, t, tc());
							$c(e, t);
						}
					}),
					(Nt = function () {
						return vt;
					}),
					(kt = function (e, t) {
						var n = vt;
						try {
							return (vt = e), t();
						} finally {
							vt = n;
						}
					}),
					(we = function (e, t, n) {
						switch (t) {
							case "input":
								if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (
										n = n.querySelectorAll(
											"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var a = ba(r);
											if (!a) throw Error(l(90));
											$(r), Z(r, a);
										}
									}
								}
								break;
							case "textarea":
								le(e, n);
								break;
							case "select":
								null != (t = n.value) && ne(e, !!n.multiple, t, !1);
						}
					}),
					(Te = uc),
					(We = dc);
				var tu = {
						usingClientEntryPoint: !1,
						Events: [va, ja, ba, Ce, Ee, uc],
					},
					nu = {
						findFiberByHostInstance: ya,
						bundleType: 0,
						version: "18.2.0",
						rendererPackageName: "react-dom",
					},
					ru = {
						bundleType: nu.bundleType,
						version: nu.version,
						rendererPackageName: nu.rendererPackageName,
						rendererConfig: nu.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: j.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = Ke(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							nu.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
					};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!au.isDisabled && au.supportsFiber)
						try {
							(at = au.inject(ru)), (lt = au);
						} catch (ue) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (!qc(t)) throw Error(l(200));
						return (function (e, t, n) {
							var r =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: w,
								key: null == r ? null : "" + r,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!qc(e)) throw Error(l(299));
						var n = !1,
							r = "",
							a = Qc;
						return (
							null !== t &&
								void 0 !== t &&
								(!0 === t.unstable_strictMode && (n = !0),
								void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
								void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
							(t = Fc(e, 1, !1, null, 0, n, 0, r, a)),
							(e[pa] = t.current),
							Hr(8 === e.nodeType ? e.parentNode : e),
							new Jc(t)
						);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ("function" === typeof e.render) throw Error(l(188));
							throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
						}
						return (e = null === (e = Ke(t)) ? null : e.stateNode);
					}),
					(t.flushSync = function (e) {
						return dc(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Zc(t)) throw Error(l(200));
						return eu(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!qc(e)) throw Error(l(405));
						var r = (null != n && n.hydratedSources) || null,
							a = !1,
							i = "",
							s = Qc;
						if (
							(null !== n &&
								void 0 !== n &&
								(!0 === n.unstable_strictMode && (a = !0),
								void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
								void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
							(t = Uc(t, null, e, 1, null != n ? n : null, a, 0, i, s)),
							(e[pa] = t.current),
							Hr(e),
							r)
						)
							for (e = 0; e < r.length; e++)
								(a = (a = (n = r[e])._getVersion)(n._source)),
									null == t.mutableSourceEagerHydrationData
										? (t.mutableSourceEagerHydrationData = [n, a])
										: t.mutableSourceEagerHydrationData.push(n, a);
						return new Yc(t);
					}),
					(t.render = function (e, t, n) {
						if (!Zc(t)) throw Error(l(200));
						return eu(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Zc(e)) throw Error(l(40));
						return (
							!!e._reactRootContainer &&
							(dc(function () {
								eu(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[pa] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = uc),
					(t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
						if (!Zc(n)) throw Error(l(200));
						if (null == e || void 0 === e._reactInternals) throw Error(l(38));
						return eu(e, t, n, !1, r);
					}),
					(t.version = "18.2.0-next-9e3b772b8-20220608");
			},
			1250: function (e, t, n) {
				"use strict";
				var r = n(4164);
				(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
			},
			4164: function (e, t, n) {
				"use strict";
				!(function e() {
					if (
						"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(4463));
			},
			4038: function (e, t, n) {
				var r = n(861).default,
					a = n(8416).default,
					l = n(7424).default;
				var i = n(2791);
				function s(e) {
					return e && "object" === typeof e && "default" in e
						? e
						: { default: e };
				}
				var o = s(i);
				!(function (e) {
					if (e && "undefined" !== typeof window) {
						var t = document.createElement("style");
						t.setAttribute("type", "text/css"),
							(t.innerHTML = e),
							document.head.appendChild(t);
					}
				})(
					'.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
				);
				var c = i.forwardRef(function (e, t) {
					var n = e.style,
						s = void 0 === n ? {} : n,
						c = e.className,
						u = void 0 === c ? "" : c,
						d = e.autoFill,
						f = void 0 !== d && d,
						h = e.play,
						p = void 0 === h || h,
						m = e.pauseOnHover,
						x = void 0 !== m && m,
						g = e.pauseOnClick,
						y = void 0 !== g && g,
						v = e.direction,
						j = void 0 === v ? "left" : v,
						b = e.speed,
						w = void 0 === b ? 50 : b,
						S = e.delay,
						N = void 0 === S ? 0 : S,
						k = e.loop,
						C = void 0 === k ? 0 : k,
						E = e.gradient,
						T = void 0 !== E && E,
						W = e.gradientColor,
						R = void 0 === W ? "white" : W,
						I = e.gradientWidth,
						D = void 0 === I ? 200 : I,
						_ = e.onFinish,
						P = e.onCycleComplete,
						L = e.onMount,
						M = e.children,
						A = i.useState(0),
						O = l(A, 2),
						z = O[0],
						B = O[1],
						F = i.useState(0),
						H = l(F, 2),
						U = H[0],
						V = H[1],
						K = i.useState(1),
						G = l(K, 2),
						$ = G[0],
						Q = G[1],
						J = i.useState(!1),
						Y = l(J, 2),
						q = Y[0],
						Z = Y[1],
						X = i.useRef(null),
						ee = t || X,
						te = i.useRef(null),
						ne = i.useCallback(
							function () {
								if (te.current && ee.current) {
									var e = ee.current.getBoundingClientRect(),
										t = te.current.getBoundingClientRect(),
										n = e.width,
										r = t.width;
									("up" !== j && "down" !== j) ||
										((n = e.height), (r = t.height)),
										Q(f && n && r && r < n ? Math.ceil(n / r) : 1),
										B(n),
										V(r);
								}
							},
							[f, ee, j]
						);
					i.useEffect(
						function () {
							if (q && (ne(), te.current && ee.current)) {
								var e = new ResizeObserver(function () {
									return ne();
								});
								return (
									e.observe(ee.current),
									e.observe(te.current),
									function () {
										e && e.disconnect();
									}
								);
							}
						},
						[ne, ee, q]
					),
						i.useEffect(
							function () {
								ne();
							},
							[ne, M]
						),
						i.useEffect(function () {
							Z(!0);
						}, []),
						i.useEffect(function () {
							"function" === typeof L && L();
						}, []);
					var re = i.useMemo(
							function () {
								return f ? (U * $) / w : U < z ? z / w : U / w;
							},
							[f, z, U, $, w]
						),
						ae = i.useMemo(
							function () {
								var e;
								return Object.assign(
									Object.assign({}, s),
									(a(
										(e = {}),
										"--pause-on-hover",
										!p || x ? "paused" : "running"
									),
									a(
										e,
										"--pause-on-click",
										!p || (x && !y) || y ? "paused" : "running"
									),
									a(
										e,
										"--width",
										"up" === j || "down" === j ? "100vh" : "100%"
									),
									a(
										e,
										"--transform",
										"up" === j
											? "rotate(-90deg)"
											: "down" === j
											? "rotate(90deg)"
											: "none"
									),
									e)
								);
							},
							[s, p, x, y, j]
						),
						le = i.useMemo(
							function () {
								var e;
								return (
									a((e = {}), "--gradient-color", R),
									a(
										e,
										"--gradient-width",
										"number" === typeof D ? "".concat(D, "px") : D
									),
									e
								);
							},
							[R, D]
						),
						ie = i.useMemo(
							function () {
								var e;
								return (
									a((e = {}), "--play", p ? "running" : "paused"),
									a(e, "--direction", "left" === j ? "normal" : "reverse"),
									a(e, "--duration", "".concat(re, "s")),
									a(e, "--delay", "".concat(N, "s")),
									a(e, "--iteration-count", C ? "".concat(C) : "infinite"),
									a(e, "--min-width", f ? "auto" : "100%"),
									e
								);
							},
							[p, j, re, N, C, f]
						),
						se = i.useMemo(
							function () {
								return a(
									{},
									"--transform",
									"up" === j
										? "rotate(90deg)"
										: "down" === j
										? "rotate(-90deg)"
										: "none"
								);
							},
							[j]
						),
						oe = i.useCallback(
							function (e) {
								return r(Array(Number.isFinite(e) && e >= 0 ? e : 0)).map(
									function (e, t) {
										return o.default.createElement(
											i.Fragment,
											{ key: t },
											i.Children.map(M, function (e) {
												return o.default.createElement(
													"div",
													{ style: se, className: "rfm-child" },
													e
												);
											})
										);
									}
								);
							},
							[se, M]
						);
					return q
						? o.default.createElement(
								"div",
								{ ref: ee, style: ae, className: "rfm-marquee-container " + u },
								T &&
									o.default.createElement("div", {
										style: le,
										className: "rfm-overlay",
									}),
								o.default.createElement(
									"div",
									{
										className: "rfm-marquee",
										style: ie,
										onAnimationIteration: P,
										onAnimationEnd: _,
									},
									o.default.createElement(
										"div",
										{ className: "rfm-initial-child-container", ref: te },
										i.Children.map(M, function (e) {
											return o.default.createElement(
												"div",
												{ style: se, className: "rfm-child" },
												e
											);
										})
									),
									oe($ - 1)
								),
								o.default.createElement(
									"div",
									{ className: "rfm-marquee", style: ie },
									oe($)
								)
						  )
						: null;
				});
				t.Z = c;
			},
			6374: function (e, t, n) {
				"use strict";
				var r = n(2791),
					a = Symbol.for("react.element"),
					l = Symbol.for("react.fragment"),
					i = Object.prototype.hasOwnProperty,
					s =
						r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
							.ReactCurrentOwner,
					o = { key: !0, ref: !0, __self: !0, __source: !0 };
				function c(e, t, n) {
					var r,
						l = {},
						c = null,
						u = null;
					for (r in (void 0 !== n && (c = "" + n),
					void 0 !== t.key && (c = "" + t.key),
					void 0 !== t.ref && (u = t.ref),
					t))
						i.call(t, r) && !o.hasOwnProperty(r) && (l[r] = t[r]);
					if (e && e.defaultProps)
						for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
					return {
						$$typeof: a,
						type: e,
						key: c,
						ref: u,
						props: l,
						_owner: s.current,
					};
				}
				(t.Fragment = l), (t.jsx = c), (t.jsxs = c);
			},
			9117: function (e, t) {
				"use strict";
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					a = Symbol.for("react.fragment"),
					l = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					s = Symbol.for("react.provider"),
					o = Symbol.for("react.context"),
					c = Symbol.for("react.forward_ref"),
					u = Symbol.for("react.suspense"),
					d = Symbol.for("react.memo"),
					f = Symbol.for("react.lazy"),
					h = Symbol.iterator;
				var p = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					m = Object.assign,
					x = {};
				function g(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = x),
						(this.updater = n || p);
				}
				function y() {}
				function v(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = x),
						(this.updater = n || p);
				}
				(g.prototype.isReactComponent = {}),
					(g.prototype.setState = function (e, t) {
						if ("object" !== typeof e && "function" !== typeof e && null != e)
							throw Error(
								"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
							);
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(g.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(y.prototype = g.prototype);
				var j = (v.prototype = new y());
				(j.constructor = v), m(j, g.prototype), (j.isPureReactComponent = !0);
				var b = Array.isArray,
					w = Object.prototype.hasOwnProperty,
					S = { current: null },
					N = { key: !0, ref: !0, __self: !0, __source: !0 };
				function k(e, t, r) {
					var a,
						l = {},
						i = null,
						s = null;
					if (null != t)
						for (a in (void 0 !== t.ref && (s = t.ref),
						void 0 !== t.key && (i = "" + t.key),
						t))
							w.call(t, a) && !N.hasOwnProperty(a) && (l[a] = t[a]);
					var o = arguments.length - 2;
					if (1 === o) l.children = r;
					else if (1 < o) {
						for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
						l.children = c;
					}
					if (e && e.defaultProps)
						for (a in (o = e.defaultProps)) void 0 === l[a] && (l[a] = o[a]);
					return {
						$$typeof: n,
						type: e,
						key: i,
						ref: s,
						props: l,
						_owner: S.current,
					};
				}
				function C(e) {
					return "object" === typeof e && null !== e && e.$$typeof === n;
				}
				var E = /\/+/g;
				function T(e, t) {
					return "object" === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { "=": "=0", ":": "=2" };
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function W(e, t, a, l, i) {
					var s = typeof e;
					("undefined" !== s && "boolean" !== s) || (e = null);
					var o = !1;
					if (null === e) o = !0;
					else
						switch (s) {
							case "string":
							case "number":
								o = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case n:
									case r:
										o = !0;
								}
						}
					if (o)
						return (
							(i = i((o = e))),
							(e = "" === l ? "." + T(o, 0) : l),
							b(i)
								? ((a = ""),
								  null != e && (a = e.replace(E, "$&/") + "/"),
								  W(i, t, a, "", function (e) {
										return e;
								  }))
								: null != i &&
								  (C(i) &&
										(i = (function (e, t) {
											return {
												$$typeof: n,
												type: e.type,
												key: t,
												ref: e.ref,
												props: e.props,
												_owner: e._owner,
											};
										})(
											i,
											a +
												(!i.key || (o && o.key === i.key)
													? ""
													: ("" + i.key).replace(E, "$&/") + "/") +
												e
										)),
								  t.push(i)),
							1
						);
					if (((o = 0), (l = "" === l ? "." : l + ":"), b(e)))
						for (var c = 0; c < e.length; c++) {
							var u = l + T((s = e[c]), c);
							o += W(s, t, a, u, i);
						}
					else if (
						((u = (function (e) {
							return null === e || "object" !== typeof e
								? null
								: "function" === typeof (e = (h && e[h]) || e["@@iterator"])
								? e
								: null;
						})(e)),
						"function" === typeof u)
					)
						for (e = u.call(e), c = 0; !(s = e.next()).done; )
							o += W((s = s.value), t, a, (u = l + T(s, c++)), i);
					else if ("object" === s)
						throw (
							((t = String(e)),
							Error(
								"Objects are not valid as a React child (found: " +
									("[object Object]" === t
										? "object with keys {" + Object.keys(e).join(", ") + "}"
										: t) +
									"). If you meant to render a collection of children, use an array instead."
							))
						);
					return o;
				}
				function R(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return (
						W(e, r, "", "", function (e) {
							return t.call(n, e, a++);
						}),
						r
					);
				}
				function I(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var D = { current: null },
					_ = { transition: null },
					P = {
						ReactCurrentDispatcher: D,
						ReactCurrentBatchConfig: _,
						ReactCurrentOwner: S,
					};
				(t.Children = {
					map: R,
					forEach: function (e, t, n) {
						R(
							e,
							function () {
								t.apply(this, arguments);
							},
							n
						);
					},
					count: function (e) {
						var t = 0;
						return (
							R(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							R(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!C(e))
							throw Error(
								"React.Children.only expected to receive a single React element child."
							);
						return e;
					},
				}),
					(t.Component = g),
					(t.Fragment = a),
					(t.Profiler = i),
					(t.PureComponent = v),
					(t.StrictMode = l),
					(t.Suspense = u),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
					(t.cloneElement = function (e, t, r) {
						if (null === e || void 0 === e)
							throw Error(
								"React.cloneElement(...): The argument must be a React element, but you passed " +
									e +
									"."
							);
						var a = m({}, e.props),
							l = e.key,
							i = e.ref,
							s = e._owner;
						if (null != t) {
							if (
								(void 0 !== t.ref && ((i = t.ref), (s = S.current)),
								void 0 !== t.key && (l = "" + t.key),
								e.type && e.type.defaultProps)
							)
								var o = e.type.defaultProps;
							for (c in t)
								w.call(t, c) &&
									!N.hasOwnProperty(c) &&
									(a[c] = void 0 === t[c] && void 0 !== o ? o[c] : t[c]);
						}
						var c = arguments.length - 2;
						if (1 === c) a.children = r;
						else if (1 < c) {
							o = Array(c);
							for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
							a.children = o;
						}
						return {
							$$typeof: n,
							type: e.type,
							key: l,
							ref: i,
							props: a,
							_owner: s,
						};
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: o,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
								_defaultValue: null,
								_globalName: null,
							}).Provider = { $$typeof: s, _context: e }),
							(e.Consumer = e)
						);
					}),
					(t.createElement = k),
					(t.createFactory = function (e) {
						var t = k.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: c, render: e };
					}),
					(t.isValidElement = C),
					(t.lazy = function (e) {
						return {
							$$typeof: f,
							_payload: { _status: -1, _result: e },
							_init: I,
						};
					}),
					(t.memo = function (e, t) {
						return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
					}),
					(t.startTransition = function (e) {
						var t = _.transition;
						_.transition = {};
						try {
							e();
						} finally {
							_.transition = t;
						}
					}),
					(t.unstable_act = function () {
						throw Error(
							"act(...) is not supported in production builds of React."
						);
					}),
					(t.useCallback = function (e, t) {
						return D.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return D.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return D.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return D.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return D.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return D.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return D.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return D.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return D.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return D.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return D.current.useRef(e);
					}),
					(t.useState = function (e) {
						return D.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return D.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return D.current.useTransition();
					}),
					(t.version = "18.2.0");
			},
			2791: function (e, t, n) {
				"use strict";
				e.exports = n(9117);
			},
			184: function (e, t, n) {
				"use strict";
				e.exports = n(6374);
			},
			6813: function (e, t) {
				"use strict";
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							a = e[r];
						if (!(0 < l(a, t))) break e;
						(e[r] = t), (e[n] = a), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
							var s = 2 * (r + 1) - 1,
								o = e[s],
								c = s + 1,
								u = e[c];
							if (0 > l(o, n))
								c < a && 0 > l(u, o)
									? ((e[r] = u), (e[c] = n), (r = c))
									: ((e[r] = o), (e[s] = n), (r = s));
							else {
								if (!(c < a && 0 > l(u, n))) break e;
								(e[r] = u), (e[c] = n), (r = c);
							}
						}
					}
					return t;
				}
				function l(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					"object" === typeof performance &&
					"function" === typeof performance.now
				) {
					var i = performance;
					t.unstable_now = function () {
						return i.now();
					};
				} else {
					var s = Date,
						o = s.now();
					t.unstable_now = function () {
						return s.now() - o;
					};
				}
				var c = [],
					u = [],
					d = 1,
					f = null,
					h = 3,
					p = !1,
					m = !1,
					x = !1,
					g = "function" === typeof setTimeout ? setTimeout : null,
					y = "function" === typeof clearTimeout ? clearTimeout : null,
					v = "undefined" !== typeof setImmediate ? setImmediate : null;
				function j(e) {
					for (var t = r(u); null !== t; ) {
						if (null === t.callback) a(u);
						else {
							if (!(t.startTime <= e)) break;
							a(u), (t.sortIndex = t.expirationTime), n(c, t);
						}
						t = r(u);
					}
				}
				function b(e) {
					if (((x = !1), j(e), !m))
						if (null !== r(c)) (m = !0), _(w);
						else {
							var t = r(u);
							null !== t && P(b, t.startTime - e);
						}
				}
				function w(e, n) {
					(m = !1), x && ((x = !1), y(C), (C = -1)), (p = !0);
					var l = h;
					try {
						for (
							j(n), f = r(c);
							null !== f && (!(f.expirationTime > n) || (e && !W()));

						) {
							var i = f.callback;
							if ("function" === typeof i) {
								(f.callback = null), (h = f.priorityLevel);
								var s = i(f.expirationTime <= n);
								(n = t.unstable_now()),
									"function" === typeof s
										? (f.callback = s)
										: f === r(c) && a(c),
									j(n);
							} else a(c);
							f = r(c);
						}
						if (null !== f) var o = !0;
						else {
							var d = r(u);
							null !== d && P(b, d.startTime - n), (o = !1);
						}
						return o;
					} finally {
						(f = null), (h = l), (p = !1);
					}
				}
				"undefined" !== typeof navigator &&
					void 0 !== navigator.scheduling &&
					void 0 !== navigator.scheduling.isInputPending &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var S,
					N = !1,
					k = null,
					C = -1,
					E = 5,
					T = -1;
				function W() {
					return !(t.unstable_now() - T < E);
				}
				function R() {
					if (null !== k) {
						var e = t.unstable_now();
						T = e;
						var n = !0;
						try {
							n = k(!0, e);
						} finally {
							n ? S() : ((N = !1), (k = null));
						}
					} else N = !1;
				}
				if ("function" === typeof v)
					S = function () {
						v(R);
					};
				else if ("undefined" !== typeof MessageChannel) {
					var I = new MessageChannel(),
						D = I.port2;
					(I.port1.onmessage = R),
						(S = function () {
							D.postMessage(null);
						});
				} else
					S = function () {
						g(R, 0);
					};
				function _(e) {
					(k = e), N || ((N = !0), S());
				}
				function P(e, n) {
					C = g(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						m || p || ((m = !0), _(w));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (E = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return h;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(c);
					}),
					(t.unstable_next = function (e) {
						switch (h) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = h;
						}
						var n = h;
						h = t;
						try {
							return e();
						} finally {
							h = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = h;
						h = e;
						try {
							return t();
						} finally {
							h = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, a, l) {
						var i = t.unstable_now();
						switch (
							("object" === typeof l && null !== l
								? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
								: (l = i),
							e)
						) {
							case 1:
								var s = -1;
								break;
							case 2:
								s = 250;
								break;
							case 5:
								s = 1073741823;
								break;
							case 4:
								s = 1e4;
								break;
							default:
								s = 5e3;
						}
						return (
							(e = {
								id: d++,
								callback: a,
								priorityLevel: e,
								startTime: l,
								expirationTime: (s = l + s),
								sortIndex: -1,
							}),
							l > i
								? ((e.sortIndex = l),
								  n(u, e),
								  null === r(c) &&
										e === r(u) &&
										(x ? (y(C), (C = -1)) : (x = !0), P(b, l - i)))
								: ((e.sortIndex = s), n(c, e), m || p || ((m = !0), _(w))),
							e
						);
					}),
					(t.unstable_shouldYield = W),
					(t.unstable_wrapCallback = function (e) {
						var t = h;
						return function () {
							var n = h;
							h = t;
							try {
								return e.apply(this, arguments);
							} finally {
								h = n;
							}
						};
					});
			},
			5296: function (e, t, n) {
				"use strict";
				e.exports = n(6813);
			},
			3897: function (e) {
				(e.exports = function (e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r;
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			5372: function (e) {
				(e.exports = function (e) {
					if (Array.isArray(e)) return e;
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			3405: function (e, t, n) {
				var r = n(3897);
				(e.exports = function (e) {
					if (Array.isArray(e)) return r(e);
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			8416: function (e, t, n) {
				var r = n(4062);
				(e.exports = function (e, t, n) {
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
					(e.exports.default = e.exports);
			},
			9498: function (e) {
				(e.exports = function (e) {
					if (
						("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
						null != e["@@iterator"]
					)
						return Array.from(e);
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			8872: function (e) {
				(e.exports = function (e, t) {
					var n =
						null == e
							? null
							: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
							  e["@@iterator"];
					if (null != n) {
						var r,
							a,
							l,
							i,
							s = [],
							o = !0,
							c = !1;
						try {
							if (((l = (n = n.call(e)).next), 0 === t)) {
								if (Object(n) !== n) return;
								o = !1;
							} else
								for (
									;
									!(o = (r = l.call(n)).done) &&
									(s.push(r.value), s.length !== t);
									o = !0
								);
						} catch (e) {
							(c = !0), (a = e);
						} finally {
							try {
								if (
									!o &&
									null != n.return &&
									((i = n.return()), Object(i) !== i)
								)
									return;
							} finally {
								if (c) throw a;
							}
						}
						return s;
					}
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			2218: function (e) {
				(e.exports = function () {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			2281: function (e) {
				(e.exports = function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			7424: function (e, t, n) {
				var r = n(5372),
					a = n(8872),
					l = n(6116),
					i = n(2218);
				(e.exports = function (e, t) {
					return r(e) || a(e, t) || l(e, t) || i();
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			861: function (e, t, n) {
				var r = n(3405),
					a = n(9498),
					l = n(6116),
					i = n(2281);
				(e.exports = function (e) {
					return r(e) || a(e) || l(e) || i();
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			5036: function (e, t, n) {
				var r = n(8698).default;
				(e.exports = function (e, t) {
					if ("object" !== r(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var a = n.call(e, t || "default");
						if ("object" !== r(a)) return a;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			4062: function (e, t, n) {
				var r = n(8698).default,
					a = n(5036);
				(e.exports = function (e) {
					var t = a(e, "string");
					return "symbol" === r(t) ? t : String(t);
				}),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			8698: function (e) {
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
				(e.exports = t),
					(e.exports.__esModule = !0),
					(e.exports.default = e.exports);
			},
			6116: function (e, t, n) {
				var r = n(3897);
				(e.exports = function (e, t) {
					if (e) {
						if ("string" === typeof e) return r(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
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
					(e.exports.default = e.exports);
			},
		},
		t = {};
	function n(r) {
		var a = t[r];
		if (void 0 !== a) return a.exports;
		var l = (t[r] = { exports: {} });
		return e[r](l, l.exports, n), l.exports;
	}
	(n.m = e),
		(function () {
			var e,
				t = Object.getPrototypeOf
					? function (e) {
							return Object.getPrototypeOf(e);
					  }
					: function (e) {
							return e.__proto__;
					  };
			n.t = function (r, a) {
				if ((1 & a && (r = this(r)), 8 & a)) return r;
				if ("object" === typeof r && r) {
					if (4 & a && r.__esModule) return r;
					if (16 & a && "function" === typeof r.then) return r;
				}
				var l = Object.create(null);
				n.r(l);
				var i = {};
				e = e || [null, t({}), t([]), t(t)];
				for (
					var s = 2 & a && r;
					"object" == typeof s && !~e.indexOf(s);
					s = t(s)
				)
					Object.getOwnPropertyNames(s).forEach(function (e) {
						i[e] = function () {
							return r[e];
						};
					});
				return (
					(i.default = function () {
						return r;
					}),
					n.d(l, i),
					l
				);
			};
		})(),
		(n.d = function (e, t) {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.f = {}),
		(n.e = function (e) {
			return Promise.all(
				Object.keys(n.f).reduce(function (t, r) {
					return n.f[r](e, t), t;
				}, [])
			);
		}),
		(n.u = function (e) {
			return "static/js/" + e + ".a48fb343.chunk.js";
		}),
		(n.miniCssF = function (e) {}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(function () {
			var e = {},
				t = "iit-project-sw:";
			n.l = function (r, a, l, i) {
				if (e[r]) e[r].push(a);
				else {
					var s, o;
					if (void 0 !== l)
						for (
							var c = document.getElementsByTagName("script"), u = 0;
							u < c.length;
							u++
						) {
							var d = c[u];
							if (
								d.getAttribute("src") == r ||
								d.getAttribute("data-webpack") == t + l
							) {
								s = d;
								break;
							}
						}
					s ||
						((o = !0),
						((s = document.createElement("script")).charset = "utf-8"),
						(s.timeout = 120),
						n.nc && s.setAttribute("nonce", n.nc),
						s.setAttribute("data-webpack", t + l),
						(s.src = r)),
						(e[r] = [a]);
					var f = function (t, n) {
							(s.onerror = s.onload = null), clearTimeout(h);
							var a = e[r];
							if (
								(delete e[r],
								s.parentNode && s.parentNode.removeChild(s),
								a &&
									a.forEach(function (e) {
										return e(n);
									}),
								t)
							)
								return t(n);
						},
						h = setTimeout(
							f.bind(null, void 0, { type: "timeout", target: s }),
							12e4
						);
					(s.onerror = f.bind(null, s.onerror)),
						(s.onload = f.bind(null, s.onload)),
						o && document.head.appendChild(s);
				}
			};
		})(),
		(n.r = function (e) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.p = "/"),
		(function () {
			var e = { 179: 0 };
			n.f.j = function (t, r) {
				var a = n.o(e, t) ? e[t] : void 0;
				if (0 !== a)
					if (a) r.push(a[2]);
					else {
						var l = new Promise(function (n, r) {
							a = e[t] = [n, r];
						});
						r.push((a[2] = l));
						var i = n.p + n.u(t),
							s = new Error();
						n.l(
							i,
							function (r) {
								if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
									var l = r && ("load" === r.type ? "missing" : r.type),
										i = r && r.target && r.target.src;
									(s.message =
										"Loading chunk " + t + " failed.\n(" + l + ": " + i + ")"),
										(s.name = "ChunkLoadError"),
										(s.type = l),
										(s.request = i),
										a[1](s);
								}
							},
							"chunk-" + t,
							t
						);
					}
			};
			var t = function (t, r) {
					var a,
						l,
						i = r[0],
						s = r[1],
						o = r[2],
						c = 0;
					if (
						i.some(function (t) {
							return 0 !== e[t];
						})
					) {
						for (a in s) n.o(s, a) && (n.m[a] = s[a]);
						if (o) o(n);
					}
					for (t && t(r); c < i.length; c++)
						(l = i[c]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
				},
				r = (self.webpackChunkiit_project_sw =
					self.webpackChunkiit_project_sw || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})(),
		(function () {
			"use strict";
			var e,
				t = n(2791),
				r = n.t(t, 2),
				a = n(1250);
			function l(e) {
				if (Array.isArray(e)) return e;
			}
			function i(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function s(e, t) {
				if (e) {
					if ("string" === typeof e) return i(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n
							? Array.from(e)
							: "Arguments" === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? i(e, t)
							: void 0
					);
				}
			}
			function o() {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			}
			function c(e, t) {
				return (
					l(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								l,
								i,
								s = [],
								o = !0,
								c = !1;
							try {
								if (((l = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									o = !1;
								} else
									for (
										;
										!(o = (r = l.call(n)).done) &&
										(s.push(r.value), s.length !== t);
										o = !0
									);
							} catch (e) {
								(c = !0), (a = e);
							} finally {
								try {
									if (
										!o &&
										null != n.return &&
										((i = n.return()), Object(i) !== i)
									)
										return;
								} finally {
									if (c) throw a;
								}
							}
							return s;
						}
					})(e, t) ||
					s(e, t) ||
					o()
				);
			}
			function u(e) {
				if (
					("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
					null != e["@@iterator"]
				)
					return Array.from(e);
			}
			function d(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return i(e);
					})(e) ||
					u(e) ||
					s(e) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function f(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function");
			}
			function h(e) {
				return (
					(h =
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
					h(e)
				);
			}
			function p(e) {
				var t = (function (e, t) {
					if ("object" !== h(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" !== h(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" === h(t) ? t : String(t);
			}
			function m(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						"value" in r && (r.writable = !0),
						Object.defineProperty(e, p(r.key), r);
				}
			}
			function x(e, t, n) {
				return (
					t && m(e.prototype, t),
					n && m(e, n),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					e
				);
			}
			function g(e, t) {
				return (
					(g = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
						  }),
					g(e, t)
				);
			}
			function y(e, t) {
				if ("function" !== typeof t && null !== t)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					t && g(e, t);
			}
			function v(e) {
				return (
					(v = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					v(e)
				);
			}
			function j() {
				if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" === typeof Proxy) return !0;
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					);
				} catch (e) {
					return !1;
				}
			}
			function b(e, t) {
				if (t && ("object" === h(t) || "function" === typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						"Derived constructors may only return object or undefined"
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function w(e) {
				var t = j();
				return function () {
					var n,
						r = v(e);
					if (t) {
						var a = v(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return b(this, n);
				};
			}
			function S(e, t, n) {
				return (
					(S = j()
						? Reflect.construct.bind()
						: function (e, t, n) {
								var r = [null];
								r.push.apply(r, t);
								var a = new (Function.bind.apply(e, r))();
								return n && g(a, n.prototype), a;
						  }),
					S.apply(null, arguments)
				);
			}
			function N(e) {
				var t = "function" === typeof Map ? new Map() : void 0;
				return (
					(N = function (e) {
						if (
							null === e ||
							!(function (e) {
								try {
									return (
										-1 !== Function.toString.call(e).indexOf("[native code]")
									);
								} catch (t) {
									return "function" === typeof e;
								}
							})(e)
						)
							return e;
						if ("function" !== typeof e)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						if ("undefined" !== typeof t) {
							if (t.has(e)) return t.get(e);
							t.set(e, n);
						}
						function n() {
							return S(e, arguments, v(this).constructor);
						}
						return (
							(n.prototype = Object.create(e.prototype, {
								constructor: {
									value: n,
									enumerable: !1,
									writable: !0,
									configurable: !0,
								},
							})),
							g(n, e)
						);
					}),
					N(e)
				);
			}
			function k() {
				return (
					(k = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					k.apply(this, arguments)
				);
			}
			!(function (e) {
				(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
			})(e || (e = {}));
			var C,
				E = "popstate";
			function T(e, t) {
				if (!1 === e || null === e || "undefined" === typeof e)
					throw new Error(t);
			}
			function W(e, t) {
				if (!e) {
					"undefined" !== typeof console && console.warn(t);
					try {
						throw new Error(t);
					} catch (n) {}
				}
			}
			function R(e, t) {
				return { usr: e.state, key: e.key, idx: t };
			}
			function I(e, t, n, r) {
				return (
					void 0 === n && (n = null),
					k(
						{
							pathname: "string" === typeof e ? e : e.pathname,
							search: "",
							hash: "",
						},
						"string" === typeof t ? _(t) : t,
						{
							state: n,
							key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
						}
					)
				);
			}
			function D(e) {
				var t = e.pathname,
					n = void 0 === t ? "/" : t,
					r = e.search,
					a = void 0 === r ? "" : r,
					l = e.hash,
					i = void 0 === l ? "" : l;
				return (
					a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
					i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
					n
				);
			}
			function _(e) {
				var t = {};
				if (e) {
					var n = e.indexOf("#");
					n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
					var r = e.indexOf("?");
					r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
						e && (t.pathname = e);
				}
				return t;
			}
			function P(t, n, r, a) {
				void 0 === a && (a = {});
				var l = a,
					i = l.window,
					s = void 0 === i ? document.defaultView : i,
					o = l.v5Compat,
					c = void 0 !== o && o,
					u = s.history,
					d = e.Pop,
					f = null,
					h = p();
				function p() {
					return (u.state || { idx: null }).idx;
				}
				function m() {
					d = e.Pop;
					var t = p(),
						n = null == t ? null : t - h;
					(h = t), f && f({ action: d, location: g.location, delta: n });
				}
				function x(e) {
					var t =
							"null" !== s.location.origin
								? s.location.origin
								: s.location.href,
						n = "string" === typeof e ? e : D(e);
					return (
						T(
							t,
							"No window.location.(origin|href) available to create URL for href: " +
								n
						),
						new URL(n, t)
					);
				}
				null == h && ((h = 0), u.replaceState(k({}, u.state, { idx: h }), ""));
				var g = {
					get action() {
						return d;
					},
					get location() {
						return t(s, u);
					},
					listen: function (e) {
						if (f)
							throw new Error("A history only accepts one active listener");
						return (
							s.addEventListener(E, m),
							(f = e),
							function () {
								s.removeEventListener(E, m), (f = null);
							}
						);
					},
					createHref: function (e) {
						return n(s, e);
					},
					createURL: x,
					encodeLocation: function (e) {
						var t = x(e);
						return { pathname: t.pathname, search: t.search, hash: t.hash };
					},
					push: function (t, n) {
						d = e.Push;
						var a = I(g.location, t, n);
						r && r(a, t);
						var l = R(a, (h = p() + 1)),
							i = g.createHref(a);
						try {
							u.pushState(l, "", i);
						} catch (o) {
							if (o instanceof DOMException && "DataCloneError" === o.name)
								throw o;
							s.location.assign(i);
						}
						c && f && f({ action: d, location: g.location, delta: 1 });
					},
					replace: function (t, n) {
						d = e.Replace;
						var a = I(g.location, t, n);
						r && r(a, t);
						var l = R(a, (h = p())),
							i = g.createHref(a);
						u.replaceState(l, "", i),
							c && f && f({ action: d, location: g.location, delta: 0 });
					},
					go: function (e) {
						return u.go(e);
					},
				};
				return g;
			}
			!(function (e) {
				(e.data = "data"),
					(e.deferred = "deferred"),
					(e.redirect = "redirect"),
					(e.error = "error");
			})(C || (C = {}));
			new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
			function L(e, t, n) {
				void 0 === n && (n = "/");
				var r = J(("string" === typeof t ? _(t) : t).pathname || "/", n);
				if (null == r) return null;
				var a = M(e);
				!(function (e) {
					e.sort(function (e, t) {
						return e.score !== t.score
							? t.score - e.score
							: (function (e, t) {
									var n =
										e.length === t.length &&
										e.slice(0, -1).every(function (e, n) {
											return e === t[n];
										});
									return n ? e[e.length - 1] - t[t.length - 1] : 0;
							  })(
									e.routesMeta.map(function (e) {
										return e.childrenIndex;
									}),
									t.routesMeta.map(function (e) {
										return e.childrenIndex;
									})
							  );
					});
				})(a);
				for (var l = null, i = 0; null == l && i < a.length; ++i)
					l = G(a[i], Q(r));
				return l;
			}
			function M(e, t, n, r) {
				void 0 === t && (t = []),
					void 0 === n && (n = []),
					void 0 === r && (r = "");
				var a = function (e, a, l) {
					var i = {
						relativePath: void 0 === l ? e.path || "" : l,
						caseSensitive: !0 === e.caseSensitive,
						childrenIndex: a,
						route: e,
					};
					i.relativePath.startsWith("/") &&
						(T(
							i.relativePath.startsWith(r),
							'Absolute route path "' +
								i.relativePath +
								'" nested under path "' +
								r +
								'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
						),
						(i.relativePath = i.relativePath.slice(r.length)));
					var s = X([r, i.relativePath]),
						o = n.concat(i);
					e.children &&
						e.children.length > 0 &&
						(T(
							!0 !== e.index,
							'Index routes must not have child routes. Please remove all child routes from route path "' +
								s +
								'".'
						),
						M(e.children, t, o, s)),
						(null != e.path || e.index) &&
							t.push({ path: s, score: K(s, e.index), routesMeta: o });
				};
				return (
					e.forEach(function (e, t) {
						var n;
						if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
							var r,
								l = (function (e, t) {
									var n =
										("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
										e["@@iterator"];
									if (!n) {
										if (
											Array.isArray(e) ||
											(n = s(e)) ||
											(t && e && "number" === typeof e.length)
										) {
											n && (e = n);
											var r = 0,
												a = function () {};
											return {
												s: a,
												n: function () {
													return r >= e.length
														? { done: !0 }
														: { done: !1, value: e[r++] };
												},
												e: function (e) {
													throw e;
												},
												f: a,
											};
										}
										throw new TypeError(
											"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										);
									}
									var l,
										i = !0,
										o = !1;
									return {
										s: function () {
											n = n.call(e);
										},
										n: function () {
											var e = n.next();
											return (i = e.done), e;
										},
										e: function (e) {
											(o = !0), (l = e);
										},
										f: function () {
											try {
												i || null == n.return || n.return();
											} finally {
												if (o) throw l;
											}
										},
									};
								})(A(e.path));
							try {
								for (l.s(); !(r = l.n()).done; ) {
									var i = r.value;
									a(e, t, i);
								}
							} catch (o) {
								l.e(o);
							} finally {
								l.f();
							}
						} else a(e, t);
					}),
					t
				);
			}
			function A(e) {
				var t = e.split("/");
				if (0 === t.length) return [];
				var n,
					r = l((n = t)) || u(n) || s(n) || o(),
					a = r[0],
					i = r.slice(1),
					c = a.endsWith("?"),
					f = a.replace(/\?$/, "");
				if (0 === i.length) return c ? [f, ""] : [f];
				var h = A(i.join("/")),
					p = [];
				return (
					p.push.apply(
						p,
						d(
							h.map(function (e) {
								return "" === e ? f : [f, e].join("/");
							})
						)
					),
					c && p.push.apply(p, d(h)),
					p.map(function (t) {
						return e.startsWith("/") && "" === t ? "/" : t;
					})
				);
			}
			var O = /^:\w+$/,
				z = 3,
				B = 2,
				F = 1,
				H = 10,
				U = -2,
				V = function (e) {
					return "*" === e;
				};
			function K(e, t) {
				var n = e.split("/"),
					r = n.length;
				return (
					n.some(V) && (r += U),
					t && (r += B),
					n
						.filter(function (e) {
							return !V(e);
						})
						.reduce(function (e, t) {
							return e + (O.test(t) ? z : "" === t ? F : H);
						}, r)
				);
			}
			function G(e, t) {
				for (
					var n = e.routesMeta, r = {}, a = "/", l = [], i = 0;
					i < n.length;
					++i
				) {
					var s = n[i],
						o = i === n.length - 1,
						c = "/" === a ? t : t.slice(a.length) || "/",
						u = $(
							{ path: s.relativePath, caseSensitive: s.caseSensitive, end: o },
							c
						);
					if (!u) return null;
					Object.assign(r, u.params);
					var d = s.route;
					l.push({
						params: r,
						pathname: X([a, u.pathname]),
						pathnameBase: ee(X([a, u.pathnameBase])),
						route: d,
					}),
						"/" !== u.pathnameBase && (a = X([a, u.pathnameBase]));
				}
				return l;
			}
			function $(e, t) {
				"string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
				var n = (function (e, t, n) {
						void 0 === t && (t = !1);
						void 0 === n && (n = !0);
						W(
							"*" === e || !e.endsWith("*") || e.endsWith("/*"),
							'Route path "' +
								e +
								'" will be treated as if it were "' +
								e.replace(/\*$/, "/*") +
								'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
								e.replace(/\*$/, "/*") +
								'".'
						);
						var r = [],
							a =
								"^" +
								e
									.replace(/\/*\*?$/, "")
									.replace(/^\/*/, "/")
									.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
									.replace(/\/:(\w+)(\?)?/g, function (e, t, n) {
										return (
											r.push({ paramName: t, isOptional: null != n }),
											n ? "/?([^\\/]+)?" : "/([^\\/]+)"
										);
									});
						e.endsWith("*")
							? (r.push({ paramName: "*" }),
							  (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
							: n
							? (a += "\\/*$")
							: "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
						var l = new RegExp(a, t ? void 0 : "i");
						return [l, r];
					})(e.path, e.caseSensitive, e.end),
					r = c(n, 2),
					a = r[0],
					l = r[1],
					i = t.match(a);
				if (!i) return null;
				var s = i[0],
					o = s.replace(/(.)\/+$/, "$1"),
					u = i.slice(1);
				return {
					params: l.reduce(function (e, t, n) {
						var r = t.paramName,
							a = t.isOptional;
						if ("*" === r) {
							var l = u[n] || "";
							o = s.slice(0, s.length - l.length).replace(/(.)\/+$/, "$1");
						}
						var i = u[n];
						return (
							(e[r] =
								a && !i
									? void 0
									: (function (e, t) {
											try {
												return decodeURIComponent(e);
											} catch (n) {
												return (
													W(
														!1,
														'The value for the URL param "' +
															t +
															'" will not be decoded because the string "' +
															e +
															'" is a malformed URL segment. This is probably due to a bad percent encoding (' +
															n +
															")."
													),
													e
												);
											}
									  })(i || "", r)),
							e
						);
					}, {}),
					pathname: s,
					pathnameBase: o,
					pattern: e,
				};
			}
			function Q(e) {
				try {
					return decodeURI(e);
				} catch (t) {
					return (
						W(
							!1,
							'The URL path "' +
								e +
								'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
								t +
								")."
						),
						e
					);
				}
			}
			function J(e, t) {
				if ("/" === t) return e;
				if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
				var n = t.endsWith("/") ? t.length - 1 : t.length,
					r = e.charAt(n);
				return r && "/" !== r ? null : e.slice(n) || "/";
			}
			function Y(e, t, n, r) {
				return (
					"Cannot include a '" +
					e +
					"' character in a manually specified `to." +
					t +
					"` field [" +
					JSON.stringify(r) +
					"].  Please separate it out to the `to." +
					n +
					'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
				);
			}
			function q(e) {
				return e.filter(function (e, t) {
					return 0 === t || (e.route.path && e.route.path.length > 0);
				});
			}
			function Z(e, t, n, r) {
				var a;
				void 0 === r && (r = !1),
					"string" === typeof e
						? (a = _(e))
						: (T(
								!(a = k({}, e)).pathname || !a.pathname.includes("?"),
								Y("?", "pathname", "search", a)
						  ),
						  T(
								!a.pathname || !a.pathname.includes("#"),
								Y("#", "pathname", "hash", a)
						  ),
						  T(
								!a.search || !a.search.includes("#"),
								Y("#", "search", "hash", a)
						  ));
				var l,
					i = "" === e || "" === a.pathname,
					s = i ? "/" : a.pathname;
				if (r || null == s) l = n;
				else {
					var o = t.length - 1;
					if (s.startsWith("..")) {
						for (var c = s.split("/"); ".." === c[0]; ) c.shift(), (o -= 1);
						a.pathname = c.join("/");
					}
					l = o >= 0 ? t[o] : "/";
				}
				var u = (function (e, t) {
						void 0 === t && (t = "/");
						var n = "string" === typeof e ? _(e) : e,
							r = n.pathname,
							a = n.search,
							l = void 0 === a ? "" : a,
							i = n.hash,
							s = void 0 === i ? "" : i,
							o = r
								? r.startsWith("/")
									? r
									: (function (e, t) {
											var n = t.replace(/\/+$/, "").split("/");
											return (
												e.split("/").forEach(function (e) {
													".." === e
														? n.length > 1 && n.pop()
														: "." !== e && n.push(e);
												}),
												n.length > 1 ? n.join("/") : "/"
											);
									  })(r, t)
								: t;
						return { pathname: o, search: te(l), hash: ne(s) };
					})(a, l),
					d = s && "/" !== s && s.endsWith("/"),
					f = (i || "." === s) && n.endsWith("/");
				return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
			}
			var X = function (e) {
					return e.join("/").replace(/\/\/+/g, "/");
				},
				ee = function (e) {
					return e.replace(/\/+$/, "").replace(/^\/*/, "/");
				},
				te = function (e) {
					return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
				},
				ne = function (e) {
					return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
				},
				re = (function (e) {
					y(n, e);
					var t = w(n);
					function n() {
						return f(this, n), t.apply(this, arguments);
					}
					return x(n);
				})(N(Error));
			function ae(e) {
				return (
					null != e &&
					"number" === typeof e.status &&
					"string" === typeof e.statusText &&
					"boolean" === typeof e.internal &&
					"data" in e
				);
			}
			var le = ["post", "put", "patch", "delete"],
				ie = (new Set(le), ["get"].concat(le));
			new Set(ie), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
			Symbol("deferred");
			function se() {
				return (
					(se = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					se.apply(this, arguments)
				);
			}
			var oe = t.createContext(null);
			var ce = t.createContext(null);
			var ue = t.createContext(null);
			var de = t.createContext(null);
			var fe = t.createContext(null);
			var he = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
			var pe = t.createContext(null);
			function me() {
				return null != t.useContext(fe);
			}
			function xe() {
				return me() || T(!1), t.useContext(fe).location;
			}
			function ge(e) {
				t.useContext(de).static || t.useLayoutEffect(e);
			}
			function ye() {
				return t.useContext(he).isDataRoute
					? (function () {
							var e = Te(Ce.UseNavigateStable).router,
								n = Re(Ee.UseNavigateStable),
								r = t.useRef(!1);
							return (
								ge(function () {
									r.current = !0;
								}),
								t.useCallback(
									function (t, a) {
										void 0 === a && (a = {}),
											r.current &&
												("number" === typeof t
													? e.navigate(t)
													: e.navigate(t, se({ fromRouteId: n }, a)));
									},
									[e, n]
								)
							);
					  })()
					: (function () {
							me() || T(!1);
							var e = t.useContext(oe),
								n = t.useContext(de),
								r = n.basename,
								a = n.navigator,
								l = t.useContext(he).matches,
								i = xe().pathname,
								s = JSON.stringify(
									q(l).map(function (e) {
										return e.pathnameBase;
									})
								),
								o = t.useRef(!1);
							return (
								ge(function () {
									o.current = !0;
								}),
								t.useCallback(
									function (t, n) {
										if ((void 0 === n && (n = {}), o.current))
											if ("number" !== typeof t) {
												var l = Z(t, JSON.parse(s), i, "path" === n.relative);
												null == e &&
													"/" !== r &&
													(l.pathname =
														"/" === l.pathname ? r : X([r, l.pathname])),
													(n.replace ? a.replace : a.push)(l, n.state, n);
											} else a.go(t);
									},
									[r, a, s, i, e]
								)
							);
					  })();
			}
			function ve(e, n) {
				var r = (void 0 === n ? {} : n).relative,
					a = t.useContext(he).matches,
					l = xe().pathname,
					i = JSON.stringify(
						q(a).map(function (e) {
							return e.pathnameBase;
						})
					);
				return t.useMemo(
					function () {
						return Z(e, JSON.parse(i), l, "path" === r);
					},
					[e, i, l, r]
				);
			}
			function je(n, r, a) {
				me() || T(!1);
				var l,
					i = t.useContext(de).navigator,
					s = t.useContext(he).matches,
					o = s[s.length - 1],
					c = o ? o.params : {},
					u = (o && o.pathname, o ? o.pathnameBase : "/"),
					d = (o && o.route, xe());
				if (r) {
					var f,
						h = "string" === typeof r ? _(r) : r;
					"/" === u ||
						(null == (f = h.pathname) ? void 0 : f.startsWith(u)) ||
						T(!1),
						(l = h);
				} else l = d;
				var p = l.pathname || "/",
					m = L(n, { pathname: "/" === u ? p : p.slice(u.length) || "/" });
				var x = ke(
					m &&
						m.map(function (e) {
							return Object.assign({}, e, {
								params: Object.assign({}, c, e.params),
								pathname: X([
									u,
									i.encodeLocation
										? i.encodeLocation(e.pathname).pathname
										: e.pathname,
								]),
								pathnameBase:
									"/" === e.pathnameBase
										? u
										: X([
												u,
												i.encodeLocation
													? i.encodeLocation(e.pathnameBase).pathname
													: e.pathnameBase,
										  ]),
							});
						}),
					s,
					a
				);
				return r && x
					? t.createElement(
							fe.Provider,
							{
								value: {
									location: se(
										{
											pathname: "/",
											search: "",
											hash: "",
											state: null,
											key: "default",
										},
										l
									),
									navigationType: e.Pop,
								},
							},
							x
					  )
					: x;
			}
			function be() {
				var e = (function () {
						var e,
							n = t.useContext(pe),
							r = We(Ee.UseRouteError),
							a = Re(Ee.UseRouteError);
						if (n) return n;
						return null == (e = r.errors) ? void 0 : e[a];
					})(),
					n = ae(e)
						? e.status + " " + e.statusText
						: e instanceof Error
						? e.message
						: JSON.stringify(e),
					r = e instanceof Error ? e.stack : null,
					a = "rgba(200,200,200, 0.5)",
					l = { padding: "0.5rem", backgroundColor: a };
				return t.createElement(
					t.Fragment,
					null,
					t.createElement("h2", null, "Unexpected Application Error!"),
					t.createElement("h3", { style: { fontStyle: "italic" } }, n),
					r ? t.createElement("pre", { style: l }, r) : null,
					null
				);
			}
			var we = t.createElement(be, null),
				Se = (function (e) {
					y(r, e);
					var n = w(r);
					function r(e) {
						var t;
						return (
							f(this, r),
							((t = n.call(this, e)).state = {
								location: e.location,
								revalidation: e.revalidation,
								error: e.error,
							}),
							t
						);
					}
					return (
						x(
							r,
							[
								{
									key: "componentDidCatch",
									value: function (e, t) {
										console.error(
											"React Router caught the following error during render",
											e,
											t
										);
									},
								},
								{
									key: "render",
									value: function () {
										return this.state.error
											? t.createElement(
													he.Provider,
													{ value: this.props.routeContext },
													t.createElement(pe.Provider, {
														value: this.state.error,
														children: this.props.component,
													})
											  )
											: this.props.children;
									},
								},
							],
							[
								{
									key: "getDerivedStateFromError",
									value: function (e) {
										return { error: e };
									},
								},
								{
									key: "getDerivedStateFromProps",
									value: function (e, t) {
										return t.location !== e.location ||
											("idle" !== t.revalidation && "idle" === e.revalidation)
											? {
													error: e.error,
													location: e.location,
													revalidation: e.revalidation,
											  }
											: {
													error: e.error || t.error,
													location: t.location,
													revalidation: e.revalidation || t.revalidation,
											  };
									},
								},
							]
						),
						r
					);
				})(t.Component);
			function Ne(e) {
				var n = e.routeContext,
					r = e.match,
					a = e.children,
					l = t.useContext(oe);
				return (
					l &&
						l.static &&
						l.staticContext &&
						(r.route.errorElement || r.route.ErrorBoundary) &&
						(l.staticContext._deepestRenderedBoundaryId = r.route.id),
					t.createElement(he.Provider, { value: n }, a)
				);
			}
			function ke(e, n, r) {
				var a;
				if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
					var l;
					if (null == (l = r) || !l.errors) return null;
					e = r.matches;
				}
				var i = e,
					s = null == (a = r) ? void 0 : a.errors;
				if (null != s) {
					var o = i.findIndex(function (e) {
						return e.route.id && (null == s ? void 0 : s[e.route.id]);
					});
					o >= 0 || T(!1), (i = i.slice(0, Math.min(i.length, o + 1)));
				}
				return i.reduceRight(function (e, a, l) {
					var o = a.route.id ? (null == s ? void 0 : s[a.route.id]) : null,
						c = null;
					r && (c = a.route.errorElement || we);
					var u = n.concat(i.slice(0, l + 1)),
						d = function () {
							var n;
							return (
								(n = o
									? c
									: a.route.Component
									? t.createElement(a.route.Component, null)
									: a.route.element
									? a.route.element
									: e),
								t.createElement(Ne, {
									match: a,
									routeContext: {
										outlet: e,
										matches: u,
										isDataRoute: null != r,
									},
									children: n,
								})
							);
						};
					return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === l)
						? t.createElement(Se, {
								location: r.location,
								revalidation: r.revalidation,
								component: c,
								error: o,
								children: d(),
								routeContext: { outlet: null, matches: u, isDataRoute: !0 },
						  })
						: d();
				}, null);
			}
			var Ce = (function (e) {
					return (
						(e.UseBlocker = "useBlocker"),
						(e.UseRevalidator = "useRevalidator"),
						(e.UseNavigateStable = "useNavigate"),
						e
					);
				})(Ce || {}),
				Ee = (function (e) {
					return (
						(e.UseBlocker = "useBlocker"),
						(e.UseLoaderData = "useLoaderData"),
						(e.UseActionData = "useActionData"),
						(e.UseRouteError = "useRouteError"),
						(e.UseNavigation = "useNavigation"),
						(e.UseRouteLoaderData = "useRouteLoaderData"),
						(e.UseMatches = "useMatches"),
						(e.UseRevalidator = "useRevalidator"),
						(e.UseNavigateStable = "useNavigate"),
						(e.UseRouteId = "useRouteId"),
						e
					);
				})(Ee || {});
			function Te(e) {
				var n = t.useContext(oe);
				return n || T(!1), n;
			}
			function We(e) {
				var n = t.useContext(ce);
				return n || T(!1), n;
			}
			function Re(e) {
				var n = (function (e) {
						var n = t.useContext(he);
						return n || T(!1), n;
					})(),
					r = n.matches[n.matches.length - 1];
				return r.route.id || T(!1), r.route.id;
			}
			r.startTransition;
			function Ie(e) {
				T(!1);
			}
			function De(n) {
				var r = n.basename,
					a = void 0 === r ? "/" : r,
					l = n.children,
					i = void 0 === l ? null : l,
					s = n.location,
					o = n.navigationType,
					c = void 0 === o ? e.Pop : o,
					u = n.navigator,
					d = n.static,
					f = void 0 !== d && d;
				me() && T(!1);
				var h = a.replace(/^\/*/, "/"),
					p = t.useMemo(
						function () {
							return { basename: h, navigator: u, static: f };
						},
						[h, u, f]
					);
				"string" === typeof s && (s = _(s));
				var m = s,
					x = m.pathname,
					g = void 0 === x ? "/" : x,
					y = m.search,
					v = void 0 === y ? "" : y,
					j = m.hash,
					b = void 0 === j ? "" : j,
					w = m.state,
					S = void 0 === w ? null : w,
					N = m.key,
					k = void 0 === N ? "default" : N,
					C = t.useMemo(
						function () {
							var e = J(g, h);
							return null == e
								? null
								: {
										location: {
											pathname: e,
											search: v,
											hash: b,
											state: S,
											key: k,
										},
										navigationType: c,
								  };
						},
						[h, g, v, b, S, k, c]
					);
				return null == C
					? null
					: t.createElement(
							de.Provider,
							{ value: p },
							t.createElement(fe.Provider, { children: i, value: C })
					  );
			}
			function _e(e) {
				var t = e.children,
					n = e.location;
				return je(Me(t), n);
			}
			var Pe = (function (e) {
					return (
						(e[(e.pending = 0)] = "pending"),
						(e[(e.success = 1)] = "success"),
						(e[(e.error = 2)] = "error"),
						e
					);
				})(Pe || {}),
				Le = new Promise(function () {});
			t.Component;
			function Me(e, n) {
				void 0 === n && (n = []);
				var r = [];
				return (
					t.Children.forEach(e, function (e, a) {
						if (t.isValidElement(e)) {
							var l = [].concat(d(n), [a]);
							if (e.type !== t.Fragment) {
								e.type !== Ie && T(!1),
									e.props.index && e.props.children && T(!1);
								var i = {
									id: e.props.id || l.join("-"),
									caseSensitive: e.props.caseSensitive,
									element: e.props.element,
									Component: e.props.Component,
									index: e.props.index,
									path: e.props.path,
									loader: e.props.loader,
									action: e.props.action,
									errorElement: e.props.errorElement,
									ErrorBoundary: e.props.ErrorBoundary,
									hasErrorBoundary:
										null != e.props.ErrorBoundary ||
										null != e.props.errorElement,
									shouldRevalidate: e.props.shouldRevalidate,
									handle: e.props.handle,
									lazy: e.props.lazy,
								};
								e.props.children && (i.children = Me(e.props.children, l)),
									r.push(i);
							} else r.push.apply(r, Me(e.props.children, l));
						}
					}),
					r
				);
			}
			function Ae() {
				return (
					(Ae = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					Ae.apply(this, arguments)
				);
			}
			function Oe(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = {},
					l = Object.keys(e);
				for (r = 0; r < l.length; r++)
					(n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
				return a;
			}
			new Set([
				"application/x-www-form-urlencoded",
				"multipart/form-data",
				"text/plain",
			]);
			var ze = [
					"onClick",
					"relative",
					"reloadDocument",
					"replace",
					"state",
					"target",
					"to",
					"preventScrollReset",
					"unstable_viewTransition",
				],
				Be = [
					"aria-current",
					"caseSensitive",
					"className",
					"end",
					"style",
					"to",
					"unstable_viewTransition",
					"children",
				];
			var Fe = t.createContext({ isTransitioning: !1 });
			new Map();
			var He = r.startTransition;
			function Ue(e) {
				var n,
					r = e.basename,
					a = e.children,
					l = e.future,
					i = e.window,
					s = t.useRef();
				null == s.current &&
					(s.current =
						(void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
						P(
							function (e, t) {
								var n = e.location;
								return I(
									"",
									{ pathname: n.pathname, search: n.search, hash: n.hash },
									(t.state && t.state.usr) || null,
									(t.state && t.state.key) || "default"
								);
							},
							function (e, t) {
								return "string" === typeof t ? t : D(t);
							},
							null,
							n
						)));
				var o = s.current,
					u = c(t.useState({ action: o.action, location: o.location }), 2),
					d = u[0],
					f = u[1],
					h = (l || {}).v7_startTransition,
					p = t.useCallback(
						function (e) {
							h && He
								? He(function () {
										return f(e);
								  })
								: f(e);
						},
						[f, h]
					);
				return (
					t.useLayoutEffect(
						function () {
							return o.listen(p);
						},
						[o, p]
					),
					t.createElement(De, {
						basename: r,
						children: a,
						location: d.location,
						navigationType: d.action,
						navigator: o,
					})
				);
			}
			var Ve =
					"undefined" !== typeof window &&
					"undefined" !== typeof window.document &&
					"undefined" !== typeof window.document.createElement,
				Ke = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
				Ge = t.forwardRef(function (e, n) {
					var r,
						a = e.onClick,
						l = e.relative,
						i = e.reloadDocument,
						s = e.replace,
						o = e.state,
						c = e.target,
						u = e.to,
						d = e.preventScrollReset,
						f = e.unstable_viewTransition,
						h = Oe(e, ze),
						p = t.useContext(de).basename,
						m = !1;
					if ("string" === typeof u && Ke.test(u) && ((r = u), Ve))
						try {
							var x = new URL(window.location.href),
								g = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
								y = J(g.pathname, p);
							g.origin === x.origin && null != y
								? (u = y + g.search + g.hash)
								: (m = !0);
						} catch (b) {}
					var v = (function (e, n) {
							var r = (void 0 === n ? {} : n).relative;
							me() || T(!1);
							var a = t.useContext(de),
								l = a.basename,
								i = a.navigator,
								s = ve(e, { relative: r }),
								o = s.hash,
								c = s.pathname,
								u = s.search,
								d = c;
							return (
								"/" !== l && (d = "/" === c ? l : X([l, c])),
								i.createHref({ pathname: d, search: u, hash: o })
							);
						})(u, { relative: l }),
						j = (function (e, n) {
							var r = void 0 === n ? {} : n,
								a = r.target,
								l = r.replace,
								i = r.state,
								s = r.preventScrollReset,
								o = r.relative,
								c = r.unstable_viewTransition,
								u = ye(),
								d = xe(),
								f = ve(e, { relative: o });
							return t.useCallback(
								function (t) {
									if (
										(function (e, t) {
											return (
												0 === e.button &&
												(!t || "_self" === t) &&
												!(function (e) {
													return !!(
														e.metaKey ||
														e.altKey ||
														e.ctrlKey ||
														e.shiftKey
													);
												})(e)
											);
										})(t, a)
									) {
										t.preventDefault();
										var n = void 0 !== l ? l : D(d) === D(f);
										u(e, {
											replace: n,
											state: i,
											preventScrollReset: s,
											relative: o,
											unstable_viewTransition: c,
										});
									}
								},
								[d, u, f, l, i, a, e, s, o, c]
							);
						})(u, {
							replace: s,
							state: o,
							target: c,
							preventScrollReset: d,
							relative: l,
							unstable_viewTransition: f,
						});
					return t.createElement(
						"a",
						Ae({}, h, {
							href: r || v,
							onClick:
								m || i
									? a
									: function (e) {
											a && a(e), e.defaultPrevented || j(e);
									  },
							ref: n,
							target: c,
						})
					);
				});
			var $e = t.forwardRef(function (e, n) {
				var r = e["aria-current"],
					a = void 0 === r ? "page" : r,
					l = e.caseSensitive,
					i = void 0 !== l && l,
					s = e.className,
					o = void 0 === s ? "" : s,
					c = e.end,
					u = void 0 !== c && c,
					d = e.style,
					f = e.to,
					h = e.unstable_viewTransition,
					p = e.children,
					m = Oe(e, Be),
					x = ve(f, { relative: m.relative }),
					g = xe(),
					y = t.useContext(ce),
					v = t.useContext(de).navigator,
					j =
						null != y &&
						(function (e, n) {
							void 0 === n && (n = {});
							var r = t.useContext(Fe);
							null == r && T(!1);
							var a = Ye(Qe.useViewTransitionState).basename,
								l = ve(e, { relative: n.relative });
							if (!r.isTransitioning) return !1;
							var i =
									J(r.currentLocation.pathname, a) ||
									r.currentLocation.pathname,
								s = J(r.nextLocation.pathname, a) || r.nextLocation.pathname;
							return null != $(l.pathname, s) || null != $(l.pathname, i);
						})(x) &&
						!0 === h,
					b = v.encodeLocation ? v.encodeLocation(x).pathname : x.pathname,
					w = g.pathname,
					S =
						y && y.navigation && y.navigation.location
							? y.navigation.location.pathname
							: null;
				i ||
					((w = w.toLowerCase()),
					(S = S ? S.toLowerCase() : null),
					(b = b.toLowerCase()));
				var N,
					k = w === b || (!u && w.startsWith(b) && "/" === w.charAt(b.length)),
					C =
						null != S &&
						(S === b || (!u && S.startsWith(b) && "/" === S.charAt(b.length))),
					E = { isActive: k, isPending: C, isTransitioning: j },
					W = k ? a : void 0;
				N =
					"function" === typeof o
						? o(E)
						: [
								o,
								k ? "active" : null,
								C ? "pending" : null,
								j ? "transitioning" : null,
						  ]
								.filter(Boolean)
								.join(" ");
				var R = "function" === typeof d ? d(E) : d;
				return t.createElement(
					Ge,
					Ae({}, m, {
						"aria-current": W,
						className: N,
						ref: n,
						style: R,
						to: f,
						unstable_viewTransition: h,
					}),
					"function" === typeof p ? p(E) : p
				);
			});
			var Qe, Je;
			function Ye(e) {
				var n = t.useContext(oe);
				return n || T(!1), n;
			}
			(function (e) {
				(e.UseScrollRestoration = "useScrollRestoration"),
					(e.UseSubmit = "useSubmit"),
					(e.UseSubmitFetcher = "useSubmitFetcher"),
					(e.UseFetcher = "useFetcher"),
					(e.useViewTransitionState = "useViewTransitionState");
			})(Qe || (Qe = {})),
				(function (e) {
					(e.UseFetcher = "useFetcher"),
						(e.UseFetchers = "useFetchers"),
						(e.UseScrollRestoration = "useScrollRestoration");
				})(Je || (Je = {}));
			var qe = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0,
				},
				Ze = t.createContext && t.createContext(qe),
				Xe = function () {
					return (
						(Xe =
							Object.assign ||
							function (e) {
								for (var t, n = 1, r = arguments.length; n < r; n++)
									for (var a in (t = arguments[n]))
										Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
								return e;
							}),
						Xe.apply(this, arguments)
					);
				},
				et = function (e, t) {
					var n = {};
					for (var r in e)
						Object.prototype.hasOwnProperty.call(e, r) &&
							t.indexOf(r) < 0 &&
							(n[r] = e[r]);
					if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
							t.indexOf(r[a]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
								(n[r[a]] = e[r[a]]);
					}
					return n;
				};
			function tt(e) {
				return (
					e &&
					e.map(function (e, n) {
						return t.createElement(e.tag, Xe({ key: n }, e.attr), tt(e.child));
					})
				);
			}
			function nt(e) {
				return function (n) {
					return t.createElement(
						rt,
						Xe({ attr: Xe({}, e.attr) }, n),
						tt(e.child)
					);
				};
			}
			function rt(e) {
				var n = function (n) {
					var r,
						a = e.attr,
						l = e.size,
						i = e.title,
						s = et(e, ["attr", "size", "title"]),
						o = l || n.size || "1em";
					return (
						n.className && (r = n.className),
						e.className && (r = (r ? r + " " : "") + e.className),
						t.createElement(
							"svg",
							Xe(
								{
									stroke: "currentColor",
									fill: "currentColor",
									strokeWidth: "0",
								},
								n.attr,
								a,
								s,
								{
									className: r,
									style: Xe(
										Xe({ color: e.color || n.color }, n.style),
										e.style
									),
									height: o,
									width: o,
									xmlns: "http://www.w3.org/2000/svg",
								}
							),
							i && t.createElement("title", null, i),
							e.children
						)
					);
				};
				return void 0 !== Ze
					? t.createElement(Ze.Consumer, null, function (e) {
							return n(e);
					  })
					: n(qe);
			}
			function at(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 32 32" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z",
							},
						},
					],
				})(e);
			}
			function lt(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 32 32" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M 15 3 L 15 5 L 13 5 L 13 7 L 15 7 L 15 9 L 17 9 L 17 7 L 19 7 L 19 5 L 17 5 L 17 3 Z M 6 5 L 6 28 L 15 28 L 15 25 L 17 25 L 17 28 L 26 28 L 26 5 L 21 5 L 21 7 L 24 7 L 24 26 L 19 26 L 19 23 L 13 23 L 13 26 L 8 26 L 8 7 L 11 7 L 11 5 Z M 11 11 L 11 13 L 13 13 L 13 11 Z M 15 11 L 15 13 L 17 13 L 17 11 Z M 19 11 L 19 13 L 21 13 L 21 11 Z M 11 15 L 11 17 L 13 17 L 13 15 Z M 15 15 L 15 17 L 17 17 L 17 15 Z M 19 15 L 19 17 L 21 17 L 21 15 Z M 11 19 L 11 21 L 13 21 L 13 19 Z M 15 19 L 15 21 L 17 21 L 17 19 Z M 19 19 L 19 21 L 21 21 L 21 19 Z",
							},
						},
					],
				})(e);
			}
			function it(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 448 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
							},
						},
					],
				})(e);
			}
			function st(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 15 15", fill: "none" },
					child: [
						{
							tag: "path",
							attr: {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
								fill: "currentColor",
							},
						},
					],
				})(e);
			}
			var ot = n(184),
				ct = function (e) {
					var n = e.children,
						r = c((0, t.useState)("black"), 2),
						a = (r[0], r[1], c((0, t.useState)(!1), 2)),
						l = (a[0], a[1], c((0, t.useState)(!1), 2)),
						i = l[0],
						s = l[1],
						o = c((0, t.useState)(!0), 2),
						u = (o[0], o[1]);
					(0, t.useEffect)(function () {
						window.addEventListener("scroll", function () {
							window.scrollY > 1e3 ? u(!0) : u(!1);
						});
					});
					return (0, ot.jsx)(ot.Fragment, {
						children: (0, ot.jsxs)("div", {
							className: "container",
							children: [
								(0, ot.jsx)("div", {
									className: "sidebar",
									style: { display: i ? "block" : "" },
									children: (0, ot.jsx)("div", {
										style: { color: "white" },
										className: "web-links",
										children: (0, ot.jsxs)("ul", {
											style: { listStyleType: "none" },
											children: [
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4 ",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																children: [
																	" ",
																	(0, ot.jsx)("p", { children: "Home" }),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4 ",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/dean_associate_deans",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", { children: "Dean and " }),
																	" ",
																	(0, ot.jsx)("p", {
																		children: "Associate Deans",
																	}),
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/admnistrative_office",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		children: "Admnistartive Office",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/student_life",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		children: "Students Campus Life",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/hostels",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", { children: "Hostels" }),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/mess_canteen",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		children: "Mess & Canteen",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/gymkhana",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		style: { marginBottom: "10px" },
																		children: "Gymhkana",
																	}),
																	(0, ot.jsx)("p", {
																		style: { fontSize: "1rem" },
																		children: "(Club, Sports, NSS/NCC)",
																	}),
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/wellness",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		style: { marginBottom: "10px" },
																		children: "Wellness",
																	}),
																	(0, ot.jsx)("p", {
																		style: { fontSize: "1rem" },
																		children: "(Health & Counselling Centre)",
																	}),
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "https://www.iitdh.ac.in/details",
														style: {
															display: "flex",
															justifyContent: "space-between",
															color: "white",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		children: "Alumni Association",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/hostel_rules",
														style: {
															display: "flex",
															justifyContent: "space-between",
															color: "white",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		children: "Hostel Rules & Regulations",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/forms",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", { children: "Forms" }),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														paddingBottom: "10px",
													},
													children: (0, ot.jsxs)($e, {
														to: "/hostel-maintenance",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
															paddingBottom: "10px",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	" ",
																	(0, ot.jsx)("p", {
																		children: "Hostel Maintenance Requests",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
												(0, ot.jsx)("li", {
													style: {
														margin: "40px 15px",
														borderBottom: "1px solid #f2f3f4",
														marginBottom: "30px",
													},
													children: (0, ot.jsxs)($e, {
														to: "https://www.iitdh.ac.in/",
														style: {
															display: "flex",
															color: "white",
															justifyContent: "space-between",
															alignItems: "center",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: { fontSize: "1.3rem" },
																children: [
																	(0, ot.jsx)("p", { children: "Main Page" }),
																	"  ",
																],
															}),
															(0, ot.jsx)(at, {}),
														],
													}),
												}),
											],
										}),
									}),
								}),
								(0, ot.jsxs)("div", {
									className: "side-data",
									children: [
										(0, ot.jsx)("div", {
											className: "topbar",
											children: (0, ot.jsxs)("div", {
												className: "top_section",
												children: [
													(0, ot.jsxs)("div", {
														className: "top-info",
														children: [
															(0, ot.jsxs)("div", {
																className: "info1",
																children: [
																	(0, ot.jsx)("img", {
																		src: "https://pbs.twimg.com/profile_images/1677188130636701696/Pju9teoq_400x400.jpg",
																		alt: "",
																		style: {
																			width: "70px",
																			height: "70px",
																			borderRadius: "50%",
																			objectFit: "cover",
																			marginLeft: "20px",
																			marginRight: "20px",
																			cursor: "pointer",
																		},
																	}),
																	(0, ot.jsx)("h1", {
																		className: "logo-1",
																		style: {
																			color: "white",
																			letterSpacing: "2.5px",
																			fontWeight: "600",
																			textAlign: "center",
																		},
																		children: "IIT",
																	}),
																	(0, ot.jsx)("h1", {
																		className: "logo-1",
																		style: {
																			color: "white",
																			letterSpacing: "2.5px",
																			fontWeight: "600",
																			textAlign: "center",
																		},
																		children: "DHARWAD  ",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "info2",
																children: [
																	(0, ot.jsx)("h1", {
																		className: "logo-1",
																		style: {
																			color: "white",
																			letterSpacing: "2.5px",
																			fontWeight: "600",
																			textAlign: "center",
																		},
																		children: "STUDENTS",
																	}),
																	(0, ot.jsx)("h1", {
																		className: "logo-1",
																		style: {
																			color: "white",
																			letterSpacing: "2.5px",
																			fontWeight: "600",
																			textAlign: "center",
																		},
																		children: "WELFARE",
																	}),
																	(0, ot.jsx)("h1", {
																		className: "logo-1",
																		style: {
																			color: "white",
																			letterSpacing: "2.5px",
																			fontWeight: "600",
																			textAlign: "center",
																		},
																		children: "DIVISION",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsx)("div", {
														className: "bars",
														onClick: function () {
															return s(!i);
														},
														children: i
															? (0, ot.jsx)(st, {})
															: (0, ot.jsx)(it, {}),
													}),
												],
											}),
										}),
										(0, ot.jsx)("div", {
											className: "main-data",
											children: (0, ot.jsx)("main", { children: n }),
										}),
										(0, ot.jsx)("div", {
											className: "footer-bar",
											style: { height: "30px" },
											children: (0, ot.jsxs)("p", {
												style: {
													textAlign: "center",
													marginRight: "25%",
													fontSize: "1.2rem",
												},
												children: [
													"You are in internet website. For IIT Dharwad faculty and students ",
													(0, ot.jsx)("a", {
														href: "https://intranet.iitdh.ac.in:444/",
														children: "click here",
													}),
													" to access students welfare intranet website.",
												],
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				ut =
					n.p +
					"static/media/PY Adj Prof - Pradeep_Yammiyavar_0.9bd5d178e05f4aa5be19.jpg",
				dt = n.p + "static/media/Prabhu1 - Prabhu R.0e2dcbdd01624e35107f.jpg",
				ft =
					n.p +
					"static/media/Gopal Parashari Pic - Gopal Sharan Parashari.331b3545cc5001d8dedc.jpg",
				ht = n.p + "static/media/Dr. Prahlad Joshi.fb6521edab30fdf2f992.jpg",
				pt =
					n.p +
					"static/media/ChetanKumarM - Chetan Kumar M.86b7ef2ad6ce79a6b1eb.jpg",
				mt = n.p + "static/media/Janardhan Reddy S.5fb873c9bda08c1e622c.jpg",
				xt = n.p + "static/media/RaviM.e4f4a8f4ab6a6ee2e979.jpg",
				gt =
					n.p + "static/media/Ravi - Ravi Ghalimath.f57a019de7d2d8e2d951.jpg",
				yt = n.p + "static/media/Keerthi Kumar.c5ef00e67a88e8ab0f9a.jpeg",
				vt = n.p + "static/media/Ramesh - Ramesh G.3956e93cc090c93232c7.png",
				jt = n.p + "static/media/amoldiwate.6e50193974acdaead41e.jpg",
				bt = n.p + "static/media/vs prakash.6ea58ae1b3a6706ae2ae.jpg",
				wt =
					n.p +
					"static/media/sudheer_bio - Prof. Sudheer.47eb4c7df42364053520.jpg",
				St =
					n.p +
					"static/media/Ridhima_Photo - Ridhima Tewari.766ad5f1bca5359a83d7.jpg";
			function Nt(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 384 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z",
							},
						},
					],
				})(e);
			}
			function kt(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 448 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
							},
						},
					],
				})(e);
			}
			function Ct(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 384 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z",
							},
						},
					],
				})(e);
			}
			function Et(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 384 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z",
							},
						},
					],
				})(e);
			}
			var Tt = function () {
					var e = c((0, t.useState)(!1), 2),
						n = e[0],
						r = e[1];
					return (
						(0, t.useEffect)(function () {
							window.addEventListener("scroll", function () {
								window.scrollY > 1e3 ? r(!0) : r(!1);
							});
						}),
						(0, ot.jsx)("div", {
							children:
								n &&
								(0, ot.jsx)("button", {
									onClick: function () {
										window.scrollTo({ top: 0, behavior: "smooth" });
									},
									className: "btn-grad",
									style: {
										position: "fixed",
										top: "80%",
										left: "95%",
										height: "50px",
										width: "50px",
										borderRadius: "50%",
										border: "none",
									},
									children: (0, ot.jsx)(Ct, {}),
								}),
						})
					);
				},
				Wt = n.p + "static/media/Tembe.891683b77370f65e0e6c.png",
				Rt = n.p + "static/media/RameshKumar.7ea4b6f6bf97c331d843.png";
			function It() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "student-division-organo",
						children: [
							(0, ot.jsxs)("p", {
								className: "organogram",
								children: [
									(0, ot.jsx)("p", { children: "O" }),
									(0, ot.jsx)("p", { children: "R" }),
									(0, ot.jsx)("p", { children: "G" }),
									(0, ot.jsx)("p", { children: "A" }),
									(0, ot.jsx)("p", { children: "N" }),
									(0, ot.jsx)("p", { children: "O" }),
									(0, ot.jsx)("p", { children: "G" }),
									(0, ot.jsx)("p", { children: "R" }),
									(0, ot.jsx)("p", { children: "M" }),
									(0, ot.jsxs)("div", {
										style: {
											display: "flex",
											flexDirection: "column",
											marginTop: "20px",
										},
										children: [
											(0, ot.jsx)(Nt, {
												style: { marginTop: "10px", color: "#52525b" },
												className: "below-arrow",
											}),
											(0, ot.jsx)(Nt, {
												style: { marginTop: "10px", color: "#52525b" },
												className: "below-arrow",
											}),
										],
									}),
								],
							}),
							(0, ot.jsxs)("div", {
								className: "container-sw",
								children: [
									(0, ot.jsxs)("div", {
										className: "container-sw-1",
										children: [
											(0, ot.jsxs)("div", {
												className: "heading",
												style: {
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													gap: "10px",
												},
												children: [
													(0, ot.jsx)("h4", {
														style: {
															fontSize: "1.7rem",
															fontWeight: "600",
															color: "#313132",
														},
														className: "entity-header",
														children: "STUDENTS  WELFARE  DIVISION",
													}),
													(0, ot.jsx)("h3", {
														style: {
															fontSize: "1.9rem",
															fontWeight: "600",
															color: "#313132",
														},
														className: "entity-header",
														children: "ORGANOGRAM",
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "info-1",
												style: { marginTop: "20px" },
												children: [
													(0, ot.jsx)("img", { src: ut, alt: "" }),
													(0, ot.jsx)("p", {
														children: (0, ot.jsx)("span", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Prof. Pradeep Yammiyavar",
														}),
													}),
													(0, ot.jsx)("h4", {
														style: { fontWeight: "600", color: "#313132" },
														className: "designation",
														children: "Dean, Students Welfare",
													}),
												],
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										className: "associate-deans",
										children: [
											(0, ot.jsxs)("div", {
												className: "associate-dean-1",
												children: [
													(0, ot.jsx)("img", { src: dt, alt: "" }),
													(0, ot.jsx)("p", {
														children: (0, ot.jsx)("span", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Dr. R Prabhu",
														}),
													}),
													(0, ot.jsx)("h4", {
														style: { fontWeight: "600", color: "#313132" },
														className: "designation",
														children: "Associate Dean-Hostels",
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "associate-dean-1",
												children: [
													(0, ot.jsx)("img", { src: ft, alt: "" }),
													(0, ot.jsx)("p", {
														children: (0, ot.jsx)("span", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Dr. Gopal Sharan Parashari",
														}),
													}),
													(0, ot.jsx)("h4", {
														style: { fontWeight: "600", color: "#313132" },
														className: "designation",
														children:
															"Associate Dean-Gymkhana, Sports and Clubs",
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "associate-dean-1",
												children: [
													(0, ot.jsx)("img", { src: St, alt: "" }),
													(0, ot.jsx)("p", {
														children: (0, ot.jsx)("span", {
															style: {
																fontWeight: "600",
																color: "#4338ca",
																textAlign: "center",
															},
															children: "Dr. Ridhima Tewari",
														}),
													}),
													(0, ot.jsx)("h4", {
														style: { fontWeight: "600", color: "#313132" },
														className: "designation",
														children: "Associate Dean -Wellness",
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "associate-dean-1",
												children: [
													(0, ot.jsx)("img", { src: wt, alt: "" }),
													(0, ot.jsx)("p", {
														children: (0, ot.jsx)("span", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Dr. Sudheer Siddapureddy",
														}),
													}),
													(0, ot.jsx)("h4", {
														style: { fontWeight: "600", color: "#313132" },
														className: "designation",
														children: "Associate Dean -Coordination",
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "associate-dean-1",
												children: [
													(0, ot.jsx)("img", { src: ht, alt: "" }),
													(0, ot.jsx)("p", {
														children: (0, ot.jsx)("span", {
															style: {
																fontWeight: "600",
																color: "#4338ca",
																textAlign: "center",
															},
															children: "Group Captain Dr. Prahlad S Joshi",
														}),
													}),
													(0, ot.jsx)("h4", {
														style: { fontWeight: "600", color: "#313132" },
														className: "designation",
														children: "Students Welfare Advisor",
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "associate-dean-1",
												children: [
													(0, ot.jsx)("img", { src: bt, alt: "" }),
													(0, ot.jsx)("p", {
														children: (0, ot.jsx)("span", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Col. V. C. Prakash",
														}),
													}),
													(0, ot.jsx)("h4", {
														style: { fontWeight: "600", color: "#313132" },
														className: "designation",
														children: "Students Welfare Advisor",
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, ot.jsx)("div", {
								className: "student-admin-office-1",
								children: (0, ot.jsxs)("div", {
									className: "student-admin-office",
									style: { borderBottom: "5px solid #86198f" },
									children: [
										(0, ot.jsx)("div", {
											style: {
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												marginBottom: "10px",
											},
											children: (0, ot.jsx)("h3", {
												children: "STUDENTS WELFARE ADMINISTRATION OFFICE",
											}),
										}),
										(0, ot.jsxs)("div", {
											className: "information",
											style: {
												marginTop: "30px",
												display: "flex",
												gap: "50px",
												flexWrap: "wrap",
											},
											children: [
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: Rt,
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
															alt: "",
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	className: "name",
																	children: "Ramesh Kumar Ram",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children:
																		"Assistant Registrar, Students Welfare",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: jt,
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
															alt: "",
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Amol Diwate",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Junior Superintendent",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: pt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Chetan Kumar M",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Junior Assistant",
																}),
																(0, ot.jsx)("h4", {
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: mt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
															className: "janardan",
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "S Janardhan Reddy",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Junior Assistant",
																}),
																(0, ot.jsx)("h4", {
																	children: "Hostel Manager -2",
																}),
																(0, ot.jsx)("h4", {
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: xt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Ravi M",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Hostel Manager -1",
																}),
																(0, ot.jsx)("h4", {
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: gt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Ravi Shivaprakash",
																}),
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Ghalimath",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: yt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Dr Keerthi Kumar M",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: vt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "G Ramesh",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Member Of HCU",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
							}),
							(0, ot.jsxs)("div", {
								className: "hostels",
								style: { borderBottom: "5px solid #86198f" },
								children: [
									(0, ot.jsx)("h3", {
										style: { marginBottom: "30px", fontSize: "1.9rem" },
										children: "HOSTELS",
									}),
									(0, ot.jsx)("h3", { style: {}, children: "WARDENS" }),
									(0, ot.jsx)("div", {
										style: {
											width: "50px",
											height: "3px",
											backgroundColor: "#86198f",
											marginBottom: "20px",
											marginTop: "7px",
										},
									}),
									(0, ot.jsxs)("div", {
										className: "wardens",
										style: { display: "flex", gap: "20px" },
										children: [
											(0, ot.jsxs)("div", {
												className: "warden-1",
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "20px",
												},
												children: [
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Meenatchidevi Murugesan",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, B & C wings Hostel-1,Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. S. Nagaveni",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, B & C wings Hostel-1, Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Surya Pratap Singh",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, A, D, & E wings Hostel-1, Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Santosh Kumar",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, A, D, & E wings Hostel-1, Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Sudhir Kumar Sahoo",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, A, D, & E wings Hostel-1, Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Saroj Mandal",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, A, B, C, D, & E wings,Hostel-2 Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. R. B. Sandeep",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, A, B, C, D, & E wings,Hostel-2 Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Suvamay Jana",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, A, B, C, D, & E wings,Hostel-2 Permanent Campus",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Rakesh Lingam",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 1 (Asavari)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Mohan Rao Balaga",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 1 (Asavari)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Dhriti Ranjan Dolai",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 2 (Bhairavi)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Satyapriya Gupta",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 2 (Bhairavi)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Dhriti Ranjan Dolai",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 3 (Abheri)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Satyapriya Gupta",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 3 (Abheri)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Rahul J Pandya",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 4 (Behag)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Surya Prakash R",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 7 (Durga)",
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "warden-2",
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "20px",
												},
												children: [
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Jolly  Thomas",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 4 (Behag)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Rahul J Pandya",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 8 (Kedar)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Jolly  Thomas",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 8 (Kedar)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Dhriti Ranjan  Dolai",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 9 (Khamaj)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Satyapriya Gupta",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 9 (Khamaj)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Rahul J Pandya",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 10 (Hindol)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Jolly  Thomas",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, Hostel 10 (Hindol)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Aniket V Kataware",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, T-7 Hostel 3 (Amritavarshini)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Nilkamal Mahanta",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Warden, T-7 Hostel 3 (Amritavarshini)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Rahul J Pandya",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 4 (Kalawati)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Jolly  Thomas",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 4 (Kalawati)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Aniket V Kataware",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 5 (Darbar)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Nilkamal Mahanta",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 5 (Darbar)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Aniket V Kataware",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 6 (Surya)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Nilkamal Mahanta",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 6 (Surya)",
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "warden-3",
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "20px",
												},
												children: [
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Dhriti Ranjan  Dolai",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 8 (Bageshri)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Satyapriya Gupta",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 8 (Bageshri)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "_",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 9 (Kafi)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Aniket V Kataware",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 10 (Todi)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Nilkamal Mahanta",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 10 (Todi)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Ruma Ghosh",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, 5 Hostel 5 (Chayyanat)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Gayatri Ananthanarayanan",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, 5 Hostel 5 (Chayyanat)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Kavita Devi",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, 5 Hostel 5 (Chayyanat)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children:
																	"Dr. Ridhima Tewari -1,Permanent Campus",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-5 Hostel 6 (Saveri)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Surya Prakash R",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-5 Hostel 6 (Saveri)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Ruma Ghosh",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-5 Hostel 7 (Hamsadhwani)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Gayatri Ananthanarayanan",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-5 Hostel 7 (Hamsadhwani)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Kavita Devi",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-5 Hostel 7 (Hamsadhwani)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr.  Ridhima Tewari",
															}),
															(0, ot.jsx)("h4", {
																children: "Warden, T-7 Hostel 7 (Durga)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Prabhuchandran K.J",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Mess Warden, Bhoopali Mess and Permanent Campus Mess",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "row-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Ramchandra Phawade",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Mess Warden, Bhoopali Mess and Permanent Campus Mess",
															}),
														],
													}),
												],
											}),
										],
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsxs)("div", {
										className: "hco-info",
										style: {
											marginTop: "20px",
											display: "flex",
											gap: "20px",
											flexDirection: "column",
										},
										children: [
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														children: "HOSTELS CO-ORDINATING UNIT",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "3px",
															backgroundColor: "#86198f",
															marginTop: "7px",
														},
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "information",
												style: {
													marginTop: "20px",
													display: "flex",
													gap: "50px",
													flexWrap: "wrap",
												},
												children: [
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: gt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ravi Shivaprakash",
																	}),
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ghalimath",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: yt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr Keerthi Kumar M",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: vt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "G Ramesh",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: jt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Amol Diwate",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Junior Superintendent",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: pt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Chetan Kumar M",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Junior Assistant",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: mt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "S Janardhan Reddy",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Junior Assistant",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Hostel Manager -2",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: xt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ravi M",
																	}),
																	(0, ot.jsx)("h4", {
																		style: { marginTop: "5px" },
																		children: "Hostel Manager -1",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsxs)("div", {
										className: "faculty-in",
										children: [
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														style: { marginTop: "25px" },
														children: "FACULTY-IN-CHARGE, Hostels",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "1px",
															backgroundColor: "#86198f",
															marginTop: "7px",
														},
													}),
												],
											}),
											(0, ot.jsx)("div", {
												style: {
													width: "50px",
													height: "3px",
													backgroundColor: "#86198f",
													marginBottom: "20px",
												},
											}),
											(0, ot.jsxs)("div", {
												className: "faculty-in-hostel",
												style: {
													display: "flex",
													gap: "50px",
													flexWrap: "wrap",
												},
												children: [
													(0, ot.jsxs)("div", {
														className: "f-c-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Rakesh Lingam ",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Faculty-In-Charge, Students Welfare (Hostel Affairs)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "f-c-1",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Mohana Rao Balaga",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Faculty-In-Charge, Students Welfare (Hostel Affairs)",
															}),
														],
													}),
												],
											}),
										],
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsxs)("div", {
										className: "mess-committe",
										style: {
											display: "flex",
											flexDirection: "column",
											marginTop: "30px",
											marginBottom: "30px",
										},
										children: [
											(0, ot.jsxs)("div", {
												style: { display: "flex", gap: "20px" },
												children: [
													(0, ot.jsxs)("div", {
														className: "bopali-mess",
														children: [
															(0, ot.jsx)("h3", {
																style: { marginBottom: "20px" },
																children: "FACULTY-IN-CHARGE, Bhoopali Mess",
															}),
															(0, ot.jsx)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	gap: "10px",
																},
																children: (0, ot.jsx)("div", {
																	children: (0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Dr. Ramchandra Phawade",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Faculty-In-Charge, Bhoopali Mess",
																			}),
																		],
																	}),
																}),
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "mess-pc",
														children: [
															(0, ot.jsx)("h3", {
																style: { marginBottom: "20px" },
																children:
																	"FACULTY-IN-CHARGE, Mess & Canteen -Permanent Campus",
															}),
															(0, ot.jsx)("div", {
																children: (0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Dr. Prabhuchandran KJ",
																		}),
																		(0, ot.jsx)("h4", {
																			children:
																				"Faculty-In-Charge, Mess Permanent Campus",
																		}),
																	],
																}),
															}),
														],
													}),
												],
											}),
											(0, ot.jsx)("hr", {}),
											(0, ot.jsx)("div", {
												style: {
													display: "flex",
													marginTop: "20px",
													marginBottom: "20px",
												},
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										className: "general-secre",
										children: [
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														style: { marginBottom: "6px" },
														children: "GENERAL SECRETARIES, Hostels",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "3px",
															backgroundColor: "#86198f",
															marginTop: "7px",
															marginBottom: "18px",
														},
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "general-secre-hostel",
												style: {
													display: "flex",
													gap: "50px",
													flexWrap: "wrap",
												},
												children: [
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Lokesh B Jogi",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"General Secretary of Hostel Affairs",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Trimukhe Aryan Dhananjay",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"General Secretary of Mess Affairs",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Vivek Sharma",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Junior General Secretary of Hostel Affairs",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Harshit Verma ",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "1st floor Hostel secretary",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Vikas Jain Sai ",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "3rd Floor Hostel Secretary",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Oganja Harsh Bharat",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Junior General Secretary of Mess Affairs",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ms. Katageri Anjali Gangadhar",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Girls floor hostel secretary",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Krutay Jitesh Upadhyay",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Ground floor Hostel secretary",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mr. Shivam Sharma ",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "2nd floor Hostel Secretary",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, ot.jsx)(Tt, {}),
							(0, ot.jsxs)("div", {
								className: "gymkhana",
								style: { borderBottom: "5px solid #86198f" },
								children: [
									(0, ot.jsx)("h3", {
										style: { marginBottom: "20px", fontSize: "1.7rem" },
										children: "GYMKHANA",
									}),
									(0, ot.jsxs)("div", {
										className: "faculty-in-gymhkana",
										children: [
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														style: { marginTop: "25px" },
														children: "FACULTY-IN-CHARGE, Gymkhana",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "3.4px",
															backgroundColor: "#86198f",
															marginTop: "7px",
															marginBottom: "18px",
														},
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "general-secre-hostel",
												style: {
													display: "flex",
													gap: "50px",
													flexWrap: "wrap",
												},
												children: [
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr. Rajeswara Rao M",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr. Vigneshwara Raja P",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr. Kavita Devi",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr. Surya Prakash Ramesh",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Faculty-In-Charge, Students Welfare (Culture & Events & Technical)",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr. Nagaveni S",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Faculty-In-Charge, Students Welfare (Culture & Events & Technical)",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsxs)("div", {
										children: [
											(0, ot.jsx)("h3", {
												style: { marginTop: "20px" },
												children: "ASSISTANT SPORTS OFFICERS",
											}),
											(0, ot.jsx)("div", {
												style: {
													width: "50px",
													height: "3.4px",
													backgroundColor: "#86198f",
													marginTop: "7px",
													marginBottom: "18px",
												},
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										className: "information",
										style: {
											marginTop: "20px",
											display: "flex",
											gap: "50px",
											flexWrap: "wrap",
										},
										children: [
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "20px",
												},
												children: [
													(0, ot.jsx)("img", {
														src: gt,
														alt: "",
														style: {
															height: "100px",
															width: "100px",
															borderRadius: "50%",
														},
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															alignItems: "center",
															gap: "1.5px",
														},
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Ravi Shivaprakash",
															}),
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Ghalimath",
															}),
															(0, ot.jsx)("h4", {
																style: { marginTop: "5px" },
																children: "Assistant Sports Officer",
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "20px",
												},
												children: [
													(0, ot.jsx)("img", {
														src: yt,
														alt: "",
														style: {
															height: "100px",
															width: "100px",
															borderRadius: "50%",
														},
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															alignItems: "center",
															gap: "1.5px",
														},
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr Keerthi Kumar M",
															}),
															(0, ot.jsx)("h4", {
																style: { marginTop: "5px" },
																children: "Assistant Sports Officer",
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "20px",
												},
												children: [
													(0, ot.jsx)("img", {
														src: vt,
														alt: "assistan officer",
														style: {
															height: "100px",
															width: "100px",
															borderRadius: "50%",
														},
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															alignItems: "center",
															gap: "1.5px",
														},
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "G Ramesh",
															}),
															(0, ot.jsx)("h4", {
																style: { marginTop: "5px" },
																children: "Assistant Sports Officer",
															}),
														],
													}),
												],
											}),
										],
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsxs)("div", {
										className: "sports-section",
										children: [
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														style: { marginTop: "25px" },
														children: "CLUB SECRETARIES -Gymkhana",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "3.4px",
															backgroundColor: "#86198f",
															marginTop: "7px",
															marginBottom: "18px",
														},
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "secrataries",
												style: { display: "flex", gap: "50px" },
												children: [
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("h3", {
																style: {
																	marginTop: "25px",
																	marginBottom: "20px",
																},
																children: "TECH CLUB SECRETARIES, Gymkhana",
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Nirmit Arora",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Tech Club Secretary, AI",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Abhiram K ",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Tech Club Secretary, Space Data Science",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Om Sanjaykumar Patil",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Tech Club Secretary, Robotics",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Shubh Agarwal",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Tech Club Secretary, Coding",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "sports-club",
														children: [
															(0, ot.jsx)("h3", {
																style: {
																	marginTop: "25px",
																	marginBottom: "20px",
																},
																children: "SPORTS CLUB SECRETARIES, Gymkhana",
															}),
															(0, ot.jsxs)("div", {
																style: { display: "flex", gap: "20px" },
																children: [
																	(0, ot.jsxs)("div", {
																		style: {
																			display: "flex",
																			flexDirection: "column",
																			gap: "20px",
																		},
																		children: [
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Vikas Kumawat",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Yoga ",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Krisha K ",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Athletics",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Naga Ayushmaan Betapudi",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Badminton",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Siddharth Wala ",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Basketball",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Bharath Chndra Borella",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Chess",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Ashok Dhyavana ",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Weightlifting",
																					}),
																				],
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		style: {
																			display: "flex",
																			flexDirection: "column",
																			gap: "20px",
																		},
																		children: [
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Rajat Lavekar",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Cricket",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Sadock Chakma",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, E- Sports ",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Manindra Singh Rathore",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Football",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Atharv Gade",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Table Tennis",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Ansh Vivek",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Tennis ",
																					}),
																				],
																			}),
																			(0, ot.jsxs)("div", {
																				className: "g-s",
																				children: [
																					(0, ot.jsx)("p", {
																						style: {
																							fontWeight: "600",
																							color: "#4338ca",
																						},
																						children: "Neeli Deekshith ",
																					}),
																					(0, ot.jsx)("h4", {
																						children:
																							"Sports Club Secretary, Volleyball ",
																					}),
																				],
																			}),
																		],
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
									(0, ot.jsx)("div", {
										className: "sports-section",
										children: (0, ot.jsx)("div", {
											className: "secrataries",
											style: { display: "flex", gap: "50px" },
											children: (0, ot.jsxs)("div", {
												className: "sports-club",
												children: [
													(0, ot.jsx)("h3", {
														style: { marginTop: "25px", marginBottom: "20px" },
														children: "CULTURE CLUB SECRETARIES, Gymkhana",
													}),
													(0, ot.jsxs)("div", {
														style: { display: "flex", gap: "20px" },
														children: [
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	gap: "20px",
																},
																children: [
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Eluri Harshita",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Dance",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Muktesh Singh Rathor",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Dramatics",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Suharsh Agrawal",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, EBSB",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Soumya Rank",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Fine Arts",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Smriti Jha",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Literary",
																			}),
																		],
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	gap: "20px",
																},
																children: [
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Altmash Sheikh",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Music",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Kushal Prabhakar",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Photography",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Jatin Lather",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Quiz",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Ajith Kumar Pogu",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Prabodhini",
																			}),
																		],
																	}),
																	(0, ot.jsxs)("div", {
																		className: "g-s",
																		children: [
																			(0, ot.jsx)("p", {
																				style: {
																					fontWeight: "600",
																					color: "#4338ca",
																				},
																				children: "Gurvir Singh ",
																			}),
																			(0, ot.jsx)("h4", {
																				children:
																					"Culture Club Secretary, Finance ",
																			}),
																		],
																	}),
																],
															}),
														],
													}),
												],
											}),
										}),
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsxs)("div", {
										className: "nso",
										children: [
											(0, ot.jsx)("h3", {
												style: { marginTop: "25px", marginBottom: "20px" },
												children: "NSO/NSS/NCC",
											}),
											(0, ot.jsxs)("div", {
												className: "g-s",
												children: [
													(0, ot.jsx)("p", {
														style: { fontWeight: "600", color: "#4338ca" },
														children: "Dr. Keerthi Kumar M",
													}),
													(0, ot.jsx)("h4", {
														children: "Officer-In-Charge, (NSO/NSS/NCC)",
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, ot.jsxs)("div", {
								className: "wellness",
								style: { borderBottom: "5px solid #86198f" },
								children: [
									(0, ot.jsx)("h3", {
										style: { marginBottom: "20px", fontSize: "1.7rem" },
										children: "WELLNESS",
									}),
									(0, ot.jsx)("h3", {
										style: { marginBottom: "20px" },
										children: "HEALTH CENTER",
									}),
									(0, ot.jsxs)("div", {
										children: [
											(0, ot.jsx)("h3", {
												style: { marginTop: "20px" },
												children: "FACULTY-IN-CHARGE, Health",
											}),
											(0, ot.jsx)("div", {
												style: {
													width: "50px",
													height: "3.4px",
													backgroundColor: "#86198f",
													marginTop: "7px",
													marginBottom: "18px",
												},
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										style: { display: "flex", gap: "330px" },
										children: [
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "20px",
												},
												children: [
													(0, ot.jsxs)("div", {
														className: "g-s",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Satish Naik B",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Faculty-In-Charge, Students Welfare (Health and Ambulance)",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "g-s",
														children: [
															(0, ot.jsx)("p", {
																style: { fontWeight: "600", color: "#4338ca" },
																children: "Dr. Shreedevi K Masuti",
															}),
															(0, ot.jsx)("h4", {
																children:
																	"Faculty-In-Charge, Students Welfare (Health and Ambulance)",
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "ambulance",
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "10px",
													border: "2px solid red",
													padding: "10px",
												},
												children: [
													(0, ot.jsx)("h3", {
														style: { color: "red" },
														children: "Ambulance",
													}),
													(0, ot.jsx)("h4", {
														style: { color: "red" },
														children: "Mob 8105405107",
													}),
												],
											}),
										],
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsx)("h3", {
										style: { marginBottom: "20px", marginTop: "20px" },
										children: "COUNSELLING CENTER",
									}),
									(0, ot.jsxs)("div", {
										children: [
											(0, ot.jsx)("h3", {
												style: { marginTop: "20px" },
												children: "FACULTY-IN-CHARGE, Counselling",
											}),
											(0, ot.jsx)("div", {
												style: {
													width: "50px",
													height: "3.4px",
													backgroundColor: "#86198f",
													marginTop: "7px",
													marginBottom: "18px",
												},
											}),
										],
									}),
									(0, ot.jsx)("div", {
										style: { display: "flex", gap: "50px" },
										children: (0, ot.jsxs)("div", {
											style: {
												display: "flex",
												flexDirection: "column",
												gap: "20px",
											},
											children: [
												(0, ot.jsxs)("div", {
													className: "g-s",
													children: [
														(0, ot.jsx)("p", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Prof. Pradeep Yammiyavar",
														}),
														(0, ot.jsx)("h4", {
															children:
																"Faculty-In-Charge, Students Welfare (Wellness Counselling)",
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													className: "g-s",
													children: [
														(0, ot.jsx)("p", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Dr. Rajshekar. K",
														}),
														(0, ot.jsx)("h4", {
															children:
																"Faculty-In-Charge, Students Welfare (Wellness Counselling)",
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													className: "g-s",
													children: [
														(0, ot.jsx)("p", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Dr. Deepti Kalsi",
														}),
														(0, ot.jsx)("h4", {
															children:
																"Faculty-In-Charge, Students Welfare (Wellness Counselling)",
														}),
													],
												}),
											],
										}),
									}),
									(0, ot.jsx)("hr", {}),
									(0, ot.jsxs)("div", {
										children: [
											(0, ot.jsx)("h3", {
												style: { marginBottom: "20px", marginTop: "20px" },
												children: "STUDENTS MENTORSHIP",
											}),
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														style: { marginTop: "20px" },
														children: "FACULTY-IN-CHARGE, Mentorship",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "3.4px",
															backgroundColor: "#86198f",
															marginTop: "7px",
															marginBottom: "18px",
														},
													}),
												],
											}),
											(0, ot.jsx)("div", {
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "20px",
												},
												children: (0, ot.jsxs)("div", {
													className: "g-s",
													children: [
														(0, ot.jsx)("p", {
															style: { fontWeight: "600", color: "#4338ca" },
															children: "Dr. Rahul Jashvantbhai Pandya",
														}),
														(0, ot.jsx)("h4", {
															children: "Faculty-In-Charge, Mentorship",
														}),
													],
												}),
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										children: [
											(0, ot.jsx)("h3", {
												style: { marginBottom: "20px", marginTop: "30px" },
												children: "STUDENT MENTORS",
											}),
											(0, ot.jsxs)("div", {
												style: { display: "flex", gap: "20px" },
												children: [
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Varad Kamtekar",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Student Mentor Co-ordinator",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Agrim Jain",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Assistant Student Mentor Co-ordinator",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Suharsh Agrawal",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ayush Mallick",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Yash Sandip Gholkar",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Sachin Kumar",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Assistant Student Mentor Co-ordinator",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dantuluri Mahima",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Assistant Student Mentor Co-ordinator",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Deekshith Kumar",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Assistant Student Mentor Co-ordinator",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ameya Langer",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Prachi Prasoon",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Neha Rajendrakumar Gaonkar",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Vivek Sharma",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Mann Maru",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Om Nilesh Nakrani",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Vineeta nihalani",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Vedant Patwardhan",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Nipun Gupta",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Vedansh Chaudhary",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Anjali Katageri",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Pranav Kumar Pandey",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Prajwal Biradar",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Assistant Student Mentor Co-ordinator",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "N Soumya",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Rohit Garg",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Prabhav patel",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Nishant Shailesh Mehta",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Adarsh Gupta",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Samarth Chitnis",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Aman Patidar",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Krunal Patel",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Arpan Sahu",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Jai Sharma",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Aayush Vats",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Atharva Tijare",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Amogh R",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Vatista Kachroo",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Sai Dhruthi K V L",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Soumya Ranjan Sahoo",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Shivain Anandl",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Tanvi Nayak",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Sanjana Mittapally",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Assistant Student Mentor Coordinator",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Velivela Mohith Naga Sai",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "M Vishnu Charan",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Surya Narayan Upadhyay",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Sarthak Chaturvedi",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dhruv Pani Chandra",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Omkar Kulkarni",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Priyanshu Mishra",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Prabhanshu Kumar Jha",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Prakriti Tripathi",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Luv Shanker",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Aryan Bandaru",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Gaurav Singhal",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Kulkarni Atharva Suresh",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Gurjaipal Singh",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ratish Sinha",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Utkarsh Gupta",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Shubham Raj",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Ramank sharma",
																	}),
																	(0, ot.jsx)("h4", {
																		children: "Institute Student Mentor",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, ot.jsxs)("div", {
								className: "alumni",
								style: { borderBottom: "5px solid #86198f" },
								children: [
									(0, ot.jsx)("h3", {
										style: { marginBottom: "20px", fontSize: "1.6rem" },
										children: "ALUMNI ASSOCIATION",
									}),
									(0, ot.jsxs)("div", {
										children: [
											(0, ot.jsx)("h3", {
												style: {},
												children: "FACULTY-IN-CHARGE, Alumni Activities",
											}),
											(0, ot.jsx)("div", {
												style: {
													width: "50px",
													height: "3.4px",
													backgroundColor: "#86198f",
													marginTop: "7px",
													marginBottom: "18px",
												},
											}),
										],
									}),
									(0, ot.jsx)("div", {
										children: (0, ot.jsxs)("div", {
											className: "g-s",
											children: [
												(0, ot.jsx)("p", {
													style: { fontWeight: "600", color: "#4338ca" },
													children: "Dr. Hiranya Deka",
												}),
												(0, ot.jsx)("h4", {
													children: "Faculty-In-Charge, Alumni activities",
												}),
											],
										}),
									}),
									(0, ot.jsx)("div", {
										children: (0, ot.jsxs)("div", {
											className: "g-s",
											style: { marginTop: "20px" },
											children: [
												(0, ot.jsx)("p", {
													style: { fontWeight: "600", color: "#4338ca" },
													children: "Kunal Kumar",
												}),
												(0, ot.jsx)("h4", { children: "President" }),
											],
										}),
									}),
								],
							}),
							(0, ot.jsx)("p", {
								style: {
									marginTop: "20px",
									marginLeft: "10px",
									fontSize: "1.5rem",
									fontWeight: "600",
								},
								children: "Former Deans -Student Welfare Division",
							}),
							(0, ot.jsx)("div", {
								className: "dean",
								style: {
									marginTop: "30px",
									backgroundColor: "#fae8ff",
									width: "420px",
								},
								children: (0, ot.jsxs)("div", {
									className: "first-info",
									style: {
										display: "flex",
										gap: "6px",
										alignItems: "center",
										flexDirection: "column",
										padding: "15px",
									},
									children: [
										(0, ot.jsx)("img", { src: Wt, alt: "" }),
										(0, ot.jsx)("p", {
											style: { color: "#4338ca" },
											className: "name",
											children: "Prof. B.L.Tembe ",
										}),
										(0, ot.jsx)("p", {
											style: { color: "rgb(51, 72, 120)" },
											className: "designation",
											children: "May 2019 - June 2023",
										}),
									],
								}),
							}),
							(0, ot.jsx)($e, {
								to: "/dean_associate_deans",
								children: (0, ot.jsxs)("div", {
									className: "link-class",
									style: {
										backgroundColor: "#fecaca",
										float: "left",
										borderRadius: "5px",
										padding: "5px",
										display: "flex",
										fontSize: "1.4rem",
										margin: "20px",
										alignItems: "center",
										color: "",
										justifyContent: "center",
										width: "100px",
									},
									children: [
										(0, ot.jsx)(kt, {}),
										(0, ot.jsx)("p", {
											style: { padding: "10px 5px 10px 5px" },
											children: "Back",
										}),
									],
								}),
							}),
						],
					}),
				});
			}
			function Dt() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsx)("div", {
						className: "sw-division-office",
						children: (0, ot.jsxs)("div", {
							className: "sw-division-office-1",
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "20px",
								flexWrap: "wrap",
							},
							children: [
								(0, ot.jsxs)("div", {
									className: "wrapper",
									style: {
										display: "flex",
										gap: "20px",
										alignItems: "center",
										justifyContent: "center",
										flexWrap: "wrap",
									},
									children: [
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsxs)("div", {
												className: "first-info",
												style: {
													display: "flex",
													gap: "6px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: [
													(0, ot.jsx)("img", { src: ut, alt: "" }),
													(0, ot.jsxs)("a", {
														href: "https://iitdh-my.sharepoint.com/:w:/g/personal/pradeepyammi_iitdh_ac_in/ETk5ATyitbNGsH3bi7wF4UIB_esJbA4yfOgWmWxwP1dr7Q?rtime=H4caIQHb20g",
														children: [
															" ",
															(0, ot.jsx)("p", {
																className: "name",
																style: { color: "#4338ca" },
																children: "Prof. Pradeep Yammiyavar",
															}),
														],
													}),
													(0, ot.jsx)("p", {
														className: "designation",
														style: {
															color: "rgb(51, 72, 120)",
															fontWeight: "600",
														},
														children: "Dean, Students Welfare",
													}),
													(0, ot.jsxs)("p", {
														className: "about-des",
														style: { textAlign: "center" },
														children: [
															"The Dean of",
															(0, ot.jsx)("span", {
																style: { fontWeight: "600" },
																children: " Students Welfare",
															}),
															"  is responsible to the Director on all maters related to Students Welfare. The Dean is assisted by a team of Associate Deans & Officers.",
														],
													}),
												],
											}),
										}),
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsx)("div", {
												className: "first-info",
												style: {
													display: "flex",
													flex: "1",
													gap: "6px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: (0, ot.jsxs)("div", {
													className: "sw-organo-division",
													style: {
														display: "flex",
														flexDirection: "column",
														padding: "30px",
														gap: "5px",
														alignItems: "center",
														justifyContent: "center",
													},
													children: [
														(0, ot.jsxs)($e, {
															to: "/sw_division_organogram",
															className: "link-class",
															style: {
																backgroundColor: "#f5f5f5",
																padding: "30px",
																width: "50px",
																height: "50px",
																borderRadius: "50%",
																textAlign: "center",
																border: "1px solid #a21caf",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		color: "#a21caf",
																		marginTop: "10px",
																	},
																	className: "click-here",
																	children: "Click",
																}),
																(0, ot.jsx)("p", {
																	style: {
																		color: "#a21caf",
																		marginTop: "10px",
																	},
																	className: "click-here",
																	children: "Here",
																}),
															],
														}),
														(0, ot.jsx)("p", {
															className: "designation",
															style: { fontSize: "20px" },
															children: "Students Welfare Team",
														}),
														(0, ot.jsx)("p", {
															style: { fontSize: "1.5rem", fontWeight: "600" },
															className: "designation",
															children: " Organogram",
														}),
													],
												}),
											}),
										}),
									],
								}),
								(0, ot.jsxs)("div", {
									className: "wrapper",
									style: {
										display: "flex",
										gap: "20px",
										alignItems: "center",
										justifyContent: "center",
										flexWrap: "wrap",
									},
									children: [
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsxs)("div", {
												className: "first-info",
												style: {
													display: "flex",
													gap: "6px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: [
													(0, ot.jsx)("img", { src: dt, alt: "" }),
													(0, ot.jsx)("p", {
														style: { color: "#4338ca" },
														className: "name",
														children: "Dr. R Prabhu",
													}),
													(0, ot.jsx)("p", {
														style: {
															color: "rgb(51, 72, 120)",
															fontWeight: "600",
														},
														className: "designation",
														children: "Associate Dean - Hostels",
													}),
													(0, ot.jsx)("p", {
														style: { textAlign: "center" },
														className: "about-des",
														children:
															"Hostel management & Maintenance; Allocation, Rules & Regulation, Chair Of HWC;",
													}),
												],
											}),
										}),
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsxs)("div", {
												className: "first-info",
												style: {
													display: "flex",
													gap: "6px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: [
													(0, ot.jsx)("img", { src: ft, alt: "" }),
													(0, ot.jsx)("p", {
														style: { color: "#4338ca" },
														className: "name",
														children: "Dr. Gopal Sharan Parashari",
													}),
													(0, ot.jsx)("p", {
														style: {
															color: "rgb(51, 72, 120)",
															fontWeight: "600",
														},
														className: "designation",
														children: "Associate Dean - Gymkhana",
													}),
													(0, ot.jsx)("p", {
														style: { textAlign: "center" },
														className: "about-des",
														children:
															"Students Technical & Culture Boards; Gymkhana Facilities; Sports, NSS,NSO,NCC",
													}),
												],
											}),
										}),
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsxs)("div", {
												className: "first-info",
												style: {
													display: "flex",
													gap: "6px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: [
													(0, ot.jsx)("img", { src: St, alt: "" }),
													(0, ot.jsx)("p", {
														style: { color: "#4338ca" },
														className: "name",
														children: "Dr. Ridhima Tewari",
													}),
													(0, ot.jsx)("p", {
														style: {
															color: "rgb(51, 72, 120)",
															fontWeight: "600",
														},
														className: "designation",
														children: "Associate Dean - Wellness",
													}),
													(0, ot.jsx)("p", {
														style: { textAlign: "center" },
														className: "about-des",
														children:
															"Wellness Centre, Health and Counselling facilities, Female Students Welfare.",
													}),
												],
											}),
										}),
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsxs)("div", {
												className: "first-info",
												style: {
													display: "flex",
													gap: "6px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: [
													(0, ot.jsx)("img", { src: wt, alt: "" }),
													(0, ot.jsx)("p", {
														style: { color: "#4338ca" },
														className: "name",
														children: "Dr. Sudheer Siddapureddy",
													}),
													(0, ot.jsx)("p", {
														style: {
															color: "rgb(51, 72, 120)",
															fontWeight: "600",
														},
														className: "designation",
														children: "Associate Dean - Coordination",
													}),
													(0, ot.jsx)("p", {
														style: { textAlign: "center" },
														className: "about-des",
														children:
															"Academic, Faculty, R&D, Students Enterprise Resource Planning.",
													}),
												],
											}),
										}),
									],
								}),
								(0, ot.jsxs)("div", {
									className: "wrapper",
									style: {
										display: "flex",
										gap: "20px",
										alignItems: "center",
										justifyContent: "center",
										flexWrap: "wrap",
									},
									children: [
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsxs)("div", {
												className: "first-info",
												style: {
													display: "flex",
													gap: "10px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: [
													(0, ot.jsx)("img", { src: ht, alt: "" }),
													(0, ot.jsx)("p", {
														style: { color: "#4338ca" },
														className: "name",
														children: "Group Captain Dr. Prahlad S Joshi",
													}),
													(0, ot.jsx)("p", {
														style: {
															color: "rgb(51, 72, 120)",
															fontWeight: "600",
														},
														className: "designation",
														children: "Students Welfare, Advisor",
													}),
												],
											}),
										}),
										(0, ot.jsx)("div", {
											className: "dean",
											children: (0, ot.jsxs)("div", {
												className: "first-info",
												style: {
													display: "flex",
													gap: "10px",
													alignItems: "center",
													flexDirection: "column",
													padding: "15px",
												},
												children: [
													(0, ot.jsx)("img", { src: bt, alt: "" }),
													(0, ot.jsx)("p", {
														style: { color: "#4338ca" },
														className: "name",
														children: "Col. V. C. Prakash",
													}),
													(0, ot.jsx)("p", {
														style: {
															color: "rgb(51, 72, 120)",
															fontWeight: "600",
														},
														className: "about-des",
														children: "Students Welfare, Advisor",
													}),
												],
											}),
										}),
									],
								}),
							],
						}),
					}),
				});
			}
			var _t = n(4038);
			function Pt(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 1024 1024" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z",
							},
						},
					],
				})(e);
			}
			var Lt =
					n.p + "static/media/administrativeblock.e83b3b993f73ab5b3a47.jpg",
				Mt = n.p + "static/media/homeimage2.3685c381a94cde4473ee.jpg",
				At = n.p + "static/media/homeimage3.39cd4c66fce40dbf37d8.jpg",
				Ot = n.p + "static/media/homeimage4.797276bd4621ddb26cab.jpg",
				zt = n.p + "static/media/homeimage5.01fcbec525712d181280.jpg",
				Bt = n.p + "static/media/homeimage6.bec8942cbbbbafb2e42d.jpg",
				Ft = n.p + "static/media/homeimage7.6aa25b02c6dedfa4110c.jpg",
				Ht = n.p + "static/media/homeimage8.711fe326637b1a0111a4.jpg",
				Ut = n.p + "static/media/homeimage9.74614e9116c8388a2117.jpg",
				Vt = n.p + "static/media/homeimage1.b7bf86608584982cd2f7.jpg",
				Kt = n.p + "static/media/homeimage10.3e3bfcb26496c20e3dcc.jpg",
				Gt = n.p + "static/media/homeimage11.6c1dbdeaa5b14f42ceec.jpg",
				$t = n.p + "static/media/homeimage12.3ee7d75ec7f0b25a5fd4.jpg",
				Qt = n.p + "static/media/homeimage13.de432cec5803a85693cb.png",
				Jt = n.p + "static/media/homeimage14.06dd38bc2a422aa691ea.png";
			var Yt = function () {
				return (0, ot.jsxs)("div", {
					className: "home",
					children: [
						(0, ot.jsx)("div", {
							className: "App",
							children: (0, ot.jsx)("div", {
								children: (0, ot.jsxs)(_t.Z, {
									direction: "left",
									speed: 130,
									delay: 5,
									children: [
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Bt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Mt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: At, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Ot, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: zt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Lt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Ft, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Ut, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Ht, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Kt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Vt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Gt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: $t, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Qt, alt: "" }),
										}),
										(0, ot.jsx)("div", {
											className: "image_wrapper",
											children: (0, ot.jsx)("img", { src: Jt, alt: "" }),
										}),
									],
								}),
							}),
						}),
						(0, ot.jsxs)("div", {
							style: {
								display: "flex",
								gap: "20px",
								marginTop: "50px",
								fontSize: "1.2rem",
								flexWrap: "wrap",
								marginLeft: "20px",
							},
							className: "wrapper-about",
							children: [
								(0, ot.jsx)("div", {
									className: "about-page",
									children: (0, ot.jsxs)("ul", {
										children: [
											(0, ot.jsx)("p", {
												style: { marginBottom: "20px" },
												className: "sub-header",
												children: "About Us",
											}),
											(0, ot.jsxs)("li", {
												children: [
													"  ",
													(0, ot.jsx)("p", {
														children:
															"The office of the Dean Students Welfare at IIT Dharwad administers  all aspects of Students Welfare including Hostels, Health and Wellness,  Cocurricular activities, Sports, Social Service, Cultural events, Technical clubs, NSO and Social outreach activities of Students.",
													}),
												],
											}),
											(0, ot.jsxs)("li", {
												children: [
													"  ",
													(0, ot.jsx)("p", {
														style: { marginTop: "10px" },
														children:
															"It is  responsible for implementing students' code of conduct. The Students Welfare Team at IIT Dharwad believes in all round development of holistic personality  of  its students. IIT Dharwad practices gender equality, respects  neurodivergence and is socially all inclusive  residential campus.",
													}),
												],
											}),
											(0, ot.jsxs)("li", {
												children: [
													" ",
													(0, ot.jsx)("p", {
														style: { marginTop: "20px" },
														children:
															"The Students Welfare team administers Hostels, Mess, Canteens, Sports, NSO/NSS and other infrastructure facilities extensively used by Students as well as  Campus residents.",
													}),
												],
											}),
											" ",
											(0, ot.jsx)("li", {
												children: (0, ot.jsx)("p", {
													style: { marginTop: "15px" },
													children:
														"It also manages the Wellness centre housing Health and Counselling services.",
												}),
											}),
											(0, ot.jsx)("p", {
												style: { marginTop: "15px" },
												children: (0, ot.jsx)("li", {
													children: (0, ot.jsx)("p", {
														children:
															"The Hostels and other Students Activity facilities  are spread over two campuses, one at WALMI and the other in its new Permanant campus at Chikkamalligwad.",
													}),
												}),
											}),
										],
									}),
								}),
								(0, ot.jsxs)("div", {
									style: {
										border: "2px solid #d1d5db",
										backgroundColor: "#fdf4ff",
										height: "350px",
									},
									className: "charter",
									children: [
										(0, ot.jsx)("p", {
											className: "fs-1",
											style: {
												textAlign: "center",
												marginBottom: "20px",
												marginTop: "15px",
												fontSize: "1.6rem",
												fontWeight: "600",
											},
											children: "Students Welfare Charter",
										}),
										(0, ot.jsx)("p", {
											className: "fs",
											style: {
												textAlign: "center",
												marginBottom: "23px",
												fontSize: "1.5rem",
												borderBottom: "1px solid #f8fafc",
											},
											children:
												"Ten key values that are foundational to everything we do:",
										}),
										(0, ot.jsx)("div", {
											className: "marqueee",
											style: { backgroundColor: "#fae8ff", lineHeight: "10px" },
											children: (0, ot.jsx)("p", {
												className: "fs",
												children: (0, ot.jsx)("ul", {
													children: (0, ot.jsxs)("li", {
														style: { lineHeight: "25px", marginBottom: "19px" },
														children: [
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	"1. Students and their welfare are our first priority.",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	" 2.  We strive for excellence and encourage development of an all-rounded personality.",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	" 3.  We thrive on ethnic diversity and promote multicultural environments",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	" 4.  We celebrate collaboration, co-creation and community living",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	"5.  We champion innovation, appreciate merit and practice social inclusion",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	" 6.  We safeguard freedom of self-expression and respect privacy",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	"7.  We nurture Mental and Physical wellbeing and strive for a healthy mind in a healthy body.",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	" 8.  We value ethics, politeness, courteous behavior and respect for all living beings.",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	"9.  We are responsible to the students, parents, institution, nation and humanity",
															}),
															(0, ot.jsx)("li", {
																style: { marginBottom: "15px" },
																children:
																	" 10. We believe that happy students make a happy institution. ",
															}),
														],
													}),
												}),
											}),
										}),
									],
								}),
							],
						}),
						(0, ot.jsxs)("div", {
							style: { display: "flex" },
							className: "div-main",
							children: [
								(0, ot.jsxs)("div", {
									className: "contact-info",
									style: { marginTop: "30px" },
									children: [
										(0, ot.jsx)("div", { className: "email" }),
										(0, ot.jsxs)("div", {
											className: "address",
											children: [
												(0, ot.jsx)("p", {
													style: {
														marginBottom: "10px",
														borderLeft: "4px solid #c00404",
														paddingLeft: "10px",
													},
													className: "sub-header",
													children: "Location",
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														gap: "10px",
														alignItems: "center",
													},
													children: [
														(0, ot.jsx)("p", {
															className: "fs",
															style: { color: "#86198f" },
															children: (0, ot.jsx)(Pt, {}),
														}),
														(0, ot.jsx)("p", {
															className: "fs",
															children: "dean.sw.office@iitdh.ac.in",
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: { display: "flex", gap: "10px" },
													children: [
														(0, ot.jsx)("p", {
															className: "fs",
															style: { color: "#86198f" },
															children: (0, ot.jsx)(Et, {}),
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																gap: "4px",
															},
															className: "location-sw",
															children: [
																(0, ot.jsx)("p", {
																	className: "fs",
																	children:
																		"Student Welfare Division -IIT Dharwad",
																}),
																(0, ot.jsx)("p", {
																	className: "fs",
																	children:
																		"Administration Block, Ground Floor, Right Wing",
																}),
																(0, ot.jsx)("p", {
																	className: "fs",
																	children:
																		"Belur Industrial Area, Chikkamalligwad,",
																}),
																(0, ot.jsx)("p", {
																	className: "fs",
																	children: "Off Pune-Banglore Highway,",
																}),
																(0, ot.jsx)("p", {
																	className: "fs",
																	children:
																		"Dharwad, Karnataka, India - 580011",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								(0, ot.jsx)("div", {
									className: "image-div",
									children: (0, ot.jsx)("img", { src: Lt }),
								}),
							],
						}),
					],
				});
			};
			n.p, n.p;
			function qt() {
				var e = c((0, t.useState)(!0), 2),
					n = (e[0], e[1], c((0, t.useState)(!0), 2)),
					r = (n[0], n[1], c((0, t.useState)(!0), 2));
				r[0], r[1];
				return (0, ot.jsx)("div", {
					className: "form",
					children: (0, ot.jsx)("p", {
						children: "AVAILABLE ONLY IN INTRANET",
					}),
				});
			}
			function Zt() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "admin-office",
						children: [
							(0, ot.jsxs)("div", {
								className: "student-admin-office",
								style: {
									borderBottom: "5px solid #86198f",
									marginTop: "20px",
									padding: "30px 100px",
								},
								children: [
									(0, ot.jsx)("div", {
										style: {
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										},
										className: "admin-header",
										children: (0, ot.jsx)("p", {
											style: { textAlign: "center" },
											children: "STUDENTS WELFARE ADMINISTRATION OFFICE",
										}),
									}),
									(0, ot.jsxs)("div", {
										style:
											((e = { margin: "auto", display: "flex" }),
											(t = "margin"),
											(n = "50px 0px"),
											(t = p(t)) in e
												? Object.defineProperty(e, t, {
														value: n,
														enumerable: !0,
														configurable: !0,
														writable: !0,
												  })
												: (e[t] = n),
											e),
										className: "admin-office-main",
										children: [
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "50px",
												},
												children: [
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: Rt,
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
																alt: "img",
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	justifyContent: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		className: "name",
																		style: { color: "#4338ca" },
																		children: "Ramesh Kumar Ram",
																	}),
																	(0, ot.jsx)("p", {
																		className: "des",
																		style: { marginTop: "5px" },
																		children: "Assistant Registrar",
																	}),
																	(0, ot.jsx)("p", {
																		className: "des",
																		style: { marginTop: "5px" },
																		children: "Students Welfare",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: { display: "flex", gap: "30px" },
														children: [
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	gap: "20px",
																},
																children: [
																	(0, ot.jsx)("img", {
																		src: jt,
																		style: {
																			height: "100px",
																			width: "100px",
																			borderRadius: "50%",
																		},
																		alt: "",
																	}),
																	(0, ot.jsxs)("div", {
																		style: {
																			display: "flex",
																			flexDirection: "column",
																			alignItems: "center",
																			gap: "1.5px",
																		},
																		children: [
																			(0, ot.jsx)("p", {
																				className: "name",
																				style: { color: "#4338ca" },
																				children: "Amol Diwate",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				style: { marginTop: "5px" },
																				children: "Junior Superintendent",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				style: { marginTop: "5px" },
																				children: "Member Of HCU",
																			}),
																		],
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	gap: "20px",
																},
																children: [
																	(0, ot.jsx)("img", {
																		src: pt,
																		alt: "",
																		style: {
																			height: "100px",
																			width: "100px",
																			borderRadius: "50%",
																		},
																	}),
																	(0, ot.jsxs)("div", {
																		style: {
																			display: "flex",
																			flexDirection: "column",
																			alignItems: "center",
																			gap: "1.5px",
																		},
																		children: [
																			(0, ot.jsx)("p", {
																				className: "name",
																				style: { color: "#4338ca" },
																				children: "Chetan Kumar M",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				style: { marginTop: "5px" },
																				children: "Junior Assistant",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				children: "Member Of HCU",
																			}),
																		],
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															justifyContent: "space-between",
														},
														children: [
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	gap: "20px",
																},
																children: [
																	(0, ot.jsx)("img", {
																		src: mt,
																		alt: "",
																		style: {
																			height: "100px",
																			width: "100px",
																			borderRadius: "50%",
																		},
																	}),
																	(0, ot.jsxs)("div", {
																		style: {
																			display: "flex",
																			flexDirection: "column",
																			alignItems: "center",
																			gap: "1.5px",
																		},
																		children: [
																			(0, ot.jsx)("p", {
																				className: "name",
																				style: { color: "#4338ca" },
																				children: "S Janardhan Reddy",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				style: { marginTop: "5px" },
																				children: "Junior Assistant",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				children: "Hostel Manager -2",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				children: "Member Of HCU",
																			}),
																		],
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	gap: "20px",
																},
																children: [
																	(0, ot.jsx)("img", {
																		src: xt,
																		alt: "",
																		style: {
																			height: "100px",
																			width: "100px",
																			borderRadius: "50%",
																		},
																	}),
																	(0, ot.jsxs)("div", {
																		style: {
																			display: "flex",
																			flexDirection: "column",
																			alignItems: "center",
																			gap: "1.5px",
																		},
																		children: [
																			(0, ot.jsx)("p", {
																				className: "name",
																				style: { color: "#4338ca" },
																				children: "Ravi M",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				style: { marginTop: "5px" },
																				children: "Hostel Manager -1",
																			}),
																			(0, ot.jsx)("p", {
																				className: "des",
																				children: "Member Of HCU",
																			}),
																		],
																	}),
																],
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													gap: "20px",
													flexDirection: "column",
													borderLeft: "1px solid black",
												},
												className: "officers",
												children: [
													(0, ot.jsx)("p", {
														style: { textAlign: "center" },
														className: "officer-header",
														children: "Officers",
													}),
													(0, ot.jsx)("p", {
														style: { textAlign: "center" },
														className: "hostels-unit",
														children: "Hostels Coordinating Unit",
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: yt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		className: "name",
																		style: { color: "#4338ca" },
																		children: "Dr Keerthi Kumar M",
																	}),
																	(0, ot.jsx)("p", {
																		className: "des",
																		style: { marginTop: "5px" },
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: vt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		className: "name",
																		style: { color: "#4338ca" },
																		children: "G Ramesh",
																	}),
																	(0, ot.jsx)("p", {
																		className: "des",
																		style: { marginTop: "5px" },
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															alignItems: "center",
															gap: "20px",
														},
														children: [
															(0, ot.jsx)("img", {
																src: gt,
																alt: "",
																style: {
																	height: "100px",
																	width: "100px",
																	borderRadius: "50%",
																},
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	gap: "1.5px",
																},
																children: [
																	(0, ot.jsx)("p", {
																		className: "name",
																		style: { color: "#4338ca" },
																		children: "Ravi Shivaprakash",
																	}),
																	(0, ot.jsx)("p", {
																		className: "name",
																		style: { color: "#4338ca" },
																		children: "Ghalimath",
																	}),
																	(0, ot.jsx)("p", {
																		className: "des",
																		style: { marginTop: "5px" },
																		children: "Member Of HCU",
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, ot.jsxs)("div", {
								className: "about-office",
								children: [
									(0, ot.jsx)("p", {
										style: {
											marginBottom: "7px",
											borderLeft: "5px solid rgb(192, 4, 4)",
											paddingLeft: "10px",
											color: "#4c5157",
										},
										className: "sub-header",
										children: "About",
									}),
									(0, ot.jsx)("p", {
										className: "fs",
										style: {
											color: " #666",
											lineHeight: "29px",
											marginTop: "20px",
										},
										children:
											"The Student Welfare Administrative office Team at IIT Dharwad believes in all round development of holistic personality of its students and ensures students stay in the campus is comfortable, fruitful and happy. The SW Team is on duty 24 hours round the clock with Hostel Managers residing with the students in the Hostels.",
									}),
									(0, ot.jsx)("p", {
										style: { marginTop: "10px", color: " #666" },
										className: "fs",
										children:
											" IIT Dharwad practices gender equality, respects neurodivergence and is a socially all-inclusive residential campus. The Campuse buildings, including Hostels are designed for accessibility by persons with disability (PWD).",
									}),
								],
							}),
						],
					}),
				});
				var e, t, n;
			}
			n.p, n.p;
			var Xt = n.p + "static/media/Hostel_2.f036f49fd5f6c8432b25.jpg",
				en = n.p + "static/media/Hostel_3.9b815610e1c37c3c954f.jpg",
				tn = n.p + "static/media/Hostel_5.df7a4339dd4965090d16.jpg",
				nn = n.p + "static/media/Hostel_6.a64382f70e06a8351a9f.jpg",
				rn =
					(n.p,
					n.p + "static/media/studentcampuslife.6c098cfe4125e461559f.jpg"),
				an = n.p + "static/media/Hostel_Room (1).855a83028b0112431a05.jpg",
				ln = n.p + "static/media/Hostel_Room (2).4ae76633f6c770071b83.jpg";
			function sn() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "hostels-main",
						children: [
							(0, ot.jsxs)("div", {
								className: "about-hostel",
								children: [
									(0, ot.jsx)("div", {
										className: "hostel-image",
										children: (0, ot.jsx)("div", {
											className: "hosetl-image-1",
											children: (0, ot.jsx)("img", {
												src: rn,
												className: "img-1",
												alt: "img",
											}),
										}),
									}),
									(0, ot.jsx)("div", {
										className: "hostel-image",
										children: (0, ot.jsx)("div", {
											className: "hosetl-image-1",
											children: (0, ot.jsx)("img", {
												src: Vt,
												className: "img-1",
												alt: "img",
											}),
										}),
									}),
								],
							}),
							(0, ot.jsx)("div", {
								children: (0, ot.jsxs)("div", {
									className: "hostel-paragraph",
									style: { marginTop: "30px" },
									children: [
										(0, ot.jsx)("p", {
											style: {
												borderLeft: "5px solid #c00404",
												paddingLeft: "10px",
												marginBottom: "15px",
												fontSize: "1.6rem",
											},
											className: "sub-header",
											children: "Hostels",
										}),
										(0, ot.jsx)("p", {
											children:
												"IIT Dharwad being a fully residential institute, all students are mandatorily accommodated in hostels within the campus. Girls have a separate section. Hostels are safe and under round the clock security supervision. There are two hostel blocks(Hostel Block - I and - II) with a total of 550 spacious rooms each accommodating, up to four students, belonging to the same batch.",
										}),
										(0, ot.jsx)("p", {
											style: { marginTop: "20px" },
											children:
												"The hostels and mess blocks have access to a very good campus internet network (wired and wireless). Adequate common bathrooms, washrooms, cloth washing machines-drying area and indoor play areas are available in each floor along with three spacious common rooms. These common rooms have television, a study setup and to encourage various social/recreational/group activities such as meetings. Centralized filterd water facility is available in the hostels round the clock. Availability of dedicated bicycle stands, courtyards for outdoor activities, nurse station and medical isolation rooms, security, housekeeping and other hostel staff on 24 hours duty are salient features of these hostels. ",
										}),
										(0, ot.jsx)("p", {
											style: { marginTop: "20px" },
											children:
												"While basic furniture are provided, students have to arrange for their personal furnishings like beds and bedshits. IIT Dharwad hostels provide an ideal, social and peaceful environment for studies and allround personalities.",
										}),
									],
								}),
							}),
							(0, ot.jsx)("div", {
								style: {
									display: "flex",
									gap: "10px",
									marginTop: "40px",
									flexWrap: "wrap",
								},
								children: (0, ot.jsxs)("div", {
									style: { margin: "auto", display: "flex", gap: "10px" },
									children: [
										(0, ot.jsx)("img", {
											src: Xt,
											alt: "adminblock",
											style: { width: "400px" },
										}),
										(0, ot.jsx)("img", {
											src: en,
											alt: "adminblock",
											style: { width: "400px" },
										}),
										(0, ot.jsx)("img", {
											src: an,
											alt: "adminblock",
											style: { width: "400px" },
										}),
									],
								}),
							}),
							(0, ot.jsx)("div", {
								style: {
									display: "flex",
									gap: "10px",
									marginTop: "40px",
									flexWrap: "wrap",
								},
								children: (0, ot.jsxs)("div", {
									style: { margin: "auto", display: "flex", gap: "10px" },
									children: [
										(0, ot.jsx)("img", {
											src: tn,
											alt: "adminblock",
											style: { width: "400px" },
										}),
										(0, ot.jsx)("img", {
											src: nn,
											alt: "adminblock",
											style: { width: "400px" },
										}),
										(0, ot.jsx)("img", {
											src: ln,
											alt: "adminblock",
											style: { width: "400px" },
										}),
									],
								}),
							}),
						],
					}),
				});
			}
			var on = n.p + "static/media/canteen1.c8a9baadd5cca4ef52c4.jpg",
				cn =
					(n.p,
					n.p,
					n.p,
					n.p + "static/media/Mess-Canteen.4c7299af685d783558f1.jpg"),
				un = (n.p, n.p + "static/media/Mess-Canteen2.feca4a29aa640c5d4424.jpg"),
				dn = n.p + "static/media/Mess-Canteen3.d8a73b5df4ef5c45761d.jpg";
			function fn() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "MessAndCanteen",
						children: [
							(0, ot.jsxs)("div", {
								className: "hostel-paragraph",
								style: { marginTop: "30px" },
								children: [
									(0, ot.jsx)("p", {
										style: {
											marginBottom: "15px",
											color: "#4c5157",
											borderLeft: "5px solid rgb(192, 4, 4)",
											paddingLeft: "20px",
											fontSize: "1.5rem",
										},
										className: "sub-header",
										children: "Mess And Canteen",
									}),
									(0, ot.jsx)("p", {
										children:
											"The mess block has specious dining halls with modern mechanized kitchen operated by outsourced service providers. Both vegetarian and multi cuisine food are served in 3 dining halls. The canteen operates till late in the night for the benefit of students.",
									}),
								],
							}),
							(0, ot.jsxs)("div", {
								className: "hostel-imagee",
								style: {},
								children: [
									(0, ot.jsx)("div", {
										className: "hosetl-imagee-1",
										children: (0, ot.jsx)("img", {
											src: on,
											className: "imge-1",
											alt: "canteen",
										}),
									}),
									(0, ot.jsx)("div", {
										className: "hosetl-imagee-1",
										children: (0, ot.jsx)("img", {
											src: dn,
											className: "imge-1",
											alt: "canteen",
										}),
									}),
									(0, ot.jsx)("div", {
										className: "hosetl-imagee-1",
										children: (0, ot.jsx)("img", {
											src: cn,
											className: "imge-1",
											alt: "canteen",
										}),
									}),
									(0, ot.jsx)("div", {
										className: "hosetl-imagee-1",
										children: (0, ot.jsx)("img", {
											src: un,
											className: "imge-1",
											alt: "canteen",
										}),
									}),
								],
							}),
						],
					}),
				});
			}
			var hn = n.p + "static/media/gymkhana1.431bac695bbf2b8dfb41.jpg",
				pn = n.p + "static/media/gymkhana2.577e5c4e979e86b51804.jpg",
				mn = n.p + "static/media/gymkhana3.77770dfa06ec00f70de7.jpg",
				xn = n.p + "static/media/gymkhana4.b5465968fc90c957df42.jpg",
				gn = n.p + "static/media/sport5.7aa85041cb9bafe5ed00.png",
				yn = n.p + "static/media/technical1.e0e2241f6a3afab92300.jpg",
				vn = n.p + "static/media/sports1.3685c381a94cde4473ee.jpg",
				jn = n.p + "static/media/sports2.39cd4c66fce40dbf37d8.jpg",
				bn = n.p + "static/media/sports3.979aa16c9dbe5595a14b.jpg",
				wn = n.p + "static/media/cultureClub.a66bb834f7f05be111e6.jpg";
			function Sn() {
				(0, t.useRef)();
				var e = (0, t.useRef)(),
					n = ((0, t.useRef)(), (0, t.useRef)()),
					r = function (e) {
						console.log(e.current),
							window.scrollTo({ top: e.current.offsetTop, behavior: "smooth" });
					};
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "main-gymkhana",
						children: [
							(0, ot.jsxs)("div", {
								className: "sub-gymkhana",
								children: [
									(0, ot.jsx)("div", {
										className: "gymkhana-header",
										style: {
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											marginBottom: "20px",
										},
										children: (0, ot.jsx)("h3", {
											style: { marginBottom: "20px", fontSize: "2rem" },
											children: "GYMKHANA",
										}),
									}),
									(0, ot.jsx)("div", {
										children: (0, ot.jsx)("p", {
											style: { marginBottom: "20px", fontSize: "1.4rem" },
											children:
												"Gymkhana is a collective name under which Co-Curicular activities of Students Clubs and Sports are carried out",
										}),
									}),
									(0, ot.jsxs)("div", {
										className: "gymkhana-sub",
										style: {
											display: "flex",
											alignItems: "center",
											gap: "20px",
											justifyContent: "center",
											flexWrap: "wrap",
										},
										children: [
											(0, ot.jsxs)("div", {
												className: "gymkhana-sub-1",
												onClick: function () {
													return r(n);
												},
												style: {
													border: "3px solid #c084fc",
													cursor: "pointer",
													padding: "10px 50px 50px 50px",
													width: "180px",
													height: "140px",
													borderRadius: "5px",
													fontSize: "18px",
												},
												children: [
													(0, ot.jsx)("p", {
														style: {
															textAlign: "center",
															margin: "10px",
															fontWeight: "600",
															fontSize: "1.7rem",
														},
														children: "SPORTS",
													}),
													(0, ot.jsxs)("ul", {
														style: {
															fontSize: "20px",
															fontWeight: "600",
															position: "relative",
															top: "0",
															bottom: "0",
														},
														children: [
															(0, ot.jsxs)("li", {
																style: { marginBottom: "10px" },
																children: [
																	" ",
																	(0, ot.jsx)("a", {
																		children: "Outdoor Games",
																	}),
																	" ",
																],
															}),
															(0, ot.jsxs)("li", {
																style: { marginBottom: "10px" },
																children: [
																	" ",
																	(0, ot.jsx)("a", {
																		children: "Indoor Games",
																	}),
																	" ",
																],
															}),
															(0, ot.jsxs)("li", {
																style: { marginBottom: "10px" },
																children: [
																	" ",
																	(0, ot.jsx)("a", {
																		children: "Fitness Center",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	justifyContent: "space-between",
																	fontSize: "1rem",
																	fontWeight: "200",
																	color: "#0284c7",
																},
																children: (0, ot.jsx)("p", {
																	children: "Click here for more",
																}),
															}),
															(0, ot.jsx)(Nt, {
																className: "blink-shadow ",
																style: {
																	position: "absolute",
																	left: "90%",
																	top: "80%",
																	backgroundColor: "#c084fc",
																	padding: "5px 15px",
																	borderRadius: "5px",
																},
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "gymkhana-sub-1",
												onClick: function () {
													return r(e);
												},
												style: {
													border: "3px solid #c084fc",
													padding: "10px 50px 50px 50px",
													cursor: "pointer",
													width: "180px",
													height: "140px",
													borderRadius: "5px",
													fontSize: "18px",
												},
												children: [
													(0, ot.jsx)("p", {
														style: {
															textAlign: "center",
															margin: "10px",
															fontWeight: "600",
															fontSize: "1.7rem",
															paddingBottom: "20px",
														},
														children: "TECHNICAL BOARD",
													}),
													(0, ot.jsxs)("ul", {
														style: {
															fontSize: "20px",
															position: "relative",
															top: "0",
															bottom: "0",
															fontWeight: "600",
														},
														children: [
															(0, ot.jsxs)("li", {
																style: {
																	marginBottom: "10px",
																	fontSize: "1.5rem",
																},
																children: [
																	" ",
																	(0, ot.jsx)("a", {
																		children: "Technical Club",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)("li", {
																style: { listStyleType: "none" },
																children: (0, ot.jsx)("a", {}),
															}),
															(0, ot.jsxs)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	justifyContent: "space-between",
																	fontSize: "1rem",
																	fontWeight: "200",
																	color: "#0284c7",
																},
																children: [
																	(0, ot.jsx)("p", {
																		children: "Click here for more",
																	}),
																	(0, ot.jsx)(Nt, {
																		className: "blink-shadow ",
																		style: {
																			position: "absolute",
																			left: "99%",
																			top: "80%",
																			backgroundColor: "#c084fc",
																			padding: "5px 15px",
																			borderRadius: "5px",
																		},
																	}),
																],
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "gymkhana-sub-1",
												onClick: function () {
													return r(e);
												},
												style: {
													border: "3px solid #c084fc",
													padding: "10px 50px 50px 50px",
													cursor: "pointer",
													width: "180px",
													height: "140px",
													borderRadius: "5px",
													fontSize: "18px",
												},
												children: [
													(0, ot.jsx)("p", {
														style: {
															textAlign: "center",
															margin: "10px",
															fontWeight: "600",
															fontSize: "1.7rem",
															paddingBottom: "20px",
														},
														children: "CULTURE BOARD",
													}),
													(0, ot.jsxs)("ul", {
														style: {
															fontSize: "20px",
															fontWeight: "600",
															position: "relative",
															top: "0",
															bottom: "0",
														},
														children: [
															(0, ot.jsxs)("li", {
																style: {
																	marginBottom: "10px",
																	fontSize: "1.5rem",
																},
																children: [
																	" ",
																	(0, ot.jsx)("a", {
																		children: "Culture Club",
																	}),
																	" ",
																],
															}),
															(0, ot.jsx)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	justifyContent: "space-between",
																	fontSize: "1rem",
																	fontWeight: "200",
																	color: "#0284c7",
																},
																children: (0, ot.jsx)("p", {
																	children: "Click here for more",
																}),
															}),
															(0, ot.jsx)(Nt, {
																className: "blink-shadow ",
																style: {
																	position: "absolute",
																	left: "98%",
																	top: "70%",
																	backgroundColor: "#c084fc",
																	padding: "5px 15px",
																	borderRadius: "5px",
																},
															}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "gymkhana-sub-1",
												style: {
													border: "3px solid #c084fc",
													padding: "13px 50px 45px 50px",
													width: "180px",
													height: "140px",
													borderRadius: "5px",
													fontSize: "18px",
												},
												children: [
													(0, ot.jsx)("p", {
														style: {
															textAlign: "center",
															margin: "10px",
															fontWeight: "600",
														},
													}),
													(0, ot.jsxs)("ul", {
														style: {
															fontSize: "1.5rem",
															fontWeight: "600",
															position: "relative",
															top: "0",
															bottom: "0",
														},
														children: [
															(0, ot.jsxs)("li", {
																style: { marginBottom: "10px" },
																children: [
																	" ",
																	(0, ot.jsx)("a", { children: "NSO" }),
																	" ",
																],
															}),
															(0, ot.jsxs)("li", {
																style: { marginBottom: "10px" },
																children: [
																	" ",
																	(0, ot.jsx)("a", { children: "NCC" }),
																	" ",
																],
															}),
															(0, ot.jsxs)("li", {
																style: { marginBottom: "10px" },
																children: [
																	" ",
																	(0, ot.jsx)("a", { children: "NSS" }),
																	" ",
																],
															}),
															(0, ot.jsx)("div", {
																style: {
																	display: "flex",
																	alignItems: "center",
																	justifyContent: "space-between",
																	fontSize: "1rem",
																	fontWeight: "200",
																	color: "#0284c7",
																},
																children: (0, ot.jsx)("p", {
																	children: "Click here for more",
																}),
															}),
															(0, ot.jsx)(Nt, {
																className: "blink-shadow ",
																style: {
																	position: "absolute",
																	left: "98%",
																	top: "80%",
																	backgroundColor: "#c084fc",
																	padding: "6px 15px",
																	borderRadius: "5px",
																},
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, ot.jsx)("div", {
								className: "about-gymkhana",
								children: (0, ot.jsxs)("div", {
									className: "gymkhana",
									style: { borderBottom: "5px solid #86198f" },
									children: [
										(0, ot.jsxs)("div", {
											className: "faculty-in-gymhkana",
											children: [
												(0, ot.jsxs)("div", {
													children: [
														(0, ot.jsx)("h3", {
															style: { marginTop: "25px" },
															children: "FACULTY-IN-CHARGE, Gymkhana",
														}),
														(0, ot.jsx)("div", {
															style: {
																width: "50px",
																height: "3.4px",
																backgroundColor: "#86198f",
																marginTop: "7px",
																marginBottom: "18px",
															},
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													className: "general-secre-hostel",
													style: {
														display: "flex",
														gap: "50px",
														flexWrap: "wrap",
													},
													children: [
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																gap: "20px",
															},
															children: [
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Dr. Rajeswara Rao M",
																		}),
																		(0, ot.jsx)("h4", {
																			children:
																				"Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)",
																		}),
																	],
																}),
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Dr. Vigneshwara Raja P",
																		}),
																		(0, ot.jsx)("h4", {
																			children:
																				"Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)",
																		}),
																	],
																}),
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Dr. Kavita Devi",
																		}),
																		(0, ot.jsx)("h4", {
																			children:
																				"Faculty-In-Charge, Students Welfare (Sports/NSS/NCC)",
																		}),
																	],
																}),
															],
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																gap: "20px",
															},
															children: [
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Dr. Surya Prakash Ramesh",
																		}),
																		(0, ot.jsx)("h4", {
																			children:
																				"Faculty-In-Charge, Students Welfare (Culture & Events & Technical)",
																		}),
																	],
																}),
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Dr. Nagaveni S",
																		}),
																		(0, ot.jsx)("h4", {
																			children:
																				"Faculty-In-Charge, Students Welfare (Culture & Events & Technical)",
																		}),
																	],
																}),
															],
														}),
													],
												}),
											],
										}),
										(0, ot.jsx)("hr", {}),
										(0, ot.jsxs)("div", {
											children: [
												(0, ot.jsx)("h3", {
													style: { marginTop: "20px" },
													children: "ASSISTANT SPORTS OFFICERS",
												}),
												(0, ot.jsx)("div", {
													style: {
														width: "50px",
														height: "3.4px",
														backgroundColor: "#86198f",
														marginTop: "7px",
														marginBottom: "18px",
													},
												}),
											],
										}),
										(0, ot.jsxs)("div", {
											className: "information",
											style: {
												marginTop: "20px",
												display: "flex",
												gap: "50px",
												flexWrap: "wrap",
											},
											children: [
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: yt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Dr Keerthi Kumar M",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Assistant Sports Officer",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: gt,
															alt: "",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Ravi Shivaprakash",
																}),
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Ghalimath",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Assistant Sports Officer",
																}),
															],
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "20px",
													},
													children: [
														(0, ot.jsx)("img", {
															src: vt,
															alt: "assistan officer",
															style: {
																height: "100px",
																width: "100px",
																borderRadius: "50%",
															},
														}),
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																gap: "1.5px",
															},
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "G Ramesh",
																}),
																(0, ot.jsx)("h4", {
																	style: { marginTop: "5px" },
																	children: "Assistant Sports Officer",
																}),
															],
														}),
													],
												}),
											],
										}),
										(0, ot.jsx)("hr", {}),
										(0, ot.jsx)(Tt, {}),
										(0, ot.jsxs)("div", {
											className: "sports-section",
											children: [
												(0, ot.jsxs)("div", {
													children: [
														(0, ot.jsx)("h3", {
															style: { marginTop: "25px" },
															children: "CLUB SECRETARIES -Gymkhana",
														}),
														(0, ot.jsx)("div", {
															style: {
																width: "50px",
																height: "3.4px",
																backgroundColor: "#86198f",
																marginTop: "7px",
																marginBottom: "18px",
															},
														}),
													],
												}),
												(0, ot.jsxs)("div", {
													className: "secrataries",
													style: { display: "flex", gap: "50px" },
													children: [
														(0, ot.jsxs)("div", {
															style: {
																display: "flex",
																flexDirection: "column",
																gap: "20px",
															},
															children: [
																(0, ot.jsx)("h3", {
																	style: {
																		marginTop: "25px",
																		marginBottom: "20px",
																	},
																	children: "TECH CLUB SECRETARIES, Gymkhana",
																}),
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Nirmit Arora",
																		}),
																		(0, ot.jsx)("h4", {
																			children: "Tech Club Secretary, AI",
																		}),
																	],
																}),
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Abhiram K ",
																		}),
																		(0, ot.jsx)("h4", {
																			children:
																				"Tech Club Secretary, Space Data Science",
																		}),
																	],
																}),
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Om Sanjaykumar Patil",
																		}),
																		(0, ot.jsx)("h4", {
																			children: "Tech Club Secretary, Robotics",
																		}),
																	],
																}),
																(0, ot.jsxs)("div", {
																	className: "g-s",
																	children: [
																		(0, ot.jsx)("p", {
																			style: {
																				fontWeight: "600",
																				color: "#4338ca",
																			},
																			children: "Shubh Agarwal",
																		}),
																		(0, ot.jsx)("h4", {
																			children: "Tech Club Secretary, Coding",
																		}),
																	],
																}),
															],
														}),
														(0, ot.jsxs)("div", {
															className: "sports-club",
															children: [
																(0, ot.jsx)("h3", {
																	style: {
																		marginTop: "25px",
																		marginBottom: "20px",
																	},
																	children: "SPORTS CLUB SECRETARIES, Gymkhana",
																}),
																(0, ot.jsxs)("div", {
																	style: { display: "flex", gap: "20px" },
																	children: [
																		(0, ot.jsxs)("div", {
																			style: {
																				display: "flex",
																				flexDirection: "column",
																				gap: "20px",
																			},
																			children: [
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Vikas Kumawat",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Yoga ",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Krisha K ",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Athletics",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children:
																								"Naga Ayushmaan Betapudi",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Badminton",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Siddharth Wala ",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Basketball",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children:
																								"Bharath Chndra Borella",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Chess",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Ashok Dhyavana ",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Weightlifting",
																						}),
																					],
																				}),
																			],
																		}),
																		(0, ot.jsxs)("div", {
																			style: {
																				display: "flex",
																				flexDirection: "column",
																				gap: "20px",
																			},
																			children: [
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Rajat Lavekar",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Cricket",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Sadock Chakma",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, E- Sports ",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children:
																								"Manindra Singh Rathore",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Football",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Atharv Gade",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Table Tennis",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Ansh Vivek",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Tennis ",
																						}),
																					],
																				}),
																				(0, ot.jsxs)("div", {
																					className: "g-s",
																					children: [
																						(0, ot.jsx)("p", {
																							style: {
																								fontWeight: "600",
																								color: "#4338ca",
																							},
																							children: "Neeli Deekshith ",
																						}),
																						(0, ot.jsx)("h4", {
																							children:
																								"Sports Club Secretary, Volleyball ",
																						}),
																					],
																				}),
																			],
																		}),
																	],
																}),
															],
														}),
														(0, ot.jsx)("div", {
															className: "list-clubs",
															children: (0, ot.jsx)("div", {}),
														}),
													],
												}),
											],
										}),
									],
								}),
							}),
							(0, ot.jsx)("div", {
								style: { display: "flex", gap: "10px", marginTop: "40px" },
								children: (0, ot.jsxs)("div", {
									style: {
										margin: "auto",
										display: "flex",
										gap: "10px",
										flexWrap: "wrap",
									},
									className: "image-block",
									children: [
										(0, ot.jsx)("img", { src: vn, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: jn, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: bn, alt: "adminblock" }),
									],
								}),
							}),
							(0, ot.jsx)("div", {
								style: {
									display: "flex",
									gap: "10px",
									marginTop: "40px",
									flexWrap: "wrap",
								},
								children: (0, ot.jsxs)("div", {
									style: { margin: "auto", display: "flex", gap: "10px" },
									className: "image-block",
									children: [
										(0, ot.jsx)("img", { src: xn, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: pn, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: mn, alt: "adminblock" }),
									],
								}),
							}),
							(0, ot.jsxs)("div", {
								className: "tech-board-gymkhana",
								children: [
									(0, ot.jsx)("div", {
										className: "tech-board-sub-header",
										children: (0, ot.jsx)("p", { children: "Outdoor Games" }),
									}),
									(0, ot.jsxs)("div", {
										style: {
											display: "flex",
											justifyContent: "space-evenly",
											flexWrap: "wrap",
										},
										className: "board-flex",
										children: [
											(0, ot.jsx)("div", {
												className: "list-items",
												children: (0, ot.jsxs)("ul", {
													children: [
														(0, ot.jsx)("li", { children: "Football" }),
														(0, ot.jsx)("li", { children: "Volleyball" }),
														(0, ot.jsx)("li", { children: "Cricket" }),
														(0, ot.jsx)("li", { children: "Basketball" }),
														(0, ot.jsx)("li", { children: "Swimming" }),
													],
												}),
											}),
											(0, ot.jsx)("div", {
												className: "sports-photos",
												children: (0, ot.jsx)("div", {
													children: (0, ot.jsx)("img", {
														src: gn,
														alt: "img",
														style: { width: "600px" },
													}),
												}),
											}),
										],
									}),
									(0, ot.jsx)("div", {
										className: "tech-board-sub-header",
										children: (0, ot.jsx)("p", { children: "Indoor Games" }),
									}),
									(0, ot.jsxs)("div", {
										style: { display: "flex", justifyContent: "space-evenly" },
										className: "board-flex",
										children: [
											(0, ot.jsx)("div", {
												className: "list-items",
												children: (0, ot.jsxs)("ul", {
													children: [
														(0, ot.jsx)("li", { children: "Chess" }),
														(0, ot.jsx)("li", { children: "Caroom-Board" }),
														(0, ot.jsx)("li", { children: "Badminton" }),
														(0, ot.jsx)("li", { children: "Squash" }),
														(0, ot.jsx)("li", { children: "Table tennis" }),
													],
												}),
											}),
											(0, ot.jsx)("div", {
												className: "sports-photos",
												children: (0, ot.jsx)("div", {
													children: (0, ot.jsx)("img", {
														src: hn,
														alt: "img",
														style: { width: "600px" },
													}),
												}),
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										children: [
											(0, ot.jsx)("div", {
												className: "tech-board-sub-header",
												children: (0, ot.jsx)("p", {
													children: "Culture Clubs",
												}),
											}),
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													justifyContent: "space-evenly",
												},
												className: "board-flex",
												children: [
													(0, ot.jsx)("div", {
														className: "list-items",
														children: (0, ot.jsxs)("ul", {
															children: [
																(0, ot.jsx)("li", { children: "Dance" }),
																(0, ot.jsx)("li", { children: "Dramatics" }),
																(0, ot.jsx)("li", { children: "EBSB" }),
																(0, ot.jsx)("li", { children: "Fine Arts" }),
																(0, ot.jsx)("li", { children: "Literary" }),
																(0, ot.jsx)("li", { children: "Music" }),
																(0, ot.jsx)("li", { children: "Photography" }),
																(0, ot.jsx)("li", { children: "Quiz" }),
																(0, ot.jsx)("li", { children: "Prabodhini" }),
															],
														}),
													}),
													(0, ot.jsxs)("div", {
														className: "sports-photos",
														style: { display: "flex", flexDirection: "column" },
														children: [
															(0, ot.jsx)("div", {
																children: (0, ot.jsx)("img", {
																	src: wn,
																	alt: "img",
																	style: { width: "600px", height: "260px" },
																}),
															}),
															(0, ot.jsx)("div", {
																children: (0, ot.jsx)("img", {
																	src: Ht,
																	alt: "img",
																	style: { width: "600px", height: "260px" },
																}),
															}),
														],
													}),
												],
											}),
											(0, ot.jsx)("div", {
												className: "tech-board-sub-header",
												ref: e,
												children: (0, ot.jsx)("p", {
													style: { fontSize: "2rem", marginBottom: "20px" },
													children: "Tech Clubs",
												}),
											}),
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "20px",
												},
												className: "board-flex",
												children: [
													(0, ot.jsx)("div", {
														className: "sports-photos",
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: (0, ot.jsx)("div", {
															style: {
																fontSize: "1.3rem",
																lineHeight: "27px",
																marginBottom: "20px",
															},
															children: (0, ot.jsx)("p", {
																children:
																	"The Technical Council serves as a student-led platform dedicated to nurturing and promoting students' technical interests. Its primary objectives include facilitating and supporting various technical clubs in executing their projects,events, and other activities. By providing guidance, resources, and assistance, the council enables students to explore, learn, and develop their skills in diverse technical domains.Ultimately, it aims to create an environment that encourages innovation,collaboration, and the pursuit of excellence in technical fields among the student body.",
															}),
														}),
													}),
													(0, ot.jsxs)("div", {
														className: "list-items",
														style: { display: "flex", gap: "70px" },
														children: [
															(0, ot.jsx)("div", {
																children: (0, ot.jsx)("img", {
																	src: yn,
																	alt: "img",
																	style: { width: "600px" },
																}),
															}),
															(0, ot.jsxs)("ul", {
																children: [
																	(0, ot.jsx)("p", {
																		style: { textAlign: "center" },
																		children: "Click Below",
																	}),
																	(0, ot.jsx)("li", {
																		children: (0, ot.jsx)("a", {
																			href: " https://www.iitdh.ac.in/sdsl/\r\n",
																			target: "_blank",
																			style: { textDecoration: "underline" },
																			children: "AI",
																		}),
																	}),
																	(0, ot.jsx)("li", {
																		children: (0, ot.jsx)("a", {
																			href: " https://www.iitdh.ac.in/sdsl/\r\n",
																			target: "_blank",
																			style: { textDecoration: "underline" },
																			children: "Space Data Science",
																		}),
																	}),
																	(0, ot.jsx)("li", {
																		children: (0, ot.jsx)("a", {
																			href: "  https://github.com/IITDh-Robotics\r\n",
																			target: "_blank",
																			style: { textDecoration: "underline" },
																			children: "Robotics",
																		}),
																	}),
																	(0, ot.jsx)("li", {
																		children: (0, ot.jsx)("a", {
																			href: "https://instagram.com/insolvent.iitdh\r\n",
																			target: "_blank",
																			style: { textDecoration: "underline" },
																			children: "Coding",
																		}),
																	}),
																	(0, ot.jsx)("li", {
																		children: (0, ot.jsx)("a", {
																			href: " https://www.linkedin.com/company/insolvent-finance-club-iitdh/\r\n",
																			target: "_blank",
																			style: { textDecoration: "underline" },
																			children: "Finance",
																		}),
																	}),
																	(0, ot.jsx)("li", {
																		children: (0, ot.jsx)("a", {
																			href: " https://ingene.vercel.app/\r\n",
																			target: "_blank",
																			style: { textDecoration: "underline" },
																			children: "InGene Motorsports Club",
																		}),
																	}),
																],
															}),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
				});
			}
			function Nn() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsx)("div", { className: "main-sports" }),
				});
			}
			function kn() {
				var e = xe().pathname;
				return (
					(0, t.useEffect)(
						function () {
							window.scrollTo(0, 0);
						},
						[e]
					),
					null
				);
			}
			n.p;
			var Cn = n.p + "static/media/studentcampus1.0d6b12775983bf2dee45.jpg",
				En =
					(n.p, n.p + "static/media/studentcampus4.bec8942cbbbbafb2e42d.jpg"),
				Tn = n.p + "static/media/studentcampus5.07528abcad8d6ff74814.png",
				Wn = n.p + "static/media/studentcampus.34cab882442ef1430ee2.jpg";
			function Rn() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "student-campus-life",
						children: [
							(0, ot.jsxs)("div", {
								className: "student-campus-sub",
								children: [
									(0, ot.jsx)("div", {
										style: {
											marginTop: "20px",
											color: "#4c5157",
											borderLeft: "4px solid #c00404",
											paddingLeft: "10px",
										},
										children: (0, ot.jsx)("p", {
											className: "sub-header",
											children: "Student Campus Life",
										}),
									}),
									(0, ot.jsx)("div", {
										style: { marginTop: "20px" },
										children: (0, ot.jsx)("p", {
											className: "fs",
											children:
												"Life on the campus is pretty cool. Hostels and student facilities are spread over two campuses. Temporary campus is located within WALMI near the High Court building. The new 470 acres campus at Chikamaligwad is a green mini forest with its own flora and funa. It affords jogging, cycling and walking. Day time is consumed by fast paced academic activities in classes, laboratories.Evenings are devoted to sports, clubs activites, or simply chit chatting with friends on the grass lawns. ",
										}),
									}),
								],
							}),
							(0, ot.jsx)("div", {
								style: { display: "flex", gap: "10px", marginTop: "40px" },
								children: (0, ot.jsxs)("div", {
									style: {
										margin: "auto",
										display: "flex",
										gap: "10px",
										flexWrap: "wrap",
									},
									className: "image-block",
									children: [
										(0, ot.jsx)("img", { src: Cn, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: zt, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: rn, alt: "adminblock" }),
									],
								}),
							}),
							(0, ot.jsx)("div", {
								style: {
									display: "flex",
									gap: "10px",
									marginTop: "40px",
									flexWrap: "wrap",
								},
								children: (0, ot.jsxs)("div", {
									style: { margin: "auto", display: "flex", gap: "10px" },
									className: "image-block",
									children: [
										(0, ot.jsx)("img", { src: En, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: Tn, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: Wn, alt: "adminblock" }),
									],
								}),
							}),
							(0, ot.jsx)("div", {
								style: {
									display: "flex",
									gap: "10px",
									marginTop: "40px",
									flexWrap: "wrap",
								},
								children: (0, ot.jsxs)("div", {
									style: { margin: "auto", display: "flex", gap: "10px" },
									className: "image-block",
									children: [
										(0, ot.jsx)("img", { src: Gt, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: Ot, alt: "adminblock" }),
										(0, ot.jsx)("img", { src: Ut, alt: "adminblock" }),
									],
								}),
							}),
						],
					}),
				});
			}
			n.p;
			function In(e) {
				return nt({
					tag: "svg",
					attr: { viewBox: "0 0 512 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z",
							},
						},
					],
				})(e);
			}
			function Dn(e) {
				return nt({
					tag: "svg",
					attr: { role: "img", viewBox: "0 0 24 24" },
					child: [
						{ tag: "title", attr: {}, child: [] },
						{
							tag: "path",
							attr: {
								d: "M21.3 13.72a3.158 3.158 0 0 0-3.462.124.632.632 0 0 1-.682.035l-3.137-1.81a.08.08 0 0 1 0-.137l3.12-1.8a.632.632 0 0 1 .685.036 3.158 3.158 0 0 0 3.47.139A3.194 3.194 0 0 0 22.442 6.1a3.158 3.158 0 0 0-5.924 1.773.633.633 0 0 1-.311.606l-3.136 1.811a.08.08 0 0 1-.118-.068V6.6a.632.632 0 0 1 .372-.573 3.158 3.158 0 1 0-2.64 0 .632.632 0 0 1 .373.573v3.622a.08.08 0 0 1-.119.068L7.804 8.48a.632.632 0 0 1-.311-.605 3.157 3.157 0 1 0-1.307 2.294.633.633 0 0 1 .687-.038l3.12 1.8a.08.08 0 0 1 0 .137L6.854 13.88a.632.632 0 0 1-.683-.035 3.158 3.158 0 0 0-3.461-.124 3.194 3.194 0 0 0-1.143 4.202 3.159 3.159 0 0 0 5.924-1.792.633.633 0 0 1 .31-.61l3.137-1.81a.08.08 0 0 1 .119.068V17.4a.632.632 0 0 1-.372.573 3.158 3.158 0 1 0 2.64 0 .633.633 0 0 1-.373-.573v-3.621a.08.08 0 0 1 .118-.069l3.137 1.812a.631.631 0 0 1 .31.609 3.159 3.159 0 0 0 5.924 1.792A3.194 3.194 0 0 0 21.3 13.72Z",
							},
						},
					],
				})(e);
			}
			var _n = n.p + "static/media/wellnesscentre.3ee7d75ec7f0b25a5fd4.jpg";
			function Pn() {
				var e = (0, t.useRef)(),
					n = (0, t.useRef)(),
					r = function (e) {
						console.log(e.current),
							window.scrollTo({ top: e.current.offsetTop, behavior: "smooth" });
					};
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "wellness-section",
						children: [
							(0, ot.jsxs)("div", {
								style: { margin: "10px 20px" },
								className: "wellness-section-s1",
								children: [
									(0, ot.jsxs)("div", {
										style: {
											display: "flex",
											flexDirection: "column",
											gap: "30px",
										},
										children: [
											(0, ot.jsx)("div", {
												className: "wellness-header",
												children: (0, ot.jsx)("p", {
													style: {
														borderLeft: "5px solid #c00404",
														paddingLeft: "10px",
													},
													children: "Wellness",
												}),
											}),
											(0, ot.jsxs)("div", {
												style: {
													display: "flex",
													gap: "10px",
													flexWrap: "wrap",
												},
												children: [
													(0, ot.jsx)("div", {
														className: "wellness-centre",
														children: (0, ot.jsx)("img", { src: _n }),
													}),
													(0, ot.jsxs)("p", {
														style: {
															margin: "auto",
															border: "5px solid red",
															padding: "50px",
															display: "flex",
															flexDirection: "column",
															gap: "10px",
															alignItems: "center",
															justifyContent: "center",
														},
														children: [
															(0, ot.jsx)("p", {
																style: {
																	fontSize: "1.6rem",
																	fontWeight: "800",
																},
																className: "ambulance-no",
																children: "Ambulance No:",
															}),
															(0, ot.jsx)("p", {
																style: {
																	fontSize: "1.3rem",
																	fontWeight: "600",
																},
																children: "8105405107",
															}),
														],
													}),
												],
											}),
											(0, ot.jsx)("div", {
												className: "wellness-text",
												children: (0, ot.jsx)("p", {
													children:
														"The Wellness Centre hosts Medical and Mental Wellness services for all the campus residents. A panel of eminent visiting Doctors provide consultations at the Centre which is 24x7 facility with Nurses and Ambulance service. The Psychological Conselting services are operated online by service providers. A Volunteering Counselling Psychologist is available on campus by Appointment.",
												}),
											}),
										],
									}),
									(0, ot.jsx)("div", {
										className: "dean",
										style: {
											marginTop: "20px",
											backgroundColor: "#fae8ff",
											width: "400px",
											padding: "8px 15px",
											borderRadius: "5px",
										},
										children: (0, ot.jsxs)("div", {
											className: "first-info",
											style: {
												display: "flex",
												gap: "6px",
												alignItems: "center",
												flexDirection: "column",
												height: "250px",
												width: "380px",
												padding: "15px",
											},
											children: [
												(0, ot.jsx)("img", { src: St, alt: "" }),
												(0, ot.jsx)("p", {
													style: {
														color: "#4338ca",
														fontWeight: "600",
														fontSize: "1.2rem",
													},
													children: "Dr. Ridhima Tewari",
												}),
												(0, ot.jsx)("p", {
													style: {
														color: "rgb(51, 72, 120)",
														fontWeight: "600",
														fontSize: "1rem",
													},
													children: "Associate Dean -Wellness",
												}),
												(0, ot.jsx)("p", {
													style: { textAlign: "center" },
													className: "fs-small",
													children:
														"Wellness; Health; Students Facilities including Mess, Canteen and Commercial Services.",
												}),
											],
										}),
									}),
									(0, ot.jsxs)("div", {
										className: "wellness",
										style: { borderBottom: "5px solid #86198f" },
										children: [
											(0, ot.jsx)("h3", {
												style: { marginBottom: "20px", fontSize: "1.7rem" },
												children: "WELLNESS",
											}),
											(0, ot.jsx)("h3", {
												style: { marginBottom: "20px" },
												children: "HEALTH CENTER",
											}),
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														style: { marginTop: "20px" },
														children: "FACULTY-IN-CHARGE, Health",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "3.4px",
															backgroundColor: "#86198f",
															marginTop: "7px",
															marginBottom: "18px",
														},
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												style: { display: "flex", gap: "330px" },
												children: [
													(0, ot.jsxs)("div", {
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "20px",
														},
														children: [
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr. Satish Naik B",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Faculty-In-Charge, Students Welfare (Health and Ambulance)",
																	}),
																],
															}),
															(0, ot.jsxs)("div", {
																className: "g-s",
																children: [
																	(0, ot.jsx)("p", {
																		style: {
																			fontWeight: "600",
																			color: "#4338ca",
																		},
																		children: "Dr. Shreedevi K Masuti",
																	}),
																	(0, ot.jsx)("h4", {
																		children:
																			"Faculty-In-Charge, Students Welfare (Health and Ambulance)",
																	}),
																],
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "ambulance",
														style: {
															display: "flex",
															flexDirection: "column",
															gap: "10px",
															border: "2px solid red",
															padding: "10px",
														},
														children: [
															(0, ot.jsx)("h3", {
																style: { color: "red" },
																children: "Ambulance",
															}),
															(0, ot.jsx)("h4", {
																style: { color: "red" },
																children: "Mob 8105405107",
															}),
														],
													}),
												],
											}),
											(0, ot.jsx)("hr", {}),
											(0, ot.jsx)("h3", {
												style: { marginBottom: "20px", marginTop: "20px" },
												children: "COUNSELLING CENTER",
											}),
											(0, ot.jsxs)("div", {
												children: [
													(0, ot.jsx)("h3", {
														style: { marginTop: "20px" },
														children: "FACULTY-IN-CHARGE, Counselling",
													}),
													(0, ot.jsx)("div", {
														style: {
															width: "50px",
															height: "3.4px",
															backgroundColor: "#86198f",
															marginTop: "7px",
															marginBottom: "18px",
														},
													}),
												],
											}),
											(0, ot.jsx)("div", {
												style: { display: "flex", gap: "50px" },
												children: (0, ot.jsxs)("div", {
													style: {
														display: "flex",
														flexDirection: "column",
														gap: "20px",
													},
													children: [
														(0, ot.jsxs)("div", {
															className: "g-s",
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Prof. Pradeep Yammiyavar",
																}),
																(0, ot.jsx)("h4", {
																	children:
																		"Faculty-In-Charge, Students Welfare (Wellness Counselling)",
																}),
															],
														}),
														(0, ot.jsxs)("div", {
															className: "g-s",
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Dr. Rajshekar. K",
																}),
																(0, ot.jsx)("h4", {
																	children:
																		"Faculty-In-Charge, Students Welfare (Wellness Counselling)",
																}),
															],
														}),
														(0, ot.jsxs)("div", {
															className: "g-s",
															children: [
																(0, ot.jsx)("p", {
																	style: {
																		fontWeight: "600",
																		color: "#4338ca",
																	},
																	children: "Dr. Deepti Kalsi",
																}),
																(0, ot.jsx)("h4", {
																	children:
																		"Faculty-In-Charge, Students Welfare (Wellness Counselling)",
																}),
															],
														}),
													],
												}),
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										style: {
											display: "flex",
											justifyContent: "space-around",
											gap: "10px",
											marginTop: "30px",
										},
										className: "wellness-counselling-ce",
										children: [
											(0, ot.jsxs)("div", {
												className: "counselling",
												style: {
													backgroundColor: "#fff1f2",
													padding: "20px 40px",
												},
												children: [
													(0, ot.jsxs)("div", {
														className: "wellness-sub-header",
														style: {
															marginBottom: "20px",
															display: "flex",
															alignItems: "center",
															gap: "15px",
															fontWeight: "600",
															color: "#f43f5e",
														},
														children: [
															(0, ot.jsx)(lt, {}),
															(0, ot.jsx)("p", { children: "Health Centre " }),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "fs",
														style: {
															borderBottom: "1px solid #d4d4d8",
															paddingBottom: "10px",
														},
														children: [
															(0, ot.jsx)("p", {
																children:
																	"The Health centre is served by a panel of visiting Doctors with specialization in General medicine, Gynecologist, Psychiatrist and Pediatrics.",
															}),
															(0, ot.jsx)("p", {
																children:
																	"The Health centre is staffed by Nurses round the clock with availibility and Ambulance 24x7",
															}),
														],
													}),
													(0, ot.jsxs)("div", {
														className: "wellness-link",
														style: {
															display: "flex",
															alignItems: "center",
															gap: "10px",
															marginTop: "20px",
															cursor: "pointer",
														},
														children: [
															(0, ot.jsx)("p", {
																onClick: function () {
																	return r(e);
																},
																children: "Health Centre ",
															}),
															(0, ot.jsx)(In, {}),
														],
													}),
												],
											}),
											(0, ot.jsxs)("div", {
												className: "wellness-center",
												style: {
													backgroundColor: "#fff1f2",
													padding: "20px 30px",
												},
												children: [
													(0, ot.jsxs)("div", {
														className: "wellness-sub-header",
														style: {
															marginBottom: "20px",
															display: "flex",
															alignItems: "center",
															gap: "15px",
															fontWeight: "600",
															color: "#f43f5e",
														},
														children: [
															(0, ot.jsx)(Dn, {}),
															(0, ot.jsx)("p", {
																children: "Counselling Centre",
															}),
														],
													}),
													(0, ot.jsx)("div", {
														className: "fs",
														children: (0, ot.jsx)("p", {
															style: {
																borderBottom: "1px solid #d4d4d8",
																paddingBottom: "63px",
															},
															children:
																"The Counselling centre at IIT Dharwad provides assistance and counselling Services to all residents of the campus.",
														}),
													}),
													(0, ot.jsxs)("div", {
														className: "wellness-link",
														style: {
															display: "flex",
															alignItems: "center",
															gap: "10px",
															marginTop: "20px",
															cursor: "pointer",
														},
														children: [
															(0, ot.jsx)("p", {
																onClick: function () {
																	return r(n);
																},
																children: "Counselling Centre ",
															}),
															(0, ot.jsx)(In, { style: { color: "#be185d" } }),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
							(0, ot.jsxs)("div", {
								style: { display: "flex", justifyContent: "space-around" },
								children: [
									(0, ot.jsxs)("div", {
										className: "wellness-centre",
										ref: e,
										style: { marginTop: "30px", marginRight: "10px" },
										children: [
											(0, ot.jsx)("p", {
												className: "sub-header",
												style: {
													marginBottom: "30px",
													marginTop: "30px",
													marginLeft: "20px",
													paddingLeft: "10px",
													borderLeft: "4px solid red",
												},
												children: "IIT Dharwad visiting Doctors",
											}),
											(0, ot.jsxs)("div", {
												className: "fs",
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "10px",
													paddingLeft: "30px",
												},
												children: [
													(0, ot.jsx)("li", {
														children:
															"Dr. Shivangi Yeledhalli, General Physician",
													}),
													(0, ot.jsx)("li", {
														children: "Dr. SS Mudhakavi, General Physician",
													}),
													(0, ot.jsx)("li", {
														children: "Dr. K.V Achyatha, Pediatrician",
													}),
													(0, ot.jsx)("li", {
														children:
															"Dr. Reshma Rathod, Consultant Obstetrician & Gynecologist",
													}),
													(0, ot.jsx)("li", {
														children:
															"Dr. Aditya Pandrangi, Consultant Psychiatrist",
													}),
												],
											}),
										],
									}),
									(0, ot.jsxs)("div", {
										className: "counselling-centre",
										ref: n,
										style: { marginTop: "30px" },
										children: [
											(0, ot.jsx)("p", {
												className: "sub-header",
												style: {
													marginBottom: "30px",
													marginTop: "30px",
													paddingLeft: "10px",
													borderLeft: "4px solid red",
												},
												children: "Counselling Psychologists",
											}),
											(0, ot.jsxs)("div", {
												className: "fs",
												style: {
													display: "flex",
													flexDirection: "column",
													gap: "10px",
												},
												children: [
													(0, ot.jsx)("p", {
														style: { fontSize: "1.4rem", fontWeight: "600" },
														children: "Online Providers",
													}),
													(0, ot.jsx)("li", { children: "your DOST, Online" }),
													(0, ot.jsx)("li", { children: "teleMANASA, Online" }),
													(0, ot.jsx)("li", {
														children: "Volunteering in house, Psychologist",
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
				});
			}
			function Ln() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "Hostel-Rules",
						children: [
							(0, ot.jsxs)("div", {
								className: "intra",
								children: [
									"  ",
									(0, ot.jsx)("p", {
										children: "Access only through INTRANET",
									}),
									(0, ot.jsxs)("div", {
										style: { display: "flex", gap: "5px" },
										children: [
											(0, ot.jsx)("p", { children: "For Intranet" }),
											(0, ot.jsx)($e, {
												to: "https://intranet.iitdh.ac.in:444/",
												children: (0, ot.jsx)("p", {
													style: { color: "#0284c7", cursor: "pointer" },
													children: "Click here",
												}),
											}),
										],
									}),
								],
							}),
							(0, ot.jsx)($e, {
								to: "/",
								children: (0, ot.jsxs)("div", {
									className: "link-class",
									style: {
										backgroundColor: "#fecaca",
										float: "left",
										borderRadius: "5px",
										padding: "5px",
										display: "flex",
										fontSize: "1rem",
										margin: "20px",
										alignItems: "center",
										color: "",
										justifyContent: "center",
										width: "170px",
									},
									children: [
										(0, ot.jsx)(kt, {}),
										(0, ot.jsx)("p", {
											style: { padding: "10px 5px 10px 5px" },
											children: "Go to Home Page",
										}),
									],
								}),
							}),
						],
					}),
				});
			}
			function Mn() {
				return (0, ot.jsx)(ot.Fragment, {
					children: (0, ot.jsxs)("div", {
						className: "Hostel-Maintain",
						children: [
							(0, ot.jsxs)("div", {
								className: "intra",
								children: [
									"  ",
									(0, ot.jsx)("p", {
										children: "Access only through INTRANET",
									}),
									(0, ot.jsxs)("div", {
										style: { display: "flex", gap: "5px" },
										children: [
											(0, ot.jsx)("p", { children: "For Intranet" }),
											(0, ot.jsx)($e, {
												to: "https://intranet.iitdh.ac.in:444/",
												children: (0, ot.jsx)("p", {
													style: { color: "#0284c7", cursor: "pointer" },
													children: "Click here",
												}),
											}),
										],
									}),
								],
							}),
							(0, ot.jsx)($e, {
								to: "/",
								children: (0, ot.jsxs)("div", {
									className: "link-class",
									style: {
										backgroundColor: "#fecaca",
										float: "left",
										borderRadius: "5px",
										padding: "5px",
										display: "flex",
										fontSize: "1rem",
										margin: "20px",
										alignItems: "center",
										color: "",
										justifyContent: "center",
										width: "170px",
									},
									children: [
										(0, ot.jsx)(kt, {}),
										(0, ot.jsx)("p", {
											style: { padding: "10px 5px 10px 5px" },
											children: "Go to Home Page",
										}),
									],
								}),
							}),
						],
					}),
				});
			}
			var An = function () {
					function e() {
						var e = c((0, t.useState)(0), 2),
							n = e[0],
							r = e[1];
						return (
							(0, t.useEffect)(function () {
								var e = Number(localStorage.getItem("visitCounter")) || 0;
								r(e + 1);
							}, []),
							(0, t.useEffect)(
								function () {
									localStorage.setItem("visitCounter", n);
								},
								[n]
							),
							(0, ot.jsx)("p", { children: n })
						);
					}
					var n = c((0, t.useState)("black"), 2);
					n[0], n[1];
					return (0, ot.jsxs)(Ue, {
						children: [
							(0, ot.jsx)(kn, {}),
							(0, ot.jsx)(ct, {
								children: (0, ot.jsxs)(_e, {
									children: [
										(0, ot.jsx)(Ie, {
											path: "/",
											element: (0, ot.jsx)(Yt, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/dean_associate_deans",
											element: (0, ot.jsx)(Dt, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/sw_division_organogram",
											element: (0, ot.jsx)(It, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/forms",
											element: (0, ot.jsx)(qt, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/admnistrative_office",
											element: (0, ot.jsx)(Zt, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/hostels",
											element: (0, ot.jsx)(sn, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/mess_canteen",
											element: (0, ot.jsx)(fn, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/gymkhana",
											element: (0, ot.jsx)(Sn, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/sports",
											element: (0, ot.jsx)(Nn, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/student_life",
											element: (0, ot.jsx)(Rn, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/wellness",
											element: (0, ot.jsx)(Pn, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/hostel_rules",
											element: (0, ot.jsx)(Ln, {}),
										}),
										(0, ot.jsx)(Ie, {
											path: "/hostel-maintenance",
											element: (0, ot.jsx)(Mn, {}),
										}),
									],
								}),
							}),
							(0, ot.jsx)(e, {}),
						],
					});
				},
				On = function (e) {
					e &&
						e instanceof Function &&
						n
							.e(787)
							.then(n.bind(n, 787))
							.then(function (t) {
								var n = t.getCLS,
									r = t.getFID,
									a = t.getFCP,
									l = t.getLCP,
									i = t.getTTFB;
								n(e), r(e), a(e), l(e), i(e);
							});
				};
			a
				.createRoot(document.getElementById("root"))
				.render((0, ot.jsx)(t.StrictMode, { children: (0, ot.jsx)(An, {}) })),
				On();
		})();
})();
//# sourceMappingURL=main.66e0f220.js.map
