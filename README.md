# Infectious Diseases Software by VKIST - DataStreams

A full-stack platform for infectious disease surveillance, AI-assisted diagnosis, and epidemiological data management. The system combines a Strapi-powered backend, a React frontend, and two Python AI services for COVID-19 and pneumonia detection from medical images.

## Requirements

- **OS:** Windows 10+ or Ubuntu 20.04+
- **Node.js:** v16 or higher
- **Anaconda** or **Miniconda** (for Python AI services)

## Quick start

### 1. Clone the repository

```bash
git clone https://github.com/itvkist/infectious-disease.git
cd infectious-disease
```

### 2. Backend (id_be)

```bash
cd id_be
cp .env.example .env
npm install
npm run develop
```

### 3. Frontend (id_fe)

```bash
cd id_fe
npm install
npm start
```

### 4. Python environment (one-time setup)

Create and activate a shared conda environment for both AI services:

```bash
conda create -n ds-id python=3.10
conda activate ds-id
pip install -r requirements.txt
```

### 5. COVID-19 Detection API (id_covid)

```bash
cd id_covid

# Download model weights (one-time)
mkdir model
wget https://github.com/vietbacnguyen96/Covid19_detection_VKIST/releases/download/v1.0.0/CNN_Model_2c.h5
mv CNN_Model_2c.h5 model/

# Run
python3 server.py
```

### 6. Pneumonia Prediction API (id_pneumonia)

```bash
cd id_pneumonia

# Create required directories (one-time)
mkdir images
mkdir results

# Run
python3 app_web.py
```
