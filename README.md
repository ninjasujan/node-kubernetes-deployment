# node-kubernetes-deployment

### Sample kubernetes and Nodejs Deployment.

---

**1. Create and push Node image to docker hub**

a. Create Docker file.

b. Build docker image

```
docker build . -t node-app
```

c. Tag docker image

```
docker tag node-app sujanwebdev/node-app
```

d. Push image to docker hub

```
docker push sujanwebdev/node-app
```

---

**2. Create Namespace and Secret configuration**
a. How to pull docker private image?
Create secret for .dockerconfigjson

```
kubectl create secret docker-registry regcred --namespace="node-app" --docker-server="https://index.docker.io/v1/" --docker-username="<>"  --docker-password="<>" --docker-email="<>"
```

b. Create secret .env as a volume mount inside a pod

```
kubectl get secret env --output=yaml --namespace=node-app
```

or

```apiVersion: v1
kind: Secret
metadata:
  name: env
  namespace: node-app
type: Opaque
data:
  .env: |
    UE9SVD0zMDAwCkFQSV9WRVJTSU9OPXYx
```

---

check logs -kubectl logs -f node-app-5bcf469dcb-777ld -n node-app
