# Infectious Diseases Software by VKIST - DataStreams

A full-stack platform for infectious disease surveillance, AI-assisted diagnosis, and epidemiological data management. The system combines a Strapi-powered backend, a React frontend, and two Python AI services for COVID-19 and pneumonia detection from medical images.

## Requirements

- **OS:** Windows 10+ or Ubuntu 20.04+
- **Node.js:** v16 or higher
- **PostgreSQL:** v16 or higher
- **Anaconda** or **Miniconda** (for Python AI services)

## Quick start

### 1. Clone the repository

```bash
git clone https://github.com/itvkist/infectious-disease.git
cd infectious-disease
```

### 2. PostgreSQL (one-time setup)

**Ubuntu:**

```bash
# Add the official PostgreSQL 16 repository
sudo sh -c 'echo "deb https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget -qO- https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo tee /etc/apt/trusted.gpg.d/pgdg.asc
sudo apt update
sudo apt install -y postgresql-16
sudo systemctl enable --now postgresql

# Set password for the default postgres user and create the database
sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD '1';"
sudo -u postgres createdb iddb

# Restore the database dump
sudo -u postgres pg_restore -d iddb id_be/database/iddb_20231101.sql
```

**Windows:** Download and run the PostgreSQL 16 installer from [postgresql.org/download/windows](https://www.postgresql.org/download/windows/). During installation set the password for the `postgres` user to `1`. Then open **psql** or **pgAdmin** and run:

```sql
CREATE DATABASE iddb;
```

Restore the dump from a terminal:

```bash
pg_restore -U postgres -d iddb id_be/database/iddb_20231101.sql
```

`id_be/.env.example` is pre-configured with these credentials — copy it as-is:

```bash
cp id_be/.env.example id_be/.env
```

### 3. Backend (id_be)

```bash
cd id_be
npm install
npm run develop
```

### 4. Frontend (id_fe)

```bash
cd id_fe
npm install
npm start
```

### 5. Python environment (one-time setup)

Create and activate a shared conda environment for both AI services:

```bash
conda create -n ds-id python=3.10
conda activate ds-id
pip install -r requirements.txt
```

### 6. COVID-19 Detection API (id_covid)

Download the model folder from [Google Drive](https://drive.google.com/drive/folders/16a1Onp2kk022uHNPhXKRQ_V3Zth_Tt01?usp=sharing) and place it inside `id_covid/` so the path is `id_covid/model/`.

```bash
cd id_covid

# Run
python3 server.py
```

### 7. Pneumonia Prediction API (id_pneumonia)

```bash
cd id_pneumonia

# Create required directories (one-time)
mkdir images
mkdir results

# Run
python3 app_web.py
```
