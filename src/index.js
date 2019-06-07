const { html, define } = require('hybrids')

function increaseCount (host) {
  host.count += 1
}

const SimpleCounter = {
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `
}

define('simple-counter', SimpleCounter)

const el = document.createElement('simple-counter')
document.getElementById('module-root').appendChild(el)
