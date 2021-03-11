#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd public

git init
git add .
git commit -m 'deploy'
git remote add origin https://yuji8023:${GITEE_PASSWORD}@gitee.com/yuji8023/blog.git
git push -u origin master -f
git push -u origin master

#git push -f git@gitee.com:claa/vuepress-theme-vdoing.git master:gh-pages


cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist