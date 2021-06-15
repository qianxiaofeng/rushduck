const withMDX = require("@next/mdx")({
    extension: /\.(md|mdx)$/,
})

module.exports = withMDX({
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    future: {
        webpack5: true,
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
})