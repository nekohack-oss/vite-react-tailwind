const reactPlugin = require('vite-plugin-react')
const path = require('path')

const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr)
}

module.exports = {
  outDir: 'out',
  alias: {
    '/@/': pathResolve('./src')
  },
  jsx: 'react',
  plugins: [reactPlugin]
}
