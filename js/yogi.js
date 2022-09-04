const add = (el, prop) => {
    if (typeof prop === 'object') {
        prop.map((p) => {
            el.setAttribute(p, '');
        });
    } else {   
        el.setAttribute(prop, '');
    }
}

const remove = (el, prop) => {
    if (typeof prop === 'object') {
        prop.map((p) => {
            el.removeAttribute(p);
        });
    } else {
        el.removeAttribute(prop);
    }
}

export {
    add,
    remove
};