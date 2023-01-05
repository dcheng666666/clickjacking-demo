# Clickjacking Demo

这个Repo用来演示Clickjacking攻击，它包含两个后端服务，一个后端服务代表被攻击网站（site-target），另外一个后端服务代表有病毒网站（site-malicious），运行两个服务后，打开site-malicious网站，同时打开dev console, 点击"Free beer"按钮，观察dev console的输出。

## 运行步骤

1. 启动site-target服务
    - 安装依赖

      ```bash
        site-target && npm install
      ```

    - 启动服务

      ```bash
        npm start
      ```

2. 启动site-malicious服务

    - 安装依赖

      ```bash
        site-malicious && npm install
      ```

    - 启动服务

      ```bash
        npm start
      ```

3. 打开site-malicious网站（http://localhost:3001)