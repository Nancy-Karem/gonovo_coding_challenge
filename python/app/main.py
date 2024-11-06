from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class ArraysInput(BaseModel):
    array1: List[int]
    array2: List[int]

# TODO: Implement the merge sorted arrays endpoint
# POST /merge