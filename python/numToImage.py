#!/usr/bin/env python3
import numpy as np
import cv2
shade = 255
width, height = 800, 800
img = np.zeros((height,width,3),dtype=np.uint8)
#draw BG
img[:] = (55,40,35)
#draw ground
img[int(height*0.85):height,0:width] = (35,65,47)
#draw building
img[int(height*0.1):int(height*0.9),int(width*0.1):int(width*0.5)] = (55,70,65)
#draw window
for row in range(1,7):
  for col in range(1,5):
    if np.random.randint(0,8) == 5:
      window_color = (0,255, 255)
    else:
      window_color = (51,18,0)
    img[int(height*0.12*row+10):int(height*0.12*row+60),
        int(width*col*0.11+5):int(width*col*0.11+40)] = window_color

cv2.imwrite('myImage.png',img)