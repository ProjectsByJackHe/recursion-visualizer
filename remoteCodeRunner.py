import sys 
import subprocess
import injectCode as ij 

originalStdout = sys.stdout

# On the frontend, we will parse the input to get the 
# - function name 
# - single function call
#       - we will truncate this function call line and add it as a seperate parameter


# All the inputs we will collect from the frontend:
# inputCode here is truncated to exclude the single function call. 
inputCode = """
def foo(x): 
    if x == 0: 
        return 0 
    return foo(x - 1)
"""
inputFunctionName = "foo"
inputFunctionCall = "foo(28)"

readyToExe = ij.injectCode(inputCode, inputFunctionName, inputFunctionCall)

with open("run.py", "w") as p: 
    sys.stdout = p 
    print(readyToExe) # print in this instance writes to file instead of outputting text
    sys.stdout = originalStdout

try:
    output = str(subprocess.check_output(["python3", "b.py"])) 
    output = output[3:len(output) - 4]
    print(output)
except: 
    print('ERROR!')