# Insurance Knowledge Nuggets — Setup Guide
### Hosted on Netlify · Powered by Firebase

A fully static insurance quiz platform. No server or build tools required.
Authentication and data are handled by Firebase. Hosting is via Netlify,
which has no Content Security Policy restrictions that would block Firebase.

---

## Why Netlify instead of Neocities

Neocities enforces a strict server-side Content Security Policy that permanently
blocks all outbound connections to external APIs — including Firebase Auth and
Firestore. This cannot be worked around with HTML meta tags because server headers
always take precedence. Netlify has no such restriction and deploys identically
from the same files.

---

## File structure

```
netlify.toml             — Netlify config (CSP headers, routing)
index.html               — Public landing / cover page
nuggets.html             — Email sign-in and account creation
quizzes.html             — Quiz selection library (requires sign-in)
quiz.html                — Individual quiz player
admin.html               — Admin dashboard (admin role only)
firestore.rules          — Firestore security rules (paste into Firebase Console)
I_N_S_U_R_A_N_C_E.gif   — Animated logo on the landing page
Knowledge_Nugget.png     — Mascot image on the landing page
css/
  global.css             — Shared styles used by all pages
js/
  firebase-config.js     — Your Firebase credentials + admin email list
  quiz-data.js           — All quiz content
```

> `netlify.toml` must be in the root of the folder you upload or deploy.
> Do not put it inside a subfolder.

---

## Current quiz topics

- **Commercial General Liability** — 10 questions · Intermediate
- **Commercial Property** — 5 questions · Intermediate

---

## Step 1 — Set up Firebase

### 1a. Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**, name it (e.g. `knowledge-nuggets`), and finish setup
3. Disable Google Analytics if you don't need it

### 1b. Enable Email/Password authentication

1. Firebase Console → **Build → Authentication → Get started**
2. Click the **Sign-in method** tab
3. Click **Email/Password**, toggle it on, and click **Save**

> Google sign-in is not used in this project. Email/password only.

### 1c. Create a Firestore database

1. Firebase Console → **Build → Firestore Database → Create database**
2. Choose **Start in production mode**
3. Select a region close to your users and click **Enable**

### 1d. Apply Firestore security rules

1. In Firestore, click the **Rules** tab
2. Delete the existing rules and paste in the full contents of `firestore.rules`
3. Click **Publish**

### 1e. Get your Firebase web config

1. Firebase Console → **Project Settings** (gear icon, top-left) → **Your apps**
2. Click **Add app** → **Web** (`</>` icon)
3. Give it a nickname (e.g. `knowledge-nuggets-web`) and click **Register app**
4. Copy the `firebaseConfig` values shown

Open `js/firebase-config.js` and fill them in:

```js
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abcdef"
};
```

### 1f. Add your admin email

In the same `js/firebase-config.js` file:

```js
const ADMIN_EMAILS = [
  "you@youremail.com"
];
```

Add any email addresses that should have admin access to the dashboard.
Multiple emails are separated by commas.

---

## Step 2 — Add your Netlify domain to Firebase Auth

Firebase Auth will reject sign-in attempts from domains it doesn't recognise.
You need to whitelist your Netlify URL before anyone can sign in.

1. Firebase Console → **Authentication → Settings** tab
2. Scroll to **Authorized domains**
3. Click **Add domain**
4. Add your Netlify URL — e.g. `knowledge-nuggets.netlify.app`

> Do this **before** uploading to Netlify, otherwise the first sign-in attempt
> will fail with an "unauthorized domain" error.
>
> If you later connect a custom domain (e.g. `knowledgenuggets.com`), add that
> domain here too.

---

## Step 3 — Deploy to Netlify

### Option A — Drag and drop (easiest, no account setup needed)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `knowledge-nuggets` folder onto the page
3. Netlify deploys it instantly and gives you a URL like `https://random-name.netlify.app`
4. To get a cleaner URL: in your Netlify site dashboard go to
   **Site configuration → Site details → Change site name**
   and set it to something like `knowledge-nuggets`

### Option B — GitHub + Netlify (recommended for ongoing updates)

1. Push the `knowledge-nuggets` folder to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect GitHub, select your repo
4. Leave build command blank, set publish directory to `/` (or the folder name)
5. Click **Deploy site**

With this method, every time you push a change to GitHub (e.g. updating
`quiz-data.js` with new quizzes), Netlify redeploys automatically.

---

## Step 4 — Create your admin account

1. Visit your live Netlify URL and click **Start a quiz** to go to `nuggets.html`
2. Click **Create account** and sign up with the email you added to `ADMIN_EMAILS`
3. Sign out, then sign back in
4. The **Admin** button will now appear in the navigation bar on `quizzes.html`

> The admin role is assigned on **first login** by checking your email against
> `ADMIN_EMAILS`. If you signed up before adding your email to the list,
> you'll need to manually update your Firestore user document:
> Firestore Console → `users` collection → find your document → set `role` to `"admin"`.

---

## How the site works

| Page | URL | Access |
|---|---|---|
| Landing / cover | `/index.html` | Public |
| Sign in / create account | `/nuggets.html` | Public |
| Quiz library | `/quizzes.html` | Signed in |
| Quiz player | `/quiz.html?id=quiz-id` | Signed in |
| Admin dashboard | `/admin.html` | Admin role only |

**Sign-in flow:**
1. Visitor lands on `index.html` (mascot + logo, no Firebase calls)
2. Clicks **Start a quiz** → goes to `nuggets.html`
3. Signs in or creates an account
4. Redirected to `quizzes.html`
5. All protected pages redirect to `nuggets.html` if not signed in

---

## Adding new quizzes

### Option A — Admin panel quiz builder (no code required)

1. Sign in as admin → **Admin → Add new quiz**
2. Fill in title, subtitle, category, difficulty, and icon (single emoji)
3. Add questions — each needs question text, four options, the correct answer
   selected, one feedback line per option, and an answer key summary
4. Click **Generate code** and copy the output
5. Open `js/quiz-data.js` in a text editor
6. Paste the new quiz object inside the `QUIZ_LIBRARY = [ ... ]` array,
   after the last existing quiz and before the closing `]`
7. Save and re-deploy to Netlify (drag-drop the updated folder, or push to GitHub)

### Option B — Edit quiz-data.js directly

```js
{
  id: "unique-slug",           // lowercase, hyphens only — used in the URL
  title: "Quiz Title",
  subtitle: "One-line description shown on the quiz card",
  icon: "🏢",                  // Single emoji
  category: "Liability",       // Liability | Property | Auto | Life & Health | E&O
  difficulty: "Intermediate",  // Foundational | Intermediate | Advanced
  questions: [
    {
      q: "The full question text?",
      options: [
        "First answer option",
        "Second answer option",
        "Third answer option",
        "Fourth answer option"
      ],
      answer: 1,               // 0-indexed: 0=first option, 1=second, 2=third, 3=fourth
      feedback: [
        "Shown if user picks option 1",
        "Shown if user picks option 2",
        "Shown if user picks option 3",
        "Shown if user picks option 4"
      ],
      key: "Brief correct-answer explanation shown after the question is answered"
    }
  ]
}
```

---

## Admin panel reference

| Section | What it shows |
|---|---|
| **Overview** | Platform totals — users, attempts, completions, avg score, recent activity |
| **Users** | Full roster with search/filter. Click any row for a per-quiz score breakdown |
| **All results** | Every submission — filterable by quiz, status, name/email |
| **Manage quizzes** | All quizzes with attempt counts and avg scores. Includes preview link |
| **Add new quiz** | GUI quiz builder that generates copy-paste code for `quiz-data.js` |

---

## Scores and progress

- Each question is worth **5 points**
- Users check answers one at a time — feedback and answer key reveal immediately
- Progress saves to Firestore automatically after each answered question
- Users can leave and return — progress is restored
- Submitting records a final completion entry
- Users can retake quizzes — the admin breakdown shows their most recent attempt

---

## Updating after deployment

| What changed | What to re-deploy |
|---|---|
| Added/edited quiz content | `js/quiz-data.js` only |
| Updated Firebase config or admin emails | `js/firebase-config.js` only |
| Design or layout changes | The changed HTML file(s) |
| Everything | The full folder |

For drag-and-drop Netlify: just drop the updated folder again — Netlify replaces the previous deploy.
For GitHub-connected Netlify: push your changes and Netlify redeploys automatically.

---

## Notes

- `netlify.toml` is what makes Firebase work — it sets the Content-Security-Policy
  header to allow connections to Firebase's domains. Do not delete it.
- All quiz content is in `quiz-data.js` on the client — Firestore stores only
  user scores and progress, not the quiz questions themselves
- If you rename a quiz's `id` after users have already taken it, their progress
  for the old ID will be orphaned and won't appear under the new ID
- To add more admins: add their email to `ADMIN_EMAILS` in `firebase-config.js`,
  redeploy, then have them sign out and back in
