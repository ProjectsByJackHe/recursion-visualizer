finalOutput = ""

alwaysInject = """
class Call: 
    def __init__(self, params, level): 
        self.params = params 
        self.level = level 
        self.result = None 

functionCalls_ = []
"""

# goes through our list and adds the output. 
alwaysInjectLast = """
response = "|"
for call in functionCalls_: 
    segment = str(call.params) + ":" + str(call.result) + ":" + str(call.level) + "|"
    response += segment
print(response)
"""

injectInBeginningOfFunc1 = """    
    c = Call(["""
injectInBeginningOfFunc2 = """], WZwr2a_lFWY)
    WZwr2a_lFWY += 1
"""

# we need to add indentation to every line here accordingly. 
constantLinesToAdd = "c.result = r; functionCalls_.append(c); return r"


