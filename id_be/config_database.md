sudo apt update
sudo apt install postgresql postgresql-contrib
sudo /etc/init.d/postgresql start
sudo -i -u postgres
psql
ALTER USER postgres WITH PASSWORD '1';
CREATE DATABASE iddb;
exit
exit
sudo cat pg_hba.conf > /etc/postgresql/12/main/pg_hba.conf
sudo /etc/init.d/postgresql restart