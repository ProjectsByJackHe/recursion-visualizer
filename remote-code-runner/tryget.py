import time 
import os 
import requests
import json 


API_KEY = os.environ.get('API_KEY') 

def tryGet(token):
    time.sleep(10)
    URL = "https://judge0.p.rapidapi.com/submissions/" + token
    HEADERS = {
        'x-rapidapi-host': "judge0.p.rapidapi.com",
        'x-rapidapi-key': API_KEY
    }
    subResponse = requests.request("GET", URL, headers=HEADERS)
    codeSubmissionResponse = json.loads(subResponse.text) 
    print('tried again... ')
    print(codeSubmissionResponse)
    output = codeSubmissionResponse['stdout']
    return output