clear
killall -9 node

# change to new directory
cd test-gen

#clean folders
rm api/employees.js

# start using generators
printf "employees" | yo merrnn:api

#run the servers and opens the browser
#killall -9 node
npm run web
npm run server & xdg-open http://localhost:3000
