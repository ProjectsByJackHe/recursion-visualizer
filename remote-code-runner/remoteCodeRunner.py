import subprocess
import injectCode as ij 
import judge as j
import tryget as tg

def runCode(inputCode, inputFunctionName, inputFunctionCall):
    # On the frontend, we will parse the input to get the 
    # - function name 
    # - single function call
    #       - we will truncate this function call line and add it as a seperate parameter
    # All the inputs we will collect from the frontend:
    # inputCode here is truncated to exclude the single function call. 
    readyToExe = ij.injectCode(inputCode, inputFunctionName, inputFunctionCall)
    res = j.sendCodeToJudge(readyToExe)
    if res == False: # couldn't even POST the user's code
        return (False, "Be sure to follow all rules laid out in the instructions: Make sure there are no syntax errors, logic errors, and infinite recursions... and any funky business ;)")
    
    codeSubmissionResults = res[0] # output object with stdout and stderr
    submissionToken = res[1] # token reference ID
    
    # do processing checks first before doing error checks 
    if codeSubmissionResults['status']['id'] < 3: 
        # still processing...
        codeSubmissionResults = tg.tryGet(submissionToken) 

    if codeSubmissionResults['status']['id'] == 3:
        # success case
        output = codeSubmissionResults['stdout'][1:len(codeSubmissionResults['stdout']) - 2]
        return (True, output)
    else: 
        # error case
        if codeSubmissionResults['stderr']:
            return (False, codeSubmissionResults['stderr'])
        else: 
            return (False, "Unknown error.")