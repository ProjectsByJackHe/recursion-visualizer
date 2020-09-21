
class Call: 
    def __init__(self, params, level): 
        self.params = params 
        self.level = level 
        self.result = None 

functionCalls_ = []
 
def foo(WZwr2a_lFWY, x):    
    c = Call([x], WZwr2a_lFWY)
    WZwr2a_lFWY += 1
 
    if x == 0: 
        r = 0 ; c.result = r; functionCalls_.append(c); return r
    r = foo(WZwr2a_lFWY, x - 1); c.result = r; functionCalls_.append(c); return r

foo(0, 23)
response = "|"
for call in functionCalls_: 
    segment = str(call.params) + ":" + str(call.result) + ":" + str(call.level) + "|"
    response += segment
print(response)

