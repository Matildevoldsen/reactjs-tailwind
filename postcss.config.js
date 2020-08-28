module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('postcss-discard-comments')
    ]
}
