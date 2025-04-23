
DEVICE_IP = 192.168.125.210
WINDOW_IP = 192.168.125.181

adb\:list:
	@adb devices -l
adb\:connect:
	@adb connect ${DEVICE_IP}:5050
adb\:disconnect:
	@adb disconnect ${DEVICE_IP}:5050

# https://ionicframework.com/docs/cli/commands/serve
io\:serve:
	@ionic serve --host 0.0.0.0 --port 8100

# https://ionicframework.com/docs/cli/commands/capacitor-run
io\:list:
	@ionic capacitor run android --list
io\:build:
	@ionic capacitor build android --no-open
io\:deploy:
	@ionic capacitor run android --target=${DEVICE_IP}:5050 --prod
io\:live:
	@ionic capacitor run android --target=${DEVICE_IP}:5050 --livereload --external --public-host=${WINDOW_IP}
