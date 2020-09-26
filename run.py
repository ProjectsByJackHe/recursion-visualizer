
class JQGRg8XBnB4: 
    def __init__(self, params, caller): 
        self.params = params 
        self.caller = caller 
        self.result = None 

bwmSjveL3Lc = []
# Don't use your tabs. This editor has smart indention enabled. Just press 'enter'

def fib(WZwr2a_lFWY, n):    
    tFRcEOmkDM8 = JQGRg8XBnB4([n], WZwr2a_lFWY)
    if n == 1 or n == 2:
        fE2h3lGlOsk = 1; tFRcEOmkDM8.result = fE2h3lGlOsk; bwmSjveL3Lc.append(tFRcEOmkDM8); return fE2h3lGlOsk;
    fE2h3lGlOsk = fib([n], n - 1) + fib([n], n - 2); tFRcEOmkDM8.result = fE2h3lGlOsk; bwmSjveL3Lc.append(tFRcEOmkDM8); return fE2h3lGlOsk;

fib(0, 6)
ePpPVE_GGJw = "|"
for call in bwmSjveL3Lc: 
    segment = str(call.params) + ":" + str(call.result) + ":" + str(call.caller) + "|"
    ePpPVE_GGJw += segment
print(ePpPVE_GGJw)
