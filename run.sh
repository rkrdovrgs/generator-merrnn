clear
killall -9 node

#clean folders
rm -r test-gen/api
rm -r test-gen/db
rm -r test-gen/public
rm -r test-gen/src
rm test-gen/LICENSE
rm test-gen/*.*

# create app
printf "test-gen" | yo merrnn

# change to new directory
cd test-gen

#run the servers and opens the browser
#killall -9 node
npm run web
npm run server & xdg-open http://localhost:3000
