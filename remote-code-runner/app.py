import flask 
from flask import request
from flask_cors import CORS
import parseinput as pi
import remoteCodeRunner as rc
import hasImport as hi

app = flask.Flask(__name__) 
CORS(app)

# for each flask request, we need: 
# - data in the body to represent function logic
# - data in the parameters to represent function name and function call
# if either is missing, we send back an error message. If the remote 
# code execution raises an error, we send back that error message as well. 

@app.route('/execute', methods=['POST'])
def execute(): 
    if 'funcName' in request.args and 'funcCall' in request.args: 
        funcName = request.args['funcName'] 
        funcCall = request.args['funcCall']
        if funcName != funcCall[:len(funcName)]:
            print(funcName)
            print(funcCall[:len(funcName)] != funcName)
            return "Check and make sure you defined EXACTLY one function.", 400
        body = str(request.data)
        inputCode = pi.parseInput(body)

        # check import statements 
        if hi.hasImport(inputCode): 
            return "Whatever you're trying to do, just don't.", 400

        functionTrace = rc.runCode(inputCode, funcName, funcCall)
        if functionTrace[0]:  
            # success case
            # set response status to 200
            return functionTrace[1], 200
        else: 
            # case of invalid value
            # set reponse status to 400
            return functionTrace[1], 400
    else: 
        # case of an invalid request
        return "Please specify both the function name and the initial function call."

if __name__ == "__main__": 
    app.run(port=5000)