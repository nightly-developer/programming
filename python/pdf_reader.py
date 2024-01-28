import PyPDF2 as pdf
pdfFileObj = open('input files/example.pdf','rb')
pdfReader = pdf.PdfFileReader(pdfFileObj)
print(pdfReader.getPage(0))
