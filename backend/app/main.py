from fastapi import FastAPI
from .routers import property_router
from .models import Base
from .database import engine

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(property_router.router)
