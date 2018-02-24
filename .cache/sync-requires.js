// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/src/pages/index.js")),
  "component---src-pages-profile-index-jsx": preferDefault(require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/src/pages/profile/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/layout-index.json"),
  "hi-folks.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/hi-folks.json"),
  "layout-index.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/layout-index.json"),
  "my-second-post.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/my-second-post.json"),
  "layout-index.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/hello-world.json"),
  "layout-index.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/index.json"),
  "layout-index.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/layout-index.json"),
  "profile.json": require("/Users/alec/Documents/GitHub/aleclinehan.github.io/aleclinehan.github.io/.cache/json/profile.json")
}