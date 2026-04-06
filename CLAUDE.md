# CLAUDE.md — Imberion Website Project Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- Read this file before making changes.
- Check the `brand_assets/` folder before designing or changing frontend code.
- Use existing brand assets if they exist. Do not invent a new visual direction unless explicitly asked.
- Preserve consistency with the current site unless explicitly asked to redesign it.

## Project Goal
Build and refine the Imberion website so it feels clear, premium, strategic, and branded.

The site should quickly communicate:
1. what Imberion is
2. what problem it solves
3. who it is for
4. what action the user should take next

Prioritize clarity and low cognitive load.

## Working Mode
- Start in plan mode for non-trivial tasks.
- Before building, summarize the plan clearly.
- Ask clarifying questions when needed before writing code.
- For bigger changes, explain how the work will be verified before starting.

## Brand Assets
- Always inspect `brand_assets/` first.
- If `BRAND_GUIDELINES.md` exists, follow it.
- If other brand, copy, or design guidance files exist there, use them.
- Use the real logo, colors, and typography when available.

## Reference Images
- If a reference image is provided, match layout, spacing, hierarchy, and overall feel closely.
- Do not “improve” a reference unless explicitly asked.
- If no reference exists, design using the brand assets and current project direction.

## Local Development
- Always work on localhost, never on `file:///` URLs.
- Start the local server before visual review.
- If the server is already running, do not start another instance.

## Verification
- Before doing work, state how the result can be verified.
- Use screenshots for visual review when useful.
- For static pages, do at least 2 review passes unless told otherwise.
- If an element is heavily animated and screenshots are misleading, skip screenshot comparison for that element and rely on code + user review.
- After major changes, verify the work before considering it complete.

## Git / Deployment
- Do not push to GitHub unless explicitly instructed by the user.
- Do not deploy unless explicitly instructed by the user.
- Always test changes locally before suggesting a push.

## Hard Rules
- Do not add random sections just to make the page feel fuller.
- Do not introduce a new brand direction if brand assets already exist.
- Do not use generic SaaS defaults when project-specific guidance exists.
- Do not use `transition-all`.
- Do not assume approval to push or deploy.