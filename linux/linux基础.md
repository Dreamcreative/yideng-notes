
# ubuntu 下的Linux命令
1. 无法修改 etc/ssh/ssh_config(只读文件)  sudo redit /etc/ssh/ssh_config
2. 查看 ip  : ifconfig -a
3. 登录 ssh : 
```    
ssh root@ip地址
ip add:查看虚拟机ip地址
exit : 退出
ls :查看目录列表
ls -l  (ls -long): 查看目录列表(长格式显示)
	dr-xr-xr-x  13 root root         0 7月  28 05:07 sys
	lrwxrwxrwx   1 root root        30 7月  19 05:35 vmlinuz -> boot/vmlinuz-4.18.0-25-generic
	-rw-------   1 root root 993244160 7月  17 13:41 swapfile
	dr-xr-xr-x : d开头的是一个目录   r-xr-xr-x:表示用户权限(r:read | 读,w:write | 写,x:excute | 执行);
		(r-x)(r-x)(r-x) 三个一组 :(以二进制编码 分别为 101 101 101 ; 可以直接赋予权限  chmod 555) 
		第一组:文件所有者的权限;
		第二组:和文件所有者在同一个用户组下的其他用户的权限;
		第三组:剩下的其他用户的权限;
	lrwxrwxrwx :  l开头的是一个快捷方式
	-rw------- : -开头的是一个普通文件
	
pwd: 查看当前目录
ss -an : 查看 端口
netstat -anp: 查看linux 网络状态、
kill (端口号) : 关闭当前端口号的服务
systemctl status (服务名称): 查看当前服务名称的状态
systemctl start (服务名称):开启当前服务名称的服务
vi (文件名称): 编辑 当前文件
	:q : 退出 vi
```
4. 服务 :在后台中默默地跑
5. sudo /opt/lampp/lampp start :  开启 xampp
6. 用户操作
```
groupadd student: 添加组
groupmod -n stu student : 修改组名
groupmod -g 111 stu : 修改组编号
groupadd -g 222 teacher : 添加分组并指定编号
groupdel 222 : 删除分组
groupadd teacher : 添加分组
useradd -g teacher zhangsan : 为用户指定所属组
useradd -d /home/zhangsan zhangsan : 为用户指定工作目录
usermod -c iamateacher zhangsan ： 指定注释
usermod -l zhangsan zhangsan2 : 修改用户名(zhangsan 不存在 <- zhangsan2 已存在 )
usermod -g stu zhangsan2 : 修改用户所属组
userdel zhangsan2 ： 删除用户
userdel -f list : 删除所属文件夹
cat /etc/shadow : 查看所有用户
cat /etc/group : 查看所有用户组
```
7. 用户命令
```
whoami : 显示登陆的用户名
id zhangsan : 显示指定用户信息(用户编号,用户名,主要组的编号及名称,附属组列表)
groups zhangsan : 显示zhangsan用户所在的所有组
finger zhangsan : 显示用户详细资料
```
