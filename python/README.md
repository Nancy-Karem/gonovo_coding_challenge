# Merge Sorted Arrays API Challenge

## Description

Build an API endpoint that takes two sorted arrays and returns a single merged sorted array.

## Requirements

- Python 3.7+
- FastAPI
- Uvicorn

## Setup Instructions

1. **Create a Virtual Environment**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

2. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the API**

   ```bash
   cd app
   uvicorn main:app --reload
   ```

4. **Test the Endpoint**

   Navigate to `http://127.0.0.1:8000/docs` to access the interactive API documentation and test the `/merge` endpoint.

## Task

Implement the logic to merge two sorted arrays in the `merge_sorted_arrays` function within `main.py`. Ensure that the merged array is also sorted.
