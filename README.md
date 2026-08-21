# Mars Consulting

One-page website for Mars Consulting, a web design and digital marketing studio in Panama City Beach, FL.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## GitHub + Cloudflare

This is a static site (HTML, CSS, JS). Typical flow:

1. Create a GitHub repository and push these files.
2. In Cloudflare, add your domain and point DNS at Cloudflare.
3. Use **Cloudflare Pages** (connect the GitHub repo) or GitHub Pages + a CNAME in Cloudflare.
4. After you have the live URL, update `robots.txt`, `sitemap.xml`, and the canonical/Open Graph URLs in `index.html`.

## Contact form

The form uses [Web3Forms](https://web3forms.com/). Confirm the access key is allowed for your live domain in the Web3Forms dashboard.

## Swap later

- Featured work images and client names in the Work section
- Footer social links (currently placeholders)
- Real domain URLs in SEO tags
