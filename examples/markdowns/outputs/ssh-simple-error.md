# This would run a shell through ssh and exit with exit code 1
```shell ssh -i ~/.ssh/virtualbox dominik@dominik-VirtualBox.local -p1337
exit 1
```


 --- 
 #### Runtime output  

* <span style="color: red">stderr </span>2018-09-24T23:17:39.301Z

 ```
Pseudo-terminal will not be allocated because stdin is not a terminal.

``` 
* 2018-09-24T23:17:40.562Z

 ```
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-34-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

 * Read about Ubuntu updates for L1 Terminal Fault Vulnerabilities (L1TF).
   - https://ubu.one/L1TF

 * Want to make a highly secure kiosk, smart display or touchscreen?
   Here's a step-by-step tutorial for a rainy weekend, or a startup.
   - https://bit.ly/secure-kiosk

 * Having fun with some surprising Linux desktop apps... Alan keeps
   the family entertained over the summer/winter holidays.
   - https://bit.ly/top_10_entertainment_apps

 * Canonical Livepatch is available for installation.
   - Reduce system reboots and improve kernel security. Activate at:
     https://ubuntu.com/livepatch

56 packages can be updated.
0 updates are security updates.


``` 

 > <span style='color:orange'>Process exited with status code 1</span> (duration 1 seconds)