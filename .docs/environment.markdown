# Environment setup

## Start adb server on mobile device
1. Connect device via USB cable
2. In powershell start adb server on device with:

```
 cd C:\Tools\platform-tools\
 .\adb.exe devices -l           // list attached devices
 .\adb.exe tcpip 5050           // restart on port 5050
 ```

adb server should now listen on port 5050.
You can disconnect usb cable from now.
Server can killed by: .\adb.exe kill-server with usb cable connected

## Prepare device
1. Locate device IP address. Example: 192.168.125.210
2. Enable Wifi Remote Debugging

## VSCode Terminal
3. Connect to device server
   $ adb connect 192.168.125.210:5050 (maybe accept connection on device)
