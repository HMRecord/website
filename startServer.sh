cd python

sudo mongod &
#sudo python3 main.py #gunicorn -b 0.0.0.0:5000 main:app
sudo gunicorn -b 0.0.0.0:5000 main:app
