"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst HomePage = ()=>{\n    _s();\n    const [isRecording, setIsRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [transcript, setTranscript] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 文字起こし結果\n    const recognitionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // 型エラーを回避するために `any` を指定\n    const handleRecordClick = ()=>{\n        if (isRecording) {\n            var _recognitionRef_current;\n            (_recognitionRef_current = recognitionRef.current) === null || _recognitionRef_current === void 0 ? void 0 : _recognitionRef_current.stop();\n            setIsRecording(false);\n        } else {\n            // Web Speech API の対応ブラウザチェック\n            const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;\n            if (!SpeechRecognitionAPI) {\n                alert('このブラウザは Web Speech API をサポートしていません。');\n                return;\n            }\n            const recognition = new SpeechRecognitionAPI();\n            recognition.lang = 'ja-JP'; // 日本語に設定\n            recognition.continuous = true; // 録音を継続\n            recognition.interimResults = true; // リアルタイム更新\n            // 文字起こし結果を取得\n            recognition.onresult = (event)=>{\n                let fullTranscript = '';\n                for(let i = 0; i < event.results.length; i++){\n                    fullTranscript += event.results[i][0].transcript;\n                }\n                setTranscript(fullTranscript);\n            };\n            recognition.onerror = (event)=>{\n                console.error('音声認識エラー:', event);\n            };\n            recognitionRef.current = recognition;\n            recognition.start();\n            setIsRecording(true);\n        }\n    };\n    const downloadTranscript = ()=>{\n        const blob = new Blob([\n            transcript\n        ], {\n            type: 'text/markdown'\n        });\n        const url = URL.createObjectURL(blob);\n        const a = document.createElement('a');\n        a.href = url;\n        a.download = 'meeting_notes.md';\n        a.click();\n        URL.revokeObjectURL(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: 'center',\n            marginTop: '50px'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"会議録音 & 文字起こしアプリ\"\n            }, void 0, false, {\n                fileName: \"/app/app/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleRecordClick,\n                style: {\n                    padding: '15px 30px',\n                    fontSize: '16px',\n                    backgroundColor: isRecording ? 'red' : 'green',\n                    color: 'white',\n                    border: 'none',\n                    borderRadius: '8px',\n                    cursor: 'pointer'\n                },\n                children: isRecording ? '録音停止' : '録音開始'\n            }, void 0, false, {\n                fileName: \"/app/app/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: '20px',\n                    textAlign: 'left',\n                    maxWidth: '600px',\n                    margin: '0 auto'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"文字起こし結果:\"\n                    }, void 0, false, {\n                        fileName: \"/app/app/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            whiteSpace: 'pre-wrap',\n                            background: '#f3f3f3',\n                            padding: '10px',\n                            borderRadius: '5px'\n                        },\n                        children: transcript\n                    }, void 0, false, {\n                        fileName: \"/app/app/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/app/page.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            transcript && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: downloadTranscript,\n                style: {\n                    marginTop: '20px',\n                    padding: '10px 20px',\n                    fontSize: '16px',\n                    backgroundColor: 'blue',\n                    color: 'white',\n                    border: 'none',\n                    borderRadius: '8px',\n                    cursor: 'pointer'\n                },\n                children: \"メモをダウンロード\"\n            }, void 0, false, {\n                fileName: \"/app/app/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/app/page.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"LLcHoZ2eyRG52mYDaDWCBEgYr9o=\");\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUFNVDtHQWpHTXZEO0tBQUFBO0FBbUdOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyIvYXBwL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG4vLyDjgrDjg63jg7zjg5Djg6vjgasgU3BlZWNoUmVjb2duaXRpb24g44Gu5Z6L44KS5a6a576pXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIFNwZWVjaFJlY29nbml0aW9uOiBhbnk7XG4gICAgd2Via2l0U3BlZWNoUmVjb2duaXRpb246IGFueTtcbiAgfVxufVxuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzUmVjb3JkaW5nLCBzZXRJc1JlY29yZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0cmFuc2NyaXB0LCBzZXRUcmFuc2NyaXB0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpOyAvLyDmloflrZfotbfjgZPjgZfntZDmnpxcbiAgY29uc3QgcmVjb2duaXRpb25SZWYgPSB1c2VSZWY8YW55PihudWxsKTsgLy8g5Z6L44Ko44Op44O844KS5Zue6YG/44GZ44KL44Gf44KB44GrIGBhbnlgIOOCkuaMh+WumlxuXG4gIGNvbnN0IGhhbmRsZVJlY29yZENsaWNrID0gKCkgPT4ge1xuICAgIGlmIChpc1JlY29yZGluZykge1xuICAgICAgcmVjb2duaXRpb25SZWYuY3VycmVudD8uc3RvcCgpO1xuICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZWIgU3BlZWNoIEFQSSDjga7lr77lv5zjg5bjg6njgqbjgrbjg4Hjgqfjg4Pjgq9cbiAgICAgIGNvbnN0IFNwZWVjaFJlY29nbml0aW9uQVBJID1cbiAgICAgICAgd2luZG93LlNwZWVjaFJlY29nbml0aW9uIHx8IHdpbmRvdy53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbjtcblxuICAgICAgaWYgKCFTcGVlY2hSZWNvZ25pdGlvbkFQSSkge1xuICAgICAgICBhbGVydCgn44GT44Gu44OW44Op44Km44K244GvIFdlYiBTcGVlY2ggQVBJIOOCkuOCteODneODvOODiOOBl+OBpuOBhOOBvuOBm+OCk+OAgicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uQVBJKCk7XG4gICAgICByZWNvZ25pdGlvbi5sYW5nID0gJ2phLUpQJzsgIC8vIOaXpeacrOiqnuOBq+ioreWumlxuICAgICAgcmVjb2duaXRpb24uY29udGludW91cyA9IHRydWU7IC8vIOmMsumfs+OCkue2mee2mlxuICAgICAgcmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSB0cnVlOyAvLyDjg6rjgqLjg6vjgr/jgqTjg6Dmm7TmlrBcblxuICAgICAgLy8g5paH5a2X6LW344GT44GX57WQ5p6c44KS5Y+W5b6XXG4gICAgICByZWNvZ25pdGlvbi5vbnJlc3VsdCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGxldCBmdWxsVHJhbnNjcmlwdCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmdWxsVHJhbnNjcmlwdCArPSBldmVudC5yZXN1bHRzW2ldWzBdLnRyYW5zY3JpcHQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VHJhbnNjcmlwdChmdWxsVHJhbnNjcmlwdCk7XG4gICAgICB9O1xuXG4gICAgICByZWNvZ25pdGlvbi5vbmVycm9yID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcign6Z+z5aOw6KqN6K2Y44Ko44Op44O8OicsIGV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIHJlY29nbml0aW9uUmVmLmN1cnJlbnQgPSByZWNvZ25pdGlvbjtcbiAgICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZG93bmxvYWRUcmFuc2NyaXB0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbdHJhbnNjcmlwdF0sIHsgdHlwZTogJ3RleHQvbWFya2Rvd24nIH0pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS5kb3dubG9hZCA9ICdtZWV0aW5nX25vdGVzLm1kJztcbiAgICBhLmNsaWNrKCk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1MHB4JyB9fT5cbiAgICAgIDxoMT7kvJrorbDpjLLpn7MgJiDmloflrZfotbfjgZPjgZfjgqLjg5fjg6o8L2gxPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZWNvcmRDbGlja31cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiAnMTVweCAzMHB4JyxcbiAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNSZWNvcmRpbmcgPyAncmVkJyA6ICdncmVlbicsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2lzUmVjb3JkaW5nID8gJ+mMsumfs+WBnOatoicgOiAn6Yyy6Z+z6ZaL5aeLJ31cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWF4V2lkdGg6ICc2MDBweCcsIG1hcmdpbjogJzAgYXV0bycgfX0+XG4gICAgICAgIDxoMz7mloflrZfotbfjgZPjgZfntZDmnpw6PC9oMz5cbiAgICAgICAgPHAgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZS13cmFwJywgYmFja2dyb3VuZDogJyNmM2YzZjMnLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzVweCcgfX0+XG4gICAgICAgICAge3RyYW5zY3JpcHR9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7dHJhbnNjcmlwdCAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtkb3dubG9hZFRyYW5zY3JpcHR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICDjg6Hjg6LjgpLjg4Djgqbjg7Pjg63jg7zjg4lcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkhvbWVQYWdlIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsInRyYW5zY3JpcHQiLCJzZXRUcmFuc2NyaXB0IiwicmVjb2duaXRpb25SZWYiLCJoYW5kbGVSZWNvcmRDbGljayIsImN1cnJlbnQiLCJzdG9wIiwiU3BlZWNoUmVjb2duaXRpb25BUEkiLCJ3aW5kb3ciLCJTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwiYWxlcnQiLCJyZWNvZ25pdGlvbiIsImxhbmciLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJvbnJlc3VsdCIsImV2ZW50IiwiZnVsbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0cyIsImxlbmd0aCIsIm9uZXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFydCIsImRvd25sb2FkVHJhbnNjcmlwdCIsImJsb2IiLCJCbG9iIiwidHlwZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInJldm9rZU9iamVjdFVSTCIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicGFkZGluZyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImgzIiwicCIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});