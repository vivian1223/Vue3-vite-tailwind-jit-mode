set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:vivian1223/Vite-vue3-basic-environment.git master:gh-pages
cd -
