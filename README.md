# jet-schema-doc

The documentation site for [jet schema builder](https://github.com/official-jetio/schema-builder) — a spec-compliant JSON Schema builder with spec compliant type inference(Actual JSON Schema, not custom DSL).

🌐 **Live site:** [https://jet-schema-doc.vercel.app](https://jet-schema-doc.vercel.app)

---

## Built With

- [Next.js](https://nextjs.org) — React framework
- [Nextra v4](https://nextra.site) — documentation theme
- [Pagefind](https://pagefind.app) — static search
- [MDX](https://mdxjs.com) — markdown + JSX

## Running Locally

````bash
git clone https://github.com/official-jetio/jet-schema-doc.git
cd jet-schema-doc
npm install
npm run dev
````

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

````
content/              # All documentation pages (.mdx)
  _meta.ts            # Sidebar configuration
  index.mdx           # Landing page
  getting-started.mdx
  ...
src/
  app/                # Next.js app router
  mdx-components.tsx  # Custom MDX components
public/               # Static assets
next.config.mjs       # Nextra + Next.js config
````

To edit a page, find the matching `.mdx` file in `content/` and edit it directly. Changes hot-reload in dev.

## Contributing

Found a typo, a confusing explanation, or a code example that doesn't work?

1. Click the **"Edit this page on GitHub"** link at the bottom of any docs page
2. Make the fix in GitHub's editor (or fork + PR for larger changes)
3. Open a PR — small fixes are merged quickly

For bigger changes (new pages, restructuring a section), please open an issue first to discuss.

## Reporting Issues

- **Typos / unclear docs:** [Open a docs issue](https://github.com/official-jetio/jet-schema-doc/issues)
- **Bugs in the shema builder itself:** [Report on the main repo](https://github.com/official-jetio/schema-builder/issues)

## Deployment

The site is deployed to [Vercel](https://vercel.com). The `main` branch auto-deploys to production. PRs get preview deployments automatically.

## License

Documentation content is MIT licensed. See [LICENSE](./LICENSE).

---

Built by [@venerablesuprem](https://twitter.com/venerablesuprem)