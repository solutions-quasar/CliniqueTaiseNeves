# DNS Configuration for GitHub Pages (cliniquetn.ca)

Since you are hosting this project on GitHub Pages, you need to configure your DNS records to point to GitHub's servers.

## 1. APEX Domain (cliniquetn.ca) - A Records

You should have the following **4 A Records** in your DNS provider (Namecheap):

| Type | Host | Value |
| :--- | :--- | :--- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

## 2. Subdomain (www.cliniquetn.ca) - CNAME Record

To ensure `www.cliniquetn.ca` redirects correctly, add a **CNAME Record**:

| Type | Host | Value |
| :--- | :--- | :--- |
| CNAME | www | solutions-quasar.github.io |

## 3. GitHub Repository Settings

1.  Go to your repository on GitHub: `https://github.com/solutions-quasar/CliniqueTaiseNeves`
2.  Go to **Settings** > **Pages**.
3.  Under **Custom domain**, insure `cliniquetn.ca` is entered and saved.
4.  Check **Enforce HTTPS**.
5.  Wait for the DNS check to pass (can take up to 24 hours).
