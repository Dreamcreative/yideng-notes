#

## 在 ubuntu 上安装 jenkins

### 安装 Java SDK

jenkins 是用 java 开发的，所以需要先安装 java 的开发环境

```bash
sudo apt-get install openjdk-8-jdk
#sudo apt-get install openjdk-7-jdk  早些系统可以安装
```

### 安装 jenkins

1. 讲存储库秘钥添加到系统

```bash
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
```

添加秘钥后，系统将返回 OK

2. 我们将 Debian 包存储库地址附加到服务器的 sources.list ：

```bash
echo deb http://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
```

3. 当这两个都到位时，我们将运行 update ，以便 apt-get 将使用新的存储库：

```bash
sudo apt-get update
```

4. 最后，我们将安装 Jenkins 及其依赖项，包括 Java：

```bash
sudo apt-get install jenkins
```

### 开始 jenkins

1. 使用 systemctl 我们将启动 jenkins

```bash
sudo systemctl start jenkins
```

2. 由于 systemctl 不显示输出，我们将使用其 status 命令来验证它是否成功启动：

```bash
sudo systemctl status jenkins
```

如果一切顺利，输出的开始应显示服务处于活动状态，并配置为启动时启动：

```bash
jenkins.service - LSB: Start Jenkins at boot time
  Loaded: loaded (/etc/init.d/jenkins; bad; vendor preset: enabled)
  Active:active (exited) since Thu 2017-04-20 16:51:13 UTC; 2min 7s ago
    Docs: man:systemd-sysv-generator(8)
```

```bash
sudo ufw allow 8080
```

检查 ufw 的状态可以看到新的规则

```bash
sudo ufw status
```

如果 status :inactive,我们需要修改状态

```bash
sudo ufw enable
// status:active
sudo ufw disable
// status inactive
// 关闭防火墙
```

### jenkins 启动

```bash
#service jenkins start

重启

#service jenkins restart
停止

#service jenkins stop
### 打开防火墙
默认情况下，jenkins在端口8080运行，因此我们将使用ufw打开该端口
```

### 设置 jenkins

在浏览器上输入 当前的 http://ip地址:8080 访问 jenkins

#### 查看 jenkins 密码

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

#### 如果在 jenkins 没有设置用户前退出了，可以通过卸载 jenkins 的配置和数据来重头开始配置 jenkins

```bash
//服务
sudo apt-get remove jenkins

//配置和数据
sudo apt-get purge jenkins

sudo apt-get purge --auto-remove jenkins
```

>

- [如何在 Ubuntu 16.04 上安装 Jenkins](https://www.jianshu.com/p/845f267aec52)
