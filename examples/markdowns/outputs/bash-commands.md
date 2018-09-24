# This would run a shell through bash with multiple commands
```shell bash
echo "ls -all command" 
ls -all
echo "cd .. command"
cd ..
echo "ls -all command again"
ls -all 
echo "ps -aux command"
ps -aux
echo "exit command"
exit 
```



 --- 
 #### Runtime output  

* 2018-09-24T23:17:37.899Z

 ```
ls -all command

``` 
* 2018-09-24T23:17:37.918Z

 ```
total 27
drwxr-xr-x 1 dominikk 1049089   0 Sep 23 01:48 .
drwxr-xr-x 1 dominikk 1049089   0 Sep 23 01:24 ..
drwxr-xr-x 1 dominikk 1049089   0 Sep 25 01:10 .git
-rw-r--r-- 1 dominikk 1049089  27 Sep 23 01:49 .gitignore
drwxr-xr-x 1 dominikk 1049089   0 Sep 20 11:34 .vscode
drwxr-xr-x 1 dominikk 1049089   0 Sep 25 01:10 examples
-rw-r--r-- 1 dominikk 1049089  56 Sep 23 01:48 index.js
drwxr-xr-x 1 dominikk 1049089   0 Sep 25 01:10 lib
drwxr-xr-x 1 dominikk 1049089   0 Sep 23 01:48 node_modules
-rw-r--r-- 1 dominikk 1049089 348 Sep 23 01:48 package.json
-rw-r--r-- 1 dominikk 1049089  76 Sep 23 01:48 package-lock.json

``` 
* 2018-09-24T23:17:37.919Z

 ```
cd .. command
ls -all command again

``` 
* 2018-09-24T23:17:37.933Z

 ```
total 65302
drwxr-xr-x 1 dominikk 1049089        0 Sep 23 01:24 .
drwxr-xr-x 1 dominikk 1049089        0 Sep 19 10:30 ..
drwxr-xr-x 1 dominikk 1049089        0 Sep 22 19:30 .vscode
-rw-r--r-- 1 dominikk 1049089      365 Aug  7 12:46 backend-sync.ps1
drwxr-xr-x 1 dominikk 1049089        0 Jun  5 16:16 cloud-functions
drwxr-xr-x 1 dominikk 1049089        0 Jun  8 15:35 contraho-logger
drwxr-xr-x 1 dominikk 1049089        0 Sep  7 16:12 data-store-protocol
drwxr-xr-x 1 dominikk 1049089        0 Jun 11 09:26 dbus-ble
drwxr-xr-x 1 dominikk 1049089        0 Sep 24 10:58 deploy-iw
-rw-r--r-- 1 dominikk 1049089      381 Jun 26 12:27 devices_set_null.txt
drwxr-xr-x 1 dominikk 1049089        0 Sep 23 01:48 exec2markdown
drwxr-xr-x 1 dominikk 1049089        0 Jun  5 16:16 firestore
drwxr-xr-x 1 dominikk 1049089        0 Jun  5 16:16 handlers
drwxr-xr-x 1 dominikk 1049089        0 Sep 18 12:22 impactwrap-backend
drwxr-xr-x 1 dominikk 1049089        0 Aug 14 17:42 impactwrap-backend-copy2
drwxr-xr-x 1 dominikk 1049089        0 Jul  9 13:37 IW_SCRIPTS_ADMIN
drwxr-xr-x 1 dominikk 1049089        0 Sep  7 09:54 iw-agent
drwxr-xr-x 1 dominikk 1049089        0 Apr 11 15:20 iw-config
drwxr-xr-x 1 dominikk 1049089        0 Jun  6 15:35 iw-db-backup
drwxr-xr-x 1 dominikk 1049089        0 Sep 24 13:08 iw-functions
drwxr-xr-x 1 dominikk 1049089        0 Aug 31 13:37 iw-gym-farm-connector
drwxr-xr-x 1 dominikk 1049089        0 Jul 30 16:34 iw-leaderboard
-rw-r--r-- 1 dominikk 1049089 66693400 Jul 19 15:03 iw-leaderboard.zip
drwxr-xr-x 1 dominikk 1049089        0 Aug 16 15:34 iw-leaderboard-mock-functions
drwxr-xr-x 1 dominikk 1049089        0 Sep 24 10:21 IW-migration-scripts
drwxr-xr-x 1 dominikk 1049089        0 Apr 11 15:17 iwp
drwxr-xr-x 1 dominikk 1049089        0 Sep 13 13:09 iw-sensor-mock
drwxr-xr-x 1 dominikk 1049089        0 Sep 17 12:53 iw-stress-suite
drwxr-xr-x 1 dominikk 1049089        0 Jun  8 15:09 iw-tv
-rw-r--r-- 1 dominikk 1049089      908 Jun 27 15:20 meta-version-deploy.ps1
-rw-r--r-- 1 dominikk 1049089      291 Jul 17 17:02 README_IW_BACKEND.txt
drwxr-xr-x 1 dominikk 1049089        0 Jul 17 12:36 send-token
drwxr-xr-x 1 dominikk 1049089        0 Sep 20 22:17 ssh_test
drwxr-xr-x 1 dominikk 1049089        0 Sep 23 01:24 TEMP-exec2markdown
drwxr-xr-x 1 dominikk 1049089        0 Sep  6 18:32 uploads
drwxr-xr-x 1 dominikk 1049089        0 Sep  7 14:52 workouts

``` 
* 2018-09-24T23:17:37.937Z

 ```
ps -aux command

``` 
* <span style="color: red">stderr </span>2018-09-24T23:17:37.969Z

 ```
ps: user 
``` 
* <span style="color: red">stderr </span>2018-09-24T23:17:37.969Z

 ```
x unknown

``` 
* 2018-09-24T23:17:37.969Z

 ```
exit command

``` 

 > <span style='color:green'>Process exited with status code 0</span> (duration 0 seconds)