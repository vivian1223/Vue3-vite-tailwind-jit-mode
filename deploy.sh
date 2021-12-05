set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:vivian1223/Vue3-vite-tailwind-jit-mode.git master:gh-pages
cd -
