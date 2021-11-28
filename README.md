# editor3d

pm2 start server/ide3d_server.js --watch server/ide3d_server.js
pm2 start server/ide3d_server.js --watch server
pm2 delete 0
pm2 list
pm2 logs