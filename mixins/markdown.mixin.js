import { marked } from 'marked'
export default {
  data() {
    return {
      mdContent: '',
      htmlContent: ``,
    }
  },
  methods: {
    convertHTML() {
      const html = marked.parse(this.mdContent)
      this.htmlContent = html
    },
  },
  mounted() {
    this.convertHTML()
  },
}
