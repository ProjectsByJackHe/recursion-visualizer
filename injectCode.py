# alwaysInject = """
# class Call: 
# def __init__(self, params, level): 
#     self.params = params 
#     self.level = level 
#     self.result = None
# functionCalls_ = []
alwaysInject = """
class JQGRg8XBnB4: 
    def __init__(self, params, caller): 
        self.params = params 
        self.caller = caller 
        self.result = None 

bwmSjveL3Lc = []
"""

# goes through our list and adds the output. 
# alwaysInjectLast = """
# response = "|"
# for call in functionCalls_: 
#     segment = str(call.params) + ":" + str(call.result) + ":" + str(call.level) + "|"
#     response += segment
# print(response)
# """
alwaysInjectLast = """
ePpPVE_GGJw = "|"
for call in bwmSjveL3Lc: 
    segment = str(call.params) + ":" + str(call.result) + ":" + str(call.caller) + "|"
    ePpPVE_GGJw += segment
print(ePpPVE_GGJw)
"""

# injectInBeginningOfFunc1 = """    
#   c = Call(["""
# injectInBeginningOfFunc2 = """], WZwr2a_lFWY)

injectInBeginningOfFunc1 = """    
    tFRcEOmkDM8 = JQGRg8XBnB4(["""
injectInBeginningOfFunc2 = """], WZwr2a_lFWY)"""

# we need to add indentation to every line here accordingly. 
# constantLinesToAdd = "c.result = r; functionCalls_.append(c); return r"
constantLinesToAdd = "tFRcEOmkDM8.result = fE2h3lGlOsk; bwmSjveL3Lc.append(tFRcEOmkDM8); return fE2h3lGlOsk;"



# adds custom return statements
def checkReturnStatement(inputCode, s): 
    # start from s and check to see if 
    # s + n is a return statement with 
    # return values. returns that return 
    # value and start bound and end bound 
    # representing where the return statement begins 
    # and where it ends. 
    # checks return validity
    lookFor = "return" 
    for i in range(len(lookFor)): 
        if not (i + s < len(inputCode) and lookFor[i] == inputCode[i + s]): 
            return None

    retVal = "" 
    e = s
    for j in range(s + 7, len(inputCode)): 
        if inputCode[j] != "\n": 
            retVal += inputCode[j]  
        else: 
            e = j 
            break 
    return (retVal, s, e)
def findReturnOutValues(inputCode):
    global constantLinesToAdd
    # looks for every return statement and adds their corresponding 
    # output values to a list. We also want to store the location of 
    # those return values as startbound and endbound (s, e).  
    i = 0
    while i < len(inputCode): 
        returnStatement = checkReturnStatement(inputCode, i)
        if returnStatement: 
            # modify inputCode here
            # split input code. 
            left = inputCode[:returnStatement[1]]
            right = inputCode[returnStatement[2]:]
            linesToAdd = "fE2h3lGlOsk = " + returnStatement[0] + "; " + constantLinesToAdd
            inputCode = left + linesToAdd + right
            i += len(linesToAdd)
        i += 1
    return inputCode
def addCustomReturnStatements(inputCode):
    # finds every return statement, and replaces it with our custom 
    # code 
    inputCode = findReturnOutValues(inputCode)
    return inputCode 

# adds the 'Call() class and level += 1, and dynamically changes the input parameters to match the function call. 
def checkIsFuncName(inputFunctionName, inputCode, s):
    for i in range(len(inputFunctionName)): 
        if not (i + s < len(inputCode) and inputFunctionName[i] == inputCode[i + s]): 
            return False 
    return True 
def untilFuncEnd(inputCode, startbound):
    # get list of parameters here. 
    # returns distance until function ends AND a string of parameters. 
    parameters = ""
    dtc = 0 
    for i in range(startbound, len(inputCode)):
        if inputCode[i] == ":":
            return (dtc + 1, parameters)
        else: 
            if inputCode[i] != "(" and inputCode[i] != ")":
                parameters += inputCode[i]
            dtc += 1
def injectCallFunction(inputCode, inputFunctionName):
    global injectInBeginningOfFunc
    # find first function name: 
    for s in range(len(inputCode)):
        if checkIsFuncName(inputFunctionName, inputCode, s):
            # insert injectInBeginningFunc here 
            collection = untilFuncEnd(inputCode, s + len(inputFunctionName)) 
            leftBound = s + len(inputFunctionName) + collection[0] 
            left = inputCode[:leftBound]
            right = inputCode[leftBound:]
            inputParameters = collection[1] 
            injectInBeginningOfFunc = injectInBeginningOfFunc1 + inputParameters + injectInBeginningOfFunc2
            return [left + injectInBeginningOfFunc + right, inputParameters]
        

# adds the 'caller' parameter to every single instance of the function call
def addLevelParameter(inputCode, inputFunctionName, caller):
    s = 0
    isFirstFunc = True
    while s < len(inputCode): 
        if checkIsFuncName(inputFunctionName, inputCode, s): 
            cut = s + len(inputFunctionName) + 1  
            left = inputCode[:cut] 
            right = inputCode[cut:] 
            if isFirstFunc:
                inputCode = left + "WZwr2a_lFWY" + ", " + right
                isFirstFunc = False 
            else: 
                inputCode = left + "[" + caller + "]" + ", " + right
        s += 1
    return inputCode
def addZero(inputFunctionCall): 
    inputFunctionCall = "\n" + inputFunctionCall
    for i in range(len(inputFunctionCall)): 
        if inputFunctionCall[i] == "(": 
            left = inputFunctionCall[:i+1]
            right = inputFunctionCall[i+1:]
            inputFunctionCall = left + "0, " + right
    return inputFunctionCall

def injectCode(inputCode, inputFunctionName, inputFunctionCall):
    finalOutput = ""
    finalOutput += alwaysInject 
    paramsInjection = injectCallFunction(inputCode, inputFunctionName)
    inputCode = paramsInjection[0]
    inputCode = addLevelParameter(inputCode, inputFunctionName, paramsInjection[1])
    finalOutput += addCustomReturnStatements(inputCode)
    finalOutput += addZero(inputFunctionCall)
    finalOutput += alwaysInjectLast
    return finalOutput