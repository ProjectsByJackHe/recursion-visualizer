
class JQGRg8XBnB4: 
    def __init__(self, params, level): 
        self.params = params 
        self.level = level 
        self.result = None 

bwmSjveL3Lc = []
def quicksort(WZwr2a_lFWY, li):    
  tFRcEOmkDM8 = JQGRg8XBnB4([li], WZwr2a_lFWY)
  WZwr2a_lFWY += 1 
  if len(li) <= 1: 
    fE2h3lGlOsk = li; tFRcEOmkDM8.result = fE2h3lGlOsk; bwmSjveL3Lc.append(tFRcEOmkDM8); return fE2h3lGlOsk
  pivot = li[0]
  l = []
  e = []
  g = []
  for i in range(len(li)): 
    if li[i] > pivot:
      g.append(li[i])
    elif li[i] == pivot:
      e.append(li[i])
    else:
      l.append(li[i])    
  fE2h3lGlOsk = quicksort(WZwr2a_lFWY, l) + e + quicksort(WZwr2a_lFWY, g) ; tFRcEOmkDM8.result = fE2h3lGlOsk; bwmSjveL3Lc.append(tFRcEOmkDM8); return fE2h3lGlOsk

quicksort(0, [5,4,3,2,1])
response = "|"
for call in bwmSjveL3Lc: 
    segment = str(call.params) + ":" + str(call.result) + ":" + str(call.level) + "|"
    response += segment
print(response)
