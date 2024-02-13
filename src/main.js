import '@/assets/index.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import JsonViewer from "vue3-json-viewer"
import "vue3-json-viewer/dist/index.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faBookOpen, faCaretDown } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faMagnifyingGlass, faBookOpen, faCaretDown)


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(JsonViewer)

app.mount('#app')
