"use strict";
exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 4995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3066);



const OttrOfferingsSection = ()=>{
    const [activeOffering, setActiveOffering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("asset-management");
    const [hoveredCard, setHoveredCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [animatedValues, setAnimatedValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        protection: 0,
        upside: 0,
        efficiency: 0
    });
    const offerings = [
        {
            id: "asset-management",
            title: "Asset Management",
            description: "Institutional-grade portfolio management with AI-driven optimization and risk controls.",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .TrendingUp */ .klz, {
                className: "w-6 h-6"
            }),
            gradient: "from-blue-600 to-cyan-600",
            stats: [
                {
                    label: "AUM",
                    value: "$2.4B+"
                },
                {
                    label: "Avg. Return",
                    value: "127%"
                }
            ]
        },
        {
            id: "quantitative",
            title: "Quantitative Investing",
            description: "Advanced algorithmic strategies leveraging machine learning and real-time data analysis.",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Brain */ .amH, {
                className: "w-6 h-6"
            }),
            gradient: "from-purple-600 to-pink-600",
            stats: [
                {
                    label: "Algorithms",
                    value: "50+"
                },
                {
                    label: "Data Points/Sec",
                    value: "1M+"
                }
            ]
        },
        {
            id: "software",
            title: "Software Development",
            description: "Cutting-edge fintech solutions and blockchain infrastructure for the digital economy.",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Code */ .EKh, {
                className: "w-6 h-6"
            }),
            gradient: "from-green-600 to-emerald-600",
            stats: [
                {
                    label: "Smart Contracts",
                    value: "200+"
                },
                {
                    label: "Transactions",
                    value: "10M+"
                }
            ]
        },
        {
            id: "venture",
            title: "Venture Capital",
            description: "Strategic investments in breakthrough blockchain and DeFi projects.",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Rocket */ .w8m, {
                className: "w-6 h-6"
            }),
            gradient: "from-orange-600 to-red-600",
            stats: [
                {
                    label: "Portfolio Cos",
                    value: "45+"
                },
                {
                    label: "Avg. Multiple",
                    value: "12x"
                }
            ]
        }
    ];
    const breakdownSteps = [
        {
            step: 1,
            title: "Dynamic Risk Assessment",
            description: "AI models analyze market volatility and set maximum drawdown limits in real-time",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Shield */ .WL4, {
                className: "w-5 h-5"
            }),
            color: "text-blue-500"
        },
        {
            step: 2,
            title: "Smart Position Sizing",
            description: "Algorithmic allocation based on risk/reward ratios and correlation analysis",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .BarChart3 */ .XIs, {
                className: "w-5 h-5"
            }),
            color: "text-purple-500"
        },
        {
            step: 3,
            title: "Automated Hedging",
            description: "Options strategies and derivatives protect capital during market downturns",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Lock */ .HEZ, {
                className: "w-5 h-5"
            }),
            color: "text-green-500"
        },
        {
            step: 4,
            title: "Profit Optimization",
            description: "Machine learning captures momentum while preserving unlimited upside potential",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Zap */ .itc, {
                className: "w-5 h-5"
            }),
            color: "text-orange-500"
        }
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Animate values
        const timer = setTimeout(()=>{
            setAnimatedValues({
                protection: 85,
                upside: 100,
                efficiency: 92
            });
        }, 500);
        return ()=>clearTimeout(timer);
    }, []);
    const activeOfferingData = offerings.find((o)=>o.id === activeOffering);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen rounded-3xl bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white py-20 px-6",
        id: "offerings",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-4xl md:text-5xl font-bold mb-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                                    children: "Our Offerings"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                className: "text-xl text-gray-400 max-w-3xl mx-auto",
                                children: "Comprehensive financial technology solutions powered by cutting-edge AI and blockchain"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20",
                        children: offerings.map((offering)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `relative group cursor-pointer transition-all duration-300 ${activeOffering === offering.id ? "scale-105" : "hover:scale-105"}`,
                                onClick: ()=>setActiveOffering(offering.id),
                                onMouseEnter: ()=>setHoveredCard(offering.id),
                                onMouseLeave: ()=>setHoveredCard(null),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: `absolute inset-0 bg-gradient-to-r ${offering.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border ${activeOffering === offering.id ? "border-blue-500" : "border-gray-800"} transition-all duration-300`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: `inline-flex p-3 bg-gradient-to-r ${offering.gradient} rounded-xl mb-4`,
                                                children: offering.icon
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-xl font-semibold mb-2",
                                                children: offering.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-gray-400 text-sm mb-4",
                                                children: offering.description
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "flex justify-between items-center",
                                                children: offering.stats.map((stat, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-lg font-bold text-white",
                                                                children: stat.value
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-xs text-gray-500",
                                                                children: stat.label
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: `absolute top-4 right-4 transition-transform duration-300 ${hoveredCard === offering.id ? "translate-x-1" : ""}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ChevronRight */ ._Qn, {
                                                    className: "w-5 h-5 text-gray-400"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, offering.id))
                    }),
                    activeOfferingData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: `inline-flex p-3 bg-gradient-to-r ${activeOfferingData.gradient} rounded-xl mr-4`,
                                        children: activeOfferingData.icon
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                        className: "text-2xl font-bold",
                                        children: activeOfferingData.title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-gray-300 mb-4",
                                                children: activeOfferingData.description
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                        className: "px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform",
                                                        children: "Learn More"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                        className: "px-6 py-3 bg-gray-800 rounded-xl font-semibold hover:bg-gray-700 transition-colors",
                                                        children: "View Case Studies"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-black/30 rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                className: "text-sm text-gray-400 mb-4",
                                                children: "Performance Metrics"
                                            }),
                                            activeOfferingData.stats.map((stat, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between items-center mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "text-gray-300",
                                                            children: stat.label
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                                                            children: stat.value
                                                        })
                                                    ]
                                                }, index))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-3xl md:text-4xl font-bold mb-4",
                                        children: "How Crypto SSIM Works"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xl text-gray-400",
                                        children: "Mathematical protection meets unlimited growth potential"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "space-y-6",
                                        children: breakdownSteps.map((step, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative flex gap-4 group",
                                                style: {
                                                    opacity: 0,
                                                    animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s forwards`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: `w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform`,
                                                                children: step.icon
                                                            }),
                                                            index < breakdownSteps.length - 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "absolute top-12 left-1/2 w-0.5 h-16 bg-gray-800 -translate-x-1/2"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "text-lg font-semibold mb-1",
                                                                children: [
                                                                    "Step ",
                                                                    step.step,
                                                                    ": ",
                                                                    step.title
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-400",
                                                                children: step.description
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, step.step))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-xl font-semibold mb-6",
                                                children: "Performance Visualization"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative h-64 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-red-500/10 to-green-500/10 rounded-xl"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "absolute bottom-0 left-0 right-0 h-1/3 bg-red-500/20 rounded-b-xl flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ArrowDownRight */ .NC9, {
                                                                    className: "w-6 h-6 text-red-500 mx-auto mb-1"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                    className: "text-sm font-semibold text-red-500",
                                                                    children: "Max Loss: -15%"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "absolute top-0 left-0 right-0 h-2/3 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ArrowUpRight */ .Gux, {
                                                                    className: "w-8 h-8 text-green-500 mx-auto mb-1 animate-pulse"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                    className: "text-lg font-semibold text-green-500",
                                                                    children: "Unlimited Upside"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between items-center mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: "Downside Protection"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-sm font-semibold",
                                                                        children: [
                                                                            animatedValues.protection,
                                                                            "%"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "w-full bg-gray-800 rounded-full h-2",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    className: "bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000",
                                                                    style: {
                                                                        width: `${animatedValues.protection}%`
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between items-center mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: "Upside Capture"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-sm font-semibold",
                                                                        children: [
                                                                            animatedValues.upside,
                                                                            "%"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "w-full bg-gray-800 rounded-full h-2",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    className: "bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000",
                                                                    style: {
                                                                        width: `${animatedValues.upside}%`
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between items-center mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: "Capital Efficiency"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-sm font-semibold",
                                                                        children: [
                                                                            animatedValues.efficiency,
                                                                            "%"
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "w-full bg-gray-800 rounded-full h-2",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    className: "bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000",
                                                                    style: {
                                                                        width: `${animatedValues.efficiency}%`
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2",
                                                children: [
                                                    "View Full Breakdown",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ChevronRight */ ._Qn, {
                                                        className: "w-5 h-5"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-6",
                        children: [
                            {
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Globe */ .THo, {
                                    className: "w-6 h-6"
                                }),
                                value: "150+",
                                label: "Countries"
                            },
                            {
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .DollarSign */ .Xd3, {
                                    className: "w-6 h-6"
                                }),
                                value: "$2.4B+",
                                label: "Total Value Locked"
                            },
                            {
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Activity */ .cS$, {
                                    className: "w-6 h-6"
                                }),
                                value: "24/7",
                                label: "Active Trading"
                            },
                            {
                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Layers */ .S9g, {
                                    className: "w-6 h-6"
                                }),
                                value: "50+",
                                label: "Trading Pairs"
                            }
                        ].map((stat, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "inline-flex p-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl mb-3",
                                        children: stat.icon
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "text-2xl font-bold mb-1",
                                        children: stat.value
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "text-sm text-gray-400",
                                        children: stat.label
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
                children: `
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OttrOfferingsSection);


/***/ })

};
;