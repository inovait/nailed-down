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