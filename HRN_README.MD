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


# Configure Docker Clients to Allow HTTP (insecure-registries)
# Ubuntu:
sudo nano /etc/docker/daemon.json
# Add the "insecure-registries" key with your registry's hostname or IP and port (omit http:// or https://):
{
  "insecure-registries": ["localhost:5000"]
}
# Restart the Docker daemon to apply the changes
sudo systemctl daemon-reload
sudo systemctl restart docker
# Start the local registry
docker run -d -p 5000:5000 --restart=always --name registry registry:latest
# Tag the image to point to your local registry
docker tag quarkus-app:latest localhost:5000/library/quarkus-app:latest
docker tag react-app:latest localhost:5000/library/react-app:latest
# Push the image to the registry:
docker push localhost:5000/library/quarkus-app:latest
docker push localhost:5000/library/react-app:latest
#
sudo nano /etc/rancher/k3s/registries.yaml
mirrors:
  docker.io:
    endpoint:
      - "http://localhost:5000"
      - "https://docker.io"

# restart K3s to apply the change
sudo systemctl restart k3s

# Kubernetes:

sudo kubectl apply -f k3s/
sudo kubectl get pod
sudo kubectl get pvc