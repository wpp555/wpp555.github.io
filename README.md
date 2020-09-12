# 此文档照搬 飞跃高山与大洋的鱼

[![Build Status](https://travis-ci.com/shanyuhai123/documents.svg?branch=master)](https://travis-ci.com/shanyuhai123/documents) [![GitHub forks](https://img.shields.io/github/forks/shanyuhai123/documents)](https://github.com/shanyuhai123/documents/network) [![GitHub stars](https://img.shields.io/github/stars/shanyuhai123/documents)](https://github.com/shanyuhai123/documents/stargazers) [![GitHub license](https://img.shields.io/github/license/shanyuhai123/documents)](https://github.com/shanyuhai123/documents/blob/master/LICENSE)


b站视频 https://www.bilibili.com/video/av43316513

利用 vuepress 构建的笔记地址为 https://docs.shanyuhai.top

github地址为 https://github.com/shanyuhai123/documents


## 如何使用

```bash
# 1. 首先拷贝该项目
git clone git@github.com:shanyuhai123/documents.git

# 2. 安装依赖
yarn install

# 3. 本地运行查看(在运行前请先进行相关配置)
yarn docs:dev # 或者 npm run docs:dev

# 4. github新增docs远程项目，并在本地拉取项目修改自己的内容，
docs\.vuepress\config.js 对象新增 base: "/docs/",

# 5. 参照配置进行部署 https://www.vuepress.cn/guide/deploy.html#github-pages

```