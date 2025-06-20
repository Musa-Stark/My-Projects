import pyautogui as pag
import keyboard as kb
import time

time.sleep(5)
# # open run command and reach to the folder.
kb.press_and_release("windows+r")
time.sleep(2)
pag.write("M:\Projects\J.A.R.V.I.S", interval=0.1)
kb.press_and_release("enter")

time.sleep(2)
pag.moveTo(988, 55, duration=1)
pag.leftClick()

time.sleep(1)
i = 0
for i in range(5):
    pag.keyDown("backspace")
    pag.keyUp("backspace")

pag.write("cmd")
kb.press_and_release("enter")

time.sleep(2)
pag.write("cd node-backend")
kb.press_and_release("enter")

pag.write("node app.js")
kb.press_and_release("enter")

kb.press_and_release("ctrl+windows+right")
pag.moveTo(988, 55, duration=1)
pag.leftClick()
pag.write("localhost:8080", interval=0.1)
kb.press_and_release("enter")

time.sleep(1)
pag.moveTo(678, 327, duration=1)
pag.leftClick()
kb.press_and_release("f11")
pag.moveTo(878, 728, duration=0.5)