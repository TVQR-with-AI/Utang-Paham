# Utang Paham

Catching up on lectures in instalments before the quiz.

Utang Paham ("understanding debt") is a web app for students who have fallen behind on a lecture deck. The student adds the deck, the quiz date and the free minutes they have. The app splits the deck into "cicilan" (instalments) that fit that time, and says plainly which slides it is skipping.

Built for **STACK 2026 by GDGoC ITB**, Case 1: Smarter Campus and Learning, by team **TQVR with AI**.

## Status

This project is in early development. The table below is kept honest: a feature is only marked done when it works in the app.

| Feature | Status |
|---|---|
| Repository scaffold (frontend and backend) | Done |
| Frontend talks to backend (health check) | Done |
| Add a deck: read a PDF, split into slides, number the text segments | Planned |
| Time budget: quiz date and free minutes | Planned |
| Planner: instalments and skipped list | Planned |
| Slide screen: flag, write a guess, write own explanation | Planned |
| Recall: earlier slides return in later instalments | Planned |
| AI explanation: three cited lines, citations checked by code | Planned |
| Class flags: anonymous count per slide | Planned |
| Drafted question for sparse or widely flagged slides | Planned |

## Tech stack

| Part | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| PDF reading | PDF.js (`pdfjs-dist`) |
| On-device data | IndexedDB through Dexie |
| Backend | Python, FastAPI, Pydantic |
| AI | Gemini API (`google-genai`) |
| Flag counter | Upstash Redis (`upstash-redis`) |

## Project structure

```
Utang-Paham/
  frontend/     React + TypeScript app (runs in the browser)
  backend/      FastAPI app (JSON API)
  README.md
  .gitignore
```

## Run locally

You need Node 22 or newer and Python 3.12 or newer.

**Backend** (terminal 1):

```
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload --port 8000
```

Check it at http://localhost:8000/api/health. Interactive API docs are at http://localhost:8000/docs.

**Frontend** (terminal 2):

```
cd frontend
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173. The page should show "Backend status: ok".

## Environment variables

These live in `backend/.env`, which is never committed. `backend/.env.example` lists the names.

| Name | Used for | Needed when |
|---|---|---|
| `GEMINI_API_KEY` | Calling the Gemini API | AI explanation |
| `GEMINI_MODEL` | Which Gemini model to call | AI explanation |
| `ACCESS_CODE` | Limiting the AI endpoint to pilot users | AI explanation |
| `UPSTASH_REDIS_REST_URL` | Flag counter storage | Class flags |
| `UPSTASH_REDIS_REST_TOKEN` | Flag counter storage | Class flags |

The frontend has no environment variables. Never put a secret in the frontend, because anything prefixed `VITE_` is sent to the browser.

## Privacy

- Decks, guesses, explanations and plans stay on the student's device.
- Only the one slide a student asks about is sent to the AI endpoint.
- The server stores only a slide-file fingerprint, a slide number and an anonymous count.

## Team

| Member | Role |
|---|---|
| Ahmad Hoesin (leader) | _to be assigned_ |
| William Jesiel | _to be assigned_ |
| Goran Adriano Tamrella | _to be assigned_ |
| Muhamad Idris Kamal | _to be assigned_ |

## AI assistance

We disclose material AI assistance here, as the STACK 2026 Declaration of Originality requires.

| Tool | Role |
|---|---|
| Claude (Anthropic) | Researching existing tools, and give guidance and starter code for the project scaffold (repository layout, health-check endpoint, first React component) |
| Gemini API (Google) | Planned runtime feature: generates the cited three-line explanation for one slide |

The team reviews, tests and is responsible for all code and text in this repository. This table is updated whenever AI assistance is used for a new part of the project.

## Third-party resources

This project uses open-source libraries, including React, Vite, PDF.js, Dexie, FastAPI and Pydantic, under their respective licenses. Full dependency lists are in `frontend/package.json` and `backend/requirements.txt`.