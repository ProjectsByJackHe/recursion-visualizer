import subprocess
import injectCode as ij 
import judge as j

def runCode(inputCode, inputFunctionName, inputFunctionCall):
    # On the frontend, we will parse the input to get the 
    # - function name 
    # - single function call
    #       - we will truncate this function call line and add it as a seperate parameter
    # All the inputs we will collect from the frontend:
    # inputCode here is truncated to exclude the single function call. 
    readyToExe = ij.injectCode(inputCode, inputFunctionName, inputFunctionCall)
    res = j.sendCodeToJudge(readyToExe)
    if res == None or res == 'error':
        return (False, "There was a problem executing your code. Make sure there are no syntax errors, logic errors, and infinite recursions.")
    output = res[1:len(res) - 2]
    print(output)
    return (True, output)