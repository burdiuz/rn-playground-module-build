'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var $schema = "./node_modules/@eva-design/dss/schema/schema.json";
var version = 1;
var strict = {
	"text-heading-1-font-size": 36,
	"text-heading-1-line-height": 48,
	"text-heading-1-font-weight": "800",
	"text-heading-2-font-size": 32,
	"text-heading-2-line-height": 40,
	"text-heading-2-font-weight": "800",
	"text-heading-3-font-size": 30,
	"text-heading-3-line-height": 40,
	"text-heading-3-font-weight": "800",
	"text-heading-4-font-size": 26,
	"text-heading-4-line-height": 32,
	"text-heading-4-font-weight": "800",
	"text-heading-5-font-size": 22,
	"text-heading-5-line-height": 32,
	"text-heading-5-font-weight": "800",
	"text-heading-6-font-size": 18,
	"text-heading-6-line-height": 24,
	"text-heading-6-font-weight": "800",
	"text-subtitle-1-font-size": 15,
	"text-subtitle-1-line-height": 24,
	"text-subtitle-1-font-weight": "600",
	"text-subtitle-2-font-size": 13,
	"text-subtitle-2-line-height": 24,
	"text-subtitle-2-font-weight": "600",
	"text-paragraph-1-font-size": 15,
	"text-paragraph-1-line-height": 20,
	"text-paragraph-1-font-weight": "400",
	"text-paragraph-2-font-size": 13,
	"text-paragraph-2-line-height": 16,
	"text-paragraph-2-font-weight": "400",
	"text-caption-1-font-size": 12,
	"text-caption-1-line-height": 16,
	"text-caption-1-font-weight": "400",
	"text-caption-2-font-size": 12,
	"text-caption-2-line-height": 16,
	"text-caption-2-font-weight": "600",
	"text-label-font-size": 12,
	"text-label-line-height": 16,
	"text-label-font-weight": "800",
	"text-font-family": "System"
};
var components = {
	Avatar: {
		meta: {
			scope: "all",
			parameters: {
				roundCoefficient: {
					type: "number"
				},
				width: {
					type: "number"
				},
				height: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				shape: {
					round: {
						"default": true
					},
					rounded: {
						"default": false
					},
					square: {
						"default": false
					}
				},
				size: {
					tiny: {
						"default": false
					},
					small: {
						"default": false
					},
					medium: {
						"default": true
					},
					large: {
						"default": false
					},
					giant: {
						"default": false
					}
				}
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
				},
				variantGroups: {
					shape: {
						round: {
							roundCoefficient: 0.5
						},
						rounded: {
							roundCoefficient: 0.3
						},
						square: {
							roundCoefficient: 0
						}
					},
					size: {
						tiny: {
							width: 24,
							height: 24
						},
						small: {
							width: 32,
							height: 32
						},
						medium: {
							width: 40,
							height: 40
						},
						large: {
							width: 48,
							height: 48
						},
						giant: {
							width: 56,
							height: 56
						}
					}
				}
			}
		}
	},
	BottomNavigationTab: {
		meta: {
			scope: "mobile",
			parameters: {
				paddingHorizontal: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				iconMarginVertical: {
					type: "number"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				textMarginVertical: {
					type: "number"
				},
				textColor: {
					type: "string"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
				selected: {
					"default": false,
					priority: 1,
					scope: "mobile"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					iconWidth: 24,
					iconHeight: 24,
					iconMarginVertical: 2,
					iconTintColor: "color-basic-500",
					textMarginVertical: 2,
					textFontFamily: "text-font-family",
					textFontSize: "text-caption-2-font-size",
					textLineHeight: "text-caption-2-line-height",
					textFontWeight: "text-caption-2-font-weight",
					textColor: "color-basic-600",
					state: {
						selected: {
							iconTintColor: "color-primary-default",
							textColor: "text-primary-color"
						}
					}
				}
			}
		}
	},
	BottomNavigation: {
		meta: {
			scope: "mobile",
			parameters: {
				minHeight: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				borderTopColor: {
					type: "string"
				},
				borderTopWidth: {
					type: "number"
				},
				indicatorHeight: {
					type: "number"
				},
				indicatorBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				},
				noIndicator: {
					"default": false
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					minHeight: 56,
					paddingVertical: 4,
					backgroundColor: "background-basic-color-1",
					indicatorHeight: 4,
					indicatorBackgroundColor: "color-primary-default"
				}
			},
			noIndicator: {
				mapping: {
					indicatorHeight: 0,
					indicatorBackgroundColor: "transparent"
				}
			}
		}
	},
	Button: {
		meta: {
			scope: "all",
			parameters: {
				minWidth: {
					type: "number"
				},
				minHeight: {
					type: "number"
				},
				paddingHorizontal: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				borderWidth: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				textColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				iconMarginHorizontal: {
					type: "number"
				}
			},
			appearances: {
				filled: {
					"default": true
				},
				outline: {
					"default": false
				},
				ghost: {
					"default": false
				}
			},
			variantGroups: {
				status: {
					basic: {
						"default": false
					},
					primary: {
						"default": true
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					},
					control: {
						"default": false
					}
				},
				size: {
					tiny: {
						"default": false
					},
					small: {
						"default": false
					},
					medium: {
						"default": true
					},
					large: {
						"default": false
					},
					giant: {
						"default": false
					}
				}
			},
			states: {
				disabled: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 1,
					scope: "all"
				}
			}
		},
		appearances: {
			filled: {
				mapping: {
					borderRadius: 4,
					borderWidth: 1,
					textColor: "text-control-color",
					iconTintColor: "text-control-color",
					iconMarginHorizontal: 4,
					textFontFamily: "text-font-family",
					state: {
						disabled: {
							borderColor: "color-basic-transparent-300",
							backgroundColor: "color-basic-transparent-300",
							textColor: "text-hint-color",
							iconTintColor: "text-hint-color"
						}
					}
				},
				variantGroups: {
					status: {
						basic: {
							borderColor: "background-basic-color-3",
							backgroundColor: "background-basic-color-3",
							textColor: "background-alternative-color-1",
							iconTintColor: "background-alternative-color-1",
							state: {
								active: {
									borderColor: "color-basic-active",
									backgroundColor: "color-basic-active",
									textColor: "color-basic-700",
									iconTintColor: "color-basic-700"
								}
							}
						},
						primary: {
							borderColor: "color-primary-default",
							backgroundColor: "color-primary-default",
							state: {
								active: {
									borderColor: "color-primary-active",
									backgroundColor: "color-primary-active"
								}
							}
						},
						success: {
							borderColor: "color-success-default",
							backgroundColor: "color-success-default",
							state: {
								active: {
									borderColor: "color-success-active",
									backgroundColor: "color-success-active"
								}
							}
						},
						info: {
							borderColor: "color-info-default",
							backgroundColor: "color-info-default",
							state: {
								active: {
									borderColor: "color-info-active",
									backgroundColor: "color-info-active"
								}
							}
						},
						warning: {
							borderColor: "color-warning-default",
							backgroundColor: "color-warning-default",
							state: {
								active: {
									borderColor: "color-warning-active",
									backgroundColor: "color-warning-active"
								}
							}
						},
						danger: {
							borderColor: "color-danger-default",
							backgroundColor: "color-danger-default",
							state: {
								active: {
									borderColor: "color-danger-active",
									backgroundColor: "color-danger-active"
								}
							}
						},
						control: {
							backgroundColor: "color-basic-100",
							borderColor: "color-basic-100",
							textColor: "color-basic-800",
							iconTintColor: "color-basic-800",
							state: {
								active: {
									backgroundColor: "color-basic-300",
									borderColor: "color-basic-300"
								},
								disabled: {
									backgroundColor: "color-basic-300",
									borderColor: "color-basic-300",
									textColor: "color-basic-500",
									iconTintColor: "color-basic-500"
								}
							}
						}
					},
					size: {
						tiny: {
							minWidth: 24,
							minHeight: 24,
							paddingHorizontal: 6,
							paddingVertical: 6,
							textFontSize: 10,
							textLineHeight: 12,
							textFontWeight: "bold",
							textMarginHorizontal: 6,
							iconWidth: 12,
							iconHeight: 12,
							iconMarginHorizontal: 6
						},
						small: {
							minHeight: 32,
							minWidth: 32,
							paddingHorizontal: 8,
							paddingVertical: 8,
							textFontSize: 12,
							textLineHeight: 16,
							textFontWeight: "bold",
							textMarginHorizontal: 8,
							iconWidth: 16,
							iconHeight: 16,
							iconMarginHorizontal: 8
						},
						medium: {
							minHeight: 40,
							minWidth: 40,
							paddingHorizontal: 10,
							paddingVertical: 12,
							textFontSize: 14,
							textLineHeight: 16,
							textFontWeight: "bold",
							textMarginHorizontal: 10,
							iconWidth: 16,
							iconHeight: 16,
							iconMarginHorizontal: 10
						},
						large: {
							minHeight: 48,
							minWidth: 48,
							paddingHorizontal: 10,
							paddingVertical: 14,
							textFontSize: 16,
							textLineHeight: 20,
							textFontWeight: "bold",
							textMarginHorizontal: 10,
							iconWidth: 20,
							iconHeight: 20,
							iconMarginHorizontal: 10
						},
						giant: {
							minHeight: 56,
							minWidth: 56,
							paddingHorizontal: 12,
							paddingVertical: 16,
							textFontSize: 18,
							textLineHeight: 24,
							textMarginHorizontal: 12,
							iconWidth: 24,
							iconHeight: 24,
							iconMarginHorizontal: 12
						}
					}
				}
			},
			outline: {
				mapping: {
					state: {
						active: {
							backgroundColor: "color-primary-transparent-200"
						},
						disabled: {
							backgroundColor: "color-basic-transparent-200",
							borderColor: "color-basic-transparent-300"
						}
					}
				},
				variantGroups: {
					status: {
						basic: {
							backgroundColor: "color-basic-transparent-100",
							borderColor: "color-basic-600",
							textColor: "text-hint-color",
							iconTintColor: "text-hint-color",
							state: {
								active: {
									borderColor: "color-basic-600",
									backgroundColor: "color-basic-transparent-300",
									textColor: "text-hint-color",
									iconTintColor: "text-hint-color"
								}
							}
						},
						primary: {
							backgroundColor: "color-primary-transparent-100",
							textColor: "text-primary-color",
							iconTintColor: "text-primary-color",
							state: {
								active: {
									backgroundColor: "color-primary-transparent-200"
								}
							}
						},
						success: {
							backgroundColor: "color-success-transparent-100",
							textColor: "text-success-color",
							iconTintColor: "text-success-color",
							state: {
								active: {
									backgroundColor: "color-success-transparent-200"
								}
							}
						},
						info: {
							backgroundColor: "color-info-transparent-100",
							textColor: "text-info-color",
							iconTintColor: "text-info-color",
							state: {
								active: {
									backgroundColor: "color-info-transparent-200"
								}
							}
						},
						warning: {
							backgroundColor: "color-warning-transparent-100",
							textColor: "text-warning-color",
							iconTintColor: "text-warning-color",
							state: {
								active: {
									backgroundColor: "color-warning-transparent-200"
								}
							}
						},
						danger: {
							backgroundColor: "color-danger-transparent-100",
							textColor: "text-danger-color",
							iconTintColor: "text-danger-color",
							state: {
								active: {
									backgroundColor: "color-danger-transparent-200"
								}
							}
						},
						control: {
							backgroundColor: "color-basic-control-transparent-100",
							borderColor: "color-basic-100",
							textColor: "color-basic-100",
							iconTintColor: "color-basic-100",
							state: {
								active: {
									borderColor: "color-basic-100",
									backgroundColor: "color-basic-control-transparent-300"
								},
								disabled: {
									borderColor: "color-basic-transparent-300",
									backgroundColor: "color-basic-transparent-200",
									textColor: "color-basic-transparent-600",
									iconTintColor: "color-basic-transparent-600"
								}
							}
						}
					}
				}
			},
			ghost: {
				mapping: {
					state: {
						disabled: {
							backgroundColor: "color-basic-transparent-200",
							borderColor: "color-basic-transparent-200",
							textColor: "color-basic-transparent-600",
							iconTintColor: "color-basic-transparent-600"
						}
					}
				},
				variantGroups: {
					status: {
						basic: {
							borderColor: "transparent",
							backgroundColor: "transparent",
							textColor: "text-hint-color",
							iconTintColor: "text-hint-color",
							state: {
								active: {
									borderColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-200",
									textColor: "text-hint-color",
									iconTintColor: "text-hint-color"
								}
							}
						},
						primary: {
							borderColor: "transparent",
							backgroundColor: "transparent",
							textColor: "text-primary-color",
							iconTintColor: "text-primary-color",
							state: {
								active: {
									borderColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-200",
									textColor: "text-primary-color",
									iconTintColor: "text-primary-color"
								}
							}
						},
						success: {
							borderColor: "transparent",
							backgroundColor: "transparent",
							textColor: "text-success-color",
							iconTintColor: "text-success-color",
							state: {
								active: {
									borderColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-200",
									textColor: "text-success-color",
									iconTintColor: "text-success-color"
								}
							}
						},
						info: {
							borderColor: "transparent",
							backgroundColor: "transparent",
							textColor: "text-info-color",
							iconTintColor: "text-info-color",
							state: {
								active: {
									borderColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-200",
									textColor: "text-info-color",
									iconTintColor: "text-info-color"
								}
							}
						},
						warning: {
							borderColor: "transparent",
							backgroundColor: "transparent",
							textColor: "text-warning-color",
							iconTintColor: "text-warning-color",
							state: {
								active: {
									borderColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-200",
									textColor: "text-warning-color",
									iconTintColor: "text-warning-color"
								}
							}
						},
						danger: {
							borderColor: "transparent",
							backgroundColor: "transparent",
							textColor: "text-danger-color",
							iconTintColor: "text-danger-color",
							state: {
								active: {
									borderColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-200",
									textColor: "text-danger-color",
									iconTintColor: "text-danger-color"
								}
							}
						},
						control: {
							borderColor: "transparent",
							backgroundColor: "transparent",
							textColor: "color-basic-100",
							iconTintColor: "color-basic-100",
							state: {
								active: {
									borderColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-200",
									textColor: "color-basic-100",
									iconTintColor: "color-basic-100"
								}
							}
						}
					}
				}
			}
		}
	},
	ButtonGroup: {
		meta: {
			scope: "all",
			parameters: {
				borderRadius: {
					type: "number"
				},
				borderWidth: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				dividerBackgroundColor: {
					type: "string"
				},
				dividerWidth: {
					type: "string"
				}
			},
			appearances: {
				filled: {
					"default": true
				},
				outline: {
					"default": false
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": true
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					},
					white: {
						"default": false
					}
				},
				size: {
					tiny: {
						"default": false
					},
					small: {
						"default": false
					},
					medium: {
						"default": true
					},
					large: {
						"default": false
					},
					giant: {
						"default": false
					}
				}
			},
			states: {
			}
		},
		appearances: {
			filled: {
				mapping: {
					borderWidth: 1,
					borderRadius: 8,
					dividerWidth: 1,
					borderColor: "transparent"
				},
				variantGroups: {
					size: {
						tiny: {
						},
						small: {
						},
						medium: {
						},
						large: {
						},
						giant: {
						}
					},
					status: {
						primary: {
							dividerBackgroundColor: "border-primary-color-2"
						},
						success: {
							dividerBackgroundColor: "border-success-color-2"
						},
						info: {
							dividerBackgroundColor: "border-info-color-2"
						},
						warning: {
							dividerBackgroundColor: "border-warning-color-2"
						},
						danger: {
							dividerBackgroundColor: "border-danger-color-2"
						},
						white: {
							dividerBackgroundColor: "color-basic-200"
						}
					}
				}
			},
			outline: {
				mapping: {
				},
				variantGroups: {
					status: {
						primary: {
							borderColor: "color-primary-default",
							dividerBackgroundColor: "color-primary-default"
						},
						success: {
							borderColor: "color-success-default",
							dividerBackgroundColor: "color-success-default"
						},
						info: {
							borderColor: "color-info-default",
							dividerBackgroundColor: "color-info-default"
						},
						warning: {
							borderColor: "color-warning-default",
							dividerBackgroundColor: "color-warning-default"
						},
						danger: {
							borderColor: "color-danger-default",
							dividerBackgroundColor: "color-danger-default"
						},
						white: {
							borderColor: "color-basic-100",
							dividerBackgroundColor: "color-basic-100"
						}
					}
				}
			}
		}
	},
	Calendar: {
		meta: {
			scope: "all",
			parameters: {
				paddingVertical: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				borderWidth: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				maxWidth: {
					type: "number"
				},
				maxHeight: {
					type: "number"
				},
				headerPaddingHorizontal: {
					type: "number"
				},
				headerPaddingVertical: {
					type: "number"
				},
				dividerMarginVertical: {
					type: "number"
				},
				titleFontSize: {
					type: "number"
				},
				titleFontWeight: {
					type: "string"
				},
				titleLineHeight: {
					type: "number"
				},
				titleColor: {
					type: "string"
				},
				titleFontFamily: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				weekdayTextFontSize: {
					type: "number"
				},
				weekdayTextFontWeight: {
					type: "string"
				},
				weekdayTextLineHeight: {
					type: "number"
				},
				weekdayTextColor: {
					type: "string"
				},
				weekdayTextFontFamily: {
					type: "string"
				},
				rowMinHeight: {
					type: "number"
				},
				rowMarginHorizontal: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					maxWidth: 480,
					maxHeight: 480,
					paddingVertical: 8,
					borderColor: "border-basic-color-4",
					borderWidth: 1,
					borderRadius: 4,
					headerPaddingHorizontal: 20,
					headerPaddingVertical: 16,
					titleFontSize: "text-heading-6-font-size",
					titleFontWeight: "text-heading-6-font-weight",
					titleLineHeight: "text-heading-6-line-height",
					titleColor: "border-alternative-color-1",
					titleFontFamily: "text-font-family",
					iconWidth: 24,
					iconHeight: 24,
					iconTintColor: "border-alternative-color-1",
					weekdayTextFontSize: "text-subtitle-1-font-size",
					weekdayTextFontWeight: "text-subtitle-1-font-weight",
					weekdayTextLineHeight: "text-subtitle-1-line-height",
					weekdayTextFontFamily: "text-font-family",
					weekdayTextColor: "text-hint-color",
					dividerMarginVertical: 4,
					rowMinHeight: 45,
					rowMarginHorizontal: 10
				}
			}
		}
	},
	CalendarCell: {
		meta: {
			scope: "all",
			parameters: {
				paddingHorizontal: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				borderRadius: {
					type: "string"
				},
				contentBorderWidth: {
					type: "number"
				},
				contentBorderRadius: {
					type: "string"
				},
				contentBorderColor: {
					type: "string"
				},
				contentBackgroundColor: {
					type: "string"
				},
				contentTextColor: {
					type: "string"
				},
				contentTextFontSize: {
					type: "number"
				},
				contentTextLineHeight: {
					type: "number"
				},
				contentTextFontWeight: {
					type: "number"
				},
				contentTextFontFamily: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				category: {
					day: {
						"default": true
					},
					month: {
						"default": false
					},
					year: {
						"default": false
					}
				}
			},
			states: {
				bounding: {
					scope: "all",
					priority: 0,
					"default": false
				},
				today: {
					scope: "all",
					priority: 1,
					"default": false
				},
				disabled: {
					scope: "all",
					priority: 2,
					"default": false
				},
				selected: {
					scope: "all",
					priority: 3,
					"default": false
				},
				range: {
					scope: "all",
					priority: 4,
					"default": false
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					paddingHorizontal: 1,
					paddingVertical: 0,
					backgroundColor: "transparent",
					borderRadius: 0,
					contentBorderWidth: 1,
					contentBorderRadius: 4,
					contentBorderColor: "transparent",
					contentTextFontSize: "text-subtitle-1-font-size",
					contentTextLineHeight: "text-subtitle-1-line-height",
					contentTextFontWeight: "text-subtitle-1-font-weight",
					contentTextColor: "text-basic-color",
					contentTextFontFamily: "text-font-family",
					state: {
						bounding: {
							contentTextColor: "text-hint-color"
						},
						selected: {
							contentBorderColor: "color-primary-default",
							contentBackgroundColor: "color-primary-default",
							contentTextColor: "text-control-color"
						},
						disabled: {
							contentTextColor: "color-basic-transparent-600"
						},
						today: {
							contentBackgroundColor: "color-primary-100",
							contentBorderColor: "color-primary-default",
							contentTextColor: "border-alternative-color-1"
						},
						range: {
							contentTextColor: "text-control-color",
							backgroundColor: "color-primary-default",
							borderRadius: 4
						},
						"today.range": {
							contentBackgroundColor: "color-basic-control-transparent-200",
							contentBorderColor: "color-primary-300"
						}
					}
				},
				variantGroups: {
					category: {
						month: {
							state: {
								selected: {
									contentBackgroundColor: "color-primary-default",
									contentTextColor: "text-control-color"
								}
							}
						},
						year: {
							state: {
								selected: {
									contentBackgroundColor: "color-primary-default",
									contentTextColor: "text-control-color"
								}
							}
						}
					}
				}
			}
		}
	},
	CheckBox: {
		meta: {
			scope: "all",
			parameters: {
				width: {
					type: "number"
				},
				height: {
					type: "number"
				},
				borderWidth: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				backgroundColor: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textColor: {
					type: "string"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				textLineHeight: {
					type: "number"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconBorderRadius: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				outlineWidth: {
					type: "number"
				},
				outlineHeight: {
					type: "number"
				},
				outlineBorderRadius: {
					type: "number"
				},
				outlineBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": false
					},
					success: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					},
					info: {
						"default": false
					},
					basic: {
						"default": true
					},
					control: {
						"default": false
					}
				}
			},
			states: {
				checked: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				disabled: {
					"default": false,
					priority: 1,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 2,
					scope: "all"
				},
				indeterminate: {
					"default": false,
					priority: 3,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					borderWidth: 1,
					borderRadius: 3,
					textColor: "text-basic-color",
					iconTintColor: "transparent",
					outlineBorderRadius: 6,
					outlineBackgroundColor: "transparent",
					width: 24,
					height: 24,
					iconWidth: 12,
					iconHeight: 12,
					outlineWidth: 40,
					outlineHeight: 40,
					textFontFamily: "text-font-family",
					textFontSize: "text-subtitle-2-font-size",
					textLineHeight: "text-subtitle-2-line-height",
					textFontWeight: "text-subtitle-2-font-weight",
					textMarginHorizontal: 12,
					state: {
						checked: {
							iconTintColor: "text-control-color"
						},
						indeterminate: {
							iconTintColor: "text-control-color",
							iconHeight: 3,
							iconBorderRadius: 1.5
						},
						disabled: {
							borderColor: "color-basic-transparent-300",
							backgroundColor: "color-basic-transparent-100",
							textColor: "color-basic-transparent-600"
						},
						"checked.disabled": {
							borderColor: "color-basic-transparent-600",
							backgroundColor: "color-basic-transparent-600",
							textColor: "color-basic-transparent-600"
						}
					}
				},
				variantGroups: {
					status: {
						basic: {
							backgroundColor: "background-basic-color-3",
							borderColor: "border-basic-color-4",
							state: {
								active: {
									borderColor: "text-hint-color",
									outlineBackgroundColor: "color-basic-transparent-200"
								},
								checked: {
									borderColor: "color-primary-default",
									backgroundColor: "color-primary-default"
								},
								"checked.active": {
									borderColor: "color-primary-focus"
								}
							}
						},
						primary: {
							borderColor: "color-primary-default",
							backgroundColor: "color-primary-transparent-200",
							state: {
								active: {
									borderColor: "color-primary-default",
									outlineBackgroundColor: "color-primary-transparent-200"
								},
								checked: {
									borderColor: "color-primary-default",
									backgroundColor: "color-primary-default"
								},
								"checked.active": {
									borderColor: "color-primary-default",
									backgroundColor: "color-primary-default"
								}
							}
						},
						success: {
							borderColor: "color-success-default",
							backgroundColor: "color-success-transparent-200",
							state: {
								active: {
									borderColor: "color-success-default",
									outlineBackgroundColor: "color-success-transparent-200"
								},
								checked: {
									borderColor: "color-success-default",
									backgroundColor: "color-success-default"
								},
								"checked.active": {
									borderColor: "color-success-default",
									backgroundColor: "color-success-default"
								}
							}
						},
						info: {
							borderColor: "color-info-default",
							backgroundColor: "color-info-transparent-200",
							state: {
								active: {
									borderColor: "color-info-default",
									outlineBackgroundColor: "color-info-transparent-200"
								},
								checked: {
									borderColor: "color-info-default",
									backgroundColor: "color-info-default"
								},
								"checked.active": {
									borderColor: "color-info-default",
									backgroundColor: "color-info-default"
								}
							}
						},
						warning: {
							borderColor: "color-warning-default",
							backgroundColor: "color-warning-transparent-200",
							state: {
								active: {
									borderColor: "color-warning-default",
									outlineBackgroundColor: "color-warning-transparent-200"
								},
								checked: {
									borderColor: "color-warning-default",
									backgroundColor: "color-warning-default"
								},
								"checked.active": {
									borderColor: "color-warning-default",
									backgroundColor: "color-warning-default"
								}
							}
						},
						danger: {
							borderColor: "color-danger-default",
							backgroundColor: "color-danger-transparent-200",
							state: {
								active: {
									borderColor: "color-danger-default",
									outlineBackgroundColor: "color-danger-transparent-200"
								},
								checked: {
									borderColor: "color-danger-default",
									backgroundColor: "color-danger-default"
								},
								"checked.active": {
									borderColor: "color-danger-default",
									backgroundColor: "color-danger-default"
								}
							}
						},
						control: {
							borderColor: "color-basic-100",
							backgroundColor: "color-basic-control-transparent-500",
							state: {
								active: {
									outlineBackgroundColor: "color-basic-control-transparent-200",
									borderColor: "color-basic-100"
								},
								checked: {
									iconTintColor: "color-basic-800",
									borderColor: "color-basic-100",
									backgroundColor: "color-basic-100"
								},
								"checked.active": {
									borderColor: "color-basic-100"
								},
								disabled: {
									backgroundColor: "color-basic-transparent-100",
									borderColor: "color-basic-transparent-300"
								},
								"checked.disabled": {
									backgroundColor: "color-basic-transparent-600",
									borderColor: "color-basic-transparent-600",
									iconTintColor: "color-basic-100"
								}
							}
						}
					}
				}
			}
		}
	},
	Datepicker: {
		meta: {
			scope: "all",
			parameters: {
				paddingHorizontal: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				borderWidth: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				textFontFamily: {
					type: "string"
				},
				textColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				popoverMarginHorizontal: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": true
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					},
					white: {
						"default": false
					}
				}
			},
			states: {
				disabled: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 1,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					paddingHorizontal: 16,
					paddingVertical: 14,
					borderColor: "border-basic-color-4",
					borderWidth: 1,
					borderRadius: 4,
					backgroundColor: "background-basic-color-2",
					textFontSize: "text-paragraph-1-font-size",
					textLineHeight: "text-paragraph-1-line-height",
					textFontWeight: "text-paragraph-1-font-weight",
					textFontFamily: "text-font-family",
					textColor: "text-hint-color",
					iconWidth: 20,
					iconHeight: 20,
					iconTintColor: "text-hint-color",
					popoverMarginHorizontal: 16,
					state: {
						active: {
							textColor: "background-alternative-color-1"
						},
						disabled: {
							borderColor: "border-basic-color-4",
							backgroundColor: "background-basic-color-2",
							textColor: "color-basic-transparent-600",
							iconTintColor: "text-hint-color"
						}
					}
				},
				variantGroups: {
					status: {
						primary: {
							state: {
								active: {
									borderColor: "color-primary-active",
									backgroundColor: "background-basic-color-2"
								}
							}
						},
						success: {
							state: {
								active: {
									borderColor: "color-success-active",
									backgroundColor: "background-basic-color-2"
								}
							}
						},
						info: {
							state: {
								active: {
									borderColor: "color-info-active",
									backgroundColor: "background-basic-color-2"
								}
							}
						},
						warning: {
							state: {
								active: {
									borderColor: "color-warning-active",
									backgroundColor: "background-basic-color-2"
								}
							}
						},
						danger: {
							state: {
								active: {
									borderColor: "color-danger-active",
									backgroundColor: "background-basic-color-2"
								}
							}
						}
					}
				}
			}
		}
	},
	Divider: {
		meta: {
			scope: "all",
			parameters: {
				backgroundColor: {
					type: "string"
				},
				height: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					height: 1,
					backgroundColor: "background-basic-color-3"
				}
			}
		}
	},
	Drawer: {
		meta: {
			scope: "mobile",
			parameters: {
				backgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				},
				noDivider: {
					"default": false
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					backgroundColor: "background-basic-color-1"
				}
			},
			noDivider: {
				mapping: {
				}
			}
		}
	},
	Input: {
		meta: {
			scope: "all",
			parameters: {
				paddingVertical: {
					type: "number"
				},
				paddingHorizontal: {
					type: "number"
				},
				minHeight: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderWidth: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				backgroundColor: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				textColor: {
					type: "string"
				},
				placeholderColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconMarginHorizontal: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				labelColor: {
					type: "string"
				},
				labelFontFamily: {
					type: "string"
				},
				labelFontSize: {
					type: "number"
				},
				labelLineHeight: {
					type: "number"
				},
				labelFontWeight: {
					type: "string"
				},
				labelMarginBottom: {
					type: "number"
				},
				captionMarginTop: {
					type: "number"
				},
				captionColor: {
					type: "string"
				},
				captionFontFamily: {
					type: "string"
				},
				captionFontSize: {
					type: "number"
				},
				captionLineHeight: {
					type: "number"
				},
				captionFontWeight: {
					type: "string"
				},
				captionIconWidth: {
					type: "number"
				},
				captionIconHeight: {
					type: "number"
				},
				captionIconMarginRight: {
					type: "number"
				},
				captionIconTintColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": false
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					}
				},
				size: {
					small: {
						"default": false
					},
					medium: {
						"default": true
					},
					large: {
						"default": false
					}
				}
			},
			states: {
				disabled: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				focused: {
					"default": false,
					priority: 1,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					borderRadius: 4,
					borderWidth: 1,
					paddingHorizontal: 8,
					borderColor: "border-basic-color-3",
					backgroundColor: "background-basic-color-2",
					textMarginHorizontal: 8,
					textFontFamily: "text-font-family",
					textColor: "text-hint-color",
					placeholderColor: "text-hint-color",
					iconWidth: 24,
					iconHeight: 24,
					iconMarginHorizontal: 8,
					iconTintColor: "icon-hint-color",
					labelColor: "text-hint-color",
					labelFontFamily: "text-font-family",
					labelMarginBottom: 4,
					captionMarginTop: 4,
					captionColor: "text-hint-color",
					captionFontFamily: "text-font-family",
					captionFontSize: "text-caption-1-font-size",
					captionLineHeight: "text-caption-1-line-height",
					captionFontWeight: "text-caption-1-font-weight",
					captionIconWidth: 10,
					captionIconHeight: 10,
					captionIconMarginRight: 8,
					captionIconTintColor: "icon-hint-color",
					state: {
						focused: {
							textColor: "text-basic-color",
							borderColor: "border-primary-color-1",
							iconTintColor: "icon-active-color"
						},
						disabled: {
							borderColor: "border-basic-color-3",
							textColor: "text-disabled-color",
							placeholderColor: "text-disabled-color",
							iconTintColor: "icon-disabled-color"
						}
					}
				},
				variantGroups: {
					status: {
						primary: {
							borderColor: "color-primary-default",
							iconTintColor: "color-primary-default",
							captionColor: "color-primary-default",
							captionIconTintColor: "color-primary-default",
							state: {
								focused: {
									borderColor: "color-primary-focus",
									iconTintColor: "color-primary-focus",
									captionColor: "color-primary-focus",
									captionIconTintColor: "color-primary-focus"
								}
							}
						},
						success: {
							borderColor: "color-success-default",
							iconTintColor: "color-success-default",
							captionColor: "color-success-default",
							captionIconTintColor: "color-success-default",
							state: {
								focused: {
									borderColor: "color-success-focus",
									iconTintColor: "color-success-focus",
									captionColor: "color-success-focus",
									captionIconTintColor: "color-success-focus"
								}
							}
						},
						info: {
							borderColor: "color-info-default",
							iconTintColor: "color-info-default",
							captionColor: "color-info-default",
							captionIconTintColor: "color-info-default",
							state: {
								focused: {
									borderColor: "color-info-focus",
									iconTintColor: "color-info-focus",
									captionColor: "color-info-focus",
									captionIconTintColor: "color-info-focus"
								}
							}
						},
						warning: {
							borderColor: "color-warning-default",
							iconTintColor: "color-warning-default",
							captionColor: "color-warning-default",
							captionIconTintColor: "color-warning-default",
							state: {
								focused: {
									borderColor: "color-warning-focus",
									iconTintColor: "color-warning-focus",
									captionColor: "color-warning-focus",
									captionIconTintColor: "color-warning-focus"
								}
							}
						},
						danger: {
							borderColor: "color-danger-default",
							iconTintColor: "color-danger-default",
							captionColor: "color-danger-default",
							captionIconTintColor: "color-danger-default",
							state: {
								focused: {
									borderColor: "color-danger-focus",
									iconTintColor: "color-danger-focus",
									captionColor: "color-danger-focus",
									captionIconTintColor: "color-danger-focus"
								}
							}
						}
					},
					size: {
						small: {
							minHeight: 40,
							paddingVertical: 3,
							textFontSize: "text-subtitle-2-font-size",
							textLineHeight: "text-subtitle-2-line-height",
							textFontWeight: "normal"
						},
						medium: {
							minHeight: 48,
							paddingVertical: 7,
							textFontSize: "text-subtitle-1-font-size",
							textLineHeight: "text-subtitle-1-line-height",
							textFontWeight: "normal"
						},
						large: {
							minHeight: 56,
							paddingVertical: 11,
							textFontSize: "text-subtitle-1-font-size",
							textLineHeight: "text-subtitle-1-line-height",
							textFontWeight: "normal"
						}
					}
				}
			}
		}
	},
	Layout: {
		meta: {
			scope: "mobile",
			parameters: {
				backgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				level: {
					"1": {
						"default": true
					},
					"2": {
						"default": false
					},
					"3": {
						"default": false
					},
					"4": {
						"default": false
					}
				}
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
				},
				variantGroups: {
					level: {
						"1": {
							backgroundColor: "background-basic-color-1"
						},
						"2": {
							backgroundColor: "background-basic-color-2"
						},
						"3": {
							backgroundColor: "background-basic-color-3"
						},
						"4": {
							backgroundColor: "background-basic-color-4"
						}
					}
				}
			}
		}
	},
	List: {
		meta: {
			scope: "all",
			parameters: {
				backgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					backgroundColor: "background-basic-color-2"
				}
			}
		}
	},
	ListItem: {
		meta: {
			scope: "all",
			parameters: {
				paddingVertical: {
					type: "number"
				},
				paddingHorizontal: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconMarginHorizontal: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				titleMarginHorizontal: {
					type: "number"
				},
				titleFontFamily: {
					type: "string"
				},
				titleFontSize: {
					type: "number"
				},
				titleLineHeight: {
					type: "number"
				},
				titleFontWeight: {
					type: "string"
				},
				titleColor: {
					type: "string"
				},
				descriptionColor: {
					type: "string"
				},
				descriptionFontFamily: {
					type: "string"
				},
				descriptionFontSize: {
					type: "number"
				},
				descriptionFontWeight: {
					type: "string"
				},
				descriptionLineHeight: {
					type: "number"
				},
				descriptionMarginHorizontal: {
					type: "number"
				},
				accessoryMarginHorizontal: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
				active: {
					"default": false,
					priority: 0,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					paddingHorizontal: 8,
					paddingVertical: 8,
					backgroundColor: "background-basic-color-1",
					iconWidth: 40,
					iconHeight: 40,
					iconMarginHorizontal: 8,
					iconTintColor: "text-hint-color",
					titleMarginHorizontal: 8,
					titleFontFamily: "text-font-family",
					titleFontSize: "text-subtitle-2-font-size",
					titleFontWeight: "text-subtitle-2-font-weight",
					titleLineHeight: "text-subtitle-2-line-height",
					titleColor: "text-basic-color",
					descriptionMarginHorizontal: 8,
					descriptionFontFamily: "text-font-family",
					descriptionFontSize: "text-caption-1-font-size",
					descriptionFontWeight: "text-caption-1-font-weight",
					descriptionLineHeight: "text-caption-1-line-height",
					descriptionColor: "text-hint-color",
					accessoryMarginHorizontal: 8,
					state: {
						active: {
							backgroundColor: "background-basic-color-3"
						}
					}
				}
			}
		}
	},
	Menu: {
		meta: {
			scope: "all",
			parameters: {
			},
			appearances: {
				"default": {
					"default": true
				},
				noDivider: {
					"default": false
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
				}
			},
			noDivider: {
				mapping: {
				}
			}
		}
	},
	SubMenu: {
		meta: {
			scope: "all",
			parameters: {
				subItemsPaddingHorizontal: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					subItemsPaddingHorizontal: 16
				}
			}
		}
	},
	MenuItem: {
		meta: {
			scope: "all",
			parameters: {
				indicatorWidth: {
					type: "number"
				},
				indicatorBackgroundColor: {
					type: "string"
				},
				paddingVertical: {
					type: "number"
				},
				paddingHorizontal: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconMarginHorizontal: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				titleMarginHorizontal: {
					type: "number"
				},
				titleFontFamily: {
					type: "string"
				},
				titleFontSize: {
					type: "number"
				},
				titleLineHeight: {
					type: "number"
				},
				titleFontWeight: {
					type: "string"
				},
				titleColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
				disabled: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				selected: {
					"default": false,
					priority: 1,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 2,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					paddingHorizontal: 8,
					paddingVertical: 12,
					backgroundColor: "background-basic-color-1",
					iconWidth: 20,
					iconHeight: 20,
					iconMarginHorizontal: 8,
					iconTintColor: "text-hint-color",
					titleMarginHorizontal: 8,
					titleFontFamily: "text-font-family",
					titleFontSize: "text-subtitle-2-font-size",
					titleFontWeight: "text-subtitle-2-font-weight",
					titleLineHeight: "text-subtitle-2-line-height",
					titleColor: "text-basic-color",
					indicatorWidth: 0,
					indicatorBackgroundColor: "transparent",
					state: {
						active: {
							backgroundColor: "color-basic-transparent-100"
						},
						selected: {
							indicatorWidth: 4,
							indicatorBackgroundColor: "color-primary-default",
							backgroundColor: "color-primary-transparent-100",
							titleColor: "color-primary-default",
							iconTintColor: "color-primary-default"
						},
						disabled: {
							titleColor: "text-disabled-color",
							iconTintColor: "icon-disabled-color"
						}
					}
				}
			}
		}
	},
	OverflowMenu: {
		meta: {
			scope: "all",
			parameters: {
				borderRadius: {
					type: "number"
				},
				maxHeight: {
					type: "number"
				},
				indicatorBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				},
				noDivider: {
					"default": false
				}
			},
			states: {
			},
			variantGroups: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					borderRadius: 12,
					indicatorBackgroundColor: "transparent",
					maxHeight: 256
				}
			},
			noDivider: {
				mapping: {
				}
			}
		}
	},
	Popover: {
		meta: {
			scope: "all",
			parameters: {
				minWidth: {
					type: "number"
				},
				minHeight: {
					type: "number"
				},
				maxWidth: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				indicatorWidth: {
					type: "number"
				},
				indicatorHeight: {
					type: "number"
				},
				indicatorBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					minWidth: 56,
					minHeight: 32,
					maxWidth: 256,
					borderRadius: 8,
					backgroundColor: "background-basic-color-1",
					indicatorWidth: 6,
					indicatorHeight: 6,
					indicatorBackgroundColor: "background-basic-color-1"
				}
			}
		}
	},
	Select: {
		meta: {
			scope: "all",
			parameters: {
				minWidth: {
					type: "number"
				},
				minHeight: {
					type: "number"
				},
				paddingHorizontal: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				borderWidth: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				placeholderMarginHorizontal: {
					type: "number"
				},
				placeholderFontFamily: {
					type: "string"
				},
				placeholderFontSize: {
					type: "number"
				},
				placeholderLineHeight: {
					type: "number"
				},
				placeholderFontWeight: {
					type: "string"
				},
				placeholderColor: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				textColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				iconMarginHorizontal: {
					type: "number"
				},
				optionsListMaxHeight: {
					type: "number"
				},
				optionsListBorderRadius: {
					type: "number"
				},
				optionsListBorderColor: {
					type: "string"
				},
				optionsListBorderWidth: {
					type: "number"
				},
				labelColor: {
					type: "string"
				},
				labelFontFamily: {
					type: "string"
				},
				labelFontSize: {
					type: "number"
				},
				labelLineHeight: {
					type: "number"
				},
				labelFontWeight: {
					type: "string"
				},
				labelMarginBottom: {
					type: "number"
				},
				outlinePadding: {
					type: "number"
				},
				outlineBorderRadius: {
					type: "number"
				},
				outlineBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": true
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					}
				}
			},
			states: {
				disabled: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 1,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					optionsListMaxHeight: 220,
					optionsListBorderRadius: 4,
					optionsListBorderColor: "border-basic-color-4",
					optionsListBorderWidth: 1,
					borderRadius: 4,
					borderWidth: 1,
					paddingHorizontal: 8,
					borderColor: "border-basic-color-3",
					backgroundColor: "background-basic-color-2",
					minHeight: 48,
					paddingVertical: 7,
					placeholderMarginHorizontal: 8,
					placeholderColor: "text-hint-color",
					placeholderFontWeight: "text-paragraph-1-font-weight",
					placeholderFontSize: "text-subtitle-1-font-size",
					placeholderLineHeight: "text-paragraph-1-line-height",
					textMarginHorizontal: 8,
					textColor: "border-alternative-color-1",
					textFontWeight: "text-subtitle-1-font-weight",
					textFontSize: "text-subtitle-1-font-size",
					textFontFamily: "text-font-family",
					textLineHeight: "text-subtitle-1-line-height",
					iconWidth: 24,
					iconHeight: 24,
					iconMarginHorizontal: 8,
					iconTintColor: "text-hint-color",
					labelColor: "text-hint-color",
					labelFontFamily: "text-font-family",
					labelMarginBottom: 4,
					outlineBackgroundColor: "transparent",
					outlinePadding: 4,
					outlineBorderRadius: 4,
					state: {
						active: {
							outlineBackgroundColor: "outline-color",
							backgroundColor: "background-basic-color-1",
							iconTintColor: "border-alternative-color-1"
						},
						disabled: {
							borderColor: "border-basic-color-4",
							placeholderColor: "text-disabled-color",
							textColor: "text-disabled-color",
							iconTintColor: "icon-disabled-color"
						}
					}
				},
				variantGroups: {
					status: {
						primary: {
							state: {
								active: {
									borderColor: "color-primary-default"
								}
							}
						},
						success: {
							state: {
								active: {
									borderColor: "color-success-default"
								}
							}
						},
						info: {
							state: {
								active: {
									borderColor: "color-info-default"
								}
							}
						},
						warning: {
							state: {
								active: {
									borderColor: "color-warning-default"
								}
							}
						},
						danger: {
							state: {
								active: {
									borderColor: "color-danger-default"
								}
							}
						}
					}
				}
			}
		}
	},
	SelectGroupOption: {
		meta: {
			scope: "all",
			parameters: {
				backgroundColor: {
					type: "string"
				},
				itemPaddingHorizontal: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					backgroundColor: "background-basic-color-1",
					itemPaddingHorizontal: 20
				}
			}
		}
	},
	SelectOption: {
		meta: {
			scope: "all",
			parameters: {
				paddingVertical: {
					type: "number"
				},
				paddingHorizontal: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				multiSelectBackgroundColor: {
					type: "string"
				},
				multiSelectTextColor: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				textColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
				disabled: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 1,
					scope: "all"
				},
				selected: {
					"default": false,
					priority: 2,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					paddingHorizontal: 8,
					paddingVertical: 8,
					textMarginHorizontal: 8,
					backgroundColor: "background-basic-color-1",
					multiSelectBackgroundColor: "background-basic-color-1",
					multiSelectTextColor: "background-alternative-color-1",
					textFontFamily: "text-font-family",
					textFontSize: "text-subtitle-1-font-size",
					textFontWeight: "text-subtitle-1-font-weight",
					textLineHeight: "text-subtitle-2-line-height",
					textColor: "background-alternative-color-1",
					state: {
						active: {
							backgroundColor: "background-basic-color-2"
						},
						selected: {
							textColor: "text-alternate-color",
							backgroundColor: "color-primary-default"
						},
						disabled: {
							textColor: "text-hint-color",
							multiSelectTextColor: "text-hint-color"
						}
					}
				}
			}
		}
	},
	Radio: {
		meta: {
			scope: "all",
			parameters: {
				width: {
					type: "number"
				},
				height: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderWidth: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				backgroundColor: {
					type: "string"
				},
				textColor: {
					type: "string"
				},
				textFontFamily: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconBorderRadius: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				outlineWidth: {
					type: "number"
				},
				outlineHeight: {
					type: "number"
				},
				outlineBorderRadius: {
					type: "number"
				},
				outlineBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": false
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					},
					basic: {
						"default": true
					},
					control: {
						"default": false
					}
				}
			},
			states: {
				checked: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				disabled: {
					"default": false,
					priority: 1,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 2,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					borderWidth: 1,
					textColor: "text-basic-color",
					iconTintColor: "transparent",
					outlineBackgroundColor: "transparent",
					width: 24,
					height: 24,
					iconWidth: 16,
					iconHeight: 16,
					outlineWidth: 40,
					outlineHeight: 40,
					borderRadius: 12,
					iconBorderRadius: 8,
					outlineBorderRadius: 20,
					textMarginHorizontal: 12,
					textFontFamily: "text-font-family",
					textFontSize: "text-subtitle-2-font-size",
					textLineHeight: "text-subtitle-2-line-height",
					textFontWeight: "text-subtitle-2-font-weight",
					state: {
						checked: {
							backgroundColor: "transparent"
						},
						disabled: {
							backgroundColor: "color-basic-transparent-200",
							borderColor: "color-basic-transparent-100",
							textColor: "text-hint-color"
						},
						"checked.active": {
							backgroundColor: "background-basic-color-1"
						},
						"checked.disabled": {
							backgroundColor: "transparent",
							iconTintColor: "color-basic-transparent-600",
							borderColor: "color-basic-transparent-600",
							textColor: "text-hint-color"
						}
					}
				},
				variantGroups: {
					status: {
						basic: {
							backgroundColor: "background-basic-color-4",
							borderColor: "border-basic-color-5",
							state: {
								active: {
									borderColor: "text-hint-color",
									backgroundColor: "color-basic-transparent-500",
									outlineBackgroundColor: "color-basic-transparent-200"
								},
								checked: {
									borderColor: "color-primary-default",
									iconTintColor: "color-primary-default"
								},
								"checked.active": {
									borderColor: "color-primary-default"
								}
							}
						},
						primary: {
							borderColor: "color-primary-default",
							backgroundColor: "color-primary-transparent-200",
							state: {
								active: {
									borderColor: "color-primary-default",
									backgroundColor: "color-primary-transparent-500",
									outlineBackgroundColor: "color-primary-transparent-200"
								},
								checked: {
									borderColor: "color-primary-default",
									iconTintColor: "color-primary-default"
								},
								"checked.active": {
									borderColor: "color-primary-default"
								}
							}
						},
						success: {
							borderColor: "color-success-default",
							backgroundColor: "color-success-transparent-200",
							state: {
								active: {
									borderColor: "color-success-default",
									backgroundColor: "color-success-transparent-500",
									outlineBackgroundColor: "color-success-transparent-200"
								},
								checked: {
									borderColor: "color-success-default",
									iconTintColor: "color-success-default"
								},
								"checked.active": {
									borderColor: "color-success-default"
								}
							}
						},
						info: {
							borderColor: "color-info-default",
							backgroundColor: "color-info-transparent-200",
							state: {
								active: {
									borderColor: "color-info-default",
									backgroundColor: "color-info-transparent-500",
									outlineBackgroundColor: "color-info-transparent-200"
								},
								checked: {
									borderColor: "color-info-default",
									iconTintColor: "color-info-default"
								},
								"checked.active": {
									borderColor: "color-info-default"
								}
							}
						},
						warning: {
							borderColor: "color-warning-default",
							backgroundColor: "color-warning-transparent-200",
							state: {
								active: {
									borderColor: "color-warning-default",
									backgroundColor: "color-warning-transparent-500",
									outlineBackgroundColor: "color-warning-transparent-200"
								},
								checked: {
									borderColor: "color-warning-default",
									iconTintColor: "color-warning-default"
								},
								"checked.active": {
									borderColor: "color-warning-default"
								}
							}
						},
						danger: {
							borderColor: "color-danger-default",
							backgroundColor: "color-danger-transparent-200",
							state: {
								active: {
									borderColor: "color-danger-default",
									backgroundColor: "color-danger-transparent-500",
									outlineBackgroundColor: "color-danger-transparent-200"
								},
								checked: {
									borderColor: "color-danger-default",
									iconTintColor: "color-danger-default"
								},
								"checked.active": {
									borderColor: "color-danger-default"
								}
							}
						},
						control: {
							borderColor: "color-basic-100",
							backgroundColor: "color-basic-control-transparent-500",
							state: {
								active: {
									outlineBackgroundColor: "color-basic-control-transparent-200",
									borderColor: "color-basic-100"
								},
								checked: {
									iconTintColor: "color-basic-100",
									borderColor: "color-basic-100",
									backgroundColor: "transparent"
								},
								"checked.active": {
									outlineBackgroundColor: "color-basic-control-transparent-200",
									borderColor: "color-basic-100"
								},
								disabled: {
									backgroundColor: "color-basic-transparent-200",
									borderColor: "color-basic-transparent-400"
								}
							}
						}
					}
				}
			}
		}
	},
	RadioGroup: {
		meta: {
			scope: "all",
			parameters: {
				padding: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					padding: 0
				}
			}
		}
	},
	Spinner: {
		meta: {
			scope: "all",
			parameters: {
				width: {
					type: "number"
				},
				height: {
					type: "number"
				},
				borderWidth: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": true
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					},
					alternative: {
						"default": false
					}
				},
				size: {
					giant: {
						"default": false
					},
					large: {
						"default": false
					},
					medium: {
						"default": true
					},
					small: {
						"default": false
					},
					tiny: {
						"default": false
					}
				}
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
				},
				variantGroups: {
					status: {
						primary: {
							borderColor: "color-primary-default"
						},
						success: {
							borderColor: "color-success-default"
						},
						info: {
							borderColor: "color-info-default"
						},
						warning: {
							borderColor: "color-warning-default"
						},
						danger: {
							borderColor: "color-danger-default"
						},
						alternative: {
							borderColor: "border-alternative-color-1"
						}
					},
					size: {
						giant: {
							width: 32,
							height: 32,
							borderWidth: 4.5,
							borderRadius: 16
						},
						large: {
							width: 28,
							height: 28,
							borderWidth: 3.9,
							borderRadius: 14
						},
						medium: {
							width: 24,
							height: 24,
							borderWidth: 3.4,
							borderRadius: 12
						},
						small: {
							width: 20,
							height: 20,
							borderWidth: 2.8,
							borderRadius: 10
						},
						tiny: {
							width: 16,
							height: 16,
							borderWidth: 2.3,
							borderRadius: 8
						}
					}
				}
			}
		}
	},
	Tab: {
		meta: {
			scope: "all",
			parameters: {
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "number"
				},
				textMarginVertical: {
					type: "number"
				},
				textColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconMarginVertical: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
				selected: {
					"default": false,
					priority: 0,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					textMarginVertical: 2,
					textFontFamily: "text-font-family",
					textFontSize: 14,
					textLineHeight: 16,
					textFontWeight: "bold",
					textColor: "text-hint-color",
					iconWidth: 24,
					iconHeight: 24,
					iconMarginVertical: 2,
					iconTintColor: "text-hint-color",
					state: {
						selected: {
							textColor: "text-primary-color",
							iconTintColor: "text-primary-color"
						}
					}
				}
			}
		}
	},
	TabBar: {
		meta: {
			scope: "all",
			parameters: {
				paddingVertical: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				indicatorHeight: {
					type: "number"
				},
				indicatorBorderRadius: {
					type: "number"
				},
				indicatorBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					paddingVertical: 4,
					backgroundColor: "background-basic-color-1",
					indicatorHeight: 4,
					indicatorBorderRadius: 2,
					indicatorBackgroundColor: "color-primary-default"
				}
			}
		}
	},
	Text: {
		meta: {
			scope: "all",
			parameters: {
				fontFamily: {
					type: "string"
				},
				fontSize: {
					type: "number"
				},
				lineHeight: {
					type: "number"
				},
				fontWeight: {
					type: "string"
				},
				color: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				},
				alternative: {
					"default": false
				},
				hint: {
					"default": false
				}
			},
			variantGroups: {
				category: {
					h1: {
						"default": false
					},
					h2: {
						"default": false
					},
					h3: {
						"default": false
					},
					h4: {
						"default": false
					},
					h5: {
						"default": false
					},
					h6: {
						"default": false
					},
					s1: {
						"default": false
					},
					s2: {
						"default": false
					},
					p1: {
						"default": true
					},
					p2: {
						"default": false
					},
					c1: {
						"default": false
					},
					c2: {
						"default": false
					},
					label: {
						"default": false
					}
				},
				status: {
					primary: {
						"default": false
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					}
				}
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					fontFamily: "text-font-family",
					color: "text-basic-color"
				},
				variantGroups: {
					category: {
						h1: {
							fontSize: "text-heading-1-font-size",
							lineHeight: "text-heading-1-line-height",
							fontWeight: "text-heading-1-font-weight"
						},
						h2: {
							fontSize: "text-heading-2-font-size",
							lineHeight: "text-heading-2-line-height",
							fontWeight: "text-heading-2-font-weight"
						},
						h3: {
							fontSize: "text-heading-3-font-size",
							lineHeight: "text-heading-3-line-height",
							fontWeight: "text-heading-4-font-weight"
						},
						h4: {
							fontSize: "text-heading-4-font-size",
							lineHeight: "text-heading-4-line-height",
							fontWeight: "text-heading-4-font-weight"
						},
						h5: {
							fontSize: "text-heading-5-font-size",
							lineHeight: "text-heading-5-line-height",
							fontWeight: "text-heading-5-font-weight"
						},
						h6: {
							fontSize: "text-heading-6-font-size",
							lineHeight: "text-heading-6-line-height",
							fontWeight: "text-heading-6-font-weight"
						},
						s1: {
							fontSize: "text-subtitle-1-font-size",
							lineHeight: "text-subtitle-1-line-height",
							fontWeight: "text-subtitle-1-font-weight"
						},
						s2: {
							fontSize: "text-subtitle-2-font-size",
							lineHeight: "text-subtitle-2-line-height",
							fontWeight: "text-subtitle-2-font-weight"
						},
						p1: {
							fontSize: "text-paragraph-1-font-size",
							lineHeight: "text-paragraph-1-line-height",
							fontWeight: "text-paragraph-1-font-weight"
						},
						p2: {
							fontSize: "text-paragraph-2-font-size",
							lineHeight: "text-paragraph-2-line-height",
							fontWeight: "text-paragraph-2-font-weight"
						},
						c1: {
							fontSize: "text-caption-1-font-size",
							lineHeight: "text-caption-1-line-height",
							fontWeight: "text-caption-1-font-weight"
						},
						c2: {
							fontSize: "text-caption-2-font-size",
							lineHeight: "text-caption-2-line-height",
							fontWeight: "text-caption-2-font-weight"
						},
						label: {
							fontSize: "text-label-font-size",
							lineHeight: "text-label-line-height",
							fontWeight: "text-label-font-weight"
						}
					},
					status: {
						primary: {
							color: "text-primary-color"
						},
						success: {
							color: "text-success-color"
						},
						info: {
							color: "text-info-color"
						},
						warning: {
							color: "text-warning-color"
						},
						danger: {
							color: "text-danger-color"
						}
					}
				}
			},
			alternative: {
				mapping: {
					color: "text-alternate-color"
				}
			},
			hint: {
				mapping: {
					color: "text-hint-color"
				}
			}
		}
	},
	Toggle: {
		meta: {
			scope: "all",
			parameters: {
				width: {
					type: "number"
				},
				height: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				borderWidth: {
					type: "number"
				},
				borderColor: {
					type: "string"
				},
				backgroundColor: {
					type: "string"
				},
				offsetValue: {
					type: "number"
				},
				thumbWidth: {
					type: "number"
				},
				thumbHeight: {
					type: "number"
				},
				thumbBorderRadius: {
					type: "number"
				},
				thumbBackgroundColor: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textFontWeight: {
					type: "string"
				},
				textLineHeight: {
					type: "number"
				},
				textColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				outlineWidth: {
					type: "number"
				},
				outlineHeight: {
					type: "number"
				},
				outlineBorderRadius: {
					type: "number"
				},
				outlineBackgroundColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
				status: {
					primary: {
						"default": false
					},
					success: {
						"default": false
					},
					info: {
						"default": false
					},
					warning: {
						"default": false
					},
					danger: {
						"default": false
					},
					basic: {
						"default": true
					},
					control: {
						"default": false
					}
				},
				size: {
					tiny: {
						"default": false
					},
					small: {
						"default": false
					},
					medium: {
						"default": true
					},
					large: {
						"default": false
					},
					giant: {
						"default": false
					}
				}
			},
			states: {
				checked: {
					"default": false,
					priority: 0,
					scope: "all"
				},
				disabled: {
					"default": false,
					priority: 1,
					scope: "all"
				},
				active: {
					"default": false,
					priority: 1,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					textMarginHorizontal: 12,
					textFontFamily: "text-font-family",
					textFontSize: "text-subtitle-2-font-size",
					textLineHeight: "text-subtitle-2-line-height",
					textFontWeight: "text-subtitle-2-font-weight",
					textColor: "text-basic-color",
					state: {
						disabled: {
							thumbBackgroundColor: "color-basic-transparent-600",
							borderColor: "color-basic-transparent-400",
							backgroundColor: "color-basic-transparent-200",
							iconTintColor: "transparent"
						},
						"checked.disabled": {
							iconTintColor: "icon-control-color"
						}
					}
				},
				variantGroups: {
					status: {
						basic: {
							borderColor: "border-basic-color-5",
							backgroundColor: "color-basic-transparent-200",
							thumbBackgroundColor: "background-basic-color-1",
							outlineBackgroundColor: "transparent",
							iconTintColor: "transparent",
							state: {
								active: {
									borderColor: "text-hint-color",
									outlineBackgroundColor: "color-basic-transparent-200",
									backgroundColor: "color-basic-transparent-500"
								},
								checked: {
									iconTintColor: "color-primary-default",
									borderColor: "color-primary-default",
									backgroundColor: "color-primary-default"
								},
								"checked.active": {
									backgroundColor: "background-primary-color-2",
									borderColor: "border-primary-color-3"
								}
							}
						},
						primary: {
							borderColor: "border-primary-color-1",
							backgroundColor: "color-primary-transparent-200",
							state: {
								active: {
									borderColor: "color-primary-default",
									backgroundColor: "color-primary-transparent-500",
									outlineBackgroundColor: "color-primary-transparent-200"
								},
								checked: {
									iconTintColor: "color-primary-default",
									borderColor: "color-primary-default",
									backgroundColor: "color-primary-default"
								},
								"checked.active": {
									borderColor: "color-primary-default"
								}
							}
						},
						success: {
							borderColor: "border-success-color-1",
							backgroundColor: "color-success-transparent-200",
							state: {
								active: {
									borderColor: "color-success-default",
									backgroundColor: "color-success-transparent-500",
									outlineBackgroundColor: "color-success-transparent-200"
								},
								checked: {
									iconTintColor: "color-success-default",
									borderColor: "color-success-default",
									backgroundColor: "color-success-default"
								},
								"checked.active": {
									borderColor: "color-success-default"
								}
							}
						},
						info: {
							borderColor: "border-info-color-1",
							backgroundColor: "color-info-transparent-200",
							state: {
								active: {
									borderColor: "color-info-default",
									backgroundColor: "color-info-transparent-500",
									outlineBackgroundColor: "color-info-transparent-200"
								},
								checked: {
									iconTintColor: "color-info-default",
									borderColor: "color-info-default",
									backgroundColor: "color-info-default"
								},
								"checked.active": {
									borderColor: "color-info-default"
								}
							}
						},
						warning: {
							borderColor: "border-warning-color-1",
							backgroundColor: "color-warning-transparent-200",
							state: {
								active: {
									borderColor: "color-warning-default",
									backgroundColor: "color-warning-transparent-500",
									outlineBackgroundColor: "color-warning-transparent-200"
								},
								checked: {
									iconTintColor: "color-warning-default",
									borderColor: "color-warning-default",
									backgroundColor: "color-warning-default"
								},
								"checked.active": {
									borderColor: "color-warning-default"
								}
							}
						},
						danger: {
							borderColor: "border-danger-color-1",
							backgroundColor: "color-danger-transparent-200",
							state: {
								active: {
									borderColor: "color-danger-default",
									backgroundColor: "color-danger-transparent-500",
									outlineBackgroundColor: "color-danger-transparent-200"
								},
								checked: {
									iconTintColor: "color-danger-default",
									borderColor: "color-danger-default",
									backgroundColor: "color-danger-default"
								},
								"checked.active": {
									borderColor: "color-danger-default"
								}
							}
						},
						control: {
							borderColor: "color-basic-100",
							backgroundColor: "color-basic-700",
							thumbBackgroundColor: "color-basic-100",
							state: {
								active: {
									outlineBackgroundColor: "color-basic-control-transparent-200",
									borderColor: "color-basic-100"
								},
								checked: {
									iconTintColor: "color-basic-700",
									borderColor: "color-basic-control-transparent-600",
									backgroundColor: "color-basic-100"
								},
								"checked.active": {
									borderColor: "color-basic-control-transparent-600",
									backgroundColor: "color-basic-100"
								}
							}
						}
					},
					size: {
						tiny: {
							width: 32,
							height: 20,
							borderRadius: 10,
							borderWidth: 0.8,
							thumbWidth: 18,
							thumbHeight: 18,
							thumbBorderRadius: 9,
							iconWidth: 9,
							iconHeight: 9,
							outlineWidth: 44,
							outlineHeight: 32,
							outlineBorderRadius: 16,
							offsetValue: 12
						},
						small: {
							width: 38,
							height: 24,
							borderRadius: 12,
							borderWidth: 0.8,
							thumbWidth: 22,
							thumbHeight: 22,
							thumbBorderRadius: 11,
							iconWidth: 11,
							iconHeight: 11,
							outlineWidth: 50,
							outlineHeight: 36,
							outlineBorderRadius: 18,
							offsetValue: 16
						},
						medium: {
							width: 52,
							height: 32,
							borderRadius: 16,
							borderWidth: 1,
							thumbWidth: 30,
							thumbHeight: 30,
							thumbBorderRadius: 15,
							iconWidth: 15,
							iconHeight: 15,
							outlineWidth: 64,
							outlineHeight: 44,
							outlineBorderRadius: 22,
							offsetValue: 20
						},
						large: {
							width: 64,
							height: 40,
							borderRadius: 20,
							borderWidth: 1.5,
							thumbWidth: 36,
							thumbHeight: 36,
							thumbBorderRadius: 18,
							iconWidth: 18,
							iconHeight: 18,
							outlineWidth: 76,
							outlineHeight: 52,
							outlineBorderRadius: 26,
							offsetValue: 24
						},
						giant: {
							width: 76,
							height: 48,
							borderRadius: 24,
							borderWidth: 2,
							thumbWidth: 44,
							thumbHeight: 44,
							thumbBorderRadius: 22,
							iconWidth: 22,
							iconHeight: 22,
							outlineWidth: 88,
							outlineHeight: 60,
							outlineBorderRadius: 30,
							offsetValue: 28
						}
					}
				}
			}
		}
	},
	Tooltip: {
		meta: {
			scope: "all",
			parameters: {
				paddingHorizontal: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				borderRadius: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				indicatorBackgroundColor: {
					type: "string"
				},
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconMarginHorizontal: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				textMarginHorizontal: {
					type: "number"
				},
				textFontFamily: {
					type: "string"
				},
				textFontSize: {
					type: "number"
				},
				textLineHeight: {
					type: "number"
				},
				textFontWeight: {
					type: "number"
				},
				textColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				}
			},
			variantGroups: {
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					paddingHorizontal: 16,
					paddingVertical: 8,
					borderRadius: 4,
					backgroundColor: "background-alternative-color-3",
					indicatorBackgroundColor: "background-alternative-color-3",
					iconWidth: 16,
					iconHeight: 16,
					iconMarginHorizontal: 4,
					iconTintColor: "text-alternate-color",
					textMarginHorizontal: 4,
					textFontFamily: "text-font-family",
					textFontSize: "text-caption-2-font-size",
					textLineHeight: "text-caption-2-line-height",
					textFontWeight: "text-caption-2-font-weight",
					textColor: "text-alternate-color"
				}
			}
		}
	},
	TopNavigation: {
		meta: {
			scope: "mobile",
			parameters: {
				minHeight: {
					type: "number"
				},
				paddingVertical: {
					type: "number"
				},
				paddingHorizontal: {
					type: "number"
				},
				backgroundColor: {
					type: "string"
				},
				titleTextAlign: {
					type: "string"
				},
				titleFontFamily: {
					type: "string"
				},
				titleFontSize: {
					type: "number"
				},
				titleLineHeight: {
					type: "number"
				},
				titleFontWeight: {
					type: "string"
				},
				titleColor: {
					type: "string"
				},
				subtitleTextAlign: {
					type: "string"
				},
				subtitleFontFamily: {
					type: "string"
				},
				subtitleFontSize: {
					type: "number"
				},
				subtitleLineHeight: {
					type: "number"
				},
				subtitleFontWeight: {
					type: "string"
				},
				subtitleColor: {
					type: "string"
				}
			},
			appearances: {
				"default": {
					"default": true
				},
				control: {
					"default": false
				}
			},
			variantGroups: {
				alignment: {
					start: {
						"default": true
					},
					center: {
						"default": false
					}
				}
			},
			states: {
			}
		},
		appearances: {
			"default": {
				mapping: {
					minHeight: 56,
					paddingVertical: 8,
					paddingHorizontal: 8,
					backgroundColor: "background-basic-color-1",
					titleFontFamily: "text-font-family",
					titleFontSize: "text-subtitle-1-font-size",
					titleLineHeight: "text-subtitle-1-line-height",
					titleFontWeight: "text-subtitle-1-font-weight",
					titleColor: "text-basic-color",
					subtitleFontFamily: "text-font-family",
					subtitleFontSize: "text-caption-1-font-size",
					subtitleLineHeight: "text-caption-1-line-height",
					subtitleFontWeight: "text-caption-1-font-weight",
					subtitleColor: "text-hint-color"
				},
				variantGroups: {
					alignment: {
						start: {
							titleTextAlign: "left",
							subtitleTextAlign: "left"
						},
						center: {
							titleTextAlign: "center",
							subtitleTextAlign: "center"
						}
					}
				}
			},
			control: {
				mapping: {
					backgroundColor: "transparent"
				}
			}
		}
	},
	TopNavigationAction: {
		meta: {
			scope: "mobile",
			parameters: {
				iconWidth: {
					type: "number"
				},
				iconHeight: {
					type: "number"
				},
				iconTintColor: {
					type: "string"
				},
				iconMarginHorizontal: {
					type: "number"
				}
			},
			appearances: {
				"default": {
					"default": true
				},
				control: {
					"default": false
				}
			},
			variantGroups: {
			},
			states: {
				active: {
					"default": false,
					priority: 0,
					scope: "all"
				}
			}
		},
		appearances: {
			"default": {
				mapping: {
					iconWidth: 24,
					iconHeight: 24,
					iconMarginHorizontal: 8,
					iconTintColor: "background-alternative-color-1",
					state: {
						active: {
							iconTintColor: "background-alternative-color-3"
						}
					}
				}
			},
			control: {
				mapping: {
					iconTintColor: "color-basic-100",
					state: {
						active: {
							iconTintColor: "color-basic-300"
						}
					}
				}
			}
		}
	}
};
var mapping = {
	$schema: $schema,
	version: version,
	strict: strict,
	components: components
};

var mapping$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$schema: $schema,
	version: version,
	strict: strict,
	components: components,
	'default': mapping
});

var light = {
	"color-basic-100": "#FFFFFF",
	"color-basic-200": "#F7F9FC",
	"color-basic-300": "#EDF1F7",
	"color-basic-400": "#E4E9F2",
	"color-basic-500": "#C5CEE0",
	"color-basic-600": "#8F9BB3",
	"color-basic-700": "#2E3A59",
	"color-basic-800": "#222B45",
	"color-basic-900": "#1A2138",
	"color-basic-1000": "#151A30",
	"color-basic-1100": "#101426",
	"color-basic-control-transparent-100": "rgba(255, 255, 255, 0.08)",
	"color-basic-control-transparent-200": "rgba(255, 255, 255, 0.16)",
	"color-basic-control-transparent-300": "rgba(255, 255, 255, 0.24)",
	"color-basic-control-transparent-400": "rgba(255, 255, 255, 0.32)",
	"color-basic-control-transparent-500": "rgba(255, 255, 255, 0.40)",
	"color-basic-control-transparent-600": "rgba(255, 255, 255, 0.48)",
	"color-basic-transparent-100": "rgba(143, 155, 179, 0.08)",
	"color-basic-transparent-200": "rgba(143, 155, 179, 0.16)",
	"color-basic-transparent-300": "rgba(143, 155, 179, 0.24)",
	"color-basic-transparent-400": "rgba(143, 155, 179, 0.32)",
	"color-basic-transparent-500": "rgba(143, 155, 179, 0.40)",
	"color-basic-transparent-600": "rgba(143, 155, 179, 0.48)",
	"color-primary-100": "#F2F6FF",
	"color-primary-200": "#D9E4FF",
	"color-primary-300": "#A6C1FF",
	"color-primary-400": "#598BFF",
	"color-primary-500": "#3366FF",
	"color-primary-600": "#274BDB",
	"color-primary-700": "#1A34B8",
	"color-primary-800": "#102694",
	"color-primary-900": "#091C7A",
	"color-primary-transparent-100": "rgba(51, 102, 255, 0.08)",
	"color-primary-transparent-200": "rgba(51, 102, 255, 0.16)",
	"color-primary-transparent-300": "rgba(51, 102, 255, 0.24)",
	"color-primary-transparent-400": "rgba(51, 102, 255, 0.32)",
	"color-primary-transparent-500": "rgba(51, 102, 255, 0.40)",
	"color-primary-transparent-600": "rgba(51, 102, 255, 0.48)",
	"color-secondary-100": "#F7F2FF",
	"color-secondary-200": "#E0D1FF",
	"color-secondary-300": "#C5A8FF",
	"color-secondary-400": "#A375FF",
	"color-secondary-500": "#884DFF",
	"color-secondary-600": "#6A39DB",
	"color-secondary-700": "#4F28B8",
	"color-secondary-800": "#371B94",
	"color-secondary-900": "#26117A",
	"color-tertiary-100": "#FFDED6",
	"color-tertiary-200": "#FFDED6",
	"color-tertiary-300": "#FFDED6",
	"color-tertiary-400": "#FFDED6",
	"color-tertiary-500": "#FFDED6",
	"color-tertiary-600": "#FFDED6",
	"color-tertiary-700": "#FFDED6",
	"color-tertiary-800": "#FFDED6",
	"color-tertiary-900": "#FFDED6",
	"color-success-100": "#EDFFF3",
	"color-success-200": "#B3FFD6",
	"color-success-300": "#8CFAC7",
	"color-success-400": "#51F0B0",
	"color-success-500": "#00E096",
	"color-success-600": "#00B383",
	"color-success-700": "#008F72",
	"color-success-800": "#007566",
	"color-success-900": "#00524C",
	"color-success-transparent-100": "rgba(0, 224, 150, 0.08)",
	"color-success-transparent-200": "rgba(0, 224, 150, 0.16)",
	"color-success-transparent-300": "rgba(0, 224, 150, 0.24)",
	"color-success-transparent-400": "rgba(0, 224, 150, 0.32)",
	"color-success-transparent-500": "rgba(0, 224, 150, 0.40)",
	"color-success-transparent-600": "rgba(0, 224, 150, 0.48)",
	"color-info-100": "#F2F8FF",
	"color-info-200": "#C7E2FF",
	"color-info-300": "#94CBFF",
	"color-info-400": "#42AAFF",
	"color-info-500": "#0095FF",
	"color-info-600": "#006FD6",
	"color-info-700": "#0057C2",
	"color-info-800": "#0041A8",
	"color-info-900": "#002885",
	"color-info-transparent-100": "rgba(0, 149, 255, 0.08)",
	"color-info-transparent-200": "rgba(0, 149, 255, 0.16)",
	"color-info-transparent-300": "rgba(0, 149, 255, 0.24)",
	"color-info-transparent-400": "rgba(0, 149, 255, 0.32)",
	"color-info-transparent-500": "rgba(0, 149, 255, 0.40)",
	"color-info-transparent-600": "rgba(0, 149, 255, 0.48)",
	"color-warning-100": "#FFFDF2",
	"color-warning-200": "#FFF1C2",
	"color-warning-300": "#FFE59E",
	"color-warning-400": "#FFC94D",
	"color-warning-500": "#FFAA00",
	"color-warning-600": "#DB8B00",
	"color-warning-700": "#B86E00",
	"color-warning-800": "#945400",
	"color-warning-900": "#703C00",
	"color-warning-transparent-100": "rgba(255, 170, 0, 0.08)",
	"color-warning-transparent-200": "rgba(255, 170, 0, 0.16)",
	"color-warning-transparent-300": "rgba(255, 170, 0, 0.24)",
	"color-warning-transparent-400": "rgba(255, 170, 0, 0.32)",
	"color-warning-transparent-500": "rgba(255, 170, 0, 0.40)",
	"color-warning-transparent-600": "rgba(255, 170, 0, 0.48)",
	"color-danger-100": "#FFF2F2",
	"color-danger-200": "#FFD6D9",
	"color-danger-300": "#FFA8B4",
	"color-danger-400": "#FF708D",
	"color-danger-500": "#FF3D71",
	"color-danger-600": "#DB2C66",
	"color-danger-700": "#B81D5B",
	"color-danger-800": "#94124E",
	"color-danger-900": "#700940",
	"color-danger-transparent-100": "rgba(255, 61, 113, 0.08)",
	"color-danger-transparent-200": "rgba(255, 61, 113, 0.16)",
	"color-danger-transparent-300": "rgba(255, 61, 113, 0.24)",
	"color-danger-transparent-400": "rgba(255, 61, 113, 0.32)",
	"color-danger-transparent-500": "rgba(255, 61, 113, 0.40)",
	"color-danger-transparent-600": "rgba(255, 61, 113, 0.48)",
	"color-basic-default": "$color-basic-200",
	"color-basic-active": "$color-basic-400",
	"color-basic-focus": "$color-basic-500",
	"color-basic-disabled": "$color-basic-300",
	"color-primary-default": "$color-primary-500",
	"color-primary-active": "$color-primary-600",
	"color-primary-focus": "$color-primary-700",
	"color-primary-disabled": "$color-primary-200",
	"color-success-default": "$color-success-500",
	"color-success-active": "$color-success-600",
	"color-success-focus": "$color-success-700",
	"color-success-disabled": "$color-success-200",
	"color-info-default": "$color-info-500",
	"color-info-active": "$color-info-600",
	"color-info-focus": "$color-info-700",
	"color-info-disabled": "$color-info-300",
	"color-warning-default": "$color-warning-500",
	"color-warning-active": "$color-warning-600",
	"color-warning-focus": "$color-warning-700",
	"color-warning-disabled": "$color-warning-300",
	"color-danger-default": "$color-danger-500",
	"color-danger-active": "$color-danger-600",
	"color-danger-focus": "$color-danger-700",
	"color-danger-disabled": "$color-danger-300",
	"background-basic-color-1": "$color-basic-100",
	"background-basic-color-2": "$color-basic-200",
	"background-basic-color-3": "$color-basic-300",
	"background-basic-color-4": "$color-basic-400",
	"background-alternative-color-1": "$color-basic-800",
	"background-alternative-color-2": "$color-basic-900",
	"background-alternative-color-3": "$color-basic-1000",
	"background-alternative-color-4": "$color-basic-1100",
	"background-primary-color-1": "$color-primary-500",
	"background-primary-color-2": "$color-primary-600",
	"background-primary-color-3": "$color-primary-700",
	"background-primary-color-4": "$color-primary-800",
	"border-basic-color-1": "$color-basic-100",
	"border-basic-color-2": "$color-basic-200",
	"border-basic-color-3": "$color-basic-300",
	"border-basic-color-4": "$color-basic-400",
	"border-basic-color-5": "$color-basic-500",
	"border-alternative-color-1": "$color-basic-800",
	"border-alternative-color-2": "$color-basic-900",
	"border-alternative-color-3": "$color-basic-1000",
	"border-alternative-color-4": "$color-basic-1100",
	"border-alternative-color-5": "$color-basic-1100",
	"border-primary-color-1": "$color-primary-500",
	"border-primary-color-2": "$color-primary-600",
	"border-primary-color-3": "$color-primary-700",
	"border-primary-color-4": "$color-primary-800",
	"border-primary-color-5": "$color-primary-900",
	"border-success-color-1": "$color-success-500",
	"border-success-color-2": "$color-success-600",
	"border-success-color-3": "$color-success-700",
	"border-success-color-4": "$color-success-800",
	"border-success-color-5": "$color-success-900",
	"border-info-color-1": "$color-info-500",
	"border-info-color-2": "$color-info-600",
	"border-info-color-3": "$color-info-700",
	"border-info-color-4": "$color-info-800",
	"border-info-color-5": "$color-info-900",
	"border-warning-color-1": "$color-warning-500",
	"border-warning-color-2": "$color-warning-600",
	"border-warning-color-3": "$color-warning-700",
	"border-warning-color-4": "$color-warning-800",
	"border-warning-color-5": "$color-warning-900",
	"border-danger-color-1": "$color-danger-500",
	"border-danger-color-2": "$color-danger-600",
	"border-danger-color-3": "$color-danger-700",
	"border-danger-color-4": "$color-danger-800",
	"border-danger-color-5": "$color-danger-900",
	"text-basic-color": "$color-basic-900",
	"text-alternate-color": "$color-basic-100",
	"text-control-color": "$color-basic-100",
	"text-disabled-color": "$color-basic-500",
	"text-hint-color": "$color-basic-600",
	"text-primary-color": "$color-primary-default",
	"text-primary-active-color": "$color-primary-active",
	"text-primary-disabled-color": "$color-primary-disabled",
	"text-success-color": "$color-success-default",
	"text-success-active-color": "$color-success-active",
	"text-success-disabled-color": "$color-success-disabled",
	"text-info-color": "$color-info-default",
	"text-info-active-color": "$color-info-active",
	"text-info-disabled-color": "$color-info-disabled",
	"text-warning-color": "$color-warning-default",
	"text-warning-active-color": "$color-warning-active",
	"text-warning-disabled-color": "$color-warning-disabled",
	"text-danger-color": "$color-danger-default",
	"text-danger-active-color": "$color-danger-active",
	"text-danger-disabled-color": "$color-danger-disabled",
	"icon-basic-color": "$color-basic-700",
	"icon-active-color": "$color-primary-500",
	"icon-control-color": "$color-basic-100",
	"icon-disabled-color": "$color-basic-400",
	"icon-hint-color": "$color-basic-500",
	"outline-color": "$color-basic-400"
};

var light$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': light
});

var dark = {
	"color-basic-100": "#FFFFFF",
	"color-basic-200": "#F7F9FC",
	"color-basic-300": "#EDF1F7",
	"color-basic-400": "#E4E9F2",
	"color-basic-500": "#C5CEE0",
	"color-basic-600": "#8F9BB3",
	"color-basic-700": "#2E3A59",
	"color-basic-800": "#222B45",
	"color-basic-900": "#1A2138",
	"color-basic-1000": "#151A30",
	"color-basic-1100": "#101426",
	"color-basic-control-transparent-100": "rgba(255, 255, 255, 0.08)",
	"color-basic-control-transparent-200": "rgba(255, 255, 255, 0.16)",
	"color-basic-control-transparent-300": "rgba(255, 255, 255, 0.24)",
	"color-basic-control-transparent-400": "rgba(255, 255, 255, 0.32)",
	"color-basic-control-transparent-500": "rgba(255, 255, 255, 0.40)",
	"color-basic-control-transparent-600": "rgba(255, 255, 255, 0.48)",
	"color-basic-transparent-100": "rgba(143, 155, 179, 0.08)",
	"color-basic-transparent-200": "rgba(143, 155, 179, 0.16)",
	"color-basic-transparent-300": "rgba(143, 155, 179, 0.24)",
	"color-basic-transparent-400": "rgba(143, 155, 179, 0.32)",
	"color-basic-transparent-500": "rgba(143, 155, 179, 0.40)",
	"color-basic-transparent-600": "rgba(143, 155, 179, 0.48)",
	"color-primary-100": "#F2F6FF",
	"color-primary-200": "#D9E4FF",
	"color-primary-300": "#A6C1FF",
	"color-primary-400": "#598BFF",
	"color-primary-500": "#3366FF",
	"color-primary-600": "#274BDB",
	"color-primary-700": "#1A34B8",
	"color-primary-800": "#102694",
	"color-primary-900": "#091C7A",
	"color-primary-transparent-100": "rgba(51, 102, 255, 0.08)",
	"color-primary-transparent-200": "rgba(51, 102, 255, 0.16)",
	"color-primary-transparent-300": "rgba(51, 102, 255, 0.24)",
	"color-primary-transparent-400": "rgba(51, 102, 255, 0.32)",
	"color-primary-transparent-500": "rgba(51, 102, 255, 0.40)",
	"color-primary-transparent-600": "rgba(51, 102, 255, 0.48)",
	"color-secondary-100": "#F7F2FF",
	"color-secondary-200": "#E0D1FF",
	"color-secondary-300": "#C5A8FF",
	"color-secondary-400": "#A375FF",
	"color-secondary-500": "#884DFF",
	"color-secondary-600": "#6A39DB",
	"color-secondary-700": "#4F28B8",
	"color-secondary-800": "#371B94",
	"color-secondary-900": "#26117A",
	"color-tertiary-100": "#FFDED6",
	"color-tertiary-200": "#FFDED6",
	"color-tertiary-300": "#FFDED6",
	"color-tertiary-400": "#FFDED6",
	"color-tertiary-500": "#FFDED6",
	"color-tertiary-600": "#FFDED6",
	"color-tertiary-700": "#FFDED6",
	"color-tertiary-800": "#FFDED6",
	"color-tertiary-900": "#FFDED6",
	"color-success-100": "#F0FFF5",
	"color-success-200": "#CCFCE3",
	"color-success-300": "#8CFAC7",
	"color-success-400": "#2CE69B",
	"color-success-500": "#00D68F",
	"color-success-600": "#00B887",
	"color-success-700": "#00997A",
	"color-success-800": "#007D6C",
	"color-success-900": "#004A42",
	"color-success-transparent-100": "rgba(0, 224, 150, 0.08)",
	"color-success-transparent-200": "rgba(0, 224, 150, 0.16)",
	"color-success-transparent-300": "rgba(0, 224, 150, 0.24)",
	"color-success-transparent-400": "rgba(0, 224, 150, 0.32)",
	"color-success-transparent-500": "rgba(0, 224, 150, 0.40)",
	"color-success-transparent-600": "rgba(0, 224, 150, 0.48)",
	"color-info-100": "#F2F8FF",
	"color-info-200": "#C7E2FF",
	"color-info-300": "#94CBFF",
	"color-info-400": "#42AAFF",
	"color-info-500": "#0095FF",
	"color-info-600": "#006FD6",
	"color-info-700": "#0057C2",
	"color-info-800": "#0041A8",
	"color-info-900": "#002885",
	"color-info-transparent-100": "rgba(0, 149, 255, 0.08)",
	"color-info-transparent-200": "rgba(0, 149, 255, 0.16)",
	"color-info-transparent-300": "rgba(0, 149, 255, 0.24)",
	"color-info-transparent-400": "rgba(0, 149, 255, 0.32)",
	"color-info-transparent-500": "rgba(0, 149, 255, 0.40)",
	"color-info-transparent-600": "rgba(0, 149, 255, 0.48)",
	"color-warning-100": "#FFFDF2",
	"color-warning-200": "#FFF1C2",
	"color-warning-300": "#FFE59E",
	"color-warning-400": "#FFC94D",
	"color-warning-500": "#FFAA00",
	"color-warning-600": "#DB8B00",
	"color-warning-700": "#B86E00",
	"color-warning-800": "#945400",
	"color-warning-900": "#703C00",
	"color-warning-transparent-100": "rgba(255, 170, 0, 0.08)",
	"color-warning-transparent-200": "rgba(255, 170, 0, 0.16)",
	"color-warning-transparent-300": "rgba(255, 170, 0, 0.24)",
	"color-warning-transparent-400": "rgba(255, 170, 0, 0.32)",
	"color-warning-transparent-500": "rgba(255, 170, 0, 0.40)",
	"color-warning-transparent-600": "rgba(255, 170, 0, 0.48)",
	"color-danger-100": "#FFF2F2",
	"color-danger-200": "#FFD6D9",
	"color-danger-300": "#FFA8B4",
	"color-danger-400": "#FF708D",
	"color-danger-500": "#FF3D71",
	"color-danger-600": "#DB2C66",
	"color-danger-700": "#B81D5B",
	"color-danger-800": "#94124E",
	"color-danger-900": "#700940",
	"color-danger-transparent-100": "rgba(255, 61, 113, 0.08)",
	"color-danger-transparent-200": "rgba(255, 61, 113, 0.16)",
	"color-danger-transparent-300": "rgba(255, 61, 113, 0.24)",
	"color-danger-transparent-400": "rgba(255, 61, 113, 0.32)",
	"color-danger-transparent-500": "rgba(255, 61, 113, 0.40)",
	"color-danger-transparent-600": "rgba(255, 61, 113, 0.48)",
	"color-basic-default": "$color-basic-700",
	"color-basic-active": "$color-basic-900",
	"color-basic-focus": "$color-basic-1000",
	"color-basic-disabled": "$color-basic-600",
	"color-primary-default": "$color-primary-500",
	"color-primary-active": "$color-primary-600",
	"color-primary-focus": "$color-primary-700",
	"color-primary-disabled": "$color-primary-200",
	"color-success-default": "$color-success-500",
	"color-success-active": "$color-success-600",
	"color-success-focus": "$color-success-700",
	"color-success-disabled": "$color-success-200",
	"color-info-default": "$color-info-500",
	"color-info-active": "$color-info-600",
	"color-info-focus": "$color-info-700",
	"color-info-disabled": "$color-info-300",
	"color-warning-default": "$color-warning-500",
	"color-warning-active": "$color-warning-600",
	"color-warning-focus": "$color-warning-700",
	"color-warning-disabled": "$color-warning-300",
	"color-danger-default": "$color-danger-500",
	"color-danger-active": "$color-danger-600",
	"color-danger-focus": "$color-danger-700",
	"color-danger-disabled": "$color-danger-300",
	"background-basic-color-1": "$color-basic-800",
	"background-basic-color-2": "$color-basic-900",
	"background-basic-color-3": "$color-basic-1000",
	"background-basic-color-4": "$color-basic-1100",
	"background-alternative-color-1": "$color-basic-100",
	"background-alternative-color-2": "$color-basic-200",
	"background-alternative-color-3": "$color-basic-300",
	"background-alternative-color-4": "$color-basic-400",
	"background-primary-color-1": "$color-primary-500",
	"background-primary-color-2": "$color-primary-600",
	"background-primary-color-3": "$color-primary-700",
	"background-primary-color-4": "$color-primary-800",
	"border-basic-color-1": "$color-basic-800",
	"border-basic-color-2": "$color-basic-900",
	"border-basic-color-3": "$color-basic-1000",
	"border-basic-color-4": "$color-basic-1100",
	"border-basic-color-5": "$color-basic-1100",
	"border-alternative-color-1": "$color-basic-100",
	"border-alternative-color-2": "$color-basic-200",
	"border-alternative-color-3": "$color-basic-3000",
	"border-alternative-color-4": "$color-basic-400",
	"border-alternative-color-5": "$color-basic-500",
	"border-primary-color-1": "$color-primary-500",
	"border-primary-color-2": "$color-primary-600",
	"border-primary-color-3": "$color-primary-700",
	"border-primary-color-4": "$color-primary-800",
	"border-primary-color-5": "$color-primary-900",
	"border-success-color-1": "$color-success-500",
	"border-success-color-2": "$color-success-600",
	"border-success-color-3": "$color-success-700",
	"border-success-color-4": "$color-success-800",
	"border-success-color-5": "$color-success-900",
	"border-info-color-1": "$color-info-500",
	"border-info-color-2": "$color-info-600",
	"border-info-color-3": "$color-info-700",
	"border-info-color-4": "$color-info-800",
	"border-info-color-5": "$color-info-900",
	"border-warning-color-1": "$color-warning-500",
	"border-warning-color-2": "$color-warning-600",
	"border-warning-color-3": "$color-warning-700",
	"border-warning-color-4": "$color-warning-800",
	"border-warning-color-5": "$color-warning-900",
	"border-danger-color-1": "$color-danger-500",
	"border-danger-color-2": "$color-danger-600",
	"border-danger-color-3": "$color-danger-700",
	"border-danger-color-4": "$color-danger-800",
	"border-danger-color-5": "$color-danger-900",
	"text-basic-color": "$color-basic-100",
	"text-alternate-color": "$color-basic-900",
	"text-control-color": "$color-basic-100",
	"text-disabled-color": "$color-basic-700",
	"text-hint-color": "$color-basic-600",
	"text-primary-color": "$color-primary-default",
	"text-primary-active-color": "$color-primary-active",
	"text-primary-disabled-color": "$color-primary-disabled",
	"text-success-color": "$color-success-default",
	"text-success-active-color": "$color-success-active",
	"text-success-disabled-color": "$color-success-disabled",
	"text-info-color": "$color-info-default",
	"text-info-active-color": "$color-info-active",
	"text-info-disabled-color": "$color-info-disabled",
	"text-warning-color": "$color-warning-default",
	"text-warning-active-color": "$color-warning-active",
	"text-warning-disabled-color": "$color-warning-disabled",
	"text-danger-color": "$color-danger-default",
	"text-danger-active-color": "$color-danger-active",
	"text-danger-disabled-color": "$color-danger-disabled",
	"icon-basic-color": "$color-basic-100",
	"icon-active-color": "$color-basic-400",
	"icon-control-color": "$color-basic-100",
	"icon-disabled-color": "$color-basic-700",
	"icon-hint-color": "$color-basic-600",
	"outline-color": "$color-basic-700"
};

var dark$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': dark
});

var require$$0 = getCjsExportFromNamespace(mapping$1);

var require$$1 = getCjsExportFromNamespace(light$1);

var require$$2 = getCjsExportFromNamespace(dark$1);

var eva = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapping = require$$0;
exports.light = require$$1;
exports.dark = require$$2;

});

unwrapExports(eva);
var eva_1 = eva.mapping;
var eva_2 = eva.light;
var eva_3 = eva.dark;

var dss = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

});

var index = unwrapExports(dss);

var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': index,
	__moduleExports: dss
});

var common_service = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Safely retrieves R value of T object with reducer
 *
 * @param value (T | undefined) - unsafe object which should be processed
 * @param reducer ((T) => R) - `value` processing lambda. Called if `value` is not `undefined`
 *
 * @return (R | undefined) - object returned by `reducer` if `value` is not `undefined`, `undefined` otherwise
 **/
function safe(value, reducer) {
    if (value) {
        return reducer(value);
    }
    return undefined;
}
exports.safe = safe;
/**
 * Maps 2-dim array to 1-dim
 *
 * @param params (T[][]) - 2-dim array
 *
 * @return 1-dim array
 */
function flatten(params) {
    return [].concat(...params);
}
exports.flatten = flatten;
/**
 * Removes all duplicates from array
 *
 * @param params (T[]) - array with possible duplicate values
 *
 * @return (T[]) - processed array
 */
function noDuplicates(params) {
    return [...new Set(params)];
}
exports.noDuplicates = noDuplicates;
/**
 * Removes null and undefined values from array
 *
 * @param params (T[]) - array with possible null values
 *
 * @return (T[]) - processed array
 */
function noNulls(params) {
    return params.filter(Boolean);
}
exports.noNulls = noNulls;
/**
 * Returns Object with string keys from array type [string, IndexSignatureBase]
 *
 * @param array like [string, IndexSignatureBase]
 *
 * @return object with string keys and IndexSignatureBase values
 */
function toObject(array) {
    return array.reduce((p, c) => {
        if (p && p.hasOwnProperty(c[0])) {
            p[c[0]] = Object.assign(Object.assign({}, p[c[0]]), c[1]);
        }
        else {
            p[c[0]] = c[1];
        }
        return p;
    }, {});
}
exports.toObject = toObject;

});

unwrapExports(common_service);
var common_service_1 = common_service.safe;
var common_service_2 = common_service.flatten;
var common_service_3 = common_service.noDuplicates;
var common_service_4 = common_service.noNulls;
var common_service_5 = common_service.toObject;

var common = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(common_service);

});

unwrapExports(common);

var mapping_service = createCommonjsModule(function (module, exports) {
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

function getComponentDefaultAppearance(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { appearances } = value.meta;
        return Object.keys(appearances).find((appearance) => {
            return appearances[appearance].default === true;
        });
    });
}
exports.getComponentDefaultAppearance = getComponentDefaultAppearance;
function getComponentDefaultVariants(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { variantGroups } = value.meta;
        return Object.keys(variantGroups).map((group) => {
            return Object.keys(variantGroups[group]).find((variant) => {
                return variantGroups[group][variant].default === true;
            });
        });
    });
}
exports.getComponentDefaultVariants = getComponentDefaultVariants;
function getComponentDefaultState(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { states } = value.meta;
        return Object.keys(states).find((state) => {
            return states[state].default === true;
        });
    });
}
exports.getComponentDefaultState = getComponentDefaultState;
function getComponentVariantGroups(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { variantGroups } = value.meta;
        return Object.keys(variantGroups);
    });
}
exports.getComponentVariantGroups = getComponentVariantGroups;
function getComponentVariants(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { variantGroups } = value.meta;
        return Object.keys(variantGroups).map((group) => {
            return Object.keys(variantGroups[group]);
        });
    });
}
exports.getComponentVariants = getComponentVariants;
function getComponentStates(mapping, component) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        const { states } = value.meta;
        return Object.keys(states);
    });
}
exports.getComponentStates = getComponentStates;
function getStateAppearanceMapping(mapping, component, appearance, state) {
    const appearanceMapping = getAppearanceMapping(mapping, component, appearance);
    return common.safe(appearanceMapping, (value) => {
        return getStateMapping(value, state);
    });
}
exports.getStateAppearanceMapping = getStateAppearanceMapping;
function getStatelessAppearanceMapping(mapping, component, appearance) {
    const appearanceMapping = getAppearanceMapping(mapping, component, appearance);
    return common.safe(appearanceMapping, (value) => {
        const params = __rest(value, ["state"]);
        return params;
    });
}
exports.getStatelessAppearanceMapping = getStatelessAppearanceMapping;
function getStateVariantMapping(mapping, component, appearance, variant, state) {
    const variantMapping = getVariantMapping(mapping, component, appearance, variant);
    return common.safe(variantMapping, (value) => {
        return getStateMapping(value, state);
    });
}
exports.getStateVariantMapping = getStateVariantMapping;
function getStatelessVariantMapping(mapping, component, appearance, variant) {
    const variantMapping = getVariantMapping(mapping, component, appearance, variant);
    return common.safe(variantMapping, (value) => {
        const params = __rest(value, ["state"]);
        return params;
    });
}
exports.getStatelessVariantMapping = getStatelessVariantMapping;
function getComponentMapping(mapping, component) {
    return mapping[component];
}
exports.getComponentMapping = getComponentMapping;
function getAppearance(mapping, component, appearance) {
    const componentMapping = getComponentMapping(mapping, component);
    return common.safe(componentMapping, (value) => {
        return value.appearances[appearance];
    });
}
function getAppearanceMapping(mapping, component, appearance) {
    const appearanceConfig = getAppearance(mapping, component, appearance);
    return common.safe(appearanceConfig, (value) => {
        return value.mapping;
    });
}
function getVariantMapping(mapping, component, appearance, variant) {
    const appearanceConfig = getAppearance(mapping, component, appearance);
    return common.safe(appearanceConfig, (value) => {
        return common.safe(value.variantGroups, (groupValue) => {
            const groupName = Object.keys(groupValue).find((group) => {
                return groupValue[group][variant] !== undefined;
            });
            return common.safe(groupName, (groupNameValue) => {
                return groupValue[groupNameValue][variant];
            });
        });
    });
}
function getStateMapping(mapping, state) {
    return common.safe(mapping.state, (value) => {
        return value[state];
    });
}

});

unwrapExports(mapping_service);
var mapping_service_1 = mapping_service.getComponentDefaultAppearance;
var mapping_service_2 = mapping_service.getComponentDefaultVariants;
var mapping_service_3 = mapping_service.getComponentDefaultState;
var mapping_service_4 = mapping_service.getComponentVariantGroups;
var mapping_service_5 = mapping_service.getComponentVariants;
var mapping_service_6 = mapping_service.getComponentStates;
var mapping_service_7 = mapping_service.getStateAppearanceMapping;
var mapping_service_8 = mapping_service.getStatelessAppearanceMapping;
var mapping_service_9 = mapping_service.getStateVariantMapping;
var mapping_service_10 = mapping_service.getStatelessVariantMapping;
var mapping_service_11 = mapping_service.getComponentMapping;

var mapping$2 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(mapping_service);

});

unwrapExports(mapping$2);

var style_service = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


exports.SEPARATOR_MAPPING_ENTRY = '.';
/**
 * Creates style object for variant/list of variants(optional) and its state/list of states(optional)
 *
 * Example
 *
 * appearance = 'outline';
 * variants = ['success', 'large'];
 * state = ['active', 'checked'];
 *
 * a = `default` + `outline`                    - acc appearance (apce) mapping
 *
 * v1 = `success` of `default`                  - `success` variant mapping of `default` apce
 * v2 = `success` of `outline`                  - `success` variant mapping of `outline` apce
 * v3 = `large` of `default`                    - `large` variant mapping of `default` apce
 * v4 = `large` of `outline`                    - `large` variant mapping of `outline` apce
 *
 * s1 = `active` of `default`                   - `active` state mapping of `default` apce
 * s2 = `active` of `outline`                   - `active` state mapping of `outline` apce
 * s3 = `active` of `default success`           - `active` state mapping of `success` variant of `default` apce
 * s4 = `active` of `outline success`           - `active` state mapping of `success` variant of `outline` apce
 * s5 = `active` of `default large`             - `active` state mapping of `large` variant of `default` apce
 * s6 = `active` of `outline large`             - `active` state mapping of `large` variant of `outline` apce
 *
 * s7 = `checked` of `default`                  - `checked` state mapping of `default` apce
 * s8 = `checked` of `outline`                  - `checked` state mapping of `outline` apce
 * s9 = `checked` of `default success`          - `checked` state mapping of `success` variant of `default` apce
 * s10 = `checked` of `outline success`         - `checked` state mapping of `success` variant of `outline` apce
 * s11 = `checked` of `default large`           - `checked` state mapping of `large` variant of `default` apce
 * s12 = `checked` of `outline large`           - `checked` state mapping of `large` variant of `outline` apce
 *
 * s13 = `active.checked` of `default`          - `active.checked` state mapping of `default` apce
 * s14 = `active.checked` of `outline`          - `active.checked` state mapping of `outline` apce
 * s15 = `active.checked` of `default success`  - `active.checked` state mapping of `success` variant of `default` apce
 * s16 = `active.checked` of `outline success`  - `active.checked` state mapping of `success` variant of `outline` apce
 * s17 = `active.checked` of `default large`    - `active.checked` state mapping of `large` variant of `default` apce
 * s18 = `active.checked` of `outline large`    - `active.checked` state mapping of `large` variant of `outline` apce
 *
 * res = a + (v1 + v2 + ... + vn) + (s1 + s2 + ... + sn)
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param appearance: string - appearance applied to component
 * @param variants: string[] - variants applied to component. Default is []
 * @param states: string[] - states in which component is. Default is []
 * @param theme: StrictTheme - theme configuration object. Default is {}
 *
 * @return ThemedStyleType - compiled component styles declared in mappings, mapped to theme values
 */
function createStyle(mapping, component, appearance, variants = [], states = [], theme = {}) {
    const normalizedAppearance = normalizeAppearance(mapping, component, appearance);
    const normalizedVariants = normalizeVariants(mapping, component, variants);
    const normalizedStates = normalizeStates(mapping, component, states, (state) => {
        return states.indexOf(state);
    });
    const appearanceMapping = reduce(normalizedAppearance, apce => {
        return mapping$2.getStatelessAppearanceMapping(mapping, component, apce);
    });
    const variantMapping = reduce(normalizedVariants, variant => {
        return reduce(normalizedAppearance, apce => {
            return mapping$2.getStatelessVariantMapping(mapping, component, apce, variant);
        });
    });
    const stateMapping = reduce(normalizedStates, state => {
        const appearanceStateMapping = reduce(normalizedAppearance, apce => {
            return mapping$2.getStateAppearanceMapping(mapping, component, apce, state);
        });
        const variantStateMapping = reduce(normalizedVariants, variant => {
            return reduce(normalizedAppearance, apce => {
                return mapping$2.getStateVariantMapping(mapping, component, apce, variant, state);
            });
        });
        return Object.assign(Object.assign({}, appearanceStateMapping), variantStateMapping);
    });
    const strictlessMapping = Object.assign(Object.assign(Object.assign({}, appearanceMapping), variantMapping), stateMapping);
    return withStrictTokens(strictlessMapping, theme);
}
exports.createStyle = createStyle;
function createAllStyles(mapping, component, appearance, variants, states, theme) {
    const stateless = createStyleEntry(mapping, component, appearance, appearance, '', '', theme);
    const withStates = states.reduce((acc, current) => {
        const key = appearance.concat(exports.SEPARATOR_MAPPING_ENTRY, current);
        const next = createStyleEntry(mapping, component, key, appearance, '', current, theme);
        return [...acc, next];
    }, []);
    const withVariants = variants.map(variant => {
        const key = appearance.concat(exports.SEPARATOR_MAPPING_ENTRY, variant);
        return createStyleEntry(mapping, component, key, appearance, variant, '', theme);
    });
    const withVariantStates = variants.reduce((acc, current) => {
        const next = states.map(state => {
            const key = appearance.concat(exports.SEPARATOR_MAPPING_ENTRY, current, exports.SEPARATOR_MAPPING_ENTRY, state);
            return createStyleEntry(mapping, component, key, appearance, current, state, theme);
        });
        return [...acc, ...next];
    }, []);
    return [
        stateless,
        ...withStates,
        ...withVariants,
        ...withVariantStates,
    ];
}
exports.createAllStyles = createAllStyles;
function getStyle(mapping, component, appearance, variants, states) {
    return common.safe(mapping, (themeMapping) => {
        return common.safe(themeMapping[component], (componentMapping) => {
            const query = findStyleKey(Object.keys(componentMapping), [
                appearance,
                ...variants,
                ...states,
            ]);
            return componentMapping[query];
        });
    });
}
exports.getStyle = getStyle;
/**
 * Creates normalized to design system array of component appearances
 *
 * Example:
 *
 * '' => ['default']
 * 'bold' => ['default', 'bold']
 * 'default' => ['default']
 * ...
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param appearance: string - appearance applied to component
 *
 * @return string[] - array of merged appearances
 */
function normalizeAppearance(mapping, component, appearance) {
    const defaultAppearance = mapping$2.getComponentDefaultAppearance(mapping, component);
    return normalize([defaultAppearance, appearance]);
}
exports.normalizeAppearance = normalizeAppearance;
/**
 * Creates normalized to design system array of component variants
 *
 * Example:
 *
 * [''] => ['default0', 'default1']
 * ['success'] => ['default0', 'default1', 'success']
 * ['default0', 'tiny'] => ['default0', 'default1', 'tiny']
 * ...
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param variants: string[] - variants applied to component
 *
 * @return string[] - array of merged variants
 */
function normalizeVariants(mapping, component, variants) {
    const defaultVariants = mapping$2.getComponentDefaultVariants(mapping, component);
    return normalize([...defaultVariants, ...variants]);
}
exports.normalizeVariants = normalizeVariants;
/**
 * Creates normalized to design system array of component states
 *
 * Example:
 *
 * [''] => ['default']
 * ['active', 'checked'] => [
 *                           'default',
 *                           'active',
 *                           'default.active',
 *                           'checked',
 *                           'default.active.checked'
 *                          ]
 * ...
 *
 * @param mapping: ThemeMappingType - theme mapping configuration
 * @param component: string - component name
 * @param states: string[] - states in which component is
 * @param stateWeight: (state: string) => number - state weight calculation lambda
 * @param separator - state separator. `.` in example
 *
 * @return string[] - array of merged states
 */
function normalizeStates(mapping, component, states, stateWeight, separator = exports.SEPARATOR_MAPPING_ENTRY) {
    const defaultState = mapping$2.getComponentDefaultState(mapping, component);
    const preprocess = normalize([defaultState, ...states]);
    if (preprocess.length === 0) {
        return preprocess;
    }
    const variations = createStateVariations([...preprocess], separator, []);
    return variations.sort((lhs, rhs) => {
        const lhsWeight = getStateVariationWeight(lhs, separator, stateWeight);
        const rhsWeight = getStateVariationWeight(rhs, separator, stateWeight);
        return lhsWeight - rhsWeight;
    });
}
exports.normalizeStates = normalizeStates;
function createStateVariations(states, separator, result = []) {
    if (states.length === 0) {
        return result;
    }
    const next = states.reduce((acc, current) => {
        const nextItem = acc.map(value => value.concat(separator, current));
        return [...acc, ...nextItem];
    }, [states.shift()]);
    return createStateVariations(states, separator, [...result, ...next]);
}
function withStrictTokens(mapping, theme) {
    return Object.keys(mapping).reduce((acc, next) => {
        const currentToken = mapping[next];
        const nextToken = theme[currentToken] || currentToken;
        return Object.assign(Object.assign({}, acc), { [next]: nextToken });
    }, {});
}
function getStateVariationWeight(state, separator, stateWeight) {
    const parts = state.split(separator);
    return parts.reduce((acc, current) => {
        return acc + stateWeight(current) + parts.length;
    }, 0);
}
/**
 * Finds identical keys across `source` keys array
 *
 * Example:
 *
 * source = ['default.error.small.checked', ...]
 * query = ['default', 'small', 'error', 'checked']
 *
 * will return 'default.error.small.checked'
 *
 * @param source (string[]) - array of style keys
 * @param query (string[]) - array of key parts to search
 *
 * @return (string | undefined) - key identical to some of `source` keys if presents
 */
function findStyleKey(source, query) {
    const partialKeys = source.map((key) => {
        return key.split(exports.SEPARATOR_MAPPING_ENTRY);
    });
    const result = partialKeys.filter((partial) => {
        return compareArrays(query, partial);
    });
    return common.safe(result[0], (value) => {
        return value.join(exports.SEPARATOR_MAPPING_ENTRY);
    });
}
exports.findStyleKey = findStyleKey;
function createStyleEntry(mapping, component, key, appearance, variant = '', state = '', theme = {}) {
    const value = createStyle(mapping, component, appearance, variant.split(exports.SEPARATOR_MAPPING_ENTRY), state.split(exports.SEPARATOR_MAPPING_ENTRY), theme);
    return [key, value];
}
function normalize(params) {
    return common.noNulls(common.noDuplicates(params));
}
function compareArrays(lhs, rhs) {
    const isEqualLength = lhs && rhs && lhs.length === rhs.length;
    if (!isEqualLength) {
        return false;
    }
    return lhs.reduce((acc, next) => acc && rhs.includes(next), true);
}
function reduce(items, next) {
    return items.reduce((acc, current) => (Object.assign(Object.assign({}, acc), next(current))), {});
}

});

unwrapExports(style_service);
var style_service_1 = style_service.SEPARATOR_MAPPING_ENTRY;
var style_service_2 = style_service.createStyle;
var style_service_3 = style_service.createAllStyles;
var style_service_4 = style_service.getStyle;
var style_service_5 = style_service.normalizeAppearance;
var style_service_6 = style_service.normalizeVariants;
var style_service_7 = style_service.normalizeStates;
var style_service_8 = style_service.findStyleKey;

var style = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(style_service);

});

unwrapExports(style);

var service = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(common);
__export(mapping$2);
__export(style);

});

unwrapExports(service);

var mappingProcessor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class MappingProcessor {
    process(params) {
        return Object.keys(params).reduce((acc, component) => {
            return [
                ...acc,
                ...this.getComponentMappingMeta(params, component),
            ];
        }, []);
    }
    getComponentMappingMeta(mapping, component) {
        const componentMapping = mapping[component];
        return Object.keys(componentMapping.appearances).map((appearance) => {
            return {
                name: component,
                appearance: appearance,
                variants: this.getComponentVariants(mapping, component),
                states: this.getComponentStates(mapping, component),
            };
        });
    }
    getComponentVariants(mapping, component) {
        const variants = service.getComponentVariants(mapping, component);
        return this.concatComponentVariants([...variants]);
    }
    getComponentStates(mapping, component) {
        const states = service.getComponentStates(mapping, component);
        return this.concatComponentStates([...states]);
    }
    concatComponentVariants(variants, result = []) {
        if (variants.length === 0) {
            return result;
        }
        const concat = variants.reduce((acc, current) => {
            return [...acc, ...this.concatVariantGroups(acc, current)];
        }, variants.shift());
        return this.concatComponentVariants(variants, [...result, ...concat]);
    }
    concatVariantGroups(lhs, rhs) {
        return lhs.reduce((acc, lhsValue) => {
            const concat = rhs.map(rhsValue => {
                return lhsValue.concat(service.SEPARATOR_MAPPING_ENTRY, rhsValue);
            });
            return [...acc, ...concat];
        }, []);
    }
    concatComponentStates(states, result = []) {
        if (states.length === 0) {
            return result;
        }
        const concat = states.reduce((acc, current) => {
            const next = acc.map(value => value.concat(service.SEPARATOR_MAPPING_ENTRY, current));
            return [...acc, ...next];
        }, [states.shift()]);
        return this.concatComponentStates(states, [...result, ...concat]);
    }
}
exports.MappingProcessor = MappingProcessor;

});

unwrapExports(mappingProcessor);
var mappingProcessor_1 = mappingProcessor.MappingProcessor;

var metaProcessor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

class MetaProcessor {
    process(params) {
        const { mapping, meta, theme } = params;
        const entries = meta.reduce((acc, controlMeta) => {
            const { name, appearance, variants, states } = controlMeta;
            const nextAppearanceEntries = service.createAllStyles(mapping, name, appearance, variants, states, theme);
            const prevAppearanceStyles = acc[name];
            const nextAppearanceStyles = service.toObject(nextAppearanceEntries);
            return Object.assign(Object.assign({}, acc), { [name]: Object.assign(Object.assign({}, prevAppearanceStyles), nextAppearanceStyles) });
        }, {});
        return this.withControlMeta(mapping, entries);
    }
    withControlMeta(mapping, style) {
        return Object.keys(style).reduce((acc, control) => {
            const controlEntry = {
                meta: mapping[control].meta,
                styles: style[control],
            };
            return Object.assign(Object.assign({}, acc), { [control]: controlEntry });
        }, {});
    }
}
exports.MetaProcessor = MetaProcessor;

});

unwrapExports(metaProcessor);
var metaProcessor_1 = metaProcessor.MetaProcessor;

var schemaProcessor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


class SchemaProcessor {
    constructor() {
        this.mappingProcessor = new mappingProcessor.MappingProcessor();
        this.metaProcessor = new metaProcessor.MetaProcessor();
    }
    process(params) {
        const { components: themeMapping, strict: strictTheme } = params;
        const meta = this.mappingProcessor.process(themeMapping);
        return this.metaProcessor.process({
            mapping: themeMapping,
            meta: meta,
            theme: strictTheme,
        });
    }
}
exports.SchemaProcessor = SchemaProcessor;

});

unwrapExports(schemaProcessor);
var schemaProcessor_1 = schemaProcessor.SchemaProcessor;

var processor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.MappingProcessor = mappingProcessor.MappingProcessor;

exports.MetaProcessor = metaProcessor.MetaProcessor;

exports.SchemaProcessor = schemaProcessor.SchemaProcessor;

});

unwrapExports(processor);
var processor_1 = processor.MappingProcessor;
var processor_2 = processor.MetaProcessor;
var processor_3 = processor.SchemaProcessor;

var processor$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.SchemaProcessor = processor.SchemaProcessor;

});

var index$2 = unwrapExports(processor$1);
var processor_2$1 = processor$1.SchemaProcessor;

var index$3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': index$2,
	__moduleExports: processor$1,
	SchemaProcessor: processor_2$1
});

exports.$dss = index$1;
exports.$processor = index$3;
exports.__moduleExports = eva;
exports.dark = eva_3;
exports.light = eva_2;
exports.mapping = eva_1;
