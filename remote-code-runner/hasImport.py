def isImport(s, inputCode): 
    check = "import" 
    for i in range(len(check)): 
        if check[i] != inputCode[s + i]: 
            return False 
    return True

def hasImport(inputCode): 
    for k in range(len(inputCode)): 
        if isImport(k, inputCode): 
            return True
    return False 