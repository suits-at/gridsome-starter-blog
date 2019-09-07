// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  router.beforeEach((to, from, next) => {
    const { hash } = to
    if (hash) {
      return global.location.replace(`/admin#${hash}`)
    }
    next()
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

