from fastapi import FastAPI  # type: ignore[reportMissingImports]

app = FastAPI()


@app.get("/api/health")
def health():
    return {"status": "ok"}