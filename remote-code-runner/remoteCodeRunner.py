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
    if res == 'error':
        return (False, "Be sure to follow all rules laid out in the instructions: Make sure there are no syntax errors, logic errors, and infinite recursions... and any funky business ;)")
    
    if res[0] == None:
        res[0] = tg.tryGet(res[1])

    if res[0] == None:
        return (False, "Took too long. I didn't pay for a premium server, sorry about that.")

    output = res[0][1:len(res[0]) - 2]
    return (True, output)