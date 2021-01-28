const events = [];

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
};

const scrollHandler = () => {
    for (let i = 0; i < events.length; i++) {
        const dom = events[i].ref;
        if (isElementInViewport(dom)) {
            events[i].callback(dom);
            events.splice(i, 1);
            i--;
        }
    }
    if (events.length === 0) {
        window.removeEventListener("scroll", scrollHandler);
    }
};

const add = (ref, callback) => {
    if (events.length === 0) {
        window.addEventListener("scroll", scrollHandler);
    }
    events.push({ ref, callback });
};

const remove = (ref) => {
    const removeIndex = events.findIndex((e) => e.ref === ref);
    if (removeIndex > -1) {
        events.splice(removeIndex, 1);
    }
    if (events.length === 0) {
        window.removeEventListener("scroll", scrollHandler);
    }
};

const ret = { add, remove };

export default ret;
