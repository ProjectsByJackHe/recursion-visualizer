import time 
import os 
import requests
import json 

API_KEY = os.environ.get('API_KEY') 

def tryGet(token):
    URL = "https://judge0.p.rapidapi.com/submissions/" + token
    HEADERS = {
        'x-rapidapi-host': "judge0.p.rapidapi.com",
        'x-rapidapi-key': API_KEY
    }
    subResponse = requests.request("GET", URL, headers=HEADERS)
    codeSubmissionResponse = json.loads(subResponse.text) 
    retryNumber = 1
    while codeSubmissionResponse['status']['id'] < 3: 
        time.sleep(2) # wait 2 seconds before trying again
        codeSubmissionResponse = requests.request("GET", URL, headers=HEADERS)
        print("retryNumber " + str(i)) 
        print(codeSubmissionResponse) 
        i += 1
    return codeSubmissionResponse