# centos 下 的配置

1. 字体配置
   - cd /lib/kbd/consolefonts //进入到有字体的目录
   - ls //查看所有字体
   - setfont + [字体] //设置字体 setfont 'LatGrkCyr-12x22' 这个字体比较大
   - echo 'setfont LatGrkCyr-12x22' >> /etc/bashrc //设置为开机默认

- [centos 修改字体和字体大小](https://blog.csdn.net/Programmer_Jz/article/details/88576796)
- [centos7 终端修改字体大小](https://www.cnblogs.com/chenxuming/p/9532554.html)

2. 安装 nginx -[centos 安装 nginx](https://jingyan.baidu.com/article/3aed632e27c6c67011809160.html)
   - [centos 没有 iptables](https://blog.csdn.net/momo_mutou/article/details/81739155)
   - [ssh connection refused ](https://blog.csdn.net/ujm097/article/details/82753228)
3. centos 下启动 nginx
   - cd /usr/local/nginx/sbin
   - ./nginx

# ubuntu 下的 Linux 命令

- [vi 编辑模式下 backspace 无法删除/方向键出现字母](https://blog.csdn.net/u011304490/article/details/81367490)
- [su 命令失败](https://blog.csdn.net/huijiaaa1/article/details/81106337)
- [ssh 链接失败](https://www.cnblogs.com/yixius/articles/6971054.html)
- [安装 node](https://blog.csdn.net/u014361775/article/details/78865582)
- [安装 sougou](https://blog.csdn.net/areigninhell/article/details/79696751)
- [ubuntu 不能联网](https://blog.csdn.net/qq_38473236/article/details/81267677)
- - sudo service network-manager stop
- - sudo rm /var/lib/NetworkManager/NetworkManager.state
- - sudo service network-manager start
- [安装 git](https://git-scm.com/download/linux)s
- [安装 xampp](https://blog.csdn.net/qq_22227087/article/details/80347044)

1. 无法修改 etc/ssh/ssh_config(只读文件) sudo redit /etc/ssh/ssh_config
2. 查看 ip : ifconfig -a
3. 登录 ssh :
   ssh root@ip 地址
   ip add:查看虚拟机 ip 地址
   exit : 退出
   ls :查看目录列表
   ls -l (ls -long): 查看目录列表(长格式显示)
   dr-xr-xr-x 13 root root 0 7 月 28 05:07 sys
   lrwxrwxrwx 1 root root 30 7 月 19 05:35 vmlinuz -> boot/vmlinuz-4.18.0-25-generic
   -rw------- 1 root root 993244160 7 月 17 13:41 swapfile
   dr-xr-xr-x : d 开头的是一个目录 r-xr-xr-x:表示用户权限(r:read | 读,w:write | 写,x:excute | 执行);
   (r-x)(r-x)(r-x) 三个一组 :(以二进制编码 分别为 101 101 101 ; 可以直接赋予权限 chmod 555)
   第一组:文件所有者的权限;
   第二组:和文件所有者在同一个用户组下的其他用户的权限;
   第三组:剩下的其他用户的权限;
   lrwxrwxrwx : l 开头的是一个快捷方式
   -rw------- : -开头的是一个普通文件
   pwd: 查看当前目录
   ss -an : 查看 端口
   netstat -anp: 查看 linux 网络状态、
   kill (端口号) : 关闭当前端口号的服务
   systemctl status (服务名称): 查看当前服务名称的状态
   systemctl start (服务名称):开启当前服务名称的服务
   vi (文件名称): 编辑 当前文件
   :q : 退出 vi
4. 服务 :在后台中
5. sudo /opt/lampp/lampp start : 开启 xampp
   sudo /opt/lampp/manager-linux-x64.run: 开启 xapmm 图形界面

6. 用户操作
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
7. 用户命令
   whoami : 显示登陆的用户名
   id zhangsan : 显示指定用户信息(用户编号,用户名,主要组的编号及名称,附属组列表)
   groups zhangsan : 显示 zhangsan 用户所在的所有组
   finger zhangsan : 显示用户详细资料
8. 用户组
   /etc/group :
   1. 存放当前系统中所以用户组信息
   2. group:x:123:abc,def
      组名称:组密码占位符:组编号:组用户名列表
   3. root 组编号为 0
   4. 1-499 为系统预留编号
   5. 用户手动创建用户组从 500 开始
   6. 组密码占位符都是 x
      /etc/gshadow:
      /etc/passwd:
      /etc/shadow:
   7. 存放当前系统中所有用户的密码信息
   8. user:xxx::::::
   9. 用户名:密码
9. 文件处理 : make directory
   1. mkdir -p[目录名]
      -p 递归创建
      切换所在目录 : change directory
   2. cd [目录]
      1. ~ 家目录
      2. 家目录
      3. - 上次目录
      4. . 当前目录
      5. ..上级目录
   3. pwd : 显示当前目录
   4. rmdir : 删除目录 remove empty directory
      rmdir [目录名]
   5. rm : 删除文件或者目录 remove
      rm [文件或者目录]
      1. -r 删除目录
      2. -f 强制删除
      3. rm -rf [文件或者目录]递归强制删除所有目录
   6. cp : copy 赋值命令
      copy [源文件或者目录][目标文件]
      1. -r 复制目录, 默认是复制文件
      2. -p 连带文件属性复制
      3. -d 若源文件是链接文件, 则复制链接属性
      4. -a 相当于 =rpd
   7. mv : 移动文件或者改名 move
      mv [源文件或者目录][目标文件]
   8. in : 链接命令, 生产链接文件 link
10. 文件搜索命令
    1. locate
       1. 在后台数据库中按文件名搜索,速度比较快 (有时会搜索到已删除的文件, 有时刚创建的文件搜索不到,因为后台数据库 /var/mlocate/mlocate.db 自动一天更新一次)
       2. 数据报错在/var/lib/mlocate 后台数据库,每天更新一次
       3. 可以 updatedb 命令来更新数据库
       4. 只能搜索文件名
          /etc/updatedb.conf
          建立索引的配置文件
          1. PRUNE_BIND_MOUNTS="yes"全部生效,开启搜索限制
          2. PRUNEFS 不收拾的文件系统
          3. PRUNENAMES 忽略的文件类型
          4. PRUNEPATHS 忽略的路径/tmp
    2. whereis
       1. 搜索命令所在路径以及帮助文档所在位置
       2. whereis 命令名
          whereis ls
          1. -b 只查找可执行文件
          2. -m 只查找帮助文件
    3. find
       1. 文件搜索命令
       2. find [搜索访问][搜索条件]
       3. find / -name aaa.log 避免大范围的搜索,会非常消耗系统资源
    4. 通配符
       1. - 匹配任意内容
       2. ? 匹配任意一个字符
       3. [] 匹配任意一个中括号内的字符
          find . -name "ab[cde]"
       4. 不区分大小写
          find / -iname a.log
       5. -user 按所有者镜像搜索
          find /root -user root
          find /root =nouser
       6. 按时间搜索
          find /nginx/access.log -mtime +5
          1. atime : 文件访问时间 -5 : 5 天内修改的文件
          2. ctime : 改变文件属性 5 : 5 天前当前修改的文件
          3. mtime : 修改文件内容 +5 : 5 天前当前修改的文件
       7. 按大小搜索
          k 小写, M 大写
          find . -size 100k
          -8k : 小于 8k
          8k : 等于 8k
          +8k : 大于 8k
          +8M : 大于 8M
       8. grep
          在文件当做匹配符合条件的字符串
          grep "10" access.log
          1. -i 忽略大小写
          2. -v 排查指定字符串
             find ,在系统中搜索符合条件的文件名, 如果需要匹配,使用通配符,通配符是完全匹配
             grep , 在文件当做搜索, 如果需要匹配,使用正则表达式进行匹配,正则表达式是包含匹配
11. 帮助命令
    1. man
       man -f ls
       whatis ls
       man 1 ls
       man 1p ls
    2. shell 内部帮助
       1. whereis
       2. help cd
12. 压缩与解压缩命令
    `.zip` `.gz` `.bz2` `.tar.gz` `.tar.bz2`
    1. zip
       touch 文件名[目录] : 创建文件
       zip -r 压缩文件名 源目录
       zip -r FileName.zip DirName : 压缩文件 FileName.zip(压缩后的名称) DirName(需要压缩的文件)
    2. gzip
    3. .bz2 不能压缩目录
    4. tar
       1. tar -cvf 打包文件名 源文件
          1. -c 打包
          2. =v 显示过程
          3. -f 指定打包后的文件
             tar -cvf book.tar book
             gzip book.tar
             bzip2 book.tar
       2. x 解打包
          tar -xvf book.tar
13. 关机和重启命令
    1. shutdown 关机命令
       1. -c 取消前一个关机命令
       2. -h 关机
       3. -r 重启
          shutdown -r 06:00
          shutdown -c
    2. init
       init 0 : 关机
       init 6 : 重启
       系统的运行级别
       0 关机
       1 单用户
       2 不完全多用户, 不包含 NFS 服务
       3 完全多用户
       4 未分配
       5 图形界面
       6 重启
    3. logout : 退出登录
14. vi 编辑器
    1. 操作模式
       1. :w 保存
       2. :q 退出
       3. :! 强制保存
       4. :ls 列出所有的文件
       5. :n 下一个
       6. :N 上一个
       7. :15 跳转到指定行
       8. /xxx 从光标位置开始向后搜索 xxx 字符串
       9. ?xxx 从光标位置开始向前搜索
       10. o 进入编辑模式
       11. esc 退出编辑模式
       12. u 撤销已修改的
       13. ctrl+r 恢复撤销
       14. dd 在光标出整行删除
