# myWeb

12-2 vue跟进 
git走http/socks5代理
git config --global http.proxy 'http://127.0.0.1:1080'
git config --global https.proxy 'http://127.0.0.1:1080'
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
git删除代理
git config --global --unset http.proxy
git config --global --unset https.proxy