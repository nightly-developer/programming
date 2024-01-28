#!/usr/bin/python3


def sol(s,pattern):
  s_list = s.split()
  encoding = {}
  encoding_keys = encoding.keys()
  encoding_values = encoding.values()
  if len(pattern) == len(s_list):
    for index, i in enumerate(pattern):
      if i in encoding_keys:
        if encoding[i] == s_list[index]:
          continue
        else:
          return False
      else:
        if s_list[index] in encoding_values:
          return False
        encoding[i] = s_list[index]
    return True
  return False

string = "a af af af a"
pattern = 'bjjjkb'

print(sol(string,pattern))



