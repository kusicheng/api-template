# api-template
SakuraFRP website/api for lazy copying and easy hosting.

# Prereqs: 
1. Available and stable router (no need for any configuration on router since SakuraFRP uses custom tunnel). 
2. May not necessarily work on cloud platforms - they have their own custom stuff I'll add later

# Steps:
1. Clone this repo
2. Run 'python3 -m http.server 1001 -d [path to html]'
3. Run 'python3 -m [path to receive.py]'
4. Go to [this website](https://www.natfrp.com/tunnel/)
5. This website specifically needs a chinese citizen ID, also known as 身份证. Complete this step before completing following steps [here](https://www.natfrp.com/user/realname)
6. Click "创建通道" or "create tunnel" if you are using a website translator.
7. Select a tunnel with a green marker next to it.
8. Choose HTTP (simpler to set up)
9. Fill in the boxes in this manner: 本地端口 - 1001; 绑定域名 - your website domains, seperated by semicolons, up to 3. Other parts fill in as needed.
10. Click create and activate tunnel.
11. Go to any of your domains and enjoy.
