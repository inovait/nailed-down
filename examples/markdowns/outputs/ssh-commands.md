# This would run a shell through ssh and send multiple commands
```shell ssh -i ~/.ssh/virtualbox dominik@dominik-VirtualBox.local -p1337
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

* <span style="color: red">stderr </span>2018-09-24T23:17:43.602Z

 ```
Pseudo-terminal will not be allocated because stdin is not a terminal.

``` 
* 2018-09-24T23:17:44.880Z

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

ls -all command

``` 
* 2018-09-24T23:17:44.882Z

 ```
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
* 2018-09-24T23:17:46.891Z

 ```
cd .. command

``` 
* 2018-09-24T23:17:48.896Z

 ```
ls -all command again
total 12
drwxr-xr-x  3 root    root    4096 avg 30 13:08 .
drwxr-xr-x 24 root    root    4096 sep 13 06:20 ..
drwxr-xr-x 20 dominik dominik 4096 sep 21 11:19 dominik

``` 
* 2018-09-24T23:17:50.894Z

 ```
ps -aux command

``` 
* 2018-09-24T23:17:50.897Z

 ```
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.4 160084  8276 ?        Ss   sep21   0:08 /sbin/init splash
root         2  0.0  0.0      0     0 ?        S    sep21   0:00 [kthreadd]
root         4  0.0  0.0      0     0 ?        I<   sep21   0:00 [kworker/0:0H]
root         6  0.0  0.0      0     0 ?        I<   sep21   0:00 [mm_percpu_wq]
root         7  0.0  0.0      0     0 ?        S    sep21   0:01 [ksoftirqd/0]
root         8  0.0  0.0      0     0 ?        I    sep21   0:04 [rcu_sched]
root         9  0.0  0.0      0     0 ?        I    sep21   0:00 [rcu_bh]
root        10  0.0  0.0      0     0 ?        S    sep21   0:00 [migration/0]
root        11  0.0  0.0      0     0 ?        S    sep21   0:01 [watchdog/0]
root        12  0.0  0.0      0     0 ?        S    sep21   0:00 [cpuhp/0]
root        13  0.0  0.0      0     0 ?        S    sep21   0:00 [kdevtmpfs]
root        14  0.0  0.0      0     0 ?        I<   sep21   0:00 [netns]
root        15  0.0  0.0      0     0 ?        S    sep21   0:00 [rcu_tasks_kthre]
root        16  0.0  0.0      0     0 ?        S    sep21   0:00 [kauditd]
root        17  0.0  0.0      0     0 ?        S    sep21   0:00 [khungtaskd]
root        18  0.0  0.0      0     0 ?        S    sep21   0:00 [oom_reaper]
root        19  0.0  0.0      0     0 ?        I<   sep21   0:00 [writeback]
root        20  0.0  0.0      0     0 ?        S    sep21   0:00 [kcompactd0]
root        21  0.0  0.0      0     0 ?        SN   sep21   0:00 [ksmd]
root        22  0.0  0.0      0     0 ?        SN   sep21   0:00 [khugepaged]
root        23  0.0  0.0      0     0 ?        I<   sep21   0:00 [crypto]
root        24  0.0  0.0      0     0 ?        I<   sep21   0:00 [kintegrityd]
root        25  0.0  0.0      0     0 ?        I<   sep21   0:00 [kblockd]
root        26  0.0  0.0      0     0 ?        I<   sep21   0:00 [ata_sff]
root        27  0.0  0.0      0     0 ?        I<   sep21   0:00 [md]
root        28  0.0  0.0      0     0 ?        I<   sep21   0:00 [edac-poller]
root        29  0.0  0.0      0     0 ?        I<   sep21   0:00 [devfreq_wq]
root        30  0.0  0.0      0     0 ?        I<   sep21   0:00 [watchdogd]
root        32  0.0  0.0      0     0 ?        I    sep21   0:00 [kworker/0:1]
root        34  0.0  0.0      0     0 ?        S    sep21   0:00 [kswapd0]
root        35  0.0  0.0      0     0 ?        S    sep21   0:00 [ecryptfs-kthrea]
root        77  0.0  0.0      0     0 ?        I<   sep21   0:00 [kthrotld]
root        78  0.0  0.0      0     0 ?        I<   sep21   0:00 [acpi_thermal_pm]
root        79  0.0  0.0      0     0 ?        S    sep21   0:00 [scsi_eh_0]
root        80  0.0  0.0      0     0 ?        I<   sep21   0:00 [scsi_tmf_0]
root        81  0.0  0.0      0     0 ?        S    sep21   0:00 [scsi_eh_1]
root        82  0.0  0.0      0     0 ?        I<   sep21   0:00 [scsi_tmf_1]
root        88  0.0  0.0      0     0 ?        I<   sep21   0:00 [ipv6_addrconf]
root        97  0.0  0.0      0     0 ?        I<   sep21   0:00 [kstrp]
root       114  0.0  0.0      0     0 ?        I<   sep21   0:00 [charger_manager]
root       151  0.0  0.0      0     0 ?        I    sep21   2:29 [kworker/0:2]
root       155  0.0  0.0      0     0 ?        I<   sep21   0:01 [kworker/0:1H]
root       156  0.0  0.0      0     0 ?        S    sep21   0:00 [scsi_eh_2]
root       157  0.0  0.0      0     0 ?        I<   sep21   0:00 [scsi_tmf_2]
root       178  0.0  0.0      0     0 ?        S    sep21   0:00 [jbd2/sda1-8]
root       179  0.0  0.0      0     0 ?        I<   sep21   0:00 [ext4-rsv-conver]
root       215  0.0  1.5 112224 31892 ?        S<s  sep21   0:04 /lib/systemd/systemd-journald
root       233  0.0  0.1  47084  3888 ?        Ss   sep21   0:00 /lib/systemd/systemd-udevd
root       266  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop0]
root       268  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop1]
root       271  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop2]
root       273  0.0  0.0      0     0 ?  
``` 
* 2018-09-24T23:17:50.899Z

 ```
      S<   sep21   0:00 [loop3]
root       275  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop4]
root       278  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop5]
root       279  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop6]
root       280  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop7]
root       282  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop8]
root       286  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop9]
root       287  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop10]
root       288  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop11]
root       289  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop12]
root       290  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop13]
root       291  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop14]
systemd+   292  0.0  0.1 146096  2908 ?        Ssl  sep21   0:00 /lib/systemd/systemd-timesyncd
systemd+   294  0.0  0.2  70744  5576 ?        Ss   sep21   0:01 /lib/systemd/systemd-resolved
root       295  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop15]
root       296  0.0  0.0      0     0 ?        S<   sep21   0:00 [loop16]
root       344  0.0  0.0      0     0 ?        I<   sep21   0:00 [iprt-VBoxWQueue]
root       370  0.0  0.0      0     0 ?        I<   sep21   0:00 [ttm_swap]
root       499  0.0  0.4 309904  8276 ?        Ssl  sep21   0:05 /usr/lib/accountsservice/accounts-daemon
root       503  0.0  0.5 517980 10416 ?        Ssl  sep21   0:00 /usr/lib/udisks2/udisksd
root       511  0.0  0.0   4552   664 ?        Ss   sep21   0:00 /usr/sbin/acpid
root       519  0.0  0.2 427256  6044 ?        Ssl  sep21   0:00 /usr/sbin/ModemManager
root       521  0.0  0.2  70684  5676 ?        Ss   sep21   0:01 /lib/systemd/systemd-logind
root       542  0.0  0.1  39648  3160 ?        Ss   sep21   0:00 /usr/sbin/cron -f
iw-gym-+   552  0.0  2.5 1208096 51392 ?       Ssl  sep21   4:26 node /usr/share/iw-gym-farm-connector/app/daemon.js
message+   553  0.0  0.2  51532  5568 ?        Ss   sep21   0:07 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
root       574  0.0  0.7 657552 16316 ?        Ssl  sep21   0:13 /usr/sbin/NetworkManager --no-daemon
root       580  0.0  0.8 632172 16868 ?        Ssl  sep21   0:17 /usr/lib/snapd/snapd
avahi      581  0.0  0.1  47264  3140 ?        Ss   sep21   0:00 avahi-daemon: running [dominik-VirtualBox.local]
root       588  0.0  0.1  44752  3840 ?        Ss   sep21   0:01 /sbin/wpa_supplicant -u -s -O /run/wpa_supplicant
syslog     590  0.0  0.1 263036  3820 ?        Ssl  sep21   0:00 /usr/sbin/rsyslogd -n
root       591  0.0  0.8 178852 17236 ?        Ssl  sep21   0:00 /usr/bin/python3 /usr/bin/networkd-dispatcher --run-startup-triggers
avahi      616  0.0  0.0  47076   340 ?        S    sep21   0:00 avahi-daemon: chroot helper
root       625  0.0  0.6 322964 12272 ?        Ssl  sep21   0:12 /usr/lib/policykit-1/polkitd --no-debug
root       666  0.0  0.3 309396  7924 ?        Ssl  sep21   0:00 /usr/sbin/gdm3
root       677  0.0  0.2  25656  5100 ?        S    sep21   0:00 /sbin/dhclient -d -q -sf /usr/lib/NetworkManager/nm-dhcp-helper -pf /run/dhclient-enp0s3.pid -lf /var/lib/NetworkManager/dhclient-9acd472f-3846-35ea-8c63-19d838e67e8a-enp0s3.lease -cf /var/lib/NetworkManager/dhclient-enp0s3.conf enp0s3
root       678  0.0  0.4 420672  8608 ?        Sl   sep21   0:00 gdm-session-worker [pam/gdm-autologin]
root       682  0.0  0.2  25656  5060 ?        S    sep21   0:00 /sbin/dhclient -d -q -sf /usr/lib/NetworkManager/nm-dhcp-helper -pf /run/dhclient-enp0s8.pid -lf /var/lib/NetworkManager/dhclient-f848f60b-85f8-39c0-9fa8-17e32e46763a-enp0s8.lease -cf /var/lib/NetworkManager/dhclient-enp0s8.conf enp0s8
dominik    711  0.0  0.3  77028  7712 ?        Ss   sep21   0:00 /lib/systemd/systemd --user
dominik    716  0.0  0.0 113904  1620 ?        S    sep21   0:00 (sd-pam)
whoopsie   753  0.0  0.6 468780 12640 ?        Ssl  sep21   0:00 /usr/bin/whoopsie -f
kernoops   766  0.0  0.0  56932   420 ?        Ss   sep
``` 
* 2018-09-24T23:17:50.903Z

 ```
21   0:02 /usr/sbin/kerneloops --test
kernoops   768  0.0  0.0  56932   420 ?        Ss   sep21   0:02 /usr/sbin/kerneloops
dominik    773  0.0  0.3 363348  7364 ?        SLl  sep21   0:00 /usr/bin/gnome-keyring-daemon --daemonize --login
dominik    795  0.0  0.2 213344  5960 tty1     Ssl+ sep21   0:00 /usr/lib/gdm3/gdm-x-session --run-script env GNOME_SHELL_SESSION_MODE=ubuntu gnome-session --session=ubuntu
dominik    849  0.0  3.9 445452 80052 tty1     Sl+  sep21   0:11 /usr/lib/xorg/Xorg vt1 -displayfd 3 -auth /run/user/1000/gdm/Xauthority -background none -noreset -keeptty -verbose 3
dominik    901  0.0  0.2  50944  5256 ?        Ss   sep21   0:00 /usr/bin/dbus-daemon --session --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
dominik    905  0.0  0.7 644456 15536 tty1     Sl+  sep21   0:00 /usr/lib/gnome-session/gnome-session-binary --session=ubuntu
dominik   1025  0.0  0.0  11304   320 ?        Ss   sep21   0:01 /usr/bin/ssh-agent /usr/bin/im-launch env GNOME_SHELL_SESSION_MODE=ubuntu gnome-session --session=ubuntu
dominik   1029  0.0  0.3 293172  7136 ?        Ssl  sep21   0:00 /usr/lib/gvfs/gvfsd
dominik   1035  0.0  0.3 432036  7644 ?        Sl   sep21   0:00 /usr/lib/gvfs/gvfsd-fuse /run/user/1000/gvfs -f -o big_writes
dominik   1067  0.0  0.4 367936  8512 ?        Ssl  sep21   0:00 /usr/lib/at-spi2-core/at-spi-bus-launcher
dominik   1074  0.0  0.2  49928  4208 ?        S    sep21   0:00 /usr/bin/dbus-daemon --config-file=/usr/share/defaults/at-spi2/accessibility.conf --nofork --print-address 3
dominik   1080  0.0  0.3 220772  6744 ?        Sl   sep21   0:00 /usr/lib/at-spi2-core/at-spi2-registryd --use-gnome-session
dominik   1191  0.0 14.6 3052088 298076 tty1   Sl+  sep21   3:58 /usr/bin/gnome-shell
root      1215  0.0  0.4 323504  8500 ?        Ssl  sep21   0:00 /usr/lib/upower/upowerd
root      1369  0.0  2.7 532016 55488 ?        Ssl  sep21   0:13 /usr/lib/packagekit/packagekitd
dominik   1385  0.0  0.5 1173544 10296 ?       S<l  sep21   0:00 /usr/bin/pulseaudio --start --log-target=syslog
rtkit     1386  0.0  0.1 183504  2868 ?        SNsl sep21   0:02 /usr/lib/rtkit/rtkit-daemon
dominik   1430  0.0  0.4 378908 10060 tty1     Sl   sep21   0:00 ibus-daemon --xim --panel disable
dominik   1434  0.0  0.4 298016  8704 tty1     Sl   sep21   0:00 /usr/lib/ibus/ibus-dconf
dominik   1436  0.0  1.0 357484 22344 tty1     Sl   sep21   0:00 /usr/lib/ibus/ibus-x11 --kill-daemon
dominik   1439  0.0  0.3 295832  8048 ?        Sl   sep21   0:00 /usr/lib/ibus/ibus-portal
dominik   1449  0.0  0.7 696560 16108 ?        Sl   sep21   0:00 /usr/lib/gnome-shell/gnome-shell-calendar-server
dominik   1453  0.0  1.0 982388 22268 ?        Ssl  sep21   0:00 /usr/lib/evolution/evolution-source-registry
dominik   1461  0.0  1.5 101438172 31108 ?     Sl   sep21   0:00 /usr/lib/gnome-online-accounts/goa-daemon
dominik   1471  0.0  0.4 394536  9404 ?        Sl   sep21   0:00 /usr/lib/gnome-online-accounts/goa-identity-service
root      1481  0.0  0.4 316400  9244 ?        Ssl  sep21   0:00 /usr/lib/x86_64-linux-gnu/boltd
dominik   1486  0.0  0.2 187896  5132 ?        Sl   sep21   0:00 /usr/lib/dconf/dconf-service
dominik   1489  0.0  0.5 321420 10620 ?        Ssl  sep21   0:00 /usr/lib/gvfs/gvfs-udisks2-volume-monitor
dominik   1493  0.0  0.3 380028  7348 ?        Ssl  sep21   0:00 /usr/lib/gvfs/gvfs-afc-volume-monitor
dominik   1498  0.0  0.3 289876  6600 ?        Ssl  sep21   0:00 /usr/lib/gvfs/gvfs-gphoto2-volume-monitor
dominik   1502  0.0  0.2 277088  6112 ?        Ssl  sep21   0:00 /usr/lib/gvfs/gvfs-mtp-volume-monitor
dominik   1506  0.0  0.2 275260  5688 ?        Ssl  sep21   0:00 /usr/lib/gvfs/gvfs-goa-volume-monitor
dominik   1510  0.0  1.1 528588 23120 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-power
dominik   1511  0.0  0.4 350540 10160 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-print-notifications
dominik   1513  0.0  0.2 424560  5740 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-rfkill
dominik   1515  0.0  0.2 276948  5300 tty1     Sl+  sep21   0
``` 
* 2018-09-24T23:17:50.905Z

 ```
:00 /usr/lib/gnome-settings-daemon/gsd-screensaver-proxy
dominik   1518  0.0  0.5 472556 11720 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-sharing
dominik   1523  0.0  1.0 505880 22436 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-xsettings
dominik   1530  0.0  0.3 393952  7708 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-smartcard
dominik   1531  0.0  0.4 344328  9264 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-sound
dominik   1533  0.0  1.1 441920 22660 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-wacom
dominik   1539  0.0  0.4 297880  8364 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-a11y-settings
dominik   1541  0.0  1.0 357088 21440 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-clipboard
dominik   1543  0.0  1.1 753300 23440 tty1     Sl+  sep21   1:29 /usr/lib/gnome-settings-daemon/gsd-color
dominik   1548  0.0  0.7 477808 14856 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-datetime
dominik   1550  0.0  0.4 375920  8688 tty1     Sl+  sep21   0:05 /usr/lib/gnome-settings-daemon/gsd-housekeeping
dominik   1552  0.0  1.0 509356 21636 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-keyboard
dominik   1554  0.0  1.1 804264 22560 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-media-keys
dominik   1556  0.0  0.3 297880  8160 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-mouse
dominik   1570  0.0  0.6 509976 12660 tty1     Sl+  sep21   0:00 /usr/lib/gnome-settings-daemon/gsd-printer
dominik   1606  0.0  9.2 1139536 188684 tty1   SLl+ sep21   0:13 /usr/bin/gnome-software --gapplication-service
dominik   1612  0.0  4.6 1079392 95632 tty1    Sl+  sep21   0:02 nautilus-desktop
dominik   1615  0.0  0.2 271928  5800 tty1     Sl+  sep21   0:00 /usr/lib/gnome-disk-utility/gsd-disk-utility-notify
colord    1639  0.0  0.7 693480 15484 ?        Ssl  sep21   0:00 /usr/lib/colord/colord
dominik   1655  0.0  0.4 385248  9828 ?        Sl   sep21   0:00 /usr/lib/gvfs/gvfsd-trash --spawner :1.7 /org/gtk/gvfs/exec_spaw/0
dominik   1669  0.0  2.8 894948 57656 ?        Ssl  sep21   0:00 /usr/lib/evolution/evolution-calendar-factory
dominik   1684  0.0  2.6 938444 53256 ?        Sl   sep21   0:00 /usr/lib/evolution/evolution-calendar-factory-subprocess --factory all --bus-name org.gnome.evolution.dataserver.Subprocess.Backend.Calendarx1669x2 --own-path /org/gnome/evolution/dataserver/Subprocess/Backend/Calendar/1669/2
dominik   1694  0.0  0.8 736196 17484 ?        Ssl  sep21   0:00 /usr/lib/evolution/evolution-addressbook-factory
dominik   1699  0.0  0.3 222164  7944 tty1     Sl   sep21   0:00 /usr/lib/ibus/ibus-engine-simple
dominik   1708  0.0  0.9 894120 18672 ?        Sl   sep21   0:00 /usr/lib/evolution/evolution-addressbook-factory-subprocess --factory all --bus-name org.gnome.evolution.dataserver.Subprocess.Backend.AddressBookx1694x2 --own-path /org/gnome/evolution/dataserver/Subprocess/Backend/AddressBook/1694/2
dominik   1738  0.0  0.2 205736  5916 ?        Ssl  sep21   0:00 /usr/lib/gvfs/gvfsd-metadata
root      1756  0.0  0.9 565596 18912 ?        Ssl  sep21   0:11 /usr/lib/fwupd/fwupd
dominik   1814  0.0  1.7 805284 35348 ?        Ssl  sep21   0:01 /usr/lib/gnome-terminal/gnome-terminal-server
dominik   1822  0.0  0.2  31172  5212 pts/0    Ss+  sep21   0:00 bash
dominik   1929  0.0  1.3 679760 27096 tty1     Sl+  sep21   0:05 update-notifier
dominik   2787  0.0  1.5 118300440 32504 tty1  Sl+  sep21   0:00 /usr/lib/deja-dup/deja-dup-monitor
root      4274  0.0  0.3  72296  6448 ?        Ss   sep21   0:00 /usr/sbin/sshd -D
dominik   4279  0.0  0.0  11304  1552 ?        S    sep21   0:00 /usr/bin/ssh-agent -D -a /run/user/1000/keyring/.ssh
dominik   4597  0.0  2.1 752392 43516 tty1     Sl+  sep21   0:00 gedit /home/dominik/Desktop/README.txt
root     25630  0.0  0.3 108904  8112 ?        Ss   00:05   0:00 /usr/sbin/cupsd -l
root     25632  0.0  0.5 303520 10736 ?        Ssl  00:05   0:00 /usr/sbin/cups-browsed
root     27487  0.0  0.0      0     0 ?        I    00:30   0:00 [kworker/u2:3]
root     28345  0.0  0.0      0     0 ?        I    00:48   0:00 [kworker/u2:0]
root     29475  0.0  0.0      0     0 ?        I    01:07   0:00 [kworker/u2:2]
root     30225  0.1  0.3 110080  7252 ?        Ss   01:17   0:00 sshd: dominik [priv]
dominik  30289  0.0  0.1 110080  3560 ?        S    01:17   0:00 sshd: dominik@notty
dominik  30290  0.0  0.1  29668  3508 ?        Ss   01:17   0:00 -bash
dominik  30291  0.0  0.0  15796   756 ?        S    01:17   0:00 sleep 10
root     30292  0.1  0.3 110080  7324 ?        Ss   01:17   0:00 sshd: dominik [priv]
dominik  30356  0.0  0.1 110080  3364 ?        S    01:17   0:00 sshd: dominik@notty
dominik  30357  0.0  0.1  29668  3632 ?        Ss   01:17   0:00 -bash
dominik  30363  0.0  0.1  47992  3744 ?        R    01:17   0:00 ps -aux

``` 

 > <span style='color:green'>Process exited with status code 0</span> (duration 9 seconds)