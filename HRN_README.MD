# Generate public and private key
openssl genrsa -out privateKey.pem 2048
openssl rsa  -pubout  -in privateKey.pem -out publicKey.pem

# Create react app
npm create vite@latest

# Install dependencies 
npm ci
# Inspect the details. Type npm audit to view the specific list of affected packages.
npm audit
# Appliquer les mises à jour sûres
npm audit fix
# Run react app
npm run dev

# Install
npm install axios
npm install @mui/x-charts
npm i @emotion/react @emotion/styled

# Run Quarkus (dev)
mvn clean install
mvn quarkus:dev

# Build, create and start all containers in docker-compose.yml 
docker compose up -d
# After modification(rebuild):
docker compose up -d --build 

# Browser
localhost:3000
String email="harouna@cissokho.com";
password="test_user";