import React, { useRef, useEffect } from "react";
import scrollInViewFun from "../../tools/scrollInView";

/**
 * type: dom元素的類型，預設為div
 * callback: 進入畫面後要觸發的函式
 * addClass: 進入畫面後會新增的class
 */
const ScrollInView = ({ type, children, callback, addClass, ...args }) => {
    const dom = useRef();
    useEffect(() => {
        const curDom = dom.current;
        scrollInViewFun.add(curDom, (dom) => {
            callback && callback(dom);
            addClass && dom.classList.add(addClass);
        });
        return () => {
            scrollInViewFun.remove(curDom);
        };
    }, [callback, addClass]);

    const options = { ref: dom, ...args };
    return React.createElement(type || "div", options, children);
};

export default ScrollInView;
