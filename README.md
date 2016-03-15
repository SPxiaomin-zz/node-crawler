# nodejs crawler simple example

originated from <https://github.com/focalhot/node.js-crawler>

## 编写过程简介

1. 首先通过 `mkdirp` 模块创建 `images` 目录用来存放下载的图片
2. 通过 `request` 模块取得 `url` 的 html 内容，并通过 `cheerio` 模块进行解析，取出图片的 `src`
3. 再次通过 `request` 模块下载 `src` 对应的图片内容即可
