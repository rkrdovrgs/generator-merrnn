clear
killall -9 node

# change to new directory
cd test-gen

# start using generators
yo merrnn:component

#run the servers and opens the browser
npm run web:w & npm run server & xdg-open http://localhost:3000
