from typing import List
from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        def make_key(sp:str)->tuple:
            count=[0]*26
            for ch in sp:
                count[ord(ch)-ord('a')]+=1
            return tuple(count)
        for s in strs:
            key = make_key(s)
            groups[key].append(s)
        return list(groups.values())
