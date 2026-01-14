# api-template
SakuraFRP website/api for easy hosting.<br>
Can be used as both an API or a website, with some adaptations.<br>
Motivation was setting up API for transferring files between computers, hackathon testing usage, and potential for cloud-hosted long-term functionality.

Pros:
1. Easy to use, setup, and dismantle
2. Cheap
3. Highly versatile

Cons:
1. DDOS protection doesn't exist yet (will be developed after Google cloud fork)
2. Limited bandwidth (terabytes of data per month is not cheap)
3. Non-permanent and self-hosted. Google cloud fork development is in progress.

# Prereqs: 
1. Available and stable router (no need for any configuration on router since SakuraFRP uses custom tunnel). 
2. May not necessarily work on cloud platforms - they have their own custom stuff I'll add later

# Steps:
1. Clone this repo
2. Run 'cd [path to your cloned files]'
3. Run 'python3 -m http.server 1001'
4. Run 'python3 receive.py'. If this doesn't work, double click the python file. If this doesn't work, open the file and run it.
5. Go to [this website](https://www.natfrp.com/tunnel/)
6. This website specifically needs a chinese citizen ID, also known as 身份证. Complete this step before completing following steps [here](https://www.natfrp.com/user/realname)
7. Click "创建通道" or "create tunnel" if you are using a website translator.
8. Select a tunnel with a green marker next to it.
9. Choose HTTP (simpler to set up)
10. Fill in the boxes in this manner: 本地端口 - 1001; 绑定域名 - your website domains, seperated by semicolons, up to 3. Other parts fill in as needed.
11. Click create and activate tunnel.
12. Go to any of your domains and enjoy.
