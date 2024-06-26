#! /usr/bin/python3
import os

html = "<html><body><h2>Environment:</h2><br>"
for param in os.environ.keys():
    html += f"<p><b>{param}</b>: {os.environ[param]}</p>"
html += f"<p><b>CWD</b>: {os.getcwd()}</p></body></html>"
print("Content-Length: " + str(len(html)))
print("Content-Type: text/html\n")
print(html)
