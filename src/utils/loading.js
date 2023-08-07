import { createApp, reactive } from 'vue'
import myLoad from '@/components/Loading.vue'

const msg = reactive({ show: false, title: '加载中...' })
const $loading = createApp(myLoad, { msg }).mount(document.createElement('div'))

const load = {
  show(title = msg.title, duration = null) {
    document.body.classList.add('loading-open');
    msg.show = true
    msg.title = title
    document.body.appendChild($loading.$el)

    if (duration) {
      setTimeout(() => {
        this.hide()
      }, duration)
    }
  },
  hide() {
    document.body.classList.remove('loading-open');
    msg.show = false
  }
}

export { load }