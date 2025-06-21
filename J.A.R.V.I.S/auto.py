import pyautogui as pag
import keyboard as kb
import time

# desktop 1 setup
# time.sleep(3)
# kb.press_and_release("windows+r")
# time.sleep(1)
# pag.write("M:/Projects/J.A.R.V.I.S", interval=0.05)
# kb.press_and_release("enter")
# time.sleep(2)
# pag.moveTo(256, 293, duration=1)
# pag.doubleClick()

# # next desktop
time.sleep(3)
kb.press_and_release("ctrl+windows+right")

# # desktop 2 setup
time.sleep(3)
kb.press_and_release("windows+r")
time.sleep(1)
pag.write("M:/", interval=0.05)
kb.press_and_release("enter")
time.sleep(2)
pag.leftClick()
time.sleep(1)
kb.press_and_release("alt+d")
time.sleep(2)
pag.write("M:/My-Projects/J.A.R.V.I.S", interval=0.05)
kb.press_and_release("enter")
time.sleep(2)
pag.leftClick()
time.sleep(1)
kb.press_and_release("alt+d")
time.sleep(2)
pag.write("cmd", interval=0.05)
kb.press_and_release("enter")

time.sleep(2)
pag.write("code .", interval=0.05)
kb.press_and_release("enter")

# # next desktop
time.sleep(4)
kb.press_and_release("ctrl+windows+right")

# # desktop 3
time.sleep(2)
kb.press_and_release("windows+3")

# # next desktop
time.sleep(4)
kb.press_and_release("ctrl+windows+right")

# # desktop 4
time.sleep(2)
kb.press_and_release("windows+3")
