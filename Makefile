
DEVICE_IP = 192.168.125.210
WINDOW_IP = 192.168.125.181

adb\:list:
	@adb devices -l
adb\:connect:
	@adb connect ${DEVICE_IP}:5050
adb\:disconnect:
	@adb disconnect ${DEVICE_IP}:5050
