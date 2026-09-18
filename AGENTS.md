# What's on Merthyr

Static marketing site (HTML/CSS/JS) for a local-business discovery app in Merthyr Tydfil.

## Stack
- Pure static files: `index.html`, `pricing.html`, `styles.css`, `script.js`
- No build step, no backend, no dependencies, no external credentials.

## Running in Base44
- `docker-compose.base44.yml` serves the repo with `nginx:alpine` on host port 3000.
- A custom `nginx.base44.conf` runs workers as `root` because the sandbox repo dir is `0700` (nginx's default `nginx` user can't traverse it).
- Source is bind-mounted read-only, so edits to HTML/CSS/JS are reflected immediately (nginx serves files live).

## Verify
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` → 200
- Pages: `/` (home), `/pricing.html` (pricing).
