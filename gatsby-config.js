const path = require('path')
const { readdirSync } = require('fs')

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

const aliases = getDirectories(path.join(__dirname, 'src')).reduce(
  (acc, dir) => {
    acc[dir] = path.join(__dirname, 'src', dir)
    return acc
  },
  {},
)

module.exports = {
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-root-import',
      options: aliases,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-portal',
  ],
}
