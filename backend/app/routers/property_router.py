from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..schemas import Property, PropertyCreate
from ..models import Property as PropertyModel
from ..database import get_db

router = APIRouter()

@router.post("/properties/", response_model=Property)
def create_property(property: PropertyCreate, db: Session = Depends(get_db)):
    db_property = PropertyModel(**property.dict())
    db.add(db_property)
    db.commit()
    db.refresh(db_property)
    return db_property

@router.get("/properties/", response_model=list[Property])
def read_properties(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return db.query(PropertyModel).offset(skip).limit(limit).all()
