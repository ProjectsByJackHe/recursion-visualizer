def parseInput(inputCode): 
    # remove the b" in the beginning and make sure \n is actually a new line.
    inputCode = inputCode[2:]
    inputCode = inputCode[:-1]
    inputCode = inputCode.replace('\\n', '\n').replace('\\t', '\t')
    return inputCode 