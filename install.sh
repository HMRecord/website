# Downloads
if [ "$(uname)" == "Darwin" ]; then
    brew install python3 mongodb
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    sudo apt-get install python3 python3-pip mongodb
fi

sudo pip3 install flask bson pymongo flask-cors flask-httpauth || sudo pip install flask bson pymongo flask-cors flask-httpauth

# File structure
mkdir storage
sudo chmod 755 storage

# Mongo DB required folder
sudo mkdir -p /data/db
