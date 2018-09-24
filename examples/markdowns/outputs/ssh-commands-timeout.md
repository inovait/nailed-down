# This would run a shell through ssh and pass multiple commands but timeouts after 3 seconds
```shell ssh -i ~/.ssh/virtualbox dominik@dominik-VirtualBox.local -p1337 TIMEOUT 3
echo "ls -all command" 
ls -all
sleep 2
echo "cd .. command"
cd ..
sleep 2
echo "ls -all command again"
ls -all
sleep 2 
echo "ps -aux command"
ps -aux
sleep 2
```


 --- 
 #### Runtime output  

* <span style="color: red">stderr </span>2018-09-24T23:17:52.942Z

 ```
Pseudo-terminal will not be allocated because stdin is not a terminal.

``` 
* 2018-09-24T23:17:54.200Z

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
* 2018-09-24T23:17:54.203Z

 ```
ls -all command
total 152
drwxr-xr-x  20 dominik dominik  4096 sep 21 11:19 .
drwxr-xr-x   3 root    root     4096 avg 30 13:08 ..
-rw-------   1 dominik dominik  1532 sep 21 15:12 .bash_history
-rw-r--r--   1 dominik dominik   220 avg 30 13:08 .bash_logout
-rw-r--r--   1 dominik dominik  3771 avg 30 13:08 .bashrc
drwx------  13 dominik dominik  4096 sep 21 11:23 .cache
drwx------  14 dominik dominik  4096 sep 21 11:24 .config
drwxr-xr-x   7 dominik dominik  4096 sep 21 11:27 Desktop
drwxr-xr-x   2 dominik dominik  4096 avg 30 13:17 Documents
drwxr-xr-x   2 dominik dominik  4096 avg 31 11:08 Downloads
-rw-r--r--   1 dominik dominik  8980 avg 30 13:08 examples.desktop
-rw-r--r--   1 dominik dominik    65 avg 31 11:01 .gitconfig
drwx------   3 dominik dominik  4096 avg 30 13:20 .gnupg
-rw-------   1 dominik dominik  3620 sep 21 11:19 .ICEauthority
drwxr-xr-x  12 dominik dominik  4096 sep 12 17:31 impactwrap-backend
drwxr-xr-x   5 dominik dominik  4096 avg 31 11:03 iw-gym-farm-connector-service
drwx------   3 dominik dominik  4096 avg 30 13:17 .local
drwx------   5 dominik dominik  4096 avg 30 14:30 .mozilla
drwxr-xr-x   2 dominik dominik  4096 avg 30 13:17 Music
drwxr-xr-x   3 dominik dominik  4096 sep 12 17:41 .node-gyp
-rw-------   1 dominik dominik    55 sep 12 17:53 .node_repl_history
drwxr-xr-x 810 dominik dominik 32768 sep 13 14:38 .npm
drwxr-xr-x   2 dominik dominik  4096 avg 30 13:17 Pictures
-rw-r--r--   1 dominik dominik   807 avg 30 13:08 .profile
drwxr-xr-x   2 dominik dominik  4096 avg 30 13:17 Public
-rw-r--r--   1 dominik dominik     0 sep 12 18:19 README.txt
drwx------   2 dominik dominik  4096 sep 21 11:49 .ssh
-rw-r--r--   1 dominik dominik     0 avg 30 14:18 .sudo_as_admin_successful
drwxr-xr-x   2 dominik dominik  4096 avg 30 13:17 Templates
drwxr-xr-x   2 dominik dominik  4096 avg 30 13:17 Videos

``` 

 > <span style='color:red'>Process killed</span> (duration 3 seconds)