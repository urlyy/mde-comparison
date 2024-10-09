import { Editor } from 'bytemd'

const editor = new Editor({
  target: document.body, // DOM to render
  props: {
    value: '',
    plugins,
  },
})

editor.$on('change', (e) => {
  editor.$set({ value: e.detail.value })
})