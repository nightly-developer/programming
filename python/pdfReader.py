#!/usr/bin/python3
# importing required modules
import PyPDF2
import re
# creating a pdf file object
pdfFileObj = open('/home/sanchez/Documents/deep learning papers/paper000 Deep Learning History.pdf', 'rb')
  
# creating a pdf reader object
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
  
# printing number of pages in pdf file
#print(pdfReader.numPages)

pattern = r'\[\d+\]'

for page in range(33,34):
  # creating a page object
  pageObj = pdfReader.getPage(page)

  # extracting text from page
  text_content = pageObj.extractText()
  

# closing the pdf file object
pdfFileObj.close()