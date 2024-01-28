#!/usr/bin/python3

import sqlite3

connection = sqlite3.connect('Pop-Hip-Hop.db')
cursor = connection.cursor()

#cursor.execute('''CREATE TABLE playlist(ID INT INCREMENT, Title TXT, Artist TXT, Album TXT);''')

titles = ['Money In The Grave','Going Bad','Ultra Violet','Sick Mode']
artists = ['Drake','Drake','Thouxanbanfauni','Travis Scott']
albums = ['The Best In The World','Championships','Clairovoyance','Astroworld']

def insert():
  for query in range(3):
    cursor.execute('''INSERT INTO playlist VALUES(?,?,?,?)''',(query,titles[query],artists[query],albums[query]))
    connection.commit()

#insert()

cursor.execute('''SELECT title FROM playlist WHERE artist == 'Drake';''')
print(cursor.fetchall())