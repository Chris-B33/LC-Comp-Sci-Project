log = 0
serial.redirect_to_usb()

def on_button_pressed_a():
    global log
    log = 1
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global log
    log = 0
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if log == 1:
        serial.write_line(str((input.temperature())), str((input.temperature())))
        basic.pause(1000)
basic.forever(on_forever)