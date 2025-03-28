// Test global mithril types

const comp: m.Component = {
    view() {
        return m('span', 'Test');
    },
};

m.mount(document.getElementById('comp')!, comp)

const vnode = m('div', 'Test')

const s: m.Stream<number> = m.stream(1)

const qstr = m.buildQueryString({ a: 1, b: 'abc' });
const params = m.parseQueryString(qstr);
const pstr = m.buildPathname('/api/user/:id', { id: 1 });
const parts = m.parsePathname(pstr);


const censored = m.censor({one: "two", enabled: false, oninit: () => {}}, ["enabled"] as const);
// @ts-expect-error
censored.enabled;
// @ts-expect-error
censored.oninit;
censored.one;

m.redraw();
m.redraw.sync();

m(m.route.Link, { selector: 'a', href: '/page1' }, 'Click this');
