import m from 'mithril'
import { FAKE_TREE_DATA as DATA } from './development_data.js'


let Title = {
  view: (vnode) => {
    return [
      m('li', vnode.attrs.name),
      m('ul', vnode.attrs.chapters.map((chapter) => {
        return m('li', chapter.name)
      }))
    ]
  }
}

let Tree = {
  view: (vnode) => {
    console.log(vnode.attrs)
    return m('ul', vnode.attrs.titles.map((title) => {
      return m(Title, { name: title.name, chapters: title.chapters })
    }))
  }
}

m.mount(document.body, {
  view: () => { return m(Tree, DATA) }
})
