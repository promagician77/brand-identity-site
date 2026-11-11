# Brand identity directions demo (prebuilt)

Static site in `site/`. Deploy this folder as a Vercel project:

```
cd deploy
npx vercel deploy --prod
```

Or import it in Vercel with **Root Directory** set to this folder. No build step runs.
`vercel.json` sends `X-Robots-Tag: noindex, nofollow` on every response, and `robots.txt` disallows all crawling.
Pages: `/` (the directions), `/sample/` (sample homepage), `/print.html` (card printing), `/test/planted.html` (critique test page).
