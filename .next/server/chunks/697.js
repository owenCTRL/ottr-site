"use strict";
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 3697:
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



const OttrBlogSection = ()=>{
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const blogPosts = [
        {
            id: 1,
            title: "Understanding Crypto SSIM: Risk Management in DeFi",
            excerpt: "Explore how Smart Structure Investment Models revolutionize cryptocurrency portfolio management with mathematical downside protection.",
            author: "Dr. Sarah Chen",
            date: "June 2, 2025",
            readTime: "8 min read",
            category: "DeFi Strategy",
            image: "gradient-1",
            tags: [
                "SSIM",
                "Risk Management",
                "DeFi"
            ]
        },
        {
            id: 2,
            title: "AI-Powered Quantitative Trading: The Future is Now",
            excerpt: "Discover how machine learning algorithms are transforming crypto markets with predictive analytics and automated trading strategies.",
            author: "Marcus Rodriguez",
            date: "May 28, 2025",
            readTime: "12 min read",
            category: "Quantitative Trading",
            image: "gradient-2",
            tags: [
                "AI",
                "Machine Learning",
                "Trading"
            ]
        },
        {
            id: 3,
            title: "Building on Blockchain: Smart Contract Best Practices",
            excerpt: "Learn the essential security patterns and optimization techniques for developing robust smart contracts in the ottr ecosystem.",
            author: "Alex Thompson",
            date: "May 25, 2025",
            readTime: "15 min read",
            category: "Development",
            image: "gradient-3",
            tags: [
                "Smart Contracts",
                "Security",
                "Blockchain"
            ]
        },
        {
            id: 4,
            title: "Venture Capital in Web3: Identifying Unicorns",
            excerpt: "Inside look at our investment thesis and how we evaluate breakthrough blockchain projects for exponential growth potential.",
            author: "Jennifer Wu",
            date: "May 20, 2025",
            readTime: "10 min read",
            category: "Venture Capital",
            image: "gradient-4",
            tags: [
                "VC",
                "Web3",
                "Investment"
            ]
        },
        {
            id: 5,
            title: "Market Analysis: Crypto Cycles and Opportunity Zones",
            excerpt: "Deep dive into market patterns, technical indicators, and how ottr's algorithms identify optimal entry and exit points.",
            author: "David Kumar",
            date: "May 15, 2025",
            readTime: "7 min read",
            category: "Market Analysis",
            image: "gradient-5",
            tags: [
                "Markets",
                "Analysis",
                "Trading"
            ]
        }
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isAutoPlaying) return;
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev + 1) % blogPosts.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        isAutoPlaying,
        blogPosts.length
    ]);
    const handlePrevious = ()=>{
        setIsAutoPlaying(false);
        setCurrentIndex((prev)=>(prev - 1 + blogPosts.length) % blogPosts.length);
    };
    const handleNext = ()=>{
        setIsAutoPlaying(false);
        setCurrentIndex((prev)=>(prev + 1) % blogPosts.length);
    };
    const getCategoryIcon = (category)=>{
        switch(category){
            case "DeFi Strategy":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Coins */ .Cif, {
                    className: "w-4 h-4"
                });
            case "Quantitative Trading":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .BarChart3 */ .XIs, {
                    className: "w-4 h-4"
                });
            case "Development":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Cpu */ .xLm, {
                    className: "w-4 h-4"
                });
            case "Venture Capital":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .TrendingUp */ .klz, {
                    className: "w-4 h-4"
                });
            default:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .BookOpen */ .p1z, {
                    className: "w-4 h-4"
                });
        }
    };
    const getGradientClass = (image)=>{
        switch(image){
            case "gradient-1":
                return "from-blue-600 via-cyan-600 to-teal-600";
            case "gradient-2":
                return "from-purple-600 via-pink-600 to-red-600";
            case "gradient-3":
                return "from-green-600 via-emerald-600 to-cyan-600";
            case "gradient-4":
                return "from-orange-600 via-red-600 to-pink-600";
            case "gradient-5":
                return "from-indigo-600 via-purple-600 to-pink-600";
            default:
                return "from-blue-600 to-cyan-600";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative min-h-screen w-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-4xl md:text-5xl font-bold mb-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                                    children: "Insights & Research"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                className: "text-xl text-gray-400 max-w-3xl mx-auto",
                                children: "Deep dives into DeFi, quantitative strategies, and the future of digital assets"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                onClick: handlePrevious,
                                className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700 hover:bg-gray-700/50 transition-all",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ChevronLeft */ .s$$, {
                                    className: "w-6 h-6"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                onClick: handleNext,
                                className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 bg-gray-800/50 backdrop-blur-xl rounded-full border border-gray-700 hover:bg-gray-700/50 transition-all",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ChevronRight */ ._Qn, {
                                    className: "w-6 h-6"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "relative h-[500px] perspective-1000",
                                children: blogPosts.map((post, index)=>{
                                    const offset = index - currentIndex;
                                    const isActive = offset === 0;
                                    const isPrev = offset === -1 || currentIndex === 0 && index === blogPosts.length - 1;
                                    const isNext = offset === 1 || currentIndex === blogPosts.length - 1 && index === 0;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: `absolute inset-0 transition-all duration-700 ${isActive ? "opacity-100 scale-100 z-10" : isPrev || isNext ? "opacity-50 scale-90 z-5" : "opacity-0 scale-80 z-0"}`,
                                        style: {
                                            transform: `translateX(${offset * 100}%) rotateY(${offset * -15}deg)`,
                                            transformStyle: "preserve-3d"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "h-full bg-gray-900/30 backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden group hover:border-gray-700 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: `h-48 bg-gradient-to-br ${getGradientClass(post.image)} relative overflow-hidden`,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "absolute inset-0 bg-black/20"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "absolute bottom-4 left-6 flex items-center gap-2",
                                                            children: [
                                                                getCategoryIcon(post.category),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "text-sm font-semibold",
                                                                    children: post.category
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-8",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                            className: "text-2xl font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors",
                                                            children: post.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                            className: "text-gray-400 mb-6 line-clamp-3",
                                                            children: post.excerpt
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "flex flex-wrap gap-2 mb-6",
                                                            children: post.tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Tag */ .Vp9, {
                                                                            className: "w-3 h-3"
                                                                        }),
                                                                        tag
                                                                    ]
                                                                }, tag))
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "flex items-center justify-between text-sm text-gray-500 mb-6",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        children: post.author
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Calendar */ .faS, {
                                                                                className: "w-4 h-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: post.date
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Clock */ .SUY, {
                                                                                className: "w-4 h-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: post.readTime
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: "group/btn flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors",
                                                            children: [
                                                                "Read Full Article",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ArrowRight */ .olP, {
                                                                    className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, post.id);
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "flex justify-center gap-2 mt-8",
                                children: blogPosts.map((_, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        onClick: ()=>{
                                            setCurrentIndex(index);
                                            setIsAutoPlaying(false);
                                        },
                                        className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-gray-600 hover:bg-gray-500"}`
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2",
                            children: [
                                "View All Articles",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .ArrowRight */ .olP, {
                                    className: "w-5 h-5"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
                children: `

      `
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OttrBlogSection);


/***/ })

};
;