import serial

port = serial.Serial(
    port="COM3",
    baudrate=115200,
    bytesize=8,
    timeout=2,
    stopbits=serial.STOPBITS_ONE
)

while True:
    data = str(port.readline())
    data = data.replace("b'", "")
    data = data.replace("'", "")
    data = data.replace(" ", "")
    data = data.replace("\\r\\n", "")
    
    if len(data) > 0:
        print(data)
        csv_file = open("data.csv", "a")
        csv_file.write(data + ",\n")
        csv_file.close()
