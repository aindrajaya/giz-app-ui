/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     config.module.rules.push({
//       test: /\.css$/,
//       use: [
//         'style-loader',
//         'css-loader',
//         'postcss-loader',
//       ],
//     })

//     return config
//   },
// }
