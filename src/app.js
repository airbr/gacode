import m from 'mithril'



let Tree = {
  view: () => {
    return m('ul', [
      m('li', 'Title One'),
      m('ul', [
        m('li', 'Chapter One'),
        m('li', 'Chapter Two'),
      ]),
      m('li', 'Title Two'),
      m('ul', [
        m('li', 'Chapter One'),
        m('li', 'Chapter Two'),
      ]),
      m('li', 'Title Three'),
      m('ul', [
        m('li', 'Chapter One'),
        m('li', 'Chapter Two'),
      ]),
    ])
  }
}

m.mount(document.body, Tree)
